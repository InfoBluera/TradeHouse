import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { BRAND } from '../data/siteData';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu upon route change
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Main navigation menu items
  const navLinks = [
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Lighting', href: '/lighting' },
    { name: 'Smart Lighting', href: '/smart-lighting' },
    { name: 'Studio', href: '/studio' },
    { name: 'About', href: '/about' },
  ];

  const isContactActive = location.pathname === '/contact';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-obsidian-950/90 backdrop-blur-md border-b border-white/[0.08] py-2.5 sm:py-3 shadow-xl shadow-black/40'
          : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-3.5 sm:py-4 lg:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11 gap-2 sm:gap-4">
          {/* Brand Logo */}
          <Link to="/" className="group flex items-center gap-2.5 sm:gap-3 shrink-0">
            <div className="relative w-8 h-8 rounded-full border border-white/15 flex items-center justify-center bg-obsidian-900 group-hover:border-luxe-gold/60 transition-colors duration-300">
              <span className="w-2 h-2 rounded-full bg-luxe-gold/90 group-hover:scale-110 transition-transform duration-300"></span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-serif text-lg sm:text-xl font-light tracking-[0.22em] text-[#F7F5F0] group-hover:text-luxe-champagne transition-colors leading-tight">
                TRADE HOUSE
              </span>
              <span className="text-[8.5px] tracking-[0.28em] text-neutral-400 font-sans uppercase font-medium mt-0.5">
                Lighting Studio • Kochi
              </span>
            </div>
          </Link>

          {/* Desktop Navigation & Actions: Optimized to prevent congestion across all desktop & laptop viewports */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-7 shrink-0">
            {/* Nav Menu Items with refined typography, responsive spacing, and letter-spacing */}
            <nav className="flex items-center gap-3.5 xl:gap-5.5">
              {navLinks.map((item) => {
                const isActive = location.pathname === item.href || (item.href !== '/' && location.pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`inline-flex items-center text-[11.5px] xl:text-[12px] tracking-[0.11em] xl:tracking-[0.14em] uppercase font-medium transition-colors duration-200 relative h-9 px-1 whitespace-nowrap ${
                      isActive
                        ? 'text-luxe-gold font-semibold'
                        : 'text-neutral-300 hover:text-white'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="absolute bottom-1 left-1 right-1 h-[1.5px] bg-luxe-gold/80 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Subtle Divider */}
            <div className="h-4 w-px bg-white/15 shrink-0 mx-0.5" aria-hidden="true" />

            {/* Right Action Buttons: Consistent height (h-9), perfectly balanced spacing */}
            <div className="flex items-center gap-2.5 xl:gap-3 shrink-0">
              {/* Contact Button */}
              <Link
                to="/contact"
                className={`h-9 px-3.5 xl:px-4 rounded-full border text-[11.5px] xl:text-[12px] font-medium tracking-[0.11em] xl:tracking-[0.14em] uppercase transition-all duration-200 inline-flex items-center justify-center whitespace-nowrap ${
                  isContactActive
                    ? 'border-luxe-gold text-luxe-gold bg-luxe-gold/10'
                    : 'border-white/20 hover:border-luxe-gold/40 text-neutral-200 hover:text-white bg-white/[0.03] hover:bg-white/[0.08]'
                }`}
              >
                Contact
              </Link>

              {/* Start Your Project Button */}
              <Link
                to="/start-a-project"
                className="h-9 px-4 xl:px-5 rounded-full bg-gradient-to-r from-luxe-gold to-luxe-bronze text-obsidian-950 text-[11.5px] xl:text-[12px] font-semibold tracking-[0.11em] xl:tracking-[0.14em] uppercase hover:brightness-105 active:scale-[0.98] transition-all duration-200 inline-flex items-center justify-center gap-1.5 shadow-sm shadow-black/30 whitespace-nowrap"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Mobile Action Buttons & Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-2.5 lg:hidden shrink-0">
            <Link
              to="/contact"
              className={`h-8 px-3 rounded-full border text-[10.5px] font-medium tracking-[0.1em] uppercase transition-all inline-flex items-center justify-center ${
                isContactActive
                  ? 'border-luxe-gold text-luxe-gold bg-luxe-gold/10'
                  : 'border-white/20 text-neutral-300 hover:text-white bg-white/[0.03]'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/start-a-project"
              className="h-8 px-3.5 rounded-full bg-luxe-gold text-obsidian-950 text-[10.5px] font-semibold tracking-[0.1em] uppercase inline-flex items-center justify-center shadow-sm whitespace-nowrap"
            >
              Start
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-8 w-8 rounded-lg bg-obsidian-900/90 border border-white/15 text-neutral-200 hover:text-white flex items-center justify-center focus:outline-none ml-0.5"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[55px] sm:top-[57px] bg-obsidian-950/98 backdrop-blur-2xl border-b border-white/10 shadow-2xl px-6 py-7 min-h-[calc(100vh-57px)] flex flex-col justify-between overflow-y-auto animate-fade-in">
          <div className="space-y-4">
            <p className="text-[10px] tracking-[0.25em] uppercase text-neutral-400 font-mono">
              Explore Trade House
            </p>
            <div className="grid grid-cols-1 gap-1 pt-1">
              {navLinks.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center justify-between py-3 border-b border-white/5 text-xs tracking-[0.14em] uppercase transition-colors ${
                      isActive ? 'text-luxe-gold font-semibold' : 'text-neutral-300 hover:text-white'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-50" />
                  </Link>
                );
              })}
              <Link
                to="/contact"
                className={`flex items-center justify-between py-3 border-b border-white/5 text-xs tracking-[0.14em] uppercase transition-colors ${
                  isContactActive ? 'text-luxe-gold font-semibold' : 'text-neutral-300 hover:text-white'
                }`}
              >
                <span>Contact Studio</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-50" />
              </Link>
            </div>
          </div>

          <div className="pt-6 space-y-3.5">
            <Link
              to="/start-a-project"
              className="w-full h-11 flex items-center justify-center gap-2 rounded-full bg-luxe-gold text-obsidian-950 text-xs font-bold tracking-[0.14em] uppercase shadow-md shadow-black/40"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="flex items-center justify-between text-xs text-neutral-400 pt-2 border-t border-white/10">
              <span className="text-[11px]">{BRAND.location}</span>
              <a href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-luxe-gold text-[11px] hover:underline font-mono">
                WhatsApp Studio
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
