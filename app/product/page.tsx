'use client';

import React from 'react';
import Link from 'next/link';
import { useScroll, useTransform, motion } from 'motion/react';
import { useSafeReducedMotion } from '@/hooks/use-reduced-motion';
import { 
  Layers, BarChart2, Database, Users, ArrowRight, CheckCircle2,
  Cpu, Terminal, Shield, FolderOpen, ArrowUpRight
} from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import DashboardMockup from '@/components/DashboardMockup';
import Breadcrumbs from '@/components/Breadcrumbs';
import { BrandBackgroundArt } from '@/components/BrandArtwork';

// Product schema
const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  'name': 'MNQE Enterprise Suite',
  'operatingSystem': 'All',
  'applicationCategory': 'BusinessApplication',
  'description': 'Advanced real-time web telemetry system tracking cohort engagement rates securely with low-latency caches.',
  'offers': {
    '@type': 'Offer',
    'price': '99.00',
    'priceCurrency': 'USD'
  }
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://mnqe.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Product Overview",
      "item": "https://mnqe.com/product"
    }
  ]
};

export default function ProductPage() {
  const prefersReduced = useSafeReducedMotion();
  const { scrollY } = useScroll();
  
  // Parallax translation for the background behind the main hero mockup (approx 35%)
  const yBg = useTransform(scrollY, [0, 600], [0, 200]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main className="min-h-screen pt-32 bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <Breadcrumbs items={[{ label: 'Product Suite' }]} />
        </div>
        
        {/* HERO SECTION: Dashboard Hero + Parallax Layer */}
        <section id="product-hero" className="relative py-16 md:py-24 px-6 bg-mesh-dark overflow-hidden grid-overlay">
          {/* Oversized High-Precision Corporate Branding Art Layer */}
          <BrandBackgroundArt className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-[0.25] pointer-events-none" />
          
          {/* Parallax Background Glow Behind Mockup */}
          {!prefersReduced ? (
            <motion.div 
              style={{ y: yBg }} 
              className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#6D5DFC]/10 rounded-full blur-3xl pointer-events-none" 
            />
          ) : (
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#6D5DFC]/10 rounded-full blur-3xl pointer-events-none" />
          )}

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <FadeIn y={15}>
              <span className="text-xs font-bold uppercase tracking-widest text-white bg-white/10 px-3 py-1 rounded-full border border-white/10">
                Performance Dashboard
              </span>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white mt-4 tracking-tight leading-tight">
                Architected for data fidelity.
              </h1>
              <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
                Take a granular look at the core structure. Powering fast telemetry ingestion, customizable layout anchors, enterprise database tunnels, and multiuser boards.
              </p>
            </FadeIn>

            {/* Dashboard Mockup Main Showcase */}
            <FadeIn delay={0.25} y={30} className="w-full max-w-5xl mx-auto mt-16 md:mt-20">
              <div className="p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/5 shadow-3xl shadow-black/90">
                <DashboardMockup />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 4 SUB-SECTIONS WITH ANCHOR IDS */}
        
        {/* SUBSECTION 1: #dashboards */}
        <section 
          id="dashboards" 
          className="relative py-24 md:py-32 px-6 md:px-8 bg-[#F7F8FA] text-[#14161F] border-t border-gray-200"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="flex flex-col gap-6">
              <FadeIn y={15}>
                <div className="w-10 h-10 rounded-xl bg-[#6D5DFC] text-white flex items-center justify-center mb-2 shadow-lg">
                  <Layers className="w-5 h-5" />
                </div>
                <h2 className="font-display font-extrabold text-3xl text-[#14161F] tracking-tight">
                  High-density dynamic dashboard dashboards
                </h2>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Tailor your views to show precisely what is relevant to your operations. Select from an exhaustive gallery of charts, trace graphs, latency meters, and event stream indicators.
                </p>
              </FadeIn>

              <FadeIn delay={0.2} y={15}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  <div className="p-4 rounded-xl bg-white border border-gray-250 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#6D5DFC] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-gray-800">Dynamic Drag-and-Drop</h4>
                      <p className="text-xs text-gray-500 mt-1">Reposition dashboard widgets dynamically on any screen resolutions.</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-gray-250 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#6D5DFC] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-gray-800">Custom Refresh Rates</h4>
                      <p className="text-xs text-gray-500 mt-1">Configure individual widgets to stream records live or on timer schedules.</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            <FadeIn y={25} className="w-full">
              {/* Visual mock block */}
              <div className="w-full rounded-2xl bg-white border border-gray-200 shadow-xl overflow-hidden p-6 hover:shadow-2xl transition-all duration-300">
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Active Core Widgets</span>
                  <span className="text-xs text-emerald-500 font-bold bg-emerald-50/80 px-2.5 py-0.5 rounded-full border border-emerald-100">Synchronized</span>
                </div>
                <div className="flex flex-col gap-4 pt-4">
                  <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="bg-[#6D5DFC] h-full" style={{ width: '85%' }} />
                  </div>
                  <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="bg-[#6D5DFC]/70 h-full" style={{ width: '64%' }} />
                  </div>
                  <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="bg-indigo-300 h-full" style={{ width: '42%' }} />
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-400 font-mono mt-6">
                  <span>Valued Domain: mnqe.com</span>
                  <span>SSL verified</span>
                </div>
              </div>
            </FadeIn>

          </div>
        </section>

        {/* SUBSECTION 2: #reports */}
        <section 
          id="reports" 
          className="relative py-24 md:py-32 px-6 md:px-8 bg-[#0B0F19] bg-mesh-dark text-white border-t border-white/5"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <FadeIn y={25} className="order-2 lg:order-1 w-full">
              <div className="w-full rounded-2xl bg-[#0F1424] border border-white/5 p-6 flex flex-col justify-between min-h-[280px]">
                <div className="flex justify-between items-center text-xs text-gray-400 font-mono pb-4 border-b border-white/5">
                  <span>File Output: weekly_cohort_report_v4.pdf</span>
                  <span className="text-[#6D5DFC]">READY</span>
                </div>
                <div className="flex-1 flex flex-col justify-center gap-3 font-mono text-[11px] text-gray-400 py-4">
                   <div className="flex justify-between bg-white/[0.01] p-2 rounded">
                     <span>Processed volume:</span>
                     <span className="text-white">14.3M events</span>
                   </div>
                   <div className="flex justify-between bg-white/[0.01] p-2 rounded">
                     <span>Database latency:</span>
                     <span className="text-white">18.4ms average</span>
                   </div>
                   <div className="flex justify-between bg-[#6D5DFC]/10 border border-[#6D5DFC]/20 p-2 rounded text-[#6D5DFC] font-bold">
                     <span>SLA confirmation status:</span>
                     <span>99.98% SUCCESS</span>
                   </div>
                </div>
                <p className="text-[9px] text-gray-600 font-mono text-center">Cryptographically signed by MNQE-CORE-ENGINE-01</p>
              </div>
            </FadeIn>

            <div className="order-1 lg:order-2 flex flex-col gap-6">
              <FadeIn y={15}>
                <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center mb-2 border border-white/10">
                  <BarChart2 className="w-5 h-5 mr-0.5 mt-0.5" />
                </div>
                <h2 className="font-display font-extrabold text-3xl text-white tracking-tight">
                  Granular Custom Reports
                </h2>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  Compile analytics datasets into stylized summaries. Filter, sort, or slice metrics to output custom formats like JSON, XML, or fully compiled audit-ready PDFs showing exact transaction compliance.
                </p>
              </FadeIn>

              <FadeIn delay={0.2} y={15}>
                <ul className="flex flex-col gap-3">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#6D5DFC] shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-gray-300">Automated weekly cron streams direct to subscriber emails.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#6D5DFC] shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-gray-300">Customizable telemetry parameters with regex rules.</span>
                  </li>
                </ul>
              </FadeIn>
            </div>

          </div>
        </section>

        {/* SUBSECTION 3: #integrations */}
        <section 
          id="integrations" 
          className="relative py-24 md:py-32 px-6 md:px-8 bg-[#F7F8FA] text-[#14161F] border-t border-gray-200"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="flex flex-col gap-6">
              <FadeIn y={15}>
                <div className="w-10 h-10 rounded-xl bg-[#6D5DFC] text-white flex items-center justify-center mb-2 shadow-lg">
                  <Database className="w-5 h-5" />
                </div>
                <h2 className="font-display font-extrabold text-3xl text-[#14161F] tracking-tight">
                  Enterprise DB integrations
                </h2>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Pipe analytics data instantly into external datastores like ClickHouse, BigQuery, or Amazon S3. No complex pipeline setups required — simply establish a secure token and stream records.
                </p>
              </FadeIn>

              <FadeIn delay={0.2} y={15}>
                <div className="p-5 rounded-2xl bg-white border border-gray-200 flex items-start gap-3.5 shadow-md">
                  <Terminal className="w-5 h-5 text-[#6D5DFC] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold text-gray-800">Secure TLS 1.3 Tunneling</h4>
                    <p className="text-xs text-gray-500 leading-normal mt-1">All connector routes are isolated with modern handshakes and cryptographically signed signatures to prevent any middleman tracking.</p>
                  </div>
                </div>
              </FadeIn>
            </div>

            <FadeIn y={25} className="w-full">
              {/* Connector graphics */}
              <div className="w-full rounded-2xl bg-white border border-gray-200 shadow-xl p-6 flex flex-col gap-4 bg-mesh-light">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Operational Connections</span>
                <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-between">
                    <span>ClickHouse Node</span>
                    <span className="text-emerald-500">Connected</span>
                  </div>
                  <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-between">
                    <span>BigQuery Pipe</span>
                    <span className="text-emerald-500">Connected</span>
                  </div>
                  <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-between">
                    <span>Athena Tunnels</span>
                    <span className="text-emerald-500">Connected</span>
                  </div>
                  <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-between">
                    <span>GraphQL Hub</span>
                    <span className="text-emerald-500">Connected</span>
                  </div>
                </div>
                <span className="text-[10px] text-gray-400 font-mono">100% telemetry synced without delay packets.</span>
              </div>
            </FadeIn>

          </div>
        </section>

        {/* SUBSECTION 4: #collaboration */}
        <section 
          id="collaboration" 
          className="relative py-24 md:py-32 px-6 md:px-8 bg-[#0B0F19] bg-mesh-dark text-white border-t border-white/5"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <FadeIn y={25} className="order-2 lg:order-1 w-full">
              <div className="w-full rounded-2xl bg-[#0F1424] border border-white/5 p-6 flex flex-col gap-5">
                <span className="text-xs font-bold text-gray-400">Team Folder Workspace Structure</span>
                <div className="flex flex-col gap-3 text-sm">
                  <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <FolderOpen className="w-4 h-4 text-[#6D5DFC]" />
                      Marketing Analytics Group
                    </span>
                    <span className="text-xs text-gray-500">4 members</span>
                  </div>
                  <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <FolderOpen className="w-4 h-4 text-[#6D5DFC]" />
                      SRE Performance Logs
                    </span>
                    <span className="text-xs text-gray-500">2 members</span>
                  </div>
                  <div className="p-3 bg-[#6D5DFC]/10 border border-[#6D5DFC]/20 rounded-lg flex items-center justify-between text-white">
                    <span className="flex items-center gap-2 font-bold">
                      <FolderOpen className="w-4 h-4 text-[#6D5DFC]" />
                      Domain Escrow Deal Group
                    </span>
                    <span className="text-xs text-gray-300 font-bold">Escrow Active</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <div className="order-1 lg:order-2 flex flex-col gap-6">
              <FadeIn y={15}>
                <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center mb-2 border border-white/10">
                  <Users className="w-5 h-5" />
                </div>
                <h2 className="font-display font-extrabold text-3xl text-white tracking-tight">
                  Multiuser Workspace Boards
                </h2>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  Consolidate project boards, configure group credentials, and tag collaborators instantly. Our visual layout syncs interactions seamlessly, ensuring every stakeholder accesses identical trace logs.
                </p>
              </FadeIn>

              <FadeIn delay={0.2} y={15}>
                <p className="text-sm text-gray-400 leading-normal mb-2">
                  No lag-prone websockets or heavy client bundles. Standard microtasking resolves board interactions locally first, and synchronizes asynchronously with servers within 110ms.
                </p>
              </FadeIn>
            </div>

          </div>
        </section>

        {/* BOTTOM CTA LINKING TO PRICING */}
        <section id="product-outro-cta" className="relative py-24 bg-gradient-to-br from-[#6D5DFC] to-[#5C4CEB] text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <FadeIn y={15}>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white leading-tight">
                Secure your licensing tier.
              </h2>
              <p className="text-indigo-100 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
                Unlock the complete telemetry suite with a clear, honest plan. Acquire mnqe.com and launch your premium analytics SaaS brand immediately.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#0B0F19] hover:bg-[#15203a] font-bold text-white shadow-xl transition-all inline-flex items-center justify-center"
                >
                  View Pricing & Acquisition
                </Link>
                <a
                  href="https://www.godaddy.com/domainsearch/find?domainToCheck=mnqe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-[#6D5DFC] hover:bg-gray-100 font-bold shadow-lg transition-all inline-flex items-center justify-center gap-1.5"
                >
                  GoDaddy Escrow Purchase <ArrowUpRight className="w-4 h-4 text-[#6D5DFC]" />
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
