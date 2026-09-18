import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo/Logo';
import LanguageSwitcher from './LanguageSwitcher';
import Icon from './Icon';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { t, lang } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuRendered, setMenuRendered] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const headerRef = useRef(null);

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const openMenu = () => {
    setMenuRendered(true);
    setMobileMenuOpen(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setMenuActive(true);
      });
    });
  };

  const closeMenu = () => {
    setMenuActive(false);
    setTimeout(() => {
      setMobileMenuOpen(false);
      setMenuRendered(false);
    }, 280);
  };

  const toggleMenu = () => {
    if (mobileMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  // Close menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        closeMenu();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { path: '/', label: t('navHome'), icon: 'home', desc: lang === 'mr' ? 'मुख्य पृष्ठ आणि माहिती' : 'Homepage & Highlights' },
    { path: '/services', label: t('navServices'), icon: 'services', desc: lang === 'mr' ? 'सर्व सेवा आणि दर' : 'All Services & Price List' },
    { path: '/gallery', label: t('navGallery'), icon: 'gallery', desc: lang === 'mr' ? 'कामाचे फोटो आणि नमुने' : 'Portfolio & Real Work' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    if (path === '/services') return location.pathname === '/services';
    if (path === '/gallery') return location.pathname === '/gallery';
    return false;
  };

  return (
    <>
      {/* Main Sticky Header */}
      <header
        ref={headerRef}
        className="bg-surface/95 backdrop-blur-md text-primary sticky top-0 z-50 border-b border-outline-variant/40 transition-all duration-200"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 flex justify-between items-center h-16 sm:h-18">
          {/* Brand Logo Anchor */}
          <Link to="/" className="flex items-center gap-2 transition-transform active:scale-[0.99] shrink-0">
            {/* Mobile (< sm): Logo icon only */}
            <div className="sm:hidden">
              <Logo variant="icon" className="h-8.5 w-8.5" />
            </div>
            {/* Tablet & Desktop (>= sm): Logo icon + Brand name */}
            <div className="hidden sm:block">
              <Logo variant="full" className="h-10 sm:h-11 w-auto" />
            </div>
          </Link>

          {/* Desktop Nav Links (Desktop >= lg) */}
          <nav className="hidden lg:flex items-center space-x-7 font-label-lg text-label-lg">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-1.5 transition-colors duration-200 group ${
                    active
                      ? 'text-primary font-bold'
                      : 'text-on-surface-variant hover:text-primary'
                  } ${lang === 'mr' ? 'font-devanagari' : ''}`}
                >
                  <span>{link.label}</span>
                  {/* Animated underline indicator */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] origin-left ${
                      active
                        ? 'scale-x-100 opacity-100'
                        : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Trailing Action Cluster */}
          <div className="flex items-center space-x-1.5 sm:space-x-3 shrink-0">
            {/* Bilingual Toggle Ribbon */}
            <LanguageSwitcher />

            {/* WhatsApp Us CTA - Desktop (>= lg) only */}
            <a
              className="hidden lg:inline-flex items-center gap-2 bg-secondary-container hover:bg-secondary text-white font-semibold px-4 py-2 rounded-[6px] font-label-lg text-label-lg shadow-xs transition-all active:scale-95"
              href="https://wa.me/918080577460?text=Hello%20SP%20Impression%20Hub%2C%20I%20have%20an%20enquiry"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon name="whatsapp" size={17} />
              <span>{t('whatsappUs')}</span>
            </a>

            {/* Animated Burger / Close Button (< lg) */}
            <button
              onClick={toggleMenu}
              className={`lg:hidden relative p-1.5 sm:p-2 rounded-[8px] text-primary transition-all duration-300 border ${
                mobileMenuOpen 
                  ? 'bg-surface-container border-primary/20 shadow-xs' 
                  : 'bg-surface hover:bg-surface-variant border-outline-variant/60'
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <div className="relative w-5 h-5 sm:w-5.5 sm:h-5.5 flex items-center justify-center">
                {/* Burger Icon */}
                <span
                  className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out"
                  style={{
                    transform: menuActive ? 'rotate(90deg) scale(0.6)' : 'rotate(0deg) scale(1)',
                    opacity: menuActive ? 0 : 1,
                  }}
                >
                  <Icon name="menu" size={20} />
                </span>
                {/* Close Icon */}
                <span
                  className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out"
                  style={{
                    transform: menuActive ? 'rotate(0deg) scale(1)' : 'rotate(-90deg) scale(0.6)',
                    opacity: menuActive ? 1 : 0,
                  }}
                >
                  <Icon name="close" size={20} />
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Absolute Overlay Dropdown directly underneath the navbar (z-50) */}
        {menuRendered && (
          <div
            className="lg:hidden absolute top-full left-0 right-0 w-full z-50 border-b border-outline-variant/60 bg-[#FAF8F5]/98 backdrop-blur-xl shadow-2xl transition-all duration-300 ease-out overflow-hidden"
            style={{
              maxHeight: menuActive ? '500px' : '0px',
              opacity: menuActive ? 1 : 0,
              transform: menuActive ? 'translateY(0)' : 'translateY(-10px)',
            }}
          >
            <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3.5 sm:py-4 space-y-3">
              {/* Nav Links */}
              <nav className="flex flex-col gap-1.5 sm:gap-2">
                {navLinks.map((link) => {
                  const active = isActive(link.path);
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={closeMenu}
                      className={`group flex items-center gap-3 sm:gap-3.5 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl transition-all duration-200 border ${
                        active
                          ? 'bg-white border-secondary shadow-xs'
                          : 'bg-white/80 hover:bg-white text-primary border-outline-variant/60 hover:border-outline-variant'
                      }`}
                    >
                      {/* Left Icon Badge */}
                      <span
                        className={`flex items-center justify-center w-8.5 h-8.5 sm:w-10 sm:h-10 rounded-lg transition-colors shrink-0 ${
                          active
                            ? 'bg-secondary text-white shadow-xs'
                            : 'bg-surface-container text-on-surface-variant group-hover:text-primary group-hover:bg-surface-container-high'
                        }`}
                      >
                        <Icon name={link.icon} size={18} />
                      </span>

                      {/* Label & Description */}
                      <div className="flex-1 min-w-0">
                        <div className={`font-semibold text-xs sm:text-sm leading-snug ${
                          active ? 'text-secondary font-bold' : 'text-primary'
                        } ${lang === 'mr' ? 'font-devanagari text-[14px] sm:text-[15px]' : ''}`}>
                          {link.label}
                        </div>
                        <div
                          className={`text-[10px] sm:text-[11px] truncate mt-0.5 ${
                            active ? 'text-secondary/80 font-medium' : 'text-on-surface-variant'
                          } ${lang === 'mr' ? 'font-devanagari' : ''}`}
                        >
                          {link.desc}
                        </div>
                      </div>

                      {/* Right Arrow Icon */}
                      <span
                        className={`flex items-center justify-center transition-all duration-200 shrink-0 ${
                          active
                            ? 'text-secondary translate-x-0.5'
                            : 'text-on-surface-variant/40 group-hover:text-primary group-hover:translate-x-1'
                        }`}
                      >
                        <Icon name="arrow_forward" size={16} />
                      </span>
                    </Link>
                  );
                })}
              </nav>

              {/* Action Buttons Cluster */}
              <div className="pt-2 border-t border-outline-variant/40 flex flex-col sm:flex-row gap-2">
                <a
                  className="flex-1 flex items-center justify-center gap-2 bg-secondary-container hover:bg-secondary text-white font-semibold px-4 py-2.5 rounded-xl text-xs sm:text-sm shadow-xs transition-all active:scale-[0.98]"
                  href="https://wa.me/918080577460?text=Hello%20SP%20Impression%20Hub%2C%20I%20have%20an%20enquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  <Icon name="whatsapp" size={16} />
                  <span>{t('whatsappUs')}</span>
                </a>
                <a
                  className="flex-1 flex items-center justify-center gap-2 border border-primary/30 text-primary hover:bg-primary/5 font-semibold px-4 py-2.5 rounded-xl text-xs sm:text-sm transition-all active:scale-[0.98]"
                  href="tel:+918080577460"
                  onClick={closeMenu}
                >
                  <Icon name="call" size={16} />
                  <span>{t('callWorkshop')}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop overlay below sticky header (z-40) — Click anywhere to close */}
      {menuRendered && (
        <div
          className="lg:hidden fixed inset-0 top-16 sm:top-18 z-40 bg-black/25 backdrop-blur-[2px] transition-opacity duration-300 ease-out"
          style={{ opacity: menuActive ? 1 : 0 }}
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}
