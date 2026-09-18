import Lenis from 'lenis';

let lenisInstance = null;

export function initSmoothScroll() {
  if (typeof window === 'undefined') return null;
  
  if (!lenisInstance) {
    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    let rafId = null;

    function raf(time) {
      if (!lenisInstance) return;
      lenisInstance.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);
    lenisInstance._rafId = rafId;
    lenisInstance._cancelRaf = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };
  }

  return lenisInstance;
}

export function getLenis() {
  return lenisInstance;
}

export function scrollToTop(immediate = true) {
  if (typeof window === 'undefined') return;
  
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate: Boolean(immediate) });
  }
  
  try {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  } catch (e) {
    window.scrollTo(0, 0);
  }
  
  if (document.documentElement) {
    document.documentElement.scrollTop = 0;
  }
  if (document.body) {
    document.body.scrollTop = 0;
  }
}

export function destroySmoothScroll() {
  if (lenisInstance) {
    if (typeof lenisInstance._cancelRaf === 'function') {
      lenisInstance._cancelRaf();
    }
    lenisInstance.destroy();
    lenisInstance = null;
  }
}
