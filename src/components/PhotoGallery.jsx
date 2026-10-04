import React, { useState, useEffect, useCallback } from 'react';
import { soundFx } from '../utils/soundEffects';

export const PhotoGallery = ({ config, onNext }) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);
  const photos = config.photoGallery.photos;

  const openLightbox = (index) => {
    soundFx.playClick();
    setActivePhotoIndex(index);
  };

  const closeLightbox = () => {
    soundFx.playClick();
    setActivePhotoIndex(null);
  };

  const nextPhoto = useCallback(() => {
    if (activePhotoIndex === null) return;
    soundFx.playClick();
    setActivePhotoIndex((prev) => (prev + 1) % photos.length);
  }, [activePhotoIndex, photos.length]);

  const prevPhoto = useCallback(() => {
    if (activePhotoIndex === null) return;
    soundFx.playClick();
    setActivePhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  }, [activePhotoIndex, photos.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex, nextPhoto, prevPhoto]);

  return (
    <section id="section-photos" className="section-wrapper" aria-label="Photo Gallery">
      <div className="section-header">
        <span className="section-tag">Memory Album</span>
        <h2 className="section-title gradient-text">
          {config.photoGallery.title}
        </h2>
        <p className="section-subtitle">
          {config.photoGallery.subtitle}
        </p>
      </div>

      <div className="gallery-grid">
        {photos.map((photo, idx) => (
          <div
            key={photo.id}
            className="photo-card"
            onClick={() => openLightbox(idx)}
            role="button"
            tabIndex={0}
            aria-label={`View photo: ${photo.caption}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(idx);
              }
            }}
          >
            <div className="photo-image-frame">
              <img
                src={photo.src}
                alt={photo.caption || `Memory photo ${photo.id}`}
                className="photo-img"
                loading="lazy"
                onError={(e) => {
                  // Fallback styled placeholder if file not yet uploaded
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement.style.background = 'linear-gradient(135deg, #2b0d36, #14071d)';
                  e.currentTarget.parentElement.innerHTML = `
                    <div style="height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px;text-align:center;">
                      <span style="font-size:2rem;margin-bottom:8px;">📸</span>
                      <strong style="font-size:0.9rem;color:#ff758c;">${photo.caption}</strong>
                      <span style="font-size:0.75rem;color:#ffd166;margin-top:6px;">Add ${photo.src}</span>
                    </div>
                  `;
                }}
              />
              {photo.tag && <span className="photo-overlay-badge">{photo.tag}</span>}
            </div>
            <div className="photo-card-info">
              <h3 className="photo-caption">{photo.caption}</h3>
              {photo.date && <p className="photo-date">{photo.date}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Fullscreen Modal */}
      {activePhotoIndex !== null && (
        <div
          className="lightbox-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded Photo View"
          onClick={closeLightbox}
        >
          <div className="lightbox-content-box" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-btn-close"
              onClick={closeLightbox}
              aria-label="Close Lightbox"
            >
              ✕
            </button>

            <button
              type="button"
              className="lightbox-nav-btn lightbox-nav-prev"
              onClick={prevPhoto}
              aria-label="Previous Photo"
            >
              ‹
            </button>

            <div className="lightbox-img-wrapper">
              <img
                src={photos[activePhotoIndex].src}
                alt={photos[activePhotoIndex].caption}
                className="lightbox-img"
              />
            </div>

            <button
              type="button"
              className="lightbox-nav-btn lightbox-nav-next"
              onClick={nextPhoto}
              aria-label="Next Photo"
            >
              ›
            </button>

            <div className="lightbox-details">
              <p className="lightbox-caption">{photos[activePhotoIndex].caption}</p>
              <p className="lightbox-counter">
                {activePhotoIndex + 1} / {photos.length} — {photos[activePhotoIndex].date}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="section-footer-nav">
        <button
          type="button"
          className="btn-romantic"
          onClick={() => {
            soundFx.playClick();
            onNext();
          }}
          aria-label="Continue to Our School Love Story"
        >
          <span>Our School Love Story 🏫❤️</span>
        </button>
      </div>
    </section>
  );
};
