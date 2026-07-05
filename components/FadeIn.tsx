'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useSafeReducedMotion } from '@/hooks/use-reduced-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  id?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  y = 20,
  className = '',
  id,
}: FadeInProps) {
  const prefersReduced = useSafeReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setMounted(true);
    });
  }, []);

  // If not mounted or user prefers reduced motion, render with zero transform shift
  const initialY = prefersReduced || !mounted ? 0 : y;

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: initialY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: [0.215, 0.61, 0.355, 1], // ease-out cubic
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
