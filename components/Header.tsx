
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

  const resolvePath = (label: string) => {
    const map: Record<string, string> = {
      'Case studies': 'case-studies',
      'Overview': 'services-overview',
      'AI & Engineering': 'ai-engineering',
      'Assurance': 'assurance',
      'Audit': 'audit',
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
          backgroundColor: scrolled ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 1)'
        }}
        className={`fixed top-0 left-0 right-0 z-[250] border-b transition-all duration-300 ${scrolled ? 'border-white/10 shadow-lg' : 'border-transparent'}`}
      >
        <div className="container mx-auto px-6 lg:px-[8vw] flex items-center justify-between max-w-[1800px] h-[70px]">
          <div className="flex items-center space-x-12 h-full">
            <div 
              onClick={() => { setMobileMenuOpen(false); onLogoClick?.(); setActiveTab(null); }}
              className="flex items-center cursor-pointer flex-shrink-0"
            >
              <img 
                src="https://res.cloudinary.com/dtgufvwb5/image/upload/v1765436446/Vedartha_Global_Consultancy_LOGO-removebg-preview_xt90yx.png" 
                alt="Vedartha" 
                className="h-10 md:h-14 w-auto brightness-0 invert"
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

          <div className="flex items-center space-x-6 text-white h-full">
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
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
            className="hidden lg:block fixed top-[70px] left-0 right-0 z-[245] bg-[#111] text-white overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.7)] border-b border-white/5"
          >
            <div className="flex min-h-[550px] max-w-[1800px] mx-auto">
              <div className="w-[300px] bg-[#1a1a1a] flex flex-col justify-between border-r border-white/5">
                <div className="py-8">
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

                <div className="p-8 space-y-3 bg-[#0c0c0c]">
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

              <div className="flex-1 px-16 py-16 bg-[#111] overflow-y-auto max-h-[75vh] custom-scrollbar">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeTab}-${activeSectionIdx}`}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-10"
                  >
                    {currentNavData.children.sections[activeSectionIdx].items.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => {
                          onLinkClick?.(resolvePath(item.label));
                          setActiveTab(null);
                        }}
                        className="text-[17px] font-light text-gray-400 hover:text-[#86BC25] transition-all block w-fit text-left hover:translate-x-1 leading-snug"
                      >
                        {item.label}
                      </button>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="w-[480px] bg-[#111] p-16 border-l border-white/5 hidden xl:flex flex-col">
                <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#86BC25] mb-10">Featured Spotlight</h4>
                <div 
                  onClick={() => {
                     onLinkClick?.(resolvePath(currentNavData.children.featured?.category || 'home'));
                     setActiveTab(null);
                  }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[16/10] mb-8 overflow-hidden rounded-sm">
                    <img 
                      src={currentNavData.children.featured?.imageUrl || "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600"} 
                      alt="Featured" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="space-y-4">
                    <span className="text-gray-400 text-[11px] font-bold uppercase tracking-widest block">{currentNavData.children.featured?.category}</span>
                    <h5 className="text-white text-[28px] font-black leading-tight tracking-tight group-hover:text-[#86BC25] transition-colors uppercase">
                      {currentNavData.children.featured?.title}
                    </h5>
                    <div className="flex items-center text-[#86BC25] font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                      Explore more <ChevronRight size={16} className="ml-1" />
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
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[202] hidden lg:block"
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer (Upgraded with Buttons and Top Padding) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#111] z-[300] lg:hidden flex flex-col"
          >
            {/* Safe Area Header Padding */}
            <div className="h-[70px] shrink-0 border-b border-white/5 flex items-center justify-between px-6">
               <img 
                src="https://res.cloudinary.com/dtgufvwb5/image/upload/v1765436446/Vedartha_Global_Consultancy_LOGO-removebg-preview_xt90yx.png" 
                alt="Vedartha" 
                className="h-8 brightness-0 invert"
              />
              <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2">
                <X size={28} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-8 space-y-4 custom-scrollbar">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                   <button 
                    onClick={() => {
                      if (item.children) setExpandedMobileItem(expandedMobileItem === item.label ? null : item.label);
                      else handleMobileLinkClick(resolvePath(item.label));
                    }}
                    className={`w-full flex items-center justify-between py-5 text-xl font-black uppercase border-b border-white/5 transition-colors ${expandedMobileItem === item.label ? 'text-[#86BC25]' : 'text-white'}`}
                   >
                    <span>{item.label}</span>
                    {item.children && <ChevronDown className={`transition-transform duration-300 ${expandedMobileItem === item.label ? 'rotate-180' : ''}`} />}
                   </button>
                   <AnimatePresence>
                    {expandedMobileItem === item.label && item.children && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-white/5 rounded-2xl my-4 overflow-hidden"
                      >
                         <div className="px-6 py-6 space-y-8">
                            {item.children.sections.map(s => (
                              <div key={s.title} className="space-y-3">
                                 <p className="text-[10px] font-black text-[#86BC25] uppercase tracking-[0.2em]">{s.title}</p>
                                 <div className="grid grid-cols-1 gap-2">
                                   {s.items.map(sub => (
                                     <button 
                                      key={sub.label} 
                                      onClick={() => handleMobileLinkClick(resolvePath(sub.label))}
                                      className="block text-gray-300 text-[17px] font-light py-2 hover:text-white text-left"
                                     >
                                      {sub.label}
                                     </button>
                                   ))}
                                 </div>
                              </div>
                            ))}
                         </div>
                      </motion.div>
                    )}
                   </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Mobile Action Area - Ensure these are always visible and accessible */}
            <div className="p-6 bg-[#0c0c0c] border-t border-white/10 space-y-3 shrink-0">
               <button 
                  onClick={() => handleMobileLinkClick('rfp')}
                  className="w-full flex items-center justify-between p-4 bg-[#86BC25] text-black rounded-xl"
               >
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-[8px] font-black uppercase tracking-[0.2em] opacity-60">Action</span>
                    <span className="font-black text-xs uppercase tracking-widest">Submit RFP</span>
                  </div>
                  <FilePlus size={18} strokeWidth={2.5} />
               </button>
               <button 
                  onClick={() => handleMobileLinkClick('contact-us')}
                  className="w-full flex items-center justify-between p-4 bg-white/5 text-white rounded-xl border border-white/10"
               >
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-[8px] font-black uppercase tracking-[0.2em] opacity-40">Support</span>
                    <span className="font-black text-xs uppercase tracking-widest">Contact us</span>
                  </div>
                  <Headphones size={18} strokeWidth={2.5} />
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
