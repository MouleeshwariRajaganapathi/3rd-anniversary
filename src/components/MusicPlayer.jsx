import React, { useState, useEffect, useRef } from 'react';

export const MusicPlayer = ({
  config,
  onNext,
  audioRef,
  isPlaying,
  setIsPlaying
}) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);

  const music = config.music;

  const internalAudioRef = useRef(null);
  const effectiveRef = audioRef || internalAudioRef;

  useEffect(() => {
    const audio = effectiveRef.current;

    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const updateDuration = () => {
      setDuration(audio.duration || 0);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [effectiveRef, setIsPlaying]);

  const togglePlay = () => {
    const audio = effectiveRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          console.log('Song could not be played.');
        });
    }
  };

  const handleSeek = (e) => {
    const targetTime = parseFloat(e.target.value);
    const audio = effectiveRef.current;

    if (audio) {
      audio.currentTime = targetTime;
      setCurrentTime(targetTime);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);

    setVolume(newVolume);

    const audio = effectiveRef.current;

    if (audio) {
      audio.volume = newVolume;
      audio.muted = newVolume === 0;
      setIsMuted(newVolume === 0);
    }
  };

  const toggleMute = () => {
    const audio = effectiveRef.current;

    if (!audio) return;

    const nextMuted = !isMuted;

    audio.muted = nextMuted;

    setIsMuted(nextMuted);
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) {
      return '0:00';
    }

    const minutes = Math.floor(seconds / 60);
    const secondsPart = Math.floor(seconds % 60);

    return `${minutes}:${
      secondsPart < 10 ? '0' : ''
    }${secondsPart}`;
  };

  return (
    <section
      id="section-music"
      className="section-wrapper"
      aria-label="Our Song"
    >
      <div className="section-header">
        <span className="section-tag">
          Soundtrack
        </span>

        <h2 className="section-title gradient-text">
          {music.title}
        </h2>

        <p className="section-subtitle">
          {music.note}
        </p>
      </div>

      <div className="music-player-card">

        <div className="vinyl-record-wrapper">
          <div
            className={`vinyl-record ${
              isPlaying ? 'spinning' : ''
            }`}
          >
            <div className="vinyl-center-art">
              <img
                src={music.coverImage}
                alt="Vinyl Album Cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';

                  e.currentTarget.parentElement.style.background =
                    '#e63946';
                }}
              />
            </div>
          </div>
        </div>

        <div className="music-meta">
          <h3 className="music-song-title">
            {music.songTitle}
          </h3>

          <p className="music-artist">
            {music.artist}
          </p>
        </div>

        <audio
          ref={effectiveRef}
          src={music.src}
          preload="metadata"
          loop
          onError={() => {
            console.log(
              'Unable to load song:',
              music.src
            );
          }}
        />

        <div className="music-progress-wrapper">

          <input
            type="range"
            min="0"
            max={duration || 100}
            step="0.1"
            value={currentTime}
            onChange={handleSeek}
            className="music-range-slider"
            aria-label="Audio scrubber"
          />

          <div className="music-time-stamps">
            <span>
              {formatTime(currentTime)}
            </span>

            <span>
              {formatTime(duration)}
            </span>
          </div>

        </div>

        <div className="music-controls-row">

          <button
            type="button"
            className="hud-circle-btn"
            onClick={toggleMute}
            aria-label={
              isMuted
                ? 'Unmute audio'
                : 'Mute audio'
            }
            title={
              isMuted
                ? 'Unmute'
                : 'Mute'
            }
          >
            {isMuted ? '🔇' : '🔊'}
          </button>

          <button
            type="button"
            className="music-play-btn"
            onClick={togglePlay}
            aria-label={
              isPlaying
                ? 'Pause Song'
                : 'Play Song'
            }
          >
            {isPlaying ? '⏸' : '▶'}
          </button>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '90px'
            }}
          >
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="music-range-slider"
              aria-label="Volume slider"
              title="Volume"
            />
          </div>

        </div>
      </div>

      <div className="section-footer-nav">

        <button
          type="button"
          className="btn-romantic"
          onClick={onNext}
          aria-label="Continue to Voice Note"
        >
          <span>
            Voice Note Just For You 🎙️
          </span>
        </button>

      </div>

    </section>
  );
};