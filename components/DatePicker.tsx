
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface DatePickerProps {
  initialDate: string; // YYYY-MM-DD
  onSelect: (date: string) => void;
  onClose: () => void;
}

const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const DatePicker: React.FC<DatePickerProps> = ({ initialDate, onSelect, onClose }) => {
  const [currentDate, setCurrentDate] = useState(initialDate ? new Date(initialDate) : new Date());
  const [viewDate, setViewDate] = useState(new Date(currentDate));

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    setViewDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(year, month + 1, 1));
  };

  const isSelected = (day: number) => {
    return currentDate.getDate() === day && 
           currentDate.getMonth() === month && 
           currentDate.getFullYear() === year;
  };

  const isToday = (day: number) => {
    const today = new Date();
    return today.getDate() === day && 
           today.getMonth() === month && 
           today.getFullYear() === year;
  };

  const handleDateClick = (day: number) => {
    const newDate = new Date(year, month, day);
    setCurrentDate(newDate);
  };

  const handleFinalSelect = () => {
    const y = currentDate.getFullYear();
    const m = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const d = currentDate.getDate().toString().padStart(2, '0');
    onSelect(`${y}-${m}-${d}`);
  };

  return (
    <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.4)] w-[min(90vw,340px)] select-none border border-gray-100 mx-auto transform sm:scale-100 scale-[0.85] max-h-[90vh] flex flex-col">
      {/* Header Display - Color synced with ClockPicker */}
      <div className="bg-[#3f51b5] p-5 sm:p-7 text-white relative shrink-0">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 hover:bg-white/10 rounded-full transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>
        <div className="text-[9px] font-black uppercase tracking-[0.2em] opacity-60 mb-1">Select Date</div>
        <div className="text-2xl sm:text-3xl font-light tracking-tight">
          {MONTHS[currentDate.getMonth()].substring(0, 3)} {currentDate.getDate()}, {currentDate.getFullYear()}
        </div>
      </div>

      <div className="p-5 sm:p-7 overflow-y-auto custom-scrollbar">
        {/* Month Navigation */}
        <div className="flex items-center justify-between mb-6 px-1">
          <h4 className="font-black text-black text-[12px] uppercase tracking-[0.1em]">
            {MONTHS[month]} {year}
          </h4>
          <div className="flex space-x-1">
            <button onClick={handlePrevMonth} className="p-2 hover:bg-gray-100 rounded-full transition-all text-gray-400 hover:text-black">
              <ChevronLeft size={16} />
            </button>
            <button onClick={handleNextMonth} className="p-2 hover:bg-gray-100 rounded-full transition-all text-gray-400 hover:text-black">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Calendar Grid - Responsive scaling */}
        <div className="grid grid-cols-7 gap-y-1 text-center origin-top">
          {DAYS.map(day => (
            <div key={day} className="text-[9px] font-black text-gray-300 py-2 uppercase tracking-widest">
              {day}
            </div>
          ))}

          {/* Empty cells for padding */}
          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <div key={`empty-${i}`} className="p-2" />
          ))}

          {/* Actual Days */}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const selected = isSelected(day);
            const today = isToday(day);
            
            return (
              <button
                key={day}
                onClick={() => handleDateClick(day)}
                className={`relative text-xs font-bold transition-all rounded-full h-9 w-9 flex items-center justify-center mx-auto
                  ${selected ? 'bg-[#3f51b5] text-white shadow-lg' : today ? 'text-[#3f51b5] font-black bg-[#3f51b5]/5' : 'text-gray-600 hover:bg-gray-50 hover:text-black'}
                `}
              >
                {day}
                {today && !selected && (
                  <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#3f51b5] rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Footer Actions - Matched with ClockPicker style */}
        <div className="flex justify-end mt-8 space-x-2 border-t border-gray-50 pt-5 px-1 pb-2">
          <button 
            onClick={onClose}
            className="px-4 py-2 text-[9px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={handleFinalSelect}
            className="px-8 py-2.5 bg-[#3f51b5] text-white font-black uppercase tracking-widest text-[9px] rounded-full shadow-lg shadow-[#3f51b5]/20 hover:brightness-110 active:scale-95 transition-all"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
