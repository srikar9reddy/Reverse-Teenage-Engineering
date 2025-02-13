
import { useState } from 'react';
import { Button } from './Button';
import { Display } from './Display';
import { Knob } from './Knob';
import { 
  Play, 
  Square, 
  CircleDot, 
  Music2,
  Timer,
  Save,
  Volume2
} from 'lucide-react';

export const Sampler = () => {
  const [bpm, setBpm] = useState(120);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(75);

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-8 bg-sampler-body rounded-lg shadow-2xl">
      <div className="flex flex-col gap-8">
        {/* Top Section */}
        <div className="flex justify-between items-center text-xs text-gray-700">
          <div>OUTPUT</div>
          <div className="text-sampler-orange">INPUT</div>
          <div>SYNC</div>
          <div>MIDI</div>
          <div>USB</div>
          <div>POWER</div>
        </div>

        {/* Title Section */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">K.O. II</h1>
            <div className="text-sampler-orange text-sm">サンプラー</div>
          </div>
          <div className="text-sm">64 MB SAMPLER COMPOSER</div>
        </div>

        {/* Display */}
        <Display bpm={bpm} />

        {/* Controls */}
        <div className="grid grid-cols-7 gap-4">
          {/* Top Row */}
          <Knob 
            size="lg"
            value={volume}
            onChange={setVolume}
            label="VOLUME"
          />
          <Button variant="dark">SOUND</Button>
          <Button variant="dark">MAIN</Button>
          <Button variant="dark">TEMPO</Button>
          <Button variant="orange">
            <Timer className="w-4 h-4" />
          </Button>
          <Button variant="dark">
            <Music2 className="w-4 h-4" />
          </Button>

          {/* Grid Buttons */}
          <div className="col-span-7 grid grid-cols-6 gap-4">
            {[...Array(12)].map((_, i) => (
              <Button
                key={i}
                variant={i % 3 === 0 ? "light" : "dark"}
                led={true}
                active={i === 1}
              >
                {i + 1}
              </Button>
            ))}
          </div>

          {/* Bottom Controls */}
          <div className="col-span-7 flex justify-between items-center">
            <Button variant="light">
              <Save className="w-4 h-4" />
            </Button>
            <Button variant="orange">
              <CircleDot className="w-4 h-4" />
            </Button>
            <Button 
              variant="gray"
              onClick={handlePlayClick}
            >
              {isPlaying ? (
                <Square className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sampler;
