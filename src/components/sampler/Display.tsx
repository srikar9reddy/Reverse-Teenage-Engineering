
import { useState, useEffect } from 'react';

export const Display = ({ bpm = 120 }: { bpm?: number }) => {
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-sampler-display w-full h-24 rounded-sm p-4 relative">
      <div className="absolute top-2 right-2 flex gap-2">
        <div className={`w-2 h-2 rounded-full ${isBlinking ? 'bg-sampler-orange animate-led-blink' : 'bg-gray-600'}`} />
        <div className="w-2 h-2 rounded-full bg-gray-600" />
      </div>
      <div className="flex justify-between items-center h-full">
        <div className="text-4xl font-mono text-white tracking-wider">
          {bpm.toString().padStart(3, '0')}
        </div>
        <div className="flex gap-4 h-full items-center">
          {[1,2,3,4].map((_, i) => (
            <div 
              key={i}
              className="w-1 h-12 bg-white/20 rounded-full animate-waveform"
              style={{
                animationDelay: `${i * 0.1}s`,
                transformOrigin: 'center'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
