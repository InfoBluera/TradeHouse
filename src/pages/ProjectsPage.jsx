import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { REAL_PROJECTS, PROJECT_CATEGORIES } from '../data/projectsData';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectFilter from '../components/projects/ProjectFilter';
import { Search, Sparkles, ArrowRight, Lightbulb, MapPin, Compass, ShieldCheck } from 'lucide-react';
import { trackInquiryClick } from '../utils/analytics';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return REAL_PROJECTS.filter((proj) => {
      const matchesCategory = selectedCategory === 'All' || proj.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        proj.title.toLowerCase().includes(q) ||
        proj.location.toLowerCase().includes(q) ||
        proj.typology.toLowerCase().includes(q) ||
        proj.shortDesc.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const isDefaultView = selectedCategory === 'All' && searchQuery.trim() === '';

  return (
    <div className="bg-obsidian-950 text-[#F4F3EE] pt-28 sm:pt-32 pb-28 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl space-y-5 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-luxe-gold/10 border border-luxe-gold/30 text-luxe-gold text-xs uppercase tracking-[0.25em] font-mono">
            <Sparkles className="w-3.5 h-3.5" /> Selected Works
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-tight text-white leading-tight">
            Lighting in <span className="gold-gradient-text italic font-normal">Context</span>
          </h1>

          <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
            A portfolio of completed architectural lighting installations across South India—from hospitality façades and intimate dining destinations to private luxury residences and technology showrooms.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-neutral-400">
            <span className="flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-luxe-gold" />
              Real Site Photography
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-luxe-gold" />
              Turnkey Design &amp; Execution
            </span>
          </div>
        </div>

        {/* Filter and Search Navigation */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-8 border-b border-white/10 mb-14">
          <ProjectFilter
            categories={PROJECT_CATEGORIES}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          <div className="relative w-full md:w-80 shrink-0">
            <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by space, city, or style..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-obsidian-900/90 border border-white/10 rounded-full pl-11 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-luxe-gold/50 transition-colors"
              aria-label="Search projects"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[11px] font-mono text-neutral-400 hover:text-white"
                aria-label="Clear search"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Asymmetrical Editorial Portfolio Layout */}
        {isDefaultView ? (
          <div className="space-y-12 sm:space-y-16">
            {/* 01: Hero Featured Project (Terratone Boutique Hotel) */}
            <ProjectCard project={REAL_PROJECTS[0]} featured={true} index={0} />

            {/* 02 & 03: Editorial Pair (Prestige Residence & Hedge Cafe) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ProjectCard project={REAL_PROJECTS[1]} index={1} />
              <ProjectCard project={REAL_PROJECTS[2]} index={2} />
            </div>

            {/* Editorial Lighting Philosophy Interstitial Callout */}
            <div className="relative rounded-3xl overflow-hidden border border-luxe-gold/20 p-8 sm:p-12 bg-gradient-to-br from-obsidian-900 via-obsidian-950 to-obsidian-900 shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-radial-glow from-luxe-gold/10 to-transparent blur-3xl pointer-events-none" />
              <div className="relative z-10 max-w-3xl space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-luxe-gold block">
                  The Trade House Discipline
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl text-white font-light leading-snug">
                  Light is not merely placed—it is <span className="gold-gradient-text italic font-normal">sculpted into the architecture</span>.
                </h2>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  Every fixture in our completed projects is intentionally selected to interact with natural timber, textured stone, and architectural voids. We eliminate visual clutter so you experience the emotion of the space, not the mechanics of the lamp.
                </p>
              </div>
            </div>

            {/* 04 & 05: Editorial Pair (Rajesh Residence & Bismi Home Appliances) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ProjectCard project={REAL_PROJECTS[3]} index={3} />
              <ProjectCard project={REAL_PROJECTS[4]} index={4} />
            </div>
          </div>
        ) : (
          /* Filtered or Searched Results Grid */
          <div>
            <div className="mb-6 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}</span>
              {(selectedCategory !== 'All' || searchQuery) && (
                <button
                  onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                  className="text-luxe-gold hover:underline uppercase tracking-wider"
                >
                  Reset filters
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((proj, idx) => (
                <ProjectCard key={proj.id} project={proj} index={idx} />
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-24 bg-obsidian-900/40 rounded-3xl border border-white/5 space-y-4">
                <p className="font-serif text-2xl text-neutral-300">No projects match your search criteria.</p>
                <p className="text-xs text-neutral-400 font-light max-w-sm mx-auto">
                  Try searching for a different architectural category or keyword.
                </p>
                <button
                  onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                  className="px-6 py-2.5 rounded-full bg-luxe-gold text-obsidian-950 text-xs font-bold uppercase tracking-widest hover:bg-luxe-champagne transition-all"
                >
                  View All Works
                </button>
              </div>
            )}
          </div>
        )}

        {/* Closing Conversion CTA Section */}
        <section className="mt-28 sm:mt-36 p-8 sm:p-16 rounded-3xl bg-gradient-to-b from-obsidian-900 to-obsidian-950 border border-white/10 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-radial-glow from-luxe-gold/10 to-transparent blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-luxe-gold font-mono block">
              Start A Dialogue
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white uppercase tracking-wide leading-tight">
              Have a space in <span className="gold-gradient-text italic font-normal">mind?</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              Whether you are an architect designing a boutique hospitality retreat or a homeowner crafting a private sanctuary, we bring lighting blueprints to flawless reality.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/start-a-project"
                onClick={() => {
                  trackInquiryClick({
                    link_location: 'projects_closing_cta',
                    button_text: 'Initiate Your Project',
                    destination: '/start-a-project',
                  });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-luxe-gold to-luxe-bronze text-obsidian-950 text-xs font-bold uppercase tracking-widest hover:brightness-105 transition-all shadow-lg shadow-black/40"
              >
                <span>Initiate Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/studio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-obsidian-900 border border-white/15 text-neutral-200 hover:text-white hover:border-luxe-gold/50 text-xs font-medium uppercase tracking-widest transition-all"
              >
                Visit Experience Studio
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
