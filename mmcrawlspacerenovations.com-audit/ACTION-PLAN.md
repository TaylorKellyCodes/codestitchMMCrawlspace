# Action Plan: mmcrawlspacerenovations.com
No changes have been made — this is the full list of recommended changes, unordered within each phase but prioritized Critical → Low.

## Phase 1: Critical Fixes (this week)
1. **Fix `sitemap.xml` 404.** Make the sitemap resolve at exactly `/sitemap.xml` with `content-type: application/xml`, matching what `robots.txt` declares. Decide whether the lorem-ipsum blog posts belong in it (see #3).
2. **Deal with the 3 lorem-ipsum blog posts** (`/blog/acuti-modo/`, `/blog/sucos-creati/`, `/blog/canitiem-saxa/`): either replace with real content, or `noindex` + pull from the sitemap + unpublish until real content exists. Do not leave placeholder content with ~20 outbound links to junk domains live and indexed.
3. **Enable the existing schema.** Uncomment `{% include "components/home-schema.html" %}` in `src/index.html` and `{% include "components/post-schema.html" %}` in `src/_includes/layouts/post.html`. Before enabling, reconcile the business name mismatch (`client.js` has "M&M Crawlspace Renovations"; visible site copy says "MM Crawlspace Renovations") so schema matches on-page content and Google Business Profile.
4. **Fix the missing `<h1>` on 8 pages** (`/crawlspaceencapsulations/`, `/moldremediation/`, `/prebatt/`, `/sump/`, `/reviews/`, `/contact/`, `/blog/`, plus whatever backs `/sitemap/` if kept indexable). Root cause: the shared interior-page banner renders the page heading as `<span class="cs-int-title">` instead of `<h1>` — fix the shared component once.
5. **Add analytics/measurement.** No GA4/GTM/call-tracking exists anywhere on the site. Add GA4 at minimum, with event tracking on `tel:`/`mailto:` clicks and the contact form, before making further changes so their impact can be measured.

## Phase 2: High-Impact Improvements (weeks 2–3)
6. **Fix placeholder alt text** across shared templates: `alt="library"` (every interior-page banner), `alt="mechanic"`, `alt="gavel"`, `alt="lawyers"` (homepage), `alt="construction"` (all 4 service pages), `alt="cabinets"` (CTA section), `alt="field"`, `alt="stripes"`. Replace with descriptions of what's actually pictured.
7. **Write real title tags and meta descriptions** for `/reviews/` (currently "Reviews | Code Stitch Web Designs") and `/blog/` (currently "Blog | Code Stitch Web Designs" / "Meta description for the page").
8. **Shorten the homepage title tag** from 98 characters to roughly 60 so it doesn't truncate in search results.
9. **Fix `og:image` to use an absolute URL** (`https://www.mmcrawlspacerenovations.com/assets/images/...`) instead of a relative path, site-wide, so link previews render correctly on platforms that require absolute URLs.
10. **Fix the dead "Service Areas" links in the footer** (Raleigh, NC / Cary, NC / Apex, NC / Durham, NC currently render as `<a>` tags with no `href`). Link them somewhere meaningful (location content or `/contact/`) or convert to plain text if no destination exists yet.
11. **Fix `client.js` social links.** `facebook`/`instagram` point to the platform homepages, not the business's actual profiles — that's why they're currently commented out in the footer. Set the real URLs and re-enable, or remove the dead code if the business has no social presence yet.
12. **Collapse the double redirect** on `http://mmcrawlspacerenovations.com` (currently → `https://mmcrawlspacerenovations.com` → `https://www.mmcrawlspacerenovations.com`, two hops) to a single redirect straight to the final URL.
13. **Add `Service` schema** to each of the 4 service pages, and **`Review`/`AggregateRating` schema** to `/reviews/`.
14. **Resolve the two conflicting sitemap-shaped endpoints** (`/sitemap.xml` vs. `/sitemap/`) — pick one canonical XML sitemap and remove/redirect the other, or clarify that `/sitemap/` is meant to be a human-readable HTML sitemap page (in which case it needs a title, meta description, and normal page content, not raw unstyled XML-as-HTML).
15. **Fix the malformed HTML comment** around the Blog nav link in `header.html` (mismatched `<!--`/`-->` pairs) and decide whether to restore the Blog link to navigation once the content behind it is real.

## Phase 3: Content & Authority (month 2)
16. **Expand service page content** from ~400 words to a more competitive 800–1,500+ words per page: process explanation, materials used, signs you need the service, cost factors, typical timelines, and locations served.
17. **Add FAQ sections with `FAQPage` schema** to each service page (cost, timeline, insurance coverage, DIY vs. professional, etc.) — high-value for both traditional search snippets and AI answer engines.
18. **Add E-E-A-T signals**: licensing/certification info (e.g., IICRC for mold remediation), years in business, named team members/owner, and before/after project photos or case studies.
19. **Add breadcrumb navigation with `BreadcrumbList` schema.**
20. **Decide the blog's future.** If keeping it: write real, business-relevant posts, restore the nav link, and build out a content calendar. If not: remove it (posts, index, nav remnants, and sitemap entries) rather than leaving an orphaned, placeholder-filled section live.

## Phase 4: Monitoring & Iteration (ongoing)
21. **Get real Core Web Vitals data.** This audit's PageSpeed Insights check hit the shared public API rate limit with no key configured — configure a Google API key (or run PSI/Search Console directly) to get actual LCP/INP/CLS numbers, since performance couldn't be scored in this pass.
22. **Add security headers** (`X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`, and add `includeSubDomains`/`preload` to the existing HSTS header) — not a ranking factor directly, but affects Lighthouse Best Practices scoring and site hardening.
23. **Confirm the `loading` attribute is set intentionally** (eager vs. lazy) on the handful of images per page that currently have neither, rather than left to browser default.
24. **Clean up unused/orphaned routes in the repo** (`public/about/`, `public/project-one/`, `public/project-two/`, `public/sump-pump-&-dehumidifier-installs/`) — not live/linked, so no SEO impact, but worth removing to avoid confusion in future builds.
25. **Consider `llms.txt`** if AI-assistant visibility (ChatGPT, Perplexity, etc.) is a goal — low priority, optional, ignored by Google Search itself.

## Out of scope for this audit (would need additional access/tools)
- Google Business Profile audit, NAP consistency across external directories, and review-platform signal checks.
- Backlink profile analysis (no Moz/Bing Webmaster Tools credentials configured).
- Real-world Core Web Vitals field data (see item 21).
