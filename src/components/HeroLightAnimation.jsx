import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import { trackInquiryClick } from '../utils/analytics';

export default function HeroLightAnimation() {
  const [lightIntensity, setLightIntensity] = useState(80);
  const [cct, setCct] = useState(2700); // 2700K warm architectural
  const [isPowerOn, setIsPowerOn] = useState(true);

  // Subtle architectural ambient lighting - tasteful and elegant, not overly gold
  const getGlowColor = () => {
    if (!isPowerOn) return 'rgba(0,0,0,0)';
    const opacity = (lightIntensity / 100) * 0.12;
    if (cct <= 2400) return `rgba(255, 200, 140, ${opacity})`;
    if (cct <= 3000) return `rgba(250, 242, 225, ${opacity})`;
    if (cct <= 4000) return `rgba(242, 240, 235, ${opacity})`;
    return `rgba(225, 235, 250, ${opacity})`;
  };

  const getLightRaysOpacity = () => {
    if (!isPowerOn) return 0;
    return (lightIntensity / 100) * 0.28;
  };

  return (
    <div className="relative min-h-[90vh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden bg-obsidian-950 pt-20 sm:pt-24 pb-12 sm:pb-16">
      {/* Background Architectural Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-1000 transform scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90')`,
          filter: isPowerOn 
            ? `brightness(${0.25 + (lightIntensity / 100) * 0.65}) contrast(${1.02 + (lightIntensity / 200) * 0.18}) saturate(${0.9 + (lightIntensity / 100) * 0.2})`
            : 'brightness(0.08) contrast(1.1) grayscale(0.8)',
        }}
      />

      {/* Dark Architectural Vignette & Gradient Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-obsidian-950 via-obsidian-950/65 to-obsidian-950/80 pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-obsidian-950/90 via-transparent to-obsidian-950/90 pointer-events-none" />

      {/* Dynamic Ambient Spotlight Glow - Refined & Subtle */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[75vw] h-[75vh] rounded-full pointer-events-none z-10 blur-[120px] transition-all duration-700"
        style={{
          background: getGlowColor(),
          transform: `translate(-50%, -20%) scale(${0.85 + (lightIntensity / 100) * 0.4})`,
        }}
      />

      {/* Light Beam Downward Projection Simulation - Tasteful Warm Alabaster */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[520px] h-[460px] pointer-events-none z-10 transition-opacity duration-700"
        style={{
          opacity: getLightRaysOpacity(),
          background: `conic-gradient(from 180deg at 50% 0%, transparent 42%, ${cct <= 3000 ? 'rgba(250, 240, 220, 0.08)' : 'rgba(225, 235, 255, 0.08)'} 50%, transparent 58%)`,
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Minimal Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-obsidian-900/85 border border-white/10 text-[10.5px] uppercase tracking-[0.22em] text-neutral-300 mb-6 backdrop-blur-md animate-fade-in shadow-md shadow-black/30">
          <span className="w-1.5 h-1.5 rounded-full bg-luxe-gold/90" />
          <span>Architectural &amp; Luxury Lighting Studio — Kochi</span>
        </div>

        {/* Cinematic Main Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[0.05em] text-white leading-[1.08] uppercase max-w-4xl">
          Lighting Spaces. <br />
          <span className="gold-gradient-text italic font-normal tracking-[0.03em]">
            Shaping Experiences.
          </span>
        </h1>

        {/* Supporting Editorial Paragraph */}
        <p className="mt-6 text-sm sm:text-base md:text-lg text-neutral-300 font-light max-w-2xl leading-relaxed tracking-wide">
          Trade House designs how a space looks, feels, and functions through light. Precision architectural fixtures, human-centric smart automation, and turnkey execution in Kalloor, Kochi.
        </p>

        {/* Primary & Secondary Call to Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          <Link
            to="/start-a-project"
            onClick={() => {
              trackInquiryClick({
                link_location: 'hero',
                button_text: 'Start Your Project',
                destination: '/start-a-project',
              });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-luxe-gold to-luxe-bronze text-obsidian-950 text-xs font-semibold uppercase tracking-[0.14em] shadow-md shadow-black/40 hover:brightness-105 active:scale-[0.98] transition-all duration-200"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-obsidian-900/80 border border-white/15 text-neutral-200 hover:text-white hover:border-white/30 text-xs font-medium uppercase tracking-[0.14em] backdrop-blur-md transition-all duration-200"
          >
            Explore Our Work
          </Link>
        </div>

        {/* Interactive Lighting Console Widget */}
        <div className="mt-10 w-full max-w-md p-3.5 rounded-2xl bg-obsidian-900/90 border border-white/10 backdrop-blur-xl shadow-xl shadow-black/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
            <button
              onClick={() => setIsPowerOn(!isPowerOn)}
              className={`px-3 py-2 rounded-xl border text-[11px] font-medium tracking-wide flex items-center gap-2 transition-all ${
                isPowerOn 
                  ? 'bg-white/[0.08] border-white/20 text-neutral-200' 
                  : 'bg-obsidian-800/60 border-white/10 text-neutral-400'
              }`}
            >
              <Sparkles className={`w-3.5 h-3.5 ${isPowerOn ? 'text-luxe-gold' : 'text-neutral-400'}`} />
              <span>{isPowerOn ? 'Optics Active' : 'Lights Off'}</span>
            </button>
            <span className="text-[11px] font-mono text-neutral-400 tracking-wider">
              {cct}K • {isPowerOn ? `${lightIntensity}% LUX` : '0% LUX'}
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-44">
            <input
              type="range"
              min="20"
              max="100"
              value={lightIntensity}
              disabled={!isPowerOn}
              onChange={(e) => setLightIntensity(Number(e.target.value))}
              className="w-full accent-luxe-gold bg-obsidian-700 h-1.5 rounded-lg appearance-none cursor-pointer disabled:opacity-30"
              aria-label="Light Intensity Control"
            />
            <button
              onClick={() => setCct(cct === 2700 ? 4000 : 2700)}
              disabled={!isPowerOn}
              className="text-[10px] px-2 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 font-mono disabled:opacity-30 shrink-0"
              title="Toggle Warm 2700K / Neutral 4000K"
            >
              {cct === 2700 ? '2700K' : '4000K'}
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-8 flex flex-col items-center gap-1.5 text-neutral-500 text-[10px] uppercase tracking-[0.2em]">
          <span>Scroll to Discover</span>
          <ChevronDown className="w-3.5 h-3.5 text-neutral-400 opacity-60" />
        </div>
      </div>
    </div>
  );
}
