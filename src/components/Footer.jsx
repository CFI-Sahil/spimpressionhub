import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo/Logo';
import Icon from './Icon';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t, lang } = useLanguage();

  return (
    <footer className="bg-[#0D192E] text-white w-full border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-4 md:px-6 py-10 sm:py-12 md:py-14 space-y-8 sm:space-y-10 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-8">
          {/* Brand Narrative & Identity */}
          <div className="md:col-span-1 lg:col-span-4 space-y-3">
            <div className="flex items-center gap-3">
              <Logo variant="full" inverted={true} className="h-10 sm:h-11 w-auto" />
            </div>
            <p className="font-devanagari text-white/90 text-xs sm:text-sm leading-snug">
              फोटो गिफ्ट्स व प्रिंटिंग सेवा – तुमच्या कल्पना, आमची छपाई!
            </p>
            <p className="text-xs text-on-tertiary-container leading-relaxed">
              {t('footerAboutText')}
            </p>
            <div className="pt-1">
              <span className="inline-block px-2.5 py-1 rounded-[4px] bg-white/10 text-white text-[10px] sm:text-[11px] font-devanagari border border-white/15">
                {t('footerGrahakSeva')}
              </span>
            </div>
          </div>

          {/* Links Column 1: Quick Navigation */}
          <div className="md:col-span-1 lg:col-span-2 space-y-2 sm:space-y-2.5">
            <h4 className="text-xs sm:text-sm font-bold text-on-tertiary font-serif">
              {t('quickLinks')}
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link to="/" className="text-on-tertiary-container hover:text-on-tertiary transition-colors">
                  {t('navHome')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-on-tertiary-container hover:text-on-tertiary transition-colors">
                  {t('navServices')}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-on-tertiary-container hover:text-on-tertiary transition-colors">
                  {t('navGallery')}
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-on-tertiary-container hover:text-on-tertiary transition-colors">
                  {t('navContact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Studio Specialties */}
          <div className="md:col-span-1 lg:col-span-3 space-y-2 sm:space-y-2.5">
            <h4 className="text-xs sm:text-sm font-bold text-on-tertiary font-serif">
              {t('printProducts')}
            </h4>
            <ul className="space-y-1.5 text-xs text-on-tertiary-container">
              <li>{lang === 'mr' ? 'कस्टम पिन व मॅग्नेट बॅजेस' : 'Custom Pinback & Magnet Badges'}</li>
              <li>{lang === 'mr' ? 'सिरॅमिक व मॅजिक फोटो मग' : 'Ceramic & Magic Photo Mugs'}</li>
              <li>{lang === 'mr' ? 'डबल-साइडेड ॲक्रेलिक कीचेन्स' : 'Double-Sided Acrylic Keychains'}</li>
              <li>{lang === 'mr' ? 'कस्टमाइज्ड इव्हेंट टी-शर्ट्स' : 'Customized Event T-Shirts'}</li>
              <li>{lang === 'mr' ? 'लॅमिनेटेड फोटो फ्रेम्स व कोलाज' : 'Laminated Photo Keepsake Frames'}</li>
              <li>{lang === 'mr' ? 'ओळखपत्रे (ID Cards) आणि लेस' : 'Corporate ID Cards & Lanyards'}</li>
            </ul>
          </div>

          {/* Column 3: Contact Details & Location */}
          <div className="md:col-span-1 lg:col-span-3 space-y-2 sm:space-y-2.5" id="about">
            <h4 className="text-xs sm:text-sm font-bold text-on-tertiary font-serif">
              {t('visitWorkshop')}
            </h4>
            <div className="space-y-2 text-xs text-on-tertiary-container">
              <div className="flex items-start gap-2">
                <Icon name="location_on" size={15} className="text-secondary-fixed-dim shrink-0 mt-0.5" />
                <span className="font-devanagari text-white/90 leading-snug">
                  {t('addressFullMr')}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="call" size={15} className="text-secondary-fixed-dim shrink-0" />
                <a className="hover:text-white transition-colors" href="tel:+918080577460">
                  +91 8080577460
                </a>
              </div>
              <div className="flex items-center gap-2 min-w-0">
                <Icon name="mail" size={15} className="text-secondary-fixed-dim shrink-0" />
                <a className="hover:text-white transition-colors" href="mailto:spimpressionhub@gmail.com">
                  spimpressionhub@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="instagram" size={15} className="text-secondary-fixed-dim shrink-0" />
                <a
                  className="hover:text-white transition-colors"
                  href="https://instagram.com/sp_impression_hub"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  @sp_impression_hub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Copyright Anchor */}
        <div className="pt-4 sm:pt-6 border-t border-[#1E293B] flex flex-col sm:flex-row justify-between items-center text-[11px] sm:text-xs text-slate-400 gap-3 text-center sm:text-left">
          <p>© {new Date().getFullYear()} SP IMPRESSION HUB &amp; Kripa Online Services, Kopargaon. {t('rightsReserved')}</p>
          <div className="flex items-center space-x-2.5 sm:space-x-3 text-[10px] sm:text-[11px] font-label-caps uppercase">
            <span className="text-white/60">{t('handcraftedTag')}</span>
            <span className="text-white/30">•</span>
            <span className="text-white/60">{t('cscVerifiedTag')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
