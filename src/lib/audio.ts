
class AudioEngine {
  private context: AudioContext;
  private samples: Map<number, AudioBuffer>;
  private gainNode: GainNode;

  constructor() {
    this.context = new AudioContext();
    this.samples = new Map();
    this.gainNode = this.context.createGain();
    this.gainNode.connect(this.context.destination);
  }

  async loadDemoSample() {
    try {
      const response = await fetch('/demo-kick.wav');
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await this.context.decodeAudioData(arrayBuffer);
      this.samples.set(1, audioBuffer);
    } catch (error) {
      console.error('Error loading demo sample:', error);
    }
  }

  playSample(padNumber: number) {
    const sample = this.samples.get(padNumber);
    if (!sample) return;

    const source = this.context.createBufferSource();
    source.buffer = sample;
    source.connect(this.gainNode);
    source.start(0);
  }

  setVolume(value: number) {
    const normalizedVolume = value / 100;
    this.gainNode.gain.setValueAtTime(normalizedVolume, this.context.currentTime);
  }
}

export const audioEngine = new AudioEngine();
