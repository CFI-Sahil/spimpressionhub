import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

/**
 * Enterprise SEO hook for dynamic per-page metadata, OpenGraph, Twitter Cards,
 * self-referencing canonical URLs, and schema.org JSON-LD injections.
 */
export function useDocumentSEO({
  title,
  description,
  canonical,
  ogImage = 'https://spimpressionhub.com/images/badges.webp',
  ogType = 'website',
  noIndex = false,
  schemas = []
}) {
  const { lang } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    // 1. Page Title
    if (title) {
      document.title = title;
    }

    // 2. Meta description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }

    // 3. Canonical URL
    const canonicalUrl = canonical || `https://spimpressionhub.com${location.pathname === '/' ? '' : location.pathname}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // 4. OpenGraph Tags
    const setMetaProperty = (prop, value) => {
      if (!value) return;
      let el = document.querySelector(`meta[property="${prop}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', prop);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    setMetaProperty('og:title', title);
    setMetaProperty('og:description', description);
    setMetaProperty('og:url', canonicalUrl);
    setMetaProperty('og:image', ogImage);
    setMetaProperty('og:type', ogType);

    // 5. Twitter Card Tags
    const setMetaName = (name, value) => {
      if (!value) return;
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    setMetaName('twitter:title', title);
    setMetaName('twitter:description', description);
    setMetaName('twitter:image', ogImage);

    // 6. Robots Tag (e.g., noindex for 404 pages)
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (noIndex) {
      if (!metaRobots) {
        metaRobots = document.createElement('meta');
        metaRobots.name = 'robots';
        document.head.appendChild(metaRobots);
      }
      metaRobots.setAttribute('content', 'noindex, nofollow');
    } else {
      if (metaRobots) {
        metaRobots.setAttribute('content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
      }
    }

    // 7. Dynamic Schema.org JSON-LD injection
    const scriptId = 'dynamic-page-schema';
    let existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    if (schemas && schemas.length > 0) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': schemas
      });
      document.head.appendChild(script);
    }

    // 8. Document Language
    document.documentElement.lang = lang === 'mr' ? 'mr-IN' : 'en-IN';

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [title, description, canonical, ogImage, ogType, noIndex, schemas, lang, location.pathname]);
}
