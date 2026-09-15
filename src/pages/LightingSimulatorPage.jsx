import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Layers, Sliders, MapPin, Navigation, ArrowRight, CheckCircle2, Shield, Eye } from 'lucide-react';
import LightingSimulator from '../components/LightingSimulator';
import { BRAND } from '../data/siteData';

export default function LightingSimulatorPage() {
  return (
    <div className="bg-obsidian-950 text-[#F4F3EE] pt-28 sm:pt-32 pb-24 min-h-screen">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-luxe-gold/10 border border-luxe-gold/30 text-luxe-gold text-xs uppercase tracking-[0.25em] font-mono">
            <Sparkles className="w-3.5 h-3.5" /> Virtual Lighting Lab
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-tight text-white leading-none">
            Interactive <br />
            <span className="gold-gradient-text italic font-normal">Lighting Simulator</span>
          </h1>

          <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
            Test how layered architectural lighting transforms living rooms, bedrooms, dining salons, and culinary kitchens. Adjust individual fixtures, dimming thresholds, and color temperatures in real time before building.
          </p>
        </div>
      </div>

      {/* Main Interactive Lighting Simulator Component */}
      <LightingSimulator showFullHeader={false} />

      {/* Architectural Science & Engineering Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="border-t border-white/10 pt-16">
          <div className="max-w-2xl mb-12 space-y-2">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-luxe-gold">
              Photometric Engineering
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-light">
              Principles of Architectural Illumination
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-obsidian-900/60 border border-white/5 space-y-4">
              <span className="font-mono text-xs text-luxe-gold tracking-widest block uppercase">
                01 • Layered Hierarchy
              </span>
              <h3 className="font-serif text-2xl text-white font-medium">
                Ambient vs. Accent
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                Flat grids of uniform ceiling lights flatten architectural texture. We layer diffuse perimeter cove glow (ambient base) with narrow 15°–24° spot optics (task &amp; art) to create sculptural depth.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-obsidian-900/60 border border-white/5 space-y-4">
              <span className="font-mono text-xs text-luxe-gold tracking-widest block uppercase">
                02 • Circadian CCT
              </span>
              <h3 className="font-serif text-2xl text-white font-medium">
                Tunable White Biology
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                Human biology responds to light spectrum. Transition smoothly from morning 3500K clarity for work productivity to 2200K amber candlelight in the evening to stimulate melatonin and deep rest.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-obsidian-900/60 border border-white/5 space-y-4">
              <span className="font-mono text-xs text-luxe-gold tracking-widest block uppercase">
                03 • Dark Light Optics
              </span>
              <h3 className="font-serif text-2xl text-white font-medium">
                UGR &lt; 10 Glare Control
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                True architectural luxury is light without visual glare. Deep-recessed baffles and honeycomb louvers hide the LED source so you see the illuminated painting or marble, not the luminaire.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
