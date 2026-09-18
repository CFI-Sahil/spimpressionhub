import React, { useState, useEffect } from 'react';

export default function Preloader({ onComplete }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // 3.8s total smooth & slow animation sequence
    const timer = setTimeout(() => {
      setDone(true);
      if (onComplete) onComplete();
    }, 3800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (done) return null;

  return (
    <aside
      aria-label="Loading SP Impression Hub"
      aria-live="polite"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F7F4EE] select-none preloader-overlay"
    >
      <div className="flex items-center justify-center px-2 sm:px-4 max-w-full">
        {/* Step 1: SP Logo Mark (fades in big at exact center & scales down to normal) */}
        <div className="relative z-20 shrink-0 flex items-center justify-center preloader-icon">
          <img
            src="/images/logo.webp"
            alt="SP Impression Hub"
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-contain shadow-xs bg-white p-0.5"
          />
        </div>

        {/* Step 2: SP Impression Hub Text (emerges from right with fade in as logo shifts left) */}
        <div className="relative z-10 overflow-hidden whitespace-nowrap preloader-text-mask">
          <div className="py-1 flex flex-col justify-center text-left preloader-text-inner">
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="font-extrabold text-lg sm:text-2xl text-[#0D192E] tracking-tight font-sans">
                SP IMPRESSION
              </span>
              <span className="bg-[#E05A2B] text-white text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 rounded-[4px] tracking-wide">
                HUB
              </span>
            </div>
            <span className="text-[8px] sm:text-[10px] font-semibold text-[#596273] tracking-[0.14em] sm:tracking-[0.16em] uppercase mt-0.5">
              PRINTING &amp; CITIZEN SERVICES • KOPARGAON
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
