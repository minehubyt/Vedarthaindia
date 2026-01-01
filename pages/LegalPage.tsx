
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink } from 'lucide-react';

const LEGAL_SECTIONS = [
  {
    title: 'Terms of Use',
    description: 'General terms and conditions for using our website and digital platforms.',
    href: '#'
  },
  {
    title: 'Privacy Statement',
    description: 'How we collect, use, and protect your personal data across our global network.',
    href: '#'
  },
  {
    title: 'Cookie Notice',
    description: 'Information about how we use cookies and similar technologies.',
    href: '#'
  },
  {
    title: 'Legal Information for Job Seekers',
    description: 'Specific legal notices and information for individuals applying for careers at Deloitte.',
    href: '#'
  },
  {
    title: 'Ethics and Integrity',
    description: 'Our commitment to the highest standards of professional conduct.',
    href: '#'
  },
  {
    title: 'Anti-Corruption and Anti-Bribery',
    description: 'Our global policy and commitment to integrity in all business dealings.',
    href: '#'
  }
];

const LegalPage: React.FC = () => {
  return (
    <div className="pt-24 pb-32 bg-white">
      <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-[12px] font-bold text-gray-500 uppercase tracking-widest mb-12">
          <a href="#" className="hover:text-deloitte-green transition-colors">Home</a>
          <ChevronRight size={14} className="text-gray-300" />
          <span className="text-black">Legal</span>
        </nav>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">Legal</h1>
          <p className="text-2xl text-gray-500 font-light max-w-3xl leading-relaxed">
            Deloitte is committed to transparency and upholding the highest legal and ethical standards in all our operations globally.
          </p>
        </motion.div>

        {/* Legal Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {LEGAL_SECTIONS.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group border-b border-gray-100 pb-10 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold group-hover:text-deloitte-green transition-colors duration-300">
                  {section.title}
                </h3>
                <ChevronRight className="text-gray-300 group-hover:text-deloitte-green group-hover:translate-x-1 transition-all" size={24} />
              </div>
              <p className="text-gray-500 font-light leading-relaxed mb-6">
                {section.description}
              </p>
              <div className="flex items-center text-xs font-bold uppercase tracking-widest text-black group-hover:text-deloitte-green transition-colors">
                View Document <ExternalLink size={14} className="ml-2" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Contact Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-12 bg-gray-50 rounded-sm border-l-8 border-deloitte-green"
        >
          <h2 className="text-3xl font-bold mb-6">Need more information?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl font-light">
            If you have questions about our legal policies, terms of use, or data protection practices, please reach out to our global legal team.
          </p>
          <button className="bg-black text-white hover:bg-deloitte-green hover:text-white px-8 py-4 rounded-full font-bold text-sm transition-all shadow-lg">
            Contact Global Legal
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default LegalPage;
