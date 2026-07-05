'use client';

import React from 'react';
import { BrandIcon } from '@/components/BrandArtwork';

interface SensualLogoProps {
  size?: 'sm' | 'md' | 'lg';
}

export default function SensualLogo({ size = 'md' }: SensualLogoProps) {
  const dimensions = {
    sm: { text: 'text-lg', iconSize: 28, label: false },
    md: { text: 'text-xl', iconSize: 36, label: true },
    lg: { text: 'text-2xl', iconSize: 44, label: true },
  }[size];

  return (
    <div className="flex items-center gap-2.5 group select-none">
      <div className="relative flex items-center justify-center">
        <BrandIcon size={dimensions.iconSize} glow={true} className="transition-transform duration-300 group-hover:scale-105" />
      </div>

      <div className="flex flex-col">
        <span className={`font-display font-bold tracking-wider ${dimensions.text} text-white flex items-center`}>
          MNQE
          <span className="text-[#6D5DFC] ml-0.5">.</span>
        </span>
        {dimensions.label && (
          <span className="text-[8px] font-mono tracking-[0.2em] font-medium text-gray-500 uppercase -mt-0.5 group-hover:text-gray-400 transition-colors duration-300">
            digital assets
          </span>
        )}
      </div>
    </div>
  );
}
