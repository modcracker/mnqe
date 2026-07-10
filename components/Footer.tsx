'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUp, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import SensualLogo from '@/components/SensualLogo';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer id="site-footer" className="relative bg-[#0B0F19] border-t border-white/5 pt-16 pb-12 overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-radial-gradient(circle, rgba(109,93,252,0.03) 0%, rgba(0,0,0,0) 70%) pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 pb-12 border-b border-white/5">
          {/* Logo & About Column */}
          <div className="col-span-2 flex flex-col gap-5">
            <Link href="/" aria-label="MNQE Home">
              <SensualLogo size="md" />
            </Link>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              MNQE delivers enterprise-grade real-time web analytics, customizable visualization dashboards, and seamless data orchestration engines.
            </p>
            <div className="text-xs text-gray-500 font-mono tracking-wider pt-2 border-t border-white/5 w-fit">
              DOMAIN LICENSING & GLOBAL ACQUISITIONS
            </div>
          </div>

          {/* Column 1: Product */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold tracking-widest uppercase text-gray-300">Product</h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <Link href="/features" className="text-gray-400 hover:text-white transition-colors duration-200 relative group w-fit">
                Features
                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#6D5DFC] transition-all duration-250 group-hover:w-full" />
              </Link>
              <Link href="/product" className="text-gray-400 hover:text-white transition-colors duration-200 relative group w-fit">
                Overview
                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#6D5DFC] transition-all duration-250 group-hover:w-full" />
              </Link>
              <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors duration-200 relative group w-fit">
                Pricing
                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#6D5DFC] transition-all duration-250 group-hover:w-full" />
              </Link>
              <Link href="/customers" className="text-gray-400 hover:text-white transition-colors duration-200 relative group w-fit">
                Customers
                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#6D5DFC] transition-all duration-250 group-hover:w-full" />
              </Link>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold tracking-widest uppercase text-gray-300">Company</h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-200 relative group w-fit">
                About Us
                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#6D5DFC] transition-all duration-250 group-hover:w-full" />
              </Link>
              <Link href="/about#team" className="text-gray-400 hover:text-white transition-colors duration-200 relative group w-fit">
                The Team
                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#6D5DFC] transition-all duration-250 group-hover:w-full" />
              </Link>
              <Link href="/monique" className="text-[#6D5DFC] hover:text-white font-medium transition-colors duration-200 relative group w-fit">
                Monique & MNQE Hub
                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#6D5DFC] transition-all duration-250 group-hover:w-full" />
              </Link>
              <Link href="/contact" className="text-[#6D5DFC] hover:text-white font-medium transition-colors duration-200 relative group w-fit">
                Get In Touch
                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#6D5DFC] transition-all duration-250 group-hover:w-full" />
              </Link>
              <a href="https://www.godaddy.com/domainsearch/find?domainToCheck=mnqe.com" target="_blank" rel="noopener noreferrer" className="text-[#6D5DFC] hover:text-white font-medium transition-colors duration-200 inline-flex items-center gap-1 group w-fit">
                Domain For Sale
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Column 3: Resources */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold tracking-widest uppercase text-gray-300">Resources</h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <Link href="/product#integrations" className="text-gray-400 hover:text-white transition-colors duration-200 relative group w-fit">
                Integrations
                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#6D5DFC] transition-all duration-250 group-hover:w-full" />
              </Link>
              <Link href="/product#reports" className="text-gray-400 hover:text-white transition-colors duration-200 relative group w-fit">
                Custom Reports
                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#6D5DFC] transition-all duration-250 group-hover:w-full" />
              </Link>
              <Link href="/product#dashboards" className="text-gray-400 hover:text-white transition-colors duration-200 relative group w-fit">
                Mockup UI
                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#6D5DFC] transition-all duration-250 group-hover:w-full" />
              </Link>
            </div>
          </div>

          {/* Column 4: Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold tracking-widest uppercase text-gray-300">Legal</h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200 relative group w-fit">
                Terms of Service
                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#6D5DFC] transition-all duration-250 group-hover:w-full" />
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200 relative group w-fit">
                Privacy Policy
                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#6D5DFC] transition-all duration-250 group-hover:w-full" />
              </Link>
              <a href="/sitemap.xml" className="text-gray-500 hover:text-[#6D5DFC] transition-colors duration-200 relative group w-fit font-mono text-xs">
                Sitemap Index
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#6D5DFC] transition-all duration-250 group-hover:w-full" />
              </a>
              <a href="/robots.txt" className="text-gray-500 hover:text-[#6D5DFC] transition-colors duration-200 relative group w-fit font-mono text-xs">
                Robots Registry
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#6D5DFC] transition-all duration-250 group-hover:w-full" />
              </a>
            </div>
          </div>
        </div>

        {/* Lower footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>&copy; 2026 MNQE Analytics Inc. All rights reserved.</span>
            </div>
            <span className="hidden sm:inline text-white/10">|</span>
            <a
              href="https://feelize.com/start"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6D5DFC] hover:text-[#9c8eff] font-mono font-bold tracking-wider uppercase inline-flex items-center gap-0.5 transition-colors"
            >
              DEVELOPED BY FEELIZE
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://www.godaddy.com/domainsearch/find?domainToCheck=mnqe.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6D5DFC]/80 hover:text-[#6D5DFC] font-semibold flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#6D5DFC]/5 border border-[#6D5DFC]/20 hover:border-[#6D5DFC]/40 transition-all duration-200"
            >
              Buy MNQE.com Domain
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={scrollToTop}
              className="text-gray-400 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
              aria-label="Back to Top"
            >
              Back to top
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Back-to-Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-[#6D5DFC] hover:bg-[#5C4CEB] text-white shadow-xl shadow-accent/20 cursor-pointer hover:scale-110 active:scale-95 transition-all focus:outline-none"
            aria-label="Back to top button"
          >
            <ArrowUp className="w-5 h-5 stroke-[2.5px]" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
