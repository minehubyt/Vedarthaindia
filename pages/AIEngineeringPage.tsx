
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Network, ArrowRight, Printer, Share2, Mail, FilePlus, Headphones, Code, Zap, Globe } from 'lucide-react';

const AIEngineeringPage: React.FC = () => {
  const handlePrint = () => window.print();

  return (
    <div className="bg-[#050505] min-h-screen text-white">
      {/* Optimized Tech Hero */}
      <section className="relative h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-40 grayscale" alt="AI Tech" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        </div>

        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px] relative z-10">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            <span className="text-[#86BC25] font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">
              Service / Consulting
            </span>
            <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-black leading-[0.85] tracking-tighter mb-10 uppercase">
              AI & <br /> <span className="text-gray-500">Engineering</span>
            </h1>
            <p className="text-xl text-gray-400 font-light max-w-xl leading-relaxed mb-12">
              We translate the promise of AI into production-ready software. From custom LLMs to high-performance data pipelines, we build the engine of the intelligent enterprise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-32 bg-white text-black">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          <div className="flex flex-col lg:flex-row gap-24">
            {/* Left: Deep Engineering Details */}
            <div className="lg:w-2/3 space-y-32">
              {/* Capabilities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                <div className="space-y-6">
                  <Cpu size={48} className="text-[#86BC25]" />
                  <h3 className="text-2xl font-black uppercase tracking-tight">Applied AI</h3>
                  <p className="text-gray-500 font-light leading-relaxed">Scaling generative and predictive AI models from proof-of-concept to global production environments with rigorous safety guardrails.</p>
                </div>
                <div className="space-y-6">
                  <Database size={48} className="text-[#86BC25]" />
                  <h3 className="text-2xl font-black uppercase tracking-tight">Data Strategy</h3>
                  <p className="text-gray-500 font-light leading-relaxed">Building the resilient, high-velocity data architectures required to fuel the next generation of intelligent, real-time enterprises.</p>
                </div>
                <div className="space-y-6">
                  <Network size={48} className="text-[#86BC25]" />
                  <h3 className="text-2xl font-black uppercase tracking-tight">Edge Engineering</h3>
                  <p className="text-gray-500 font-light leading-relaxed">Optimizing latency and computing performance at the network edge for ultra-fast, mission-critical industrial AI applications.</p>
                </div>
              </div>

              {/* The "Pipeline" Section */}
              <div className="space-y-12">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-1 bg-[#86BC25]" />
                  <h2 className="text-4xl font-black uppercase tracking-tighter">The Transformation Pipeline</h2>
                </div>
                <div className="relative border-l-2 border-gray-100 pl-12 space-y-16">
                  {[
                    { title: "Discovery & Taxonomy", desc: "Mapping your data landscape and identifying high-impact AI opportunities." },
                    { title: "Rapid Prototyping", desc: "Building functional MVPs in 4-6 weeks using our modular tech stack." },
                    { title: "Scale & Orchestration", desc: "Deploying to global cloud environments with automated CI/CD and monitoring." }
                  ].map((step, i) => (
                    <div key={step.title} className="relative">
                      <div className="absolute -left-[57px] top-0 w-4 h-4 bg-white border-4 border-[#86BC25] rounded-full" />
                      <h4 className="text-2xl font-black uppercase mb-3">{step.title}</h4>
                      <p className="text-gray-500 font-light text-lg">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Spotlight */}
              <div className="p-16 bg-[#f8f9fa] rounded-[3rem] space-y-12">
                <div className="flex justify-between items-end">
                  <h3 className="text-3xl font-black uppercase">Technology Alliances</h3>
                  <Code className="text-gray-200" size={60} />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 opacity-40 grayscale group hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
                  {/* Placeholder logos as text for replica feel */}
                  <div className="font-black text-2xl tracking-tighter">NVIDIA</div>
                  <div className="font-black text-2xl tracking-tighter">AWS</div>
                  <div className="font-black text-2xl tracking-tighter">AZURE</div>
                  <div className="font-black text-2xl tracking-tighter">DATABRICKS</div>
                </div>
              </div>
            </div>

            {/* Right: Actions Sidebar */}
            <aside className="lg:w-1/3">
              <div className="sticky top-32 space-y-12">
                {/* Engineering Actions */}
                <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Accelerate</h4>
                  <button 
                    onClick={() => window.location.hash = 'rfp'}
                    className="w-full flex items-center justify-between p-6 bg-[#86BC25] text-black rounded-2xl group transition-all hover:scale-[1.02] shadow-xl shadow-[#86BC25]/20"
                  >
                    <div className="flex flex-col items-start leading-tight">
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] opacity-60 mb-1">Project</span>
                      <span className="font-black text-xs uppercase tracking-widest">Submit RFP</span>
                    </div>
                    <FilePlus size={24} />
                  </button>
                  <button 
                    onClick={() => window.location.hash = 'contact-us'}
                    className="w-full flex items-center justify-between p-6 bg-black text-white rounded-2xl group transition-all hover:bg-neutral-900"
                  >
                    <div className="flex flex-col items-start leading-tight">
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] opacity-40 mb-1">Strategy</span>
                      <span className="font-black text-xs uppercase tracking-widest">Consult AI Architect</span>
                    </div>
                    <Headphones size={24} />
                  </button>
                </div>

                {/* Utilities */}
                <div className="space-y-6 pt-6 border-t border-gray-100">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Share & Store</h4>
                  <div className="flex flex-wrap gap-4">
                    <button className="p-4 bg-gray-50 rounded-full hover:bg-[#86BC25] hover:text-white transition-all"><Share2 size={20} /></button>
                    <button className="p-4 bg-gray-50 rounded-full hover:bg-[#86BC25] hover:text-white transition-all"><Mail size={20} /></button>
                    <button onClick={handlePrint} className="p-4 bg-gray-50 rounded-full hover:bg-[#86BC25] hover:text-white transition-all flex items-center space-x-2">
                      <Printer size={20} />
                      <span className="text-[10px] font-black uppercase tracking-widest pr-2">Print Blueprint</span>
                    </button>
                  </div>
                </div>

                {/* Live System Status (UI Detail) */}
                <div className="p-8 bg-black text-white rounded-3xl space-y-6">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-green-500">Live Lab Status</span>
                  </div>
                  <h4 className="text-lg font-bold">Autonomous Agents v4.2</h4>
                  <p className="text-xs text-gray-400 font-light">Deployment currently active in Financial District Sandbox Ranchi-OPS-01.</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIEngineeringPage;
