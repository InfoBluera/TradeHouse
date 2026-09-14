import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, PROCESS_STEPS } from '../data/siteData';
import { ArrowRight, CheckCircle2, Sparkles, Layers, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="bg-obsidian-950 text-[#F4F3EE] pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-luxe-gold/10 border border-luxe-gold/30 text-luxe-gold text-xs uppercase tracking-[0.25em] font-mono">
            <Sparkles className="w-3.5 h-3.5" /> Turnkey Expertise
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-tight text-white">
            Our <span className="gold-gradient-text italic font-normal">Services</span>
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
            Trade House provides comprehensive architectural lighting services from initial creative concept development, photometrics, and luminaire curation to on-site laser alignment, smart automation programming, and long-term maintenance.
          </p>
        </div>

        {/* Deep Dive Services List */}
        <div className="space-y-20">
          {SERVICES.map((service, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={service.id}
                id={service.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center p-8 sm:p-12 rounded-3xl bg-obsidian-900/60 border border-white/10 shadow-2xl relative overflow-hidden"
              >
                {/* Content Side */}
                <div className={`lg:col-span-7 space-y-6 ${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm text-luxe-gold font-bold">
                      {service.number}
                    </span>
                    <span className="h-[1px] w-12 bg-luxe-gold/40" />
                    <span className="text-xs uppercase tracking-widest font-mono text-neutral-400">
                      Full Service Discipline
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
                      Deliverables:
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
                      Dedicated Page <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Visual Image Side */}
                <div className={`lg:col-span-5 h-[380px] sm:h-[460px] rounded-3xl overflow-hidden border border-white/10 relative group ${!isEven ? 'lg:order-1' : ''}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-40" />
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
            Our services work as an integrated ecosystem so your architects and interior designers have a single responsible partner for lighting quality.
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
