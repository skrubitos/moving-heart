# Kinesis Transport — Claude Notes

## Reference linkovi

1. Frontend Design: https://github.com/anthropics/skills/...
2. Superpowers: https://github.com/obra/superpowers
3. autoresearch by Karpathy: https://github.com/karpathy/autoresearch
4. Context7: https://github.com/upstash/context7
5. gstack by Garry Tan: https://github.com/garrytan/gstack
6. Task Master AI MCP: https://github.com/eyaltoledano/claud...
7. Playwright MCP: https://github.com/executeautomation/...
8. Tavily: https://github.com/tavily-ai/tavily-mcp
9. Codebase Memory MCP: https://github.com/DeusData/codebase-...
10. PDF Processing: https://github.com/anthropics/skills/...
11. XLSX: https://github.com/anthropics/skills/...
12. PPTX: https://github.com/anthropics/skills/...
13. Doc Co-Authoring: https://github.com/anthropics/skills/...
14. Canvas Design: https://github.com/anthropics/skills/...
15. Web Artifacts Builder: https://github.com/anthropics/skills/...
16. Marketing Skills by Corey Haines: https://github.com/coreyhaines31/mark...
17. Claude SEO: https://github.com/AgriciDaniel/claud...
18. Brand Guidelines: https://github.com/anthropics/skills/...
19. Deep Research Skill: https://github.com/199-biotechnologie...
20. GPT Researcher: https://github.com/assafelovic/gpt-re...
21. Obsidian Skills: https://github.com/kepano/obsidian-sk...
22. Remotion: https://github.com/remotion-dev/remotion
23. Context Optimization: https://github.com/muratcankoylan/age...
24. promptfoo: https://github.com/promptfoo/promptfoo
25. Skill Creator: https://github.com/anthropics/skills/...
26. n8n: https://github.com/n8n-io/n8n
27. Firecrawl: https://github.com/mendableai/firecrawl
28. Langflow: https://github.com/langflow-ai/langflow
29. claude-squad: https://github.com/smtg-ai/claude-squad
30. container-use by Dagger: https://github.com/dagger/container-use
31. Ghost OS: https://github.com/ghostwright/ghost-os
32. Awesome Claude Skills: https://github.com/travisvn/awesome-c...
32. Official Anthropic Skills Repo: https://github.com/anthropics/skills
33. SkillsMP: https://skillsmp.com
33. SkillHub: https://skillhub.club
33. MAGI Archive: https://tom-doerr.github.io/repo_posts/

---

## Poslovni podaci (jedinstveni izvor istine)

- Naziv: **Kinesis Transport d.o.o.**
- OIB: **73733814657**
- Adresa: **Put Brodarice 3, 21000 Split, Hrvatska**
- Telefon: **+385 97 675 4606**
- Email: **info@kinesistransport.hr**
- Radno vrijeme: Pon — Ned · 08:00 – 20:00
- Domena (planirano): https://kinesistransport.hr
- Primarno područje rada: Split i okolica (Solin, Kaštela, Trogir, Omiš)
- Jezici: hr (primarno), en (sekundarno, samo prijevod)
- Google Business Profile: u izradi (dodati URL kad se verificira)
- Društvene mreže: TBD (dodati Facebook/Instagram URL-ove kad postoje)

Sav ovaj sadržaj uvezen je u kod kroz `src/lib/contact.ts`. Kad se mijenja, mijenjati tamo i ovdje.

---

## SEO ključne riječi (top targeti)

Primarne (hr):
- selidbe Split
- kombi prijevoz Split
- dostava namještaja Split
- prijevoz Split
- selidbe Solin / Kaštela / Trogir / Omiš
- prijevoz paketa Split
- utovar i istovar Split
- transport Split

Sekundarne / long-tail:
- selidbe stanova Split, selidbe ureda Split, selidbe kuća Split
- jeftine selidbe Split, povoljan kombi prijevoz Split
- selidbe na Brač / Hvar / Vis / Šolta (otoci — niska konkurencija)
- selidbe Split – Zagreb (međugradska relacija)

---

## SEO plan — status implementacije

### ✅ Faza 0 — Tehnički temelj (DONE)

Što je implementirano u ovom commitu:

1. **`index.html`**
   - `lang="hr"` (prije `en`)
   - Novi title: "Selidbe Split i kombi prijevoz | Kinesis Transport"
   - Croatian meta description s telefonom
   - `meta keywords` (hr SEO mainstream)
   - `meta robots: index, follow, max-image-preview:large`
   - `geo.region`, `geo.placename`, `geo.position`, `ICBM` (Split koordinate)
   - `canonical` link
   - `hreflang` linkovi za hr / en / x-default
   - `theme-color #f97316`, `format-detection telephone=no`
   - Brendirani Open Graph + Twitter tagovi (uklonjeni `lovable.dev` placeholderi i `@Lovable` Twitter handle)
   - **JSON-LD `MovingCompany`** strukturirani podaci s: legalName, OIB (vatID/taxID), address (Put Brodarice 3), geo, areaServed (5 gradova), openingHours, hasOfferCatalog (5 usluga)
   - **JSON-LD `WebSite`** strukturirani podaci

2. **`react-helmet-async`** dodan kao dependency (v3.0.0)
   - `HelmetProvider` omotava cijelu app u `src/App.tsx`
   - Nova reusable komponenta **`src/components/Seo.tsx`** za per-route SEO (title/desc/canonical/OG/JSON-LD)
   - Implementirano u `src/pages/Index.tsx` (s `MovingCompany` JSON-LD-om)
   - Implementirano u `src/pages/NotFound.tsx` (s `noindex`)

3. **Slike**
   - `slike/kombi logo.jpeg` → `slike/kinesis-transport-logo.jpeg` (uklonjen razmak u nazivu)
   - `slike/kombi.jpeg` → `slike/kinesis-transport-kombi.jpeg`
   - Alt tekstovi obogaćeni ključnim riječima ("Kinesis Transport kombi za selidbe i prijevoz u Splitu")
   - Hero slika: `loading="eager"`, `decoding="async"`, `fetchPriority="high"`
   - Slika ispod fold-a (TrustSection): `loading="lazy"`, `decoding="async"`

4. **`public/sitemap.xml`** kreiran (trenutno samo `/`, raste s novim stranicama)

5. **`public/robots.txt`** dodana `Sitemap:` direktiva i `Host:`

6. **`public/site.webmanifest`** dodan (PWA + theme-color)

7. **`src/lib/contact.ts`** proširen s: EMAIL, COMPANY_LEGAL_NAME, COMPANY_OIB, ADDRESS_*, SITE_URL — single source of truth

8. **Footer**
   - Stvarna adresa "Put Brodarice 3, 21000 Split" umjesto generičkog "Split, Hrvatska"
   - OIB prikazan na footeru (potrebno za HR poslovne propise + lokalni SEO signal)
   - Korišten semantički HTML element `<address>`

9. **i18n**
   - hr/en `footer.address` i `footer.oibLabel` ključevi dodani

### ⏳ Faza 0b — Pre-rendering ✅ DONE

Implementirano u commit-u koji prati ovaj dokument:

- `vite-react-ssg` ^0.9.1-beta.1 dodan kao devDependency
- `package.json`: `"build"` skripta sad koristi `vite-react-ssg build`; `"build:csr"` ostaje kao SPA fallback
- Refaktor entry pointa:
  - `src/App.tsx` i `src/App.css` uklonjeni (vite-react-ssg ne koristi `<App>` pattern)
  - Kreiran `src/Layout.tsx` — root layout s `QueryClientProvider`, `TooltipProvider`, `Toaster`, `Sonner`, `ScrollManager` i `<Outlet/>`. **`HelmetProvider` je uklonjen** jer ga vite-react-ssg interno omotava.
  - Kreiran `src/routes.tsx` — `RouteRecord[]` izvoz s `Layout` parent + child rute za sve stranice (Index, /selidbe…, /selidbe-split…, /o-nama, /kontakt, /faq, /cjenik, /uvjeti-poslovanja, 404)
  - `src/main.tsx` sada poziva `ViteReactSSG({ routes })` umjesto `createRoot(<App/>)`
- `src/components/Seo.tsx` — `Helmet` zamijenjen s `Head` iz `vite-react-ssg`. **Razlog**: vite-react-ssg ima nested `react-helmet-async@1.3.0`, a naš projekt je imao `@3.0.0`. Da bi SSR ekstrakcija radila, sve `Helmet` instance moraju doći iz iste kopije — `Head` wrapper iz vite-react-ssg-a koristi internu kopiju.
- `src/i18n/index.ts` — SSR-safe guard oko `localStorage.getItem` (`typeof window !== "undefined"`)
- `src/components/ScrollManager.tsx` — novi komponenta koja na promjenu rute scrolla na vrh ili na hash anchor
- Build output: 22 statičke HTML stranice u `dist/` (svaka s ispravnim `<title>`, meta description, OG/Twitter tagovima, canonical, `<html lang>`, BreadcrumbList + Service/FAQ JSON-LD).

Verificirano:
- `dist/selidbe-split.html` sadrži `<title data-rh="true">Selidbe Split | Kinesis Transport — selidbe stanova, kuća, ureda</title>` direktno u SSR-iranom HTML-u
- BreadcrumbList JSON-LD u `<head>`-u prije bilo kakvog JS-a
- Sve interne navigacijske veze su `<Link>` (klijentski routing), ali svaka URL ima vlastiti pre-renderirani HTML pa social crawleri (FB, LinkedIn, Twitter) i Googlebot dobivaju potpunu meta-konfiguraciju.

Napomene za buduće iteracije:
- Postoji benigni SSR warning `fetchPriority` (React 18 SSR još uvijek piše lowercase u DOM-u). Ne utječe na rezultat.
- Bundle iznad 500 kB — pokriveno u Fazi 4.

### ⏳ Faza 1 — Stvarne podstranice ✅ DONE

Implementirano u commit-u koji prati ovaj dokument:

**Reusable layout / page komponente:**

- `src/components/page/PageLayout.tsx` — Navbar + main + Footer + StickyContact wrapper za sve podstranice
- `src/components/page/PageHero.tsx` — H1 hero sekcija s breadcrumbs slot-om, badge-om, bullets-ima i CTA-ovima
- `src/components/page/Breadcrumbs.tsx` — vidljivi breadcrumbs (Home → … → trenutna)
- `src/components/page/ContentSection.tsx` — generic sekcija s eyebrow / title / intro / children
- `src/components/page/FeatureGrid.tsx` — grid kartica s ikonom + naslovom + opisom
- `src/components/page/FAQAccordion.tsx` — Radix akordeon s FAQ items-ima
- `src/components/page/CTABand.tsx` — kontaktna CTA traka (CTA + telefon)

**Data registries:**

- `src/lib/services.ts` — 6 usluga (Selidbe, Dostava namještaja, Prijevoz paketa, Usputni transporti, Međugradski transporti, Utovar i istovar). Svaka stavka ima: slug, path, navLabel, metaTitle, metaDescription, keywords, H1, intro, bullets, features, optional process, optional faqs.
- `src/lib/locations.ts` — 10 lokacija (Split, Solin, Kaštela, Trogir, Omiš, Kombi prijevoz Split, otoci Brač/Hvar/Vis/Šolta). Svaka: slug, path, navLabel, city, region, isIsland, metaTitle, metaDescription, keywords, H1, intro, highlights, optional neighborhoods.
- `src/lib/seo.ts` — helperi: `buildBreadcrumbJsonLd`, `buildFaqJsonLd`, `buildServiceJsonLd`

**Generic stranice:**

- `src/pages/ServicePage.tsx` — prima `slug` prop, učitava iz `services.ts` i renderira PageHero + FeatureGrid (features) + opcionalni process + FAQAccordion + CTABand. JSON-LD: BreadcrumbList + Service + (opcionalni) FAQPage.
- `src/pages/LocationPage.tsx` — prima `slug` prop, učitava iz `locations.ts`, renderira PageHero + popularne usluge linkovi + (opcionalni) lista kvartova/mjesta + CTABand. JSON-LD: BreadcrumbList + Service.

**Sadržajne stranice:**

- `src/pages/ONama.tsx` — Kinesis Transport priča + 6 vrijednosti (FeatureGrid)
- `src/pages/Kontakt.tsx` — kontakt kartice (telefon, WhatsApp, email, radno vrijeme) + adresa s OIB-om + ContactSection (forma) + LocalBusiness JSON-LD
- `src/pages/Faq.tsx` — 10 najčešćih pitanja s FAQPage JSON-LD-om
- `src/pages/Cjenik.tsx` — 3 paketa (Mala / Standardna / Veća selidba) + faktori cijene
- `src/pages/UvjetiPoslovanja.tsx` — pravni dokument (`noIndex`)

**Routing & navigation:**

- `src/routes.tsx` (zajedno s Phase 0b) — sve rute kroz Layout parent
- `src/components/Navbar.tsx` — desktop dropdownovi za "Usluge" i "Lokacije" + linkovi /o-nama, /faq, /kontakt; mobile menu s `<details>` akordeonima. Lokacijski-svjestan: na home-u CTA scrolla na #contact, izvan home-a navigira na /kontakt.
- `src/components/Footer.tsx` — 4 stupca (Kontakt, Naše usluge, Lokacije, Tvrtka) sa svim linkovima na podstranice
- `public/sitemap.xml` — proširen s 22 URL-ovima i prioritetima
- `src/i18n/locales/{hr,en}/translation.json` — dodani `nav.locations`, `nav.faq`, `nav.pricing` ključevi

### ⏳ Faza 2 — On-page optimizacija (djelomično, preostali dio)

Završeno kroz Fazu 1:
- ✅ Title pattern `<Tema> Split | Kinesis Transport` na svim podstranicama
- ✅ Per-page meta description (140–160 znakova)
- ✅ Footer: stupci "Naše usluge", "Lokacije", "Tvrtka"
- ✅ Navbar: dropdownovi "Usluge" i "Lokacije"
- ✅ BreadcrumbList JSON-LD na svim podstranicama (vidljivo + JSON-LD)

Preostalo:
- Internal linking: cross-linkovi između srodnih usluga / lokacija unutar bodyja stranica (npr. /selidbe-split → /selidbe + /kombi-prijevoz-split)
- Hreflang per-route u sitemap-u (trenutno je samo na `/`)

### ⏳ Faza 3 — Sadržaj i autoritet (djelomično)

Završeno kroz Fazu 1:
- ✅ Stranica `/faq` s 10 pitanja i FAQPage JSON-LD-om
- ✅ Per-service FAQ na `/selidbe`, `/dostava-namjestaja`, `/prijevoz-paketa` (FAQPage JSON-LD)
- ✅ `/cjenik` s 3 okvirna paketa i faktorima

Preostalo:
- Vozni park stranica (s pravim fotkama, dimenzije, kapacitet)
- Recenzije (Google reviews widget kad GBP bude verificiran)
- Blog — **odbijeno za sada** (po dogovoru s vlasnikom)
- **Google Business Profile** — u izradi; kad se verificira, dodati URL u `sameAs` JSON-LD-a, footer i ovaj dokument

### ⏳ Faza 4 — Performanse i Core Web Vitals ✅ DONE (djelomično)

Implementirano u commit-u koji prati ovaj dokument:

**Code-splitting po ruti** (`vite-react-ssg lazy` + `Suspense`):
- `src/routes.tsx` — sve subpages koriste `lazy: () => import(...)`. Index ostaje eager za brzo prvo učitavanje.
- ServicePage i LocationPage koriste lazy + closure pattern jer primaju `slug` prop. Jedan chunk dijeljen kroz svih 6 service ruta + jedan kroz svih 10 location ruta.
- `src/Layout.tsx` — `<Suspense fallback={null}>` oko `<Outlet/>`.
- Page entries svaki imaju `Component` named export uz `default` (vite-react-ssg konvencija za lazy).

**Manual vendor chunks** (`vite.config.ts` rollupOptions.output.manualChunks):
- `react-vendor` (react, react-dom, react-router) — 228 KB / 57 KB brotli
- `motion` (framer-motion) — 114 KB / 33 KB brotli
- `ui-vendor` (@radix-ui/*) — 38 KB / 19 KB brotli
- `query` (@tanstack/react-query) — 25 KB / 7 KB brotli
- `i18n` (i18next, react-i18next) — 48 KB / 14 KB brotli
- `app` (ostatak source-a) — 165 KB / 42 KB brotli
- Per-page chunks: 1–4 KB svaki (lazy load tek pri navigaciji)

**Post-build kompresija** (`scripts/compress-dist.mjs`):
- Generira `.gz` (gzip lvl 9) i `.br` (brotli quality 11) za sve HTML/JS/CSS/JSON/SVG/XML datoteke u `dist/`
- Pokrenuto kao dio `npm run build` (nakon SSG renderiranja, jer SSG generira HTML fajlove tek na kraju)
- Tipičan rezultat: ~1530 KB → 385 KB gzip / 337 KB brotli (~78% smanjenje)
- Hosting koji ne podržava on-the-fly compression može serv-ati `.br`/`.gz` direktno

**Build skripte**:
- `npm run build` — SSG + kompresija (default)
- `npm run build:csr` — SPA fallback bez SSG (samo Vite)

Preostalo:
- WebP / AVIF varijante slika + `<picture>` element (potrebno `sharp` ili `imagetools`)
- Pravi `og-image.jpg` 1200×630 (trenutno se referencira URL koji **još ne postoji**)
- LCP mjerenje u produkciji (Lighthouse / WebPageTest nakon deploya)
- `<link rel="preload">` za hero sliku (pomaže LCP)

### ⏳ Faza 5 — Lokalni SEO i izvan stranice (preostalo)

- NAP (Name/Address/Phone) konzistentnost preko svih platformi
- Citations: njuškalo, plavi-oglasnik, lokalni Splitski katalozi
- Backlink akvizicija (lokalni portali, B2B partneri)
- AggregateRating schema kad budu Google recenzije

---

## Kako funkcioniraju SEO komponente (developer note)

- **`src/components/Seo.tsx`** — koristiti na svakoj `pages/*.tsx` stranici. Props: `title`, `description`, `path`, `image`, `keywords`, `jsonLd`, `noIndex`. Interno koristi `Head` iz `vite-react-ssg` (ne `Helmet` direktno) zbog SSG kompatibilnosti.
- **`index.html`** — sadrži *baseline* meta tagove i `MovingCompany` JSON-LD. Helmet (preko `Head`) ih dinamički nadjačava per-stranica.
- **`src/lib/contact.ts`** — jedinstveni izvor za sve poslovne podatke. Koristi se u Footeru, Seo komponenti, JSON-LD-u.
- **`src/lib/services.ts`, `src/lib/locations.ts`** — data registries; dodavanje nove podstranice = jedan unos u array, ruta i sitemap ulaz se generiraju u `src/routes.tsx` i ručno se dodaje u `public/sitemap.xml`.
- **`src/lib/seo.ts`** — `buildBreadcrumbJsonLd`, `buildFaqJsonLd`, `buildServiceJsonLd` helperi — koristiti za sve nove stranice.
- **Pre-rendering**: `npm run build` koristi `vite-react-ssg build` i pre-renderira sve rute u zasebne HTML fajlove u `dist/`. `npm run build:csr` ostaje SPA fallback.

---

## Otvoreni TODO za vlasnika

1. **OG slika `/og-image.jpg`** (1200×630) — još uvijek treba dizajnirati i postaviti u `public/`. Bez toga social sharing neće imati sliku.
2. **Pravi favicon set** (`favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` u `public/`). Trenutno `favicon.jpeg` koji nije optimalan.
3. **Google Business Profile** — kad se verificira, javiti URL pa ga dodajemo u JSON-LD `sameAs`, footer i ovaj dokument.
4. **Facebook / Instagram** URL-ovi — kad postoje.
5. **Geo koordinate** — koordinate (43.508133, 16.440193) su trenutno općeniti Split centar; po želji zamijeniti točnim koordinatama poslovne adrese (Put Brodarice 3) za precizniji LocalBusiness signal.
