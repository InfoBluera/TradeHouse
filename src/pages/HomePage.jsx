import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Sliders, 
  MapPin, 
  Calendar, 
  Shield, 
  Award, 
  Compass, 
  Layers, 
  SlidersHorizontal,
  ChevronRight,
  Eye,
  Zap,
  ArrowUpRight
} from 'lucide-react';
import HeroLightAnimation from '../components/HeroLightAnimation';
import LightingSimulator from '../components/LightingSimulator';
import SpaceExplorer from '../components/SpaceExplorer';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { SERVICES, PROJECTS, PROCESS_STEPS, JOURNAL_ARTICLES, TESTIMONIALS, TRUST_METRICS, BRAND } from '../data/siteData';

export default function HomePage() {
  return (
    <div className="bg-obsidian-950 text-[#F4F3EE]">
      {/* 01: Hero Experience with Interactive Light Engine */}
      <HeroLightAnimation />

      {/* 02: Brand Statement Section */}
      <section className="relative py-28 bg-obsidian-900/40 border-t border-b border-white/5 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-luxe-gold/10 border border-luxe-gold/30 text-luxe-gold text-xs uppercase tracking-[0.25em] font-mono">
            <Sparkles className="w-3.5 h-3.5" /> Philosophy of Light
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light leading-tight text-white uppercase tracking-wide">
            Light is more than <br />
            <span className="gold-gradient-text italic font-normal">Illumination.</span>
          </h2>

          <p className="text-base sm:text-xl text-neutral-300 font-light max-w-3xl mx-auto leading-relaxed">
            Trade House designs how a space feels, functions, and breathes. We treat light as an architectural material—sculpting shadows, celebrating textures, and syncing human biological rhythm with the spaces we inhabit.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10">
            {TRUST_METRICS.map((metric, idx) => (
              <div key={idx} className="space-y-1 text-center">
                <span className="font-serif text-2xl sm:text-3xl text-luxe-gold font-normal">
                  {metric.value}
                </span>
                <p className="text-xs uppercase tracking-wider text-neutral-200 font-medium">
                  {metric.label}
                </p>
                <p className="text-[11px] text-neutral-400 font-light">
                  {metric.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03: What We Do — 6 Core Services Experience */}
      <section className="relative py-28 bg-obsidian-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-luxe-gold font-mono">
                Comprehensive Capabilities
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-white uppercase tracking-wide">
                What We Do
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base max-w-xl font-light">
                From DIALux photometric engineering to precision aiming and commissioning in Kochi.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-luxe-gold hover:text-obsidian-950 border border-white/15 hover:border-luxe-gold text-xs uppercase tracking-widest font-semibold transition-all duration-300 self-start md:self-auto"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 6 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="group luxe-card rounded-3xl overflow-hidden flex flex-col justify-between p-8 relative transition-all duration-500 hover:-translate-y-1.5"
              >
                {/* Background image preview with soft gradient overlay on hover */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                  style={{ backgroundImage: `url(${service.image})` }}
                />

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-luxe-gold tracking-widest">
                      {service.number}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-luxe-gold group-hover:border-luxe-gold/50 transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-white font-medium group-hover:text-luxe-champagne transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between relative z-10">
                  <span className="text-[11px] uppercase tracking-wider text-luxe-gold font-mono font-medium">
                    Explore Strategy
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-luxe-gold group-hover:translate-x-1.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 04: Signature Projects Showcase */}
      <section className="relative py-28 bg-obsidian-900/60 border-t border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-luxe-gold font-mono">
                Architectural Portfolio
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-white uppercase tracking-wide">
                Signature Projects
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base max-w-xl font-light">
                Sculptural lighting narratives across Kochi, Kerala, and premier South Indian locations.
              </p>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-luxe-gold text-obsidian-950 hover:bg-luxe-champagne text-xs uppercase tracking-widest font-bold transition-all duration-200 self-start md:self-auto shadow-md shadow-black/30"
            >
              Explore All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Featured Editorial Layout (Asymmetric Cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Project 1: Large Feature Hero */}
            <div className="lg:col-span-8 group relative rounded-3xl overflow-hidden border border-white/10 min-h-[460px] flex flex-col justify-end p-8 sm:p-12 shadow-2xl bg-obsidian-900">
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-1000"
                style={{ backgroundImage: `url(${PROJECTS[0].heroImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/60 to-transparent" />

              <div className="relative z-10 space-y-3 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-luxe-gold text-obsidian-950 text-[10px] uppercase font-bold tracking-widest">
                    {PROJECTS[0].category}
                  </span>
                  <span className="text-xs font-mono text-neutral-300 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-luxe-gold" /> {PROJECTS[0].location}
                  </span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-white font-medium">
                  {PROJECTS[0].title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  {PROJECTS[0].tagline}
                </p>
                <div className="pt-2">
                  <Link
                    to={`/projects/${PROJECTS[0].slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-luxe-gold hover:text-obsidian-950 backdrop-blur-md border border-white/20 text-xs uppercase tracking-wider font-semibold text-white transition-all"
                  >
                    View Project Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 2: Side Feature */}
            <div className="lg:col-span-4 group relative rounded-3xl overflow-hidden border border-white/10 min-h-[460px] flex flex-col justify-end p-8 shadow-2xl bg-obsidian-900">
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-1000"
                style={{ backgroundImage: `url(${PROJECTS[1].heroImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/60 to-transparent" />

              <div className="relative z-10 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-luxe-gold text-obsidian-950 text-[10px] uppercase font-bold tracking-widest">
                    {PROJECTS[1].category}
                  </span>
                  <span className="text-xs font-mono text-neutral-300 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-luxe-gold" /> {PROJECTS[1].location}
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                  {PROJECTS[1].title}
                </h3>
                <p className="text-xs text-neutral-300 font-light leading-relaxed">
                  {PROJECTS[1].tagline}
                </p>
                <div className="pt-2">
                  <Link
                    to={`/projects/${PROJECTS[1].slug}`}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-luxe-gold hover:text-white transition-colors"
                  >
                    View Project <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 3 & 4 Cards */}
            {PROJECTS.slice(2, 4).map((proj) => (
              <div key={proj.id} className="lg:col-span-6 group relative rounded-3xl overflow-hidden border border-white/10 min-h-[380px] flex flex-col justify-end p-8 shadow-2xl bg-obsidian-900">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-1000"
                  style={{ backgroundImage: `url(${proj.heroImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/70 to-transparent" />

                <div className="relative z-10 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-white/15 text-white text-[10px] uppercase font-bold tracking-widest">
                      {proj.category}
                    </span>
                    <span className="text-xs font-mono text-neutral-300 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-luxe-gold" /> {proj.location}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-white font-medium">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-neutral-300 font-light line-clamp-2">
                    {proj.tagline}
                  </p>
                  <div className="pt-2">
                    <Link
                      to={`/projects/${proj.slug}`}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-luxe-gold hover:text-white transition-colors"
                    >
                      View Case Study <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05: Before & After Layered Light Comparison */}
      <BeforeAfterSlider />

      {/* 06: Interactive Lighting Simulation & Studio Visit Experience */}
      <LightingSimulator />

      {/* 07: Space-by-Space Lighting Explorer */}
      <SpaceExplorer />

      {/* 08: 7-Stage Turnkey Process Section */}
      <section className="relative py-28 bg-obsidian-950 border-t border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <span className="text-xs uppercase tracking-[0.25em] text-luxe-gold font-mono">
              Flawless Turnkey Execution
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white uppercase tracking-wide">
              The Trade House <span className="gold-gradient-text italic font-normal">Method</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
              We eliminate on-site ambiguity through our rigorous 7-stage architectural lighting lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.slice(0, 4).map((step) => (
              <div key={step.step} className="p-8 rounded-3xl bg-obsidian-900/60 border border-white/5 space-y-4 relative group hover:border-luxe-gold/30 transition-all">
                <span className="font-serif text-3xl text-luxe-gold font-light">
                  {step.step}
                </span>
                <span className="block text-[10px] tracking-[0.2em] uppercase font-mono text-neutral-400">
                  {step.phase}
                </span>
                <h3 className="font-serif text-xl text-white font-medium">
                  {step.title}
                </h3>
                <p className="text-xs text-neutral-300 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {PROCESS_STEPS.slice(4, 7).map((step) => (
              <div key={step.step} className="p-8 rounded-3xl bg-obsidian-900/60 border border-white/5 space-y-4 relative group hover:border-luxe-gold/30 transition-all">
                <span className="font-serif text-3xl text-luxe-gold font-light">
                  {step.step}
                </span>
                <span className="block text-[10px] tracking-[0.2em] uppercase font-mono text-neutral-400">
                  {step.phase}
                </span>
                <h3 className="font-serif text-xl text-white font-medium">
                  {step.title}
                </h3>
                <p className="text-xs text-neutral-300 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 09: Studio / Showroom Preview in Kalloor, Kochi */}
      <section className="relative py-28 bg-obsidian-900/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-luxe-gold font-mono">
                Experience Centre • Kalloor, Kochi
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-white uppercase tracking-wide leading-tight">
                Experience Light <br />
                <span className="gold-gradient-text italic font-normal">Before You Choose It.</span>
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                Step into our architectural lighting laboratory in Kalloor, Kochi. Test beam spreads in our dark simulation studio, evaluate high CRI 98 color rendering on your interior material samples, and explore automated smart scene keypads.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-luxe-gold shrink-0" />
                  <span>Interactive Dark Room lighting simulator</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-luxe-gold shrink-0" />
                  <span>Side-by-side CCT (1800K - 6500K) color lab</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-luxe-gold shrink-0" />
                  <span>Architectural magnetic track &amp; trimless gallery</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/studio"
                  className="px-6 py-3.5 rounded-full bg-luxe-gold text-obsidian-950 text-xs font-bold uppercase tracking-widest hover:bg-luxe-champagne transition-all shadow-md shadow-black/30"
                >
                  Visit Our Studio
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3.5 rounded-full bg-white/5 border border-white/15 text-xs font-medium uppercase tracking-widest text-neutral-200 hover:text-luxe-gold hover:border-luxe-gold/40 transition-all"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-[480px] group">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
                alt="Trade House Lighting Experience Studio Kalloor Kochi"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-obsidian-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] tracking-widest uppercase font-mono text-luxe-gold">
                    Location
                  </span>
                  <p className="text-xs font-medium text-white">
                    Kalloor, Kochi, Kerala 682017
                  </p>
                </div>
                <span className="text-xs font-mono text-emerald-400">Opening Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10: Client Testimonials */}
      <section className="relative py-24 bg-obsidian-950 border-t border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-luxe-gold font-mono">
              Architectural Trust
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white uppercase tracking-wide">
              What Designers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-obsidian-900/70 border border-white/5 space-y-6 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-neutral-300 font-light italic leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="border-t border-white/10 pt-4">
                  <h4 className="font-serif text-lg text-white font-medium">
                    {t.client}
                  </h4>
                  <p className="text-[11px] text-luxe-gold font-mono">
                    {t.role}
                  </p>
                  <p className="text-[11px] text-neutral-500 mt-0.5">
                    {t.project}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11: Editorial Journal & Knowledge Section */}
      <section className="relative py-28 bg-obsidian-900/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-luxe-gold font-mono">
                Editorial &amp; Insights
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-white uppercase tracking-wide">
                Architectural Journal
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base max-w-xl font-light">
                Guides, photometrics, and lighting strategies for architects and discerning homeowners.
              </p>
            </div>

            <Link
              to="/journal"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-luxe-gold hover:text-white transition-colors self-start md:self-auto"
            >
              Read Full Journal <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {JOURNAL_ARTICLES.slice(0, 3).map((article) => (
              <Link
                key={article.slug}
                to={`/journal/${article.slug}`}
                className="group rounded-3xl overflow-hidden bg-obsidian-900 border border-white/5 hover:border-luxe-gold/30 transition-all duration-300 flex flex-col"
              >
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-obsidian-950/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-luxe-gold uppercase tracking-wider">
                    {article.category}
                  </div>
                </div>
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-neutral-400">
                      {article.date} • {article.readTime}
                    </span>
                    <h3 className="font-serif text-xl text-white font-medium group-hover:text-luxe-champagne transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-xs text-neutral-400 font-light line-clamp-2">
                      {article.summary}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-luxe-gold font-mono font-medium">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 12: Grand High-Conversion Final CTA */}
      <section className="relative py-32 bg-obsidian-950 border-t border-white/10 overflow-hidden text-center">
        {/* Ambient Radial Spotlight - Subtle, Soft Ivory Warmth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-radial-glow from-white/[0.06] via-luxe-gold/[0.03] to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-mono">
            Begin Your Lighting Journey
          </span>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-white uppercase tracking-tight leading-tight">
            Ready to change <br />
            <span className="gold-gradient-text italic font-normal">the way your space feels?</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
            Tell us about your space. We'll help you discover what the right light can do for your architecture, mood, and daily life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/start-a-project"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-3.5 rounded-full bg-gradient-to-r from-luxe-gold to-luxe-bronze text-obsidian-950 text-xs font-semibold uppercase tracking-[0.14em] shadow-lg shadow-black/40 hover:brightness-105 active:scale-[0.98] transition-all duration-200"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/studio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-obsidian-900/80 border border-white/15 text-neutral-200 hover:text-white hover:border-white/30 text-xs font-medium uppercase tracking-[0.14em] transition-all"
            >
              Visit Our Studio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
