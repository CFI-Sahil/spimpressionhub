import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToTop } from '../animations/lenis';

/**
 * PageTransition
 *
 * Wraps page content with a smooth, premium cross-route animation.
 *
 * Sequence on every route change:
 *  1. Flash a warm-cream curtain sliding in from the bottom-left (200ms)
 *  2. Route change is actually applied mid-transition (hidden by curtain)
 *  3. Curtain slides out to the top-right (280ms)
 *
 * Simultaneously the new page content fades up from 8px below.
 */
export default function PageTransition({ children }) {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionState, setTransitionState] = useState('idle'); // idle | covering | revealing
  const pendingChildren = useRef(null);
  const isFirstMount = useRef(true);

  useEffect(() => {
    // Skip animation on very first page load (preloader handles that)
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    // Store incoming page content
    pendingChildren.current = children;

    // Step 1: Slide curtain over the old page
    setTransitionState('covering');

    const swapTimer = setTimeout(() => {
      // Step 2: Swap to new page content while hidden behind curtain
      setDisplayChildren(pendingChildren.current);
      setTransitionState('revealing');
      if (!window.location.hash) {
        scrollToTop(true);
        // Double check in next animation frame to ensure DOM layout has rendered at top
        requestAnimationFrame(() => {
          scrollToTop(true);
        });
      }
    }, 430);

    const doneTimer = setTimeout(() => {
      // Step 3: Curtain fully gone, back to idle
      setTransitionState('idle');
    }, 980);

    return () => {
      clearTimeout(swapTimer);
      clearTimeout(doneTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <div className="relative">
      {/* Animated warm-cream curtain overlay */}
      <div
        aria-hidden="true"
        className={`page-curtain ${transitionState}`}
      />

      {/* Page content with subtle fade-up on reveal */}
      <div className={`page-content ${transitionState}`}>
        {displayChildren}
      </div>
    </div>
  );
}
