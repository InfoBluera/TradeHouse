import React, { useState } from 'react';
import { 
  Home, 
  Building2, 
  Store, 
  UtensilsCrossed, 
  Briefcase, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Clock, 
  MapPin, 
  Maximize2, 
  Sliders, 
  Send, 
  MessageSquare 
} from 'lucide-react';
import { BRAND } from '../data/siteData';

export default function StartAProjectPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [projectType, setProjectType] = useState('Luxury Villa');
  const [servicesNeeded, setServicesNeeded] = useState(['Lighting Design', 'Architectural Lighting']);
  const [location, setLocation] = useState('Kochi, Kerala');
  const [projectScale, setProjectScale] = useState('Premium / Luxury (5,000+ sq.ft)');
  const [timeline, setTimeline] = useState('1 – 3 months');
  const [clientDetails, setClientDetails] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    isArchitectOrDesigner: false,
  });

  const spaceOptions = [
    { label: 'Luxury Villa', icon: Home, desc: 'Independent villa or estate' },
    { label: 'Penthouse / Apt', icon: Building2, desc: 'Luxury high-rise residence' },
    { label: 'Home Renovation', icon: Sparkles, desc: 'Lighting modernization' },
    { label: 'Boutique Retail', icon: Store, desc: 'Showroom or flagship salon' },
    { label: 'Restaurant / Cafe', icon: UtensilsCrossed, desc: 'Atmospheric dining' },
    { label: 'Commercial HQ', icon: Briefcase, desc: 'Corporate office or atrium' },
  ];

  const serviceOptions = [
    'Lighting Design & Concept',
    'Architectural Fixture Supply',
    'Decorative Statement Fixtures',
    'Smart Lighting & Tunable White',
    'Home Automation Keypads',
    'Turnkey Installation & Commissioning',
    'Site Photometric Consultation'
  ];

  const scaleOptions = [
    'Boutique Space (< 2,500 sq.ft)',
    'Medium Residence (2,500 – 5,000 sq.ft)',
    'Premium / Luxury (5,000 – 10,000 sq.ft)',
    'Grand Estate / Commercial (10,000+ sq.ft)',
    'Not Sure / In Blueprint Phase'
  ];

  const timelineOptions = [
    'Immediately (Site ready for conduits)',
    '1 – 3 months (Ceiling & framing phase)',
    '3 – 6 months (Architectural planning)',
    '6+ months (Initial concept)',
    'Just exploring possibilities'
  ];

  const toggleService = (srv) => {
    if (servicesNeeded.includes(srv)) {
      setServicesNeeded(servicesNeeded.filter((s) => s !== srv));
    } else {
      setServicesNeeded([...servicesNeeded, srv]);
    }
  };

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  // Generate WhatsApp prefilled message string
  const generateWhatsAppMessage = () => {
    const text = `*New Project Enquiry — Trade House Lighting Studio*\n\n` +
      `*Space:* ${projectType}\n` +
      `*Services:* ${servicesNeeded.join(', ')}\n` +
      `*Location:* ${location}\n` +
      `*Scale:* ${projectScale}\n` +
      `*Timeline:* ${timeline}\n` +
      `*Client:* ${clientDetails.name} (${clientDetails.phone})\n` +
      `*Email:* ${clientDetails.email}\n` +
      `*Brief:* ${clientDetails.message || 'None'}`;
    return `https://wa.me/919846000000?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-obsidian-950 text-[#F4F3EE] pt-32 pb-28 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Step Indicator Header */}
        <div className="space-y-4 mb-12 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-luxe-gold/10 border border-luxe-gold/30 text-luxe-gold text-xs uppercase tracking-[0.25em] font-mono">
            <Sliders className="w-3.5 h-3.5" /> Guided Project Concierge
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-light text-white uppercase tracking-tight">
            Start Your <span className="gold-gradient-text italic font-normal">Project</span>
          </h1>
          <p className="text-neutral-400 text-xs sm:text-sm font-light">
            Step {currentStep} of 6 • Tell us about your architectural volume and design aspirations.
          </p>

          {/* Progress Bar */}
          <div className="w-full h-1.5 rounded-full bg-obsidian-900 border border-white/5 overflow-hidden mt-6">
            <div
              className="h-full bg-gradient-to-r from-luxe-gold to-luxe-bronze transition-all duration-500 rounded-full"
              style={{ width: `${(currentStep / 6) * 100}%` }}
            />
          </div>
        </div>

        {/* Wizard Card Container */}
        <div className="p-8 sm:p-14 rounded-3xl bg-obsidian-900/80 border border-white/10 shadow-2xl backdrop-blur-xl">
          {isSubmitted ? (
            /* Success State */
            <div className="text-center py-12 space-y-6">
              <div className="w-16 h-16 rounded-full bg-luxe-gold/20 border-2 border-luxe-gold flex items-center justify-center mx-auto text-luxe-gold shadow-md shadow-black/40">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-white">
                Project Scope Synthesized
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-lg mx-auto font-light leading-relaxed">
                Thank you, <strong>{clientDetails.name}</strong>. Our senior lighting design team in Kalloor, Kochi has logged your enquiry for your <strong>{projectType}</strong> in <strong>{location}</strong>.
              </p>

              {/* Summary synthesis card */}
              <div className="p-6 rounded-2xl bg-obsidian-950 border border-white/10 text-left max-w-md mx-auto text-xs space-y-2 font-mono">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-neutral-400">Typology:</span>
                  <span className="text-white">{projectType}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-neutral-400">Scale:</span>
                  <span className="text-white">{projectScale}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-neutral-400">Timeline:</span>
                  <span className="text-luxe-gold">{timeline}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-neutral-400">Services:</span>
                  <span className="text-white">{servicesNeeded.length} disciplines selected</span>
                </div>
              </div>

              {/* Direct WhatsApp Instant Dispatch */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-obsidian-950 text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/20"
                >
                  <MessageSquare className="w-4 h-4" /> Send directly via WhatsApp
                </a>
                <button
                  onClick={() => { setIsSubmitted(false); setCurrentStep(1); }}
                  className="text-xs text-neutral-400 hover:text-white uppercase font-mono tracking-wider underline py-2"
                >
                  Start Over
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* STEP 1: Space Type */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-luxe-gold">
                      Step 01 of 06
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-white">
                      What are you working on?
                    </h2>
                    <p className="text-xs text-neutral-400 font-light">
                      Select the primary architectural typology of your project.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                    {spaceOptions.map((opt) => {
                      const Icon = opt.icon;
                      const isSelected = projectType === opt.label;
                      return (
                        <button
                          key={opt.label}
                          type="button"
                          onClick={() => setProjectType(opt.label)}
                          className={`p-6 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between space-y-4 ${
                            isSelected
                              ? 'bg-white/[0.06] border-luxe-gold/70 text-white shadow-md shadow-black/40 scale-[1.01]'
                              : 'bg-obsidian-950 border-white/10 text-neutral-300 hover:border-white/20 hover:text-white'
                          }`}
                        >
                          <div className="flex items-center justify-between w-full">
                            <Icon className={`w-6 h-6 ${isSelected ? 'text-luxe-gold' : 'text-neutral-400'}`} />
                            {isSelected && <span className="w-2 h-2 rounded-full bg-luxe-gold" />}
                          </div>
                          <div>
                            <h3 className="font-serif text-lg text-white font-medium">{opt.label}</h3>
                            <p className="text-[11px] text-neutral-400 font-light mt-0.5">{opt.desc}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2: Services Needed */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-luxe-gold">
                      Step 02 of 06
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-white">
                      What services do you need?
                    </h2>
                    <p className="text-xs text-neutral-400 font-light">
                      Select all disciplines that apply to your requirements.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
                    {serviceOptions.map((srv) => {
                      const isChecked = servicesNeeded.includes(srv);
                      return (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => toggleService(srv)}
                          className={`p-4 rounded-xl text-left border text-xs font-medium transition-all flex items-center justify-between ${
                            isChecked
                              ? 'bg-white/[0.06] border-luxe-gold/60 text-white shadow-sm shadow-black/30'
                              : 'bg-obsidian-950 border-white/10 text-neutral-300 hover:border-white/20 hover:text-white'
                          }`}
                        >
                          <span>{srv}</span>
                          <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${isChecked ? 'bg-luxe-gold border-luxe-gold text-obsidian-950' : 'border-white/20'}`}>
                            {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 3: Location */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-luxe-gold">
                      Step 03 of 06
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-white">
                      Where is the project located?
                    </h2>
                    <p className="text-xs text-neutral-400 font-light">
                      We primarily serve Kochi, Ernakulam, and all districts across Kerala &amp; South India.
                    </p>
                  </div>

                  <div className="space-y-4 pt-4">
                    <div className="relative">
                      <MapPin className="w-5 h-5 text-luxe-gold absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Marine Drive Kochi, Kadavanthra, Kakkanad, Aluva, Calicut, etc."
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full bg-obsidian-950 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-luxe-gold/60"
                      />
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="text-[11px] font-mono text-neutral-500 self-center">Popular:</span>
                      {['Kalloor, Kochi', 'Kadavanthra, Kochi', 'Marine Drive, Kochi', 'Panampilly Nagar', 'Calicut', 'Trivandrum'].map((loc) => (
                        <button
                          key={loc}
                          type="button"
                          onClick={() => setLocation(loc)}
                          className="text-[11px] px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 font-mono"
                        >
                          {loc}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Project Scale */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-luxe-gold">
                      Step 04 of 06
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-white">
                      What is the approximate scale?
                    </h2>
                    <p className="text-xs text-neutral-400 font-light">
                      Helps us estimate optical fixture quantities and photometric complexity.
                    </p>
                  </div>

                  <div className="space-y-3 pt-4">
                    {scaleOptions.map((scale) => {
                      const isSelected = projectScale === scale;
                      return (
                        <button
                          key={scale}
                          type="button"
                          onClick={() => setProjectScale(scale)}
                          className={`w-full p-4 rounded-2xl text-left border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-luxe-gold/15 border-luxe-gold text-white shadow-[0_0_15px_rgba(229,184,105,0.2)]'
                              : 'bg-obsidian-950 border-white/10 text-neutral-300 hover:border-white/25 hover:text-white'
                          }`}
                        >
                          <span>{scale}</span>
                          {isSelected && <span className="w-2.5 h-2.5 rounded-full bg-luxe-gold shadow-[0_0_8px_#E5B869]" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 5: Timeline */}
              {currentStep === 5 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-luxe-gold">
                      Step 05 of 06
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-white">
                      Expected Timeline
                    </h2>
                    <p className="text-xs text-neutral-400 font-light">
                      When is electrical conduit routing or ceiling framing scheduled?
                    </p>
                  </div>

                  <div className="space-y-3 pt-4">
                    {timelineOptions.map((time) => {
                      const isSelected = timeline === time;
                      return (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setTimeline(time)}
                          className={`w-full p-4 rounded-2xl text-left border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-luxe-gold/15 border-luxe-gold text-white shadow-[0_0_15px_rgba(229,184,105,0.2)]'
                              : 'bg-obsidian-950 border-white/10 text-neutral-300 hover:border-white/25 hover:text-white'
                          }`}
                        >
                          <span>{time}</span>
                          {isSelected && <span className="w-2.5 h-2.5 rounded-full bg-luxe-gold shadow-[0_0_8px_#E5B869]" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 6: Client Details */}
              {currentStep === 6 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-luxe-gold">
                      Step 06 of 06
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-white">
                      Your Details &amp; Notes
                    </h2>
                    <p className="text-xs text-neutral-400 font-light">
                      We treat your project information with strict architectural confidentiality.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono uppercase text-neutral-300">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Thomas Kurian"
                        value={clientDetails.name}
                        onChange={(e) => setClientDetails({ ...clientDetails, name: e.target.value })}
                        className="w-full bg-obsidian-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-luxe-gold/60"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono uppercase text-neutral-300">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98460 XXXXX"
                        value={clientDetails.phone}
                        onChange={(e) => setClientDetails({ ...clientDetails, phone: e.target.value })}
                        className="w-full bg-obsidian-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-luxe-gold/60"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase text-neutral-300">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@domain.com"
                      value={clientDetails.email}
                      onChange={(e) => setClientDetails({ ...clientDetails, email: e.target.value })}
                      className="w-full bg-obsidian-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-luxe-gold/60"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase text-neutral-300">Project Brief or Special Requirements</label>
                    <textarea
                      rows={3}
                      placeholder="Double-height living room, art collection, exposed concrete, waterfront view..."
                      value={clientDetails.message}
                      onChange={(e) => setClientDetails({ ...clientDetails, message: e.target.value })}
                      className="w-full bg-obsidian-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-luxe-gold/60"
                    />
                  </div>

                  <label className="flex items-center gap-3 pt-1 text-xs text-neutral-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={clientDetails.isArchitectOrDesigner}
                      onChange={(e) => setClientDetails({ ...clientDetails, isArchitectOrDesigner: e.target.checked })}
                      className="accent-luxe-gold w-4 h-4 rounded"
                    />
                    <span>I am an Architect / Interior Designer / Contractor</span>
                  </label>
                </div>
              )}

              {/* Step Navigation Buttons */}
              <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white hover:border-white/30 transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" /> Previous
                  </button>
                ) : <div />}

                {currentStep < 6 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-luxe-gold text-obsidian-950 text-xs font-bold uppercase tracking-widest hover:bg-luxe-champagne transition-all shadow-md shadow-black/30"
                  >
                    <span>Next Step</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-luxe-gold to-luxe-bronze text-obsidian-950 text-xs font-bold uppercase tracking-widest hover:brightness-105 active:scale-[0.98] transition-all shadow-lg shadow-black/40"
                  >
                    <span>Let's Design Your Light</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
