
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
import OfficesPage from './pages/OfficesPage';
import OfficeDetailPage from './pages/OfficeDetailPage';
import ReportsPage from './pages/ReportsPage';
import ArticlesPage from './pages/ArticlesPage';
import PodcastsPage from './pages/PodcastsPage';
import CareersPage from './pages/CareersPage';
import CaseStudiesListingPage from './pages/CaseStudiesListingPage';
import CaseStudyDetailPage from './pages/CaseStudyDetailPage';
import ServicesOverviewPage from './pages/ServicesOverviewPage';
import AIEngineeringPage from './pages/AIEngineeringPage';
import AssurancePage from './pages/AssurancePage';
import AuditPage from './pages/AuditPage';
import BusinessProcessSolutionsPage from './pages/BusinessProcessSolutionsPage';
import CyberPage from './pages/CyberPage';

type Page = 'home' | 'legal' | 'purpose-values' | 'contact-us' | 'rfp' | 'about' | 'insights' | 'insight-post' | 'offices' | 'office-detail' | 'reports' | 'articles' | 'podcasts' | 'careers' | 'case-studies' | 'case-study-detail' | 'services-overview' | 'ai-engineering' | 'assurance' | 'audit' | 'business-process-solutions' | 'cyber';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedOfficeId, setSelectedOfficeId] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const navigateTo = (page: Page, params?: { id?: string }) => {
    // Force immediate scroll reset for clean redirection
    window.scrollTo(0, 0);
    if (params?.id) {
      setSelectedOfficeId(params.id);
      window.location.hash = `${page}?id=${params.id}`;
    } else {
      window.location.hash = page === 'home' ? '' : page;
    }
    setCurrentPage(page);
  };

  useEffect(() => {
    const handlePopState = () => {
      // Ensure we always scroll to top on hash change (redirect feel)
      window.scrollTo(0, 0);
      
      const hash = window.location.hash.replace('#', '');
      const [path, query] = hash.split('?');
      const params = new URLSearchParams(query);
      const officeId = params.get('id');

      const validPages: Page[] = ['home', 'legal', 'purpose-values', 'contact-us', 'rfp', 'about', 'insights', 'insight-post', 'offices', 'office-detail', 'reports', 'articles', 'podcasts', 'careers', 'case-studies', 'case-study-detail', 'services-overview', 'ai-engineering', 'assurance', 'audit', 'business-process-solutions', 'cyber'];
      
      if (validPages.includes(path as Page)) {
        if (path === 'office-detail' && officeId) {
          setSelectedOfficeId(officeId);
        }
        setCurrentPage(path as Page);
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
        onLinkClick={(path) => {
          if (path === 'offices') navigateTo('offices');
          else if (path === 'case-studies') navigateTo('case-studies');
          else if (path === 'services-overview') navigateTo('services-overview');
          else if (path === 'ai-engineering') navigateTo('ai-engineering');
          else if (path === 'assurance') navigateTo('assurance');
          else if (path === 'audit') navigateTo('audit');
          else if (path === 'business-process-solutions') navigateTo('business-process-solutions');
          else if (path === 'cyber') navigateTo('cyber');
          else if (path === 'Reports') navigateTo('reports');
          else if (path === 'Articles') navigateTo('articles');
          else if (path === 'Podcasts') navigateTo('podcasts');
          else if (path === 'Careers') navigateTo('careers');
          else if (path === 'rfp') navigateTo('rfp');
          else if (path === 'contact-us') navigateTo('contact-us');
          else navigateTo(path as Page);
        }}
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
                <ServicesSection onNavigateToContact={() => navigateTo('contact-us')} />
                <CareerSlideshow onNavigateToCareers={() => navigateTo('careers')} />
              </div>
            </main>
          </motion.div>
        ) : (
          <motion.main
            key={currentPage === 'office-detail' ? `office-${selectedOfficeId}` : currentPage}
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
            {currentPage === 'offices' && <OfficesPage onOfficeSelect={(id) => navigateTo('office-detail', { id })} />}
            {currentPage === 'office-detail' && <OfficeDetailPage officeId={selectedOfficeId} onBack={() => navigateTo('offices')} />}
            {currentPage === 'reports' && <ReportsPage />}
            {currentPage === 'articles' && <ArticlesPage />}
            {currentPage === 'podcasts' && <PodcastsPage />}
            {currentPage === 'careers' && <CareersPage />}
            {currentPage === 'case-studies' && <CaseStudiesListingPage onCaseClick={() => navigateTo('case-study-detail')} />}
            {currentPage === 'case-study-detail' && <CaseStudyDetailPage onBack={() => navigateTo('case-studies')} />}
            {currentPage === 'services-overview' && <ServicesOverviewPage onServiceClick={(path) => navigateTo(path as Page)} />}
            {currentPage === 'ai-engineering' && <AIEngineeringPage />}
            {currentPage === 'assurance' && <AssurancePage />}
            {currentPage === 'audit' && <AuditPage />}
            {currentPage === 'business-process-solutions' && <BusinessProcessSolutionsPage onCaseClick={() => navigateTo('case-study-detail')} />}
            {currentPage === 'cyber' && <CyberPage onCaseClick={() => navigateTo('case-study-detail')} />}
          </motion.main>
        )}
      </AnimatePresence>

      <Footer 
        onLegalClick={() => navigateTo('legal')} 
        onHomeClick={() => navigateTo('home')}
        onContactClick={() => navigateTo('contact-us')}
        onRFPClick={() => navigateTo('rfp')}
        onOfficesClick={() => navigateTo('offices')}
      />
      
      <AIAssistant />
    </div>
  );
};

export default App;
