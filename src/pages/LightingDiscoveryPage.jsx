import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, CheckCircle2, SlidersHorizontal, Eye } from 'lucide-react';

export default function LightingDiscoveryPage() {
  const [activeCategory, setActiveCategory] = useState('architectural');

  const categories = [
    { id: 'architectural', name: 'Architectural Lighting', count: '14 Series' },
    { id: 'decorative', name: 'Decorative & Sculptural', count: '10 Series' },
    { id: 'outdoor', name: 'Landscape & Facade', count: '8 Series' },
    { id: 'smart', name: 'Smart & Automation Optics', count: '6 Series' },
  ];

  const fixtures = {
    architectural: [
      {
        name: "Aura Micro Trimless Downlight",
        category: "Architectural",
        cct: "2700K / 3000K / Tunable",
        cri: "CRI 98 (R9 > 92)",
        beam: "10° / 24° / 36° / 50°",
        ugr: "UGR < 10 Dark Light",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=85",
        desc: "Deep-recessed dark-light luminaire with matte black anti-glare baffle. Plaster-in bezel disappears into smooth ceilings."
      },
      {
        name: "Matrix 48V Low-Voltage Magnetic Track",
        category: "Architectural",
        cct: "2700K – 4000K",
        cri: "CRI 97+",
        beam: "Interchangeable Modules",
        ugr: "UGR < 13",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85",
        desc: "Ultra-slim 18mm track system supporting tool-free hot-swappable accent spots, linear micro-diffusers, and wall washers."
      },
      {
        name: "Continuous Contour Cove Profile",
        category: "Architectural",
        cct: "2400K – 3000K Warm Dim",
        cri: "CRI 98",
        beam: "120° Asymmetric Diffuse",
        ugr: "Indirect Concealed",
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=85",
        desc: "Seamless dot-free architectural linear profile for floating false ceilings, shadow gaps, and perimeter cornices."
      },
      {
        name: "Veneer Asymmetric Wall Grazer",
        category: "Architectural",
        cct: "2700K",
        cri: "CRI 97+",
        beam: "15° x 45° Oval Graze",
        ugr: "UGR < 11",
        image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=85",
        desc: "Precision optical grazer highlighting the rich natural relief of laterite, exposed concrete, and marble feature walls."
      }
    ],
    decorative: [
      {
        name: "Lumina Cascading Glass Constellation",
        category: "Decorative",
        cct: "2200K – 2700K Sunset Dim",
        cri: "CRI 95+",
        beam: "Omnidirectional Ambient",
        ugr: "Diffused Soft",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=85",
        desc: "Hand-blown amber and smoke crystal spheres suspended on brushed antique bronze rods for grand double-height stairwell voids."
      },
      {
        name: "Solstice Sculptural Dining Chandelier",
        category: "Decorative",
        cct: "2400K Warm Glow",
        cri: "CRI 97",
        beam: "Direct & Indirect Dual-Emission",
        ugr: "Low-Glare Lens",
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=85",
        desc: "Hand-finished satin brass architectural ring with integrated downward dining pinspots and upward ceiling wash."
      },
      {
        name: "Horizon Minimalist Bedside Sconce",
        category: "Decorative",
        cct: "2200K / 2700K Dual Mode",
        cri: "CRI 98",
        beam: "Indirect Halo + 8° Reading Stem",
        ugr: "Zero Bed Glare",
        image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=85",
        desc: "Dual-circuit wall sconce providing a soft ambient halo plus an independently switched micro-beam reading light."
      }
    ],
    outdoor: [
      {
        name: "Terra In-Ground IP68 Drive-over Projector",
        category: "Outdoor",
        cct: "2700K / 3000K",
        cri: "CRI 95",
        beam: "12° / 30° / 60° Adjustable Tilt",
        ugr: "Honeycomb Louver Included",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=85",
        desc: "Marine-grade 316L stainless steel body built for Kerala monsoons. Upward architectural grazing of facades and columns."
      },
      {
        name: "Verdant Tree & Palm Projector",
        category: "Outdoor",
        cct: "2700K Warm Nature",
        cri: "CRI 97",
        beam: "15° Narrow Tree Spire",
        ugr: "Anti-Glare Snoot",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=85",
        desc: "Spike-mounted high-power projector with glare-shielding snoot designed to illuminate canopy foliage without light pollution."
      },
      {
        name: "Kyoto Low-Glare Pathway Bollard",
        category: "Outdoor",
        cct: "2400K Amber",
        cri: "CRI 92",
        beam: "180° Downward Asymmetric",
        ugr: "Zero Skyward Spill",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=85",
        desc: "Cast aluminum dark-sky compliant garden bollard casting safe, beautiful pathway illumination without blinding strolling guests."
      }
    ],
    smart: [
      {
        name: "Circadia Tunable White Architectural Engine",
        category: "Smart",
        cct: "1800K – 6500K Full Spectrum",
        cri: "CRI 98 (R9 > 94 across all CCTs)",
        beam: "Multi-Optic",
        ugr: "UGR < 10",
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=85",
        desc: "Microprocessor-controlled dual-chip LED module replicating natural sunlight trajectory from dawn to dusk."
      },
      {
        name: "Aura Smart Metallic Keypad & Scene Controller",
        category: "Smart",
        cct: "Multi-scene recall",
        cri: "Integrated Status LED",
        beam: "Custom Engraved",
        ugr: "Tactile Glass / Brass",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85",
        desc: "Solid milled brass and matte black keypads with back-lit laser engravings for one-touch scene activation."
      }
    ]
  };

  const currentList = fixtures[activeCategory] || fixtures.architectural;

  return (
    <div className="bg-obsidian-950 text-[#F4F3EE] pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-luxe-gold/10 border border-luxe-gold/30 text-luxe-gold text-xs uppercase tracking-[0.25em] font-mono">
            <Sparkles className="w-3.5 h-3.5" /> Curated Luminaire Gallery
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-tight text-white">
            Lighting <span className="gold-gradient-text italic font-normal">Discovery</span>
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
            Not a retail catalogue, but an architectural gallery of precision luminaires. Hand-selected for exceptional color fidelity (CRI 97+), ultra-low glare (UGR &lt; 11), and tropical climate durability.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-12 no-scrollbar border-b border-white/10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-all duration-300 whitespace-nowrap font-medium flex items-center gap-2 ${
                activeCategory === cat.id
                  ? 'bg-luxe-gold text-obsidian-950 font-bold shadow-md shadow-black/40'
                  : 'bg-obsidian-900 border border-white/10 text-neutral-300 hover:text-white hover:border-luxe-gold/30'
              }`}
            >
              <span>{cat.name}</span>
              <span className="text-[10px] opacity-70 font-mono">({cat.count})</span>
            </button>
          ))}
        </div>

        {/* Fixtures Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentList.map((fix, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-obsidian-900/80 border border-white/10 shadow-2xl flex flex-col justify-between space-y-6 group hover:border-luxe-gold/40 transition-all duration-500"
            >
              <div className="space-y-4">
                <div className="h-64 rounded-2xl overflow-hidden relative border border-white/5">
                  <img
                    src={fix.image}
                    alt={fix.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-obsidian-950/85 backdrop-blur-md border border-white/10 text-[10px] font-mono text-luxe-gold uppercase">
                    {fix.category}
                  </div>
                </div>

                <h3 className="font-serif text-2xl text-white font-medium group-hover:text-luxe-champagne transition-colors">
                  {fix.name}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  {fix.desc}
                </p>
              </div>

              {/* Photometric Spec Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10 text-[11px] font-mono">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-neutral-400 block text-[9px] uppercase">CRI</span>
                  <span className="text-white font-medium">{fix.cri}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-neutral-400 block text-[9px] uppercase">CCT Range</span>
                  <span className="text-white font-medium">{fix.cct}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-neutral-400 block text-[9px] uppercase">Beam Optics</span>
                  <span className="text-white font-medium">{fix.beam}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-neutral-400 block text-[9px] uppercase">Glare Control</span>
                  <span className="text-emerald-400 font-medium">{fix.ugr}</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <Link
                  to="/start-a-project"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-luxe-gold hover:text-white transition-colors"
                >
                  Request Specification Sheet <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/studio"
                  className="text-[11px] font-mono text-neutral-400 hover:text-luxe-gold transition-colors"
                >
                  Test at Kalloor Studio
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Live Test Callout */}
        <div className="mt-20 p-10 rounded-3xl bg-luxe-gold/5 border border-luxe-gold/30 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase font-mono tracking-widest text-luxe-gold">
              Live Optical Evaluation
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white">
              Experience these fixtures at our Kalloor Studio
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-xl">
              Inspect beam angles, test tunable white with your chosen materials, and touch custom metallic switchplates.
            </p>
          </div>
          <Link
            to="/studio"
            className="px-8 py-3.5 rounded-full bg-luxe-gold text-obsidian-950 text-xs font-bold uppercase tracking-widest hover:bg-luxe-champagne transition-all shadow-lg shadow-luxe-gold/20 whitespace-nowrap"
          >
            Book Studio Walkthrough
          </Link>
        </div>
      </div>
    </div>
  );
}
