
import React from 'react';
import { motion } from 'framer-motion';
import { Scale, ArrowRight, CheckCircle2, MapPin, FilePlus, Headphones } from 'lucide-react';

const LegalGovernancePage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-black">
      {/* 1. HERO WITH SEAL STYLE */}
      <section className="bg-black text-white h-[90vh] flex flex-col justify-center pt-[140px] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
           <Scale size={800} strokeWidth={0.5} className="rotate-12" />
        </div>
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px] relative z-10">
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <span className="text-[#86BC25] font-black uppercase tracking-[0.5em] text-[10px] mb-8 block">Legal & Governance</span>
              <h1 className="text-[clamp(3rem,10vw,7rem)] font-black leading-[0.85] tracking-tighter mb-12 uppercase">Authored <br /> By <br /> Power.</h1>
              <p className="text-[clamp(1.1rem,1.8vw,1.4rem)] text-gray-400 font-light max-w-2xl leading-relaxed">Robust governance isn't just about rules; it's about the institutional strength to enforce them. We provide the framework for permanent boardroom integrity.</p>
           </motion.div>
        </div>
      </section>

      {/* 2. GOVERNANCE PILLARS */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
              {[
                { title: 'Structure', desc: 'Defining the hierarchy of decision-making for complex global entities.' },
                { title: 'Oversight', desc: 'Continuous monitoring of executive mandates and fiduciary duties.' },
                { title: 'Accountability', desc: 'Rigorous reporting mechanisms for stakeholders and regulators.' }
              ].map((pillar, i) => (
                <div key={i} className="bg-white p-20 space-y-10 border border-gray-100 hover:shadow-2xl transition-all group">
                   <span className="text-4xl font-black text-gray-100 group-hover:text-[#86BC25] transition-colors">0{i+1}</span>
                   <h3 className="text-3xl font-black uppercase tracking-tight">{pillar.title}</h3>
                   <p className="text-gray-500 font-light leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 3. REGULATORY CHECKLIST UI */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
           <div className="flex flex-col lg:flex-row gap-32">
              <div className="lg:w-1/2 space-y-12">
                 <h2 className="text-5xl font-black uppercase tracking-tighter leading-none">Compliance <br /> Blueprint</h2>
                 <p className="text-xl text-gray-500 font-light leading-relaxed">Our proprietary 12-point regulatory checklist ensures that your organization is ready for any jurisdictional audit in under 24 hours.</p>
                 <div className="space-y-6">
                    {['Board Composition Metrics', 'Executive Remuneration Policy', 'Data Residency Safeguards'].map(item => (
                      <div key={item} className="flex items-center space-x-6 p-6 border border-gray-100 rounded-2xl group hover:border-[#86BC25] transition-all">
                         <div className="w-6 h-6 border-2 border-gray-200 rounded-md flex items-center justify-center group-hover:bg-[#86BC25] group-hover:border-[#86BC25] transition-all">
                            <CheckCircle2 size={16} className="text-white opacity-0 group-hover:opacity-100" />
                         </div>
                         <span className="text-lg font-bold">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="lg:w-1/2 bg-black rounded-[4rem] p-20 flex flex-col justify-between">
                 <div className="space-y-12">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#86BC25]">Regulatory Clock</span>
                    <h3 className="text-4xl font-black text-white uppercase leading-none">Global <br /> Compliance <br /> Timeline</h3>
                 </div>
                 <div className="pt-20 space-y-8">
                    <div className="flex items-center space-x-6">
                       <span className="text-white font-black">Q1 2025</span>
                       <div className="h-[1px] bg-white/20 flex-1" />
                       <span className="text-[#86BC25] text-xs font-bold uppercase">Privacy Act v2.0</span>
                    </div>
                    <div className="flex items-center space-x-6">
                       <span className="text-white font-black">Q3 2025</span>
                       <div className="h-[1px] bg-white/20 flex-1" />
                       <span className="text-gray-500 text-xs font-bold uppercase">New ESG Mandates</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. CASE STUDY AS GOVERNANCE CHARTER */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
           <div className="max-w-4xl mx-auto bg-white p-16 md:p-24 rounded-sm shadow-xl border-t-[12px] border-black">
              <div className="space-y-16">
                 <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-black uppercase tracking-tighter">Governance Charter <br /> Case Study</h2>
                 </div>
                 <div className="prose prose-lg font-light text-gray-600 leading-relaxed">
                    <p>For a multi-billion dollar Sovereign Wealth Fund, Vedartha re-architected the entire governance structure following a significant oversight failure. We implemented a triple-layered audit committee system that increased institutional trust by 85%.</p>
                 </div>
                 <button className="bg-black text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#86BC25] transition-all">
                    Download Charter Summary
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* GLOBAL SERVICE CTA SECTION */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <button onClick={() => window.location.hash = 'offices'} className="flex flex-col items-center p-12 bg-gray-50 border border-gray-100 rounded-3xl hover:shadow-xl transition-all group">
              <MapPin className="text-[#86BC25] mb-6 group-hover:scale-110 transition-transform" size={40} />
              <span className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Location</span>
              <span className="text-xl font-black uppercase text-black">Find Nearest Office</span>
            </button>
            <button onClick={() => window.location.hash = 'rfp'} className="flex flex-col items-center p-12 bg-gray-50 border border-gray-100 rounded-3xl hover:shadow-xl transition-all group">
              <FilePlus className="text-[#86BC25] mb-6 group-hover:scale-110 transition-transform" size={40} />
              <span className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Proposal</span>
              <span className="text-xl font-black uppercase text-black">Submit RFP</span>
            </button>
            <button onClick={() => window.location.hash = 'contact-us'} className="flex flex-col items-center p-12 bg-gray-50 border border-gray-100 rounded-3xl hover:shadow-xl transition-all group">
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

export default LegalGovernancePage;
