
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Share2, Facebook, Linkedin, Mail, Twitter, Globe, Users, Target } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Black Hero Header */}
      <section className="bg-black min-h-[50vh] flex flex-col justify-center text-white relative overflow-hidden pt-[max(80px,12vh)] pb-16 md:pb-24">
        <div className="container mx-auto px-[6vw] lg:px-[8vw] max-w-[1600px] relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-3 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-10 md:mb-12">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <ChevronRight size={14} />
            <span className="text-white">About Vedartha</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl"
            >
              <h1 className="text-[clamp(3rem,8.5vw,7.5rem)] font-black leading-[0.85] tracking-tighter mb-8 uppercase">
                About <br /> Vedartha
              </h1>
              <p className="text-[clamp(1.4rem,3vw,2.8rem)] font-light text-gray-400 tracking-tight leading-none">
                Purpose-led. Impact-driven.
              </p>
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
        {/* Subtle background element */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#86BC25]/10 rounded-full blur-[120px]" />
      </section>

      {/* Narrative Section 1 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-[6vw] lg:px-[8vw] max-w-[1600px]">
          <div className="max-w-4xl">
            <h2 className="text-[clamp(1.8rem,4.5vw,3.5rem)] font-bold leading-tight mb-12 tracking-tight">
              At Vedartha, we believe we can make a difference.
            </h2>
            <p className="text-[clamp(1rem,1.6vw,1.6rem)] text-gray-600 font-light leading-relaxed mb-16">
              Vedartha is a leading global provider of audit and assurance, consulting, financial advisory, risk advisory, tax, and related services. With a commitment to making a real difference, our organization has grown in scale and diversity—yet our shared culture remains at the heart of everything we do.
            </p>
            <div className="h-2 w-24 bg-[#86BC25]" />
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <img 
          src="https://www.deloitte.com/content/dam/Deloitte/global/Images/promo_images/SharedValuesIcons/Together-makes-progress-hero.jpg" 
          alt="People collaborating"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-16 left-[6vw] lg:left-[8vw] max-w-3xl text-white">
          <h3 className="text-[clamp(2.2rem,6vw,5rem)] font-black mb-6 tracking-tighter leading-[0.9] uppercase">Making an impact that matters.</h3>
          <p className="text-[clamp(1rem,1.8vw,1.4rem)] font-light opacity-90">Our purpose is the guiding star for all our decisions.</p>
        </div>
      </section>

      {/* Narrative Section 2 - Stats & Points */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-[6vw] lg:px-[8vw] max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12">
               <div className="flex items-start space-x-6">
                 <div className="bg-black text-white p-5 rounded-full shrink-0">
                   <Globe size={32} />
                 </div>
                 <div>
                   <h4 className="text-[clamp(1.5rem,2.8vw,2.2rem)] font-bold mb-4">Global Network</h4>
                   <p className="text-gray-600 font-light leading-relaxed text-lg">
                     Our network of professionals in more than 150 countries and territories serves global organizations and local businesses alike.
                   </p>
                 </div>
               </div>
               <div className="flex items-start space-x-6">
                 <div className="bg-black text-white p-5 rounded-full shrink-0">
                   <Users size={32} />
                 </div>
                 <div>
                   <h4 className="text-[clamp(1.5rem,2.8vw,2.2rem)] font-bold mb-4">Diverse Talent</h4>
                   <p className="text-gray-600 font-light leading-relaxed text-lg">
                     Our experts are committed to making an impact that matters for our clients and the world.
                   </p>
                 </div>
               </div>
               <div className="flex items-start space-x-6">
                 <div className="bg-black text-white p-5 rounded-full shrink-0">
                   <Target size={32} />
                 </div>
                 <div>
                   <h4 className="text-[clamp(1.5rem,2.8vw,2.2rem)] font-bold mb-4">Strategic Vision</h4>
                   <p className="text-gray-600 font-light leading-relaxed text-lg">
                     Helping clients and communities navigate change and reach their goals through deep industry expertise.
                   </p>
                 </div>
               </div>
            </div>

            <div className="bg-white p-12 shadow-2xl rounded-sm border-t-8 border-[#86BC25] flex flex-col justify-center">
              <div className="mb-8">
                <img 
                  src="https://res.cloudinary.com/dtgufvwb5/image/upload/v1765436446/Vedartha_Global_Consultancy_LOGO-removebg-preview_xt90yx.png" 
                  alt="Vedartha Logo" 
                  className="h-16 w-auto"
                />
              </div>
              <h3 className="text-[clamp(1.5rem,3.2vw,2.8rem)] font-bold mb-8 tracking-tight leading-tight">How we're organized</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-10 text-lg">
                Vedartha International Limited is a leading professional services provider. Our global network operates with shared values to deliver excellence.
              </p>
              <button className="flex items-center text-[#86BC25] font-black text-lg group uppercase tracking-widest">
                Learn about our structure <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-black py-24 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-white text-[clamp(2.5rem,6vw,5rem)] font-black mb-12 tracking-tighter uppercase leading-none">Ready to join our team?</h2>
          <div className="flex flex-wrap justify-center gap-8">
             <button className="bg-[#86BC25] text-black px-14 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-xl">
               Explore Careers
             </button>
             <button className="border border-white/20 text-white px-14 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">
               Contact Us
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
