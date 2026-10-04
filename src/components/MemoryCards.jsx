import React, { useState } from 'react';
import { soundFx } from '../utils/soundEffects';
import { romanticConfetti } from '../utils/confetti';

export const MemoryCards = ({ config, onNext }) => {
  const [flippedCards, setFlippedCards] = useState(new Set());

  const handleCardClick = (e, id) => {
    soundFx.playSparkle();
    const nextFlipped = new Set(flippedCards);
    if (nextFlipped.has(id)) {
      nextFlipped.delete(id);
    } else {
      nextFlipped.add(id);
      const rect = e.currentTarget.getBoundingClientRect();
      romanticConfetti.burst(rect.left + rect.width / 2, rect.top + rect.height / 2, 20);
    }
    setFlippedCards(nextFlipped);
  };

  return (
    <section id="section-memories" className="section-wrapper" aria-label="Nostalgic Memories">
      <div className="section-header">
        <span className="section-tag">Nostalgia</span>
        <h2 className="section-title gradient-text">
          {config.memoriesSection.title}
        </h2>
        <p className="section-subtitle">
          {config.memoriesSection.subtitle}
        </p>
      </div>

      <div className="memory-cards-grid">
        {config.memoriesSection.cards.map((card) => {
          const isFlipped = flippedCards.has(card.id);
          return (
            <div
              key={card.id}
              className={`memory-card ${isFlipped ? 'flipped' : ''}`}
              onClick={(e) => handleCardClick(e, card.id)}
              role="button"
              tabIndex={0}
              aria-expanded={isFlipped}
              aria-label={card.question}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(e, card.id);
                }
              }}
            >
              <div className="memory-card-inner">
                {/* Front of Memory Card */}
                <div className="memory-card-face memory-card-front">
                  <div style={{ fontSize: '2.4rem', marginBottom: '14px' }}>🥹</div>
                  <h3 className="memory-question">{card.question}</h3>
                  <div style={{ marginTop: '12px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    Tap to remember 💭
                  </div>
                </div>

                {/* Back of Memory Card */}
                <div className="memory-card-face memory-card-back">
                  <span style={{ fontSize: '0.78rem', color: 'var(--gold-accent)', fontWeight: 600, marginBottom: '8px' }}>
                    THAT MOMENT ❤️
                  </span>
                  <p className="memory-answer">{card.answer}</p>
                  <div style={{ marginTop: '14px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    Tap to flip back ✕
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="section-footer-nav">
        <button
          type="button"
          className="btn-romantic"
          onClick={() => {
            soundFx.playClick();
            onNext();
          }}
          aria-label="Continue to Love Letter"
        >
          <span>A Little Letter For You 💌</span>
        </button>
      </div>
    </section>
  );
};
