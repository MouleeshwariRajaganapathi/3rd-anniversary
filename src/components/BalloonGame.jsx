import React, { useState } from 'react';
import { soundFx } from '../utils/soundEffects';
import { romanticConfetti } from '../utils/confetti';

export const BalloonGame = ({ config, onNext }) => {
  const [poppedIds, setPoppedIds] = useState(new Set());
  const [activeMessage, setActiveMessage] = useState(null);

  const balloons = config.balloonGame.balloons;
  const isAllPopped = poppedIds.size === balloons.length;

  const handlePop = (e, balloon) => {
    if (poppedIds.has(balloon.id)) return;

    soundFx.playPop();

    // Trigger confetti from balloon position
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    romanticConfetti.burst(x, y, 32);

    const nextPopped = new Set(poppedIds);
    nextPopped.add(balloon.id);
    setPoppedIds(nextPopped);
    setActiveMessage(balloon.message);

    // If that was the last balloon, play sparkle and extra confetti shower!
    if (nextPopped.size === balloons.length) {
      setTimeout(() => {
        soundFx.playSparkle();
        romanticConfetti.startCelebrationShower(3000);
      }, 300);
    }
  };

  const handleReveal = () => {
    soundFx.playSparkle();
    romanticConfetti.burst(window.innerWidth / 2, window.innerHeight / 2, 40);
    onNext();
  };

  return (
    <section id="section-balloons" className="section-wrapper" aria-label="Balloon Popping Game">
      <div className="section-header">
        <span className="section-tag">Interactive Game</span>
        <h2 className="section-title gradient-text">
          {config.balloonGame.title}
        </h2>
        <p className="section-subtitle">
          {config.balloonGame.instruction}
        </p>
      </div>

      <div className="balloon-game-container">
        {/* Progress Tracker */}
        <div className="balloon-progress-bar">
          <span>🎈 Balloons Popped:</span>
          <strong style={{ color: 'var(--rose-light)' }}>
            {poppedIds.size} / {balloons.length}
          </strong>
        </div>

        {/* Floating Active Message Banner */}
        {activeMessage && (
          <div className="balloon-popped-badge" role="status" aria-live="polite">
            <p className="balloon-popped-message">{activeMessage}</p>
          </div>
        )}

        {/* Balloons Arena */}
        <div className="balloons-arena">
          {balloons.map((b) => {
            const isPopped = poppedIds.has(b.id);
            return (
              <div
                key={b.id}
                className="balloon-wrapper"
                onClick={(e) => handlePop(e, b)}
                role="button"
                tabIndex={0}
                aria-label={`Romantic Balloon ${b.id}${isPopped ? ' (Popped)' : ' - Tap to pop'}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handlePop(e, b);
                  }
                }}
              >
                {!isPopped ? (
                  <>
                    <div
                      className="balloon-body"
                      style={{
                        backgroundColor: b.color,
                        boxShadow: `0 12px 28px ${b.color}66, inset -10px -10px 20px rgba(0,0,0,0.35), inset 10px 10px 20px rgba(255,255,255,0.4)`,
                      }}
                    >
                      <div className="balloon-highlight" />
                      <span style={{ fontSize: '1.4rem' }}>❤️</span>
                    </div>
                    <div className="balloon-knot" style={{ backgroundColor: b.color }} />
                    <div className="balloon-string" />
                  </>
                ) : (
                  <div
                    style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      border: '2px dashed rgba(255,255,255,0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--gold-accent)',
                      fontSize: '1.2rem',
                    }}
                  >
                    ✨
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Completion Action */}
        {isAllPopped && (
          <div className="balloon-completed-panel">
            <button
              type="button"
              className="btn-romantic btn-pulse"
              onClick={handleReveal}
              aria-label="Reveal Next Surprise"
            >
              <span>{config.balloonGame.revealButtonText}</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
