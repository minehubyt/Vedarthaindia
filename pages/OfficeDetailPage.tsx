
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Phone, Mail, MapPin, ChevronRight, Clock, Shield, ArrowRight, ExternalLink, Calendar, User, Send, CheckCircle2, X } from 'lucide-react';
import { OFFICES } from '../constants';
import ClockPicker from '../components/ClockPicker';
import DatePicker from '../components/DatePicker';

interface OfficeDetailPageProps {
  officeId: string | null;
  onBack: () => void;
}

const OfficeDetailPage: React.FC<OfficeDetailPageProps> = ({ officeId, onBack }) => {
  const [view, setView] = useState<'details' | 'pre-register'>('details');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showClock, setShowClock] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState('09:00');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  
  const office = OFFICES.find(o => o.id === officeId) || OFFICES[0];

  const handlePreRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setView('details');
    }, 3000);
  };

  const formatDateDisplay = (dateStr: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-white min-h-screen pt-[clamp(100px,15vh,140px)] pb-20">
      <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
        {/* Top Link */}
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-[#86BC25] font-black uppercase tracking-widest text-[10px] mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
          <span>Back to directory</span>
        </button>

        <AnimatePresence mode="wait">
          {view === 'pre-register' ? (
            <motion.div 
              key="reg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white shadow-[0_10px_50px_rgba(0,0,0,0.05)] rounded-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100"
            >
              {/* Left Side: Brand Panel */}
              <div className="lg:w-[40%] bg-black relative p-12 lg:p-16 flex flex-col justify-end min-h-[400px]">
                <div className="absolute inset-0 z-0">
                  <img src={office.imageUrl} alt={office.city} className="w-full h-full object-cover opacity-30 grayscale" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>
                <div className="relative z-10">
                  <span className="text-[#86BC25] font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Pre-Registry</span>
                  <h2 className="text-white text-4xl lg:text-6xl font-light tracking-tighter mb-8 uppercase"><span className="font-black">Visit</span> <br /> {office.city}</h2>
                  <p className="text-gray-400 text-lg font-light leading-relaxed">
                    Secure your appointment at our regional headquarters. Pre-registration ensures seamless entry and prioritized coordination with our host teams.
                  </p>
                </div>
              </div>

              {/* Right Side: Form Panel */}
              <div className="lg:w-[60%] p-12 lg:p-20 relative">
                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-20">
                    <div className="w-20 h-20 bg-[#86BC25] rounded-full flex items-center justify-center mb-8">
                      <CheckCircle2 size={40} className="text-black" />
                    </div>
                    <h3 className="text-3xl font-light mb-4 uppercase tracking-tighter"><span className="font-black">Registration</span> Confirmed</h3>
                    <p className="text-gray-500 font-light">Your visit has been logged. We'll see you in {office.city}.</p>
                  </div>
                ) : (
                  <form onSubmit={handlePreRegisterSubmit} className="space-y-10">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Visitor <span className="font-light">Name</span></label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                          <input required type="text" placeholder="Full Name" className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 pl-12 pr-6 outline-none focus:border-[#86BC25] transition-all" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Visit <span className="font-light">Date</span></label>
                          <div className="relative">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                            <input readOnly required type="text" value={formatDateDisplay(selectedDate)} onClick={() => setShowDatePicker(true)} className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 pl-12 pr-6 outline-none focus:border-[#86BC25] transition-all cursor-pointer" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Visit <span className="font-light">Time</span></label>
                          <div className="relative">
                            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                            <input readOnly required type="text" value={selectedTime} onClick={() => setShowClock(true)} className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 pl-12 pr-6 outline-none focus:border-[#86BC25] transition-all cursor-pointer" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                       <button type="button" onClick={() => setView('details')} className="px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-widest border border-gray-200">Cancel</button>
                       <button type="submit" className="flex-1 bg-black text-white py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-[#86BC25] hover:text-black transition-all shadow-xl">Complete Pre-Registration</button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="detail"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col lg:flex-row gap-20"
            >
              <div className="lg:w-1/2">
                <div className="mb-16">
                  <span className="text-[#86BC25] font-black uppercase tracking-[0.3em] text-[10px] mb-8 block">
                    {office.partnerTitle}
                  </span>
                  <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-light leading-none tracking-tighter uppercase mb-24">
                    <span className="font-black">{office.city}</span> <br /> Operations
                  </h1>
                  <div className="space-y-16">
                    <div className="flex items-start space-x-8">
                      <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0">
                        <MapPin size={24} className="text-[#86BC25]" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-2xl font-light tracking-tight uppercase"><span className="font-black">Office</span> Address</h4>
                        <p className="text-gray-500 font-light leading-relaxed max-w-sm">{office.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-8">
                      <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0">
                        <Phone size={24} className="text-[#86BC25]" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-2xl font-light tracking-tight uppercase"><span className="font-black">Channel</span> Communication</h4>
                        <p className="text-gray-900 font-bold">{office.phone}</p>
                        <p className="text-gray-500 font-light">{office.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-black text-white p-12 lg:p-16 rounded-3xl relative overflow-hidden group">
                  <div className="relative z-10">
                    <Shield size={24} className="text-[#86BC25] mb-10" />
                    <h3 className="text-3xl font-light tracking-tighter mb-6 uppercase"><span className="font-black">On-Site</span> Security</h3>
                    <p className="text-gray-400 font-light leading-relaxed mb-10 max-w-md">Access protocols for high-security environments.</p>
                    <button onClick={() => setView('pre-register')} className="flex items-center space-x-3 text-[#86BC25] font-black uppercase tracking-widest text-[10px] group/btn">
                      <span>Pre-Register Visit</span>
                      <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="sticky top-40 aspect-square bg-gray-100 rounded-3xl overflow-hidden shadow-2xl">
                   <iframe width="100%" height="100%" style={{ border: 0 }} loading="lazy" src={`https://www.google.com/maps?q=${office.coordinates.lat},${office.coordinates.lng}&z=15&output=embed`}></iframe>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showDatePicker && (
          <div className="fixed inset-0 z-[500] flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-lg" onClick={() => setShowDatePicker(false)} />
            <div className="relative z-10"><DatePicker initialDate={selectedDate} onSelect={(date) => { setSelectedDate(date); setShowDatePicker(false); }} onClose={() => setShowDatePicker(false)} /></div>
          </div>
        )}
        {showClock && (
          <div className="fixed inset-0 z-[500] flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-lg" onClick={() => setShowClock(false)} />
            <div className="relative z-10"><ClockPicker initialTime={selectedTime} onSelect={(time) => { setSelectedTime(time); setShowClock(false); }} onClose={() => setShowClock(false)} /></div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OfficeDetailPage;
