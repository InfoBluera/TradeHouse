import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/siteData';
import { MapPin, ArrowRight, Sparkles, Filter, Search, Layers } from 'lucide-react';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Residential', 'Hospitality', 'Retail', 'Commercial'];

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesCategory = selectedCategory === 'All' || proj.category === selectedCategory;
    const matchesSearch = proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          proj.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          proj.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-obsidian-950 text-[#F4F3EE] pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-luxe-gold/10 border border-luxe-gold/30 text-luxe-gold text-xs uppercase tracking-[0.25em] font-mono">
            <Sparkles className="w-3.5 h-3.5" /> Architectural Portfolio
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-tight text-white">
            Signature <span className="gold-gradient-text italic font-normal">Projects</span>
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
            Explore our lighting architecture across luxury private villas, boutique heritage hotels, luxury retail salons, and commercial atriums in Kochi and throughout Kerala.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10 mb-12">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-luxe-gold text-obsidian-950 font-bold shadow-md shadow-black/40'
                    : 'bg-obsidian-900 border border-white/10 text-neutral-300 hover:text-white hover:border-luxe-gold/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-obsidian-900/90 border border-white/10 rounded-full pl-10 pr-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-luxe-gold/50"
            />
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <Link
              key={proj.id}
              to={`/projects/${proj.slug}`}
              className="group luxe-card rounded-3xl overflow-hidden flex flex-col justify-between border border-white/10 hover:border-luxe-gold/40 transition-all duration-500 bg-obsidian-900 shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={proj.heroImage}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-obsidian-950/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-luxe-gold uppercase tracking-widest">
                  {proj.category}
                </div>
                <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs text-neutral-300 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-luxe-gold" /> {proj.location}
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                    {proj.area} • {proj.year}
                  </span>
                  <h3 className="font-serif text-2xl text-white font-medium group-hover:text-luxe-champagne transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed line-clamp-2">
                    {proj.tagline}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-luxe-gold">
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-obsidian-900/40 rounded-3xl border border-white/5 space-y-3">
            <p className="font-serif text-2xl text-neutral-300">No projects match your filter criteria.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="text-xs text-luxe-gold underline uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
