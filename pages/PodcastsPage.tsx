
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Headphones, Clock, ArrowRight, Music, Layers, Radio, ChevronRight, Share2, Plus, Volume2, Pause } from 'lucide-react';

const SERIES = [
  {
    id: 'boardroom',
    name: 'The Boardroom Brief',
    description: 'Critical conversations for the modern C-Suite on governance, strategy, and global risk.',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800',
    episodesCount: 42,
    latestDate: 'Feb 15, 2025'
  },
  {
    id: 'tech-unbound',
    name: 'Tech Unbound',
    description: 'Demystifying emerging tech from Quantum to AI and how it reshapes the commercial landscape.',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800',
    episodesCount: 15,
    latestDate: 'Feb 10, 2025'
  },
  {
    id: 'sustainability',
    name: 'Sustainability Matters',
    description: 'Deep dives into the net-zero transition and the circular economy with urban architects.',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800',
    episodesCount: 29,
    latestDate: 'Jan 28, 2025'
  }
];

const EPISODES = [
  {
    id: 'e1',
    seriesId: 'boardroom',
    season: '2025',
    title: 'The Future of Fiduciary Duty',
    speaker: 'Dr. Arthur Sterling',
    role: 'Governance Expert',
    duration: '28:15',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=400',
    desc: 'Exploring how board mandates are evolving to include long-term sustainability metrics.'
  },
  {
    id: 'e2',
    seriesId: 'tech-unbound',
    season: '2025',
    title: 'Quantum Computing: Ready for Production?',
    speaker: 'Sarah Jenkins',
    role: 'Emerging Tech Lead',
    duration: '35:40',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=400',
    desc: 'Mapping the commercial timeline for quantum advantage in high-frequency trading.'
  },
  {
    id: 'e3',
    seriesId: 'sustainability',
    season: '2024',
    title: 'Circular Cities: Urban Waste Reimagined',
    speaker: 'Marcus Chen',
    role: 'Resilience Architect',
    duration: '42:10',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=400',
    desc: 'How major metropolitan centers are redesigning systems for a zero-emission future.'
  },
  {
    id: 'e4',
    seriesId: 'boardroom',
    season: '2025',
    title: 'Geopolitical Risk in the Supply Chain',
    speaker: 'James Wilson',
    role: 'Global Risk Leader',
    duration: '31:20',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400',
    desc: 'Analyzing the ripple effects of shifting trade alliances on enterprise value chains.'
  },
  {
    id: 'e5',
    seriesId: 'tech-unbound',
    season: '2025',
    title: 'Agentic Workflows: The Next AI Frontier',
    speaker: 'David Thorne',
    role: 'AI Strategy Partner',
    duration: '24:45',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400',
    desc: 'Moving beyond chat: How autonomous agents are executing end-to-end business processes.'
  },
  {
    id: 'e6',
    seriesId: 'sustainability',
    season: '2025',
    title: 'Decarbonizing Heavy Industry',
    speaker: 'Elena Rossi',
    role: 'Industrial Transition Lead',
    duration: '38:50',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400',
    desc: 'The technical and financial hurdles of moving steel and cement to carbon-neutral production.'
  }
];

const SEASONS = ['2025', '2024', 'Archive'];

const PodcastsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'series' | 'seasons'>('series');
  const [playingId, setPlayingId] = useState<string | null>(null);

  const togglePlay = (id: string) => {
    setPlayingId(playingId === id ? null : id);
  };

  const activeEpisode = EPISODES.find(e => e.id === playingId);

  return (
    <div className="bg-white min-h-screen">
      {/* Immersive Audio Hero */}
      <section className="bg-black text-white pt-48 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px] relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-[#86BC25] rounded-full flex items-center justify-center text-black shadow-[0_0_30px_rgba(134,188,37,0.4)]">
                <Headphones size={22} />
              </div>
              <span className="text-[#86BC25] font-black uppercase tracking-[0.4em] text-[10px]">Audio Intelligence Hub</span>
            </div>
            <h1 className="text-[clamp(2.5rem,8vw,6.5rem)] font-black leading-[0.85] tracking-tighter mb-12 uppercase">
              Vedartha <br /> <span className="text-gray-500">Podcasts</span>
            </h1>
            <p className="text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
              Global perspectives delivered in high-fidelity. Deep dives into the strategy, technology, and leadership shaping our world.
            </p>
          </motion.div>
        </div>
        
        {/* Animated Background Spectrum */}
        <div className="absolute bottom-0 left-0 w-full h-40 opacity-15 flex items-end justify-center space-x-1.5 px-4 pointer-events-none">
          {Array.from({ length: 120 }).map((_, i) => (
            <motion.div 
              key={i} 
              animate={{ 
                height: [
                  10 + Math.random() * 40, 
                  20 + Math.random() * 100, 
                  15 + Math.random() * 60,
                  10 + Math.random() * 40
                ] 
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5 + Math.random(), 
                ease: "easeInOut" 
              }}
              className="flex-1 bg-[#86BC25] rounded-t-full max-w-[4px]" 
            />
          ))}
        </div>
      </section>

      {/* High-End Tab Navigation */}
      <div className="sticky top-[70px] z-[150] bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px] flex items-center justify-between py-6">
          <div className="flex items-center space-x-12">
            <button
              onClick={() => setActiveTab('series')}
              className={`flex items-center space-x-3 text-[11px] font-black uppercase tracking-[0.25em] transition-all relative py-2 ${
                activeTab === 'series' ? 'text-black' : 'text-gray-400 hover:text-black'
              }`}
            >
              <Radio size={16} />
              <span>By Series Name</span>
              {activeTab === 'series' && (
                <motion.div layoutId="podTab" className="absolute -bottom-[25px] left-0 right-0 h-1 bg-[#86BC25]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('seasons')}
              className={`flex items-center space-x-3 text-[11px] font-black uppercase tracking-[0.25em] transition-all relative py-2 ${
                activeTab === 'seasons' ? 'text-black' : 'text-gray-400 hover:text-black'
              }`}
            >
              <Layers size={16} />
              <span>By Season</span>
              {activeTab === 'seasons' && (
                <motion.div layoutId="podTab" className="absolute -bottom-[25px] left-0 right-0 h-1 bg-[#86BC25]" />
              )}
            </button>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
             <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Share Feed</span>
             <Share2 size={16} className="text-gray-400 cursor-pointer hover:text-black transition-colors" />
          </div>
        </div>
      </div>

      <section className="py-20 bg-gray-50/50">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px]">
          <AnimatePresence mode="wait">
            {activeTab === 'series' ? (
              <motion.div
                key="series-view"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
              >
                {SERIES.map((series, idx) => (
                  <motion.div
                    key={series.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group cursor-pointer"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img src={series.image} alt={series.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                      <div className="absolute bottom-6 left-6 flex items-center space-x-3">
                        <div className="w-12 h-12 bg-[#86BC25] rounded-full flex items-center justify-center text-black shadow-xl group-hover:scale-110 transition-transform">
                          <Play size={20} fill="black" />
                        </div>
                        <span className="text-white text-[10px] font-black uppercase tracking-widest">Listen to series</span>
                      </div>
                    </div>
                    <div className="p-10 space-y-6">
                      <div className="flex justify-between items-start">
                        <h3 className="text-2xl font-black tracking-tight leading-none group-hover:text-[#86BC25] transition-colors">
                          {series.name}
                        </h3>
                        <span className="bg-gray-100 text-gray-500 text-[9px] font-black px-2 py-1 rounded uppercase">
                          {series.episodesCount} Episodes
                        </span>
                      </div>
                      <p className="text-gray-500 font-light text-sm leading-relaxed">
                        {series.description}
                      </p>
                      <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                        <div className="flex flex-col">
                          <span className="text-[9px] text-gray-400 font-black uppercase tracking-widest mb-1">Latest Update</span>
                          <span className="text-xs font-bold text-black">{series.latestDate}</span>
                        </div>
                        <ArrowRight size={20} className="text-gray-300 group-hover:text-black group-hover:translate-x-2 transition-all" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="seasons-view"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-20"
              >
                {SEASONS.map((season) => {
                  const seasonEpisodes = EPISODES.filter(e => e.season === season);
                  if (seasonEpisodes.length === 0 && season !== 'Archive') return null;
                  
                  return (
                    <div key={season} className="space-y-10">
                      <div className="flex items-center space-x-6">
                        <h2 className="text-5xl font-black tracking-tighter text-black uppercase">Season {season}</h2>
                        <div className="h-[1px] bg-gray-200 flex-1" />
                        <span className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">{seasonEpisodes.length} Episodes</span>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {seasonEpisodes.length > 0 ? seasonEpisodes.map((episode) => (
                          <div 
                            key={episode.id} 
                            onClick={() => togglePlay(episode.id)}
                            className={`bg-white p-8 rounded-2xl flex items-center space-x-8 hover:shadow-xl transition-all border border-transparent hover:border-[#86BC25]/20 group cursor-pointer shadow-sm relative overflow-hidden ${playingId === episode.id ? 'border-[#86BC25]/40 ring-2 ring-[#86BC25]/10' : ''}`}
                          >
                            <div className="relative w-32 h-32 shrink-0 rounded-xl overflow-hidden shadow-lg">
                              <img src={episode.image} alt={episode.title} className="w-full h-full object-cover" />
                              <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                                {playingId === episode.id ? (
                                  <Pause size={24} className="text-[#86BC25] fill-[#86BC25]" />
                                ) : (
                                  <Play size={24} className="text-white fill-white scale-75 group-hover:scale-100 transition-transform" />
                                )}
                              </div>
                            </div>
                            <div className="flex-1 space-y-3">
                              <div className="flex items-center space-x-3 text-[9px] font-black uppercase tracking-widest text-gray-400">
                                <span className="text-[#86BC25]">{SERIES.find(s => s.id === episode.seriesId)?.name}</span>
                                <span>•</span>
                                <div className="flex items-center space-x-1">
                                  <Clock size={10} />
                                  <span>{episode.duration}</span>
                                </div>
                              </div>
                              <h4 className="text-xl font-bold leading-tight group-hover:text-[#86BC25] transition-colors">{episode.title}</h4>
                              <p className="text-xs text-gray-500 font-light line-clamp-2">{episode.desc}</p>
                              <div className="flex items-center space-x-2 pt-2">
                                <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-[10px] font-black">
                                  {episode.speaker[0]}
                                </div>
                                <span className="text-[10px] font-bold text-gray-900">{episode.speaker}</span>
                                <span className="text-[10px] text-gray-400">{episode.role}</span>
                              </div>
                            </div>
                            <Plus size={20} className="text-gray-300 hover:text-black transition-colors shrink-0 self-start" />
                            
                            {playingId === episode.id && (
                              <motion.div 
                                className="absolute bottom-0 left-0 h-1 bg-[#86BC25]"
                                initial={{ width: 0 }}
                                animate={{ width: '60%' }}
                                transition={{ duration: 10, repeat: Infinity }}
                              />
                            )}
                          </div>
                        )) : (
                          <div className="lg:col-span-2 py-20 bg-gray-100/50 rounded-3xl text-center border-2 border-dashed border-gray-200">
                             <h4 className="text-gray-400 font-black uppercase tracking-[0.2em] text-xs mb-2">Historical Records</h4>
                             <p className="text-sm text-gray-400 font-light">Loading archival content from 2023 and earlier...</p>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Subscription Footer */}
      <section className="bg-black py-24 mb-20">
        <div className="container mx-auto px-6 lg:px-[8vw] max-w-[1800px] text-center">
          <div className="max-w-3xl mx-auto space-y-10">
            <h2 className="text-white text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">Never miss a <br /> <span className="text-[#86BC25]">frequency.</span></h2>
            <p className="text-gray-400 text-xl font-light leading-relaxed">
              Subscribe to Vedartha Audio for bi-weekly briefings on the technologies and strategies defining the global future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Business Email" 
                className="flex-1 bg-white/5 border border-white/20 px-8 py-4 rounded-full text-white outline-none focus:border-[#86BC25] transition-all"
              />
              <button className="bg-[#86BC25] text-black px-12 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-[#86BC25]/20">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Mini-Player */}
      <AnimatePresence>
        {playingId && activeEpisode && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-[500] bg-black/95 backdrop-blur-xl border-t border-white/10 px-6 py-4 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="container mx-auto max-w-[1800px] flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-white/10">
                  <img src={activeEpisode.image} alt={activeEpisode.title} className="w-full h-full object-cover" />
                </div>
                <div className="hidden sm:block">
                  <h5 className="text-white font-black text-sm uppercase tracking-tight line-clamp-1">{activeEpisode.title}</h5>
                  <p className="text-[#86BC25] text-[10px] font-bold uppercase tracking-widest">{activeEpisode.speaker}</p>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                 <button className="text-white/60 hover:text-white transition-colors">
                    <Volume2 size={20} />
                 </button>
                 <button 
                  onClick={() => setPlayingId(null)}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform"
                >
                    <Pause size={24} fill="black" />
                 </button>
                 <div className="hidden md:flex flex-col items-end">
                    <span className="text-white/40 text-[9px] font-black uppercase tracking-widest mb-1">Duration Remaining</span>
                    <span className="text-white font-mono text-xs">{activeEpisode.duration}</span>
                 </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PodcastsPage;
