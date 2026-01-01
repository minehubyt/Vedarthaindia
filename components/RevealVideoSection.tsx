
import React from 'react';
import { motion } from 'framer-motion';

const RevealVideoSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] w-full bg-black flex items-center overflow-hidden">
      {/* Background Media Container */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale-[0.4] opacity-50"
        >
          <source src="https://res.cloudinary.com/dtgufvwb5/video/upload/v1765436446/10915129-hd_3840_2160_30fps_xy4way.mp4" type="video/mp4" />
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069" 
            alt="Office background" 
            className="w-full h-full object-cover"
          />
        </video>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 lg:px-[8vw] relative z-20 max-w-[1800px] py-20">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <span className="text-[#86BC25] font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">
              Perspective
            </span>
            
            <h2 className="text-white text-[clamp(1.75rem,6.5vw,4.5rem)] font-black leading-[1.1] mb-10 tracking-tight">
              Connecting dots. <br /> 
              <span className="font-extralight text-gray-400 italic">Designing futures.</span>
            </h2>
            
            <p className="text-white text-[clamp(0.95rem,1.2vw,1.3rem)] leading-relaxed max-w-2xl mx-auto mb-12 opacity-80 font-light px-4">
              True innovation isn't just about the next big thing. It's about how everything fits together to create impact that matters for everyone.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <button className="group relative overflow-hidden bg-white text-black px-10 py-4 rounded-full font-black text-[10px] uppercase tracking-widest transition-all duration-300 shadow-xl hover:text-white">
              <div className="absolute inset-0 bg-[#86BC25] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10">Our Global Approach</span>
            </button>
            <button className="group relative overflow-hidden border border-white/30 text-white px-10 py-4 rounded-full font-black text-[10px] uppercase tracking-widest transition-all duration-300 hover:border-[#86BC25]">
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
