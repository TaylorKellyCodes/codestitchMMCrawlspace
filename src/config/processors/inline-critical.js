const fs = require("fs");
const path = require("path");

// Inlines the small critical stylesheet (a couple KB) into the homepage <head> so the first paint
// does not wait on an extra render-blocking request. Runs after the LESS build.
module.exports = async function () {
    const cssPath = path.join("public", "assets", "css", "critical.css");
    const htmlPath = path.join("public", "index.html");
    // Event handlers can run concurrently with the LESS build, so wait briefly for the stylesheet.
    for (let i = 0; i < 100 && !(fs.existsSync(cssPath) && fs.statSync(cssPath).size > 0); i++) {
        await new Promise((r) => setTimeout(r, 150));
    }
    if (!fs.existsSync(cssPath) || !fs.existsSync(htmlPath)) return;
    const css = fs.readFileSync(cssPath, "utf-8").replace(/\/\*# sourceMappingURL=.*?\*\//g, "").trim();
    let html = fs.readFileSync(htmlPath, "utf-8");
    const link = /<link[^>]*href=["']?\/assets\/css\/critical\.css["']?[^>]*>/i;
    if (!link.test(html)) return;
    html = html.replace(link, () => `<style>${css}</style>`);
    fs.writeFileSync(htmlPath, html);
};
