
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Share2, Facebook, Linkedin, Mail, Twitter } from 'lucide-react';

const SHARED_VALUES = [
  {
    title: 'Lead the way',
    description: 'Vedartha is not only leading the profession, but also reinventing it for the future.',
    icon: 'https://www.deloitte.com/content/dam/Deloitte/global/Images/promo_images/SharedValuesIcons/lead-the-way.png'
  },
  {
    title: 'Serve with integrity',
    description: 'By acting with the highest standards of professional conduct, we build and maintain trust.',
    icon: 'https://www.deloitte.com/content/dam/Deloitte/global/Images/promo_images/SharedValuesIcons/serve-with-integrity.png'
  }
];

const PurposeValuesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* AI AUTO-OPTIMIZED HEADER SPACING */}
      <section className="bg-black min-h-[50vh] flex flex-col justify-center text-white pt-[clamp(120px,18vh,160px)] pb-16 md:pb-24">
        <div className="container mx-auto px-[6vw] lg:px-[8vw] max-w-[1600px]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <span className="text-[#86BC25] font-black uppercase tracking-[0.4em] text-[clamp(10px,1.2vw,14px)] mb-10 block">
                Who we are / Purpose & Values
              </span>
              <h1 className="text-[clamp(2.5rem,10vw,8.5rem)] font-black leading-[0.85] tracking-tighter mb-8 uppercase">
                Purpose and <br /> values
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="py-[clamp(4rem,10vw,8rem)] bg-white border-b border-gray-100">
        <div className="container mx-auto px-[6vw] lg:px-[8vw] max-w-[1600px]">
          <div className="max-w-4xl">
            <p className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-light leading-tight text-black mb-16">
              At Vedartha, our purpose is to make an impact that matters.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PurposeValuesPage;
