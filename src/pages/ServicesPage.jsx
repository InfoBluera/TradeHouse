import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, SERVICE_CATEGORIES, PROCESS_STEPS } from '../data/siteData';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  ArrowUpRight,
  Compass,
  Zap,
  Sliders,
  Eye,
  FileCheck2,
  Wrench
} from 'lucide-react';

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter((s) => s.categorySlug === activeCategory);

  return (
    <div className="bg-obsidian-950 text-[#F4F3EE] pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-luxe-gold/10 border border-luxe-gold/30 text-luxe-gold text-xs uppercase tracking-[0.25em] font-mono">
            <Sparkles className="w-3.5 h-3.5" /> Complete Lighting Journey
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-tight text-white">
            Our <span className="gold-gradient-text italic font-normal">Services</span>
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
            Trade House provides a complete architectural lighting solution—from DIALux photometrics and CAD electrical drawings to curated luminaire supply, on-site electrical wiring, laser alignment, and smart scene commissioning.
          </p>
        </div>

        {/* Two Core Pillars Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {SERVICE_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className={`p-8 sm:p-10 rounded-3xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                activeCategory === cat.id 
                  ? 'bg-obsidian-900 border-luxe-gold/60 shadow-2xl shadow-luxe-gold/10' 
                  : 'bg-obsidian-900/60 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-luxe-gold font-bold">
                    Pillar {cat.number}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-neutral-300">
                    {cat.tagline}
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                  {cat.title}
                </h2>

                <p className="text-sm text-neutral-300 font-light leading-relaxed">
                  {cat.description}
                </p>

                <div className="pt-2 space-y-2">
                  <span className="text-[11px] uppercase tracking-wider font-mono text-neutral-400 block mb-2 font-medium">
                    Core Capabilities:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {cat.scope.map((item, iIdx) => (
                      <div key={iIdx} className="flex items-center gap-2 text-xs text-neutral-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-luxe-gold shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between relative z-10">
                <button
                  onClick={() => setActiveCategory(activeCategory === cat.id ? 'all' : cat.id)}
                  className={`inline-flex items-center gap-2 text-xs uppercase tracking-wider font-mono font-medium transition-colors ${
                    activeCategory === cat.id ? 'text-luxe-gold' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {activeCategory === cat.id ? 'Showing This Category' : `View ${cat.title} Disciplines`}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Filter Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12 border-b border-white/10 pb-6">
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                activeCategory === 'all'
                  ? 'bg-luxe-gold text-obsidian-950 font-bold shadow-md shadow-luxe-gold/20'
                  : 'bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:border-white/20'
              }`}
            >
              All Disciplines ({SERVICES.length})
            </button>
            <button
              onClick={() => setActiveCategory('planning')}
              className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                activeCategory === 'planning'
                  ? 'bg-luxe-gold text-obsidian-950 font-bold shadow-md shadow-luxe-gold/20'
                  : 'bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:border-white/20'
              }`}
            >
              01. Planning &amp; Drawings (3)
            </button>
            <button
              onClick={() => setActiveCategory('execution')}
              className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                activeCategory === 'execution'
                  ? 'bg-luxe-gold text-obsidian-950 font-bold shadow-md shadow-luxe-gold/20'
                  : 'bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:border-white/20'
              }`}
            >
              02. Execution &amp; Installation (3)
            </button>
          </div>

          <span className="text-xs font-mono text-neutral-400">
            Showing {filteredServices.length} of {SERVICES.length} Disciplines
          </span>
        </div>

        {/* Deep Dive Services List */}
        <div className="space-y-16">
          {filteredServices.map((service, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={service.id}
                id={service.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center p-8 sm:p-12 rounded-3xl bg-obsidian-900/60 border border-white/10 shadow-2xl relative overflow-hidden group hover:border-luxe-gold/30 transition-colors"
              >
                {/* Content Side */}
                <div className={`lg:col-span-7 space-y-6 ${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-sm text-luxe-gold font-bold">
                      {service.number}
                    </span>
                    <span className="h-[1px] w-8 bg-luxe-gold/40" />
                    <span className="text-[11px] uppercase tracking-wider font-mono px-3 py-1 rounded-full bg-luxe-gold/10 border border-luxe-gold/25 text-luxe-gold">
                      {service.category}
                    </span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium">
                    {service.title}
                  </h2>

                  <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 pt-2">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
                        <CheckCircle2 className="w-4 h-4 text-luxe-gold shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Deliverables note */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-xs text-neutral-300">
                    <strong className="text-luxe-champagne uppercase font-mono block mb-1">
                      Deliverables &amp; Outputs:
                    </strong>
                    {service.deliverables}
                  </div>

                  <div className="pt-4 flex flex-wrap gap-4">
                    <Link
                      to="/start-a-project"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-luxe-gold text-obsidian-950 text-xs font-bold uppercase tracking-wider hover:bg-luxe-champagne transition-all shadow-lg shadow-luxe-gold/20"
                    >
                      Enquire for This Service <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-xs font-medium uppercase tracking-wider text-neutral-300 hover:text-luxe-gold hover:border-luxe-gold/40 transition-all"
                    >
                      Dedicated Details <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Visual Image Side */}
                <div className={`lg:col-span-5 h-[340px] sm:h-[440px] rounded-3xl overflow-hidden border border-white/10 relative group ${!isEven ? 'lg:order-1' : ''}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-50" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Section Reminder */}
        <div className="mt-32 text-center max-w-4xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-luxe-gold font-mono">
            Coordinated Lifecycle
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white uppercase">
            From Blueprint to Midnight Glow
          </h2>
          <p className="text-sm text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto">
            Our services work as an integrated ecosystem so your architects, interior designers, and MEP contractors have a single responsible partner for lighting quality and precision execution.
          </p>
          <div className="pt-4">
            <Link
              to="/start-a-project"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-luxe-gold to-luxe-bronze text-obsidian-950 text-xs font-bold uppercase tracking-widest shadow-xl shadow-luxe-gold/20 hover:scale-105 transition-all"
            >
              Start Your Project Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

