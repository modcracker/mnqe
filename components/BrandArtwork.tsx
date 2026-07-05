'use client';

import React from 'react';
import { motion } from 'motion/react';

interface BrandIconProps {
  className?: string;
  size?: number;
  glow?: boolean;
}

/**
 * An extremely custom, high-precision geometric vector icon for MNQE.
 * Combines:
 * - Outer telemetry tick track (representing continuous metrics)
 * - Interlocking geometric pathways outlining M, N, Q, and E:
 *   - "Q": Elegant outer bounding ring with a diagonal slash at the bottom-right.
 *   - "M" & "N": Fine double-peaks intersecting perfectly in the center.
 *   - "E": Parallel triple bars creating a sleek multi-tier horizontal bridge.
 * - Glowing vertex nodes reflecting high-accuracy technical telemetry.
 */
export function BrandIcon({ className = '', size = 48, glow = true }: BrandIconProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      {glow && (
        <div 
          className="absolute inset-0 rounded-full bg-[#6D5DFC]/20 blur-md pointer-events-none transition-all duration-300 group-hover:bg-[#6D5DFC]/30" 
          style={{ width: size * 1.1, height: size * 1.1 }}
        />
      )}
      <svg
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 select-none"
      >
        <defs>
          <linearGradient id="brand-grad-primary" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6D5DFC" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#D946EF" />
          </linearGradient>
          <linearGradient id="brand-grad-secondary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#6D5DFC" stopOpacity="0.4" />
          </linearGradient>
          <radialGradient id="center-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6D5DFC" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Center Glow */}
        <circle cx="50" cy="50" r="45" fill="url(#center-glow)" />

        {/* 1. Outer Telemetry Ring (The "Q" Frame + Orbital Ticks) */}
        <circle 
          cx="50" 
          cy="50" 
          r="42" 
          stroke="url(#brand-grad-primary)" 
          strokeWidth="1.5" 
          strokeOpacity="0.4" 
        />
        
        {/* Ticks representation around outer rim */}
        <circle 
          cx="50" 
          cy="50" 
          r="45" 
          stroke="#6D5DFC" 
          strokeWidth="1" 
          strokeOpacity="0.2" 
          strokeDasharray="2 6" 
        />

        {/* 2. Concentric Orbit Line (The "Q" tail and anchor track) */}
        <path 
          d="M75 75 L86 86" 
          stroke="url(#brand-grad-primary)" 
          strokeWidth="3.5" 
          strokeLinecap="round" 
        />
        <circle cx="86" cy="86" r="2.5" fill="#D946EF" />

        {/* 3. The Custom "M" & "N" Interlocking Monogram Geometry */}
        {/* Left pillar */}
        <path 
          d="M26 70 V32" 
          stroke="url(#brand-grad-secondary)" 
          strokeWidth="3" 
          strokeLinecap="round" 
        />
        {/* Interlocking Peaks for M & N */}
        <path 
          d="M26 32 L50 60 L74 32" 
          stroke="url(#brand-grad-primary)" 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        {/* Right pillar */}
        <path 
          d="M74 32 V70" 
          stroke="url(#brand-grad-secondary)" 
          strokeWidth="3" 
          strokeLinecap="round" 
        />
        
        {/* Diagonal N connecting track */}
        <path 
          d="M26 32 L74 70" 
          stroke="url(#brand-grad-primary)" 
          strokeWidth="1.5" 
          strokeOpacity="0.5" 
          strokeLinecap="round" 
        />

        {/* 4. The "E" Horizontal Parallel Tiers */}
        {/* Top Tier */}
        <path 
          d="M36 38 H64" 
          stroke="#FFFFFF" 
          strokeWidth="2" 
          strokeOpacity="0.85" 
          strokeLinecap="round" 
        />
        {/* Middle Tier */}
        <path 
          d="M36 50 H64" 
          stroke="url(#brand-grad-primary)" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
        />
        {/* Bottom Tier */}
        <path 
          d="M36 62 H64" 
          stroke="#FFFFFF" 
          strokeWidth="2" 
          strokeOpacity="0.85" 
          strokeLinecap="round" 
        />

        {/* 5. Telemetry Dots / Precision Nodes */}
        <circle cx="26" cy="32" r="3.5" fill="#6D5DFC" stroke="#0B0F19" strokeWidth="1.5" />
        <circle cx="74" cy="32" r="3.5" fill="#D946EF" stroke="#0B0F19" strokeWidth="1.5" />
        <circle cx="50" cy="60" r="4.5" fill="#FFFFFF" stroke="#6D5DFC" strokeWidth="2" />
        
        {/* Subtle geometric calibration cursor */}
        <path d="M50 14 V19" stroke="#6D5DFC" strokeWidth="1" />
        <path d="M50 81 V86" stroke="#6D5DFC" strokeWidth="1" />
        <path d="M14 50 H19" stroke="#6D5DFC" strokeWidth="1" />
        <path d="M81 50 H86" stroke="#6D5DFC" strokeWidth="1" />
      </svg>
    </div>
  );
}

interface BrandBackgroundArtProps {
  className?: string;
  speedMultiplier?: number;
}

/**
 * An oversized, highly detailed and elegant background art container
 * consisting of rotating rings, telemetry vectors, precision coordinates,
 * and a glowing vector brand watermark.
 */
export function BrandBackgroundArt({ className = '', speedMultiplier = 1 }: BrandBackgroundArtProps) {
  return (
    <div className={`absolute pointer-events-none select-none overflow-hidden ${className}`}>
      {/* Absolute centerpiece backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] flex items-center justify-center">
        {/* Radial backdrop ambient glow */}
        <div className="absolute inset-0 rounded-full bg-radial-gradient(circle, rgba(109,93,252,0.06) 0%, rgba(0,0,0,0) 70%) blur-2xl" />

        <svg 
          viewBox="0 0 400 400" 
          className="w-full h-full opacity-35"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main Coordinate Grid Lines */}
          <line x1="200" y1="0" x2="200" y2="400" stroke="#6D5DFC" strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="3 3" />
          <line x1="0" y1="200" x2="400" y2="200" stroke="#6D5DFC" strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="3 3" />
          
          {/* Diagonal Tracking Lines */}
          <line x1="58" y1="58" x2="342" y2="342" stroke="#6D5DFC" strokeWidth="0.25" strokeOpacity="0.1" strokeDasharray="5 5" />
          <line x1="58" y1="342" x2="342" y2="58" stroke="#6D5DFC" strokeWidth="0.25" strokeOpacity="0.1" strokeDasharray="5 5" />

          {/* Rotating Outer Ring */}
          <motion.circle 
            cx="200" 
            cy="200" 
            r="160" 
            stroke="url(#bg-art-grad)" 
            strokeWidth="0.75" 
            strokeOpacity="0.2" 
            strokeDasharray="15 45 60 20" 
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 50 / speedMultiplier,
              ease: 'linear'
            }}
            style={{ transformOrigin: '200px 200px' }}
          />

          {/* Counter-rotating Middle Ring */}
          <motion.circle 
            cx="200" 
            cy="200" 
            r="120" 
            stroke="#8B5CF6" 
            strokeWidth="0.5" 
            strokeOpacity="0.15" 
            strokeDasharray="4 8 20 8" 
            animate={{ rotate: -360 }}
            transition={{
              repeat: Infinity,
              duration: 35 / speedMultiplier,
              ease: 'linear'
            }}
            style={{ transformOrigin: '200px 200px' }}
          />

          {/* Concentric Telemetry Circles */}
          <circle cx="200" cy="200" r="80" stroke="#6D5DFC" strokeWidth="0.25" strokeOpacity="0.1" />
          <circle cx="200" cy="200" r="40" stroke="#6D5DFC" strokeWidth="0.25" strokeOpacity="0.15" strokeDasharray="2 2" />

          {/* Angle Tick Indicators */}
          {Array.from({ length: 12 }).map((_, idx) => {
            const angle = (idx * 30 * Math.PI) / 180;
            const x1 = 200 + 152 * Math.cos(angle);
            const y1 = 200 + 152 * Math.sin(angle);
            const x2 = 200 + 160 * Math.cos(angle);
            const y2 = 200 + 160 * Math.sin(angle);
            return (
              <line 
                key={idx} 
                x1={x1} 
                y1={y1} 
                x2={x2} 
                y2={y2} 
                stroke="#6D5DFC" 
                strokeWidth="1" 
                strokeOpacity="0.25" 
              />
            );
          })}

          <defs>
            <linearGradient id="bg-art-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6D5DFC" />
              <stop offset="100%" stopColor="#D946EF" />
            </linearGradient>
          </defs>
        </svg>

        {/* Oversized watermark of actual logo inside concentric center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] opacity-25">
          <BrandIcon size={120} glow={false} />
        </div>
      </div>
    </div>
  );
}
