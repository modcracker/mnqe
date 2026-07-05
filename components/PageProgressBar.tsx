'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';

export default function PageProgressBar() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Whenever pathname changes, trigger progress bar animation
    const triggerTimer = setTimeout(() => {
      setActive(true);
      setProgress(15);
    }, 0);

    const timer1 = setTimeout(() => {
      setProgress(40);
    }, 80);

    const timer2 = setTimeout(() => {
      setProgress(75);
    }, 180);

    const timer3 = setTimeout(() => {
      setProgress(100);
    }, 350);

    const timer4 = setTimeout(() => {
      setActive(false);
    }, 550);

    return () => {
      clearTimeout(triggerTimer);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [pathname]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 h-[3px] z-[9999] pointer-events-none bg-transparent transition-opacity duration-200 ${
        active ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-[#6D5DFC] via-[#8B5CF6] to-[#D946EF] shadow-[0_0_8px_rgba(109,93,252,0.6)]"
        initial={{ width: '0%' }}
        animate={{ width: `${progress}%` }}
        transition={{
          type: 'spring',
          stiffness: 90,
          damping: 18,
          mass: 0.4,
        }}
      />
    </div>
  );
}
