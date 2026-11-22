// Keyword stuffing audit for city pages.
// Usage: node scripts/audit-city-keyword-stuffing.js <built-site-dir>
// Build first: ELEVENTY_ENV=PROD npx eleventy --output=/some/dir
//
// Whitespark gives no density percentage. Its rules are qualitative: no stuffed keywords, no long
// city or zip code lists, no cookie cutter pages that only swap the city name, one keyword in the URL,
// unstuffed meta description. The thresholds below are our own heuristics for turning those rules
// into numbers. They are flags to read, not penalties Google publishes.
const fs = require("fs");
const path = require("path");

const root = process.argv[2];
if (!root) { console.error("Pass the built site directory."); process.exit(1); }
const areasDir = path.join(root, "service-areas");

// Calibrated 2026-11 against ranking Cary and Raleigh city pages from Basement Systems and Triangle Radiant Barrier:
// city name 7.6 to 16.6 per 1000 words, "crawl space" 34 to 56 per 1000, 7 to 11 city + service combos per page.
const T = {
    cityPer1000: 17,       // city name uses per 1000 words in body copy (top competitor: 16.6)
    servicePer1000: 60,    // "crawl space" uses per 1000 words (top competitor: 56)
    comboPer1000: 1000,    // unused, the absolute cap below is the check
    comboMax: 11,          // city + service combos within 6 words (top competitor: 11)
    sentenceCityRatio: 0.45, // share of sentences containing the city name
    headingCityRatio: 0.7,   // share of H2/H3 containing the city name
    titleMax: 80, metaMax: 160, // Whitespark says titles may run past 60 characters
    metaServiceTerms: 3,
    altCityRatio: 0.8,
    otherCityMentions: 8,  // mentions of other service area names (list stuffing)
    minUniquePct: 30,      // share of 6-word phrases found on no other city page (shared template text is expected)
    listItemsMax: 12,
};

const strip = (h) => h.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ");
const text = (h) => h.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&#39;|&rsquo;/g, "'")
    .replace(/\s+/g, " ").trim();
const words = (s) => s.toLowerCase().match(/[a-z0-9'’-]+/g) || [];
const count = (hay, re) => (hay.match(re) || []).length;

const slugs = fs.readdirSync(areasDir).filter((d) => fs.existsSync(path.join(areasDir, d, "index.html")));
const nameOf = (slug) => slug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(slug === "fuquay-varina" ? "-" : " ");
const pages = slugs.map((slug) => {
    const raw = fs.readFileSync(path.join(areasDir, slug, "index.html"), "utf8");
    const clean = strip(raw);
    const main = (clean.match(/<main[\s\S]*?<\/main>/i) || [clean])[0];
    return { slug, city: nameOf(slug), raw, main };
});

const grams = (w, n = 6) => { const s = new Set(); for (let i = 0; i + n <= w.length; i++) s.add(w.slice(i, i + n).join(" ")); return s; };
for (const p of pages) { p.words = words(text(p.main)); p.grams = grams(p.words); }

const rows = [];
for (const p of pages) {
    const flags = [];
    const body = text(p.main);
    const lower = body.toLowerCase();
    const n = p.words.length;
    const per1000 = (c) => (c / n) * 1000;
    const cityRe = new RegExp(`\\b${p.city}\\b`, "gi");
    const cityCount = count(body, cityRe);
    const serviceCount = count(lower, /crawl ?space/g);
    const combo = count(lower, new RegExp(`crawl ?space(?:\\s+\\S+){0,5}\\s+${p.city.toLowerCase()}|${p.city.toLowerCase()}(?:\\s+\\S+){0,5}\\s+crawl ?space`, "g"));
    const sentences = body.split(/(?<=[.!?])\s+/).filter((s) => s.split(" ").length > 3);
    const citySentences = sentences.filter((s) => cityRe.test(s) || (cityRe.lastIndex = 0)).length;
    cityRe.lastIndex = 0;
    const sentRatio = citySentences / Math.max(sentences.length, 1);

    const heads = [...p.main.matchAll(/<h([23])[^>]*>([\s\S]*?)<\/h\1>/gi)].map((m) => text(m[2]));
    const headCity = heads.filter((h) => new RegExp(`\\b${p.city}\\b`, "i").test(h)).length;
    const headRatio = headCity / Math.max(heads.length, 1);

    const title = text((p.raw.match(/<title>([\s\S]*?)<\/title>/i) || [, ""])[1]);
    const metaTag = (p.raw.match(/<meta[^>]*name=["']?description["']?[^>]*>/i) || [""])[0];
    const meta = text((metaTag.match(/content=["']([^"']*)["']/i) || [, ""])[1]);
    const h1 = text((p.raw.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [, ""])[1]);
    const metaTerms = count(meta.toLowerCase(), /crawl ?space|encapsulation|mold|sump|dehumidifier|insulation|vapor barrier/g);

    const alts = [...p.main.matchAll(/<img[^>]+alt=["']([^"']*)["']/gi)].map((m) => m[1]).filter(Boolean);
    const altCity = alts.filter((a) => new RegExp(`\\b${p.city}\\b`, "i").test(a)).length;
    const altRatio = alts.length ? altCity / alts.length : 0;

    // Cary is the business base and appears on every page by design, so it does not count as a list of other cities.
    const others = pages.filter((o) => o.slug !== p.slug && o.slug !== "cary").map((o) => o.city);
    const otherMentions = others.reduce((a, c) => a + count(body, new RegExp(`\\b${c}\\b`, "g")), 0);
    const zips = count(body, /\b2[78]\d{3}\b/g);

    const listItems = Math.max(0, ...[...p.main.matchAll(/<ul[\s\S]*?<\/ul>/gi)].map((m) => count(m[0], /<li/gi)));

    let uniq = 0;
    for (const g of p.grams) if (!pages.some((o) => o.slug !== p.slug && o.grams.has(g))) uniq++;
    const uniquePct = Math.round((uniq / Math.max(p.grams.size, 1)) * 100);

    const chk = (cond, msg) => cond && flags.push(msg);
    chk(per1000(cityCount) > T.cityPer1000, `city name ${per1000(cityCount).toFixed(1)}/1000 words`);
    chk(per1000(serviceCount) > T.servicePer1000, `"crawl space" ${per1000(serviceCount).toFixed(1)}/1000 words`);
    chk(per1000(combo) > T.comboPer1000 || combo > T.comboMax, `${combo} city + crawl space combos`);
    chk(sentRatio > T.sentenceCityRatio, `${Math.round(sentRatio * 100)}% of sentences name the city`);
    chk(headRatio > T.headingCityRatio && heads.length > 3, `${headCity}/${heads.length} headings name the city`);
    chk(title.length > T.titleMax, `title ${title.length} chars`);
    chk(meta.length > T.metaMax, `meta ${meta.length} chars`);
    chk(metaTerms > T.metaServiceTerms, `meta has ${metaTerms} service terms`);
    chk(alts.length > 3 && altRatio > T.altCityRatio, `${altCity}/${alts.length} image alts name the city`);
    chk(otherMentions > T.otherCityMentions, `${otherMentions} mentions of other service area cities`);
    chk(zips > 0, `${zips} zip codes`);
    chk(listItems > T.listItemsMax, `list with ${listItems} items`);
    chk(uniquePct < T.minUniquePct, `only ${uniquePct}% of phrases are unique to this page`);

    rows.push({ city: p.city, words: n, city1000: per1000(cityCount).toFixed(1), crawl1000: per1000(serviceCount).toFixed(1),
        combos: combo, sentPct: Math.round(sentRatio * 100), headCity: `${headCity}/${heads.length}`, titleLen: title.length,
        metaLen: meta.length, otherCities: otherMentions, uniquePct: uniquePct + "%", flags });
}

console.table(rows.map(({ flags, ...r }) => r));
console.log("\nFLAGS");
for (const r of rows) console.log(`${r.flags.length ? "!!" : "ok"} ${r.city}${r.flags.length ? ": " + r.flags.join("; ") : ""}`);
