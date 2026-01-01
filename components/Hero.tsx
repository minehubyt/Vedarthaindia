
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
  
  // Parallax effects as the section below slides over
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const scale = useTransform(scrollY, [0, 800], [1, 0.9]);
  const opacity = useTransform(scrollY, [0, 800], [1, 0.4]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[current];

  return (
    <motion.section 
      style={{ scale, opacity }}
      className="relative h-screen w-full bg-black overflow-hidden flex flex-col justify-center z-10"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "linear" }}
            src={slide.image} 
            alt={slide.title} 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
        </motion.div>
      </AnimatePresence>

      <motion.div 
        style={{ y }}
        className="container mx-auto px-6 lg:px-[8vw] relative z-20 max-w-[1800px]"
      >
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="text-white text-[clamp(1rem,1.8vw,1.5rem)] font-light mb-3 block tracking-tight opacity-90">
                {slide.title}
              </span>
              
              <h1 className="text-white text-[clamp(2.5rem,5.5vw,5rem)] font-bold leading-[1.05] mb-6 tracking-tighter">
                {slide.headline.split('.').map((part, i) => (
                  <React.Fragment key={i}>
                    {part}{i === 0 && part.length > 0 && '.'}
                    {i === 0 && part.length > 0 && <br className="hidden md:block" />}
                  </React.Fragment>
                ))}
              </h1>

              <p className="text-gray-400 text-[clamp(0.95rem,1.1vw,1.15rem)] leading-relaxed mb-10 max-w-xl font-light">
                {slide.description}
              </p>

              <button className={`${slide.ctaColor} hover:brightness-110 px-10 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 shadow-2xl transform hover:-translate-y-1`}>
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
              <div className={`h-[2px] rounded-full transition-all duration-500 ${
                current === i ? 'w-10 bg-white' : 'w-4 bg-white/20 group-hover:bg-white/40'
              }`} />
            </button>
          ))}
        </div>
        <div className="flex items-center space-x-3">
          <div className="h-[2px] w-6 bg-white/20 rounded-full" />
          <span className="text-white/50 text-[9px] font-bold tracking-[0.4em] uppercase">
            0{current + 1} / 0{SLIDES.length}
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5 z-30">
        <motion.div 
          key={current}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 8, ease: "linear" }}
          className="h-full bg-white/30 origin-left"
        />
      </div>
    </motion.section>
  );
};

export default Hero;
