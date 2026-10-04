import React from 'react';

export const GifSurprise = ({ onNext }) => {
  return (
    <section
      id="section-gif"
      className="section-wrapper"
      aria-label="Sweet Surprise"
    >
      <div className="section-header">
        <span className="section-tag">Sweet Moment</span>

        <h2 className="section-title gradient-text">
          A Sweet Surprise For You 🎁
        </h2>

        <p className="section-subtitle">
          Just a little something from my heart ❤️
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <div
          className="gif-reveal-card"
          style={{
            maxWidth: '520px',
            width: '100%',
            overflow: 'hidden',
          }}
        >
          <img
            src="/images/sweet-surprise.jpg"
            alt="Our Sweet Surprise"
            loading="lazy"
            style={{
              width: '100%',
              display: 'block',
              objectFit: 'cover',
            }}
          />

          <div
            style={{
              padding: '22px 20px',
              background: 'rgba(20, 8, 30, 0.95)',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                color: 'var(--rose-pale)',
                fontSize: '1rem',
                lineHeight: '1.7',
                margin: '0 0 8px',
              }}
            >
              You are my favourite part of every day. ❤️
            </p>

            <p
              style={{
                color: 'var(--rose-pale)',
                fontSize: '1rem',
                lineHeight: '1.7',
                margin: '0 0 8px',
              }}
            >
              Thank you for being with me through everything. 🥹
            </p>

            <p
              style={{
                color: 'var(--rose-pale)',
                fontSize: '1rem',
                lineHeight: '1.7',
                margin: '0 0 8px',
              }}
            >
              Three years of memories, fights, smiles and love. ❤️
            </p>

            <p
              style={{
                color: 'var(--gold-accent)',
                fontSize: '1.05rem',
                fontWeight: 600,
                lineHeight: '1.7',
                margin: 0,
              }}
            >
              And I would choose you all over again. Forever. ❤️
            </p>
          </div>
        </div>
      </div>

      <div className="section-footer-nav">
        <button
          type="button"
          className="btn-romantic"
          onClick={onNext}
          aria-label="Continue to Anniversary Countdown"
        >
          <span>Until Our Next Chapter ❤️</span>
        </button>
      </div>
    </section>
  );
};