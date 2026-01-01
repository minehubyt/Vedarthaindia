
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Share2, Bookmark, Clock, ArrowLeft, Download } from 'lucide-react';

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
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll < 100) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(currentScroll < lastScroll);
      }
      lastScroll = currentScroll;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-deloitte-green z-[300] origin-left" style={{ scaleX }} />

      {/* Hero Header Section */}
      <section className="relative min-h-[60vh] flex items-end bg-black text-white overflow-hidden py-20">
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
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors uppercase tracking-widest text-[10px] font-black mb-10 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Insights Hub</span>
          </button>

          <nav className="flex items-center space-x-3 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-8">
            <span className="hover:text-white cursor-pointer transition-colors">Our Thinking</span>
            <span className="text-gray-600">/</span>
            <span className="text-white">Tech Trends 2025</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <h1 className="text-[clamp(2rem,6vw,4.5rem)] font-black leading-[1.1] tracking-tight mb-10">
              Tech Trends 2025: <br /> Seven trends that matter.
            </h1>
            
            <div className="flex flex-wrap items-center gap-8 text-[10px]">
              <div className="flex items-center space-x-3 text-gray-400">
                <Clock size={16} className="text-deloitte-green" />
                <span className="font-black uppercase tracking-widest">15 Min Read</span>
              </div>
              <div className="hidden sm:block text-gray-600">|</div>
              <div className="flex items-center space-x-4">
                <button type="button" className="flex items-center space-x-2 bg-deloitte-green text-black px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest hover:brightness-110 transition-all shadow-xl">
                   <Download size={14} />
                   <span>Download Report</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chapter Navigation (Sticky) */}
      <div 
        className="sticky z-[150] bg-white border-b border-gray-100 shadow-sm transition-all duration-300"
        style={{ top: isHeaderVisible ? '70px' : '0px' }}
      >
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
                  <motion.div layoutId="postActive" className="absolute -bottom-1 left-0 right-0 h-[2px] bg-deloitte-green" />
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="flex-1 lg:max-w-4xl space-y-16">
              <div id="overview" className="scroll-mt-40">
                <p className="text-[clamp(1.4rem,3vw,2rem)] font-light leading-relaxed text-black mb-10 tracking-tight">
                  In 2025, we see a shift from generative AI experimentation to a state of <span className="text-deloitte-green font-black">applied intelligence</span>—where autonomous agents work alongside human talent to redefine productivity.
                </p>
                <div className="prose prose-lg max-w-none text-gray-700 font-light leading-relaxed space-y-8">
                  <p className="text-[clamp(1rem,1.2vw,1.2rem)]">
                    Across industries, the promise of new technology is being balanced by the weight of technical debt and the urgency of cybersecurity. This year's report explores seven trends that represent the convergence of pioneering hardware and sophisticated cognitive models.
                  </p>
                </div>
              </div>

              <div id="seven-trends" className="scroll-mt-40 space-y-12">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-2 bg-deloitte-green" />
                  <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-black tracking-tight uppercase">The Seven Trends</h2>
                </div>
                
                <div className="space-y-16">
                  {[
                    { num: '01', title: 'Agentic Workflows', desc: 'Moving from prompting to partnering. AI agents now manage complex multi-step processes with minimal oversight, creating a new layer of organizational intelligence.' },
                    { num: '02', title: 'The Quantum Reality', desc: 'Commercial advantage is finally within reach for specific optimization problems. We explore how early adopters are securing a 5-year lead in financial and material sciences.' }
                  ].map((trend) => (
                    <div key={trend.num} className="group flex flex-col sm:flex-row gap-8 items-start">
                      <span className="text-[clamp(3rem,6vw,5rem)] font-black text-gray-100 group-hover:text-deloitte-green transition-colors duration-300 leading-none">
                        {trend.num}
                      </span>
                      <div className="pt-2">
                        <h3 className="text-2xl font-bold mb-4 tracking-tight">{trend.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-[clamp(1rem,1.1vw,1.15rem)] font-light">
                          {trend.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="lg:w-[350px] space-y-16">
              <div className="space-y-8">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-deloitte-green">Authors</h4>
                <div className="space-y-6">
                  {[
                    { name: 'Bill Briggs', role: 'Global CTO', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200' },
                  ].map((author) => (
                    <div key={author.name} className="flex items-center space-x-4">
                      <img src={author.img} alt={author.name} className="w-16 h-16 rounded-full grayscale shadow-sm" />
                      <div>
                        <h5 className="font-bold text-sm">{author.name}</h5>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{author.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-black text-white p-10 rounded-sm shadow-xl">
                <h4 className="text-[10px] font-black uppercase tracking-widest mb-8 text-deloitte-green">Executive Summary</h4>
                <div className="space-y-8">
                  <p className="text-sm font-light leading-relaxed opacity-80 italic">"The future isn't about replacement, but radical orchestration."</p>
                </div>
                <button type="button" className="mt-10 w-full bg-white text-black py-4 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-deloitte-green transition-all">
                  Request Private Briefing
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsightPostPage;
