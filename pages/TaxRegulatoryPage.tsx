
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, ArrowRight, Globe, FileText, Activity, AlertCircle, ChevronDown, CheckCircle2, MapPin, FilePlus, Headphones } from 'lucide-react';

const TIMELINE = [
  { year: '2022', law: 'Global Minimum Tax (Pillar Two)', impact: 'Unified reporting standards across 130+ nations.' },
  { year: '2023', law: 'Digital Services Tax Evolution', impact: 'Nexus shift for digital-first enterprises.' },
  { year: '2024', law: 'Transfer Pricing Revitalization', impact: 'Enhanced documentation for IP-heavy groups.' },
  { year: '2025', law: 'AI Governance in Tax', impact: 'Automated compliance vs algorithm transparency.' }
];

const TAX_SERVICES = [
  { id: 'corp', label: 'Corporate Tax', desc: 'Navigating statutory complexity with cross-border precision.' },
  { id: 'tp', label: 'Transfer Pricing', desc: 'Value chain alignment based on economic reality.' },
  { id: 'gst', label: 'Indirect Tax / GST', desc: 'Real-time automation for transactional integrity.' },
  { id: 'lit', label: 'Tax Litigation', desc: 'Defending positions with technical and legal rigor.' }
];

const TaxRegulatoryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('corp');
  const [riskPos, setRiskPos] = useState(50); // 0 (Cons) to 100 (Aggr)

  return (
    <div className="bg-[#fcfcfc] min-h-screen text-black">
      {/* 1. HERO WITH TIMELINE */}
      <section className="bg-black text-white pt-[140px] pb-24 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px] relative z-10">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/2">
              <span className="text-[#86BC25] font-black uppercase tracking-[0.5em] text-[10px] mb-8 block">Tax & Regulatory</span>
              <h1 className="text-[clamp(3.5rem,10vw,7.5rem)] font-black leading-[0.9] tracking-tighter mb-12 uppercase">Sharp <br /> Precise <br /> Legal</h1>
              <p className="text-xl text-gray-400 font-light max-w-lg leading-relaxed">Where numbers meet law, and foresight meets compliance. We provide the technical depth required for modern tax governance.</p>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="border-l-2 border-white/10 pl-12 space-y-12">
                  {TIMELINE.map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.2 }}
                      className="group"
                    >
                      <span className="text-[#86BC25] font-black text-xl mb-2 block">{item.year}</span>
                      <h4 className="text-lg font-bold group-hover:text-[#86BC25] transition-colors">{item.law}</h4>
                      <p className="text-gray-500 text-sm font-light mt-1">{item.impact}</p>
                    </motion.div>
                  ))}
               </div>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-0 w-[150%] h-[1px] bg-white/5 -rotate-12 pointer-events-none" />
      </section>

      {/* 2. SPLIT SCREEN: STATUTES VS IMPACT */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 bg-gray-200 border border-gray-200 rounded-sm overflow-hidden">
             <div className="bg-white p-20 space-y-8">
               <h3 className="text-xs font-black uppercase tracking-[0.4em] text-gray-400">The Statute</h3>
               <div className="p-8 bg-gray-50 border-l-4 border-black font-mono text-sm text-gray-600 space-y-4">
                  <p>// Section 42(b) Amendment 2024</p>
                  <p>"Non-resident entities possessing a significant digital presence (SDP) shall be liable for equalisation levy at 2% on consideration received..."</p>
               </div>
             </div>
             <div className="bg-[#050505] text-white p-20 space-y-8">
               <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#86BC25]">Business Impact</h3>
               <p className="text-2xl font-light leading-snug">Fragmented profitability models must now account for decentralized nexus. Strategic relocation of data clusters is no longer a choice, but a necessity.</p>
               <button className="flex items-center space-x-3 text-[#86BC25] font-black uppercase tracking-widest text-[10px]">
                  <span>Calculate Liability</span>
                  <ArrowRight size={14} />
               </button>
             </div>
          </div>
        </div>
      </section>

      {/* 3. TABS: CORPORATE | TP | GST */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
           <div className="flex space-x-12 border-b border-gray-200 mb-20 overflow-x-auto no-scrollbar">
              {TAX_SERVICES.map(s => (
                <button 
                  key={s.id} 
                  onClick={() => setActiveTab(s.id)}
                  className={`pb-8 text-[11px] font-black uppercase tracking-[0.3em] transition-all relative ${activeTab === s.id ? 'text-[#86BC25]' : 'text-gray-400'}`}
                >
                  {s.label}
                  {activeTab === s.id && <motion.div layoutId="taxTab" className="absolute bottom-0 left-0 right-0 h-1 bg-[#86BC25]" />}
                </button>
              ))}
           </div>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeTab}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="space-y-8"
                >
                  <h2 className="text-5xl font-black uppercase tracking-tighter">{TAX_SERVICES.find(s => s.id === activeTab)?.label}</h2>
                  <p className="text-2xl font-light text-gray-500 leading-relaxed">{TAX_SERVICES.find(s => s.id === activeTab)?.desc}</p>
                  <ul className="space-y-4">
                     {['Global Compliance Review', 'Dispute Resolution Hub', 'Tech-Enabled Reporting'].map(item => (
                       <li key={item} className="flex items-center space-x-4">
                          <CheckCircle2 size={20} className="text-[#86BC25]" />
                          <span className="font-bold text-lg">{item}</span>
                       </li>
                     ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
              <div className="bg-black aspect-video rounded-3xl p-12 flex flex-col justify-center text-center">
                 <Globe size={64} className="mx-auto text-white/20 mb-8" />
                 <h4 className="text-white text-xl font-bold uppercase">Tax Map View</h4>
                 <p className="text-gray-500 text-xs mt-2 uppercase tracking-widest">Select region for jurisdictional risks</p>
              </div>
           </div>
        </div>
      </section>

      {/* 4. RISK METER SECTION */}
      <section className="py-32 border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1200px] text-center">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6 block">Positioning Strategy</span>
          <h2 className="text-4xl font-black uppercase mb-20 tracking-tighter">Tax Position Simulator</h2>
          <div className="relative pt-12 pb-20">
             <input 
                type="range" min="0" max="100" value={riskPos} 
                onChange={(e) => setRiskPos(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-100 rounded-full appearance-none cursor-pointer accent-[#86BC25]"
             />
             <div className="flex justify-between mt-8 text-[11px] font-black uppercase tracking-[0.3em]">
                <span className={riskPos < 30 ? 'text-[#86BC25]' : 'text-gray-300'}>Conservative</span>
                <span className={riskPos >= 30 && riskPos < 70 ? 'text-blue-500' : 'text-gray-300'}>Balanced</span>
                <span className={riskPos >= 70 ? 'text-red-500' : 'text-gray-300'}>Aggressive</span>
             </div>
             <div className="mt-16 p-10 bg-white shadow-xl rounded-3xl border border-gray-100 max-w-xl mx-auto">
                <p className="text-gray-600 italic">
                  {riskPos < 30 && "Lowest audit risk. Prioritizes long-term institutional stability and regulatory compliance above short-term optimization."}
                  {riskPos >= 30 && riskPos < 70 && "Optimal for growth. Leverages available incentives while maintaining a defensible technical footprint."}
                  {riskPos >= 70 && "High optimization focus. Requires robust litigation-ready documentation and disclosure strategy."}
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* 5. CASE STUDY AS LEGAL BRIEF */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
           <div className="max-w-4xl mx-auto bg-white p-16 md:p-24 shadow-[0_50px_100px_rgba(0,0,0,0.05)] border border-gray-200 relative">
              <div className="absolute top-12 right-12 w-24 h-24 border-4 border-gray-100 rounded-full flex items-center justify-center text-[10px] font-black uppercase text-gray-200 rotate-12">
                 Official <br /> Brief
              </div>
              <div className="space-y-12">
                 <div className="border-b-2 border-black pb-8">
                    <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-400 mb-2">Matter: Multi-National Tax Restructuring</h2>
                    <h3 className="text-3xl font-black uppercase tracking-tight">Docket No. IN-TX-2024-001</h3>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
                    <div className="space-y-4">
                       <h5 className="font-black uppercase tracking-widest text-[10px]">Findings</h5>
                       <p className="text-gray-600 leading-relaxed font-light">Structure was found to have 12 overlapping jurisdictional liabilities. Potential exposure estimated at $45M.</p>
                    </div>
                    <div className="space-y-4">
                       <h5 className="font-black uppercase tracking-widest text-[10px]">Resolution</h5>
                       <p className="text-gray-600 leading-relaxed font-light">Consolidated 4 European hubs into a single unified nexus. Automated reporting via Vedartha TaxCore.</p>
                    </div>
                    <div className="space-y-4">
                       <h5 className="font-black uppercase tracking-widest text-[10px]">Outcome</h5>
                       <p className="font-bold text-black">$12M Annualized Tax Saving. Improved regulatory transparency rating by 40%.</p>
                    </div>
                 </div>
                 <button className="w-full bg-black text-white py-6 font-black uppercase tracking-widest text-xs hover:bg-[#86BC25] transition-colors">
                    Download Full Filing Detail
                 </button>
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

export default TaxRegulatoryPage;
