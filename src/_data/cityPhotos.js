// Photos for each city page. The source photos are shared, but each city gets its own file name and alt text.
// The files are pre-optimized WebP copies made by scripts/make-city-images.js, so the build does no image work for them.
const locations = require("./locations.js");

// Big photos, with an accurate plain description of what each one shows.
const BIG = [
    { src: "vapor.jpg", key: "vapor-barrier-sealed-seams", desc: "Vapor barrier on a crawl space floor with sealed seams around a pier" },
    { src: "clean-crawlspace3.webp", key: "encapsulated-crawl-space-wrapped-piers", desc: "Encapsulated crawl space with a white vapor barrier on the floor and wrapped piers" },
    { src: "crawlspace-after2.webp", key: "sealed-floor-liner-wall-insulation", desc: "Encapsulated crawl space with a sealed floor liner and foil-faced insulation on the walls" },
    { src: "clean-crawlspace1.webp", key: "foil-faced-wall-insulation", desc: "Crawl space with foil-faced wall insulation and a sealed floor liner" },
    { src: "crawlspace-before1.webp", key: "wet-crawl-space-before-work", desc: "Wet crawl space with fallen insulation, debris, and standing water before work" },
    { src: "crawlspace-before2.webp", key: "dirt-floor-before-cleanup", desc: "Crawl space with a bare dirt floor, debris, and brick foundation walls before cleanup" },
    { src: "air-pipe.webp", key: "insulation-around-ductwork", desc: "Fiberglass batt insulation installed around ductwork between framing" },
    { src: "pump.jpeg", key: "dehumidifier-on-block", desc: "Crawl space dehumidifier on a cinder block above the vapor barrier" },
    { src: "vent.jpeg", key: "sealed-foundation-vent", desc: "Foundation block vent sealed with foam and a clear panel" },
];
// Output sizes (2x of what the CodeStitch layouts display).
const SBS_SIZES = [[610, 736], [826, 752], [436, 310]];
const GALLERY_SIZES = [[620, 851], [620, 738], [620, 938]]; // one picture in each of the three CodeStitch gallery columns
const HERO_SIZES = { desktop: [1600, 1000], mobile: [800, 1000] };

const nameOf = (c) => c.name;
function make(c, p, size) {
    const slug = c.slug;
    const phrase = p.own ? `${p.desc}.` : `${p.desc}. Example of our crawl space work serving ${nameOf(c)}, NC.`;
    return { file: `/assets/images/areas/${slug}-nc-${p.key}.webp`, source: p.src, alt: phrase, w: size[0], h: size[1] };
}

const out = {};
locations.forEach((c, i) => {
    const sbs = [BIG[i % 9], BIG[(i + 3) % 9], BIG[(i + 6) % 9]];
    let gal = [BIG[(i + 1) % 9], BIG[(i + 4) % 9], BIG[(i + 7) % 9]];
    out[c.slug] = {
        sbs: sbs.map((p, k) => make(c, p, SBS_SIZES[k])),
        gallery: gal.map((p, k) => make(c, p, GALLERY_SIZES[k])),
        hero: {
            desktop: `/assets/images/areas/${c.slug}-nc-crawl-space-repair-encapsulation-hero-1600.webp`,
            mobile: `/assets/images/areas/${c.slug}-nc-crawl-space-repair-encapsulation-hero-800.webp`,
            source: c.hero.src.replace("/assets/images/portfolio/", ""),
            // The Cary and Durham hero photos really are from those cities, so their alt text already says so.
            alt: /^(Cary|Durham) /.test(c.hero.alt) ? `${c.hero.alt}.` : `${c.hero.alt}. Example of our crawl space work serving ${nameOf(c)}, NC.`,
            sizes: HERO_SIZES,
        },
    };
});
module.exports = out;
