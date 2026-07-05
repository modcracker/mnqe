'use client';

import React from 'react';
import Link from 'next/link';
import { HelpCircle, ArrowLeft, Globe, HelpCircle as AlertIcon, ArrowUpRight } from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="bg-[#0B0F19] text-[#F2F2F5] min-h-screen flex flex-col justify-between selection:bg-[#6D5DFC] selection:text-white">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center pt-32 pb-24 bg-mesh-dark grid-overlay relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#6D5DFC]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-md w-full relative z-10 flex flex-col items-center">
          {/* 404 Badge */}
          <div className="w-16 h-16 rounded-2xl bg-[#6D5DFC]/10 border border-[#6D5DFC]/35 flex items-center justify-center text-[#6D5DFC] font-mono text-xl font-black mb-6 animate-pulse select-none">
            404
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Telemetry Route Absent
          </h1>
          
          <p className="text-gray-400 text-sm leading-relaxed mt-4">
            The requested sub-route or anchor link cannot be resolved on our edge cache servers. However, the premium master domain <span className="text-white font-bold">MNQE.com</span> is fully functional and ready for acquisition.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3.5 w-full items-center justify-center">
            <Link
              href="/"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#6D5DFC] hover:bg-[#5C4CEB] text-white font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 flex items-center justify-center gap-2 select-none"
            >
              <ArrowLeft className="w-4 h-4" />
              Return Home
            </Link>
            <a
              href="https://www.godaddy.com/domainsearch/find?domainToCheck=mnqe.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/5 hover:border-[#6D5DFC] text-white bg-white/[0.02] hover:bg-[#6D5DFC]/10 font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-1.5 select-none"
            >
              Acquire mnqe.com
              <ArrowUpRight className="w-4 h-4 text-[#6D5DFC]" />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
