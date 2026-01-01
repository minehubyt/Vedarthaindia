
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { ChevronRight, ExternalLink, Shield, FileText, Lock, Scale, Info, CheckCircle2, ArrowUpCircle } from 'lucide-react';

const LEGAL_DOCS = [
  { id: 'acceptance', title: 'Acceptance of Terms', icon: <CheckCircle2 size={18} /> },
  { id: 'services', title: 'Professional Services', icon: <Shield size={18} /> },
  { id: 'ip', title: 'Intellectual Property', icon: <FileText size={18} /> },
  { id: 'privacy', title: 'Privacy & Data', icon: <Lock size={18} /> },
  { id: 'liability', title: 'Limitation of Liability', icon: <Scale size={18} /> },
  { id: 'network', title: 'Global Network', icon: <Info size={18} /> }
];

const LegalPage: React.FC = () => {
  const [activeDoc, setActiveDoc] = useState('acceptance');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      
      // Basic Scroll-spy logic
      const sections = LEGAL_DOCS.map(doc => document.getElementById(doc.id));
      const scrollPos = window.scrollY + 200;

      sections.forEach(section => {
        if (section && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          setActiveDoc(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 120,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-[#86BC25] z-[300] origin-left" 
        style={{ scaleX }} 
      />

      {/* Hero Header */}
      <section className="bg-black text-white pt-[max(100px,15vh)] pb-20 overflow-hidden relative">
        <div className="container mx-auto px-[6vw] lg:px-[8vw] max-w-[1800px] relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.4em] text-[#86BC25] mb-8">
              <span className="w-8 h-[1px] bg-[#86BC25]" />
              <span>Legal Governance</span>
            </div>
            <h1 className="text-[clamp(2.5rem,8vw,6.5rem)] font-black leading-[0.9] tracking-tighter mb-8 uppercase">
              Terms of <br /> Use
            </h1>
            <p className="text-[clamp(1rem,1.8vw,1.4rem)] text-gray-400 font-light max-w-2xl leading-relaxed">
              Transparent, professional, and built on trust. These terms govern your engagement with the Vedartha Global digital ecosystem.
            </p>
          </motion.div>
        </div>
        {/* Abstract BG element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#86BC25]/5 blur-[150px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      </section>

      {/* Main Content Layout */}
      <section className="py-20 relative">
        <div className="container mx-auto px-[6vw] lg:px-[8vw] max-w-[1800px]">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left Sidebar Navigation */}
            <aside className="lg:w-[320px] hidden lg:block">
              <div className="sticky top-32 space-y-2">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-6">Document Sections</p>
                {LEGAL_DOCS.map((doc) => (
                  <button
                    key={doc.id}
                    onClick={() => scrollToSection(doc.id)}
                    className={`w-full flex items-center space-x-4 px-6 py-4 rounded-xl transition-all duration-300 text-left group ${
                      activeDoc === doc.id 
                      ? 'bg-black text-white shadow-xl translate-x-2' 
                      : 'text-gray-500 hover:bg-gray-50 hover:text-black'
                    }`}
                  >
                    <span className={`${activeDoc === doc.id ? 'text-[#86BC25]' : 'text-gray-300 group-hover:text-black'}`}>
                      {doc.icon}
                    </span>
                    <span className="text-sm font-bold tracking-tight">{doc.title}</span>
                  </button>
                ))}
                
                <div className="mt-12 p-8 bg-gray-50 rounded-2xl border border-gray-100">
                  <h4 className="text-xs font-black uppercase mb-4 tracking-widest">Need help?</h4>
                  <p className="text-xs text-gray-500 leading-relaxed mb-6 font-light">
                    Our legal team is available for detailed inquiries regarding our framework.
                  </p>
                  <button className="text-[#86BC25] text-xs font-black uppercase tracking-widest flex items-center group">
                    Contact Legal <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </aside>

            {/* Document Content */}
            <div className="flex-1 lg:max-w-4xl space-y-24">
              
              <div id="acceptance" className="scroll-mt-32">
                <div className="flex items-center space-x-4 mb-8">
                  <span className="text-4xl font-black text-gray-100">01</span>
                  <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">Acceptance of Terms</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-600 font-light leading-relaxed space-y-6">
                  <p>
                    By accessing or using this website (the "Site"), you acknowledge that you have read, understood, and agreed to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Site.
                  </p>
                  <div className="bg-[#86BC25]/5 p-8 border-l-4 border-[#86BC25] rounded-r-xl">
                    <p className="text-black font-bold mb-2 flex items-center gap-2">
                      <Info size={18} /> In Plain English:
                    </p>
                    <p className="text-sm">Using this site means you're okay with our rules. If you're not, it's best to stop here.</p>
                  </div>
                  <p>
                    Vedartha International Limited reserves the right to modify these terms at any time without prior notice. Your continued use of the Site following any changes constitutes your acceptance of the new Terms of Use.
                  </p>
                </div>
              </div>

              <div id="services" className="scroll-mt-32">
                <div className="flex items-center space-x-4 mb-8">
                  <span className="text-4xl font-black text-gray-100">02</span>
                  <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">Professional Services</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-600 font-light leading-relaxed space-y-6">
                  <p>
                    The information contained on this Site is for general guidance on matters of interest only. The application and impact of laws can vary widely based on the specific facts involved. Given the changing nature of laws, rules and regulations, there may be delays, omissions or inaccuracies in information contained in this Site.
                  </p>
                  <p className="font-bold text-black italic">
                    The Site and its content do not constitute professional advice.
                  </p>
                  <p>
                    Accordingly, the information on this Site is provided with the understanding that the authors and publishers are not herein engaged in rendering legal, accounting, tax, or other professional advice and services. As such, it should not be used as a substitute for consultation with professional accounting, tax, legal or other competent advisers.
                  </p>
                </div>
              </div>

              <div id="ip" className="scroll-mt-32">
                <div className="flex items-center space-x-4 mb-8">
                  <span className="text-4xl font-black text-gray-100">03</span>
                  <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">Intellectual Property</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-600 font-light leading-relaxed space-y-6">
                  <p>
                    Unless otherwise noted, all Content on the Site is the property of Vedartha International Limited or its global network of firms. This includes, but is not limited to, text, graphics, logos, icons, images, and software.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                    <div className="p-6 bg-gray-50 rounded-xl">
                      <h4 className="font-bold text-black mb-2 uppercase text-xs tracking-widest">Permitted Use</h4>
                      <p className="text-sm">You may download and print one copy of the content for personal, non-commercial use, provided you do not modify it.</p>
                    </div>
                    <div className="p-6 bg-red-50/30 rounded-xl">
                      <h4 className="font-bold text-black mb-2 uppercase text-xs tracking-widest">Prohibited Use</h4>
                      <p className="text-sm">Reproduction, modification, distribution, or republishing of any Site content without express permission is strictly forbidden.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="privacy" className="scroll-mt-32">
                <div className="flex items-center space-x-4 mb-8">
                  <span className="text-4xl font-black text-gray-100">04</span>
                  <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">Privacy & Data</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-600 font-light leading-relaxed space-y-6">
                  <p>
                    Your privacy is critically important to us. Our Privacy Policy explains how we collect, use, and share information about you when you visit our Site. By using the Site, you consent to the collection and use of information as described in our Privacy Statement.
                  </p>
                  <button className="inline-flex items-center space-x-3 text-[#86BC25] font-black uppercase tracking-widest text-sm hover:underline">
                    <span>Read Full Privacy Statement</span>
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>

              <div id="liability" className="scroll-mt-32">
                <div className="flex items-center space-x-4 mb-8">
                  <span className="text-4xl font-black text-gray-100">05</span>
                  <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">Limitation of Liability</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-600 font-light leading-relaxed space-y-6">
                  <p>
                    In no event will Vedartha International Limited, its related partnerships or corporations, or the partners, agents or employees thereof be liable to you or anyone else for any decision made or action taken in reliance on the information in this Site or for any consequential, special or similar damages, even if advised of the possibility of such damages.
                  </p>
                  <p>
                    Certain links in this Site connect to other Web Sites maintained by third parties over whom Vedartha International Limited has no control. Vedartha makes no representations as to the accuracy or any other aspect of information contained in other Web Sites.
                  </p>
                </div>
              </div>

              <div id="network" className="scroll-mt-32">
                <div className="flex items-center space-x-4 mb-8">
                  <span className="text-4xl font-black text-gray-100">06</span>
                  <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">Global Network</h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-600 font-light leading-relaxed space-y-6">
                  <p>
                    Vedartha refers to one or more of Vedartha International Limited and its global network of firms. Each firm is a legally separate and independent entity. Vedartha International Limited (also referred to as "Vedartha Global") does not provide services to clients directly.
                  </p>
                  <p>
                    These Terms of Use are issued on behalf of the Vedartha network. For more details on the structure of our organization, please visit our global about page.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Floating Scroll Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-32 right-8 z-[140] bg-black text-white p-4 rounded-full shadow-2xl hover:bg-[#86BC25] hover:text-black transition-all"
          >
            <ArrowUpCircle size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer Disclaimer Box */}
      <section className="bg-gray-50 py-20 border-t border-gray-100">
        <div className="container mx-auto px-[6vw] lg:px-[8vw] max-w-[1800px] text-center">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-gray-400 mb-6">Last Revised: February 2026</p>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Questions about our Terms?</h3>
            <p className="text-gray-500 font-light leading-relaxed mb-10">
              We are committed to full transparency. If you have any specific legal concerns or require clarification on our terms of service, please do not hesitate to reach out to our global compliance department.
            </p>
            <button className="bg-black text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-xl">
              Connect with Compliance
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalPage;
