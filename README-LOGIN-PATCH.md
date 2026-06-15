# Yönetim Paneli Login Patch

Bu patch, Özel İstanbul Cerrahi Hastanesi web projesi için yönetim paneli başlangıç dosyalarını ekler.

## Eklenen dosyalar

- `admin/login.html` — yönetim paneli giriş karşılama ekranı
- `admin/index.html` — Decap CMS / CMS entegrasyonu için başlangıç ekranı
- `admin/config.yml` — içerik koleksiyonları için başlangıç konfigürasyonu
- `admin/admin-login.css` — yalnızca admin giriş ekranı tasarımı

## Önemli not

Bu patch ana site dosyalarına, `assets/css/style.css`, `assets/js/main.js` veya `assets/img/` klasörüne müdahale etmez. Bu nedenle ana site tasarımını veya görselleri bozmaz.

Gerçek kullanıcı adı/şifre doğrulaması bu statik dosyaların içine yazılmamalıdır. Giriş altyapısı web geliştirici tarafından GitHub OAuth, Git Gateway, Decap CMS OAuth proxy veya özel backend üzerinden bağlanmalıdır.
