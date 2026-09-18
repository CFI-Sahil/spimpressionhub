import React from 'react';
import Icon from './Icon';
import { useLanguage } from '../context/LanguageContext';

export default function GalleryCard({ item, onSelect }) {
  const { lang } = useLanguage();

  const title = lang === 'mr' ? item.titleMr : item.titleEn;
  const desc = lang === 'mr' ? item.descMr : item.descEn;
  const tag = lang === 'mr' ? item.tagMr : item.tagEn;
  const waUrl = `https://wa.me/918080577460?text=${encodeURIComponent(`Hi SP Impression Hub, I saw your work "${item.titleEn}" in the gallery and would like similar items.`)}`;

  return (
    <div 
      className={`${item.colSpan || 'md:col-span-4'} frosted-glass-card overflow-hidden flex flex-col justify-between group`}
    >
      <div 
        className="relative overflow-hidden aspect-[4/3] bg-transparent cursor-pointer border-b border-white/40"
        onClick={() => onSelect?.(item)}
      >
        <img
          src={item.image}
          alt={title}
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-40 group-hover:opacity-60 transition-opacity"></div>
        
        {/* Real Production Tag */}
        <div className="absolute top-2.5 left-2.5">
          <span className="bg-surface-container-lowest/95 text-primary text-[10px] font-bold px-2 py-0.5 rounded-[4px] uppercase tracking-wider border border-outline-variant/30 shadow-xs">
            {tag}
          </span>
        </div>

        {/* Hover zoom indicator */}
        <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white p-1 rounded-[4px]">
          <Icon name="zoom_in" size={16} />
        </div>
      </div>

      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h3 
            onClick={() => onSelect?.(item)}
            className={`text-sm font-bold text-primary tracking-tight cursor-pointer hover:text-secondary transition-colors ${lang === 'mr' ? 'font-devanagari' : 'font-serif'}`}
          >
            {title}
          </h3>
          <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">
            {desc}
          </p>
        </div>

        <div className="pt-3 mt-3 border-t border-[#1C1B1B]/10 flex items-center justify-between text-xs">
          <button
            type="button"
            onClick={() => onSelect?.(item)}
            className="font-semibold text-primary hover:text-secondary transition-colors flex items-center gap-1 cursor-pointer"
          >
            <Icon name="visibility" size={15} />
            <span>{lang === 'mr' ? 'फोटो पहा' : 'View Full'}</span>
          </button>
          
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-secondary-container hover:underline flex items-center gap-1"
          >
            <span>{lang === 'mr' ? 'ऑर्डर चौकशी' : 'Order Similar'}</span>
            <Icon name="arrow_forward" size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}
