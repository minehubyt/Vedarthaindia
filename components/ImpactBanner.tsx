
import React from 'react';
import { motion } from 'framer-motion';

const ImpactBanner: React.FC = () => {
  return (
    <section className="relative min-h-[500px] flex items-center overflow-hidden py-[clamp(3rem,8vw,8rem)]">
      <img 
        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070" 
        alt="Team working together" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Commitment to sustainability and social impact.
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Our purpose is to make an impact that matters. This drives us to provide quality services and solutions for a more sustainable future.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 text-white">
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-deloitte-green mb-2">50%</div>
              <div className="text-xs uppercase tracking-widest font-bold">Carbon reduction by 2030</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-deloitte-green mb-2">$1B+</div>
              <div className="text-xs uppercase tracking-widest font-bold">Invested in social impact</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-deloitte-green mb-2">10M+</div>
              <div className="text-xs uppercase tracking-widest font-bold">Lives impacted globally</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactBanner;
