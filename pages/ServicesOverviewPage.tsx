
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield, Zap, Search, ChevronRight, Briefcase, Scale, Fingerprint, Leaf } from 'lucide-react';

const SERVICE_LINES = [
  {
    title: 'Audit & Assurance',
    path: 'audit-assurance',
    description: 'Providing high-quality audits through innovation and transparency to build investor confidence.',
    imageUrl: 'https://images.unsplash.com/photo-1454165833767-0274b27f28a0?auto=format&fit=crop&q=80&w=800',
    icon: Shield
  },
  {
    title: 'Tax & Regulatory',
    path: 'tax-regulatory',
    description: 'Navigating statutory complexity with cross-border precision and legal foresight.',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
    icon: Scale
  },
  {
    title: 'Consulting',
    path: 'consulting-strategy',
    description: 'Helping organizations drive transformation through strategy, tech, and deep industry knowledge.',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    icon: Zap
  },
  {
    title: 'Risk Advisory',
    path: 'risk-advisory',
    description: 'Identifying vulnerabilities before they become incidents through diagnostics and resilient frameworks.',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
    icon: Shield
  },
  {
    title: 'Deal Advisory',
    path: 'deal-advisory',
    description: 'Navigating high-stakes capital transactions with clinical precision and quiet boardroom confidence.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    icon: Briefcase
  },
  {
    title: 'Forensic & Dispute',
    path: 'forensic-dispute',
    description: 'Uncovering fraud and resolving high-stakes disputes through investigative intensity and digital forensics.',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    icon: Fingerprint
  },
  {
    title: 'ESG & Sustainability',
    path: 'esg-sustainability',
    description: 'Integrating long-term thinking into Day-1 operations to balance purpose, growth, and planet.',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
    icon: Leaf
  }
];

interface ServicesOverviewPageProps {
  onServiceClick: (path: string) => void;
}

const ServicesOverviewPage: React.FC<ServicesOverviewPageProps> = ({ onServiceClick }) => {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-black text-white pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px] relative z-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <div className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.4em] text-[#86BC25] mb-8">
              <Zap size={16} />
              <span>Capabilities</span>
            </div>
            <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-black leading-[0.9] tracking-tighter mb-10 uppercase">
              Our <br /> <span className="text-gray-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 font-light max-w-2xl leading-relaxed">
              We provide end-to-end expertise that helps businesses evolve, scale, and thrive in an increasingly digital and sustainable global economy.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SERVICE_LINES.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => onServiceClick(service.path)}
                className="group cursor-pointer border-b border-gray-100 pb-12"
              >
                <div className="relative aspect-[16/9] mb-10 overflow-hidden rounded-sm">
                  <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <service.icon size={24} className="text-[#86BC25]" />
                  <h3 className="text-3xl font-black group-hover:text-[#86BC25] transition-colors uppercase tracking-tighter">{service.title}</h3>
                </div>
                <p className="text-gray-500 font-light text-lg mb-8 leading-relaxed line-clamp-2">{service.description}</p>
                <button className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-widest text-black group-hover:translate-x-2 transition-transform">
                  <span>Explore service line</span>
                  <ChevronRight size={18} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesOverviewPage;
