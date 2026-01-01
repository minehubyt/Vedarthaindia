
import React from 'react';
import { motion } from 'framer-motion';

const RevealVideoSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full bg-black flex items-center overflow-hidden">
      {/* Background Media Container */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale-[0.4] opacity-50"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-business-people-walking-in-a-modern-office-4334-large.mp4" type="video/mp4" />
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069" 
            alt="Office background" 
            className="w-full h-full object-cover"
          />
        </video>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 lg:px-[8vw] relative z-20 max-w-[1800px] py-24">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <span className="text-[#86BC25] font-bold uppercase tracking-[0.4em] text-[10px] mb-10 block">
              Perspective
            </span>
            
            <h2 className="text-white text-[clamp(2.2rem,8vw,5.5rem)] font-black leading-[1.05] mb-10 tracking-tight">
              Connecting dots. <br /> 
              <span className="font-extralight text-gray-400 italic">Designing futures.</span>
            </h2>
            
            <p className="text-white text-[clamp(1rem,1.4vw,1.4rem)] leading-relaxed max-w-3xl mx-auto mb-16 opacity-80 font-light px-4">
              True innovation isn't just about the next big thing. It's about how everything fits together to create impact that matters for everyone.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <button className="group relative overflow-hidden bg-white text-black px-12 py-4 rounded-full font-black text-[11px] uppercase tracking-widest transition-all duration-300 shadow-xl hover:text-white">
              <div className="absolute inset-0 bg-[#86BC25] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10">Our Global Approach</span>
            </button>
            <button className="group relative overflow-hidden border border-white/30 text-white px-12 py-4 rounded-full font-black text-[11px] uppercase tracking-widest transition-all duration-300 hover:border-[#86BC25]">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">Success Stories</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RevealVideoSection;
