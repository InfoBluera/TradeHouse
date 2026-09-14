import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../data/siteData';
import { 
  ArrowLeft, 
  ArrowRight, 
  MapPin, 
  Calendar, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Sliders, 
  Maximize2 
} from 'lucide-react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find project by slug or fallback to the first project
  const project = PROJECTS.find((p) => p.slug === id || p.id === id) || PROJECTS[0];

  // Find next project for bottom navigation
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div className="bg-obsidian-950 text-[#F4F3EE] pt-24 pb-24">
      {/* Top Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-luxe-gold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Projects
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 min-h-[500px] sm:min-h-[600px] flex flex-col justify-end p-8 sm:p-16 shadow-2xl bg-obsidian-900">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/60 to-transparent" />

          <div className="relative z-10 space-y-4 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-luxe-gold text-obsidian-950 text-[11px] font-bold uppercase tracking-widest">
                {project.category}
              </span>
              <span className="text-xs font-mono text-neutral-300 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-luxe-gold" /> {project.location}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-light uppercase tracking-tight">
              {project.title}
            </h1>

            <p className="text-sm sm:text-lg text-neutral-200 font-light leading-relaxed">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Project Metadata Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 p-8 rounded-3xl bg-obsidian-900/80 border border-white/10 my-12 backdrop-blur-xl">
          <div>
            <span className="text-[10px] tracking-widest uppercase font-mono text-neutral-400 block">Client</span>
            <span className="text-xs sm:text-sm font-medium text-white">{project.client}</span>
          </div>
          <div>
            <span className="text-[10px] tracking-widest uppercase font-mono text-neutral-400 block">Location</span>
            <span className="text-xs sm:text-sm font-medium text-white">{project.location}</span>
          </div>
          <div>
            <span className="text-[10px] tracking-widest uppercase font-mono text-neutral-400 block">Scale</span>
            <span className="text-xs sm:text-sm font-medium text-white">{project.area}</span>
          </div>
          <div>
            <span className="text-[10px] tracking-widest uppercase font-mono text-neutral-400 block">Year</span>
            <span className="text-xs sm:text-sm font-medium text-white">{project.year}</span>
          </div>
          <div>
            <span className="text-[10px] tracking-widest uppercase font-mono text-neutral-400 block">Lead Architect</span>
            <span className="text-xs sm:text-sm font-medium text-white">{project.leadArchitect || "Studio Design Partner"}</span>
          </div>
          <div>
            <span className="text-[10px] tracking-widest uppercase font-mono text-neutral-400 block">Services</span>
            <span className="text-xs sm:text-sm font-medium text-luxe-gold">{project.services.join(', ')}</span>
          </div>
        </div>

        {/* Narrative: Challenge & Concept */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-16">
          <div className="lg:col-span-6 p-8 rounded-3xl bg-obsidian-900/60 border border-white/5 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-mono flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" /> Design Challenge
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-medium">
              The Spatial Context
            </h2>
            <p className="text-sm text-neutral-300 font-light leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="lg:col-span-6 p-8 rounded-3xl bg-luxe-gold/5 border border-luxe-gold/25 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-luxe-gold font-mono flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" /> Creative Strategy
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-medium">
              Lighting Architecture
            </h2>
            <p className="text-sm text-neutral-200 font-light leading-relaxed">
              {project.concept}
            </p>
          </div>
        </div>

        {/* Lighting Strategy Breakdown */}
        <div className="my-20 space-y-8">
          <div className="border-b border-white/10 pb-4">
            <span className="text-xs uppercase tracking-[0.25em] text-luxe-gold font-mono">
              Layered Formulation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white mt-1">
              Lighting Strategy Breakdown
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.strategy.map((item, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-obsidian-900 border border-white/5 space-y-3">
                <span className="text-xs font-mono text-luxe-gold font-semibold uppercase tracking-wider block">
                  Layer {idx + 1} • {item.name}
                </span>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Photometric Technical Specifications */}
        {project.specs && (
          <div className="p-8 rounded-3xl bg-obsidian-900/90 border border-luxe-gold/30 shadow-2xl my-16 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-luxe-gold font-mono">
                  Photometric Blueprint
                </span>
                <h3 className="font-serif text-2xl text-white mt-1">
                  Engineered Technical Specifications
                </h3>
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300">
                DIALux Certified Audit
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-xs">
              <div className="space-y-1">
                <span className="text-neutral-400 uppercase font-mono block">Color Rendering (CRI)</span>
                <span className="text-base font-medium text-white">{project.specs.cri}</span>
              </div>
              <div className="space-y-1">
                <span className="text-neutral-400 uppercase font-mono block">CCT Spectrum</span>
                <span className="text-base font-medium text-white">{project.specs.cct}</span>
              </div>
              <div className="space-y-1">
                <span className="text-neutral-400 uppercase font-mono block">Beam Distribution</span>
                <span className="text-base font-medium text-white">{project.specs.beamAngles}</span>
              </div>
              <div className="space-y-1">
                <span className="text-neutral-400 uppercase font-mono block">Control Protocol</span>
                <span className="text-base font-medium text-white">{project.specs.controlProtocol}</span>
              </div>
              <div className="space-y-1">
                <span className="text-neutral-400 uppercase font-mono block">Unified Glare Rating</span>
                <span className="text-base font-medium text-emerald-400">{project.specs.glareRating}</span>
              </div>
            </div>
          </div>
        )}

        {/* Visual Gallery */}
        <div className="my-20 space-y-8">
          <div className="border-b border-white/10 pb-4">
            <span className="text-xs uppercase tracking-[0.25em] text-luxe-gold font-mono">
              Spatial Immersion
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white mt-1">
              Visual Gallery
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((img, idx) => (
              <div key={idx} className="relative rounded-3xl overflow-hidden border border-white/10 h-80 sm:h-96 group">
                <img
                  src={img}
                  alt={`${project.title} gallery photo ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-40" />
              </div>
            ))}
          </div>
        </div>

        {/* Next Project Footer Bar */}
        <div className="mt-24 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <span className="text-xs uppercase tracking-widest font-mono text-neutral-400">
              Next Architectural Case Study
            </span>
            <h4 className="font-serif text-2xl text-white mt-1">
              {nextProject.title}
            </h4>
          </div>

          <Link
            to={`/projects/${nextProject.slug}`}
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-luxe-gold text-obsidian-950 text-xs uppercase tracking-wider font-bold hover:bg-luxe-champagne transition-all"
          >
            <span>View {nextProject.title}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
