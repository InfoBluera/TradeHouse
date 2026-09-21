/**
 * Trade House Architectural Projects Showcase Data
 * 
 * Source of Truth: Real project assets discovered in /public/project/
 * Strictly grounded in real project descriptions and verified photographs.
 * No fabricated dates, specs, architects, or measurements.
 */

const base = import.meta.env.BASE_URL || '/TradeHouse/';
const asset = (path) => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return encodeURI(`${base}${cleanPath}`);
};

export const REAL_PROJECTS = [
  {
    id: "terratone-hotel",
    slug: "terratone-hotel",
    number: "01",
    title: "Terratone Boutique Business Hotel",
    category: "Hospitality",
    typology: "Hospitality & Architectural Façade",
    location: "South India",
    tagline: "Concealed perimeter warm lighting accentuating rhythmic timber louvers and geometric steel architecture.",
    shortDesc: "A contemporary architectural façade and landscape lighting scheme that transforms this boutique business hotel into an understated, welcoming nighttime landmark.",
    heroImage: asset("project/Terratone_hotel/Terratone_image/Terratone.jpeg"),
    heroAspect: "0.97",
    lightingFocus: "Integrated Façade Grazing & Landscape Reflection",
    narrative: {
      overview: "The Terratone Boutique Business Hotel presents a contemporary architectural lighting approach that emphasizes the building’s strong geometric form, layered façade, and natural material palette. The warm lighting creates a welcoming evening identity while maintaining a refined and understated character appropriate for a boutique hospitality environment.",
      approach: "Concealed warm illumination is carefully integrated around the vertical and horizontal architectural framing, particularly the timber-toned louvered panels. This soft perimeter outline reveals the rhythm and depth of the façade without overpowering the architectural surfaces, preserving the natural texture and tactile character of the materials.",
      hierarchy: "The lighting scheme establishes a calibrated visual hierarchy across the main façade, central glazed bays, entrance canopy, and surrounding landscape. Rather than uniform floodlighting, selective contrast between illuminated surfaces and shadow planes gives the elevation striking depth, dimension, and arrival presence.",
      landscape: "At ground level, lighting extends into the lush tropical planting and entrance pathways, ensuring a smooth transition between architecture and surroundings while wet paving reflections further enhance the building's nighttime presence."
    },
    highlights: [
      {
        title: "Louver Perimeter Grazing",
        desc: "Concealed warm linear fixtures graze the edges of timber-toned louvers, casting soft directional glows that articulate the structural grid."
      },
      {
        title: "Architectural Steel Framing Contrast",
        desc: "Deep black structural steel columns and beams frame the warm timber bays, creating crisp geometric contrast."
      },
      {
        title: "Glazed Arrival & Lobby Transparency",
        desc: "Ground-floor transparent glazing invites the warm interior lobby glow outward, connecting interior reception with arrival gardens."
      },
      {
        title: "Landscape Reflection Integration",
        desc: "Low-glare pathway and landscape luminaires illuminate tropical foliage and reflect across damp stone paving during evening hours."
      }
    ],
    gallery: [
      {
        src: asset("project/Terratone_hotel/Terratone_image/Terratone.jpeg"),
        alt: "Terratone Boutique Business Hotel exterior façade illuminated at twilight with warm louver lighting and wet stone reflection",
        caption: "Full elevation dusk view showcasing concealed perimeter grazing and ground-level landscape illumination",
        aspect: "wide"
      },
      {
        src: asset("project/Terratone_hotel/Terratone_image/Terratone_2.jpg"),
        alt: "Low-angle night perspective of Terratone Hotel highlighting warm vertical louver illumination against deep blue twilight sky",
        caption: "Low-angle perspective emphasizing the architectural rhythm of illuminated timber louvers against the twilight sky",
        aspect: "portrait"
      }
    ],
    seo: {
      title: "Terratone Boutique Hotel — Architectural Façade Lighting | Trade House",
      description: "Explore Trade House's architectural façade lighting for Terratone Boutique Business Hotel, featuring concealed warm louver illumination and landscape integration."
    }
  },
  {
    id: "prestige-residence",
    slug: "prestige-residence",
    number: "02",
    title: "Prestige Residence",
    category: "Residential",
    typology: "Residential Architecture & Interiors",
    location: "Kochi, Kerala",
    tagline: "A calibrated balance of ambient reveals, task focus, and artisanal decorative lighting across natural timber and sage finishes.",
    shortDesc: "A refined contemporary residential lighting scheme seamlessly coordinated with custom wood cabinetry, muted green elements, and textured surfaces.",
    heroImage: asset("project/Prestige/Prestige_lights_images/WhatsApp Image 2026-09-18 at 10.30.23 PM.jpeg"),
    heroAspect: "1.50",
    lightingFocus: "Layered Architectural & Decorative Illumination",
    narrative: {
      overview: "The Prestige Residential Project presents a refined contemporary lighting approach that works closely with interior architecture, millwork, and material finishes. The lighting maintains a warm, comforting atmosphere while celebrating the natural character of rich wood joinery, muted green cabinetry, and textured neutral plaster.",
      approach: "Rather than relying on flat, uniform ceiling brightness, the living and dining spaces employ recessed ceiling downlights, focused accent lighting, and decorative linear pendants to establish multiple layers of illumination. Light is applied selectively to accentuate artwork, furniture groupings, and textured wall surfaces.",
      privateSpaces: "In the bedrooms, lighting is intentionally softer and more controlled to nurture a restful sanctuary. Subtle ceiling illumination pairs with localized bedside reading lights and natural daylight. In kitchen and bath zones, high-precision task illumination reveals cabinetry and fluted backsplashes without glare.",
      materials: "The warm color temperature harmonizes with cane weave cupboard inserts, fluted dining tables, leather lounge chairs, and earthy ceramics to produce a timeless domestic sanctuary."
    },
    highlights: [
      {
        title: "Artisanal Circular Wall Sconces",
        desc: "Pair of bronze-rimmed circular wall luminaires washing neutral plaster with warm indirect halos in the main lounge."
      },
      {
        title: "Suspended Leather-Strap Dining Pendant",
        desc: "Minimalist horizontal tubular luminaire suspended by genuine leather straps over the fluted wooden dining table."
      },
      {
        title: "Concealed Culinary Task Lighting",
        desc: "Under-cabinet warm task illumination casting continuous light across fluted sage backsplash tiles and countertops."
      },
      {
        title: "Restful Bedroom Reading Zones",
        desc: "Focused brass reading luminaires paired with gentle ambient downlights complementing cane headboards and olive wall planes."
      }
    ],
    gallery: [
      {
        src: asset("project/Prestige/Prestige_lights_images/WhatsApp Image 2026-09-18 at 10.30.23 PM.jpeg"),
        alt: "Prestige Residence living lounge featuring circular bronze wall sconces, wood cabinetry, cane details, and recessed downlights",
        caption: "Main living salon with dual bronze circular sconces, custom dark timber millwork, and balanced ceiling downlights",
        aspect: "wide"
      },
      {
        src: asset("project/Prestige/Prestige_lights_images/WhatsApp Image 2026-09-18 at 10.30.27 PM.jpeg"),
        alt: "Prestige Residence dining space with suspended tubular pendant on leather straps above fluted timber table and crimson artwork",
        caption: "Dining composition featuring bespoke leather-strapped tubular pendant light and fluted wood table",
        aspect: "wide"
      },
      {
        src: asset("project/Prestige/Prestige_lights_images/WhatsApp Image 2026-09-18 at 10.30.24 PM.jpeg"),
        alt: "Prestige Residence kitchen with sage green cabinetry, fluted green tile backsplash, and under-cabinet task illumination",
        caption: "Kitchen task lighting revealing sage green cabinetry and vertical fluted ceramic backsplash",
        aspect: "portrait"
      },
      {
        src: asset("project/Prestige/Prestige_lights_images/WhatsApp Image 2026-09-18 at 10.30.28 PM.jpeg"),
        alt: "Prestige Residence bedroom with cane headboard, brass reading lamp, and olive green accent wall",
        caption: "Serene bedroom setting with cane weave headboard, brass task lamp, and soft ambient wash",
        aspect: "wide"
      },
      {
        src: asset("project/Prestige/Prestige_lights_images/WhatsApp Image 2026-09-18 at 10.30.30 PM.jpeg"),
        alt: "Prestige Residence sofa lounge detail with dual-head brass floor lamp and botanical wall art",
        caption: "Lounge nook with brass dual-head floor lamp illuminating botanical artwork and textured fabrics",
        aspect: "portrait"
      },
      {
        src: asset("project/Prestige/Prestige_lights_images/WhatsApp Image 2026-09-18 at 10.30.29 PM (2).jpeg"),
        alt: "Prestige Residence bedroom desk detail with subtle ceiling reveal and cane drawer fronts",
        caption: "Study nook showing integrated ceiling lighting and refined cane furniture detailing",
        aspect: "portrait"
      }
    ],
    seo: {
      title: "Prestige Residence — Luxury Residential Lighting Design | Trade House",
      description: "Discover Trade House's residential lighting installation at Prestige Residence in Kochi, balancing ambient, task, and decorative lighting with natural timber and cane finishes."
    }
  },
  {
    id: "hedge-cafe",
    slug: "hedge-cafe",
    number: "03",
    title: "Hedge Cafe",
    category: "Hospitality",
    typology: "Hospitality & Cafe Dining",
    location: "Kochi, Kerala",
    tagline: "Intimate pools of warm light, bespoke patterned pendants, and diffused shoji ceiling screens in a rich timber and leather setting.",
    shortDesc: "An intimate, moody hospitality lighting installation complementing deep leather banquettes, timber finishes, indoor greenery, and Japanese shoji-inspired screens.",
    heroImage: asset("project/Hedge_Cafe/Hedge_Cafe_image/WhatsApp Image 2026-09-21 at 12.19.00 AM (1).jpeg"),
    heroAspect: "1.78",
    lightingFocus: "Warm Hospitality Ambiance & Atmospheric Contrast",
    narrative: {
      overview: "The Hedge Cafe project adopts a warm, intimate lighting concept that complements its contemporary hospitality interior while creating a relaxed, memorable dining experience. The lighting works in close harmony with the cafe’s rich material palette of ribbed leather seating, dark timber finishes, matte surfaces, and lush potted greenery.",
      approach: "A signature element is the use of warm decorative pendant fixtures positioned directly above seating and banquette dining tables. Their soft, diffused glow creates intimate pools of illumination over dining surfaces while leaving surrounding areas in comfortable, deeper shadow.",
      materials: "Warm lighting grazes the vertical fluting of leather banquettes, emphasizes grain in timber screens and shelving, and highlights indoor foliage. In the kitchen pass-through zone, an overhead Japanese shoji-inspired ceiling grid diffuses broad, soft illumination.",
      circulation: "In circulation and restroom zones, clean continuous ceiling illumination provides functional visibility while sustaining the contemporary character of the cafe interior."
    },
    highlights: [
      {
        title: "Intimate Tabletop Pendants",
        desc: "Warm patterned drum pendants casting focused, golden halos onto dining tables while keeping circulation paths moody."
      },
      {
        title: "Shoji-Inspired Diffused Ceiling Screen",
        desc: "Overhead Japanese grid screen providing uniform, glare-free diffused light along the kitchen pass-through counter."
      },
      {
        title: "Architectural Washroom Ceiling Grid",
        desc: "Geometric backlit ceiling light panel in the washroom paired with faceted wall mirrors and dark matte fixtures."
      },
      {
        title: "Leather & Timber Material Grazing",
        desc: "Directional warm light highlighting the vertical fluting of rich cognac leather banquette seating and timber cabinetry."
      }
    ],
    gallery: [
      {
        src: asset("project/Hedge_Cafe/Hedge_Cafe_image/WhatsApp Image 2026-09-21 at 12.19.00 AM (1).jpeg"),
        alt: "Hedge Cafe main dining hall with leather banquette seating, warm patterned pendant lamps, and kitchen pass-through counter",
        caption: "Main dining hall showing intimate pendant pools over banquette seating and background shoji screen illumination",
        aspect: "wide"
      },
      {
        src: asset("project/Hedge_Cafe/Hedge_Cafe_image/WhatsApp Image 2026-09-21 at 12.18.59 AM.jpeg"),
        alt: "Hedge Cafe banquette booth close-up with warm pendant light reflecting on dark tabletop and ribbed leather backrest",
        caption: "Banquette dining booth bathed in warm pendant light accentuating the rich cognac leather upholstery",
        aspect: "wide"
      },
      {
        src: asset("project/Hedge_Cafe/Hedge_Cafe_image/WhatsApp Image 2026-09-21 at 12.19.00 AM.jpeg"),
        alt: "Hedge Cafe symmetric dining view with arched floor lamps and warm lanterns over communal seating",
        caption: "Symmetrical seating perspective with arched floor lamps creating intimate dining pockets",
        aspect: "wide"
      },
      {
        src: asset("project/Hedge_Cafe/Hedge_Cafe_image/WhatsApp Image 2026-09-21 at 12.18.59 AM (1).jpeg"),
        alt: "Hedge Cafe timber partition and indoor greenery corner illuminated by overhead diffused shoji screen",
        caption: "Shoji-inspired overhead lighting washing wooden partition shelving and indoor potted plants",
        aspect: "portrait"
      },
      {
        src: asset("project/Hedge_Cafe/Hedge_Cafe_image/WhatsApp Image 2026-09-21 at 12.19.00 AM (2).jpeg"),
        alt: "Hedge Cafe washroom featuring geometric backlit ceiling grid and faceted mirror panels",
        caption: "Washroom lighting with backlit geometric ceiling grid and architectural faceted mirrors",
        aspect: "portrait"
      }
    ],
    seo: {
      title: "Hedge Cafe — Warm Hospitality Lighting Design | Trade House",
      description: "Experience Trade House's warm, intimate hospitality lighting at Hedge Cafe in Kochi, featuring bespoke table pendants, diffused shoji screens, and leather material grazing."
    }
  },
  {
    id: "rajesh-residence",
    slug: "rajesh-residence",
    number: "04",
    title: "Rajesh Residence",
    category: "Residential",
    typology: "Architectural Residential Interior",
    location: "Kerala",
    tagline: "Double-height void anchored by a dramatic amber-glass molecular chandelier, ceiling magnetic tracks, and circulation bridge grazing.",
    shortDesc: "A warm, contemporary luxury residence where architectural spotlights, magnetic track profiles, and sculptural pendants celebrate natural wood, stone art, and double-height spaces.",
    heroImage: asset("project/rajesh_lights/rajesh_lights_images/page_5.jpg"),
    heroAspect: "1.50",
    lightingFocus: "Double-Height Void & Architectural Wall Grazing",
    narrative: {
      overview: "The Rajesh Residence explores a warm and contemporary lighting approach that integrates seamlessly with the interior architecture. The lighting scheme complements extensive natural wood paneling, textured wall surfaces, neutral planes, and refined furniture to craft a cohesive, welcoming luxury residential environment.",
      approach: "A combination of recessed spotlights, focused accent lighting, linear profiles, and decorative fixtures creates multi-layered depth across the home. Controlled ambient light is paired with directional accent spots highlighting wall niches, curated sculptures, and wood cabinetry.",
      voidAndBridge: "The double-height living room is anchored by a sculptural suspended amber-glass molecular cluster chandelier and a ceiling perimeter magnetic track. From the upper-level bridge, focused lighting enhances circulation walkways, wood fluting, decorative mandala wall plates, and an etched stone Ganesha mural.",
      materials: "Recessed pin-spots set directly into rich wood ceiling panels cast warm pools along corridors, highlighting the rich grain of parquet flooring and fluted timber wall finishes."
    },
    highlights: [
      {
        title: "Sculptural Molecular Chandelier",
        desc: "Multi-globe amber glass molecular chandelier suspended in the double-height void over the living lounge."
      },
      {
        title: "Perimeter Magnetic Ceiling Track",
        desc: "Recessed black magnetic track profile tracing the living ceiling perimeter for flexible architectural aiming."
      },
      {
        title: "Corridor Timber Pin-Spotting",
        desc: "Miniature warm recessed pin-spots integrated into the wooden ceiling plane guiding movement through private corridors."
      },
      {
        title: "Circulation Bridge Wall Washing",
        desc: "Directional wall-washers grazing decorative mandala wall discs and the etched Ganesha art mural along the bridge walkway."
      }
    ],
    gallery: [
      {
        src: asset("project/rajesh_lights/rajesh_lights_images/page_5.jpg"),
        alt: "Rajesh Residence double-height void with suspended amber-glass molecular chandelier and perimeter magnetic track",
        caption: "Mezzanine overlook into the double-height living room with sculptural molecular bubble chandelier and magnetic ceiling profile",
        aspect: "wide"
      },
      {
        src: asset("project/rajesh_lights/rajesh_lights_images/page_1.jpg"),
        alt: "Rajesh Residence ground floor corridor with vertical wood slat wall, organic stone sculpture, Ganesha idol, and ceiling pin-spots",
        caption: "Corridor circulation with warm pin-spots in timber ceiling accenting fluted wood paneling and stone art",
        aspect: "wide"
      },
      {
        src: asset("project/rajesh_lights/rajesh_lights_images/page_3.jpg"),
        alt: "Rajesh Residence upper bridge walkway with illuminated mandala plates, wood slats, and etched Ganesha mural",
        caption: "Upper bridge walkway showing wall-washed decorative mandala plates and vertical timber wall grazing",
        aspect: "wide"
      },
      {
        src: asset("project/rajesh_lights/rajesh_lights_images/page_2.jpg"),
        alt: "Rajesh Residence architectural display shelving nook with focused accent lighting and soft shadow play",
        caption: "Built-in shelving alcove with directional accent lighting sculpting textured background walls",
        aspect: "wide"
      },
      {
        src: asset("project/rajesh_lights/rajesh_lights_images/page_4.jpg"),
        alt: "Rajesh Residence perspective down upper circulation bridge with timber railings and directional lighting",
        caption: "Upper-level bridge perspective highlighting wooden flooring and coordinated downlight positioning",
        aspect: "wide"
      }
    ],
    seo: {
      title: "Rajesh Residence — Luxury Residential Lighting | Trade House",
      description: "Explore Trade House's architectural lighting design for Rajesh Residence, featuring a double-height void molecular chandelier, magnetic ceiling tracks, and timber wall grazing."
    }
  },
  {
    id: "bismi-home-appliances",
    slug: "bismi-home-appliances",
    number: "05",
    title: "Bismi Home Appliances, Kaloor",
    category: "Retail",
    typology: "Retail & Commercial Showroom",
    location: "Kaloor, Kochi, Kerala",
    tagline: "Suspended geometric luminous ceiling panels against a dark backdrop creating high-contrast retail focus for premium appliance brands.",
    shortDesc: "A contemporary retail lighting strategy designed around a high-contrast technology showroom, using structured luminous ceiling panels and integrated linear display lighting.",
    heroImage: asset("project/Bismi_Home_Appliances/Bismi_Appliances_image/IMG_3020.jpg"),
    heroAspect: "0.75",
    lightingFocus: "Suspended Luminous Grid & Brand Contrast Lighting",
    narrative: {
      overview: "The Bismi Home Appliances, Kaloor project adopts a contemporary retail lighting strategy designed specifically around a high-contrast, technology-focused showroom environment. The predominantly dark ceiling and display surfaces create a controlled visual background, allowing products, illuminated brand graphics, and promotional displays to become the primary visual focus.",
      approach: "A key feature of the lighting design is the use of large suspended luminous panels arranged in a structured geometric grid. These fixtures provide broad, uniform illumination across the showroom floor while maintaining a clean, minimal ceiling composition.",
      retailBranding: "The lighting is particularly effective in supporting product presentation and brand visibility across premier manufacturers including LG, Samsung, Haier, IFB, and Whirlpool. Bright, evenly illuminated display surfaces bring attention to appliances and promotional graphics, while darker surrounding planes establish sharp visual contrast.",
      displayIntegration: "Integrated linear lighting around display zones and shelving enhances product silhouettes, while the structured ceiling panels mirror the rectilinear geometry of modern appliances."
    },
    highlights: [
      {
        title: "Suspended Luminous Ceiling Grids",
        desc: "Modular groups of square luminous panels floating beneath the dark ceiling, providing diffuse ambient illumination."
      },
      {
        title: "High-Contrast Visual Hierarchy",
        desc: "Deep matte black ceiling cavity focusing customer visual attention onto brightly lit appliance display galleries."
      },
      {
        title: "Integrated Display Edge Lighting",
        desc: "Linear perimeter illumination integrated into display cabinetry highlighting product edges and brand signage."
      },
      {
        title: "Multi-Brand Zone Guidance",
        desc: "Calibrated light distribution guiding customer navigation across LG, Samsung, Haier, and Whirlpool retail zones."
      }
    ],
    gallery: [
      {
        src: asset("project/Bismi_Home_Appliances/Bismi_Appliances_image/IMG_3020.jpg"),
        alt: "Bismi Home Appliances Kaloor showroom featuring suspended luminous ceiling panels over LG and Samsung display galleries",
        caption: "Perspective view of the showroom floor showing overhead luminous panel grid and integrated display lighting",
        aspect: "portrait"
      },
      {
        src: asset("project/Bismi_Home_Appliances/Bismi_Appliances_image/IMG_3013.jpg"),
        alt: "Suspended luminous light panels floating below black ceiling at Bismi Home Appliances Kaloor",
        caption: "Angled detail of suspended square luminaires illuminating Haier and Whirlpool brand zones",
        aspect: "portrait"
      },
      {
        src: asset("project/Bismi_Home_Appliances/Bismi_Appliances_image/IMG_3010.jpg"),
        alt: "Geometric 6-panel luminous ceiling grid against dark industrial ceiling at Bismi Kaloor",
        caption: "Geometric ceiling composition showing 6-panel luminous luminaire array against dark ceiling backdrop",
        aspect: "portrait"
      },
      {
        src: asset("project/Bismi_Home_Appliances/Bismi_Appliances_image/IMG_3017.jpg"),
        alt: "Bismi Home Appliances ceiling grid lighting extending towards IFB and LG brand displays",
        caption: "Extended view of luminous panels establishing visual axis above appliance galleries",
        aspect: "portrait"
      }
    ],
    seo: {
      title: "Bismi Home Appliances Kaloor — Retail Lighting Design | Trade House",
      description: "Discover Trade House's commercial retail lighting installation at Bismi Home Appliances in Kaloor, Kochi, featuring suspended luminous ceiling grids and brand display lighting."
    }
  }
];

export const PROJECT_CATEGORIES = [
  { name: "All", count: REAL_PROJECTS.length },
  { name: "Residential", count: REAL_PROJECTS.filter(p => p.category === "Residential").length },
  { name: "Hospitality", count: REAL_PROJECTS.filter(p => p.category === "Hospitality").length },
  { name: "Retail", count: REAL_PROJECTS.filter(p => p.category === "Retail").length },
];
