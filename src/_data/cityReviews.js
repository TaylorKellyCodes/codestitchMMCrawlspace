// Four real Google reviews, shown three at a time on the city pages. Every city gets a different ordered set,
// so no two city pages show the same reviews in the same order. Text is quoted from the reviews page.
const locations = require("./locations.js");

const reviews = [
    {
        name: "Ivy Lassiter",
        img: "/assets/images/portfolio/ivy-review.png",
        text: "Miguel and his team did a great job encapsulating my mother’s crawl space. They throughly cleaned and sealed the space so that no mold or any other harmful matter appears. Miguel was professional and very responsive.",
    },
    {
        name: "Anthony LiCausi",
        img: "/assets/images/portfolio/anthony-review.png",
        text: "Miguel and his team did an outstanding job at my home. Miguel was professional, respectful, and extremely knowledgeable throughout the entire process. He took the time to explain everything clearly and made sure the job was done right.",
    },
    {
        name: "Diane Dycus",
        img: "/assets/svgs/avatars/initial-d.svg",
        text: "They did an excellent job on our crawl space clean out and installing the vapor barrier. They started the job quickly, stayed in great communication, and even sent pictures of the work as they went. Everything was done professionally and exactly as promised. Highly recommend!",
    },
    {
        name: "David Parker",
        img: "/assets/svgs/avatars/initial-d.svg",
        text: "Miguel was very informative after viewing our crawlspace, concerns and issues. He gave us a good overview with pictures and videos of what he and M&M crawlspace renovations could do for us. ... He and his crew did everything that they promised to do.",
    },
];

// All ordered triples of the four reviews (24), spread so neighboring cities differ.
const triples = [];
for (let a = 0; a < 4; a++) for (let b = 0; b < 4; b++) for (let c = 0; c < 4; c++) if (a !== b && b !== c && a !== c) triples.push([a, b, c]);

const bySlug = {};
locations.forEach((l, i) => {
    bySlug[l.slug] = triples[(i * 5) % triples.length].map((k) => reviews[k]);
});
module.exports = bySlug;
