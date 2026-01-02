
import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Shield, CheckCircle2, ChevronRight, FilePlus, Headphones, 
  Printer, Share2, Mail, ArrowRight, ArrowDown, 
  Layers, Zap, Radio, MapPin
} from 'lucide-react';

const PHILOSOPHY = [
  {
    title: "Independence Above All",
    desc: "Objectivity is the foundation of credibility. We maintain strict independence in both fact and appearance, ensuring that our findings are beyond reproach.",
    num: "01"
  },
  {
    title: "Systems Over Transactions",
    desc: "We focus on the structural integrity of systems and controls. While transactions tell a story, systems ensure the future reliability of information.",
    num: "02"
  },
  {
    title: "Risk-Based Judgment",
    desc: "Audit quality depends on informed professional judgment. We move beyond mechanical checklists to address the specific risks unique to your industry.",
    num: "03"
  },
  {
    title: "Consistency Builds Trust",
    desc: "Stakeholders value assurance that is repeatable and disciplined. Our methodology ensures comparability year after year across global operations.",
    num: "04"
  }
];

const SERVICES_ARCH = [
  {
    id: "statutory",
    title: "Statutory & Group Audits",
    desc: "Independent statutory and group audits conducted in accordance with applicable accounting standards, regulatory requirements, and international best practices.",
    focus: ["Multi-entity and group coordination", "Consolidation and reporting accuracy", "Regulator-ready audit documentation", "Cross-border alignment"]
  },
  {
    id: "internal",
    title: "Internal Audit & Internal Financial Controls (IFC)",
    desc: "Evaluation of internal control environments to enhance process efficiency, risk mitigation, and governance effectiveness.",
    focus: ["Process walkthroughs & control design", "Operating effectiveness testing", "Management reporting & remediation support"]
  },
  {
    id: "esg",
    title: "ESG & Sustainability Assurance",
    desc: "Independent assurance over ESG metrics and sustainability disclosures in line with emerging regulatory expectations.",
    focus: ["ESG data reliability", "Sustainability reporting assurance", "Stakeholder transparency"]
  },
  {
    id: "special",
    title: "Special Purpose & Forensic Audits",
    desc: "Objective audits conducted for specific regulatory, transactional, or investigative purposes.",
    focus: ["Special regulatory audits", "Transaction-linked assurance", "Independent fact-finding engagements"]
  }
];

const INDUSTRIES = [
  { name: "Financial Services", risks: "High Regulatory Oversight", focus: "Asset Quality & Liquidity" },
  { name: "Manufacturing & Industrial", risks: "Supply Chain Fragmentation", focus: "Inventory & Fixed Assets" },
  { name: "Technology & Digital", risks: "IP Valuation & Revenue Rec", focus: "Intangible Asset Audit" },
  { name: "Infrastructure & Energy", risks: "Project Accounting Complexity", focus: "Capex & Contingencies" },
  { name: "Government & Public Sector", risks: "Fund Utilization & Compliance", focus: "Public Accountability" }
];

const AuditAssurancePage: React.FC = () => {
  const [activeService, setActiveService] = useState(SERVICES_ARCH[0]);
  const horizontalScrollRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: horizontalScrollRef,
  });

  const x = useTransform(scrollYProgress, [0.1, 0.95], ["0%", "-95%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  const handlePrint = () => window.print();

  return (
    <div className="bg-white min-h-screen text-black selection:bg-[#86BC25] selection:text-black">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] bg-[#0a0a0a] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0d0d0d] to-black" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#86BC25]/5 blur-[140px] rounded-full pointer-events-none" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px] relative z-10 pt-[140px] pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="max-w-5xl"
          >
            <div className="flex items-center space-x-6 mb-12">
               <span className="w-12 h-[2px] bg-[#86BC25]" />
               <span className="text-[#86BC25] font-black uppercase tracking-[0.5em] text-[10px] md:text-[12px] opacity-90">
                 Assurance / Governance / Trust
               </span>
            </div>

            <h1 className="text-[clamp(2.5rem,10vw,8.5rem)] text-white font-black leading-[0.85] tracking-tighter mb-16 uppercase">
              Audit & <br /> 
              <span className="text-gray-600 block mt-2">Assurance</span>
            </h1>

            <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-32 mt-8">
              <p className="text-[clamp(1rem,1.8vw,1.4rem)] text-gray-400 font-light max-w-2xl leading-[1.4] tracking-tight">
                Independent assurance that strengthens trust, governance, and institutional confidence in an era of complex global transparency.
              </p>
              
              <div className="flex-shrink-0 pt-4 lg:pt-0">
                 <button className="flex items-center space-x-5 text-gray-500 text-[11px] font-black uppercase tracking-[0.35em] group hover:text-white transition-all">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#86BC25] group-hover:bg-white/5 transition-all">
                       <ArrowDown size={18} className="text-[#86BC25] animate-bounce" />
                    </div>
                    <span className="max-w-[150px] text-left leading-tight text-[10px] md:text-[11px]">Explore Our Methodology</span>
                 </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTEXT SECTION */}
      <section className="py-[clamp(5rem,12vw,10rem)] border-b border-gray-50">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          <div className="flex flex-col lg:flex-row gap-20 xl:gap-40 items-center">
            <div className="lg:w-1/2 space-y-10">
              <h2 className="text-[clamp(2.2rem,5vw,4.5rem)] font-black uppercase leading-[0.95] tracking-tighter">
                Why Audit & <br /> <span className="text-[#86BC25]">Assurance</span> Matter
              </h2>
              <div className="space-y-6 text-[clamp(1rem,1.4vw,1.25rem)] text-gray-600 font-light leading-relaxed max-w-2xl">
                <p>
                  Audit has evolved beyond statutory obligation. In today’s environment of global operations, regulatory scrutiny, and stakeholder accountability, assurance plays a central role in governance and decision-making.
                </p>
                <p>
                  Boards, regulators, investors, and lenders rely on independent assurance not merely to validate numbers, but to assess the reliability of systems, controls, and management judgment.
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center w-full">
              <div className="relative w-full max-w-sm aspect-square">
                <div className="absolute inset-0 bg-[#86BC25]/5 rounded-[2.5rem] flex items-center justify-center">
                   <div className="w-[85%] h-[85%] border-2 border-dashed border-[#86BC25]/10 rounded-full flex items-center justify-center">
                      <div className="w-[80%] h-[80%] border border-[#86BC25]/20 rounded-full flex items-center justify-center">
                         <div className="bg-black text-[#86BC25] p-10 md:p-12 rounded-[2rem] shadow-2xl shadow-[#86BC25]/20">
                            <Shield size={48} md:size={64} strokeWidth={1.5} />
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR ASSURANCE PHILOSOPHY */}
      <section ref={horizontalScrollRef} className="relative h-[400vh] bg-[#0c0c0c] overflow-visible">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px] mb-6 md:mb-12 relative z-20">
            <motion.div style={{ opacity }} className="max-w-3xl">
               <span className="text-[#86BC25] font-black uppercase tracking-[0.4em] text-[10px] md:text-[11px] mb-3 md:mb-6 block">Integrity & Ethics</span>
               <h2 className="text-[clamp(1.75rem,6vw,5rem)] text-white font-black uppercase tracking-tighter leading-none">
                 Assurance <br /> Philosophy
               </h2>
            </motion.div>
          </div>

          <motion.div 
            style={{ x }} 
            className="flex space-x-4 md:space-x-12 px-6 lg:px-[8vw] relative z-10"
          >
            {PHILOSOPHY.map((item) => (
              <div
                key={item.num}
                className="min-w-[85vw] sm:min-w-[340px] md:min-w-[500px] h-[380px] sm:h-[480px] md:h-[600px] bg-[#141414] p-6 sm:p-10 md:p-16 rounded-[1.5rem] md:rounded-[3rem] flex flex-col justify-between border border-white/5 group hover:border-[#86BC25]/30 transition-all duration-700"
              >
                <div className="space-y-4 md:space-y-8">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl sm:text-5xl md:text-7xl font-black text-white/5 group-hover:text-[#86BC25] transition-colors duration-500">{item.num}</span>
                    <div className="h-[1px] w-8 md:w-20 bg-white/10 group-hover:bg-[#86BC25] transition-all" />
                  </div>
                  <div className="space-y-3 md:space-y-6">
                    <h3 className="text-lg sm:text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-tight">{item.title}</h3>
                    <p className="text-gray-500 font-light leading-relaxed text-xs sm:text-sm md:text-xl group-hover:text-gray-400 transition-colors duration-500 line-clamp-4 md:line-clamp-none">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="mt-auto pt-6 md:pt-10">
                   <div className="w-6 h-[2px] bg-white/5 group-hover:bg-[#86BC25] transition-all" />
                </div>
              </div>
            ))}
            <div className="min-w-[40vw] sm:min-w-[15vw] shrink-0" />
          </motion.div>
        </div>
      </section>

      {/* 4. SERVICE ARCHITECTURE */}
      <section className="py-[clamp(5rem,12vw,10rem)] bg-white">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          <div className="flex flex-col lg:flex-row gap-20 xl:gap-32 items-start">
            <div className="lg:w-1/2 space-y-16">
              <div className="space-y-6">
                <span className="text-[#86BC25] font-black uppercase tracking-[0.4em] text-[10px] md:text-[11px]">Solutions Architecture</span>
                <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-black uppercase tracking-tighter leading-none">Systematic <br /> Coverage</h2>
                <p className="text-gray-400 font-light text-lg md:text-xl leading-relaxed max-w-xl">Deep technical expertise deployed across every layer of corporate reporting.</p>
              </div>

              <div className="space-y-6">
                {SERVICES_ARCH.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service)}
                    className={`w-full text-left p-8 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] transition-all duration-500 group border-l-[6px] md:border-l-[10px] relative overflow-hidden ${
                      activeService.id === service.id 
                      ? 'bg-gray-50 border-[#86BC25] shadow-lg shadow-gray-100' 
                      : 'border-transparent hover:bg-gray-50/50 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <h4 className="text-lg md:text-2xl font-black uppercase mb-4 tracking-tight">{service.title}</h4>
                    <AnimatePresence initial={false}>
                      {activeService.id === service.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.5, ease: "circOut" }}
                        >
                          <p className="text-gray-500 font-light leading-relaxed mb-6 text-sm md:text-lg">{service.desc}</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                            {service.focus.map(f => (
                              <div key={f} className="flex items-center space-x-3 text-[9px] md:text-[11px] font-black uppercase tracking-widest text-black/80">
                                <CheckCircle2 size={14} className="text-[#86BC25] shrink-0" />
                                <span>{f}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 hidden lg:flex items-center justify-center sticky top-40 h-[650px] bg-black rounded-[3rem] overflow-hidden shadow-2xl">
               <motion.div 
                 key={activeService.id}
                 initial={{ scale: 0.95, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 transition={{ duration: 0.6, ease: "easeOut" }}
                 className="text-center space-y-10 p-12 relative z-10"
               >
                 <div className="w-20 h-20 bg-[#86BC25] rounded-[1.5rem] mx-auto flex items-center justify-center shadow-xl shadow-[#86BC25]/20 mb-8">
                    <Layers size={48} className="text-black" />
                 </div>
                 <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-none">{activeService.title}</h3>
                 <div className="flex flex-wrap justify-center gap-3 max-w-md mx-auto">
                   {activeService.focus.map(f => (
                     <span key={f} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[9px] text-gray-300 font-black uppercase tracking-widest">
                       {f}
                     </span>
                   ))}
                 </div>
               </motion.div>
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#86BC25_0%,transparent_70%)] opacity-10 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE ASSURANCE PROCESS */}
      <section className="py-[clamp(5rem,12vw,10rem)] bg-gray-50/50">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          <div className="text-center mb-20 md:mb-32 space-y-6">
            <span className="text-[#86BC25] font-black uppercase tracking-[0.4em] text-[10px]">Methodology</span>
            <h2 className="text-[clamp(2.2rem,5vw,5rem)] font-black uppercase tracking-tighter leading-none">The Delivery <br /> Pipeline</h2>
          </div>
          
          <div className="relative max-w-4xl mx-auto border-l-[2px] border-gray-200 pl-8 md:pl-24 space-y-20 md:space-y-32 pb-16">
            {[
              { title: "Understanding the Environment", desc: "Industry landscape analysis, regulatory framework mapping, and deep-dive risk profiling." },
              { title: "Designing the Audit Approach", desc: "Customized audit strategy tailored to your organization's materiality and operational complexity." },
              { title: "Evaluating Systems & Controls", desc: "Process-level assessment and rigorous testing of internal financial controls (IFC)." },
              { title: "Independent Testing & Review", desc: "Evidence-based audit procedures backed by objective professional judgment." },
              { title: "Clear Reporting & Insights", desc: "Transparent, actionable communication with management and boards." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                <div className="absolute -left-[42px] md:-left-[122px] top-0 w-8 h-8 md:w-16 md:h-16 bg-white border-[3px] md:border-[5px] border-[#86BC25] rounded-[0.8rem] md:rounded-[1.2rem] flex items-center justify-center text-xs md:text-lg font-black shadow-lg">
                  0{i+1}
                </div>
                <h4 className="text-lg md:text-4xl font-black uppercase mb-3 md:mb-6 tracking-tighter group-hover:text-[#86BC25] transition-colors">{step.title}</h4>
                <p className="text-gray-500 font-light text-sm md:text-xl max-w-2xl leading-snug">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INDUSTRY MATRIX */}
      <section className="py-[clamp(5rem,12vw,10rem)] bg-[#050505] text-white">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          <div className="mb-16 md:mb-24 space-y-6 max-w-4xl">
            <span className="text-[#86BC25] font-black uppercase tracking-[0.4em] text-[10px]">Sector Expertise</span>
            <h2 className="text-[clamp(2.2rem,6vw,5.5rem)] font-black uppercase tracking-tighter leading-[0.9]">Industry <br /> Specialization</h2>
            <p className="text-gray-500 font-light text-lg md:text-xl leading-relaxed">Precision-engineered assurance for high-complexity global sectors.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-white/5 border border-white/5 overflow-hidden rounded-[2rem]">
            {INDUSTRIES.map((ind) => (
              <div key={ind.name} className="group p-8 md:p-16 hover:bg-[#0c0c0c] transition-all duration-700 cursor-pointer relative">
                <h4 className="text-xl md:text-2xl font-black uppercase mb-8 md:mb-12 group-hover:text-[#86BC25] transition-colors leading-tight">{ind.name}</h4>
                <div className="space-y-6 md:space-y-8 opacity-40 group-hover:opacity-100 transition-all duration-700">
                   <div className="space-y-2">
                     <span className="text-[9px] font-black uppercase tracking-widest text-[#86BC25] block">Primary Risk Factor</span>
                     <p className="text-sm md:text-lg font-light tracking-tight">{ind.risks}</p>
                   </div>
                   <div className="space-y-2">
                     <span className="text-[9px] font-black uppercase tracking-widest text-[#86BC25] block">Assurance Focus</span>
                     <p className="text-sm md:text-lg font-light tracking-tight">{ind.focus}</p>
                   </div>
                </div>
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                   <ArrowRight size={20} className="text-[#86BC25]" />
                </div>
              </div>
            ))}
            <div className="p-8 md:p-16 flex flex-col items-center justify-center bg-[#86BC25] text-black group cursor-pointer hover:brightness-110 transition-all text-center">
              <Radio size={32} md:size={40} className="mb-6 animate-pulse" />
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] block mb-2">Partner Engagement</span>
              <span className="text-lg md:text-2xl font-black uppercase leading-tight">Inquire For <br /> Your Sector</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CASE STUDY & CONVERSION */}
      <section className="py-[clamp(5rem,12vw,10rem)] bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          <div className="flex flex-col lg:flex-row gap-16 md:gap-24 items-start">
            <div className="lg:w-2/3 space-y-16 md:space-y-24">
              <div className="p-8 md:p-20 bg-gray-50 rounded-[2rem] border border-gray-100 space-y-10 relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 bg-black text-[#86BC25] text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full">
                     <Zap size={14} fill="#86BC25" />
                     <span>Featured Impact</span>
                  </div>
                  <ArrowRight size={24} className="text-gray-200" />
                </div>
                
                <h3 className="text-[clamp(1.6rem,4vw,3.5rem)] font-black tracking-tighter uppercase leading-[0.95]">Strengthening Internal Controls for a Multi-Country Manufacturing Group</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-gray-200/60">
                   <div className="space-y-4">
                     <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Situation</span>
                     <p className="text-sm md:text-lg font-light leading-relaxed text-gray-600 italic">"Operations across 12 jurisdictions with a decentralized finance function leading to significant visibility gaps and regulatory fatigue."</p>
                   </div>
                   <div className="space-y-4">
                     <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Outcome</span>
                     <ul className="space-y-3">
                       <li className="flex items-start space-x-3 text-sm md:text-lg font-bold">
                         <CheckCircle2 size={20} className="text-[#86BC25] shrink-0" /> 
                         <span>Improved board-level governance visibility</span>
                       </li>
                       <li className="flex items-start space-x-3 text-sm md:text-lg font-bold">
                         <CheckCircle2 size={20} className="text-[#86BC25] shrink-0" /> 
                         <span>Restored investor & regulator confidence</span>
                       </li>
                     </ul>
                   </div>
                </div>
                
                <button className="flex items-center space-x-3 text-black font-black uppercase tracking-widest text-[10px] hover:text-[#86BC25] transition-all">
                  <span>Explore Full Strategic Case Study</span>
                  <ChevronRight size={18} className="text-[#86BC25]" />
                </button>
              </div>

              <div className="space-y-12">
                 <div className="flex items-center justify-between border-b-2 border-gray-100 pb-6">
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">Thinking & <br /> <span className="text-gray-400">Insights</span></h3>
                    <button className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors">Explore All Journals</button>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                   {[
                     "The Future of Audit in a Digitally Controlled Enterprise",
                     "Internal Controls as a Governance Tool",
                     "ESG Assurance: Preparing for Regulatory Mandates"
                   ].map((t, i) => (
                     <div key={i} className="space-y-6 group cursor-pointer">
                        <div className="h-[2px] w-0 bg-[#86BC25] group-hover:w-full transition-all duration-700" />
                        <h4 className="text-lg md:text-xl font-black tracking-tight uppercase leading-[1.1] group-hover:text-[#86BC25] transition-colors">{t}</h4>
                        <div className="flex items-center text-[10px] font-black text-gray-300 group-hover:text-black transition-colors uppercase tracking-widest">
                          Read Journal <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                     </div>
                   ))}
                 </div>
              </div>
            </div>

            <aside className="lg:w-1/3 w-full sticky top-32">
              <div className="p-8 md:p-10 border-2 border-gray-100 rounded-[2rem] bg-white shadow-xl space-y-10">
                 <div className="space-y-3 text-left">
                   <h4 className="text-xl md:text-2xl font-black uppercase tracking-tight leading-none">Audit <br /> <span className="text-[#86BC25]">Engagement</span></h4>
                   <p className="text-xs text-gray-400 font-light leading-relaxed">Secure communication with our global audit partnership network. All discussions are confidential.</p>
                 </div>
                 
                 <div className="space-y-4">
                   <button 
                     onClick={() => window.location.hash = 'rfp'}
                     className="w-full flex items-center justify-between p-6 bg-[#86BC25] text-black rounded-2xl group transition-all hover:scale-[1.02] shadow-xl shadow-[#86BC25]/20"
                   >
                      <span className="font-black text-[10px] uppercase tracking-[0.2em]">Submit Proposal (RFP)</span>
                      <FilePlus size={20} />
                   </button>
                   <button 
                     onClick={() => window.location.hash = 'contact-us'}
                     className="w-full flex items-center justify-between p-6 bg-black text-white rounded-2xl group transition-all hover:bg-[#1a1a1a] shadow-xl"
                   >
                      <span className="font-black text-[10px] uppercase tracking-[0.2em]">Speak to a Partner</span>
                      <Headphones size={20} />
                   </button>
                 </div>
                 
                 <div className="space-y-6 pt-8 border-t border-gray-100">
                   <button className="flex items-center space-x-4 text-gray-400 hover:text-black transition-colors font-black uppercase tracking-widest text-[9px]">
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                         <Zap size={14} className="text-[#86BC25]" />
                      </div>
                      <span>Download Audit Overview (PDF)</span>
                   </button>
                   <div className="flex items-center space-x-8 pt-2 opacity-30 hover:opacity-100 transition-opacity">
                      <Share2 size={18} className="cursor-pointer hover:text-[#86BC25] transition-colors" />
                      <Printer onClick={handlePrint} size={18} className="cursor-pointer hover:text-[#86BC25] transition-colors" />
                      <Mail size={18} className="cursor-pointer hover:text-[#86BC25] transition-colors" />
                   </div>
                 </div>
              </div>
              
              <div className="mt-10 text-center">
                 <p className="text-[9px] font-bold text-gray-300 uppercase tracking-[0.4em]">© 2026 Vedartha Global Assurance Hub</p>
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

export default AuditAssurancePage;
