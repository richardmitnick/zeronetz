import { Shield, ArrowRight } from 'lucide-react';

interface SecurityReviewCTAProps {
  onScheduleClick: () => void;
}

export default function SecurityReviewCTA({ onScheduleClick }: SecurityReviewCTAProps) {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto w-full">
      <div 
        className="relative overflow-hidden bg-zinc-950/45 backdrop-blur-xl border border-white/[0.04] rounded-[2rem] p-8 md:p-16 text-center shadow-[0_30px_100px_-20px_rgba(0,0,0,0.8),0_0_50px_rgba(82,235,142,0.02)] flex flex-col items-center justify-center group"
      >
        {/* Ambient background glow inside the card */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[320px] h-[320px] bg-[#52eb8e]/5 blur-[120px] rounded-full pointer-events-none transition-all duration-700 group-hover:bg-[#52eb8e]/10 group-hover:scale-110" />

        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 border border-[#52eb8e]/20 text-[#52eb8e] bg-[#52eb8e]/5 py-1 px-3.5 rounded-full font-mono text-[10px] uppercase tracking-wider shadow-[0_0_15px_rgba(82,235,142,0.05)] mb-6 select-none">
          <Shield className="w-3 h-3 text-[#52eb8e] fill-[#52eb8e]/10 animate-pulse" />
          <span>ZERONETZ VERIFIED</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1] max-w-3xl mb-4 font-sans select-none">
          Don't Let Players Find <br className="hidden sm:inline" /> the Weakness
        </h2>

        {/* Description */}
        <p className="text-zinc-400 text-xs md:text-sm max-w-2xl leading-relaxed mb-8">
          Your launch is months away. Hackers will find exploits in hours. Let our engineers secure your game before it's too late.
        </p>

        {/* Main CTA Button */}
        <button
          onClick={onScheduleClick}
          className="relative overflow-hidden inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold bg-[#52eb8e] text-zinc-950 hover:bg-[#46df81] rounded-xl transition-all duration-300 shadow-[0_4px_24px_rgba(82,235,142,0.25)] hover:shadow-[0_4px_35px_rgba(82,235,142,0.45)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer font-sans"
        >
          <span>Schedule Your Security & Load Review</span>
          <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </button>

        {/* Sub-note/Footer attributes */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[10px] text-zinc-600 font-mono">
          <span>Response time: &lt;24 hours</span>
          <span className="text-zinc-800">•</span>
          <span>NDA included</span>
          <span className="text-zinc-800">•</span>
          <span>No commitment required</span>
        </div>
      </div>
    </section>
  );
}
