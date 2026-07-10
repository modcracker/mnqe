'use client';

import React, { useState } from 'react';
import { Shield, Eye, Lock, FileText, ArrowRight, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import Breadcrumbs from '@/components/Breadcrumbs';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://mnqe.com/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Privacy Policy',
      item: 'https://mnqe.com/privacy',
    },
  ],
};

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState('data-collection');

  const SECTIONS = [
    { id: 'data-collection', title: '1. Information We Collect' },
    { id: 'data-processing', title: '2. Purpose of Processing' },
    { id: 'data-protection', title: '3. Data Security & Backups' },
    { id: 'gdpr-ccpa', title: '4. GDPR & CCPA Compliance' },
    { id: 'cookies-tracking', title: '5. Cookies & Site Analytics' },
    { id: 'contact-dpo', title: '6. Direct Rights & Inquiries' },
  ];

  const handleScrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main className="min-h-screen pt-28 pb-20 bg-[#0B0F19] text-gray-300">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-radial-gradient(circle, rgba(109,93,252,0.02) 0%, rgba(0,0,0,0) 70%) pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
          
          {/* Header Area */}
          <div className="border-b border-white/5 pb-10 mb-12">
            <FadeIn y={15}>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#6D5DFC]/10 text-[#9c8eff] border border-[#6D5DFC]/20 w-fit mb-4">
                Trust & Security Hub
              </span>
              <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
                Privacy Policy <span className="text-[#6D5DFC]">.</span>
              </h1>
              <p className="text-gray-400 mt-3 text-base sm:text-lg max-w-4xl">
                Last updated: <span className="text-white font-mono font-medium">June 20, 2026</span>. We commit to maximum transactional privacy, absolute telemetry protection, and robust security standards across our entire showcase portfolio.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
            
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1 sticky top-28 hidden lg:flex flex-col gap-5 bg-[#0F1424] border border-white/5 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-[#6D5DFC]" />
                <span className="text-xs font-extrabold uppercase text-white tracking-wider font-display">Directory</span>
              </div>
              <nav className="flex flex-col gap-2">
                {SECTIONS.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => handleScrollTo(sec.id)}
                    className={`text-left text-xs font-medium py-2 px-3 rounded-lg border transition-all ${
                      activeSection === sec.id
                        ? 'bg-[#6D5DFC]/10 text-[#9c8eff] border-[#6D5DFC]/35'
                        : 'border-transparent text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {sec.title}
                  </button>
                ))}
              </nav>

              <div className="border-t border-white/5 pt-4 mt-2">
                <h5 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-mono">DPO Desk</h5>
                <p className="text-xs text-gray-400 mt-1">dpo@mnqe.com</p>
              </div>
            </div>

            {/* Document Content */}
            <div className="lg:col-span-3 flex flex-col gap-12 font-sans text-sm leading-relaxed text-gray-300">
              
              {/* Quick Summary card */}
              <FadeIn y={15} delay={0.1}>
                <div className="bg-[#0F1424] border border-white/5 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#6D5DFC]/5 rounded-full blur-2xl pointer-events-none" />
                  <div className="flex items-center gap-2.5 mb-4 text-white">
                    <Eye className="w-5 h-5 text-emerald-400" />
                    <h3 className="text-lg font-bold font-display">Privacy Highlights (TL;DR)</h3>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>No intrusive tracking:</strong> We do not track or sell your browsing histories or behavioral demographics.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Enterprise-grade Security:</strong> Live metrics use secure industry-standard TLS encryption at rest and in transit.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Cookie Control:</strong> No third-party marketing cookies. Local storage only stores safe session settings.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>User Ownership:</strong> You retain complete deletion and transfer rights on mock or registered project accounts.</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              {/* Section 1 */}
              <section id="data-collection" className="scroll-mt-28">
                <h3 className="text-xl font-bold font-display text-white mb-4 flex items-center gap-2">
                  <span className="text-[#6D5DFC]">01.</span> Information We Collect
                </h3>
                <div className="space-y-4">
                  <p>
                    MNQE operates under strict privacy-by-design standards. In running our digital analytics sandbox, we collect minimal data required to render customized query pipelines and manage requests for the domain acquisition:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-400">
                    <li>
                      <strong className="text-white">Form Details:</strong> If you explicitly use our Contact or domain-acquisition form, we collect your name, corporate email address, organization name, and optional details (such as budget tiers and messages).
                    </li>
                    <li>
                      <strong className="text-white">Device Diagnostics:</strong> We record standard server logs containing IP addresses, browser agents, routing paths, and relative latency variables to troubleshoot issues and maintain smooth load performance.
                    </li>
                    <li>
                      <strong className="text-white">Mockup UI preferences:</strong> Choices made on the demo dashboard (e.g., active tab selection, light theme preferences) are retained strictly locally in standard browser storage.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 2 */}
              <section id="data-processing" className="scroll-mt-28">
                <h3 className="text-xl font-bold font-display text-white mb-4 flex items-center gap-2">
                  <span className="text-[#6D5DFC]">02.</span> Purpose of Processing
                </h3>
                <div className="space-y-4">
                  <p>
                    Your data is never packaged, rented, or bartered to third parties. Every point of processing serves direct operational purposes under secure frameworks:
                  </p>
                  <ul className="list-decimal pl-5 space-y-2 text-gray-400">
                    <li>Responding directly to domain purchase proposals filed via verified escrow routes.</li>
                    <li>Analyzing query metrics to refine our layout responsiveness and network load structures.</li>
                    <li>Reviewing telemetry errors to prevent injection issues or unauthorized system attacks.</li>
                    <li>Fulfilling compliance guidelines mandated by domestic and global network registration registries.</li>
                  </ul>
                </div>
              </section>

              {/* Section 3 */}
              <section id="data-protection" className="scroll-mt-28">
                <h3 className="text-xl font-bold font-display text-white mb-4 flex items-center gap-2">
                  <span className="text-[#6D5DFC]">03.</span> Data Security & Encryption
                </h3>
                <div className="space-y-4">
                  <p>
                    We deploy cutting-edge technical controls to minimize risks of data integrity compromise, interception, or unauthorized changes:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <h4 className="font-semibold text-white mb-1 flex items-center gap-1.5">
                        <Lock className="w-3.5 h-3.5 text-emerald-400" />
                        AES-256 Encryption
                      </h4>
                      <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                        Data at rest on our secure container database is encrypted under standard AES-256 protocols to shield database files.
                      </p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <h4 className="font-semibold text-white mb-1 flex items-center gap-1.5">
                        <Shield className="w-3.5 h-3.5 text-blue-400" />
                        TLS v1.3 In-transit
                      </h4>
                      <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                        Communications between your client browser and the server endpoints use TLS v1.3 cryptographic protocols.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section id="gdpr-ccpa" className="scroll-mt-28">
                <h3 className="text-xl font-bold font-display text-white mb-4 flex items-center gap-2">
                  <span className="text-[#6D5DFC]">04.</span> GDPR & CCPA Compliance
                </h3>
                <div className="space-y-4">
                  <p>
                    Under European GDPR (General Data Protection Regulation) and California CCPA (California Consumer Privacy Act / CPRA), global visitors enjoy statutory privacy privileges:
                  </p>
                  <div className="space-y-3 pl-4 border-l-2 border-[#6D5DFC]/30 text-gray-400">
                    <p>
                      <strong>The Right of Access:</strong> You can request a standardized portable text file of all contact details we store relating to your email address.
                    </p>
                    <p>
                      <strong>The Right of Erasure (Forget Me):</strong> Command us to completely erase all email logs or broker communications we maintain, and our desks will immediately comply unless statutory retention governs.
                    </p>
                    <p>
                      <strong>The Right to Correction:</strong> rectifying erroneous transaction records or name fields.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section id="cookies-tracking" className="scroll-mt-28">
                <h3 className="text-xl font-bold font-display text-white mb-4 flex items-center gap-2">
                  <span className="text-[#6D5DFC]">05.</span> Cookies & Site Analytics
                </h3>
                <div className="space-y-4">
                  <p>
                    MNQE rejects aggressive marketing trackers or invasive ads profiling engines. We utilize minimal local session keys strictly to configure dashboards and UI modes:
                  </p>
                  <table className="w-full border-collapse border border-white/5 text-xs text-left text-gray-400 mt-4">
                    <thead>
                      <tr className="bg-white/5 text-white font-display">
                        <th className="p-3 border border-white/5">Storage Key / Cookie</th>
                        <th className="p-3 border border-white/5">Primary Purpose</th>
                        <th className="p-3 border border-white/5">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border border-white/5 font-mono text-white">prefers-reduced-motion</td>
                        <td className="p-3 border border-white/5">Detects OS reduced-motion flag to disable resource-intensive parallax scrolling.</td>
                        <td className="p-3 border border-white/5">Persistent / Dynamic</td>
                      </tr>
                      <tr>
                        <td className="p-3 border border-white/5 font-mono text-white">activeTab</td>
                        <td className="p-3 border border-white/5">Remembers your last viewed mockup dashboard channel tab (Metrics, Queries, APIs).</td>
                        <td className="p-3 border border-white/5">Local / Browser bounds</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 6 */}
              <section id="contact-dpo" className="scroll-mt-28">
                <h3 className="text-xl font-bold font-display text-white mb-4 flex items-center gap-2">
                  <span className="text-[#6D5DFC]">06.</span> Direct Rights & Inquiries
                </h3>
                <div className="space-y-4">
                  <p>
                    For inquiries, data requests, or compliance reviews, contact our designated Data Protection Officer (DPO) directly via secure secure desks:
                  </p>
                  <div className="bg-[#0F1424] border border-white/5 rounded-2xl p-6 flex flex-col gap-3 max-w-lg">
                    <div className="flex items-center gap-2 text-white font-semibold">
                      <Lock className="w-5 h-5 text-[#6D5DFC]" />
                      <span>Security & Compliance Desk</span>
                    </div>
                    <form onSubmit={(e) => { e.preventDefault(); alert("Secure compliance request queued."); }} className="flex flex-col gap-3 mt-2">
                      <p className="text-xs text-gray-400">
                        File a secure request by contacting <strong className="text-white">dpo@mnqe.com</strong> or using our direct routing support channel below:
                      </p>
                      <a 
                        href="/contact" 
                        className="w-full font-semibold text-center text-white bg-[#6D5DFC]/15 hover:bg-[#6D5DFC]/25 border border-[#6D5DFC]/40 py-2.5 rounded-xl transition-all text-xs flex items-center justify-center gap-1.5"
                      >
                        Navigate to Support Desk
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </form>
                  </div>
                </div>
              </section>

            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
