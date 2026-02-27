import { MessageCircle, Play, RotateCcw, Sparkles } from 'lucide-react';
import { useMaestroStore } from '../store/useMaestroStore';

const MaestroPanel = () => {
  // Assuming your store has a "feedback" string updated by the backend
  const feedback = "Keep your wrist higher for the C Major chord.";

  return (
    <div className="h-full bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col gap-6 shadow-2xl">
      {/* Header with AI Status */}
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-cyan-400 font-bold tracking-tight">
          <MessageCircle size={20} />
          MAESTRO AI 
        </h3>
        <div className="flex items-center gap-1.5 bg-cyan-500/10 px-2 py-1 rounded-full">
          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
          <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider">Live</span>
        </div>
      </div>
      
      {/* Feedback Area - Styled like a premium AI chat bubble */}
      <div className="flex-grow flex flex-col gap-3">
        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">
          Real-Time Coaching
        </label>
        <div className="relative group flex-grow bg-slate-950/50 border border-slate-800 rounded-xl p-5 shadow-inner">
          {/* Subtle Sparkle Icon indicating AI generation */}
          <Sparkles size={14} className="absolute top-4 right-4 text-slate-700 group-hover:text-cyan-400 transition-colors" />
          
          <p className="text-slate-200 text-lg leading-relaxed font-medium italic">
            "{feedback}"
          </p>
          
          {/* Decorative glow in the corner */}
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-cyan-500/5 blur-3xl rounded-full -z-10" />
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex gap-3">
        <button className="flex-1 flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold py-3 px-4 rounded-xl transition-all active:scale-95 shadow-lg shadow-cyan-500/20">
          <Play size={18} fill="currentColor" /> 
          START SESSION
        </button>
        
        <button className="flex items-center justify-center p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors active:scale-95">
          <RotateCcw size={18} />
        </button>
      </div>

      {/* Progress Footer */}
      <div className="pt-2 border-t border-slate-800/50">
        <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase mb-2">
          <span>Session Progress</span>
          <span>45%</span>
        </div>
        <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-cyan-500 w-[45%] shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
        </div>
      </div>
    </div>
  );
};

export default MaestroPanel;