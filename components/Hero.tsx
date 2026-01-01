
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const SLIDES = [
  {
    id: 1,
    title: 'Deloitte at CES 2026',
    headline: 'Join us at the most powerful tech event in the world.',
    description: 'Connect with Deloitte at CES 2026 to meet industry specialists and explore the trends, technologies, and strategies driving global change.',
    cta: 'Learn more',
    ctaColor: 'bg-[#2B88B1]',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072'
  },
  {
    id: 2,
    title: 'Sustainability & Climate',
    headline: 'Accelerating the transition to a low-carbon economy.',
    description: 'We help organizations integrate sustainability into their core strategy to drive value and create a better future for all.',
    cta: 'Explore Insights',
    ctaColor: 'bg-[#86BC25]',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2070'
  },
  {
    id: 3,
    title: 'Generative AI',
    headline: 'Scaling AI with confidence and strategic precision.',
    description: 'Navigate the complexities of generative AI and unlock new levels of productivity across your enterprise with trusted solutions.',
    cta: 'Read the Report',
    ctaColor: 'bg-white text-black',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070'
  }
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const { scrollY } = useScroll();
  
  // Parallax: Hero sinks slightly and dims as content scrolls over it
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0.4]);
  const scale = useTransform(scrollY, [0, 600], [1, 0.95]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[current];

  return (
    <motion.section 
      style={{ opacity, scale }}
      className="sticky top-0 h-screen w-full bg-black overflow-hidden flex flex-col justify-center"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={slide.image} 
            alt={slide.title} 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        </motion.div>
      </AnimatePresence>

      <motion.div 
        style={{ y }}
        className="container mx-auto px-6 lg:px-[8vw] relative z-20 max-w-[1800px]"
      >
        <div className="max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="text-white text-[clamp(0.875rem,1.1vw,1rem)] font-bold mb-4 block tracking-widest opacity-90 uppercase">
                {slide.title}
              </span>
              
              <h1 className="text-white text-[clamp(2rem,7vw,4.5rem)] font-black leading-[1.05] mb-10 tracking-tight">
                {slide.headline}
              </h1>

              <p className="text-gray-300 text-[clamp(0.95rem,1.2vw,1.15rem)] leading-relaxed mb-12 max-w-xl font-light">
                {slide.description}
              </p>

              <button className={`${slide.ctaColor} hover:brightness-110 px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl transform hover:-translate-y-1`}>
                {slide.cta}
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      <div className="absolute bottom-12 left-6 lg:left-[8vw] z-30 flex items-center space-x-6">
        <div className="flex space-x-3">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="group py-2 flex items-center"
            >
              <div className={`h-[3px] rounded-full transition-all duration-500 ${
                current === i ? 'w-10 bg-[#86BC25]' : 'w-4 bg-white/30 group-hover:bg-white/60'
              }`} />
            </button>
          ))}
        </div>
        <div className="hidden sm:flex items-center space-x-3">
          <div className="h-[1px] w-6 bg-white/20 rounded-full" />
          <span className="text-white/50 text-[10px] font-black tracking-[0.4em] uppercase">
            0{current + 1} / 0{SLIDES.length}
          </span>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
