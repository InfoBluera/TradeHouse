export const BRAND = {
  name: "TRADE HOUSE",
  tagline: "LIGHTING SPACES. SHAPING EXPERIENCES.",
  subTagline: "Where Light Meets Architecture",
  location: "Kalloor, Kochi, Kerala",
  city: "Kochi",
  region: "Kerala, India",
  phone: "+91 77366 36427",
  email: "connect@tradehouse.lighting",
  whatsapp: "+91 77366 36427",
  whatsappUrl:
    "https://wa.me/917736636427?text=Hello%20Trade%20House%2C%20I%20would%20like%20to%20discuss%20a%20lighting%20project.",
  openingHours: "Mon – Sat: 10:00 AM – 8:00 PM",
  address:
    "Trade House Experience Studio, 39-2435/A,39-2435/A1, IGS Square, South Janatha Road, Palarivattom, Kochi, Ernakulam, Kerala , 682025",
};

export const SERVICE_CATEGORIES = [
  {
    id: "planning",
    number: "01",
    title: "Lighting & Electrical Planning",
    tagline: "Design, Photometrics & Technical Blueprints",
    description:
      "Complete architectural lighting strategy, DIALux photometric calculations, and comprehensive CAD electrical drawings to ensure flawless engineering before construction begins.",
    scope: [
      "Architectural Lighting Design & Concepts",
      "Photometric Lux & Glare Calculations (DIALux EVO)",
      "Complete Electrical Layout & Circuit Drawings",
      "Light Positioning, Looping & Switch Planning",
      "Architectural, MEP & Contractor Coordination",
      "Curated Fixture Schedules & Technical Specification",
    ],
  },
  {
    id: "execution",
    number: "02",
    title: "Lighting Execution & Installation",
    tagline: "On-Site Wiring, Fixture Installation & Commissioning",
    description:
      "End-to-end on-site implementation ensuring zero design compromise—from electrical wiring and trimless plaster-in profiling to evening optical aiming and smart scene setup.",
    scope: [
      "On-Site Electrical Wiring & Conduiting",
      "Laser-Aligned Fixture Installation",
      "Trimless Plaster-in & Magnetic Track Detailing",
      "Chandelier Suspension & Void Engineering",
      "Implementation Strictly to Approved Lighting Plans",
      "Twilight Optical Aiming, Smart Commissioning & Handover",
    ],
  },
];

export const SERVICES = [
  {
    id: "lighting-design",
    slug: "lighting-design",
    aliases: ["design", "lighting-design-strategy"],
    number: "01",
    category: "Lighting & Electrical Planning",
    categorySlug: "planning",
    pillarNumber: "01",
    title: "Lighting Design & Photometric Strategy",
    shortDesc:
      "Concept development, photometrics, lux calculations, architectural lighting layouts, and artistic design intent.",
    fullDesc:
      "We craft thoughtful lighting narratives that respond to the unique volume, materiality, and geometry of each space. From initial conceptual moodboards to detailed CAD/DIALux photometric calculations, our designs sculpt spatial perception while eliminating uncomfortable glare (UGR < 11).",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    features: [
      "Custom Lux & Foot-Candle Calculations (DIALux EVO)",
      "Layered Lighting Schemes (Ambient, Accent, Task, Kinetic)",
      "Architectural Glare Mitigation (UGR < 11 standards)",
      "Material & Specular Reflectance Studies on Kerala Stones & Timber",
      "Coordination with Architects & Interior Designers",
    ],
    idealFor:
      "Luxury residences, signature villas, commercial developments, and boutique hospitality.",
    deliverables:
      "Comprehensive photometric simulation reports, spatial moodboards, illuminance heatmaps, and lighting narrative documents.",
  },
  {
    id: "electrical-drawings-planning",
    slug: "electrical-drawings-planning",
    aliases: ["electrical-drawings", "circuit-planning", "electrical-planning"],
    number: "02",
    category: "Lighting & Electrical Planning",
    categorySlug: "planning",
    pillarNumber: "01",
    title: "Electrical Drawings & Circuit Planning",
    shortDesc:
      "Complete CAD electrical plans, light positioning, circuit looping, driver load allocation, and MEP contractor coordination.",
    fullDesc:
      "A great lighting design is only as good as the electrical engineering behind it. We produce millimeter-accurate CAD electrical drawings detailing fixture coordinates, circuit groupings, conduit paths, dimming channels, driver locations, and phase load balancing for seamless on-site execution.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85",
    features: [
      "Detailed CAD Lighting Layout & Positioning Plans",
      "Switch-to-Fixture Circuit Looping & Dimming Channel Maps",
      "Remote Driver Housing & Low-Voltage Power Drop Schematics",
      "Phase Load Balancing & Voltage Drop Calculations",
      "Direct Technical Coordination with Project MEP & Electrical Contractors",
    ],
    idealFor:
      "New residential construction, extensive villa remodels, commercial spaces, and multi-story structures.",
    deliverables:
      "Complete DWG/PDF electrical drawings, circuit schedule spreadsheets, conduit routing plans, and electrical contractor handover guides.",
  },
  {
    id: "fixture-specification-supply",
    slug: "fixture-specification-supply",
    aliases: ["lighting-supply", "architectural-lighting", "decorative-lighting"],
    number: "03",
    category: "Lighting & Electrical Planning",
    categorySlug: "planning",
    pillarNumber: "01",
    title: "Curated Fixture Specification & Supply",
    shortDesc:
      "Direct specification and supply of high-CRI trimless architectural fixtures, 48V magnetic tracks, IP68 outdoor luminaires, and bespoke statement pieces.",
    fullDesc:
      "We eliminate supply-chain uncertainty by curating and supplying verified, architectural-grade luminaires. Every downlight, linear profile, magnetic track module, and driver is rigorously tested for thermal management, high color fidelity (CRI 97+), and resilience to Kerala's coastal climate.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    features: [
      "High-CRI (>97) & High-R9 (>90) LED Optical Engines",
      "Deep-Baffle Trimless Downlights & 48V Ultra-Slim Magnetic Tracks",
      "Marine-Grade IP65/IP67/IP68 Anti-Corrosion Landscape Luminaires",
      "Flicker-Free, Ripple-Free Premium Drivers (Tridonic, MeanWell)",
      "Comprehensive 3 to 5-Year Replacement Warranty & Spares Provisioning",
    ],
    idealFor:
      "Architects and homeowners requiring guaranteed optical specifications, zero flicker, and lasting build quality.",
    deliverables:
      "Comprehensive fixture schedule sheets, photometric cut-sheets, driver allocation charts, batch quality inspection logs, and warranty certificates.",
  },
  {
    id: "on-site-electrical-execution",
    slug: "on-site-electrical-execution",
    aliases: ["electrical-wiring", "electrical-coordination", "wiring-execution"],
    number: "04",
    category: "Lighting Execution & Installation",
    categorySlug: "execution",
    pillarNumber: "02",
    title: "On-Site Electrical Execution & Wiring",
    shortDesc:
      "Precision conduit routing, low-voltage cabling, driver housing integration, and hands-on site coordination according to the approved electrical plan.",
    fullDesc:
      "Trade House's technical project engineers oversee and execute the electrical infrastructure on-site. We ensure conduit pathways, backboxes, driver enclosures, and low-voltage drops are installed with millimeter precision, guaranteeing zero site clashes with MEP or HVAC systems.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=85",
    features: [
      "On-Site Electrical Wiring & Low-Voltage Cable Laying",
      "Verification of Conduit & Junction Box Coordinates Before Plastering",
      "Ventilated Driver Panel & Control Cabinet Assembly",
      "Grounding, Insulation & Voltage Drop Integrity Testing",
      "Active Coordination with Civil, MEP, Ceiling, and Interior Teams",
    ],
    idealFor:
      "Projects where electrical perfection and seamless coordination between contractors are critical to avoid costly rework.",
    deliverables:
      "Site inspection milestones, cable run logs, driver cabinet wiring schematics, and pre-installation verification sign-offs.",
  },
  {
    id: "fixture-installation-alignment",
    slug: "fixture-installation-alignment",
    aliases: ["installation", "fixture-installation"],
    number: "05",
    category: "Lighting Execution & Installation",
    categorySlug: "execution",
    pillarNumber: "02",
    title: "Precision Fixture Installation & Laser Alignment",
    shortDesc:
      "Laser-straight magnetic profile mounting, trimless plaster-in downlight integration, chandelier suspension, and anti-glare optical attachment.",
    fullDesc:
      "Even the highest-grade luminaire loses its value if installed poorly. Our master technicians handle the physical installation with extreme craftsmanship—using laser leveling for continuous profiles, seamless plaster-in feathering for trimless downlights, and ceiling load engineering for grand chandeliers.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
    features: [
      "Laser-Level Alignment for Continuous Magnetic Tracks & Cove Profiles",
      "Seamless Plaster-in Mudding & Feathering for Trimless Downlights",
      "Structural Ceiling Load Verification & Chandelier Suspension",
      "Optical Accessory Fitting (Honeycomb Louvers, Linear Spread Lenses, Dark Reflectors)",
      "Zero-Scratch, Cleanroom-Grade Finishing & Protection",
    ],
    idealFor:
      "Double-height voids, minimalist architectural homes, exposed concrete ceilings, and luxury hospitality venues.",
    deliverables:
      "Pre-fitment inspection reports, structural suspension certifications, and physical alignment audit checklist.",
  },
  {
    id: "commissioning-smart-tuning",
    slug: "commissioning-smart-tuning",
    aliases: ["smart-lighting", "commissioning", "focusing-commissioning"],
    number: "06",
    category: "Lighting Execution & Installation",
    categorySlug: "execution",
    pillarNumber: "02",
    title: "Twilight Aiming, Commissioning & Smart Setup",
    shortDesc:
      "Evening optical aiming, honeycomb calibration, DALI-2 & Casambi smart scene programming, lux verification, and handover.",
    fullDesc:
      "During exclusive twilight and nighttime sessions, our lighting designers personally fine-tune every beam angle, adjust glare cutoffs on art, and program smart scenes (Morning, Entertaining, Dinner, Cinema Noir). We verify DIALux lux levels with calibrated light meters before handing over the project.",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=85",
    features: [
      "Evening Fine-Tuning & Optical Aiming with Homeowners and Architects",
      "Smart Lighting Programming (DALI-2, Casambi, Tunable White 1800K–6500K)",
      "Keypad Engraving & Scene Preset Configuration (Entertain, Relax, Cinema)",
      "On-Site Lux Meter & Color Temperature Calibration Audits",
      "Comprehensive Handover Manual, Client Training & 5-Year Care Protocol",
    ],
    idealFor:
      "Smart villas, architectural residences, and spaces where nighttime atmosphere and intuitive controls are paramount.",
    deliverables:
      "Final commissioning report, calibrated lux verification sheets, smart automation backup files, and maintenance manual.",
  },
];

export const PROJECTS = [
  {
    id: "luxury-villa-kochi",
    slug: "luxury-villa-kochi",
    title: "The Alabaster Villa",
    category: "Residential",
    location: "Kadavanthra, Kochi",
    area: "8,500 sq.ft",
    year: "2025",
    services: [
      "Lighting Design",
      "Architectural Lighting",
      "Tunable Smart Controls",
      "Execution",
    ],
    client: "Private Waterfront Residence",
    leadArchitect: "Studio Design Matrix",
    tagline:
      "Sculpting minimalist brutalist concrete through warm indirect light.",
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    ],
    challenge:
      "The residence featured massive board-formed concrete slabs and a 24-foot double-height void. The client sought complete glare-free illumination that emphasized the raw texture of the concrete without exposing unsightly surface fittings.",
    concept:
      "We devised an invisible lighting schema where light emerges from recessed architectural reveals, shadow gaps, and plaster-in dark-light downlights with black reflectors.",
    strategy: [
      {
        name: "Ambient Layer",
        desc: "2700K 12mm deep-recessed micro-cove channels washing vertical concrete planes.",
      },
      {
        name: "Accent Layer",
        desc: "15° narrow beam trimless spotlights with honeycomb louvers accentuating curated sculpture pedestals.",
      },
      {
        name: "Decorative Element",
        desc: "A bespoke suspended 16-pendant blown-amber glass constellation floating in the central atrium.",
      },
      {
        name: "Smart Controls",
        desc: "Casambi Bluetooth Mesh system programmed with 5 distinct circadian scene presets.",
      },
    ],
    specs: {
      cct: "2400K – 3000K Tunable",
      cri: "98 CRI (R9 > 92)",
      beamAngles: "12°, 24°, 36°",
      controlProtocol: "DALI-2 / Casambi Wireless",
      glareRating: "UGR < 11",
    },
  },
  {
    id: "skyline-penthouse-marine-drive",
    slug: "skyline-penthouse-marine-drive",
    title: "Marine Drive Sky Penthouse",
    category: "Residential",
    location: "Marine Drive, Kochi",
    area: "6,200 sq.ft",
    year: "2025",
    services: [
      "Lighting Design",
      "Decorative Curation",
      "Smart Automation",
      "Supply",
    ],
    client: "Executive Penthouse",
    leadArchitect: "Verge Architecture",
    tagline:
      "Unobstructed Arabian Sea horizons framed by whisper-quiet low-glare lighting.",
    heroImage:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    ],
    challenge:
      "Floor-to-ceiling glass wrapping the entire penthouse caused severe internal reflections at night, obscuring the panoramic view of the Kochi backwaters.",
    concept:
      "We eliminated ceiling glare by strictly utilizing low-UGR dark-light optics (<10) and grazing only inner boundary partitions, allowing total nighttime exterior visibility.",
    strategy: [
      {
        name: "Low-Glare Ceiling",
        desc: "Plaster-in micro-aperture spots with dark bronze bezels calibrated to disappear when energized.",
      },
      {
        name: "Floor Grazing",
        desc: "Linear baseboard grazing guiding midnight circulation without waking inhabitants.",
      },
      {
        name: "Dining Feature",
        desc: "Hand-finished satin brass linear luminaire with dual-emission uplight and downlight.",
      },
      {
        name: "Evening Scene",
        desc: "'Harbor Mode' drops ceiling lux to 8%, illuminating only art and perimeter planters.",
      },
    ],
    specs: {
      cct: "2200K – 2700K Warm Dim",
      cri: "97+ CRI",
      beamAngles: "18°, 30°",
      controlProtocol: "Lutron / DALI-2",
      glareRating: "UGR < 9",
    },
  },
  {
    id: "boutique-hotel-fort-kochi",
    slug: "boutique-hotel-fort-kochi",
    title: "Fort Kochi Heritage Atelier Hotel",
    category: "Hospitality",
    location: "Fort Kochi, Kerala",
    area: "14,000 sq.ft",
    year: "2024",
    services: [
      "Lighting Masterplan",
      "Architectural Grazing",
      "Custom Fixture Fabrication",
    ],
    client: "Boutique Hospitality Group",
    leadArchitect: "Heritage Habitat Design",
    tagline:
      "Illuminating 200-year-old Dutch colonial timber and terracotta with museum-grade warmth.",
    heroImage:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=85",
    ],
    challenge:
      "Strict heritage preservation guidelines prevented cutting or drilling into original teak beams and lime-plastered walls.",
    concept:
      "We deployed non-invasive miniature magnetic track channels on perimeter tension cables and warm 2200K base uplighters that accentuate the historical masonry.",
    strategy: [
      {
        name: "Timber Highlighting",
        desc: "Ultra-narrow 10° optical spots accentuating the joinery of the colonial roof.",
      },
      {
        name: "Courtyard Landscape",
        desc: "Warm tree uplighting and waterproof underwater fixtures in the lily pond.",
      },
      {
        name: "Guest Suites",
        desc: "Custom brass reading sconces and diffused indirect headboard illumination.",
      },
    ],
    specs: {
      cct: "2200K – 2700K Ultra Warm",
      cri: "98 CRI Museum Grade",
      beamAngles: "10°, 24°, 45°",
      controlProtocol: "Phase & DALI Scene Controls",
      glareRating: "UGR < 12",
    },
  },
  {
    id: "minimalist-jewellery-showroom-mg-road",
    slug: "minimalist-jewellery-showroom-mg-road",
    title: "Aura Haute Joaillerie Showroom",
    category: "Retail",
    location: "MG Road, Kochi",
    area: "3,800 sq.ft",
    year: "2025",
    services: ["Lighting Design", "High-CRI Product Displays", "Execution"],
    client: "Luxury Diamond Atelier",
    leadArchitect: "Spatial Atelier Kochi",
    tagline:
      "True-to-life sparkle and flawless diamond fire with CRI 99 calibrated spectra.",
    heroImage:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=85",
    ],
    challenge:
      "Diamonds require crisp 4000K-5000K sparkle without heat, while 22K yellow gold requires rich 2700K warmth, all within the same boutique showroom.",
    concept:
      "We installed custom dual-channel micro-optical fixtures inside glass display vitrines capable of independent CCT tuning for each jewelry collection.",
    strategy: [
      {
        name: "Vitrine Precision",
        desc: "Zero-thermal micro-led stems delivering 3000 lux directly onto stones without glass reflection.",
      },
      {
        name: "Client Consultation Salons",
        desc: "Flattering 3000K high-R9 diffuse light ensuring luxurious skin tones.",
      },
      {
        name: "Architectural Ceiling",
        desc: "Magnetic track system with interchangeable flood and spot modules.",
      },
    ],
    specs: {
      cct: "3000K – 5000K Dual Spectrum",
      cri: "99 CRI (R9 98, R12 95)",
      beamAngles: "8°, 15°, Oval Flood",
      controlProtocol: "DMX / DALI-2 Retail Controller",
      glareRating: "UGR < 10",
    },
  },
  {
    id: "monsoon-courtyard-residence",
    slug: "monsoon-courtyard-residence",
    title: "Monsoon Courtyard Tropical Villa",
    category: "Residential",
    location: "Aluva, Kochi",
    area: "7,400 sq.ft",
    year: "2024",
    services: [
      "Architectural Lighting",
      "Landscape Illumination",
      "Smart Scenes",
    ],
    client: "Private Residence",
    leadArchitect: "Earth & Wood Studio",
    tagline:
      "Celebrating rain, tropical foliage, and tranquil water reflections.",
    heroImage:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85",
    ],
    challenge:
      "Integrating lighting seamlessly into an open-air central courtyard exposed to heavy Kerala monsoon rains and high humidity.",
    concept:
      "We specified IP68 marine-grade 316L stainless steel fixtures hidden beneath floating basalt steps and deep veranda eaves.",
    strategy: [
      {
        name: "Water Courtyard",
        desc: "Submerged warm brass floodlights casting ripples onto the teak timber ceilings.",
      },
      {
        name: "Tropical Flora",
        desc: "Low-glare spike projectors with honeycomb louvers highlighting Frangipani trees.",
      },
      {
        name: "Rain Mode",
        desc: "A dedicated scene illuminating falling raindrops in the courtyard atrium.",
      },
    ],
    specs: {
      cct: "2700K Warm Amber",
      cri: "97+ CRI",
      beamAngles: "15°, 36°, 60°",
      controlProtocol: "Smart IP68 Automation Hub",
      glareRating: "UGR < 10",
    },
  },
  {
    id: "panampilly-waterfront-bistro",
    slug: "panampilly-waterfront-bistro",
    title: "The Glasshouse Bistro & Bar",
    category: "Hospitality",
    location: "Panampilly Nagar, Kochi",
    area: "4,500 sq.ft",
    year: "2025",
    services: ["Lighting Design", "Custom Statement Fixtures", "Automation"],
    client: "Epicure Hospitality",
    leadArchitect: "Kochi Design Guild",
    tagline:
      "Atmospheric, intimate dining bathed in rich amber tones and warm brass reflections.",
    heroImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=1200&q=85",
    ],
    challenge:
      "Creating distinct ambiance for high-energy weekend cocktail hours versus quiet afternoon luncheon dining.",
    concept:
      "A seamless automation schedule that transitions the bistro from a light-filled 3000K day space to a sultry 1800K candlelit haven by twilight.",
    strategy: [
      {
        name: "Tabletop Pinspots",
        desc: "Narrow 12° ceiling pinspots illuminating only food and flowers while keeping diners' faces softly shadowed.",
      },
      {
        name: "Bar Showcase",
        desc: "Integrated back-lit onyx shelves and micro-spot glass illumination.",
      },
      {
        name: "Perimeter Garden",
        desc: "Soft tree grazing drawing the eye through expansive glass partitions.",
      },
    ],
    specs: {
      cct: "1800K – 3000K Sunset Dimming",
      cri: "98 CRI",
      beamAngles: "12°, 24°",
      controlProtocol: "DALI Scene Touchscreen",
      glareRating: "UGR < 10",
    },
  },
];

export const SMART_SCENES = [
  {
    id: "morning",
    name: "Morning Awakening",
    time: "07:00 AM",
    cct: "4000K Natural White",
    cctClass: "cct-4000",
    lux: "85% Illumination",
    atmosphere:
      "Energizing, fresh, and crisp. Mimics morning sunlight to stimulate cortisol and focus.",
    bgGradient: "from-sky-950/40 via-amber-950/20 to-obsidian-950",
    lightColor: "rgba(220, 240, 255, 0.4)",
    activeFixtures: [
      "Perimeter Cove",
      "Indirect Skylight",
      "Task Island",
      "Subtle Downlights",
    ],
    tempKelvin: 4000,
  },
  {
    id: "work",
    name: "Focus & Architecture",
    time: "11:30 AM",
    cct: "3500K Clean Architectural",
    cctClass: "cct-3000",
    lux: "100% High Precision",
    atmosphere:
      "High CRI clarity for architectural appreciation, reading, and productive flow.",
    bgGradient: "from-neutral-900/40 via-stone-900/30 to-obsidian-950",
    lightColor: "rgba(255, 245, 230, 0.5)",
    activeFixtures: [
      "Low-UGR Downlights",
      "Magnetic Track Spots",
      "Desk Task Luminaire",
    ],
    tempKelvin: 3500,
  },
  {
    id: "golden",
    name: "Golden Hour Glow",
    time: "05:45 PM",
    cct: "2700K Warm Amber",
    cctClass: "cct-2700",
    lux: "60% Soft Warmth",
    atmosphere:
      "Transitioning toward the evening. Warm tones enrich wooden veneers, fabrics, and stone.",
    bgGradient: "from-amber-950/40 via-orange-950/20 to-obsidian-950",
    lightColor: "rgba(255, 180, 70, 0.5)",
    activeFixtures: [
      "Warm Wall Grazers",
      "Decorative Floor Lamp",
      "Artwork Spotlights",
    ],
    tempKelvin: 2700,
  },
  {
    id: "dinner",
    name: "Intimate Dinner & Hospitality",
    time: "08:30 PM",
    cct: "2400K Candlelight Glow",
    cctClass: "cct-2700",
    lux: "40% Atmospheric",
    atmosphere:
      "Dramatic intimacy. Downlights fade; the focus rests on table centerpieces and ambient accents.",
    bgGradient: "from-amber-950/60 via-red-950/20 to-obsidian-950",
    lightColor: "rgba(255, 150, 40, 0.6)",
    activeFixtures: [
      "Dining Chandelier",
      "Tabletop Pinspots",
      "Buffet Grazing",
      "Soft Floor Sconce",
    ],
    tempKelvin: 2400,
  },
  {
    id: "cinema",
    name: "Cinema Noir",
    time: "10:15 PM",
    cct: "2000K Deep Amber Cove",
    cctClass: "cct-1800",
    lux: "15% Minimal Ambient",
    atmosphere:
      "Zero screen reflections. Subtle floor skimming allows effortless movement without breaking immersion.",
    bgGradient: "from-indigo-950/30 via-obsidian-900 to-obsidian-950",
    lightColor: "rgba(255, 120, 20, 0.3)",
    activeFixtures: [
      "Step Trimless Skimmer",
      "Acoustic Sconce Glow",
      "Sub-Counter Indirect",
    ],
    tempKelvin: 2000,
  },
  {
    id: "night",
    name: "Midnight Drift",
    time: "01:00 AM",
    cct: "1800K Ultra-Warm Low Lux",
    cctClass: "cct-1800",
    lux: "5% Circadian Safety",
    atmosphere:
      "Preserves melatonin and sleep readiness. Invisible sensors guide nighttime pathways.",
    bgGradient: "from-obsidian-900 via-obsidian-950 to-black",
    lightColor: "rgba(255, 100, 10, 0.2)",
    activeFixtures: ["Skirting Board Glow", "Bathroom Recessed Niche Skimmer"],
    tempKelvin: 1800,
  },
];

export const SPACES_GUIDE = [
  {
    id: "living-room",
    name: "Double-Height Living & Salons",
    subtitle: "Creating spatial depth and conversational warmth",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
    description:
      "Living rooms require 3 to 4 distinct lighting layers rather than a grid of flat ceiling fixtures. We combine high-CRI accent spots on art, continuous warm cove perimeters, and sculptural decorative pendants.",
    recommended: [
      "Trimless Dark-light Downlights (UGR<11)",
      "Magnetic Track with Adjustable Eyeball Spots",
      "48V Continuous Perimeter Profile",
      "Sculptural Floor Lamp with Dimmer",
    ],
    proTip:
      "Never place downlights directly over sitting sofas. Offset them to highlight walls and coffee tables to avoid harsh facial shadows.",
  },
  {
    id: "dining-room",
    name: "Formal Dining Suites",
    subtitle: "Setting the stage for celebration and intimacy",
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=85",
    description:
      "The dining table is the emotional anchor of the home. The lighting should make food look vibrant and guests look radiant.",
    recommended: [
      "Statement Centerpiece Chandelier",
      "Narrow 15° Warm Spotlights on Centerpieces",
      "Wall Washer on Sideboard Artwork",
      "Warm Dim (1800K–2700K) controls",
    ],
    proTip:
      "Hang statement pendants 30 to 36 inches above the tabletop and ensure fixtures offer both downward illumination and soft ambient diffusion.",
  },
  {
    id: "master-bedroom",
    name: "Master Bedroom & Suites",
    subtitle: "A sanctuary for rest, circadian recovery, and reading",
    image:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=85",
    description:
      "Bedrooms must avoid glare when lying in bed. We eliminate direct downward ceiling lights over pillow areas in favor of indirect headboard grazing and reading stems.",
    recommended: [
      "Headboard Vertical Wall Grazer",
      "Directional Focused Reading Sconces (<10° beam)",
      "Wardrobe Magnetic Linear Profiles with Sensors",
      "Low-Level Floor Pathway Skimmers",
    ],
    proTip:
      "Install independent bedside 2-way scene keypads with a master 'All Off / Night Pathway' toggle.",
  },
  {
    id: "kitchen",
    name: "Culinary & Island Kitchens",
    subtitle: "Precision shadow-free task light meets social warmth",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85",
    description:
      "High color fidelity (CRI >97) is essential in kitchens to render the true freshness of ingredients, paired with glare-free linear under-cabinet lighting.",
    recommended: [
      "Under-Cabinet Diffused LED Profiles",
      "Island Decorative Pendant Cluster (3000K)",
      "Anti-Glare Task Downlights",
      "Plinth Toe-Kick Ambient Skimmers",
    ],
    proTip:
      "Position task lighting directly between your head and the work counter to eliminate working in your own shadow.",
  },
  {
    id: "facade-landscape",
    name: "Exterior Architecture & Landscapes",
    subtitle: "Sculpting nocturnal identity and tropical greenery",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=85",
    description:
      "In Kerala's tropical environment, outdoor lighting must endure moisture while accentuating textures of laterite, exposed concrete, palms, and water bodies.",
    recommended: [
      "IP68 316L Stainless In-Ground Uplighters",
      "Honeycombed Tree & Palm Projectors",
      "Step Skimmers & Low-Glare Pathway Bollards",
      "Wall Grazer Optics for Texture Relief",
    ],
    proTip:
      "Light the vertical landscape and perimeter boundaries to visually expand the perceived space of your home at night.",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover & Spatial Audit",
    phase: "Discovery",
    desc: "We analyze your architectural drawings, 3D models, site orientation, daylight infiltration, and functional lifestyle requirements.",
    detail:
      "Site inspection in Kochi & Kerala, architectural brief analysis, and client preference mapping.",
  },
  {
    step: "02",
    title: "Concept & Lighting Narrative",
    phase: "Design Intent",
    desc: "We formulate the artistic lighting narrative, identifying focal architectural anchors, sightlines, and mood layers.",
    detail:
      "Presentation of visual moodboards, luminaire typologies, and spatial hierarchy sketches.",
  },
  {
    step: "03",
    title: "Photometrics & Engineering",
    phase: "Technical Planning",
    desc: "We engineer precise CAD lighting layouts, DIALux lux simulations, circuit load calculations, and control schematics.",
    detail:
      "Glare-rating audits (UGR < 13), beam angle calculations, and driver load allocation.",
  },
  {
    step: "04",
    title: "Curated Selection & Mockups",
    phase: "Product Curation",
    desc: "We curate premium architectural luminaires, optical accessories, and smart automation hardware at our Kalloor studio.",
    detail:
      "Showroom live mockups, CCT side-by-side comparisons, and finish matching with materials.",
  },
  {
    step: "05",
    title: "Supervised Installation",
    phase: "Execution",
    desc: "Our technical project engineers oversee site conduit routing, profile plastering, driver ventilation, and electrical integrity.",
    detail:
      "Laser-aligned track channels, waterproof junction potting, and zero-defect installation.",
  },
  {
    step: "06",
    title: "Focusing & Commissioning",
    phase: "Fine Tuning",
    desc: "During twilight and night sessions, our lighting designers personally focus every beam, align louvers, and program smart scenes.",
    detail:
      "Precision optical calibration, keypad engraving setup, and app automation tuning.",
  },
  {
    step: "07",
    title: "Care, Support & Maintenance",
    phase: "Longevity",
    desc: "Complete documentation handover, warranty protection, and periodic proactive maintenance checkups.",
    detail:
      "3-5 year comprehensive warranty support, spare module inventory, and priority technical response.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Trade House transformed our waterfront villa in Kadavanthra. Their understanding of low-glare architectural optics meant our exposed concrete ceiling looks sculptural, not cluttered. Truly Kochi's best lighting consultants.",
    client: "Maharof",
    role: "Principal Architect, K-Square",
    project: "Waterfront Villa",
  },
  {
    quote:
      "The smart lighting scenes programmed by Trade House are pure magic. One touch transforms our living area from a bright family dinner to a relaxed amber lounge. Their execution team in Kochi was exceptionally professional.",
    client: "Ar. Harikrishnan",
    role: "Lighting & Spatial Design Director",
    project: "Villa Project",
  },
  {
    quote:
      "As an architect, finding a lighting partner who understands photometrics, UGR values, and precision trimless detailing is rare. Trade House brings world-class lighting design to Kerala.",
    client: "Shibil",
    role: "Design Director, Atelier Tropical",
    project: "Royal Palm Residency",
  },
];

export const TRUST_METRICS = [
  {
    value: "100%",
    label: "Precision Photometric Design",
    sub: "Engineered to DIALux standards",
  },
  {
    value: "CRI 97+",
    label: "Color Fidelity Standard",
    sub: "True-to-life architectural rendering",
  },
  {
    value: "UGR < 9",
    label: "Ultra Low-Glare Optics",
    sub: "Light without visual discomfort",
  },
  {
    value: "5-Year",
    label: "Comprehensive Warranty",
    sub: "Full replacement & maintenance guarantee",
  },
];
