# Re-Audit: deploy-preview-1--mandmcrawlspacerenovations.netlify.app
Date: 2026-09-24 (PR #1, branch `seo-audit-fixes`, after the Phase 1–4 fixes)
No changes made — read-only audit, full recommendation list (not capped).

## Where things stand
Of the 25 items from the original audit's action plan, roughly 15 were implemented in this PR and are verified live on the preview below. This re-audit verifies those fixes, and separately surfaces recommendations that are still open — including one newly-diagnosed technical bug that wasn't visible in the first pass.

---

## ✅ Confirmed fixed (verified live on the preview)

1. `/sitemap.xml` resolves correctly (200, `application/xml`, 8 correct URLs, no lorem posts, no `/admin/`).
2. The 3 lorem-ipsum blog posts are gone; `/blog/` now shows "No Recent Posts" cleanly instead of garbage content.
3. Every page has exactly one `<h1>` (was missing on 8 pages).
4. Zero placeholder alt text (`library`/`mechanic`/`gavel`/`lawyers`/`construction`/`cabinets`/`field`/`stripes`) found anywhere.
5. Every image has both an `alt` and a `loading` attribute.
6. `/reviews/` and `/blog/` have real titles/meta descriptions (no more "Meta description for the page" or "Code Stitch Web Designs").
7. Homepage title tag is 58 characters (was 98).
8. `og:image` is an absolute URL on every page.
9. Footer "Service Areas" links now point to `/contact/` (previously had no `href` at all).
10. `Service` + `FAQPage` + `BreadcrumbList` schema present and valid on all 4 service pages.
11. `Review`/`AggregateRating` + `BreadcrumbList` schema present and valid on `/reviews/` (built from the real 9 published reviews).
12. Service pages expanded from ~390–430 words to 906–1,006 words each.
13. Old URLs (`/moldremediation/`, `/crawlspaceencapsulations/`, `/sump/`, `/prebatt/`) all 301-redirect to the new hyphenated URLs.
14. `llms.txt` is live with correct service/page links.
15. Contact form now uses the `data-netlify="true"` + `netlify-honeypot` pattern (Netlify strips the marker attributes from served HTML after registering the form at deploy time — this is expected behavior, not a bug; the functional hidden `form-name` and `bot-field` inputs are still present) and has a "Service Needed" dropdown.

---

## 🆕 New finding from this pass

### Critical — Broken JPEG fallback images on 3 pages
The hero banner `<picture>` element on **`/contact/`**, **`/prebatt-insulation/`**, and **`/sump-pump-dehumidifier/`** has a dead final `<img src>`, confirmed 404:
- `/contact/`: `<img src="/assets/images/temp-d344c00d.jpeg">` → **404**
- `/prebatt-insulation/`: same `temp-*.jpeg` pattern → **404**
- `/sump-pump-dehumidifier/`: final `<img src>` points to `crawlspace-after2.jpeg`, which doesn't exist at all (only `.webp` exists) — and this page offers **no AVIF source either**, so any visitor whose browser doesn't support WebP sees a broken image with nothing to fall back to.

**Root cause, confirmed in the source:** each of these 3 templates references a `.jpg`/`.jpeg` filename that doesn't exist in `src/assets/images/portfolio/` — only a `.webp` version of each file exists (`clean-crawlspace1.webp`, `blow-in-attic.webp`, `crawlspace-after2.webp`). The Sharp image-processing plugin can't find the source file to generate the JPEG variant, fails silently during the build (visible as `ENOENT` warnings in the build log), and emits a placeholder `temp-*.jpeg` path that's never actually written to the output — so the browser requests it and gets a 404.

**Why this matters:** the `<img src>` is the universal fallback used by any browser without AVIF/WebP support, by screen readers, and by tools (social-share scrapers, some crawlers) that don't fully parse `<picture>`/`<source>`. On these 3 pages, that fallback is currently a broken-image icon instead of the hero photo — on `/sump-pump-dehumidifier/` specifically, there's no AVIF fallback either, so the failure mode is broader.

**Fix:** either add real `.jpg`/`.jpeg` source files for these three images, or (simpler) change the three `| jpeg` conversion calls in `contact.html`, `prebatt.html`, and `sump.html` to reference the existing `.webp` source file (same pattern already used correctly for the AVIF/WebP `<source>` tags on those same lines) instead of a nonexistent `.jpg`/`.jpeg` filename.

---

## Still open (not addressed in this PR)

### Schema
- **Home `LocalBusiness` schema and blog post `Article` schema remain disabled** — the `{% include %}` calls in `src/index.html` and `src/_includes/layouts/post.html` are still commented out. This is now a bit more conspicuous: the reviews and service pages have real schema, but the homepage — the page most likely to be crawled and cited — still has none.
- **NAP name mismatch is now live in structured data.** `src/_data/client.js` has `name: "M&M Crawlspace Renovations"` (with an ampersand), but every piece of visible copy (titles, footer, OG tags) says "MM Crawlspace Renovations" (no ampersand). This mismatch is now baked directly into the live `Service` schema's `provider.name`, the `Review`/`LocalBusiness` schema on `/reviews/`, and `llms.txt` — all three now assert a business name that doesn't match what's shown on the page or (presumably) the Google Business Profile. Worth fixing before this gets indexed.
- Minor: the `Service` schema's `name` field is set to the full SEO title string (e.g. "Mold Remediation & Removal | Raleigh, Cary, & Durham | MM Crawlspace Renovations") rather than a clean service name like "Mold Remediation" — not wrong, but not ideal schema hygiene.
- The `Service` schema's `provider` object doesn't include a `PostalAddress`; only name/phone/email/url. Low priority, but worth adding once the NAP mismatch above is resolved.

### Content
- **`/blog/` is now an empty, thin page** ("No Recent Posts", ~113 words) that's still in the sitemap and indexable. That's a big improvement over lorem-ipsum spam, but it's still a decision point: either commit to writing real posts, or pull the blog route (and its sitemap entry) entirely until there's real content behind it.
- Blog link in the main nav is still commented out (`src/_includes/sections/header.html`), including the malformed `<!-- -->` comment markers noted in the original audit.
- No E-E-A-T signals added (licensing/certification detail beyond "Fully Insured," years in business, named team bios/credentials).
- Social links in `client.js` still point to Facebook's/Instagram's homepages rather than the business's actual profiles, so they remain commented out in the footer.

### Technical
- **No real Core Web Vitals data** — still couldn't get PageSpeed Insights/CrUX data (rate-limited, no API key configured). Recommend running this once a key is available or checking Search Console directly.
- **Missing security headers** — `X-Content-Type-Options`, `X-Frame-Options`/CSP, `Referrer-Policy`, `Permissions-Policy` are still absent. Not a ranking factor, but affects Lighthouse Best Practices and general hardening.
- The `http`/non-www double-redirect fix was added to `netlify.toml` but **can't be verified on this preview** — the rule targets the literal production hostname, so it only takes effect once merged. Worth a follow-up check on production after merge.
- The preview correctly serves `x-robots-tag: noindex` — this is expected Netlify deploy-preview behavior (not present on production), just flagging so it isn't mistaken for a real issue if you check headers before merging.
- HSTS on the preview shows `includeSubDomains; preload`, stronger than what the original audit found on production (`max-age` only). Worth re-checking production headers after merge to confirm this isn't just a Netlify-subdomain default that won't carry over to the custom domain.

### Images
- Generic, business-irrelevant stock photography (`cabinets.jpg`) is still used as a decorative background on the CTA section and blog/post banner. Alt text is now correctly marked decorative, but the image itself has nothing to do with the business — worth swapping for a real project photo at some point.

### Analytics (not a scored category, but material)
- **Still no GA4, Google Tag Manager, Meta Pixel, or call tracking anywhere.** None of the fixes in this PR (or any future ones) can be measured for actual impact on traffic or leads without this.

---

## Summary count
- **15 items verified fixed**
- **1 new critical bug found** (broken JPEG fallback images, 3 pages)
- **11 items still open** from the original audit (unchanged from before, not in this PR's scope)
