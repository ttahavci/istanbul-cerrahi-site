# Yönetim Paneli Login Patch

Bu patch, Özel İstanbul Cerrahi Hastanesi web projesi için yönetim paneli giriş ve CMS başlangıç yapısını ekler.

## Eklenen dosyalar

```txt
admin/index.html
admin/login.html
admin/config.yml
assets/css/admin-login.css
content/settings/site.yml
content/duyurular/.gitkeep
content/hekimler/.gitkeep
content/tibbi-birimler/.gitkeep
content/saglik-rehberi/.gitkeep
content/hasta-rehberi/.gitkeep
```

## Amaç

Panel üzerinden aşağıdaki alanların yönetilebilmesi hedeflenir:

- Duyurular
- Hekimler
- Tıbbi Birimler
- Sağlık Rehberi Yazıları
- Hasta Rehberi Sayfaları
- Site iletişim ve sosyal medya bilgileri

## Önemli güvenlik notu

Bu patch, kullanıcı adı ve şifreyi HTML/JS içine yazmaz. Statik bir sitede kullanıcı adı/şifreyi front-end dosyasına koymak güvenli değildir.

Giriş altyapısı web geliştirici tarafından aşağıdaki yöntemlerden biriyle bağlanmalıdır:

1. Decap CMS + GitHub OAuth Proxy
2. Decap CMS + Git Gateway
3. Özel backend paneli
4. WordPress / Laravel / Node.js gibi backend tabanlı panel

## GitHub Pages ile kullanım

GitHub Pages üzerinde `/admin/` sayfası açılır; ancak GitHub ile giriş yapabilmek için Decap CMS tarafında OAuth proxy gerekir.

`admin/config.yml` içinde şu alan web geliştirici tarafından güncellenmelidir:

```yml
backend:
  name: github
  repo: ttahavci/istanbul-cerrahi-site
  branch: main
  base_url: https://AUTH_BACKEND_DOMAIN
  auth_endpoint: auth
```

## Netlify / Git Gateway ile kullanım

Proje Netlify üzerinden yönetilecekse backend bloğu şu şekilde değiştirilebilir:

```yml
backend:
  name: git-gateway
  branch: main
```

Bu durumda hosting panelinde Identity/Git Gateway tarafı aktif edilmelidir.

## Kurulum

1. ZIP içeriğini proje kök dizinine kopyalayın.
2. Var olan `admin/config.yml` varsa kontrollü şekilde üzerine yazın.
3. Commit mesajı önerisi:

```txt
Yönetim paneli login patch eklendi
```

4. Push sonrası `/admin/` ve `/admin/login.html` adreslerini kontrol edin.
5. Web geliştirici seçilen auth altyapısına göre `admin/config.yml` dosyasını güncellemelidir.

## İçerik üretimi

Panel bağlandığında CMS, `content/` klasöründeki Markdown/YAML içerikleri yönetecek şekilde hazırlanmıştır. Bir sonraki teknik aşamada build sistemi bu içerikleri HTML sayfalarına veya statik site generator yapısına bağlamalıdır.
