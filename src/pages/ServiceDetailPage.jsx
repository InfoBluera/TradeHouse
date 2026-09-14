import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES, PROJECTS } from '../data/siteData';
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, Layers, ShieldCheck, Phone } from 'lucide-react';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug || s.id === slug) || SERVICES[0];

  return (
    <div className="bg-obsidian-950 text-[#F4F3EE] pt-28 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="py-6">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-luxe-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>
        </div>

        {/* Hero Card */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 min-h-[460px] flex flex-col justify-end p-8 sm:p-16 shadow-2xl bg-obsidian-900">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${service.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/70 to-obsidian-950/30" />

          <div className="relative z-10 space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-luxe-gold/20 border border-luxe-gold/40 text-[10px] font-mono uppercase tracking-widest text-luxe-gold">
              Service Discipline {service.number}
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-light uppercase tracking-tight">
              {service.title}
            </h1>
            <p className="text-sm sm:text-lg text-neutral-200 font-light leading-relaxed">
              {service.shortDesc}
            </p>
          </div>
        </div>

        {/* In-Depth Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-16">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-white">
                Detailed Discipline Overview
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                {service.fullDesc}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.2em] font-mono text-luxe-gold">
                Core Capabilities &amp; Standards
              </h3>
              <div className="space-y-3">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-obsidian-900 border border-white/5 text-xs sm:text-sm text-neutral-200">
                    <CheckCircle2 className="w-5 h-5 text-luxe-gold shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-obsidian-900 border border-luxe-gold/20 space-y-6">
              <span className="text-xs uppercase font-mono tracking-widest text-luxe-gold block">
                Discipline Summary
              </span>
              
              <div className="space-y-3 border-b border-white/10 pb-6 text-xs">
                <span className="text-neutral-400 uppercase font-mono block">Ideal Project Typology</span>
                <p className="text-white font-medium">{service.idealFor}</p>
              </div>

              <div className="space-y-3 border-b border-white/10 pb-6 text-xs">
                <span className="text-neutral-400 uppercase font-mono block">Key Deliverables</span>
                <p className="text-white font-medium">{service.deliverables}</p>
              </div>

              <Link
                to="/start-a-project"
                className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-full bg-luxe-gold text-obsidian-950 text-xs font-bold uppercase tracking-wider hover:bg-luxe-champagne transition-all shadow-lg shadow-luxe-gold/20"
              >
                Inquire for {service.title} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Support Callout */}
            <div className="p-6 rounded-3xl bg-white/5 border border-white/5 text-xs space-y-2">
              <span className="text-luxe-champagne font-semibold block">Need immediate advice?</span>
              <p className="text-neutral-400">Speak directly with our lighting engineering team in Kalloor, Kochi.</p>
              <Link to="/contact" className="text-luxe-gold inline-flex items-center gap-1 font-mono pt-1 hover:underline">
                Contact Studio &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
