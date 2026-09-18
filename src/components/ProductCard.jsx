import React from 'react';
import Icon from './Icon';
import { useLanguage } from '../context/LanguageContext';

export default function ProductCard({ product }) {
  const { lang } = useLanguage();

  const title = lang === 'mr' ? product.titleMr : product.titleEn;
  const desc = lang === 'mr' ? product.descMr : product.descEn;
  const specs = lang === 'mr' ? product.specsMr : product.specsEn;
  const waUrl = `https://wa.me/918080577460?text=${encodeURIComponent(product.waMsg || `I want to order ${product.titleEn}`)}`;

  return (
    <div className="frosted-glass-card overflow-hidden flex flex-col justify-between">
      <div>
        {/* Consistent 4:3 image ratio */}
        <div className="relative aspect-[4/3] overflow-hidden bg-transparent border-b border-white/40">
          <img
            src={product.image}
            alt={`${title} - SP Impression Hub Kopargaon`}
            width="400"
            height="300"
            decoding="async"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          {product.badgeLabel && (
            <span className="absolute top-2.5 left-2.5 bg-secondary-container text-white text-[10px] font-bold px-2 py-0.5 rounded-[4px] uppercase tracking-wider shadow-xs">
              {product.badgeLabel}
            </span>
          )}
        </div>

        {/* Product Details */}
        <div className="p-4 sm:p-5">
          <h3 className={`text-base font-bold text-primary mb-1.5 ${lang === 'mr' ? 'font-devanagari' : 'font-serif'}`}>
            {title}
          </h3>
          <p className="text-xs text-on-surface-variant mb-3 leading-relaxed">
            {desc}
          </p>

          {specs && specs.length > 0 && (
            <ul className="text-xs text-on-surface-variant space-y-1 mb-2">
              {specs.slice(0, 3).map((spec, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <Icon name="check" size={13} className="text-secondary-container shrink-0" />
                  <span className="truncate">{spec}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Card Action & Starting Price */}
      <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-3 border-t border-[#1C1B1B]/10 flex items-center justify-between mt-auto">
        <div>
          <span className="text-[10px] text-on-surface-variant block uppercase font-medium">
            {lang === 'mr' ? 'दर सुरु' : 'Price'}
          </span>
          <span className="text-xs font-bold text-primary">
            {product.startingPrice}
          </span>
        </div>
        <a
          className="bg-secondary-container hover:bg-secondary text-white transition-all px-3 py-1.5 rounded-[6px] text-xs font-semibold active:scale-95 flex items-center gap-1 shadow-xs"
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{lang === 'mr' ? 'ऑर्डर करा' : 'Order'}</span>
          <Icon name="arrow_forward" size={13} />
        </a>
      </div>
    </div>
  );
}
