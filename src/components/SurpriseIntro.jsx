import React from 'react';
import { soundFx } from '../utils/soundEffects';
import { romanticConfetti } from '../utils/confetti';

export const SurpriseIntro = ({ config, onNext }) => {
  const handleClick = (e) => {
    soundFx.playClick();
    const rect = e.currentTarget.getBoundingClientRect();
    romanticConfetti.burst(rect.left + rect.width / 2, rect.top, 25);
    onNext();
  };

  return (
    <section id="section-intro" className="section-wrapper" aria-label="Surprise Introduction">
      <div className="intro-box">
        <h2 className="intro-pretitle">
          {config.intro.preTitle}
        </h2>
        
        <div className="intro-lines-list">
          {config.intro.emotionalLines.map((line, index) => (
            <p key={index} className="intro-line">
              {line}
            </p>
          ))}
        </div>

        <p className="intro-question">
          {config.intro.question}
        </p>

        <button
          type="button"
          className="btn-romantic"
          onClick={handleClick}
          aria-label="Begin Surprise Journey"
        >
          <span>{config.intro.buttonText}</span>
        </button>
      </div>
    </section>
  );
};
