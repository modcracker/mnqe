'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Sparkles, Mail, Shield, User, ArrowUpRight, CheckCircle2, 
  HelpCircle, ChevronDown, Award, Lock, Copy, Check, Send
} from 'lucide-react';
import { motion } from 'motion/react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import Breadcrumbs from '@/components/Breadcrumbs';

const FAQs = [
  {
    q: "What makes the MNQE.com domain highly valuable for someone named Monique?",
    a: "Four-letter monogram domains ending in .com are extremely rare and finite digital assets. For anyone named Monique, Monica, or managing a brand abbreviation like MNQE, this domain represents the absolute pinnacle of elite, clean digital branding. It allows you to bypass generic gmail.com or outlook.com handles and command sovereign authority."
  },
  {
    q: "How can I purchase or lease the MNQE.com domain?",
    a: "The MNQE.com domain is securely held and listed for acquisition or lease on GoDaddy Registry. Transactions are processed via GoDaddy's trusted Escrow services, ensuring 100% security, title clearance, and instant domain transfer."
  },
  {
    q: "Can I set up personalized Monique email addresses with this domain?",
    a: "Yes! Once you acquire MNQE.com, you can create infinite personalized emails such as monique@mnqe.com, contact@mnqe.com, or m@mnqe.com. This gives your personal communications, professional correspondence, and digital identity a pristine, memorable polish."
  },
  {
    q: "What is the global scarcity of 4-letter (LLLL) .com domains?",
    a: "There are only 456,976 possible four-letter combinations in the alphabet, and all of them are fully registered. Monogram domains that spell out premium phonetics or initials like 'MNQE' are highly sought after by corporate entities, family offices, and high-net-worth individuals named Monique."
  },
  {
    q: "Is there support for lease-to-own agreements?",
    a: "Yes, GoDaddy supports flexible lease-to-own agreements for premium domains like MNQE.com, allowing individuals named Monique or corporate entities named MNQE to spread payments while securing exclusive usage rights immediately."
  }
];

// FAQ Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': FAQs.map(faq => ({
    '@type': 'Question',
    'name': faq.q,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': faq.a
    }
  }))
};

// Product Schema for Domain Offer
const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  'name': 'MNQE.com Premium Monogram Domain Name',
  'description': 'A ultra-rare 4-letter .com monogram domain name, ideal for individuals named Monique or corporate organizations needing the MNQE trademark identity.',
  'offers': {
    '@type': 'Offer',
    'url': 'https://www.godaddy.com/domainsearch/find?domainToCheck=mnqe.com',
    'priceCurrency': 'USD',
    'price': 'Contact Broker',
    'availability': 'https://schema.org/InStock'
  }
};

export default function MoniqueHubPage() {
  const [customName, setCustomName] = useState('Monique');
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const cleanName = customName.trim().toLowerCase().replace(/[^a-z0-9]/g, '') || 'monique';
  const displayEmail = `${cleanName}@mnqe.com`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <>
      {/* Schema Injection for SEO Spiders */}
      <title>Buy MNQE Domain | Elite Monique Vanity Domain for Sale</title>
      <meta name="description" content="Buy MNQE domain today! Secure MNQE.com, the ultimate Monique vanity domain and premium domain for sale. Perfect for custom emails and personal branding." />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <Header />

      <main className="min-h-screen pt-32 pb-24 bg-[#0B0F19] relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-[#6D5DFC]/5 to-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-purple-500/5 to-[#6D5DFC]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <Breadcrumbs items={[{ label: 'Monique & MNQE Hub' }]} />

          {/* Hero Section */}
          <section id="monique-hero" className="py-12 md:py-16 text-center max-w-4xl mx-auto">
            <FadeIn y={15}>
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#6D5DFC]/10 text-white border border-[#6D5DFC]/30 text-xs font-semibold tracking-wide uppercase mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#6D5DFC]" />
                Monique Named-Match Registry
              </span>
              <h1 
                id="monique-hub-heading"
                aria-label="Buy MNQE domain - Premium Monique vanity domain for sale"
                className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight"
              >
                Buy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D5DFC] to-[#a295ff]">MNQE domain</span> — Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D5DFC] to-[#a295ff]">Monique vanity domain</span> and LLLL .com <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D5DFC] to-[#a295ff]">domain for sale</span>
              </h1>
              <p className="text-gray-200 text-base md:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
                Unlock the ultimate personal or business brand asset. Looking to buy MNQE domain? <strong>MNQE.com is an ultra-rare 4-letter .com domain for sale</strong>, perfectly tailored as an elite Monique vanity domain for premium emails, prestige portfolios, and secure digital signatures.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
                <a
                  href="https://www.godaddy.com/domainsearch/find?domainToCheck=mnqe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#6D5DFC] hover:bg-[#5C4CEB] font-bold text-white transition-all shadow-xl shadow-accent/25 hover:shadow-accent/45 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
                >
                  Acquire MNQE.com on GoDaddy
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/10 hover:border-[#6D5DFC] text-white bg-white/[0.02] hover:bg-[#6D5DFC]/10 font-bold transition-all inline-flex items-center justify-center gap-2"
                >
                  Inquire Directly
                </Link>
              </div>
            </FadeIn>
          </section>

          {/* Interactive Email Visualizer Widget */}
          <section id="email-previewer" className="py-12 max-w-4xl mx-auto">
            <FadeIn delay={0.2} y={20}>
              <div className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#6D5DFC] via-[#8B5CF6] to-pink-500" />
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-5">
                    <h3 className="font-display font-extrabold text-xl text-white tracking-tight mb-3">
                      Visualize Your Identity
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed mb-6">
                      Are you named Monique? See how exceptionally clean your future personal email and digital brand card will look. Try typing your name below!
                    </p>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                          Your Name / Handle
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6D5DFC]" />
                          <input 
                            type="text"
                            value={customName}
                            onChange={(e) => setCustomName(e.target.value.slice(0, 20))}
                            placeholder="e.g., Monique"
                            className="w-full bg-[#121829] border border-white/15 focus:border-[#6D5DFC] focus:ring-1 focus:ring-[#6D5DFC] rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none transition-all placeholder:text-gray-600"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-7 flex justify-center">
                    <div className="w-full max-w-sm rounded-xl bg-[#121829] border border-white/10 p-5 shadow-xl relative overflow-hidden">
                      <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                        </div>
                        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Premium Card</span>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#6D5DFC] to-indigo-500 flex items-center justify-center font-bold text-white shadow-lg">
                            {customName ? customName.charAt(0).toUpperCase() : 'M'}
                          </div>
                          <div>
                            <h4 className="font-display font-bold text-sm text-white">{customName || 'Monique'}</h4>
                            <p className="text-[10px] font-mono text-gray-400 tracking-tight">Verified Domain Co-Owner</p>
                          </div>
                        </div>

                        <div className="bg-[#0B0F19] rounded-lg p-3 border border-white/5 flex items-center justify-between">
                          <div className="flex items-center gap-2 overflow-hidden">
                            <Mail className="w-4 h-4 text-[#6D5DFC] shrink-0" />
                            <span className="text-xs font-mono text-gray-200 select-all truncate">
                              {displayEmail}
                            </span>
                          </div>
                          <button
                            onClick={() => copyToClipboard(displayEmail)}
                            className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors ml-2"
                            title="Copy Email Address"
                          >
                            {copiedText === displayEmail ? (
                              <Check className="w-3.5 h-3.5 text-emerald-500" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>

                        <div className="text-[11px] text-gray-400 leading-relaxed italic bg-white/[0.01] p-3 rounded-lg border border-white/5">
                          &ldquo;Having a 4-letter email like <strong>{displayEmail}</strong> gives me massive credibility with founders, investors, and clients.&rdquo;
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* Content pillars / SEO keyword boosters */}
          <section id="heritage-details" className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/5 mt-12">
            <FadeIn delay={0.1} y={20}>
              <div className="p-6 rounded-xl bg-white/[0.01] border border-white/5 hover:border-[#6D5DFC]/20 transition-all h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#6D5DFC]/10 flex items-center justify-center mb-5 text-[#6D5DFC]">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-3">The Power of 4-Letter Monograms</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    With alphabet size constraints, LLLL.com domain assets represent elite global status. spelled names like <strong>MNQE</strong> are highly memorable, easily spellable, and hold absolute market liquidity.
                  </p>
                </div>
                <div className="pt-4 text-[10px] font-mono text-[#6D5DFC] font-bold uppercase tracking-wider">
                  456,976 total assets globally
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} y={20}>
              <div className="p-6 rounded-xl bg-white/[0.01] border border-white/5 hover:border-[#6D5DFC]/20 transition-all h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#6D5DFC]/10 flex items-center justify-center mb-5 text-[#6D5DFC]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-3">Personal & Brand Autonomy</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Set up beautiful custom emails for every family member or team division. Create a legacy web anchor that serves as your permanent resume, portfolio hub, or secure private messaging endpoint.
                  </p>
                </div>
                <div className="pt-4 text-[10px] font-mono text-[#6D5DFC] font-bold uppercase tracking-wider">
                  Infinite customizable sub-handles
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} y={20}>
              <div className="p-6 rounded-xl bg-white/[0.01] border border-white/5 hover:border-[#6D5DFC]/20 transition-all h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#6D5DFC]/10 flex items-center justify-center mb-5 text-[#6D5DFC]">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-3">Escrow Protected Transfer</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Every transaction and transfer is routed transparently through verified GoDaddy Domain Brokers. Title escrow locks protect both buyer and seller, delivering absolute security and swift setup within hours.
                  </p>
                </div>
                <div className="pt-4 text-[10px] font-mono text-[#6D5DFC] font-bold uppercase tracking-wider">
                  100% GoDaddy security clearance
                </div>
              </div>
            </FadeIn>
          </section>

          {/* Semantic Accordion FAQs section */}
          <section id="faq-accordions" className="py-16 border-t border-white/5 mt-12 max-w-3xl mx-auto">
            <FadeIn y={15} className="text-center mb-10">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-xs text-gray-400 mt-2">
                Everything you need to know about the MNQE.com monogram domain matching.
              </p>
            </FadeIn>

            <div className="space-y-4">
              {FAQs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <FadeIn key={index} delay={index * 0.05} y={15}>
                    <div 
                      className="rounded-xl border border-white/5 bg-white/[0.01] overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => setActiveFaq(isOpen ? null : index)}
                        className="w-full flex items-center justify-between p-5 text-left text-sm md:text-base font-bold text-white hover:bg-white/[0.02] transition-colors focus:outline-none"
                      >
                        <span className="flex items-center gap-2">
                          <HelpCircle className="w-4 h-4 text-[#6D5DFC] shrink-0" />
                          {faq.q}
                        </span>
                        <ChevronDown 
                          className={`w-4 h-4 text-gray-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-white' : ''}`} 
                        />
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-gray-400 border-t border-white/5 leading-relaxed bg-[#121829]/10">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </section>

          {/* Direct Transfer Trust banner */}
          <section id="secure-trust" className="py-12 mt-12 text-center border border-white/10 rounded-2xl bg-gradient-to-r from-[#6D5DFC]/10 via-indigo-900/10 to-transparent">
            <FadeIn y={10} className="flex flex-col items-center gap-4 px-6">
              <CheckCircle2 className="w-10 h-10 text-emerald-500" />
              <h3 className="font-display font-extrabold text-xl text-white">Instant, Escrow-Protected Domain Handover</h3>
              <p className="text-xs text-gray-300 max-w-xl leading-relaxed">
                We are committed to delivering seamless transactions. Once authorized, GoDaddy Brokers coordinate directly to push the domain to your registrar account within minutes. Spell your digital life on a rare monogram canvas.
              </p>
              <div className="pt-2">
                <a
                  href="https://www.godaddy.com/domainsearch/find?domainToCheck=mnqe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-white text-[#0B0F19] hover:bg-gray-100 font-bold text-xs tracking-wider uppercase inline-flex items-center gap-2 transition-all shadow-md"
                >
                  Acquire MNQE.com
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
