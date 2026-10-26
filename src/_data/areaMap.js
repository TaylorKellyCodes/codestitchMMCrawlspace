// Builds a self-hosted SVG service-area map at build time: NC outline, an approximate
// 100-mile (about two-hour drive) ring around the Cameron base, and a dot per service-area city.
const fs = require("fs");
const path = require("path");
const locations = require("./locations");

module.exports = function () {
    const us = JSON.parse(fs.readFileSync(path.join(__dirname, "ncOutline.json"), "utf-8"));
    const [lonMin, lonMax, latMin, latMax] = [-81.0, -77.6, 34.0, 36.9];
    const k = Math.cos((35.4 * Math.PI) / 180);
    const S = 300;
    const W = Math.round((lonMax - lonMin) * k * S);
    const H = Math.round((latMax - latMin) * S);
    const X = (lon) => ((lon - lonMin) * k * S).toFixed(1);
    const Y = (lat) => ((latMax - lat) * S).toFixed(1);

    const ring = us.coordinates[0].map(([lon, lat]) => `${X(lon)},${Y(lat)}`).join(" ");
    const base = { lat: 35.33, lng: -79.25 };
    const rLat = 100 / 69;
    const rLon = rLat / Math.cos((base.lat * Math.PI) / 180);
    const label = {
        cameron: [-8, 16, "end"], sanford: [8, -8, "start"], "southern-pines": [-9, 6, "end"], pinehurst: [-9, -6, "end"],
        aberdeen: [-9, 16, "end"], fayetteville: [8, 14, "start"], lillington: [8, 4, "start"], pittsboro: [-9, -6, "end"],
        "fuquay-varina": [8, 14, "start"], apex: [-9, 4, "end"], cary: [-9, -6, "end"], raleigh: [9, 4, "start"],
        durham: [9, -4, "start"], "chapel-hill": [-9, 4, "end"],
    };
    const dots = locations
        .map((l) => {
            const [dx, dy, anchor] = label[l.slug] || [8, 4, "start"];
            const home = l.slug === "cameron";
            return `<a href="/service-areas/${l.slug}/"><circle cx="${X(l.lng)}" cy="${Y(l.lat)}" r="${home ? 8 : 5}" fill="${home ? "#1a1a1a" : "#ff6a3e"}" stroke="#fff" stroke-width="2"/><text x="${(+X(l.lng) + dx).toFixed(1)}" y="${(+Y(l.lat) + dy).toFixed(1)}" text-anchor="${anchor}" font-size="${home ? 15 : 13}" font-weight="${home ? 700 : 500}" fill="#1a1a1a" stroke="#fff" stroke-width="3" paint-order="stroke">${l.name}</text></a>`;
        })
        .join("");
    return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Map of the central North Carolina service area around Cameron, with a ring showing roughly a two-hour drive and dots for each city we serve" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:780px;height:auto;background:#eaf2f4;border-radius:6px"><polygon points="${ring}" fill="#f6f3ea" stroke="#9aa3a7" stroke-width="2"/><ellipse cx="${X(base.lng)}" cy="${Y(base.lat)}" rx="${(rLon * k * S).toFixed(1)}" ry="${(rLat * S).toFixed(1)}" fill="#ff6a3e" fill-opacity="0.08" stroke="#ff6a3e" stroke-width="2.5" stroke-dasharray="8 6"/>${dots}<text x="14" y="${H - 14}" font-size="13" fill="#4e4b66">Dashed ring: roughly a two-hour drive from our base near Cameron</text></svg>`;
};
