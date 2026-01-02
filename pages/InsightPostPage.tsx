
import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Share2, Bookmark, Clock, ArrowLeft, Download, Loader2, CheckCircle2 } from 'lucide-react';

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'seven-trends', label: 'Seven Trends' },
  { id: 'enterprise-impact', label: 'Enterprise Impact' },
  { id: 'get-in-touch', label: 'Connect' }
];

const InsightPostPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [activeSection, setActiveSection] = useState('overview');
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    }, 2000);
  };

  return (
    <div className="bg-white min-h-screen">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#86BC25] z-[300] origin-left" style={{ scaleX }} />

      {/* Hero Header Section */}
      <section className="relative min-h-[60vh] flex items-end bg-black text-white overflow-hidden py-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40 grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>

        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px] relative z-10">
          <button 
            type="button"
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors uppercase tracking-widest text-[10px] font-black mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Insights Hub</span>
          </button>

          <nav className="flex items-center space-x-3 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">
            <span className="hover:text-white cursor-pointer transition-colors" onClick={onBack}>Our Thinking</span>
            <span className="text-gray-600">/</span>
            <span className="text-white">Tech Trends 2025</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-[clamp(1.75rem,5.5vw,4.5rem)] font-black leading-[1.1] tracking-tight mb-10">
              Tech Trends 2025: <br /> Seven trends that matter.
            </h1>
            
            <div className="flex flex-wrap items-center gap-8 text-[10px]">
              <div className="flex items-center space-x-3 text-gray-400">
                <Clock size={16} className="text-[#86BC25]" />
                <span className="font-black uppercase tracking-widest">15 Min Read</span>
              </div>
              <div className="flex items-center space-x-4">
                <button 
                  type="button" 
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className={`flex items-center space-x-2 px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest transition-all shadow-xl ${
                    downloadSuccess ? 'bg-green-600 text-white' : 'bg-[#86BC25] text-black hover:brightness-110'
                  }`}
                >
                   {isDownloading ? <Loader2 size={14} className="animate-spin" /> : downloadSuccess ? <CheckCircle2 size={14} /> : <Download size={14} />}
                   <span>{isDownloading ? 'Preparing...' : downloadSuccess ? 'Download Ready' : 'Download Report'}</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chapter Navigation (Sticky) */}
      <div className="sticky top-[70px] z-[150] bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px] flex items-center justify-between py-6">
          <div className="flex items-center space-x-10 overflow-x-auto no-scrollbar">
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => {
                  setActiveSection(section.id);
                  document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={`whitespace-nowrap text-[10px] font-black uppercase tracking-widest transition-all relative py-1 ${
                  activeSection === section.id ? 'text-black' : 'text-gray-400 hover:text-black'
                }`}
              >
                {section.label}
                {activeSection === section.id && (
                  <motion.div layoutId="postActive" className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#86BC25]" />
                )}
              </button>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Bookmark size={18} className="text-gray-400 cursor-pointer hover:text-black transition-colors" />
            <Share2 size={18} className="text-gray-400 cursor-pointer hover:text-black transition-colors" />
          </div>
        </div>
      </div>

      {/* Article Content Layout */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-1 lg:max-w-4xl space-y-16">
              <div id="overview" className="scroll-mt-40">
                <p className="text-[clamp(1.2rem,2.5vw,1.8rem)] font-light leading-relaxed text-black mb-10 tracking-tight">
                  In 2025, we see a shift from generative AI experimentation to a state of <span className="text-[#86BC25] font-black">applied intelligence</span>—where autonomous agents work alongside human talent.
                </p>
                <div className="prose prose-lg max-w-none text-gray-700 font-light leading-relaxed space-y-6">
                  <p className="text-base md:text-lg">
                    Across industries, the promise of new technology is being balanced by the weight of technical debt and the urgency of cybersecurity.
                  </p>
                </div>
              </div>

              <div id="seven-trends" className="scroll-mt-40 space-y-10">
                <div className="flex items-center space-x-4">
                  <div className="h-8 w-1.5 bg-[#86BC25]" />
                  <h2 className="text-2xl md:text-4xl font-black tracking-tight uppercase">The Seven Trends</h2>
                </div>
                
                <div className="space-y-12">
                  {[
                    { num: '01', title: 'Agentic Workflows', desc: 'Moving from prompting to partnering. AI agents now manage complex processes with minimal oversight.' },
                    { num: '02', title: 'The Quantum Reality', desc: 'Commercial advantage is finally within reach for specific optimization problems.' }
                  ].map((trend) => (
                    <div key={trend.num} className="group flex flex-col sm:flex-row gap-6 items-start">
                      <span className="text-4xl md:text-7xl font-black text-gray-100 group-hover:text-[#86BC25] transition-colors leading-none">
                        {trend.num}
                      </span>
                      <div className="pt-2">
                        <h3 className="text-xl font-bold mb-3 tracking-tight">{trend.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base font-light">
                          {trend.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="lg:w-[350px] space-y-12">
              <div className="bg-black text-white p-10 rounded-sm">
                <h4 className="text-[10px] font-black uppercase tracking-widest mb-8 text-[#86BC25]">Executive Summary</h4>
                <p className="text-sm font-light leading-relaxed opacity-80 italic">"The future isn't about replacement, but radical orchestration."</p>
                <button type="button" className="mt-10 w-full bg-white text-black py-4 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-[#86BC25] transition-all">
                  Request Private Briefing
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Mock Progress Overlay */}
      <AnimatePresence>
        {isDownloading && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-sm px-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white p-12 rounded-3xl max-w-md w-full text-center space-y-8 shadow-[0_40px_100px_rgba(0,0,0,0.4)]"
            >
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto">
                <Loader2 size={32} className="animate-spin text-[#86BC25]" />
              </div>
              <div>
                <h4 className="text-xl font-black uppercase tracking-tight mb-2">Preparing Asset</h4>
                <p className="text-sm text-gray-500 font-light">Compiling latest Tech Trends 2025 briefing for secure download...</p>
              </div>
              <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.8 }}
                  className="h-full bg-[#86BC25]"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InsightPostPage;
