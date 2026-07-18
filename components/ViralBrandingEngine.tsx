"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "@/components/Header";
import { 
  DollarSign, 
  Sparkles, 
  TrendingUp, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Globe, 
  Mail, 
  ChevronDown, 
  Check,
  ChevronRight,
  Info
} from "lucide-react";

// Pre-seeded high-quality, realistic brand identities for the interactive selector
const SECTOR_CONCEPTS = [
  {
    id: "ai",
    sectorName: "Artificial Intelligence & SaaS",
    acronym: "M.N.Q.E.",
    title: "Marketing Next-Gen Quantum Ecosystem",
    description: "An advanced algorithmic orchestration engine designed to model and optimize customer attribution across complex decentralized network nodes.",
    vibe: "Enterprise Tech",
    tagline: "Unleash infinite attribution precision.",
    estimatedValue: "$325,000",
    color: "indigo",
    metricLabel: "Search Volume Potential",
    metricValue: "+148% MoM Growth",
  },
  {
    id: "biotech",
    sectorName: "Biotech & Longevity",
    acronym: "M.N.Q.E.",
    title: "Metabolic Nutrition Quantum Essentials",
    description: "A precision biotechnology platform synthesizing tailored micro-molecular formulations optimized for cellular repair and longevity diagnostics.",
    vibe: "Precision Biotech",
    tagline: "Science-backed vitality at the cellular level.",
    estimatedValue: "$289,000",
    color: "emerald",
    metricLabel: "Domain Authority Fit",
    metricValue: "Premium Tier-1 Asset",
  },
  {
    id: "luxury",
    sectorName: "Luxury Fashion & Creative Studio",
    acronym: "M.N.Q.E.",
    title: "Maison de Nouveautés et Qualité Éminente",
    description: "A digital-first luxury fashion house celebrating architectural silhouettes and bespoke, sustainable high-couture distribution systems.",
    vibe: "High Luxury & Art",
    tagline: "Timeless elegance, curated for the modern era.",
    estimatedValue: "$380,000",
    color: "rose",
    metricLabel: "Brand Premium Index",
    metricValue: "9.8/10 Brandability",
  },
  {
    id: "infra",
    sectorName: "Telecom & Deep Infrastructure",
    acronym: "M.N.Q.E.",
    title: "Mobile Network Quality Engine",
    description: "A low-latency edge computing framework enabling modern 5G/6G communication networks to auto-heal routing and resolve telemetry conflicts.",
    vibe: "Telecom Infrastructure",
    tagline: "Zero latency. Pure connectivity.",
    estimatedValue: "$412,000",
    color: "violet",
    metricLabel: "Scarcity Index",
    metricValue: "LLLL .com (Gold Standard)",
  }
];

export default function ViralBrandingEngine() {
  // --- STATE ---
  const [selectedSectorId, setSelectedSectorId] = useState<string>("ai");
  const [customIndustry, setCustomIndustry] = useState<string>("");
  const [isGeneratingCustom, setIsGeneratingCustom] = useState<boolean>(false);
  const [customConcepts, setCustomConcepts] = useState<any[]>([]);
  const [customError, setCustomError] = useState<string | null>(null);

  // Active concept details based on state
  const activeSector = useMemo(() => {
    if (customConcepts.length > 0) {
      return customConcepts[0];
    }
    return SECTOR_CONCEPTS.find((s) => s.id === selectedSectorId) || SECTOR_CONCEPTS[0];
  }, [selectedSectorId, customConcepts]);

  // Pricing Estimator inputs (Simplified to a clean valuation calculator)
  const [scalingFactor, setScalingFactor] = useState<number>(1.5); // Multiplier representing business scale
  const [investmentTier, setInvestmentTier] = useState<"standard" | "premium" | "enterprise">("premium");

  // Dynamic Valuation calculation based on clean business tiers
  const calculatedAppraisalValue = useMemo(() => {
    const baseValue = 24000;
    const tierMultiplier = investmentTier === "standard" ? 1.0 : investmentTier === "premium" ? 2.5 : 5.8;
    return Math.round(baseValue * tierMultiplier * scalingFactor);
  }, [investmentTier, scalingFactor]);

  const [offerAmount, setOfferAmount] = useState<string>("45000");

  // FAQ state
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);

  // Clear custom concepts to revert to curated defaults
  const handleRevertToCurated = () => {
    setCustomConcepts([]);
    setCustomIndustry("");
    setCustomError(null);
  };

  // Action for AI generation
  const handleGenerateCustom = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customIndustry.trim()) return;

    setIsGeneratingCustom(true);
    setCustomError(null);

    try {
      const response = await fetch("/api/gemini/acronym", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ industry: customIndustry }),
      });

      if (!response.ok) {
        throw new Error("Failed to consult Gemini API.");
      }

      const data = await response.json();
      if (data && data.concepts && data.concepts.length > 0) {
        // Map response format to UI concept layout
        const formatted = data.concepts.map((concept: any, index: number) => ({
          id: `custom-${index}`,
          sectorName: customIndustry,
          acronym: concept.acronym || "M.N.Q.E.",
          title: concept.title,
          description: concept.description,
          vibe: concept.vibe || "Custom Venture",
          tagline: concept.tagline,
          estimatedValue: concept.estimatedValue || "$350,000",
          color: index === 0 ? "indigo" : index === 1 ? "rose" : "emerald",
          metricLabel: "Custom Market Fit",
          metricValue: "Calculated Real-Time"
        }));
        setCustomConcepts(formatted);
      } else {
        throw new Error("Empty response from branding model.");
      }
    } catch (err: any) {
      console.warn("Offline concept generation fallback initiated:", err.message);
      // Clean custom fallback design
      const fallback = [
        {
          id: "custom-fallback",
          sectorName: customIndustry,
          acronym: "M.N.Q.E.",
          title: `Monique Next-Gen ${customIndustry.split(" ")[0] || "Systems"} Engine`,
          description: `A scalable proprietary protocol engineered to streamline operational performance and user metrics across the ${customIndustry} sector.`,
          vibe: "Tailored Niche",
          tagline: "Unlocking advanced architecture limits.",
          estimatedValue: "$295,000",
          color: "rose",
          metricLabel: "Niche Fit Rating",
          metricValue: "Premium Custom Alignment"
        }
      ];
      setCustomConcepts(fallback);
    } finally {
      setIsGeneratingCustom(false);
    }
  };

  return (
    <div className="w-full text-slate-100 font-sans antialiased selection:bg-indigo-500/30 selection:text-white">
      
      {/* HEADER NAVIGATION */}
      <Header />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-36 border-b border-slate-900">
        <div className="absolute inset-0 bg-radial-gradient from-indigo-950/15 via-transparent to-transparent opacity-70 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900/80 border border-slate-800 rounded-full text-xs font-mono text-slate-400"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>EXCLUSIVELY LISTED FOR IMMEDIATE ACQUISITION</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-8xl font-display font-extrabold tracking-tight text-white mb-2"
            >
              MNQE<span className="text-slate-500 font-light font-sans">.com</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed"
            >
              Acquire a rare, beautifully pronounceable <strong className="text-white font-medium">4-letter vanity brand</strong>. Highly memorable, phonetically perfect for the name <strong className="text-indigo-300 font-medium">Monique</strong>, and primed for global technology or lifestyle authority.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <button
              onClick={() => {
                document.getElementById("offer")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-sm rounded-full shadow-lg shadow-indigo-950/40 transition"
            >
              Place Secure Escrow Offer
            </button>
            <button
              onClick={() => {
                document.getElementById("fundamentals")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-300 hover:text-white font-semibold text-sm rounded-full transition"
            >
              Analyze Value Fundamentals
            </button>
          </motion.div>
        </div>
      </section>

      {/* CORE VALUATION FUNDAMENTALS */}
      <section id="fundamentals" className="py-20 bg-slate-950 px-6 border-b border-slate-900">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-xs uppercase font-mono tracking-widest text-indigo-400 font-semibold">Asset Index</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white">Digital Real Estate Fundamentals</h3>
            <p className="text-sm text-slate-400">
              Four-letter (LLLL) .com domains represent ultimate digital scarcity. Monique vanity placement creates exceptional organic value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl space-y-3 hover:border-slate-700 transition">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 text-indigo-400 text-sm font-mono font-bold">01</div>
              <h4 className="font-display font-bold text-lg text-white">4-Letter Scarcity</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Only 456,976 LLLL combinations exist. All .com variants are fully registered and tightly held. Ownership establishes institutional pedigree.
              </p>
            </div>

            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl space-y-3 hover:border-slate-700 transition">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 text-indigo-400 text-sm font-mono font-bold">02</div>
              <h4 className="font-display font-bold text-lg text-white">Vanity Equity</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Matches the popular, elegant globally recognized female name &quot;Monique&quot;. Perfect for consumer goods, boutiques, and luxury portfolios.
              </p>
            </div>

            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl space-y-3 hover:border-slate-700 transition">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 text-indigo-400 text-sm font-mono font-bold">03</div>
              <h4 className="font-display font-bold text-lg text-white">Acronym Authority</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Exceptional natural flow for systems like &quot;Mobile Network Quality Engine&quot; or &quot;Marketing Next-Gen Quantum Essentials&quot;.
              </p>
            </div>

            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl space-y-3 hover:border-slate-700 transition">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 text-indigo-400 text-sm font-mono font-bold">04</div>
              <h4 className="font-display font-bold text-lg text-white">Zero Advertising Friction</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Short domains slash user cognitive friction, accelerate brand recall, and dramatically improve conversions on paid search campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE BROCHURE & BRAND IDENTITY SUITE */}
      <section className="py-20 bg-slate-900/30 px-6 border-b border-slate-900">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <h2 className="text-xs uppercase font-mono tracking-widest text-indigo-400 font-semibold">Interactive Brochure</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white">Tailored Brand Alignment Suite</h3>
              <p className="text-sm text-slate-400">
                Witness how the letters <strong className="text-slate-200">M.N.Q.E.</strong> resolve into highly professional, premium enterprise identities across major strategic sectors.
              </p>
            </div>

            {/* Curated Selectors */}
            <div className="flex flex-wrap gap-2">
              {customConcepts.length > 0 && (
                <button
                  onClick={handleRevertToCurated}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-indigo-950/60 border border-indigo-500 text-indigo-300 hover:bg-indigo-900/40 transition"
                >
                  &larr; Revert to Curated Sectors
                </button>
              )}
              {SECTOR_CONCEPTS.map((sector) => (
                <button
                  key={sector.id}
                  onClick={() => {
                    setCustomConcepts([]);
                    setSelectedSectorId(sector.id);
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
                    selectedSectorId === sector.id && customConcepts.length === 0
                      ? "bg-white text-slate-950 border-white font-semibold"
                      : "bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-slate-200 border-slate-800"
                  }`}
                >
                  {sector.sectorName}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Visual Business Identity Card Preview - Left 7 columns */}
            <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[380px]">
              {/* Background gradient corresponding to active sector */}
              <div className={`absolute -top-16 -right-16 w-56 h-56 rounded-full blur-[100px] opacity-25 pointer-events-none transition-all duration-700 ${
                activeSector.color === "indigo" ? "bg-indigo-500" :
                activeSector.color === "emerald" ? "bg-emerald-500" :
                activeSector.color === "rose" ? "bg-rose-500" : "bg-violet-500"
              }`} />

              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-slate-800/60">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 bg-slate-950 rounded-xl border border-slate-800/80">
                      <Cpu className={`w-5 h-5 ${
                        activeSector.color === "indigo" ? "text-indigo-400" :
                        activeSector.color === "emerald" ? "text-emerald-400" :
                        activeSector.color === "rose" ? "text-rose-400" : "text-violet-400"
                      }`} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-slate-500 block">IDENTITY SUITE PREVIEW</span>
                      <strong className="text-white text-sm font-semibold tracking-tight">{activeSector.vibe}</strong>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
                    mnqe.com
                  </span>
                </div>

                <div className="space-y-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 block font-bold">Acronym Resolution</span>
                  <h4 className="text-2xl md:text-3xl font-display font-extrabold text-white tracking-tight leading-tight">
                    {activeSector.title}
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    {activeSector.description}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-wrap justify-between items-center gap-4">
                <div>
                  <span className="text-[9px] font-mono text-slate-500 block uppercase">{activeSector.metricLabel}</span>
                  <strong className="text-white text-xs">{activeSector.metricValue}</strong>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-500 block uppercase">Target Brand Vibe</span>
                  <span className={`text-xs font-mono font-medium ${
                    activeSector.color === "indigo" ? "text-indigo-400" :
                    activeSector.color === "emerald" ? "text-emerald-400" :
                    activeSector.color === "rose" ? "text-rose-400" : "text-violet-400"
                  }`}>{activeSector.tagline}</span>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-500 block uppercase">Estimated Value Fit</span>
                  <strong className="text-emerald-400 text-xs">{activeSector.estimatedValue}</strong>
                </div>
              </div>
            </div>

            {/* Custom Niche Generation Tool - Right 5 columns */}
            <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-6 flex flex-col justify-between min-h-[380px]">
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-400 font-semibold uppercase">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Gemini Core Integration</span>
                  </div>
                  <h4 className="text-xl font-display font-bold text-white">Custom Niche Modeling</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Test your exact business sector. Our system will consult Gemini to synthesize optimized corporate identities for the letters <strong className="text-slate-300">M.N.Q.E.</strong>
                  </p>
                </div>

                <form onSubmit={handleGenerateCustom} className="space-y-3">
                  <div className="space-y-1">
                    <label htmlFor="niche-input" className="text-[10px] font-mono text-slate-500 block">YOUR SECTOR OR PRODUCT</label>
                    <input
                      id="niche-input"
                      type="text"
                      required
                      value={customIndustry}
                      onChange={(e) => setCustomIndustry(e.target.value)}
                      placeholder="e.g. Travel Booking, Sustainable Coffee, Web3 Venture Fund"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-indigo-500 transition"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isGeneratingCustom}
                    className="w-full py-3 bg-slate-900 hover:bg-slate-850 border border-slate-800 text-white rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-150 flex items-center justify-center gap-2"
                  >
                    {isGeneratingCustom ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Generating Portfolio...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Synthesize Acronyms</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              <div className="p-4 bg-slate-900/30 border border-slate-850 rounded-2xl flex items-start gap-3">
                <Info className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                <p className="text-[10px] text-slate-400 leading-relaxed">
                  Generated ideas are demonstrative and immediately available as royalty-free creative concepts with your purchase of the <strong className="text-slate-200">MNQE.com</strong> asset.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SIMPLIFIED DYNAMIC VALUATION INDEX */}
      <section className="py-20 bg-slate-950 px-6 border-b border-slate-900">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-xs uppercase font-mono tracking-widest text-indigo-400 font-semibold">Valuation Matrix</h2>
            <h3 className="text-3xl font-display font-bold text-white">Dynamic Asset Valuation Calculator</h3>
            <p className="text-sm text-slate-400">
              Calculate projected brand capitalizations based on organizational scale and targeted investment depth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-900/30 border border-slate-850 p-8 rounded-3xl">
            <div className="space-y-6">
              
              {/* Factor 1: Investment Depth Tier */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-slate-500 block uppercase">Brand capitalization tier</span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { key: "standard", label: "Seed Stage", desc: "Digital MVP" },
                    { key: "premium", label: "Series A", desc: "Market Leader" },
                    { key: "enterprise", label: "Enterprise", desc: "Core Corporate" },
                  ].map((tier) => (
                    <button
                      key={tier.key}
                      onClick={() => setInvestmentTier(tier.key as any)}
                      className={`p-3 rounded-xl border text-left transition ${
                        investmentTier === tier.key
                          ? "bg-indigo-950/40 border-indigo-500/80 text-white"
                          : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      <strong className="block text-xs">{tier.label}</strong>
                      <span className="text-[9px] text-slate-500">{tier.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Factor 2: Scaling Scale Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-mono">
                  <span className="text-slate-500 uppercase">Target Audience Scope</span>
                  <span className="text-indigo-400 font-semibold">Factor: {scalingFactor}x</span>
                </div>
                <input
                  type="range"
                  min="1.0"
                  max="3.0"
                  step="0.1"
                  value={scalingFactor}
                  onChange={(e) => setScalingFactor(parseFloat(e.target.value))}
                  className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                  aria-label="Target Audience Scope Factor"
                />
                <div className="flex justify-between text-[9px] text-slate-500 font-mono">
                  <span>Regional/Niche</span>
                  <span>National Coverage</span>
                  <span>Global Omnichannel</span>
                </div>
              </div>

            </div>

            {/* Price Output panel */}
            <div className="p-6 bg-slate-950 border border-slate-850 rounded-2xl flex flex-col justify-center items-center text-center relative overflow-hidden">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Estimated Brand Asset Appraisal</span>
              
              <div className="text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight flex items-center mb-2">
                <span className="text-indigo-400 text-3xl font-light mr-0.5">$</span>
                <span>{calculatedAppraisalValue.toLocaleString()}</span>
                <span className="text-xs text-slate-500 uppercase font-mono ml-1">USD</span>
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed max-w-sm mt-2">
                Calculated index based on baseline 4-letter LLLL .com scarcity indexes ($24k median value), modified by scope metrics and capital readiness factors.
              </p>

              <button
                onClick={() => {
                  document.getElementById("offer")?.scrollIntoView({ behavior: "smooth" });
                  setOfferAmount(calculatedAppraisalValue.toString());
                }}
                className="mt-6 inline-flex items-center gap-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-xs font-semibold tracking-wide transition"
              >
                <span>Lock Valuation & Inquiry</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SECURE ESCROW & TECHNICAL FAQ */}
      <section id="faq" className="py-20 bg-slate-900/20 px-6 border-b border-slate-900">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-xs uppercase font-mono tracking-widest text-indigo-400 font-semibold">Acquisition Security</h2>
            <h3 className="text-3xl font-display font-bold text-white">Escrow & Secure Transfer Protocols</h3>
            <p className="text-sm text-slate-400">
              Clear, realistic details for acquiring the <strong className="text-slate-200 font-medium">MNQE / Monique</strong> domain asset safely.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How does the domain transfer escrow process work?",
                a: "For mutual protection, all transactions are managed exclusively via industry-leading licensed escrow networks (Escrow.com or Sedo. The purchaser secures funds inside the escrow agent. Once confirmed, the transfer token is delivered, the domain pushes to your designated registrar (such as GoDaddy, Cloudflare, or Route53), and escrow disburses funds only after transfer completes."
              },
              {
                q: "Why are LLLL .com domains valued so highly?",
                a: "Four-letter (LLLL) .com domains are absolute finite digital real estate. There are exactly 456,976 LLLL combinations, all of which are registered. Premium pronounceable combinations like 'MNQE' and name-vanity matches are highly coveted because they drastically slash long-term customer acquisition costs by boosting search engine authority and direct-type recall."
              },
              {
                q: "Do you offer lease-to-own or financing options?",
                a: "Yes, we support professional lease-to-own agreements spanning 12 to 24 months. This structure allows funded startups to immediately deploy and gain the domain authority of MNQE.com while keeping upfront capital aligned with milestones."
              },
              {
                q: "What credentials and materials are included?",
                a: "The transaction provides 100% full, clean, and exclusive legal ownership of the domain name MNQE.com. The asset possesses no trademark conflicts, clear DNS history, and is fully ready for an immediate secure registrar push transfer."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-slate-950/80 border border-slate-850 rounded-2xl overflow-hidden transition"
              >
                <button
                  onClick={() => setActiveFaqIndex(activeFaqIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left text-white hover:bg-slate-900 transition"
                  aria-expanded={activeFaqIndex === index}
                >
                  <span className="font-display font-semibold text-sm pr-4">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${activeFaqIndex === index ? "rotate-180" : ""}`} />
                </button>
                
                <AnimatePresence initial={false}>
                  {activeFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-slate-900"
                    >
                      <p className="p-6 text-xs text-slate-400 leading-relaxed bg-slate-950/40">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE SECURE CONVERSION ACQUISITION OFFER SECTION */}
      <section id="offer" className="py-20 bg-slate-950 px-6">
        <div className="max-w-3xl mx-auto bg-gradient-to-b from-slate-900/60 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-rose-500" />
          
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs font-mono text-indigo-400">
              <Mail className="w-3.5 h-3.5" />
              <span>Direct Brokerage Gateway</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white">Acquire MNQE.com</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
              We offer two highly secure, straightforward ways to submit your offer or lease inquiry. No complex forms or setups required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pathway 1: Direct Email Brokerage */}
            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:border-slate-700 transition">
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400">Option 1: Direct Email</span>
                <h4 className="font-display font-bold text-lg text-white">Connect Instantly</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Send a pre-structured purchase proposal directly to our inbox. Clicking below automatically drafts the message in your preferred email client with all transaction details pre-filled.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`mailto:info@mnqe.com?subject=Acquisition Inquiry: MNQE.com&body=Hello,%0A%0AI would like to submit an acquisition offer for the premium domain name MNQE.com.%0A%0AEstimated Brand Valuation (Calculated via Landing Suite): $${parseInt(offerAmount).toLocaleString() || "45,000"} USD%0A%0APlease let us know if the domain is currently available for transfer and how we can proceed with a secure Escrow process.%0A%0ASincerely,%0A[Your Name]%0A[Your Corporation/Venture]`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl tracking-wider transition uppercase"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Draft Offer Email</span>
                </a>
                <span className="text-[9px] text-slate-500 font-mono block text-center mt-2">
                  Direct to: info@mnqe.com
                </span>
              </div>
            </div>

            {/* Pathway 2: Certified Escrow Network */}
            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:border-slate-700 transition">
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">Option 2: Trusted Brokerage</span>
                <h4 className="font-display font-bold text-lg text-white">Escrow & Agent Transfer</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Prefer a professional brokerage intermediary? We fully support instant secure transfers or installment financing plans through recognized escrow leaders: <strong className="text-slate-300">Escrow.com</strong> and <strong className="text-slate-300">Sedo</strong>.
                </p>
              </div>

              <div className="pt-2 space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="https://www.escrow.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2.5 bg-slate-950 border border-slate-800 hover:border-slate-750 hover:bg-slate-900 text-center text-[10px] rounded-xl text-slate-300 font-mono transition"
                  >
                    Escrow.com
                  </a>
                  <a
                    href="https://sedo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2.5 bg-slate-950 border border-slate-800 hover:border-slate-750 hover:bg-slate-900 text-center text-[10px] rounded-xl text-slate-300 font-mono transition"
                  >
                    Sedo Brokerage
                  </a>
                </div>
                <span className="text-[9px] text-slate-500 font-mono block text-center">
                  Provides 100% legal buyer-seller protection.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CREDITS & COHESIVE TRUST ASSURANCE */}
      <footer className="bg-slate-950 py-12 px-6 border-t border-slate-900 text-center text-slate-500 text-xs space-y-3">
        <p className="max-w-xl mx-auto leading-relaxed">
          The domain name MNQE.com is held securely in escrow. All layout aesthetics, brand illustrations, and descriptive corporate identities represent visual alignment studies under digital asset fair use.
        </p>
        <p className="font-mono text-[10px]">
          &copy; 2026 Monique Domain Asset Brokerage. Secured by Escrow.com and Sedo. All Rights Reserved.
        </p>
      </footer>

    </div>
  );
}
