'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, Sparkles, Lock, Zap, ArrowRight, ArrowUpRight,
  Globe, Mail, Heart, Rocket, Compass, Award 
} from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import Breadcrumbs from '@/components/Breadcrumbs';

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  initials: string;
}

interface CompanyValue {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function AboutPage() {
  const TEAM: TeamMember[] = [
    {
      name: 'May Levy',
      title: 'Founder & Principal SRE Architect',
      bio: 'Over 12 years coordinating distributed cloud clusters, heavy telemetry pipelines, and sovereign server architectures.',
      initials: 'ML',
    },
    {
      name: 'Alex Baker',
      title: 'Lead Operations Engineer',
      bio: 'Focused on multi-threaded database pipelines, sub-millisecond query compilations, and memory-safe caching layers.',
      initials: 'AB',
    },
    {
      name: 'Jordan Chen',
      title: 'Head of Dashboard Experience',
      bio: 'Crafting beautiful, reactive UI widgets, custom charts, drag-and-drop boards, and responsive layouts.',
      initials: 'JC',
    },
    {
      name: 'Emily White',
      title: 'Lead Interface Designer',
      bio: 'Obsessed with geometric visual aesthetics, custom color hierarchies, typography pairings, and clean workspace grids.',
      initials: 'EW',
    },
    {
      name: 'Taylor Kim',
      title: 'Communications & Portfolio Director',
      bio: 'Managing corporate partnerships, domain transfers, and secure GoDaddy Escrow transactions with institutional stakeholders.',
      initials: 'TK',
    }
  ];

  const VALUES: CompanyValue[] = [
    {
      icon: <Zap className="w-5 h-5 text-white" />,
      title: 'Blazing Ingestion Velocity',
      description: 'We believe real-time metadata should be delivered instantly. Delay packets represents lost performance potential.'
    },
    {
      icon: <Lock className="w-5 h-5 text-white" />,
      title: 'Cryptographic Privacy',
      description: 'Sovereign ownership rights start with cryptographic ledger validations. We isolate telemetry to prevent tracker leakages.'
    },
    {
      icon: <Award className="w-5 h-5 text-white" />,
      title: 'Pristine Materiality',
      description: 'Software development is a craft. Every pixel ratio and responsive flex container must reinforce a harmonious experience.'
    },
    {
      icon: <Compass className="w-5 h-5 text-white" />,
      title: 'Sovereign Brand Power',
      description: 'A 4-letter brand represents extreme authority. We maintain the highest trust-rating indexes across digital domains.'
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
        'name': 'About Us',
        'item': 'https://mnqe.com/about'
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
          <Breadcrumbs items={[{ label: 'About Us' }]} />
        </div>
        
        {/* Intro */}
        <section id="about-intro" className="relative py-16 md:py-20 text-center px-6 bg-mesh-dark grid-overlay">
          <div className="max-w-4xl mx-auto">
            <FadeIn y={15}>
              <span className="text-xs font-bold uppercase tracking-widest text-[#6D5DFC] bg-[#6D5DFC]/10 px-3.5 py-1 rounded-full border border-accent/20">
                Company Story
              </span>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white mt-4 tracking-tight">
                Our vision is telemetry, reimagined.
              </h1>
              <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
                We craft modern real-time tracking grids, responsive multiuser workspaces, and high-contrast digital assets representing sovereign authority.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Narrative & Mission Block */}
        <section id="brand-story" className="max-w-5xl mx-auto px-6 mt-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7 flex flex-col gap-6">
            <FadeIn y={20}>
              <h2 className="font-display font-bold text-2xl text-white tracking-tight">Narrative founding narrative</h2>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-3">
                MNQE was conceived by a small panel of database directors who encountered consistent pipeline bottlenecks while compiling analytics records across multi-cloud regions. Traditional SaaS portals required heavy client-side scripts, degrading browser performance and delaying critical alerts.
              </p>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-2">
                We set out to build a sovereign telemetry system. By bypassing cookie queues entirely and routing metrics through clean multi-threaded hooks on local SRE networks, MNQE achieves blazing 18ms trace latencies without heavy layout shifts.
              </p>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-2">
                Now, as the MNQE.com premium monogram domain is listed for acquisition, we present this complete marketing suite schema, allowing forward-looking companies to absorb our brand assets and deploy the telemetry system autonomously.
              </p>
            </FadeIn>
          </div>

          <div className="md:col-span-5">
            <FadeIn delay={0.15} y={20}>
              <div className="p-8 rounded-2xl bg-gradient-to-tr from-[#6D5DFC]/10 to-indigo-500/5 border border-[#6D5DFC]/20 shadow-xl relative overflow-hidden group">
                <span className="absolute top-4 right-4 text-7xl font-sans text-[#6D5DFC]/10 font-bold select-none">“</span>
                <h3 className="font-display font-extrabold text-xs uppercase tracking-widest text-[#6D5DFC] mb-4">Our Core Mission</h3>
                <p className="text-base font-bold text-white leading-relaxed font-display">
                  &ldquo;To deliver frictionless, highly legible web analytics platforms that protect individual consumer privacy while feeding real-time pipelines with extreme structural fidelity.&rdquo;
                </p>
                <div className="h-px bg-white/5 my-6" />
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-gray-400 font-medium">Sovereign Domain Verified</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Core Values Section */}
        <section id="values" className="max-w-7xl mx-auto px-6 md:px-8 mt-28 md:mt-36">
          <div className="text-center max-w-xl mx-auto mb-16">
            <FadeIn y={15}>
              <span className="text-xs font-bold uppercase tracking-widest text-[#6D5DFC]">How we execute</span>
              <h2 className="font-display font-extrabold text-3xl text-white mt-1.5 tracking-tight">Our Company Values</h2>
              <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                The strict architectural principles driving every single telemetry line we generate.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((val, idx) => (
              <FadeIn key={idx} delay={idx * 0.08} y={15}>
                <div className="h-full p-6 bg-white/[0.01] border border-white/5 rounded-2xl hover:border-[#6D5DFC]/30 transition-all duration-300 group flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#6D5DFC]/10 flex items-center justify-center mb-6 group-hover:bg-[#6D5DFC] transition-all duration-300">
                      {val.icon}
                    </div>
                    <h4 className="font-display font-bold text-base text-white tracking-tight">{val.title}</h4>
                    <p className="text-xs text-gray-400 mt-2.5 leading-relaxed">{val.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Active Team Section */}
        <section id="team" className="max-w-7xl mx-auto px-6 md:px-8 mt-28 md:mt-36">
          <div className="text-center max-w-xl mx-auto mb-16">
            <FadeIn y={15}>
              <span className="text-xs font-bold uppercase tracking-widest text-[#6D5DFC]">The core panel</span>
              <h2 className="font-display font-extrabold text-3xl text-white mt-1.5 tracking-tight">The Team</h2>
              <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                Meet the engineering and deal directors preserving the integrity of the MNQE assets.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {TEAM.map((member, idx) => (
              <FadeIn key={idx} delay={idx * 0.06} y={15}>
                <div className="h-full p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col items-center text-center justify-between group">
                  <div className="flex flex-col items-center">
                    {/* Initials-based avatar placeholder */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6D5DFC] to-indigo-600 flex items-center justify-center text-white text-lg font-black shadow-lg transition-transform duration-300 group-hover:scale-105 select-none border border-white/5">
                      {member.initials}
                    </div>
                    <h3 className="font-display font-extrabold text-sm text-white mt-5 tracking-tight">{member.name}</h3>
                    <p className="text-[10px] text-[#6D5DFC] font-bold mt-1 uppercase tracking-wider">{member.title}</p>
                    <p className="text-xs text-gray-400 mt-3 leading-normal">{member.bio}</p>
                  </div>

                  <div className="pt-4 border-t border-white/5 w-full mt-4 flex justify-center gap-3 text-gray-500">
                    <Mail className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
                    <Globe className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Closing Escrow CTA */}
        <section id="about-outro-cta" className="relative py-20 bg-gradient-to-br from-[#6D5DFC] to-[#5C4CEB] text-white text-center mt-28">
          <div className="max-w-4xl mx-auto px-6">
            <FadeIn y={15}>
              <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white">Launch your custom analytics node.</h2>
              <p className="text-indigo-100 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
                Connect your engineering portfolio with mnqe.com and dominate high density analytics. Secure immediate domain release today.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Link 
                  href="/pricing"
                  className="px-6 py-3 rounded-lg bg-[#0B0F19] hover:bg-[#141e35] font-bold text-white transition-all text-sm shadow-lg"
                >
                  View Licensing Prices
                </Link>
                <a 
                  href="https://www.godaddy.com/domainsearch/find?domainToCheck=mnqe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-white text-[#6D5DFC] hover:bg-gray-150 font-bold transition-all text-sm inline-flex items-center gap-1 shadow-lg"
                >
                  GoDaddy Escrow Portal <ArrowUpRight className="w-4 h-4" />
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
