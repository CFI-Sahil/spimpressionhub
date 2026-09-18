import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useDocumentSEO } from '../hooks/useDocumentSEO';
import { printingServices, giftProducts, cscCategories } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import ProductCard from '../components/ProductCard';
import Icon from '../components/Icon';

export default function Services() {
  const { t, lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const scrollTrackRef = useRef(null);
  const containerRef = useRef(null);
  const tabRefs = useRef({});
  const [pillStyle, setPillStyle] = useState({ left: 0, top: 0, width: 0, height: 0, opacity: 0 });

  useDocumentSEO({
    title: lang === 'mr'
      ? "प्रिंटिंग व CSC सेवा कोपरगाव | SP Impression Hub"
      : "Printing & CSC Services in Kopargaon | SP Impression Hub",
    description: lang === 'mr'
      ? "कोपरगावमधील कस्टम प्रिंटिंग, पर्सनलाइज्ड गिफ्ट्स, डिजिटल प्रिंटिंग आणि कृपा ऑनलाइन CSC सेवा."
      : "Explore custom printing, personalized gifts, digital printing and Kripa Online CSC services available in Kopargaon.",
    canonical: "https://spimpressionhub.com/services",
    ogImage: "https://spimpressionhub.com/images/mug.webp",
    schemas: [
      {
        "@type": "BreadcrumbList",
        "@id": "https://spimpressionhub.com/services#breadcrumbs",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://spimpressionhub.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services & Price List",
            "item": "https://spimpressionhub.com/services"
          }
        ]
      }
    ]
  });

  const filterTabs = [
    { id: 'all', label: t('filterAll'), icon: 'layers' },
    { id: 'printing', label: t('filterPrinting'), icon: 'print' },
    { id: 'personalized', label: t('filterPersonalized'), icon: 'package' },
    { id: 'csc', label: t('filterCSC'), icon: 'account_balance' },
  ];

  const updatePillPosition = () => {
    const activeEl = tabRefs.current[activeFilter];
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

  const scrollToActiveTab = (behavior = 'smooth') => {
    if (typeof window !== 'undefined' && window.innerWidth >= 768) return;
    const activeEl = tabRefs.current[activeFilter];
    const scrollTrack = scrollTrackRef.current;
    if (activeEl && scrollTrack) {
      const scrollLeft = activeEl.offsetLeft - (scrollTrack.offsetWidth / 2) + (activeEl.offsetWidth / 2);
      scrollTrack.scrollTo({
        left: Math.max(0, scrollLeft),
        behavior: behavior
      });
    }
  };

  useLayoutEffect(() => {
    updatePillPosition();
  }, [activeFilter, lang]);

  useEffect(() => {
    window.addEventListener('resize', updatePillPosition);
    const timer = setTimeout(() => {
      updatePillPosition();
      scrollToActiveTab('auto');
    }, 80);
    return () => {
      window.removeEventListener('resize', updatePillPosition);
      clearTimeout(timer);
    };
  }, [activeFilter, lang]);

  const handleFilterClick = (filterKey) => {
    setActiveFilter(filterKey);
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setTimeout(() => {
        const activeEl = tabRefs.current[filterKey];
        const scrollTrack = scrollTrackRef.current;
        if (activeEl && scrollTrack) {
          const scrollLeft = activeEl.offsetLeft - (scrollTrack.offsetWidth / 2) + (activeEl.offsetWidth / 2);
          scrollTrack.scrollTo({
            left: Math.max(0, scrollLeft),
            behavior: 'smooth'
          });
        }
      }, 10);
    }
  };

  return (
    <div className="relative overflow-hidden bg-[#FAF8F5]">
      {/* Subtle Background Pattern & Ambient Tones for Frosted Glass Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(#D6CEBF_1.25px,transparent_1.25px)] [background-size:24px_24px] opacity-75 pointer-events-none" />
      <div className="pointer-events-none absolute top-1/4 right-10 w-[320px] sm:w-[550px] h-[320px] sm:h-[550px] bg-[#E05A2B]/12 rounded-full blur-[70px]" />
      <div className="pointer-events-none absolute top-2/3 -left-20 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#0284C7]/10 rounded-full blur-[70px]" />

      <main className="max-w-7xl mx-auto px-3.5 sm:px-4 md:px-6 py-8 sm:py-10 md:py-14 space-y-10 sm:space-y-12 relative z-10">
      {/* 1. Services Hero & In-Place Filter Tabs */}
      <section className="text-center max-w-4xl mx-auto pt-2">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 mb-2.5 sm:mb-3 rounded-[4px] bg-surface-container-high border border-outline-variant/30 text-[11px] sm:text-xs font-semibold text-on-surface-variant">
          <Icon name="verified" size={14} className="text-secondary-container" />
          <span className="font-label-caps uppercase tracking-wider">
            {t('servicesHeroTag')}
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary font-serif mb-2.5 sm:mb-3">
          {t('servicesHeroTitle')}
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          {t('servicesHeroDesc')}
        </p>

        {/* Responsive In-Place Category Filter Bar */}
        <div className="relative mt-6 sm:mt-8 max-w-full">
          <div className="relative flex items-center justify-center max-w-full">
            {/* Horizontally scrollable ONLY on mobile (< md), cleanly centered without scroll on tablet & laptop (>= md) */}
            <div 
              ref={scrollTrackRef}
              className="overflow-x-auto md:overflow-visible no-scrollbar scroll-smooth py-1 px-4 sm:px-6 md:px-0 max-w-full w-full md:w-auto flex justify-start md:justify-center"
            >
              <div 
                ref={containerRef}
                className="relative inline-flex items-center flex-nowrap w-max shrink-0 p-1 bg-surface-container-low rounded-[10px] md:rounded-[8px] border border-outline-variant/50 gap-0.5 sm:gap-1 lg:gap-1.5 shadow-xs"
              >
                {/* Animated Sliding Background Indicator */}
                <div
                  className="absolute bg-[#0D192E] rounded-[7px] md:rounded-[6px] transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-none shadow-sm"
                  style={{
                    transform: `translate3d(${pillStyle.left}px, ${pillStyle.top}px, 0)`,
                    width: `${pillStyle.width}px`,
                    height: `${pillStyle.height}px`,
                    opacity: pillStyle.opacity,
                    top: 0,
                    left: 0,
                  }}
                />

                {filterTabs.map((tab) => {
                  const isSelected = activeFilter === tab.id;

                  return (
                    <button
                      key={tab.id}
                      ref={(el) => (tabRefs.current[tab.id] = el)}
                      type="button"
                      onClick={() => handleFilterClick(tab.id)}
                      className={`relative z-10 px-3 sm:px-3 md:px-3.5 lg:px-4 py-1.5 sm:py-1.5 md:py-2 rounded-[7px] md:rounded-[6px] text-xs sm:text-xs md:text-xs lg:text-[13px] font-semibold whitespace-nowrap transition-colors duration-200 cursor-pointer flex items-center gap-1.5 shrink-0 select-none ${
                        isSelected
                          ? 'text-white'
                          : 'text-on-surface-variant hover:text-primary'
                      }`}
                    >
                      {tab.icon && (
                        <Icon 
                          name={tab.icon} 
                          size={14} 
                          className={`transition-colors shrink-0 ${isSelected ? 'text-[#FFDBCE]' : 'text-on-surface-variant/70'}`} 
                        />
                      )}
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. IN-PLACE FILTERED SECTIONS */}
      <div className="space-y-10 sm:space-y-14 transition-opacity duration-200">
        
        {/* SECTION A: Printing & Digital Services */}
        {(activeFilter === 'all' || activeFilter === 'printing') && (
          <section className="space-y-4 sm:space-y-6">
            <div className="border-b border-outline-variant/30 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-1.5 sm:gap-2">
              <div>
                <span className="text-secondary font-bold text-[10px] sm:text-xs uppercase tracking-wider font-label-caps block">
                  {lang === 'mr' ? 'कला व पुनरुत्पादन' : 'CRAFT & REPRODUCTION'}
                </span>
                <h2 className={`text-xl sm:text-2xl font-bold text-primary ${lang === 'mr' ? 'font-devanagari' : 'font-serif'}`}>
                  {lang === 'mr' ? 'प्रिंटिंग व डिजिटल सेवा' : 'Printing & Digital Services'}
                </h2>
              </div>
              <p className="text-[11px] sm:text-xs text-on-surface-variant max-w-sm">
                {lang === 'mr'
                  ? 'अचूक डिजिटल प्रिंट, दर्जेदार कागद व मीडिया, आणि व्यावसायिक दस्तऐवज सादरीकरण.'
                  : 'High-fidelity digital output, archival media reproduction, and professional document presentation.'}
              </p>
            </div>

            {/* Compact 4-column service matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
              {printingServices.map((item) => (
                <ServiceCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        )}

        {/* SECTION B: Personalized Gifts & Custom Merchandise */}
        {(activeFilter === 'all' || activeFilter === 'personalized') && (
          <section className="space-y-4 sm:space-y-6">
            <div className="border-b border-outline-variant/30 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-1.5 sm:gap-2">
              <div>
                <span className="text-secondary font-bold text-[10px] sm:text-xs uppercase tracking-wider font-label-caps block">
                  {lang === 'mr' ? 'सानुकूल भेटवस्तू' : 'PERSONALIZED KEEPSAKES'}
                </span>
                <h2 className={`text-xl sm:text-2xl font-bold text-primary ${lang === 'mr' ? 'font-devanagari' : 'font-serif'}`}>
                  {lang === 'mr' ? 'सानुकूल भेटवस्तू व स्मृतिचिन्हे' : 'Personalized Gifts & Custom Merchandise'}
                </h2>
              </div>
              <p className="text-[11px] sm:text-xs text-on-surface-variant max-w-sm">
                {lang === 'mr'
                  ? 'एका वैयक्तिक फोटो भेटवस्तूपासून ते लग्न, शाळा व संस्थांच्या मोठ्या घाऊक ऑर्डर्सपर्यंत.'
                  : 'From single custom photo pieces to bulk batch orders for weddings, institutions, and celebrations.'}
              </p>
            </div>

            {/* Consistent 3-column product grid with 4:3 images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {giftProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        {/* SECTION C: Kripa Online | CSC Citizen Services */}
        {(activeFilter === 'all' || activeFilter === 'csc') && (
          <section className="space-y-6 sm:space-y-8">
            {/* Practical CSC Overview Banner */}
            <div className="bg-surface-container-lowest p-5 sm:p-6 md:p-8 rounded-[8px] border border-outline-variant/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6">
              <div className="space-y-2 max-w-2xl text-left">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[4px] bg-secondary-container/10 border border-secondary-container/20 text-[11px] sm:text-xs font-bold text-secondary-container font-label-caps">
                  <Icon name="account_balance" size={14} />
                  <span>{t('cscVerifiedBadge')}</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary font-devanagari leading-snug">
                  {t('cscHeadlineMarathi')}
                </h2>
                <p className="text-xs sm:text-sm font-medium text-secondary font-serif">
                  {t('cscHeadlineSub')} — संजयनगर चौक, कोपरगाव केंद्र
                </p>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {lang === 'mr'
                    ? 'कोपरगावच्या नागरिकांसाठी जमिनीचे उतारे, प्रमाणपत्रे, पेन्शन आणि ओळखपत्रांचे जलद, प्रमाणित आणि अचूक अर्ज प्रक्रियेस सहाय्य करणारे अधिकृत डिजिटल सेवा केंद्र.'
                    : 'Certified Digital Seva Kendra supporting Kopargaon citizens with fast, verified, and error-free application processing for land records, certificates, pensions, and identity cards.'}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto shrink-0">
                <a
                  className="bg-primary hover:bg-primary-container text-white px-4 py-2.5 rounded-[6px] text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-95 shadow-xs"
                  href="tel:+918080577460"
                >
                  <Icon name="call" size={16} />
                  <span>{lang === 'mr' ? 'कॉल ८०८०५७७४६०' : 'Call 8080577460'}</span>
                </a>
                <a
                  className="bg-secondary-container hover:bg-secondary text-white px-4 py-2.5 rounded-[6px] text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-95 shadow-xs"
                  href="https://wa.me/918080577460?text=Hello%20Kripa%20Online%2C%20I%20need%20assistance%20with%20Govt%20Documents"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="whatsapp" size={16} />
                  <span>{t('whatsappUs')}</span>
                </a>
              </div>
            </div>

            {/* 5 Organized Service Groups (Clean, trustworthy list cards) */}
            <div className="space-y-4 sm:space-y-6">
              {cscCategories.map((group) => {
                const groupTitle = lang === 'mr' ? group.titleMr : group.titleEn;
                const groupBadge = lang === 'mr' ? group.badgeMr : group.badgeEn;

                return (
                  <div
                    key={group.id}
                    className="bg-surface-container-lowest rounded-[8px] border border-outline-variant/30 border-l-4 border-l-primary overflow-hidden"
                  >
                    <div className="bg-surface-container-low px-4 sm:px-5 py-2.5 sm:py-3 border-b border-outline-variant/20 flex flex-wrap justify-between items-center gap-2">
                      <div className="flex items-center gap-2 sm:gap-2.5">
                        <Icon name={group.icon} size={18} className="text-primary" />
                        <h3 className={`text-sm sm:text-base font-bold text-primary ${lang === 'mr' ? 'font-devanagari' : 'font-serif'}`}>
                          {groupTitle}
                        </h3>
                      </div>
                      <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider bg-primary text-white px-2 py-0.5 rounded-[3px]">
                        {groupBadge}
                      </span>
                    </div>

                    <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                      {group.items.map((item, idx) => {
                        const itemName = lang === 'mr' ? item.nameMr : item.nameEn;
                        const itemDesc = lang === 'mr' ? item.descMr : item.descEn;
                        const waLink = `https://wa.me/918080577460?text=${encodeURIComponent(`Hello Kripa Online, I need assistance with: ${item.nameEn}`)}`;

                        return (
                          <div
                            key={idx}
                            className="border-l-2 border-l-secondary-container pl-3 sm:pl-3.5 py-1 hover:bg-surface-container-low/40 rounded-r transition-colors flex flex-col justify-between"
                          >
                            <div>
                              <h4 className={`text-xs sm:text-[13px] font-bold text-primary ${lang === 'mr' ? 'font-devanagari' : ''}`}>
                                {itemName}
                              </h4>
                              <p className="text-[10px] sm:text-[11px] text-on-surface-variant mt-1 leading-relaxed">
                                {itemDesc}
                              </p>
                            </div>
                            <div className="pt-2 mt-2">
                              <a
                                href={waLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-secondary hover:underline"
                              >
                                <span>{lang === 'mr' ? 'कागदपत्रे विचारा' : 'Check requirements'}</span>
                                <Icon name="arrow_forward" size={12} />
                              </a>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CSC Bottom Action Strip */}
            <div className="bg-surface-container-low border border-outline-variant/30 rounded-[8px] p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
              <div>
                <span className="text-[10px] sm:text-xs font-bold text-secondary-container uppercase tracking-wider block">
                  {t('deskHoursBadge')}
                </span>
                <p className="text-xs sm:text-sm font-semibold text-primary mt-0.5">
                  {lang === 'mr'
                    ? 'संजयनगर चौकातील कृपा ऑनलाईन केंद्राला भेट द्या किंवा आमच्या WhatsApp हेल्पलाइनवर संदेश पाठवा.'
                    : 'Walk into Kripa Online at Sanjay Nagar Chowk or message our WhatsApp helpline.'}
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  className="bg-primary hover:bg-primary-container text-white text-xs font-semibold px-3.5 sm:px-4 py-2 rounded-[6px]"
                  href="tel:+918080577460"
                >
                  {lang === 'mr' ? 'डेस्कला कॉल करा' : 'Call Desk'}
                </a>
                <a
                  className="border border-primary text-primary text-xs font-semibold px-3.5 sm:px-4 py-2 rounded-[6px] hover:bg-primary/5"
                  href="https://maps.google.com/?q=Sanjay+Nagar+Chowk,+Kopargaon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {lang === 'mr' ? 'पत्ता / नकाशा' : 'Directions'}
                </a>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
    </div>
  );
}
