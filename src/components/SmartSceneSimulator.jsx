import React, { useState } from 'react';
import {
  Sliders,
  Sparkles,
  Zap,
  Layers,
  Eye,
  CheckCircle2,
  ArrowRight,
  Info,
  SunMedium,
  ShieldCheck,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SmartSceneSimulator() {
  // Light engine type: 'smd' | 'cob'
  const [lightEngine, setLightEngine] = useState('cob');
  // Selected Kelvin preset index: 0: 2700K, 1: 3000K, 2: 4000K, 3: 6000K
  const [kelvinIndex, setKelvinIndex] = useState(1); // Default 3000K (Architectural Warm White)
  const [showRays, setShowRays] = useState(true);

  const KELVIN_PRESETS = [
    {
      kelvin: 2700,
      label: '2700K',
      name: 'Candlelight Warm',
      cctCategory: 'Warm Incandescent',
      colorHex: '#FFA23A',
      accentGlow: 'rgba(255, 162, 58, 0.45)',
      softGlow: 'rgba(255, 162, 58, 0.18)',
      dotColor: 'bg-[#FFA23A]',
      ringColor: 'border-[#FFA23A]/50',
      pillClass: 'text-[#FFB866] border-[#FFA23A]/40 bg-[#FFA23A]/10',
      atmosphere:
        'Intimate, golden-amber ambiance that calms the senses and induces melatonin release. Replicates traditional filament warmth.',
      circadianEffect: 'Evening Relaxation & Sleep Prep',
      recommendedFor: 'Master suites, intimate dining lounges, private library nooks, and courtyards at twilight.',
      smdVisual: {
        filter: 'brightness(0.86) contrast(1.03) saturate(1.22) sepia(0.36) hue-rotate(-22deg)',
        washOpacity: 0.52,
        ambientOpacity: 0.38,
      },
      cobVisual: {
        filter: 'brightness(0.72) contrast(1.24) saturate(1.32) sepia(0.42) hue-rotate(-24deg)',
        spotlightOpacity: 0.75,
        beamOpacity: 0.55,
      },
    },
    {
      kelvin: 3000,
      label: '3000K',
      name: 'Warm White',
      cctCategory: 'Architectural Warm',
      colorHex: '#FFD285',
      accentGlow: 'rgba(255, 210, 133, 0.45)',
      softGlow: 'rgba(255, 210, 133, 0.18)',
      dotColor: 'bg-[#FFD285]',
      ringColor: 'border-[#FFD285]/50',
      pillClass: 'text-[#FFE2A8] border-[#FFD285]/40 bg-[#FFD285]/10',
      atmosphere:
        'The gold standard for luxury residential architecture. Accentuates natural teak grains, brushed metals, and warm stonework without yellowing whites.',
      circadianEffect: 'Warm Socializing & Hospitality',
      recommendedFor: 'Living pavilions, dining tables, designer bedrooms, art galleries, and boutique retail.',
      smdVisual: {
        filter: 'brightness(0.92) contrast(1.05) saturate(1.12) sepia(0.18) hue-rotate(-10deg)',
        washOpacity: 0.46,
        ambientOpacity: 0.32,
      },
      cobVisual: {
        filter: 'brightness(0.78) contrast(1.26) saturate(1.18) sepia(0.22) hue-rotate(-12deg)',
        spotlightOpacity: 0.72,
        beamOpacity: 0.5,
      },
    },
    {
      kelvin: 4000,
      label: '4000K',
      name: 'Neutral White',
      cctCategory: 'Natural Clarity',
      colorHex: '#F0F6FF',
      accentGlow: 'rgba(240, 246, 255, 0.45)',
      softGlow: 'rgba(240, 246, 255, 0.15)',
      dotColor: 'bg-[#F0F6FF]',
      ringColor: 'border-[#F0F6FF]/50',
      pillClass: 'text-[#E0EEFF] border-white/30 bg-white/10',
      atmosphere:
        'Pure, balanced architectural clarity with zero warm or cold cast. Essential for true color fidelity, detailed focus, and clean contemporary lines.',
      circadianEffect: 'Daytime Alertness & High Visual Acuity',
      recommendedFor: 'Culinary prep islands, vanity dressing mirrors, architectural drafting studios, and walk-in closets.',
      smdVisual: {
        filter: 'brightness(1.02) contrast(1.06) saturate(1.02) sepia(0.0) hue-rotate(0deg)',
        washOpacity: 0.38,
        ambientOpacity: 0.25,
      },
      cobVisual: {
        filter: 'brightness(0.86) contrast(1.28) saturate(1.06) sepia(0.0) hue-rotate(0deg)',
        spotlightOpacity: 0.68,
        beamOpacity: 0.44,
      },
    },
    {
      kelvin: 6000,
      label: '6000K',
      name: 'Cool Daylight',
      cctCategory: 'Arctic Daylight',
      colorHex: '#A8D2FF',
      accentGlow: 'rgba(168, 210, 255, 0.45)',
      softGlow: 'rgba(168, 210, 255, 0.16)',
      dotColor: 'bg-[#A8D2FF]',
      ringColor: 'border-[#A8D2FF]/50',
      pillClass: 'text-[#BFDEFF] border-[#A8D2FF]/40 bg-[#A8D2FF]/10',
      atmosphere:
        'Crisp, energizing blue-white illumination simulating clear noon sky. Maximizes contrast on fine textures and evokes clinical, high-tech modernity.',
      circadianEffect: 'Peak Cognitive Stimulation & Energy',
      recommendedFor: 'Commercial display galleries, home gyms, precision hobby workshops, and daylight-mimicking skylights.',
      smdVisual: {
        filter: 'brightness(1.05) contrast(1.09) saturate(0.95) sepia(0.08) hue-rotate(185deg)',
        washOpacity: 0.45,
        ambientOpacity: 0.3,
      },
      cobVisual: {
        filter: 'brightness(0.9) contrast(1.3) saturate(0.96) sepia(0.09) hue-rotate(185deg)',
        spotlightOpacity: 0.7,
        beamOpacity: 0.48,
      },
    },
  ];

  const currentPreset = KELVIN_PRESETS[kelvinIndex];

  // Optical Specifications Data for SMD vs COB
  const ENGINE_SPECS = {
    smd: {
      type: 'SMD (Surface Mounted Device)',
      shortType: 'SMD Flood',
      tagline: 'Wide Diffused Ambient Wash',
      beamAngle: '110° – 120° Wide Flood',
      opticalStructure: 'Multi-chip planar diode array with micro-prismatic diffuser',
      shadowQuality: 'Soft, feathered shadows with gentle luminance gradient',
      glareControl: 'Low surface luminance per diode, uniform visual comfort',
      primaryRole: 'General space illumination, cove lighting, and uniform ceiling wash',
      luxRating: '380 Lux (Uniform Spatial Spread)',
      cri: 'CRI 95+ (R9 > 85)',
      powerEfficiency: 'High lm/W wide-area efficiency',
    },
    cob: {
      type: 'COB (Chip On Board)',
      shortType: 'COB Accent',
      tagline: 'Focused Architectural Punch',
      beamAngle: '15° – 36° Precision Spot',
      opticalStructure: 'High-density micro-chip matrix with deep parabolic TIR lens',
      shadowQuality: 'Crisp, razor-defined dramatic architectural shadows',
      glareControl: 'Deep recessed dark-light optic (UGR < 12 glare-free)',
      primaryRole: 'Center-table accents, art illumination, and spatial texture sculpting',
      luxRating: '1,450 Lux (High Center Beam Candela)',
      cri: 'CRI 98+ (R9 > 95)',
      powerEfficiency: 'Maximized Center-Beam Candlepower (CBCP)',
    },
  };

  const activeSpec = ENGINE_SPECS[lightEngine];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-obsidian-950 overflow-hidden border-t border-b border-white/[0.08]">
      {/* Dynamic Ambient Background Aura */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-1000 opacity-25"
        style={{
          background: `radial-gradient(circle at 50% 30%, ${currentPreset.accentGlow}, transparent 75%)`,
        }}
      />

      <div className="max-w-7xl 2xl:max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 text-[11px] uppercase tracking-[0.22em] font-mono">
            <Sliders className="w-3.5 h-3.5 text-luxe-gold" />
            <span>Light Engine &amp; Kelvin Simulator</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white uppercase tracking-tight">
            One Space.{' '}
            <span className="gold-gradient-text italic font-normal">
              Every Atmosphere.
            </span>
          </h2>

          <p className="text-neutral-300 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
            Experience how switching between <strong className="text-white font-medium">SMD diffused flood</strong> and <strong className="text-white font-medium">COB precision accent</strong> transforms spatial depth, and slide across calibrated Kelvin temperatures to observe real-time chromatic shifts.
          </p>
        </div>

        {/* Master Controls Deck: SMD/COB Engine Switcher + Kelvin Temperature System */}
        <div className="mb-8 p-4 sm:p-6 rounded-3xl bg-obsidian-900/90 border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/50 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Control 1: Light Engine Selector (SMD vs COB) */}
            <div className="lg:col-span-5 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-luxe-gold" /> Light Engine Type
                </span>
                <span className="text-[10.5px] font-mono text-luxe-gold/90">
                  {lightEngine === 'smd' ? '110° Diffused' : '24° Dark-Light Spot'}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 bg-obsidian-950 p-1.5 rounded-2xl border border-white/10">
                <button
                  type="button"
                  onClick={() => setLightEngine('smd')}
                  className={`relative px-4 py-3 rounded-xl transition-all duration-300 flex flex-col items-center justify-center text-center ${
                    lightEngine === 'smd'
                      ? 'bg-gradient-to-b from-white/15 to-white/5 border border-white/20 text-white shadow-lg shadow-black/40'
                      : 'text-neutral-400 hover:text-neutral-200 hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-luxe-gold" />
                    <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase font-mono">
                      SMD Flood
                    </span>
                  </div>
                  <span className="text-[10px] text-neutral-400 font-light mt-0.5">
                    Wide Diffused Wash (110°)
                  </span>
                  {lightEngine === 'smd' && (
                    <div className="absolute bottom-1 w-6 h-0.5 rounded-full bg-luxe-gold" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setLightEngine('cob')}
                  className={`relative px-4 py-3 rounded-xl transition-all duration-300 flex flex-col items-center justify-center text-center ${
                    lightEngine === 'cob'
                      ? 'bg-gradient-to-b from-luxe-gold/20 to-luxe-gold/5 border border-luxe-gold/30 text-white shadow-lg shadow-black/40'
                      : 'text-neutral-400 hover:text-neutral-200 hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-luxe-gold" />
                    <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase font-mono">
                      COB Spot
                    </span>
                  </div>
                  <span className="text-[10px] text-neutral-400 font-light mt-0.5">
                    Focused Accent Punch (24°)
                  </span>
                  {lightEngine === 'cob' && (
                    <div className="absolute bottom-1 w-6 h-0.5 rounded-full bg-luxe-gold" />
                  )}
                </button>
              </div>
            </div>

            {/* Control 2: Kelvin Temperature System (Continuous Track + Quick Presets) */}
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                  <SunMedium className="w-3.5 h-3.5 text-luxe-gold" /> Color Temperature (CCT)
                </span>
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border ${currentPreset.pillClass}`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${currentPreset.dotColor} animate-pulse`}
                    />
                    {currentPreset.label} • {currentPreset.name}
                  </span>
                </div>
              </div>

              {/* Visual Spectrum Slider Track */}
              <div className="space-y-2 pt-1">
                <div className="relative">
                  {/* Glowing Spectrum Line */}
                  <div className="h-3.5 w-full rounded-full bg-gradient-to-r from-[#FFA23A] via-[#FFD285] via-60%-[#F0F6FF] to-[#A8D2FF] p-[1px] shadow-inner">
                    <div className="w-full h-full rounded-full bg-obsidian-950/20 backdrop-blur-[1px]" />
                  </div>

                  {/* Native Range Input overlay for ultra-fluid touch/drag */}
                  <input
                    type="range"
                    min="0"
                    max="3"
                    step="1"
                    value={kelvinIndex}
                    onChange={(e) => setKelvinIndex(Number(e.target.value))}
                    aria-label="Color Temperature Kelvin Selector"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                  />

                  {/* Custom Aesthetic Thumb Indicator */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-obsidian-950 border-2 border-white shadow-xl shadow-black/80 flex items-center justify-center pointer-events-none transition-all duration-200 z-10"
                    style={{
                      left: `${(kelvinIndex / (KELVIN_PRESETS.length - 1)) * 100}%`,
                      borderColor: currentPreset.colorHex,
                      boxShadow: `0 0 15px ${currentPreset.colorHex}`,
                    }}
                  >
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: currentPreset.colorHex }}
                    />
                  </div>
                </div>

                {/* 4 Direct Preset Tap Buttons */}
                <div className="grid grid-cols-4 gap-1.5 sm:gap-2 pt-1">
                  {KELVIN_PRESETS.map((preset, idx) => {
                    const isSelected = kelvinIndex === idx;
                    return (
                      <button
                        key={preset.kelvin}
                        type="button"
                        onClick={() => setKelvinIndex(idx)}
                        className={`group py-2 px-1 sm:px-2 rounded-xl transition-all duration-200 text-center border ${
                          isSelected
                            ? 'bg-white/10 border-white/30 text-white shadow-md'
                            : 'bg-obsidian-950/60 border-white/5 text-neutral-400 hover:text-white hover:border-white/15'
                        }`}
                      >
                        <div className="flex items-center justify-center gap-1 sm:gap-1.5">
                          <span
                            className="w-2 h-2 rounded-full shrink-0 transition-transform group-hover:scale-125"
                            style={{ backgroundColor: preset.colorHex }}
                          />
                          <span className="text-[11px] sm:text-xs font-mono font-semibold">
                            {preset.label}
                          </span>
                        </div>
                        <span className="text-[9.5px] sm:text-[10px] block text-neutral-400 font-light truncate mt-0.5">
                          {preset.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Central Visualizer Stage & Live Telemetry HUD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Main Visual Room Stage (Single Central Architectural Image with Dynamic Multi-layer Processing) */}
          <div className="lg:col-span-8 relative min-h-[380px] sm:min-h-[480px] md:min-h-[540px] xl:min-h-[580px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 bg-obsidian-900 flex flex-col justify-between">
            {/* Layer 1: Base Architectural Room Image with Dynamic Filter Grading */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=85')`,
                filter:
                  lightEngine === 'smd'
                    ? currentPreset.smdVisual.filter
                    : currentPreset.cobVisual.filter,
              }}
            />

            {/* Layer 2: Optical Engine Light Geometry (SMD Ambient Wash vs COB Focused Beams) */}
            {lightEngine === 'smd' ? (
              <>
                {/* SMD: Broad ambient wash over ceiling, upper walls, and room */}
                <div
                  className="absolute inset-0 pointer-events-none transition-all duration-700 ease-out"
                  style={{
                    background: `radial-gradient(ellipse 95% 70% at 50% 12%, ${currentPreset.colorHex}55 0%, ${currentPreset.colorHex}22 55%, transparent 85%)`,
                    opacity: currentPreset.smdVisual.washOpacity,
                  }}
                />
                {/* SMD: Linear architectural cove glow at the top */}
                <div
                  className="absolute top-0 left-0 right-0 h-44 pointer-events-none transition-all duration-700 ease-out"
                  style={{
                    background: `linear-gradient(180deg, ${currentPreset.colorHex}44 0%, transparent 100%)`,
                  }}
                />
              </>
            ) : (
              <>
                {/* COB: Tight Directional Dark-Light Spotlight Cones onto Architectural Anchors */}
                {/* Spot 1: Direct architectural highlight over centerpiece table */}
                <div
                  className="absolute inset-0 pointer-events-none transition-all duration-700 ease-out"
                  style={{
                    background: `radial-gradient(ellipse 34% 48% at 48% 64%, ${currentPreset.colorHex}99 0%, ${currentPreset.colorHex}35 50%, transparent 85%)`,
                    opacity: currentPreset.cobVisual.spotlightOpacity,
                  }}
                />
                {/* Spot 2: Precision grazing spotlight on right architectural stone / artwork wall */}
                <div
                  className="absolute inset-0 pointer-events-none transition-all duration-700 ease-out"
                  style={{
                    background: `radial-gradient(ellipse 26% 40% at 76% 48%, ${currentPreset.colorHex}88 0%, ${currentPreset.colorHex}25 45%, transparent 80%)`,
                    opacity: currentPreset.cobVisual.spotlightOpacity,
                  }}
                />

                {/* Visible Architectural Optical Cones (Toggled via HUD) */}
                {showRays && (
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-700"
                    style={{ opacity: currentPreset.cobVisual.beamOpacity }}
                  >
                    {/* Beam Cone 1 from ceiling down to center */}
                    <div
                      className="absolute top-0 left-[38%] w-[20%] h-[70%]"
                      style={{
                        background: `linear-gradient(180deg, ${currentPreset.colorHex}66 0%, ${currentPreset.colorHex}05 100%)`,
                        clipPath: 'polygon(46% 0%, 54% 0%, 95% 100%, 5% 100%)',
                        filter: 'blur(3px)',
                      }}
                    />
                    {/* Beam Cone 2 from ceiling down to right wall */}
                    <div
                      className="absolute top-0 right-[18%] w-[18%] h-[60%]"
                      style={{
                        background: `linear-gradient(180deg, ${currentPreset.colorHex}55 0%, ${currentPreset.colorHex}05 100%)`,
                        clipPath: 'polygon(45% 0%, 55% 0%, 100% 100%, 0% 100%)',
                        filter: 'blur(3px)',
                      }}
                    />
                  </div>
                )}
              </>
            )}

            {/* Layer 3: Dynamic Chromatic Tone Overlay (Natural Soft-Light & Color Blend) */}
            <div
              className="absolute inset-0 pointer-events-none transition-all duration-700 ease-out"
              style={{
                backgroundColor: currentPreset.colorHex,
                mixBlendMode: 'soft-light',
                opacity: lightEngine === 'smd' ? 0.35 : 0.45,
              }}
            />

            {/* Layer 4: Cinematic Vignette Framing & Depth Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-black/50 pointer-events-none" />

            {/* Top Stage HUD Pill Badges */}
            <div className="relative z-10 p-4 sm:p-6 flex flex-wrap items-center justify-between gap-2.5">
              <div className="flex items-center gap-2">
                <div className="px-3 py-1.5 rounded-full bg-obsidian-950/85 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white flex items-center gap-2 shadow-lg">
                  <span
                    className={`w-2 h-2 rounded-full ${currentPreset.dotColor} animate-pulse`}
                  />
                  <span className="font-semibold uppercase">{activeSpec.shortType}</span>
                  <span className="text-neutral-400">|</span>
                  <span className="text-neutral-300">{activeSpec.beamAngle}</span>
                </div>

                {lightEngine === 'cob' && (
                  <button
                    type="button"
                    onClick={() => setShowRays(!showRays)}
                    className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-obsidian-950/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-neutral-300 hover:text-white transition-colors"
                  >
                    <Eye className="w-3 h-3 text-luxe-gold" />
                    <span>{showRays ? 'Beams Visible' : 'Beams Hidden'}</span>
                  </button>
                )}
              </div>

              <div className="px-3 py-1.5 rounded-full bg-obsidian-950/85 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white flex items-center gap-2 shadow-lg">
                <span className="text-neutral-400">Active CCT:</span>
                <span className="font-bold" style={{ color: currentPreset.colorHex }}>
                  {currentPreset.label}
                </span>
                <span className="text-neutral-400 text-[10px]">({currentPreset.cctCategory})</span>
              </div>
            </div>

            {/* Bottom Stage Live Context Overlay */}
            <div className="relative z-10 p-4 sm:p-6">
              <div className="p-4 sm:p-5 rounded-2xl bg-obsidian-950/85 backdrop-blur-xl border border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-luxe-gold">
                      Spatial Atmospheric Readout
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">• Kochi Residence Lab</span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl text-white font-medium">
                    {currentPreset.name} with {activeSpec.type}
                  </h3>
                  <p className="text-xs text-neutral-300 font-light max-w-xl leading-relaxed">
                    {currentPreset.atmosphere}
                  </p>
                </div>

                <div className="shrink-0 flex sm:flex-col items-center sm:items-end gap-2 sm:gap-1 text-right">
                  <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-neutral-200">
                    {activeSpec.luxRating}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400">
                    {activeSpec.cri}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Technical Telemetry & Architectural Specs HUD */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            {/* Card 1: Optical Architecture Breakdown */}
            <div className="p-5 sm:p-6 rounded-3xl bg-obsidian-900/90 border border-white/10 space-y-4 shadow-xl">
              <div className="border-b border-white/10 pb-3 flex items-center justify-between">
                <div>
                  <span className="text-[10px] tracking-[0.2em] text-neutral-400 font-mono uppercase block">
                    Telemetry Analysis
                  </span>
                  <h4 className="font-serif text-xl text-white mt-0.5">
                    Engine Optics Profile
                  </h4>
                </div>
                <div className="w-8 h-8 rounded-full bg-luxe-gold/10 border border-luxe-gold/30 flex items-center justify-center text-luxe-gold">
                  <Info className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
                    Beam Distribution &amp; Optic
                  </span>
                  <p className="text-neutral-200 font-medium">{activeSpec.opticalStructure}</p>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
                    Shadow &amp; Edge Definition
                  </span>
                  <p className="text-neutral-200 font-light">{activeSpec.shadowQuality}</p>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
                    Glare Rating &amp; Human Comfort
                  </span>
                  <p className="text-neutral-200 font-light">{activeSpec.glareControl}</p>
                </div>
              </div>
            </div>

            {/* Card 2: Recommended Architectural Specification & Circadian Guidance */}
            <div className="p-5 sm:p-6 rounded-3xl bg-obsidian-900/90 border border-white/10 space-y-4 shadow-xl">
              <div className="border-b border-white/10 pb-3">
                <span className="text-[10px] tracking-[0.2em] text-neutral-400 font-mono uppercase block">
                  Design Application
                </span>
                <h4 className="font-serif text-xl text-white mt-0.5">
                  Where to Specify
                </h4>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-luxe-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-xs">Recommended Spatial Zones</strong>
                    <p className="text-neutral-300 font-light mt-0.5">
                      {currentPreset.recommendedFor}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 border-t border-white/5 pt-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-xs">Circadian Biological Impact</strong>
                    <p className="text-neutral-300 font-light mt-0.5">
                      {currentPreset.circadianEffect}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Link to Consult Studio Specialists */}
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-luxe-gold to-luxe-champagne text-obsidian-950 text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-luxe-gold/20"
                >
                  <span>Request Photometric Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
