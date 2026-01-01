
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const RevealVideoSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Create a slight parallax or scale effect as it enters
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [0, 0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1.1, 1]);

  return (
    <section className="relative min-h-[110vh] w-full bg-black">
      {/* Background Media Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Deep Gradient Overlay for text readability and cinematic feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black z-10" />
        
        <motion.div 
          style={{ scale }}
          className="w-full h-full"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover grayscale-[0.2]"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-business-people-walking-in-a-modern-office-4334-large.mp4" type="video/mp4" />
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069" 
              alt="Office background" 
              className="w-full h-full object-cover"
            />
          </video>
        </motion.div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 min-h-screen flex flex-col justify-center sticky top-0">
        <div className="flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <span className="text-deloitte-green font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">
              Perspective
            </span>
            
            <h2 className="text-white text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.95] mb-12 tracking-tighter">
              Connecting dots. <br /> 
              <span className="font-extralight text-gray-400 italic">Designing futures.</span>
            </h2>
            
            <p className="text-white text-[clamp(1.1rem,1.4vw,1.4rem)] leading-relaxed max-w-2xl mx-auto mb-16 opacity-70 font-light px-4">
              True innovation isn't just about the next big thing. It's about how everything fits together to create impact that matters for everyone.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <button className="group relative overflow-hidden bg-white text-black px-12 py-4 rounded-full font-bold text-sm transition-all duration-500 shadow-2xl hover:text-white">
              <div className="absolute inset-0 bg-deloitte-green translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10">Our Global Approach</span>
            </button>
            <button className="group relative overflow-hidden border border-white/30 text-white px-12 py-4 rounded-full font-bold text-sm transition-all duration-500 hover:border-deloitte-green">
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">Success Stories</span>
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Spacer to allow the sticky content to be seen while scrolling */}
      <div className="h-[10vh]" />
    </section>
  );
};

export default RevealVideoSection;
