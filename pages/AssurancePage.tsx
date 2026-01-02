
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, Globe, ArrowRight, Printer, Share2, Mail, FilePlus, Headphones, CheckCircle2 } from 'lucide-react';

const AssurancePage: React.FC = () => {
  const handlePrint = () => window.print();

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-black text-white pt-48 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px] relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[#86BC25] font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">
              Service / Audit & Assurance
            </span>
            <div className="flex flex-col lg:flex-row gap-20 items-end">
              <div className="lg:w-2/3">
                <h1 className="text-[clamp(3rem,8vw,6rem)] font-black leading-[0.9] tracking-tighter mb-10 uppercase">Assurance</h1>
                <p className="text-[1.8rem] font-light text-gray-300 leading-snug">
                  Building trust in non-financial reporting through transparency, high-quality disclosure, and objective validation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#86BC25]/5 blur-[120px]" />
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          <div className="flex flex-col lg:flex-row gap-24">
            {/* Left: Deep Dive Content */}
            <div className="lg:w-2/3 space-y-24">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                <div className="space-y-12">
                  <h2 className="text-4xl font-black tracking-tight uppercase leading-none">The Trust <br /> Deficit</h2>
                  <p className="text-lg text-gray-500 font-light leading-relaxed">
                    In a world of information overload, trust is the rarest commodity. Assurance helps organizations validate their ESG commitments, cybersecurity posture, and third-party risks to gain a competitive edge.
                  </p>
                  <div className="space-y-6">
                    {[
                      { title: 'ESG Assurance', desc: 'Validating climate goals and social impact metrics.' },
                      { title: 'Third-Party Assurance', desc: 'Reducing supply chain risk through SOC reporting.' },
                      { title: 'Internal Controls', desc: 'Optimizing operational resilience frameworks.' }
                    ].map(item => (
                      <div key={item.title} className="flex flex-col border-b border-gray-100 pb-6 group cursor-pointer">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xl font-bold group-hover:text-[#86BC25] transition-colors uppercase tracking-tight">{item.title}</span>
                          <ArrowRight size={20} className="text-gray-300 group-hover:translate-x-2 transition-transform" />
                        </div>
                        <p className="text-sm text-gray-400 font-light">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1554224155-1696413575b8?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Assurance Strategy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-10 left-10 text-white">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#86BC25] mb-2 block">Our Methodology</span>
                    <h4 className="text-2xl font-bold leading-tight">Evidence-based <br /> Validation.</h4>
                  </div>
                </div>
              </div>

              {/* Impact Section */}
              <div className="bg-black text-white p-16 rounded-[3rem] relative overflow-hidden">
                <div className="relative z-10 space-y-10">
                  <h3 className="text-4xl font-black uppercase tracking-tighter">Impact at Scale</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
                    <div>
                      <span className="text-5xl font-black text-[#86BC25] block">400+</span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-2 block">Global Clients</span>
                    </div>
                    <div>
                      <span className="text-5xl font-black text-[#86BC25] block">$2B+</span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-2 block">Validated Assets</span>
                    </div>
                    <div>
                      <span className="text-5xl font-black text-[#86BC25] block">99%</span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-2 block">Trust Score</span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#86BC25]/10 rounded-full blur-[80px]" />
              </div>
            </div>

            {/* Right: Actions Sidebar */}
            <aside className="lg:w-1/3">
              <div className="sticky top-32 space-y-12">
                {/* Quick Actions */}
                <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Engagement</h4>
                  <button 
                    onClick={() => window.location.hash = 'rfp'}
                    className="w-full flex items-center justify-between p-6 bg-[#86BC25] text-black rounded-2xl group transition-all hover:scale-[1.02] shadow-xl shadow-[#86BC25]/20"
                  >
                    <div className="flex flex-col items-start leading-tight">
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] opacity-60 mb-1">Process</span>
                      <span className="font-black text-xs uppercase tracking-widest">Submit RFP</span>
                    </div>
                    <FilePlus size={24} />
                  </button>
                  <button 
                    onClick={() => window.location.hash = 'contact-us'}
                    className="w-full flex items-center justify-between p-6 bg-black text-white rounded-2xl group transition-all hover:bg-neutral-900 border border-white/10"
                  >
                    <div className="flex flex-col items-start leading-tight">
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] opacity-40 mb-1">Connect</span>
                      <span className="font-black text-xs uppercase tracking-widest">Contact an Expert</span>
                    </div>
                    <Headphones size={24} />
                  </button>
                </div>

                {/* Utilities */}
                <div className="space-y-6 pt-6 border-t border-gray-100">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Utilities</h4>
                  <div className="flex flex-wrap gap-4">
                    <button className="p-4 bg-gray-50 rounded-full hover:bg-[#86BC25] hover:text-white transition-all"><Share2 size={20} /></button>
                    <button className="p-4 bg-gray-50 rounded-full hover:bg-[#86BC25] hover:text-white transition-all"><Mail size={20} /></button>
                    <button onClick={handlePrint} className="p-4 bg-gray-50 rounded-full hover:bg-[#86BC25] hover:text-white transition-all flex items-center space-x-2">
                      <Printer size={20} />
                      <span className="text-[10px] font-black uppercase tracking-widest pr-2">Print Info</span>
                    </button>
                  </div>
                </div>

                {/* Deep Dive Insights */}
                <div className="p-8 border-2 border-gray-50 rounded-3xl space-y-6">
                  <h4 className="text-xl font-black uppercase tracking-tight">Assurance Lab</h4>
                  <p className="text-sm text-gray-400 font-light">Explore our experimental validation techniques for emerging digital assets.</p>
                  <button className="w-full py-4 border border-black rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                    Access Lab Briefs
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AssurancePage;
