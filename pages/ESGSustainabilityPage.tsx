
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Shield, ArrowRight, Radio, BarChart3, MapPin, FilePlus, Headphones } from 'lucide-react';

const ESGSustainabilityPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-black">
      {/* 1. HERO WITH NATURE + DATA OVERLAY */}
      <section className="relative h-[90vh] flex items-center bg-[#f0f4f0] overflow-hidden pt-[140px]">
        <div className="absolute inset-0 z-0">
           <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-20 grayscale" alt="Nature" />
           <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
        </div>
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px] relative z-10">
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <span className="text-[#86BC25] font-black uppercase tracking-[0.5em] text-[10px] mb-8 block">ESG & Sustainability</span>
              <h1 className="text-[clamp(3.5rem,10vw,8.5rem)] font-black leading-[0.85] tracking-tighter mb-12 uppercase">Purpose. <br /> Growth. <br /> Planet.</h1>
              <p className="text-[clamp(1.1rem,1.8vw,1.4rem)] text-gray-500 font-light max-w-2xl leading-relaxed">Sustainability isn't a department; it's a structural requirement. We help you integrate long-term thinking into Day-1 operations.</p>
           </motion.div>
        </div>
      </section>

      {/* 2. IMPACT DASHBOARD */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
              {[
                { title: 'Environment', icon: Leaf, value: '50%', label: 'Carbon Reduction' },
                { title: 'Social', icon: Radio, value: '10M+', label: 'Lives Impacted' },
                { title: 'Governance', icon: Shield, value: '$1B+', label: 'Asset Validation' }
              ].map((pill, i) => (
                <div key={i} className="bg-[#111] p-16 space-y-12 border border-white/5 group hover:bg-[#86BC25] hover:text-black transition-all duration-700">
                   <pill.icon size={48} className="text-[#86BC25] group-hover:text-black transition-colors" />
                   <div className="space-y-4">
                      <h3 className="text-6xl font-black tracking-tighter leading-none">{pill.value}</h3>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover:text-black/60">{pill.label}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 3. ESG SCORECARD UI */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
           <div className="flex flex-col lg:flex-row gap-32 items-center">
              <div className="lg:w-1/2 space-y-12">
                 <h2 className="text-5xl font-black uppercase tracking-tighter leading-none">The ESG <br /> Scorecard</h2>
                 <p className="text-xl text-gray-500 font-light leading-relaxed">Moving beyond vague promises. Our scorecard methodology provides board-ready metrics that align with global reporting frameworks (GRI, TCFD, ISSB).</p>
                 <div className="space-y-8">
                    {['Net Zero Pathway Validation', 'Diversity & Equity Audits', 'Ethical Supply Chain Traceability'].map(item => (
                      <div key={item} className="flex items-center justify-between border-b border-gray-100 pb-6">
                         <span className="text-lg font-bold">{item}</span>
                         <BarChart3 className="text-[#86BC25]" />
                      </div>
                    ))}
                 </div>
              </div>
              <div className="lg:w-1/2 w-full">
                 <div className="bg-gray-50 p-16 rounded-[4rem] border border-gray-100 relative overflow-hidden text-center">
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute -top-32 -right-32 w-64 h-64 border-2 border-dashed border-[#86BC25]/20 rounded-full" />
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-10">Framework Alignment</h4>
                    <div className="grid grid-cols-2 gap-8 text-sm font-black uppercase tracking-widest opacity-40">
                       <div className="p-8 border border-gray-200">GRI</div>
                       <div className="p-8 border border-gray-200">TCFD</div>
                       <div className="p-8 border border-gray-200">SASB</div>
                       <div className="p-8 border border-gray-200">ISSB</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. CASE STUDY AS SUSTAINABILITY REPORT */}
      <section className="py-32 bg-[#f8f9f8]">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
           <div className="bg-white p-16 md:p-24 rounded-[3rem] shadow-2xl border border-gray-100 flex flex-col md:flex-row gap-20">
              <div className="md:w-1/3 aspect-[3/4] rounded-3xl overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Sust Report" />
              </div>
              <div className="md:w-2/3 space-y-12">
                 <span className="bg-[#86BC25] text-black text-[10px] font-black uppercase tracking-widest px-4 py-1">Sustainability Report 2024</span>
                 <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">Powering the <br /> Green Transition.</h2>
                 <p className="text-xl font-light text-gray-500 leading-relaxed italic">"How we helped a global energy firm transition 40% of its portfolio to renewable sources while maintaining double-digit shareholder returns."</p>
                 <div className="flex gap-8">
                    <button className="bg-black text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#86BC25] transition-all">Download Report</button>
                    <button className="flex items-center space-x-3 text-black font-black uppercase tracking-widest text-[10px]">
                       <span>Access ESG Portal</span>
                       <ArrowRight size={14} />
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* GLOBAL SERVICE CTA SECTION */}
      <section className="bg-gray-50 py-24 border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <button onClick={() => window.location.hash = 'offices'} className="flex flex-col items-center p-12 bg-white border border-gray-100 rounded-3xl hover:shadow-xl transition-all group">
              <MapPin className="text-[#86BC25] mb-6 group-hover:scale-110 transition-transform" size={40} />
              <span className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Location</span>
              <span className="text-xl font-black uppercase text-black">Find Nearest Office</span>
            </button>
            <button onClick={() => window.location.hash = 'rfp'} className="flex flex-col items-center p-12 bg-white border border-gray-100 rounded-3xl hover:shadow-xl transition-all group">
              <FilePlus className="text-[#86BC25] mb-6 group-hover:scale-110 transition-transform" size={40} />
              <span className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Proposal</span>
              <span className="text-xl font-black uppercase text-black">Submit RFP</span>
            </button>
            <button onClick={() => window.location.hash = 'contact-us'} className="flex flex-col items-center p-12 bg-white border border-gray-100 rounded-3xl hover:shadow-xl transition-all group">
              <Headphones className="text-[#86BC25] mb-6 group-hover:scale-110 transition-transform" size={40} />
              <span className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Support</span>
              <span className="text-xl font-black uppercase text-black">Contact Us</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ESGSustainabilityPage;
