'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`flex items-center space-x-2 text-xs font-sans font-medium text-gray-400 py-4 ${className}`}
    >
      <div className="flex items-center">
        <Link 
          href="/" 
          className="flex items-center gap-1.5 hover:text-white transition-colors duration-200"
          title="Home"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
      </div>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3 h-3 text-gray-600 flex-shrink-0" />
            {isLast || !item.href ? (
              <span className="text-gray-200 select-none truncate max-w-[180px] sm:max-w-xs font-semibold">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-white transition-colors duration-200 truncate max-w-[180px] sm:max-w-xs"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
