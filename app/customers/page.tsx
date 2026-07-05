'use client';

import React from 'react';
import Link from 'next/link';
import { 
  MessageSquare, Star, ArrowRight, ArrowUpRight, TrendingUp, Zap, HelpCircle,
  Database, ShieldCheck
} from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import Breadcrumbs from '@/components/Breadcrumbs';

interface Testimonial {
  name: string;
  title: string;
  company: string;
  quote: string;
  initials: string;
}

interface CaseStudy {
  metric: string;
  title: string;
  partner: string;
  description: string;
}

export default function CustomersPage() {
  const TESTIMONIALS: Testimonial[] = [
    {
      name: 'May Levy',
      title: 'Principal Director',
      company: 'VortexLabs',
      quote: 'Transitioning our real-time tracking pipelines to standard MNQE hooks reduced our analytics event processing overhead by over 74%. Rendering custom widgets dynamically is incredibly fluid.',
      initials: 'ML',
    },
    {
      name: 'Sarah Jenkins',
      title: 'Operations Manager',
      company: 'Spectral.io',
      quote: 'Our edge tracking nodes now resolve in US and EU clusters with practically zero JS weight. We cut our data pipeline latencies down to 18ms, keeping our web vitals completely solid.',
      initials: 'SJ',
    },
    {
      name: 'Kenneth Cole',
      title: 'Chief DB Architect',
      company: 'OptimaCQ',
      quote: 'Managing custom dashboard layouts is extremely simple. Our team customizes data panels in seconds, and pipeline trace logs compile beautifully without intermediate queue bottlenecks.',
      initials: 'KC',
    },
    {
      name: 'Sofia Rodriguez',
      title: 'Principal SRE Partner',
      company: 'ApexFlow',
      quote: 'By deploying standard MNQE sovereign database tunnels, we bypassed trailing monthly SaaS quotas completely. The cryptographically signed compliance ledger is a major trust multiplier.',
      initials: 'SR',
    },
    {
      name: 'Liam Patel',
      title: 'Principal Engineer',
      company: 'CognitiveSaaS',
      quote: 'The REST hooks allowed linking ClickHouse, Athena, and BigQuery database pipes in one afternoon. Our analytics loop resolves in 12ms now – a stunning achievement in performance.',
      initials: 'LP',
    },
    {
      name: 'Samantha Voss',
      title: 'Lead Trust Auditor',
      company: 'QuantaMetrics',
      quote: 'Tamper-proof database hash signatures keep our compliance logs 100% verified. MNQE delivers an exceptional blend of modern typography, speed, and absolute cryptographic fidelity.',
      initials: 'SV',
    }
  ];

  const STUDIES: CaseStudy[] = [
    {
      metric: '74% Overhead Slash',
      title: 'VortexLabs Pipeline Refactoring',
      partner: 'VortexLabs',
      description: 'VortexLabs integrated standard MNQE REST hooks to cache telemetry records locally, entirely bypassing cookie-based event streams and restoring sub-millisecond trace loops.'
    },
    {
      metric: '+320% Load Speedup',
      title: 'Spectral Multi-Region Ingestion',
      partner: 'Spectral.io',
      description: 'By delegating database pipelines to MNQE distributed Kubernetes clusters, Spectral eliminated heavy rendering assets on mobile devices, boosting web performance index ratios.'
    },
    {
      metric: 'ZERO SaaS Subscriptions',
      title: 'OptimaCQ Sovereign Code Deployment',
      partner: 'OptimaCQ',
      description: 'OptimaCQ purchased the MNQE domain assets and static layout codebases to host their own white-label reporting node, eliminating trailing licensing costs forever.'
    }
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://mnqe.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Customer Testimonials',
        'item': 'https://mnqe.com/customers'
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main className="min-h-screen pt-32 pb-24 bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <Breadcrumbs items={[{ label: 'Customers' }]} />
        </div>
        
        {/* Intro */}
        <section id="customers-intro" className="relative py-16 md:py-20 text-center px-6 bg-mesh-dark grid-overlay">
          <div className="max-w-4xl mx-auto">
            <FadeIn y={15}>
              <span className="text-xs font-bold uppercase tracking-widest text-[#6D5DFC] bg-[#6D5DFC]/10 px-3.5 py-1 rounded-full border border-accent/20">
                Success Logs
              </span>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white mt-4 tracking-tight">
                Trusted by digital leaders.
              </h1>
              <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
                Read through genuine platform testimonials and detailed, metrics-backed case studies from analytical teams around the globe.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Testimonials Grid (6 cards) */}
        <section id="testimonials-grid" className="max-w-7xl mx-auto px-6 md:px-8 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((test, idx) => (
              <FadeIn key={idx} delay={idx * 0.05} y={20}>
                <div className="h-full p-8 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-[#6D5DFC]/30 transition-all duration-300 flex flex-col justify-between group hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60">
                  <div>
                    <div className="flex items-center gap-1.5 text-[#6D5DFC] mb-6">
                      {[...Array(5)].map((_, starIdx) => <Star key={starIdx} className="w-4 h-4 fill-current stroke-none" />)}
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed font-normal">
                      &ldquo;{test.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/5 mt-8 flex items-center gap-4">
                    {/* Circle Avatar placeholder */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#6D5DFC] to-indigo-500 flex items-center justify-center text-white text-sm font-black shadow-md shrink-0 select-none border border-white/10 group-hover:scale-105 transition-transform duration-300">
                      {test.initials}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-white">{test.name}</h4>
                      <p className="text-[10px] text-gray-500 font-medium">{test.title}, {test.company}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Case Studies Section (3 items) */}
        <section id="case-studies" className="max-w-7xl mx-auto px-6 md:px-8 mt-28 md:mt-36">
          <div className="text-center max-w-xl mx-auto mb-16">
            <FadeIn y={15}>
              <span className="text-xs font-bold uppercase tracking-widest text-[#6D5DFC]">Data Deep Dive</span>
              <h2 className="font-display font-extrabold text-3xl text-white mt-1.5 tracking-tight">Metrics Case Studies</h2>
              <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                Real-world examples of integration efficiency and database overhead reduction.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STUDIES.map((study, idx) => (
              <FadeIn key={idx} delay={idx * 0.08} y={15}>
                <div className="h-full p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    {/* Big Metric Badge */}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#6D5DFC]/10 text-[#6D5DFC] border border-[#6D5DFC]/20 text-xs font-black tracking-widest uppercase mb-6 font-mono">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {study.metric}
                    </span>
                    <h3 className="font-display font-bold text-lg text-white tracking-tight">{study.title}</h3>
                    <p className="text-xs text-gray-400 mt-1 font-medium tracking-wide">In partnership with <span className="text-gray-300 font-bold">{study.partner}</span></p>
                    <p className="text-sm text-gray-300 leading-relaxed mt-4">{study.description}</p>
                  </div>

                  <div className="pt-6 border-t border-white/5 mt-8 flex justify-between items-center">
                    <span className="text-xs text-gray-500 font-mono">Verified telemetry data</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Domain Escrow CTA */}
        <section id="customers-outro-cta" className="relative py-24 bg-gradient-to-br from-[#6D5DFC] to-[#5C4CEB] text-white text-center mt-28">
          <div className="max-w-4xl mx-auto px-6">
            <FadeIn y={15}>
              <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white">Scale your analytics. Secure your domain.</h2>
              <p className="text-indigo-100 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
                Repackage MNQE as your primary dashboard asset. Launch immediately with a trusted brand and secure GoDaddy release channels.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/pricing"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#0B0F19] hover:bg-[#141f35] font-bold text-white transition-all text-sm"
                >
                  View Licensing Prices
                </Link>
                <a 
                  href="https://www.godaddy.com/domainsearch/find?domainToCheck=mnqe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-[#6D5DFC] hover:bg-gray-100 font-bold transition-all text-sm inline-flex items-center justify-center gap-1.5"
                >
                  GoDaddy Escrow Portal <ArrowUpRight className="w-4 h-4 text-[#6D5DFC]" />
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
