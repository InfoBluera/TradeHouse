import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';

export default function ProjectCard({ project, featured = false, index = 0 }) {
  if (featured) {
    return (
      <div className="group relative rounded-3xl overflow-hidden border border-white/10 hover:border-luxe-gold/40 transition-all duration-700 bg-obsidian-900 shadow-2xl flex flex-col lg:flex-row min-h-[520px]">
        {/* Visual Half */}
        <div className="lg:w-7/12 relative overflow-hidden min-h-[340px] lg:min-h-full">
          <img
            src={project.heroImage}
            alt={project.gallery?.[0]?.alt || project.title}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-obsidian-950" />
          
          {/* Editorial Index Watermark */}
          <div className="absolute top-6 left-6 flex items-center gap-3">
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-obsidian-950/80 backdrop-blur-md border border-white/15 text-luxe-gold tracking-widest font-bold uppercase">
              Project {project.number}
            </span>
            <span className="px-3 py-1 rounded-full bg-luxe-gold text-obsidian-950 text-[10px] font-bold uppercase tracking-widest">
              Featured Case Study
            </span>
          </div>

          <div className="absolute bottom-6 left-6 flex items-center gap-2 text-xs text-neutral-300 font-mono bg-obsidian-950/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            <MapPin className="w-3.5 h-3.5 text-luxe-gold shrink-0" />
            <span>{project.location}</span>
          </div>
        </div>

        {/* Editorial Content Half */}
        <div className="lg:w-5/12 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6 relative z-10 bg-obsidian-900/90">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-luxe-gold">
                {project.typology}
              </span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight group-hover:text-luxe-champagne transition-colors">
              {project.title}
            </h3>

            <p className="text-sm text-neutral-300 font-light leading-relaxed">
              {project.shortDesc}
            </p>

            {/* Structured Lighting Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="pt-2 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block">
                  Lighting Highlights
                </span>
                <ul className="space-y-1.5">
                  {project.highlights.slice(0, 2).map((h, i) => (
                    <li key={i} className="text-xs text-neutral-300 flex items-start gap-2 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-luxe-gold mt-1.5 shrink-0" />
                      <span><strong className="text-neutral-200 font-medium">{h.title}:</strong> {h.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between">
            <Link
              to={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-luxe-gold hover:bg-luxe-champagne text-obsidian-950 text-xs uppercase tracking-widest font-bold transition-all shadow-md shadow-black/30 group-hover:shadow-luxe-gold/10"
            >
              <span>Explore Case Study</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <span className="text-[11px] font-mono text-neutral-400">
              {project.gallery?.length || 0} Photographs
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Standard Editorial Card
  return (
    <article className="group luxe-card rounded-3xl overflow-hidden flex flex-col justify-between border border-white/10 hover:border-luxe-gold/40 transition-all duration-500 bg-obsidian-900 shadow-2xl relative">
      {/* Image Frame */}
      <div className="relative h-72 sm:h-80 overflow-hidden bg-obsidian-950">
        <img
          src={project.heroImage}
          alt={project.gallery?.[0]?.alt || project.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-obsidian-950/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-luxe-gold tracking-widest font-bold">
            {project.number}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-mono text-neutral-200 uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        {/* Top Right Quick Link Icon */}
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-obsidian-950/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-neutral-300 group-hover:text-luxe-gold group-hover:border-luxe-gold/50 transition-colors">
          <ArrowUpRight className="w-4 h-4" />
        </div>

        {/* Location Pill */}
        <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs text-neutral-300 font-mono bg-obsidian-950/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          <MapPin className="w-3.5 h-3.5 text-luxe-gold shrink-0" />
          <span>{project.location}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-2.5">
          <span className="text-[10px] font-mono text-luxe-gold uppercase tracking-[0.2em] block">
            {project.typology}
          </span>

          <h3 className="font-serif text-2xl text-white font-medium leading-snug group-hover:text-luxe-champagne transition-colors">
            <Link to={`/projects/${project.slug}`} className="focus:outline-none focus-visible:underline">
              {project.title}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed line-clamp-3">
            {project.shortDesc}
          </p>
        </div>

        {/* Card Footer Link */}
        <div className="pt-4 mt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-luxe-gold hover:text-white transition-colors uppercase tracking-wider font-semibold"
          >
            <span>View Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
          </Link>
          <span className="text-neutral-500 text-[11px]">
            {project.gallery?.length || 0} Photos
          </span>
        </div>
      </div>
    </article>
  );
}
