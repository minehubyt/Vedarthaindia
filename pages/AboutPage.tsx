
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Share2, Facebook, Linkedin, Mail, Twitter, Globe, Users, Target, ShieldCheck } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Black Hero Header */}
      <section className="bg-black pt-32 pb-24 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1600px] relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-3 text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-12">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <ChevronRight size={14} />
            <span className="text-white">About Deloitte</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl"
            >
              <h1 className="text-[clamp(3.5rem,8vw,7.5rem)] font-black leading-[0.9] tracking-tighter mb-8">
                About <br /> Deloitte
              </h1>
              <p className="text-2xl md:text-3xl font-light text-gray-400 tracking-tight">
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
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1600px]">
          <div className="max-w-4xl">
            <h2 className="text-[32px] md:text-[48px] font-bold leading-tight mb-12 tracking-tight">
              At Deloitte, we believe we can make a difference.
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-16">
              Deloitte is a leading global provider of audit and assurance, consulting, financial advisory, risk advisory, tax, and related services. With more than 175 years of hard work and commitment to making a real difference, our organization has grown in scale and diversity—yet our shared culture remains at the heart of everything we do.
            </p>
            <div className="h-1.5 w-24 bg-[#86BC25]" />
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
        <div className="absolute bottom-16 left-6 lg:left-[8vw] max-w-2xl text-white">
          <h3 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Making an impact that matters.</h3>
          <p className="text-lg md:text-xl font-light opacity-90">Our purpose is the guiding star for all our decisions.</p>
        </div>
      </section>

      {/* Narrative Section 2 - Stats & Points */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12">
               <div className="flex items-start space-x-6">
                 <div className="bg-black text-white p-4 rounded-full">
                   <Globe size={28} />
                 </div>
                 <div>
                   <h4 className="text-2xl font-bold mb-4">Global Network</h4>
                   <p className="text-gray-600 font-light leading-relaxed">
                     Our network of member firms in more than 150 countries and territories serves four out of five Fortune Global 500® companies.
                   </p>
                 </div>
               </div>
               <div className="flex items-start space-x-6">
                 <div className="bg-black text-white p-4 rounded-full">
                   <Users size={28} />
                 </div>
                 <div>
                   <h4 className="text-2xl font-bold mb-4">Diverse Talent</h4>
                   <p className="text-gray-600 font-light leading-relaxed">
                     Approximately 457,000 professionals are committed to making an impact that matters.
                   </p>
                 </div>
               </div>
               <div className="flex items-start space-x-6">
                 <div className="bg-black text-white p-4 rounded-full">
                   <Target size={28} />
                 </div>
                 <div>
                   <h4 className="text-2xl font-bold mb-4">Strategic Vision</h4>
                   <p className="text-gray-600 font-light leading-relaxed">
                     Helping clients and communities navigate change and reach their goals through deep industry expertise.
                   </p>
                 </div>
               </div>
            </div>

            <div className="bg-white p-12 shadow-2xl rounded-sm border-t-8 border-[#86BC25] flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-8 tracking-tight">How we're organized</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-10">
                Deloitte refers to one or more of Deloitte Touche Tohmatsu Limited ("DTTL"), its global network of member firms, and their related entities. DTTL (also referred to as "Deloitte Global") does not provide services to clients.
              </p>
              <button className="flex items-center text-[#86BC25] font-bold text-lg group">
                Learn about our structure <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section - Mini Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1600px]">
          <h2 className="text-4xl font-bold mb-16 tracking-tight">Who we are is defined by what we believe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Purpose and values', desc: 'The core of our culture and decisions.' },
              { title: 'Ethics and integrity', desc: 'Upholding the highest professional standards.' },
              { title: 'Global impact report', desc: 'Measuring our contribution to the world.' },
              { title: 'Leadership', desc: 'The individuals driving our global strategy.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 bg-gray-50 border-b-4 border-transparent hover:border-[#86BC25] transition-all cursor-pointer"
              >
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-gray-500 font-light text-sm mb-6">{item.desc}</p>
                <ChevronRight size={20} className="text-[#86BC25]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-black py-24 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-white text-4xl md:text-6xl font-black mb-12 tracking-tighter">Ready to join our team?</h2>
          <div className="flex flex-wrap justify-center gap-6">
             <button className="bg-[#86BC25] text-black px-12 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:brightness-110 transition-all">
               Explore Careers
             </button>
             <button className="border border-white/20 text-white px-12 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all">
               Contact Us
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
