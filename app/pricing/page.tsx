'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Check, HelpCircle, ChevronDown, ChevronUp, Sparkles, 
  ArrowRight, ShieldCheck, CreditCard, Lock, ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import Breadcrumbs from '@/components/Breadcrumbs';
import { BrandBackgroundArt } from '@/components/BrandArtwork';

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaUrl: string;
  popular: boolean;
  enterprise: boolean;
}

interface FAQItem {
  question: string;
  answer: string;
}

export default function PricingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const TIERS: PricingTier[] = [
    {
      name: 'Starter License',
      price: '$29',
      period: '/month',
      description: 'Ideal for independent developers or early-stage testing pipelines.',
      features: [
        'Up to 1.5M telemetry events/mo',
        '3 dynamic dashboard widgets',
        'Standard REST API access',
        '24-hr log retention traces',
        'Single user workspace'
      ],
      ctaText: 'Acquire Starter License',
      ctaUrl: 'https://www.godaddy.com/domainsearch/find?domainToCheck=mnqe.com',
      popular: false,
      enterprise: false,
    },
    {
      name: 'Pro Platform',
      price: '$99',
      period: '/month',
      description: 'The standard choice for production teams requiring deep pipeline telemetry.',
      features: [
        'Up to 15M telemetry events/mo',
        'Unlimited customizable widgets',
        'Standard WebSocket/REST tunnels',
        '14-day persistent log history',
        'Up to 5 collaborative workspaces',
        '99.9% uptime SLA guarantee'
      ],
      ctaText: 'Establish Pro Pipeline',
      ctaUrl: 'https://www.godaddy.com/domainsearch/find?domainToCheck=mnqe.com',
      popular: true,
      enterprise: false,
    },
    {
      name: 'Enterprise',
      price: 'Contact',
      period: ' Escrow',
      description: 'Acquire the complete brand portfolio including immediate ownership transfer.',
      features: [
        'Permanent ownership of MNQE.com',
        'Immediate GoDaddy escrow push',
        'Complete static layout source files',
        '100% brand control rights',
        'Zero trailing subscription overhead',
        'Sovereign domain rights'
      ],
      ctaText: 'Secure Full Domain',
      ctaUrl: 'https://www.godaddy.com/domainsearch/find?domainToCheck=mnqe.com',
      popular: false,
      enterprise: true,
    }
  ];

  const FAQS: FAQItem[] = [
    {
      question: 'How is the domain MNQE.com transferred after purchase?',
      answer: 'The acquisition process is fully secure and handled via GoDaddy Escrow or Escrow.com. Upon receipt of funds, the domain is immediately released and pushed to your registrar account within 24 hours.'
    },
    {
      question: 'Is there a free trial for the analytics platform?',
      answer: 'Yes! Fictional subscribers can sign up local testing sandboxes for 14 days with zero credit card info. However, since this site is a domain portfolio showcase, live cloud infrastructure is currently suspended.'
    },
    {
      question: 'Can I cancel my subscription billing at any time?',
      answer: 'Our subscription models run on month-to-month contracts. You can easily terminate your billing from your account control workspace at any time. There are no cancellation penalties or hidden platform fees.'
    },
    {
      question: 'Are there customizable licensing models for agencies?',
      answer: 'Absolutely. Acquiring the brand and domain MNQE.com allows your agency to repackage or host the system under your sovereign control. This eliminates trailing SaaS costs completely.'
    },
    {
      question: 'What is the refund and SLA policy?',
      answer: 'We provide a 100% money-back guarantee within 30 days of license activation. Our edge clusters support a 99.9% availability SLA, backed by automated regional failovers.'
    }
  ];

  const togglesFaq = (index: number) => {
    setActiveFaq(prev => prev === index ? null : index);
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
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Pricing & Acquisition',
        'item': 'https://mnqe.com/pricing'
      }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': FAQS.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <main className="min-h-screen pt-32 pb-24 bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <Breadcrumbs items={[{ label: 'Pricing Plans' }]} />
        </div>
        
        {/* Intro */}
        <section id="pricing-intro" className="relative py-16 md:py-20 text-center px-6 bg-mesh-dark grid-overlay overflow-hidden">
          {/* Oversized High-Precision Corporate Branding Art Layer */}
          <BrandBackgroundArt className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] opacity-[0.2] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto relative z-10">
            <FadeIn y={15}>
              <span className="text-xs font-bold uppercase tracking-widest text-[#6D5DFC] bg-[#6D5DFC]/10 px-3.5 py-1 rounded-full border border-accent/20">
                Honest Pricing
              </span>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white mt-4 tracking-tight">
                Simple plans, infinite potential.
              </h1>
              <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
                Choose a plan matching your tracking scales, or acquire the entire MNQE domain portfolio to launch your owned platform immediately.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Pricing Tiers Columns */}
        <section id="pricing-matrix" className="max-w-7xl mx-auto px-6 md:px-8 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {TIERS.map((tier, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} y={25} className="h-full">
                <div 
                  className={`h-full p-8 rounded-2xl border flex flex-col justify-between transition-all duration-300 relative ${
                    tier.popular 
                      ? 'bg-[#121829] border-[#6D5DFC] shadow-2xl shadow-accent/15 scale-[1.02] -translate-y-1' 
                      : tier.enterprise 
                        ? 'bg-[#150F28] border-[#a295ff]/30 hover:border-[#6D5DFC]'
                        : 'bg-white/[0.02] border-white/5 hover:border-white/10'
                  } group hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60`}
                >
                  {/* Popular Badge */}
                  {tier.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#6D5DFC] text-white px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Most Popular Plan
                    </span>
                  )}

                  {tier.enterprise && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                      Domain Portfoliio
                    </span>
                  )}

                  <div>
                    <h3 className="font-display font-extrabold text-xl text-white tracking-tight">{tier.name}</h3>
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed min-h-[40px]">{tier.description}</p>
                    
                    {/* Price Tag */}
                    <div className="my-6 flex items-baseline">
                      <span className="font-display font-black text-4xl sm:text-5xl text-white tracking-tighter">{tier.price}</span>
                      <span className="text-sm font-medium text-gray-400 ml-1 tracking-normal">{tier.period}</span>
                    </div>

                    <div className="h-px bg-white/5 my-6" />

                    {/* Features List */}
                    <ul className="flex flex-col gap-4">
                      {tier.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-sm">
                          <Check className="w-4 h-4 text-[#6D5DFC] shrink-0 mt-0.5" />
                          <span className={`leading-tight ${tier.enterprise ? 'text-gray-200 font-medium' : 'text-gray-300'}`}>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing Link Button */}
                  <div className="pt-8">
                    <a
                      href={tier.ctaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3.5 rounded-xl font-bold tracking-wide text-xs text-center flex items-center justify-center gap-1.5 transition-all outline-none ${
                        tier.popular
                          ? 'bg-[#6D5DFC] hover:bg-[#5C4CEB] text-white shadow-lg shadow-accent/20'
                          : tier.enterprise
                            ? 'bg-gradient-to-r from-violet-600 to-[#6D5DFC] hover:from-violet-700 text-white shadow-xl hover:scale-105'
                            : 'bg-white/5 hover:bg-white/10 text-white border border-white/5'
                      }`}
                    >
                      {tier.ctaText}
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Security / Trust indicators banner */}
        <section id="pricing-security-bar" className="max-w-4xl mx-auto px-6 mt-16">
          <FadeIn y={15}>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 p-6 rounded-2xl bg-[#0F1424] border border-white/5 text-gray-400 text-xs text-center">
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[#6D5DFC]" />
                <span>Escrow Secured Infrastructure</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#6D5DFC]" />
                <span>GoDaddy Immediate Released</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>A+ Certified Trust Ledger</span>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* FAQ ACCORDION SECTION */}
        <section id="faq" className="max-w-3xl mx-auto px-6 mt-28 md:mt-36">
          <div className="text-center mb-12">
            <FadeIn y={15}>
              <span className="text-xs font-bold uppercase tracking-widest text-[#6D5DFC]">Questions answered</span>
              <h2 className="font-display font-extrabold text-3xl text-white mt-3 tracking-tight">Billing & Domain FAQ</h2>
              <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                Everything you need to know about purchasing mnqe.com and deploying the platform.
              </p>
            </FadeIn>
          </div>

          {/* Accordion container */}
          <div className="flex flex-col gap-4">
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <FadeIn key={idx} delay={idx * 0.05} y={15}>
                  <div className="rounded-xl border border-white/5 bg-white/[0.01] overflow-hidden transition-all duration-300 hover:border-white/10">
                    <button
                      onClick={() => togglesFaq(idx)}
                      className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-display font-bold text-sm sm:text-base text-white focus:outline-none select-none transition-colors hover:text-[#6D5DFC]"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#6D5DFC] shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 shrink-0" />
                      )}
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                        >
                          <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-400 leading-relaxed border-t border-white/5">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
