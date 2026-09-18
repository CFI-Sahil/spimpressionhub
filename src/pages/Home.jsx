import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useDocumentSEO } from '../hooks/useDocumentSEO';
import HeroProductStrip from '../components/HeroProductStrip';
import TrustMarqueeStrip from '../components/TrustMarqueeStrip';
import Icon from '../components/Icon';
import { giftProducts } from '../data/services';

// Avatar silhouette icon for the print proof badge tray
function BadgeAvatar() {
  return (
    <svg viewBox="0 0 40 46" fill="currentColor" className="w-full h-auto max-w-[34px] opacity-80" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="12" r="9" />
      <path d="M4 42C4 32.5 11.2 26 20 26C28.8 26 36 32.5 36 42H4Z" />
    </svg>
  );
}

export default function Home() {
  const { t, lang } = useLanguage();

  useDocumentSEO({
    title: lang === 'mr'
      ? "कस्टम प्रिंटिंग व फोटो गिफ्ट्स कोपरगाव | SP Impression Hub"
      : "Custom Printing & Photo Gifts in Kopargaon | SP Impression Hub",
    description: lang === 'mr'
      ? "कोपरगावमधील SP Impression Hub: कस्टम प्रिंटिंग, फोटो गिफ्ट्स, मग, कीचेन्स, टी-शर्ट्स आणि CSC सेवा."
      : "Custom printing, photo gifts, mugs, acrylic keychains, DTF T-shirts and CSC services in Kopargaon from SP Impression Hub.",
    canonical: "https://spimpressionhub.com/",
    ogImage: "https://spimpressionhub.com/images/badges.webp",
  });

  return (
    <div className="space-y-0 bg-[#FAF8F5] overflow-x-hidden">
      {/* 1. HERO SECTION - EXACT REPLICA OF THE SPECIFIED PROMOTIONAL BANNER */}
      <section className="relative overflow-hidden bg-[#FAF8F5] text-[#1C1B1B] pt-6 sm:pt-8 pb-10 sm:pb-12 lg:pt-12 lg:pb-16">
        {/* Subtle Background Pattern & Ambient Tones for Frosted Glass Depth */}
        <div className="absolute inset-0 bg-[radial-gradient(#D6CEBF_1.25px,transparent_1.25px)] [background-size:24px_24px] opacity-75 pointer-events-none" />
        <div className="pointer-events-none absolute top-1/4 right-10 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-[#E05A2B]/12 rounded-full blur-[70px]" />
        <div className="pointer-events-none absolute bottom-10 right-1/3 w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] bg-[#0284C7]/10 rounded-full blur-[75px]" />

        <div className="max-w-7xl mx-auto px-3.5 sm:px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Typography, CTAs, and Trust Line */}
            <div className="lg:col-span-6 space-y-3.5 sm:space-y-4 text-left">
              {/* Top status indicator pill badge */}
              <div className="inline-flex flex-wrap items-center gap-2 sm:gap-2.5 px-3 py-1 rounded-full bg-white/75 backdrop-blur-md border border-[#1C1B1B]/10 shadow-2xs text-[11px] sm:text-xs text-[#525252] select-none max-w-full">
                <span className="flex items-center gap-1.5 text-[#1C1B1B] font-semibold">
                  <Icon name="location_on" size={13} className="text-[#E05A2B]" />
                  <span>{lang === 'mr' ? 'संजयनगर चौक वर्कशॉप' : 'Sanjay Nagar Chowk workshop'}</span>
                </span>
                <span className="text-[#D4D4D8] font-bold hidden xs:inline">•</span>
                <span className="flex items-center gap-1 text-[#71717A] font-medium">
                  <Icon name="clock" size={12} className="text-[#E05A2B]" />
                  <span>{lang === 'mr' ? '२४–४८ तासांत डिलिव्हरी' : '24–48 hour dispatch'}</span>
                </span>
              </div>

              {/* Bold Devanagari Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold font-devanagari text-[#1C1B1B] leading-[1.15] sm:leading-[1.12] tracking-tight">
                तुमच्या कल्पना,<br />
                आमची छपाई.
              </h1>

              {/* Sub-headline in warm rust italic serif */}
              <p className="text-lg sm:text-xl md:text-2xl font-serif italic text-[#C84B1F] font-medium">
                Your ideas. Our printing.
              </p>

              {/* Thin Orange Brand Divider Bar */}
              <div className="w-12 sm:w-14 h-[2.5px] bg-[#E05A2B] rounded-full"></div>

              {/* Supporting Copy */}
              <p className={`text-[#4B5563] text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-lg ${lang === 'mr' ? 'font-devanagari' : ''}`}>
                {lang === 'mr'
                  ? <>पर्सनलाइज्ड फोटो मग, पिन व मॅग्नेट बॅजेस, सानुकूल टी-शर्ट आणि की-चेन, आमच्या कोपरगाव वर्कशॉपमध्ये प्रिंट — तसेच <strong className="text-[#1C1B1B] font-semibold">अधिकृत CSC कृपा ऑनलाइन</strong> नागरी सेवा: पॅन, रेशन, आयुष्मान भारत आणि बरेच काही.</>
                  : <>Personalised photo mugs, pin and magnet badges, custom t-shirts and keychains, printed at our own Kopargaon workshop — alongside <strong className="text-[#1C1B1B] font-semibold">verified CSC Kripa Online</strong> citizen services: PAN, ration, Ayushman Bharat and more, done right the first time.</>
                }
              </p>

              {/* Structured Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2">
                <a
                  className="bg-[#E05A2B] hover:bg-[#C84B1F] text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-[6px] text-xs sm:text-sm shadow-xs transition-all active:scale-95 flex items-center justify-center gap-2"
                  href="https://wa.me/918080577460?text=Hello%20SP%20Impression%20Hub%2C%20I%20have%20an%20enquiry"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon name="whatsapp" size={18} />
                  <span>{lang === 'mr' ? 'व्हॉट्सॲपवर मेसेज करा' : 'Message us on WhatsApp'}</span>
                </a>
                
                <Link
                  to="/services"
                  className="bg-white hover:bg-[#F5F2EC] text-[#1C1B1B] font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-[6px] text-xs sm:text-sm border border-[#1C1B1B] transition-all active:scale-95 flex items-center justify-center gap-1.5"
                >
                  <span>{lang === 'mr' ? 'सर्व सेवा पहा' : 'See all services'}</span>
                </Link>
              </div>

              {/* Bottom Trust Line with Horizontal Rule */}
              <div className="border-t border-[#E7E2D8] pt-3.5 sm:pt-4 mt-4 sm:mt-6 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-2.5 sm:gap-5 text-[11px] sm:text-xs text-[#525252] font-medium">
                <span className="flex items-center gap-1.5">
                  <Icon name="verified_user" size={16} className="text-[#E05A2B]" />
                  <span>{lang === 'mr' ? 'अधिकृत CSC केंद्र' : 'Authorised CSC centre'}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Icon name="check_circle" size={16} className="text-[#E05A2B]" />
                  <span>{lang === 'mr' ? 'कोपरगावात त्याच दिवशी पिकअप' : 'Same-day Kopargaon pickup'}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Icon name="inventory_2" size={16} className="text-[#E05A2B]" />
                  <span>{lang === 'mr' ? 'एक नग ते घाऊक ऑर्डर' : 'Single pieces to bulk orders'}</span>
                </span>
              </div>
            </div>

            {/* Right Column: Print Proof / Job Sheet with Crop Marks */}
            <div className="lg:col-span-6 w-full">
              <div className="crop-container p-2 sm:p-4 max-w-full">
                {/* 4 Corner Crop Marks */}
                <div className="crop-tl"></div>
                <div className="crop-tr"></div>
                <div className="crop-bl"></div>
                <div className="crop-br"></div>

                <div className="space-y-3">
                  {/* Main Job Sheet Card */}
                  <div className="frosted-glass-card frosted-glass-card-static p-4 sm:p-6 text-left select-none">
                    {/* Top Job Proof Header */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-serif italic font-semibold text-xs sm:text-base text-[#1C1B1B]">
                        Job #0417 — badge proof
                      </span>
                      <span className="bg-[#EEF7EE] text-[#1E7E34] border border-[#C3E6CB] text-[10px] sm:text-[11px] font-semibold px-2 sm:px-2.5 py-0.5 rounded-full shrink-0">
                        Approved for print
                      </span>
                    </div>

                    {/* Dashed line */}
                    <div className="border-b border-dashed border-[#E7E2D8] my-3 sm:my-3.5"></div>

                    {/* Product Title & Specifications */}
                    <div className="mb-3 sm:mb-4">
                      <h3 className="text-xs sm:text-base font-bold text-[#1C1B1B]">
                        44mm and 58mm custom badges
                      </h3>
                      <p className="text-[11px] sm:text-xs text-[#71717A] mt-0.5">
                        Pin back or fridge magnet · same tray, mixed finish
                      </p>
                    </div>

                    {/* 6 Pastel Badge Proof Cards in a Row */}
                    <div className="grid grid-cols-6 gap-1 sm:gap-2.5 my-3 sm:my-4">
                      {/* 1: Peach */}
                      <div className="bg-[#FDECE2] text-[#E07A5F] rounded-[4px] sm:rounded-[6px] aspect-[3/4] flex items-end justify-center pb-1 sm:pb-2 pt-2 sm:pt-4 px-0.5 sm:px-1 border border-[#FAD8C5]">
                        <BadgeAvatar />
                      </div>

                      {/* 2: Sky Blue */}
                      <div className="bg-[#E1F1FD] text-[#38BDF8] rounded-[4px] sm:rounded-[6px] aspect-[3/4] flex items-end justify-center pb-1 sm:pb-2 pt-2 sm:pt-4 px-0.5 sm:px-1 border border-[#CCE7FC]">
                        <BadgeAvatar />
                      </div>

                      {/* 3: Rose Pink */}
                      <div className="bg-[#FCE7F3] text-[#F472B6] rounded-[4px] sm:rounded-[6px] aspect-[3/4] flex items-end justify-center pb-1 sm:pb-2 pt-2 sm:pt-4 px-0.5 sm:px-1 border border-[#FBCFE8]">
                        <BadgeAvatar />
                      </div>

                      {/* 4: Mint Green */}
                      <div className="bg-[#E6F4EA] text-[#4ADE80] rounded-[4px] sm:rounded-[6px] aspect-[3/4] flex items-end justify-center pb-1 sm:pb-2 pt-2 sm:pt-4 px-0.5 sm:px-1 border border-[#CEEAD6]">
                        <BadgeAvatar />
                      </div>

                      {/* 5: Warm Gold */}
                      <div className="bg-[#FEF3C7] text-[#FBBF24] rounded-[4px] sm:rounded-[6px] aspect-[3/4] flex items-end justify-center pb-1 sm:pb-2 pt-2 sm:pt-4 px-0.5 sm:px-1 border border-[#FDE68A]">
                        <BadgeAvatar />
                      </div>

                      {/* 6: Lavender */}
                      <div className="bg-[#EDE9FE] text-[#A78BFA] rounded-[4px] sm:rounded-[6px] aspect-[3/4] flex items-end justify-center pb-1 sm:pb-2 pt-2 sm:pt-4 px-0.5 sm:px-1 border border-[#DDD6FE]">
                        <BadgeAvatar />
                      </div>
                    </div>

                    {/* Proof Card Footer */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 pt-2">
                      <div>
                        <div className="text-[11px] sm:text-xs text-[#71717A] font-medium">Bulk pricing from</div>
                        <div className="flex items-center space-x-1 sm:space-x-1.5 mt-1">
                          <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#00AEEF]"></span>
                          <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#EC008C]"></span>
                          <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#FFF200]"></span>
                          <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#231F20]"></span>
                          <span className="text-[10px] sm:text-[11px] text-[#71717A] font-mono ml-1">colour proof — CMYK</span>
                        </div>
                      </div>

                      <div className="text-lg sm:text-2xl font-bold font-serif text-[#C84B1F]">
                        ₹15 per badge
                      </div>
                    </div>
                  </div>

                  {/* Two Horizontal Sub-cards Side-by-side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-left">
                    {/* Sub-card 1: Keychains */}
                    <div className="frosted-glass-card frosted-glass-card-static p-3 flex items-center gap-3 select-none">
                      <div className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-[6px] bg-[#EBF5FB] text-[#0284C7] flex items-center justify-center shrink-0">
                        <Icon name="badge" size={18} />
                      </div>
                      <div>
                        <div className="font-bold text-xs text-[#1C1B1B]">Acrylic keychains</div>
                        <div className="text-[10px] sm:text-[11px] text-[#71717A]">Double-sided photo print</div>
                      </div>
                    </div>

                    {/* Sub-card 2: Custom T-Shirts */}
                    <div className="frosted-glass-card frosted-glass-card-static p-3 flex items-center gap-3 select-none">
                      <div className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-[6px] bg-[#FDF2F4] text-[#E11D48] flex items-center justify-center shrink-0">
                        <Icon name="checkroom" size={18} />
                      </div>
                      <div>
                        <div className="font-bold text-xs text-[#1C1B1B]">Custom t-shirts</div>
                        <div className="text-[10px] sm:text-[11px] text-[#71717A]">Single piece or bulk DTF</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CONTINUOUS MOVING PRODUCT STRIP */}
      <HeroProductStrip />

      {/* 3. PRACTICAL TRUST MARQUEE (MOVING RIGHT) */}
      <TrustMarqueeStrip />

      {/* 3. BRAND PROMISE SPLIT CARD */}
      <section className="py-6 sm:py-8 md:py-12 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-4 md:px-6">
          <div className="frosted-glass-card frosted-glass-card-static overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            {/* Left side: Warm peach/cream */}
            <div className="lg:col-span-5 bg-[#FDF6F0]/80 p-5 sm:p-6 md:p-8 flex flex-col justify-between text-left">
              <div>
                <span className="text-[#C84B1F] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider font-label-caps block mb-2">
                  {lang === 'mr' ? 'आमचा कोपरगाव शब्द' : 'Our Kopargaon promise'}
                </span>
                <h2 className="text-xl sm:text-2xl md:text-[26px] font-bold font-devanagari text-[#1C1B1B] leading-snug">
                  "तुमच्या कल्पनेपासून, तुमच्या हातातल्या खास आठवणींपर्यंत !"
                </h2>
                <p className="text-xs sm:text-sm font-serif italic text-[#78716C] mt-2">
                  "Turning your simple ideas into personal gifts you'll treasure forever."
                </p>
              </div>
            </div>

            {/* Right side: White editorial copy & metadata */}
            <div className="lg:col-span-7 p-5 sm:p-6 md:p-8 flex flex-col justify-between text-left border-t lg:border-t-0 lg:border-l border-[#E2DDD2]">
              <p className={`text-xs sm:text-sm md:text-[15px] text-[#525252] leading-relaxed ${lang === 'mr' ? 'font-devanagari' : ''}`}>
                {lang === 'mr'
                  ? 'आपल्या प्रिय व्यक्तीसाठी वाढदिवसाचा फोटो मग असो, कॉलेजच्या कार्यक्रमासाठी बॅजेस असोत किंवा कृपा ऑनलाइन सर्व्हिसेसवर शासकीय दाखले व कागदपत्रे विनाअडथळा काढणे असो — आम्ही कोपरगावकरांच्या सेवेसाठी सदैव तत्पर आहोत.'
                  : "Whether it's a happy birthday photo mug for someone you love, custom event badges for your college gathering, or official government documents and certificates handled hassle-free at Kripa Online Services, we are proud to be your friendly neighbourhood printing and civic centre in Kopargaon."
                }
              </p>
              <div className="pt-4 sm:pt-6 mt-3 sm:mt-4 border-t border-[#F0EBE1] flex flex-wrap items-center gap-3 sm:gap-6 text-[11px] sm:text-xs text-[#71717A] font-medium">
                <span>{lang === 'mr' ? 'संजयनगर चौक, कोपरगाव' : 'Sanjay Nagar Chowk, Kopargaon'}</span>
                <span>•</span>
                <span>{lang === 'mr' ? 'सकाळी ९:०० – रात्री ८:३० (सोम–शनि)' : '9:00 AM – 8:30 PM (Mon–Sat)'}</span>
                <span>•</span>
                <a href="tel:+918080577460" className="hover:text-[#1C1B1B] transition-colors font-semibold">
                  +91 80805 77460
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DUAL CORE DIVISIONS */}
      <section className="py-8 sm:py-10 md:py-14 bg-[#FAF8F5] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#D6CEBF_1.25px,transparent_1.25px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
        <div className="pointer-events-none absolute top-1/2 left-10 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-[#E05A2B]/10 rounded-full blur-[70px]" />
        <div className="max-w-7xl mx-auto px-3.5 sm:px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 text-left">
            <div>
              <span className="text-[11px] sm:text-xs font-bold font-label-caps text-[#C84B1F] uppercase tracking-wider block mb-1">
                {lang === 'mr' ? 'दोन मुख्य विभाग' : 'Dual core divisions'}
              </span>
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1B1B] ${lang === 'mr' ? 'font-devanagari' : 'font-serif'}`}>
                {lang === 'mr' ? 'विशेष प्रिंटिंग स्टुडिओ आणि शासकीय सेवा केंद्र' : 'Specialized print studio & civic portal'}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#525252] max-w-md leading-relaxed">
              {lang === 'mr'
                ? 'एकाच छताखाली दोन समर्पित विभाग: दर्जेदार प्रिंटिंग आणि सानुकूल भेटवस्तू, सोबत अधिकृत शासकीय कागदपत्रे व ऑनलाइन फॉर्म सेवा.'
                : 'Two dedicated units under one roof: artisanal print fabrication alongside trusted digital notary and documentation assistance.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 text-left">
            {/* Card 1: Studio 1 · Custom printing & gifts */}
            <div className="frosted-glass-card p-5 sm:p-6 md:p-8 flex flex-col justify-between">
              <div>
                <span className="bg-[#FDF2EC] text-[#C84B1F] px-2.5 sm:px-3 py-1 rounded-[4px] text-[11px] sm:text-xs font-bold inline-block">
                  {lang === 'mr' ? 'स्टुडिओ १ · सानुकूल प्रिंटिंग आणि गिफ्ट्स' : 'Studio 1 · Custom printing & gifts'}
                </span>
                <h3 className={`text-lg sm:text-xl md:text-2xl font-bold text-[#1C1B1B] mt-3 sm:mt-4 mb-2 ${lang === 'mr' ? 'font-devanagari' : 'font-serif'}`}>
                  {lang === 'mr' ? 'सानुकूल भेटवस्तू आणि क्रिएटिव्ह प्रिंटिंग' : 'Personalized gifts & creative printing'}
                </h3>
                <p className="text-xs sm:text-sm text-[#525252] leading-relaxed mb-4 sm:mb-6">
                  {lang === 'mr'
                    ? 'कोणताही फोटो, लोगो किंवा डिझाईन थेट WhatsApp वर पाठवा — आम्ही मग, बॅजेस, टी-शर्ट्स आणि ॲक्रेलिक कीचेन्सवर आकर्षक रंगात आणि टिकाऊ फिनिशसह तयार करतो.'
                    : 'Send us any picture, logo, or creative theme directly on WhatsApp — we bring it to life on mugs, badges, tees, and acrylic keychains with vivid colors and durable finish.'}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 text-xs text-[#1C1B1B] font-medium mb-4 sm:mb-6">
                  <div className="flex items-center gap-2">
                    <Icon name="check" size={14} className="text-[#E05A2B]" />
                    <span>{lang === 'mr' ? 'कस्टम बटन आणि मॅग्नेट बॅजेस' : 'Custom button & magnet badges'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="check" size={14} className="text-[#E05A2B]" />
                    <span>{lang === 'mr' ? 'फोटो सिरॅमिक मग' : 'Photo ceramic mugs'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="check" size={14} className="text-[#E05A2B]" />
                    <span>{lang === 'mr' ? 'डबल-साइडेड ॲक्रेलिक कीचेन्स' : 'Double-sided acrylic keychains'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="check" size={14} className="text-[#E05A2B]" />
                    <span>{lang === 'mr' ? 'कस्टम DTF टी-शर्ट प्रिंटिंग' : 'Custom DTF t-shirt printing'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="check" size={14} className="text-[#E05A2B]" />
                    <span>{lang === 'mr' ? 'फोटो फ्रेम्स आणि स्मृतिचिन्हे' : 'Photo frames & keepsakes'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="check" size={14} className="text-[#E05A2B]" />
                    <span>{lang === 'mr' ? 'विद्यार्थी व ऑफिस ओळखपत्रे (ID Cards)' : 'Bulk student & office ID cards'}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 pt-4 border-t border-[#F0EBE1]">
                <a
                  href="https://wa.me/918080577460?text=Hello%2C%20I%20want%20to%20order%20Custom%20Gifts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#E05A2B] hover:bg-[#C84B1F] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-[6px] transition-all flex items-center justify-center gap-2 shadow-xs active:scale-95"
                >
                  <span>{lang === 'mr' ? 'तुमचे डिझाईन WhatsApp करा' : 'WhatsApp us your design'}</span>
                </a>
                <Link
                  to="/services"
                  className="text-xs sm:text-sm font-semibold text-[#1C1B1B] hover:text-[#E05A2B] transition-colors flex items-center justify-center gap-1 py-1"
                >
                  <span>{lang === 'mr' ? 'प्रिंटिंग मेनू पहा' : 'Explore print menu'}</span>
                  <Icon name="arrow_forward" size={14} />
                </Link>
              </div>
            </div>

            {/* Card 2: Government authorised CSC centre */}
            <div className="bg-[#0D1829] text-white rounded-[10px] p-5 sm:p-6 md:p-8 shadow-xs flex flex-col justify-between border border-[#1E293B]">
              <div>
                <span className="bg-white/10 text-white/90 px-2.5 sm:px-3 py-1 rounded-[4px] text-[11px] sm:text-xs font-bold inline-block border border-white/15">
                  {lang === 'mr' ? 'शासकीय अधिकृत CSC केंद्र' : 'Government authorised CSC centre'}
                </span>
                <h3 className={`text-lg sm:text-xl md:text-2xl font-bold text-white mt-3 sm:mt-4 mb-2 ${lang === 'mr' ? 'font-devanagari' : 'font-serif'}`}>
                  {lang === 'mr' ? 'कृपा ऑनलाईन — CSC नागरिक सेवा' : 'Kripa Online — CSC citizen services'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 sm:mb-6">
                  {lang === 'mr'
                    ? 'वेगवान, पारदर्शक आणि विश्वासार्ह नागरिक दस्तऐवज सहाय्य. लांबलचक रांगांशिवाय — पॅन कार्ड, ७/१२ उतारे आणि शासकीय योजनांचे अर्ज त्वरित पूर्ण करा.'
                    : 'Fast, transparent, and respectful citizen documentation assistance. No confusing queues — get verified paperwork, land records, and government benefit registrations handled right away.'}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 text-xs text-white/95 font-medium mb-4 sm:mb-6">
                  <div className="flex items-center gap-2">
                    <Icon name="check" size={14} className="text-[#FFB691]" />
                    <span>{lang === 'mr' ? 'पॅन कार्ड नवीन अर्ज व दुरुस्ती' : 'PAN card application & correction'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="check" size={14} className="text-[#FFB691]" />
                    <span>{lang === 'mr' ? 'ई-श्रम व कामगार नोंदणी' : 'E-shram & labour card registration'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="check" size={14} className="text-[#FFB691]" />
                    <span>{lang === 'mr' ? '७/१२ आणि ८-अ जमिनीचे उतारे' : '7/12 & land record extracts'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="check" size={14} className="text-[#FFB691]" />
                    <span>{lang === 'mr' ? 'रेशन कार्ड नाव नोंदणी व दुरुस्ती' : 'Ration card name updates'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="check" size={14} className="text-[#FFB691]" />
                    <span>{lang === 'mr' ? 'डिजिटल जीवन प्रमाणपत्र (Life Certificate)' : 'Digital life certificate'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="check" size={14} className="text-[#FFB691]" />
                    <span>{lang === 'mr' ? 'महाDBT व शासकीय शिष्यवृत्ती' : 'MahaDBT & govt scholarships'}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 pt-4 border-t border-slate-800">
                <a
                  href="tel:+918080577460"
                  className="bg-white hover:bg-slate-100 text-[#0D1829] text-xs sm:text-sm font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-[6px] transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>{lang === 'mr' ? 'कृपा ऑनलाईन डेस्कला कॉल करा' : 'Call Kripa Online desk'}</span>
                </a>
                <a
                  href="https://wa.me/918080577460?text=Hello%20Kripa%20Online%2C%20I%20need%20assistance%20with%20Govt%20Documents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-semibold text-white/90 hover:text-white transition-colors flex items-center justify-center gap-1 py-1"
                >
                  <span>{lang === 'mr' ? 'WhatsApp वर कागदपत्रे तपासा' : 'Check docs on WhatsApp'}</span>
                  <Icon name="arrow_forward" size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. AUTHENTIC CRAFT / PERSONALIZED GIFTS & KEEPSAKES */}
      <section className="py-8 sm:py-10 md:py-14 bg-[#FAF8F5] relative overflow-hidden">
        {/* Subtle Background Pattern & Ambient Tones for Frosted Glass Depth */}
        <div className="absolute inset-0 bg-[radial-gradient(#D6CEBF_1.25px,transparent_1.25px)] [background-size:24px_24px] opacity-75 pointer-events-none" />
        <div className="pointer-events-none absolute -top-10 left-1/4 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-[#E05A2B]/12 rounded-full blur-[70px]" />
        <div className="pointer-events-none absolute top-1/2 -right-10 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-[#0284C7]/10 rounded-full blur-[70px]" />

        <div className="max-w-7xl mx-auto px-3.5 sm:px-4 md:px-6 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6 sm:mb-8 text-left">
            <div>
              <span className="text-[11px] sm:text-xs font-bold font-label-caps text-[#C84B1F] uppercase tracking-wider block mb-1">
                {lang === 'mr' ? 'अस्सल कलाकृती' : 'Authentic craft'}
              </span>
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1B1B] ${lang === 'mr' ? 'font-devanagari' : 'font-serif'}`}>
                {lang === 'mr' ? 'सानुकूल भेटवस्तू व स्मृतिचिन्हे' : 'Personalized gifts & keepsakes'}
              </h2>
            </div>
            <Link
              to="/services"
              className="text-xs sm:text-sm font-semibold text-[#C84B1F] hover:underline flex items-center gap-1 self-start sm:self-auto"
            >
              <span>{lang === 'mr' ? 'सर्व उत्पादने पहा' : 'View all products'}</span>
              <Icon name="arrow_forward" size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 text-left">
            {/* Left Large Featured Card */}
            <div className="lg:col-span-5 flex flex-col frosted-glass-card overflow-hidden">
              <div className="relative h-[220px] sm:h-[280px] lg:h-[305px] bg-transparent overflow-hidden shrink-0 border-b border-white/40">
                <span className="absolute top-3 left-3 z-10 bg-[#1C1B1B] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-[4px] shadow-xs uppercase tracking-wider">
                  {lang === 'mr' ? 'खास उत्पादन' : 'Signature product'}
                </span>
                <img
                  src="/images/badges.webp"
                  alt="Custom pin and fridge magnet button badges manufactured in Kopargaon"
                  width="480"
                  height="305"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="p-4 sm:p-5 md:p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between mb-1.5 gap-2">
                    <span className="text-[10px] sm:text-[11px] text-[#71717A] uppercase font-bold tracking-wider">
                      {lang === 'mr' ? '४४मिमी व ५८मिमी पिन / मॅग्नेट' : '44mm & 58mm pin / magnet'}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-[#E05A2B] bg-[#FAF5ED] px-2 py-0.5 rounded border border-[#FDE68A]/60 shrink-0">
                      {lang === 'mr' ? 'किमान मर्यादा नाही · घाऊक उपलब्ध' : 'No MOQ · Bulk friendly'}
                    </span>
                  </div>
                  <h3 className={`text-base sm:text-lg md:text-xl font-bold text-[#1C1B1B] mb-2 ${lang === 'mr' ? 'font-devanagari' : 'font-serif'}`}>
                    {lang === 'mr' ? 'कस्टम पिन व मॅग्नेट बॅजेस' : 'Custom pin & magnet badges'}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#525252] leading-relaxed mb-3 sm:mb-4">
                    {lang === 'mr'
                      ? 'ग्लॉसी, मॅट आणि मखमली संरक्षणात्मक फिनिश. लग्नसोहळे, वाढदिवसाच्या भेटवस्तू, राजकीय प्रचार आणि कॉलेज फेस्टिव्हलसाठी सर्वोत्तम.'
                      : 'Glossy, matte, and soft-touch protective finish. Ideal for weddings, birthday return gifts, political campaigns, and student fests.'}
                  </p>

                  {/* Compact Feature Specs */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2">
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-[#1C1B1B] frosted-glass-sub px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-[6px]">
                      <Icon name="check" size={12} className="text-[#E05A2B]" />
                      <span>{lang === 'mr' ? '४४मिमी व ५८मिमी आकार' : '44mm & 58mm sizes'}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-[#1C1B1B] frosted-glass-sub px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-[6px]">
                      <Icon name="check" size={12} className="text-[#E05A2B]" />
                      <span>{lang === 'mr' ? 'ग्लॉसी · मॅट · स्पार्कल' : 'Glossy · Matte · Sparkle'}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-[#1C1B1B] frosted-glass-sub px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-[6px]">
                      <Icon name="check" size={12} className="text-[#E05A2B]" />
                      <span>{lang === 'mr' ? 'सेफ्टी पिन किंवा मॅग्नेट' : 'Safety pin or magnet'}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-[#1C1B1B] frosted-glass-sub px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-[6px]">
                      <Icon name="check" size={12} className="text-[#E05A2B]" />
                      <span>{lang === 'mr' ? '२४–४८ तासांत डिलिव्हरी' : '24–48h dispatch'}</span>
                    </span>
                  </div>

                  {/* Popular Occasions */}
                  <div className="mt-3 pt-2.5 border-t border-[#1C1B1B]/10">
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#9CA3AF] block mb-1.5">
                      {lang === 'mr' ? 'या कार्यक्रमांसाठी लोकप्रिय' : 'Popular for occasions'}
                    </span>
                    <div className="flex flex-wrap gap-1 sm:gap-1.5">
                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-[#78350F] bg-[#FAF5ED]/85 px-2 py-0.5 rounded border border-[#FDE68A]/60">
                        <Icon name="favorite" size={11} className="text-[#E05A2B]" />
                        <span>{lang === 'mr' ? 'लग्नसोहळे व हळदी' : 'Weddings & Haldi'}</span>
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-[#78350F] bg-[#FAF5ED]/85 px-2 py-0.5 rounded border border-[#FDE68A]/60">
                        <Icon name="cake" size={11} className="text-[#E05A2B]" />
                        <span>{lang === 'mr' ? 'वाढदिवस व पार्ट्या' : 'Birthdays & Parties'}</span>
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-[#78350F] bg-[#FAF5ED]/85 px-2 py-0.5 rounded border border-[#FDE68A]/60">
                        <Icon name="school" size={11} className="text-[#E05A2B]" />
                        <span>{lang === 'mr' ? 'कॉलेज व शाळा फेस्टिव्हल्स' : 'College & School Fests'}</span>
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-[#78350F] bg-[#FAF5ED]/85 px-2 py-0.5 rounded border border-[#FDE68A]/60">
                        <Icon name="how_to_vote" size={11} className="text-[#E05A2B]" />
                        <span>{lang === 'mr' ? 'निवडणुका व रॅली' : 'Elections & Rallies'}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-3.5 sm:pt-4 mt-2 border-t border-[#1C1B1B]/10 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-[#1C1B1B] block">
                      {lang === 'mr' ? 'दर सुरु ₹१५' : 'Starts at ₹15'}
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-[#71717A]">
                      {lang === 'mr' ? 'मोठ्या ऑर्डर्सवर विशेष सवलत' : 'Bulk discount tiers available'}
                    </span>
                  </div>
                  <a
                    href="https://wa.me/918080577460?text=Hello%2C%20I%20want%20to%20order%20Custom%20Badges"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#E05A2B] hover:bg-[#C84B1F] text-white text-xs font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-[6px] shadow-xs transition-all active:scale-95 flex items-center gap-1.5 shrink-0"
                  >
                    <span>{lang === 'mr' ? 'WhatsApp वर ऑर्डर करा' : 'Order on WhatsApp'}</span>
                    <Icon name="arrow_forward" size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right 4-Card 2x2 Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* Card 1: Keychains */}
              <div className="frosted-glass-card overflow-hidden flex flex-col justify-between">
                <div className="aspect-[16/10] bg-transparent overflow-hidden border-b border-white/40">
                  <img
                    src="/images/keychain.webp"
                    alt="Custom double-sided laser-cut acrylic keychains made in Kopargaon"
                    width="400"
                    height="250"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h4 className={`text-xs sm:text-sm font-bold text-[#1C1B1B] ${lang === 'mr' ? 'font-devanagari' : 'font-serif'}`}>
                      {lang === 'mr' ? 'डबल-साइडेड ॲक्रेलिक कीचेन्स' : 'Double-sided acrylic keychains'}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#525252] mt-1 leading-relaxed">
                      {lang === 'mr'
                        ? 'दोन्ही बाजूंनी रंगीत फोटोसह लेझर-कट क्रिस्टल-क्लियर ॲक्रेलिक.'
                        : 'Laser-cut crystal-clear acrylic with full-colour photos on both sides.'}
                    </p>
                  </div>
                  <div className="pt-2.5 sm:pt-3 mt-3 sm:mt-4 border-t border-[#1C1B1B]/10 flex items-center justify-between text-xs">
                    <span className="font-bold text-[#1C1B1B]">
                      {lang === 'mr' ? 'दर ₹९९ पासून' : 'From ₹99'}
                    </span>
                    <a
                      href="https://wa.me/918080577460?text=Hello%2C%20I%20want%20to%20order%20Acrylic%20Keychains"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#C84B1F] hover:underline flex items-center gap-1"
                    >
                      <span>{lang === 'mr' ? 'चौकशी करा' : 'Enquire'}</span>
                      <Icon name="arrow_forward" size={12} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2: Photo Mugs */}
              <div className="frosted-glass-card overflow-hidden flex flex-col justify-between">
                <div className="aspect-[16/10] bg-transparent overflow-hidden border-b border-white/40">
                  <img
                    src="/images/mug.webp"
                    alt="Sublimation ceramic photo mugs and magic mugs printed in Kopargaon"
                    width="400"
                    height="250"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h4 className={`text-xs sm:text-sm font-bold text-[#1C1B1B] ${lang === 'mr' ? 'font-devanagari' : 'font-serif'}`}>
                      {lang === 'mr' ? 'फोटो सिरॅमिक व मॅजिक मग' : 'Photo ceramic & magic mugs'}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#525252] mt-1 leading-relaxed">
                      {lang === 'mr'
                        ? 'उच्च दर्जाचे AAA सिरॅमिक ड्रिंकवेअर. सब्लिमेशन-प्रिंटेड, कायमस्वरूपी रंग.'
                        : 'High-grade AAA ceramic drinkware. Sublimation-printed, permanent colours.'}
                    </p>
                  </div>
                  <div className="pt-2.5 sm:pt-3 mt-3 sm:mt-4 border-t border-[#1C1B1B]/10 flex items-center justify-between text-xs">
                    <span className="font-bold text-[#1C1B1B]">
                      {lang === 'mr' ? 'दर ₹१९९ पासून' : 'From ₹199'}
                    </span>
                    <a
                      href="https://wa.me/918080577460?text=Hello%2C%20I%20want%20to%20order%20Photo%20Mugs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#C84B1F] hover:underline flex items-center gap-1"
                    >
                      <span>{lang === 'mr' ? 'चौकशी करा' : 'Enquire'}</span>
                      <Icon name="arrow_forward" size={12} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 3: T-Shirts */}
              <div className="frosted-glass-card overflow-hidden flex flex-col justify-between">
                <div className="aspect-[16/10] bg-transparent overflow-hidden border-b border-white/40">
                  <img
                    src="/images/tshirt.webp"
                    alt="Custom direct to film DTF t-shirt garment printing in Kopargaon"
                    width="400"
                    height="250"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h4 className={`text-xs sm:text-sm font-bold text-[#1C1B1B] ${lang === 'mr' ? 'font-devanagari' : 'font-serif'}`}>
                      {lang === 'mr' ? 'कस्टम टी-शर्ट प्रिंटिंग (DTF)' : 'Custom t-shirt printing (DTF)'}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#525252] mt-1 leading-relaxed">
                      {lang === 'mr'
                        ? 'कॉटन व पॉली-ब्लेंड कपड्यांवर डायरेक्ट-टू-फिल्म संपूर्ण रंगीत प्रिंट.'
                        : 'Direct-to-film full-colour prints on cotton and poly-blend garments.'}
                    </p>
                  </div>
                  <div className="pt-2.5 sm:pt-3 mt-3 sm:mt-4 border-t border-[#1C1B1B]/10 flex items-center justify-between text-xs">
                    <span className="font-bold text-[#1C1B1B]">
                      {lang === 'mr' ? 'एक किंवा घाऊक' : 'Single or bulk'}
                    </span>
                    <a
                      href="https://wa.me/918080577460?text=Hello%2C%20I%20want%20to%20order%20Custom%20T-Shirts"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#C84B1F] hover:underline flex items-center gap-1"
                    >
                      <span>{lang === 'mr' ? 'चौकशी करा' : 'Enquire'}</span>
                      <Icon name="arrow_forward" size={12} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 4: Photo Frames */}
              <div className="frosted-glass-card overflow-hidden flex flex-col justify-between">
                <div className="aspect-[16/10] bg-transparent overflow-hidden border-b border-white/40">
                  <img
                    src="/images/college.webp"
                    alt="Custom personalized photo frames and collages in Kopargaon"
                    width="400"
                    height="250"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h4 className={`text-xs sm:text-sm font-bold text-[#1C1B1B] ${lang === 'mr' ? 'font-devanagari' : 'font-serif'}`}>
                      {lang === 'mr' ? 'फोटो फ्रेम्स व कोलाज' : 'Personalized photo frames & collages'}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#525252] mt-1 leading-relaxed">
                      {lang === 'mr'
                        ? 'लग्नाचे वाढदिवस व आठवणींसाठी सुंदर फ्रेम्स आणि लाकडी कोलाज.'
                        : 'Curated frames and wooden collages for anniversaries and milestones.'}
                    </p>
                  </div>
                  <div className="pt-2.5 sm:pt-3 mt-3 sm:mt-4 border-t border-[#1C1B1B]/10 flex items-center justify-between text-xs">
                    <span className="font-bold text-[#1C1B1B]">
                      {lang === 'mr' ? 'सर्व आकार उपलब्ध' : 'Custom sizes'}
                    </span>
                    <a
                      href="https://wa.me/918080577460?text=Hello%2C%20I%20want%20to%20order%20Photo%20Frames"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#C84B1F] hover:underline flex items-center gap-1"
                    >
                      <span>{lang === 'mr' ? 'चौकशी करा' : 'Enquire'}</span>
                      <Icon name="arrow_forward" size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR SPECIALTY · CUSTOM BADGE SHOWCASE */}
      <section className="py-10 sm:py-14 md:py-18 bg-[#0D192E] text-white border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center text-left">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
              <span className="bg-white/10 text-white/90 text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-1 rounded-[4px] uppercase tracking-wider inline-block border border-white/15 font-label-caps">
                {lang === 'mr' ? 'आमचे वैशिष्ट्य · कस्टम पिन व मॅग्नेट बॅजेस' : 'Our specialty · Custom pin & magnet badges'}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold font-devanagari text-white leading-tight">
                तुमची ओळख, तुमचा अंदाज — आता बॅजवर!
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-serif italic text-[#FFB691]">
                {lang === 'mr' ? 'दर्जेदार प्रिंट, चमकदार फिनिश आणि टिकाऊ बॅजेस' : 'Your identity. Your style. Now on a badge.'}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                {lang === 'mr'
                  ? 'कोपरगावमध्येच तयार करून मिळवा आकर्षक बटन बॅजेस — मग ते तुमच्या मित्राच्या लग्नासाठी १० बॅजेस असोत किंवा भव्य प्रचार रॅलीसाठी ५,००० बॅजेस, आमची चमकदार प्रिंट प्रत्येक बॅजला उठून दाखवते.'
                  : "Get custom button badges made right here in Kopargaon — whether you need 10 badges for your best friend's wedding or 5,000 badges for a grand election rally, our vibrant prints and protective finish make every badge pop."}
              </p>

              <div className="pt-2">
                <span className="text-[11px] sm:text-xs font-bold text-white uppercase tracking-wider block mb-2 sm:mb-2.5">
                  {lang === 'mr' ? 'सर्व कार्यक्रमांसाठी लोकप्रिय' : 'Popular for all occasions'}
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 text-[11px] sm:text-xs">
                  <span className="px-2.5 sm:px-3 py-1 rounded-[4px] bg-white/10 text-white border border-white/15">
                    {lang === 'mr' ? 'लग्नसोहळे व नवरदेव/नवरी टीम' : 'Wedding & bride/groom squad'}
                  </span>
                  <span className="px-2.5 sm:px-3 py-1 rounded-[4px] bg-white/10 text-white border border-white/15">
                    {lang === 'mr' ? 'वाढदिवस व स्नेहसंमेलन' : 'Birthday celebrations'}
                  </span>
                  <span className="px-2.5 sm:px-3 py-1 rounded-[4px] bg-white/10 text-white border border-white/15">
                    {lang === 'mr' ? 'राजकीय व सामाजिक प्रचार' : 'Political & social campaigns'}
                  </span>
                  <span className="px-2.5 sm:px-3 py-1 rounded-[4px] bg-white/10 text-white border border-white/15">
                    {lang === 'mr' ? 'कॉलेज उत्सव व क्लब्स' : 'College fests & clubs'}
                  </span>
                  <span className="px-2.5 sm:px-3 py-1 rounded-[4px] bg-white/10 text-white border border-white/15">
                    {lang === 'mr' ? 'कंपनी स्टाफ व कार्यक्रम' : 'Company staff & events'}
                  </span>
                </div>
              </div>

              <div className="pt-2 sm:pt-3">
                <a
                  href="https://wa.me/918080577460?text=Hello%2C%20I%20want%20to%20design%20Custom%20Badges"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#E05A2B] hover:bg-[#C84B1F] text-white font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-[6px] text-xs sm:text-sm shadow-xs transition-all active:scale-95 inline-flex items-center gap-2"
                >
                  <span>{lang === 'mr' ? 'WhatsApp वर बॅज डिझाईन करा' : 'Design your badge on WhatsApp'}</span>
                </a>
              </div>
            </div>

            {/* Right Smartphone Preview Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[240px] sm:max-w-[270px] bg-[#000000] rounded-[28px] sm:rounded-[32px] p-2 sm:p-2.5 shadow-2xl border-2 border-slate-700">
                <div className="bg-[#FAF8F5] rounded-[20px] sm:rounded-[24px] overflow-hidden text-[#1C1B1B] text-xs flex flex-col justify-between h-[380px] sm:h-[420px]">
                  {/* Status Bar */}
                  <div className="px-4 sm:px-5 pt-2.5 sm:pt-3 flex justify-between items-center text-[10px] sm:text-[11px] font-semibold text-[#71717A]">
                    <span>10:30</span>
                    <span className="flex items-center gap-1">
                      <span>76%</span>
                    </span>
                  </div>

                  {/* Smartphone screen body */}
                  <div className="p-3 sm:p-4 flex-1 flex flex-col items-center justify-center">
                    <div className="w-full aspect-square rounded-[14px] sm:rounded-[16px] overflow-hidden bg-white border border-[#E7E2D8] shadow-xs mb-2 sm:mb-3 flex items-center justify-center">
                      <img
                        src="/images/badges.webp"
                        alt="Badges preview on phone"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Screen Bottom Product Info Card */}
                  <div className="p-3 sm:p-3.5 bg-white border-t border-[#EAE6DF] flex items-center justify-between text-left gap-1">
                    <div>
                      <div className={`text-[11px] sm:text-[12px] font-bold text-[#1C1B1B] leading-tight ${lang === 'mr' ? 'font-devanagari' : ''}`}>
                        {lang === 'mr' ? 'कस्टम बटन बॅजेस' : 'Custom Button Badges'}
                      </div>
                      <div className="text-[9px] sm:text-[10px] text-[#71717A] mt-0.5 flex items-center gap-1.5 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                        <span>{lang === 'mr' ? 'पिन व मॅग्नेट प्रकार' : 'Pinback & Magnet'}</span>
                      </div>
                    </div>

                    <div className="text-right shrink-0 pl-1">
                      <div className="bg-[#FFF5EE] text-[#C84B1F] border border-[#FCD9C6] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-[6px] shadow-xs flex items-baseline gap-1">
                        <span className="text-[11px] sm:text-xs font-bold font-serif">{lang === 'mr' ? '₹१५' : '₹15'}</span>
                        <span className="text-[8px] sm:text-[9px] font-semibold text-[#9C3814] uppercase tracking-wider">{lang === 'mr' ? 'घाऊक' : 'bulk'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SEAMLESS FULFILLMENT / HOW EASY IT IS */}
      <section className="py-10 sm:py-14 md:py-18 bg-[#FAF8F5] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#D6CEBF_1.25px,transparent_1.25px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
        <div className="pointer-events-none absolute top-1/2 left-1/4 w-[300px] sm:w-[400px] h-[250px] sm:h-[300px] bg-[#E05A2B]/10 rounded-full blur-[65px]" />
        <div className="max-w-7xl mx-auto px-3.5 sm:px-4 md:px-6 text-center relative z-10">
          <span className="text-[11px] sm:text-xs font-bold font-label-caps text-[#C84B1F] uppercase tracking-wider block mb-1">
            {lang === 'mr' ? 'सुलभ व सोपी प्रक्रिया' : 'Seamless fulfillment'}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1B1B] ${lang === 'mr' ? 'font-devanagari' : 'font-serif'}`}>
            {lang === 'mr' ? 'ऑर्डर करणे किती सोपे आहे' : 'How easy it is'}
          </h2>
          <p className="text-xs sm:text-sm text-[#525252] max-w-xl mx-auto mt-1.5 sm:mt-2 leading-relaxed">
            {lang === 'mr'
              ? 'सोपे, वेगवान आणि पारदर्शक — तुमच्या मोबाईलवरील संकल्पनेपासून ते आमच्या केंद्रातून तयार उत्पादन स्वीकारण्यापर्यंत.'
              : 'Simple, rapid, and transparent — from initial concept on your smartphone to picking up the finished product at our centre.'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-10 text-left">
            {/* Step 01 */}
            <div className="p-4 sm:p-5 md:p-6 frosted-glass-card card-light-sweep space-y-2 sm:space-y-2.5">
              <div className="flex items-baseline gap-2.5">
                <span className="text-xl sm:text-2xl md:text-3xl font-serif text-[#C84B1F]/60 font-normal shrink-0">01</span>
                <h3 className={`text-xs sm:text-sm font-bold text-[#1C1B1B] ${lang === 'mr' ? 'font-devanagari' : 'font-serif'}`}>
                  {lang === 'mr' ? 'तुमची कल्पना पाठवा' : 'Send your idea'}
                </h3>
              </div>
              <p className="text-[11px] sm:text-xs text-[#525252] leading-relaxed">
                {lang === 'mr'
                  ? 'तुमचा फोटो, लोगो किंवा कार्यक्रमाची थीम थेट WhatsApp वर (+91 80805 77460) पाठवा.'
                  : 'Send us your picture, logo, quote, or event theme directly on WhatsApp (+91 80805 77460).'}
              </p>
            </div>

            {/* Step 02 */}
            <div className="p-4 sm:p-5 md:p-6 frosted-glass-card card-light-sweep space-y-2 sm:space-y-2.5">
              <div className="flex items-baseline gap-2.5">
                <span className="text-xl sm:text-2xl md:text-3xl font-serif text-[#C84B1F]/60 font-normal shrink-0">02</span>
                <h3 className={`text-xs sm:text-sm font-bold text-[#1C1B1B] ${lang === 'mr' ? 'font-devanagari' : 'font-serif'}`}>
                  {lang === 'mr' ? 'उत्पादन निवडा' : 'Choose product'}
                </h3>
              </div>
              <p className="text-[11px] sm:text-xs text-[#525252] leading-relaxed">
                {lang === 'mr'
                  ? 'बॅजचा आकार, मग फिनिश, कीचेन प्रकार किंवा टी-शर्ट मटेरियल निवडून संख्या निश्चित करा.'
                  : 'Select badge diameter, mug finish, keychain style or garment material, and confirm quantity.'}
              </p>
            </div>

            {/* Step 03 */}
            <div className="p-4 sm:p-5 md:p-6 frosted-glass-card card-light-sweep space-y-2 sm:space-y-2.5">
              <div className="flex items-baseline gap-2.5">
                <span className="text-xl sm:text-2xl md:text-3xl font-serif text-[#C84B1F]/60 font-normal shrink-0">03</span>
                <h3 className={`text-xs sm:text-sm font-bold text-[#1C1B1B] ${lang === 'mr' ? 'font-devanagari' : 'font-serif'}`}>
                  {lang === 'mr' ? 'आम्ही तयार करतो' : 'We create it'}
                </h3>
              </div>
              <p className="text-[11px] sm:text-xs text-[#525252] leading-relaxed">
                {lang === 'mr'
                  ? 'आमची कोपरगाव कार्यशाळा आधुनिक मशिनरी व अचूक गुणवत्तेसह प्रिंटिंग आणि फिनिशिंग करते.'
                  : 'Our Kopargaon workshop prints, cuts, presses and heat-seals with high-grade equipment and QA checks.'}
              </p>
            </div>

            {/* Step 04 */}
            <div className="p-4 sm:p-5 md:p-6 frosted-glass-card card-light-sweep space-y-2 sm:space-y-2.5">
              <div className="flex items-baseline gap-2.5">
                <span className="text-xl sm:text-2xl md:text-3xl font-serif text-[#C84B1F]/60 font-normal shrink-0">04</span>
                <h3 className={`text-xs sm:text-sm font-bold text-[#1C1B1B] ${lang === 'mr' ? 'font-devanagari' : 'font-serif'}`}>
                  {lang === 'mr' ? 'ऑर्डर प्राप्त करा' : 'Collect your order'}
                </h3>
              </div>
              <p className="text-[11px] sm:text-xs text-[#525252] leading-relaxed">
                {lang === 'mr'
                  ? 'संजयनगर चौकातील केंद्रातून स्वतः घ्या किंवा कोपरगाव व परिसरासाठी डिलिव्हरी मागवा.'
                  : 'Pick up from Sanjay Nagar Chowk or request local dispatch across Kopargaon and surrounding towns.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. DIRECT CONTACT CTA BANNER */}
      <section className="py-10 sm:py-14 md:py-18 bg-[#F7F4EE] border-t border-[#E7E2D8]" id="contact">
        <div className="max-w-4xl mx-auto px-3.5 sm:px-4 text-center space-y-3.5 sm:space-y-4">
          <span className="text-[#C84B1F] font-bold text-[11px] sm:text-xs uppercase tracking-wider font-label-caps block">
            {lang === 'mr' ? 'आम्ही मदतीसाठी सदैव तयार आहोत' : 'We are always happy to help'}
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1B1B] ${lang === 'mr' ? 'font-devanagari' : 'font-serif'}`}>
            {lang === 'mr' ? 'प्रिंटिंग किंवा ऑनलाइन फॉर्म भरायचा आहे का?' : 'Need something printed or an online form filed?'}
          </h2>
          <p className="text-xs sm:text-sm text-[#525252] max-w-xl mx-auto leading-relaxed">
            {lang === 'mr'
              ? 'WhatsApp वर मेसेज करा, कॉल करा किंवा कोपरगावमधील संजयनगर चौक येथील आमच्या स्टुडिओला भेट द्या. आम्हाला तुम्हाला मदत करण्यास आनंद होईल!'
              : 'Send us a WhatsApp message, give us a quick ring, or drop by our studio at Sanjay Nagar Chowk in Kopargaon. We look forward to meeting you!'}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2 sm:pt-3">
            <a
              className="bg-[#E05A2B] hover:bg-[#C84B1F] text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-[6px] text-xs sm:text-sm shadow-xs transition-all active:scale-95 flex items-center justify-center gap-2"
              href="https://wa.me/918080577460"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon name="whatsapp" size={17} />
              <span>{lang === 'mr' ? 'WhatsApp करा (+91 80805 77460)' : 'WhatsApp us (+91 80805 77460)'}</span>
            </a>
            <a
              className="bg-[#1C1B1B] hover:bg-black text-white font-semibold px-4 sm:px-5 py-2.5 sm:py-3 rounded-[6px] text-xs sm:text-sm transition-all active:scale-95 flex items-center justify-center gap-1.5"
              href="tel:+918080577460"
            >
              <span>{lang === 'mr' ? 'कॉल करा' : 'Call workshop'}</span>
            </a>
            <a
              className="border border-[#1C1B1B] bg-white text-[#1C1B1B] font-semibold px-4 sm:px-5 py-2.5 sm:py-3 rounded-[6px] text-xs sm:text-sm hover:bg-[#FAF8F5] transition-all flex items-center justify-center gap-1.5"
              href="https://maps.google.com/?q=Sanjay+Nagar+Chowk+Kopargaon"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>{lang === 'mr' ? 'नकाशा / पत्ता पहा' : 'Get directions'}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
