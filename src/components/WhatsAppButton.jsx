import React, { useState } from 'react';
import Icon from './Icon';
import { useLanguage } from '../context/LanguageContext';

export default function WhatsAppButton({ 
  message = "Hello SP Impression Hub, I have an enquiry", 
  floating = true,
  className = ""
}) {
  const { t, lang } = useLanguage();
  const [showTooltip, setShowTooltip] = useState(false);

  const encodedMsg = encodeURIComponent(message);
  const waUrl = `https://wa.me/918080577460?text=${encodedMsg}`;

  if (!floating) {
    return (
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 bg-secondary-container text-white px-5 py-2.5 rounded-xl font-label-lg text-label-lg font-semibold hover:bg-secondary transition-all shadow-sm active:scale-95 ${className}`}
      >
        <Icon name="whatsapp" size={18} />
        <span>{t('whatsappUs')}</span>
      </a>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:block">
      {showTooltip && (
        <div className="absolute right-0 bottom-16 bg-surface-container-lowest text-primary p-3 rounded-xl border border-outline-variant/30 shadow-xl max-w-xs text-xs font-medium animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-center gap-2 font-bold text-secondary mb-1">
            <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
            <span>{lang === 'mr' ? 'ऑनलाइन मदत कक्ष' : 'Instant WhatsApp Help'}</span>
          </div>
          <p className="text-on-surface-variant">
            {lang === 'mr'
              ? 'फोटो, डिझाइन किंवा कागदपत्रांबद्दल त्वरित विचारा!'
              : 'Chat directly with our Kopargaon studio & CSC desk!'}
          </p>
        </div>
      )}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Chat on WhatsApp"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-secondary-container hover:bg-secondary text-white shadow-lg hover:shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-white text-secondary text-[9px] font-bold items-center justify-center">1</span>
        </span>
        <Icon name="whatsapp" size={26} />
      </a>
    </div>
  );
}
