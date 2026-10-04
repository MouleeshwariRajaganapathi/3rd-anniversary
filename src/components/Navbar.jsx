import React, { useState, useEffect } from 'react';
import { soundFx } from '../utils/soundEffects';

export const Navbar = ({ currentStep, totalSteps, isAudioPlaying, onToggleAudio, onJumpToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { id: 'section-intro', label: '1. Introduction' },
    { id: 'section-balloons', label: '2. Balloon Pop Game' },
    { id: 'section-thoughts', label: '3. Little Thoughts' },
    { id: 'section-photos', label: '4. Memory Album' },
    { id: 'section-story', label: '5. School Love Story' },
    { id: 'section-memories', label: '6. Do You Remember?' },
    { id: 'section-letter', label: '7. Love Letter' },
    { id: 'section-music', label: '8. Our Song' },
    { id: 'section-voice', label: '9. Voice Note' },
    { id: 'section-video', label: '10. Little Movie' },
    { id: 'section-gif', label: '11. Cute Surprise' },
    { id: 'section-countdown', label: '12. Countdown' },
    { id: 'section-cake', label: '13. Make A Wish' },
    { id: 'section-final', label: '14. Grand Finale' },
  ];

  // Close menu if user clicks outside
  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (!e.target.closest('.hud-controls-group')) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener('click', handleDocumentClick);
    }
    return () => document.removeEventListener('click', handleDocumentClick);
  }, [isMenuOpen]);

  const handleSelectSection = (id) => {
    soundFx.playClick();
    setIsMenuOpen(false);
    onJumpToSection(id);
  };

  return (
    <nav className="floating-hud" aria-label="Journey Progress and Controls">
      {/* Progress Pill Indicator */}
      <div className="hud-progress-pill">
        <span>Story Progress:</span>
        <strong style={{ color: '#fff' }}>
          {currentStep} / {totalSteps}
        </strong>
      </div>

      {/* Floating Action Controls */}
      <div className="hud-controls-group" style={{ position: 'relative' }}>
        {/* Audio Toggle Button */}
        <button
          type="button"
          className="hud-circle-btn"
          onClick={() => {
            soundFx.playClick();
            onToggleAudio();
          }}
          aria-label={isAudioPlaying ? "Turn music off" : "Turn music on"}
          title={isAudioPlaying ? "Music ON" : "Music OFF"}
        >
          {isAudioPlaying ? "🎵" : "🔇"}
        </button>

        {/* Chapter Journey Menu Toggle */}
        <button
          type="button"
          className="hud-circle-btn"
          onClick={() => {
            soundFx.playClick();
            setIsMenuOpen(!isMenuOpen);
          }}
          aria-expanded={isMenuOpen}
          aria-label="Open story chapters menu"
          title="Chapters"
        >
          📖
        </button>

        {/* Chapter Dropdown Menu */}
        {isMenuOpen && (
          <div className="hud-menu-dropdown" role="menu">
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--rose-light)', padding: '6px 12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Story Chapters
            </div>
            {sections.map((sec, idx) => (
              <button
                key={sec.id}
                type="button"
                className={`menu-item-btn ${currentStep === idx + 1 ? 'active' : ''}`}
                onClick={() => handleSelectSection(sec.id)}
                role="menuitem"
              >
                <span>{sec.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
