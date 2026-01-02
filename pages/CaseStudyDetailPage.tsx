
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Share2, Linkedin, Twitter, Mail, CheckCircle2 } from 'lucide-react';

const CaseStudyDetailPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative min-h-[70vh] flex items-end bg-black text-white pt-32 pb-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=2000" 
            alt="Sports apparel retail environment" 
            className="w-full h-full object-cover opacity-50 grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px] relative z-10">
          <button 
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors uppercase tracking-widest text-[10px] font-black mb-12 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
            <span>Success Stories</span>
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="bg-[#86BC25] text-black text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1 mb-8 inline-block">Consulting Case Study</span>
            <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[1] tracking-tighter mb-8 uppercase">
              Forget the dream, <br /> <span className="text-gray-400">it's all about the seam.</span>
            </h1>
            <div className="flex items-center space-x-8">
              <div className="flex flex-col">
                <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">Impact Delivered</span>
                <span className="text-xl font-bold">40% Mobile Conversion Lift</span>
              </div>
              <div className="w-[1px] h-10 bg-white/20" />
              <div className="flex flex-col">
                <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">Timeline</span>
                <span className="text-xl font-bold">14 Month Transformation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="flex-1 space-y-24">
              <div id="challenge" className="space-y-8">
                <h2 className="text-4xl font-black uppercase tracking-tight">The Challenge</h2>
                <div className="prose prose-lg max-w-none text-gray-600 font-light leading-relaxed space-y-6">
                  <p>In an era where split-second latency means lost revenue, a global sports apparel leader found their legacy e-commerce architecture struggling to keep pace with flash sales and seasonal peaks.</p>
                  <p>The "dream" was a perfect, multi-channel experience, but the reality was a fragmented "seam" where data silos prevented real-time inventory visibility and customer personalization.</p>
                </div>
              </div>

              <div id="solution" className="space-y-8">
                <h2 className="text-4xl font-black uppercase tracking-tight">The Solution</h2>
                <div className="prose prose-lg max-w-none text-gray-600 font-light leading-relaxed space-y-6">
                  <p>Vedartha's consulting team architected a serverless microservices framework that decouples the frontend experience from backend heavy-lifting. This allows for infinite scaling during peak demand without the overhead of permanent server clusters.</p>
                  <ul className="space-y-4 list-none p-0">
                    {['Real-time Edge Computing', 'Distributed Ledger Inventory Management', 'AI-Driven Personalization Engine'].map(item => (
                      <li key={item} className="flex items-center space-x-4 border-b border-gray-100 pb-4">
                        <CheckCircle2 size={24} className="text-[#86BC25]" />
                        <span className="text-black font-bold">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div id="impact" className="space-y-8">
                <h2 className="text-4xl font-black uppercase tracking-tight">The Impact</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-10 bg-gray-50 border-t-4 border-[#86BC25]">
                    <h4 className="text-5xl font-black mb-4">40%</h4>
                    <p className="text-gray-500 font-light">Increase in mobile checkout conversion rate through optimized checkout "seams".</p>
                  </div>
                  <div className="p-10 bg-gray-50 border-t-4 border-black">
                    <h4 className="text-5xl font-black mb-4">99.99%</h4>
                    <p className="text-gray-500 font-light">Availability maintained during the highest-traffic flash sale in brand history.</p>
                  </div>
                </div>
              </div>
            </div>

            <aside className="lg:w-[400px] space-y-12">
              <div className="sticky top-40 space-y-12">
                <div className="p-10 bg-black text-white rounded-sm shadow-2xl">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-[#86BC25] mb-6">Expert Insight</h4>
                  <p className="text-lg font-light leading-relaxed italic mb-8">"True digital transformation isn't about replacing the engine; it's about optimizing how every part connects."</p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#86BC25] rounded-full flex items-center justify-center font-black text-black">AR</div>
                    <div>
                      <span className="block font-bold">Ananya Rao</span>
                      <span className="text-[10px] uppercase text-gray-400">Lead Cloud Architect</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h5 className="font-bold border-b border-gray-200 pb-4 uppercase text-xs tracking-widest">Share this story</h5>
                  <div className="flex space-x-4">
                    <button className="p-3 bg-gray-100 rounded-full hover:bg-[#86BC25] hover:text-white transition-all"><Linkedin size={20} /></button>
                    <button className="p-3 bg-gray-100 rounded-full hover:bg-[#86BC25] hover:text-white transition-all"><Twitter size={20} /></button>
                    <button className="p-3 bg-gray-100 rounded-full hover:bg-[#86BC25] hover:text-white transition-all"><Mail size={20} /></button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-black mb-8">Ready to transform your digital commerce?</h3>
          <button className="bg-black text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#86BC25] transition-all flex items-center space-x-4 mx-auto">
            <span>Connect with our experts</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetailPage;
