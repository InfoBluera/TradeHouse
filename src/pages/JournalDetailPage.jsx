import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { JOURNAL_ARTICLES } from '../data/siteData';
import { ArrowLeft, ArrowRight, Clock, Calendar, Sparkles, BookOpen, Share2 } from 'lucide-react';

export default function JournalDetailPage() {
  const { slug } = useParams();
  const article = JOURNAL_ARTICLES.find((a) => a.slug === slug) || JOURNAL_ARTICLES[0];

  return (
    <div className="bg-obsidian-950 text-[#F4F3EE] pt-28 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="py-6">
          <Link
            to="/journal"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-luxe-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Journal
          </Link>
        </div>

        {/* Article Meta */}
        <div className="space-y-4 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-luxe-gold/10 border border-luxe-gold/30 text-[10px] font-mono uppercase tracking-widest text-luxe-gold">
            {article.category}
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-light text-white uppercase tracking-tight leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-xs font-mono text-neutral-400 pt-2 border-b border-white/10 pb-6">
            <span>Published: {article.date}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-luxe-gold" /> {article.readTime}
            </span>
            <span>•</span>
            <span>Trade House Editorial</span>
          </div>
        </div>

        {/* Feature Image */}
        <div className="rounded-3xl overflow-hidden border border-white/10 h-80 sm:h-[450px] mb-12 shadow-2xl relative">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-30" />
        </div>

        {/* Article Body */}
        <article className="prose prose-invert prose-stone max-w-none space-y-6 text-neutral-300 font-light text-base leading-relaxed">
          <p className="text-lg sm:text-xl text-neutral-200 font-serif italic border-l-2 border-luxe-gold pl-6 my-8">
            "{article.summary}"
          </p>

          <div className="space-y-6 whitespace-pre-line text-sm sm:text-base leading-loose">
            {article.content}
          </div>
        </article>

        {/* Consultation Callout in Article */}
        <div className="p-8 rounded-3xl bg-obsidian-900 border border-luxe-gold/25 my-16 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] uppercase font-mono tracking-widest text-luxe-gold">
              Planning a Project in Kochi or Kerala?
            </span>
            <h4 className="font-serif text-xl sm:text-2xl text-white">
              Consult with our Lighting Architects
            </h4>
          </div>
          <Link
            to="/start-a-project"
            className="px-6 py-3 rounded-full bg-luxe-gold text-obsidian-950 text-xs font-bold uppercase tracking-widest hover:bg-luxe-champagne transition-all shrink-0"
          >
            Start Your Project
          </Link>
        </div>

        {/* Bottom Navigation */}
        <div className="pt-8 border-t border-white/10 flex items-center justify-between">
          <Link
            to="/journal"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase text-luxe-gold hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> All Articles
          </Link>
          <Link
            to="/studio"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase text-luxe-gold hover:text-white transition-colors"
          >
            Visit Studio <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
