import React, { useMemo } from 'react';

export const FloatingParticles = () => {
  // Generate stable random particle positions
  const particles = useMemo(() => {
    const items = [];
    const symbols = ['❤️', '✨', '💖', '🌸', '💫'];
    for (let i = 0; i < 22; i++) {
      items.push({
        id: i,
        symbol: symbols[i % symbols.length],
        left: `${(i * 4.5 + Math.random() * 4) % 96}%`,
        duration: `${14 + (i % 8) * 2.5}s`,
        delay: `${(i % 12) * -1.8}s`,
        size: `${0.8 + (i % 5) * 0.25}rem`,
        opacity: 0.18 + (i % 4) * 0.12,
      });
    }
    return items;
  }, []);

  return (
    <div className="ambient-background" aria-hidden="true">
      <div className="ambient-orb ambient-orb-1" />
      <div className="ambient-orb ambient-orb-2" />
      {particles.map((p) => (
        <span
          key={p.id}
          className="floating-heart-particle"
          style={{
            left: p.left,
            animationDuration: p.duration,
            animationDelay: p.delay,
            fontSize: p.size,
            opacity: p.opacity,
          }}
        >
          {p.symbol}
        </span>
      ))}
    </div>
  );
};
