
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import StickyHeader from './StickyHeader';

const CAREER_SLIDES = [
  {
    title: "Join our team of pioneers.",
    description: "At Vedartha, you'll have the opportunity to work with some of the world's most innovative organizations and help them solve their most complex problems.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070",
    label: "Experienced Professionals"
  },
  {
    title: "Shape the future, your way.",
    description: "Whether you're just starting your career or looking for your next challenge, Vedartha provides a culture of inclusion and growth.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070",
    label: "Students & Graduates"
  },
  {
    title: "Make an impact that matters.",
    description: "We're looking for individuals with diverse perspectives and a passion for making a difference.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=2074",
    label: "Life at Vedartha"
  }
];

interface CareerSlideshowProps {
  onNavigateToCareers?: () => void;
}

const CareerSlideshow: React.FC<CareerSlideshowProps> = ({ onNavigateToCareers }) => {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % CAREER_SLIDES.length);
  const prev = () => setActive((prev) => (prev - 1 + CAREER_SLIDES.length) % CAREER_SLIDES.length);

  return (
    <section className="bg-white relative">
      <StickyHeader title="Careers" bgColor="bg-[#86BC25]" />
      
      <div className="relative min-h-[90vh] flex flex-col lg:flex-row bg-black overflow-hidden">
        <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-black text-white order-2 lg:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-deloitte-green font-bold uppercase tracking-[0.2em] text-[clamp(10px,1.2vw,14px)] mb-6 block">
                {CAREER_SLIDES[active].label}
              </span>
              <h2 className="text-[clamp(2.5rem,8vw,6.5rem)] font-black mb-10 leading-[0.9] tracking-tighter uppercase">
                {CAREER_SLIDES[active].title}
              </h2>
              <p className="text-[clamp(1.1rem,1.8vw,1.4rem)] text-gray-400 mb-14 max-w-lg leading-relaxed font-light">
                {CAREER_SLIDES[active].description}
              </p>
              <button 
                onClick={onNavigateToCareers}
                className="group flex items-center space-x-6 bg-white text-black px-10 py-5 rounded-full font-bold hover:bg-deloitte-green hover:text-white transition-all duration-300 shadow-2xl"
              >
                <span className="text-sm uppercase tracking-widest">Explore careers</span>
                <ArrowRight className="group-hover:translate-x-3 transition-transform duration-300" />
              </button>
            </motion.div>
          </AnimatePresence>

          <div className="flex space-x-6 mt-20">
            <button 
              onClick={prev} 
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={next} 
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group"
              aria-label="Next slide"
            >
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-full order-1 lg:order-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <img
                src={CAREER_SLIDES[active].image}
                alt={CAREER_SLIDES[active].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 lg:hidden" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-40 hidden lg:block" />
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute bottom-10 right-10 flex space-x-3 z-20">
            {CAREER_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                  active === i ? 'bg-deloitte-green w-10' : 'bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSlideshow;
