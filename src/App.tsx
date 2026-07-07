/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Sub-components
import ServicesPanel from './components/ServicesPanel';
import SecurityReviewCTA from './components/SecurityReviewCTA';
import ProcessTimeline from './components/ProcessTimeline';
import CertificateModal from './components/CertificateModal';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FAQSection from './components/FAQSection';
import FooterSection from './components/FooterSection';
import LegalPage from './components/LegalPage';
import ContactPage from './components/ContactPage';

export default function App() {
  const [activeModal, setActiveModal] = useState<'oscp' | 'nda' | 'response' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home-section');
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const isAutoScrolling = useRef(false);
  const [currentView, setCurrentView] = useState<'home' | 'legal' | 'contact'>('home');
  const [legalTab, setLegalTab] = useState<'privacy' | 'terms' | 'security'>('privacy');
  
  // High-fidelity constant background theme: cyber video
  const bgTheme = 'custom-video';
  const customVideoUrl = 'https://assets.mixkit.co/videos/preview/mixkit-cyber-security-system-interface-with-binary-code-and-lock-34449-large.mp4';

  const glows = {
    c1: 'bg-purple-500/10',
    c2: 'bg-fuchsia-500/10',
    c3: 'bg-violet-500/10'
  };

  const navItems = [
    { id: 'home-section', label: 'Home' },
    { id: 'services-section', label: 'Services' },
    { id: 'process-section', label: 'Our Process' },
    { id: 'about-section', label: 'About' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (window.scrollY < 120 && !isAutoScrolling.current) {
        setActiveSection('home-section');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Dynamic section tracking using high-performance IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -40% 0px',
      threshold: 0.05
    };

    const observer = new IntersectionObserver((entries) => {
      if (isAutoScrolling.current) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    if (id === 'contact-section') {
      setCurrentView('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        performScroll(id);
      }, 150);
    } else {
      performScroll(id);
    }
  };

  const performScroll = (id: string) => {
    if (id === 'home-section') {
      isAutoScrolling.current = true;
      setActiveSection('home-section');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        isAutoScrolling.current = false;
      }, 1200);
      setMobileMenuOpen(false);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      isAutoScrolling.current = true;
      setActiveSection(id);
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      
      setTimeout(() => {
        isAutoScrolling.current = false;
      }, 1200);
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen theme-neon-circuit text-zinc-100 font-sans selection:bg-zinc-700 selection:text-white relative overflow-x-hidden pb-12 transition-all duration-750">

      {/* Custom Uploaded Video Background - Fixed, Object Cover to prevent any stretching */}
      {bgTheme === 'custom-video' && customVideoUrl && (
        <video
          src={customVideoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="fixed inset-0 w-full h-full object-cover pointer-events-none z-0"
        />
      )}

      {/* Decorative subtle ambient lights with smooth Apple floating animation */}
      <div className={`fixed top-0 left-1/4 w-[500px] h-[500px] ${glows.c1} rounded-full filter blur-[130px] pointer-events-none animate-glow-float-1 transition-all duration-1000`} />
      <div className={`fixed top-1/3 right-1/4 w-[400px] h-[400px] ${glows.c2} rounded-full filter blur-[130px] pointer-events-none animate-glow-float-2 transition-all duration-1000`} />
      <div className={`fixed bottom-1/4 left-1/3 w-[500px] h-[500px] ${glows.c3} rounded-full filter blur-[130px] pointer-events-none animate-glow-float-3 transition-all duration-1000`} />

      {/* FLOATING DYNAMIC CAPSULE DOCK NAVBAR */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:pt-5 pointer-events-none flex flex-col items-center">
        <motion.header 
          layout
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
          className={`pointer-events-auto flex items-center justify-between w-full transition-all duration-500 rounded-2xl md:rounded-full ${
            isScrolled 
              ? 'max-w-5xl px-4 md:px-6 py-2 bg-black/50 backdrop-blur-md border border-white/[0.1] shadow-[0_12px_40px_rgba(168,85,247,0.15)] scale-[0.98]' 
              : 'max-w-6xl px-5 md:px-8 py-2.5 bg-white/[0.03] backdrop-blur-md border border-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.2)] scale-100'
          }`}
        >
          <div className="flex items-center">
            <button 
              onClick={() => {
                if (currentView !== 'home') {
                  setCurrentView('home');
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center cursor-pointer outline-none select-none"
              id="brand-logo-trigger"
            >
              <span className="text-sm md:text-base font-black tracking-[0.2em] text-white hover:text-white/95 transition-all duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] uppercase">
                ZERO NETZ
              </span>
            </button>
          </div>

          {/* Navigation Links with fluid interactive sliding capsules */}
          <nav className="hidden md:flex items-center gap-1 p-1 bg-zinc-950/60 rounded-full border border-white/[0.04]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => setHoveredTab(item.id)}
                onMouseLeave={() => setHoveredTab(null)}
                className={`relative px-3.5 py-1.5 text-[11px] font-semibold rounded-full transition-all duration-300 outline-none select-none cursor-pointer ${
                  activeSection === item.id ? 'text-white font-semibold' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {/* Smooth hover capsule sliding background */}
                {hoveredTab === item.id && (
                  <motion.div
                    layoutId="hoverCapsule"
                    className="absolute inset-0 bg-white/[0.04] rounded-full border border-white/[0.02]"
                    transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  />
                )}

                {/* Secure Active Indicator Pill with dynamic shadow glow */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeCapsule"
                    className="absolute inset-0 bg-white/[0.08] rounded-full border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_20px_rgba(0,0,0,0.4)]"
                    transition={{ type: "spring", stiffness: 360, damping: 25 }}
                  />
                )}
                
                <span className="relative z-10 flex items-center gap-1.5">
                  {activeSection === item.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" />
                  )}
                  {item.label}
                </span>
              </button>
            ))}
          </nav>

          {/* Secure Consult Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={() => {
                setCurrentView('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="relative overflow-hidden px-4.5 py-1.5 text-[11px] font-bold bg-[#52eb8e] text-zinc-950 hover:bg-[#46df81] active:scale-95 transition-all duration-300 cursor-pointer rounded-full shadow-[0_4px_15px_rgba(82,235,142,0.3)] hover:shadow-[0_4px_20px_rgba(82,235,142,0.45)]"
            >
              Secure Consult
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 bg-zinc-950 border border-white/[0.05] hover:border-white/[0.1] text-zinc-300 rounded-full focus:outline-none transition-apple cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
          </button>
        </motion.header>

        {/* Mobile menu overlay and backdrop inside the fixed z-50 context */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-black/80 backdrop-blur-md z-40 pointer-events-auto"
            />
          )}
          {mobileMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: "spring", stiffness: 420, damping: 30 }}
              className="md:hidden w-[92%] max-w-md mt-3 z-50 bg-black/45 backdrop-blur-md border border-white/[0.08] rounded-3xl p-6 space-y-4 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] pointer-events-auto"
            >
              <div className="flex flex-col gap-1 text-sm font-medium">
                {navItems.map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)} 
                    className={`w-full py-2.5 px-4 text-left rounded-xl transition-all ${
                      activeSection === item.id 
                        ? 'bg-white/10 text-white font-semibold' 
                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {activeSection === item.id && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      )}
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
              
              <div className="pt-2 border-t border-white/[0.05] flex flex-col gap-3">
                <button 
                  onClick={() => {
                    setCurrentView('contact');
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-3 text-center text-xs font-bold bg-[#52eb8e] text-zinc-950 hover:bg-[#46df81] transition-apple rounded-xl shadow-[0_4px_15px_rgba(82,235,142,0.3)] cursor-pointer"
                >
                  Secure Consult
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {currentView === 'home' ? (
        <>
          {/* HERO SECTION */}
          <HeroSection scrollToSection={scrollToSection} setActiveModal={setActiveModal} />

          {/* COMPONENT INTERACTION SUITE SECTIONS */}
          
          {/* 1. SERVICES SECTION */}
          <section className="py-24 md:py-32 border-t border-white/[0.03] bg-black/35 backdrop-blur-lg" id="services-section">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-12 space-y-2 flex flex-col items-center">
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 tracking-tight">Our Services</h2>
                <p className="text-xs md:text-sm text-zinc-400 max-w-xl">
                  We diagnose custom application architectures, discover attack surfaces, audit code security, and certify compliant defensive integrity.
                </p>
              </div>
     
              <ServicesPanel />
            </div>
          </section>

          {/* SECURITY REVIEW CTA SECTION */}
          <SecurityReviewCTA onScheduleClick={() => {
            setCurrentView('contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} />

          {/* 2. OUR PROCESS SECTION */}
          <section className="py-24 md:py-32 border-t border-white/[0.03] bg-black/45 backdrop-blur-lg" id="process-section">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-12 space-y-2 flex flex-col items-center">
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 tracking-tight">Our Structured Auditing Process</h2>
                <p className="text-xs md:text-sm text-zinc-400 max-w-xl">
                  A meticulously phased penetration testing model that prioritizes safety, manual precision, and developer-oriented mitigation.
                </p>
              </div>
     
              <ProcessTimeline />
            </div>
          </section>
     




          {/* THE SPECIAL ADVISORY CORNER (ZeroNetz Advisory Statement) */}
          <AboutSection />

          {/* COMMON QUESTIONS FAQ SECTION */}
          <FAQSection />

          {/* APPLE STYLE FOOTER */}
          <FooterSection 
            scrollToSection={scrollToSection} 
            setActiveModal={setActiveModal} 
            onLegalClick={(tab) => {
              setLegalTab(tab);
              setCurrentView('legal');
            }} 
            onContactClick={() => {
              setCurrentView('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </>
      ) : currentView === 'legal' ? (
        <LegalPage 
          initialTab={legalTab} 
          onBackToHome={() => setCurrentView('home')} 
        />
      ) : (
        <ContactPage 
          onBackToHome={() => setCurrentView('home')} 
        />
      )}


      {/* LIGHTWEIGHT CERTIFICATE MODALS */}
      <AnimatePresence>
        {activeModal && (
          <CertificateModal 
            type={activeModal} 
            onClose={() => setActiveModal(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
