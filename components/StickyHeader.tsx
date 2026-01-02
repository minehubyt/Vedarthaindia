
import React from 'react';

interface StickyHeaderProps {
  title: string;
  bgColor?: string;
  textColor?: string;
}

const StickyHeader: React.FC<StickyHeaderProps> = ({ 
  title, 
  bgColor = "bg-deloitte-green", 
  textColor = "text-white" 
}) => {
  return (
    <div className={`sticky top-[70px] ${bgColor} w-full py-5 px-6 lg:px-[8vw] z-[140] shadow-xl border-b border-white/10 backdrop-blur-md transition-all duration-500`}>
      <div className="container mx-auto max-w-[1800px] flex items-center">
        <span className={`${textColor} text-[10px] md:text-xs font-black tracking-[0.4em] uppercase`}>
          {title}
        </span>
      </div>
    </div>
  );
};

export default StickyHeader;
