
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { getInsightResponse } from '../services/gemini';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai' | 'system', text: string }[]>([
    { role: 'ai', text: 'Welcome to Vedartha. I am your Insight Assistant. How can I help you navigate our perspectives today?' }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!query.trim() || loading) return;

    const userMsg = query;
    setQuery('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const response = await getInsightResponse(userMsg);
      setMessages(prev => [...prev, { role: 'ai', text: response }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'system', text: "Service temporarily unavailable. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-[150] bg-[#86BC25] text-black p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group overflow-hidden"
        aria-label="Open Insight Assistant"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        <MessageSquare size={24} className="relative z-10 group-hover:rotate-12 transition-transform" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 50, scale: 0.9, filter: 'blur(10px)' }}
            className="fixed bottom-24 right-8 z-[160] w-[calc(100vw-4rem)] md:w-[420px] h-[600px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.3)] rounded-2xl border border-gray-100 overflow-hidden flex flex-col"
          >
            <div className="bg-black p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-[#86BC25] rounded-full flex items-center justify-center font-black text-sm">V</div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-tight">Insight Assistant</h4>
                  <div className="flex items-center space-x-2">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Global Network Active</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors p-2">
                <X size={20} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-white custom-scrollbar">
              {messages.map((m, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl text-[15px] leading-relaxed shadow-sm ${
                    m.role === 'user' 
                      ? 'bg-[#86BC25] text-black font-semibold rounded-tr-none' 
                      : m.role === 'system'
                      ? 'bg-red-50 text-red-600 border border-red-100 flex items-center gap-2'
                      : 'bg-gray-50 border border-gray-100 text-gray-800 rounded-tl-none'
                  }`}>
                    {m.role === 'system' && <AlertCircle size={16} />}
                    {m.text}
                  </div>
                </motion.div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-gray-50 border border-gray-100 p-4 rounded-2xl flex items-center space-x-3">
                    <Loader2 size={18} className="animate-spin text-[#86BC25]" />
                    <span className="text-xs text-gray-400 font-medium italic">Synthesizing global insights...</span>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 border-t border-gray-100 bg-white">
              <div className="flex items-center space-x-3 bg-gray-100 rounded-xl p-2 focus-within:ring-2 ring-[#86BC25]/20 transition-all">
                <input 
                  type="text" 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about AI, Strategy, or ESG..."
                  className="flex-1 bg-transparent border-none outline-none px-4 py-2 text-sm font-medium text-black"
                />
                <button 
                  onClick={handleSend}
                  disabled={!query.trim() || loading}
                  className="p-3 bg-black text-white rounded-lg hover:bg-[#86BC25] hover:text-black transition-all disabled:opacity-20 flex items-center justify-center"
                >
                  {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                </button>
              </div>
              <p className="text-[10px] text-gray-400 mt-3 text-center flex items-center justify-center space-x-1">
                <Sparkles size={10} />
                <span>AI insights are for informational purposes only.</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
