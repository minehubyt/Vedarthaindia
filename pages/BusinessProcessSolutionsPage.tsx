
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, BarChart3, Globe, Users, FilePlus, ChevronRight, Printer, Share2, Mail, Headphones, TrendingUp, Zap } from 'lucide-react';

interface BPSPageProps {
  onCaseClick?: () => void;
}

const BusinessProcessSolutionsPage: React.FC<BPSPageProps> = ({ onCaseClick }) => {
  const handlePrint = () => window.print();

  return (
    <div className="bg-white min-h-screen">
      {/* Optimized Responsive Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-black text-white overflow-hidden pt-[70px]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Business Operations" 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        </div>

        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px] relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <span className="text-[#86BC25] font-black uppercase tracking-[0.4em] text-[clamp(10px,1.2vw,14px)] mb-8 block">
              Service / Tax & Legal
            </span>
            <h1 className="text-[clamp(2.5rem,10vw,8.5rem)] font-black leading-[0.85] tracking-tighter mb-12 uppercase">
              Business Process <br /> <span className="text-gray-400">Solutions</span>
            </h1>
            <p className="text-[clamp(1.1rem,1.8vw,1.4rem)] text-gray-300 font-light max-w-3xl leading-relaxed">
              Scale without borders. We provide technology-enabled managed services that allow you to focus on your core mission while we handle the complexities of global operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-[clamp(4rem,10vw,10rem)] bg-white">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          <div className="flex flex-col lg:flex-row gap-24 xl:gap-32 items-start">
            {/* Left: Detailed Content */}
            <div className="lg:w-2/3 space-y-24">
              <div className="space-y-12">
                <h2 className="text-[clamp(2rem,4.5vw,4.5rem)] font-black tracking-tight leading-none uppercase">Beyond <br /> Outsourcing.</h2>
                <p className="text-[clamp(1rem,1.4vw,1.25rem)] text-gray-500 font-light leading-relaxed">
                  Traditional BPO focuses on cost. We focus on strategic value. By integrating advanced analytics and RPA into your daily operations, we transform your back-office from a burden into a competitive advantage.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="p-10 bg-gray-50 rounded-3xl flex flex-col justify-center border border-gray-100 group hover:border-[#86BC25] transition-all">
                    <TrendingUp size={40} className="text-[#86BC25] mb-6" />
                    <h4 className="text-[clamp(1.5rem,2.5vw,2rem)] font-black text-black mb-4 uppercase tracking-tighter">30% Efficiency</h4>
                    <p className="text-sm text-gray-500 font-light">Average operational efficiency gain for global organizations after 12 months.</p>
                  </div>
                  <div className="p-10 bg-gray-50 rounded-3xl flex flex-col justify-center border border-gray-100 group hover:border-[#86BC25] transition-all">
                    <Globe size={40} className="text-[#86BC25] mb-6" />
                    <h4 className="text-[clamp(1.5rem,2.5vw,2rem)] font-black text-black mb-4 uppercase tracking-tighter">150+ Markets</h4>
                    <p className="text-sm text-gray-500 font-light">Supporting complex compliance and payroll in every major global jurisdiction.</p>
                  </div>
                </div>
              </div>

              {/* Service Matrix */}
              <div className="space-y-12">
                <h3 className="text-3xl font-black uppercase tracking-tight">Managed Service Spectrum</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                  {[
                    { title: 'Finance & Accounting', icon: BarChart3, desc: 'End-to-end management of financial statements and global reporting.' },
                    { title: 'Global Payroll', icon: Globe, desc: 'Unified payroll solutions across multiple jurisdictions with complex compliance.' },
                    { title: 'HR Administration', icon: Users, desc: 'Optimizing employee lifecycles and administrative tasks through cloud.' },
                    { title: 'Statutory Compliance', icon: ShieldCheck, desc: 'Managing local tax and legal requirements with total global visibility.' }
                  ].map((service, i) => (
                    <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-2xl transition-all group flex flex-col">
                      <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-[#86BC25] mb-8 group-hover:bg-[#86BC25] group-hover:text-black transition-all">
                        <service.icon size={30} />
                      </div>
                      <h4 className="font-black text-xl mb-4 uppercase tracking-tight leading-none">{service.title}</h4>
                      <p className="text-gray-500 text-sm font-light leading-relaxed mb-8 flex-1">{service.desc}</p>
                      <button className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 group-hover:text-[#86BC25] transition-colors">
                        Explore Capability <ChevronRight size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Actions Sidebar */}
            <aside className="lg:w-1/3">
              <div className="sticky top-32 space-y-12">
                {/* conversion */}
                <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Optimization</h4>
                  <button 
                    onClick={() => window.location.hash = 'rfp'}
                    className="w-full flex items-center justify-between p-6 bg-[#86BC25] text-black rounded-2xl group transition-all hover:scale-[1.02] shadow-xl shadow-[#86BC25]/20"
                  >
                    <div className="flex flex-col items-start leading-tight">
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] opacity-60 mb-1">Proposal</span>
                      <span className="font-black text-xs uppercase tracking-widest">Submit RFP</span>
                    </div>
                    <FilePlus size={24} />
                  </button>
                  <button 
                    onClick={() => window.location.hash = 'contact-us'}
                    className="w-full flex items-center justify-between p-6 bg-black text-white rounded-2xl group transition-all hover:bg-neutral-900 border border-white/10"
                  >
                    <div className="flex flex-col items-start leading-tight">
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] opacity-40 mb-1">Assistance</span>
                      <span className="font-black text-xs uppercase tracking-widest">Connect with BPS Lead</span>
                    </div>
                    <Headphones size={24} />
                  </button>
                </div>

                {/* Share/Print */}
                <div className="space-y-6 pt-6 border-t border-gray-100">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Tools</h4>
                  <div className="flex flex-wrap gap-4">
                    <button className="p-4 bg-gray-50 rounded-full hover:bg-[#86BC25] hover:text-white transition-all"><Share2 size={20} /></button>
                    <button className="p-4 bg-gray-50 rounded-full hover:bg-[#86BC25] hover:text-white transition-all"><Mail size={20} /></button>
                    <button onClick={handlePrint} className="p-4 bg-gray-50 rounded-full hover:bg-[#86BC25] hover:text-white transition-all flex items-center space-x-2">
                      <Printer size={20} />
                      <span className="text-[10px] font-black uppercase tracking-widest pr-2">Print Scope</span>
                    </button>
                  </div>
                </div>

                {/* Resource Spotlight */}
                <div className="p-10 bg-gray-50 rounded-[2.5rem] space-y-6">
                   <Zap size={32} className="text-[#86BC25]" />
                   <h4 className="text-xl font-black uppercase">Managed Services Lab</h4>
                   <p className="text-xs text-gray-400 font-light leading-relaxed">Join our next executive briefing on the future of autonomous back-office operations.</p>
                   <button className="w-full py-4 bg-black text-white rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-[#86BC25] hover:text-black transition-all">
                     Register for Event
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

export default BusinessProcessSolutionsPage;
