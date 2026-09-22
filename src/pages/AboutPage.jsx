import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Compass, 
  Layers, 
  MapPin, 
  Zap, 
  Eye, 
  CheckCircle2, 
  Calendar,
  Building2,
  Sliders,
  SunMedium
} from 'lucide-react';
import { TRUST_METRICS, BRAND } from '../data/siteData';

export default function AboutPage() {
  const milestones = [
    {
      year: "2006",
      era: "The Genesis",
      location: "Kannur, Kerala",
      title: "Grounded in Electrical Mastery",
      badge: "Foundation",
      desc: "Our story began nearly two decades ago in Kannur as an ambitious electrical venture. We spent years inside raw walls, mastering the unseen backbone of buildings—conduits, distribution grids, load calculations, and circuitry. This technical rigor gave us an indelible truth: beauty in lighting is worthless without flawless engineering beneath it."
    },
    {
      year: "2021",
      era: "The Metamorphosis",
      location: "Kannur, Kerala",
      title: "From Conduits to Curated Luminescence",
      badge: "Evolution",
      desc: "Having mastered the anatomy of electrical power, we took a defining leap—evolving into an exclusive lighting showroom. We rejected the commercial approach of hanging fixtures like generic commodities. Instead, we began curating optical instruments, collaborating with architects, and proving that lighting is not an accessory, but an emotional spatial medium."
    },
    {
      year: "Now",
      era: "The Flagship Milestone",
      location: "Kochi, Kerala",
      title: "The Kochi Lighting Experience Center",
      badge: "New Era",
      desc: "Today marks our boldest chapter: the launch of our state-of-the-art Lighting Experience Studio in Kalloor, Kochi. Designed as an architectural sensory laboratory, it allows architects, designers, and homeowners to step inside pitch-black simulation rooms, test true-color CRI rendering on natural Kerala materials, and witness how light sculpts architecture in real time."
    }
  ];

  const spatialDimensions = [
    {
      icon: Eye,
      tag: "Spatial Perception",
      title: "Sculpting Volume & Depth",
      desc: "Architecture without lighting collapses into flatness once the sun sets. Strategic illumination carves out depth, floats ceilings, grounds vertical planes, and guides human intuition through space with effortless grace."
    },
    {
      icon: Layers,
      tag: "Material Truth",
      title: "Revealing Kerala's Authentic Textures",
      desc: "Kerala's luxury estates celebrate rich, organic materials—hand-dressed laterite, warm teakwood, and honed marble. Our calibrated 97+ CRI optics awaken the deep grain, veins, and tactile soul of every surface without distortion."
    },
    {
      icon: SunMedium,
      tag: "Circadian Wellness",
      title: "Light in Harmony with Life",
      desc: "Light governs human biology. From invigorating, crisp mornings to warm, amber twilight (1800K), our circadian engineering creates restorative sanctuaries that calm the nervous system and nurture genuine well-being."
    },
    {
      icon: Sliders,
      tag: "Dark-Light Balance",
      title: "The Poetry of Shadow",
      desc: "True luxury is not floodlighting every corner; it is the deliberate interplay between radiance and shadow. By engineering fixtures with UGR < 9, the light source disappears—leaving only pure, glare-free ambience."
    }
  ];

  const values = [
    {
      num: "01",
      title: "Dark-Light Mastery",
      desc: "Light should reveal space, not glare into eyes. We engineer fixtures with deep baffles and UGR < 9 so the source disappears, leaving only pure, evocative illumination."
    },
    {
      num: "02",
      title: "High CRI True-Color Fidelity",
      desc: "Kerala's luxury residences feature exquisite teakwood, hand-cut laterite, and polished marble. We strictly specify CRI 97+ (R9 > 90) so textures remain vibrant and authentic."
    },
    {
      num: "03",
      title: "End-to-End Architectural Integrity",
      desc: "We bridge the divide between theoretical DIALux blueprints and actual job-site electrical conduits, ensuring zero execution drift from concept to commissioning."
    },
    {
      num: "04",
      title: "Circadian Harmony",
      desc: "Light governs human well-being. We calibrate dynamic color temperatures to support biological recovery, mental clarity, and tranquil evening relaxation."
    }
  ];

  return (
    <div className="bg-obsidian-950 text-[#F4F3EE] pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 01. Architectural Manifesto / Hero Header */}
        <div className="max-w-4xl space-y-6 mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-luxe-gold/10 border border-luxe-gold/30 text-luxe-gold text-xs uppercase tracking-[0.25em] font-mono">
            <Sparkles className="w-3.5 h-3.5" /> Our Architectural Manifesto
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light uppercase tracking-tight text-white leading-tight">
            Light is the fourth dimension <br />
            <span className="gold-gradient-text italic font-normal">of architecture.</span>
          </h1>
          <p className="text-neutral-300 text-base sm:text-xl font-light leading-relaxed max-w-3xl">
            At Trade House, we believe lighting should be felt before it is noticed. We don't sell fixtures; we sculpt atmospheres, celebrate materiality, and elevate human living through the precise physics and art of light.
          </p>
        </div>

        {/* 02. The Spatial Philosophy: Why Lighting Defines Space */}
        <div className="my-24 p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-obsidian-900 to-obsidian-950 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-luxe-gold/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl space-y-4 mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-luxe-gold font-mono">
              The Philosophy of Space
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-light">
              Light Does Not Fill Space. <br />
              <span className="gold-gradient-text italic">It Creates It.</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              Without thoughtful illumination, even the most breathtaking architectural masterpiece becomes flat and indistinct in the dark. Light directs the eye, awakens emotional resonance, reveals raw textures, and transforms physical boundaries into living experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {spatialDimensions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="p-6 rounded-2xl bg-obsidian-950/70 border border-white/5 hover:border-luxe-gold/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-luxe-gold/10 border border-luxe-gold/20 flex items-center justify-center text-luxe-gold group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-luxe-gold/80 block">
                      {item.tag}
                    </span>
                    <h3 className="font-serif text-xl text-white font-medium">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-300 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 03. The Journey: From Kannur 2006 to Kochi 2024+ */}
        <div className="my-28 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-luxe-gold font-mono">
              An 18-Year Odyssey
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-light">
              The Evolution of Trade House
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              Our transition from foundational electrical engineering to Kerala's vanguard architectural lighting studio.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {milestones.map((m, idx) => (
              <div 
                key={idx}
                className="relative p-8 sm:p-10 rounded-3xl bg-obsidian-900 border border-white/10 hover:border-luxe-gold/40 transition-all duration-500 flex flex-col justify-between group"
              >
                {/* Year Header & Badge */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-4xl sm:text-5xl text-luxe-gold font-light tracking-tight">
                      {m.year}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] uppercase font-mono tracking-widest bg-white/5 border border-white/10 text-neutral-300 group-hover:border-luxe-gold/40 group-hover:text-luxe-gold transition-colors">
                      {m.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-luxe-gold" />
                    <span>{m.location}</span>
                    <span className="mx-1.5 text-white/20">•</span>
                    <span className="text-neutral-300">{m.era}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-white font-medium pt-2">
                    {m.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                    {m.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400 font-mono">
                  <span>Milestone 0{idx + 1}</span>
                  <span className="text-luxe-gold group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 04. The Kochi Experience Center Spotlight */}
        <div className="my-28 p-10 sm:p-16 rounded-3xl bg-obsidian-900/60 border border-white/10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-luxe-gold font-mono flex items-center gap-2">
                <Building2 className="w-4 h-4" /> The Next Frontier
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-light leading-tight">
                Step Inside the Kochi <br />
                <span className="gold-gradient-text italic">Lighting Experience Studio</span>
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                Choosing architectural lighting from a catalogue or under bright showroom spotlights is an outdated gamble. Our new experience center in Palarivattom/Kalloor, Kochi is conceived as an interactive playground for architects, interior designers, and discerning homeowners.
              </p>
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                Witness how beam angles carve shadows across hand-crafted teak and textured plaster. Compare CRI 80 versus museum-grade CRI 98 side by side, and experience 1800K to 4000K circadian shifts before a single conduit is laid on your site.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/studio"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-luxe-gold text-obsidian-950 text-xs font-bold uppercase tracking-wider hover:bg-luxe-champagne transition-all shadow-lg shadow-black/40"
                >
                  Book Private Studio Tour <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/start-a-project"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 text-xs font-medium uppercase tracking-wider transition-all"
                >
                  Consult Our Designers
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 h-[440px] rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
                alt="Trade House Kochi Lighting Experience Center"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent" />
              <a
                href={BRAND.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-obsidian-950/80 backdrop-blur-md border border-white/10 flex items-center justify-between hover:border-luxe-gold/50 transition-all group/loc"
                title="Open location in Google Maps"
              >
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-luxe-gold shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-luxe-gold">
                      Flagship Destination
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-white group-hover/loc:text-luxe-gold transition-colors">
                      Palarivattom / Kalloor, Kochi
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/20 group-hover/loc:border-emerald-500/50">
                  Open in Google Maps ↗
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* 05. Four Core Principles */}
        <div className="my-28 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-luxe-gold font-mono">
              Uncompromising Standards
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white">
              The Trade House Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-obsidian-900 border border-white/5 space-y-4 hover:border-luxe-gold/30 transition-all">
                <span className="font-mono text-xs text-luxe-gold font-bold uppercase tracking-widest block">
                  Principle {val.num}
                </span>
                <h3 className="font-serif text-2xl text-white font-medium">
                  {val.title}
                </h3>
                <p className="text-xs text-neutral-300 font-light leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 06. Why Trade House Benchmarks */}
        <div className="p-10 sm:p-16 rounded-3xl bg-obsidian-900/60 border border-white/10 my-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-luxe-gold font-mono">
                Architectural Accountability
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white">
                Engineered for Architectural Trust
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                We handle every stage internally: concept, photometric calculations, electrical conduit layouts, luminaire supply, site supervision, beam focusing, and 5-year warranty maintenance.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TRUST_METRICS.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-obsidian-950 border border-white/5 space-y-2">
                  <span className="font-serif text-3xl text-luxe-gold font-light">{item.value}</span>
                  <p className="text-xs font-medium text-white uppercase tracking-wider">{item.label}</p>
                  <p className="text-[11px] text-neutral-400 font-light">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 07. Bottom CTA */}
        <div className="text-center max-w-3xl mx-auto space-y-8 mt-28 pt-16 border-t border-white/10">
          <span className="text-xs uppercase tracking-[0.25em] text-luxe-gold font-mono">
            Experience It Firsthand
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-light leading-tight">
            Ready to Transform How Your Space <br />
            <span className="gold-gradient-text italic">Feels at Night?</span>
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
            Whether you are building an expansive waterfront villa in Kochi or curating a boutique commercial space, let's sculpt it with light.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/studio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-luxe-gold text-obsidian-950 text-xs font-bold uppercase tracking-wider hover:bg-luxe-champagne transition-all shadow-xl shadow-luxe-gold/10"
            >
              Visit Kochi Experience Studio <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/start-a-project"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 text-xs font-semibold uppercase tracking-wider transition-all"
            >
              Start a Project
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

