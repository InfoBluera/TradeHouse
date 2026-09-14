import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Phone, MapPin, Clock, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';
import { BRAND, SERVICES } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="relative bg-obsidian-950 text-neutral-300 border-t border-white/10 pt-20 pb-12 overflow-hidden">
      {/* Background ambient lighting glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-radial-glow from-luxe-gold/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Brand Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-6 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-luxe-gold/50 flex items-center justify-center bg-obsidian-900">
                <span className="w-2.5 h-2.5 rounded-full bg-luxe-gold shadow-[0_0_12px_#E5B869]" />
              </div>
              <span className="font-serif text-2xl tracking-[0.25em] text-[#F7F5F0]">
                TRADE HOUSE
              </span>
            </Link>
            <p className="font-serif text-2xl sm:text-3xl text-neutral-200 font-light italic leading-snug max-w-md">
              "We believe great lighting should be felt before it is noticed."
            </p>
            <p className="text-sm text-neutral-400 font-light max-w-lg leading-relaxed">
              Trade House is an architectural lighting consultancy and luxury experience studio in Kalloor, Kochi. We design, curate, and execute glare-free lighting environments for modern luxury residences, villas, commercial atriums, and hospitality spaces across Kerala.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/start-a-project"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-luxe-gold text-obsidian-950 text-xs font-semibold uppercase tracking-wider hover:bg-luxe-champagne transition-all shadow-lg shadow-luxe-gold/15"
              >
                Start Your Project <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-200 hover:text-luxe-gold hover:border-luxe-gold/30 transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" /> WhatsApp Studio
              </a>
            </div>
          </div>

          {/* Quick Navigation Columns */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-luxe-gold font-mono font-medium">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase font-light">
              <li><Link to="/projects" className="hover:text-luxe-gold transition-colors">Projects</Link></li>
              <li><Link to="/services" className="hover:text-luxe-gold transition-colors">Services</Link></li>
              <li><Link to="/lighting" className="hover:text-luxe-gold transition-colors">Lighting Gallery</Link></li>
              <li><Link to="/smart-lighting" className="hover:text-luxe-gold transition-colors">Smart Automation</Link></li>
              <li><Link to="/studio" className="hover:text-luxe-gold transition-colors">Kochi Studio</Link></li>
              <li><Link to="/about" className="hover:text-luxe-gold transition-colors">About Story</Link></li>
              <li><Link to="/journal" className="hover:text-luxe-gold transition-colors">Journal & Guides</Link></li>
              <li><Link to="/contact" className="hover:text-luxe-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-luxe-gold font-mono font-medium">
              Studio & Contact
            </h4>
            <div className="space-y-3.5 text-xs text-neutral-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-luxe-gold shrink-0 mt-0.5" />
                <span>
                  <strong>Trade House Experience Studio</strong><br />
                  Kalloor, Kochi, Kerala 682017, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-luxe-gold shrink-0" />
                <span>{BRAND.openingHours}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-luxe-gold shrink-0" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-luxe-gold transition-colors">
                  {BRAND.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-luxe-gold shrink-0" />
                <a href={`tel:${BRAND.phone}`} className="hover:text-luxe-gold transition-colors">
                  {BRAND.phone}
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-obsidian-900/80 border border-white/5 space-y-2 mt-4">
              <p className="text-[11px] text-luxe-champagne flex items-center gap-1.5 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-luxe-gold" /> Architectural Consultations
              </p>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Book a dedicated 1-on-1 session with our senior lighting designers at our Kalloor experience centre.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400 tracking-wider">
          <p>© {new Date().getFullYear()} TRADE HOUSE. All rights reserved. Architectural Lighting Consultants — Kochi, Kerala.</p>
          <div className="flex items-center space-x-6">
            <span>DIALux Certified Design</span>
            <span>•</span>
            <span>CRI 97+ Standard</span>
            <span>•</span>
            <Link to="/contact" className="hover:text-luxe-gold transition-colors">Studio Location</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
