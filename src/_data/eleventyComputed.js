const { execSync } = require("child_process");

// Real last-edited dates for the sitemap: the newest git commit that touched the page's source
// (and, for the generated city pages, the shared template and city data).
const cache = {};
function gitDate(file) {
    if (cache[file] !== undefined) return cache[file];
    try {
        cache[file] = execSync(`git log -1 --format=%cI -- "${file}"`, { stdio: ["ignore", "pipe", "ignore"] }).toString().trim() || null;
    } catch (e) {
        cache[file] = null;
    }
    return cache[file];
}
function newest(files) {
    const dates = files.map(gitDate).filter(Boolean).sort();
    return dates.length ? new Date(dates[dates.length - 1]) : undefined;
}

module.exports = {
    lastmod: (data) => {
        const input = data.page && data.page.inputPath ? data.page.inputPath.replace(/^\.\//, "") : "";
        if (!input) return undefined;
        const files = [input];
        if (input.endsWith("service-area.html")) files.push("src/_data/locations.js");
        if (input.endsWith("service-areas.html")) files.push("src/_data/locations.js");
        return newest(files);
    },
    sitemap: (data) => {
        const url = (data.page && data.page.url) || "";
        let priority = 0.5;
        if (url === "/") priority = 1.0;
        else if (["/crawlspace-encapsulation/", "/mold-remediation/", "/sump-pump-dehumidifier/", "/prebatt-insulation/"].includes(url)) priority = 0.9;
        else if (url === "/service-areas/") priority = 0.8;
        else if (url.startsWith("/service-areas/")) priority = 0.7;
        return { priority, changefreq: "monthly" };
    },
};
