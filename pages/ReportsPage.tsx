
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ArrowRight, FileText, CheckCircle2, Loader2, Search, Filter } from 'lucide-react';

const REPORTS = [
  {
    id: '1',
    title: '2025 Global Economic Outlook',
    subtitle: 'Navigating the "Great Transformation"',
    description: 'Our annual deep-dive into the macro-trends shaping global markets over the next 12 months.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    date: 'February 2025',
    category: 'Economics',
    size: '4.2 MB'
  },
  {
    id: '2',
    title: 'The AI Trust Report',
    subtitle: 'Building reliable autonomous enterprises',
    description: 'Examining the intersection of governance, ethics, and performance in generative AI adoption.',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    date: 'January 2025',
    category: 'Technology',
    size: '12.8 MB'
  },
  {
    id: '3',
    title: 'Supply Chain Resilience 2.0',
    subtitle: 'From efficiency to elasticity',
    description: 'How global manufacturers are re-tooling their operations for a volatile geopolitical era.',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    date: 'December 2024',
    category: 'Operations',
    size: '8.1 MB'
  }
];

const ReportsPage: React.FC = () => {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadComplete, setDownloadComplete] = useState<string | null>(null);

  const handleDownload = (id: string) => {
    setDownloadingId(id);
    setTimeout(() => {
      setDownloadingId(null);
      setDownloadComplete(id);
      setTimeout(() => setDownloadComplete(null), 3000);
    }, 2500);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* AI AUTO-OPTIMIZED HEADER SPACING */}
      <section className="bg-black text-white pt-[clamp(120px,18vh,160px)] pb-24 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px] relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-[#86BC25] rounded-full flex items-center justify-center text-black shadow-[0_0_40px_rgba(134,188,37,0.3)]">
                <FileText size={24} />
              </div>
              <span className="text-[#86BC25] font-black uppercase tracking-[0.4em] text-[10px]">Knowledge Repository</span>
            </div>
            <h1 className="text-[clamp(2.5rem,10vw,8.5rem)] font-black leading-[0.85] tracking-tighter mb-12 uppercase">
              Global <br /> <span className="text-gray-500">Research</span>
            </h1>
            <p className="text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
              Proprietary data, expert analysis, and strategic foresight designed to empower decision-makers.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#86BC25]/5 blur-[150px] pointer-events-none" />
      </section>

      {/* Filter Bar */}
      <div className="sticky top-[70px] z-[150] bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px] flex items-center justify-between py-6">
          <div className="flex items-center space-x-8">
            <button className="text-[10px] font-black uppercase tracking-widest text-black border-b-2 border-[#86BC25] pb-1">All Reports</button>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Search size={18} className="text-gray-300" />
            <Filter size={18} className="text-gray-300" />
          </div>
        </div>
      </div>

      <section className="py-24 bg-gray-50/30">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {REPORTS.map((report, idx) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-sm border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col group overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={report.imageUrl} alt={report.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute top-6 left-6"><span className="bg-black/90 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest px-3 py-1">{report.category}</span></div>
                </div>
                <div className="p-10 flex flex-col flex-1">
                  <div className="flex-1 space-y-4">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{report.date} • {report.size}</span>
                    <h3 className="text-2xl font-black tracking-tight group-hover:text-[#86BC25] transition-colors">{report.title}</h3>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">{report.description}</p>
                  </div>
                  <div className="mt-10 pt-8 border-t border-gray-50 flex items-center justify-between">
                    <button onClick={() => handleDownload(report.id)} className={`flex items-center space-x-3 text-[10px] font-black uppercase tracking-widest ${downloadComplete === report.id ? 'text-green-600' : 'text-black hover:text-[#86BC25]'}`}>
                      {downloadingId === report.id ? <Loader2 size={16} className="animate-spin" /> : downloadComplete === report.id ? <CheckCircle2 size={16} /> : <Download size={16} />}
                      <span>{downloadingId === report.id ? 'Securing Link...' : downloadComplete === report.id ? 'Download Ready' : 'Download PDF'}</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReportsPage;
