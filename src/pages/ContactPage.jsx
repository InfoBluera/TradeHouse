import React, { useState } from 'react';
import { BRAND } from '../data/siteData';
import { MapPin, Phone, Mail, Clock, MessageSquare, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-obsidian-950 text-[#F4F3EE] pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-luxe-gold/10 border border-luxe-gold/30 text-luxe-gold text-xs uppercase tracking-[0.25em] font-mono">
            <Sparkles className="w-3.5 h-3.5" /> Direct Studio Connect
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-tight text-white">
            Connect with <span className="gold-gradient-text italic font-normal">Trade House</span>
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
            Whether you are an architect working on a new blueprint, an interior designer seeking luminaire curation, or a homeowner embarking on a residence in Kerala, we welcome your conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Studio Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-obsidian-900 border border-white/10 space-y-6 shadow-2xl">
              <span className="text-xs uppercase font-mono tracking-widest text-luxe-gold block">
                Studio Location &amp; Hours
              </span>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-4 h-4 text-luxe-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm">Trade House Experience Studio</strong>
                    <span className="text-neutral-400">
                      [SHOWROOM ADDRESS: Kalloor, Kochi, Kerala 682017, India]
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-white/5 pt-3">
                  <Clock className="w-4 h-4 text-luxe-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm">Studio Hours</strong>
                    <span className="text-neutral-400">{BRAND.openingHours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-white/5 pt-3">
                  <Phone className="w-4 h-4 text-luxe-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm">Studio Phone</strong>
                    <a href={`tel:${BRAND.phone}`} className="text-neutral-300 hover:text-luxe-gold transition-colors">
                      {BRAND.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-white/5 pt-3">
                  <Mail className="w-4 h-4 text-luxe-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm">Email Inquiries</strong>
                    <a href={`mailto:${BRAND.email}`} className="text-neutral-300 hover:text-luxe-gold transition-colors">
                      {BRAND.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action Card */}
            <div className="p-8 rounded-3xl bg-emerald-950/20 border border-emerald-500/30 space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider">
                <MessageSquare className="w-4 h-4" /> Instant Response
              </div>
              <h3 className="font-serif text-2xl text-white">
                Chat Directly on WhatsApp
              </h3>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                Connect directly with our lighting specialists for quick floorplan evaluations and technical questions.
              </p>
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-obsidian-950 text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/20"
              >
                Open WhatsApp Concierge <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-obsidian-900 border border-luxe-gold/25 shadow-2xl">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-14 h-14 rounded-full bg-luxe-gold/20 border border-luxe-gold flex items-center justify-center mx-auto text-luxe-gold">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-white">Message Transmitted</h3>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto font-light leading-relaxed">
                  Thank you, {formData.name}. Our architectural lighting team in Kochi has received your note and will reply promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-luxe-gold font-mono uppercase tracking-wider underline pt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs uppercase font-mono tracking-widest text-luxe-gold">
                    Write to Our Design Team
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white mt-1">
                    Send an Inquiry
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase text-neutral-300">Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-obsidian-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-luxe-gold/60"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase text-neutral-300">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-obsidian-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-luxe-gold/60"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase text-neutral-300">Phone</label>
                    <input
                      type="tel"
                      placeholder="+91 98460 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-obsidian-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-luxe-gold/60"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase text-neutral-300">Inquiry Type</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-obsidian-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-luxe-gold/60"
                    >
                      <option>General Inquiry</option>
                      <option>Residential Villa Project</option>
                      <option>Commercial / Hospitality Project</option>
                      <option>Architect / Designer Partnership</option>
                      <option>Showroom Visit / Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase text-neutral-300">Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your project requirements, location in Kerala, or architectural questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-obsidian-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-luxe-gold/60"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-luxe-gold text-obsidian-950 text-xs font-bold uppercase tracking-widest hover:bg-luxe-champagne transition-all shadow-lg shadow-luxe-gold/25 flex items-center justify-center gap-2"
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
