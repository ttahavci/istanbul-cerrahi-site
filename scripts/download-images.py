#!/usr/bin/env python3
"""Download original İstanbul Cerrahi media into assets/img.
Run from the project root after cloning the repository:
    python3 scripts/download-images.py
"""
from pathlib import Path
import json, urllib.request, urllib.error

ROOT = Path(__file__).resolve().parents[1]
MAP = ROOT / 'assets' / 'img' / '_source-map.json'
items = json.loads(MAP.read_text(encoding='utf-8'))
headers = {'User-Agent': 'Mozilla/5.0 İstanbul Cerrahi media fetcher'}

ok = fail = 0
for local_path, info in items.items():
    dest = ROOT / local_path
    dest.parent.mkdir(parents=True, exist_ok=True)
    url = info['source_url']
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=30) as r:
            data = r.read()
        if len(data) < 2000:
            raise RuntimeError('Downloaded file is too small')
        dest.write_bytes(data)
        print('OK  ', local_path)
        ok += 1
    except Exception as e:
        print('FAIL', local_path, '->', url, '|', e)
        fail += 1
print(f'Completed. OK: {ok}, FAILED: {fail}')
