#!/usr/bin/env python3
"""
İstanbul Cerrahi görsel senkronizasyon scripti.

Bu script kaynak sitedeki gerçek görselleri indirir ve projedeki placeholder
asset dosyalarının üzerine yazar. Harici paket gerektirmez.
"""
from __future__ import annotations

import json
import mimetypes
import os
import posixpath
import re
import sys
import time
from pathlib import Path
from typing import Iterable
from urllib.parse import urljoin, urlparse, unquote
from urllib.request import Request, urlopen

BASE = "https://istanbulcerrahi.com"
ROOT = Path(__file__).resolve().parents[1]
IMG_ROOT = ROOT / "assets" / "img"

USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36"
)

PAGES = {
    "doctors": [
        f"{BASE}/hekimler/",
    ],
    "tibbi-birimler": [
        f"{BASE}/tibbi-birimler/",
    ],
    "saglik-rehberi": [
        f"{BASE}/blog/",
        *[f"{BASE}/blog/page/{i}/" for i in range(2, 35)],
    ],
    "hasta-rehberi": [
        f"{BASE}/hasta-rehberi/",
        f"{BASE}/hasta-rehberi/hasta-odalari/",
        f"{BASE}/anlasmali-kurumlar/",
        f"{BASE}/banka-hesaplari/",
    ],
    "kurumsal": [
        f"{BASE}/kurumsal/",
    ],
    "site": [
        f"{BASE}/",
        f"{BASE}/iletisim/",
    ],
}

# Kaynak sitedeki bazı görseller mevcut tasarımda farklı isimle çağrıldığı için
# aynı görseli ayrıca bu hedef dosya adlarına da kopyalıyoruz.
ALIASES = {
    "assets/img/doctors/dr-toygar-toydemir.webp": "https://istanbulcerrahi.com/wp-content/uploads/2025/12/dr-toygar-toydemir.webp",
    "assets/img/doctors/op-dr-okkes-celil-gokcek.webp": "https://istanbulcerrahi.com/wp-content/uploads/2026/03/op-dr-okkes-celil-gokcek.webp",
    "assets/img/doctors/dr-suheda-cildir.webp": "https://istanbulcerrahi.com/wp-content/uploads/2025/12/dr-suheda-cildir.webp",
    "assets/img/doctors/dr-elif-gokcen-vatanoglu.webp": "https://istanbulcerrahi.com/wp-content/uploads/2025/11/dr-elif-gokcen-vatanoglu.webp",
    "assets/img/doctors/uzm-dr-ibrahim-cem.webp": "https://istanbulcerrahi.com/wp-content/uploads/2025/12/uzm-dr-ibrahim-cem.webp",
    "assets/img/doctors/dr-leyla-guliyeva-dahiliye.webp": "https://istanbulcerrahi.com/wp-content/uploads/2025/11/dr-leyla-guliyeva-dahiliye.webp",
    "assets/img/doctors/dr-ferhat-aslan-1.webp": "https://istanbulcerrahi.com/wp-content/uploads/2023/12/dr-ferhat-aslan-1.webp",
    "assets/img/tibbi-birimler/obezite.jpg": "https://istanbulcerrahi.com/wp-content/uploads/2023/11/obezite.jpg",
    "assets/img/tibbi-birimler/estetik.jpg": "https://istanbulcerrahi.com/wp-content/uploads/2023/11/estetik.jpg",
    "assets/img/tibbi-birimler/cocuk.jpg": "https://istanbulcerrahi.com/wp-content/uploads/2023/11/cocuk.jpg",
}

IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"}
SKIP_WORDS = (
    "flags/", "wpml", "logo", "icon", "phone", "whatsapp", "tel", "mail", "konum",
    "instagram", "facebook", "youtube", "favicon", "loader", "dummy", "placeholder",
)


def fetch_text(url: str) -> str:
    req = Request(url, headers={"User-Agent": USER_AGENT})
    with urlopen(req, timeout=35) as res:
        return res.read().decode("utf-8", errors="ignore")


def fetch_bytes(url: str) -> tuple[bytes, str]:
    req = Request(url, headers={"User-Agent": USER_AGENT, "Referer": BASE + "/"})
    with urlopen(req, timeout=60) as res:
        data = res.read()
        ctype = res.headers.get("content-type", "")
    return data, ctype


def extract_image_urls(html: str, page_url: str) -> list[str]:
    urls: set[str] = set()

    # src, data-src, data-lazy-src vb.
    for value in re.findall(r'(?:src|data-src|data-lazy-src|data-original)=["\']([^"\']+)["\']', html, flags=re.I):
        urls.add(urljoin(page_url, value.strip()))

    # srcset içindeki tüm URL'ler
    for srcset in re.findall(r'srcset=["\']([^"\']+)["\']', html, flags=re.I):
        for part in srcset.split(','):
            candidate = part.strip().split(' ')[0]
            if candidate:
                urls.add(urljoin(page_url, candidate))

    # CSS url(...)
    for value in re.findall(r'url\(([^)]+)\)', html, flags=re.I):
        value = value.strip('"\' ')
        if value:
            urls.add(urljoin(page_url, value))

    cleaned = []
    for url in urls:
        url = url.split('?')[0]
        lower = url.lower()
        if "wp-content/uploads" not in lower:
            continue
        if any(skip in lower for skip in SKIP_WORDS):
            continue
        ext = Path(urlparse(lower).path).suffix.lower()
        if ext not in IMAGE_EXTS:
            continue
        cleaned.append(url)
    return sorted(set(cleaned))


def filename_from_url(url: str) -> str:
    path = unquote(urlparse(url).path)
    name = posixpath.basename(path)
    # Türkçe/boşluk karakterlerini dosya adında korumak yerine basitçe normalize ediyoruz.
    name = name.replace(" ", "-")
    return name


def is_probably_image(data: bytes, content_type: str, url: str) -> bool:
    if content_type and "image" in content_type.lower():
        return True
    ext = Path(urlparse(url).path).suffix.lower()
    if ext in IMAGE_EXTS and len(data) > 100:
        return True
    return False


def write_file(target: Path, data: bytes) -> None:
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_bytes(data)


def main() -> int:
    IMG_ROOT.mkdir(parents=True, exist_ok=True)
    source_map: dict[str, dict[str, str]] = {}
    downloaded = 0
    errors: list[str] = []

    for category, pages in PAGES.items():
        category_dir = IMG_ROOT / category
        category_dir.mkdir(parents=True, exist_ok=True)
        for page in pages:
            print(f"Scanning {page}")
            try:
                html = fetch_text(page)
            except Exception as exc:
                errors.append(f"PAGE ERROR {page}: {exc}")
                continue

            for img_url in extract_image_urls(html, page):
                fname = filename_from_url(img_url)
                target = category_dir / fname
                try:
                    data, ctype = fetch_bytes(img_url)
                    if not is_probably_image(data, ctype, img_url):
                        continue
                    write_file(target, data)
                    source_map[str(target.relative_to(ROOT))] = {"source_url": img_url, "category": category}
                    downloaded += 1
                    print(f"  OK {target.relative_to(ROOT)}")
                    time.sleep(0.08)
                except Exception as exc:
                    errors.append(f"IMAGE ERROR {img_url}: {exc}")

    # Manuel eşleşmeler: tasarımda özel dosya adı kullanılan temel görseller.
    for rel_path, img_url in ALIASES.items():
        target = ROOT / rel_path
        try:
            data, ctype = fetch_bytes(img_url)
            if not is_probably_image(data, ctype, img_url):
                continue
            write_file(target, data)
            category = target.parent.name
            source_map[str(target.relative_to(ROOT))] = {"source_url": img_url, "category": category, "alias": "true"}
            downloaded += 1
            print(f"  ALIAS OK {target.relative_to(ROOT)}")
        except Exception as exc:
            errors.append(f"ALIAS ERROR {img_url}: {exc}")

    map_file = IMG_ROOT / "_source-map.json"
    existing = {}
    if map_file.exists():
        try:
            existing = json.loads(map_file.read_text(encoding="utf-8"))
        except Exception:
            existing = {}
    existing.update(source_map)
    map_file.write_text(json.dumps(existing, ensure_ascii=False, indent=2), encoding="utf-8")

    print(f"Downloaded/updated image files: {downloaded}")
    if errors:
        err_file = IMG_ROOT / "_download-errors.log"
        err_file.write_text("\n".join(errors), encoding="utf-8")
        print(f"Completed with {len(errors)} warnings. See {err_file.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
