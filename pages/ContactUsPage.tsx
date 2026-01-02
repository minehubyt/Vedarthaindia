
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Share2, Facebook, Linkedin, Mail, Twitter, ChevronDown } from 'lucide-react';

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    inquiryType: '',
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    jobTitle: '',
    country: 'India',
    message: '',
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
    alert('Thank you for contacting Vedartha. We have received your message.');
  };

  return (
    <div className="bg-white min-h-screen">
      {/* AI AUTO-OPTIMIZED HEADER SPACING */}
      <section className="bg-black min-h-[45vh] flex flex-col justify-center text-white pt-[clamp(120px,18vh,160px)] pb-16">
        <div className="container mx-auto px-[6vw] lg:px-[8vw] max-w-[1600px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-[#86BC25] font-black uppercase tracking-[0.4em] text-[clamp(10px,1.2vw,14px)] mb-10 block">
              Who we are / Contact
            </span>
            <h1 className="text-[clamp(2.5rem,10vw,8.5rem)] font-black leading-[0.85] tracking-tighter mb-4 uppercase">
              Contact us
            </h1>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mt-[clamp(2rem,8vh,10rem)]">
            {/* Social Sharing */}
            <div className="flex items-center space-x-6 pb-6 border-b border-white/10 lg:border-none w-fit">
              <Share2 size={20} className="text-gray-400 cursor-pointer hover:text-white transition-colors" />
              <div className="h-6 w-[1px] bg-white/20" />
              <Facebook size={20} className="text-gray-400 cursor-pointer hover:text-white transition-colors" />
              <Twitter size={20} className="text-gray-400 cursor-pointer hover:text-white transition-colors" />
              <Linkedin size={20} className="text-gray-400 cursor-pointer hover:text-white transition-colors" />
              <Mail size={20} className="text-gray-400 cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-[clamp(4rem,10vw,8rem)]">
        <div className="container mx-auto px-[6vw] lg:px-[8vw] max-w-[1600px]">
          <div className="flex flex-col lg:flex-row gap-20">
            
            {/* Left Column: Form */}
            <div className="flex-1 max-w-4xl">
              <p className="text-[clamp(1.1rem,1.8vw,1.4rem)] text-gray-700 font-light mb-16 leading-relaxed">
                Thank you for your interest in Vedartha. Please fill out the form below to help us direct your inquiry to the right department.
              </p>

              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="space-y-8">
                  <h3 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold border-b border-gray-100 pb-4 uppercase tracking-tight text-black">Topic and inquiry type</h3>
                  <div className="relative group">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2">Inquiry Type *</label>
                    <div className="relative">
                      <select 
                        required
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border-b-2 border-gray-200 py-4 px-4 text-[16px] outline-none focus:border-[#86BC25] transition-colors appearance-none cursor-pointer text-black"
                      >
                        <option value="" disabled>Please select one</option>
                        <option value="audit">Audit & Assurance</option>
                        <option value="consulting">Consulting</option>
                        <option value="tax">Tax & Legal</option>
                        <option value="advisory">Advisory</option>
                        <option value="careers">Careers</option>
                        <option value="media">Media Inquiries</option>
                        <option value="other">Other</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="space-y-8 pt-6">
                  <h3 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold border-b border-gray-100 pb-4 uppercase tracking-tight text-black">Personal and professional information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500">First Name *</label>
                      <input 
                        required
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border-b-2 border-gray-200 py-4 px-4 text-[16px] outline-none focus:border-[#86BC25] transition-colors text-black"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500">Last Name *</label>
                      <input 
                        required
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border-b-2 border-gray-200 py-4 px-4 text-[16px] outline-none focus:border-[#86BC25] transition-colors text-black"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500">Email Address *</label>
                      <input 
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border-b-2 border-gray-200 py-4 px-4 text-[16px] outline-none focus:border-[#86BC25] transition-colors text-black"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500">Organization *</label>
                      <input 
                        required
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border-b-2 border-gray-200 py-4 px-4 text-[16px] outline-none focus:border-[#86BC25] transition-colors text-black"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-8 pt-6">
                  <h3 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold border-b border-gray-100 pb-4 uppercase tracking-tight text-black">Your message</h3>
                  <div className="space-y-2">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500">How can we help? *</label>
                    <textarea 
                      required
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please provide details about your inquiry..."
                      className="w-full bg-gray-50 border-b-2 border-gray-200 py-4 px-4 text-[16px] outline-none focus:border-[#86BC25] transition-colors resize-none text-black"
                    />
                  </div>
                </div>

                <div className="pt-10 space-y-8">
                   <div className="flex items-start space-x-4">
                     <input 
                       required
                       type="checkbox"
                       id="consent"
                       name="consent"
                       checked={formData.consent}
                       onChange={handleChange}
                       className="mt-1 w-5 h-5 accent-[#86BC25]"
                     />
                     <label htmlFor="consent" className="text-[14px] text-gray-600 leading-relaxed">
                       I agree that my submitted data will be collected and stored according to the privacy policy. *
                     </label>
                   </div>

                   <div className="pt-4">
                     <button 
                       type="submit"
                       className="bg-[#86BC25] text-black px-16 py-4 rounded-full font-bold text-[14px] uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-[#86BC25]/20 flex items-center"
                     >
                       Submit inquiry <ChevronRight className="ml-2" size={18} />
                     </button>
                   </div>
                </div>
              </form>
            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:w-[400px] space-y-16">
              <div className="p-10 bg-gray-50 border-l-[6px] border-[#86BC25] rounded-r-2xl">
                <h4 className="text-[22px] font-black uppercase tracking-tight mb-6 text-black">Vedartha Offices</h4>
                <p className="text-gray-600 font-light mb-8 leading-relaxed">
                  With several offices across major cities, we are close to our clients and their needs.
                </p>
                <button className="flex items-center text-[#86BC25] font-black uppercase tracking-widest text-[11px] hover:translate-x-2 transition-transform">
                  Find our locations <ChevronRight className="ml-1" size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
