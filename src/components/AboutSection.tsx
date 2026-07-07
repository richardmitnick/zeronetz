import { Linkedin, Github } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-16 border-t border-zinc-950 max-w-7xl mx-auto px-6" id="about-section">
      <div className="p-8 rounded-3xl apple-glass-bright grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full filter blur-[100px] pointer-events-none" />
        
        <div className="md:col-span-4 flex flex-col items-center text-center">
          {/* Visual avatar badge placeholder - stylish Apple aesthetic */}
          <div className="w-24 h-24 rounded-full bg-white/[0.04] backdrop-blur-md border-2 border-white/[0.08] flex items-center justify-center mb-4 text-3xl font-bold text-zinc-300 relative select-none">
            ZN
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-400 border-2 border-zinc-900 rounded-full animate-pulse" />
          </div>
          <h4 className="text-sm font-bold text-zinc-200">ZeroNetz Advisory</h4>
          <p className="text-[10px] font-mono text-zinc-500">Cybersecurity Research & Engineering</p>
          
          <div className="flex gap-3 mt-4">
            <a 
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.08] hover:text-white border border-white/[0.05] hover:border-white/[0.1] rounded-xl transition-all text-zinc-400 text-xs"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.08] hover:text-white border border-white/[0.05] hover:border-white/[0.1] rounded-xl transition-all text-zinc-400 text-xs"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="md:col-span-8 space-y-4">
          <span className="text-[10px] tracking-wide font-mono uppercase text-zinc-500">Advisory Statement</span>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">"Thorough vulnerability research is the ultimate form of proactive defense."</h3>
          <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
            Our collective team specializes in manual architectural vulnerability research and defense engineering. By systematically auditing logical execution flows, web applications, cloud configurations, and network perimeters, we design resilient confidentiality frameworks for growing technology companies.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-2">
            <div>
              <span className="text-[9px] font-mono text-zinc-500 uppercase block">Methodology</span>
              <span className="text-xs font-bold text-zinc-200 font-mono">Standards-Based</span>
            </div>
            <div>
              <span className="text-[9px] font-mono text-zinc-500 uppercase block">Audit Process</span>
              <span className="text-xs font-bold text-zinc-200 font-mono">Manual & Thorough</span>
            </div>
            <div>
              <span className="text-[9px] font-mono text-zinc-500 uppercase block">Scope Range</span>
              <span className="text-xs font-bold text-zinc-200 font-mono">Full-Stack Coverage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
