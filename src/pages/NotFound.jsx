import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useDocumentSEO } from '../hooks/useDocumentSEO';
import Icon from '../components/Icon';

export default function NotFound() {
  const { lang } = useLanguage();

  useDocumentSEO({
    title: "404 - Page Not Found | SP Impression Hub Kopargaon",
    description: "The page you are looking for does not exist or has been moved. Return to SP Impression Hub Kopargaon homepage.",
    noIndex: true
  });

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 sm:py-24 px-4 bg-[#FAF8F5] relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-[radial-gradient(#D6CEBF_1.25px,transparent_1.25px)] [background-size:24px_24px] opacity-75 pointer-events-none" />
      <div className="pointer-events-none absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-[#E05A2B]/10 rounded-full blur-[70px]" />
      
      <div className="max-w-lg w-full frosted-glass-card p-6 sm:p-10 relative z-10 space-y-4 sm:space-y-6">
        <div className="w-16 h-16 mx-auto rounded-full bg-[#FDF2EC] text-[#C84B1F] flex items-center justify-center">
          <Icon name="search_off" size={32} />
        </div>

        <div>
          <span className="text-4xl sm:text-5xl font-serif font-bold text-[#E05A2B] block tracking-tight">
            404
          </span>
          <h1 className={`text-xl sm:text-2xl font-bold text-[#1C1B1B] mt-2 ${lang === 'mr' ? 'font-devanagari' : 'font-serif'}`}>
            {lang === 'mr' ? 'हे पृष्ठ सापडले नाही' : 'Page Not Found'}
          </h1>
          <p className="text-xs sm:text-sm text-[#525252] mt-2 leading-relaxed">
            {lang === 'mr'
              ? 'तुम्ही शोधत असलेले पृष्ठ उपलब्ध नाही किंवा बदलण्यात आले आहे. कृपया खालील दुव्यांवरून नेव्हिगेट करा.'
              : 'The page you are looking for may have been moved or is no longer available. Please use the navigation links below to find what you need.'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto bg-[#E05A2B] hover:bg-[#C84B1F] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-[6px] transition-all flex items-center justify-center gap-2 shadow-xs active:scale-95"
          >
            <Icon name="home" size={16} />
            <span>{lang === 'mr' ? 'मुख्यपृष्ठावर जा' : 'Back to Home'}</span>
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto border border-[#1C1B1B] bg-white hover:bg-[#FAF8F5] text-[#1C1B1B] text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-[6px] transition-all flex items-center justify-center gap-1.5 active:scale-95"
          >
            <span>{lang === 'mr' ? 'सर्व्हिसेस पहा' : 'View Services'}</span>
          </Link>
        </div>

        <div className="pt-4 border-t border-[#F0EBE1] text-xs text-[#71717A]">
          <span>{lang === 'mr' ? 'मदतीसाठी थेट संपर्क:' : 'Need immediate help?'} </span>
          <a
            href="https://wa.me/918080577460"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#E05A2B] hover:underline"
          >
            WhatsApp (+91 80805 77460)
          </a>
        </div>
      </div>
    </div>
  );
}
