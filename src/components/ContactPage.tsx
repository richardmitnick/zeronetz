import { motion } from 'motion/react';
import { ArrowLeft, Mail } from 'lucide-react';
import EncryptedChannel from './EncryptedChannel';

interface ContactPageProps {
  onBackToHome: () => void;
}

export default function ContactPage({ onBackToHome }: ContactPageProps) {
  return (
    <div className="min-h-screen text-zinc-300 font-sans relative overflow-x-hidden pt-28 pb-20 px-6 max-w-5xl mx-auto w-full">
      
      {/* Top Header Controls */}
      <div className="mb-8">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-white transition-colors group cursor-pointer w-fit"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Styled Centered Header Section (Send a Message) */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 border border-[#52eb8e]/80 text-[#52eb8e] bg-[#52eb8e]/10 py-2.5 px-6 rounded-full font-sans font-medium text-xs tracking-wide shadow-[0_0_24px_rgba(82,235,142,0.15)] select-none">
          <Mail className="w-4 h-4 text-[#52eb8e] stroke-[2]" />
          <span>Send a Message</span>
        </div>
      </div>

      {/* Centered Single-Column Form Layout */}
      <div className="max-w-4xl mx-auto">
        <EncryptedChannel />
      </div>

    </div>
  );
}
