
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, ArrowRight, MapPin, FilePlus, Headphones } from 'lucide-react';

const PROBLEMS = [
  { id: 'growth', label: 'Growth Stalled', solution: 'AI-led Market Penetration. We re-tool your commercial engine for high-velocity acquisition.' },
  { id: 'costs', label: 'Costs Rising', solution: 'Zero-Based Ops. Radical structural simplification through autonomous back-office orchestration.' },
  { id: 'systems', label: 'Systems Broken', solution: 'Cloud Native Pivot. Modernizing the tech stack to enable real-time organizational agility.' }
];

const ConsultingStrategyPage: React.FC = () => {
  const [selectedProblem, setSelectedProblem] = useState(PROBLEMS[0]);

  return (
    <div className="bg-white min-h-screen text-black overflow-hidden">
      {/* 1. HERO WITH MOTION GRAPHICS */}
      <section className="relative h-[90vh] flex items-center bg-black text-white pt-[140px]">
        <div className="absolute inset-0 z-0 opacity-40">
           {Array.from({ length: 40 }).map((_, i) => (
             <motion.div 
                key={i} 
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.1, 0.4, 0.1],
                  x: [0, 50, -50, 0]
                }}
                transition={{ duration: 5 + Math.random() * 5, repeat: Infinity }}
                className="absolute bg-[#86BC25] rounded-full blur-3xl w-20 h-20"
                style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
             />
           ))}
        </div>

        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px] relative z-10">
           <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-[#86BC25] font-black uppercase tracking-[0.5em] text-[10px] mb-8 block">Consulting & Strategy</span>
              <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-black leading-[0.85] tracking-tighter mb-10 uppercase">Think. <br /> Evolve. <br /> Dominate.</h1>
              <p className="text-[clamp(1.1rem,1.8vw,1.4rem)] text-gray-400 font-light max-w-2xl leading-relaxed">We don't just advise; we accelerate. Our strategy is built for the era of perpetual disruption.</p>
           </motion.div>
        </div>
      </section>

      {/* 2. PROBLEM STATEMENTS WALL */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
              <div className="space-y-12">
                 <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Select your <br /> constraint.</h2>
                 <div className="flex flex-wrap gap-4">
                    {PROBLEMS.map(p => (
                      <button 
                        key={p.id}
                        onClick={() => setSelectedProblem(p)}
                        className={`px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest transition-all ${selectedProblem.id === p.id ? 'bg-black text-white' : 'bg-white text-black border border-gray-200 hover:border-black'}`}
                      >
                        {p.label}
                      </button>
                    ))}
                 </div>
              </div>
              <div className="bg-white p-16 md:p-24 rounded-[4rem] shadow-2xl border border-gray-100 min-h-[400px] flex items-center">
                 <AnimatePresence mode="wait">
                    <motion.div 
                      key={selectedProblem.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-10"
                    >
                       <Zap size={48} className="text-[#86BC25]" />
                       <h3 className="text-3xl font-black uppercase leading-tight">{selectedProblem.solution}</h3>
                       <button className="flex items-center space-x-3 text-black font-black uppercase tracking-widest text-[10px]">
                          <span>Read Strategy Brief</span>
                          <ArrowRight size={14} />
                       </button>
                    </motion.div>
                 </AnimatePresence>
              </div>
           </div>
        </div>
      </section>

      {/* 3. BEFORE / AFTER BUSINESS MODEL */}
      <section className="py-32 border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
           <div className="text-center mb-24 space-y-6">
              <h2 className="text-5xl font-black uppercase tracking-tighter">Transformation Canvas</h2>
              <p className="text-gray-500 font-light">Visualizing the structural shift from legacy to autonomous.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-16 bg-gray-100 rounded-3xl space-y-10">
                 <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Legacy Structure</span>
                 <div className="space-y-6 opacity-40">
                    <div className="h-4 bg-gray-300 w-full rounded-full" />
                    <div className="h-4 bg-gray-300 w-3/4 rounded-full" />
                    <div className="h-4 bg-gray-300 w-1/2 rounded-full" />
                 </div>
                 <p className="text-sm font-light text-gray-500">Siloed data, high operational drag, and reactive strategic positioning.</p>
              </div>
              <div className="p-16 bg-black text-white rounded-3xl space-y-10 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#86BC25] blur-[80px] opacity-20" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-[#86BC25]">Future Proof</span>
                 <div className="space-y-6">
                    <motion.div animate={{ width: ['0%', '100%'] }} transition={{ duration: 2, repeat: Infinity }} className="h-4 bg-[#86BC25] rounded-full" />
                    <motion.div animate={{ width: ['0%', '90%'] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} className="h-4 bg-white/20 rounded-full" />
                 </div>
                 <p className="text-sm font-light text-gray-400">Hyper-connected, data-led, and capable of Day-0 market response.</p>
              </div>
           </div>
        </div>
      </section>

      {/* 4. TRANSFORMATION STORY */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
           <div className="bg-[#050505] text-white p-16 md:p-24 rounded-[3rem] relative overflow-hidden group">
              <div className="max-w-3xl space-y-12">
                 <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">Scaling the <br /> impossible.</h2>
                 <p className="text-2xl font-light text-gray-400 leading-relaxed">How we helped a Fortune 100 retailer pivot from brick-and-mortar legacy to a 100% autonomous digital commerce engine in just 18 months.</p>
                 <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/10">
                    <div>
                       <span className="text-4xl font-black block text-[#86BC25]">$1.2B</span>
                       <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 mt-2 block">Value Created</span>
                    </div>
                    <div>
                       <span className="text-4xl font-black block">40%</span>
                       <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 mt-2 block">Efficiency Gain</span>
                    </div>
                 </div>
                 <button className="bg-[#86BC25] text-black px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:brightness-110 transition-all flex items-center space-x-4 shadow-2xl shadow-[#86BC25]/20">
                    <span>View Case Film</span>
                    <ArrowRight size={18} />
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

export default ConsultingStrategyPage;
