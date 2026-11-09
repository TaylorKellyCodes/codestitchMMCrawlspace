// Extra local content for each city page: what homeowners notice, how water behaves, two more FAQs, and a meta tag line.
// Merged into locations.js. Keep every claim general enough to be true across the area and avoid prices.

const CECIL = '<a href="https://soilseries.sc.egov.usda.gov/OSD_Docs/C/CECIL.html" target="_blank" rel="noopener">Cecil series</a>';
const CANDOR = '<a href="https://soilseries.sc.egov.usda.gov/OSD_Docs/C/CANDOR.html" target="_blank" rel="noopener">somewhat excessively drained</a>';

// Shared question wording, with a short local answer added per city.
const newHome = (name, local) => ({
    q: `My ${name} home is fairly new. Do I need to think about the crawl space?`,
    a: `Many newer homes still have vented crawl spaces with thin plastic or bare soil. ${local} A quick inspection is worth it if you notice a musty smell, cold floors, or condensation on the ducts.`,
});
const waterAfterDry = (name, local) => ({
    q: `Why is there suddenly water under my ${name} house after years of none?`,
    a: `${local} We find the source first, then recommend drainage, a sump pump, or sealing, depending on where the water comes from.`,
});
const moldNowDry = (name, local) => ({
    q: `My crawl space has always seemed dry. Why do I see mold now?`,
    a: `Mold needs moisture, and humidity can rise without any standing water. ${local} We treat the mold, correct the moisture source, and then seal and dehumidify the space.`,
});
const repairOrRedo = (name, local) => ({
    q: `Can you repair a torn liner or wet insulation, or does everything have to be redone?`,
    a: `Often we can repair what is there. A torn or bunched liner can be replaced, wet or sagging insulation can be swapped out, and a sump pump or drain can be added. ${local} The inspection shows which approach fits your ${name} home.`,
});

module.exports = {
    cary: {
        metaTag: "for Cary and west Wake County homes",
        symptoms: [
            ["Musty smell in summer", "A damp, earthy smell that rises through the floor on humid days often traces back to the crawl space."],
            ["Torn or bunched plastic", "Thin sheets laid years ago slip and tear, leaving bare soil exposed in many 1980s and 1990s homes."],
            ["Cold floors in winter", "Sagging or missing insulation lets cold air reach the subfloor, so rooms above feel chilly."],
            ["Sweating ducts", "Beads of water on ductwork show that humid air is meeting cold surfaces under the house."],
        ],
        water: "Cary's subdivisions were graded and built in phases, and fill dirt or compacted ground beside a foundation can slow how fast rain soaks in. When gutters and downspouts empty near the house, that water has few places to go except toward the walls. The Piedmont's subsoil is clay-rich, though North Carolina's state soil, the " + CECIL + ", is classed as well drained, so drainage varies lot by lot. Summer humidity does not vary. Open vents let warm, wet air into the crawl space, which makes humidity the most common moisture source in vented crawl spaces here.",
        faqExtra: [
            newHome("Cary", "Cary has grown fast, and humidity affects a ten-year-old house the same way it affects an older one."),
            waterAfterDry("Cary", "A clogged gutter, a downspout that empties at the foundation, a changed grade after nearby construction, or a small plumbing leak can all send water into a crawl space that stayed dry for years."),
        ],
    },
    apex: {
        metaTag: "for older and newer Apex homes",
        symptoms: [
            ["Damp air from the vents", "A crawl space that feels clammy or smells earthy near the vents usually has humidity trouble."],
            ["Sagging insulation", "Batts that droop or fall between joists have usually absorbed moisture and stopped working."],
            ["Settling soil near the walls", "Low spots beside the foundation can hold water after rain, especially on newer lots."],
            ["Mildew on wood", "Dark or fuzzy patches on joists or the subfloor mean moisture has stayed long enough to feed mold."],
        ],
        water: "Apex has grown quickly, with older homes near the historic downtown and newer subdivisions built on regraded lots. Wake County's clay-rich subsoil drains slowly in many spots, and the loose fill around a newer foundation can settle over the first years. Settling leaves low areas that collect water near the walls. Humid summers add moisture from the air, so a vented crawl space can feel damp even in a dry week. Checking the grade, the downspouts, and the humidity together gives the clearest picture.",
        faqExtra: [
            moldNowDry("Apex", "In Apex, a closed-up house, a leaking AC drain line, or a wet season can raise humidity under the floor."),
            repairOrRedo("Apex", "Newer Apex homes often need only a liner and insulation fix."),
        ],
    },
    raleigh: {
        metaTag: "for Raleigh bungalows and newer homes",
        symptoms: [
            ["Bouncy or cold floors", "Floors that feel soft or cold in older bungalows can point to damp framing and failing insulation below."],
            ["Smell you notice in summer", "A musty odor that comes and goes with the weather often starts in a vented crawl space."],
            ["Water after storms", "Puddles or damp soil in the low corners of the crawl space show that drainage needs attention."],
            ["Rusty or sweating ducts", "Condensation on metal ducts and pipes means warm, humid air is reaching cold surfaces."],
        ],
        water: "Raleigh's older bungalows and cottages often sit on brick piers over bare soil, with vents on every side. Mature trees, old gutters, and yards that slope toward the house all affect where rain goes, and clay-rich ground in many neighborhoods drains slowly. In summer, humid air moves through the vents and condenses on cooler ducts and framing. After heavy storms, low corners of the crawl space can hold water for days. Both problems are common, so we check drainage and humidity before recommending a plan.",
        // A finished job shown only on the Raleigh page.
        project: {
            title: "Full crawl space encapsulation in Raleigh, NC",
            intro: "Before we started, this Raleigh crawl space had old insulation hanging from the floor system, debris and stored items on the ground, and a bare dirt floor. Our crew cleared it out, treated the framing, sealed the ground and the walls, and left a clean, fully encapsulated space.",
            steps: [
                ["Light the space", "We hang string lights throughout the crawl space so every inch is visible before any work begins."],
                ["Clear everything out", "Old insulation, trash, and the old vapor barrier come out first."],
                ["Rake the ground", "We rake the entire floor clear of rocks and debris so the new barrier lies flat."],
                ["Treat and clean the framing", "We spray the floor joists and subfloor, then scrub and sand them. Areas that need it are sprayed again so that all mold and fungal growth is gone."],
                ["Install a reinforced vapor barrier", "A new reinforced barrier goes over the ground in 12, 16, or 20 mil, chosen with the homeowner. We wrap every column and tape every overlapping seam."],
                ["Insulate the foundation walls", "Two-inch foam board goes on the exterior foundation walls."],
                ["Seal the openings", "We seal every foundation vent and any penetration that comes through the foundation."],
                ["Insulate the band joists", "Foam board and spray foam close off the band joists."],
                ["Clean up", "We clean the space before we leave, so you finish with a fully encapsulated crawl space."],
            ],
            photos: [
                { label: "Before", file: "/assets/images/areas/raleigh-nc-crawl-space-before-sagging-insulation-bare-dirt.webp", w: 900, h: 1200, alt: "Raleigh crawl space before work, with old pink insulation sagging from the floor system, ductwork, plumbing lines, and a bare dirt floor beside a brick pier" },
                { label: "Before", file: "/assets/images/areas/raleigh-nc-crawl-space-before-cleanout-debris-old-insulation.webp", w: 900, h: 1200, alt: "Raleigh crawl space before cleanout, with torn old insulation overhead and trash, paint cans, and stored items on the ground" },
                { label: "After", file: "/assets/images/areas/raleigh-nc-crawl-space-after-encapsulation-wrapped-columns.webp", w: 1000, h: 750, alt: "Raleigh crawl space after encapsulation, with a sealed white vapor barrier on the floor, wrapped columns, and foam board on the foundation walls" },
                { label: "After", file: "/assets/images/areas/raleigh-nc-crawl-space-after-encapsulation-foam-board-walls.webp", w: 1000, h: 853, alt: "Raleigh crawl space after encapsulation, with a white vapor barrier on the floor and foam board insulation on the foundation walls" },
            ],
        },
        faqExtra: [
            waterAfterDry("Raleigh", "In Raleigh, new infill construction next door, a regraded yard, or a clogged gutter can change where rain runs and push water toward your foundation."),
            repairOrRedo("Raleigh", "In older bungalows we often replace wet insulation and patch the ground cover where it has failed."),
        ],
    },
    durham: {
        metaTag: "for older Durham neighborhoods",
        symptoms: [
            ["Insulation falling down", "Fiberglass that has absorbed moisture sags, tears loose, and leaves the subfloor exposed."],
            ["Musty smell in older homes", "Houses from the early and mid 1900s often have vented crawl spaces over dirt that smell damp in summer."],
            ["Dark stains on joists", "Dark or fuzzy patches on framing mean moisture has stayed long enough to support mold."],
            ["Drafts at floor level", "Gaps in old insulation let cold air up through the floor on winter mornings."],
        ],
        water: "Many Durham homes near downtown date from the early and mid 1900s and have vented crawl spaces over dirt. Creeks and sloped lots around the city send runoff across yards, and clay-heavy soil drains slowly in places. Fiberglass insulation that has absorbed moisture sags, loses its value, and holds dampness against the subfloor. Summer humidity keeps that cycle going. Fixing the water and the humidity together is what lets new insulation last.",
        faqExtra: [
            repairOrRedo("Durham", "For a Durham house with sagging batts, removing the wet insulation and fixing the moisture comes before any new insulation goes in."),
            moldNowDry("Durham", "Old crawl spaces can look dry on the surface while the framing stays damp from summer humidity."),
        ],
    },
    "chapel-hill": {
        metaTag: "for sloped, shaded Chapel Hill lots",
        symptoms: [
            ["Water along the foundation", "Rain that runs downhill toward the house can collect against the walls and seep into the crawl space."],
            ["Damp soil that never dries", "Shade and leaf litter keep the ground beside the house wet long after the rain stops."],
            ["Clogged gutters and vents", "Leaves in gutters and against vents send water and moisture where it should not go."],
            ["Musty air upstairs", "Moisture from below moves into the living area and shows up as a stale or earthy smell."],
        ],
        water: "Chapel Hill's wooded, sloped lots send rainwater downhill, and some of it reaches the foundation. Shade and leaf litter keep the ground damp, so soil beside the house dries slowly even in a dry week. Inside a vented crawl space, humid air adds to the load. Where water collects, a sump pump and drainage handle it, and sealing the space keeps humid air from re-wetting the floor system.",
        faqExtra: [
            waterAfterDry("Chapel Hill", "On a sloped lot, a changed gutter, a new driveway, or tree removal upslope can send more runoff toward the foundation."),
            moldNowDry("Chapel Hill", "Shade keeps the ground and the walls damp, so humidity in a Chapel Hill crawl space can stay high for weeks."),
        ],
    },
    "fuquay-varina": {
        metaTag: "for Fuquay-Varina and Varina homes",
        symptoms: [
            ["Cold floors in older homes", "Thin or missing insulation under older houses lets cold air reach the floor in winter."],
            ["Smell that returns each summer", "A musty odor that comes back when the weather turns humid points to moisture below."],
            ["Damp soil after neighbors build", "New construction can change where water runs, and some lots start collecting it."],
            ["Wet insulation", "Batts that hold water lose their shape and stop doing their job."],
        ],
        water: "Fuquay-Varina mixes older homes near the downtown with new construction on the edges of town. Wake County's red subsoil is clay-rich and slow to drain in many places, and new building can change where water runs. A house that stayed dry for years may start to see damp soil after a neighboring lot is regraded or a drainage path changes. Humid summers still fill vented crawl spaces with moist air, so humidity control matters in both old and new homes.",
        faqExtra: [
            newHome("Fuquay-Varina", "With so much new construction nearby, drainage around a house can change after the first few years."),
            repairOrRedo("Fuquay-Varina", "Many older homes only need wet insulation replaced and the ground cover repaired."),
        ],
    },
    pittsboro: {
        metaTag: "for Pittsboro and Chatham County homes",
        symptoms: [
            ["Damp farmhouse floors", "Older farmhouses often have uninsulated floors over vented crawl spaces that stay cold and damp."],
            ["Water after long rain", "Low lots near creeks and the lake can see the ground stay wet for days."],
            ["Mildew smell", "A mildew smell in closets and lower rooms often comes from crawl space moisture."],
            ["Pests under the house", "Dark, damp crawl spaces attract insects and rodents."],
        ],
        water: "Chatham County has a mix of older farmhouses, newer subdivisions, and rural lots near the Haw River and Jordan Lake. Clay-rich ground drains slowly in many areas, and long driveways, culverts, and ponds shape where water travels on a property. Low-lying lots near creeks and the lake can see the water table rise after long rain. Older vented crawl spaces add humidity to the mix. An inspection looks at the water path first and the humidity second.",
        faqExtra: [
            waterAfterDry("Pittsboro", "On rural Chatham County lots, a clogged culvert, a washed-out ditch, or a pond that fills higher than before can send water toward the house."),
            repairOrRedo("Pittsboro", "For an older farmhouse, we often start with the floor insulation and the ground cover before any larger work."),
        ],
    },
    sanford: {
        metaTag: "for Sanford and Lee County homes",
        symptoms: [
            ["Wet crawl space after rain", "Heavier ground on some lots keeps water in the crawl space long after a storm."],
            ["Damp, musty basement-like smell", "Moisture that stays under the house shows up as a stale smell in the rooms above."],
            ["Sagging insulation", "Batts that hold water droop and lose their value."],
            ["Mold on joists", "Dark growth on framing means moisture has lingered."],
        ],
        water: "Sanford sits where the Sandhills meet the Piedmont, and the soil changes from lot to lot. East of town the ground tends to hold more clay, while the southwest is sandier. Clay slows drainage, so a crawl space on heavier ground can stay wet after a storm, and sandy ground dries faster. Humidity affects both. Our inspection checks the soil, the drainage, and the vents before we recommend a plan.",
        faqExtra: [
            moldNowDry("Sanford", "On heavier Lee County ground, moisture can linger in the soil under the house between storms."),
            repairOrRedo("Sanford", "If water is the main issue, a sump pump and drainage may be the repair, with the liner and insulation fixed afterward."),
        ],
    },
    lillington: {
        metaTag: "for Lillington and nearby homes",
        symptoms: [
            ["Water after heavy rain", "Lower lots near the river and its creeks can see water enter the crawl space from below."],
            ["Humid air under the house", "Higher ground mostly sees humidity, which condenses on ducts and framing."],
            ["Sagging floors or insulation", "Long-term dampness softens insulation and can stain the subfloor."],
            ["Musty smell in the house", "A stale smell rising through the floor points to moisture in the crawl space."],
        ],
        water: "Lillington sits above the Cape Fear River, and nearby creeks and low ground raise the water table after heavy rain. Homes on lower lots can see water enter the crawl space from below, while homes on higher ground mostly deal with humidity. Because the two situations need different fixes, we check where the water comes from before choosing between drainage, a sump pump, or sealing and dehumidification.",
        faqExtra: [
            newHome("Lillington", "Newer homes near the river can still see the water table rise after storms."),
            moldNowDry("Lillington", "After a wet season, the ground under a river-valley home can stay damp well into the next summer."),
        ],
    },
    cameron: {
        metaTag: "for Cameron and Moore County homes",
        symptoms: [
            ["Humid, earthy air", "Warm, moist air enters through the vents and settles in the crawl space."],
            ["Sweating pipes and ducts", "Condensation on cooler surfaces is a sign of high humidity under the house."],
            ["Bare soil under the house", "Older rural homes often have dirt floors that give off moisture vapor all year."],
            ["Cold floors", "Thin or missing insulation lets winter air reach the floor."],
        ],
        water: "Cameron sits at the eastern edge of the Sandhills, where sandy ground drains quickly and standing water is less common. Humidity is the usual issue. Warm, moist air enters through foundation vents and condenses on cooler ducts, pipes, and framing, and sandy soil still gives off vapor. Older rural homes with vented crawl spaces and bare soil benefit most from a sealed liner and humidity control.",
        faqExtra: [
            waterAfterDry("Cameron", "Sandy ground drains fast, so water that appears usually points to a plumbing or AC drain leak, a clogged gutter, or a sudden heavy storm."),
            repairOrRedo("Cameron", "In many rural homes the fix starts with a new ground liner and sealed vents."),
        ],
    },
    fayetteville: {
        metaTag: "for Fayetteville and area homes",
        symptoms: [
            ["Standing water", "Lower lots can see water in the crawl space after heavy rain or storm flooding."],
            ["Damp, sagging insulation", "Wet batts droop and stop insulating the floor."],
            ["Musty smell after storms", "A smell that lingers after a wet spell points to moisture still under the house."],
            ["Mold on framing", "Moisture that stays after flooding feeds mold on joists and the subfloor."],
        ],
        water: "Fayetteville sits along the Cape Fear River, where the Sandhills give way to the Coastal Plain. Parts of the area have a high water table, and storms such as Hurricane Matthew in 2016 and Hurricane Florence in 2018 brought flooding to the region. Lower lots can see water enter a crawl space from below, while higher ground mostly sees humidity. A sump pump and drainage handle the water, and a sealed liner with a dehumidifier handles the air.",
        faqExtra: [
            moldNowDry("Fayetteville", "After a storm or a long wet spell, moisture can stay in the ground and the framing long after the water is gone."),
            repairOrRedo("Fayetteville", "For a wet crawl space, drainage and a sump pump usually come first, then the insulation and liner."),
        ],
    },
    "southern-pines": {
        metaTag: "for Southern Pines area homes",
        symptoms: [
            ["Humid smell in older homes", "Historic and mid-century homes often have vented crawl spaces that smell damp in summer."],
            ["Pine needles around the foundation", "Needles and leaf litter hold moisture against the walls and clog vents."],
            ["Condensation on ducts", "Warm, wet air meeting cold ducts leaves water on the metal."],
            ["Damp wood", "Joists that feel damp or look dark have been taking on moisture."],
        ],
        water: 'Southern Pines sits in the Sandhills on deep, sandy soil. The U.S. Department of Agriculture classes the nearby Candor soil as ' + CANDOR + ', so rain soaks in quickly and standing water is uncommon. Moisture still reaches the crawl space as vapor from the ground and as humid air through the vents, and falling pine needles can hold dampness against foundations. For most homes here the answer is sealing and humidity control.',
        faqExtra: [
            newHome("Southern Pines", "Even in fast-draining sandy ground, humid summer air reaches a vented crawl space."),
            waterAfterDry("Southern Pines", "Sandy ground drains fast, so water that shows up often traces to a plumbing or AC drain leak, a clogged gutter, or a very heavy storm."),
        ],
    },
    aberdeen: {
        metaTag: "for Aberdeen and Pinebluff homes",
        symptoms: [
            ["Musty smell upstairs", "Older homes often carry a stale smell that comes from the crawl space below."],
            ["Damp, sagging insulation", "Batts hold humidity and droop even though the soil drains well."],
            ["Condensation in summer", "Moisture beads on cooler surfaces when warm air enters through the vents."],
            ["Bare dirt floors", "Open soil gives off vapor that the framing absorbs."],
        ],
        water: "Aberdeen homes sit on sandy, fast-draining ground, so humidity is the usual crawl space problem. Warm, moist air moves through the vents in summer and condenses on cooler surfaces. Over time the framing and insulation stay damp even though the soil drains well. A heavy-duty liner on the ground and sealed vents cut off both the soil vapor and the humid air, and a dehumidifier holds the result steady.",
        faqExtra: [
            waterAfterDry("Aberdeen", "Because the ground drains fast, water in an Aberdeen crawl space usually comes from a leak, a gutter, or an unusually heavy storm."),
            repairOrRedo("Aberdeen", "Many Aberdeen homes need wet insulation replaced and a liner added over the soil."),
        ],
    },
    pinehurst: {
        metaTag: "for Pinehurst and seasonal homes",
        symptoms: [
            ["Musty smell after time away", "A house closed up for weeks can greet you with a stale smell from the crawl space."],
            ["Humidity creeping up indoors", "High indoor humidity while the AC is set back often starts below the floor."],
            ["Condensation on ducts", "Cold ducts in a humid crawl space collect water while the house sits empty."],
            ["Mold on framing or insulation", "Moisture that builds while no one is home can feed mold before you notice."],
        ],
        water: "Pinehurst sits on deep Sandhills sand that drains quickly, so water pooling under a house is rare. The bigger risk is humidity, especially in homes that are vacant for weeks while the air conditioning is set back. Warm, wet air enters the vents, the crawl space stays humid, and moisture builds in the framing. Sealing the space and adding a dehumidifier with humidity monitoring protects the home while you are away.",
        faqExtra: [
            waterAfterDry("Pinehurst", "Sandy ground drains fast, so water under a Pinehurst home usually comes from a leak, an irrigation problem, or a very heavy storm."),
            repairOrRedo("Pinehurst", "For a seasonal home, we often add humidity control and monitoring on top of a liner and insulation repair."),
        ],
    },
};
