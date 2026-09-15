import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sliders, 
  Sun, 
  Moon, 
  Sparkles, 
  Lightbulb, 
  Layers, 
  Target, 
  Power, 
  MapPin, 
  Navigation, 
  ArrowRight, 
  CheckCircle2, 
  RotateCcw, 
  Eye, 
  EyeOff, 
  Info,
  Flame,
  MessageSquare,
  Clock,
  Phone
} from 'lucide-react';
import { SIMULATOR_SPACES, BRAND } from '../data/siteData';

export default function LightingSimulator({ initialSpaceId = 'living-room', showFullHeader = true }) {
  // Current Space Selection
  const [selectedSpaceId, setSelectedSpaceId] = useState(initialSpaceId);
  const currentSpace = useMemo(() => {
    return SIMULATOR_SPACES.find(s => s.id === selectedSpaceId) || SIMULATOR_SPACES[0];
  }, [selectedSpaceId]);

  // Dynamic Fixture States & Intensities
  const [fixtureStates, setFixtureStates] = useState(() => {
    const states = {};
    currentSpace.fixtures.forEach(f => {
      states[f.id] = f.defaultState;
    });
    return states;
  });

  const [fixtureIntensities, setFixtureIntensities] = useState(() => {
    const intensities = {};
    currentSpace.fixtures.forEach(f => {
      intensities[f.id] = f.defaultIntensity;
    });
    return intensities;
  });

  // Global Simulator Controls
  const [masterBrightness, setMasterBrightness] = useState(80); // 0 to 100
  const [cct, setCct] = useState(2700); // 2200K to 4000K
  const [activePreset, setActivePreset] = useState('evening');
  const [showHotspots, setShowHotspots] = useState(true);
  const [hoveredFixtureId, setHoveredFixtureId] = useState(null);

  // Switch spaces and reset fixture controls to room defaults
  const handleSpaceChange = (spaceId) => {
    const targetSpace = SIMULATOR_SPACES.find(s => s.id === spaceId) || SIMULATOR_SPACES[0];
    setSelectedSpaceId(spaceId);
    
    const newStates = {};
    const newIntensities = {};
    targetSpace.fixtures.forEach(f => {
      newStates[f.id] = f.defaultState;
      newIntensities[f.id] = f.defaultIntensity;
    });
    setFixtureStates(newStates);
    setFixtureIntensities(newIntensities);
    setActivePreset(targetSpace.presets[0]?.id || null);
    setMasterBrightness(targetSpace.presets[0]?.masterBrightness || 80);
    setCct(targetSpace.presets[0]?.cct || 2700);
  };

  // Toggle individual fixture on/off
  const toggleFixture = (fixtureId) => {
    setFixtureStates(prev => ({
      ...prev,
      [fixtureId]: !prev[fixtureId]
    }));
    setActivePreset(null);
  };

  // Update fixture intensity
  const handleIntensityChange = (fixtureId, value) => {
    setFixtureIntensities(prev => ({
      ...prev,
      [fixtureId]: Number(value)
    }));
    // If adjusted above 0 while turned off, turn it on
    if (!fixtureStates[fixtureId] && Number(value) > 0) {
      setFixtureStates(prev => ({ ...prev, [fixtureId]: true }));
    }
    setActivePreset(null);
  };

  // Quick Preset recall
  const applyPreset = (preset) => {
    setActivePreset(preset.id);
    setCct(preset.cct);
    setMasterBrightness(preset.masterBrightness);
    setFixtureStates(preset.states);
    setFixtureIntensities(preset.intensities);
  };

  // Master All On / All Off
  const areAnyFixturesOn = Object.values(fixtureStates).some(Boolean);
  const toggleAllFixtures = () => {
    const nextState = !areAnyFixturesOn;
    const updated = {};
    currentSpace.fixtures.forEach(f => {
      updated[f.id] = nextState;
    });
    setFixtureStates(updated);
    setActivePreset(null);
  };

  // Reset to space default
  const handleReset = () => {
    if (currentSpace.presets[0]) {
      applyPreset(currentSpace.presets[0]);
    }
  };

  // Dynamic Lighting & Shadow Engine Computations
  const lightingMetrics = useMemo(() => {
    const fixtures = currentSpace.fixtures;
    let totalContribution = 0;
    let maxContribution = fixtures.length * 100;
    let activeCount = 0;

    fixtures.forEach(f => {
      if (fixtureStates[f.id]) {
        totalContribution += fixtureIntensities[f.id] || 0;
        activeCount++;
      }
    });

    const averageFixturePct = maxContribution > 0 ? (totalContribution / maxContribution) : 0;
    const masterRatio = masterBrightness / 100;
    
    // Estimated real Lux on architectural surface
    const estimatedLux = Math.round(
      currentSpace.baseLux * masterRatio * (0.2 + 0.8 * averageFixturePct)
    );

    // Chiaroscuro Contrast calculation:
    // When spot/accent is on with low cove/ambient, shadows are deep & dramatic (high contrast).
    // When cove is high, ambient fill softens the shadows.
    const spotContribution = (fixtureStates.downlights ? (fixtureIntensities.downlights || 0) : 0) +
                             (fixtureStates.accent ? (fixtureIntensities.accent || 0) : 0);
    const coveContribution = (fixtureStates.cove ? (fixtureIntensities.cove || 0) : 0);
    
    let shadowContrast = 1.05;
    let shadowOpacity = 0.5;
    let contrastRatioLabel = "Balanced Soft";

    if (activeCount === 0 || masterBrightness === 0) {
      shadowContrast = 1.0;
      shadowOpacity = 0.85;
      contrastRatioLabel = "Dark Void";
    } else if (spotContribution > 60 && coveContribution < 40) {
      shadowContrast = 1.32; // Strong dramatic shadows
      shadowOpacity = 0.75;
      contrastRatioLabel = "Dramatic Chiaroscuro (4:1)";
    } else if (coveContribution > 60) {
      shadowContrast = 1.06; // Soft ambient fill
      shadowOpacity = 0.35;
      contrastRatioLabel = "Diffuse Soft Ambient (1.5:1)";
    } else {
      shadowContrast = 1.16;
      shadowOpacity = 0.55;
      contrastRatioLabel = "Balanced Architectural (2.5:1)";
    }

    // Dynamic base image brightness
    const baseBrightness = masterRatio === 0 || activeCount === 0
      ? 0.15 
      : Math.min(1.05, 0.22 + masterRatio * (0.15 + 0.65 * averageFixturePct));

    // Dynamic saturation based on light warmth
    const baseSaturation = cct < 2700 ? 1.25 : cct < 3200 ? 1.1 : 0.98;

    return {
      activeCount,
      estimatedLux,
      shadowContrast,
      shadowOpacity,
      contrastRatioLabel,
      baseBrightness,
      baseSaturation
    };
  }, [currentSpace, fixtureStates, fixtureIntensities, masterBrightness, cct]);

  // Color temperature (CCT) mapping to realistic Kelvin RGB
  const cctColor = useMemo(() => {
    // 2200K (Candlelight warm amber) -> 4000K (Neutral daylight)
    const factor = Math.max(0, Math.min(1, (cct - 2200) / 1800));
    
    // Interpolate RGB
    let r, g, b;
    if (factor < 0.5) {
      const t = factor / 0.5;
      r = 255;
      g = Math.round(160 + t * 55);
      b = Math.round(60 + t * 85);
    } else {
      const t = (factor - 0.5) / 0.5;
      r = Math.round(255 - t * 25);
      g = Math.round(215 + t * 25);
      b = Math.round(145 + t * 110);
    }
    return {
      rgb: `${r}, ${g}, ${b}`,
      glowRgb: `${r}, ${Math.min(255, g + 20)}, ${Math.min(255, b + 40)}`,
      name: cct <= 2400 ? 'Candlelight Amber (2200K)' : cct <= 2800 ? 'Warm Golden (2700K)' : cct <= 3300 ? 'Warm White (3000K)' : 'Neutral Architectural (4000K)'
    };
  }, [cct]);

  // Fixture Icon resolver
  const getFixtureIcon = (type) => {
    switch(type) {
      case 'spot': return Target;
      case 'cove': return Layers;
      case 'pendant': return Sparkles;
      case 'accent': return Lightbulb;
      default: return Lightbulb;
    }
  };

  return (
    <section id="lighting-simulator" className="relative py-20 sm:py-28 bg-obsidian-950 text-[#F4F3EE] overflow-hidden border-t border-b border-white/[0.08]">
      {/* Background Architectural Ambient Tone */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-1000 opacity-20"
        style={{
          background: `radial-gradient(ellipse at 50% 30%, rgba(${cctColor.rgb}, 0.25), transparent 70%)`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        {showFullHeader && (
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-luxe-gold/10 border border-luxe-gold/30 text-luxe-gold text-xs uppercase tracking-[0.25em] font-mono">
              <Sparkles className="w-3.5 h-3.5" /> Interactive Spatial Simulator
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-white uppercase tracking-tight leading-tight">
              Shape The Light. <br />
              <span className="gold-gradient-text italic font-normal">Feel The Space.</span>
            </h2>
            <p className="text-neutral-300 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
              Select an architectural space below. Toggle individual luminaire layers, adjust master dimming and calibrate color temperatures to observe live shadow transitions, glare control, and spatial mood shifts.
            </p>
          </div>
        )}

        {/* Space Selection Bar */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
          {SIMULATOR_SPACES.map((space) => {
            const isSelected = space.id === selectedSpaceId;
            return (
              <button
                key={space.id}
                onClick={() => handleSpaceChange(space.id)}
                className={`group flex items-center gap-2.5 px-4 sm:px-6 py-3 rounded-full text-xs uppercase tracking-[0.14em] font-medium transition-all duration-300 ${
                  isSelected
                    ? 'bg-luxe-gold text-obsidian-950 font-bold shadow-lg shadow-luxe-gold/20 scale-[1.02]'
                    : 'bg-obsidian-900/90 text-neutral-300 border border-white/10 hover:border-luxe-gold/40 hover:text-white'
                }`}
              >
                <span className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  isSelected ? 'bg-obsidian-950 scale-125' : 'bg-luxe-gold/60 group-hover:bg-luxe-gold'
                }`} />
                <span>{space.name}</span>
              </button>
            );
          })}
        </div>

        {/* Main Simulation Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left / Center: Interactive Room Visual Canvas (7 cols) */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-4">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-obsidian-900 shadow-2xl shadow-black/80 aspect-[16/10] sm:aspect-[16/9] w-full select-none group">
              
              {/* 1. Base Room Photograph Layer with Dynamic Filters */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out"
                style={{
                  backgroundImage: `url(${currentSpace.image})`,
                  filter: `brightness(${lightingMetrics.baseBrightness}) contrast(${lightingMetrics.shadowContrast}) saturate(${lightingMetrics.baseSaturation})`,
                }}
              />

              {/* 2. Global Color Temperature & Ambient Atmospheric Tint */}
              <div 
                className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
                style={{
                  backgroundColor: `rgb(${cctColor.rgb})`,
                  mixBlendMode: 'color',
                  opacity: (masterBrightness / 100) * (lightingMetrics.activeCount > 0 ? 0.38 : 0.05),
                }}
              />

              {/* 3. Indirect Ambient Cove / Perimeter Ceiling Wash Layer */}
              {currentSpace.fixtures.find(f => f.type === 'cove') && (
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                  style={{
                    opacity: (masterBrightness / 100) * (fixtureStates.cove ? (fixtureIntensities.cove || 80) / 100 : 0),
                    background: `radial-gradient(ellipse 130% 60% at 50% -10%, rgba(${cctColor.glowRgb}, 0.65) 0%, rgba(${cctColor.rgb}, 0.25) 45%, transparent 75%)`,
                    mixBlendMode: 'screen',
                  }}
                />
              )}

              {/* 4. Ceiling Downlights & Directional Spotlights Layer (Conical Downward Beams) */}
              {currentSpace.fixtures.find(f => f.type === 'spot') && (
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                  style={{
                    opacity: (masterBrightness / 100) * (fixtureStates.downlights ? (fixtureIntensities.downlights || 80) / 100 : 0),
                    background: `
                      radial-gradient(ellipse 40% 70% at 40% 30%, rgba(${cctColor.glowRgb}, 0.6) 0%, rgba(${cctColor.rgb}, 0.2) 50%, transparent 80%),
                      radial-gradient(ellipse 35% 50% at 50% 65%, rgba(${cctColor.glowRgb}, 0.45) 0%, transparent 60%)
                    `,
                    mixBlendMode: 'screen',
                  }}
                />
              )}

              {/* 5. Statement Chandelier / Pendant Radial Radiant Bloom Layer */}
              {currentSpace.fixtures.find(f => f.type === 'pendant') && (
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                  style={{
                    opacity: (masterBrightness / 100) * (fixtureStates.pendant ? (fixtureIntensities.pendant || 80) / 100 : 0),
                    background: `
                      radial-gradient(circle 32% at 48% 34%, rgba(${cctColor.glowRgb}, 0.75) 0%, rgba(${cctColor.rgb}, 0.3) 40%, transparent 75%),
                      radial-gradient(ellipse 60% 40% at 50% 55%, rgba(${cctColor.glowRgb}, 0.4) 0%, transparent 70%)
                    `,
                    mixBlendMode: 'screen',
                  }}
                />
              )}

              {/* 6. Accent Sconces / Floor Lamp / Art Grazers Layer */}
              {currentSpace.fixtures.find(f => f.type === 'accent') && (
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                  style={{
                    opacity: (masterBrightness / 100) * (fixtureStates.accent ? (fixtureIntensities.accent || 60) / 100 : 0),
                    background: `
                      radial-gradient(circle 35% at 20% 65%, rgba(${cctColor.glowRgb}, 0.55) 0%, rgba(${cctColor.rgb}, 0.2) 45%, transparent 75%),
                      radial-gradient(ellipse 25% 60% at 85% 50%, rgba(${cctColor.glowRgb}, 0.45) 0%, transparent 65%)
                    `,
                    mixBlendMode: 'screen',
                  }}
                />
              )}

              {/* 7. Dynamic Architectural Shadow Deepening & Chiaroscuro Vignette Mask */}
              <div 
                className="absolute inset-0 pointer-events-none transition-opacity duration-700"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, transparent 40%, rgba(7, 8, 10, 0.7) 100%)',
                  opacity: lightingMetrics.shadowOpacity,
                }}
              />

              {/* 8. Top Status Overlays: Room Category & Realtime Lux */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between gap-3 pointer-events-none z-20">
                <div className="px-3.5 py-1.5 rounded-full bg-obsidian-950/85 backdrop-blur-md border border-white/15 text-[11px] font-mono text-neutral-200 flex items-center gap-2 shadow-lg">
                  <span className={`w-2 h-2 rounded-full ${lightingMetrics.activeCount > 0 ? 'bg-emerald-400 animate-pulse' : 'bg-neutral-500'}`} />
                  <span className="font-semibold">{currentSpace.name}</span>
                  <span className="text-neutral-400 hidden sm:inline">• {currentSpace.category}</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="px-3.5 py-1.5 rounded-full bg-obsidian-950/85 backdrop-blur-md border border-luxe-gold/30 text-[11px] font-mono text-luxe-gold flex items-center gap-1.5 shadow-lg">
                    <Sun className="w-3.5 h-3.5" />
                    <span>{lightingMetrics.estimatedLux} LUX</span>
                  </div>

                  <button
                    onClick={() => setShowHotspots(!showHotspots)}
                    className="pointer-events-auto px-3 py-1.5 rounded-full bg-obsidian-950/85 backdrop-blur-md border border-white/15 hover:border-luxe-gold/50 text-[10.5px] font-mono text-neutral-300 hover:text-white flex items-center gap-1.5 transition-colors"
                    title={showHotspots ? "Hide interactive fixture pins" : "Show interactive fixture pins"}
                  >
                    {showHotspots ? <Eye className="w-3 h-3 text-luxe-gold" /> : <EyeOff className="w-3 h-3 text-neutral-500" />}
                    <span className="hidden sm:inline">Pins</span>
                  </button>
                </div>
              </div>

              {/* 9. Interactive Hotspot Markers Directly on Image */}
              {showHotspots && currentSpace.fixtures.map((fixture) => {
                const Icon = getFixtureIcon(fixture.type);
                const isOn = fixtureStates[fixture.id];
                const intensity = fixtureIntensities[fixture.id] || 0;
                const isHovered = hoveredFixtureId === fixture.id;

                return (
                  <div
                    key={fixture.id}
                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${fixture.hotspot.x}%`,
                      top: `${fixture.hotspot.y}%`,
                    }}
                    onMouseEnter={() => setHoveredFixtureId(fixture.id)}
                    onMouseLeave={() => setHoveredFixtureId(null)}
                  >
                    <button
                      onClick={() => toggleFixture(fixture.id)}
                      className={`relative group/pin flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full transition-all duration-300 ${
                        isOn
                          ? 'bg-luxe-gold text-obsidian-950 shadow-[0_0_20px_rgba(229,184,105,0.7)] scale-110'
                          : 'bg-obsidian-950/90 text-neutral-400 border border-white/20 hover:border-white/60 hover:scale-105'
                      }`}
                      aria-label={`Toggle ${fixture.name}`}
                    >
                      <Icon className="w-4 h-4 transition-transform group-hover/pin:scale-110" />

                      {/* Pulsing ring when active */}
                      {isOn && (
                        <span className="absolute inset-0 rounded-full border border-luxe-gold animate-ping opacity-60 pointer-events-none" />
                      )}

                      {/* Hover Tooltip */}
                      <div className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 rounded-lg bg-obsidian-950/95 border border-white/15 text-[10px] font-mono text-white pointer-events-none transition-all duration-200 z-30 shadow-xl ${
                        isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 pointer-events-none'
                      }`}>
                        <div className="font-semibold text-luxe-gold">{fixture.name}</div>
                        <div className="text-neutral-300">{isOn ? `Active • ${intensity}%` : 'Turned Off — Click to toggle'}</div>
                      </div>
                    </button>
                  </div>
                );
              })}

              {/* 10. Bottom Floating Atmospheric Card */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-4 sm:p-5 rounded-2xl bg-obsidian-950/90 backdrop-blur-xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 z-20">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-luxe-gold">Atmospheric State</span>
                    <span className="text-[10px] text-neutral-400 font-mono">• {cctColor.name}</span>
                  </div>
                  <h4 className="font-serif text-lg sm:text-xl text-white font-medium">
                    {lightingMetrics.contrastRatioLabel}
                  </h4>
                  <p className="text-[11px] text-neutral-300 font-light line-clamp-1">
                    {currentSpace.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                  <span className="text-[11px] font-mono text-neutral-400">
                    Active: <strong className="text-white">{lightingMetrics.activeCount} / {currentSpace.fixtures.length}</strong>
                  </span>
                  <button
                    onClick={toggleAllFixtures}
                    className={`px-3.5 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider font-semibold transition-all ${
                      areAnyFixturesOn
                        ? 'bg-red-500/10 border border-red-500/30 text-red-300 hover:bg-red-500/20'
                        : 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20'
                    }`}
                  >
                    {areAnyFixturesOn ? 'Kill All' : 'Light All'}
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Scene Presets Bar below Visual */}
            <div className="p-4 rounded-2xl bg-obsidian-900/80 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-luxe-gold shrink-0">
                <Sparkles className="w-3.5 h-3.5" /> Quick Scenes:
              </div>

              <div className="flex items-center gap-2 flex-wrap w-full sm:w-auto">
                {currentSpace.presets.map((preset) => {
                  const isActive = activePreset === preset.id;
                  return (
                    <button
                      key={preset.id}
                      onClick={() => applyPreset(preset)}
                      className={`px-3 sm:px-4 py-2 rounded-xl text-[11px] uppercase tracking-wider font-medium transition-all ${
                        isActive
                          ? 'bg-luxe-gold text-obsidian-950 font-semibold shadow-md shadow-luxe-gold/20 scale-[1.02]'
                          : 'bg-obsidian-950 border border-white/10 text-neutral-300 hover:text-white hover:border-luxe-gold/30'
                      }`}
                    >
                      {preset.name}
                    </button>
                  );
                })}
                <button
                  onClick={handleReset}
                  className="p-2 rounded-xl bg-obsidian-950 border border-white/10 text-neutral-400 hover:text-white transition-colors"
                  title="Reset to room default"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Tactile Architectural Control Desk (5 cols) */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-6">

            {/* Global Master Sliders Card */}
            <div className="p-6 rounded-3xl bg-obsidian-900 border border-white/10 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-luxe-gold" />
                  <h3 className="font-serif text-lg text-white font-medium">Master Lighting Bus</h3>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  DALI-2 Live
                </span>
              </div>

              {/* Master Dimmer Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Sun className="w-3.5 h-3.5 text-luxe-gold" /> Master Brightness
                  </span>
                  <span className="text-white font-bold">{masterBrightness}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={masterBrightness}
                  onChange={(e) => {
                    setMasterBrightness(Number(e.target.value));
                    setActivePreset(null);
                  }}
                  className="w-full h-2 rounded-lg bg-obsidian-950 appearance-none cursor-pointer accent-[#E5B869] border border-white/10"
                />
                <div className="flex justify-between text-[10px] font-mono text-neutral-500">
                  <span>0% (Void)</span>
                  <span>50% (Ambient)</span>
                  <span>100% (Maximum)</span>
                </div>
              </div>

              {/* Color Temperature (CCT) Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-amber-400" /> Color Temp (CCT)
                  </span>
                  <span className="text-luxe-gold font-bold">{cct}K</span>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min="2200"
                    max="4000"
                    step="50"
                    value={cct}
                    onChange={(e) => {
                      setCct(Number(e.target.value));
                      setActivePreset(null);
                    }}
                    className="w-full h-2.5 rounded-lg appearance-none cursor-pointer accent-white relative z-10"
                    style={{
                      background: 'linear-gradient(to right, #FF9E3B, #FFC982, #FFE4B8, #E2EDFF)'
                    }}
                  />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-neutral-500">
                  <span className="text-amber-500">2200K (Candle)</span>
                  <span className="text-yellow-200">2700K (Warm)</span>
                  <span className="text-sky-200">4000K (Daylight)</span>
                </div>
              </div>
            </div>

            {/* Individual Fixture Channel Cards */}
            <div className="p-6 rounded-3xl bg-obsidian-900 border border-white/10 space-y-4 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs uppercase font-mono tracking-widest text-luxe-gold">
                  Luminaire Channels
                </span>
                <span className="text-[11px] text-neutral-400 font-mono">
                  Independent Circuiting
                </span>
              </div>

              <div className="space-y-3 pt-1">
                {currentSpace.fixtures.map((fixture) => {
                  const Icon = getFixtureIcon(fixture.type);
                  const isOn = fixtureStates[fixture.id];
                  const intensity = fixtureIntensities[fixture.id] || 0;

                  return (
                    <div 
                      key={fixture.id}
                      className={`p-3.5 rounded-2xl border transition-all duration-300 ${
                        isOn 
                          ? 'bg-obsidian-950 border-luxe-gold/30 shadow-md' 
                          : 'bg-obsidian-950/60 border-white/5 opacity-70'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                            isOn ? 'bg-luxe-gold text-obsidian-950' : 'bg-white/5 text-neutral-500'
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-medium text-white flex items-center gap-1.5">
                              <span>{fixture.name}</span>
                              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-neutral-400">
                                {fixture.type}
                              </span>
                            </div>
                            <span className="text-[10px] text-neutral-400 font-light block leading-tight">
                              {fixture.spec}
                            </span>
                          </div>
                        </div>

                        {/* Tactile Toggle Switch */}
                        <button
                          onClick={() => toggleFixture(fixture.id)}
                          className={`relative w-11 h-6 rounded-full transition-colors duration-300 focus:outline-none shrink-0 ${
                            isOn ? 'bg-luxe-gold' : 'bg-white/15'
                          }`}
                          aria-label={`Toggle ${fixture.name}`}
                        >
                          <span
                            className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-obsidian-950 shadow-md transform transition-transform duration-300 ${
                              isOn ? 'translate-x-5' : 'translate-x-0'
                            }`}
                          />
                        </button>
                      </div>

                      {/* Intensity Slider (Visible when fixture is on) */}
                      {isOn && (
                        <div className="pt-2 border-t border-white/5 flex items-center gap-3 animate-fade-in">
                          <input
                            type="range"
                            min="5"
                            max="100"
                            value={intensity}
                            onChange={(e) => handleIntensityChange(fixture.id, e.target.value)}
                            className="flex-grow h-1.5 rounded-lg bg-obsidian-900 appearance-none cursor-pointer accent-[#E5B869]"
                          />
                          <span className="text-[11px] font-mono text-luxe-gold w-8 text-right shrink-0">
                            {intensity}%
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Architectural Design Note Card */}
            <div className="p-5 rounded-2xl bg-obsidian-900/60 border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-luxe-gold">
                <Info className="w-3.5 h-3.5" /> Consultant's Spatial Rule
              </div>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                "{currentSpace.designNote}"
              </p>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* CALL TO ACTION: VISIT OUR EXPERIENCE STUDIO + GOOGLE MAPS BTN */}
        {/* ------------------------------------------------------------- */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-obsidian-900 via-obsidian-950 to-obsidian-900 border border-luxe-gold/30 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Background Flare */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-radial-glow from-luxe-gold/15 to-transparent blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-luxe-gold/10 border border-luxe-gold/30 text-luxe-gold text-xs uppercase tracking-[0.25em] font-mono">
                <MapPin className="w-3.5 h-3.5" /> Kochi Experience Studio
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white uppercase tracking-tight leading-tight">
                Experience Light In Physical Space. <br />
                <span className="gold-gradient-text italic font-normal">Visit Our Kochi Studio.</span>
              </h3>

              <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
                Digital simulations demonstrate the physics, but nothing substitutes for stepping inside a calibrated dark room. Visit the Trade House Experience Studio in Kalloor, Kochi to test narrow 10° vs 40° optics on real timber and laterite samples, witness museum-grade CRI 98 color rendering, and touch tactile milled brass automation keypads.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-luxe-gold shrink-0" />
                  <span>Interactive Dark Room simulation lab</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-luxe-gold shrink-0" />
                  <span>Real stone &amp; wood veneer reflectance testing</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-luxe-gold shrink-0" />
                  <span>Side-by-side CRI 80 vs CRI 98 color bars</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-luxe-gold shrink-0" />
                  <span>Architectural 48V magnetic track gallery</span>
                </div>
              </div>

              {/* Action Buttons: Google Maps & Walkthrough Booking */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                {/* 1. Google Maps Navigation Button */}
                <a
                  href={BRAND.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-luxe-gold text-obsidian-950 text-xs font-bold uppercase tracking-widest hover:bg-luxe-champagne transition-all shadow-xl shadow-luxe-gold/25 hover:scale-[1.02]"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Navigate on Google Maps</span>
                </a>

                {/* 2. WhatsApp Studio Concierge */}
                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider hover:bg-emerald-500/20 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Book Studio Visit</span>
                </a>

                {/* 3. Studio Details Page */}
                <Link
                  to="/studio"
                  className="inline-flex items-center gap-2 px-5 py-4 rounded-full bg-white/5 border border-white/15 text-neutral-300 hover:text-white hover:border-white/30 text-xs font-medium uppercase tracking-wider transition-all"
                >
                  <span>Studio Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Location & Hours Card */}
            <div className="lg:col-span-5 p-7 rounded-3xl bg-obsidian-950/80 border border-white/10 space-y-5">
              <span className="text-[11px] uppercase font-mono tracking-widest text-luxe-gold block border-b border-white/10 pb-3">
                Studio Address &amp; Access
              </span>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-4 h-4 text-luxe-gold shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block text-sm font-medium">Trade House Experience Studio</strong>
                    <p className="text-neutral-300 font-light mt-0.5 leading-relaxed">
                      39-2435/A, 39-2435/A1, IGS Square, South Janatha Road, Palarivattom, Kochi, Ernakulam, Kerala 682025
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-white/5 pt-3">
                  <Clock className="w-4 h-4 text-luxe-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-xs">Studio Consultation Hours</strong>
                    <span className="text-neutral-400">{BRAND.openingHours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-white/5 pt-3">
                  <Phone className="w-4 h-4 text-luxe-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-xs">Direct Concierge Line</strong>
                    <a href={`tel:${BRAND.phone}`} className="text-neutral-300 hover:text-luxe-gold transition-colors font-mono">
                      {BRAND.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Maps Clickable Card Banner */}
              <a
                href={BRAND.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/map flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-luxe-gold/40 transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-luxe-gold/20 flex items-center justify-center text-luxe-gold">
                    <Navigation className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-left">
                    <span className="text-[11px] font-medium text-white block">Open in Google Maps App</span>
                    <span className="text-[10px] text-neutral-400">Get turn-by-turn driving directions</span>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-luxe-gold group-hover/map:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
