'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, X, Globe, ArrowUpRight, Search, 
  HelpCircle, FileText, Hash, ChevronRight 
} from 'lucide-react';
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

const SEARCH_INDEX = [
  // FAQs
  {
    title: "Domain transfer escrow process",
    category: "FAQ",
    desc: "How does the GoDaddy or licensed escrow network transfer work?",
    href: "/#faq",
    anchor: "faq"
  },
  {
    title: "Why are LLLL .com domains highly valued?",
    category: "FAQ",
    desc: "Digital real estate scarcity and direct-type recall power.",
    href: "/#faq",
    anchor: "faq"
  },
  {
    title: "Lease-to-own & installment financing",
    category: "FAQ",
    desc: "Professional structured agreements over 12 to 24 months.",
    href: "/#faq",
    anchor: "faq"
  },
  {
    title: "Domain credentials & materials included",
    category: "FAQ",
    desc: "Exclusive legal transfer with clear DNS history.",
    href: "/#faq",
    anchor: "faq"
  },
  // Documentation / Sections
  {
    title: "High-density dynamic dashboards",
    category: "Documentation",
    desc: "Advanced UI widgets, graphs, and layout controls.",
    href: "/product#dashboards",
    anchor: "dashboards"
  },
  {
    title: "Real-time Telemetry Ingestion",
    category: "Documentation",
    desc: "Blazing traces with low-latency caches and robust pipelines.",
    href: "/product#telemetry",
    anchor: "telemetry"
  },
  {
    title: "Multiuser Workspace Collaboration",
    category: "Documentation",
    desc: "Real-time sync and task coordination boards.",
    href: "/product#workspaces",
    anchor: "workspaces"
  },
  {
    title: "Enterprise Core Security Tunneling",
    category: "Documentation",
    desc: "Encrypted queries and isolated pipeline controls.",
    href: "/product#security",
    anchor: "security"
  },
  // Subpages / Pages
  {
    title: "Licensing Pricing & Tiers",
    category: "Pricing",
    desc: "Analyze standard developer and custom enterprise tiers.",
    href: "/pricing"
  },
  {
    title: "May Levy & SRE Team Story",
    category: "About",
    desc: "The engineering and operations panel behind MNQE.",
    href: "/about"
  },
  {
    title: "Sovereign Company Values",
    category: "About",
    desc: "Strict design standards and database ingestion metrics.",
    href: "/about#values",
    anchor: "values"
  },
  {
    title: "Acquire MNQE.com Escrow Hub",
    category: "Acquisition",
    desc: "Structured direct inquiry draft or Sedo and Escrow.com networks.",
    href: "/#offer",
    anchor: "offer"
  },
  {
    title: "Contact Desk & Support Gateway",
    category: "Contact",
    desc: "Submit tickets or discuss tailored enterprise telemetry setups.",
    href: "/contact"
  }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof SEARCH_INDEX>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  // Click outside to close desktop search dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }
    const cleanQuery = query.toLowerCase();
    const filtered = SEARCH_INDEX.filter(item => 
      item.title.toLowerCase().includes(cleanQuery) || 
      item.desc.toLowerCase().includes(cleanQuery) ||
      item.category.toLowerCase().includes(cleanQuery)
    );
    setSearchResults(filtered);
  };

  const handleItemClick = (href: string, anchor?: string) => {
    setSearchQuery('');
    setSearchResults([]);
    setShowDropdown(false);
    setMobileMenuOpen(false);

    if (anchor) {
      const currentPath = window.location.pathname;
      const targetPath = href.split('#')[0];
      
      if (currentPath === targetPath || (currentPath === '/' && targetPath === '')) {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
    }
    
    window.location.href = href;
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0F19]/90 backdrop-blur-md border-b border-white/5 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link 
          href="/" 
          id="brand-logo" 
          aria-label="MNQE Home"
          className="shrink-0"
        >
          <SensualLogo size="md" />
        </Link>

        {/* Global Search Bar (Desktop) */}
        <div ref={dropdownRef} className="relative hidden md:block w-48 lg:w-64 z-50">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              onFocus={() => setShowDropdown(true)}
              placeholder="Search docs & FAQs..."
              className="w-full bg-white/[0.04] hover:bg-white/[0.08] focus:bg-[#0c101d] border border-white/10 focus:border-[#6D5DFC] rounded-xl pl-9 pr-8 py-1.5 text-xs text-white placeholder-gray-400 focus:outline-none transition-all duration-200"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
            {searchQuery && (
              <button 
                onClick={() => handleSearchChange("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-[10px] font-mono"
              >
                Clear
              </button>
            )}
          </div>

          {/* Desktop Search Dropdown Panel */}
          {showDropdown && searchQuery && (
            <div className="absolute top-full mt-2 left-0 right-0 w-80 bg-[#0b0f19]/98 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-2 max-h-96 overflow-y-auto z-50">
              <div className="px-3 py-1.5 text-[9px] font-mono tracking-widest uppercase text-[#6D5DFC] border-b border-white/5 mb-1.5 flex justify-between">
                <span>Search Results</span>
                <span>{searchResults.length} found</span>
              </div>
              {searchResults.length === 0 ? (
                <div className="px-3 py-4 text-xs text-gray-400 text-center font-medium">
                  No matching docs or FAQs found
                </div>
              ) : (
                <div className="space-y-1">
                  {searchResults.map((item, idx) => {
                    const isFaq = item.category === "FAQ";
                    const isDoc = item.category === "Documentation";
                    return (
                      <button
                        key={idx}
                        onClick={() => handleItemClick(item.href, item.anchor)}
                        className="w-full text-left px-3 py-2 rounded-xl hover:bg-white/[0.04] flex items-start gap-2.5 group transition-colors duration-150"
                      >
                        {isFaq ? (
                          <HelpCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        ) : isDoc ? (
                          <FileText className="w-4 h-4 text-[#6D5DFC] shrink-0 mt-0.5" />
                        ) : (
                          <Hash className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold text-white group-hover:text-[#6D5DFC] transition-colors line-clamp-1">
                            {item.title}
                          </div>
                          <div className="text-[10px] text-gray-400 line-clamp-1 mt-0.5">
                            {item.desc}
                          </div>
                        </div>
                        <ChevronRight className="w-3 h-3 text-gray-500 group-hover:text-white shrink-0 self-center transition-transform group-hover:translate-x-0.5" />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-6 lg:gap-8 shrink-0" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                id={`nav-link-${link.name.toLowerCase()}`}
                className={`relative py-2 text-xs lg:text-sm font-medium tracking-wide transition-colors duration-200 group ${
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
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a
            href="https://www.godaddy.com/domainsearch/find?domainToCheck=mnqe.com"
            target="_blank"
            rel="noopener noreferrer"
            id="buy-domain-header-cta"
            className="group flex items-center gap-1.5 px-4 lg:px-5 py-2.5 rounded-xl border border-[#6D5DFC]/60 hover:border-[#6D5DFC] text-xs lg:text-sm font-semibold tracking-wide text-white bg-[#6D5DFC]/5 hover:bg-[#6D5DFC]/15 transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-0.5"
          >
            Buy This Domain
            <ArrowUpRight className="w-3.5 h-3.5 text-[#6D5DFC] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
            <div className="flex-1 flex flex-col justify-between px-6 py-6">
              <div>
                {/* Mobile Search input */}
                <div className="mb-6 relative z-50">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => handleSearchChange(e.target.value)}
                      placeholder="Search documentation & FAQs..."
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#6D5DFC] transition-all"
                    />
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
                  </div>

                  {searchQuery && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-[#0c101d] border border-white/15 rounded-xl p-1.5 max-h-60 overflow-y-auto space-y-1 shadow-2xl">
                      {searchResults.length === 0 ? (
                        <div className="px-3 py-4 text-xs text-gray-400 text-center">
                          No matches found
                        </div>
                      ) : (
                        searchResults.map((item, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleItemClick(item.href, item.anchor)}
                            className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/[0.04] flex items-center justify-between gap-2 group"
                          >
                            <div className="min-w-0">
                              <div className="text-xs font-bold text-white group-hover:text-[#6D5DFC] truncate">{item.title}</div>
                              <div className="text-[10px] text-gray-400 truncate mt-0.5">{item.desc}</div>
                            </div>
                            <ChevronRight className="w-3 h-3 text-gray-500 shrink-0" />
                          </button>
                        ))
                      )}
                    </div>
                  )}
                </div>

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
                          className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold tracking-wide transition-all ${
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
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24 }}
                className="pt-6 mt-6 border-t border-white/5 flex flex-col gap-4"
              >
                <div className="p-4 rounded-xl bg-[#121829] border border-white/5 flex flex-col gap-2">
                  <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
                    <Globe className="w-3.5 h-3.5 text-[#6D5DFC]" />
                    <span>Domain Status & Escrow</span>
                  </div>
                  <p className="text-[10px] text-gray-400 leading-normal">
                    MNQE.com is fully qualified for immediate purchase and GoDaddy instant release. Secure your sovereign telemetry brand today.
                  </p>
                </div>

                <a
                  href="https://www.godaddy.com/domainsearch/find?domainToCheck=mnqe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="buy-domain-header-cta-mobile"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl border border-[#6D5DFC] bg-[#6D5DFC]/10 text-xs text-white font-bold tracking-wide hover:bg-[#6D5DFC]/20 transition-all text-center shadow-lg shadow-accent/10"
                >
                  Buy This Domain
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#6D5DFC]" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
