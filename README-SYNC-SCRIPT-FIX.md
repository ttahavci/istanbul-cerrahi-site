# Sync Real Images Script Fix

Bu patch, GitHub Actions içinde `ValueError: too many values to unpack` hatasına sebep olan görsel URL ayrıştırma satırını düzeltir.

## Yükleme

1. Bu patch içindeki `scripts/sync-real-images.py` dosyasını mevcut repo içindeki `scripts/sync-real-images.py` dosyasının üzerine yazın.
2. Commit mesajı: `Görsel senkronizasyon script hatası düzeltildi`
3. Push edin.
4. Actions > Sync Real Images > Run workflow > main ile tekrar çalıştırın.
