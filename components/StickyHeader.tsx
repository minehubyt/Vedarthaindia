
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
    <div className={`sticky top-0 ${bgColor} w-full py-6 px-6 lg:px-[8vw] z-[100] shadow-2xl border-b border-white/5 backdrop-blur-md transition-all duration-500`}>
      <div className="container mx-auto max-w-[1800px] flex items-center">
        <span className={`${textColor} text-sm md:text-base font-black tracking-[0.2em] uppercase`}>
          {title}
        </span>
      </div>
    </div>
  );
};

export default StickyHeader;
