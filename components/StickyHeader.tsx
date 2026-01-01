
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
    <div className={`sticky top-0 ${bgColor} w-full py-4 px-6 lg:px-[8vw] z-[70] shadow-xl border-t border-white/10 transition-colors duration-300`}>
      <div className="container mx-auto max-w-[1800px]">
        <span className={`${textColor} text-lg font-bold tracking-tight uppercase`}>
          {title}
        </span>
      </div>
    </div>
  );
};

export default StickyHeader;
