import React from 'react';
import { MessageSquare } from 'lucide-react';
import { BRAND } from '../data/siteData';
import { trackWhatsAppClick } from '../utils/analytics';

export default function WhatsAppFloatingCTA() {
  return (
    <a
      href={BRAND.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        trackWhatsAppClick({
          link_location: 'floating_button',
          button_text: 'Chat with Trade House',
          destination: 'whatsapp',
        });
      }}
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 px-4 py-3 rounded-full bg-obsidian-900/90 hover:bg-obsidian-850 border border-emerald-500/40 text-white backdrop-blur-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:border-emerald-400"
      aria-label="Chat with Trade House Lighting Studio on WhatsApp"
    >
      <div className="relative">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 absolute -top-0.5 -right-0.5 animate-ping" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 absolute -top-0.5 -right-0.5" />
        <MessageSquare className="w-5 h-5 text-emerald-400" />
      </div>
      <div className="hidden sm:flex flex-col text-left">
        <span className="text-[10px] tracking-widest uppercase text-neutral-400 font-mono">
          Kochi Studio Concierge
        </span>
        <span className="text-xs font-semibold text-neutral-100 group-hover:text-emerald-300 transition-colors">
          Chat with Trade House
        </span>
      </div>
    </a>
  );
}
