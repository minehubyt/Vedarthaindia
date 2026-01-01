
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SLIDES = [
  {
    id: 1,
    title: 'Vedartha at CES 2026',
    headline: 'Join us at the most powerful tech event in the world.',
    description: 'Connect with Vedartha at CES 2026 to meet industry specialists and explore the trends, technologies, and strategies driving global change.',
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[current];

  return (
    <section className="sticky top-0 min-h-screen w-full bg-black overflow-hidden flex flex-col justify-start md:justify-center pt-[clamp(90px,15vh,140px)] pb-20">
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

      <div className="container mx-auto px-[6vw] lg:px-[8vw] relative z-20 max-w-[1800px]">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="text-white text-[clamp(0.7rem,1.5vw,0.9rem)] font-bold mb-4 block tracking-[0.2em] opacity-90 uppercase">
                {slide.title}
              </span>
              
              <h1 className="text-white text-[clamp(1.8rem,8vw,4.8rem)] font-black leading-[1.02] mb-8 tracking-tighter">
                {slide.headline}
              </h1>

              <p className="text-gray-300 text-[clamp(0.9rem,1.8vw,1.15rem)] leading-relaxed mb-10 max-w-xl font-light">
                {slide.description}
              </p>

              <button className={`${slide.ctaColor} hover:brightness-110 px-8 py-3.5 md:px-10 md:py-4 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all duration-300 shadow-xl`}>
                {slide.cta}
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-12 left-[6vw] lg:left-[8vw] z-30 flex items-center space-x-6">
        <div className="flex space-x-3">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="group py-2"
            >
              <div className={`h-[3px] rounded-full transition-all duration-500 ${
                current === i ? 'w-10 bg-[#86BC25]' : 'w-4 bg-white/20 group-hover:bg-white/40'
              }`} />
            </button>
          ))}
        </div>
        <div className="hidden sm:block">
          <span className="text-white/40 text-[10px] font-black tracking-[0.3em] uppercase">
            0{current + 1} / 0{SLIDES.length}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
