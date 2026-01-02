
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Share2, Facebook, Linkedin, Mail, Twitter, Globe, Users, Target } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* AI AUTO-OPTIMIZED HEADER SPACING */}
      <section className="bg-black min-h-[50vh] flex flex-col justify-center text-white relative overflow-hidden pt-[clamp(120px,18vh,160px)] pb-16 md:pb-24">
        <div className="container mx-auto px-[6vw] lg:px-[8vw] max-w-[1600px] relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <span className="text-[#86BC25] font-black uppercase tracking-[0.4em] text-[clamp(10px,1.2vw,14px)] mb-10 block">
              Who we are / About us
            </span>
            <h1 className="text-[clamp(2.5rem,10vw,8.5rem)] font-black leading-[0.85] tracking-tighter mb-8 uppercase">
              About <br /> Vedartha
            </h1>
            <p className="text-[clamp(1.2rem,3vw,2.2rem)] font-light text-gray-400 tracking-tight leading-none uppercase">
              Purpose-led. Impact-driven.
            </p>
          </motion.div>
        </div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#86BC25]/10 rounded-full blur-[120px]" />
      </section>

      {/* Narrative Section 1 */}
      <section className="py-[clamp(4rem,10vw,8rem)] bg-white">
        <div className="container mx-auto px-[6vw] lg:px-[8vw] max-w-[1600px]">
          <div className="max-w-4xl">
            <h2 className="text-[clamp(1.8rem,4.5vw,3.5rem)] font-bold leading-tight mb-12 tracking-tight text-black">
              At Vedartha, we believe we can make a difference.
            </h2>
            <p className="text-[clamp(1rem,1.6vw,1.4rem)] text-gray-600 font-light leading-relaxed mb-16">
              Vedartha is a leading global provider of audit and assurance, consulting, financial advisory, risk advisory, tax, and related services. With a commitment to making a real difference, our organization has grown in scale and diversity—yet our shared culture remains at the heart of everything we do.
            </p>
            <div className="h-2 w-24 bg-[#86BC25]" />
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="relative h-[clamp(300px,60vh,800px)] overflow-hidden">
        <img 
          src="https://www.deloitte.com/content/dam/Deloitte/global/Images/promo_images/SharedValuesIcons/Together-makes-progress-hero.jpg" 
          alt="People collaborating"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-16 left-[6vw] lg:left-[8vw] max-w-3xl text-white">
          <h3 className="text-[clamp(2rem,6vw,4.5rem)] font-black mb-6 tracking-tighter leading-[0.9] uppercase">Making an impact that matters.</h3>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
