
import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Fingerprint, Layers, AlertTriangle, MapPin, FilePlus, Headphones } from 'lucide-react';

const ForensicDisputePage: React.FC = () => {
  return (
    <div className="bg-[#050505] min-h-screen text-white">
      {/* 1. HERO WITH DARK EVIDENCE BACKGROUND */}
      <section className="h-screen flex items-center relative overflow-hidden pt-[140px]">
        <div className="absolute inset-0 z-0">
           <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-10 grayscale" alt="Forensic Grid" />
           <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
        </div>
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px] relative z-10">
           <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
              <span className="flex items-center space-x-3 text-red-600 font-black uppercase tracking-[0.5em] text-[10px] mb-8">
                 <Radio size={16} className="animate-pulse" />
                 <span>Forensic / Investigation</span>
              </span>
              <h1 className="text-[clamp(3.5rem,11vw,8rem)] font-black leading-[0.85] tracking-tighter mb-12 uppercase">Sach. <br /> Bahar. <br /> Aayega.</h1>
              <p className="text-[clamp(1.1rem,1.8vw,1.4rem)] text-gray-400 font-light max-w-2xl leading-relaxed">The truth is always there, buried in the data. We provide the investigative intensity to uncover fraud and resolve high-stakes disputes.</p>
           </motion.div>
        </div>
      </section>

      {/* 2. EVIDENCE GALLERY (BLURRED) */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">Incident <br /> Reconstruction</h2>
                 <p className="text-xl text-gray-500 font-light leading-relaxed">Our lab uses advanced digital forensics to piece together fragmented transaction logs, uncovering the "who, when, and how" of complex financial crimes.</p>
                 <div className="flex flex-wrap gap-8 pt-8">
                    <div className="flex items-center space-x-4">
                       <Fingerprint className="text-red-600" size={32} />
                       <span className="text-[10px] font-black uppercase tracking-widest">Biometric Data</span>
                    </div>
                    <div className="flex items-center space-x-4">
                       <Layers className="text-red-600" size={32} />
                       <span className="text-[10px] font-black uppercase tracking-widest">Network Flow</span>
                    </div>
                 </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 {Array.from({ length: 4 }).map((_, i) => (
                   <div key={i} className="aspect-square bg-white/5 rounded-2xl overflow-hidden relative group">
                      <img src={`https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400&sig=${i}`} className="w-full h-full object-cover blur-md group-hover:blur-0 transition-all duration-1000" alt="Evidence" />
                      <div className="absolute inset-0 bg-red-600/10" />
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* 3. INVESTIGATION FLOWCHART */}
      <section className="py-32 bg-white text-black">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
           <div className="text-center mb-32">
              <h2 className="text-5xl font-black uppercase tracking-tighter">The Investigative Flow</h2>
           </div>
           <div className="flex flex-col md:flex-row items-stretch justify-center gap-4">
              {['Capture', 'Analyze', 'Validate', 'Testify'].map((step, i) => (
                <div key={step} className="flex-1 p-12 bg-gray-50 rounded-sm border border-gray-100 hover:bg-black hover:text-white transition-all duration-500 group">
                   <span className="text-xs font-black uppercase tracking-widest text-gray-400 block mb-12">Phase 0{i+1}</span>
                   <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter">{step}</h3>
                   <p className="text-sm font-light text-gray-500 group-hover:text-gray-400 transition-colors">Rigorous chain of custody ensures all evidence is admissible in global jurisdictions.</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 4. CASE STUDY AS INVESTIGATION REPORT */}
      <section className="py-32 bg-[#050505]">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
           <div className="max-w-4xl mx-auto p-16 md:p-24 bg-white/5 border-l-8 border-red-600 space-y-16">
              <div className="flex justify-between items-start">
                 <h2 className="text-4xl font-black uppercase tracking-tighter leading-none text-white">Investigation <br /> Report: Case #912</h2>
                 <AlertTriangle size={48} className="text-red-600" />
              </div>
              <div className="prose prose-lg font-light text-gray-400 leading-relaxed italic">
                 "Total identified leakage through shell entities: $112M. Criminal intent established via deleted encrypted communication recovery."
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/10">
                 <div className="space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-red-500">Methodology</span>
                    <p className="text-sm">Cross-border flow analysis and deep-web tracing of digital tokens.</p>
                 </div>
                 <div className="space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-red-500">Outcome</span>
                    <p className="text-sm">Asset recovery of 85% within 9 months. Successful litigation in High Court.</p>
                 </div>
              </div>
              <button className="w-full bg-red-600 text-white py-6 font-black uppercase tracking-widest text-xs hover:bg-red-700 transition-colors">
                 Request Secure Briefing
              </button>
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

export default ForensicDisputePage;
