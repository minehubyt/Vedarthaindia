
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Share2, Facebook, Linkedin, Mail, Twitter } from 'lucide-react';

const SHARED_VALUES = [
  {
    title: 'Lead the way',
    description: 'Vedartha is not only leading the profession, but also reinventing it for the future. We’re also committed to creating as much impact for our clients as we do for our own people.',
    icon: 'https://www.deloitte.com/content/dam/Deloitte/global/Images/promo_images/SharedValuesIcons/lead-the-way.png'
  },
  {
    title: 'Serve with integrity',
    description: 'By acting with the highest standards of professional conduct, we build and maintain the trust that is the cornerstone of our reputation.',
    icon: 'https://www.deloitte.com/content/dam/Deloitte/global/Images/promo_images/SharedValuesIcons/serve-with-integrity.png'
  },
  {
    title: 'Take care of each other',
    description: 'We look out for one another and prioritize the well-being of our colleagues. We ensure everyone feels safe, supported, and valued.',
    icon: 'https://www.deloitte.com/content/dam/Deloitte/global/Images/promo_images/SharedValuesIcons/take-care-of-each-other.png'
  },
  {
    title: 'Foster inclusion',
    description: 'Diversity and inclusion are at the heart of our culture. We foster an environment where every individual feels they belong and can contribute their best.',
    icon: 'https://www.deloitte.com/content/dam/Deloitte/global/Images/promo_images/SharedValuesIcons/foster-inclusion.png'
  },
  {
    title: 'Collaborate for measurable impact',
    description: 'We believe that working together across borders and industries is the only way to tackle the world’s most complex challenges.',
    icon: 'https://www.deloitte.com/content/dam/Deloitte/global/Images/promo_images/SharedValuesIcons/collaborate-for-measurable-impact.png'
  }
];

const PurposeValuesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Black Hero Header */}
      <section className="bg-black pt-32 pb-24 text-white">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1600px]">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-3 text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-12">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <ChevronRight size={14} />
            <a href="#" className="hover:text-white transition-colors">About Vedartha</a>
            <ChevronRight size={14} />
            <a href="#" className="hover:text-white transition-colors">Story</a>
            <ChevronRight size={14} />
            <span className="text-white">Purpose and values</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <h1 className="text-[clamp(3.5rem,8vw,7.5rem)] font-black leading-[0.9] tracking-tighter mb-8">
                Purpose and <br /> values
              </h1>
            </motion.div>

            {/* Social Sharing */}
            <div className="flex items-center space-x-6 pb-6">
              <Share2 size={20} className="text-gray-400 cursor-pointer hover:text-white transition-colors" />
              <div className="h-6 w-[1px] bg-white/20" />
              <Facebook size={20} className="text-gray-400 cursor-pointer hover:text-white transition-colors" />
              <Twitter size={20} className="text-gray-400 cursor-pointer hover:text-white transition-colors" />
              <Linkedin size={20} className="text-gray-400 cursor-pointer hover:text-white transition-colors" />
              <Mail size={20} className="text-gray-400 cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1600px]">
          <div className="max-w-4xl">
            <p className="text-[28px] md:text-[40px] font-light leading-tight text-black mb-16">
              At Vedartha, our purpose is to make an impact that matters. For more than 175 years, we have helped our clients and communities navigate change and reach their goals.
            </p>
            <div className="space-y-8 text-[18px] text-gray-600 font-light leading-relaxed">
              <p>
                Our purpose is why we exist. It is the guiding star that helps us make decisions and provides a framework for how we treat our people, our clients, and the communities where we live and work.
              </p>
              <p>
                Together with our values, our purpose serves as the foundation of our culture. It defines who we are and what we stand for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Values Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1600px]">
          <div className="flex items-center space-x-4 mb-16">
            <div className="w-1.5 h-12 bg-[#86BC25]" />
            <h2 className="text-[32px] md:text-[44px] font-bold tracking-tight">Our shared values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SHARED_VALUES.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-white p-12 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm flex flex-col items-center text-center group"
              >
                <div className="mb-10 w-24 h-24 overflow-hidden">
                  <img src={value.icon} alt={value.title} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-[22px] font-bold mb-6 group-hover:text-[#86BC25] transition-colors">{value.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Making an Impact Section */}
      <section className="relative overflow-hidden py-32 bg-black text-white">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1600px] relative z-10">
          <div className="max-w-3xl">
            <span className="text-[#86BC25] font-bold uppercase tracking-[0.3em] text-[12px] mb-8 block">Our commitment</span>
            <h2 className="text-[44px] md:text-[64px] font-bold leading-[1.1] mb-12 tracking-tighter">Making an impact that matters.</h2>
            <p className="text-xl text-gray-400 font-light mb-16 leading-relaxed">
              We provide quality services and solutions for a more sustainable future. Our commitment to environmental, social, and governance (ESG) goals is integrated into every aspect of our business.
            </p>
            <div className="flex flex-wrap gap-8">
              <button className="bg-[#86BC25] text-black px-12 py-4 rounded-full font-bold text-[14px] uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-[#86BC25]/20">
                Read our 2024 Global Impact Report
              </button>
              <button className="border border-white/20 text-white hover:bg-white hover:text-black px-12 py-4 rounded-full font-bold text-[14px] uppercase tracking-widest transition-all">
                Learn about WorldClass
              </button>
            </div>
          </div>
        </div>
        
        {/* Subtle Background Pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#86BC25" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default PurposeValuesPage;
