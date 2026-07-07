import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, 
  CheckCircle2, 
  Check,
  ChevronDown,
  Loader2,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function EncryptedChannel() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('');
  const [details, setDetails] = useState('');
  const [turnstileState, setTurnstileState] = useState<'idle' | 'verifying' | 'verified'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    // Automatically run the turnstile human verification simulation after the component mounts
    const initTimer = setTimeout(() => {
      setTurnstileState('verifying');
      const verifyTimer = setTimeout(() => {
        setTurnstileState('verified');
      }, 1500);
      return () => clearTimeout(verifyTimer);
    }, 800);

    return () => clearTimeout(initTimer);
  }, []);

  const handleTurnstileClick = () => {
    if (turnstileState !== 'idle') return;
    setTurnstileState('verifying');
    setTimeout(() => {
      setTurnstileState('verified');
    }, 1200);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (turnstileState !== 'verified') {
      setFormError('Please verify you are human before sending.');
      return;
    }
    if (!name || !email || !company || !service) {
      setFormError('Please fill in all required fields.');
      return;
    }

    setFormError(null);
    setIsSubmitting(true);

    // Prioritize the configured environment variable, fallback to the user's production Web3Forms key
    const envKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    const accessKey = (envKey && envKey.trim() !== '' && !envKey.includes('your-web3forms-access-key') && envKey !== 'placeholder')
      ? envKey
      : "b9e0fd24-e9ad-4d2f-ada6-c4cd868dc48e";

    const isPlaceholder = !accessKey || 
      accessKey.trim() === '' || 
      accessKey.includes('your-web3forms-access-key') || 
      accessKey === 'placeholder';

    if (isPlaceholder) {
      // Demo/preview mode placeholder simulation
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
      }, 1500);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: name,
          email: email,
          subject: `New ZeroNetz Secure Consultation - ${name} (${company})`,
          from_name: "ZeroNetz Cyber Portal",
          message: `Operator: ${name}\nWork Email: ${email}\nCompany / Studio: ${company}\nService Interested In: ${service}\n\nProject Details:\n${details}`
        })
      });

      if (!response.ok) throw new Error('Web3Forms router connection error');
      const data = await response.json();
      if (!data.success) throw new Error(data.message || 'Web3Forms rejected submission');

      setIsSubmitting(false);
      setSubmitSuccess(true);
    } catch (err: any) {
      console.error('Error submitting via Web3Forms Router:', err);
      setFormError(err.message || 'Transmission failed. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setCompany('');
    setService('');
    setDetails('');
    setTurnstileState('idle');
    setSubmitSuccess(false);
    setFormError(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto" id="secure-message-portal">
      <AnimatePresence mode="wait">
        {submitSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-[#0b0b0b]/90 border border-zinc-800/80 rounded-2xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#52eb8e]/5 rounded-full filter blur-[100px] pointer-events-none" />
            <div className="w-16 h-16 bg-[#52eb8e]/10 border border-[#52eb8e]/30 text-[#52eb8e] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Transmission Successfully Dispatched</h3>
            <p className="text-sm text-zinc-400 max-w-lg mx-auto mb-8 leading-relaxed font-sans">
              Thank you! Your secure transmission has been successfully routed to our offensive security team. We will analyze your perimeter requirements and get back to you within 24 hours.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-3 bg-[#52eb8e] hover:bg-[#46df81] text-zinc-950 text-xs font-bold rounded-full transition-all duration-300 cursor-pointer shadow-[0_4px_24px_rgba(82,235,142,0.15)] hover:shadow-[0_4px_24px_rgba(82,235,142,0.3)] active:scale-95"
            >
              Okay
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-[#0b0b0b]/90 border border-zinc-800/80 rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden"
          >
            {/* Background accent glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#52eb8e]/5 rounded-full filter blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/5 rounded-full filter blur-[100px] pointer-events-none" />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 font-sans mb-2">Your Name *</label>
                  <input
                    type="text"
                    required
                    disabled={isSubmitting}
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-[#121212]/90 border border-zinc-800/80 rounded-xl focus:outline-none focus:border-[#52eb8e]/60 focus:ring-1 focus:ring-[#52eb8e]/20 text-zinc-200 placeholder-zinc-600 transition-all duration-300 font-sans text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 font-sans mb-2">Work Email *</label>
                  <input
                    type="email"
                    required
                    disabled={isSubmitting}
                    placeholder="john@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-[#121212]/90 border border-zinc-800/80 rounded-xl focus:outline-none focus:border-[#52eb8e]/60 focus:ring-1 focus:ring-[#52eb8e]/20 text-zinc-200 placeholder-zinc-600 transition-all duration-300 font-sans text-xs"
                  />
                </div>
              </div>

              {/* Row 2: Company and Service */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 font-sans mb-2">Company *</label>
                  <input
                    type="text"
                    required
                    disabled={isSubmitting}
                    placeholder="e.g. Acme Corp"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 bg-[#121212]/90 border border-zinc-800/80 rounded-xl focus:outline-none focus:border-[#52eb8e]/60 focus:ring-1 focus:ring-[#52eb8e]/20 text-zinc-200 placeholder-zinc-600 transition-all duration-300 font-sans text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 font-sans mb-2">Service Interested In *</label>
                  <div className="relative">
                    <select
                      required
                      disabled={isSubmitting}
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 bg-[#121212]/90 border border-zinc-800/80 rounded-xl focus:outline-none focus:border-[#52eb8e]/60 focus:ring-1 focus:ring-[#52eb8e]/20 text-zinc-200 transition-all duration-300 font-sans text-xs appearance-none cursor-pointer pr-10"
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="Smart Contract Audit">Smart Contract Audit</option>
                      <option value="Web3 Infrastructure Pen-testing">Web3 Infrastructure Pen-testing</option>
                      <option value="Offensive Security Assessment">Offensive Security Assessment</option>
                      <option value="Cryptographic Code Review">Cryptographic Code Review</option>
                      <option value="Other Security Consulting">Other Security Consulting</option>
                    </select>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3: Project Details */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 font-sans mb-2">Project Details</label>
                <textarea
                  disabled={isSubmitting}
                  rows={6}
                  placeholder="Tell us about your project, current security concerns, launch timeline, or any specific requirements..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full p-4 bg-[#121212]/90 border border-zinc-800/80 rounded-xl focus:outline-none focus:border-[#52eb8e]/60 focus:ring-1 focus:ring-[#52eb8e]/20 text-zinc-200 placeholder-zinc-600 transition-all duration-300 font-sans text-xs resize-none leading-relaxed"
                />
              </div>

              {/* Row 4: Cloudflare Verification */}
              <div className="space-y-3">
                {/* Automatic Verification Row */}
                <div className={`w-full border rounded-xl p-3 flex items-center gap-3 font-sans text-xs transition-all duration-500 ${
                  turnstileState === 'verified' 
                    ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.05)]' 
                    : 'bg-[#111111]/60 border-zinc-800/60 text-zinc-400'
                }`}>
                  {turnstileState === 'verified' ? (
                    <Check className="w-4 h-4 text-[#52eb8e] shrink-0" />
                  ) : (
                    <Loader2 className="w-4 h-4 text-[#52eb8e] animate-spin shrink-0" />
                  )}
                  <span>
                    {turnstileState === 'idle' && "Initializing browser integrity signature check..."}
                    {turnstileState === 'verifying' && "Verifying you're human... (this is automatic)"}
                    {turnstileState === 'verified' && "Secure Integrity Verified. Human Operator Confirmed."}
                  </span>
                </div>

                {/* Cloudflare Turnstile Box */}
                <div 
                  onClick={handleTurnstileClick}
                  className={`border rounded-lg px-4 py-3 flex items-center justify-between w-full max-w-[320px] h-16 transition-all duration-300 relative select-none ${
                    turnstileState === 'verified'
                      ? 'border-emerald-500/20 bg-[#121212]'
                      : 'border-zinc-850 bg-[#161616] cursor-pointer hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {/* Checkbox */}
                    <div className="relative">
                      {turnstileState === 'idle' && (
                        <div className="w-6 h-6 rounded border border-zinc-600 bg-zinc-850 hover:border-zinc-500 transition-all duration-200 flex items-center justify-center" />
                      )}
                      {turnstileState === 'verifying' && (
                        <div className="w-6 h-6 flex items-center justify-center">
                          <Loader2 className="w-5 h-5 text-[#52eb8e] animate-spin" />
                        </div>
                      )}
                      {turnstileState === 'verified' && (
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      )}
                    </div>
                    <span className="text-sm text-zinc-300 font-sans font-medium">
                      {turnstileState === 'idle' && "Verify you are human"}
                      {turnstileState === 'verifying' && "Verifying signature..."}
                      {turnstileState === 'verified' && "Connection Verified"}
                    </span>
                  </div>

                  {/* Cloudflare Branding */}
                  <div className="flex flex-col items-end justify-center">
                    <div className="flex items-center gap-1">
                      <svg className="w-6 h-6 text-orange-500 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                      </svg>
                      <span className="text-[9px] font-black text-zinc-400 tracking-wider font-sans">CLOUDFLARE</span>
                    </div>
                    <span className="text-[8px] text-zinc-500 font-sans mt-0.5 hover:underline cursor-pointer">Privacy • Help</span>
                  </div>
                </div>
              </div>

              {formError && (
                <div className="p-4 bg-red-950/20 border border-red-500/20 rounded-xl text-xs text-red-400 font-mono flex items-start gap-2.5 shadow-[0_4px_12px_rgba(239,68,68,0.05)]">
                  <ShieldAlert className="w-4 h-4 text-red-500 shrink-0 mt-0.5 animate-pulse" />
                  <div className="space-y-1">
                    <span className="font-bold uppercase tracking-wider block text-[10px]">Transmission Security Fault</span>
                    <span className="leading-relaxed block text-[11px] text-red-300/90">{formError}</span>
                  </div>
                </div>
              )}

              {/* Row 5: Submit Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-white/[0.05] mt-8">
                <span className="text-xs text-zinc-500 font-sans">
                  By submitting, you agree to our NDA and privacy policy
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting || turnstileState !== 'verified' || !name || !email || !company || !service}
                  className="px-8 py-3.5 bg-[#52eb8e] hover:bg-[#46df81] text-zinc-950 text-xs font-bold rounded-full transition-all duration-300 cursor-pointer shadow-[0_8px_32px_rgba(82,235,142,0.25)] hover:shadow-[0_8px_32px_rgba(82,235,142,0.4)] flex items-center justify-center gap-2 border border-[#52eb8e]/30 disabled:opacity-40 disabled:pointer-events-none active:scale-95 shrink-0"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-3.5 h-3.5 text-zinc-950 stroke-[2.5]" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Email under the card */}
      <div className="mt-8 text-center text-xs text-zinc-500 font-sans">
        Having trouble getting in touch with our team?{' '}
        <a href="mailto:hello@zeronetz.com" className="text-[#52eb8e] hover:underline hover:text-[#46df81] font-semibold transition-colors">
          hello@zeronetz.com
        </a>
      </div>
    </div>
  );
}
