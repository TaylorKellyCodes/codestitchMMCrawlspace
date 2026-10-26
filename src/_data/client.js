module.exports = {
    name: "M&M Crawl Space Renovations",
    legalName: "M&M Crawl Space Renovation, LLC",
    email: "mmcrawlspace@gmail.com",
    phoneForTel: "910-635-4943",
    phoneFormatted: "(910) 635-4943",
    // Service-area business: no public street address. Based near Cameron, NC (Moore County).
    address: {
        city: "Cameron",
        state: "NC",
        zip: "28326",
        country: "US",
        mapLink: "https://maps.app.goo.gl/FhxawrndcXawchTe9",
    },
    geo: { lat: 35.33, lng: -79.25 },
    // Stable Google Maps URL for the Business Profile (CID), used for schema hasMap/sameAs.
    gbpUrl: "https://www.google.com/maps?cid=4409509259746241717",
    shareImage: "/assets/images/portfolio/og-share.jpg",
    // Hours copied from the Google Business Profile (7 days, 5 AM to 10 PM).
    hours: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "05:00", closes: "22:00", label: "5 AM to 10 PM" },
    bbb: "https://www.bbb.org/us/nc/cary/profile/general-contractor/mm-crawl-space-renovations-0593-90370503",
    founder: "Miguel Martinez",
    foundingDate: "2021-10-06", // NC Secretary of State: M&M Crawl Space Renovation, LLC (SOSID 2282536)
    reviewCount: 28, // Google Business Profile
    ratingValue: "5.0",
    // Cities with their own page live in _data/locations.js; these extra towns are mentioned in text and schema only.
    extraAreas: ["Carthage", "Vass", "Pinebluff", "Spring Lake", "Hope Mills", "Raeford", "Angier", "Holly Springs", "Garner", "Morrisville", "Carrboro", "Hillsborough", "Siler City", "Asheboro", "Wake Forest", "Clayton", "Smithfield", "Dunn", "Lumberton", "Greensboro", "Burlington"],
    // No Facebook or Instagram pages exist yet. Add URLs here and uncomment the footer links if that changes.
    // socials: { facebook: "", instagram: "" },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.mmcrawlspacerenovations.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
    gaMeasurementId: "",
};
