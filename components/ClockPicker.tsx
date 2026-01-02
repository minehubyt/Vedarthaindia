
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ClockPickerProps {
  initialTime: string;
  onSelect: (time: string) => void;
  onClose: () => void;
}

const ClockPicker: React.FC<ClockPickerProps> = ({ initialTime, onSelect, onClose }) => {
  const [mode, setMode] = useState<'hours' | 'minutes'>('hours');
  const [hour, setHour] = useState(initialTime.split(':')[0] || '09');
  const [minute, setMinute] = useState(initialTime.split(':')[1] || '00');

  const hoursOuter = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const hoursInner = ['00', 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  const minutes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

  const getPosition = (index: number, radius: number, total: number = 12) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
    return {
      x: 125 + radius * Math.cos(angle),
      y: 125 + radius * Math.sin(angle),
      angle: (index / total) * 360
    };
  };

  const handleHourSelect = (val: string | number) => {
    const formatted = val.toString().padStart(2, '0');
    setHour(formatted);
    setTimeout(() => setMode('minutes'), 300);
  };

  const handleMinuteSelect = (val: number) => {
    setMinute(val.toString().padStart(2, '0'));
  };

  const finalize = () => {
    onSelect(`${hour}:${minute}`);
  };

  const selectedHourNum = parseInt(hour);
  const isInnerHour = selectedHourNum === 0 || selectedHourNum > 12;
  const hourIdx = isInnerHour ? hoursInner.indexOf(selectedHourNum === 0 ? '00' : selectedHourNum) : hoursOuter.indexOf(selectedHourNum === 12 ? 12 : selectedHourNum);
  const hourAngle = (hourIdx * 30);

  const minuteAngle = (parseInt(minute) / 60) * 360;

  return (
    <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.4)] w-[min(90vw,330px)] select-none border border-gray-100 mx-auto transform sm:scale-100 scale-[0.85] max-h-[90vh] flex flex-col">
      {/* Time Display Header */}
      <div className="bg-[#3f51b5] p-5 sm:p-7 text-white text-center relative shrink-0">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 hover:bg-white/10 rounded-full transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>
        <div className="text-[9px] font-black opacity-60 uppercase tracking-[0.2em] mb-2">Select Time</div>
        <div className="flex items-center justify-center text-5xl sm:text-6xl font-light">
          <button 
            onClick={() => setMode('hours')}
            className={`transition-all duration-300 ${mode === 'hours' ? 'opacity-100 font-bold scale-110' : 'opacity-40 hover:opacity-80'}`}
          >
            {hour}
          </button>
          <span className="mx-2 opacity-20">:</span>
          <button 
            onClick={() => setMode('minutes')}
            className={`transition-all duration-300 ${mode === 'minutes' ? 'opacity-100 font-bold scale-110' : 'opacity-40 hover:opacity-80'}`}
          >
            {minute}
          </button>
        </div>
      </div>

      {/* Clock Face Area */}
      <div className="p-4 sm:p-8 flex flex-col items-center overflow-y-auto custom-scrollbar">
        <div className="relative w-[250px] h-[250px] bg-[#f8f9fa] rounded-full shadow-inner border border-gray-50 shrink-0">
          {/* Central Dot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#3f51b5] rounded-full z-20" />
          
          <AnimatePresence mode="wait">
            {mode === 'hours' ? (
              <motion.div
                key="hours"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="absolute inset-0"
              >
                {/* Needle */}
                <div 
                  className="absolute top-1/2 left-1/2 origin-left h-[2px] bg-[#3f51b5] z-10 transition-all duration-300"
                  style={{ 
                    width: isInnerHour ? '70px' : '100px',
                    transform: `rotate(${hourAngle - 90}deg)` 
                  }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#3f51b5] rounded-full flex items-center justify-center text-white text-[10px] font-black shadow-lg shadow-[#3f51b5]/30">
                    {hour}
                  </div>
                </div>

                {/* Outer Ring */}
                {hoursOuter.map((h, i) => {
                  const pos = getPosition(i, 100);
                  const isActive = parseInt(hour) === h && !isInnerHour;
                  return (
                    <button
                      key={`outer-${h}`}
                      onClick={() => handleHourSelect(h)}
                      className={`absolute w-10 h-10 -ml-5 -mt-5 flex items-center justify-center text-xs font-bold transition-all rounded-full ${isActive ? 'text-white' : 'text-gray-400 hover:bg-gray-100 hover:text-black'}`}
                      style={{ left: pos.x, top: pos.y }}
                    >
                      {h}
                    </button>
                  );
                })}
                {/* Inner Ring */}
                {hoursInner.map((h, i) => {
                  const pos = getPosition(i, 65);
                  const isActive = parseInt(hour) === parseInt(h.toString()) && isInnerHour;
                  return (
                    <button
                      key={`inner-${h}`}
                      onClick={() => handleHourSelect(h)}
                      className={`absolute w-8 h-8 -ml-4 -mt-4 flex items-center justify-center text-[9px] font-bold transition-all rounded-full ${isActive ? 'text-white' : 'text-gray-300 hover:bg-gray-100 hover:text-black'}`}
                      style={{ left: pos.x, top: pos.y }}
                    >
                      {h}
                    </button>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="minutes"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute inset-0"
              >
                 {/* Needle */}
                 <div 
                  className="absolute top-1/2 left-1/2 origin-left h-[2px] bg-[#3f51b5] z-10 transition-all duration-300"
                  style={{ 
                    width: '100px',
                    transform: `rotate(${minuteAngle - 90}deg)` 
                  }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#3f51b5] rounded-full flex items-center justify-center text-white text-[10px] font-black shadow-lg shadow-[#3f51b5]/30">
                    {minute}
                  </div>
                </div>

                {minutes.map((m, i) => {
                  const pos = getPosition(i, 100);
                  const isActive = parseInt(minute) === m;
                  return (
                    <button
                      key={`min-${m}`}
                      onClick={() => handleMinuteSelect(m)}
                      className={`absolute w-10 h-10 -ml-5 -mt-5 flex items-center justify-center text-xs font-bold transition-all rounded-full ${isActive ? 'text-white' : 'text-gray-400 hover:bg-gray-100 hover:text-black'}`}
                      style={{ left: pos.x, top: pos.y }}
                    >
                      {m.toString().padStart(2, '0')}
                    </button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end w-full mt-6 space-x-2 px-2 pb-2">
          <button 
            onClick={onClose}
            className="text-gray-400 font-black uppercase tracking-widest text-[9px] py-2 px-4 hover:text-black transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={finalize}
            className="bg-[#3f51b5] text-white font-black uppercase tracking-widest text-[9px] py-3 px-8 rounded-full shadow-lg shadow-[#3f51b5]/20 hover:brightness-110 active:scale-95 transition-all"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClockPicker;
