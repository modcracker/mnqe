'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Layers, BarChart2, Cpu, Users, Database, ShieldAlert, Sparkles,
  ArrowRight, ShieldCheck, Zap, Sliders, Play, Code, ArrowUpRight
} from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import Breadcrumbs from '@/components/Breadcrumbs';
import { BrandBackgroundArt } from '@/components/BrandArtwork';

interface FeatureItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  paragraph: string;
  linkUrl: string;
  linkLabel: string;
  visualComponent: React.ReactNode;
}

export default function FeaturesPage() {
  const FEATURES: FeatureItem[] = [
    {
      id: 'interactive-dashboards',
      icon: <Layers className="w-6 h-6 text-white" />,
      title: 'Interactive Live Dashboards',
      paragraph: 'Drag and drop customizable cards, create telemetry feeds, and track cohort behavior. Our layout responds instantaneously with zero latency to maintain a fast experience.',
      linkUrl: '/product#dashboards',
      linkLabel: 'Explore Mockup Dashboards',
      visualComponent: (
        <div className="w-full h-72 rounded-2xl bg-[#0F1424] border border-white/5 p-6 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-44 h-44 bg-[#6D5DFC]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex items-center gap-2 text-xs font-mono text-gray-500 pb-3 border-b border-white/5">
            <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
            <span>Dashboard view: active_sessions_channel</span>
          </div>
          <div className="flex-1 flex items-end gap-2 pt-6">
            {[45, 62, 53, 78, 64, 85, 95, 70, 82, 100, 89, 74, 92].map((v, i) => (
              <div 
                key={i} 
                className="flex-1 bg-gradient-to-t from-[#6D5DFC]/20 to-[#6D5DFC] rounded-t transition-transform duration-300 hover:scale-y-105" 
                style={{ height: `${v}%` }} 
              />
            ))}
          </div>
          <div className="flex justify-between items-center text-[10px] text-gray-500 font-mono mt-3">
            <span>Query speed: 1.2ms</span>
            <span className="text-[#6D5DFC] font-bold">LIVE STREAMING ACTIVE</span>
          </div>
        </div>
      )
    },
    {
      id: 'custom-reports',
      icon: <BarChart2 className="w-6 h-6 text-white" />,
      title: 'Custom Reporting Engine',
      paragraph: 'Sift through millions of lines of telemetry with instant filtering. Render PDF reports or customize automated summary streams with deep performance insights on every view.',
      linkUrl: '/product#reports',
      linkLabel: 'Review Reporting Formats',
      visualComponent: (
        <div className="w-full h-72 rounded-2xl bg-[#0B0F19] border border-white/5 p-6 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between text-xs pb-3 border-b border-white/5 text-gray-400 font-medium">
            <span>Query Optimizer Report_q4.xml</span>
            <span className="text-emerald-400 font-mono text-[10px]">A+ Optimized</span>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-3 font-mono text-xs text-gray-500">
            <div className="flex justify-between p-2 rounded bg-white/[0.02]">
              <span>SELECT SUM(duration) FROM page_views</span>
              <span className="text-white">Done (12ms)</span>
            </div>
            <div className="flex justify-between p-2 rounded bg-white/[0.02]">
              <span>GROUP BY cohort_age ORDER BY priority</span>
              <span className="text-white">Done (8ms)</span>
            </div>
            <div className="flex justify-between p-2 rounded bg-[#6D5DFC]/10 border border-[#6D5DFC]/20">
              <span>OUTPUT FORMAT = JSON_PREMIUM_TRANSPOSE</span>
              <span className="text-[#6D5DFC] font-bold">14,302 items</span>
            </div>
          </div>
          <p className="text-[10px] text-gray-600 font-mono">Telemetry database engine. Escrow deal audited.</p>
        </div>
      )
    },
    {
      id: 'api-integrations',
      icon: <Database className="w-6 h-6 text-white" />,
      title: 'Third-Party API Integrations',
      paragraph: 'Connect database channels instantly. Standard REST hooks allow syncing telemetry records effortlessly across different providers without intermediate caching bottlenecks.',
      linkUrl: '/product#integrations',
      linkLabel: 'Inspect API Connectors',
      visualComponent: (
        <div className="w-full h-72 rounded-2xl bg-[#0F1424] border border-white/5 p-6 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
            <span>Unified Database Bridge</span>
            <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[#6D5DFC] text-[9px] font-bold font-mono">18 Live Pipes</span>
          </div>
          <div className="grid grid-cols-3 gap-3 flex-1 items-center">
            {['Escrow Node', 'ClickHouse', 'Kubernetes', 'S3 Vault', 'Snowflake', 'BigQuery'].map((db, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center gap-2 hover:border-[#6D5DFC]/30 transition-all">
                <span className="text-sm font-bold text-white tracking-tight">{db}</span>
                <span className="text-[9px] text-[#6D5DFC] font-mono">Operational</span>
              </div>
            ))}
          </div>
          <div className="text-[10px] text-gray-500 text-center font-mono">Encrypted with TLS 1.3 tunnels</div>
        </div>
      )
    },
    {
      id: 'team-collaboration',
      icon: <Users className="w-6 h-6 text-white" />,
      title: 'Multiuser Team Collaboration',
      paragraph: 'Organize project folders and tag teammates seamlessly. Sync visual feedback workspaces instantly onto our dashboard boards and coordinate reports synchronously in real-time.',
      linkUrl: '/product#collaboration',
      linkLabel: 'Explore Workspace Options',
      visualComponent: (
        <div className="w-full h-72 rounded-2xl bg-[#0B0F19] border border-white/5 p-6 flex flex-col justify-between relative overflow-hidden">
          <span className="text-xs font-bold text-gray-400">Teammate Interaction Board</span>
          <div className="flex flex-col gap-3 py-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#6D5DFC] flex items-center justify-center text-xs font-bold text-white">ML</div>
              <div>
                <h5 className="text-xs font-bold text-white">May Levy</h5>
                <p className="text-[10px] text-gray-500">Editing Dashboard Overview Panel</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-xs font-bold text-white">AB</div>
              <div>
                <h5 className="text-xs font-bold text-white">Alex Baker</h5>
                <p className="text-[10px] text-gray-500">Exporting Custom PDF Report</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-500">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-gray-400">+3</div>
              <p className="text-[10px] font-medium font-mono">other active collaborators online</p>
            </div>
          </div>
          <div className="text-[10px] text-gray-600 font-mono">Collaboration channel verified</div>
        </div>
      )
    },
    {
      id: 'edge-caching',
      icon: <Cpu className="w-6 h-6 text-white" />,
      title: 'Edge Network Caching',
      paragraph: 'Deliver super-cached dashboards closest to your users. Routing intelligence transfers analytics payload automatically to servers in US-East, US-West, EU-West, or Asia.',
      linkUrl: '/product#servers',
      linkLabel: 'Read Cluster Specifications',
      visualComponent: (
        <div className="w-full h-72 rounded-2xl bg-[#0F1424] border border-white/5 p-6 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>Edge Node Dispersion</span>
            <span className="text-[#6D5DFC] font-bold font-mono">4 Regions</span>
          </div>
          <div className="flex justify-around items-center flex-1">
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-ping" />
              <span className="text-xs text-white uppercase font-bold">US-East</span>
              <span className="text-[9px] text-gray-500">9ms ping</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-3 h-3 bg-emerald-400 rounded-full" />
              <span className="text-xs text-white uppercase font-bold">EU-West</span>
              <span className="text-[9px] text-gray-500">22ms ping</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-3 h-3 bg-[#6D5DFC] rounded-full animate-pulse" />
              <span className="text-xs text-white uppercase font-bold">AP-East</span>
              <span className="text-[9px] text-gray-500">76ms ping</span>
            </div>
          </div>
          <p className="text-[10px] text-center text-gray-500 font-mono">Dynamic geolocation-based resolving</p>
        </div>
      )
    },
    {
      id: 'cryptographic-audit',
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: 'Advanced Cryptographic Audit Trails',
      paragraph: 'Maintain 100% data fidelity compliance over internal metrics. Every database entry produces cryptographic signatures, ensuring historical trace logs are fully tamper-proof.',
      linkUrl: '/product#security',
      linkLabel: 'Review Trust Compliance',
      visualComponent: (
        <div className="w-full h-72 rounded-2xl bg-[#0B0F19] border border-white/5 p-6 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Block Signature Verified</span>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-2 font-mono text-[10px] text-gray-500">
            <p>BLOCK #19,238: SIGNED BY MNQE_EDGE_NODE_01</p>
            <p>HASH: <span className="text-gray-300">0x8F9E...2A3D (SHA-256)</span></p>
            <p>PREV_HASH: <span className="text-gray-300">0x7B8C...1C5A</span></p>
            <div className="p-2 border border-emerald-500/20 bg-emerald-500/5 rounded text-emerald-400">
              AUDIT LOG CHAIN CONFIRMED SECURE
            </div>
          </div>
          <span className="text-[10px] text-gray-600 font-mono">100% immutable ledger</span>
        </div>
      )
    },
    {
      id: 'custom-filter-automation',
      icon: <Sliders className="w-6 h-6 text-white" />,
      title: 'Custom Filter Automation',
      paragraph: 'Configure granular triggers that organize analytics streams automatically. Intercept records upon entry and pipe coordinates dynamically into different visual dashboard widgets.',
      linkUrl: '/product#reports',
      linkLabel: 'Check Pipeline Rules',
      visualComponent: (
        <div className="w-full h-72 rounded-2xl bg-[#0F1424] border border-white/5 p-6 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>Filter Rule: custom_filter_route</span>
            <span className="text-emerald-400 font-mono">Active</span>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-2.5 font-mono text-[11px] text-[#6D5DFC]/90">
            <p className="text-gray-400">if (event.type === &quot;acquisition&quot; &amp;&amp; domain.status === &quot;available&quot;) &#123;</p>
            <p className="pl-4 text-white">pipeToWidget(&quot;Premium Escrow Status&quot;);</p>
            <p className="pl-4 text-emerald-400">notifyStakeholder(&quot;maylevy89@gmail.com&quot;);</p>
            <p className="text-gray-400">&#125;</p>
          </div>
          <p className="text-[10px] text-gray-500 font-mono">Runs on server-side edge node compiler</p>
        </div>
      )
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
        'name': 'Features',
        'item': 'https://mnqe.com/features'
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

      <main className="min-h-screen pt-32 bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <Breadcrumbs items={[{ label: 'Features' }]} />
        </div>
        
        {/* Banner Section */}
        <section id="features-intro" className="relative py-16 md:py-24 text-center px-6 bg-mesh-dark grid-overlay overflow-hidden">
          {/* Oversized High-Precision Corporate Branding Art Layer */}
          <BrandBackgroundArt className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] opacity-[0.2] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto relative z-10">
            <FadeIn y={15}>
              <span className="text-xs font-bold uppercase tracking-widest text-[#6D5DFC] bg-[#6D5DFC]/10 px-3 py-1 rounded-full border border-accent/20">
                Core Engines
              </span>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white mt-4 tracking-tight">
                Features engineered for massive telemetry.
              </h1>
              <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
                Empower your data pipeline with standard compliance, blazing fast edge resolving, and modular multiuser boards. Read through our core platform capabilities below.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* 7 Alternating feature rows */}
        <section id="features-matrix" className="pb-32">
          {FEATURES.map((feat, idx) => {
            const isEven = idx % 2 === 0;
            const borderTopClass = idx === 0 ? '' : 'border-t border-white/5';
            const bgClass = isEven ? 'bg-[#0B0F19] bg-mesh-dark' : 'bg-[#F7F8FA] text-[#14161F]';
            const textMutedClass = isEven ? 'text-gray-400 animate-pulse' : 'text-gray-600';
            const headerColClass = isEven ? 'text-white' : 'text-[#14161F]';

            return (
              <div 
                key={feat.id} 
                className={`${bgClass} ${borderTopClass} py-24 md:py-32 px-6 md:px-8 overflow-hidden transition-colors duration-300`}
              >
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  
                  {/* Visual Col */}
                  <div className={`w-full ${isEven ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}`}>
                    <FadeIn delay={0.15} y={25}>
                      {feat.visualComponent}
                    </FadeIn>
                  </div>

                  {/* Text Col */}
                  <div className={`flex flex-col gap-5 ${isEven ? 'order-1 lg:order-2' : 'order-1 lg:order-1'}`}>
                    <FadeIn y={20}>
                      <div className="w-12 h-12 rounded-xl bg-[#6D5DFC] flex items-center justify-center shadow-lg shadow-accent/20 mb-4 text-white">
                        {feat.icon}
                      </div>
                      <h2 className={`font-display font-extrabold text-2xl md:text-3xl ${headerColClass} tracking-tight leading-tight`}>
                        {feat.title}
                      </h2>
                      <p className={`mt-4 text-sm md:text-base leading-relaxed ${isEven ? 'text-gray-300' : 'text-gray-600'}`}>
                        {feat.paragraph}
                      </p>
                      
                      <div className="pt-6">
                        <Link 
                          href={feat.linkUrl} 
                          className="font-bold text-sm text-[#6D5DFC] hover:underline inline-flex items-center gap-1.5 group select-none"
                        >
                          {feat.linkLabel}
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </div>
                    </FadeIn>
                  </div>

                </div>
              </div>
            );
          })}
        </section>

        {/* Global Bottom Section linking to Pricing */}
        <section id="features-outro-cta" className="relative py-20 bg-gradient-to-br from-[#6D5DFC] to-[#5C4CEB] text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <FadeIn y={15}>
              <h2 className="font-display font-extrabold text-2xl md:text-4xl">Ready to acquire mnqe.com?</h2>
              <p className="text-indigo-100 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
                A premium 4-letter brand with a ready-made SaaS layout is a massive portfolio multiplier. Start your escrow acquisition today.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Link 
                  href="/pricing"
                  className="px-6 py-3 rounded-lg bg-[#0B0F19] hover:bg-[#15203a] font-bold text-white transition-all text-sm"
                >
                  View Pricing Plans
                </Link>
                <a 
                  href="https://www.godaddy.com/domainsearch/find?domainToCheck=mnqe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-white text-[#6D5DFC] hover:bg-gray-100 font-bold transition-all text-sm inline-flex items-center gap-1"
                >
                  Acquire Domain <ArrowUpRight className="w-4 h-4" />
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
