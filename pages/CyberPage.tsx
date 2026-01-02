
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Terminal, ArrowRight, Radio, Network, AlertTriangle, Printer, Share2, Mail, FilePlus, Headphones, ChevronRight, Zap } from 'lucide-react';

interface CyberPageProps {
  onCaseClick?: () => void;
}

const CyberPage: React.FC<CyberPageProps> = ({ onCaseClick }) => {
  const handlePrint = () => window.print();

  return (
    <div className="bg-[#050505] min-h-screen text-white">
      {/* AI Smart Optimized Hero Padding */}
      <section className="relative min-h-[90vh] flex items-center pt-[clamp(100px,15vh,180px)] pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_80%)] z-10" />
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-20 grayscale brightness-50" 
            alt="Cyber Network" 
          />
        </div>

        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px] relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <span className="text-[#86BC25] font-black uppercase tracking-[0.4em] text-[clamp(10px,1.2vw,14px)] mb-8 block">
              Service / Risk Advisory
            </span>
            <div className="flex items-center space-x-3 text-[#86BC25] mb-8">
              <Radio size={16} className="animate-pulse" />
              <span className="font-black uppercase tracking-[0.4em] text-[10px]">Real-Time Defense Network</span>
            </div>
            <h1 className="text-[clamp(2.5rem,10vw,8.5rem)] font-black leading-[0.85] tracking-tighter mb-12 uppercase">
              Cyber <br /> <span className="text-gray-700">Resilience</span>
            </h1>
            <p className="text-[clamp(1.1rem,1.8vw,1.4rem)] text-gray-400 font-light max-w-3xl leading-relaxed mb-16">
              Defend what matters most. In a world of boundaryless threats, we provide the strategy, defense, and response capabilities needed to turn cyber security into a business enabler.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-[clamp(4rem,12vw,10rem)] bg-white text-black">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          <div className="flex flex-col lg:flex-row gap-24 items-start">
            <div className="lg:w-2/3 space-y-32">
              <div className="space-y-12">
                <span className="text-[#86BC25] font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Architecture of Defense</span>
                <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-black tracking-tighter uppercase mb-10 leading-none">Secure <br /> the digital <br /> frontier.</h2>
                <p className="text-lg text-gray-500 font-light leading-relaxed">
                  Cyber risk is no longer just an IT problem—it's a fundamental business survival priority. Our framework addresses the technical, human, and strategic dimensions of risk across your entire ecosystem.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { title: 'Strategy & Governance', icon: Shield, desc: 'Aligning security with business objectives and regulatory frameworks globally.' },
                    { title: 'Identity & Access', icon: Lock, desc: 'Zero Trust architecture for secure, boundaryless modern workforce management.' },
                    { title: 'Cyber Defense (SOC)', icon: Terminal, desc: '24/7 managed detection and response using advanced AI threat hunting.' },
                    { title: 'Incident Response', icon: AlertTriangle, desc: 'Rapid containment and recovery specialists ready to deploy within hours.' }
                  ].map((item, i) => (
                    <div key={i} className="p-12 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:border-[#86BC25] hover:shadow-2xl transition-all group">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#86BC25] mb-10 shadow-sm group-hover:bg-[#86BC25] group-hover:text-black transition-all">
                        <item.icon size={32} />
                      </div>
                      <h4 className="font-black text-2xl mb-4 uppercase tracking-tight leading-tight">{item.title}</h4>
                      <p className="text-gray-500 font-light leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Actions Sidebar */}
            <aside className="lg:w-1/3 w-full">
              <div className="sticky top-32 space-y-12">
                <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Response</h4>
                  <button 
                    onClick={() => window.location.hash = 'rfp'}
                    className="w-full flex items-center justify-between p-6 bg-[#86BC25] text-black rounded-2xl group transition-all hover:scale-[1.02] shadow-xl shadow-[#86BC25]/20"
                  >
                    <div className="flex flex-col items-start leading-tight">
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] opacity-60 mb-1">Defense</span>
                      <span className="font-black text-xs uppercase tracking-widest">Submit RFP</span>
                    </div>
                    <FilePlus size={24} />
                  </button>
                  <button 
                    onClick={() => window.location.hash = 'contact-us'}
                    className="w-full flex items-center justify-between p-6 bg-black text-white rounded-2xl group transition-all hover:bg-neutral-900 border border-white/10"
                  >
                    <div className="flex flex-col items-start leading-tight">
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] opacity-40 mb-1">Immediate</span>
                      <span className="font-black text-xs uppercase tracking-widest">Connect with CISO</span>
                    </div>
                    <Headphones size={24} />
                  </button>
                </div>

                <div className="space-y-6 pt-6 border-t border-gray-100">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Security Feed</h4>
                  <div className="flex flex-wrap gap-4">
                    <button onClick={handlePrint} className="p-4 bg-gray-50 rounded-full hover:bg-[#86BC25] hover:text-white transition-all flex items-center space-x-2">
                      <Printer size={20} />
                      <span className="text-[10px] font-black uppercase tracking-widest pr-2">Print Dossier</span>
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CyberPage;
