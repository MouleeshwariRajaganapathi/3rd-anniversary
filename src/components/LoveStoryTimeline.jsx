import React from 'react';
import { soundFx } from '../utils/soundEffects';

export const LoveStoryTimeline = ({ config, onNext }) => {
  const chapters = config.storyTimeline.chapters;

  return (
    <section id="section-story" className="section-wrapper" aria-label="Our School Love Story">
      <div className="section-header">
        <span className="section-tag">Cinematic Journey</span>
        <h2 className="section-title gradient-text">
          {config.storyTimeline.title}
        </h2>
        <p className="section-subtitle">
          {config.storyTimeline.subtitle}
        </p>
      </div>

      <div className="timeline-container">
        {/* Central glowing vertical timeline rail */}
        <div className="timeline-line" aria-hidden="true" />

        {chapters.map((ch, idx) => (
          <div key={idx} className="timeline-node">
            {/* Glowing Heart Marker Node */}
            <div className="timeline-heart-marker" aria-hidden="true">
              ❤️
            </div>

            {/* Storybook Chapter Card */}
            <article className="timeline-card">
              <header className="timeline-chapter-badge">
                <span className="timeline-badge-pill">Chapter {ch.number}</span>
                {ch.date && <time className="timeline-date">{ch.date}</time>}
              </header>

              <h3 className="timeline-chapter-title gradient-text">
                {ch.title}
              </h3>

              {ch.quote && (
                <p className="timeline-quote">
                  "{ch.quote}"
                </p>
              )}

              {ch.image && (
                <div className="timeline-image-box">
                  <img
                    src={ch.image}
                    alt={ch.caption || ch.title}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement.style.background = 'linear-gradient(135deg, #320c42, #180625)';
                      e.currentTarget.parentElement.innerHTML = `
                        <div style="height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:12px;text-align:center;">
                          <span style="font-size:1.8rem;margin-bottom:6px;">🏫</span>
                          <span style="font-size:0.85rem;color:#ffd166;">Add ${ch.image}</span>
                        </div>
                      `;
                    }}
                  />
                </div>
              )}

              <p className="timeline-text">
                {ch.text}
              </p>

              {ch.caption && (
                <div style={{ marginTop: '10px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  📍 {ch.caption}
                </div>
              )}
            </article>
          </div>
        ))}
      </div>

      <div className="section-footer-nav">
        <button
          type="button"
          className="btn-romantic"
          onClick={() => {
            soundFx.playClick();
            onNext();
          }}
          aria-label="Continue to Nostalgia Cards"
        >
          <span>Do You Remember? 🥹</span>
        </button>
      </div>
    </section>
  );
};
