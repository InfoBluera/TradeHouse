import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, CheckCircle2, Award, Users, ArrowRight, Compass, Layers } from 'lucide-react';
import { TRUST_METRICS } from '../data/siteData';

export default function AboutPage() {
  const values = [
    {
      title: "Dark-Light Mastery",
      desc: "Light should reveal space, not glare into eyes. We engineer fixtures with deep baffles and UGR < 11 so the source disappears, leaving only pure illumination."
    },
    {
      title: "High CRI True-Color Fidelity",
      desc: "Kerala's luxury residences feature exquisite teakwood, hand-cut laterite, and polished marble. We strictly specify CRI 97+ (with R9 > 90) so textures remain authentic."
    },
    {
      title: "End-to-End Architectural Integrity",
      desc: "We bridge the divide between theoretical DIALux blueprints and actual job-site electrical conduits, ensuring zero execution drift."
    },
    {
      title: "Circadian Harmony",
      desc: "Light governs human well-being. We calibrate color temperatures to support biological recovery and tranquil evening relaxation."
    }
  ];

  return (
    <div className="bg-obsidian-950 text-[#F4F3EE] pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-luxe-gold/10 border border-luxe-gold/30 text-luxe-gold text-xs uppercase tracking-[0.25em] font-mono">
            <Sparkles className="w-3.5 h-3.5" /> Our Architectural Manifesto
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light uppercase tracking-tight text-white leading-tight">
            We believe great lighting should be <br />
            <span className="gold-gradient-text italic font-normal">felt before it is noticed.</span>
          </h1>
          <p className="text-neutral-300 text-base sm:text-xl font-light leading-relaxed max-w-3xl">
            Trade House is an architectural lighting consultancy and luxury experience studio based in Kalloor, Kochi. We partner with architects, interior designers, and discerning homeowners to sculpt spaces through light.
          </p>
        </div>

        {/* Brand Story Imagery and Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-20">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-luxe-gold font-mono">
              The Trade House Origin
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium">
              Transcending the Standard Lighting Store
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              Traditional lighting retailers treat lights as decorative commodities hung haphazardly from metal ceiling grids. Trade House was founded on an entirely different premise: <strong>light is an invisible architectural building block</strong>.
            </p>
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              Without thoughtful lighting, exquisite architecture flattens at night. By combining optical photometrics, low-voltage magnetic tracks, custom architectural coves, and intelligent automation, we reveal the soul of every space we touch.
            </p>
            <div className="pt-2">
              <Link
                to="/start-a-project"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-luxe-gold text-obsidian-950 text-xs font-bold uppercase tracking-wider hover:bg-luxe-champagne transition-all"
              >
                Collaborate With Trade House <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 h-[460px] rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
              alt="Architectural Lighting Design Philosophy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-50" />
          </div>
        </div>

        {/* Four Core Values */}
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
                  Principle 0{idx + 1}
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

        {/* Why Trade House Benchmarks */}
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
      </div>
    </div>
  );
}
