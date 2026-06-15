# Görsel Klasör Yapısı

Bu pakette görseller `assets/img/` altında kategorilere ayrılmıştır. HTML, JS ve JSON içindeki eski dış bağlantılar yerel dosya yollarına çevrilmiştir.

## Klasörler

```txt
assets/img/
  logo/
  site/
  doctors/
  tibbi-birimler/
  saglik-rehberi/
  hasta-rehberi/
  kurumsal/
  _source-map.json
```

## Orijinal görselleri indirme

Orijinal kaynak URL eşleşmeleri `assets/img/_source-map.json` dosyasında tutulur. Geliştirici bilgisayarında internet erişimi varken proje kökünde şu komut çalıştırılabilir:

```bash
python3 scripts/download-images.py
```

veya:

```bash
bash scripts/download-images.sh
```

Bu komut, İstanbul Cerrahi sitesindeki kaynak görselleri aynı yerel dosya adlarıyla `assets/img/` altına indirir ve geçici görsellerin üzerine yazar.

## Yeni görsel ekleme standardı

- Doktor fotoğrafları: `assets/img/doctors/`
- Tıbbi birim görselleri: `assets/img/tibbi-birimler/`
- Sağlık rehberi kapakları: `assets/img/saglik-rehberi/`
- Hasta rehberi görselleri: `assets/img/hasta-rehberi/`
- Kurumsal görseller: `assets/img/kurumsal/`

Admin panel bağlandığında yeni medya yüklemeleri bu klasör mantığına göre ilerletilebilir.
