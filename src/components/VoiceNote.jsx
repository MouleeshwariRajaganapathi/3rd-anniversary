import React, { useState, useRef, useEffect } from 'react';
import { soundFx } from '../utils/soundEffects';

export const VoiceNote = ({ config, onNext }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const voice = config.voiceNote;

  // Waveform bars with randomized height presets
  const barHeights = [18, 32, 45, 24, 52, 38, 20, 48, 56, 30, 42, 28, 50, 36, 22, 44, 54, 32, 26, 40];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration || 0);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    soundFx.playClick();
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Autoplay catch
      });
    }
  };

  const handleSeek = (e) => {
    const target = parseFloat(e.target.value);
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = target;
      setCurrentTime(target);
    }
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <section id="section-voice" className="section-wrapper" aria-label="Voice Note">
      <div className="section-header">
        <span className="section-tag">Audio Whisper</span>
        <h2 className="section-title gradient-text">
          {voice.title}
        </h2>
        <p className="section-subtitle">
          {voice.subtitle}
        </p>
      </div>

      <div className="voice-note-card">
        <div style={{ fontSize: '3rem', color: 'var(--rose-primary)', marginBottom: '10px' }}>
          🎙️
        </div>

        <p style={{ textAlign: 'center', color: 'var(--rose-pale)', fontSize: '0.96rem', maxWidth: '420px', lineHeight: 1.6 }}>
          {voice.noteMessage}
        </p>

        {/* Audio Element */}
        <audio ref={audioRef} src={voice.src} preload="metadata" />

        {/* Waveform Visualization Bars */}
        <div className={`waveform-display ${isPlaying ? 'playing' : ''}`} aria-hidden="true">
          {barHeights.map((h, i) => (
            <div
              key={i}
              className="waveform-bar"
              style={{
                height: `${h}px`,
                animationDelay: `${(i % 5) * 0.18}s`,
              }}
            />
          ))}
        </div>

        {/* Progress Slider */}
        <div className="music-progress-wrapper">
          <input
            type="range"
            min="0"
            max={duration || 100}
            step="0.1"
            value={currentTime}
            onChange={handleSeek}
            className="music-range-slider"
            aria-label="Voice note scrubber"
          />
          <div className="music-time-stamps">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration) !== '0:00' ? formatTime(duration) : voice.durationPlaceholder}</span>
          </div>
        </div>

        {/* Play/Pause Button */}
        <button
          type="button"
          className="music-play-btn"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause Voice Note" : "Play Voice Note"}
        >
          {isPlaying ? "⏸" : "▶"}
        </button>
      </div>

      <div className="section-footer-nav">
        <button
          type="button"
          className="btn-romantic"
          onClick={() => {
            soundFx.playClick();
            onNext();
          }}
          aria-label="Continue to Video Memory"
        >
          <span>Our Little Movie 🎬</span>
        </button>
      </div>
    </section>
  );
};
