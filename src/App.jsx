import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloatingCTA from './components/WhatsAppFloatingCTA';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import LightingDiscoveryPage from './pages/LightingDiscoveryPage';
import SmartLightingPage from './pages/SmartLightingPage';
import StudioPage from './pages/StudioPage';
import JournalPage from './pages/JournalPage';
import JournalDetailPage from './pages/JournalDetailPage';
import ContactPage from './pages/ContactPage';
import StartAProjectPage from './pages/StartAProjectPage';
import LightingSimulatorPage from './pages/LightingSimulatorPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-obsidian-950 text-center px-4 pt-20">
      <div className="space-y-6 max-w-md">
        <span className="text-xs uppercase font-mono tracking-widest text-luxe-gold">404 • Spatial Void</span>
        <h1 className="font-serif text-4xl sm:text-5xl text-white">Space Not Found</h1>
        <p className="text-sm text-neutral-400 font-light">
          The architectural route you are seeking is shrouded in darkness or has moved.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-luxe-gold text-obsidian-950 text-xs font-bold uppercase tracking-widest hover:bg-luxe-champagne transition-all"
        >
          Return to Experience
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-obsidian-950 text-[#F4F3EE] selection:bg-luxe-gold selection:text-obsidian-950">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="/lighting" element={<LightingDiscoveryPage />} />
            <Route path="/lighting-simulator" element={<LightingSimulatorPage />} />
            <Route path="/simulator" element={<LightingSimulatorPage />} />
            <Route path="/smart-lighting" element={<SmartLightingPage />} />
            <Route path="/studio" element={<StudioPage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="/journal/:slug" element={<JournalDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/start-a-project" element={<StartAProjectPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloatingCTA />
      </div>
    </Router>
  );
}
