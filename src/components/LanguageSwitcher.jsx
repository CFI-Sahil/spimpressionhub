import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher({ className = "" }) {
  const { lang, setLang } = useLanguage();
  const containerRef = useRef(null);
  const enRef = useRef(null);
  const mrRef = useRef(null);
  const [pillStyle, setPillStyle] = useState({ left: 0, top: 0, width: 0, height: 0, opacity: 0 });

  const updatePill = () => {
    const activeEl = lang === 'en' ? enRef.current : mrRef.current;
    const container = containerRef.current;
    if (activeEl && container) {
      setPillStyle({
        left: activeEl.offsetLeft,
        top: activeEl.offsetTop,
        width: activeEl.offsetWidth,
        height: activeEl.offsetHeight,
        opacity: 1,
      });
    }
  };

  useLayoutEffect(() => {
    updatePill();
  }, [lang]);

  useEffect(() => {
    updatePill();
    window.addEventListener('resize', updatePill);
    if (document.fonts) {
      document.fonts.ready.then(updatePill);
    }
    const timer = setTimeout(updatePill, 60);
    return () => {
      window.removeEventListener('resize', updatePill);
      clearTimeout(timer);
    };
  }, [lang]);

  return (
    <div 
      ref={containerRef}
      className={`relative bg-surface-variant/90 p-0.5 rounded-[8px] border border-outline-variant/60 select-none inline-flex items-center shadow-xs ${className}`}
    >
      {/* GPU-Accelerated Smooth Sliding White Pill Indicator */}
      <div
        className="absolute bg-white rounded-[6px] shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.08)] pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{
          transform: `translate3d(${pillStyle.left}px, ${pillStyle.top}px, 0)`,
          width: `${pillStyle.width}px`,
          height: `${pillStyle.height}px`,
          opacity: pillStyle.opacity,
          top: 0,
          left: 0,
        }}
      />

      <button
        ref={enRef}
        type="button"
        onClick={() => setLang('en')}
        className={`relative z-10 px-3.5 py-1.5 rounded-[6px] text-xs font-bold transition-colors duration-200 flex items-center justify-center cursor-pointer select-none ${
          lang === 'en'
            ? 'text-primary'
            : 'text-on-surface-variant hover:text-primary'
        }`}
        aria-label="Switch to English"
      >
        <span>EN</span>
      </button>

      <button
        ref={mrRef}
        type="button"
        onClick={() => setLang('mr')}
        className={`relative z-10 px-3.5 py-1.5 rounded-[6px] text-xs font-devanagari transition-colors duration-200 flex items-center justify-center cursor-pointer select-none ${
          lang === 'mr'
            ? 'text-primary font-bold'
            : 'text-on-surface-variant font-medium hover:text-primary'
        }`}
        aria-label="मराठी मध्ये बदला"
      >
        <span className="leading-none relative top-[2px]">मराठी</span>
      </button>
    </div>
  );
}
