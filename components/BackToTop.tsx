'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 400px (past typical hero section)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      id="back-to-top-btn"
      aria-label="Back to top"
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0.8, 
        y: isVisible ? 0 : 10,
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      whileHover={{ scale: isVisible ? 1.1 : 0.8, y: isVisible ? -2 : 10 }}
      whileTap={{ scale: isVisible ? 0.95 : 0.8 }}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 p-3.5 rounded-full bg-[#121829] border border-white/10 hover:border-[#6D5DFC]/40 text-gray-300 hover:text-white shadow-xl shadow-black/40 hover:shadow-[#6D5DFC]/20 backdrop-blur-md cursor-pointer transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#6D5DFC]/50"
    >
      <ArrowUp className="w-5 h-5 text-[#6D5DFC]" />
    </motion.button>
  );
}
