
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Rocket, Award, Heart, ShieldCheck, Target } from 'lucide-react';

const CAREER_PATHS = [
  {
    id: 'exp',
    title: 'Experienced Professionals',
    description: 'Take your expertise to the next level. We provide the platform for you to lead, innovate, and make a global impact.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    color: 'bg-[#86BC25]'
  },
  {
    id: 'grad',
    title: 'Students & Graduates',
    description: 'Launch your career where potential meets opportunity. Discover programs designed to accelerate your professional journey.',
    image: 'https://images.unsplash.com/photo-1523240715630-9412d26f027c?auto=format&fit=crop&q=80&w=800',
    color: 'bg-[#0076A8]'
  }
];

const CareersPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Optimized Header Padding for AI Smart Layout */}
      <section className="relative min-h-screen flex flex-col justify-center bg-black text-white overflow-hidden pt-[70px] pb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-50 grayscale"
            alt="Careers Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        </div>

        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px] relative z-10 mt-[clamp(2rem,6vh,4rem)]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <span className="text-[#86BC25] font-black uppercase tracking-[0.4em] text-[clamp(10px,1.2vw,14px)] mb-8 block">Your Journey Starts Here</span>
            <h1 className="text-[clamp(2.5rem,10vw,8.5rem)] font-black leading-[0.85] tracking-tighter mb-10 uppercase">
              Impact from <br /> <span className="text-gray-400">day one.</span>
            </h1>
            
            <p className="text-[clamp(1.1rem,1.8vw,1.4rem)] text-gray-300 font-light max-w-2xl leading-relaxed mb-14">
              Discover a career that is as unique as you are. Join our global team of professionals and start making an impact that matters.
            </p>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#86BC25] text-black px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:brightness-110 transition-all flex items-center space-x-4 shadow-2xl shadow-[#86BC25]/20 group w-fit"
            >
              <span>Explore Open Positions</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Grid Content */}
      <section className="py-[clamp(4rem,10vw,8rem)] bg-gray-50">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {CAREER_PATHS.map((path, idx) => (
              <motion.div
                key={path.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-gray-200"
              >
                <div className="relative h-72 overflow-hidden">
                  <img src={path.image} alt={path.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="p-12 space-y-6">
                  <h3 className="text-[clamp(1.5rem,2.5vw,2rem)] font-black tracking-tight group-hover:text-[#86BC25] transition-colors uppercase">{path.title}</h3>
                  <p className="text-gray-500 font-light text-base leading-relaxed">
                    {path.description}
                  </p>
                  <div className="pt-6 flex items-center justify-between border-t border-gray-50">
                    <span className="text-[10px] font-black uppercase tracking-widest">Learn more</span>
                    <ArrowRight size={20} className="text-gray-300 group-hover:text-black group-hover:translate-x-2 transition-all" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
