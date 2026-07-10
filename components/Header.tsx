'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import SensualLogo from '@/components/SensualLogo';

const NAV_LINKS = [
  { name: 'Features', href: '/features' },
  { name: 'Product', href: '/product' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Monique & MNQE Hub', href: '/monique' },
  { name: 'About', href: '/about' },
  { name: 'Customers', href: '/customers' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on path changes
  useEffect(() => {
    let active = true;
    requestAnimationFrame(() => {
      if (active) {
        setMobileMenuOpen(false);
      }
    });
    return () => { active = false; };
  }, [pathname]);

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0F19]/90 backdrop-blur-md border-b border-white/5 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link 
          href="/" 
          id="brand-logo" 
          aria-label="MNQE Home"
        >
          <SensualLogo size="md" />
        </Link>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                id={`nav-link-${link.name.toLowerCase()}`}
                className={`relative py-2 text-sm font-medium tracking-wide transition-colors duration-200 group ${
                  isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#6D5DFC] transition-all duration-250 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.godaddy.com/domainsearch/find?domainToCheck=mnqe.com"
            target="_blank"
            rel="noopener noreferrer"
            id="buy-domain-header-cta"
            className="group flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-[#6D5DFC]/60 hover:border-[#6D5DFC] text-sm font-semibold tracking-wide text-white bg-[#6D5DFC]/5 hover:bg-[#6D5DFC]/15 transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-0.5"
          >
            Buy This Domain
            <ArrowUpRight className="w-4 h-4 text-[#6D5DFC] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          id="mobile-menu-toggle"
          className="p-2 -mr-2 text-gray-400 hover:text-white focus:outline-none md:hidden rounded-lg hover:bg-white/5 transition-all"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-panel"
          aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#6D5DFC]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Immersive Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 md:hidden bg-[#0B0F19] overflow-y-auto flex flex-col"
          >
            {/* Top Bar inside Overlay */}
            <div className="h-20 shrink-0 px-6 border-b border-white/5 flex items-center justify-between">
              <SensualLogo size="md" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 -mr-2 text-gray-400 hover:text-white focus:outline-none rounded-lg hover:bg-white/5 transition-all"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-[#6D5DFC]" />
              </button>
            </div>

            {/* Menu Links and Content */}
            <div className="flex-1 flex flex-col justify-between px-6 py-8">
              <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
                {NAV_LINKS.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04, duration: 0.2 }}
                    >
                      <Link
                        href={link.href}
                        id={`mobile-nav-link-${link.name.toLowerCase()}`}
                        className={`flex items-center justify-between px-4 py-4 rounded-xl text-base font-bold tracking-wide transition-all ${
                          isActive 
                            ? 'text-white bg-[#6D5DFC]/10 border-l-4 border-[#6D5DFC]' 
                            : 'text-gray-300 hover:text-white hover:bg-white/[0.02] border-l-4 border-transparent'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span>{link.name}</span>
                        {isActive && <span className="w-2 h-2 rounded-full bg-[#6D5DFC]" />}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24 }}
                className="pt-8 mt-8 border-t border-white/5 flex flex-col gap-4"
              >
                <div className="p-4 rounded-xl bg-[#121829] border border-white/5 flex flex-col gap-2">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold uppercase tracking-wider">
                    <Globe className="w-3.5 h-3.5 text-[#6D5DFC]" />
                    <span>Domain Status & Escrow</span>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-normal">
                    MNQE.com is fully qualified for immediate purchase and GoDaddy instant release. Secure your sovereign telemetry brand today.
                  </p>
                </div>

                <a
                  href="https://www.godaddy.com/domainsearch/find?domainToCheck=mnqe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="buy-domain-header-cta-mobile"
                  className="flex items-center justify-center gap-2 w-full px-5 py-4 rounded-xl border border-[#6D5DFC] bg-[#6D5DFC]/10 text-white font-bold tracking-wide hover:bg-[#6D5DFC]/20 transition-all text-center shadow-lg shadow-accent/10"
                >
                  Buy This Domain
                  <ArrowUpRight className="w-4 h-4 text-[#6D5DFC]" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
