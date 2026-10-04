import React, { useState } from 'react';
import { soundFx } from '../utils/soundEffects';
import { romanticConfetti } from '../utils/confetti';

export const AnniversaryCake = ({ config, onNext }) => {
  // 3 candles for the 3rd anniversary
  const [candles, setCandles] = useState([true, true, true]);
  const [showCelebration, setShowCelebration] = useState(false);
  const cake = config.cake;

  const handleBlowCandle = (index, e) => {
    if (!candles[index]) return;

    soundFx.playBlowOut();

    const rect = e.currentTarget.getBoundingClientRect();
    romanticConfetti.burst(rect.left + rect.width / 2, rect.top, 24);

    const nextCandles = [...candles];
    nextCandles[index] = false;
    setCandles(nextCandles);

    // If all 3 candles are blown out!
    if (nextCandles.every((c) => !c)) {
      setTimeout(() => {
        setShowCelebration(true);
        romanticConfetti.startCelebrationShower(4000);
      }, 350);
    }
  };

  const handleBlowAll = (e) => {
    soundFx.playBlowOut();
    const rect = e.currentTarget.getBoundingClientRect();
    romanticConfetti.burst(rect.left + rect.width / 2, rect.top, 45);
    setCandles([false, false, false]);
    setTimeout(() => {
      setShowCelebration(true);
      romanticConfetti.startCelebrationShower(4500);
    }, 300);
  };

  const handleRelight = () => {
    soundFx.playSparkle();
    setCandles([true, true, true]);
    setShowCelebration(false);
  };

  const allBlown = candles.every((c) => !c);

  return (
    <section id="section-cake" className="section-wrapper" aria-label="Interactive Anniversary Cake">
      <div className="section-header">
        <span className="section-tag">Interactive Celebration</span>
        <h2 className="section-title gradient-text">
          {cake.title}
        </h2>
        <p className="section-subtitle">
          {allBlown ? cake.blownMessage : cake.prompt}
        </p>
      </div>

      <div className="cake-stage">
        {/* Row of 3 Candles for 3rd Anniversary */}
        <div className="candles-row">
          {candles.map((isLit, idx) => (
            <div
              key={idx}
              className="candle-unit"
              onClick={(e) => handleBlowCandle(idx, e)}
              role="button"
              tabIndex={0}
              aria-label={`Candle ${idx + 1} (${isLit ? 'Lit - tap to blow out' : 'Extinguished'})`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleBlowCandle(idx, e);
                }
              }}
            >
              {isLit ? (
                <div className="flame-particle" />
              ) : (
                <div className="smoke-particle" />
              )}
              <div className="candle-stick" />
            </div>
          ))}
        </div>

        {/* 3-Tier Layered Anniversary Cake */}
        <div className="cake-tier-top">
          <span style={{ fontSize: '1.2rem', color: '#591d44', fontWeight: 700 }}>Year 3 ❤️</span>
          <div className="cake-frosting-drips" />
        </div>
        <div className="cake-tier-middle" />
        <div className="cake-tier-base">
          <span style={{ fontSize: '0.9rem', color: 'var(--rose-pale)', letterSpacing: '1px' }}>
            HAPPY ANNIVERSARY
          </span>
        </div>
        <div className="cake-plate" />
      </div>

      {/* Action / Celebration Message */}
      <div style={{ marginTop: '24px', textAlign: 'center' }}>
        {!allBlown ? (
          <button
            type="button"
            className="btn-secondary"
            onClick={handleBlowAll}
            aria-label="Blow out all candles at once"
          >
            💨 Blow Out All 3 Candles
          </button>
        ) : (
          <div style={{ animation: 'fadeInUp 0.5s ease-out' }}>
            <p style={{ color: 'var(--gold-accent)', fontSize: '1.2rem', fontWeight: 600, marginBottom: '8px' }}>
              {cake.blownMessage}
            </p>
            <p style={{ color: 'var(--rose-pale)', fontSize: '0.95rem', marginBottom: '16px' }}>
              {cake.subWishMessage}
            </p>
            <button
              type="button"
              className="btn-secondary"
              onClick={handleRelight}
              style={{ fontSize: '0.85rem', padding: '8px 18px' }}
              aria-label="Relight candles"
            >
              {cake.resetButton}
            </button>
          </div>
        )}
      </div>

      <div className="section-footer-nav">
        <button
          type="button"
          className="btn-romantic btn-pulse"
          onClick={() => {
            soundFx.playSparkle();
            onNext();
          }}
          aria-label="Continue to Final Surprise"
        >
          <span>One Last Thing... ✨</span>
        </button>
      </div>
    </section>
  );
};
