
import { create } from 'zustand';

export const useMaestroStore = create((set) => ({
  yoloData: [], // [{ x, y, label, color }] from teammate
  currentChord: 'C',
  songQueue: ['C', 'G', 'Am', 'F'],
  setYoloData: (data) => set({ yoloData: data }),
  nextChord: () => set((state) => ({ 
    songQueue: state.songQueue.slice(1),
    currentChord: state.songQueue[1] 
  })),
}));
