import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useDocumentSEO } from '../hooks/useDocumentSEO';
import { galleryCategories, galleryItems } from '../data/gallery';
import LightboxModal from '../components/LightboxModal';
import Icon from '../components/Icon';

function GalleryItemCard({ item, isLarge = false, onSelect }) {
  const { lang } = useLanguage();
  const title = lang === 'mr' ? item.titleMr : item.titleEn;
  const desc = lang === 'mr' ? item.descMr : item.descEn;
  const tag = lang === 'mr' ? item.tagMr : item.tagEn;
  const waUrl = `https://wa.me/918080577460?text=${encodeURIComponent(`Hi SP Impression Hub, I saw "${item.titleEn}" in your gallery and want to order similar.`)}`;

  const handleCardClick = (e) => {
    // If click was on the WhatsApp link, let it navigate
    if (e.target.closest('a')) {
      return;
    }
    onSelect?.(item);
  };

  return (
    <div
      onClick={handleCardClick}
      className="frosted-glass-card overflow-hidden flex flex-col justify-between h-full cursor-pointer group transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-xl active:scale-[0.98] active:shadow-md"
    >
      <div
        className={`relative ${isLarge ? 'aspect-[16/9]' : 'aspect-[16/10]'} bg-transparent overflow-hidden border-b border-white/40`}
      >
        {tag && (
          <span className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 z-10 bg-[#18181B] text-white text-[9px] sm:text-[10px] font-bold px-2 sm:px-2.5 py-0.5 rounded-[4px] shadow-xs uppercase tracking-wider">
            {tag}
          </span>
        )}
        <img
          src={item.image}
          alt={`${title} - SP Impression Hub Kopargaon`}
          width="400"
          height="250"
          decoding="async"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 text-left">
        <div>
          <h3
            className={`text-sm sm:text-base md:text-[17px] font-bold text-[#1C1B1B] group-hover:text-[#C84B1F] transition-colors mb-1 sm:mb-1.5 ${lang === 'mr' ? 'font-devanagari' : 'font-serif'}`}
          >
            {title}
          </h3>
          <p className="text-[11px] sm:text-xs text-[#525252] leading-relaxed mb-2.5 sm:mb-3">
            {desc}
          </p>

          {item.highlights && item.highlights.length > 0 && (
            <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2.5 sm:mb-3">
              {item.highlights.map((h, i) => (
                <span key={i} className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-[#1C1B1B] frosted-glass-sub px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-[6px]">
                  <Icon name="check" size={12} className="text-[#E05A2B]" />
                  <span>{lang === 'mr' ? h.mr : h.en}</span>
                </span>
              ))}
            </div>
          )}

        </div>

        <div className="pt-3 sm:pt-3.5 border-t border-[#1C1B1B]/10 flex items-center justify-between text-xs gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelect?.(item);
            }}
            className="text-[11px] sm:text-xs font-semibold text-[#1C1B1B] hover:text-[#E05A2B] flex items-center gap-1 sm:gap-1.5 cursor-pointer transition-colors group frosted-glass-sub px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-[6px]"
          >
            <Icon name="visibility" size={14} className="text-[#71717A] group-hover:text-[#E05A2B] transition-colors" />
            <span>{lang === 'mr' ? 'फोटो पहा' : 'View full'}</span>
          </button>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-[11px] sm:text-xs font-bold text-[#C84B1F] hover:underline flex items-center gap-1 shrink-0"
          >
            <span>{lang === 'mr' ? 'ऑर्डर चौकशी' : 'Order similar'}</span>
            <Icon name="arrow_forward" size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const { t, lang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalItem, setActiveModalItem] = useState(null);
  const scrollTrackRef = useRef(null);
  const containerRef = useRef(null);
  const tabRefs = useRef({});
  const [pillStyle, setPillStyle] = useState({ left: 0, top: 0, width: 0, height: 0, opacity: 0 });

  useDocumentSEO({
    title: lang === 'mr'
      ? "कस्टम बॅजेस, गिफ्ट्स व प्रिंटिंग कामे गॅलरी | SP Impression Hub"
      : "Custom Badges, Gifts & Printing Work Gallery | SP Impression Hub",
    description: lang === 'mr'
      ? "कोपरगाव वर्कशॉपमधील प्रत्यक्ष उत्पादनांचे फोटो: सानुकूल पिन बॅजेस, ॲक्रेलिक कीचेन्स, सिरॅमिक फोटो मग, ओळखपत्रे आणि व्यावसायिक प्रिंटिंगचे नमुने."
      : "Explore real completed printing work in Kopargaon: 44mm & 58mm custom button badges, double-sided acrylic keychains, photo mugs, PVC cards, and stationery.",
    canonical: "https://spimpressionhub.com/gallery",
    ogImage: "https://spimpressionhub.com/images/keychain.webp",
    schemas: [
      {
        "@type": "BreadcrumbList",
        "@id": "https://spimpressionhub.com/gallery#breadcrumbs",
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
            "name": "Work Gallery & Portfolio",
            "item": "https://spimpressionhub.com/gallery"
          }
        ]
      }
    ]
  });

  const updatePillPosition = () => {
    const activeEl = tabRefs.current[selectedCategory];
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
    const activeEl = tabRefs.current[selectedCategory];
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
  }, [selectedCategory, lang]);

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
  }, [selectedCategory, lang]);

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => {
      if (selectedCategory === 'badges') return item.category === 'badges';
      if (selectedCategory === 'gifts') return item.category === 'gifts';
      if (selectedCategory === 'printing') return item.category === 'printing';
      if (selectedCategory === 'wedding') return item.category === 'badges' || item.category === 'gifts';
      if (selectedCategory === 'corporate') return item.category === 'corporate';
      if (selectedCategory === 'csc') return item.category === 'csc';
      return true;
    });

  const handleFilterClick = (catId) => {
    setSelectedCategory(catId);
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setTimeout(() => {
        const activeEl = tabRefs.current[catId];
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

  const handleNextItem = () => {
    if (!activeModalItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === activeModalItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveModalItem(filteredItems[nextIndex]);
  };

  const handlePrevItem = () => {
    if (!activeModalItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === activeModalItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveModalItem(filteredItems[prevIndex]);
  };

  return (
    <div className="relative overflow-hidden bg-[#FAF8F5] space-y-0">
      {/* Subtle Background Pattern & Ambient Tones for Entire Page Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(#D6CEBF_1.25px,transparent_1.25px)] [background-size:24px_24px] opacity-75 pointer-events-none" />
      <div className="pointer-events-none absolute top-1/4 right-10 w-[320px] sm:w-[550px] h-[320px] sm:h-[550px] bg-[#E05A2B]/12 rounded-full blur-[70px]" />
      <div className="pointer-events-none absolute top-2/3 -left-20 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#0284C7]/10 rounded-full blur-[70px]" />

      {/* 1. HERO & IN-PLACE FILTER BAR */}
      <section className="text-center max-w-5xl mx-auto pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 md:pb-10 px-3.5 sm:px-4 relative z-10" id="gallery">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 mb-2.5 sm:mb-3 rounded-[4px] bg-surface-container-high border border-outline-variant/30 text-[11px] sm:text-xs font-semibold text-on-surface-variant">
          <Icon name="palette" size={14} className="text-secondary-container" />
          <span className="font-label-caps uppercase tracking-wider">
            {t('galleryHeroTag')}
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-primary font-serif mb-2.5 sm:mb-3 leading-tight">
          {t('galleryHeroTitle')}
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          {t('galleryHeroDesc')}
        </p>

        {/* Responsive In-Place Category Filter Bar */}
        <div className="relative mt-6 sm:mt-8 max-w-full mx-auto">
          <div className="relative flex items-center justify-center max-w-full">
            {/* Horizontally scrollable on mobile (< md), cleanly centered without scroll on tablet & laptop (>= md) */}
            <div
              ref={scrollTrackRef}
              className="overflow-x-auto lg:overflow-visible no-scrollbar scroll-smooth py-1 px-4 sm:px-6 md:px-0 max-w-full w-full md:w-auto flex justify-start md:justify-center"
            >
              <div
                ref={containerRef}
                className="relative inline-flex items-center flex-nowrap w-max shrink-0 p-1 bg-surface-container-low rounded-[10px] md:rounded-[8px] border border-outline-variant/50 gap-0.5 sm:gap-0.5 md:gap-0.5 lg:gap-1 shadow-xs"
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

                {galleryCategories.map((cat) => {
                  const isSelected = selectedCategory === cat.id;
                  const label = lang === 'mr' ? cat.labelMr : cat.labelEn;

                  return (
                    <button
                      key={cat.id}
                      ref={(el) => (tabRefs.current[cat.id] = el)}
                      type="button"
                      onClick={() => handleFilterClick(cat.id)}
                      className={`relative z-10 px-2.5 sm:px-2.5 md:px-2 lg:px-3.5 py-1.5 sm:py-1.5 md:py-1.5 lg:py-2 rounded-[7px] md:rounded-[6px] text-xs sm:text-[11px] md:text-[11px] lg:text-[13px] font-semibold whitespace-nowrap transition-colors duration-200 cursor-pointer flex items-center gap-1 sm:gap-1 lg:gap-1.5 shrink-0 select-none ${isSelected
                          ? 'text-white'
                          : 'text-on-surface-variant hover:text-primary'
                        }`}
                    >
                      {cat.icon && (
                        <Icon
                          name={cat.icon}
                          size={13}
                          className={`transition-colors shrink-0 ${isSelected ? 'text-[#FFDBCE]' : 'text-on-surface-variant/70'}`}
                        />
                      )}
                      <span>{label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. AUTHENTIC GALLERY GRID */}
      <main className="pb-14 sm:pb-20 pt-2 sm:pt-4 relative z-10">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-4 md:px-6">
          {selectedCategory === 'all' ? (
            <div className="space-y-4 sm:space-y-6">
              {/* Row 1: 2 large asymmetric cards */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
                <div className="lg:col-span-7">
                  <GalleryItemCard item={galleryItems[0]} isLarge={true} onSelect={setActiveModalItem} />
                </div>
                <div className="lg:col-span-5">
                  <GalleryItemCard item={galleryItems[1]} isLarge={true} onSelect={setActiveModalItem} />
                </div>
              </div>

              {/* Bottom 6 cards in 2-column grid (2 cards per row) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {galleryItems.slice(2, 8).map((item) => (
                  <GalleryItemCard key={item.id} item={item} onSelect={setActiveModalItem} />
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {filteredItems.map((item) => (
                <GalleryItemCard key={item.id} item={item} onSelect={setActiveModalItem} />
              ))}
            </div>
          )}
        </div>
      </main>

      {/* 3. CREATED FOR EVERY MILESTONE & OCCASION STRIP */}
      <section className="py-10 sm:py-12 md:py-16 bg-[#FBF8F4] border-t border-b border-[#E7E2D8] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#D6CEBF_1.25px,transparent_1.25px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
        <div className="pointer-events-none absolute top-1/2 left-1/4 w-[300px] sm:w-[400px] h-[250px] sm:h-[300px] bg-[#E05A2B]/10 rounded-full blur-[60px]" />
        <div className="max-w-7xl mx-auto px-3.5 sm:px-4 md:px-6 relative z-10">
          <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
            <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold text-[#1C1B1B] ${lang === 'mr' ? 'font-devanagari' : 'font-serif'}`}>
              {lang === 'mr' ? 'प्रत्येक क्षण आणि प्रसंगासाठी निर्मित' : 'Created for every milestone & occasion'}
            </h3>
            <p className="text-[11px] sm:text-xs md:text-sm text-[#525252] mt-1">
              {lang === 'mr'
                ? 'कौटुंबिक उत्सवांपासून ते कोपरगाव आणि महाराष्ट्रातील सार्वजनिक समारंभांपर्यंत.'
                : 'From family celebrations to municipal public ceremonies across Kopargaon and Maharashtra.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
            <div className="frosted-glass-card card-light-sweep p-4 sm:p-5 text-center">
              <div className="w-9 h-9 sm:w-10 sm:h-10 mx-auto rounded-full bg-[#FDF2EC] text-[#C84B1F] flex items-center justify-center mb-2.5 sm:mb-3">
                <Icon name="cake" size={18} />
              </div>
              <h4 className={`text-xs sm:text-sm font-bold text-[#1C1B1B] ${lang === 'mr' ? 'font-devanagari' : 'font-serif'}`}>
                {lang === 'mr' ? 'वाढदिवस आणि पार्ट्या' : 'Birthdays & parties'}
              </h4>
              <p className="text-[11px] sm:text-xs text-[#71717A] mt-0.5">
                {lang === 'mr' ? 'बॅजेस, फोटो मग आणि प्रॉप्स' : 'Badges, photo mugs & props'}
              </p>
            </div>

            <div className="frosted-glass-card card-light-sweep p-4 sm:p-5 text-center">
              <div className="w-9 h-9 sm:w-10 sm:h-10 mx-auto rounded-full bg-[#FDF2EC] text-[#C84B1F] flex items-center justify-center mb-2.5 sm:mb-3">
                <Icon name="favorite" size={18} />
              </div>
              <h4 className={`text-xs sm:text-sm font-bold text-[#1C1B1B] ${lang === 'mr' ? 'font-devanagari' : 'font-serif'}`}>
                {lang === 'mr' ? 'लग्नसोहळे आणि हळदी' : 'Weddings & haldi'}
              </h4>
              <p className="text-[11px] sm:text-xs text-[#71717A] mt-0.5">
                {lang === 'mr' ? 'नवरदेव/नवरी टीम बॅजेस आणि गिफ्ट्स' : 'Bride/groom squad badges & gifts'}
              </p>
            </div>

            <div className="frosted-glass-card card-light-sweep p-4 sm:p-5 text-center">
              <div className="w-9 h-9 sm:w-10 sm:h-10 mx-auto rounded-full bg-[#FDF2EC] text-[#C84B1F] flex items-center justify-center mb-2.5 sm:mb-3">
                <Icon name="school" size={18} />
              </div>
              <h4 className={`text-xs sm:text-sm font-bold text-[#1C1B1B] ${lang === 'mr' ? 'font-devanagari' : 'font-serif'}`}>
                {lang === 'mr' ? 'कॉलेज आणि शाळा' : 'Colleges & schools'}
              </h4>
              <p className="text-[11px] sm:text-xs text-[#71717A] mt-0.5">
                {lang === 'mr' ? 'PVC विद्यार्थी ओळखपत्रे व टी-शर्ट्स' : 'PVC student IDs & sports tees'}
              </p>
            </div>

            <div className="frosted-glass-card card-light-sweep p-4 sm:p-5 text-center">
              <div className="w-9 h-9 sm:w-10 sm:h-10 mx-auto rounded-full bg-[#FDF2EC] text-[#C84B1F] flex items-center justify-center mb-2.5 sm:mb-3">
                <Icon name="check_circle" size={18} />
              </div>
              <h4 className={`text-xs sm:text-sm font-bold text-[#1C1B1B] ${lang === 'mr' ? 'font-devanagari' : 'font-serif'}`}>
                {lang === 'mr' ? 'निवडणुका आणि रॅली' : 'Elections & rallies'}
              </h4>
              <p className="text-[11px] sm:text-xs text-[#71717A] mt-0.5">
                {lang === 'mr' ? 'उमेदवार बॅजेस आणि बॅनर्स' : 'Candidate lapel pins & banners'}
              </p>
            </div>

            <div className="frosted-glass-card card-light-sweep p-4 sm:p-5 text-center sm:col-span-2 lg:col-span-1">
              <div className="w-9 h-9 sm:w-10 sm:h-10 mx-auto rounded-full bg-[#FDF2EC] text-[#C84B1F] flex items-center justify-center mb-2.5 sm:mb-3">
                <Icon name="description" size={18} />
              </div>
              <h4 className={`text-xs sm:text-sm font-bold text-[#1C1B1B] ${lang === 'mr' ? 'font-devanagari' : 'font-serif'}`}>
                {lang === 'mr' ? 'शासकीय कागदपत्रे' : 'Govt documentation'}
              </h4>
              <p className="text-[11px] sm:text-xs text-[#71717A] mt-0.5">
                {lang === 'mr' ? 'पॅन, ७/१२ व ऑनलाइन ई-फायलिंग' : 'PAN, 7/12 & online e-filing'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SPLIT HELPDESK & CONTACT DETAILS */}
      <section className="py-10 sm:py-14 md:py-18 bg-[#FAF8F5] relative overflow-hidden" id="contact">
        <div className="absolute inset-0 bg-[radial-gradient(#D6CEBF_1.25px,transparent_1.25px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
        <div className="pointer-events-none absolute top-1/3 right-10 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-[#E05A2B]/10 rounded-full blur-[65px]" />
        <div className="max-w-7xl mx-auto px-3.5 sm:px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start text-left">

            {/* Left Column: Direct Business Enquiry */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 bg-[#FFF6F0] text-[#C84B1F] border border-[#FAD8C7] pl-1.5 pr-3 py-1 rounded-full shadow-xs max-w-full">
                <span className="w-5 h-5 rounded-full bg-[#E05A2B] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Icon name="sparkles" size={11} className="text-white" />
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold font-label-caps uppercase tracking-wider truncate">
                  {lang === 'mr' ? 'तुमच्या प्रिंटिंग व शासकीय गरजांसाठी सदैव तत्पर' : 'Here to help your print & civic needs'}
                </span>
              </div>

              <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold text-[#1C1B1B] leading-tight ${lang === 'mr' ? 'font-devanagari' : 'font-serif'}`}>
                {lang === 'mr'
                  ? 'काही प्रिंट करायचे आहे किंवा ऑनलाइन फॉर्म भरायचा आहे? आम्ही मदतीसाठी तयार आहोत.'
                  : "Need something printed or an online form filed? We're ready to help."}
              </h2>

              <p className="text-xs sm:text-sm text-[#525252] leading-relaxed">
                {lang === 'mr'
                  ? 'तुमच्याकडे सानुकूल फोटो गिफ्टची कल्पना असो, कार्यक्रमासाठी तातडीने बॅजेस हवे असोत किंवा शासकीय प्रमाणपत्रांसाठी मार्गदर्शन हवे असो — थेट WhatsApp करा किंवा कोपरगावमधील आमच्या स्टुडिओला भेट द्या.'
                  : 'Whether you have a custom photo gift idea, need an urgent batch of event badges, or want step-by-step guidance on government certificate e-filing — drop us a WhatsApp message or walk directly into our studio in Kopargaon.'}
              </p>

              {/* Fast WhatsApp Helpdesk Card */}
              <div className="p-3.5 sm:p-4 frosted-glass-card flex items-center gap-3 sm:gap-3.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-[6px] bg-[#E05A2B] text-white flex items-center justify-center shrink-0">
                  <Icon name="whatsapp" size={18} />
                </div>
                <div>
                  <h4 className={`text-xs sm:text-sm font-bold text-[#1C1B1B] ${lang === 'mr' ? 'font-devanagari' : ''}`}>
                    {lang === 'mr' ? 'त्वरित WhatsApp मदत केंद्र' : 'Instant WhatsApp helpdesk'}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-[#71717A] mt-0.5">
                    {lang === 'mr'
                      ? 'सामान्यतः १५ मिनिटांत उत्तर · फोटो, डिझाईन किंवा कागदपत्रांची माहिती पाठवा'
                      : 'Typically replies within 15 minutes · send your photo, design, or doc query'}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1">
                <a
                  className="bg-[#E05A2B] hover:bg-[#C84B1F] text-white px-4 sm:px-5 py-2.5 rounded-[6px] text-xs sm:text-sm font-semibold transition-all active:scale-95 shadow-xs flex items-center justify-center gap-2"
                  href="https://wa.me/918080577460"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon name="whatsapp" size={16} />
                  <span>{lang === 'mr' ? 'WhatsApp: +91 80805 77460' : 'WhatsApp: +91 80805 77460'}</span>
                </a>
                <a
                  className="border border-[#1C1B1B] bg-white hover:bg-[#FAF8F5] text-[#1C1B1B] px-4 sm:px-5 py-2.5 rounded-[6px] text-xs sm:text-sm font-semibold transition-all flex items-center justify-center"
                  href="tel:+918080577460"
                >
                  <span>{lang === 'mr' ? 'कॉल करा' : 'Call workshop'}</span>
                </a>
              </div>

              {/* Team Quote */}
              <div className="border-l-2 border-[#E05A2B] pl-3.5 sm:pl-4 py-1 text-xs text-[#525252] italic leading-relaxed">
                <p>
                  {lang === 'mr'
                    ? '"कोपरगावातील प्रत्येक ग्राहकाला वैयक्तिक लक्ष दिले जाते — मग तो एक कस्टमाइज्ड कॉफी मग असो किंवा ५०० शाळांची ओळखपत्रे, आम्ही अचूकता आणि वेळेत डिलिव्हरीची खात्री देतो."'
                    : '"Every client query in Kopargaon gets personal attention — whether it\'s one customised coffee mug or 500 school ID cards, we make sure it\'s accurate and delivered on time."'}
                </p>
                <p className="text-[#1C1B1B] font-semibold not-italic mt-1.5">
                  {lang === 'mr' ? '— कृपा आणि एसपी इम्प्रेशन हब टीम, कोपरगाव' : '— Kripa & SP Impression Hub team, Kopargaon'}
                </p>
              </div>
            </div>

            {/* Right Column: Contact Details Card */}
            <div className="lg:col-span-6 frosted-glass-card p-5 sm:p-6 md:p-8 space-y-3.5 sm:space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#F0EBE1] gap-2">
                <span className="text-[11px] sm:text-xs font-bold text-[#1C1B1B] uppercase tracking-wider">
                  {lang === 'mr' ? 'कोपरगाव केंद्र' : 'Kopargaon centre'}
                </span>
                <span className="bg-[#F5F2EC] text-[#525252] px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-medium shrink-0">
                  {lang === 'mr' ? 'सकाळी ९:३० ते रात्री ८:३०' : 'Open 9:30 AM – 8:30 PM'}
                </span>
              </div>

              <h3 className={`text-lg sm:text-xl font-bold text-[#1C1B1B] ${lang === 'mr' ? 'font-devanagari' : 'font-serif'}`}>
                {lang === 'mr' ? 'संपर्क आणि स्टुडिओ माहिती' : 'Contact & studio details'}
              </h3>

              <div className="divide-y divide-[#F0EBE1] text-xs">
                {/* Phone */}
                <div className="pt-1 pb-3 sm:pb-4 flex items-start gap-2.5 sm:gap-3">
                  <div className="w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-[4px] bg-[#FDF2EC] text-[#C84B1F] flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name="call" size={15} />
                  </div>
                  <div>
                    <span className="text-[#71717A] text-[10px] sm:text-[11px] font-medium block">
                      {lang === 'mr' ? 'थेट फोन आणि WhatsApp' : 'Direct line & WhatsApp'}
                    </span>
                    <a
                      className="text-xs sm:text-sm font-bold text-[#1C1B1B] hover:text-[#C84B1F] transition-colors block mt-0.5"
                      href="tel:+918080577460"
                    >
                      +91 80805 77460
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="py-3 sm:py-4 flex items-start gap-2.5 sm:gap-3">
                  <div className="w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-[4px] bg-[#FDF2EC] text-[#C84B1F] flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name="mail" size={15} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[#71717A] text-[10px] sm:text-[11px] font-medium block">
                      {lang === 'mr' ? 'डिझाईन व ऑर्डर ईमेल' : 'Artwork submissions & orders'}
                    </span>
                    <a
                      className="text-[11px] sm:text-xs font-semibold text-[#1C1B1B] hover:text-[#C84B1F] transition-colors block mt-0.5 truncate"
                      href="mailto:spimpressionhub@gmail.com"
                    >
                      spimpressionhub@gmail.com
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="py-3 sm:py-4 flex items-start gap-2.5 sm:gap-3">
                  <div className="w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-[4px] bg-[#FDF2EC] text-[#C84B1F] flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name="instagram" size={15} />
                  </div>
                  <div>
                    <span className="text-[#71717A] text-[10px] sm:text-[11px] font-medium block">
                      {lang === 'mr' ? 'इन्स्टाग्राम गॅलरी' : 'Instagram gallery'}
                    </span>
                    <a
                      className="text-xs font-semibold text-[#1C1B1B] hover:text-[#C84B1F] transition-colors block mt-0.5"
                      href="https://instagram.com/sp_impression_hub"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      @sp_impression_hub
                    </a>
                  </div>
                </div>

                {/* Workshop Address */}
                <div className="pt-3 sm:pt-4 pb-2 sm:pb-3 flex items-start gap-2.5 sm:gap-3">
                  <div className="w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-[4px] bg-[#FDF2EC] text-[#C84B1F] flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name="location_on" size={15} />
                  </div>
                  <div>
                    <span className="text-[#71717A] text-[10px] sm:text-[11px] font-medium block">
                      {lang === 'mr' ? 'कार्यशाळा व CSC केंद्र पत्ता' : 'Workshop & CSC centre location'}
                    </span>
                    <p className={`text-[11px] sm:text-xs font-semibold text-[#1C1B1B] mt-0.5 leading-snug ${lang === 'mr' ? 'font-devanagari' : ''}`}>
                      {lang === 'mr'
                        ? 'संजयनगर चौक, गौतम बँकेसमोर, धरणगाव रोड, कोपरगाव, महाराष्ट्र – ४२३६०१'
                        : 'Sanjay Nagar Chowk, Gautam Bank Samor, Dharangaon Road, Kopargaon, Maharashtra – 423601'}
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-[#71717A] mt-1">
                      {lang === 'mr'
                        ? 'लँडमार्क: गौतम बँकेसमोर · पार्किंग उपलब्ध · थेट सेवा'
                        : 'Landmark: opposite Gautam Bank · parking available · fast walk-in service'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Action Buttons */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-[#F0EBE1]">
                <a
                  className="bg-[#E05A2B] hover:bg-[#C84B1F] text-white py-2 px-2 sm:px-3 rounded-[6px] text-[11px] sm:text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1 active:scale-95"
                  href="https://wa.me/918080577460"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{lang === 'mr' ? 'WhatsApp' : 'WhatsApp'}</span>
                </a>
                <a
                  className="border border-[#E7E2D8] bg-white hover:bg-[#FAF8F5] text-[#1C1B1B] py-2 px-2 sm:px-3 rounded-[6px] text-[11px] sm:text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1 active:scale-95"
                  href="tel:+918080577460"
                >
                  <span>{lang === 'mr' ? 'कॉल करा' : 'Call now'}</span>
                </a>
                <a
                  className="border border-[#E7E2D8] bg-white hover:bg-[#FAF8F5] text-[#1C1B1B] py-2 px-2 sm:px-3 rounded-[6px] text-[11px] sm:text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1 active:scale-95"
                  href="https://maps.google.com/?q=Sanjay+Nagar+Chowk+Kopargaon"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>{lang === 'mr' ? 'नकाशा' : 'Directions'}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. ACCESSIBLE LIGHTBOX MODAL */}
      {activeModalItem && (
        <LightboxModal
          item={activeModalItem}
          items={filteredItems}
          onClose={() => setActiveModalItem(null)}
          onNext={handleNextItem}
          onPrev={handlePrevItem}
        />
      )}
    </div>
  );
}
