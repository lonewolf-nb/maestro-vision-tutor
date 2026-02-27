import { useRef, useEffect } from 'react';
import { useMaestroStore } from '../store/useMaestroStore';

export const VideoOverlay = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const yoloData = useMaestroStore((state) => state.yoloData);

  useEffect(() => {
    // Start Webcam
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      if (videoRef.current) videoRef.current.srcObject = stream;
    });

    // Draw Loop
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, 1280, 720);
      yoloData.forEach((box: any) => {
        ctx.beginPath();
        ctx.arc(box.x * 1280, box.y * 720, 15, 0, 2 * Math.PI);
        ctx.fillStyle = box.color || '#00d4ff'; // Maestro Blue
        ctx.fill();
      });
    }
  }, [yoloData]);

  return (
    <div className="relative rounded-2xl overflow-hidden border-4 border-slate-800 shadow-2xl">
      <video ref={videoRef} autoPlay className="w-full h-auto" />
      <canvas ref={canvasRef} width={1280} height={720} className="absolute top-0 left-0 w-full h-full pointer-events-none" />
    </div>
  );
};