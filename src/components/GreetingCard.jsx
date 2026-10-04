import React, { useState } from 'react';
import { soundFx } from '../utils/soundEffects';
import { romanticConfetti } from '../utils/confetti';

export const GreetingCard = ({ config, onNext }) => {
  const [isOpen, setIsOpen] = useState(false);
  const letter = config.loveLetter;

  const handleOpenEnvelope = (e) => {
    if (!isOpen) {
      soundFx.playSparkle();
      const rect = e.currentTarget.getBoundingClientRect();
      romanticConfetti.burst(rect.left + rect.width / 2, rect.top + rect.height / 2, 35);
      setIsOpen(true);
    }
  };

  return (
    <section id="section-letter" className="section-wrapper" aria-label="Digital Greeting Card">
      <div className="section-header">
        <span className="section-tag">Anniversary Letter</span>
        <h2 className="section-title gradient-text">
          {letter.title}
        </h2>
        <p className="section-subtitle">
          {isOpen ? "A message straight from my heart" : "Tap the wax seal to unseal my letter"}
        </p>
      </div>

      <div className="letter-section-container">
        {!isOpen ? (
          <div
            className="envelope-wrapper"
            onClick={handleOpenEnvelope}
            role="button"
            tabIndex={0}
            aria-label="Tap wax seal to open anniversary letter"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleOpenEnvelope(e);
              }
            }}
          >
            <div className="envelope-pocket">
              <div className="wax-seal" title="Break the wax seal">
                💌
              </div>
              <p className="envelope-label">
                {letter.envelopeLabel}
              </p>
            </div>
          </div>
        ) : (
          <article className="parchment-letter">
            <div className="parchment-stamp">
              3rd Year Love
            </div>

            <p style={{ fontSize: '0.9rem', color: '#886259', marginBottom: '14px', fontStyle: 'italic' }}>
              {letter.date}
            </p>

            <h3 className="letter-salutation">
              {letter.salutation}
            </h3>

            {letter.paragraphs.map((para, idx) => (
              <p key={idx} className="letter-paragraph">
                {para}
              </p>
            ))}

            <div className="letter-signoff">
              <p>{letter.closing}</p>
              <p style={{ marginTop: '8px', color: '#c1121f' }}>{letter.signature}</p>
            </div>

            <div style={{ marginTop: '36px', textAlign: 'center' }}>
              <button
                type="button"
                className="btn-romantic"
                onClick={() => {
                  soundFx.playClick();
                  onNext();
                }}
                aria-label="Continue to Our Song"
              >
                <span>{letter.continueButton}</span>
              </button>
            </div>
          </article>
        )}
      </div>
    </section>
  );
};
