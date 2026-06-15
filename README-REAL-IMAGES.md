# Gerçek Görsel Senkronizasyon Patch’i

Bu patch, projedeki geçici/placeholder görsellerin yerine İstanbul Cerrahi kaynak sitesindeki gerçek görselleri indirmek için hazırlanmıştır.

## Kullanım

1. Bu patch içindeki `.github/` ve `scripts/` klasörlerini repo köküne yükleyin.
2. Commit ve push yapın.
3. GitHub’da **Actions** sekmesine girin.
4. Sol tarafta **Sync Real Images** workflow’unu seçin.
5. **Run workflow** butonuna basın.
6. Workflow gerçek görselleri indirip `assets/img/` klasörüne commit edecektir.
7. GitHub Pages tekrar deploy olunca siteyi hard refresh ile kontrol edin.

## Klasör Mantığı

- `assets/img/doctors/` → Hekim görselleri
- `assets/img/tibbi-birimler/` → Tıbbi birim görselleri
- `assets/img/saglik-rehberi/` → Blog / sağlık rehberi görselleri
- `assets/img/hasta-rehberi/` → Hasta rehberi görselleri
- `assets/img/kurumsal/` → Kurumsal sayfa görselleri
- `assets/img/site/` → Genel site görselleri

## Not

İlk çalıştırmada çok sayıda görsel ekleneceği için GitHub Pages deploy birkaç dakika sürebilir.
