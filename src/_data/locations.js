// One entry per service-area page. Every field below is written per city on purpose:
// each page needs its own local conditions, communities, and questions so the pages are
// genuinely useful and not interchangeable "doorway" pages.
// Drive times are rough estimates from the Cameron, NC base and vary with traffic.
const H = "/assets/images/portfolio/";

const list = [
    {
        slug: "cameron", meta: "Crawl space encapsulation, mold removal and sump pumps in Cameron, Moore County. We are based here, so inspections are quick. Call (910) 635-4943.", name: "Cameron", county: "Moore County", region: "Sandhills", tier: "Home base", drive: "our home base",
        lat: 35.33, lng: -79.25, near: ["sanford", "southern-pines", "pinehurst", "lillington"],
        hero: { src: H + "clean-crawlspace1.webp", alt: "Encapsulated crawl space with foil-faced wall insulation and a sealed floor liner" },
        intro: "Cameron is where M&M Crawl Space Renovations is based, so homeowners in and around this small Moore County village are our closest neighbors. Whether your home is one of the older houses near the Cameron Historic District or a newer build out in the country, we can usually be on site fast for a free inspection.",
        conditions: "Cameron sits in the Sandhills, where sandy soil drains quickly. Even so, sandy ground still lets humidity through. Summer air in this part of North Carolina is warm and wet, and when it flows through foundation vents it condenses on cooler ductwork, pipes, and floor framing. Older pier-and-beam homes with vented crawl spaces and bare dirt floors are the ones we see the most trouble in.",
        communities: [["Cameron", "The village itself, including homes near the historic district and the antique shops on Carthage Street."], ["Vass & Carthage", "Rural Moore County homes with vented crawl spaces on large lots."], ["Eastern Moore & Harnett County", "Country properties and farmhouses with older, uninsulated floor systems."]],
        focus: "humidity control and vapor barriers, since the sandy soil keeps the ground dry while the air in the crawl space stays humid",
        faqs: [
            { q: "My soil is sandy, so do I still need a vapor barrier in Cameron?", a: "Usually yes. Sandy soil drains rainwater well, but it still gives off moisture vapor and the open vents on a traditional crawl space let in humid summer air. A sealed vapor barrier plus humidity control addresses both." },
            { q: "How quickly can you get to a home in Cameron?", a: "Cameron is where we are based, so it is our shortest trip. Call us and we will tell you the next available inspection time." }
        ]
    },
    {
        slug: "sanford", meta: "Crawl space encapsulation, mold removal and drainage for Sanford and Lee County homes, where clay soil holds water. Free inspections. Call (910) 635-4943.", name: "Sanford", county: "Lee County", region: "Sandhills/Piedmont edge", tier: "Close to home", drive: "about 25 to 30 minutes",
        lat: 35.48, lng: -79.18, near: ["cameron", "lillington", "pittsboro", "southern-pines"],
        hero: { src: H + "vapor.jpg", alt: "Vapor barrier installed on a crawl space floor with sealed seams around a pier" },
        intro: "Sanford is one of the closest cities to our base, and Lee County homeowners make up a good share of the crawl space questions we get. Mill-era houses, mid-century brick ranches, and newer subdivisions all show up here, each with a different level of crawl space protection.",
        conditions: "Sanford sits where the Sandhills meet the Piedmont, and the ground east of town tends to hold more clay than the sandy soil to the southwest. Clay holds water longer after rain, which means more moisture pressing on foundation walls and more standing water in low crawl spaces. Add the humid summers and it is common to find damp insulation, sagging batts, and musty air coming up through the floor in older Sanford homes.",
        communities: [["Downtown & Jonesboro Heights", "Older homes where original vented crawl spaces and aging insulation are common."], ["Broadway, Lemon Springs & Colon", "Rural and small-town Lee County properties with dirt crawl spaces."], ["Cumnock & west Sanford", "Mixed older and newer homes near the Deep River side of the county."]],
        focus: "drainage and moisture sealing, because heavier clay soil keeps water around foundations longer",
        faqs: [
            { q: "Why do some Sanford crawl spaces stay wet after rain?", a: "Clay-heavy soil drains slowly, so rainwater can sit against the foundation and seep in. Grading, gutters, a sump pump, and a sealed liner work together to move water out and keep it out." },
            { q: "Do you cover homes outside Sanford city limits?", a: "Yes. We regularly work across Lee County, including the surrounding rural areas." }
        ]
    },
    {
        slug: "southern-pines", meta: "Crawl space encapsulation for Southern Pines homes, from historic Weymouth Heights to newer builds. Control Sandhills humidity. Free inspections.", name: "Southern Pines", county: "Moore County", region: "Sandhills", tier: "Close to home", drive: "about 30 minutes",
        lat: 35.17, lng: -79.39, near: ["pinehurst", "aberdeen", "cameron", "sanford"],
        hero: { src: H + "after1.png", alt: "Encapsulated crawl space with wrapped piers, a sealed floor liner, and a drain pipe" },
        intro: "Southern Pines has some of the most character-rich housing in the Sandhills, from Victorian-era cottages to mid-century homes tucked under tall pines. Crawl space issues here usually come from age and humidity, which is the kind of job encapsulation handles well.",
        conditions: "The sandy Sandhills soil drains fast, but the climate is still humid, and falling pine needles and leaf litter around foundations can hold moisture against vents and sill plates. Many historic homes were built with vented crawl spaces that let summer humidity straight in, which can lead to damp insulation, musty floors upstairs, and wood that stays above a healthy moisture level.",
        communities: [["Weymouth Heights & downtown", "Historic homes where we work carefully around original framing."], ["Midland Road & Morganton Road corridors", "Mid-century and newer homes with standard vented crawl spaces."], ["Surrounding Moore County", "Homes along the pine-lined neighborhoods between Southern Pines, Aberdeen, and Pinehurst."]],
        focus: "full encapsulation and dehumidification for older vented crawl spaces",
        faqs: [
            { q: "Can you work on a historic home in Southern Pines?", a: "Yes. Encapsulation happens below the floor and leaves the home’s appearance as it is. We seal and insulate the crawl space and leave the finished living space above untouched." },
            { q: "Do pine needles around my foundation cause crawl space problems?", a: "They can. Debris against foundation vents and walls holds moisture and invites pests. Cleaning it away and sealing the vents is part of keeping the crawl space dry." }
        ]
    },
    {
        slug: "pinehurst", meta: "Crawl space encapsulation and remote humidity monitoring for Pinehurst homes, including seasonal and second homes in Moore County. Free inspections.", name: "Pinehurst", county: "Moore County", region: "Sandhills", tier: "Close to home", drive: "about 35 minutes",
        lat: 35.2, lng: -79.47, near: ["southern-pines", "aberdeen", "cameron", "sanford"],
        hero: { src: H + "crawl1.jpg", alt: "Crawl space pier wrapped in white liner with foil-faced insulation on the walls" },
        intro: "Pinehurst homes range from historic cottages in the Village to large custom homes in golf communities. A lot of them sit empty for part of the year, which lets crawl space moisture build for months before anyone notices.",
        conditions: "A home that is closed up for weeks at a time, with the air conditioning set back or off, lets humidity climb inside the house and the crawl space below it. In a vented crawl space, that humid air condenses on ductwork and insulation. Sealing the crawl space and adding a dehumidifier with a humidity monitor keeps conditions steady whether the home is occupied or not.",
        communities: [["Village of Pinehurst", "Historic homes and cottages with older foundations."], ["Pinewild & golf communities", "Larger homes where finished spaces sit directly above the crawl space."], ["Seasonal and second homes", "Properties that are empty for stretches and benefit from remote humidity monitoring."]],
        focus: "dehumidification and humidity monitoring for homes that are vacant part of the year",
        faqs: [
            { q: "My Pinehurst home is vacant part of the year. What should I do about the crawl space?", a: "Closed-up homes build humidity, and an uncontrolled crawl space can grow mold while no one is there to notice. A sealed liner and a monitored dehumidifier protect the home while you are away." },
            { q: "Can I check the crawl space humidity from out of town?", a: "Our systems can include a Wi-Fi humidity sensor so you receive alerts if levels rise, even when you are not at the house." }
        ]
    },
    {
        slug: "aberdeen", meta: "Aberdeen, NC crawl space encapsulation and vapor barriers. Fix damp, sagging insulation and musty smells in Moore County homes. Free inspections.", name: "Aberdeen", county: "Moore County", region: "Sandhills", tier: "Close to home", drive: "about 35 minutes",
        lat: 35.12, lng: -79.43, near: ["southern-pines", "pinehurst", "cameron", "fayetteville"],
        hero: { src: H + "crawl2.jpg", alt: "Vapor barrier covering a crawl space floor and wrapping the support piers" },
        intro: "Aberdeen sits between Southern Pines and Pinehurst and has a mix of older railroad-era homes and newer construction. Families here get the same hot, humid summers as the rest of the Sandhills, and the same crawl space moisture that comes with them.",
        conditions: "Most Aberdeen homes sit on sandy, well-drained ground, so humidity is the usual crawl space issue, more than standing water. Warm, moist air enters through vents, meets cooler surfaces, and condenses. Over time that shows up as damp floor insulation, rusting fasteners, and a musty smell in the rooms above.",
        communities: [["Downtown Aberdeen", "Older homes near the historic rail corridor."], ["Pinebluff & west Aberdeen", "Small-town and rural properties with vented crawl spaces."], ["Newer subdivisions", "Newer homes where we often add moisture control to an existing crawl space."]],
        focus: "vapor barrier installation and fixing damp, sagging floor insulation",
        faqs: [
            { q: "What causes the musty smell upstairs in older Aberdeen homes?", a: "Often it is humid crawl space air rising into the living space through gaps in the floor. Sealing the crawl space and controlling its humidity usually clears it." },
            { q: "Do I need mold remediation or just encapsulation?", a: "It depends on what the inspection finds. If there is active mold we treat it first, then encapsulate so the moisture that fed it stays out." }
        ]
    },
    {
        slug: "fayetteville", meta: "Fayetteville crawl space drainage, sump pumps and encapsulation for Cumberland County homes near the Cape Fear River. Free inspections and written quotes.", name: "Fayetteville", county: "Cumberland County", region: "Cape Fear Coastal Plain edge", tier: "Within an hour", drive: "about 55 minutes",
        lat: 35.05, lng: -78.88, near: ["aberdeen", "lillington", "cameron", "southern-pines"],
        hero: { src: H + "clean-crawlspace3.webp", alt: "Encapsulated crawl space with a white vapor barrier on the floor and wrapped piers" },
        intro: "Fayetteville is the largest market near our base outside the Triangle, with a big stock of mid-century brick homes and a long history of wet weather. Many homeowners here already know what a damp crawl space looks like and want a permanent fix.",
        conditions: "Fayetteville sits along the Cape Fear River where the Sandhills give way to the Coastal Plain, and parts of Cumberland County have a high water table and a history of serious flooding during major storms such as Hurricanes Matthew and Florence. Even in a normal year, low lots collect runoff. Drainage and a sump pump are often a bigger part of the solution here than in the drier Sandhills to the north.",
        communities: [["Haymount & central Fayetteville", "Older homes with original vented crawl spaces."], ["Cliffdale & Hope Mills", "Mid-century and 1980s to 2000s homes, many with crawl space moisture."], ["Spring Lake & surrounding area", "Neighborhoods with a mix of older and newer foundations."]],
        focus: "drainage, sump pumps, and a sealed liner for homes in lower, wetter areas",
        faqs: [
            { q: "Is a sump pump worth it in a Fayetteville crawl space?", a: "If your crawl space takes on standing water after heavy rain, yes. A pump removes bulk water, and a sealed liner plus dehumidifier handle what is left in the air." },
            { q: "My home flooded in a past storm. Can you fix a crawl space that has been wet?", a: "We start with an inspection to look for damage, mold, and moisture sources, then recommend the cleanup, drainage, and sealing that will keep the space dry." }
        ]
    },
    {
        slug: "lillington", meta: "Crawl space encapsulation and sump pumps in Lillington and Harnett County, including low-lying homes near the Cape Fear River. Free inspections.", name: "Lillington", county: "Harnett County", region: "Cape Fear River valley", tier: "Within an hour", drive: "about 40 minutes",
        lat: 35.4, lng: -78.81, near: ["cameron", "sanford", "fuquay-varina", "fayetteville"],
        hero: { src: H + "crawlspace-after2.webp", alt: "Encapsulated crawl space with a sealed floor liner and foil-faced insulation on the walls" },
        intro: "Lillington is the Harnett County seat and sits right on the Cape Fear River, with farms, older homes, and newer subdivisions spread around it. We serve homeowners across Harnett County, from Lillington itself out to Buies Creek and Angier.",
        conditions: "Homes near the river and its creeks sit on lower ground where the water table rises quickly after storms, and heavier soils in parts of the county hold water against foundations. Combine that with humid summers and it is common to find damp crawl spaces with sagging insulation and pooling water in low corners.",
        communities: [["Lillington & Buies Creek", "County-seat homes and neighborhoods around the university area."], ["Angier", "Fast-growing town with a mix of older homes and new construction."], ["Rural Harnett County", "Farmhouses and country homes with older dirt crawl spaces."]],
        focus: "drainage and moisture control for homes near the river and low-lying creeks",
        faqs: [
            { q: "How does living near the Cape Fear River affect my crawl space?", a: "Homes on low ground near rivers and creeks often see a higher water table. We check for standing water and recommend drainage and a sump pump when the inspection shows it is needed." },
            { q: "Do you serve Angier and Buies Creek?", a: "Yes. We serve homes throughout Harnett County." }
        ]
    },
    {
        slug: "pittsboro", meta: "Pittsboro and Chatham County crawl space encapsulation for clay soil, older farmhouses, and growing neighborhoods. Free inspections and written quotes.", name: "Pittsboro", county: "Chatham County", region: "Piedmont", tier: "Within an hour", drive: "about 55 minutes",
        lat: 35.72, lng: -79.18, near: ["sanford", "chapel-hill", "durham", "cameron"],
        hero: { src: H + "pump.jpeg", alt: "Crawl space dehumidifier on a cinder block above the vapor barrier" },
        intro: "Pittsboro is changing quickly, with historic downtown homes, rural farmhouses, and new growth all within a few miles of each other. That mix means crawl space conditions here vary from house to house, and a careful inspection matters.",
        conditions: "Chatham County sits in the Piedmont, where red clay soil holds moisture and drains slowly. Homes near the Haw River and Jordan Lake can also deal with higher groundwater. Older farmhouses often have uninsulated, vented crawl spaces over bare dirt, which is a recipe for damp floor framing and musty air.",
        communities: [["Downtown Pittsboro", "Historic homes with original foundations."], ["Fearrington Village & Chatham Park area", "Newer homes and communities where we often upgrade moisture control."], ["Moncure & Bynum", "Rural and river-area homes with dirt-floor crawl spaces."]],
        focus: "clay-soil moisture control and upgrading older vented crawl spaces",
        faqs: [
            { q: "Why do crawl spaces in clay soil stay damp?", a: "Clay holds water and drains slowly, so moisture lingers around and under the home. A sealed liner blocks the vapor, and drainage handles any standing water." },
            { q: "Can you work on an older farmhouse near Pittsboro?", a: "Yes. Older farmhouses are common for us. We inspect the floor framing and insulation first and recommend the work the space needs." }
        ]
    },
    {
        slug: "fuquay-varina", meta: "Crawl space encapsulation for Fuquay-Varina homes, from historic downtown bungalows to newer Wake County builds. Free inspections and written quotes.", name: "Fuquay-Varina", county: "Wake County", region: "Triangle", tier: "Within an hour", drive: "about 55 to 60 minutes",
        lat: 35.58, lng: -78.8, near: ["apex", "lillington", "raleigh", "cary"],
        hero: { src: H + "before1.png", alt: "Crawl space with a bare dirt floor and exposed piers before encapsulation" },
        intro: "Fuquay-Varina has grown fast, but the heart of town still has older bungalows and cottages with original crawl spaces. We serve both the historic homes and the subdivisions that surround them.",
        conditions: "Wake County's red clay holds water and drains slowly, and the humid climate does the rest. In older Fuquay-Varina homes with vented crawl spaces we often find damp or fallen insulation, condensation on ductwork, and bare dirt floors giving off moisture year-round.",
        communities: [["Historic downtown Fuquay-Varina", "Older homes with original vented crawl spaces."], ["Varina & Willow Spring", "Rural and small-town properties on the edges of the Triangle."], ["Holly Springs & Angier", "Nearby growing communities within the same service area."]],
        focus: "moisture sealing and insulation upgrades for older homes with vented crawl spaces",
        faqs: [
            { q: "My Fuquay-Varina house is older. What should I look for in the crawl space?", a: "Look for sagging or dark insulation, a musty smell, condensation on pipes and ducts, and a bare dirt floor. Those are signs moisture is getting in." },
            { q: "Do you also serve Holly Springs and Angier?", a: "Yes. They are part of the area we serve around Fuquay-Varina." }
        ]
    },
    {
        slug: "apex", meta: "Apex, NC crawl space encapsulation and moisture control for historic downtown cottages and newer Wake County homes. Free inspections. Call (910) 635-4943.", name: "Apex", county: "Wake County", region: "Triangle", tier: "Triangle", drive: "about 65 minutes",
        lat: 35.73, lng: -78.85, near: ["cary", "fuquay-varina", "raleigh", "pittsboro"],
        hero: { src: H + "air-pipe.webp", alt: "Fiberglass batt insulation installed around ductwork between framing" },
        intro: "Apex pairs a charming historic downtown with fast-growing suburbs on every side. The older cottages near downtown are the homes most likely to have original vented crawl spaces that need protection.",
        conditions: "Apex's red clay soil holds moisture, and Wake County's humid summers push moist air through vents into crawl spaces. Condensation on cool ducts and pipes, damp insulation, and bare dirt are the usual findings in older homes, while newer homes sometimes need better sealing and humidity control.",
        communities: [["Historic downtown Apex", "Older cottages near Salem Street and the downtown core."], ["Holly Springs & New Hill", "Neighboring communities with a mix of older and new homes."], ["West Apex & surrounding subdivisions", "Newer homes where we can add or improve moisture control."]],
        focus: "sealing older vented crawl spaces and adding humidity control",
        faqs: [
            { q: "Do newer Apex homes need encapsulation too?", a: "Some do. Newer homes can have crawl space moisture too, especially when the space is vented or the vapor barrier is thin or torn. An inspection will tell you." },
            { q: "How long does a crawl space project take in Apex?", a: "Most residential encapsulation jobs take one to three days once work starts, depending on the size and condition of the space." }
        ]
    },
    {
        slug: "cary", meta: "Cary crawl space encapsulation: replace torn plastic and cut humidity and musty smells in 1980s to 2000s Wake County homes. Free inspections.", name: "Cary", county: "Wake County", region: "Triangle", tier: "Triangle", drive: "about 70 minutes",
        lat: 35.79, lng: -78.78, near: ["apex", "raleigh", "durham", "chapel-hill"],
        hero: { src: H + "after-crawlspace-cary.webp", alt: "Cary crawl space after encapsulation with a smooth sealed vapor barrier" },
        intro: "Cary has a large number of homes built in the 1980s, 1990s, and 2000s, plus older neighborhoods near the downtown core. We have encapsulated crawl spaces in Cary, and homeowners here often call because they notice a musty smell or high energy bills.",
        conditions: "Cary's red clay soil and humid summers create steady moisture pressure on crawl spaces. Homes from the 1980s and 1990s were often built with vented crawl spaces and thin plastic that has since torn or shifted. Moisture and condensation then collect on ducts and insulation, and the air that rises into the living space can be damp.",
        communities: [["Downtown Cary & older neighborhoods", "Older homes with original vented crawl spaces."], ["Preston, Carpenter & west Cary", "1990s and 2000s subdivisions with aging crawl space liners."], ["Morrisville", "Neighboring town with similar housing and similar crawl space conditions."]],
        focus: "replacing torn plastic and upgrading older vented crawl spaces",
        faqs: [
            { q: "My Cary home has a plastic sheet on the crawl space floor. Is that enough?", a: "A loose sheet usually leaves gaps. Thin plastic tears and bunches up, and it is rarely sealed at the walls or around piers, so moisture still gets through. A properly installed, sealed liner works much better." },
            { q: "Will encapsulation lower my energy bills?", a: "It can, because a sealed and conditioned crawl space reduces the humid, drafty air that your HVAC system has to deal with. Savings vary by home." }
        ]
    },
    {
        slug: "raleigh", meta: "Raleigh crawl space encapsulation, drainage and sump pumps for older bungalows in Oakwood, Five Points and beyond. Free inspections and written quotes.", name: "Raleigh", county: "Wake County", region: "Triangle", tier: "Triangle", drive: "about 75 to 80 minutes",
        lat: 35.78, lng: -78.64, near: ["cary", "apex", "durham", "fuquay-varina"],
        hero: { src: H + "crawlspace-before1.webp", alt: "Wet crawl space with fallen insulation, debris, and standing water before work" },
        intro: "Raleigh has some of the oldest homes in the Triangle, and many of them rest on original crawl spaces. We have worked on Raleigh homes, including an encapsulation with a sump pump that one customer described as a great job on communication and quality.",
        conditions: "Raleigh's red clay soil holds moisture, and the city's older bungalows and cottages often have vented, uninsulated crawl spaces over dirt. Gutters and grading that no longer match the way the lot has settled can send water toward the foundation. Combined with humid summers, that creates damp crawl spaces, sagging insulation, and musty air in the living space.",
        communities: [["Oakwood, Boylan Heights & Cameron Park", "Historic neighborhoods with older homes and original foundations."], ["Five Points & Hayes Barton", "Established neighborhoods with 1920s to 1950s homes."], ["Garner, Wake Forest & Knightdale", "Surrounding towns with a mix of mid-century and newer homes."]],
        focus: "full encapsulation with drainage where the lot sends water toward the house",
        faqs: [
            { q: "Why do older Raleigh bungalows often have crawl space moisture?", a: "They were built with vented crawl spaces over bare dirt before modern moisture control. Decades of humid summers, clay soil, and shifting grade take a toll on the insulation and framing." },
            { q: "Do you handle sump pumps in Raleigh homes?", a: "Yes. When an inspection shows standing water, we install a sump pump with a sealed basin, and we can add a battery backup." }
        ]
    },
    {
        slug: "durham", meta: "Durham crawl space encapsulation and insulation repair for pre-war and mid-century homes in Trinity Park, Duke Park and beyond. Free inspections.", name: "Durham", county: "Durham County", region: "Triangle", tier: "Triangle", drive: "about 80 to 85 minutes",
        lat: 35.99, lng: -78.9, near: ["chapel-hill", "raleigh", "cary", "pittsboro"],
        hero: { src: H + "before-crawlspace-durham.webp", alt: "Durham crawl space before work, with drooping fiberglass insulation and a dark dirt floor" },
        intro: "Durham has a deep stock of pre-war and mid-century homes, and many have original crawl spaces that have never been sealed. One Durham crawl space we documented had insulation drooping from the floor joists, a common sign of moisture.",
        conditions: "Durham sits in the Piedmont on clay-heavy soil, and older neighborhoods near downtown have many homes with vented crawl spaces and aging fiberglass insulation. Humidity condenses on ducts and pipes, insulation absorbs moisture and sags, and the musty air that results can reach the living space above.",
        communities: [["Trinity Park & Old West Durham", "Historic neighborhoods with early-20th-century homes."], ["Watts-Hillandale & Duke Park", "Established neighborhoods with 1920s to 1950s houses."], ["Forest Hills & surrounding areas", "Mid-century homes with original crawl spaces."]],
        focus: "removing damp, sagging insulation and sealing older vented crawl spaces",
        faqs: [
            { q: "The insulation under my Durham home is falling down. Is that from moisture?", a: "Often yes. Insulation that absorbs moisture gets heavy and drops from the joists. We remove it, address the moisture, and reinsulate the right way." },
            { q: "Can you work in the older neighborhoods near downtown Durham?", a: "Yes. We regularly encapsulate and insulate crawl spaces in older homes, including those with low clearance and tight access." }
        ]
    },
    {
        slug: "chapel-hill", meta: "Chapel Hill and Carrboro crawl space drainage, sump pumps and encapsulation for sloped, shaded Orange County lots. Free inspections.", name: "Chapel Hill", county: "Orange County", region: "Piedmont", tier: "Triangle", drive: "about 75 minutes",
        lat: 35.91, lng: -79.06, near: ["durham", "pittsboro", "cary", "raleigh"],
        hero: { src: H + "crawlspace-before2.webp", alt: "Crawl space with a bare dirt floor, debris, and brick foundation walls before cleanup" },
        intro: "Chapel Hill and Carrboro have many older homes on wooded, sloping lots, and the combination of trees, hills, and humid summers puts a lot of moisture pressure on crawl spaces. We serve homeowners across Orange County and the surrounding area.",
        conditions: "Piedmont clay and sloping, tree-covered lots mean rainwater often runs toward the foundation. Leaf litter clogs gutters and vents, and shade keeps the ground damp. Homes built into slopes can have crawl spaces that take on water at the uphill side, which is where drainage and a sump pump are most useful.",
        communities: [["Neighborhoods around downtown Chapel Hill", "Older homes with original vented crawl spaces."], ["Carrboro & Hillsborough", "Nearby towns with a mix of older and newer homes."], ["Wooded, sloped lots", "Properties where runoff pushes water toward the foundation."]],
        focus: "drainage and sump pumps for sloped, tree-covered lots, plus sealing the crawl space",
        faqs: [
            { q: "My Chapel Hill lot slopes toward the house. Will that cause crawl space water?", a: "It can. Water follows the slope, so an uphill foundation wall may take on moisture after heavy rain. Drainage, grading, and a sump pump help move it away." },
            { q: "Can trees and shade make crawl space moisture worse?", a: "Yes. Shade and leaf litter keep soil and foundation walls damp. Keeping gutters clear and sealing the crawl space reduces the effect." }
        ]
    }
];

module.exports = list.map((l) => ({ ...l, nearLinks: l.near.map((slug) => list.find((x) => x.slug === slug)) }));
