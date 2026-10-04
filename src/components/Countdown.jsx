import React, { useState, useEffect } from 'react';
import { soundFx } from '../utils/soundEffects';

export const Countdown = ({ config, onNext }) => {
  const [nextCountdown, setNextCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isToday: false,
  });

  const countdownConfig = config.countdown;
  const targetDateStr = config.anniversaryDate;

  useEffect(() => {
    const calculateNextAnniversary = () => {
      try {
        const startDate = new Date(targetDateStr);
        const now = new Date();

        if (isNaN(startDate.getTime())) {
          return;
        }

        const currentYear = now.getFullYear();

        let nextAnniv = new Date(
          currentYear,
          startDate.getMonth(),
          startDate.getDate()
        );

        if (now >= nextAnniv) {
          nextAnniv = new Date(
            currentYear + 1,
            startDate.getMonth(),
            startDate.getDate()
          );
        }

        const remainingToNext =
          nextAnniv.getTime() - now.getTime();

        if (
          remainingToNext <= 86400000 &&
          remainingToNext >= 0
        ) {
          setNextCountdown({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            isToday: true,
          });
        } else {
          const nextSecs = Math.max(
            0,
            Math.floor(remainingToNext / 1000)
          );

          setNextCountdown({
            days: Math.floor(nextSecs / 86400),
            hours: Math.floor(
              (nextSecs % 86400) / 3600
            ),
            minutes: Math.floor(
              (nextSecs % 3600) / 60
            ),
            seconds: nextSecs % 60,
            isToday: false,
          });
        }
      } catch {
        // Safe fallback
      }
    };

    calculateNextAnniversary();

    const interval = setInterval(
      calculateNextAnniversary,
      1000
    );

    return () => clearInterval(interval);
  }, [targetDateStr]);

  return (
    <section
      id="section-countdown"
      className="section-wrapper"
      aria-label="Anniversary Countdown"
    >
      <div className="section-header">
        <span className="section-tag">
          Timeless Love
        </span>

        <h2 className="section-title gradient-text">
          {countdownConfig.title}
        </h2>

        <p className="section-subtitle">
          {countdownConfig.pastMessage}
        </p>
      </div>

      {/* Fixed Three Years Together */}
      <div
        className="glass-card"
        style={{
          padding: '28px',
          maxWidth: '640px',
          width: '100%',
          textAlign: 'center',
          marginBottom: '32px',
        }}
      >
        <h3
          style={{
            fontSize: '1.1rem',
            color: 'var(--rose-light)',
            marginBottom: '10px',
          }}
        >
          Time Spent Cherishing You ❤️
        </h3>

        <p
          style={{
            fontSize: '1.5rem',
            color: '#fff',
            fontWeight: 700,
            margin: 0,
          }}
        >
          3 Years Together ❤️
        </p>

        <p
          style={{
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
            marginTop: '10px',
          }}
        >
          Three beautiful years of memories, love and us. 🥹
        </p>
      </div>

      {/* Countdown to Next Anniversary */}
      <div className="countdown-grid">
        <div className="countdown-box">
          <div className="countdown-digits">
            {nextCountdown.days}
          </div>
          <div className="countdown-label">
            {countdownConfig.daysLabel}
          </div>
        </div>

        <div className="countdown-box">
          <div className="countdown-digits">
            {nextCountdown.hours}
          </div>
          <div className="countdown-label">
            {countdownConfig.hoursLabel}
          </div>
        </div>

        <div className="countdown-box">
          <div className="countdown-digits">
            {nextCountdown.minutes}
          </div>
          <div className="countdown-label">
            {countdownConfig.minutesLabel}
          </div>
        </div>

        <div className="countdown-box">
          <div className="countdown-digits">
            {nextCountdown.seconds}
          </div>
          <div className="countdown-label">
            {countdownConfig.secondsLabel}
          </div>
        </div>
      </div>

      <p
        style={{
          color: 'var(--text-secondary)',
          fontSize: '0.9rem',
          marginTop: '14px',
          textAlign: 'center',
        }}
      >
        "Every single second with you is a gift." ❤️
      </p>

      <div className="section-footer-nav">
        <button
          type="button"
          className="btn-romantic"
          onClick={() => {
            soundFx.playClick();
            onNext();
          }}
          aria-label="Continue to Make A Wish Cake"
        >
          <span>Make A Wish 🎂</span>
        </button>
      </div>
    </section>
  );
};