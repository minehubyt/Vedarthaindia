
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import RevealVideoSection from './components/RevealVideoSection';
import FeaturedContent from './components/FeaturedContent';
import ServicesSection from './components/ServicesSection';
import CareerSlideshow from './components/CareerSlideshow';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import LegalPage from './pages/LegalPage';
import PurposeValuesPage from './pages/PurposeValuesPage';
import ContactUsPage from './pages/ContactUsPage';
import RFPPage from './pages/RFPPage';
import AboutPage from './pages/AboutPage';
import InsightsPage from './pages/InsightsPage';
import InsightPostPage from './pages/InsightPostPage';

type Page = 'home' | 'legal' | 'purpose-values' | 'contact-us' | 'rfp' | 'about' | 'insights' | 'insight-post';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const navigateTo = (page: Page) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
  };

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.hash.replace('#', '') as Page;
      const validPages: Page[] = ['home', 'legal', 'purpose-values', 'contact-us', 'rfp', 'about', 'insights', 'insight-post'];
      if (validPages.includes(path)) {
        setCurrentPage(path);
      } else {
        setCurrentPage('home');
      }
    };

    handlePopState();
    window.addEventListener('hashchange', handlePopState);
    return () => window.removeEventListener('hashchange', handlePopState);
  }, []);

  if (!isReady) return <div className="bg-black h-screen w-screen" />;

  return (
    <div className="min-h-screen bg-white text-black selection:bg-[#86BC25] selection:text-black">
      <Header 
        onLogoClick={() => navigateTo('home')} 
        onLinkClick={(path) => navigateTo(path as Page)}
      />
      
      <AnimatePresence mode="wait">
        {currentPage === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <main className="relative">
              <div className="relative z-0">
                <Hero />
              </div>
              <div className="relative z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
                <RevealVideoSection />
                <FeaturedContent onNavigateToInsights={() => navigateTo('insights')} />
                <ServicesSection />
                <CareerSlideshow />
              </div>
            </main>
          </motion.div>
        ) : (
          <motion.main
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="relative z-[20] pt-0 min-h-[80vh] bg-white"
          >
            {currentPage === 'legal' && <LegalPage />}
            {currentPage === 'purpose-values' && <PurposeValuesPage />}
            {currentPage === 'contact-us' && <ContactUsPage />}
            {currentPage === 'rfp' && <RFPPage />}
            {currentPage === 'about' && <AboutPage />}
            {currentPage === 'insights' && <InsightsPage onArticleClick={() => navigateTo('insight-post')} />}
            {currentPage === 'insight-post' && <InsightPostPage onBack={() => navigateTo('insights')} />}
          </motion.main>
        )}
      </AnimatePresence>

      <Footer 
        onLegalClick={() => navigateTo('legal')} 
        onHomeClick={() => navigateTo('home')}
        onContactClick={() => navigateTo('contact-us')}
        onRFPClick={() => navigateTo('rfp')}
      />
      
      <AIAssistant />
    </div>
  );
};

export default App;
