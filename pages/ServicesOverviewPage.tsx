
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield, Zap, Search, ChevronRight } from 'lucide-react';

const SERVICE_LINES = [
  {
    title: 'Audit & Assurance',
    path: 'audit',
    description: 'Providing high-quality audits through innovation and transparency.',
    imageUrl: 'https://images.unsplash.com/photo-1454165833767-0274b27f28a0?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Consulting',
    path: 'ai-engineering',
    description: 'Helping organizations drive transformation through strategy and tech.',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Risk Advisory',
    path: 'assurance',
    description: 'Navigating regulatory complexity and operational resilience.',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800'
  }
];

interface ServicesOverviewPageProps {
  onServiceClick: (path: string) => void;
}

const ServicesOverviewPage: React.FC<ServicesOverviewPageProps> = ({ onServiceClick }) => {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-black text-white pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px] relative z-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <div className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.4em] text-[#86BC25] mb-8">
              <Zap size={16} />
              <span>Capabilities</span>
            </div>
            <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-black leading-[0.9] tracking-tighter mb-10 uppercase">
              Our <br /> <span className="text-gray-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 font-light max-w-2xl leading-relaxed">
              We provide end-to-end expertise that helps businesses evolve, scale, and thrive in an increasingly digital and sustainable global economy.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SERVICE_LINES.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => onServiceClick(service.path)}
                className="group cursor-pointer border-b border-gray-100 pb-12"
              >
                <div className="relative aspect-[16/9] mb-10 overflow-hidden rounded-sm">
                  <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                </div>
                <h3 className="text-3xl font-black mb-4 group-hover:text-[#86BC25] transition-colors">{service.title}</h3>
                <p className="text-gray-500 font-light text-lg mb-8 leading-relaxed">{service.description}</p>
                <button className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-widest text-black group-hover:translate-x-2 transition-transform">
                  <span>Explore service line</span>
                  <ChevronRight size={18} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesOverviewPage;
