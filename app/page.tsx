'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useScroll, useTransform, motion } from 'motion/react';
import { useSafeReducedMotion } from '@/hooks/use-reduced-motion';
import { 
  ArrowRight, Shield, Zap, BarChart2, Globe, Sparkles, CheckCircle2, 
  Layers, MessageSquare, Activity, ChevronRight, Play, Server, ArrowUpRight
} from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import DashboardMockup from '@/components/DashboardMockup';
import { BrandBackgroundArt } from '@/components/BrandArtwork';

export default function Home() {
  const prefersReduced = useSafeReducedMotion();
  const { scrollY } = useScroll();
  
  // Parallax calculations (50% normal scroll speed) - disabled in CSS if prefersReduced is true
  const yBg = useTransform(scrollY, [0, 800], [0, 400]);

  // Trusted grid logs
  const FAKE_LOGOS = [
    { name: 'ApexFlow', icon: '⚡' },
    { name: 'VortexLabs', icon: '🌀' },
    { name: 'OptimaCQ', icon: '🔶' },
    { name: 'CognitiveSaaS', icon: '🧠' },
    { name: 'QuantaMetrics', icon: '🌌' },
    { name: 'Spectral', icon: '✨' },
  ];

  // Teaser micro features
  const TEASER_FEATURES = [
    {
      icon: <Zap className="w-6 h-6 text-[#6D5DFC]" />,
      title: 'Ultra-Low 18ms Latency',
      description: 'Stream events directly into your metrics without pipeline queuing. Built on the custom distributed MNQE Edge engine.'
    },
    {
      icon: <Activity className="w-6 h-6 text-[#6D5DFC]" />,
      title: 'Zero-JS Page Weight',
      description: 'Embed telemetry charts that load asynchronously. Measure cohort behavior with practically zero impact on web vitals.'
    },
    {
      icon: <Shield className="w-6 h-6 text-[#6D5DFC]" />,
      title: 'Trust Vault Security',
      description: 'End-to-end transport layer encryption and cryptographically signed data hooks compliance for extreme security.'
    }
  ];

  // JSON-LD structured data for Home Page (SoftwareApplication and BreadcrumbList)
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': 'MNQE Analytics Platform',
    'operatingSystem': 'All',
    'applicationCategory': 'BusinessApplication',
    'description': 'Real-time analytics reimagined. Premium web analytics, custom visualization dashboards, and secure data orchestration.',
    'offers': {
      '@type': 'Offer',
      'price': '29.00',
      'priceCurrency': 'USD'
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.95',
      'ratingCount': '14302'
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://mnqe.com'
      }
    ]
  };

  return (
    <>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main className="min-h-screen relative font-sans">
        
        {/* SECTION 1: HERO (Dark Section: #0B0F19) */}
        <section 
          id="hero" 
          className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-24 px-6 md:px-8 bg-[#0B0F19] bg-mesh-dark grid-overlay overflow-hidden"
        >
          {/* Oversized High-Precision Corporate Branding Art Layer */}
          <BrandBackgroundArt className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-[0.25] pointer-events-none" />

          {/* Animated/Parallax Background Layer */}
          {!prefersReduced ? (
            <motion.div 
              style={{ y: yBg }} 
              className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#6D5DFC]/10 to-indigo-500/5 rounded-full blur-3xl pointer-events-none hidden md:block" 
            />
          ) : (
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#6D5DFC]/10 to-indigo-500/5 rounded-full blur-3xl pointer-events-none hidden md:block" />
          )}

          <div className="max-w-7xl mx-auto w-full text-center relative z-10 flex flex-col items-center">
            {/* Title Badge */}
            <FadeIn delay={0.1} y={15} className="mb-6">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#6D5DFC]/10 text-white border border-[#6D5DFC]/30 text-xs font-semibold tracking-wide uppercase select-none">
                <Sparkles className="w-3.5 h-3.5 text-[#6D5DFC]" />
                Premium Domain Available for Lease / Acquisition
              </span>
            </FadeIn>

            {/* Heading */}
            <FadeIn delay={0.2} y={20} className="max-w-4xl">
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight md:leading-[1.12]">
                Real-time analytics, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D5DFC] to-[#a295ff]">reimagined</span> for teams.
              </h1>
            </FadeIn>

            {/* Subheading */}
            <FadeIn delay={0.3} y={20} className="max-w-2xl mt-6">
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                Unlock actionable performance patterns in real-time. Power telemetry tracking at scale, build customizable dashboard overlays, and stream logs without queuing delays.
              </p>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={0.4} y={20} className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
              <Link
                href="/features"
                id="hero-primary-cta"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#6D5DFC] hover:bg-[#5C4CEB] font-bold text-white transition-all shadow-xl shadow-accent/25 hover:shadow-accent/45 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
              >
                Explore Features
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://www.godaddy.com/domainsearch/find?domainToCheck=mnqe.com"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-buy-cta"
                className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/10 hover:border-[#6D5DFC] text-white bg-white/[0.02] hover:bg-[#6D5DFC]/10 font-bold transition-all inline-flex items-center justify-center gap-2"
              >
                Buy MNQE.com
                <ArrowUpRight className="w-4 h-4 text-[#6D5DFC]" />
              </a>
            </FadeIn>

            {/* Live Dashboard Mockup Container with Parallax tilt */}
            <FadeIn delay={0.5} y={30} className="w-full max-w-5xl mt-16 md:mt-20">
              <div 
                id="hero-mockup-wrapper"
                className="p-1.5 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 shadow-3xl overflow-hidden shadow-black/80"
              >
                <DashboardMockup />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* SECTION 2: TRUSTED-BY LOGO BAR (Light Section: #F7F8FA) */}
        <section 
          id="trusted-by" 
          className="relative py-12 md:py-16 px-6 md:px-8 bg-[#F7F8FA] border-y border-gray-200 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto">
            <FadeIn y={10} className="text-center mb-8">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-relaxed">
                Empowering analytics pipelines at leading technology agencies
              </p>
            </FadeIn>

            <FadeIn delay={0.15} y={15} className="w-full">
              <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-8 items-center justify-items-center opacity-65 grayscale hover:grayscale-0 transition-all duration-300">
                {FAKE_LOGOS.map((logo, idx) => (
                  <div key={idx} className="flex items-center gap-2 py-2 select-none">
                    <span className="text-lg bg-gray-200 w-8 h-8 rounded flex items-center justify-center text-gray-800 font-bold">{logo.icon}</span>
                    <span className="font-display font-bold text-sm tracking-tight text-[#14161F]">{logo.name}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* SECTION 3: FEATURES TEASER (Dark Section: #0B0F19) */}
        <section 
          id="features-teaser" 
          className="relative py-24 md:py-32 px-6 md:px-8 bg-[#0B0F19] overflow-hidden"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div className="max-w-2xl">
                <FadeIn y={15}>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#6D5DFC]">Platform Capabilities</span>
                  <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mt-3 tracking-tight">
                    Optimized metrics, zero latency pipeline.
                  </h2>
                </FadeIn>
              </div>
              <FadeIn delay={0.2} y={15}>
                <Link 
                  href="/features" 
                  id="features-teaser-link" 
                  className="font-semibold text-sm text-[#6D5DFC] hover:text-white inline-flex items-center gap-1 group"
                >
                  See all features
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </FadeIn>
            </div>

            {/* Feature Teaser Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TEASER_FEATURES.map((feat, idx) => (
                <FadeIn key={idx} delay={0.1 * idx} y={20}>
                  <div className="h-full p-8 rounded-2xl bg-white/[0.02] border border-white/5 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:border-[#6D5DFC]/20 hover:shadow-2xl hover:shadow-violet-600/5 group flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#6D5DFC]/10 flex items-center justify-center mb-6 border border-accent/20 group-hover:bg-[#6D5DFC] group-hover:border-[#6D5DFC] transition-all duration-300">
                        <div className="group-hover:text-white transition-colors duration-300">
                          {feat.icon}
                        </div>
                      </div>
                      <h3 className="font-display font-extrabold text-lg text-white mb-3 tracking-tight">{feat.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{feat.description}</p>
                    </div>
                    
                    <div className="pt-6 mt-6 border-t border-white/5">
                      <span className="text-xs text-[#6D5DFC] font-bold group-hover:underline inline-flex items-center gap-1">
                        Learn details <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: PRODUCT TEASER (Light Section: #F7F8FA) */}
        <section 
          id="product-teaser" 
          className="relative py-24 md:py-32 px-6 md:px-8 bg-[#F7F8FA] text-[#14161F] overflow-hidden border-t border-gray-200"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left side: Graphics/Mockup */}
            <FadeIn y={20} className="order-2 lg:order-1">
              <div className="relative p-2 rounded-2xl bg-white border border-gray-200 shadow-xl overflow-hidden bg-mesh-light grid-overlay-light">
                <div className="bg-gray-100/80 px-4 py-2 border-b border-gray-200 flex items-center gap-1.5 select-none text-[10px] font-mono text-gray-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                  <span className="ml-2 font-mono">analytics-node_view_panel</span>
                </div>
                
                {/* SVG Mockup */}
                <div className="p-6 flex flex-col gap-5 min-h-[300px] justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Cohort Retention</span>
                    <span className="text-xs font-bold text-gray-800 bg-gray-100 px-2 py-0.5 rounded-full border border-gray-200">14-Day Cycle</span>
                  </div>

                  <div className="grid grid-cols-7 gap-1 border-t border-gray-100 pt-4">
                    {Array.from({ length: 28 }).map((_, i) => (
                      <div 
                        key={i} 
                        className={`aspect-square rounded-md flex items-end justify-center text-[9px] font-mono font-bold ${
                          i % 4 === 0 
                            ? 'bg-[#6D5DFC] text-white' 
                            : i % 3 === 0 
                              ? 'bg-[#6D5DFC]/60 text-white' 
                              : i % 5 === 0 
                                ? 'bg-indigo-300 text-gray-700' 
                                : 'bg-gray-100 text-gray-400'
                        }`}
                      >
                        <span className="p-1">{((i * 17 + 41) % 41) + 55}%</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center text-xs border-t border-gray-100 pt-4 text-gray-400">
                    <span>Direct Escrow Transfer Enabled</span>
                    <span className="font-bold text-[#6D5DFC]">99.9% Uptime SLA</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right side: Texts & links */}
            <div className="order-1 lg:order-2 flex flex-col gap-6">
              <FadeIn y={15}>
                <span className="text-xs font-bold uppercase tracking-widest text-[#6D5DFC]">Data Native Execution</span>
                <h2 className="font-display font-extrabold text-3xl md:text-4xl text-[#14161F] mt-3 tracking-tight leading-tight">
                  Next-generation reporting structure.
                </h2>
                <p className="text-gray-600 mt-5 text-base md:text-lg leading-relaxed">
                  Our advanced multi-threaded data schema isolates browser interactions entirely from execution queues, allowing massive telemetry collection with Zero performance degradation.
                </p>
              </FadeIn>

              <FadeIn delay={0.2} y={15}>
                <ul className="flex flex-col gap-3.5">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#6D5DFC] shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-gray-700">Pre-built REST, WebSockets, and GraphQL telemetry nodes.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#6D5DFC] shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-gray-700">Customizable telemetry rules with localized browser filters.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#6D5DFC] shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-gray-700">Fully compatible with Godaddy Transfer or Escrow protocols.</span>
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.3} y={15} className="pt-4">
                <Link
                  href="/product"
                  id="product-teaser-cta"
                  className="px-6 py-3.5 rounded-xl bg-[#6D5DFC] hover:bg-[#5C4CEB] font-bold text-white transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2 w-fit"
                >
                  Overview Platform
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* SECTION 5: TESTIMONIALS (Dark Section: #0B0F19) */}
        <section 
          id="testimonials-teaser" 
          className="relative py-24 md:py-32 px-6 md:px-8 bg-[#0B0F19] bg-mesh-dark overflow-hidden"
        >
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            
            <div className="text-center max-w-2xl mb-16">
              <FadeIn y={15}>
                <span className="text-xs font-bold uppercase tracking-widest text-[#6D5DFC]">Social Validation</span>
                <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mt-3 tracking-tight">
                  Trusted by scale leaders.
                </h2>
                <p className="text-gray-400 mt-4 leading-relaxed">
                  See how analytical teams cut load rates and streamline database logs with MNQE integrations.
                </p>
              </FadeIn>
            </div>

            {/* Fictional Quote Card */}
            <FadeIn delay={0.15} y={20} className="w-full max-w-4xl">
              <div className="p-8 md:p-12 rounded-2xl bg-white/[0.02] border border-white/5 relative flex flex-col md:flex-row items-center gap-8 md:gap-12 hover:border-[#6D5DFC]/20 transition-all duration-300 group">
                <div className="absolute top-6 left-6 text-7xl font-serif text-[#6D5DFC]/10 pointer-events-none group-hover:text-accent/25 transition-all">“</div>
                
                {/* Initials-based Avatar Placeholder */}
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-[#6D5DFC] to-indigo-500 flex items-center justify-center text-white text-2xl font-extrabold shadow-lg select-none shrink-0 border-2 border-white/10">
                  ML
                </div>

                <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
                  <p className="text-base md:text-lg text-gray-200 leading-relaxed font-medium">
                    &ldquo;Transitioning our real-time tracking pipelines to standard MNQE hooks reduced our analytics event processing overhead by over 74%. Rendering custom widgets dynamically has never been this fluid.&rdquo;
                  </p>
                  <div>
                    <h4 className="font-display font-bold text-base text-white">Max Levy</h4>
                    <p className="text-xs text-gray-500 font-medium">Principal Software Director, VortexLabs</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} y={15} className="mt-12 text-center">
              <Link 
                href="/customers" 
                id="customers-teaser-link" 
                className="font-semibold text-sm text-[#6D5DFC] hover:text-white inline-flex items-center gap-1 group"
              >
                Read 6 customer journals
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* SECTION 6: CLOSING CTA BAND (Light Accent Section: Electric Violet Gradient) */}
        <section 
          id="closing-cta" 
          className="relative py-24 md:py-32 px-6 md:px-8 bg-gradient-to-br from-[#6D5DFC] to-[#5C4CEB] text-white text-center overflow-hidden"
        >
          {/* Decorative Mesh Overlay */}
          <div className="absolute inset-0 bg-mesh-light mix-blend-overlay opacity-25 pointer-events-none" />
          <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />

          <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
            <FadeIn y={15} className="mb-4">
              <span className="inline-flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                Acquire Domain Name
              </span>
            </FadeIn>

            <FadeIn delay={0.1} y={20}>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight select-none">
                Bring mnqe.com into your portfolio.
              </h2>
            </FadeIn>

            <FadeIn delay={0.2} y={20} className="max-w-2xl mt-5">
              <p className="text-indigo-100 text-sm md:text-base leading-relaxed">
                Take command of a premium, pronounceable, 4-letter brand ready for immediate deployment. Complete your acquisition securely via standard Escrow processes.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} y={20} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <Link
                href="/pricing"
                id="closing-pricing-cta"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0B0F19] text-white hover:bg-[#141d33] font-bold tracking-wide transition-all shadow-xl shadow-black/10 hover:shadow-black/20 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
              >
                View Licensing Tiers
              </Link>
              <a
                href="https://www.godaddy.com/domainsearch/find?domainToCheck=mnqe.com"
                target="_blank"
                rel="noopener noreferrer"
                id="closing-buy-cta"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-[#6D5DFC] hover:bg-gray-100 font-bold tracking-wide transition-all shadow-xl hover:-translate-y-0.5 inline-flex items-center justify-center gap-1.5"
              >
                Acquire on GoDaddy
                <ChevronRight className="w-4 h-4" />
              </a>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
