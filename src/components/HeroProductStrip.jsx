import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const tickerServices = [
  { en: "CUSTOM BADGES", mr: "कस्टम बॅजेस" },
  { en: "PACKAGING STICKERS", mr: "प्रॉडक्ट स्टिकर्स" },
  { en: "ACRYLIC KEYCHAINS", mr: "ॲक्रेलिक की-चेन" },
  { en: "PHOTO CERAMIC MUGS", mr: "फोटो सिरॅमिक मग" },
  { en: "CUSTOM T-SHIRTS", mr: "कस्टम टी-शर्ट्स" },
  { en: "PVC ID CARDS", mr: "पीव्हीसी आयडी कार्ड्स" },
  { en: "KRIPA CSC SERVICES", mr: "कृपा ऑनलाइन CSC" },
  { en: "DIGITAL PRINTING", mr: "डिजिटल प्रिंटिंग" },
  { en: "PHOTO FRAMES", mr: "फोटो फ्रेम्स" },
  { en: "CORPORATE LANYARDS", mr: "प्रिंटेड लेस" },
];

export default function HeroProductStrip() {
  const { lang } = useLanguage();

  // Duplicate the array for a seamless, continuous infinite marquee
  const items = [...tickerServices, ...tickerServices];

  return (
    <aside 
      className="w-full overflow-hidden bg-[#F4EFE5] border-y border-[#E2DDD2] py-4 sm:py-6 md:py-7 select-none cursor-default"
      aria-label="Services marquee ticker"
    >
      <div className="animate-marquee flex items-center whitespace-nowrap cursor-default">
        {items.map((service, idx) => {
          const title = lang === 'mr' ? service.mr : service.en;

          return (
            <span key={idx} className="inline-flex items-center shrink-0 cursor-default">
              <span className="text-xs sm:text-base md:text-[19px] font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[#596273] cursor-default">
                {title}
              </span>
              <span 
                className="mx-6 sm:mx-10 md:mx-16 h-4 sm:h-5 md:h-6 w-[1px] bg-[#E05A2B]/35 inline-block shrink-0 rounded-full select-none cursor-default" 
                aria-hidden="true"
              />
            </span>
          );
        })}
      </div>
    </aside>
  );
}
