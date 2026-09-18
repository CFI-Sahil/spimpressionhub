import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';
import { initSmoothScroll, destroySmoothScroll, scrollToTop } from './animations/lenis';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Only scroll to top on actual page route change, without hash
    if (!window.location.hash) {
      scrollToTop(true);
    }
  }, [pathname]);

  return null;
}

export default function App() {
  useEffect(() => {
    const lenis = initSmoothScroll();
    return () => {
      destroySmoothScroll();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background text-on-surface">
      <Preloader />
      <ScrollToTop />
      <Navbar />

      <main className="flex-1">
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            {/* Custom 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </main>

      <Footer />
    </div>
  );
}
