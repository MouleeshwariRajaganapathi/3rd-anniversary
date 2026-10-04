/**
 * Web Audio API Sound Generator
 * Generates romantic sound effects without relying on any external audio files or APIs.
 * Works seamlessly in all modern mobile and desktop browsers.
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.ambientGain = null;
    this.ambientTimer = null;
    this.isAmbientPlaying = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Realistic gentle balloon pop
  playPop() {
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      // Pitch drop for pop feel
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(380, now);
      osc.frequency.exponentialRampToValueAtTime(45, now + 0.12);

      // Fast volume envelope
      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.14);

      // Add soft high sparkle note
      const chime = this.ctx.createOscillator();
      const chimeGain = this.ctx.createGain();
      chime.type = 'sine';
      chime.frequency.setValueAtTime(880, now + 0.04);
      chimeGain.gain.setValueAtTime(0.12, now + 0.04);
      chimeGain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      chime.connect(chimeGain);
      chimeGain.connect(this.ctx.destination);

      chime.start(now + 0.04);
      chime.stop(now + 0.26);
    } catch {
      // AudioContext policy catch
    }
  }

  // Romantic sparkle / card open chime
  playSparkle() {
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6

      notes.forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const time = now + i * 0.07;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, time);

        gain.gain.setValueAtTime(0.15, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.4);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(time);
        osc.stop(time + 0.42);
      });
    } catch {
      // Fail silently
    }
  }

  // Gentle breath / candle blow-out whoosh + harp celebration
  playBlowOut() {
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;

      // Soft air whoosh
      const bufferSize = this.ctx.sampleRate * 0.3;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * 0.15;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, now);
      filter.frequency.linearRampToValueAtTime(100, now + 0.3);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.3, now);
      noiseGain.gain.linearRampToValueAtTime(0.01, now + 0.3);

      whiteNoise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(this.ctx.destination);

      whiteNoise.start(now);
      whiteNoise.stop(now + 0.32);

      // Delayed romantic harp chime
      const celebrationNotes = [440, 554.37, 659.25, 880, 1108.73];
      celebrationNotes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        const noteTime = now + 0.25 + idx * 0.08;

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, noteTime);

        g.gain.setValueAtTime(0.18, noteTime);
        g.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.6);

        osc.connect(g);
        g.connect(this.ctx.destination);

        osc.start(noteTime);
        osc.stop(noteTime + 0.65);
      });
    } catch {
      // Fail silently
    }
  }
// Soft romantic chime for button clicks
  playClick() {
    return;
  }
}

export const soundFx = new SoundEngine();
  