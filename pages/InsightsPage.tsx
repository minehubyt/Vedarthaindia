
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Search, Filter, Headphones, MonitorPlay, FileText, ArrowRight, Share2, Mail, Bell } from 'lucide-react';

const TOPICS = [
  'All Insights', 'Artificial Intelligence', 'Sustainability', 'Cloud', 'Future of Work', 
  'Cybersecurity', 'Global Economy'
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
  }
];

interface InsightsPageProps {
  onArticleClick?: () => void;
}

const InsightsPage: React.FC<InsightsPageProps> = ({ onArticleClick }) => {
  const [activeTopic, setActiveTopic] = useState('All Insights');

  return (
    <div className="bg-white min-h-screen">
      {/* Optimized Header Padding for AI Smart Layout */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] w-full bg-black overflow-hidden flex flex-col justify-start md:justify-center pt-[70px] pb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={INSIGHTS_ARTICLES[0].image} 
            alt="Hero" 
            className="w-full h-full object-cover opacity-60 grayscale-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
        
        <div className="container mx-auto px-[6vw] lg:px-[8vw] relative z-10 max-w-[1800px] mt-[clamp(2rem,6vh,4rem)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block bg-[#86BC25] text-black text-[clamp(10px,1.2vw,14px)] font-black uppercase tracking-[0.3em] px-4 py-1 mb-6">
              {INSIGHTS_ARTICLES[0].type}
            </span>
            <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-black leading-[0.9] tracking-tighter mb-6 uppercase">
              {INSIGHTS_ARTICLES[0].title}
            </h1>
            <p className="text-gray-300 text-[clamp(1.1rem,1.8vw,1.4rem)] font-light mb-8 max-w-2xl leading-relaxed">
              {INSIGHTS_ARTICLES[0].description}
            </p>
            <button 
              type="button"
              onClick={onArticleClick}
              className="bg-white text-black px-8 py-3.5 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-[#86BC25] transition-all shadow-xl flex items-center space-x-3"
            >
              <span>Explore Trend Report</span>
              <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Topic Bar */}
      <div className="sticky top-[70px] z-[150] bg-white border-y border-gray-100 shadow-sm">
        <div className="container mx-auto px-[6vw] lg:px-[8vw] max-w-[1800px] flex items-center justify-between">
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
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsPage;
