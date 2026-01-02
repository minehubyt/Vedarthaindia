
import React from 'react';
import { motion } from 'framer-motion';
import { FileSearch, Activity, ArrowRight, Printer, Share2, Mail, FilePlus, Headphones, ChevronRight, MapPin } from 'lucide-react';

const AuditPage: React.FC = () => {
  const handlePrint = () => window.print();

  return (
    <div className="bg-white min-h-screen">
      {/* AI Smart Optimized Banner Padding */}
      <section className="bg-black text-white pt-[clamp(140px,15vh,180px)] pb-[clamp(3rem,8vw,8rem)] overflow-hidden">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[#86BC25] font-black uppercase tracking-[0.4em] text-[clamp(10px,1.2vw,14px)] mb-8 block">
              Service / Audit & Assurance
            </span>
            <h1 className="text-[clamp(2.5rem,10vw,8.5rem)] font-black leading-[0.85] tracking-tighter mb-12 uppercase">
              Audit <br /> <span className="text-gray-500">Services</span>
            </h1>
            <p className="text-[clamp(1.1rem,2vw,1.6rem)] text-gray-300 font-light max-w-3xl leading-relaxed">
              High-quality audits are the bedrock of trust in capital markets. We combine technical excellence with cutting-edge data analytics to deliver insights that go beyond compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-[clamp(4rem,10vw,10rem)]">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          <div className="flex flex-col lg:flex-row gap-20 xl:gap-32">
            {/* Left: Detailed Content */}
            <div className="lg:w-2/3 space-y-24">
              <div className="space-y-12">
                <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-black tracking-tight uppercase leading-none">Audit <br /> Reimagined</h2>
                <p className="text-[clamp(1rem,1.2vw,1.2rem)] text-gray-500 font-light leading-relaxed">
                  The digital age demands a different kind of audit. We are transforming the traditional model through the power of automation and advanced cognitive technologies, allowing our teams to focus on high-risk areas and providing our clients with deeper, real-time insights into their business operations.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="p-10 border border-gray-100 rounded-3xl hover:border-[#86BC25] transition-all group hover:shadow-2xl">
                    <FileSearch className="text-[#86BC25] mb-6 group-hover:scale-110 transition-transform" size={40} />
                    <h4 className="font-black text-xl mb-4 uppercase tracking-tight group-hover:text-[#86BC25] transition-colors">Financial Audit</h4>
                    <p className="text-sm text-gray-400 font-light">Global reach with deep local expertise and precision in financial reporting.</p>
                  </div>
                  <div className="p-10 border border-gray-100 rounded-3xl hover:border-[#86BC25] transition-all group hover:shadow-2xl">
                    <Activity className="text-[#86BC25] mb-6 group-hover:scale-110 transition-transform" size={40} />
                    <h4 className="font-black text-xl mb-4 uppercase tracking-tight group-hover:text-[#86BC25] transition-colors">IT Audit</h4>
                    <p className="text-sm text-gray-400 font-light">Assessing the digital backbone and resilience of your complex IT infrastructure.</p>
                  </div>
                </div>
              </div>

              {/* Related Success Story */}
              <div className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100">
                <span className="text-[#86BC25] font-black uppercase tracking-widest text-[10px] mb-4 block">Integrated Success Story</span>
                <h3 className="text-[clamp(1.5rem,3vw,2.5rem)] font-black mb-6 uppercase leading-tight">Uncovering 20% Operational Waste through AI-Led Audit.</h3>
                <p className="text-gray-500 font-light mb-8 leading-relaxed">
                  For a global logistics firm, we implemented our proprietary "Omnia" platform. By analyzing 100% of transaction data, we identified significant leakage that had been missed for years.
                </p>
                <button className="flex items-center space-x-3 text-black font-black uppercase tracking-widest text-[10px] group hover:text-[#86BC25] transition-colors">
                  <span>Explore Case Study</span>
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right: Actions Sidebar */}
            <aside className="lg:w-1/3">
              <div className="sticky top-32 space-y-12">
                <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Actions</h4>
                  <button 
                    onClick={() => window.location.hash = 'rfp'}
                    className="w-full flex items-center justify-between p-6 bg-[#86BC25] text-black rounded-2xl group transition-all hover:scale-[1.02] shadow-xl shadow-[#86BC25]/20"
                  >
                    <div className="flex flex-col items-start leading-tight">
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] opacity-60 mb-1">Inquiry</span>
                      <span className="font-black text-xs uppercase tracking-widest">Submit RFP</span>
                    </div>
                    <FilePlus size={24} />
                  </button>
                  <button 
                    onClick={() => window.location.hash = 'contact-us'}
                    className="w-full flex items-center justify-between p-6 bg-black text-white rounded-2xl group transition-all hover:bg-neutral-900 border border-white/10"
                  >
                    <div className="flex flex-col items-start leading-tight">
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] opacity-40 mb-1">Consultation</span>
                      <span className="font-black text-xs uppercase tracking-widest">Contact an Expert</span>
                    </div>
                    <Headphones size={24} />
                  </button>
                </div>

                <div className="space-y-6 pt-6 border-t border-gray-100">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Share & Utilities</h4>
                  <div className="flex items-center space-x-4">
                    <button className="p-4 bg-gray-50 rounded-full hover:bg-[#86BC25] hover:text-white transition-all"><Share2 size={20} /></button>
                    <button onClick={handlePrint} className="p-4 bg-gray-50 rounded-full hover:bg-[#86BC25] hover:text-white transition-all flex items-center space-x-2">
                      <Printer size={20} />
                      <span className="text-[10px] font-black uppercase tracking-widest pr-2">Print Page</span>
                    </button>
                  </div>
                </div>
              </div>
            </aside>
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

export default AuditPage;
