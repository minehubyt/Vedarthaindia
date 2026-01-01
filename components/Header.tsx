
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Globe, Menu, X, ChevronDown, Mail, User, ChevronRight } from 'lucide-react';
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
  
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      
      const windowHeight = window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;
      
      // Hiding logic: show on scroll up, hide on scroll down
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

  const handleTabClick = (label: string) => {
    if (activeTab === label) {
      setActiveTab(null);
    } else {
      setActiveTab(label);
      setActiveSectionIdx(0);
    }
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
              onClick={onLogoClick}
              className="flex items-center space-x-1 group cursor-pointer flex-shrink-0"
            >
              <span className="text-white text-[28px] font-extrabold tracking-tighter">Deloitte</span>
              <div className="w-[8px] h-[8px] bg-[#86BC25] rounded-full mt-[14px]" />
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

          <div className="flex items-center space-x-8 text-white h-full">
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
              className="lg:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {activeTab && currentNavData?.children && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[70px] left-0 right-0 z-[245] bg-[#111] text-white overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] border-b border-white/5"
          >
            <div className="flex flex-col lg:flex-row min-h-[500px]">
              {/* Left Sidebar Menu */}
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
              <div className="flex-1 px-12 lg:px-20 py-12 lg:py-16 bg-[#111] overflow-y-auto max-h-[70vh] lg:max-h-none">
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[202]"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
