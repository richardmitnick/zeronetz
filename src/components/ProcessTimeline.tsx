import { motion } from 'motion/react';
import { LucideIcon, Search, Eye, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface ProcessStep {
  stepNum: string;
  title: string;
  heading: string;
  description: string;
  icon: LucideIcon;
  deliverable: string;
}

export default function ProcessTimeline() {
  const steps: ProcessStep[] = [
    {
      stepNum: "01",
      title: "RECON & THREAT MODELING",
      heading: "Surface Analysis & Blueprinting",
      description: "Passive asset discovery, domain mapping, and API path enumeration to structure a comprehensive target matrix without triggering live defenses.",
      icon: Search,
      deliverable: "Scope Bound Matrix & IP/URL Inventory List"
    },
    {
      stepNum: "02",
      title: "LOGICAL VULNERABILITY SENSING",
      heading: "Automated & Deep Manual Scans",
      description: "Combining automated configuration scanners with rigorous manual logical sequence verification to hunt edge-case bugs and permission leaks.",
      icon: Eye,
      deliverable: "Live Enumeration Logs & Draft Issue Log"
    },
    {
      stepNum: "03",
      title: "EXPLOITATION & RISK PROBING",
      heading: "Safe Controlled Validation",
      description: "Executing precise, isolated attack payloads to verify critical impact levels on live databases, cloud containers, or server boundaries securely.",
      icon: ShieldAlert,
      deliverable: "Confirmed POC Artifacts & Exploit Proofs"
    },
    {
      stepNum: "04",
      title: "MITIGATION & CERTIFICATION",
      heading: "Remediation & Sign-off Audit",
      description: "Compiling a prescriptive, developer-oriented vulnerability report paired with secondary confirmation reviews to certify complete system fortification.",
      icon: CheckCircle2,
      deliverable: "Final PDF Security Audit & Public Verifiable Logo Badge"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15
      }
    }
  };

  return (
    <div className="relative max-w-5xl mx-auto py-6">
      {/* Decorative vertical center line for timeline (hidden on mobile, visible on md+) */}
      <div className="absolute left-[33px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-purple-500/30 via-zinc-800 to-zinc-950/20 pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-12 md:space-y-16"
      >
        {steps.map((step, idx) => {
          const IconComponent = step.icon;
          const isEven = idx % 2 === 0;

          return (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`flex flex-col md:flex-row items-stretch gap-6 md:gap-12 relative ${
                isEven ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline bubble locator */}
              <div className="absolute left-[20px] md:left-1/2 -translate-x-[14px] md:-translate-x-1/2 top-4 w-7 h-7 rounded-full bg-zinc-950 border border-purple-500/60 shadow-[0_0_12px_rgba(168,85,247,0.35)] flex items-center justify-center z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
              </div>

              {/* Step Card Content */}
              <div className="w-full md:w-[46%] pl-12 md:pl-0">
                <div className="group relative rounded-2xl p-6 md:p-8 bg-zinc-950/40 backdrop-blur-md border border-white/[0.04] hover:border-purple-500/20 transition-all duration-300 shadow-xl overflow-hidden">
                  {/* Subtle top indicator bar */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent group-hover:via-purple-500/50 transition-all duration-300" />
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl md:text-3xl font-black font-mono bg-gradient-to-r from-purple-400 to-zinc-500 bg-clip-text text-transparent opacity-90 select-none">
                      {step.stepNum}
                    </div>
                    <div>
                      <span className="text-[9px] font-mono tracking-widest text-purple-400 font-extrabold uppercase">
                        {step.title}
                      </span>
                      <h4 className="text-sm md:text-base font-bold text-white group-hover:text-purple-300 transition-colors duration-200">
                        {step.heading}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* High fidelity Deliverable Tag */}
                  <div className="pt-4 border-t border-white/[0.03] flex items-center gap-3">
                    <IconComponent className="w-4 h-4 text-purple-400/80 group-hover:scale-110 transition-transform" />
                    <div className="text-[10px] font-mono">
                      <span className="text-zinc-500 uppercase font-bold block">AUDIT DELIVERABLE</span>
                      <span className="text-zinc-300 group-hover:text-zinc-200">{step.deliverable}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spacing placeholder for opposite side layout */}
              <div className="hidden md:block w-[46%]" />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
