import { VideoOverlay } from './components/VideoOverlay';
import  ChordSheet  from './components/ChordSheet';
import  MaestroPanel  from './components/MaestroPanel';
import { useMaestroStore } from './store/useMaestroStore';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 flex flex-col gap-6 ">
      {/* Header */}
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tighter text-cyan-400">MAESTRO AI TUTOR</h1>
        <div className="bg-slate-900 px-4 py-2 rounded-full border border-slate-700 text-sm">
          Playing: <span className="text-white font-mono">Let It Be</span>
        </div>
      </header>

      <main className="grid grid-cols-12 gap-6 flex-grow">
        {/* Left: Video Feed (The Focus) */}
        <div className="col-span-9">
          <VideoOverlay />
        </div>

        {/* Right*/}
        <div className="col-span-3">
          <MaestroPanel />
        </div>
      </main>

      {/* Bottom: Scrolling Chords */}
      <footer className="h-32 bg-slate-900/50 backdrop-blur-xl rounded-xl border border-white/10 p-4">
        <ChordSheet />
      </footer>
      <button 
        onClick={() => useMaestroStore.getState().setDetections([{ id: '1', x: 100, y: 100, label: 'Hand' }])}
        className="fixed bottom-4 right-4 bg-red-500 hover:bg-red-600 text-white font-bold p-3 rounded-lg shadow-lg z-50"
      >
        Simulate AI Dot
      </button>
    </div>
  );
}
