
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Search, Filter, Headphones, MonitorPlay, FileText, ArrowRight, Share2, Mail, Bell } from 'lucide-react';

const TOPICS = [
  'All Insights', 'Artificial Intelligence', 'Sustainability', 'Cloud', 'Future of Work', 
  'Cybersecurity', 'Global Economy', 'Supply Chain', 'Consumer Trends', 'Health Care'
];

const INSIGHTS_ARTICLES = [
  {
    id: 'hero',
    type: 'Special Report',
    title: 'Tech Trends 2025: Seven trends that matter',
    description: 'The line between physical and digital has vanished. Explore the technologies redefining the enterprise frontier.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2000',
    tag: 'Technology',
    featured: true
  },
  {
    id: '2',
    type: 'Article',
    title: 'The Generative AI productivity paradox',
    description: 'Why scaling AI requires more than just better algorithms—it requires a new social contract.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    tag: 'Artificial Intelligence',
    icon: <FileText size={16} />
  },
  {
    id: '3',
    type: 'Podcast',
    title: 'Voices of Sustainability: The Net Zero Path',
    description: 'Listen to global leaders discuss the practical hurdles of decarbonization in 2025.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
    tag: 'ESG',
    icon: <Headphones size={16} />
  },
  {
    id: '4',
    type: 'Dbrief',
    title: 'Global Tax Webcast: Quarterly Update',
    description: 'Stay ahead of international regulatory shifts with our live expert analysis.',
    image: 'https://images.unsplash.com/photo-1454165833767-0274b27f28a0?auto=format&fit=crop&q=80&w=800',
    tag: 'Tax',
    icon: <MonitorPlay size={16} />
  },
  {
    id: '5',
    type: 'Report',
    title: '2025 Global Human Capital Trends',
    description: 'New research on how organizations are thriving in a boundaryless world.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    tag: 'Strategy'
  },
  {
    id: '6',
    type: 'Insight',
    title: 'Quantum Computing: From Hype to Hybrid',
    description: 'Mapping the timeline for commercial quantum advantage in financial services.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800',
    tag: 'Tech Trends'
  }
];

interface InsightsPageProps {
  onArticleClick?: () => void;
}

const InsightsPage: React.FC<InsightsPageProps> = ({ onArticleClick }) => {
  const [activeTopic, setActiveTopic] = useState('All Insights');
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
      {/* Immersive Insights Hero */}
      <section className="relative h-[70vh] w-full bg-black overflow-hidden flex items-end pb-12">
        <div className="absolute inset-0 z-0">
          <img 
            src={INSIGHTS_ARTICLES[0].image} 
            alt="Hero" 
            className="w-full h-full object-cover opacity-60 grayscale-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-[8vw] relative z-10 max-w-[1800px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block bg-[#86BC25] text-black text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1 mb-6">
              {INSIGHTS_ARTICLES[0].type}
            </span>
            <h1 className="text-white text-[clamp(1.75rem,5.5vw,4rem)] font-black leading-[1.1] mb-6 tracking-tight">
              {INSIGHTS_ARTICLES[0].title}
            </h1>
            <p className="text-gray-300 text-[clamp(1rem,1.2vw,1.25rem)] font-light mb-8 max-w-2xl leading-relaxed">
              {INSIGHTS_ARTICLES[0].description}
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                type="button"
                onClick={onArticleClick}
                className="bg-white text-black px-8 py-3.5 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-[#86BC25] transition-all shadow-xl flex items-center space-x-3"
              >
                <span>Explore Trend Report</span>
                <ArrowRight size={16} />
              </button>
              <button type="button" className="border border-white/30 text-white px-8 py-3.5 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all">
                Watch the Video
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Header */}
      <section className="pt-12 pb-4">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <div>
              <span className="text-[#86BC25] font-black uppercase tracking-[0.4em] text-[10px] mb-2 block">Current Perspectives</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Latest from Vedartha Insights</h2>
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Share Hub</span>
              <div className="flex space-x-4">
                <Share2 size={18} className="text-gray-400 cursor-pointer hover:text-black transition-colors" />
                <Mail size={18} className="text-gray-400 cursor-pointer hover:text-black transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Topic Navigation Bar */}
      <div 
        className={`sticky z-[150] bg-white border-y border-gray-100 shadow-sm transition-all duration-300`}
        style={{ top: isHeaderVisible ? '70px' : '0px' }}
      >
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px] flex items-center justify-between">
          <div className="flex items-center space-x-8 overflow-x-auto no-scrollbar py-6 pr-10">
            {TOPICS.map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() => setActiveTopic(topic)}
                className={`whitespace-nowrap text-[10px] font-black uppercase tracking-[0.2em] transition-all relative py-1 ${
                  activeTopic === topic ? 'text-[#86BC25]' : 'text-gray-400 hover:text-black'
                }`}
              >
                {topic}
                {activeTopic === topic && (
                  <motion.div layoutId="activeTopic" className="absolute -bottom-1 left-0 right-0 h-1 bg-[#86BC25]" />
                )}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex items-center space-x-6 border-l border-gray-100 pl-8 ml-4 h-full py-6">
            <Search size={18} className="text-gray-400 cursor-pointer hover:text-black transition-colors" />
            <Filter size={18} className="text-gray-400 cursor-pointer hover:text-black transition-colors" />
          </div>
        </div>
      </div>

      {/* Insights Content Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {INSIGHTS_ARTICLES.slice(1).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={onArticleClick}
                className="group cursor-pointer flex flex-col h-full bg-white border border-gray-50 hover:shadow-2xl transition-all duration-500 rounded-sm overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {article.icon && (
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-black shadow-lg">
                      {article.icon}
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#86BC25] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-[#86BC25] text-[10px] font-black uppercase tracking-widest">{article.type}</span>
                    <span className="w-1 h-1 bg-gray-200 rounded-full" />
                    <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{article.tag}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-[#86BC25] transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 font-light leading-relaxed mb-6 flex-1 text-sm">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-[10px] font-black uppercase tracking-widest">Explore</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Subscription Banner */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 p-12 bg-black text-white rounded-sm flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#86BC25]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            
            <div className="relative z-10 flex-1">
              <div className="flex items-center space-x-4 mb-4">
                <Bell size={20} className="text-[#86BC25]" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#86BC25]">Stay Ahead</span>
              </div>
              <h2 className="text-3xl font-bold mb-3 tracking-tight">Subscribe to Vedartha Insights</h2>
              <p className="text-gray-400 text-base font-light max-w-xl leading-relaxed">
                Receive the latest thinking from our global experts directly in your inbox.
              </p>
            </div>

            <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4 relative z-10">
              <input 
                type="email" 
                placeholder="Business Email" 
                className="bg-white/10 border border-white/20 px-6 py-3.5 rounded-full text-white outline-none focus:border-[#86BC25] transition-colors min-w-[280px] text-sm"
              />
              <button type="button" className="bg-[#86BC25] text-black px-8 py-3.5 rounded-full font-bold text-[10px] uppercase tracking-widest hover:brightness-110 transition-all">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;
