import { motion } from 'motion/react';
import { ArrowLeft, Shield, FileText, Lock, Mail, Globe, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';

interface LegalPageProps {
  initialTab?: 'privacy' | 'terms' | 'security';
  onBackToHome: () => void;
}

type TabType = 'privacy' | 'terms' | 'security';

export default function LegalPage({ initialTab = 'privacy', onBackToHome }: LegalPageProps) {
  const [activeTab, setActiveTab] = useState<TabType>(initialTab);

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen text-zinc-300 font-sans relative overflow-x-hidden pt-28 pb-20 px-6 max-w-5xl mx-auto w-full">
      
      {/* Top Header Controls */}
      <div className="flex flex-col gap-6 mb-12">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-white transition-colors group cursor-pointer w-fit"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/[0.04] pb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 border border-[#52eb8e]/20 text-[#52eb8e] bg-[#52eb8e]/5 py-1 px-3 rounded-full font-mono text-[10px] uppercase tracking-wider mb-4">
              <Shield className="w-3 h-3 text-[#52eb8e]" />
              <span>Legal & Compliance</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1] font-sans">
              {activeTab === 'privacy' && 'Privacy Policy'}
              {activeTab === 'terms' && 'Terms of Service'}
              {activeTab === 'security' && 'Security Policy'}
            </h1>
            <p className="text-zinc-500 text-xs mt-3 font-mono">
              Last Updated: March 2026
            </p>
          </div>

          {/* Document Switching Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-zinc-950/60 rounded-xl border border-white/[0.04] self-start sm:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab('privacy')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all outline-none cursor-pointer whitespace-nowrap ${
                activeTab === 'privacy' 
                  ? 'bg-white/10 text-[#52eb8e] border border-white/[0.04]' 
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Privacy Policy</span>
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all outline-none cursor-pointer whitespace-nowrap ${
                activeTab === 'terms' 
                  ? 'bg-white/10 text-[#52eb8e] border border-white/[0.04]' 
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Terms of Service</span>
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all outline-none cursor-pointer whitespace-nowrap ${
                activeTab === 'security' 
                  ? 'bg-white/10 text-[#52eb8e] border border-white/[0.04]' 
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Security Policy</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Document Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Left Side Quick Menu / Table of Contents */}
        <div className="md:col-span-1 hidden md:block">
          <div className="sticky top-28 space-y-4">
            <h4 className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase font-mono mb-4">Sections</h4>
            <div className="flex flex-col gap-2.5">
              {activeTab === 'privacy' && (
                <>
                  <a href="#privacy-1" className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40">1. Introduction & Scope</a>
                  <a href="#privacy-2" className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40">2. Controller vs. Processor</a>
                  <a href="#privacy-3" className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40">3. Security Standards (ISO 27001)</a>
                  <a href="#privacy-4" className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40">4. International Data Transfers</a>
                  <a href="#privacy-5" className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40">5. Data Retention</a>
                  <a href="#privacy-6" className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40">6. Your GDPR Rights</a>
                  <a href="#privacy-7" className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40">7. Cookies and Tracking</a>
                  <a href="#privacy-8" className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40">8. Updates to This Policy</a>
                </>
              )}
              {activeTab === 'terms' && (
                <>
                  <a href="#terms-1" className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40">1. Acceptance of Terms</a>
                  <a href="#terms-2" className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40">2. Service Provision & Scope</a>
                  <a href="#terms-3" className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40">3. Authorization & Indemnity</a>
                  <a href="#terms-4" className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40">4. Intellectual Property</a>
                  <a href="#terms-5" className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40">5. Confidentiality Obligations</a>
                  <a href="#terms-6" className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40">6. Limitation of Liability</a>
                  <a href="#terms-7" className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40">7. Governing Law</a>
                </>
              )}
              {activeTab === 'security' && (
                <>
                  <a href="#sec-1" className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40">1. Security Philosophy</a>
                  <a href="#sec-2" className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40">2. Operational Security</a>
                  <a href="#sec-3" className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40">3. Infrastructure Isolation</a>
                  <a href="#sec-4" className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40">4. Vulnerability Disclosure</a>
                  <a href="#sec-5" className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40">5. Incident Management</a>
                  <a href="#sec-6" className="text-xs text-zinc-400 hover:text-[#52eb8e] transition-colors leading-relaxed block border-l border-zinc-900 pl-3 py-0.5 hover:border-[#52eb8e]/40">6. Continuous Compliance</a>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Right Side Content Areas */}
        <div className="md:col-span-3 space-y-12">
          
          {/* TAB 1: PRIVACY POLICY */}
          {activeTab === 'privacy' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              <section id="privacy-1" className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">1. Introduction & Scope</h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  Zeronetz ("we," "us") provides high-end penetration testing and load testing services. This Privacy Policy explains how we collect, use, and protect personal data from visitors to our website, and how we handle personal data when acting on behalf of our clients in accordance with the General Data Protection Regulation (GDPR).
                </p>
                <div className="space-y-2.5 pt-2">
                  <p className="text-zinc-300 text-xs md:text-sm font-semibold">This policy applies to:</p>
                  <ul className="space-y-2 pl-2">
                    <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0 shadow-[0_0_8px_rgba(82,235,142,0.6)]" />
                      <span>Visitors to our website (data we control as a Data Controller)</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0 shadow-[0_0_8px_rgba(82,235,142,0.6)]" />
                      <span>Data encountered while performing services for clients (data we process as a Data Processor)</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="privacy-2" className="space-y-6">
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">2. Roles: Controller vs. Processor</h3>
                
                <div className="space-y-2">
                  <h4 className="text-sm md:text-base font-bold text-zinc-200">Controller (Website Data)</h4>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                    We are the Controller for personal data collected via our website, such as your name, email, or company information submitted through contact forms. We determine the purpose and means of processing this data.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm md:text-base font-bold text-zinc-200">Processor (Client Data)</h4>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                    We act as a Processor when handling personal data encountered during client engagements. This includes data such as system logs, metadata, or other client-related information. We process this data strictly under the terms of a Data Processing Agreement (DPA) and only according to client instructions.
                  </p>
                </div>
              </section>

              <section id="privacy-3" className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">3. Security Standards (ISO 27001)</h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  Zeronetz takes security seriously. We are ISO/IEC 27001 certified and adhere to globally recognized information security standards. Our measures include:
                </p>
                <ul className="space-y-3.5 pl-2 pt-2">
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0 shadow-[0_0_8px_rgba(82,235,142,0.6)]" />
                    <span><strong className="text-zinc-200">Encryption:</strong> All data in transit and at rest is encrypted using industry-standard protocols (e.g., TLS 1.3, AES-256).</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0 shadow-[0_0_8px_rgba(82,235,142,0.6)]" />
                    <span><strong className="text-zinc-200">Access Control:</strong> Only authorized engineers have access to project-specific data, protected by Multi-Factor Authentication (MFA).</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0 shadow-[0_0_8px_rgba(82,235,142,0.6)]" />
                    <span><strong className="text-zinc-200">Testing Integrity:</strong> All testing is conducted in secure, isolated environments to prevent cross-contamination of client data.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0 shadow-[0_0_8px_rgba(82,235,142,0.6)]" />
                    <span><strong className="text-zinc-200">Regular Audits:</strong> We perform periodic security audits to ensure compliance with ISO standards and internal policies.</span>
                  </li>
                </ul>
              </section>

              <section id="privacy-4" className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">4. International Data Transfers</h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  To support our global operations, we may transfer data to infrastructure outside the European Economic Area (EEA), including tools like Google Analytics 4 (GA4) or secure cloud storage.
                </p>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  We ensure these transfers comply with GDPR by:
                </p>
                <ul className="space-y-2.5 pl-2">
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0" />
                    <span>Using Standard Contractual Clauses (SCCs)</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0" />
                    <span>Ensuring our providers are certified under the EU-U.S. Data Privacy Framework</span>
                  </li>
                </ul>
              </section>

              <section id="privacy-5" className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">5. Data Retention</h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  We retain personal data only as long as necessary for business or contractual purposes:
                </p>
                <ul className="space-y-3 pl-2">
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0" />
                    <span><strong className="text-zinc-200 font-bold">Website Inquiries:</strong> Contact form submissions are retained for 24 months to manage communications and follow-ups.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0" />
                    <span><strong className="text-zinc-200 font-bold">Testing Logs and Reports:</strong> Client project data is deleted 90 days after the final report delivery, unless otherwise specified in the client contract.</span>
                  </li>
                </ul>
              </section>

              <section id="privacy-6" className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">6. Your GDPR Rights</h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  Individuals whose personal data we process have the following rights under GDPR:
                </p>
                <ul className="space-y-3 pl-2">
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0" />
                    <span><strong className="text-zinc-200">Access:</strong> You can request a copy of your personal data we hold.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0" />
                    <span><strong className="text-zinc-200">Rectification:</strong> You can request corrections to inaccurate or incomplete data.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0" />
                    <span><strong className="text-zinc-200">Erasure ("Right to be Forgotten"):</strong> You can request deletion of your personal data.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0" />
                    <span><strong className="text-zinc-200">Restriction:</strong> You can request that processing of your data is limited.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0" />
                    <span><strong className="text-zinc-200">Data Portability:</strong> You can request your data in a structured, machine-readable format.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0" />
                    <span><strong className="text-zinc-200">Objection:</strong> You can object to certain processing activities, such as direct marketing.</span>
                  </li>
                </ul>
                <p className="text-zinc-400 text-xs md:text-sm pt-2">
                  To exercise any of these rights, contact us at <span className="text-[#52eb8e] font-semibold underline decoration-emerald-800 underline-offset-4">hello@zeronetz.com</span>.
                </p>
              </section>

              <section id="privacy-7" className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">7. Cookies and Tracking</h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  Our website uses cookies and analytics tools (such as GA4) to improve user experience and analyze traffic. You can manage your cookie preferences via your browser settings.
                </p>
              </section>

              <section id="privacy-8" className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">8. Updates to This Policy</h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  We may update this Privacy Policy from time to time. The "Last Updated" date at the top reflects the most recent changes. We encourage you to review this page periodically for updates.
                </p>
              </section>
            </motion.div>
          )}

          {/* TAB 2: TERMS OF SERVICE */}
          {activeTab === 'terms' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              <section id="terms-1" className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">1. Acceptance of Terms</h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  By accessing our website or contracting Zeronetz for security services (including penetration testing, code auditing, vulnerability assessments, and threat modeling), you agree to be bound by these Terms of Service. If you do not agree to these terms, please refrain from using our services.
                </p>
              </section>

              <section id="terms-2" className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">2. Service Provision & Scope</h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  Zeronetz specializes in defensive cybersecurity and technical vulnerability audits. The exact scope, timeline, deliverables, and fees for any engineering engagement will be defined in a mutually signed Statement of Work (SOW). Any adjustments to the SOW must be agreed upon in writing by both parties.
                </p>
              </section>

              <section id="terms-3" className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">3. Client Authorization & Indemnification</h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  The client represents and warrants that they possess full, unambiguous legal authority to order security testing on the target infrastructure, networks, applications, and source code specified in the SOW.
                </p>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  The client shall indemnify and hold harmless Zeronetz and its engineers from any third-party claims, liabilities, or damages arising from testing performed on assets that the client did not have authorization to audit.
                </p>
              </section>

              <section id="terms-4" className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">4. Intellectual Property</h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  Zeronetz retains all ownership rights, copyrights, and intellectual property in our assessment methodologies, custom testing scripts, frameworks, and training materials. 
                </p>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  Upon full payment of all outstanding invoices, the client is granted a perpetual, non-exclusive, non-transferable license to use the final vulnerability reports and deliverables for their internal remediation and compliance purposes.
                </p>
              </section>

              <section id="terms-5" className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">5. Confidentiality Obligations</h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  Both parties agree to treat all non-public information obtained during the course of an engagement as highly confidential. Zeronetz will never publish or disclose vulnerability findings, client architecture, or client names without explicit, written consent from the client.
                </p>
              </section>

              <section id="terms-6" className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">6. Limitation of Liability</h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  Security testing involves inherent risks of system disruption or service degradation. While Zeronetz engineers exercise professional caution, under no circumstances will Zeronetz be liable for any indirect, incidental, special, or consequential damages, including loss of profits, data loss, or business interruption.
                </p>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  The total cumulative liability of Zeronetz for any claims arising out of an engagement shall not exceed the actual fees paid by the client under the specific SOW.
                </p>
              </section>

              <section id="terms-7" className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">7. Governing Law</h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  These Terms of Service shall be governed by and construed in accordance with the laws of our primary jurisdiction, without regard to conflicts of law principles. Any legal action or proceeding shall be brought exclusively in the courts located in our primary corporate registration.
                </p>
              </section>
            </motion.div>
          )}

          {/* TAB 3: SECURITY POLICY */}
          {activeTab === 'security' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              <section id="sec-1" className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">1. Security Philosophy</h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  As a leading cybersecurity firm, defense is our foundational code. Zeronetz operates on a Zero Trust architecture across all corporate systems, isolated sandboxes, and diagnostic environments. We treat client information with the highest tiers of confidentiality and protective partitioning.
                </p>
              </section>

              <section id="sec-2" className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">2. Operational Security & Personnel</h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  All Zeronetz offensive engineers and consultants undergo rigorous identity verification, continuous background screening, and carry recognized elite certifications (such as OSCP, OSCE, and OSWE). Our personnel operate under strict internal non-disclosure policies.
                </p>
              </section>

              <section id="sec-3" className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">3. Infrastructure & Isolation</h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  We maintain strict digital boundaries to avoid cross-contamination:
                </p>
                <ul className="space-y-3.5 pl-2 pt-2">
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0 shadow-[0_0_8px_rgba(82,235,142,0.6)]" />
                    <span><strong className="text-zinc-200">Dedicated Sandboxes:</strong> Every penetration test is conducted from dedicated, logically segmented virtual private servers with clean IP addresses.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0 shadow-[0_0_8px_rgba(82,235,142,0.6)]" />
                    <span><strong className="text-zinc-200">Encrypted Storages:</strong> All vulnerability logs, drafts, and client metadata are stored on encrypted containers utilizing AES-256 with offline key managers.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0 shadow-[0_0_8px_rgba(82,235,142,0.6)]" />
                    <span><strong className="text-zinc-200">Zero Retention:</strong> Raw network captures, payload test codes, and server logs from active audits are securely wiped using military-grade standards (DoD 5220.22-M) exactly 90 days after delivery.</span>
                  </li>
                </ul>
              </section>

              <section id="sec-4" className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">4. Vulnerability Disclosure Policy</h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  Zeronetz supports responsible, coordinated disclosure. If you are a security researcher and believe you have discovered a vulnerability on our website, corporate servers, or within our proprietary diagnostic tooling, we welcome your secure report.
                </p>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  Please encrypt and transmit your findings to <span className="text-[#52eb8e] font-semibold underline decoration-emerald-800 underline-offset-4">security@zeronetz.com</span>. We guarantee rapid initial triaging and commit to not pursuing legal action for reports that respect ethical research boundaries.
                </p>
              </section>

              <section id="sec-5" className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">5. Incident Management</h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  We maintain a structured, live incident response playbook. In the highly unlikely event of a security breach involving client report files or operational metadata, Zeronetz guarantees:
                </p>
                <ul className="space-y-2.5 pl-2">
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0" />
                    <span>Direct client notification within 12 hours of breach verification.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#52eb8e] mt-2 shrink-0" />
                    <span>Full forensic report delivery detailing affected endpoints and mitigation logs.</span>
                  </li>
                </ul>
              </section>

              <section id="sec-6" className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">6. Continuous Compliance Auditing</h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  Our internal controls, password strengths, firewall rules, and encryption standard configurations are periodically reviewed by independent third-party certification authorities to preserve our SOC 2 and ISO/IEC 27001 standing.
                </p>
              </section>
            </motion.div>
          )}

          {/* Bottom Card: Contact Information Card */}
          <div className="relative overflow-hidden bg-zinc-950/45 backdrop-blur-xl border border-white/[0.04] rounded-2xl p-6 md:p-8 mt-16 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)]">
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-[#52eb8e]/5 blur-[50px] rounded-full pointer-events-none" />
            
            <div className="flex items-center gap-2 text-[#52eb8e] mb-4">
              <Shield className="w-4 h-4" />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Contact Information</h4>
            </div>

            <div className="space-y-3.5 text-xs md:text-sm text-zinc-400 font-sans">
              <p className="font-semibold text-zinc-200">Zeronetz Ltd</p>
              
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-zinc-500" />
                <span>Email: <a href="mailto:hello@zeronetz.com" className="text-[#52eb8e] hover:underline">hello@zeronetz.com</a></span>
              </div>

              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-zinc-500" />
                <span>Website: <a href="https://zeronetz.com" target="_blank" rel="noreferrer" className="text-[#52eb8e] hover:underline">https://zeronetz.com</a></span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
