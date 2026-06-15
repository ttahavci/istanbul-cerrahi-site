
// ---- LOCAL ASSET PATH HELPER ----
function assetPath(path){
  const clean = String(path || '').replace(/^\/+/, '');
  const script = document.querySelector('script[src$="/istanbul-cerrahi-site/assets/js/main.js"], script[src*="/istanbul-cerrahi-site/assets/js/main.js"]');
  if(script && script.src){
    const base = script.src.replace(/assets\/js\/main\.js(?:\?.*)?$/, '');
    return new URL(clean, base).href;
  }
  return clean;
}


// ---- DOCTOR DATA ----
const doctors = {
  toygar: {
    name: 'Prof. Dr. Toygar TOYDEMİR',
    branch: 'Genel Cerrahi — Obezite & Reflü Cerrahisi',
    photo: assetPath('/istanbul-cerrahi-site/assets/img/doctors/dr-toygar-toydemir.webp'),
    videoTr: null, // YouTube embed URL buraya gelecek
    videoEn: null,
    introTr: 'Prof. Dr. Toygar TOYDEMİR, Özel İstanbul Cerrahi Hastanesi Genel Cerrahi Bölümü\'nde görev yapmaktadır. Obezite ve reflü cerrahisi alanlarında yoğun deneyime sahiptir. 2013 yılında New York Lenox Hill Hastanesi\'nde dünya eksperi Dr. Mitchell Roslin ile revizyonel bariatrik cerrahi üzerine çalışmış, ABD\'deki bariatrik cerrahi alanındaki yenilikleri yakından takip etmiştir. 2015\'te doçent, 2020\'de Genel Cerrahi Profesörü unvanını almıştır.',
    introEn: 'Prof. Dr. Toygar TOYDEMİR serves in the General Surgery Department of Özel İstanbul Cerrahi Hastanesi. He has extensive experience in obesity and reflux surgery. In 2013, he worked with world-renowned expert Dr. Mitchell Roslin at New York Lenox Hill Hospital on revisional bariatric surgery, closely following innovations in bariatric surgery in the USA. He received his associate professor title in 2015 and became a Professor of General Surgery in 2020.',
    cv: [
      {title:'Genel Cerrahi Profesörü',sub:'Özel İstanbul Cerrahi Hastanesi · 2020 – Günümüz'},
      {title:'Doçent, Genel Cerrahi',sub:'2015 – 2020'},
      {title:'Türk Cerrahi Derneği Yeterlik Belgesi',sub:'2010 yılında yazılı ve sözlü sınavları başarıyla tamamladı'},
      {title:'Asistan Doktor',sub:'Şişli Etfal Eğitim ve Araştırma Hastanesi'},
    ],
    egitim: [
      {title:'Tıp Fakültesi',sub:'Ege Üniversitesi Tıp Fakültesi'},
      {title:'Uzmanlık Eğitimi',sub:'Şişli Etfal Eğitim ve Araştırma Hastanesi'},
      {title:'Fellowship — Bariatrik Cerrahi',sub:'Lenox Hill Hospital, New York · 2013'},
    ],
    uzmanlik: ['Obezite Cerrahisi','Sleeve Gastrektomi','Gastrik Bypass','Revizyonel Bariatrik Cerrahi','Reflü Cerrahisi','Laparoskopik Cerrahi','Metabolik Cerrahi'],
    yayinlar: [
      {title:'Türk Cerrahi Derneği Yeterlik Belgesi',sub:'Yazılı ve Sözlü Sınav · 2010'},
      {title:'Revizyonel Bariatrik Cerrahi Çalışması',sub:'Lenox Hill Hospital, New York · 2013'},
    ]
  },
  elif: {
    name: 'Uzm. Dr. Elif Gökçen VATANOĞLU',
    branch: 'Kardiyoloji',
    photo: assetPath('/istanbul-cerrahi-site/assets/img/doctors/dr-elif-gokcen-vatanoglu.webp'),
    videoTr: null,
    videoEn: null,
    introTr: 'Uzm. Dr. Elif Gökçen VATANOĞLU, Özel İstanbul Cerrahi Hastanesi Kardiyoloji Bölümü\'nde görev yapmaktadır. İstanbul Üniversitesi Cerrahpaşa Tıp Fakültesi mezunu olan Dr. VATANOĞLU, Siyami Ersek Göğüs Kalp ve Damar Cerrahisi Eğitim ve Araştırma Hastanesi\'nde ihtisasını tamamlamıştır.',
    introEn: 'Dr. Elif Gökçen VATANOĞLU serves in the Cardiology Department at Özel İstanbul Cerrahi Hastanesi. A graduate of İstanbul University Cerrahpaşa Faculty of Medicine, she completed her specialization at Siyami Ersek Thoracic and Cardiovascular Surgery Training and Research Hospital.',
    cv: [
      {title:'Kardiyoloji Uzmanı',sub:'Özel İstanbul Cerrahi Hastanesi · Günümüz'},
      {title:'Tıpta Uzmanlık — Kardiyoloji',sub:'Siyami Ersek Göğüs Kalp ve Damar Cerrahisi Hastanesi'},
    ],
    egitim: [
      {title:'Tıp Doktoru (MD)',sub:'İstanbul Üniversitesi Cerrahpaşa Tıp Fakültesi · 2009 – 2015'},
      {title:'Tıpta Uzmanlık — Kardiyoloji',sub:'Siyami Ersek Göğüs Kalp ve Damar Cerrahisi Eğitim ve Araştırma Hastanesi'},
    ],
    uzmanlik: ['Ekokardiyografi','Kardiyolojik Muayene','Kalp Yetmezliği','Hipertansiyon Tedavisi','Ritim Bozuklukları','Koroner Arter Hastalıkları'],
    yayinlar: []
  },
  suheda: {
    name: 'Op. Dr. Şuheda ÇILDIR',
    branch: 'Estetik ve Plastik Cerrahi',
    photo: assetPath('/istanbul-cerrahi-site/assets/img/doctors/dr-suheda-cildir.webp'),
    videoTr: null,
    videoEn: null,
    introTr: 'Op. Dr. Şuheda ÇILDIR, Özel İstanbul Cerrahi Hastanesi Plastik, Rekonstrüktif ve Estetik Cerrahi Bölümü\'nde görev yapmaktadır. Sağlık Bilimleri Üniversitesi Kartal Dr. Lütfi Kırdar Şehir Hastanesi\'nde uzmanlık eğitimini tamamlamıştır.',
    introEn: 'Op. Dr. Şuheda ÇILDIR serves in the Plastic, Reconstructive and Aesthetic Surgery Department at Özel İstanbul Cerrahi Hastanesi. She completed her specialization training at Kartal Dr. Lütfi Kırdar City Hospital, University of Health Sciences.',
    cv: [
      {title:'Estetik ve Plastik Cerrahi Uzmanı',sub:'Özel İstanbul Cerrahi Hastanesi · Günümüz'},
      {title:'Tıpta Uzmanlık — Plastik Cerrahi',sub:'Sağlık Bilimleri Ünv. Kartal Dr. Lütfi Kırdar Şehir Hastanesi · 2018–2023'},
    ],
    egitim: [
      {title:'Tıpta Uzmanlık — Plastik Rekonstrüktif ve Estetik Cerrahi',sub:'Sağlık Bilimleri Üniversitesi Kartal Dr. Lütfi Kırdar Şehir Hastanesi · 2018–2023'},
    ],
    uzmanlik: ['Rinoplasti','Meme Estetiği','Liposuction','Yüz Germe','Göz Kapağı Estetiği','Rekonstrüktif Cerrahi','Dolgu & Botoks'],
    yayinlar: []
  },
  ibrahim: {
    name: 'Uzm. Dr. İbrahim Cem HEKİMOĞLU',
    branch: 'Dermatoloji',
    photo: assetPath('/istanbul-cerrahi-site/assets/img/doctors/uzm-dr-ibrahim-cem.webp'),
    videoTr: null,
    videoEn: null,
    introTr: 'Uzm. Dr. İbrahim Cem HEKİMOĞLU, Özel İstanbul Cerrahi Hastanesi Dermatoloji Bölümü\'nde görev yapmaktadır. Cilt hastalıklarının tanı ve tedavisinde geniş deneyime sahip olan Dr. HEKİMOĞLU, medikal ve estetik dermatoloji alanlarında hizmet vermektedir.',
    introEn: 'Dr. İbrahim Cem HEKİMOĞLU serves in the Dermatology Department at Özel İstanbul Cerrahi Hastanesi. He has extensive experience in the diagnosis and treatment of skin diseases, providing services in both medical and aesthetic dermatology.',
    cv: [
      {title:'Dermatoloji Uzmanı',sub:'Özel İstanbul Cerrahi Hastanesi · Günümüz'},
    ],
    egitim: [
      {title:'Tıpta Uzmanlık — Dermatoloji',sub:'İstanbul'},
    ],
    uzmanlik: ['Akne Tedavisi','Egzama','Sedef Hastalığı','Saç Dökülmesi','Medikal Dermatoloji','Estetik Dermatoloji','Lazer Uygulamaları','Cilt Kanseri Taraması'],
    yayinlar: []
  }
,
  okkes: {
    name: 'Op. Dr. Ökkeş Celil GÖKÇEK',
    branch: 'Beyin ve Sinir Cerrahisi',
    photo: assetPath('/istanbul-cerrahi-site/assets/img/doctors/op-dr-okkes-celil-gokcek.webp'),
    videoTr: null,
    videoEn: null,
    introTr: 'Op. Dr. Ökkeş Celil GÖKÇEK, Özel İstanbul Cerrahi Hastanesi Beyin ve Sinir Cerrahisi bölümünde görev yapmaktadır. Beyin, omurga ve sinir sistemi hastalıklarının tanı, tedavi ve cerrahi planlama süreçlerinde hasta odaklı yaklaşım sunar.',
    introEn: 'Op. Dr. Ökkeş Celil GÖKÇEK serves in the Neurosurgery Department at Özel İstanbul Cerrahi Hastanesi. He provides patient-centered evaluation and surgical planning for brain, spine and nervous system conditions.',
    cv: [{title:'Beyin ve Sinir Cerrahisi Uzmanı',sub:'Özel İstanbul Cerrahi Hastanesi · Günümüz'}],
    egitim: [{title:'Tıpta Uzmanlık — Beyin ve Sinir Cerrahisi',sub:'Türkiye'}],
    uzmanlik: ['Beyin ve Sinir Cerrahisi','Omurga Hastalıkları','Bel ve Boyun Fıtığı','Sinir Sıkışmaları','Cerrahi Değerlendirme'],
    yayinlar: []
  },
  leyla: {
    name: 'Uzm. Dr. Leyla GULİYEVA',
    branch: 'İç Hastalıkları',
    photo: assetPath('/istanbul-cerrahi-site/assets/img/doctors/dr-leyla-guliyeva-dahiliye.webp'),
    videoTr: null,
    videoEn: null,
    introTr: 'Uzm. Dr. Leyla GULİYEVA, Özel İstanbul Cerrahi Hastanesi İç Hastalıkları bölümünde görev yapmaktadır. Dahili hastalıkların tanı, takip ve yönlendirme süreçlerinde bütüncül değerlendirme yaklaşımıyla hizmet sunar.',
    introEn: 'Dr. Leyla GULİYEVA serves in the Internal Medicine Department at Özel İstanbul Cerrahi Hastanesi, providing holistic evaluation for diagnosis, follow-up and treatment planning.',
    cv: [{title:'İç Hastalıkları Uzmanı',sub:'Özel İstanbul Cerrahi Hastanesi · Günümüz'}],
    egitim: [{title:'Tıpta Uzmanlık — İç Hastalıkları',sub:'Türkiye'}],
    uzmanlik: ['Dahiliye','Kronik Hastalık Takibi','Metabolik Değerlendirme','Check-up','Tetkik ve Tanı Planlama'],
    yayinlar: []
  },
  ferhat: {
    name: 'Dr. Ferhat ASLAN',
    branch: 'Acil Servis',
    photo: assetPath('/istanbul-cerrahi-site/assets/img/doctors/dr-ferhat-aslan-1.webp'),
    videoTr: null,
    videoEn: null,
    introTr: 'Dr. Ferhat ASLAN, Özel İstanbul Cerrahi Hastanesi Acil Servis bölümünde görev yapmaktadır. Acil başvuruların ilk değerlendirme, stabilizasyon ve ilgili branşa yönlendirme süreçlerinde görev alır.',
    introEn: 'Dr. Ferhat ASLAN serves in the Emergency Department at Özel İstanbul Cerrahi Hastanesi, supporting initial evaluation, stabilization and referral processes.',
    cv: [{title:'Acil Servis Hekimi',sub:'Özel İstanbul Cerrahi Hastanesi · Günümüz'}],
    egitim: [{title:'Tıp Eğitimi',sub:'Türkiye'}],
    uzmanlik: ['Acil Servis','İlk Değerlendirme','Triyaj','Hasta Stabilizasyonu','Branş Yönlendirmesi'],
    yayinlar: []
  }

};

let currentDoc = null;
let currentLang = 'tr';

function openDoctor(key) {
  const d = doctors[key];
  if(!d){ console.warn('Doctor profile not found:', key); return; }
  currentDoc = key;
  currentLang = 'tr';

  // Modal ana sayfa içinde gizli kalmasın diye body altına taşınır
  const modal = document.getElementById('docModal');
  if(modal && modal.parentElement !== document.body){ document.body.appendChild(modal); }

  // Set header
  document.getElementById('modalDocPhoto').src = d.photo;
  document.getElementById('modalDocPhoto').alt = d.name;
  document.getElementById('modalDocName').textContent = d.name;
  document.getElementById('modalDocBranch').textContent = d.branch;
  document.getElementById('apptCtaName').textContent = d.name + ' ile Randevu Alın';

  // Video
  document.getElementById('vidCaptionName').textContent = d.name;
  document.getElementById('vidCaptionBranch').textContent = d.branch;
  document.getElementById('vidThumb').src = d.photo;
  document.getElementById('videoFrame').style.display = 'none';
  document.getElementById('playBtn').style.display = 'flex';

  // Intro
  document.getElementById('introText').textContent = d.introTr;

  // Lang buttons reset
  document.querySelectorAll('.lang-btn').forEach((b,i)=>{b.classList.toggle('active',i===0)});

  // Tabs
  buildTabs(d);
  document.querySelectorAll('.tab-btn').forEach((b,i)=>b.classList.toggle('on',i===0));
  document.querySelectorAll('.tab-pane').forEach((p,i)=>p.classList.toggle('on',i===0));

  document.getElementById('docModal')?.classList.add('open');
  document.body.style.overflow='hidden';
}

function buildTabs(d) {
  // CV
  document.getElementById('tp-cv').innerHTML = d.cv.map(e=>`
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-body"><strong>${e.title}</strong><span>${e.sub}</span></div></div>
  `).join('') || '<p style="color:var(--muted);font-size:13px">Bilgi güncellenmektedir.</p>';

  // Eğitim
  document.getElementById('tp-egitim').innerHTML = d.egitim.map(e=>`
    <div class="tl-item"><div class="tl-dot"></div><div class="tl-body"><strong>${e.title}</strong><span>${e.sub}</span></div></div>
  `).join('') || '<p style="color:var(--muted);font-size:13px">Bilgi güncellenmektedir.</p>';

  // Uzmanlık
  document.getElementById('tp-uzmanlik').innerHTML = `<div class="tags-wrap">${d.uzmanlik.map(t=>`<span class="tag-pill">${t}</span>`).join('')}</div>`;

  // Yayınlar
  const pubs = d.yayinlar.length
    ? d.yayinlar.map(p=>`<div class="pub-item"><strong>${p.title}</strong><span>${p.sub}</span></div>`).join('')
    : '<p style="color:var(--muted);font-size:13px;font-style:italic">Akademik yayınlar güncellenmektedir.</p>';
  document.getElementById('tp-yayinlar').innerHTML = pubs;
}

function playVideo() {
  const d = doctors[currentDoc];
  const url = currentLang==='tr' ? d.videoTr : d.videoEn;
  const frame = document.getElementById('videoFrame');
  const play = document.getElementById('playBtn');
  const caption = document.querySelector('#videoWrap .vid-caption span');
  if (url) {
    frame.src = url + '?autoplay=1';
    frame.style.display='block';
    play.style.display='none';
  } else {
    if(caption){
      const old = caption.textContent;
      caption.textContent = 'Tanıtım videosu yakında eklenecektir.';
      setTimeout(()=>{ if(caption) caption.textContent = old; }, 2400);
    }
  }
}

function switchLang(lang, btn) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const d = doctors[currentDoc];
  document.getElementById('introText').textContent = lang==='tr' ? d.introTr : d.introEn;
  // Reset video
  const wrap = document.getElementById('videoWrap');
  const url = lang==='tr' ? d.videoTr : d.videoEn;
  document.getElementById('videoFrame').style.display='none';
  document.getElementById('videoFrame').src='';
  document.getElementById('playBtn').style.display='flex';
}

function switchTab(id, btn) {
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('on'));
  document.querySelectorAll('.tab-pane').forEach(p=>p.classList.remove('on'));
  btn.classList.add('on');
  document.getElementById('tp-'+id).classList.add('on');
}

function closeDocModal() {
  document.getElementById('docModal')?.classList.remove('open');
  document.body.style.overflow='';
  document.getElementById('videoFrame').src='';
}
function closeModal(e) {
  if(e.target===document.getElementById('docModal')) closeDocModal();
}

// FAQ
function toggleFaq(el) {
  const item = el.parentElement;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i=>i.classList.remove('open'));
  if(!isOpen) item.classList.add('open');
}

// Form
function submitForm(btn){
  btn.textContent='Gönderiliyor...';btn.disabled=true;
  setTimeout(()=>{btn.textContent='✓ Talebiniz Alındı — En Kısa Sürede Arayacağız';btn.style.background='#1B7B55';},1200);
}

// Scroll animations
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('vis')}),{threshold:.08});
document.querySelectorAll('.fu').forEach(el=>obs.observe(el));

// Navbar shadow on scroll
window.addEventListener('scroll',()=>{
  document.getElementById('navbar').style.boxShadow=window.scrollY>60?'0 4px 28px rgba(28,47,93,.1)':'none';
});

// Hero premium announcement slider
(function(){
  const slides=[...document.querySelectorAll('.hero-info-slide')];
  const dots=[...document.querySelectorAll('.hero-slider-dots button')];
  const prev=document.querySelector('[data-hero-slide-prev]');
  const next=document.querySelector('[data-hero-slide-next]');
  if(!slides.length) return;
  let i=0;
  let timer=null;
  function show(n){
    i=(n+slides.length)%slides.length;
    slides.forEach((s,idx)=>s.classList.toggle('active',idx===i));
    dots.forEach((d,idx)=>d.classList.toggle('active',idx===i));
  }
  function restart(){
    if(timer) clearInterval(timer);
    timer=setInterval(()=>show(i+1),6200);
  }
  dots.forEach((d,idx)=>d.addEventListener('click',()=>{show(idx);restart();}));
  if(prev) prev.addEventListener('click',()=>{show(i-1);restart();});
  if(next) next.addEventListener('click',()=>{show(i+1);restart();});
  restart();
})();




(function(){
  let activeDoctorIndex = 0;
  let startX = 0;
  let lastX = 0;
  let dragging = false;
  let moved = false;
  const cards = () => Array.from(document.querySelectorAll('.wheel-doctor-card'));
  const stage = () => document.getElementById('doctorWheelStage');
  const dotsWrap = () => document.getElementById('doctorWheelDots');
  function mod(n,m){return ((n%m)+m)%m;}
  window.updateDoctorWheel = function(){
    const cs = cards();
    if(!cs.length) return;
    cs.forEach((card,i)=>{
      card.classList.remove('is-center','is-left','is-right','is-back','is-hidden');
      const diff = mod(i-activeDoctorIndex, cs.length);
      if(diff===0) card.classList.add('is-center');
      else if(diff===1) card.classList.add('is-right');
      else if(diff===cs.length-1) card.classList.add('is-left');
      else card.classList.add('is-back');
    });
    const dots = dotsWrap();
    if(dots){
      dots.innerHTML = cs.map((_,i)=>`<button type="button" aria-label="${i+1}. hekim" class="${i===activeDoctorIndex?'active':''}" onclick="goDoctorWheel(${i})"></button>`).join('');
    }
  }
  window.spinDoctorWheel = function(dir){
    const cs = cards();
    if(!cs.length) return;
    activeDoctorIndex = mod(activeDoctorIndex + dir, cs.length);
    window.updateDoctorWheel();
  }
  window.goDoctorWheel = function(i){ activeDoctorIndex=i; window.updateDoctorWheel(); }
  window.wheelCardClick = function(event, key){
    const cs = cards();
    const idx = cs.findIndex(c=>c.dataset.doc===key);
    if(idx !== activeDoctorIndex){
      event.preventDefault();
      activeDoctorIndex=idx;
      window.updateDoctorWheel();
      return;
    }
    if(typeof openDoctor === 'function') openDoctor(key);
  }
  function bind(){
    const st = stage();
    if(!st) return;
    // Doktor bölümü sadece oklar, noktalar ve yan kart tıklamasıyla değişir.
    // Sayfa scroll'u sırasında istemsiz dönmeyi engellemek için wheel/drag etkileşimi kapalı tutulur.
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', ()=>{bind(); updateDoctorWheel();}); else {bind(); updateDoctorWheel();}
})();



(function(){
  const tabTexts={
    kvkkKanunu:{t:'Kişisel Verilerin Korunması Kanunu',p:'6698 sayılı KVKK kapsamında kişisel veriler; hukuka ve dürüstlük kurallarına uygun, doğru ve güncel, belirli ve meşru amaçlarla, işlendikleri amaçla bağlantılı ve ölçülü şekilde işlenir. Nihai metin kurumun resmi hukuk onaylı dokümanlarıyla yayınlanmalıdır.'},
    hastaAydinlatma:{t:'Hasta Aydınlatma Metni',p:'Hastalarımızın kimlik, iletişim ve sağlık verileri; sağlık hizmetinin sunulması, randevu süreçlerinin yürütülmesi, kayıt işlemleri, yasal yükümlülükler ve hizmet kalitesinin artırılması amacıyla işlenebilir.'},
    basvuruFormu:{t:'İlgili Kişi Başvuru Formu',p:'Kişisel verilerine ilişkin bilgi talep etmek isteyen kişiler; erişim, düzeltme, silme, işleme amacını öğrenme ve ilgili mevzuatta belirtilen diğer hakları için kurumun resmi başvuru kanallarını kullanabilir.'},
    kvkPolitikasi:{t:'KVK Politikası ve İletişim Süreci',p:'KVK politikası; veri işleme amaçları, saklama süreleri, teknik ve idari güvenlik tedbirleri, üçüncü kişilerle paylaşım koşulları ve ilgili kişi başvuru süreçlerini kapsayan kurumsal çerçevedir.'}
  };
  function showCorpTab(key){
    document.querySelectorAll('[data-corp-tab]').forEach(btn=>btn.classList.toggle('active',btn.dataset.corpTab===key));
    document.querySelectorAll('[data-corp-panel]').forEach(panel=>panel.classList.toggle('active',panel.dataset.corpPanel===key));
    const shell=document.querySelector('.corporate-content-shell');
    if(shell && window.innerWidth<900) shell.scrollIntoView({behavior:'smooth',block:'start'});
  }
  document.addEventListener('click',function(e){
    const btn=e.target.closest('[data-corp-tab]');
    if(btn){ e.preventDefault(); showCorpTab(btn.dataset.corpTab); return; }
    const doc=e.target.closest('[data-corp-doc]');
    if(doc){
      e.preventDefault();
      const data=tabTexts[doc.dataset.corpDoc];
      const box=document.getElementById('kvkkLocalDetail');
      if(data && box){ box.innerHTML='<strong>'+data.t+'</strong><p>'+data.p+'</p>'; box.scrollIntoView({behavior:'smooth',block:'nearest'}); }
    }
  });
})();



(function(){
  function ready(fn){ if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',fn); else fn(); }
  function qsa(sel,root=document){ return Array.from(root.querySelectorAll(sel)); }

  ready(function(){
    // Theme toggle
    const themeBtn=document.getElementById('themeToggle');
    if(themeBtn){
      const saved=localStorage.getItem('ic-theme');
      if(saved==='dark') document.body.classList.add('dark-mode');
      function sync(){
        const dark=document.body.classList.contains('dark-mode');
        const ico=themeBtn.querySelector('.theme-toggle-icon');
        const txt=themeBtn.querySelector('.theme-toggle-text');
        if(ico) ico.textContent=dark?'☀️':'🌙';
        if(txt) txt.textContent=dark?'Açık Mod':'Koyu Mod';
      }
      sync();
      themeBtn.addEventListener('click',function(){
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('ic-theme',document.body.classList.contains('dark-mode')?'dark':'light');
        sync();
      });
    }

    // Mobile menu
    const nav=document.getElementById('navbar');
    if(nav){
      let toggle=document.getElementById('mobileMenuToggle');
      if(!toggle){
        toggle=document.createElement('button');
        toggle.id='mobileMenuToggle'; toggle.className='mobile-menu-toggle'; toggle.type='button'; toggle.setAttribute('aria-label','Menüyü aç/kapat'); toggle.innerHTML='<span></span>';
        const inner=nav.querySelector('.nav-inner'); if(inner) inner.appendChild(toggle);
      }
      let backdrop=document.querySelector('.mobile-menu-backdrop');
      if(!backdrop){ backdrop=document.createElement('div'); backdrop.className='mobile-menu-backdrop'; document.body.appendChild(backdrop); }
      function close(){ nav.classList.remove('nav-open'); document.body.classList.remove('mobile-menu-active'); toggle.setAttribute('aria-expanded','false'); }
      toggle.addEventListener('click',function(){ const open=!nav.classList.contains('nav-open'); nav.classList.toggle('nav-open',open); document.body.classList.toggle('mobile-menu-active',open); toggle.setAttribute('aria-expanded',open?'true':'false'); });
      backdrop.addEventListener('click',close);
      qsa('a',nav).forEach(a=>a.addEventListener('click',close));
    }

    // Corporate tabs
    function showCorp(key){
      if(!key) return;
      qsa('[data-corp-tab]').forEach(btn=>btn.classList.toggle('active',btn.dataset.corpTab===key));
      qsa('[data-corp-panel]').forEach(panel=>panel.classList.toggle('active',panel.dataset.corpPanel===key));
    }
    qsa('[data-corp-tab]').forEach(btn=>btn.addEventListener('click',function(e){e.preventDefault();showCorp(btn.dataset.corpTab);}));
    const corpActive=document.querySelector('[data-corp-tab].active'); if(corpActive) showCorp(corpActive.dataset.corpTab);

    // Local KVKK explainer cards
    const tabTexts={
      kvkkKanunu:{t:'Kişisel Verilerin Korunması Kanunu',p:'6698 sayılı KVKK kapsamında kişisel veriler; hukuka ve dürüstlük kurallarına uygun, belirli ve meşru amaçlarla, ölçülü şekilde işlenir.'},
      hastaAydinlatma:{t:'Hasta Aydınlatma Metni',p:'Hastalarımızın kimlik, iletişim ve sağlık verileri; sağlık hizmetinin sunulması, randevu süreçlerinin yürütülmesi ve yasal yükümlülükler kapsamında işlenebilir.'},
      basvuruFormu:{t:'İlgili Kişi Başvuru Formu',p:'Kişisel verilerine ilişkin bilgi talep etmek isteyen kişiler, kurumun resmi başvuru kanallarını kullanabilir.'},
      kvkPolitikasi:{t:'KVK Politikası ve İletişim Süreci',p:'KVK politikası; veri işleme amaçları, saklama süreleri ve ilgili kişi başvuru süreçlerini kapsayan kurumsal çerçevedir.'}
    };
    qsa('[data-corp-doc]').forEach(el=>el.addEventListener('click',function(e){
      e.preventDefault(); const data=tabTexts[el.dataset.corpDoc]; const box=document.getElementById('kvkkLocalDetail');
      if(data&&box){box.innerHTML='<strong>'+data.t+'</strong><p>'+data.p+'</p>'; box.scrollIntoView({behavior:'smooth',block:'nearest'});}
    }));

    // Medical unit active state
    const activeUnit=document.body.dataset.activeUnit;
    if(activeUnit){
      qsa('.unit-nav-btn').forEach(el=>el.classList.toggle('active', el.dataset.unit===activeUnit));
      qsa('.unit-detail-panel').forEach(el=>el.classList.toggle('active', el.dataset.unitPanel===activeUnit));
    }

    // Health guide category and active article
    function showArticle(slug){
      if(!slug) return;
      qsa('[data-blog-select]').forEach(el=>el.classList.toggle('active',el.dataset.blogSelect===slug));
      qsa('[data-article-panel]').forEach(el=>el.classList.toggle('active',el.dataset.articlePanel===slug));
    }
    const activeArticle=document.body.dataset.activeArticle;
    if(activeArticle) showArticle(activeArticle);
    qsa('[data-health-category]').forEach(btn=>btn.addEventListener('click',function(e){
      e.preventDefault(); const cat=btn.dataset.healthCategory||'all';
      qsa('[data-health-category]').forEach(b=>b.classList.toggle('active',(b.dataset.healthCategory||'all')===cat));
      qsa('.health-nav-btn[data-category], .guide-card[data-category]').forEach(item=>{
        const show=cat==='all'||item.dataset.category===cat;
        item.classList.toggle('filtered-hidden',!show);
      });
    }));

    // Patient guide active state
    function showPatient(slug){
      qsa('[data-patient-panel]').forEach(el=>el.classList.toggle('active',el.dataset.patientPanel===slug));
    }
    const activePatient=document.body.dataset.activePatient;
    if(activePatient) showPatient(activePatient);
    qsa('[data-patient-select]').forEach(el=>el.addEventListener('click',function(e){
      const slug=el.dataset.patientSelect;
      if(el.tagName.toLowerCase()==='a' && el.getAttribute('href') && !el.getAttribute('href').startsWith('#')) return;
      e.preventDefault(); showPatient(slug||'index');
    }));

    // Doctors directory filter
    function norm(v){return (v||'').toLocaleLowerCase('tr-TR').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ı/g,'i');}
    function filterDoctors(){
      const q=norm(document.getElementById('doctorSearchInput')?.value||'');
      const b=document.getElementById('doctorBranchSelect')?.value||'all';
      qsa('.doctor-directory-card').forEach(card=>{
        const name=norm(card.dataset.name||card.textContent);
        const branch=card.dataset.branch||'';
        const show=(!q||name.includes(q))&&(b==='all'||branch===b);
        card.style.display=show?'':'none';
      });
    }
    const ds=document.getElementById('doctorSearchInput'); const db=document.getElementById('doctorBranchSelect');
    if(ds) ds.addEventListener('input',filterDoctors); if(db) db.addEventListener('change',filterDoctors); filterDoctors();
  });
})();
