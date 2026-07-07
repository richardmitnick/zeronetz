import { ShieldCheck } from 'lucide-react';

interface FooterSectionProps {
  scrollToSection: (id: string) => void;
  setActiveModal: (type: 'oscp' | 'nda' | 'response' | null) => void;
  onLegalClick: (tab: 'privacy' | 'terms' | 'security') => void;
  onContactClick: () => void;
}

export default function FooterSection({ scrollToSection, setActiveModal, onLegalClick, onContactClick }: FooterSectionProps) {
  return (
    <footer className="mt-20 border-t border-zinc-900 pt-10 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10">
        <div className="space-y-4">
          <div className="flex items-center">
            <span className="text-xs font-extrabold tracking-widest text-zinc-200 uppercase">ZERO NETZ</span>
          </div>
          <p className="text-[11px] text-zinc-500 leading-relaxed">
            High-fidelity defensive cybersecurity, vulnerability research audits, and compliance fortification.
          </p>
        </div>

        <div>
          <h5 className="text-xs font-bold text-zinc-300 font-mono tracking-wider uppercase mb-3">Modular Hubs</h5>
          <div className="flex flex-col gap-2 text-[11px] text-zinc-500">
            <button onClick={() => scrollToSection('services-section')} className="hover:text-zinc-300 transition-colors text-left outline-none cursor-pointer">Offensive Services</button>
            <button onClick={() => scrollToSection('process-section')} className="hover:text-zinc-300 transition-colors text-left outline-none cursor-pointer">Our Methodology</button>
            <button onClick={() => scrollToSection('compliance-section')} className="hover:text-zinc-300 transition-colors text-left outline-none cursor-pointer">Self Compliance</button>
            <button onClick={onContactClick} className="hover:text-zinc-300 transition-colors text-left outline-none cursor-pointer">Encrypted Channel</button>
          </div>
        </div>

        <div>
          <h5 className="text-xs font-bold text-zinc-300 font-mono tracking-wider uppercase mb-3">Verification Vault</h5>
          <div className="flex flex-col gap-2 text-[11px] text-zinc-500">
            <button onClick={() => setActiveModal('oscp')} className="hover:text-zinc-300 transition-colors text-left outline-none cursor-pointer">Advisory & Audit Standards</button>
            <button onClick={() => setActiveModal('response')} className="hover:text-zinc-300 transition-colors text-left outline-none cursor-pointer">SLA Response Terms</button>
            <button onClick={() => setActiveModal('nda')} className="hover:text-zinc-300 transition-colors text-left outline-none cursor-pointer">Confidentiality NDA</button>
          </div>
        </div>

        <div>
          <h5 className="text-xs font-bold text-zinc-300 font-mono tracking-wider uppercase mb-3">Adherence Standard</h5>
          <div className="p-3 bg-black/30 backdrop-blur-md border border-white/[0.04] rounded-xl space-y-1 text-[10px] text-zinc-500">
            <span className="text-zinc-400 font-bold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              PCI-DSS & SOC 2 Align
            </span>
            <span>All diagnostics trace to NIST cybersecurity frameworks. No source repositories are cloned or parsed.</span>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-950 pt-6 flex flex-col md:flex-row items-center justify-between text-[11px] text-zinc-600 gap-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <p>© 2026 zeronetz — All Rights Reserved.</p>
          <div className="hidden md:block text-zinc-800">|</div>
          <div className="flex items-center gap-3.5 text-zinc-500">
            <button onClick={() => onLegalClick('privacy')} className="hover:text-[#52eb8e] transition-colors outline-none cursor-pointer">Privacy Policy</button>
            <span>•</span>
            <button onClick={() => onLegalClick('terms')} className="hover:text-[#52eb8e] transition-colors outline-none cursor-pointer">Terms of Service</button>
            <span>•</span>
            <button onClick={() => onLegalClick('security')} className="hover:text-[#52eb8e] transition-colors outline-none cursor-pointer">Security Policy</button>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <span>Developed & Designed by <a href="https://rmdevelopers.com" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors font-semibold underline decoration-zinc-700 hover:decoration-white underline-offset-2">RM Developers</a></span>
        </div>
      </div>
    </footer>
  );
}
