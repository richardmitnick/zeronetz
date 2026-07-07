import { 
  ShieldAlert, 
  ShieldCheck, 
  X, 
  Award, 
  BookOpen, 
  Briefcase, 
  FileText, 
  Sparkles, 
  LockKeyhole 
} from 'lucide-react';
import { motion } from 'motion/react';

interface CertificateModalProps {
  type: 'oscp' | 'nda' | 'response' | null;
  onClose: () => void;
}

export default function CertificateModal({ type, onClose }: CertificateModalProps) {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with elegant Apple blur */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
      />

      {/* Modal Card content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: 'spring', damping: 25, stiffness: 210 }}
        className="w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-3xl p-6 relative overflow-hidden shadow-2xl z-10"
      >
        {/* Absolute glow shapes */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full filter blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white rounded-xl hover:bg-zinc-800 transition-apple cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {type === 'oscp' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-cyan-950/40 text-cyan-400 border border-cyan-900/50 rounded-2xl">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-zinc-100">Security & Advisory Standards</h3>
                <p className="text-xs text-zinc-500">Our auditing, research, and advisory methodology</p>
              </div>
            </div>

            <div className="p-5 bg-zinc-900/60 border border-zinc-800 rounded-2xl relative overflow-hidden">
              <div className="border border-zinc-850 p-4 rounded-xl space-y-3 bg-black/40 font-mono text-xs">
                <p className="text-[10px] text-zinc-500 flex justify-between border-b border-zinc-800/80 pb-1">
                  <span>AUDIT PROTOCOL:</span>
                  <span>OWASP Top 10 & SANS25</span>
                </p>
                <p className="text-[10px] text-zinc-500 flex justify-between border-b border-zinc-800/80 pb-1">
                  <span>DATA INTEGRITY:</span>
                  <span className="text-cyan-400 font-bold">End-to-End Encryption</span>
                </p>
                <p className="text-[10px] text-zinc-500 flex justify-between border-b border-zinc-800/80 pb-1">
                  <span>DELIVERY MODE:</span>
                  <span className="text-zinc-200">Zero-Knowledge Proof</span>
                </p>
                <p className="text-[10px] text-zinc-500 flex justify-between">
                  <span>COMPLIANCE STATUS:</span>
                  <span className="text-emerald-400 font-bold">VERIFIED SECURE ✓</span>
                </p>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              We apply thorough manual security auditing protocols across application frameworks, cloud host environments, and database perimeters to isolate and remediate zero-day and logic bypass vulnerabilities.
            </p>

            <ul className="space-y-2 text-xs text-zinc-300 font-mono">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Comprehensive coverage of modern OWASP Top 10 vectors
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                In-depth manual security analysis without automated superficial noise
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Clear, actionable, and secure mitigation guidance reports
              </li>
            </ul>
          </div>
        )}

        {type === 'nda' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-emerald-950/40 text-emerald-400 border border-emerald-900/50 rounded-2xl">
                <LockKeyhole className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-zinc-100">NDA & Engagement Confidentiality</h3>
                <p className="text-xs text-zinc-500">Corporate Protection Agreements and zero-knowledge audits</p>
              </div>
            </div>

            <div className="p-4 bg-zinc-900/60 border border-zinc-800 rounded-2xl">
              <div className="flex gap-3 text-xs text-zinc-400 leading-relaxed font-sans">
                <FileText className="w-8 h-8 text-emerald-500 stroke-[1.2] shrink-0" />
                <div>
                  <p className="font-bold text-zinc-200 mb-1">Standard Pro-Forma NDA Available</p>
                  ZeroNetz provides legally binding non-disclosure protection immediately prior to analyzing your domains, credentials, or architectural source codes.
                </div>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed">
              All scanning artifacts, connection logs, discovered vulnerabilities, and advisory remediation steps are treated with absolute encryption isolation. No details are leaked. No external repositories are used.
            </p>

            <div className="p-3.5 bg-zinc-950 border border-zinc-850 rounded-xl space-y-1.5 font-mono text-[10px] text-zinc-500">
              <span className="text-zinc-400 font-bold block">ENGAGEMENT BOUNDS:</span>
              <p>✓ Strictly scheduled white-listed scanning source IP ranges.</p>
              <p>✓ Safe proof-of-concept exploits only. Zero downtime caused. </p>
              <p>✓ All deliverables stored in localized AES-encrypted vaults.</p>
            </div>
          </div>
        )}

        {type === 'response' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-amber-950/40 text-amber-400 border border-amber-900/50 rounded-2xl">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-zinc-100">Response SLA Architecture</h3>
                <p className="text-xs text-zinc-500">Fast tracking incident responses & scheduling</p>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed">
              ZeroNetz maintains dedicated emergency alerting networks to manage sudden security compromises:
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-zinc-900/70 border border-zinc-800 rounded-2xl text-center">
                <span className="text-[9px] font-mono text-zinc-500 block uppercase">Critical Compromise</span>
                <span className="text-xl font-extrabold text-red-400 font-mono block mt-1">Under 2h</span>
                <span className="text-[9px] text-zinc-500 leading-tight block mt-0.5">Rapid incident mitigation triage</span>
              </div>

              <div className="p-4 bg-zinc-900/70 border border-zinc-800 rounded-2xl text-center">
                <span className="text-[9px] font-mono text-zinc-500 block uppercase">General Advisory</span>
                <span className="text-xl font-extrabold text-white font-mono block mt-1">Under 24h</span>
                <span className="text-[9px] text-zinc-500 leading-tight block mt-0.5">Scheduling and compliance quotes</span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed font-mono p-3 bg-zinc-950/60 border border-zinc-85 w-full rounded-xl">
              * Active incident triage includes firewall configuration adjustments, intrusion payload identification, and active containment deployment.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
