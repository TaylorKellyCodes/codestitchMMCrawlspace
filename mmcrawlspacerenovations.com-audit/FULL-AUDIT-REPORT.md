# SEO Audit: mmcrawlspacerenovations.com
Date: 2026-09-22
Business type: Local Service / Service-Area Business (crawl space encapsulation, mold remediation, sump pump/dehumidifier install, prebatt insulation) — Raleigh-Durham-Cary-Apex, NC
Platform: Eleventy (static site), hosted on Netlify
Pages audited (live): 12 (home, 4 service pages, reviews, contact, blog index, 3 blog posts, HTML sitemap)
No changes were made to the site or repo. Read-only audit.

## SEO Health Score: 54/100

| Category | Weight | Score |
|---|---|---|
| Technical SEO | 22% | 55/100 |
| Content Quality | 23% | 45/100 |
| On-Page SEO | 20% | 50/100 |
| Schema / Structured Data | 10% | 5/100 |
| Performance (CWV) | 10% | N/A — not measured (see Performance section) |
| AI Search Readiness | 10% | 40/100 |
| Images | 5% | 45/100 |

## Top 5 Critical Issues
1. Structured data (LocalBusiness + Article schema) is fully built but **commented out** — zero schema live anywhere on the site.
2. Three lorem-ipsum placeholder blog posts are **live, indexed in the sitemap, and linking out to ~20 fake/garbage external domains**.
3. `sitemap.xml` (the one declared in `robots.txt`) **404s** on the live site.
4. 8 of 12 pages have **no `<h1>`** — the visible page heading is rendered as a `<span>`, invisible to heading-based SEO signals.
5. No analytics/tracking of any kind (no GA4, no GTM, no call tracking) — there is no way to measure organic traffic, conversions, or the impact of any of these fixes.

## Top 5 Quick Wins
1. Uncomment the two existing schema includes (`home-schema.html`, `post-schema.html`) — this alone is a few minutes of work for real LocalBusiness/Article markup.
2. Fix the placeholder `alt` text (`"library"`, `"mechanic"`, `"gavel"`, `"lawyers"`, `"construction"`, `"cabinets"`, `"field"`, `"stripes"`) left over from the CodeStitch template.
3. Add a real meta description + title to `/reviews/` and `/blog/` (currently the CodeStitch placeholder "Meta description for the page" / "... | Code Stitch Web Designs").
4. Fix `client.js` social links — `facebook` and `instagram` point to the platform homepages, not the business's own profiles (which is why they're currently commented out in the footer).
5. Deploy/regenerate `sitemap.xml` so it actually resolves at the URL declared in `robots.txt`.

---

## 1. Technical SEO

### Sitemap / robots.txt conflict (Critical)
- `robots.txt` declares `Sitemap: https://www.mmcrawlspacerenovations.com/sitemap.xml`, but that URL returns **404** live.
- The file exists in the repo (`public/sitemap.xml`) and lists 11 URLs (including the 3 lorem-ipsum blog posts), so it's either not being deployed or is being overwritten/blocked post-build.
- A **second, different** sitemap-shaped resource exists at `/sitemap/` (no `.xml`) — it returns HTTP 200 but is served with `content-type: text/html`, and only lists 7 URLs (it excludes the blog entirely, including the blog index). This looks like the auto-generated Eleventy sitemap output living at a path that doesn't match what `robots.txt` points to.
- Net effect: Search Console/crawlers following `robots.txt` hit a dead end, and the one sitemap-like resource that does load isn't valid XML content-type and is missing content.
- **Recommendation:** Pick one canonical sitemap. Serve it at exactly `/sitemap.xml` with `content-type: application/xml`, make sure it deploys with the build, and decide whether the 3 placeholder blog posts belong in it at all (see Content section).

### robots.txt
- Otherwise fine: blocks `/admin/`, allows everything else, single sitemap line (once fixed).

### Canonical tags
- Present and self-referencing and correct on all 11 real pages. Good.
- No canonical on `/sitemap/` (minor, since it's not really an indexable content page — but it is currently indexable, see below).

### Redirects
- `https://` + `www` is the canonical served version (200).
- `https://` non-www → 301 → `https://www` — good, single hop.
- `http://www` → 301 → `https://www` — good, single hop.
- `http://` non-www → 301 → `https://` non-www → 301 → `https://www` — **two redirect hops** instead of one. Minor crawl-budget/latency waste; the non-www→https step should go straight to the final `https://www` URL.

### HTTPS / security headers
- HTTPS enforced site-wide with HSTS (`max-age=31536000`) — good, though it lacks `includeSubDomains` and `preload`.
- Missing: `X-Content-Type-Options: nosniff`, `X-Frame-Options` / `frame-ancestors` CSP, `Referrer-Policy`, `Permissions-Policy`. None of these are SEO-ranking factors directly, but they do affect Lighthouse's "Best Practices" score and are flagged in security-conscious audits.

### Indexability
- No `noindex` anywhere (confirmed no `robots` meta tag on any page) — fine for real pages, but this also means the 3 lorem-ipsum blog posts and the orphaned `/sitemap/` HTML-sitemap resource are all indexable right now.
- `viewport` meta present on all real content pages. Missing on `/sitemap/` (again, because it isn't really a page).

### Orphaned/dead routes in the repo
- `public/about/`, `public/project-one/`, `public/project-two/`, `public/sump-pump-&-dehumidifier-installs/` exist in the build output but 404 live and aren't linked anywhere — leftover from the template/earlier build. Not harming SEO since they're not deployed/linked, but worth deleting from the repo to avoid confusion (a prior commit already removed the About *page* from nav, but the folder is still around).

### llms.txt / AI crawler access
- No `llms.txt` (404). Optional, low priority — Google Search itself ignores it, but if the user cares about GEO/AI-assistant visibility, it's a cheap add.
- No explicit `robots.txt` allowances/blocks for AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.) — currently they're allowed by the blanket `Allow: /`, which is fine if AI visibility is desired.

---

## 2. Content Quality

### Lorem-ipsum blog posts live in production (Critical)
- `/blog/acuti-modo/`, `/blog/sucos-creati/`, `/blog/canitiem-saxa/` are 100% placeholder "Lorem markdownum..." filler text from the CodeStitch starter template — titles, body copy, and meta descriptions are all nonsense Latin.
- Each of these posts links out to 7–9 **external, non-existent-looking domains** (`pars.net`, `invirginibus.org`, `alumnaesibi.com`, `noletiacet.net`, etc.) — this is a real problem: outbound links to junk/parked/unrelated domains from a live indexed page is a spam signal and provides zero value to readers.
- They're in the sitemap and fully crawlable/indexable today.
- **Recommendation:** Either (a) replace with real, business-relevant content and real citations, or (b) `noindex` + remove from the sitemap + unpublish until real content exists. Do not leave placeholder content indexable.

### Blog is orphaned from navigation
- The `/blog/` link in the main nav (`src/_includes/sections/header.html`) is **commented out**, so there's no way for a site visitor to reach the blog from the UI — only search engines following the sitemap (or direct links) can find it. Combined with the placeholder content above, this reads as an unfinished feature that shipped to production.
- Note: the commented-out block also has mismatched comment markers (`<!--` opens twice before a single `-->` closes) — worth a look since malformed comments can behave unpredictably depending on the templating engine.

### Thin content on service pages
- Service pages run 390–426 words each (crawl space encapsulation, mold remediation, prebatt, sump). That's on the thin side for competitive local-service keywords — competitors targeting "crawl space encapsulation Raleigh" etc. typically run 800–1,500+ words covering process, materials, signs you need the service, cost factors, FAQs, and locations served.
- No FAQ content/schema on any service page — a big missed opportunity for a home-services vertical where "how much does X cost," "how long does X take," "is X covered by insurance" are exactly what people search and what earns FAQ rich results.
- `/contact/` is only 198 words — acceptable for a contact page, but it currently carries none of the NAP/schema reinforcement it could.

### E-E-A-T signals
- No author/reviewer bylines, credentials, licensing/certification info (beyond "Fully Insured" in the footer), or years-in-business stated anywhere.
- No case studies, before/after project detail, or named certifications (e.g., IICRC for mold remediation) — for a mold-remediation business in particular, trust/expertise signals matter both for users and for Google's YMYL-adjacent treatment of health-related claims (mold affects "your family's health," per the homepage copy).

### Duplicate content
- No meaningful duplication found across the 12 pages audited.

---

## 3. On-Page SEO

### Missing H1 on 8 of 12 pages (Critical)
- Home page and the 3 lorem-ipsum blog posts have exactly one `<h1>`, which is correct.
- `/crawlspaceencapsulations/`, `/moldremediation/`, `/prebatt/`, `/sump/`, `/reviews/`, `/contact/`, `/blog/`, `/sitemap/` have **zero `<h1>`**.
- Root cause found in the templates: the interior-page banner renders its heading as `<span class="cs-int-title">Crawlspace Encapsulation</span>` instead of an `<h1>`. This is a template-level bug affecting every interior page, not a one-off. Fixing the shared banner component (or each page template) fixes all 8 pages at once.

### Title tags
- Home page title is 98 characters (`Crawl Space Encapsulation & Mold Remediation | Raleigh, Cary, & Durham | MM Crawlspace Renovations`) — well past Google's ~580px/~60-char practical display limit, so it will be truncated in search results.
- `/reviews/` title is `"Reviews | Code Stitch Web Designs"` and `/blog/` title is `"Blog | Code Stitch Web Designs"` — these are leftover **template/agency placeholders**, not the business name, and contain zero target keywords or location terms.
- The 3 blog posts have raw lorem-ipsum titles ("Acuti modo," "Sucos Creati," "Canitiem Saxa").
- Service page titles (63–80 characters) are in reasonable shape and do include service + city terms.

### Meta descriptions
- `/reviews/` and `/blog/` use the literal placeholder string `"Meta description for the page"` — not written at all.
- The 3 blog posts have lorem-ipsum meta descriptions.
- Home and the 4 service pages + `/contact/` have real, reasonably well-written descriptions (174–191 characters, on the long side but acceptable — Google typically displays ~155–160 before truncating on desktop).

### Open Graph / social sharing
- `og:image` is a **relative URL** (`/assets/images/portfolio/mmlogo.png`, `/assets/images/blog/landing.jpg`) on every page. Per the OG spec this should be an absolute URL; many platforms (LinkedIn, some Facebook crawlers, Slack unfurling, iMessage) will fail to resolve a relative `og:image` and show no preview image when the page is shared.
- Otherwise `og:title`/`og:description` mirror the `<title>`/meta description correctly where those are set.

### Heading structure beyond H1
- H2/H3 usage is present and reasonably logical on service pages (2 H2s, 1 H3 each) — the issue is specifically the missing H1, not a broken hierarchy overall.

### Internal linking
- "Service Areas" list in the footer (Raleigh, NC / Cary, NC / Apex, NC / Durham, NC) renders as `<a class="cs-nav-link">` elements **with no `href` at all** — they are dead, non-functional links, not even pointing to `#`. This is both a broken-UX issue and a missed internal-linking/local-relevance opportunity — these should link to location-specific landing content (or at minimum to `/contact/`) rather than render as inert text dressed up as a link.
- No breadcrumb navigation/schema anywhere.
- Reasonable internal link counts otherwise (16–23 internal links per real page).

---

## 4. Schema / Structured Data (Critical — lowest-scoring category)

- **Zero structured data live anywhere on the site** — confirmed across all 12 pages.
- The code for this already exists and is well-built:
  - `src/_includes/components/home-schema.html` — a complete `LocalBusiness` JSON-LD template (name, image, phone, email, address, url, sameAs) — but the `{% include %}` call in `src/index.html` is wrapped in an HTML comment, so it never renders.
  - `src/_includes/components/post-schema.html` — a complete `Article` JSON-LD template (headline, description, image, datePublished, author, publisher) — same problem: the include in `src/_includes/layouts/post.html` is commented out.
- Neither is included on the 4 service pages or `/contact/`/`/reviews/` at all (only home and post layout reference them), so even once uncommented, service pages and the reviews page would still have no schema.
- **Missing schema types with real business value here:**
  - `Service` schema on each of the 4 service pages (crawl space encapsulation, mold remediation, sump pump/dehumidifier, prebatt insulation).
  - `Review`/`AggregateRating` schema on `/reviews/` — there's a whole page of testimonials with no markup to make them eligible for rich results.
  - `FAQPage` schema if FAQ content is added to service pages (see Content section).
  - `BreadcrumbList` schema, once/if breadcrumbs are added.
  - Note: `LocalBusiness` is a very generic type — for this business a more specific subtype like `HomeAndConstructionBusiness` (or a Home Services-appropriate type) would better represent the business to Google, if supported by the target rich-result types being pursued.

### Data quality issue that will surface once schema is enabled
- `src/_data/client.js` has `name: "M&M Crawlspace Renovations"` (with an ampersand), but every piece of visible on-page copy (title tags, footer body copy, OG tags) says **"MM Crawlspace Renovations"** (no ampersand). Once the `LocalBusiness` schema is turned on, this becomes a real NAP (Name/Address/Phone) inconsistency between structured data and visible content/Google Business Profile — worth reconciling before enabling schema, not after.
- `client.js` address only has `city`, `state`, `zip`, `country` — no `lineOne` (street address). If this is a storefront/office address that appears on the Google Business Profile, the schema should include it for full NAP consistency; if this is a service-area business with no public office, that's fine, but then the schema should likely be structured as a `Service`/`LocalBusiness` with an explicit service-area (`areaServed`) rather than implying a fixed address is intentionally omitted.

---

## 5. Performance (Core Web Vitals)

- **Not directly measured** — the PageSpeed Insights API call in this audit hit the shared public rate limit (`PSI rate limit exceeded (240 QPM / 25,000 QPD)`) with no API key configured, and CrUX field data requires the same key. To get real LCP/INP/CLS numbers, either configure a Google API key for this tool or run PageSpeed Insights / Search Console directly for this domain.
- Qualitative signals from the code, which are genuinely good:
  - Responsive `<picture>` elements with AVIF → WebP → JPEG fallback chains and per-breakpoint (mobile/tablet/desktop) resized sources on hero/banner images.
  - `loading="eager"` correctly used on above-the-fold hero images and `loading="lazy"` on most below-the-fold images.
  - Explicit `width`/`height` attributes present on all images sampled (no obvious CLS risk from unsized images).
- One thing worth checking manually: 4–8 images per page came back with **no `loading` attribute at all** (neither `eager` nor `lazy`) in the automated scan — worth confirming these are intentionally eager (e.g., icons rendered above the fold) rather than an oversight, since un-lazied below-the-fold images are a common LCP/bandwidth drag.
- No third-party scripts/tags detected at all on the homepage (see Analytics finding below) — which is good for performance, bad for measurement.

---

## 6. Images

- **Alt text is broken across the entire site with leftover CodeStitch template placeholder values.** This is not a "some images missing alt text" issue — it's specific, wrong, nonsensical alt text describing a completely different (template demo) business:
  - `alt="library"` — used on the hero/banner image on **every single interior page** (crawlspace encapsulation, mold remediation, prebatt, sump, reviews, contact, blog, blog post layout) — the actual images are things like a vapor-barrier install photo, not a library.
  - `alt="mechanic"`, `alt="gavel"`, `alt="lawyers"` on the homepage — these describe a law firm/auto shop, not a crawl space company.
  - `alt="construction"` used generically (2×) on all 4 service pages — vague, doesn't describe what's actually pictured.
  - `alt="cabinets"` on the CTA section image.
  - `alt="field"`, `alt="stripes"`, `alt="graphic"`, `alt="icon"` — generic/non-descriptive.
  - By contrast, `alt=""` is correctly used on purely decorative logo/nav icons that are already `aria-hidden="true"` — that part is done right.
  - **This affects both accessibility (screen readers) and image search / on-page relevance signals**, and because it's centralized in a handful of shared section/page templates, it's fixable in a small number of edits rather than 60+ individual image edits.
- Automated scan also flagged 4–8 images per page with no `alt` attribute at all (separate from the placeholder-text ones above) — concentrated in icon/star-rating clusters on `/reviews/` (9× `alt="stars"`, 9× `alt="profile picture"` — those two are actually fine/descriptive, but the missing-alt count suggests a few more icons slipped through).
- Modern formats (AVIF/WebP) are already served with JPEG fallback — good, no format recommendation needed there.
- No images found missing explicit width/height.

---

## 7. AI Search Readiness (GEO)

- No structured data (see Schema section) means AI Overviews/ChatGPT/Perplexity have nothing beyond raw text to extract entity facts (business name, services, service area, hours, contact) from — schema is one of the highest-leverage fixes for AI citability here.
- Content is currently too thin/generic on service pages to be a strong candidate for direct citation in an AI answer about "how does crawl space encapsulation work" or "signs of crawl space mold" — competitive AI answers tend to pull from pages with clear step-by-step process explanations and specific numbers (square footage, timelines, cost ranges).
- No FAQ content (see Content section) — FAQ-style Q&A blocks are disproportionately favored by AI answer engines because they map directly to conversational queries.
- No `llms.txt` (optional, low priority as noted above).
- No brand-mention/citation signals evaluated beyond on-site content (would require external search/backlink tooling not available in this pass).

---

## 8. Analytics & Measurement (not a scored category, but material)

- No Google Analytics (GA4), Google Tag Manager, Meta Pixel, call-tracking script, or any other measurement tag was found on the homepage.
- Without this, none of the above fixes can be measured for impact (organic traffic, conversion rate on the free-inspection CTA, which service pages actually drive leads). Recommend adding GA4 (and, given phone leads are clearly the primary conversion here — `tel:` links throughout — a call-tracking number or at minimum GA4 event tracking on `tel:`/`mailto:` clicks and the contact form).

---

## Notes on scope / what wasn't checked
- Google Business Profile, NAP consistency across external directories/citations, and review-platform signals were not checked (would require a Business Profile audit and external directory scan, not available in this pass).
- Backlink profile was not checked (no Moz/Bing Webmaster Tools API credentials configured).
- Real Core Web Vitals field/lab data was not obtained (PSI rate-limited, no API key). See Performance section.
- Crawl was limited to the 12 URLs discoverable from the two sitemap-shaped resources plus root; no deeper crawl of paginated/dynamic content was needed since the site is fully static and small.
