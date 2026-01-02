
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Target, Layers, ArrowRight, Zap, Database, TrendingUp, ChevronRight, MapPin, FilePlus, Headphones } from 'lucide-react';

const DEAL_STAGES = [
  { id: 'eval', label: 'Evaluation', title: 'Opportunity Diagnostic', desc: 'Rigorous due-diligence to uncover latent value and undisclosed liabilities.' },
  { id: 'val', label: 'Valuation', title: 'Economic Modeling', desc: 'High-fidelity financial modeling based on multi-scenario market volatility.' },
  { id: 'int', label: 'Integration', title: 'Post-Deal Synergy', desc: 'Strategic orchestration to ensure cultural and technical alignment from Day 1.' }
];

const DealAdvisoryPage: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <div className="bg-[#050505] min-h-screen text-white">
      {/* 1. MINIMAL DARK HERO */}
      <section className="h-[80vh] flex flex-col justify-center pt-[140px]">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
            <span className="text-white/40 font-black uppercase tracking-[0.6em] text-[9px] mb-12 block">Deal Advisory & Transactions</span>
            <h1 className="text-[clamp(3.5rem,10vw,8.5rem)] font-black leading-[0.85] tracking-tighter mb-16 uppercase">Discreet. <br /> Decisive.</h1>
            <p className="text-[clamp(1.1rem,1.8vw,1.4rem)] text-gray-500 font-light max-w-xl leading-relaxed">Navigating high-stakes capital transactions with clinical precision. We provide the quiet confidence required in the boardroom.</p>
          </motion.div>
        </div>
      </section>

      {/* 2. DEAL LIFECYCLE SLIDER */}
      <section className="py-32 bg-white text-black">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
           <div className="flex items-center space-x-12 mb-32 overflow-x-auto no-scrollbar">
              {DEAL_STAGES.map((s, i) => (
                <button 
                  key={s.id} 
                  onClick={() => setActiveStage(i)}
                  className={`flex items-center space-x-4 pb-8 transition-all relative ${activeStage === i ? 'opacity-100' : 'opacity-30 hover:opacity-50'}`}
                >
                  <span className="text-4xl font-black tracking-tighter">0{i+1}</span>
                  <span className="text-xs font-black uppercase tracking-widest">{s.label}</span>
                  {activeStage === i && <motion.div layoutId="dealTab" className="absolute bottom-0 left-0 right-0 h-1.5 bg-black" />}
                </button>
              ))}
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-6xl font-black uppercase tracking-tighter leading-none">{DEAL_STAGES[activeStage].title}</h2>
                 <p className="text-2xl font-light text-gray-500 leading-relaxed max-w-md">{DEAL_STAGES[activeStage].desc}</p>
                 <button className="bg-black text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#86BC25] hover:text-black transition-all">
                    Access Methodology
                 </button>
              </div>
              <div className="bg-gray-100 aspect-square rounded-[4rem] p-20 flex flex-col justify-center border border-gray-200">
                 <div className="space-y-8">
                    <div className="flex justify-between border-b border-gray-300 pb-4">
                       <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Metric</span>
                       <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Baseline</span>
                    </div>
                    {[
                      { l: 'EBITDA Margin', v: '22.4%', c: 'text-black' },
                      { l: 'Synergy Potential', v: '$45.2M', c: 'text-[#86BC25]' },
                      { l: 'Asset Utilization', v: '84%', c: 'text-black' }
                    ].map(m => (
                      <div key={m.l} className="flex justify-between items-end">
                         <span className="text-lg font-light">{m.l}</span>
                         <span className={`text-2xl font-black ${m.c}`}>{m.v}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 3. DECISION TREE UI */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
           <div className="text-center mb-32 space-y-6">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Deal Decision Tree</h2>
              <p className="text-gray-500 font-light">Mapping jurisdictional contingencies for rapid boardroom decisions.</p>
           </div>
           <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
              <div className="p-10 border border-white/10 rounded-3xl w-full md:w-1/3 text-center bg-white/5">
                 <h4 className="font-bold text-lg mb-4">Event X Occurs</h4>
                 <p className="text-xs text-gray-500">Hostile counter-bid from Tier-1 competitor.</p>
              </div>
              <ArrowRight size={48} className="text-[#86BC25] rotate-90 md:rotate-0" />
              <div className="p-10 border border-white/10 rounded-3xl w-full md:w-1/3 text-center bg-[#86BC25] text-black">
                 <h4 className="font-black text-lg mb-4">Strategic Pivot Y</h4>
                 <p className="text-xs font-bold">Activate asset carve-out to maximize valuation gap.</p>
              </div>
           </div>
        </div>
      </section>

      {/* 4. CASE STUDY AS BOARD MEMO */}
      <section className="py-32 bg-white text-black">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
           <div className="max-w-4xl mx-auto bg-[#f8f8f8] p-16 md:p-24 rounded-sm border border-gray-200 shadow-2xl relative">
              <div className="space-y-12">
                 <div className="flex justify-between items-start border-b-4 border-black pb-10">
                    <div>
                       <h2 className="text-5xl font-black tracking-tighter uppercase leading-none">Board <br /> Memorandum</h2>
                       <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mt-4">Confidential Advisory</p>
                    </div>
                    <Briefcase size={64} strokeWidth={1} className="text-gray-200" />
                 </div>
                 <div className="space-y-10 prose prose-lg font-light text-gray-600 leading-relaxed">
                    <p><strong>SUBJECT:</strong> Successful acquisition of Global Logistics Titan (Project Delta)</p>
                    <p>Through our proprietary predictive modeling, we identified a $200M valuation disconnect between reported assets and latent IP portfolio. Our deal specialists negotiated a 15% reduction in purchase price by uncovering previously undisclosed environmental liabilities in the APAC division.</p>
                 </div>
                 <div className="pt-12 border-t border-gray-200 flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/40 italic">Signature Required for Access</span>
                    <button className="flex items-center space-x-2 font-black uppercase tracking-widest text-[10px] text-[#86BC25] hover:text-black transition-colors">
                       <span>Full Memo PDF</span>
                       <ChevronRight size={16} />
                    </button>
                 </div>
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

export default DealAdvisoryPage;
