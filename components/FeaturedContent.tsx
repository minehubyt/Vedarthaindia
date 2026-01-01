
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FEATURED_ARTICLES } from '../constants';
import StickyHeader from './StickyHeader';

interface FeaturedContentProps {
  onNavigateToInsights?: () => void;
}

const FeaturedContent: React.FC<FeaturedContentProps> = ({ onNavigateToInsights }) => {
  return (
    <section className="bg-gray-50 border-b border-gray-200">
      <StickyHeader title="Our thinking" />
      <div className="py-[clamp(4rem,10vw,10rem)]">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-black">Latest Insights</h2>
              <div className="h-1.5 w-24 bg-deloitte-green" />
            </div>
            <button 
              onClick={onNavigateToInsights}
              className="flex items-center space-x-2 text-black font-bold hover:text-deloitte-green transition-colors group"
            >
              <span>View all perspectives</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURED_ARTICLES.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onClick={onNavigateToInsights}
                className="group cursor-pointer bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border-b-4 border-transparent hover:border-deloitte-green rounded-sm"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/80 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3">
                      {article.tag}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <span className="text-deloitte-green text-xs font-bold uppercase tracking-widest mb-3 block">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-bold mb-4 line-clamp-2 min-h-[3.5rem] group-hover:text-deloitte-green transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-6 font-light">
                    {article.description}
                  </p>
                  <div className="flex items-center text-black font-bold text-sm group-hover:translate-x-2 transition-transform duration-300">
                    Read more <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
