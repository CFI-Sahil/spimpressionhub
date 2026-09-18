import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Icon from './Icon';

const trustFeatures = [
  {
    icon: "print",
    titleEn: "HIGH QUALITY",
    titleMr: "उत्कृष्ट दर्जा",
    descEn: "Vivid, rich prints",
    descMr: "गडद व टिकाऊ प्रिंट्स",
  },
  {
    icon: "palette",
    titleEn: "CUSTOM DESIGNS",
    titleMr: "मनपसंत डिझाइन",
    descEn: "Your photo & text",
    descMr: "तुमचा फोटो व मजकूर",
  },
  {
    icon: "bolt",
    titleEn: "FAST TURNAROUND",
    titleMr: "जलद सेवा",
    descEn: "Same day / 24hr",
    descMr: "त्याच दिवशी / २४ तास",
  },
  {
    icon: "sell",
    titleEn: "FRIENDLY RATES",
    titleMr: "वाजवी दर",
    descEn: "Direct workshop price",
    descMr: "थेट वर्कशॉपचे दर",
  },
  {
    icon: "inventory_2",
    titleEn: "BULK DISCOUNTS",
    titleMr: "घाऊक सूट",
    descEn: "For schools & clubs",
    descMr: "शाळा व मंडळांसाठी",
  },
  {
    icon: "account_balance",
    titleEn: "KRIPA CSC",
    titleMr: "कृपा ऑनलाइन CSC",
    descEn: "Verified Govt forms",
    descMr: "अधिकृत सरकारी सेवा",
  },
];

export default function TrustMarqueeStrip() {
  const { lang } = useLanguage();

  // Duplicate the array 3 times for a seamless continuous marquee moving right
  const items = [...trustFeatures, ...trustFeatures, ...trustFeatures];

  return (
    <aside 
      className="w-full overflow-hidden bg-[#F4EFE5] border-b border-[#E2DDD2] py-4 sm:py-6 md:py-7 select-none cursor-default"
      aria-label="Workshop trust and guarantees ticker"
    >
      <div className="animate-marquee-reverse flex items-center whitespace-nowrap cursor-default">
        {items.map((feature, idx) => {
          const title = lang === 'mr' ? feature.titleMr : feature.titleEn;
          const desc = lang === 'mr' ? feature.descMr : feature.descEn;

          return (
            <span key={idx} className="inline-flex items-center shrink-0">
              <span className="inline-flex items-center gap-1.5 sm:gap-2">
                <Icon name={feature.icon} size={16} className="text-[#E05A2B]/80 shrink-0" />
                <span className="text-xs sm:text-base md:text-[19px] font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[#596273]">
                  {title}
                </span>
                <span className="text-[10px] sm:text-xs md:text-[13px] font-normal text-[#8A847A] tracking-normal">
                  — {desc}
                </span>
              </span>
              <span 
                className="mx-6 sm:mx-10 md:mx-16 h-4 sm:h-5 md:h-6 w-[1px] bg-[#E05A2B]/35 inline-block shrink-0 rounded-full select-none" 
                aria-hidden="true"
              />
            </span>
          );
        })}
      </div>
    </aside>
  );
}
