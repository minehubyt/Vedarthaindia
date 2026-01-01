
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lightbulb, AlertTriangle, Briefcase, ChevronRight } from 'lucide-react';
import { SERVICES } from '../constants';
import StickyHeader from './StickyHeader';

const icons: Record<string, any> = {
  ShieldCheck,
  Lightbulb,
  AlertTriangle,
  Briefcase
};

const SERVICE_IMAGES: Record<string, string> = {
  'Audit & Assurance': 'https://images.unsplash.com/photo-1454165833767-0274b27f28a0?auto=format&fit=crop&q=80&w=800',
  'Consulting': 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
  'Risk Advisory': 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
  'Tax & Legal': 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
};

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-white relative">
      <StickyHeader title="Our work" bgColor="bg-black" />
      
      <div className="py-24 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          
          <div className="flex flex-col lg:flex-row gap-16 mb-20 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <span className="text-deloitte-green font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">
                Expertise & Capabilities
              </span>
              <h2 className="text-[clamp(2rem,6vw,4rem)] font-black mb-8 leading-[1.1] tracking-tight text-black">
                Redefining the <br />
                <span className="text-[#86BC25]">possible.</span>
              </h2>
              <p className="text-[clamp(1.1rem,1.5vw,1.4rem)] text-gray-500 max-w-xl font-light leading-relaxed">
                We don't just solve problems; we identify opportunities before they arise. Our integrated approach ensures resilient growth.
              </p>
            </motion.div>

            <div className="lg:w-1/2 pt-6 w-full">
               <div className="space-y-8">
                  {['Digital Transformation', 'Strategic Growth', 'Sustainable Impact'].map((item, i) => (
                    <div key={item} className="flex items-center justify-between border-b border-gray-100 pb-6 group cursor-pointer">
                      <div className="flex items-center space-x-6">
                        <span className="text-gray-200 font-black text-xl">0{i+1}</span>
                        <h3 className="text-[clamp(1.2rem,2.5vw,2rem)] font-bold tracking-tight group-hover:text-[#86BC25] transition-colors">{item}</h3>
                      </div>
                      <ChevronRight className="text-gray-200 group-hover:text-[#86BC25] transition-colors" />
                    </div>
                  ))}
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => {
              const IconComp = icons[service.icon];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative h-[400px] overflow-hidden rounded-sm bg-gray-50 cursor-pointer"
                >
                  <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700">
                    <img src={SERVICE_IMAGES[service.title]} alt={service.title} className="w-full h-full object-cover grayscale" />
                  </div>
                  <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md group-hover:bg-[#86BC25] group-hover:text-white transition-all mb-8">
                        <IconComp size={22} />
                      </div>
                      <h4 className="text-xl font-bold mb-4 tracking-tight group-hover:text-[#86BC25] transition-colors">{service.title}</h4>
                      <p className="text-gray-500 group-hover:text-black text-sm font-light leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 group-hover:border-[#86BC25]/20">
                      <span className="text-[10px] font-black uppercase tracking-widest">Explore</span>
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
