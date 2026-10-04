import React, { useState } from 'react';
import { soundFx } from '../utils/soundEffects';
import { romanticConfetti } from '../utils/confetti';

export const ThoughtCards = ({ config, onNext }) => {
  const [flippedCards, setFlippedCards] = useState(new Set());

  const handleCardClick = (e, id) => {
    soundFx.playSparkle();
    const nextFlipped = new Set(flippedCards);
    if (nextFlipped.has(id)) {
      nextFlipped.delete(id);
    } else {
      nextFlipped.add(id);
      const rect = e.currentTarget.getBoundingClientRect();
      romanticConfetti.burst(rect.left + rect.width / 2, rect.top + rect.height / 2, 18);
    }
    setFlippedCards(nextFlipped);
  };

  return (
    <section id="section-thoughts" className="section-wrapper" aria-label="Mini Surprises">
      <div className="section-header">
        <span className="section-tag">Mini Surprises</span>
        <h2 className="section-title gradient-text">
          {config.thoughtsSection.title}
        </h2>
        <p className="section-subtitle">
          {config.thoughtsSection.subtitle}
        </p>
      </div>

      <div className="thought-cards-grid">
        {config.thoughtsSection.cards.map((card) => {
          const isFlipped = flippedCards.has(card.id);
          return (
            <div
              key={card.id}
              className={`thought-card ${isFlipped ? 'flipped' : ''}`}
              onClick={(e) => handleCardClick(e, card.id)}
              role="button"
              tabIndex={0}
              aria-expanded={isFlipped}
              aria-label={`${card.tag}: ${card.frontHint}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(e, card.id);
                }
              }}
            >
              <div className="thought-card-inner">
                {/* Front of Card */}
                <div className="thought-card-face thought-card-front">
                  <span className="thought-card-tag">{card.tag}</span>
                  <div style={{ fontSize: '2.2rem', margin: '10px 0' }}>💌</div>
                  <h3 className="thought-card-hint">{card.frontHint}</h3>
                  <div className="thought-tap-prompt">
                    <span>Tap to open</span>
                    <span>❤️</span>
                  </div>
                </div>

                {/* Back of Card (Revealed Thought) */}
                <div className="thought-card-face thought-card-back">
                  <span className="thought-card-tag" style={{ color: 'var(--gold-accent)' }}>
                    {card.tag} Revealed ✨
                  </span>
                  <p className="thought-card-text">{card.text}</p>
                  <div style={{ marginTop: '14px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    Tap to close ✕
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
          aria-label="Continue to Our Memories"
        >
          <span>Continue to Our Memories 📸</span>
        </button>
      </div>
    </section>
  );
};
