#!/usr/bin/env python3
"""Build the QA audit report as a PDF."""
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import cm
from reportlab.lib.colors import HexColor, black, white
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Preformatted, Table, TableStyle,
    KeepTogether, PageBreak, HRFlowable,
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import os, html

# ---------- fonts (DejaVu supports HR diacritics) ----------
DEJA = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
DEJA_B = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
DEJA_M = "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf"
DEJA_MB = "/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf"
pdfmetrics.registerFont(TTFont("Body", DEJA))
pdfmetrics.registerFont(TTFont("Body-B", DEJA_B))
pdfmetrics.registerFont(TTFont("Mono", DEJA_M))
pdfmetrics.registerFont(TTFont("Mono-B", DEJA_MB))

# ---------- colors ----------
ORANGE = HexColor("#f97316")
RED = HexColor("#dc2626")
AMBER = HexColor("#d97706")
BLUE = HexColor("#2563eb")
GREY = HexColor("#475569")
GREYL = HexColor("#e2e8f0")
GREYBG = HexColor("#f1f5f9")
CRITICAL = HexColor("#b91c1c")
HIGH = HexColor("#c2410c")
MED = HexColor("#a16207")
LOW = HexColor("#0369a1")

# ---------- styles ----------
styles = getSampleStyleSheet()
H1 = ParagraphStyle("H1", fontName="Body-B", fontSize=22, leading=26,
                    textColor=ORANGE, spaceAfter=6, spaceBefore=0)
SUB = ParagraphStyle("Sub", fontName="Body", fontSize=10, leading=13,
                     textColor=GREY, spaceAfter=10)
H2 = ParagraphStyle("H2", fontName="Body-B", fontSize=15, leading=19,
                    textColor=HexColor("#0f172a"), spaceAfter=4, spaceBefore=14,
                    keepWithNext=True)
H3 = ParagraphStyle("H3", fontName="Body-B", fontSize=11.5, leading=15,
                    textColor=HexColor("#0f172a"), spaceAfter=3, spaceBefore=10,
                    keepWithNext=True)
BODY = ParagraphStyle("Body", fontName="Body", fontSize=9.5, leading=13.5,
                      textColor=HexColor("#1e293b"), spaceAfter=6, alignment=TA_LEFT)
BULLET = ParagraphStyle("Bullet", parent=BODY, leftIndent=14,
                        bulletIndent=2, spaceAfter=2)
SMALL = ParagraphStyle("Small", parent=BODY, fontSize=8.5, leading=11,
                       textColor=GREY)
CODE_STYLE = ParagraphStyle("Code", fontName="Mono", fontSize=8.5, leading=11,
                            textColor=HexColor("#0f172a"),
                            backColor=GREYBG, borderPadding=4,
                            spaceBefore=4, spaceAfter=8, leftIndent=0)
SEV_BADGE = {
    "CRITICAL": CRITICAL,
    "HIGH": HIGH,
    "MEDIUM": MED,
    "LOW": LOW,
}

def esc(s):
    return html.escape(s).replace("`", "&#96;")

def code(txt):
    # Preformatted preserves whitespace; wrap manually if line is too long? leave as-is.
    return Preformatted(txt, CODE_STYLE)

def inline(txt):
    """Mini inline-markdown: **bold**, `code`. Escapes < > & for reportlab paraparser."""
    # First, split on backticks so we can selectively escape
    parts = txt.split("`")
    rebuilt = []
    for i, part in enumerate(parts):
        # always escape < > & in text content (reportlab parses XML-like tags)
        escaped = part.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
        if i % 2 == 0:
            rebuilt.append(escaped)
        else:
            rebuilt.append(f'<font name="Mono" backColor="#f1f5f9">{escaped}</font>')
    out = "".join(rebuilt)
    # bold (after escaping, since ** doesn't conflict with HTML)
    while "**" in out:
        out = out.replace("**", "<b>", 1).replace("**", "</b>", 1)
    return out

def p(txt, style=BODY):
    return Paragraph(inline(txt), style)

def bullet(txt):
    return Paragraph(inline("• " + txt), BULLET)

def hr():
    return HRFlowable(width="100%", thickness=0.6, color=GREYL,
                      spaceBefore=8, spaceAfter=8)

def bug_header(bid, severity, title):
    sev_color = SEV_BADGE[severity]
    hexstr = "#" + sev_color.hexval()[2:]
    badge = f'<font color="{hexstr}" name="Body-B">[{severity}]</font>'
    return Paragraph(
        f'<font name="Body-B" color="#0f172a">{bid}</font> &nbsp; {badge} &nbsp; '
        f'<font name="Body-B">{esc(title)}</font>',
        ParagraphStyle("BugH", fontName="Body-B", fontSize=11.5, leading=15,
                       textColor=HexColor("#0f172a"), spaceAfter=4, spaceBefore=12,
                       borderColor=sev_color, borderWidth=0,
                       leftIndent=0, keepWithNext=True))

def field(label, value):
    return Paragraph(
        f'<font name="Body-B">{esc(label)}:</font> {inline(value)}',
        ParagraphStyle("Field", parent=BODY, spaceAfter=3))

# ---------- doc ----------
out_path = "/home/user/kinesis-transport/QA-audit-Kinesis-Transport.pdf"
doc = SimpleDocTemplate(
    out_path, pagesize=A4,
    leftMargin=2*cm, rightMargin=2*cm,
    topMargin=1.8*cm, bottomMargin=1.8*cm,
    title="Kinesis Transport — QA Audit",
    author="QA",
)

story = []

# ---------- title ----------
story.append(Paragraph("Kinesis Transport — QA Audit Report", H1))
story.append(Paragraph(
    "Live: <font name='Mono'>kinesis-transport.vercel.app</font> &nbsp;·&nbsp; "
    "Source: <font name='Mono'>/home/user/kinesis-transport</font> &nbsp;·&nbsp; "
    "Date: 2026-05-01", SUB))
story.append(hr())

# ---------- exec summary ----------
story.append(Paragraph("Executive summary", H2))
story.append(p(
    "The site is structurally well-built — SSG works, JSON-LD is solid, i18n is wired, "
    "performance optimizations are real. Findings cluster around three areas:"))
story.append(bullet("**SEO leakage** — every subpage emits two conflicting canonical tags and "
                    "the homepage's hreflang/og:image meta. Risk: subpages get treated as "
                    "duplicates of the homepage."))
story.append(bullet("**Public spam surface** — EmailJS service & template IDs are hardcoded in "
                    "the bundle and the contact form has no anti-spam. Combined, this is a free "
                    "spam relay through your EmailJS account."))
story.append(bullet("**Croatian grammar bug** — at least 7 of 10 location pages render "
                    "broken Croatian (\"Što radimo u Kaštelau\", \"u Split\", \"u Brač\")."))
story.append(p("Plus an `og-image.jpg` 404, a 404-page that initially shows the homepage, "
               "and several content-debt items."))

story.append(Paragraph("Priority order to fix", H3))
story.append(bullet("**F-1 + F-2** (canonical/hreflang/OG image) — biggest SEO win."))
story.append(bullet("**F-3** (Croatian locative case) — most embarrassing in front of HR users; "
                    "30 minutes of data entry."))
story.append(bullet("**F-4 + F-5** (EmailJS env vars, honeypot) — must ship before production "
                    "domain goes live."))
story.append(bullet("**F-6** (404.html) — small, prevents the 404-shows-homepage bait-and-switch."))

story.append(PageBreak())

# ---------- BUGS ----------
story.append(Paragraph("1. Bug list", H2))

# B-1
story.append(bug_header("B-1", "CRITICAL",
    "Every subpage emits two conflicting canonical tags"))
story.append(field("Repro (verified live)", ""))
story.append(code(
    "$ curl -s https://kinesis-transport.vercel.app/kontakt \\\n"
    "    | grep -oE 'rel=\"canonical\"[^>]*href=\"[^\"]*\"'\n"
    "rel=\"canonical\" href=\"https://kinesistransport.hr/kontakt\"\n"
    "rel=\"canonical\" href=\"https://kinesistransport.hr/\""))
story.append(field("Same on", "/selidbe-split, /selidbe-kastela, every subpage"))
story.append(field("Expected", "one canonical, pointing to the page's own URL"))
story.append(field("Actual",
    "two canonicals — one per-route (correct), one inherited from index.html "
    "baseline pointing to the homepage"))
story.append(field("Impact",
    "Google may treat every subpage as a duplicate of / and drop it from the index. "
    "Same root cause leaks the homepage's hreflang into every page — telling Google "
    "the HR alternate of /kontakt is /. Catastrophic for the SEO investment."))

# B-2
story.append(bug_header("B-2", "CRITICAL",
    "og-image.jpg returns 404 — every social share is broken"))
story.append(field("Repro (verified live)", ""))
story.append(code(
    "$ curl -sI https://kinesis-transport.vercel.app/og-image.jpg | head -2\n"
    "HTTP/2 404\n"
    "content-disposition: inline; filename=\"404\""))
story.append(field("And on every page", ""))
story.append(code(
    "$ curl -s https://kinesis-transport.vercel.app/kontakt | grep og:image\n"
    'og:image" content="https://kinesistransport.hr/og-image.jpg"'))
story.append(field("Impact",
    "Facebook, LinkedIn, Twitter, WhatsApp link previews show no image. "
    "CLAUDE.md flags this as TODO; it is shipping anyway with the broken reference."))

# B-3
story.append(bug_header("B-3", "CRITICAL",
    "Croatian grammar mangled on every location page heading"))
story.append(field("Repro (verified live)", ""))
story.append(code(
    "$ curl -s …/selidbe-kastela | grep -oE 'Što radimo u [^<]*'\n"
    "Što radimo u Kaštelau         # should be \"Kaštelima\" (locative plural)\n\n"
    "$ curl -s …/selidbe-split | grep -oE 'Što radimo u [^<]*'\n"
    "Što radimo u Split            # should be \"Splitu\"\n\n"
    "$ curl -s …/selidbe-brac | grep -oE 'Što radimo u [^<]*'\n"
    "Što radimo u Brač             # should be \"Braču\""))
story.append(field("Affected",
    "/selidbe-split, /selidbe-solin, /selidbe-trogir, /selidbe-brac, "
    "/selidbe-hvar, /selidbe-vis, /kombi-prijevoz-split — at least 7 of 10 "
    "location pages. Only /selidbe-omis is correct (luck — Omiš ends in š)."))
story.append(field("Impact",
    "A native Croatian visitor sees this immediately; it screams 'amateur' "
    "on a site selling local services."))

# B-4
story.append(bug_header("B-4", "HIGH",
    "EmailJS service & template IDs hardcoded in client bundle"))
story.append(p("`src/components/ContactSection.tsx:11-13`:"))
story.append(code(
    'const EMAILJS_SERVICE_ID  = "service_73nbq1k";\n'
    'const EMAILJS_TEMPLATE_ID = "template_ff74b8e";\n'
    'const EMAILJS_PUBLIC_KEY  = "sysll8DVvubfBv9ky";'))
story.append(field("Impact",
    "Any visitor can read these from devtools and send unlimited emails through "
    "your EmailJS account / template, exhausting the monthly quota (free tier is "
    "200/month). Combined with B-5, the form is a free spam relay."))

# B-5
story.append(bug_header("B-5", "HIGH",
    "Contact form has no anti-spam, no validation beyond non-empty"))
story.append(p("`src/components/ContactSection.tsx:23`:"))
story.append(code(
    "if (!formData.name.trim() || !formData.phone.trim()) return;"))
story.append(bullet("No phone format check (accepts 'a')."))
story.append(bullet("No email field, but `phone` accepts anything."))
story.append(bullet("No honeypot, no captcha, no rate-limit."))
story.append(bullet("`name` is sent to your inbox unsanitized — bot writes "
                    "&lt;a href=evil&gt;, you click it in your inbox → XSS in your own client."))
story.append(field("Combined with B-4",
    "this becomes a free-tier-exhausting spam pipe within hours of a botnet "
    "finding it."))

# B-6
story.append(bug_header("B-6", "HIGH",
    "404 route serves the homepage HTML with a 404 status"))
story.append(field("Repro", ""))
story.append(code(
    "$ curl -sI …/this-does-not-exist | head -1\n"
    "HTTP/2 404\n\n"
    "$ curl -s …/this-does-not-exist | grep -oE '<title[^>]*>[^<]*</title>'\n"
    "<title data-rh=\"true\">Selidbe Split i kombi prijevoz | Kinesis Transport</title>"))
story.append(field("Expected",
    "404 page with 'Stranica nije pronađena' title, status 404"))
story.append(field("Actual",
    "404 status BUT initial HTML is the homepage (etag matches /). The proper "
    "NotFound component renders only after the JS bundle hydrates — so for a "
    "moment the visitor sees the homepage at a non-existent URL."))
story.append(field("Root cause",
    "vite-react-ssg doesn't pre-render the wildcard `*` route to dist/404.html."))

# B-7
story.append(bug_header("B-7", "MEDIUM",
    "Subpages inherit only the homepage's og:image:width/height/alt"))
story.append(p("`index.html:40-42` hardcodes width/height/alt for an image that 404s "
               "anyway (B-2). Seo.tsx only emits `og:image`. Fix in the same patch as F-1."))

# B-8
story.append(bug_header("B-8", "MEDIUM",
    "BottomNav only renders on home — mobile users on subpages have no quick-CTA"))
story.append(p("`src/pages/Index.tsx:85` is the only place `<BottomNav />` is rendered. "
               "PageLayout (used by every other page) doesn't include it. Mobile UX "
               "inconsistency: tap a service from the homepage and the bottom CTA bar disappears."))
story.append(p("BottomNav items are also anchor-only (`href=\"#hero\"` etc.) — they ONLY work "
               "on home. If lifted naïvely into PageLayout, those anchors break silently on "
               "subpages because none of those ids exist outside Index."))

# B-9
story.append(bug_header("B-9", "MEDIUM",
    "LanguageSwitcher loads flag images from flagcdn.com"))
story.append(p("`src/components/LanguageSwitcher.tsx:4-5`:"))
story.append(code(
    '{ lang: "hr", src: "https://flagcdn.com/hr.svg", label: "HR" },\n'
    '{ lang: "en", src: "https://flagcdn.com/gb.svg", label: "EN" },'))
story.append(p("External CDN dependency; if flagcdn.com is blocked (corporate network), "
               "down, or slow, the language switcher renders empty &lt;img&gt; tags. Also a "
               "(minor) GDPR/cookie-banner consideration since requests go to a third party."))

# B-10
story.append(bug_header("B-10", "MEDIUM",
    "Vercel preview is fully crawlable — duplicate-content risk"))
story.append(p("`public/robots.txt` allows everything. The Vercel deploy at "
               "`kinesis-transport.vercel.app` is publicly accessible AND every page's "
               "canonical points to `kinesistransport.hr/...`. If Google indexes the Vercel "
               "preview before the production domain is live, you have two copies of the "
               "same content with a canonical that points to a domain that may not yet resolve."))

# B-11..14
story.append(bug_header("B-11", "LOW",
    "Dead i18n key footer.city"))
story.append(p("`footer.city` exists in both hr and en locales "
               "(`src/i18n/locales/*/translation.json:102`) but is not referenced anywhere. "
               "Footer uses `footer.address` instead."))

story.append(bug_header("B-12", "LOW",
    "Placeholder pricing & fleet specs shipping to production"))
story.append(bullet("/cjenik lists \"od 60 €\", \"od 150 €\", \"po dogovoru\" — "
                    "real customers will quote them back at you."))
story.append(bullet("/vozni-park reads \"Standardna nosivost\", \"dovoljan za prosječnu "
                    "selidbu\" — generic strings where exact volume / kg should be."))

story.append(bug_header("B-13", "LOW",
    "Vis (and 5 other) location pages missing neighborhoods array"))
story.append(p("`src/lib/locations.ts` — only Split and Kaštela define `neighborhoods`. "
               "The intro for Vis mentions \"Vis grad i Komiža\" but the LocationPage's "
               "'Mjesta na otoku' section won't appear. Solin, Trogir, Omiš, Brač, Hvar, "
               "Šolta likewise lack the array."))

story.append(bug_header("B-14", "LOW",
    "Robots meta duplicated on noIndex routes (same root cause as B-1)"))
story.append(p("`index.html:16` ships `<meta name=\"robots\" content=\"index, follow, "
               "max-image-preview:large\">`. On `/uvjeti-poslovanja` and 404, Seo.tsx adds "
               "a second `<meta name=\"robots\" content=\"noindex, nofollow\">`. Most crawlers "
               "honor the more restrictive one, but it's defined behavior to remove "
               "conflicting tags."))

story.append(PageBreak())

# ---------- code issues table ----------
story.append(Paragraph("2. Code issues mapped to bugs", H2))
table_data = [
    ["Bug", "File", "Line(s)", "Cause"],
    ["B-1, B-7, B-14", "index.html", "22-25, 31-48",
     "Hardcoded canonical, hreflang×3, og/twitter image meta — none get removed when Seo.tsx adds its own."],
    ["B-2", "src/components/Seo.tsx", "26",
     "DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg` — file not in public/."],
    ["B-3", "src/pages/LocationPage.tsx", "72",
     "endsWith('a')||endsWith('š') heuristic; can't derive Croatian locative case that way."],
    ["B-4", "src/components/ContactSection.tsx", "11-13",
     "Hardcoded constants instead of import.meta.env."],
    ["B-5", "src/components/ContactSection.tsx", "23, 116-141",
     "One-line truthiness check; no honeypot/rate-limit/captcha."],
    ["B-6", "src/routes.tsx", "54-58",
     "Wildcard route lazy-loads NotFound but vite-react-ssg doesn't emit dist/404.html."],
    ["B-8", "src/pages/Index.tsx + PageLayout.tsx", "85",
     "<BottomNav /> only in Index. Anchor-only links assume one-page-app."],
    ["B-9", "src/components/LanguageSwitcher.tsx", "4-5",
     "External flagcdn.com SVGs."],
    ["B-10", "public/robots.txt", "13-14",
     "User-agent: * / Allow: / applies to whatever host serves it."],
    ["B-11", "src/i18n/locales/{hr,en}/translation.json", "102",
     "footer.city defined but never consumed."],
    ["B-12", "src/pages/Cjenik.tsx, VozniPark.tsx", "content",
     "Placeholder copy."],
    ["B-13", "src/lib/locations.ts", "Vis/Solin/Trogir/Omiš/Brač/Hvar/Šolta",
     "neighborhoods array missing."],
]
# Wrap long cells in Paragraphs (escape < > & in cell content)
wrapped = []
for i, row in enumerate(table_data):
    if i == 0:
        wrapped.append([Paragraph(f"<b>{inline(c)}</b>", SMALL) for c in row])
    else:
        wrapped.append([Paragraph(inline(c), SMALL) for c in row])

t = Table(wrapped, colWidths=[2.6*cm, 4.6*cm, 3.2*cm, 6.6*cm], repeatRows=1)
t.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (-1, 0), GREYBG),
    ("BOX", (0, 0), (-1, -1), 0.4, GREYL),
    ("INNERGRID", (0, 0), (-1, -1), 0.3, GREYL),
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LEFTPADDING", (0, 0), (-1, -1), 4),
    ("RIGHTPADDING", (0, 0), (-1, -1), 4),
    ("TOPPADDING", (0, 0), (-1, -1), 4),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
]))
story.append(t)

story.append(Spacer(1, 0.4*cm))
story.append(Paragraph("Additional code observations (not bugs themselves)", H3))
story.append(bullet("`src/main.tsx` imports `./i18n` for side effects; SSG always renders "
                    "with default `lang=\"hr\"` — every cached HTML page is the HR version. "
                    "Subpage titles in code (e.g. `Index.tsx:66`) are hardcoded HR strings, "
                    "not via `t()`, so EN switching changes body copy but not `<title>` / `<meta>`."))
story.append(bullet("`vite.config.ts:30` `id.includes(\"/react/\")` could match other packages "
                    "with `/react/` in their path. Worth verifying chunk contents with `--debug`."))
story.append(bullet("`src/components/ScrollManager.tsx:24` uses `behavior: \"instant\"` cast "
                    "as ScrollBehavior. Modern browsers fine; older fall back to \"auto\". OK."))

story.append(PageBreak())

# ---------- live vs source ----------
story.append(Paragraph("3. Live vs source mismatches", H2))
mm = [
    ["#", "Source says", "Live shows", "Why"],
    ["M-1", "Per-page canonical from Seo.tsx",
     "TWO canonicals (one to /, one to actual page)",
     "index.html baseline tags are not replaced by react-helmet-async — it appends instead of de-duping unmanaged tags."],
    ["M-2", "og-image.jpg referenced as the OG image",
     "404",
     "File never created; only the reference exists."],
    ["M-3", "NotFound.tsx exists with proper Croatian copy",
     "/this-does-not-exist returns 404 status but homepage HTML",
     "vite-react-ssg doesn't emit 404.html; Vercel falls back to index.html content."],
    ["M-4", "LocationPage uses string-concat fallback for non-a/š cities",
     "Most location pages render broken Croatian",
     "Heuristic doesn't produce locative case for Split/Trogir/Brač/Hvar/Vis (no suffix added) or Kaštela/Šolta (wrong suffix)."],
    ["M-5", "i18n switch should change page text",
     "Static SSR'd HTML is always lang=\"hr\" and titles are HR-hardcoded in page components",
     "Titles like Index.tsx:66 are passed as HR string literals to <Seo>, not via t(). EN switching changes body copy but not <title> / <meta>."],
    ["M-6", "sitemap & links use https://kinesistransport.hr",
     "Live site is https://kinesis-transport.vercel.app",
     "Production domain not yet pointing here, but the Vercel deployment is fully crawlable (no noindex, no preview-only flag)."],
]
wm = []
for i, row in enumerate(mm):
    if i == 0:
        wm.append([Paragraph(f"<b>{inline(c)}</b>", SMALL) for c in row])
    else:
        wm.append([Paragraph(inline(c), SMALL) for c in row])
tm = Table(wm, colWidths=[1.0*cm, 4.5*cm, 4.5*cm, 7.0*cm], repeatRows=1)
tm.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (-1, 0), GREYBG),
    ("BOX", (0, 0), (-1, -1), 0.4, GREYL),
    ("INNERGRID", (0, 0), (-1, -1), 0.3, GREYL),
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LEFTPADDING", (0, 0), (-1, -1), 4),
    ("RIGHTPADDING", (0, 0), (-1, -1), 4),
    ("TOPPADDING", (0, 0), (-1, -1), 4),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
]))
story.append(tm)
story.append(Spacer(1, 0.3*cm))
story.append(p("No 'works live but shouldn't per code' cases were found — every live "
               "behavior is traceable to source."))

story.append(PageBreak())

# ---------- root causes ----------
story.append(Paragraph("4. Root causes", H2))
rc = [
    ["B-1, B-7, B-14",
     "index.html is the SSG template; react-helmet-async (and the Head wrapper from vite-react-ssg) appends tags instead of replacing pre-existing ones it didn't author. Fix: remove URL-specific tags from index.html and let Seo.tsx own them entirely."],
    ["B-2", "Asset that the source references was never produced/added to public/."],
    ["B-3", "Naïve heuristic in LocationPage.tsx:72 that tries to derive Croatian locative case from the last letter; Croatian declension can't be done that way for proper nouns."],
    ["B-4", "Service/template IDs treated as constants instead of build-time env vars."],
    ["B-5", "Form ships with the minimum viable submit logic from a UI prototype; never hardened for production."],
    ["B-6", "vite-react-ssg config doesn't include 404.html generation; no Vercel not-found rewrite either."],
    ["B-8", "BottomNav was authored as a homepage component; never lifted into the shared PageLayout. Anchor `href=\"#…\"` design implicitly assumes one-page-app."],
    ["B-9", "Convenience choice during prototyping (no need to bundle a flag SVG)."],
    ["B-10", "Default Vercel deployment is public; no per-environment robots policy."],
    ["B-11, B-12, B-13", "Content-completeness debt."],
]
wr = [[Paragraph(f"<b>{inline(a)}</b>", SMALL), Paragraph(inline(b), SMALL)] for a, b in rc]
tr = Table(wr, colWidths=[3.0*cm, 14.0*cm])
tr.setStyle(TableStyle([
    ("BOX", (0, 0), (-1, -1), 0.4, GREYL),
    ("INNERGRID", (0, 0), (-1, -1), 0.3, GREYL),
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LEFTPADDING", (0, 0), (-1, -1), 4),
    ("RIGHTPADDING", (0, 0), (-1, -1), 4),
    ("TOPPADDING", (0, 0), (-1, -1), 4),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
]))
story.append(tr)

story.append(PageBreak())

# ---------- fixes ----------
story.append(Paragraph("5. Exact fixes", H2))

# F-1
story.append(Paragraph("F-1 (B-1, B-7, B-14) — Remove URL/page-specific meta from index.html", H3))
story.append(p("These tags must not be in the template, because they're per-page. "
               "Seo.tsx already emits the correct ones."))
story.append(p("`index.html` — delete lines 22-25, 39-48:"))
story.append(code(
    '-  <link rel="canonical" href="https://kinesistransport.hr/" />\n'
    '-  <link rel="alternate" hreflang="hr" href="https://kinesistransport.hr/" />\n'
    '-  <link rel="alternate" hreflang="en" href="https://kinesistransport.hr/" />\n'
    '-  <link rel="alternate" hreflang="x-default" href="https://kinesistransport.hr/" />\n'
    '...\n'
    '-  <meta property="og:url" content="https://kinesistransport.hr/" />\n'
    '-  <meta property="og:image" content=".../og-image.jpg" />\n'
    '-  <meta property="og:image:width" content="1200" />\n'
    '-  <meta property="og:image:height" content="630" />\n'
    '-  <meta property="og:image:alt" content="..." />\n'
    '...\n'
    '-  <meta name="twitter:image" content=".../og-image.jpg" />'))
story.append(p("Also delete `<title>`, `<meta name=\"description\">`, `<meta name=\"keywords\">`, "
               "and the og/twitter title/description from index.html — Seo.tsx always emits them. "
               "Keep only static-template tags: charset, viewport, theme-color, format-detection, "
               "favicon, manifest, geo.*, robots default, and the two JSON-LD scripts (MovingCompany, WebSite)."))
story.append(p("Then in `src/components/Seo.tsx` add the missing image meta and per-route hreflang:"))
story.append(code(
    '<meta property="og:image" content={image} />\n'
    '<meta property="og:image:width" content="1200" />\n'
    '<meta property="og:image:height" content="630" />\n'
    '<meta property="og:image:alt" content={fullTitle} />\n'
    '<link rel="alternate" hreflang="hr" href={url} />\n'
    '<link rel="alternate" hreflang="en" href={url} />\n'
    '<link rel="alternate" hreflang="x-default" href={url} />'))
story.append(p("**Verify**: `curl …/kontakt | grep canonical` should return exactly one canonical."))

# F-2
story.append(Paragraph("F-2 (B-2) — Ship a real og-image.jpg", H3))
story.append(p("Drop a 1200×630 JPG/PNG at `public/og-image.jpg`. Until the owner provides one, "
               "the cheapest interim is to reuse an existing image:"))
story.append(p("`src/components/Seo.tsx:26`:"))
story.append(code(
    '- const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;\n'
    '+ const DEFAULT_IMAGE = `${SITE_URL}/kinesis-transport-kombi.jpeg`;'))
story.append(p("…and copy `slike/kinesis-transport-kombi.jpeg` to "
               "`public/kinesis-transport-kombi.jpeg` so the URL resolves. This is a stopgap; "
               "a proper 1200×630 with brand text is still the right answer."))

# F-3
story.append(Paragraph("F-3 (B-3) — Fix Croatian locative case", H3))
story.append(p("Replace the heuristic with a per-location field."))
story.append(p("`src/lib/locations.ts` — add a `locative` field to LocationData:"))
story.append(code(
    'export type LocationData = {\n'
    '  ...\n'
    '  city: string;\n'
    '  locative: string;  // e.g. "Splitu", "Kaštelima", "Braču"\n'
    '  ...\n'
    '};'))
story.append(p("Fill in:"))
story.append(code(
    '{ city: "Split",   locative: "Splitu",    ... },\n'
    '{ city: "Solin",   locative: "Solinu",    ... },\n'
    '{ city: "Kaštela", locative: "Kaštelima", ... },\n'
    '{ city: "Trogir",  locative: "Trogiru",   ... },\n'
    '{ city: "Omiš",    locative: "Omišu",     ... },\n'
    '{ city: "Brač",    locative: "Braču",     ... },\n'
    '{ city: "Hvar",    locative: "Hvaru",     ... },\n'
    '{ city: "Vis",     locative: "Visu",      ... },\n'
    '{ city: "Šolta",   locative: "Šolti",     ... },'))
story.append(p("`src/pages/LocationPage.tsx:72`:"))
story.append(code(
    '- title={`Što radimo u ${location.city.endsWith("a") || location.city.endsWith("š") ? location.city + "u" : location.city}`}\n'
    '+ title={`Što radimo u ${location.locative}`}'))
story.append(p("And `LocationPage.tsx:131` (CTABand title) — same fix:"))
story.append(code(
    '- <CTABand title={`Trebate selidbu ili prijevoz u ${location.city}?`} ... />\n'
    '+ <CTABand title={`Trebate selidbu ili prijevoz u ${location.locative}?`} ... />'))

# F-4
story.append(Paragraph("F-4 (B-4) — Move EmailJS IDs to env vars", H3))
story.append(p("`src/components/ContactSection.tsx:11-13`:"))
story.append(code(
    '- const EMAILJS_SERVICE_ID  = "service_73nbq1k";\n'
    '- const EMAILJS_TEMPLATE_ID = "template_ff74b8e";\n'
    '- const EMAILJS_PUBLIC_KEY  = "sysll8DVvubfBv9ky";\n'
    '+ const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;\n'
    '+ const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;\n'
    '+ const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;'))
story.append(p("Add `.env.example` (and `.env.local`, gitignored) and configure the same three "
               "vars in Vercel project settings. They will still ship to the client (Vite env "
               "vars are public) but at least they aren't in source control and can be rotated "
               "without a code change. Combine with F-5 to actually limit damage."))

# F-5
story.append(Paragraph("F-5 (B-5) — Honeypot + minimal validation", H3))
story.append(p("`src/components/ContactSection.tsx`:"))
story.append(code(
    '- const [formData, setFormData] = useState({ name: "", phone: "", message: "" });\n'
    '+ const [formData, setFormData] = useState({ name: "", phone: "", message: "", website: "" });\n'
    '\n'
    '  const handleSubmit = (e: React.FormEvent) => {\n'
    '    e.preventDefault();\n'
    '-   if (!formData.name.trim() || !formData.phone.trim()) return;\n'
    '+   if (!formData.name.trim() || !formData.phone.trim()) return;\n'
    '+   if (formData.website) return;                           // honeypot\n'
    '+   if (!/^[+0-9 ()/\\-]{6,20}$/.test(formData.phone)) {     // basic phone shape\n'
    '+     toast({ title: t("contact.errorTitle"), description: t("contact.errorDesc") });\n'
    '+     return;\n'
    '+   }\n'
    '    setSending(true);'))
story.append(p("And in JSX, add the honeypot field (visually hidden — not `display:none`, "
               "because some bots skip those):"))
story.append(code(
    '<input\n'
    '  type="text"\n'
    '  name="website"\n'
    '  tabIndex={-1}\n'
    '  autoComplete="off"\n'
    '  value={formData.website}\n'
    '  onChange={(e) => setFormData({ ...formData, website: e.target.value })}\n'
    '  className="absolute left-[-9999px] w-px h-px"\n'
    '  aria-hidden="true"\n'
    '/>'))
story.append(p("For real protection, add Cloudflare Turnstile or hCaptcha — but the honeypot "
               "alone kills 95% of automated form-bots."))

# F-6
story.append(Paragraph("F-6 (B-6) — Generate 404.html so Vercel serves the real NotFound", H3))
story.append(p("In `src/routes.tsx`, add an explicit `/404` path before the wildcard:"))
story.append(code(
    '{\n'
    '  path: "404",\n'
    '  lazy: () => import("./pages/NotFound"),\n'
    '  entry: "src/pages/NotFound.tsx",\n'
    '},\n'
    '{\n'
    '  path: "*",\n'
    '  lazy: () => import("./pages/NotFound"),\n'
    '  entry: "src/pages/NotFound.tsx",\n'
    '},'))
story.append(p("Verify after `npm run build` that `dist/404.html` exists. Vercel automatically "
               "serves `404.html` for unmatched routes when `cleanUrls: true`."))

# F-7
story.append(Paragraph("F-7 (B-8) — Lift BottomNav into PageLayout (route-aware)", H3))
story.append(p("Move `<BottomNav />` from Index.tsx into PageLayout.tsx and have BottomNav itself "
               "decide what to do based on route. Replace `<a href=\"#hero\">` etc. with `<Link>` "
               "to `/` + hash, falling back to navigating to `/kontakt` for the CTA when not "
               "on home (mirror what Navbar does in `goToContact`)."))

# F-8
story.append(Paragraph("F-8 (B-9) — Bundle flags locally", H3))
story.append(p("Drop two SVGs in `src/assets/flags/` (e.g. from the `flag-icons` package or "
               "copies from flagcdn)."))
story.append(code(
    '+ import hrFlag from "@/assets/flags/hr.svg";\n'
    '+ import gbFlag from "@/assets/flags/gb.svg";\n'
    '  const flags = [\n'
    '-   { lang: "hr", src: "https://flagcdn.com/hr.svg", label: "HR" },\n'
    '-   { lang: "en", src: "https://flagcdn.com/gb.svg", label: "EN" },\n'
    '+   { lang: "hr", src: hrFlag, label: "HR" },\n'
    '+   { lang: "en", src: gbFlag, label: "EN" },\n'
    '  ] as const;'))
story.append(p("Or even cheaper — ship Unicode flag emojis as text, no images at all."))

# F-9
story.append(Paragraph("F-9 (B-10) — Block crawling on the Vercel preview only", H3))
story.append(p("Extend `scripts/generate-host-config.mjs` (already exists per package.json) to "
               "swap robots.txt on non-production deploys:"))
story.append(code(
    'if (process.env.VERCEL_ENV !== "production") {\n'
    '  await writeFile("dist/robots.txt", "User-agent: *\\nDisallow: /\\n");\n'
    '}'))
story.append(p("Production build (custom domain) keeps the open robots.txt; preview builds ship "
               "a disallow."))

# F-10
story.append(Paragraph("F-10 (B-11) — Drop unused i18n key", H3))
story.append(p("`src/i18n/locales/{hr,en}/translation.json`:"))
story.append(code('-   "city": "Split, Hrvatska",   (and EN equivalent)'))

# F-11..13
story.append(Paragraph("F-11..F-13 (B-12, B-13) — Content tasks (owner)", H3))
story.append(bullet("Replace placeholder pricing in `src/pages/Cjenik.tsx` with real numbers."))
story.append(bullet("Fill in real fleet specs in `src/pages/VozniPark.tsx`."))
story.append(bullet("Add `neighborhoods` array to Solin, Trogir, Omiš, Brač, Hvar, Vis, Šolta "
                    "entries in `src/lib/locations.ts` (Split + Kaštela already have them)."))

story.append(Spacer(1, 0.5*cm))
story.append(hr())

# Summary
story.append(Paragraph("Verification after fixes", H2))
story.append(bullet("After F-1: `curl …/kontakt | grep canonical` returns exactly ONE line."))
story.append(bullet("After F-2: `curl -sI …/og-image.jpg` returns 200 (or whatever path you chose)."))
story.append(bullet("After F-3: `curl …/selidbe-kastela | grep 'Što radimo u'` shows \"Kaštelima\"."))
story.append(bullet("After F-4: search bundle for \"service_73nbq1k\" — should return nothing."))
story.append(bullet("After F-5: try submitting empty/invalid phone — gets rejected client-side."))
story.append(bullet("After F-6: `curl -sI …/this-does-not-exist` returns 404 AND HTML title is "
                    "the NotFound page."))
story.append(bullet("Re-run Lighthouse on / and on /kontakt — SEO score should improve."))

story.append(Spacer(1, 0.3*cm))
story.append(p("**What I could not verify without a browser**: form actually submitting end-to-end "
               "(only the success-toast path), dropdown hover/click on touch devices, framer-motion "
               "animation glitches, and Lighthouse / Core Web Vitals numbers. Recommend a manual "
               "smoke test of the form and a Lighthouse run after F-1..F-6 land."))

# --- footer / page numbers ---
def on_page(canvas, doc):
    canvas.saveState()
    canvas.setFont("Body", 8)
    canvas.setFillColor(GREY)
    canvas.drawString(2*cm, 1.0*cm, "Kinesis Transport — QA Audit · 2026-05-01")
    canvas.drawRightString(A4[0] - 2*cm, 1.0*cm, f"Page {doc.page}")
    canvas.restoreState()

doc.build(story, onFirstPage=on_page, onLaterPages=on_page)
print(f"Wrote {out_path} ({os.path.getsize(out_path)} bytes)")
