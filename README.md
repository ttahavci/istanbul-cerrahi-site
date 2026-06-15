# Özel İstanbul Cerrahi Hastanesi Web Projesi

Bu repository, Özel İstanbul Cerrahi Hastanesi için hazırlanan kurumsal web sitesi ön yüz yapısını içerir. Proje; ana sayfa, kurumsal sayfalar, tıbbi birimler, hekim profilleri, sağlık rehberi, hasta rehberi ve iletişim/randevu alanlarını sayfa bazlı bir mimariyle düzenlemek amacıyla hazırlanmıştır.

Proje yapısı, tek sayfalık statik prototipten çok sayfalı ve yönetilebilir bir web sitesi iskeletine dönüştürülmüştür. Böylece her ana bölüm kendi klasörü altında ayrı HTML sayfalarıyla yönetilebilir hale getirilmiştir.

---

## Proje Kapsamı

Bu proje aşağıdaki ana bölümleri içerir:

- Ana sayfa
- Kurumsal sayfalar
- Tıbbi birimler ve branş detay sayfaları
- Hekimler listesi ve hekim profil sayfaları
- Sağlık rehberi arşivi ve yazı detay sayfaları
- Hasta rehberi ve hasta bilgilendirme sayfaları
- İletişim ve randevu talebi sayfası
- Ortak CSS ve JavaScript dosyaları
- Yönetim paneli entegrasyonu için başlangıç CMS yapısı

---

## Klasör Yapısı

```txt
/
├── index.html
├── kurumsal/
├── tibbi-birimler/
├── hekimler/
├── saglik-rehberi/
├── hasta-rehberi/
├── iletisim/
├── assets/
│   ├── css/
│   ├── js/
│   └── img/
├── data/
├── content/
├── admin/
└── README.md
```

### Ana klasörler

| Klasör / Dosya | Açıklama |
| --- | --- |
| `index.html` | Ana sayfa giriş yapısı |
| `kurumsal/` | Hakkımızda, vizyon-misyon, KVKK ve kalite yönetimi sayfaları |
| `tibbi-birimler/` | Tıbbi birimler listesi ve branş detay sayfaları |
| `hekimler/` | Hekim listesi ve hekim profil sayfaları |
| `saglik-rehberi/` | Sağlık rehberi arşivi ve blog/yazı detay sayfaları |
| `hasta-rehberi/` | Hasta rehberi ana sayfası ve alt bilgilendirme sayfaları |
| `iletisim/` | İletişim ve randevu talebi sayfası |
| `assets/css/` | Ortak stil dosyaları |
| `assets/js/` | Ortak JavaScript dosyaları |
| `assets/img/` | Logo, görsel ve medya dosyaları |
| `data/` | İçerik verileri için örnek JSON dosyaları |
| `content/` | CMS ile yönetilecek içerikler için örnek alan |
| `admin/` | Yönetim paneli entegrasyonu için başlangıç yapılandırması |

---

## Teknik Yapı

Proje mevcut haliyle statik HTML, CSS ve JavaScript yapısındadır. Sayfalar gerçek klasör yapısı ile ayrılmıştır ve GitHub üzerinden geliştirilmeye uygundur.

Kullanılan temel yapı:

- HTML5
- CSS3
- JavaScript
- Çok sayfalı statik site mimarisi
- GitHub üzerinde versiyon kontrolü
- CMS entegrasyonu için başlangıç `admin/` yapısı

---

## Lokal Çalıştırma

Projeyi doğrudan dosya olarak açmak yerine lokal bir sunucu üzerinden test etmek önerilir. Bu, sayfa geçişleri ve bağlantıların daha sağlıklı çalışmasını sağlar.

Terminal üzerinden proje klasörüne girip aşağıdaki komut çalıştırılabilir:

```bash
python3 -m http.server 8000
```

Ardından tarayıcıdan şu adres açılabilir:

```txt
http://localhost:8000
```

---

## GitHub Pages ile Yayınlama

GitHub Pages üzerinden ön izleme almak için:

1. Repository içinde `Settings` bölümüne girilir.
2. Sol menüden `Pages` sekmesi açılır.
3. `Deploy from a branch` seçilir.
4. Branch olarak `main`, klasör olarak `/root` seçilir.
5. Kaydedildikten sonra GitHub Pages yayın linki oluşturulur.

---

## Yönetim Paneli Notu

`admin/` klasörü, ileride duyuru, hekim, tıbbi birim, sağlık rehberi ve hasta rehberi içeriklerinin panel üzerinden yönetilebilmesi için başlangıç CMS yapısı olarak hazırlanmıştır.

Bu yapı canlıya alınmadan önce geliştirici tarafından aşağıdaki işlemler yapılmalıdır:

- GitHub repository bağlantısının tanımlanması
- CMS giriş/yetkilendirme ayarlarının yapılması
- İçerik dosyalarının CMS ile eşleştirilmesi
- Panelden girilen içeriklerin sayfalara otomatik yansımasının yapılandırılması
- Hosting ve build/deploy sürecinin netleştirilmesi

`admin/config.yml` dosyasındaki repository bilgileri örnek olarak bırakılmıştır. Canlı kullanım için ilgili GitHub repository bilgileriyle güncellenmelidir.

---

## İçerik Yönetimi İçin Planlanan Modüller

Yönetim paneli entegrasyonu tamamlandığında aşağıdaki içeriklerin panelden yönetilmesi hedeflenmektedir:

### Duyurular

- Başlık
- Kısa açıklama
- Duyuru tipi
- Yayın durumu
- Sıralama
- Yayın tarihi

### Hekimler

- Ad soyad
- Ünvan
- Branş
- Profil fotoğrafı
- Sesli CV / video alanı
- Özgeçmiş
- Eğitim bilgileri
- Uzmanlık alanları
- Yayınlar ve sertifikalar
- Aktif / pasif durumu

### Tıbbi Birimler

- Birim adı
- Kapak görseli
- Kısa açıklama
- Detaylı bilgilendirme metni
- Hizmet kapsamı
- Başvuru alanları
- İlgili hekimler

### Sağlık Rehberi

- Yazı başlığı
- Kategori
- Kapak görseli
- Özet metin
- Detaylı içerik
- SEO başlığı
- SEO açıklaması

### Hasta Rehberi

- Başlık
- Açıklama
- İçerik metni
- Görsel / ikon
- Sıralama
- Aktif / pasif durumu

---

## Geliştirme Notları

- Ortak tasarım dili `assets/css/` altında yönetilmelidir.
- Ortak JavaScript işlemleri `assets/js/main.js` içinde tutulmalıdır.
- Yeni sayfa eklendiğinde ilgili menü ve bağlantılar kontrol edilmelidir.
- Görseller mümkün olduğunca optimize edilmiş boyutlarda kullanılmalıdır.
- Mobil ve tablet kontrolleri lokal sunucu veya canlı ön izleme bağlantısı üzerinden yapılmalıdır.
- Doğrudan iOS Dosyalar uygulaması üzerinden test etmek bazı JavaScript ve yönlendirme davranışlarında yanıltıcı sonuç verebilir.

---

## Yayına Hazırlık Kontrol Listesi

Canlıya geçmeden önce aşağıdaki kontrollerin yapılması önerilir:

- Tüm menü bağlantıları kontrol edilmeli
- Hekim profil sayfaları test edilmeli
- Tıbbi birim detay sayfaları kontrol edilmeli
- Sağlık rehberi kategori ve detay sayfaları incelenmeli
- Hasta rehberi alt sayfaları test edilmeli
- Form alanları ve randevu yönlendirmeleri kontrol edilmeli
- Mobil ve tablet görünüm test edilmeli
- Görsellerin yüklenme hızı kontrol edilmeli
- SEO başlıkları ve açıklamaları düzenlenmeli
- KVKK, çerez politikası ve yasal metinler son haliyle doğrulanmalı

---

## Proje Durumu

Bu repository, kurumsal web sitesi için hazırlanmış çok sayfalı ön yüz başlangıç yapısını içerir. Nihai canlı kullanım öncesinde geliştirici tarafından backend, CMS, form işleyişi, kullanıcı yetkilendirme, SEO ve hosting yapılandırmalarının tamamlanması gerekir.
