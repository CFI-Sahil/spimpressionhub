import React from 'react';
import Icon from './Icon';
import { useLanguage } from '../context/LanguageContext';

export default function ServiceCard({ item }) {
  const { lang } = useLanguage();

  const title = lang === 'mr' ? item.titleMr : item.titleEn;
  const desc = lang === 'mr' ? item.descMr : item.descEn;
  const tag = lang === 'mr' ? item.tagMr : item.tagEn;
  const waUrl = `https://wa.me/918080577460?text=${encodeURIComponent(item.waMsg || `Hello, I need information about ${item.titleEn}`)}`;

  return (
    <div className="frosted-glass-card card-light-sweep p-4 sm:p-5 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="w-8 h-8 rounded-[4px] bg-[#FDF2EC] flex items-center justify-center text-[#C84B1F]">
            <Icon name={item.icon || 'star'} size={18} />
          </div>
          <span className="text-[10px] font-bold text-[#71717A] uppercase tracking-wider bg-white/70 px-2 py-0.5 rounded-[3px] border border-white/40">
            {tag}
          </span>
        </div>
        <h3 className={`text-sm font-bold text-[#1C1B1B] mb-1.5 ${lang === 'mr' ? 'font-devanagari' : 'font-serif'}`}>
          {title}
        </h3>
        <p className="text-xs text-[#525252] leading-relaxed mb-4">
          {desc}
        </p>
      </div>

      <div className="pt-3 mt-auto border-t border-[#1C1B1B]/10 flex items-center justify-between text-xs">
        <span className="text-[11px] text-[#71717A] font-medium">
          {lang === 'mr' ? 'कार्यशाळा सेवा' : 'Workshop Service'}
        </span>
        <a
          className="inline-flex items-center gap-1 font-semibold text-[#C84B1F] hover:underline"
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{lang === 'mr' ? 'चौकशी करा' : 'Enquire'}</span>
          <Icon name="arrow_forward" size={13} />
        </a>
      </div>
    </div>
  );
}
