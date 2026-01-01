
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

  // Detect header visibility to adjust sticky top offset
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
    <div className="bg-white min-h-screen selection:bg-deloitte-green selection:text-black">
      {/* Progress Bar - Always at true top */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-deloitte-green z-[300] origin-left" style={{ scaleX }} />

      {/* Hero Header Section */}
      <section className="relative h-[85vh] flex items-end bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-50 grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        {/* Added pt-32 for better alignment from the top header */}
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px] relative z-10 pt-32 pb-20">
          <button 
            type="button"
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors uppercase tracking-[0.2em] text-[10px] font-black mb-12 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Insights Hub</span>
          </button>

          <nav className="flex items-center space-x-3 text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-10">
            <span className="hover:text-white cursor-pointer transition-colors">Our Thinking</span>
            <span className="text-gray-600">/</span>
            <span className="hover:text-white cursor-pointer transition-colors">Technology</span>
            <span className="text-gray-600">/</span>
            <span className="text-white">Tech Trends 2025</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <h1 className="text-[clamp(2.5rem,7.5vw,7.5rem)] font-black leading-[0.85] tracking-tighter mb-12">
              Tech Trends 2025: <br /> Seven trends that matter.
            </h1>
            
            <div className="flex flex-wrap items-center gap-10 text-xs">
              <div className="flex items-center space-x-3 text-gray-400">
                <Clock size={16} className="text-deloitte-green" />
                <span className="font-black uppercase tracking-widest">15 Min Read</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <span className="font-black uppercase tracking-widest">Published Feb 14, 2025</span>
              </div>
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
        className={`sticky z-[150] bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm transition-all duration-300`}
        style={{ top: isHeaderVisible ? '70px' : '0px' }}
      >
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px] flex items-center justify-between py-10">
          <div className="flex items-center space-x-12 overflow-x-auto no-scrollbar">
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => {
                  setActiveSection(section.id);
                  const element = document.getElementById(section.id);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`whitespace-nowrap text-[11px] font-black uppercase tracking-[0.2em] transition-all relative py-1 border-none bg-transparent appearance-none outline-none ${
                  activeSection === section.id ? 'text-black' : 'text-gray-400 hover:text-black'
                }`}
              >
                {section.label}
                {activeSection === section.id && (
                  <motion.div layoutId="postActive" className="absolute -bottom-2 left-0 right-0 h-[2px] bg-black" />
                )}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex items-center space-x-8">
            <Bookmark size={20} className="text-gray-400 cursor-pointer hover:text-black transition-colors" />
            <Share2 size={20} className="text-gray-400 cursor-pointer hover:text-black transition-colors" />
          </div>
        </div>
      </div>

      {/* Article Content Layout */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          <div className="flex flex-col lg:flex-row gap-24">
            
            {/* Main Article Body */}
            <div className="flex-1 lg:max-w-4xl space-y-20">
              <div id="overview" className="scroll-mt-40">
                <p className="text-[26px] md:text-[36px] font-light leading-[1.15] text-black mb-12 tracking-tight">
                  The line between the physical and digital world has vanished. In 2025, we see a shift from generative AI experimentation to a state of <span className="text-deloitte-green font-black">applied intelligence</span>—where autonomous agents work alongside human talent to redefine productivity.
                </p>
                <div className="prose prose-xl max-w-none text-gray-700 font-light leading-relaxed space-y-10">
                  <p>
                    Across industries, the promise of new technology is being balanced by the weight of technical debt and the urgency of cybersecurity. This year's report explores seven trends that represent the convergence of pioneering hardware and sophisticated cognitive models.
                  </p>
                  <p>
                    Organizations that thrive will not just be those that buy the best tools, but those that architect their future around resilience and human-centric design.
                  </p>
                </div>
              </div>

              <div id="seven-trends" className="scroll-mt-40 space-y-16">
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-2 bg-deloitte-green" />
                  <h2 className="text-5xl font-black tracking-tighter">The Seven Trends</h2>
                </div>
                
                <div className="space-y-24">
                  {[
                    { num: '01', title: 'Agentic Workflows', desc: 'Moving from prompting to partnering. AI agents now manage complex multi-step processes with minimal oversight, creating a new layer of organizational intelligence.' },
                    { num: '02', title: 'The Quantum Reality', desc: 'Commercial advantage is finally within reach for specific optimization problems. We explore how early adopters are securing a 5-year lead in financial and material sciences.' },
                    { num: '03', title: 'Bio-Digital Convergence', desc: 'Computing interfaces that respond to neurological and physiological feedback in real-time, bridging the gap between intention and action.' }
                  ].map((trend) => (
                    <div key={trend.num} className="group flex flex-col md:flex-row gap-12 items-start">
                      <span className="text-8xl font-black text-gray-100 group-hover:text-deloitte-green transition-colors duration-500 leading-none">
                        {trend.num}
                      </span>
                      <div className="pt-2">
                        <h3 className="text-3xl font-bold mb-6 tracking-tight">{trend.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-xl font-light">
                          {trend.desc}
                        </p>
                        <button type="button" className="mt-8 flex items-center space-x-3 text-xs font-black uppercase tracking-[0.2em] text-black group-hover:text-deloitte-green transition-colors">
                          <span>Read full deep dive</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Callout Box */}
              <div className="bg-gray-50 p-16 border-l-[12px] border-deloitte-green rounded-sm shadow-sm">
                <h4 className="text-2xl md:text-3xl font-bold mb-6 italic tracking-tight">"The future isn't about the replacement of human intelligence, but the radical expansion of its potential through strategic orchestration."</h4>
                <p className="text-gray-500 font-black uppercase tracking-widest text-xs">— Bill Briggs, Global Chief Technology Officer, Deloitte</p>
              </div>

              <div id="enterprise-impact" className="scroll-mt-40 space-y-10">
                <h2 className="text-5xl font-black tracking-tighter">Strategic Enterprise Impact</h2>
                <div className="prose prose-xl max-w-none text-gray-700 font-light leading-relaxed">
                  <p>
                    For the C-suite, the implications are clear: data infrastructure is no longer a back-office concern; it is the lifeblood of competitive strategy. As we scale these technologies, the focus shifts to governing the invisible.
                  </p>
                  <ul className="list-disc pl-8 space-y-6 pt-4">
                    <li>Redefining the digital twin for supply chain resilience</li>
                    <li>Scaling ethical AI frameworks for global compliance</li>
                    <li>Investments in the "Next-Gen" cognitive talent pool</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar Perspective */}
            <aside className="lg:w-[400px] space-y-20">
              {/* Authors */}
              <div className="space-y-10">
                <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-deloitte-green">Authors</h4>
                <div className="space-y-8">
                  {[
                    { name: 'Bill Briggs', role: 'Global CTO, Deloitte', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200' },
                    { name: 'Anjali Shaikh', role: 'Global US Tech Leader', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200' }
                  ].map((author) => (
                    <div key={author.name} className="flex items-center space-x-6 group cursor-pointer">
                      <div className="relative">
                        <img src={author.img} alt={author.name} className="w-20 h-20 rounded-full grayscale group-hover:grayscale-0 transition-all duration-500 shadow-md" />
                        <div className="absolute inset-0 rounded-full border border-deloitte-green opacity-0 group-hover:opacity-100 scale-110 transition-all" />
                      </div>
                      <div>
                        <h5 className="font-black text-base">{author.name}</h5>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{author.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Takeaways Card */}
              <div className="bg-black text-white p-12 rounded-sm shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-deloitte-green/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-10 text-deloitte-green">Executive Summary</h4>
                <div className="space-y-10">
                  <div>
                    <span className="text-deloitte-green text-sm font-black mb-3 block">01</span>
                    <p className="text-base font-light leading-relaxed opacity-80">Transition from Generative to Agentic AI workflows is inevitable by Q3 2025.</p>
                  </div>
                  <div>
                    <span className="text-deloitte-green text-sm font-black mb-3 block">02</span>
                    <p className="text-base font-light leading-relaxed opacity-80">Quantum-ready encryption becomes a mandatory security standard for financial entities.</p>
                  </div>
                </div>
                <button type="button" className="mt-12 w-full bg-white text-black py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-deloitte-green transition-all shadow-lg">
                  Request a Private Briefing
                </button>
              </div>

              {/* Related Reports */}
              <div className="space-y-10">
                <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-400">Related Thinking</h4>
                <div className="space-y-5">
                  <div className="p-8 border border-gray-100 hover:border-deloitte-green transition-all cursor-pointer group shadow-sm bg-white">
                    <span className="text-[10px] font-black text-deloitte-green uppercase tracking-widest block mb-3">Report</span>
                    <h5 className="font-bold text-lg group-hover:text-deloitte-green transition-colors tracking-tight">2024 Global Human Capital Trends</h5>
                  </div>
                  <div className="p-8 border border-gray-100 hover:border-deloitte-green transition-all cursor-pointer group shadow-sm bg-white">
                    <span className="text-[10px] font-black text-deloitte-green uppercase tracking-widest block mb-3">Podcast</span>
                    <h5 className="font-bold text-lg group-hover:text-deloitte-green transition-colors tracking-tight">Voices of AI: Season 4</h5>
                  </div>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-gray-50 py-32 border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px] text-center">
          <h2 className="text-5xl font-black mb-12 tracking-tighter">Stay ahead of the curve.</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <button type="button" className="bg-black text-white px-14 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-deloitte-green hover:text-black transition-all shadow-lg">
              Explore the Archive
            </button>
            <button type="button" className="border border-black/20 text-black px-14 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-all">
              Join our Community
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsightPostPage;
