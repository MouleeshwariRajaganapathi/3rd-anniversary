import React from 'react';

export const VideoMemory = ({ config, onNext }) => {
  const video = config.video;

  const memories = [
    {
      image: '/images/story1.jpg',
      text: 'The senior I kept noticing... ❤️',
    },
    {
      image: '/images/story2.jpg',
      text: 'Those little looks in the corridors... 🏫',
    },
    {
      image: '/images/story3.jpg',
      text: 'One Instagram request changed everything... 📱',
    },
    {
      image: '/images/story4.jpg',
      text: 'From little messages to endless conversations... ❤️',
    },
    {
      image: '/images/story5.jpg',
      text: 'From seeing you from far away to being beside you... 🥹',
    },
    {
      image: '/images/story6.jpg',
      text: 'And somehow, three years later... it is still us. ❤️',
    },
  ];

  return (
    <section
      id="section-video"
      className="section-wrapper"
      aria-label="Our Little Movie"
    >
      <div className="section-header">
        <span className="section-tag">Our Little Movie 🎬</span>

        <h2 className="section-title gradient-text">
          {video.title}
        </h2>

        <p className="section-subtitle">
          Some stories don't need a movie...
          they just need memories. ❤️
        </p>
      </div>

      <div
        style={{
          width: '100%',
          maxWidth: '520px',
          margin: '0 auto',
        }}
      >
        {memories.map((memory, index) => (
          <div
            key={index}
            style={{
              marginBottom: '28px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '18px',
                boxShadow: '0 12px 35px rgba(0,0,0,0.35)',
              }}
            >
              <img
                src={memory.image}
                alt={`Our memory ${index + 1}`}
                loading="lazy"
                style={{
                  width: '100%',
                  display: 'block',
                  aspectRatio: '16 / 10',
                  objectFit: 'cover',
                }}
              />
            </div>

            <p
              style={{
                marginTop: '14px',
                padding: '0 12px',
                color: 'var(--rose-pale)',
                fontSize: '1rem',
                lineHeight: '1.7',
                fontStyle: 'italic',
              }}
            >
              {memory.text}
            </p>
          </div>
        ))}
      </div>

      <div
        style={{
          textAlign: 'center',
          margin: '10px auto 30px',
          maxWidth: '500px',
        }}
      >
        <p
          style={{
            color: 'var(--gold-accent)',
            fontSize: '1.05rem',
            lineHeight: '1.8',
          }}
        >
          “Maybe our story isn't a movie...
          <br />
          but if it was, I'd watch it again and again.” ❤️
        </p>
      </div>

      <div className="section-footer-nav">
        <button
          type="button"
          className="btn-romantic"
          onClick={onNext}
          aria-label="Continue to Sweet Surprise"
        >
          <span>A Cute Surprise 🎁</span>
        </button>
      </div>
    </section>
  );
};