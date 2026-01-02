
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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

interface ServicesSectionProps {
  onNavigateToContact?: () => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigateToContact }) => {
  const { scrollYProgress } = useScroll();
  const bgTextY = useTransform(scrollYProgress, [0.4, 0.7], [0, -100]);

  return (
    <section className="bg-white relative">
      <StickyHeader title="Our work" bgColor="bg-black" />
      
      {/* Background Cinematic Text */}
      <motion.div 
        style={{ y: bgTextY }}
        className="absolute top-40 left-0 w-full pointer-events-none select-none overflow-hidden opacity-[0.03] whitespace-nowrap"
      >
        <span className="text-[25vw] font-black leading-none uppercase tracking-tighter text-black">
          Solutions. Impact. Future.
        </span>
      </motion.div>

      <div className="py-[clamp(4rem,10vw,8rem)] relative z-10 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          
          <div className="flex flex-col lg:flex-row gap-24 mb-24 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:w-1/2"
            >
              <span className="text-deloitte-green font-bold uppercase tracking-[0.4em] text-[clamp(10px,1.2vw,14px)] mb-8 block">
                Expertise & Capabilities
              </span>
              <h2 className="text-[clamp(2.5rem,8vw,6.5rem)] font-black mb-10 leading-[0.85] tracking-tighter text-black uppercase">
                Redefining the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-deloitte-green to-green-300">impossible.</span>
              </h2>
              <p className="text-[clamp(1.1rem,1.8vw,1.4rem)] text-gray-500 max-w-xl font-light leading-relaxed">
                We don't just solve problems; we identify opportunities before they arise. Our integrated approach ensures that every solution is built for resilience.
              </p>
            </motion.div>

            <div className="lg:w-1/2 pt-12">
               <div className="space-y-12">
                  {['Digital Transformation', 'Strategic Growth', 'Sustainable Impact'].map((item, i) => (
                    <motion.div 
                      key={item}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2, duration: 0.8 }}
                      className="group flex items-center justify-between border-b border-gray-100 pb-8 cursor-pointer"
                    >
                      <div className="flex items-center space-x-8">
                        <span className="text-gray-300 font-black text-2xl group-hover:text-deloitte-green transition-colors">0{i+1}</span>
                        <h3 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold tracking-tight group-hover:translate-x-4 transition-transform duration-500 uppercase">{item}</h3>
                      </div>
                    </motion.div>
                  ))}
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((service, index) => {
              const IconComp = icons[service.icon];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="group relative h-[480px] overflow-hidden rounded-sm bg-gray-50 cursor-pointer"
                >
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={SERVICE_IMAGES[service.title]} 
                      alt={service.title}
                      className="w-full h-full object-cover scale-110 group-hover:scale-100 grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-0 group-hover:opacity-40"
                    />
                    <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out opacity-20" />
                  </div>

                  <div className="absolute inset-0 z-10 p-10 flex flex-col justify-between">
                    <div>
                      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:bg-deloitte-green group-hover:text-white transition-all duration-500 mb-8 text-black">
                        <IconComp size={28} className="group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <h4 className="text-[clamp(1.2rem,2.5vw,2rem)] font-black mb-4 tracking-tighter group-hover:text-white transition-colors uppercase">
                        {service.title.split(' & ').map((t, i) => (
                          <React.Fragment key={t}>
                            {t} {i === 0 && service.title.includes('&') && <br />}
                          </React.Fragment>
                        ))}
                      </h4>
                      <p className="text-gray-500 group-hover:text-gray-100 text-base font-light leading-relaxed opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-700">
                        {service.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-black group-hover:text-white transition-colors border-t border-gray-100 group-hover:border-white/20 pt-6 mt-8">
                      <span className="text-xs font-bold uppercase tracking-[0.3em]">Explore</span>
                      <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
                    </div>
                  </div>

                  <div className="absolute top-0 left-0 w-full h-1 bg-deloitte-green scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                </motion.div>
              );
            })}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 p-12 bg-black text-white rounded-sm flex flex-col md:flex-row items-center justify-between gap-12 group hover:bg-neutral-900 transition-colors duration-500"
          >
            <div className="max-w-xl text-left">
              <h3 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold mb-4 tracking-tight uppercase">Ready to transform?</h3>
              <p className="text-gray-400 font-light text-[clamp(1rem,1.4vw,1.2rem)]">Partner with our global specialists to achieve measurable results.</p>
            </div>
            <button 
              onClick={onNavigateToContact}
              className="whitespace-nowrap bg-deloitte-green text-black px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:brightness-110 transition-all flex items-center space-x-4 group-hover:scale-105 duration-300"
            >
              <span>Connect with an expert</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
