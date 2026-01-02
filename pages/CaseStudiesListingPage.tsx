
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Search, Filter, Globe } from 'lucide-react';

const CATEGORIES = ['All', 'Audit & Assurance', 'Consulting', 'Tax', 'Financial Advisory', 'Risk Advisory'];

const CASE_STUDIES = [
  {
    id: '1',
    category: 'Consulting',
    title: 'Forget the dream, it\'s all about the seam',
    description: 'How a major sports apparel brand redesigned their digital commerce architecture to prioritize speed and reliability.',
    impact: '40% Increase in mobile conversion',
    imageUrl: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800',
    tags: ['E-commerce', 'Cloud Strategy']
  }
];

interface CaseStudiesListingPageProps {
  onCaseClick: (id: string) => void;
}

const CaseStudiesListingPage: React.FC<CaseStudiesListingPageProps> = ({ onCaseClick }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="bg-white min-h-screen">
      {/* Optimized Header Padding for AI Smart Layout */}
      <section className="bg-black text-white pt-[70px] pb-24 overflow-hidden relative">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px] relative z-10 mt-[clamp(2rem,6vh,4rem)]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[#86BC25] font-black uppercase tracking-[0.4em] text-[clamp(10px,1.2vw,14px)] mb-8 block">
              What we do / Case studies
            </span>
            <div className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.4em] text-white/60 mb-8">
              <Globe size={16} className="text-[#86BC25]" />
              <span>Global Success Stories</span>
            </div>
            <h1 className="text-[clamp(2.5rem,10vw,8.5rem)] font-black leading-[0.85] tracking-tighter mb-10 uppercase">
              Client Stories & <br /> <span className="text-gray-400">Successes</span>
            </h1>
            <p className="text-[clamp(1.1rem,1.8vw,1.4rem)] text-gray-300 font-light max-w-2xl leading-relaxed">
              We collaborate with organizations to solve their most complex challenges and deliver measurable, sustainable impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-[70px] bg-white border-b border-gray-100 z-[140]">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px] flex items-center justify-between py-6">
          <div className="flex items-center space-x-8 overflow-x-auto no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap text-[10px] font-black uppercase tracking-widest transition-all relative py-1 ${
                  activeCategory === cat ? 'text-[#86BC25]' : 'text-gray-400 hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesListingPage;
