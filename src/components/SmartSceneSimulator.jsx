import React, { useState } from 'react';
import { Sun, Moon, Briefcase, Utensils, Film, Sparkles, Sliders, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SMART_SCENES } from '../data/siteData';

export default function SmartSceneSimulator() {
  const [activeScene, setActiveScene] = useState(SMART_SCENES[2]); // Golden hour default

  const sceneIcons = {
    morning: Sun,
    work: Briefcase,
    golden: Sparkles,
    dinner: Utensils,
    cinema: Film,
    night: Moon,
  };

  return (
    <section className="relative py-20 sm:py-24 bg-obsidian-950 overflow-hidden border-t border-b border-white/[0.08]">
      {/* Dynamic Ambient Background Glow - Subtle, Architectural, Not Overpowering */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-1000 opacity-30"
        style={{
          background: `radial-gradient(circle at 50% 35%, ${activeScene.lightColor}, transparent 70%)`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 text-[11px] uppercase tracking-[0.2em] font-mono">
            <Sliders className="w-3.5 h-3.5 text-luxe-gold" /> Interactive Scene Architecture
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white uppercase tracking-wider">
            One Space. <span className="gold-gradient-text italic font-normal">Every Mood.</span>
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
            Light orchestrates biological rhythms and spatial energy. Switch between intelligent scenes below to observe real-time CCT transitions, dimming ratios, and fixture behavior.
          </p>
        </div>

        {/* Scene Selector Buttons Bar */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
          {SMART_SCENES.map((scene) => {
            const Icon = sceneIcons[scene.id] || Sparkles;
            const isSelected = activeScene.id === scene.id;
            return (
              <button
                key={scene.id}
                onClick={() => setActiveScene(scene)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs uppercase tracking-[0.12em] font-medium transition-all duration-200 ${
                  isSelected
                    ? 'bg-luxe-gold text-obsidian-950 font-semibold shadow-md shadow-black/40 scale-[1.02]'
                    : 'bg-obsidian-900/80 text-neutral-300 border border-white/10 hover:border-white/25 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{scene.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Visualizer Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Main Visual Room Stage */}
          <div className="lg:col-span-8 relative min-h-[360px] sm:min-h-[460px] rounded-3xl overflow-hidden border border-white/10 shadow-xl shadow-black/50 group bg-obsidian-900">
            {/* Base Room Architecture Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85')`,
                filter: activeScene.id === 'night' 
                  ? 'brightness(0.25) contrast(1.1) saturate(0.6)' 
                  : activeScene.id === 'cinema' 
                  ? 'brightness(0.35) contrast(1.2) saturate(0.8)' 
                  : activeScene.id === 'morning'
                  ? 'brightness(0.9) contrast(1.05) saturate(1.1)'
                  : activeScene.id === 'work'
                  ? 'brightness(1.0) contrast(1.05) saturate(1.0)'
                  : activeScene.id === 'dinner'
                  ? 'brightness(0.55) contrast(1.25) saturate(1.2)'
                  : 'brightness(0.75) contrast(1.15) saturate(1.3)', // Golden
              }}
            />

            {/* Atmosphere Tone Overlay */}
            <div 
              className="absolute inset-0 transition-opacity duration-1000 pointer-events-none"
              style={{
                backgroundColor: activeScene.lightColor,
                mixBlendMode: 'color',
                opacity: 0.5,
              }}
            />

            {/* Dark Vignette Border */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-black/40 pointer-events-none" />

            {/* Active Fixture Indicator Tags */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-wrap items-center justify-between gap-2.5 pointer-events-none">
              <div className="px-3 py-1.5 rounded-full bg-obsidian-950/85 backdrop-blur-md border border-white/15 text-[10.5px] font-mono text-neutral-200 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-luxe-gold animate-pulse" />
                <span>Scene Time: {activeScene.time}</span>
              </div>
              <div className="px-3 py-1.5 rounded-full bg-obsidian-950/85 backdrop-blur-md border border-white/15 text-[10.5px] font-mono text-luxe-gold">
                {activeScene.cct}
              </div>
            </div>

            {/* Bottom Floating Scene Summary */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-4 sm:p-5 rounded-2xl bg-obsidian-950/85 backdrop-blur-xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-medium">
                  {activeScene.name}
                </h3>
                <p className="text-xs text-neutral-300 font-light mt-0.5 max-w-md">
                  {activeScene.atmosphere}
                </p>
              </div>
              <div className="shrink-0 flex items-center gap-3">
                <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-neutral-300">
                  {activeScene.lux}
                </span>
              </div>
            </div>
          </div>

          {/* Technical Scene Specifications Panel */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-obsidian-900/80 border border-white/10 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4">
                <span className="text-[10px] tracking-[0.2em] text-neutral-400 font-mono uppercase">
                  Optical Layer Breakdown
                </span>
                <h4 className="font-serif text-2xl text-white mt-1">
                  Active Fixtures
                </h4>
              </div>

              {/* List of active fixtures in this scene */}
              <div className="space-y-2.5">
                {activeScene.activeFixtures.map((fixture, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-neutral-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-luxe-gold shrink-0" />
                    <span>{fixture}</span>
                  </div>
                ))}
              </div>

              {/* Kelvin Scale Meter */}
              <div className="p-4 rounded-xl bg-obsidian-950/70 border border-white/5 space-y-2">
                <div className="flex justify-between text-xs font-mono text-neutral-400">
                  <span>Color Temperature</span>
                  <span className="text-luxe-gold font-semibold">{activeScene.tempKelvin}K</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-gradient-to-r from-amber-600 via-amber-200 to-sky-300 relative overflow-hidden">
                  <div 
                    className="absolute top-0 bottom-0 w-2 bg-white rounded-full shadow-sm transition-all duration-500"
                    style={{
                      left: `${Math.min(100, Math.max(0, ((activeScene.tempKelvin - 1800) / (6500 - 1800)) * 100))}%`
                    }}
                  />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-neutral-400 pt-0.5">
                  <span>1800K (Candle)</span>
                  <span>4000K (Neutral)</span>
                  <span>6500K (Daylight)</span>
                </div>
              </div>
            </div>

            {/* Smart Lighting CTA */}
            <Link
              to="/smart-lighting"
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-white/[0.04] hover:bg-luxe-gold hover:text-obsidian-950 border border-white/15 hover:border-luxe-gold text-xs font-semibold uppercase tracking-[0.14em] text-neutral-200 transition-all duration-200 group"
            >
              <span>Explore Smart Automation</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
