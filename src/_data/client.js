module.exports = {
    name: "M&M Crawlspace Renovations",
    email: "mmcrawlspace@gmail.com",
    phoneForTel: "910-635-4943",
    phoneFormatted: "(910) 635-4943",
    address: {
        city: "Cary",
        state: "NC",
        zip: "27511",
        country: "US",
        mapLink: "https://maps.app.goo.gl/gtSBT6UEqSdoYymy6",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.mmcrawlspacerenovations.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
