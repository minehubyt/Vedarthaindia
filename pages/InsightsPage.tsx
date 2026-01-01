
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
    <div className="bg-white min-h-screen">
      {/* Immersive Insights Hero */}
      <section className="relative h-[80vh] w-full bg-black overflow-hidden flex items-end pb-16">
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <span className="inline-block bg-deloitte-green text-black text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1 mb-6">
              {INSIGHTS_ARTICLES[0].type}
            </span>
            <h1 className="text-white text-[clamp(2.5rem,6vw,5.5rem)] font-black leading-[0.95] mb-8 tracking-tighter">
              {INSIGHTS_ARTICLES[0].title}
            </h1>
            <p className="text-gray-300 text-xl md:text-2xl font-light mb-10 max-w-2xl leading-relaxed">
              {INSIGHTS_ARTICLES[0].description}
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                type="button"
                onClick={onArticleClick}
                className="bg-white text-black px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-deloitte-green transition-all shadow-2xl flex items-center space-x-3"
              >
                <span>Explore Trend Report</span>
                <ArrowRight size={18} />
              </button>
              <button type="button" className="border border-white/30 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all">
                Watch the Video
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Header */}
      <section className="pt-12 pb-6">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-deloitte-green font-black uppercase tracking-[0.4em] text-[10px] mb-2 block">Current Perspectives</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Latest from Deloitte Insights</h2>
            </div>
            <div className="flex items-center space-x-6 pb-2">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Share Hub</span>
              <div className="flex space-x-3">
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
          <div className="flex items-center space-x-8 overflow-x-auto no-scrollbar py-8 scroll-smooth pr-10">
            {TOPICS.map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() => setActiveTopic(topic)}
                className={`whitespace-nowrap text-[11px] font-black uppercase tracking-[0.2em] transition-all relative py-1 border-none bg-transparent appearance-none outline-none ${
                  activeTopic === topic ? 'text-deloitte-green' : 'text-gray-400 hover:text-black'
                }`}
              >
                {topic}
                {activeTopic === topic && (
                  <motion.div layoutId="activeTopic" className="absolute -bottom-1 left-0 right-0 h-1 bg-deloitte-green" />
                )}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex items-center space-x-6 border-l border-gray-100 pl-8 ml-4 h-full py-8">
            <Search size={18} className="text-gray-400 cursor-pointer hover:text-black transition-colors" />
            <Filter size={18} className="text-gray-400 cursor-pointer hover:text-black transition-colors" />
          </div>
        </div>
      </div>

      {/* Insights Content Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {INSIGHTS_ARTICLES.slice(1).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={onArticleClick}
                className="group cursor-pointer flex flex-col h-full bg-white border border-gray-50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 rounded-sm overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  {article.icon && (
                    <div className="absolute top-6 right-6 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-black shadow-lg">
                      {article.icon}
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-deloitte-green scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                </div>
                
                <div className="p-10 flex flex-col flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-deloitte-green text-[10px] font-black uppercase tracking-widest">{article.type}</span>
                    <span className="w-1 h-1 bg-gray-200 rounded-full" />
                    <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{article.tag}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-6 group-hover:text-deloitte-green transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 font-light leading-relaxed mb-8 flex-1">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <span className="text-xs font-black uppercase tracking-widest">Explore</span>
                    <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Subscription Banner */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-24 p-16 bg-black text-white rounded-sm flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-deloitte-green/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-6">
                <Bell size={24} className="text-deloitte-green" />
                <span className="text-xs font-black uppercase tracking-[0.4em] text-deloitte-green">Stay Ahead</span>
              </div>
              <h2 className="text-4xl font-bold mb-4 tracking-tight">Subscribe to Deloitte Insights</h2>
              <p className="text-gray-400 text-lg font-light max-w-xl leading-relaxed">
                Receive the latest thinking from our global experts directly in your inbox. Customize your preferences for industries and topics.
              </p>
            </div>

            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4 relative z-10">
              <input 
                type="email" 
                placeholder="Business Email" 
                className="bg-white/10 border border-white/20 px-8 py-4 rounded-full text-white outline-none focus:border-deloitte-green transition-colors min-w-[300px]"
              />
              <button type="button" className="bg-deloitte-green text-black px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:brightness-110 transition-all">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Podcast Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <div className="relative group">
                <div className="aspect-square bg-black overflow-hidden rounded-sm shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1000" 
                    alt="Podcast cover" 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:bg-deloitte-green transition-colors"
                    >
                      <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-black border-b-[12px] border-b-transparent ml-2" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-deloitte-green font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Now Playing</span>
              <h2 className="text-5xl font-black mb-8 leading-tight tracking-tighter">The Deloitte Insights <br /> Podcast Series</h2>
              <p className="text-xl text-gray-600 font-light mb-12 leading-relaxed">
                Join our editors as they interview the thinkers and leaders shaping tomorrow’s enterprise. From ESG to the Metaverse, we dive deep into the trends that matter.
              </p>
              <div className="flex flex-wrap gap-6">
                <button type="button" className="flex items-center space-x-3 bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-neutral-800 transition-all">
                  <Headphones size={20} />
                  <span>Listen on Spotify</span>
                </button>
                <button type="button" className="flex items-center space-x-3 border border-black/20 text-black px-8 py-4 rounded-full font-bold hover:bg-black hover:text-white transition-all">
                  <span>View Episode Library</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;
