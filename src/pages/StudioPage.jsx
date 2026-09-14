import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Phone, Mail, Calendar, Sparkles, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';
import { BRAND } from '../data/siteData';

export default function StudioPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredDate: '',
    projectType: 'Luxury Villa / Residence',
    notes: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const experienceZones = [
    {
      title: "The Dark Room Simulation Lab",
      desc: "Step inside a light-tight black box to evaluate narrow 10° spot optics versus wide wall washes on real stone, laterite, and wood veneers."
    },
    {
      title: "Color Spectrum & CCT Comparison Bar",
      desc: "Compare low CRI 80 commercial LEDs against high CRI 98 museum engines side-by-side to see how genuine wood grain comes alive."
    },
    {
      title: "Architectural Profile & Magnetic Gallery",
      desc: "Inspect live 48V low-voltage magnetic track channels, seamless trimless plaster-in downlights, and dot-free linear profiles."
    },
    {
      title: "Smart Automation Keypad Lounge",
      desc: "Interact with tactile solid-milled brass and matte black scene keypads, testing instant scene recall and smooth 0.1% dimming curves."
    }
  ];

  return (
    <div className="bg-obsidian-950 text-[#F4F3EE] pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-luxe-gold/10 border border-luxe-gold/30 text-luxe-gold text-xs uppercase tracking-[0.25em] font-mono">
            <Sparkles className="w-3.5 h-3.5" /> Kochi Experience Studio
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-tight text-white">
            Experience Light <br />
            <span className="gold-gradient-text italic font-normal">Before You Choose It.</span>
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
            Our upcoming studio in Kalloor, Kochi is designed as an architectural laboratory where architects, interior designers, and homeowners experience light physically in space.
          </p>
        </div>

        {/* Showroom Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-16">
          <div className="lg:col-span-8 rounded-3xl overflow-hidden border border-white/10 h-[450px] relative group shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85"
              alt="Trade House Experience Studio Kalloor Kochi Interior"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-obsidian-950/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-luxe-gold">Experience Center</span>
                <p className="text-sm font-medium text-white">Main Architectural Gallery &amp; Simulation Zone</p>
              </div>
              <span className="text-xs font-mono text-emerald-400">Kalloor, Kochi</span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="rounded-3xl overflow-hidden border border-white/10 h-[210px] relative group shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=85"
                alt="Decorative Chandelier and Material Lounge"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-3 left-4 text-xs font-medium text-white">
                Bespoke Decorative &amp; Material Studio
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-white/10 h-[210px] relative group shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=85"
                alt="Smart Automation Demo Lab"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-3 left-4 text-xs font-medium text-white">
                Intelligent Keypad &amp; DALI-2 Demonstration
              </div>
            </div>
          </div>
        </div>

        {/* Experience Zones */}
        <div className="my-24 space-y-12">
          <div className="border-b border-white/10 pb-6">
            <span className="text-xs uppercase tracking-[0.25em] text-luxe-gold font-mono">
              Dedicated Walkthrough Zones
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white mt-1">
              What You Will Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {experienceZones.map((zone, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-obsidian-900 border border-white/5 space-y-4">
                <span className="font-mono text-xs text-luxe-gold font-semibold uppercase tracking-wider block">
                  Zone 0{idx + 1}
                </span>
                <h3 className="font-serif text-2xl text-white font-medium">
                  {zone.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  {zone.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Studio Booking & Location Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-20">
          {/* Location info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-luxe-gold font-mono">
                Studio Location
              </span>
              <h2 className="font-serif text-3xl text-white">
                Kalloor, Kochi
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                Conveniently situated in Kalloor with dedicated client parking and private architectural consultation suites.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-obsidian-900 border border-white/10 space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-luxe-gold shrink-0 mt-0.5" />
                <span>
                  <strong>Trade House Studio</strong><br />
                  [SHOWROOM ADDRESS: Kalloor, Kochi, Kerala 682017, India]
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-luxe-gold shrink-0" />
                <span>{BRAND.openingHours}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-luxe-gold shrink-0" />
                <span>{BRAND.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-luxe-gold shrink-0" />
                <span>{BRAND.email}</span>
              </div>
            </div>

            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 p-4 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider hover:bg-emerald-500/20 transition-all"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp Studio Concierge
            </a>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-obsidian-900 border border-luxe-gold/25 shadow-2xl">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 rounded-full bg-luxe-gold/20 border border-luxe-gold flex items-center justify-center mx-auto text-luxe-gold">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-white">Walkthrough Requested</h3>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto font-light leading-relaxed">
                  Thank you, {formData.name || 'Valued Client'}. Our lighting design team in Kalloor, Kochi will contact you shortly to confirm your private studio consultation time.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs text-luxe-gold font-mono uppercase tracking-wider underline pt-4"
                >
                  Book Another Session
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs uppercase font-mono tracking-widest text-luxe-gold">
                    Private Consultation
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white mt-1">
                    Book a Studio Walkthrough
                  </h3>
                  <p className="text-xs text-neutral-400 font-light mt-1">
                    Bring your architectural floorplans and interior material samples for a live photometric demonstration.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase text-neutral-300">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ar. Rahul Varma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-obsidian-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-luxe-gold/60"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase text-neutral-300">Contact Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98460 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-obsidian-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-luxe-gold/60"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase text-neutral-300">Email Address</label>
                    <input
                      type="email"
                      placeholder="your.name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-obsidian-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-luxe-gold/60"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase text-neutral-300">Preferred Date</label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-obsidian-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-luxe-gold/60"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase text-neutral-300">Project Type</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-obsidian-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-luxe-gold/60"
                  >
                    <option>Luxury Villa / Residence</option>
                    <option>Penthouse / Apartment</option>
                    <option>Boutique Hotel / Hospitality</option>
                    <option>Retail Boutique / Showroom</option>
                    <option>Architectural Collaboration</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase text-neutral-300">Notes / Floorplan status</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about the stage of your project (e.g. electrical conduit stage, ceiling framing, renovation)..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-obsidian-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-luxe-gold/60"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-luxe-gold text-obsidian-950 text-xs font-bold uppercase tracking-widest hover:bg-luxe-champagne transition-all shadow-lg shadow-luxe-gold/25 flex items-center justify-center gap-2"
                >
                  <span>Confirm Studio Walkthrough Request</span>
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
