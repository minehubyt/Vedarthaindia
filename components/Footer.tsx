
import React from 'react';
import { Linkedin, Youtube, Instagram, ExternalLink } from 'lucide-react';

interface FooterProps {
  onLegalClick?: () => void;
  onHomeClick?: () => void;
  onContactClick?: () => void;
  onRFPClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onLegalClick, onHomeClick, onContactClick, onRFPClick }) => {
  return (
    <footer className="bg-black text-white">
      {/* Black Section: Connect & Links */}
      <div className="bg-black pt-24 pb-16">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          
          <h2 className="text-4xl md:text-5xl font-light mb-16 tracking-tight">Let's connect</h2>

          {/* Main Footer Links Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mb-24">
            {/* Main Links */}
            <div className="space-y-6 text-left">
              <div className="mb-6">
                <img 
                  src="https://res.cloudinary.com/dtgufvwb5/image/upload/v1765442492/White_Vedartha_Global_Consultancy_LOGO_2_re1hew.png" 
                  alt="Vedartha Logo" 
                  className="h-10 w-auto mb-4"
                />
              </div>
              <button onClick={onHomeClick} className="block text-2xl font-light text-gray-300 hover:text-white transition-colors text-left w-full">About Vedartha</button>
              <button onClick={onContactClick} className="block text-2xl font-light text-gray-300 hover:text-white transition-colors text-left w-full">Contact us</button>
              <button onClick={onRFPClick} className="block text-2xl font-light text-gray-300 hover:text-white transition-colors text-left w-full">Submit RFP</button>
              <button className="block text-2xl font-light text-gray-300 hover:text-white transition-colors text-left w-full">Newsroom</button>
              <button className="block text-2xl font-light text-gray-300 hover:text-white transition-colors text-left w-full">View locations</button>
            </div>

            {/* What we do Column */}
            <div>
              <h5 className="font-bold text-xl mb-8 text-gray-200">What we do</h5>
              <ul className="space-y-5 text-gray-400 text-sm font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Case studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Industries</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Alliances</a></li>
              </ul>
            </div>

            {/* Our thinking Column */}
            <div>
              <h5 className="font-bold text-xl mb-8 text-gray-200">Our thinking</h5>
              <ul className="space-y-5 text-gray-400 text-sm font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Overview</a></li>
                <li><a href="#" className="text-white hover:text-deloitte-green transition-colors border-b-2 border-deloitte-green pb-1">Vedartha Insights</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dbriefs</a></li>
              </ul>
            </div>

            {/* Careers Column */}
            <div>
              <h5 className="font-bold text-xl mb-8 text-gray-200">Careers</h5>
              <ul className="space-y-5 text-gray-400 text-sm font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Careers home</a></li>
                <li>
                  <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
                    Job Search <ExternalLink size={14} />
                  </a>
                </li>
                <li><a href="#" className="hover:text-white transition-colors">Alumni</a></li>
              </ul>
            </div>
          </div>

          {/* Social Follow Bar */}
          <div className="flex justify-end pt-12 border-t border-white/10">
            <div className="flex flex-col items-end gap-6">
              <span className="text-gray-400 text-xs font-bold uppercase tracking-[0.3em]">Follow us</span>
              <div className="flex space-x-8 items-center">
                <a href="#" className="text-white hover:text-deloitte-green transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/></svg>
                </a>
                <a href="#" className="text-white hover:text-deloitte-green transition-colors"><Linkedin size={22} /></a>
                <a href="#" className="text-white hover:text-deloitte-green transition-colors"><Youtube size={26} /></a>
                <a href="#" className="text-white hover:text-deloitte-green transition-colors">
                  <div className="w-6 h-6 border-2 border-current rounded-sm flex items-center justify-center font-black text-[10px]">V</div>
                </a>
                <a href="#" className="text-white hover:text-deloitte-green transition-colors"><Instagram size={22} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* White Section: Legal Disclaimer */}
      <div className="bg-white text-black py-16">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          <div className="flex flex-wrap gap-x-10 gap-y-4 text-[14px] font-bold mb-8">
            <button onClick={onLegalClick} className="hover:underline">Terms of Use</button>
            <button onClick={onLegalClick} className="hover:underline">Privacy</button>
            <a href="#" className="text-[#0076A8] hover:underline">Data Privacy Framework</a>
            <button onClick={onLegalClick} className="hover:underline flex items-center gap-1">Cookie Notice <ExternalLink size={14} /></button>
            <a href="#" className="hover:underline">Cookie Settings</a>
          </div>
          
          <div className="flex flex-wrap gap-x-10 gap-y-4 text-[14px] font-bold mb-8">
            <a href="#" className="hover:underline">Legal Information for Job Seekers</a>
            <a href="#" className="hover:underline">Labor Condition Applications</a>
          </div>

          <div className="text-[14px] font-bold mb-12">
            <a href="#" className="hover:underline">Do Not Sell or Share My Personal Information</a>
          </div>

          <div className="text-[13px] text-gray-800 space-y-6 max-w-6xl">
            <p className="mb-4">© 2026. See <button onClick={onLegalClick} className="text-[#0076A8] hover:underline font-bold">Terms of Use</button> for more information.</p>
            <p className="leading-relaxed">
              Vedartha refers to one or more of Vedartha International Limited and its global network of firms. Each firm is a legally separate and independent entity. Vedartha Global does not provide services to clients directly. Please see <a href="#" className="text-[#0076A8] hover:underline font-bold">www.vedartha.com/about</a> to learn more about our global network.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
