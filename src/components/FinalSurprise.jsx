import React, { useState } from 'react';
import { soundFx } from '../utils/soundEffects';
import { romanticConfetti } from '../utils/confetti';

export const FinalSurprise = ({ config, onReplay }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const finale = config.finalSurprise;
  const couple = config.couple;

  const handleOpenFinalSurprise = (e) => {
    soundFx.playBlowOut();
    romanticConfetti.burst(window.innerWidth / 2, window.innerHeight / 2, 70);
    romanticConfetti.startCelebrationShower(8000);
    setIsRevealed(true);
  };

  const handleReplayClick = () => {
    soundFx.playClick();
    onReplay();
  };

  return (
    <section id="section-final" className="section-wrapper" aria-label="Grand Finale">
      {!isRevealed ? (
        <div className="intro-box">
          <span className="section-tag">Grand Finale</span>
          <h2 className="intro-pretitle" style={{ fontSize: '2rem' }}>
            {finale.preTitle}
          </h2>
          <p className="intro-line" style={{ fontSize: '1.4rem', margin: '20px 0 32px 0' }}>
            {finale.emotionalText}
          </p>
          <button
            type="button"
            className="btn-romantic btn-pulse"
            onClick={handleOpenFinalSurprise}
            aria-label="Open the final surprise"
          >
            <span>{finale.buttonText}</span>
          </button>
        </div>
      ) : (
        <div className="finale-box" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
          <div style={{ fontSize: '4rem', marginBottom: '16px', animation: 'heartBeat 1.5s infinite' }} aria-hidden="true">
            💖
          </div>

          <h1 className="finale-headline gradient-text">
            {finale.headline}
          </h1>

          <div className="finale-phrases">
            <p style={{ fontStyle: 'italic', marginBottom: '8px' }}>
              "{finale.phrase1}"
            </p>
            <p style={{ fontWeight: 600, color: 'var(--gold-accent)' }}>
              "{finale.phrase2}"
            </p>
          </div>

          <div className="finale-love-decl">
            {finale.loveDeclaration}
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto 28px auto', lineHeight: 1.7 }}>
            {finale.promise}
          </p>

          {/* Keepsake Certificate */}
          <div className="keepsake-certificate">
            <span style={{ fontSize: '0.8rem', color: 'var(--gold-accent)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>
              {finale.certificateTitle}
            </span>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.7rem', color: '#fff', margin: '10px 0' }}>
              {couple.displayTitle}
            </h3>
            <p style={{ color: 'var(--rose-pale)', fontSize: '0.9rem' }}>
              Celebrating 3 Years of Beautiful Love, Laughter & Endless Memories.
            </p>
          </div>

          <div style={{ marginTop: '36px' }}>
            <button
              type="button"
              className="btn-secondary"
              onClick={handleReplayClick}
              aria-label="Relive surprise from beginning"
            >
              <span>{finale.replayButton}</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
