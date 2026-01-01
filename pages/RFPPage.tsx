
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Share2, Facebook, Linkedin, Mail, Twitter, ChevronDown, Upload, FileText, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

const RFPPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    serviceLine: '',
    otherService: '',
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    country: 'India',
    projectOverview: '',
    budgetRange: '',
    consent: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as any;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isStep1Valid = formData.serviceLine && (formData.serviceLine !== 'Other' || formData.otherService.trim() !== '');

  if (isSubmitted) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-2xl px-6"
        >
          <div className="w-24 h-24 bg-[#86BC25] rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(134,188,37,0.3)]">
            <CheckCircle2 size={48} className="text-black" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">Success.</h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed mb-12">
            Your proposal has been securely transmitted. A Vedartha partner specializing in your industry will be in touch within 24 hours to begin the conversation.
          </p>
          <button 
            onClick={() => window.location.hash = ''}
            className="group flex items-center space-x-4 mx-auto text-[#86BC25] font-bold text-lg hover:text-white transition-colors"
          >
            <span>Back to digital experience</span>
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen flex flex-col lg:flex-row">
      {/* Left Panel: Static/Sticky Brand Panel */}
      <div className="lg:w-2/5 bg-black text-white p-12 lg:px-24 pt-32 lg:pt-48 flex flex-col justify-between lg:sticky lg:top-0 lg:h-screen">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl lg:text-6xl font-black mb-10 leading-[1.1] tracking-tighter">
              Let's build <br /> what's next.
            </h1>
            <p className="text-xl text-gray-400 font-light max-w-md leading-relaxed">
              Your vision, our expertise. Submit your Request for Proposal and let's create an impact that matters.
            </p>
          </motion.div>
        </div>

        <div className="mt-12 lg:mt-0 space-y-12 pb-12">
          <nav className="flex items-center space-x-8">
            <Share2 size={22} className="text-gray-500 hover:text-[#86BC25] cursor-pointer transition-colors" />
            <Linkedin size={22} className="text-gray-500 hover:text-[#86BC25] cursor-pointer transition-colors" />
            <Twitter size={22} className="text-gray-500 hover:text-[#86BC25] cursor-pointer transition-colors" />
          </nav>
        </div>
      </div>

      {/* Right Panel: Scrollable Form Panel */}
      <div className="lg:w-3/5 p-12 lg:p-32 lg:pt-48 bg-white">
        <div className="max-w-3xl">
          {/* Progress Indicator */}
          <div className="mb-20 flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <span className="text-5xl font-black text-black">{step < 10 ? `0${step}` : step}</span>
              <div className="w-16 h-[2px] bg-gray-200">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${(step / 3) * 100}%` }}
                  className="h-full bg-[#86BC25]" 
                />
              </div>
              <span className="text-gray-400 font-bold text-sm uppercase tracking-widest">Step {step} of 3</span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-12"
                >
                  <div className="space-y-4">
                    <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-black">Start with the basics.</h2>
                    <p className="text-gray-500 text-xl font-light">Tell us which domain you'd like to transform.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {['Audit & Assurance', 'Consulting', 'Risk Advisory', 'Tax & Legal', 'Financial Advisory', 'Other'].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setFormData({...formData, serviceLine: s})}
                        className={`p-10 text-left border-2 transition-all duration-300 group rounded-sm ${
                          formData.serviceLine === s 
                          ? 'border-[#86BC25] bg-gray-50' 
                          : 'border-gray-100 hover:border-black hover:bg-white'
                        }`}
                      >
                        <h4 className={`text-2xl font-bold transition-colors ${formData.serviceLine === s ? 'text-[#86BC25]' : 'text-black'}`}>{s}</h4>
                      </button>
                    ))}
                  </div>

                  <AnimatePresence>
                    {formData.serviceLine === 'Other' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="relative group pt-4">
                          <input 
                            type="text" 
                            name="otherService"
                            placeholder=" "
                            required
                            value={formData.otherService}
                            onChange={handleChange}
                            className="peer w-full bg-transparent border-b-2 border-gray-100 py-4 outline-none focus:border-[#86BC25] transition-colors font-light text-2xl"
                          />
                          <label className="absolute left-0 top-8 text-gray-400 font-light text-2xl pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#86BC25] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-sm">
                            Please specify your requirement
                          </label>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <div className="pt-12">
                    <button
                      type="button"
                      disabled={!isStep1Valid}
                      onClick={() => setStep(2)}
                      className="group flex items-center space-x-4 bg-black text-white px-12 py-6 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#86BC25] hover:text-black transition-all disabled:opacity-20 shadow-xl"
                    >
                      <span>Continue</span>
                      <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-12"
                >
                  <div className="space-y-4">
                    <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-black">Who are we talking to?</h2>
                    <p className="text-gray-500 text-xl font-light">Provide your professional details so we can connect.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="relative group">
                      <input 
                        type="text" 
                        name="firstName"
                        placeholder=" "
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="peer w-full bg-transparent border-b-2 border-gray-100 py-4 outline-none focus:border-[#86BC25] transition-colors font-light text-2xl"
                      />
                      <label className="absolute left-0 top-4 text-gray-400 font-light text-2xl pointer-events-none transition-all peer-focus:-top-8 peer-focus:text-sm peer-focus:text-[#86BC25] peer-[:not(:placeholder-shown)]:-top-8 peer-[:not(:placeholder-shown)]:text-sm">
                        First Name
                      </label>
                    </div>
                    <div className="relative group">
                      <input 
                        type="text" 
                        name="lastName"
                        placeholder=" "
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="peer w-full bg-transparent border-b-2 border-gray-100 py-4 outline-none focus:border-[#86BC25] transition-colors font-light text-2xl"
                      />
                      <label className="absolute left-0 top-4 text-gray-400 font-light text-2xl pointer-events-none transition-all peer-focus:-top-8 peer-focus:text-sm peer-focus:text-[#86BC25] peer-[:not(:placeholder-shown)]:-top-8 peer-[:not(:placeholder-shown)]:text-sm">
                        Last Name
                      </label>
                    </div>
                    <div className="relative group md:col-span-2">
                      <input 
                        type="email" 
                        name="email"
                        placeholder=" "
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="peer w-full bg-transparent border-b-2 border-gray-100 py-4 outline-none focus:border-[#86BC25] transition-colors font-light text-2xl"
                      />
                      <label className="absolute left-0 top-4 text-gray-400 font-light text-2xl pointer-events-none transition-all peer-focus:-top-8 peer-focus:text-sm peer-focus:text-[#86BC25] peer-[:not(:placeholder-shown)]:-top-8 peer-[:not(:placeholder-shown)]:text-sm">
                        Business Email
                      </label>
                    </div>
                    <div className="relative group">
                      <input 
                        type="text" 
                        name="company"
                        placeholder=" "
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="peer w-full bg-transparent border-b-2 border-gray-100 py-4 outline-none focus:border-[#86BC25] transition-colors font-light text-2xl"
                      />
                      <label className="absolute left-0 top-4 text-gray-400 font-light text-2xl pointer-events-none transition-all peer-focus:-top-8 peer-focus:text-sm peer-focus:text-[#86BC25] peer-[:not(:placeholder-shown)]:-top-8 peer-[:not(:placeholder-shown)]:text-sm">
                        Organization
                      </label>
                    </div>
                    <div className="relative group">
                      <input 
                        type="text" 
                        name="jobTitle"
                        placeholder=" "
                        required
                        value={formData.jobTitle}
                        onChange={handleChange}
                        className="peer w-full bg-transparent border-b-2 border-gray-100 py-4 outline-none focus:border-[#86BC25] transition-colors font-light text-2xl"
                      />
                      <label className="absolute left-0 top-4 text-gray-400 font-light text-2xl pointer-events-none transition-all peer-focus:-top-8 peer-focus:text-sm peer-focus:text-[#86BC25] peer-[:not(:placeholder-shown)]:-top-8 peer-[:not(:placeholder-shown)]:text-sm">
                        Job Title
                      </label>
                    </div>
                  </div>
                  
                  <div className="pt-12 flex items-center space-x-10">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="group flex items-center space-x-3 text-gray-400 hover:text-black transition-colors uppercase tracking-widest text-[11px] font-black"
                    >
                      <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                      <span>Previous Step</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      disabled={!formData.firstName || !formData.email || !formData.company}
                      className="group flex items-center space-x-4 bg-black text-white px-12 py-6 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#86BC25] hover:text-black transition-all disabled:opacity-20 shadow-xl"
                    >
                      <span>Continue</span>
                      <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-12"
                >
                  <div className="space-y-4">
                    <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-black">The final details.</h2>
                    <p className="text-gray-500 text-xl font-light">Outline your objectives and attach relevant documents to speed up the process.</p>
                  </div>
                  
                  <div className="space-y-12">
                    <div className="relative group">
                      <textarea 
                        name="projectOverview"
                        placeholder=" "
                        required
                        rows={5}
                        value={formData.projectOverview}
                        onChange={handleChange}
                        className="peer w-full bg-transparent border-b-2 border-gray-100 py-4 outline-none focus:border-[#86BC25] transition-colors font-light text-2xl resize-none"
                      />
                      <label className="absolute left-0 top-4 text-gray-400 font-light text-2xl pointer-events-none transition-all peer-focus:-top-8 peer-focus:text-sm peer-focus:text-[#86BC25] peer-[:not(:placeholder-shown)]:-top-8 peer-[:not(:placeholder-shown)]:text-sm">
                        Project Overview & Objectives
                      </label>
                    </div>

                    <div className="p-16 border-2 border-dashed border-gray-100 bg-gray-50 rounded-sm text-center group cursor-pointer hover:border-[#86BC25] hover:bg-white transition-all">
                      <Upload size={48} className="mx-auto text-gray-300 group-hover:text-[#86BC25] mb-6 transition-colors" />
                      <h4 className="text-2xl font-bold mb-2">Attach RFP Document</h4>
                      <p className="text-sm text-gray-400 font-light">Drag and drop files here or click to browse (Max 10MB)</p>
                    </div>

                    <div className="flex items-start space-x-5">
                      <input 
                        type="checkbox" 
                        id="consent" 
                        name="consent"
                        required
                        checked={formData.consent}
                        onChange={handleChange}
                        className="mt-1 w-6 h-6 accent-[#86BC25] border-2 border-gray-200" 
                      />
                      <label htmlFor="consent" className="text-sm text-gray-500 font-light leading-relaxed">
                        I acknowledge that the information provided will be used to process my request in accordance with the <a href="#" className="text-black font-bold hover:underline">Vedartha Privacy Statement</a>. I understand that a Vedartha representative may contact me to follow up on this proposal.
                      </label>
                    </div>
                  </div>
                  
                  <div className="pt-12 flex items-center space-x-10">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="group flex items-center space-x-3 text-gray-400 hover:text-black transition-colors uppercase tracking-widest text-[11px] font-black"
                    >
                      <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                      <span>Previous Step</span>
                    </button>
                    <button
                      type="submit"
                      disabled={!formData.consent || !formData.projectOverview}
                      className="group flex items-center space-x-4 bg-[#86BC25] text-black px-16 py-6 rounded-full font-bold text-sm uppercase tracking-widest hover:brightness-110 transition-all shadow-2xl shadow-[#86BC25]/30 disabled:opacity-20"
                    >
                      <span>Submit Proposal</span>
                      <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RFPPage;
