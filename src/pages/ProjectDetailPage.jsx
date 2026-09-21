import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { REAL_PROJECTS } from '../data/projectsData';
import ProjectLightbox from '../components/projects/ProjectLightbox';
import { 
  ArrowLeft, 
  ArrowRight, 
  MapPin, 
  Sparkles, 
  Compass, 
  Maximize2, 
  Layers, 
  CheckCircle2, 
  Lightbulb, 
  ShieldCheck 
} from 'lucide-react';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find project by slug or id
  const project = REAL_PROJECTS.find((p) => p.slug === id || p.id === id) || REAL_PROJECTS[0];

  // Find next project for bottom navigation
  const currentIndex = REAL_PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = REAL_PROJECTS[(currentIndex + 1) % REAL_PROJECTS.length];
  const prevProject = REAL_PROJECTS[(currentIndex - 1 + REAL_PROJECTS.length) % REAL_PROJECTS.length];

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setActivePhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-obsidian-950 text-[#F4F3EE] pt-24 sm:pt-28 pb-28 min-h-screen">
      
      {/* Top Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-luxe-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Selected Projects
          </Link>

          {/* Quick cycle indicator */}
          <div className="hidden sm:flex items-center gap-3 text-xs font-mono text-neutral-500">
            <span>Case Study {project.number} of 0{REAL_PROJECTS.length}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* Editorial Case Study Hero */}
        <section className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-obsidian-900 min-h-[540px] sm:min-h-[640px] flex flex-col justify-end p-8 sm:p-14 lg:p-16">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out"
            style={{ backgroundImage: `url(${project.heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/60 to-transparent" />

          {/* Top Floating Badge & Lightbox Trigger */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1 rounded-full bg-obsidian-950/80 backdrop-blur-md border border-white/15 text-xs font-mono text-luxe-gold uppercase tracking-widest font-bold">
                Project {project.number}
              </span>
              <span className="px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-mono text-neutral-200 uppercase tracking-wider">
                {project.category}
              </span>
            </div>

            <button
              onClick={() => openLightbox(0)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-obsidian-950/80 backdrop-blur-md border border-white/15 text-xs font-mono text-neutral-300 hover:text-white hover:border-luxe-gold/50 transition-all"
              aria-label="Inspect hero image full screen"
            >
              <Maximize2 className="w-3.5 h-3.5 text-luxe-gold" />
              <span className="hidden sm:inline">Inspect Image</span>
            </button>
          </div>

          {/* Hero Typography */}
          <div className="relative z-10 space-y-4 max-w-4xl">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-300">
              <MapPin className="w-3.5 h-3.5 text-luxe-gold shrink-0" />
              <span>{project.location}</span>
              <span className="text-neutral-600">•</span>
              <span className="text-luxe-gold">{project.typology}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light uppercase tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-sm sm:text-lg text-neutral-200 font-light leading-relaxed max-w-3xl">
              {project.tagline}
            </p>
          </div>
        </section>

        {/* Verified Project Metadata Bar */}
        <section className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-3xl bg-obsidian-900/80 border border-white/10 backdrop-blur-xl shadow-xl">
          <div className="space-y-1">
            <span className="text-[10px] tracking-widest uppercase font-mono text-neutral-400 block">
              Typology
            </span>
            <p className="text-xs sm:text-sm font-medium text-white">
              {project.typology}
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] tracking-widest uppercase font-mono text-neutral-400 block">
              Location
            </span>
            <p className="text-xs sm:text-sm font-medium text-white">
              {project.location}
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] tracking-widest uppercase font-mono text-neutral-400 block">
              Lighting Focus
            </span>
            <p className="text-xs sm:text-sm font-medium text-luxe-gold">
              {project.lightingFocus}
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] tracking-widest uppercase font-mono text-neutral-400 block">
              Documentation
            </span>
            <p className="text-xs sm:text-sm font-medium text-emerald-400 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Site Execution
            </p>
          </div>
        </section>

        {/* Narrative Section: Spatial Context & Architectural Strategy */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-obsidian-900/60 border border-white/10 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-mono uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-luxe-gold" />
              Spatial Context
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-snug">
              Architecture &amp; Materiality
            </h2>

            <p className="text-sm text-neutral-300 font-light leading-relaxed">
              {project.narrative.overview}
            </p>

            {project.narrative.materials && (
              <p className="text-sm text-neutral-300 font-light leading-relaxed border-t border-white/5 pt-4">
                {project.narrative.materials}
              </p>
            )}
          </div>

          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-obsidian-900 to-obsidian-950 border border-luxe-gold/25 space-y-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-radial-glow from-luxe-gold/10 to-transparent blur-2xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-luxe-gold/10 border border-luxe-gold/30 text-luxe-gold text-xs font-mono uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Lighting Strategy
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-snug">
              The Illumination Approach
            </h2>

            <p className="text-sm text-neutral-200 font-light leading-relaxed">
              {project.narrative.approach}
            </p>

            {(project.narrative.hierarchy || project.narrative.voidAndBridge || project.narrative.retailBranding || project.narrative.privateSpaces) && (
              <p className="text-sm text-neutral-300 font-light leading-relaxed border-t border-white/10 pt-4">
                {project.narrative.hierarchy || project.narrative.voidAndBridge || project.narrative.retailBranding || project.narrative.privateSpaces}
              </p>
            )}
          </div>
        </section>

        {/* Structured Architectural Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <section className="space-y-8">
            <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-luxe-gold font-mono block">
                  Design Execution
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-white mt-1">
                  Lighting Highlights &amp; Techniques
                </h2>
              </div>
              <span className="text-xs font-mono text-neutral-400">
                4 Architectural Disciplines
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-7 rounded-3xl bg-obsidian-900 border border-white/5 hover:border-luxe-gold/30 transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-luxe-gold font-semibold uppercase tracking-wider block">
                      0{idx + 1} • {item.title}
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="w-6 h-0.5 bg-luxe-gold/40 rounded-full" />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Curated Visual Gallery */}
        <section className="space-y-8">
          <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-luxe-gold font-mono block">
                Visual Documentation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white mt-1">
                Site Photography Gallery
              </h2>
            </div>
            <span className="text-xs font-mono text-neutral-400">
              Click any image for full-screen inspection
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((photo, idx) => (
              <figure
                key={idx}
                onClick={() => openLightbox(idx)}
                className="group relative rounded-3xl overflow-hidden border border-white/10 hover:border-luxe-gold/50 cursor-pointer bg-obsidian-900 transition-all duration-500 shadow-xl flex flex-col"
              >
                <div className="relative h-72 sm:h-80 overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/90 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                  <div className="absolute top-3 right-3 p-2 rounded-full bg-obsidian-950/80 backdrop-blur-md border border-white/15 text-white group-hover:text-luxe-gold transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[10px] font-mono text-luxe-gold tracking-widest uppercase block mb-1">
                      Figure 0{idx + 1}
                    </span>
                    <p className="text-xs text-neutral-200 font-light line-clamp-2">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </figure>
            ))}
          </div>
        </section>

        {/* Next Project Transition Banner */}
        <section className="pt-16 border-t border-white/10">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 group shadow-2xl bg-obsidian-900 min-h-[320px] flex flex-col justify-end p-8 sm:p-12">
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-1000 ease-out opacity-40 group-hover:opacity-50"
              style={{ backgroundImage: `url(${nextProject.heroImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/80 to-transparent" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-luxe-gold block">
                  Next Case Study • Project {nextProject.number}
                </span>
                <h3 className="font-serif text-2xl sm:text-4xl text-white font-normal">
                  {nextProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-xl">
                  {nextProject.shortDesc}
                </p>
              </div>

              <Link
                to={`/projects/${nextProject.slug}`}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-luxe-gold text-obsidian-950 text-xs uppercase tracking-widest font-bold hover:bg-luxe-champagne transition-all shrink-0 self-start md:self-auto shadow-lg shadow-black/40"
              >
                <span>View {nextProject.title}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>

      {/* Lightbox Modal */}
      <ProjectLightbox
        images={project.gallery}
        currentIndex={activePhotoIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setActivePhotoIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)}
        onNext={() => setActivePhotoIndex((prev) => (prev + 1) % project.gallery.length)}
      />
    </div>
  );
}
