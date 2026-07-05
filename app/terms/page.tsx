'use client';

import React, { useState } from 'react';
import { Landmark, FileText, CheckCircle, HelpCircle, Shield, ArrowRight, BookOpen, AlertTriangle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState('acceptance');

  const SECTIONS = [
    { id: 'acceptance', title: '1. Acceptance of Terms' },
    { id: 'domain-provisions', title: '2. Domain Transfer & Escrow' },
    { id: 'intellectual-property', title: '3. Intellectual Property Rights' },
    { id: 'disclaimer', title: '4. Absolute Liability Disclaimer' },
    { id: 'licensing', title: '5. Showcase Representation' },
    { id: 'jurisdiction', title: '6. Governing Law' },
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
        name: 'Terms of Service',
        item: 'https://mnqe.com/terms',
      },
    ],
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
          <Breadcrumbs items={[{ label: 'Terms of Service' }]} />
          
          {/* Header Area */}
          <div className="border-b border-white/5 pb-10 mb-12">
            <FadeIn y={15}>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#6D5DFC]/10 text-[#9c8eff] border border-[#6D5DFC]/20 w-fit mb-4">
                Service Agreement
              </span>
              <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
                Terms of Service <span className="text-[#6D5DFC]">.</span>
              </h1>
              <p className="text-gray-400 mt-3 text-base sm:text-lg max-w-4xl">
                Last updated: <span className="text-white font-mono font-medium">June 20, 2026</span>. Please review this standardized corporate terms agreement governing domain negotiations, licensing, and database mockups.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
            
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1 sticky top-28 hidden lg:flex flex-col gap-5 bg-[#0F1424] border border-white/5 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-[#6D5DFC]" />
                <span className="text-xs font-extrabold uppercase text-white tracking-wider font-display">Sections</span>
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
                <h5 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-mono">Registry Desk</h5>
                <p className="text-xs text-gray-400 mt-1">legal@mnqe.com</p>
              </div>
            </div>

            {/* Document Content */}
            <div className="lg:col-span-3 flex flex-col gap-12 font-sans text-sm leading-relaxed text-gray-300">
              
              {/* Note about Domain Acquisition */}
              <FadeIn y={15} delay={0.1}>
                <div className="bg-[#6D5DFC]/5 border border-[#6D5DFC]/20 rounded-2xl p-6 sm:p-8 flex gap-4">
                  <Shield className="w-6 h-6 text-[#9c8eff] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-bold font-display text-white mb-1">Acquisition Notice</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      MNQE.com is an premium internet web domain currently licensed for transfer. Any proposals made through this showcase page are fully non-binding until certified contract agreements are executed by both parties on an accredited escrow portal (such as Escrow.com or GoDaddy Brand Broker services).
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Section 1 */}
              <section id="acceptance" className="scroll-mt-28">
                <h3 className="text-xl font-bold font-display text-white mb-4 flex items-center gap-2">
                  <span className="text-[#6D5DFC]">01.</span> Acceptance of Terms
                </h3>
                <div className="space-y-4 text-gray-400">
                  <p>
                    By navigating, interfacing, or querying this website (<span className="text-white">MNQE.com</span>), you agree to stand bound in full compliance with these terms of service, as well as all matching domestic, state, and global regulations.
                  </p>
                  <p>
                    If you disagree with any portion of these conditions, you must immediately terminate use of this website. All analytics dashboard interfaces, telemetry data tables, responsive charts, and mock variables are intended as functional concept showcases.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section id="domain-provisions" className="scroll-mt-28">
                <h3 className="text-xl font-bold font-display text-white mb-4 flex items-center gap-2">
                  <span className="text-[#6D5DFC]">02.</span> Domain Transfer & Escrow Services
                </h3>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Negotiations for the acquisition and transfer of the domain name <strong className="text-white">MNQE.com</strong> are strictly governed by specific security and compliance covenants:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong className="text-white">Escrow Mandate:</strong> To secure both parties, any financial transactions and transfer protocols must take place through a licensed global escrow provider (Escrow.com, GoDaddy BrandBroker, or Sedo).
                    </li>
                    <li>
                      <strong className="text-white">Authorisation Keys (AuthInfo):</strong> Following verified payout confirmation on the escrow vault, our coordinators release the unique domain authorization code (EPP key/AuthCode) inside 24 hours.
                    </li>
                    <li>
                      <strong className="text-white">Transfer Speed:</strong> Global DNS propagation and registrar switches may require up to 5 business days per standard ICANN guidelines.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 3 */}
              <section id="intellectual-property" className="scroll-mt-28">
                <h3 className="text-xl font-bold font-display text-white mb-4 flex items-center gap-2">
                  <span className="text-[#6D5DFC]">03.</span> Intellectual Property Rights
                </h3>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Unless explicitly indicated, all source code, layout visuals, components (such as the custom <span className="text-white font-mono">DashboardMockup</span> and responsive graphing elements), SVG assets, brand names, and digital copy appearing on this site are the exclusive intellectual property of MNQE Analytics.
                  </p>
                  <p>
                    You are granted a limited, personal, non-sublicensable, non-transferable license to load and view the public pages in standard web browsers for evaluations. You may not scrape, clone, or redistribute the analytics code or frame visual systems for commercial profit without direct prior written consent.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section id="disclaimer" className="scroll-mt-28">
                <h3 className="text-xl font-bold font-display text-white mb-4 flex items-center gap-2">
                  <span className="text-[#6D5DFC]">04.</span> Absolute Liability Disclaimer
                </h3>
                <div className="space-y-4 text-gray-400">
                  <div className="p-4 bg-red-500/5 border border-red-500/15 rounded-xl flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-red-250 leading-relaxed font-mono uppercase tracking-wider font-semibold">
                        WARRANTY LIMITATION NOTICE
                      </p>
                      <p className="text-xs text-gray-400 leading-relaxed mt-1">
                        THE SITES, GRAPH INTERFACES, DATA DISCLOSURES, APIS, AND SERVICES ARE PROVIDED ON AN &quot;AS-IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. WE DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                      </p>
                    </div>
                  </div>
                  <p>
                    MNQE Analytics Inc. shall in no event stand liable for any indirect, incidental, special, consequential, or punitive damages (including without limitation lost profits, data erasure, or network service timeouts) arising from your access or inability to interface with this site.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section id="licensing" className="scroll-mt-28">
                <h3 className="text-xl font-bold font-display text-white mb-4 flex items-center gap-2">
                  <span className="text-[#6D5DFC]">05.</span> Showcase and Demo Provisions
                </h3>
                <div className="space-y-4 text-gray-400">
                  <p>
                    The analytical variables, graph loops, API keys query streams, and log values rendered on this site are simulation items generated for user evaluation. Any resemblance of logs or names in dashboards to active systems, live production parameters, or active business analytics is entirely coincidental.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section id="jurisdiction" className="scroll-mt-28">
                <h3 className="text-xl font-bold font-display text-white mb-4 flex items-center gap-2">
                  <span className="text-[#6D5DFC]">06.</span> Governing Law & Jurisdiction
                </h3>
                <div className="space-y-4 text-gray-400">
                  <p>
                    This agreement, and any claims or disputes stemming from your interactions with MNQE.com, are governed directly by laws of California, United States, without regard to conflicts of law guidelines.
                  </p>
                  <p>
                    You agree to submit to personal jurisdiction and exclusive venue of state and federal courts located in California, USA for all disputes linked to these conditions.
                  </p>
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
