# Kinesis Transport — QA fix checklist

Working doc. As you finish a bug, **delete its block** (or check the box and move it to the bottom). Keep this file updated until the list is empty.

Live: https://kinesis-transport.vercel.app/ · Branch: `claude/qa-audit-kinesis-0bl74`

---

## How to use

1. Pick the next item from **Open** below.
2. Apply the fix (file paths and exact diffs are in each block).
3. Run the **Verify** command.
4. Delete the block from this file.
5. Commit. Move on.

When **Open** is empty → ship it.

---

## Open

### - [ ] B-1 · CRITICAL · Duplicate canonical + hreflang on every subpage

**Verify it's broken (now):**
```bash
curl -s https://kinesis-transport.vercel.app/kontakt | grep -oE 'rel="canonical"[^>]*href="[^"]*"'
# Expect 1 line. Currently returns 2.
```

**Fix:** in `index.html`, delete lines 22–25 and 31–48 (canonical, 3× hreflang, og:url, og:image + width/height/alt, og:title, og:description, twitter:image, twitter:title, twitter:description, `<title>`, `<meta name="description">`, `<meta name="keywords">`). Keep: charset, viewport, theme-color, format-detection, favicon, manifest, geo.*, robots default, the two `<script type="application/ld+json">` blocks.

In `src/components/Seo.tsx` add (inside the returned `<Head>`):
```tsx
<link rel="alternate" hreflang="hr" href={url} />
<link rel="alternate" hreflang="en" href={url} />
<link rel="alternate" hreflang="x-default" href={url} />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content={fullTitle} />
```

**Verify after:**
```bash
npm run build
curl -s file://$(pwd)/dist/kontakt.html | grep -oE 'rel="canonical"[^>]*href="[^"]*"' | wc -l   # → 1
```

This single fix also closes B-7 and B-14.

---

### - [ ] B-2 · CRITICAL · `og-image.jpg` 404 (broken social previews)

**Verify it's broken:** `curl -sI https://kinesis-transport.vercel.app/og-image.jpg` → `HTTP/2 404`.

**Fix (stopgap, ship today):** in `src/components/Seo.tsx:26`:
```diff
- const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;
+ const DEFAULT_IMAGE = `${SITE_URL}/kinesis-transport-kombi.jpeg`;
```
…and copy `slike/kinesis-transport-kombi.jpeg` → `public/kinesis-transport-kombi.jpeg` (or import it through Vite if you prefer fingerprinting).

**Real fix (when owner provides):** drop a 1200×630 JPG/PNG with brand text at `public/og-image.jpg` and revert the constant.

**Verify:** `curl -sI https://kinesis-transport.vercel.app/og-image.jpg` → `HTTP/2 200, content-type: image/...`.

---

### - [ ] B-3 · CRITICAL (HR users) · Croatian grammar broken on location pages

**Verify it's broken:**
```bash
curl -s https://kinesis-transport.vercel.app/selidbe-kastela | grep -oE 'Što radimo u [^<]*'
# → "Što radimo u Kaštelau"  (should be "Kaštelima")
```

**Fix:** add `locative` field to `LocationData` in `src/lib/locations.ts`:
```ts
export type LocationData = {
  ...
  city: string;
  locative: string;  // locative case ("u + locative")
  ...
};
```
Fill in for every location:
| city    | locative   |
|---------|------------|
| Split   | Splitu     |
| Solin   | Solinu     |
| Kaštela | Kaštelima  |
| Trogir  | Trogiru    |
| Omiš    | Omišu      |
| Brač    | Braču      |
| Hvar    | Hvaru      |
| Vis     | Visu       |
| Šolta   | Šolti      |

In `src/pages/LocationPage.tsx:72`:
```diff
- title={`Što radimo u ${location.city.endsWith("a") || location.city.endsWith("š") ? location.city + "u" : location.city}`}
+ title={`Što radimo u ${location.locative}`}
```
And `LocationPage.tsx:131`:
```diff
- <CTABand title={`Trebate selidbu ili prijevoz u ${location.city}?`} ... />
+ <CTABand title={`Trebate selidbu ili prijevoz u ${location.locative}?`} ... />
```

**Verify:**
```bash
for slug in selidbe-split selidbe-kastela selidbe-brac selidbe-hvar; do
  echo "=== $slug ==="
  curl -s https://kinesis-transport.vercel.app/$slug | grep -oE 'Što radimo u [^<]*' | head -1
done
```

---

### - [ ] B-4 · HIGH · EmailJS service & template IDs hardcoded

**Where:** `src/components/ContactSection.tsx:11–13`.

**Fix:**
```diff
- const EMAILJS_SERVICE_ID  = "service_73nbq1k";
- const EMAILJS_TEMPLATE_ID = "template_ff74b8e";
- const EMAILJS_PUBLIC_KEY  = "sysll8DVvubfBv9ky";
+ const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
+ const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
+ const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```
- Add `.env.example` with the three variable names (no values).
- Add the same three to **Vercel → Project → Settings → Environment Variables** (Production + Preview).
- Rotate the EmailJS keys in the EmailJS dashboard (the old ones are public on every previous deploy).

**Verify:** `npm run build && grep -r "service_73nbq1k" dist/` → no matches.

---

### - [ ] B-5 · HIGH · Form has no anti-spam / no validation

**Where:** `src/components/ContactSection.tsx:18, 23, 116–141`.

**Fix:**
```diff
- const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
+ const [formData, setFormData] = useState({ name: "", phone: "", message: "", website: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
-   if (!formData.name.trim() || !formData.phone.trim()) return;
+   if (!formData.name.trim() || !formData.phone.trim()) return;
+   if (formData.website) return;                            // honeypot
+   if (!/^[+0-9 ()/\-]{6,20}$/.test(formData.phone)) {
+     toast({ title: t("contact.errorTitle"), description: t("contact.errorDesc") });
+     return;
+   }
```

Honeypot input in JSX (visually offscreen, not `display:none`):
```tsx
<input
  type="text"
  name="website"
  tabIndex={-1}
  autoComplete="off"
  value={formData.website}
  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
  className="absolute left-[-9999px] w-px h-px"
  aria-hidden="true"
/>
```

**Verify:** submit with phone="a" → form rejects. Submit with hidden field filled in → silently drops.

(Optional later: add Cloudflare Turnstile for real spam protection.)

---

### - [ ] B-6 · HIGH · 404 route shows homepage HTML (with 404 status)

**Verify it's broken:**
```bash
curl -s https://kinesis-transport.vercel.app/this-does-not-exist | grep -oE '<title[^>]*>[^<]*</title>'
# → home title, not "Stranica nije pronađena"
```

**Fix:** in `src/routes.tsx`, add an explicit `/404` path before the wildcard so vite-react-ssg pre-renders it:
```diff
+ {
+   path: "404",
+   lazy: () => import("./pages/NotFound"),
+   entry: "src/pages/NotFound.tsx",
+ },
  {
    path: "*",
    lazy: () => import("./pages/NotFound"),
    entry: "src/pages/NotFound.tsx",
  },
```

**Verify:** `npm run build && ls dist/404.html` → exists. After deploy, `curl -s …/this-does-not-exist | grep title` → NotFound title.

---

### - [ ] B-8 · MEDIUM · BottomNav only on home (mobile UX inconsistency)

**Where:** `src/pages/Index.tsx:85` is the only renderer; `PageLayout.tsx` doesn't include it.

**Fix (option A, simplest):** in `src/components/page/PageLayout.tsx`, add `<BottomNav />` after `<Footer />` and `<StickyContact />`. Then in `src/components/BottomNav.tsx`, replace the section anchors with route-aware links:
- `#hero`     → `<Link to="/">`
- `#services` → `<Link to="/#services">` (and ScrollManager handles the hash)
- `#trust`    → `<Link to="/#trust">`
- `#contact`  → on home, scroll to `#contact`; off home, `<Link to="/kontakt">` (mirror `Navbar.goToContact`).

Remove `<BottomNav />` from `Index.tsx:85`.

**Verify:** open `/selidbe-split` on mobile (or DevTools mobile view) — bottom CTA bar visible; tapping it goes to `/kontakt`.

---

### - [ ] B-9 · MEDIUM · LanguageSwitcher loads flags from `flagcdn.com`

**Fix:** drop two SVGs into `src/assets/flags/hr.svg` and `src/assets/flags/gb.svg` (download from flagcdn or grab from `flag-icons` package). Then in `src/components/LanguageSwitcher.tsx`:
```diff
+ import hrFlag from "@/assets/flags/hr.svg";
+ import gbFlag from "@/assets/flags/gb.svg";
  const flags = [
-   { lang: "hr", src: "https://flagcdn.com/hr.svg", label: "HR" },
-   { lang: "en", src: "https://flagcdn.com/gb.svg", label: "EN" },
+   { lang: "hr", src: hrFlag, label: "HR" },
+   { lang: "en", src: gbFlag, label: "EN" },
  ] as const;
```

**Verify:** Network tab → no requests to `flagcdn.com`.

---

### - [ ] B-10 · MEDIUM · Vercel preview is fully crawlable

**Fix:** extend `scripts/generate-host-config.mjs` (already runs as part of `npm run build`) to swap `robots.txt` on non-production:
```js
import { writeFile } from "node:fs/promises";

if (process.env.VERCEL_ENV !== "production") {
  await writeFile("dist/robots.txt", "User-agent: *\nDisallow: /\n");
}
```

**Verify after Vercel deploy:** preview URL → `curl https://kinesis-transport.vercel.app/robots.txt` shows `Disallow: /`. Production URL still shows the open robots.txt.

---

### - [ ] B-11 · LOW · Dead i18n key `footer.city`

**Where:** `src/i18n/locales/hr/translation.json:102` and `en/translation.json:102`.

**Fix:** delete the line `"city": "Split, Hrvatska",` from both files.

**Verify:** `grep -r '"city"' src/i18n/locales/` → no matches. App still builds.

---

### - [ ] B-12 · LOW · Placeholder pricing / fleet specs (owner)

- Replace orientational prices in `src/pages/Cjenik.tsx` (currently "od 60 €", "od 150 €", "po dogovoru") with real numbers.
- Fill in real volume/kg in `src/pages/VozniPark.tsx` `specs` array.

**Verify:** `/cjenik` and `/vozni-park` show concrete numbers, not placeholder text.

---

### - [ ] B-13 · LOW · Missing `neighborhoods` array on 7 location pages

**Where:** `src/lib/locations.ts`.

**Fix:** add `neighborhoods: [...]` arrays to: Solin, Trogir, Omiš, Brač, Hvar, Vis, Šolta. Examples: Kaštela already lists 7 mjesta; Brač could list `["Supetar", "Bol", "Postira", "Pučišća", "Sutivan", "Selca", "Milna"]`. (Owner: please supply realistic lists.)

**Verify:** every location page renders the "Mjesta na otoku" / "Kvartovi i mjesta" section.

---

## Done

(Move completed blocks here, or just delete them.)

---

## Final pre-launch checklist

After every block above is gone:

- [ ] `npm run build` passes with no warnings beyond the documented `fetchPriority` SSR notice.
- [ ] `npm run lint` clean.
- [ ] Lighthouse run on `/`, `/kontakt`, `/selidbe-split` — SEO ≥ 95, Best Practices ≥ 95.
- [ ] Manual smoke test of contact form (real submission lands in inbox).
- [ ] Real OG image at `public/og-image.jpg` (1200×630).
- [ ] Production domain DNS pointing to Vercel; remove the temporary `kinesis-transport.vercel.app` references.
- [ ] EmailJS keys rotated in EmailJS dashboard; new keys only in Vercel env vars.
