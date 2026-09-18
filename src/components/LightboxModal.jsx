import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Icon from './Icon';
import { useLanguage } from '../context/LanguageContext';

export default function LightboxModal({
  item,
  items = [],
  onClose,
  onNext,
  onPrev
}) {
  const { lang } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [closing, setClosing] = useState(false);
  const [imageKey, setImageKey] = useState(item?.id || 0);

  // Trigger enter animation on mount
  useEffect(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setMounted(true);
      });
    });
  }, []);

  // Update image key for smooth transition when switching items
  useEffect(() => {
    if (item?.id) {
      setImageKey(item.id);
    }
  }, [item?.id]);

  const handleSmoothClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose?.();
    }, 260);
  };

  // Keep a ref to the latest handlers so the keyboard effect never captures stale closures
  const handlersRef = useRef({ handleSmoothClose, onNext, onPrev });
  useEffect(() => {
    handlersRef.current = { handleSmoothClose, onNext, onPrev };
  });

  useEffect(() => {
    // Lock body scroll while lightbox is open
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    // Keyboard listener for ESC, Left, Right
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handlersRef.current.handleSmoothClose();
      } else if (e.key === 'ArrowRight') {
        handlersRef.current.onNext?.();
      } else if (e.key === 'ArrowLeft') {
        handlersRef.current.onPrev?.();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!item) return null;

  const title = lang === 'mr' ? item.titleMr : item.titleEn;
  const desc = lang === 'mr' ? item.descMr : item.descEn;
  const tag = lang === 'mr' ? item.tagMr : item.tagEn;
  const waUrl = `https://wa.me/918080577460?text=${encodeURIComponent(`Hi SP Impression Hub, I want to order "${item.titleEn}" as seen in your gallery.`)}`;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const totalItems = items.length;

  const isVisible = mounted && !closing;

  const modalContent = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Preview"
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-2.5 sm:p-4 md:p-5 overflow-y-auto transition-all duration-300 ease-out ${
        isVisible ? 'bg-black/85 backdrop-blur-md opacity-100' : 'bg-black/0 backdrop-blur-none opacity-0'
      }`}
      onClick={handleSmoothClose}
    >
      <div
        className={`relative bg-surface-container-lowest max-w-2xl w-full rounded-[10px] sm:rounded-[12px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] border border-outline-variant/50 flex flex-col my-auto max-h-[92vh] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? 'transform scale-100 opacity-100 translate-y-0' : 'transform scale-95 opacity-0 translate-y-4'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-3.5 sm:px-4 py-2 sm:py-2.5 border-b border-outline-variant/30 bg-surface-container-low text-xs select-none">
          <div className="flex items-center space-x-2">
            <span className="bg-secondary-container text-white text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-[3px] uppercase tracking-wider shadow-2xs">
              {tag}
            </span>
            {totalItems > 1 && (
              <span className="text-on-surface-variant text-[10px] sm:text-[11px] font-medium">
                {lang === 'mr' ? `${currentIndex + 1} पैकी ${totalItems}` : `${currentIndex + 1} of ${totalItems}`}
              </span>
            )}
          </div>
          <div className="flex items-center space-x-1">
            {totalItems > 1 && (
              <>
                <button
                  type="button"
                  onClick={onPrev}
                  className="p-1.5 rounded-[6px] hover:bg-surface-variant text-primary cursor-pointer transition-colors active:scale-90"
                  aria-label="Previous item"
                >
                  <Icon name="chevron_left" size={18} />
                </button>
                <button
                  type="button"
                  onClick={onNext}
                  className="p-1.5 rounded-[6px] hover:bg-surface-variant text-primary cursor-pointer transition-colors active:scale-90"
                  aria-label="Next item"
                >
                  <Icon name="chevron_right" size={18} />
                </button>
              </>
            )}
            <button
              type="button"
              onClick={handleSmoothClose}
              className="p-1.5 rounded-[6px] hover:bg-surface-variant text-primary ml-1.5 sm:ml-2 cursor-pointer transition-colors active:scale-90"
              aria-label="Close preview"
            >
              <Icon name="close" size={18} />
            </button>
          </div>
        </div>

        {/* Image Display Frame */}
        <div className="relative bg-black max-h-[48vh] sm:max-h-[58vh] flex items-center justify-center overflow-hidden select-none">
          <img
            key={imageKey}
            src={item.image}
            alt={title}
            className="max-h-[48vh] sm:max-h-[58vh] w-auto object-contain transition-all duration-300 animate-[fadeIn_0.25s_ease-out]"
          />

          {/* Lateral Nav Arrows on image */}
          {totalItems > 1 && (
            <>
              <button
                type="button"
                onClick={onPrev}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white p-2 rounded-full transition-all active:scale-90 cursor-pointer shadow-lg"
                aria-label="Previous image"
              >
                <Icon name="chevron_left" size={20} />
              </button>
              <button
                type="button"
                onClick={onNext}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white p-2 rounded-full transition-all active:scale-90 cursor-pointer shadow-lg"
                aria-label="Next image"
              >
                <Icon name="chevron_right" size={20} />
              </button>
            </>
          )}
        </div>

        {/* Modal Info & Direct CTA */}
        <div className="p-3.5 sm:p-5 space-y-2.5 sm:space-y-3 text-left">
          <div>
            <h3 className={`text-base sm:text-lg font-bold text-primary ${lang === 'mr' ? 'font-devanagari' : 'font-serif'}`}>
              {title}
            </h3>
            <p className="text-[11px] sm:text-xs text-on-surface-variant mt-1 leading-relaxed">
              {desc}
            </p>
          </div>

          <div className="pt-2.5 sm:pt-3 border-t border-outline-variant/20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 text-xs">
            <span className="text-on-surface-variant font-medium text-[11px] sm:text-xs">
              {lang === 'mr' ? 'कोपरगाव निर्मित • एक किंवा घाऊक ऑर्डर्स' : 'Made in Kopargaon • Single & Bulk Orders'}
            </span>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary-container hover:bg-secondary text-white font-semibold px-4 py-2 rounded-[6px] flex items-center justify-center gap-1.5 shadow-xs transition-all active:scale-95 text-xs"
            >
              <Icon name="chat" size={15} />
              <span>{lang === 'mr' ? 'ऑर्डर चौकशी करा' : 'Enquire on WhatsApp'}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return typeof document !== 'undefined'
    ? createPortal(modalContent, document.body)
    : modalContent;
}
