
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Shield, Eye, Lock, Activity, ArrowRight, Zap, Target, Radio, MapPin, FilePlus, Headphones } from 'lucide-react';

const THREATS = [
  { id: 1, type: 'Cyber', level: 'Critical', desc: 'Sophisticated supply-chain intrusion attempts rising 30% YoY.' },
  { id: 2, type: 'Regulatory', level: 'High', desc: 'New global privacy laws creating immediate operational silos.' },
  { id: 3, type: 'Vendor', level: 'Medium', desc: 'Tier-3 supplier instability threatening production timelines.' }
];

const RiskAdvisoryPage: React.FC = () => {
  const [activeThreat, setActiveThreat] = useState<number | null>(null);
  const [controlsOn, setControlsOn] = useState(false);

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-red-600 selection:text-white">
      {/* 1. HERO WITH HEATMAP ANIMATION */}
      <section className="relative h-screen flex items-center pt-[140px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
          {/* Simulated Heatmap */}
          <div className="w-full h-full opacity-30 flex flex-wrap">
             {Array.from({ length: 100 }).map((_, i) => (
               <motion.div 
                  key={i} 
                  animate={{ opacity: [0.1, 0.5, 0.1] }}
                  transition={{ duration: 2 + Math.random() * 5, repeat: Infinity }}
                  className={`w-[10%] h-[10%] border border-white/5 ${i % 7 === 0 ? 'bg-red-900/40' : i % 3 === 0 ? 'bg-[#86BC25]/10' : ''}`} 
               />
             ))}
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px] relative z-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="flex items-center space-x-3 text-[#86BC25] font-black uppercase tracking-[0.5em] text-[10px] mb-12">
               <Radio size={16} className="animate-pulse" />
               <span>Risk Advisory / Monitoring</span>
            </span>
            <h1 className="text-[clamp(3rem,11vw,8rem)] font-black leading-[0.85] tracking-tighter mb-16 uppercase">Alert. <br /> Layered. <br /> Resilient.</h1>
            <p className="text-[clamp(1.1rem,1.8vw,1.6rem)] text-gray-400 font-light max-w-2xl leading-snug">Identify vulnerabilities before they become incidents. We provide the diagnostic depth to survive high-volatility environments.</p>
          </motion.div>
        </div>
      </section>

      {/* 2. THREAT WALL */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          <h2 className="text-xs font-black uppercase tracking-[0.5em] text-gray-600 mb-20">Active Intelligence Feed</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {THREATS.map(t => (
               <motion.div 
                  key={t.id}
                  whileHover={{ scale: 1.02 }}
                  onMouseEnter={() => setActiveThreat(t.id)}
                  onMouseLeave={() => setActiveThreat(null)}
                  className={`p-12 border rounded-sm transition-all duration-500 cursor-default ${t.level === 'Critical' ? 'border-red-900 bg-red-950/20' : 'border-white/5 bg-white/5'}`}
               >
                  <div className="flex justify-between items-start mb-12">
                     <span className={`text-[9px] font-black px-2 py-1 rounded uppercase tracking-widest ${t.level === 'Critical' ? 'bg-red-600 text-white' : 'bg-[#86BC25] text-black'}`}>
                        {t.level}
                     </span>
                     <AlertTriangle size={24} className={t.level === 'Critical' ? 'text-red-500' : 'text-gray-500'} />
                  </div>
                  <h3 className="text-3xl font-black uppercase mb-6 tracking-tight">{t.type} Risk</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">{t.desc}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. CONTROL SIMULATOR */}
      <section className="py-32 bg-white text-black">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
             <div className="lg:w-1/2 space-y-12">
                <h2 className="text-5xl font-black uppercase tracking-tighter">Control <br /> Simulator</h2>
                <p className="text-xl text-gray-500 font-light max-w-lg leading-relaxed">Toggle organizational controls to visualize the shift in residual risk score. Our methodology eliminates blind spots through continuous testing.</p>
                <button 
                  onClick={() => setControlsOn(!controlsOn)}
                  className={`w-full py-8 rounded-full font-black uppercase tracking-widest text-sm transition-all shadow-2xl ${controlsOn ? 'bg-[#86BC25] text-black' : 'bg-black text-white'}`}
                >
                   Controls: {controlsOn ? 'OPTIMIZED' : 'LEGACY'}
                </button>
             </div>
             <div className="lg:w-1/2 w-full">
                <div className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100 relative overflow-hidden">
                   <div className="text-center space-y-4">
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Residual Risk Score</span>
                      <motion.div 
                        animate={{ color: controlsOn ? '#86BC25' : '#ef4444' }}
                        className="text-8xl md:text-[10rem] font-black tracking-tighter leading-none"
                      >
                        {controlsOn ? '14' : '82'}
                      </motion.div>
                      <p className="font-bold uppercase text-xs">{controlsOn ? 'Low Operational Exposure' : 'Critical Failure Potential'}</p>
                   </div>
                   {/* Background bars */}
                   <div className="mt-12 space-y-4">
                      {['Integrity', 'Privacy', 'Reliability'].map(stat => (
                        <div key={stat} className="space-y-1">
                           <div className="flex justify-between text-[9px] font-black uppercase tracking-widest"><span>{stat}</span><span>{controlsOn ? '98%' : '45%'}</span></div>
                           <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                              <motion.div 
                                initial={false} 
                                animate={{ width: controlsOn ? '98%' : '45%', backgroundColor: controlsOn ? '#86BC25' : '#ef4444' }} 
                                className="h-full" 
                              />
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. CASE STUDY AS POST-MORTEM */}
      <section className="py-32 bg-[#050505]">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
           <div className="max-w-5xl mx-auto border border-white/10 p-16 md:p-24 rounded-sm space-y-20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-red-600 opacity-80" />
              <div className="space-y-6">
                 <h2 className="text-xs font-black uppercase tracking-[0.5em] text-red-500">Incident Post-Mortem Report</h2>
                 <h3 className="text-4xl md:text-5xl font-black uppercase tracking tight leading-[0.9]">Containment of Global ERP Breach</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                 <div className="space-y-8">
                    <h5 className="font-black text-xs uppercase tracking-widest border-b border-white/10 pb-4">Incident Vectors</h5>
                    <ul className="space-y-4 text-gray-500 font-light">
                       <li>• Credential harvesting via Tier-2 payroll API.</li>
                       <li>• Latent privilege escalation within core DB.</li>
                    </ul>
                 </div>
                 <div className="space-y-8">
                    <h5 className="font-black text-xs uppercase tracking-widest border-b border-white/10 pb-4">Remediation Architecture</h5>
                    <p className="text-xl font-bold text-white">Full-scale pivot to Identity-First Security. Deployment of real-time behavioral analytics. Restoration of 100% core services in 72 hours.</p>
                 </div>
              </div>
              <button className="flex items-center space-x-4 text-[#86BC25] font-black uppercase tracking-widest text-[11px] hover:text-white transition-colors">
                 <span>Access Resilience Case Study</span>
                 <ArrowRight size={20} />
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

export default RiskAdvisoryPage;
