import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { JOURNAL_ARTICLES } from '../data/siteData';
import { Sparkles, ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';

export default function JournalPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Architects & Designers', 'Homeowners', 'Smart Technology', 'Studio & Experience'];

  const filteredArticles = JOURNAL_ARTICLES.filter((article) => {
    return activeCategory === 'All' || article.category === activeCategory;
  });

  return (
    <div className="bg-obsidian-950 text-[#F4F3EE] pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-luxe-gold/10 border border-luxe-gold/30 text-luxe-gold text-xs uppercase tracking-[0.25em] font-mono">
            <BookOpen className="w-3.5 h-3.5" /> Editorial &amp; Knowledge Hub
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-tight text-white">
            Architectural <span className="gold-gradient-text italic font-normal">Journal</span>
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
            Thought leadership, photometric fundamentals, lighting guides for tropical Kerala residences, and smart automation insights curated by Trade House.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar border-b border-white/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all duration-300 whitespace-nowrap font-medium ${
                activeCategory === cat
                  ? 'bg-luxe-gold text-obsidian-950 font-bold shadow-md shadow-black/40'
                  : 'bg-obsidian-900 border border-white/10 text-neutral-300 hover:text-white hover:border-luxe-gold/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article) => (
            <Link
              key={article.slug}
              to={`/journal/${article.slug}`}
              className="group luxe-card rounded-3xl overflow-hidden flex flex-col justify-between border border-white/10 hover:border-luxe-gold/40 transition-all duration-500 bg-obsidian-900 shadow-2xl"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/30 to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-obsidian-950/85 backdrop-blur-md border border-white/10 text-[10px] font-mono text-luxe-gold uppercase tracking-wider">
                  {article.category}
                </div>
              </div>

              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-luxe-gold" /> {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium group-hover:text-luxe-champagne transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-luxe-gold font-semibold">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
