
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, ChevronRight, Globe, Filter } from 'lucide-react';
import { OFFICES } from '../constants';

const REGIONS = ['All', 'India', 'Americas', 'EMEA', 'APAC'];

interface OfficesPageProps {
  onOfficeSelect: (id: string) => void;
}

const OfficesPage: React.FC<OfficesPageProps> = ({ onOfficeSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRegion, setActiveRegion] = useState('All');

  const filteredOffices = useMemo(() => {
    return OFFICES.filter(office => {
      const matchesSearch = 
        office.city.toLowerCase().includes(searchQuery.toLowerCase()) || 
        office.country.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRegion = activeRegion === 'All' || office.region === activeRegion;
      return matchesSearch && matchesRegion;
    });
  }, [searchQuery, activeRegion]);

  return (
    <div className="bg-white min-h-screen">
      {/* AI AUTO-OPTIMIZED HEADER SPACING */}
      <section className="bg-black text-white pt-[clamp(120px,18vh,160px)] pb-24 overflow-hidden relative">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px] relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.4em] text-[#86BC25] mb-8">
              <Globe size={16} />
              <span>Our Presence</span>
            </div>
            <h1 className="text-[clamp(2.5rem,10vw,8.5rem)] font-black leading-[0.9] tracking-tighter mb-12 uppercase">
              Global Office <br /> Directory
            </h1>
            
            <div className="max-w-3xl relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search by city or country..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-full py-6 pl-16 pr-8 text-xl focus:border-[#86BC25] focus:bg-white/20 outline-none transition-all"
              />
            </div>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#86BC25]/5 blur-[120px] pointer-events-none" />
      </section>

      {/* Filter Tabs */}
      <div className="sticky top-[70px] bg-white border-b border-gray-100 z-[140]">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          <div className="flex items-center space-x-10 overflow-x-auto no-scrollbar py-6">
            <div className="flex items-center space-x-4 text-gray-400 mr-4">
              <Filter size={16} />
              <span className="text-[10px] font-black uppercase tracking-widest">Filter By</span>
            </div>
            {REGIONS.map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`whitespace-nowrap text-[10px] font-black uppercase tracking-widest transition-all relative py-1 ${
                  activeRegion === region ? 'text-[#86BC25]' : 'text-gray-400 hover:text-black'
                }`}
              >
                {region}
                {activeRegion === region && (
                  <motion.div layoutId="regionActive" className="absolute -bottom-1 left-0 right-0 h-1 bg-[#86BC25]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredOffices.map((office) => (
                <motion.div
                  layout
                  key={office.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -10 }}
                  onClick={() => onOfficeSelect(office.id)}
                  className="group cursor-pointer bg-white border border-gray-100 rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  <div className="h-64 relative overflow-hidden">
                    <img 
                      src={office.imageUrl} 
                      alt={office.city} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                    <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                      {office.region}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold tracking-tight">{office.city}</h3>
                      <MapPin size={20} className="text-[#86BC25]" />
                    </div>
                    <p className="text-gray-500 text-sm font-light mb-8 line-clamp-2">
                      {office.address}
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                      <span className="text-[10px] font-black uppercase tracking-widest text-black">Contact Detail</span>
                      <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OfficesPage;
