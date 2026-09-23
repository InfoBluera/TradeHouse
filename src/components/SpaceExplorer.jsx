import React, { useState } from 'react';
import { SPACES_GUIDE } from '../data/siteData';
import { Sparkles, CheckCircle2, ArrowRight, Lightbulb, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackInquiryClick } from '../utils/analytics';

export default function SpaceExplorer() {
  const [activeSpace, setActiveSpace] = useState(SPACES_GUIDE[0]);

  return (
    <section className="relative py-24 bg-obsidian-900/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-luxe-gold font-mono">
              Space-by-Space Curation
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white uppercase tracking-wide">
              Find Lighting <span className="gold-gradient-text italic font-normal">For Your Space</span>
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl font-light">
              Tailored lighting formulas designed for Kerala villas, double-height atriums, and modern residences.
            </p>
          </div>

          <Link
            to="/start-a-project"
            onClick={() => {
              trackInquiryClick({
                link_location: 'space_explorer',
                button_text: 'Request Space Consultation',
                destination: '/start-a-project',
              });
            }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-luxe-gold hover:text-white transition-colors self-start md:self-auto"
          >
            Request Space Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Space Tab Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {SPACES_GUIDE.map((space) => {
            const isSelected = activeSpace.id === space.id;
            return (
              <button
                key={space.id}
                onClick={() => setActiveSpace(space)}
                className={`px-5 py-3 rounded-full text-xs uppercase tracking-wider whitespace-nowrap transition-all duration-300 font-medium ${
                  isSelected
                    ? 'bg-luxe-gold text-obsidian-950 font-bold shadow-md shadow-black/40 scale-[1.01]'
                    : 'bg-obsidian-950 border border-white/10 text-neutral-300 hover:text-white hover:border-luxe-gold/30'
                }`}
              >
                {space.name.split('&')[0]}
              </button>
            );
          })}
        </div>

        {/* Active Space Details Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Image Showcase */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-white/10 group shadow-2xl h-[420px]">
            <img
              src={activeSpace.image}
              alt={activeSpace.name}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] tracking-[0.2em] font-mono text-luxe-gold uppercase">
                {activeSpace.subtitle}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white mt-1">
                {activeSpace.name}
              </h3>
            </div>
          </div>

          {/* Guidelines & Recommended Fixtures */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-[0.2em] text-luxe-champagne font-mono">
                Architectural Approach
              </h4>
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                {activeSpace.description}
              </p>
            </div>

            {/* Recommended Fixture Types */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-[0.2em] text-luxe-gold font-mono">
                Recommended Luminaires
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeSpace.recommended.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-obsidian-950/80 border border-white/5 text-xs text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-luxe-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pro Lighting Tip Card */}
            <div className="p-4 rounded-2xl bg-luxe-gold/5 border border-luxe-gold/25 flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-luxe-gold shrink-0 mt-0.5" />
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-luxe-gold font-semibold">
                  Lighting Designer's Rule:
                </span>
                <p className="text-xs text-neutral-300 mt-1 font-light leading-relaxed">
                  {activeSpace.proTip}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/lighting"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-luxe-gold hover:text-obsidian-950 border border-luxe-gold/30 text-xs font-semibold uppercase tracking-wider text-luxe-champagne transition-all"
              >
                View Curated Fixture Catalogue <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
