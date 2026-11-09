// Makes the city-named WebP photos used on the service-area pages.
// Run from the project root: node scripts/make-city-images.js
const path = require("path");
const fs = require("fs");
const sharp = require("sharp");
const photos = require("../src/_data/cityPhotos.js");

const SRC = path.join(__dirname, "../src/assets/images/portfolio");
const OUT = path.join(__dirname, "../src/assets/images/areas");
fs.mkdirSync(OUT, { recursive: true });

async function build(srcName, outFile, w, h, quality) {
    const out = path.join(OUT, path.basename(outFile));
    if (fs.existsSync(out)) return;
    await sharp(path.join(SRC, srcName)).rotate().resize(w, h, { fit: "cover", position: "centre" }).webp({ quality }).toFile(out);
}

(async () => {
    let n = 0;
    for (const [slug, p] of Object.entries(photos)) {
        for (const ph of [...p.sbs, ...p.gallery]) { await build(ph.source, ph.file, ph.w, ph.h, 70); n++; }
        await build(p.hero.source, p.hero.desktop, p.hero.sizes.desktop[0], p.hero.sizes.desktop[1], 70); n++;
        await build(p.hero.source, p.hero.mobile, p.hero.sizes.mobile[0], p.hero.sizes.mobile[1], 68); n++;
    }
    console.log("images processed:", n);
})();
