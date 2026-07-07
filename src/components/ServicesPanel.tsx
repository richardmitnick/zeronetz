import { motion } from 'motion/react';
import { LucideIcon, Shield, Lock, Layers, Award, Terminal, Code, Cpu, Server } from 'lucide-react';

interface ServiceItem {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  tag: string;
  features: string[];
}

export default function ServicesPanel() {
  const services: ServiceItem[] = [
    {
      title: "Red Teaming & Offensive Pentesting",
      subtitle: "Adversary Simulation",
      description: "Rigorous full-scope active defense tests simulating state-of-the-art adversary tactics, targeting infrastructure networks, endpoints, and social perimeters.",
      icon: Terminal,
      tag: "ACTIVE EXPLOITATION",
      features: ["Advanced Lateral Movement Testing", "Dynamic Ingress Vector Audits", "Evasion & Exfiltration Simulations"]
    },
    {
      title: "Secure Source Code & Logic Audit",
      subtitle: "Deep Vulnerability Analysis",
      description: "Line-by-line manual code repository review to detect logic bypasses, custom authorization exploits, memory corruption, and standard OWASP vulnerabilities.",
      icon: Code,
      tag: "HYBRID MANUAL DEEP-DIVE",
      features: ["Custom Authentication Bypass Audits", "Cryptographic Protocol Validation", "OWASP Top 10 Safeguards"]
    },
    {
      title: "Cloud Native Architecture Guard",
      subtitle: "Cloud Security Posture",
      description: "Fortifying modern Kubernetes clusters, cloud service orchestration configurations, container isolation levels, and strict IAM permissions.",
      icon: Server,
      tag: "INFRASTRUCTURE",
      features: ["Kubernetes & Docker Security Audits", "Identity & Access Management Hardening", "Multi-Tenant Isolation Verification"]
    },
    {
      title: "Confidential Compliance Readiness",
      subtitle: "Audit Proofing & Certification",
      description: "Accelerating enterprise compliance readiness for SOC 2 Type II, ISO 27001, and PCI-DSS under ironclad, legal non-disclosure parameters.",
      icon: Award,
      tag: "COMPLIANCE & CONFIDENTIALITY",
      features: ["Confidential Gap Assessments", "Dynamic Policy Alignment", "Remediation Blueprints"]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full"
    >
      {services.map((service, index) => {
        const IconComponent = service.icon;
        return (
          <motion.div
            key={index}
            variants={cardVariants}
            className="group relative rounded-3xl p-8 bg-zinc-950/40 backdrop-blur-md border border-white/[0.04] hover:border-purple-500/30 transition-all duration-500 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_48px_rgba(147,51,234,0.08)] flex flex-col justify-between"
            whileHover={{ y: -4 }}
          >
            {/* Ambient Background Gradient for Hover Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/5 rounded-full filter blur-[50px] pointer-events-none group-hover:bg-purple-500/10 transition-all duration-500" />
            
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 bg-white/[0.02] border border-white/[0.06] rounded-2xl group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-all duration-300">
                  <IconComponent className="w-6 h-6 text-zinc-300 group-hover:text-purple-400 group-hover:scale-110 transition-all duration-300" />
                </div>
                <span className="text-[9px] font-mono tracking-widest text-purple-400/90 font-extrabold bg-purple-950/30 border border-purple-500/15 px-2.5 py-1 rounded-full uppercase">
                  {service.tag}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 leading-snug">
                {service.title}
              </h3>
              <p className="text-[11px] font-mono text-zinc-500 mt-1 uppercase tracking-wider">
                {service.subtitle}
              </p>
              <p className="text-xs text-zinc-400 mt-4 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Structured Features List */}
            <div className="mt-8 pt-6 border-t border-white/[0.03] space-y-2.5">
              {service.features.map((feature, fIdx) => (
                <div key={fIdx} className="flex items-center gap-2.5 text-xs text-zinc-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500/60 shadow-[0_0_6px_rgba(168,85,247,0.8)]" />
                  <span className="group-hover:text-zinc-300 transition-colors duration-300">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
