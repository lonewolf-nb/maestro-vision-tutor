import { motion } from 'framer-motion';
import { useMaestroStore } from '../store/useMaestroStore';

const ChordSheet = () => {
  const { songQueue, currentChordIndex } = useMaestroStore();

  return (
    <div className="relative flex items-center w-full h-full overflow-hidden bg-slate-900/50 rounded-xl border border-white/10 backdrop-blur-sm">
      
      {/* The "Playhead" or Center Marker */}
      <div className="absolute left-1/2 -translate-x-1/2 w-1 h-3/4 bg-cyan-400 z-10 shadow-[0_0_15px_rgba(34,211,238,0.8)] rounded-full" />

      {/* Scrolling Belt */}
      <motion.div
        animate={{ x: `calc(50% - ${currentChordIndex * 160 + 80}px)` }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        className="flex gap-5 px-4"
      >
        {songQueue.map((chord, index) => {
          const isActive = index === currentChordIndex;
          const isPast = index < currentChordIndex;

          return (
            <div
              key={index}
              className={`
                min-w-[140px] h-[100px] flex flex-col justify-center items-center rounded-xl transition-all duration-500 border-2
                ${isActive 
                  ? 'bg-slate-800 border-cyan-400 scale-110 shadow-lg shadow-cyan-500/20' 
                  : 'bg-slate-950/60 border-slate-700 opacity-60'}
                ${isPast ? 'opacity-20 grayscale' : ''}
              `}
            >
              <span className={`text-3xl font-black ${isActive ? 'text-white' : 'text-slate-400'}`}>
                {chord}
              </span>
              
              {isActive && (
                <span className="text-[10px] font-bold tracking-widest text-cyan-400 mt-1 animate-pulse">
                  NOW
                </span>
              )}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ChordSheet;