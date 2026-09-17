import React from 'react';
import { Link } from 'react-router-dom';
import SmartSceneSimulator from '../components/SmartSceneSimulator';
import { 
  Sliders, 
  Sparkles, 
  Smartphone, 
  Sun, 
  Moon, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Activity,
  Cpu,
  Fingerprint
} from 'lucide-react';

export default function SmartLightingPage() {
  const ecosystems = [
    {
      name: "Casambi Bluetooth Mesh",
      type: "Wireless Architectural Protocol",
      desc: "Robust, enterprise-grade encrypted wireless mesh network requiring zero rewiring. Perfect for heritage properties and retrofit luxury residences.",
      features: ["Flicker-free 0.1% dimming", "Dynamic circadian schedules", "Multi-user permissions", "Encrypted Bluetooth 5.0"]
    },
    {
      name: "DALI-2 / KNX Wired Systems",
      type: "Hardwired Building Standard",
      desc: "The gold standard for new construction luxury villas. Individual luminaire addressability, bidirectional status reporting, and infinite scalability.",
      features: ["Decentralized intelligence", "Direct energy monitoring", "Custom engraved keypads", "Seamless HVAC & blind sync"]
    },
    {
      name: "Human-Centric Tunable White",
      type: "Circadian Health & Well-being",
      desc: "Dynamically tracks the natural solar cycle from 1800K warm candlelight at dusk to 4000K energizing morning sunlight.",
      features: ["Melatonin cycle preservation", "High-CRI across the entire Kelvin spectrum", "Automatic astronomical sunset trigger"]
    }
  ];

  return (
    <div className="bg-obsidian-950 text-[#F4F3EE] pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-luxe-gold/10 border border-luxe-gold/30 text-luxe-gold text-xs uppercase tracking-[0.25em] font-mono">
            <Cpu className="w-3.5 h-3.5" /> Intelligent Automation
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-tight text-white">
            Smart <span className="gold-gradient-text italic font-normal">Lighting</span>
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
            Smart lighting is not about confusing smartphone apps or gimmicky colors. It is about quiet, intuitive harmony: one touch to transform an entire floor into an intimate dinner setting, and invisible sensors guiding midnight pathways.
          </p>
        </div>
      </div>

      {/* Interactive Scene Simulator */}
      <SmartSceneSimulator />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pillars of Intelligent Control */}
        <div className="my-24 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-luxe-gold font-mono">
              Ecosystem Standards
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white">
              Hardwired &amp; Wireless Intelligence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ecosystems.map((eco, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-obsidian-900/80 border border-white/10 space-y-6 flex flex-col justify-between shadow-2xl">
                <div className="space-y-4">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-luxe-gold block">
                    {eco.type}
                  </span>
                  <h3 className="font-serif text-2xl text-white font-medium">
                    {eco.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                    {eco.desc}
                  </p>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  {eco.features.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-xs text-neutral-200 font-light">
                      <CheckCircle2 className="w-4 h-4 text-luxe-gold shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Keypad & Interface Section */}
        <div className="p-10 sm:p-14 rounded-3xl bg-obsidian-900/60 border border-white/10 my-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-luxe-gold font-mono">
                Tactile Craftsmanship
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-light">
                Designer Metallic Keypads <br />
                <span className="gold-gradient-text italic font-normal">Replace Switch Clutter</span>
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                Replace unsightly rows of 8 to 12 plastic rocker switches with a single, elegant brushed brass or matte charcoal keypad. Laser-engraved with your personalized scenes: <em>Enter, Entertain, Relax, All Off</em>.
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs font-mono text-neutral-200">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  Solid Milled Brass Finishes
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  Soft Backlit Scene Labels
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  Astronomical Time Clocks
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  Integrated Temperature Sensors
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/start-a-project"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-luxe-gold text-obsidian-950 text-xs font-bold uppercase tracking-wider hover:bg-luxe-champagne transition-all"
                >
                  Plan Smart Lighting For Your Home <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 h-[400px] rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=85"
                alt="Smart Lighting Automation Keypad and Mobile Integration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
