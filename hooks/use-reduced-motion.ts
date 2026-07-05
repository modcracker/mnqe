import { useEffect, useState } from 'react';

export function useSafeReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const listener = (event: MediaQueryListEvent) => {
      setPrefersReduced(event.matches);
    };

    // Modern browsers support addEventListener
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  return prefersReduced;
}
