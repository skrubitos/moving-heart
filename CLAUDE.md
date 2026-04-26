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

### ⏳ Faza 0b — Pre-rendering (preostalo)

Bez ovoga su meta tagovi iz Helmeta u DOM-u tek nakon JS execution. Crawlerima poput Facebooka, LinkedIna i Twittera ovo ne radi pouzdano.

**Opcije (predložiti za sljedeću iteraciju):**
- `vite-react-ssg` — najjednostavnije za Vite + React
- `react-snap` — post-build crawler
- `vite-plugin-prerender`

### ⏳ Faza 1 — Stvarne podstranice (preostalo)

Dodati React Router rute + per-route Seo komponente za:

**Servisne stranice:**
- `/selidbe` — Selidbe stanova, kuća, ureda
- `/dostava-namjestaja`
- `/prijevoz-paketa`
- `/usputni-transporti`
- `/medugradski-transporti`
- `/utovar-istovar`
- `/cjenik`

**Lokacijske stranice (Split-fokus):**
- `/selidbe-split` (primarna)
- `/selidbe-solin`
- `/selidbe-kastela`
- `/selidbe-trogir`
- `/selidbe-omis`
- `/kombi-prijevoz-split`

**Otoci (visoka vrijednost, niska konkurencija):**
- `/selidbe-brac`, `/selidbe-hvar`, `/selidbe-vis`, `/selidbe-solta`

**Šire HR rute (po želji):**
- `/selidbe-zagreb`, `/selidbe-rijeka`, `/selidbe-zadar`, `/selidbe-dubrovnik`

**Sadržajne stranice:**
- `/o-nama`
- `/kontakt` (vlastita stranica s LocalBusiness schemom + Google Maps embed)
- `/faq` (FAQPage schema)
- `/uvjeti-poslovanja`

### ⏳ Faza 2 — On-page optimizacija (preostalo)

- Title pattern: `<Tema> Split | Kinesis Transport`
- Per-page meta description (140–160 znakova) s telefonom
- Footer: dodati 2 nova stupca "Naše usluge" i "Lokacije" s linkovima na podstranice
- Navbar: prebaciti `#services` → `/selidbe`, dropdown "Lokacije"
- BreadcrumbList JSON-LD na podstranicama

### ⏳ Faza 3 — Sadržaj i autoritet (preostalo)

- FAQ stranica + FAQ akordeon na svakoj servisnoj podstranici
- Cjenik (okvirni paketi)
- Vozni park stranica (s pravim fotkama, dimenzije, kapacitet)
- Recenzije (Google reviews widget kad GBP bude verificiran)
- Blog — **odbijeno za sada** (po dogovoru s vlasnikom)
- **Google Business Profile** — u izradi; kad se verificira, dodati URL u `sameAs` JSON-LD-a, footer i ovaj dokument

### ⏳ Faza 4 — Performanse i Core Web Vitals (preostalo)

- Code-splitting po ruti (`React.lazy` + `Suspense`)
- Smanjiti `framer-motion` bundle gdje nije potreban
- Pravi `og-image.jpg` 1200×630 (trenutno se referencira `https://kinesistransport.hr/og-image.jpg` koji **još ne postoji**; obavezno postaviti prije live-a)
- WebP varijante slika + `<picture>` element
- `vite-plugin-compression` (gzip + brotli)
- Provjeriti LCP slike u produkciji

### ⏳ Faza 5 — Lokalni SEO i izvan stranice (preostalo)

- NAP (Name/Address/Phone) konzistentnost preko svih platformi
- Citations: njuškalo, plavi-oglasnik, lokalni Splitski katalozi
- Backlink akvizicija (lokalni portali, B2B partneri)
- AggregateRating schema kad budu Google recenzije

---

## Kako funkcioniraju SEO komponente (developer note)

- **`src/components/Seo.tsx`** — koristiti na svakoj `pages/*.tsx` stranici. Props: `title`, `description`, `path`, `image`, `keywords`, `jsonLd`, `noIndex`. Auto-postavlja `<html lang>` po `i18n.language`.
- **`index.html`** — sadrži *baseline* meta tagove i `MovingCompany` JSON-LD. Helmet ih dinamički nadjačava per-stranica.
- **`src/lib/contact.ts`** — jedinstveni izvor za sve poslovne podatke. Koristi se u Footeru, Seo komponenti, JSON-LD-u.

---

## Otvoreni TODO za vlasnika

1. **OG slika `/og-image.jpg`** (1200×630) — još uvijek treba dizajnirati i postaviti u `public/`. Bez toga social sharing neće imati sliku.
2. **Pravi favicon set** (`favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` u `public/`). Trenutno `favicon.jpeg` koji nije optimalan.
3. **Google Business Profile** — kad se verificira, javiti URL pa ga dodajemo u JSON-LD `sameAs`, footer i ovaj dokument.
4. **Facebook / Instagram** URL-ovi — kad postoje.
5. **Geo koordinate** — koordinate (43.508133, 16.440193) su trenutno općeniti Split centar; po želji zamijeniti točnim koordinatama poslovne adrese (Put Brodarice 3) za precizniji LocalBusiness signal.
