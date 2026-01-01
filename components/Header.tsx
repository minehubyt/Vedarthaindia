
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Globe, Menu, X, ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface HeaderProps {
  onLogoClick?: () => void;
  onLinkClick?: (path: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick, onLinkClick }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [activeSectionIdx, setActiveSectionIdx] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  
  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      
      const totalHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      // Logic: show on scroll up, hide on scroll down
      const isNearTop = scrollY < 100;
      const isNearBottom = scrollY > totalHeight - windowHeight - 100;

      if (isNearTop || isNearBottom || mobileMenuOpen || activeTab || scrollY < lastScroll) {
        setIsVisible(true);
      } else if (scrollY > lastScroll && scrollY > 100) {
        setIsVisible(false);
        setActiveTab(null);
      }
      lastScroll = scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen, activeTab]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

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

  return (
    <div className="relative z-[250]">
      <motion.header 
        initial={{ y: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100,
          backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 1)'
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} 
        className={`fixed top-0 left-0 right-0 z-[250] pt-0 pb-0 border-b transition-colors duration-300 ${scrolled ? 'border-white/10' : 'border-transparent'}`}
      >
        <div className="container mx-auto px-6 lg:px-[8vw] flex items-center justify-between max-w-[1800px] h-[70px]">
          <div className="flex items-center space-x-12 h-full">
            <div 
              onClick={() => { setMobileMenuOpen(false); onLogoClick?.(); }}
              className="flex items-center cursor-pointer flex-shrink-0"
            >
              <img 
                src="https://res.cloudinary.com/dtgufvwb5/image/upload/v1765436446/Vedartha_Global_Consultancy_LOGO-removebg-preview_xt90yx.png" 
                alt="Vedartha International Limited" 
                className="h-9 md:h-10 w-auto"
              />
            </div>

            <nav className="hidden lg:flex items-center space-x-8 h-full">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="relative h-full flex items-center">
                  <button 
                    onClick={() => {
                      if (item.label === 'Our Thinking') onLinkClick?.('insights');
                      else handleTabClick(item.label);
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

          <div className="flex items-center space-x-6 text-white h-full">
            <div className="hidden lg:flex items-center space-x-6 h-full">
              <div className="flex items-center space-x-2 cursor-pointer group hover:text-[#86BC25] transition-colors h-full">
                <Search size={20} strokeWidth={2.5} />
                <span className="text-[13px] font-bold uppercase tracking-widest">Search</span>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer group hover:text-[#86BC25] transition-colors h-full">
                <Globe size={18} strokeWidth={2.5} />
                <span className="text-[13px] font-bold uppercase tracking-widest flex items-center">
                  Global
                  <ChevronDown size={12} className="ml-1" />
                </span>
              </div>
            </div>
            
            <button 
              className="lg:hidden text-white p-2 -mr-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
                    <X size={28} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }}>
                    <Menu size={28} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[240] lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-full md:w-[400px] h-screen bg-[#111] z-[260] lg:hidden flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <img 
                  src="https://res.cloudinary.com/dtgufvwb5/image/upload/v1765436446/Vedartha_Global_Consultancy_LOGO-removebg-preview_xt90yx.png" 
                  alt="Vedartha" 
                  className="h-8"
                />
                <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-8 custom-scrollbar">
                <div className="space-y-2">
                  {NAV_ITEMS.map((item, idx) => (
                    <motion.div 
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                    >
                      <button 
                        onClick={() => {
                          if (item.children) {
                            setExpandedMobileItem(expandedMobileItem === item.label ? null : item.label);
                          } else {
                            setMobileMenuOpen(false);
                          }
                        }}
                        className={`w-full flex items-center justify-between py-4 text-left border-b border-white/5 group ${expandedMobileItem === item.label ? 'text-[#86BC25]' : 'text-white'}`}
                      >
                        <span className="text-2xl font-bold tracking-tight">{item.label}</span>
                        {item.children && (
                          <ChevronDown size={20} className={`transition-transform duration-300 ${expandedMobileItem === item.label ? 'rotate-180' : ''}`} />
                        )}
                      </button>

                      <AnimatePresence>
                        {expandedMobileItem === item.label && item.children && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-white/5 rounded-lg my-2"
                          >
                            <div className="p-4 space-y-6">
                              {item.children.sections.map((section) => (
                                <div key={section.title} className="space-y-3">
                                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#86BC25]">{section.title}</h4>
                                  <div className="grid grid-cols-1 gap-3">
                                    {section.items.map((sub) => (
                                      <button
                                        key={sub.label}
                                        onClick={() => {
                                          if (sub.label === 'What we believe in') handleMobileLinkClick('purpose-values');
                                          else if (sub.label === 'Contact Us') handleMobileLinkClick('contact-us');
                                          else if (sub.label === 'Submit RFP') handleMobileLinkClick('rfp');
                                          else if (item.label === 'Our Thinking') handleMobileLinkClick('insights');
                                          else handleMobileLinkClick('home');
                                        }}
                                        className="text-gray-300 hover:text-white transition-colors text-left text-sm py-1 flex items-center justify-between group"
                                      >
                                        <span>{sub.label}</span>
                                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 space-y-6">
                   <div className="flex items-center space-x-4 text-white/60 p-4 border border-white/10 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
                      <Search size={20} />
                      <span className="font-bold text-sm uppercase tracking-widest group-hover:text-white transition-colors">Search Vedartha</span>
                   </div>
                   <div className="flex items-center justify-between p-4 bg-[#86BC25] rounded-xl text-black font-black uppercase tracking-widest text-xs cursor-pointer hover:brightness-110 transition-all">
                      <span>Global Locations</span>
                      <Globe size={18} />
                   </div>
                </div>
              </div>

              <div className="p-6 border-t border-white/10 bg-[#0a0a0a]">
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-4">Professional Services Network</p>
                <div className="flex space-x-4">
                  <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-white text-xs font-black">V</div>
                  <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-white text-xs font-black">IN</div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Mega Menus (Unchanged behavior but ensured layering) */}
      <AnimatePresence>
        {activeTab && currentNavData?.children && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block fixed top-[70px] left-0 right-0 z-[245] bg-[#111] text-white overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] border-b border-white/5"
          >
            <div className="flex flex-col lg:flex-row min-h-[500px]">
              {/* Sidebar Menu */}
              <div className="w-full lg:w-[320px] bg-[#1a1a1a] py-6">
                {currentNavData.children.sections.map((section, idx) => (
                  <button
                    key={section.title}
                    onMouseEnter={() => setActiveSectionIdx(idx)}
                    className={`w-full flex items-center justify-between px-10 py-5 text-left transition-all duration-300 group ${
                      activeSectionIdx === idx 
                        ? 'bg-[#111] text-[#86BC25] pl-12' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <span className={`text-[17px] font-medium tracking-tight ${activeSectionIdx === idx ? 'font-bold' : ''}`}>
                      {section.title}
                    </span>
                    <ChevronRight 
                      size={16} 
                      className={`transition-all duration-300 ${activeSectionIdx === idx ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`} 
                    />
                  </button>
                ))}
              </div>

              {/* Main Content Area */}
              <div className="flex-1 px-12 lg:px-20 py-12 lg:py-16 bg-[#111] overflow-y-auto max-h-[70vh]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeTab}-${activeSectionIdx}`}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10"
                  >
                    {currentNavData.children.sections[activeSectionIdx].items.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => {
                          if (item.label === 'What we believe in') onLinkClick?.('purpose-values');
                          else if (item.label === 'Contact Us') onLinkClick?.('contact-us');
                          else if (item.label === 'Submit RFP') onLinkClick?.('rfp');
                          else if (activeTab === 'Our Thinking') onLinkClick?.('insights');
                          setActiveTab(null);
                        }}
                        className="text-[17px] font-light text-gray-300 hover:text-[#86BC25] transition-all block w-fit text-left hover:translate-x-1 leading-snug"
                      >
                        {item.label}
                      </button>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Featured Spotlight Section */}
              <div className="hidden xl:flex w-[480px] bg-[#111] p-12 lg:p-16 border-l border-white/5 flex-col">
                <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#86BC25] mb-8">Featured Spotlight</h4>
                <div 
                  onClick={() => {
                     if (currentNavData.label === 'Who we are') onLinkClick?.('about');
                     else if (currentNavData.label === 'Our Thinking') onLinkClick?.('insights');
                     setActiveTab(null);
                  }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[16/10] mb-8 overflow-hidden rounded-sm bg-neutral-800">
                    <img 
                      src={currentNavData.children.featured?.imageUrl || "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600"} 
                      alt="Featured" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="space-y-4">
                    <span className="text-gray-400 text-[12px] font-bold uppercase tracking-widest block">{currentNavData.children.featured?.category}</span>
                    <h5 className="text-white text-[24px] font-bold leading-tight tracking-tight group-hover:text-[#86BC25] transition-colors">
                      {currentNavData.children.featured?.subtitle || "Together makes progress"}
                    </h5>
                    <div className="flex items-center text-[#86BC25] font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                      Learn more <ChevronRight size={16} className="ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeTab && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveTab(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[202] hidden lg:block"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
