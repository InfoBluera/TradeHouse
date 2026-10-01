import { useState, useEffect } from 'react';

/**
 * TradeHouse Centralized Large-Screen / TV Detection Configuration
 * 
 * Configurable Breakpoint Threshold:
 * - 1920px: Standard 1080p and 4K Smart TVs (Chrome on webOS, Android TV, Tizen)
 *   while cleanly preserving all mobile (360-430px), tablet (768-1024px),
 *   laptop (1280-1440px), and normal desktop screens (<=1600px).
 */
export const LARGE_SCREEN_BREAKPOINT = 1920;

/**
 * Synchronous check for large screen / TV display
 */
export const isLargeScreen = () => {
  if (typeof window === 'undefined') return false;
  
  // Viewport width or physical screen width threshold
  const vpWidth = window.innerWidth || 0;
  const screenWidth = (window.screen && window.screen.width) || 0;
  
  return (
    vpWidth >= LARGE_SCREEN_BREAKPOINT ||
    screenWidth >= LARGE_SCREEN_BREAKPOINT ||
    (window.matchMedia && window.matchMedia(`(min-width: ${LARGE_SCREEN_BREAKPOINT}px)`).matches)
  );
};

/**
 * Reusable React Hook for Large-Screen TV Mode
 * Prevents unnecessary re-renders and cleans up listeners.
 */
export const useLargeScreen = () => {
  const [isLarge, setIsLarge] = useState(() => isLargeScreen());

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let ticking = false;
    const update = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const current = isLargeScreen();
          setIsLarge((prev) => (prev !== current ? current : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check
    update();

    const mediaQuery = window.matchMedia ? window.matchMedia(`(min-width: ${LARGE_SCREEN_BREAKPOINT}px)`) : null;
    if (mediaQuery && mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', update);
    } else {
      window.addEventListener('resize', update, { passive: true });
    }

    return () => {
      if (mediaQuery && mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', update);
      } else {
        window.removeEventListener('resize', update);
      }
    };
  }, []);

  return isLarge;
};
