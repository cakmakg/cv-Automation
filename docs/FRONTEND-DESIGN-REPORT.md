# Frontend Arayüz — Tasarım Raporu (career-ops Bewerbungs-Studio)

> Amaç: Mevcut CLI tabanlı Bewerbungs-Pipeline'ı (config → `generate-bewerbung.mjs` → PDF)
> bir web arayüzünün arkasına koymak. Tüm girdiler ve çıktılar arayüzden yönetilir,
> PDF'ler arayüzde önizlenir ve indirilir, ve sistem kullanıcıyı tanıyan bir
> **kişisel profil** üzerinden çalışır.
>
> Durum: TASARIM (henüz implementasyon yok). Hazırlık tarihi: 2026-06-02.

---

## 1. Hedef ve Kapsam

**Ne istiyoruz:**
1. Tüm iş başvurusu sürecini bir arayüzden yönetmek (girdi → üretim → çıktı).
2. Üretilen PDF'leri (CV, Anschreiben, Bewerbungspaket) arayüzde **önizlemek**.
3. Her PDF için bir **"İndir" butonu**.
4. CV ve Anschreiben'den **ayrı**, kullanıcının kişisel özelliklerini tutan bir **Profil** —
   sistem bu profili okuyarak başvuruları kişiselleştirir ("sistem beni tanımalı").

**Önemli ilke:** Arayüz mevcut dosya yapısının ÜZERİNE bir katmandır. Yani
`companies/*.mjs`, `output/*.pdf`, `bewerbung.md`, `bewerbung-marketing.md`,
`data/applications.md` aynı kalır — CLI ve arayüz aynı dosyalarla çalışır. Böylece
hiçbir şey kırılmaz, ikisi paralel kullanılabilir.

---

## 2. Kullanıcı ve Kullanım

- **Tek kullanıcı**: Gökhan (kendi makinesinde, local çalışan bir araç).
- Auth gerekmiyor (local). İleride deploy edilirse basit şifre koruması eklenebilir.
- Tipik akış: "Yeni bir ilan buldum → URL'i yapıştır → profil/rol seç → blokları gözden
  geçir → PDF üret → önizle → indir → tracker'a kaydet."

---

## 3. Bilgi Mimarisi (Sayfalar)

```
┌─ Dashboard            Genel bakış, hızlı eylemler, son başvurular, pipeline istatistikleri
├─ Profil               Kişisel çekirdek + Tech-Profil + Marketing-Profil + Proje kütüphanesi + Skill-Katalog + Stil-kuralları
├─ Yeni Bewerbung       Sihirbaz: İlan girişi → Profil/Rol → Blok seçimi → Önizleme → Üret/İndir
├─ Bewerbungen          Tüm başvurular (tracker), durum, skor, PDF linkleri, arama/filtre
└─ Ayarlar             Dil, varsayılanlar, yollar, foto/imza dosyaları
```

İki ana iş ekranı: **Profil** (sistem seni tanır) ve **Yeni Bewerbung** (üretim).

---

## 4. Profil Konsepti — "Sistem beni tanımalı" (en önemli kısım)

Bu, CV ve Anschreiben'den **ayrı** bir veri deposudur. Şu an bu bilgiler dağınık:
auto-memory dosyaları, `config/profile.yml`, `bewerbung.md` / `bewerbung-marketing.md`
içindeki Skill-Kataloglar. Arayüz bunları **tek bir profil deposunda** toplar ve üretim
buradan beslenir.

### 4.1 Profil yapısı (3 katman)

```
Profil
├─ KİŞİSEL ÇEKİRDEK (her başvuruda ortak)
│   ├─ Kimlik: ad, adres, telefon, e-mail, LinkedIn/GitHub/Portfolio
│   ├─ Diller: Almanca (fließend), İngilizce (gut), İspanyolca, Türkçe
│   ├─ Hikaye / arka plan: Tourismus → Café/Catering Selbstständigkeit → Umschulung
│   ├─ Soft Skills / kişisel özellikler: sorumluluk, iletişim, hızlı öğrenme, stres dayanımı
│   ├─ Standort/çalışma tercihi: Bonn, remote ok, deutschlandweit
│   └─ Stil-kuralları (üretimi yönetir):
│        • Anschreiben'de foto YOK, CV'de foto VAR
│        • Doğal yazım, AI-detection-proof, kein Bold
│        • Header minimal (isim/adres/tel/email)
│        • CV her zaman 1 sayfa
│        • Recipient = resmi firma adresi, Anrede mit Nachname
│
├─ ROL PROFİLLERİ (birbirinden bağımsız — KARIŞMAZ)
│   ├─ TECH-Profil    → kaynak: bewerbung.md
│   │     roller: Fullstack / Software / AI / AI-Automation / Agentic Consultant
│   │     tagline, kompetenzen, skill-katalog, CV-varyantı
│   └─ MARKETING-Profil → kaynak: bewerbung-marketing.md
│         roller: Online/Performance · Content/Social · GEO-AEO
│         tagline, kompetenzen, skill-katalog, CV-varyantı
│
└─ PROJE KÜTÜPHANESİ (yeniden kullanılabilir bloklar)
    ├─ AI Orchestra            (Tech, AI)
    ├─ Autonomous SecOps       (Tech, Security)
    ├─ Otonom-Travelagency     (Tech, Travel)
    ├─ werbung-otomation       (Tech + Marketing)
    ├─ AI-Marketing-System     (Marketing — agentic, tüm süreçler)
    └─ Freelance Supermarkt    (Marketing — FB/Google Ads, Prospekt, CorelDRAW/Photoshop)
        her proje: başlık, stack, kısa açıklama, hangi role/profile uygun (etiketler)
```

### 4.2 Profil veri modeli (örnek JSON — `data/profile.json`)

```jsonc
{
  "identity": {
    "name": "Gökhan Cakmak",
    "address": "53121 Bonn",
    "phone": "+49 163 9734475",
    "email": "gokhan.cakmak@web.de",
    "links": { "linkedin": "...", "github": "...", "portfolio": "..." }
  },
  "languages": ["Deutsch (fließend)", "Englisch (gut)", "Spanisch (gut)", "Türkisch (Muttersprache)"],
  "story": "Tourismus → eigenes Café/Catering in Bonn → Umschulung Fachinformatiker + Fullstack",
  "softSkills": ["Verantwortung", "Kommunikation", "schnelles Einarbeiten", "Belastbarkeit"],
  "preferences": { "location": "Bonn", "remote": true, "scope": ["Tech", "Marketing"] },
  "styleRules": {
    "anschreibenPhoto": false, "cvPhoto": true, "noBold": true,
    "naturalStyle": true, "cvOnePage": true, "minimalHeader": true
  },
  "roleProfiles": {
    "tech": { "source": "bewerbung.md", "roles": ["Fullstack", "Software", "AI", "AI-Automation", "Consultant"] },
    "marketing": { "source": "bewerbung-marketing.md", "roles": ["Online/Performance", "Content/Social", "GEO-AEO"] }
  },
  "projects": [
    { "id": "ai-marketing-system", "profiles": ["marketing"], "title": "AI-Marketing-System",
      "stack": "Agentic AI · LangGraph · Claude · SEO/GEO/AEO",
      "desc": "Agentisches System für komplette Marketingprozesse: Website, Analyse, SEO/GEO/AEO." }
    // ... diğer projeler
  ]
}
```

> Not: Bu JSON, mevcut auto-memory + `bewerbung*.md` + `config/profile.yml` ile
> senkron tutulur. Arayüzdeki "Profil" sayfası bu dosyayı düzenler.

---

## 5. Veri Akışı (UI → mevcut pipeline)

```
[Arayüz: İlan URL/JD]
        │  POST /api/job/fetch
        ▼
[JD Parser]  (curl + JSON-LD / metin çıkarımı — şu an manuel yaptığımız işlem)
        │   → firma adı, rol, adres, JD metni
        ▼
[Arayüz: Profil/Rol seç + Bloklar]
        │   profile.json + bewerbung(-marketing).md bloklarından öneri
        ▼
[Config Üretici]  → companies/{slug}.mjs yazar  (POST /api/config/{slug})
        │
        ▼
[generate-bewerbung.mjs]  (spawn) → output/cv|anschreiben|bewerbungspaket-{slug}-{date}.pdf
        │
        ▼
[Arayüz: PDF Önizleme + İndir]   ← GET /api/pdf/{dosya}
        │
        ▼
[Tracker]  → data/applications.md (TSV/merge)   (POST /api/applications)
```

Anahtar nokta: arayüz config'i üretir, **asıl PDF üretimi yine `generate-bewerbung.mjs`**
ile yapılır. Yani mevcut, çalışan motor değişmez.

---

## 6. Ekran Ekran UI/UX

### 6.1 Dashboard

```
┌──────────────────────────────────────────────────────────────┐
│  Bewerbungs-Studio                              [+ Yeni Bewerbung] │
├──────────────────────────────────────────────────────────────┤
│  Pipeline:  12 Evaluated · 5 Applied · 2 Interview · 1 Offer     │
│                                                                  │
│  Son Başvurular                                                  │
│  ┌────────────┬──────────────────────┬────────┬──────────────┐ │
│  │ Firma      │ Rol                  │ Durum  │              │ │
│  ├────────────┼──────────────────────┼────────┼──────────────┤ │
│  │ YES Invest │ Junior Marketing Mgr │ Applied│ [PDF] [Aç]   │ │
│  │ Manage Now │ Online-Marketing Mgr │ Eval.  │ [PDF] [Aç]   │ │
│  └────────────┴──────────────────────┴────────┴──────────────┘ │
│  Hızlı: [Profil düzenle]  [Tracker]  [Scan]                      │
└──────────────────────────────────────────────────────────────┘
```

### 6.2 Yeni Bewerbung — Sihirbaz (5 adım)

```
[1 İlan] ─ [2 Profil/Rol] ─ [3 Bloklar] ─ [4 Önizleme] ─ [5 Üret/İndir]

Adım 1 — İlan girişi
┌───────────────────────────────────────────────┐
│  İlan URL'i:  [https://...            ] [Getir] │
│  veya JD metnini yapıştır:                      │
│  ┌─────────────────────────────────────────┐   │
│  │ (Aufgaben, Anforderungen ...)            │   │
│  └─────────────────────────────────────────┘   │
│  Otomatik çıkarılan:                            │
│   Firma: [Manage Now GmbH        ]              │
│   Rol:   [(Junior) Online-Marketing Manager]    │
│   Adres: [Gabrielenstr. 9, 80636 München ]      │
└───────────────────────────────────────────────┘

Adım 2 — Profil & Rol seçimi
┌───────────────────────────────────────────────┐
│  Profil:   ( ) Tech     (•) Marketing           │
│  Rol-varyantı: [Online/Performance ▾]           │
│  Dil:      (•) DE   ( ) EN                       │
│  → Sistem profile.json + bewerbung-marketing.md │
│    üzerinden CV-varyantı ve blokları önerir.    │
└───────────────────────────────────────────────┘

Adım 3 — Blok editörü (CV + Anschreiben)
┌───────────────────────────────────────────────┐
│  CV  [Tagline][Kompetenzen][Projekte][Skills]   │
│  Anschreiben (sürüklenebilir bloklar):          │
│   [✓ Einleitung]  [✓ Fachkompetenz]             │
│   [✓ Showcase]    [✓ Value Prop]  [✓ Persön.]   │
│   her blok düzenlenebilir metin alanı           │
│  Uyarılar: ⚠ CV 1 sayfayı aşıyor / ✓ tam 1 sayfa│
└───────────────────────────────────────────────┘
```

### 6.3 Önizleme + İndir (split view — kalbi burası)

```
┌────────────────────────────┬─────────────────────────────┐
│  Düzenle (form)            │   Canlı PDF Önizleme          │
│                            │   ┌─────────────────────────┐ │
│  [CV] [Anschreiben] [Paket]│   │                         │ │
│                            │   │   (PDF.js / iframe)     │ │
│  Anrede: [Sehr geehrte..]  │   │   sekmeye göre CV /     │ │
│  Absatz 1: [............]  │   │   Anschreiben / Paket   │ │
│  Absatz 2: [............]  │   │                         │ │
│                            │   └─────────────────────────┘ │
│  [↻ Yeniden Üret]          │   Sayfa: 1/1  ✓ 1 Seite       │
│                            │   [⬇ CV] [⬇ Anschreiben]      │
│                            │   [⬇ Bewerbungspaket]         │
└────────────────────────────┴─────────────────────────────┘
```

- Sol: form alanları (config'in canlı düzenlenmesi).
- "Yeniden Üret" → `generate-bewerbung.mjs` çalışır, sağdaki önizleme yenilenir.
- Sağ üstte sekme: CV / Anschreiben / Bewerbungspaket.
- Alt: 3 indir butonu (her PDF için).
- Sayfa sayacı + "1 Seite" doğrulaması (CV-1-sayfa kuralı otomatik gösterilir).

### 6.4 Bewerbungen (Tracker)

`data/applications.md` parse edilir; tablo: Firma, Rol, Skor, Durum, PDF, Rapor,
Notlar. Satır içi durum değiştirme (Evaluated → Applied → Interview ...), arama, filtre.

### 6.5 Profil sayfası

Sekmeler: **Kişisel Çekirdek** · **Tech-Profil** · **Marketing-Profil** ·
**Proje Kütüphanesi** · **Skill-Katalog** · **Stil-Kuralları**. Hepsi `profile.json`
düzenler. Foto ve imza dosyası yükleme alanı da burada.

---

## 7. Önerilen Teknoloji Yığını

| Katman | Öneri | Gerekçe |
|--------|-------|---------|
| Frontend | **Next.js (App Router) + React + TypeScript** | Senin ana stack'in; tek projede frontend+backend |
| UI | **Tailwind CSS + shadcn/ui** | Hızlı, temiz, hazır bileşenler |
| Server state | **TanStack Query (React Query)** | API verisi cache/refetch |
| Backend | **Next.js API Routes** (veya ince Express) | Mevcut `.mjs` motorlarını spawn eder |
| PDF önizleme | **react-pdf (PDF.js)** veya `<iframe src=pdf>` | Tarayıcıda gömülü önizleme |
| Üretim motoru | **Mevcut `generate-bewerbung.mjs` + Playwright** | Değişmez, sadece çağrılır |
| Veri | **Dosya sistemi** (configs, output, profile.json, applications.md) | CLI ile uyum, sıfır migrasyon |
| JD çekme | **Node fetch/curl + JSON-LD parse** | Şu an manuel yaptığımız işlemin otomatiği |

> Alternatif: Vite + React (frontend) + ayrı Express (backend). Next.js'i tek-proje
> kolaylığı için öneriyorum, ama tercih senin.

### Mimari

```
┌─────────────── Next.js App ───────────────┐
│  app/ (React UI: Dashboard, Profil,        │
│         Yeni-Bewerbung, Bewerbungen)       │
│  app/api/ (route handlers)                 │
│     ├─ job/fetch     JD çek + parse        │
│     ├─ profile       GET/PUT profile.json  │
│     ├─ config/[slug] GET/PUT companies/*   │
│     ├─ generate      spawn generate-*.mjs  │
│     ├─ pdf/[file]    output/*.pdf serve    │
│     └─ applications  applications.md R/W    │
└────────────────────────────────────────────┘
        │ spawn / fs
        ▼
  Mevcut career-ops dosyaları (.mjs, .md, output/, data/)
```

---

## 8. API Uç Noktaları (taslak)

| Method | Endpoint | İşlev |
|--------|----------|-------|
| POST | `/api/job/fetch` | `{url}` → `{company, role, address, jdText}` |
| GET/PUT | `/api/profile` | profile.json oku/yaz |
| GET | `/api/config/:slug` | bir firma config'i (parse) |
| PUT | `/api/config/:slug` | `companies/:slug.mjs` yaz |
| POST | `/api/generate` | `{slug}` → `generate-bewerbung.mjs` çalıştır, PDF yolları döner |
| GET | `/api/pdf/:file` | PDF dosyasını serve et (önizleme + indirme) |
| GET | `/api/applications` | applications.md → JSON tablo |
| POST | `/api/applications` | tracker'a satır ekle/güncelle |

---

## 9. Faz Planı (Roadmap)

**Faz 1 — MVP (çekirdek değer):**
- Profil sayfası (profile.json düzenleme)
- Yeni Bewerbung: JD'yi **elle yapıştır** + Profil/Rol seç + blokları düzenle
- Üret butonu → `generate-bewerbung.mjs`
- PDF önizleme (3 sekme) + 3 indir butonu
- CV 1-sayfa otomatik doğrulama uyarısı

**Faz 2 — Otomasyon:**
- URL'den JD otomatik çekme + parse (firma/rol/adres otomatik dolar)
- Adres için Impressum otomatik bulma

**Faz 3 — Tracker entegrasyonu:**
- Bewerbungen sayfası, durum değiştirme, arama/filtre
- Dashboard istatistikleri

**Faz 4 — LLM-destekli (akıllı):**
- JD'ye göre otomatik blok/baustein önerisi (bewerbung*.md kataloğundan)
- "Bu paragrafı şirkete göre uyarla" butonu
- Fit-skoru ve eksik-yön uyarıları (ör. "Pardot eksik")

---

## 10. Açık Kararlar (senin onayın gerekiyor)

1. **Teknoloji:** Next.js tek-proje mi, yoksa Vite+Express ayrı mı? (Öneri: Next.js)
2. **Canlı önizleme:** Her düzenlemede otomatik mi yeniden üretilsin (debounce),
   yoksa sadece "Üret" butonuyla mı? (Öneri: buton — Playwright maliyeti var)
3. **Profil tek mi, kullanıcı-çoklu mu?** Şimdilik tek kullanıcı (Gökhan). (Öneri: tek)
4. **CV-varyant ilişkisi:** Marketing CV ayrı kalsın (mevcut karar), Tech CV cv.md.
   Arayüz ikisini de profile.json'dan mı yönetsin? (Öneri: evet)
5. **Deploy:** Sadece local mi, yoksa ileride Vercel/sunucu mu? (Playwright + dosya
   sistemi local'de en kolay; deploy edilirse output/ kalıcılığı düşünülmeli.)

---

## 11. Özet

Arayüz = mevcut CLI pipeline'ın üzerine **3 değer** ekleyen bir katman:
1. **Görsel üretim + önizleme + indirme** (PDF.js + indir butonları).
2. **Tek profilde "sistem seni tanır"** — kişisel çekirdek + Tech/Marketing profilleri +
   proje kütüphanesi + stil-kuralları (`profile.json`).
3. **Tüm akış arayüzden** — JD girişi → blok seçimi → üret → önizle → indir → tracker.

Motor (`generate-bewerbung.mjs`) ve dosya yapısı değişmez; arayüz onları sarmalar.
```
```
