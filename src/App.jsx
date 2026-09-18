import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import PageTransition from './components/PageTransition';
import { initSmoothScroll, destroySmoothScroll, scrollToTop } from './animations/lenis';

const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const NotFound = lazy(() => import('./pages/NotFound'));

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
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
              {/* Custom 404 Not Found */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </PageTransition>
      </main>

      <Footer />
    </div>
  );
}
