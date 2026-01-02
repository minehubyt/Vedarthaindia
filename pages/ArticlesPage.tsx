
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, Share2, Bookmark, User, MessageCircle, Eye } from 'lucide-react';

const ARTICLES = [
  {
    id: '1',
    title: 'The Silent Revolution: Applied AI in Manufacturing',
    author: 'Elena Rossi',
    role: 'Global Operations Leader',
    readTime: '12 min',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    category: 'Operations',
    views: '1.2k',
    description: 'How edge-computing and vision AI are transforming factory floors from cost centers to innovation labs.'
  },
  {
    id: '2',
    title: 'Sustainability as Strategy, Not Compliance',
    author: 'Marcus Chen',
    role: 'ESG Advisory Partner',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
    category: 'Sustainability',
    views: '840',
    description: 'Moving beyond reporting to create genuine competitive advantage.'
  }
];

const ArticlesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* AI AUTO-OPTIMIZED HEADER SPACING */}
      <section className="bg-black text-white pt-[clamp(120px,18vh,160px)] pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px] relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center space-x-4 mb-8">
              <span className="w-10 h-[2px] bg-[#86BC25]" />
              <span className="text-[#86BC25] font-black uppercase tracking-[0.4em] text-[10px]">The Insight Journal</span>
            </div>
            <h1 className="text-[clamp(2.5rem,10vw,8.5rem)] font-black leading-[0.85] tracking-tighter mb-12 uppercase">
              Editorial <br /> <span className="text-gray-500">Perspectives</span>
            </h1>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#86BC25]/5 blur-[150px]" />
      </section>

      {/* Magazine Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {ARTICLES.map((article, idx) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer flex flex-col h-full border-b border-gray-100 pb-12 hover:border-[#86BC25] transition-all duration-500"
              >
                <div className="relative aspect-[16/10] overflow-hidden mb-10 rounded-sm">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-6 left-6"><span className="bg-black/80 backdrop-blur text-white px-3 py-1 text-[9px] font-black uppercase tracking-widest">{article.category}</span></div>
                </div>
                <div className="flex-1 space-y-6">
                  <div className="flex items-center justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    <div className="flex items-center space-x-3"><Clock size={14} className="text-[#86BC25]" /><span>{article.readTime} Read</span></div>
                  </div>
                  <h3 className="text-2xl font-black group-hover:text-[#86BC25] transition-colors">{article.title}</h3>
                  <p className="text-gray-500 font-light line-clamp-3">{article.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlesPage;
