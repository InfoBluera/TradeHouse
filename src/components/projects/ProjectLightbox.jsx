import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function ProjectLightbox({ images, currentIndex, isOpen, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentImg = images[currentIndex];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian-950/95 backdrop-blur-md p-4 sm:p-6 transition-all duration-300"
      role="dialog"
      aria-modal="true"
      aria-label="Architectural image view"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-luxe-gold"
        aria-label="Close image preview"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Navigation Buttons (if more than 1 image) */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-obsidian-900/80 hover:bg-luxe-gold hover:text-obsidian-950 text-white transition-all border border-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-luxe-gold"
            aria-label="Previous photograph"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-obsidian-900/80 hover:bg-luxe-gold hover:text-obsidian-950 text-white transition-all border border-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-luxe-gold"
            aria-label="Next photograph"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Image container */}
      <div 
        className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded-2xl border border-white/15 shadow-2xl bg-obsidian-900 max-h-[75vh]">
          <img
            src={currentImg.src || currentImg}
            alt={currentImg.alt || "Trade House Architectural Project Photograph"}
            className="w-auto h-auto max-h-[75vh] max-w-full object-contain select-none"
          />
        </div>

        {/* Caption & Counter */}
        <div className="mt-4 text-center space-y-1 max-w-2xl px-4">
          {currentImg.caption && (
            <p className="text-sm text-neutral-200 font-light">
              {currentImg.caption}
            </p>
          )}
          {images.length > 1 && (
            <span className="text-[11px] font-mono text-luxe-gold tracking-widest uppercase block">
              Photograph {currentIndex + 1} of {images.length}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
