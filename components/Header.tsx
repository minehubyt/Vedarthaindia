
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Globe, Menu, X, ChevronDown, ChevronRight, ArrowRight, FilePlus, Headphones } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface HeaderProps {
  onLogoClick?: () => void;
  onLinkClick?: (path: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick, onLinkClick }) => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [activeSectionIdx, setActiveSectionIdx] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen || activeTab) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen, activeTab]);

  const handleTabClick = (label: string) => {
    if (activeTab === label) {
      setActiveTab(null);
    } else {
      setActiveTab(label);
      setActiveSectionIdx(0);
    }
  };

  const handleMobileLinkClick = (path: string) => {
    setMobileMenuOpen(false);
    onLinkClick?.(path);
  };

  const currentNavData = NAV_ITEMS.find(item => item.label === activeTab);

  const resolvePath = (label: string) => {
    const map: Record<string, string> = {
      'Case studies': 'case-studies',
      'Overview': 'services-overview',
      'AI & Engineering': 'ai-engineering',
      'Assurance': 'assurance',
      'Audit': 'audit',
      'Audit & Assurance': 'audit-assurance',
      'Tax & Regulatory': 'tax-regulatory',
      'Risk Advisory': 'risk-advisory',
      'Deal Advisory & Transactions': 'deal-advisory',
      'Deal Advisory': 'deal-advisory',
      'Consulting & Strategy': 'consulting-strategy',
      'Legal & Governance': 'legal-governance',
      'Forensic & Dispute': 'forensic-dispute',
      'ESG & Sustainability': 'esg-sustainability',
      'Business Process Solutions': 'business-process-solutions',
      'Cyber': 'cyber',
      'Reports': 'reports',
      'Articles': 'articles',
      'Podcasts': 'podcasts',
      'Contact Us': 'contact-us',
      'Submit RFP': 'rfp',
      'Global Office Directory': 'offices',
      'What we believe in': 'purpose-values',
      'Careers': 'careers',
      'About Us': 'about',
      'Who we are': 'about',
      'Our Thinking': 'insights'
    };
    return map[label] || 'home';
  };

  return (
    <div className="relative z-[250]">
      <motion.header 
        animate={{ 
          backgroundColor: scrolled || activeTab ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 1)'
        }}
        className={`fixed top-0 left-0 right-0 z-[250] border-b transition-all duration-300 ${scrolled || activeTab ? 'border-white/10 shadow-lg' : 'border-transparent'}`}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-[8vw] flex items-center justify-between max-w-[1800px] h-[60px] md:h-[70px]">
          <div className="flex items-center space-x-4 md:space-x-12 h-full">
            <div 
              onClick={() => { setMobileMenuOpen(false); onLogoClick?.(); setActiveTab(null); }}
              className="flex items-center cursor-pointer flex-shrink-0"
            >
              <img 
                src="https://res.cloudinary.com/dtgufvwb5/image/upload/v1765436446/Vedartha_Global_Consultancy_LOGO-removebg-preview_xt90yx.png" 
                alt="Vedartha" 
                className="h-8 md:h-12 w-auto brightness-0 invert"
              />
            </div>

            <nav className="hidden lg:flex items-center space-x-8 h-full">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="relative h-full flex items-center">
                  <button 
                    onClick={() => {
                      if (item.children) {
                        handleTabClick(item.label);
                      } else {
                        setActiveTab(null);
                        onLinkClick?.(resolvePath(item.label));
                      }
                    }}
                    className={`text-[15px] font-bold flex items-center space-x-2 transition-all group h-full ${
                      activeTab === item.label ? 'text-[#86BC25]' : 'text-white hover:text-white/70'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.children && (
                      <ChevronDown 
                        size={14} 
                        className={`transition-transform duration-500 ${activeTab === item.label ? 'rotate-180 text-[#86BC25]' : 'group-hover:translate-y-0.5'}`} 
                      />
                    )}
                  </button>
                </div>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-2 md:space-x-6 text-white h-full">
            <div className="hidden lg:flex items-center space-x-6 h-full font-bold uppercase tracking-[0.15em] text-[13px]">
              <div className="flex items-center space-x-2 cursor-pointer group hover:text-[#86BC25] transition-colors">
                <Search size={18} strokeWidth={2.5} />
                <span>Search</span>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer group hover:text-[#86BC25] transition-colors">
                <Globe size={18} strokeWidth={2.5} />
                <span className="flex items-center">Global <ChevronDown size={12} className="ml-1" /></span>
              </div>
            </div>
            
            <button className="lg:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Desktop Mega Menu Layout */}
      <AnimatePresence>
        {activeTab && currentNavData?.children && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block fixed top-[70px] left-0 right-0 z-[245] bg-[#111] text-white overflow-y-auto max-h-[calc(100vh-70px)] shadow-[0_40px_80px_rgba(0,0,0,0.7)] border-b border-white/5 custom-scrollbar"
          >
            <div className="flex min-h-[550px] max-w-[1800px] mx-auto w-full">
              {/* Sidebar Panel */}
              <div className="w-[300px] bg-[#1a1a1a] flex flex-col border-r border-white/5 shrink-0">
                <div className="flex-1 py-8">
                  {currentNavData.children.sections.map((section, idx) => (
                    <button
                      key={section.title}
                      onMouseEnter={() => setActiveSectionIdx(idx)}
                      className={`w-full flex items-center justify-between px-10 py-5 text-left transition-all duration-300 group ${
                        activeSectionIdx === idx 
                          ? 'bg-[#111] text-[#86BC25] pl-12 font-bold' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <span className="text-[17px] tracking-tight">{section.title}</span>
                      <ChevronRight size={16} className={`transition-all duration-300 ${activeSectionIdx === idx ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
                    </button>
                  ))}
                </div>

                {/* Bottom Action Area in Sidebar */}
                <div className="p-8 space-y-3 bg-[#0c0c0c] border-t border-white/5">
                  <button 
                    onClick={() => { onLinkClick?.('rfp'); setActiveTab(null); }}
                    className="w-full flex items-center justify-between p-4 bg-[#86BC25] text-black rounded-xl group transition-all hover:scale-[1.02]"
                  >
                    <div className="flex flex-col items-start leading-tight">
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] opacity-60 mb-0.5">Action</span>
                      <span className="font-black text-xs uppercase tracking-widest">Submit RFP</span>
                    </div>
                    <FilePlus size={18} strokeWidth={2.5} />
                  </button>
                  <button 
                    onClick={() => { onLinkClick?.('contact-us'); setActiveTab(null); }}
                    className="w-full flex items-center justify-between p-4 bg-white/5 text-white rounded-xl border border-white/10 group transition-all hover:bg-white/10"
                  >
                    <div className="flex flex-col items-start leading-tight">
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] opacity-40 mb-0.5">Support</span>
                      <span className="font-black text-xs uppercase tracking-widest">Contact us</span>
                    </div>
                    <Headphones size={18} strokeWidth={2.5} />
                  </button>
                </div>
              </div>

              {/* Main Link Grid */}
              <div className="flex-1 px-16 py-16 bg-[#111]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeTab}-${activeSectionIdx}`}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-2 gap-x-12 gap-y-6"
                  >
                    {currentNavData.children.sections[activeSectionIdx].items.map((subItem) => (
                      <button
                        key={subItem.label}
                        onClick={() => {
                          onLinkClick?.(resolvePath(subItem.label));
                          setActiveTab(null);
                        }}
                        className="group flex items-center justify-between py-2 text-left"
                      >
                        <div className="flex flex-col">
                          <span className="text-[15px] font-bold text-white group-hover:text-[#86BC25] transition-colors">
                            {subItem.label}
                          </span>
                        </div>
                        <ChevronRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#86BC25]" />
                      </button>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Featured / Insight Panel */}
              {currentNavData.children.featured && (
                <div className="w-[400px] p-12 bg-[#0a0a0a] border-l border-white/5 flex flex-col justify-center shrink-0">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-8 group">
                    <img 
                      src={currentNavData.children.featured.imageUrl || "https://images.unsplash.com/photo-1454165833767-0274b27f28a0?auto=format&fit=crop&q=80&w=600"} 
                      alt={currentNavData.children.featured.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1454165833767-0274b27f28a0?auto=format&fit=crop&q=80&w=600";
                      }}
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                  <span className="text-[#86BC25] text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">
                    {currentNavData.children.featured.category}
                  </span>
                  <h4 className="text-2xl font-black text-white mb-4 leading-tight uppercase tracking-tight">
                    {currentNavData.children.featured.title}
                  </h4>
                  <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
                    {currentNavData.children.featured.subtitle}
                  </p>
                  <button 
                    onClick={() => { onLinkClick?.(resolvePath(currentNavData.children.featured?.title || '')); setActiveTab(null); }}
                    className="flex items-center space-x-3 text-white font-black uppercase tracking-widest text-[10px] group"
                  >
                    <span>Learn more</span>
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform text-[#86BC25]" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[240] bg-black pt-[70px] overflow-y-auto"
          >
            <div className="p-6 space-y-4">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="border-b border-white/10 pb-4">
                  <button
                    onClick={() => {
                      if (item.children) {
                        setExpandedMobileItem(expandedMobileItem === item.label ? null : item.label);
                      } else {
                        handleMobileLinkClick(resolvePath(item.label));
                      }
                    }}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-2xl font-black uppercase tracking-tighter text-white">
                      {item.label}
                    </span>
                    {item.children && (
                      <ChevronDown 
                        className={`transition-transform duration-300 ${expandedMobileItem === item.label ? 'rotate-180' : ''}`} 
                      />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {expandedMobileItem === item.label && item.children && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4 space-y-6 pt-4"
                      >
                        {item.children.sections.map((section) => (
                          <div key={section.title} className="space-y-4">
                            <h5 className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                              {section.title}
                            </h5>
                            <div className="space-y-4">
                              {section.items.map((subItem) => (
                                <button
                                  key={subItem.label}
                                  onClick={() => handleMobileLinkClick(resolvePath(subItem.label))}
                                  className="block text-lg font-bold text-gray-300 hover:text-[#86BC25]"
                                >
                                  {subItem.label}
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              <div className="pt-8 space-y-4">
                <button 
                  onClick={() => handleMobileLinkClick('rfp')}
                  className="w-full p-6 bg-[#86BC25] text-black font-black uppercase tracking-widest text-sm rounded-xl"
                >
                  Submit RFP
                </button>
                <button 
                  onClick={() => handleMobileLinkClick('contact-us')}
                  className="w-full p-6 bg-white/10 text-white font-black uppercase tracking-widest text-sm rounded-xl border border-white/10"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for desktop mega menu */}
      {activeTab && (
        <div 
          className="hidden lg:block fixed inset-0 z-[240] bg-black/60 backdrop-blur-sm"
          onClick={() => setActiveTab(null)}
        />
      )}
    </div>
  );
};

export default Header;
