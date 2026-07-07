import { motion } from 'motion/react';
import { Award, Zap, LockKeyhole, ArrowUpRight, ChevronRight, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
  setActiveModal: (type: 'oscp' | 'nda' | 'response' | null) => void;
}

export default function HeroSection({ scrollToSection, setActiveModal }: HeroSectionProps) {
  return (
    <section id="home-section" className="relative px-6 pt-36 pb-24 md:pt-48 md:pb-36 max-w-7xl mx-auto flex flex-col items-center text-center">
      {/* Glow badge */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.02] backdrop-blur-md border border-white/[0.06] text-zinc-300 text-xs mb-6 shadow-indigo-500/20"
      >
        <Sparkles className="w-3 h-3 text-[#52eb8e] animate-pulse" />
        <span className="font-mono text-[10px]">Trusted by Industry Leaders</span>
      </motion.div>

      {/* Big Apple Headline */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight max-w-4xl text-zinc-100"
      >
        Proactive Security Meets <span className="bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent font-bold tracking-tight">Integrity.</span>
      </motion.h1>

      {/* Detailed Description */}
      <motion.p 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-base md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10"
      >
        Penetration testing, vulnerability assessment, threat intelligence — we diagnose architecture perimeters, verify critical protocols, and safeguard client privacy securely.
      </motion.p>

      {/* Hero CTA buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-col items-center gap-4 mb-20 w-full sm:w-auto"
      >
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button 
            onClick={() => scrollToSection('contact-section')}
            className="w-full sm:w-auto px-6 py-3.5 bg-[#52eb8e] hover:bg-[#46df81] text-zinc-950 active:scale-95 text-xs font-bold rounded-xl transition-all cursor-pointer shadow-[0_8px_32px_rgba(82,235,142,0.25)] flex items-center justify-center gap-2 border border-[#52eb8e]/20"
          >
            Book a Consultation
            <ArrowRight className="w-3.5 h-3.5 text-zinc-950 stroke-[2.5]" />
          </button>
          <button 
            onClick={() => scrollToSection('services-section')}
            className="w-full sm:w-auto px-6 py-3.5 bg-white/[0.1] hover:bg-white/[0.18] text-white border border-white/[0.2] hover:border-purple-500/40 backdrop-blur-md active:scale-95 text-xs font-bold rounded-xl transition-all cursor-pointer shadow-[0_8px_32px_rgba(168,85,247,0.1)]"
          >
            Explore Services
          </button>
        </div>

        {/* Consultation & Proposal Badge */}
        <div className="flex items-center gap-2.5 text-[11px] sm:text-xs font-medium text-zinc-400 select-none px-4 py-2 bg-white/[0.02] border border-white/[0.05] rounded-full backdrop-blur-sm shadow-sm">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#52eb8e] stroke-[2.5]" />
            <span>No-commitment consultation</span>
          </div>
          <span className="text-zinc-700 font-light">|</span>
          <div>
            Proposal within <span className="text-[#52eb8e] font-semibold">5 days</span>
          </div>
        </div>
      </motion.div>

      {/* TRUST TRUST AND VERIFIED BADGES GRID */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Card 1 - Security Standards */}
        <button
          onClick={() => setActiveModal('oscp')}
          className="p-6 rounded-2xl apple-glass text-left hover:border-cyan-500/30 transition-all group relative cursor-pointer outline-none focus:ring-1 focus:ring-cyan-500/50"
          id="badge-oscp-trigger"
        >
          <div className="p-3 bg-white/[0.03] backdrop-blur-md border border-white/[0.05] rounded-xl w-11 h-11 flex items-center justify-center mb-4 group-hover:scale-105 transition-all">
            <Award className="w-5 h-5 text-cyan-400" />
          </div>
          <div className="flex items-center gap-2 mb-1.5">
            <h2 className="text-sm font-bold text-zinc-100 group-hover:text-white transition-all">Security Standards</h2>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 opacity-0 group-hover:opacity-100 group-hover:text-cyan-400 transition-all" />
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed mb-3">
            Adhering strictly to industry-proven cybersecurity audit guidelines and threat mitigation best practices.
          </p>
          <span className="text-[10px] uppercase font-mono tracking-wider text-cyan-500 font-semibold inline-flex items-center gap-1">
            View standards
            <ChevronRight className="w-3 h-3 text-cyan-500 group-hover:translate-x-1 transition-all" />
          </span>
        </button>

        {/* Card 2 - SLA */}
        <button
          onClick={() => setActiveModal('response')}
          className="p-6 rounded-2xl apple-glass text-left hover:border-amber-500/30 transition-all group relative cursor-pointer outline-none focus:ring-1 focus:ring-amber-500/50"
          id="badge-sla-trigger"
        >
          <div className="p-3 bg-white/[0.03] backdrop-blur-md border border-white/[0.05] rounded-xl w-11 h-11 flex items-center justify-center mb-4 group-hover:scale-105 transition-all">
            <Zap className="w-5 h-5 text-amber-400" />
          </div>
          <div className="flex items-center gap-2 mb-1.5">
            <h2 className="text-sm font-bold text-zinc-100 group-hover:text-white transition-all">Fast Response</h2>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 opacity-0 group-hover:opacity-100 group-hover:text-amber-400 transition-all" />
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed mb-3">
            Critical incident inquiries handled within 2 hours, general scheduling quotes within 24h.
          </p>
          <span className="text-[10px] uppercase font-mono tracking-wider text-amber-500 font-semibold inline-flex items-center gap-1">
            view SLA parameters
            <ChevronRight className="w-3 h-3 text-amber-500 group-hover:translate-x-1 transition-all" />
          </span>
        </button>

        {/* Card 3 - NDA */}
        <button
          onClick={() => setActiveModal('nda')}
          className="p-6 rounded-2xl apple-glass text-left hover:border-emerald-500/30 transition-all group relative cursor-pointer outline-none focus:ring-1 focus:ring-emerald-500/50"
          id="badge-nda-trigger"
        >
          <div className="p-3 bg-white/[0.03] backdrop-blur-md border border-white/[0.05] rounded-xl w-11 h-11 flex items-center justify-center mb-4 group-hover:scale-105 transition-all">
            <LockKeyhole className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="flex items-center gap-2 mb-1.5">
            <h2 className="text-sm font-bold text-zinc-100 group-hover:text-white transition-all">Legally Confidential</h2>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 opacity-0 group-hover:opacity-100 group-hover:text-emerald-400 transition-all" />
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed mb-3">
            Standard non-disclosure available immediately. All engagements are treated with isolated security parameters.
          </p>
          <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-500 font-semibold inline-flex items-center gap-1">
            See compliance bounds
            <ChevronRight className="w-3 h-3 text-emerald-500 group-hover:translate-x-1 transition-all" />
          </span>
        </button>
      </motion.div>
    </section>
  );
}
