import React, { useState } from 'react';
import { SlidersHorizontal, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX, rect) => {
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  const handleMouseMove = (e) => {
    if (!isDragging && e.buttons !== 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  return (
    <section className="relative py-24 bg-obsidian-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-luxe-gold/10 border border-luxe-gold/30 text-luxe-gold text-xs uppercase tracking-widest font-mono">
            <SlidersHorizontal className="w-3.5 h-3.5" /> Visual Impact Comparison
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white uppercase tracking-wider">
            The Power of <span className="gold-gradient-text italic font-normal">Layered Light</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            Drag the interactive slider below to witness how professional architectural lighting transforms flat, uncomfortable spaces into rich, textured sanctuaries.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-5xl mx-auto">
          <div
            className="relative h-[400px] sm:h-[520px] rounded-3xl overflow-hidden border border-white/10 select-none shadow-2xl cursor-ew-resize group"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
          >
            {/* Background Image: AFTER (Trade House Layered Lighting) */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85')`,
                filter: 'brightness(0.95) contrast(1.15) saturate(1.1)',
              }}
            >
              {/* After Badge */}
              <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-obsidian-950/85 backdrop-blur-md border border-luxe-gold/50 text-xs font-mono text-luxe-gold font-semibold flex items-center gap-2 shadow-lg">
                <CheckCircle2 className="w-4 h-4 text-luxe-gold" />
                <span>Trade House Layered Lighting (CRI 98, UGR&lt;11)</span>
              </div>
            </div>

            {/* Foreground Image: BEFORE (Conventional Harsh Flat Grid) */}
            <div
              className="absolute inset-0 bg-cover bg-center overflow-hidden border-r border-luxe-gold"
              style={{
                width: `${sliderPosition}%`,
                backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85')`,
                filter: 'brightness(1.4) contrast(0.85) grayscale(0.5) blur(0.3px)',
              }}
            >
              {/* Before Badge */}
              <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-obsidian-950/85 backdrop-blur-md border border-white/20 text-xs font-mono text-neutral-300 font-semibold flex items-center gap-2 shadow-lg whitespace-nowrap">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                <span>Conventional Grid Lighting (Flat &amp; Glaring)</span>
              </div>
            </div>

            {/* Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-luxe-gold z-30 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-obsidian-950 border border-luxe-gold text-luxe-gold flex items-center justify-center shadow-lg shadow-black/80 text-xs font-bold">
                ⟷
              </div>
            </div>
          </div>

          {/* Key Differences Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-2xl bg-obsidian-900/60 border border-white/5 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-red-400" /> The Conventional Flaw
              </span>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                Uniform 4x4 ceiling grids cast harsh shadows beneath eyes, wash out expensive wall finishes, cause intolerable reflection on screens, and consume unnecessary electrical wattage.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-luxe-gold/5 border border-luxe-gold/20 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-luxe-gold flex items-center gap-1.5 font-semibold">
                <Sparkles className="w-4 h-4 text-luxe-gold" /> The Trade House Distinction
              </span>
              <p className="text-xs sm:text-sm text-neutral-200 font-light leading-relaxed">
                We conceal the source of light in architectural reveals and deep dark-light apertures. Light sculpts the art, wood grains, and stone masonry while maintaining calm, glare-free comfort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
