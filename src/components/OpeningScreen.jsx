import React, { useState } from 'react';
import { romanticConfetti } from '../utils/confetti';
import { soundFx } from '../utils/soundEffects';

export const OpeningScreen = ({ config, onOpenExperience }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    soundFx.playSparkle();

    // Trigger romantic confetti and sparkles
    romanticConfetti.burst(window.innerWidth / 2, window.innerHeight / 2, 45);

    // Smooth transition
    setTimeout(() => {
      setIsDismissed(true);
      if (onOpenExperience) {
        onOpenExperience();
      }
    }, 700);
  };

  if (isDismissed) return null;

  return (
    <div className={`opening-overlay ${isOpening ? 'dismissed' : ''}`} role="dialog" aria-modal="true" aria-label="Anniversary Surprise Welcome">
      <div className="opening-heart-icon" aria-hidden="true">
        ❤️
      </div>
      <h1 className="opening-title gradient-text">
        {config.opening.greeting}
      </h1>
      <p className="opening-subtext">
        {config.opening.subMessage}
      </p>
      <button
        type="button"
        className="btn-romantic btn-pulse"
        onClick={handleOpen}
        aria-label="Open Anniversary Surprise"
      >
        <span>{config.opening.buttonText}</span>
      </button>
    </div>
  );
};
