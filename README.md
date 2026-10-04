# Romantic 3rd Anniversary Interactive Surprise Website ❤️✨

A premium, cinematic, highly interactive surprise website built with React, CSS, and modern web APIs. Designed mobile-first to look breathtaking on smartphones (iOS & Android) and desktop screens alike.

---

## 🌟 Key Features

1. **Cinematic Opening Screen**: Glowing, pulsing "OPEN OUR SURPRISE ❤️" button with floating hearts, sparkles, and ambient background orbs.
2. **Surprise Intro**: Emotional prelude with a smooth transition into the experience.
3. **Interactive Balloon Popping Game**: Realistic floating balloons with popping sound effects (Web Audio API), confetti explosions, and secret revealed love messages.
4. **Mini Surprises (Thought Cards)**: 6 interactive 3D flip cards uncovering personal romantic thoughts.
5. **Memory Photo Album**: Polaroid-style photo gallery with hover zoom, lightbox viewer, next/previous buttons, and keyboard controls.
6. **School Love Story (Storybook Timeline)**: Vertical glowing timeline capturing your relationship story from high school days to the present.
7. **Nostalgia Cards ("Do You Remember?")**: 6 interactive 3D flip cards answering tender nostalgic memories.
8. **Digital Greeting Card / Love Letter**: Closed envelope with a wax seal that unlocks an elegant parchment letter.
9. **Music Player ("Our Song")**: Scrubbable audio player with spinning vinyl album animation, volume slider, and mute toggle.
10. **Voice Note Player**: Personal voice recording player with animated dancing sound waveform visualizer.
11. **Cinematic Video Memory**: Video player for personal movie clips with graceful fallback.
12. **Gift Box GIF Surprise**: Unboxable gift with confetti burst revealing a special animated GIF.
13. **Anniversary Clock & Countdown**: Live counter tracking the exact time you have spent in love (Years, Days, Hours, Minutes, Seconds) and counting down to future milestones.
14. **Interactive 3-Candle Anniversary Cake**: Click each candle to blow it out; triggers smoke physics, celebration harp chords, and confetti showers.
15. **Grand Finale Surprise**: Dramatic typography reveal, love declaration, keepsake anniversary certificate, and replay journey button.
16. **Floating Journey HUD**: Chapter progress tracker (`Chapter X / 14`), music toggle, and chapter quick-jump menu.

---

## 📂 File & Folder Structure

```text
anniversary-surprise/
├── index.html                   # HTML entrypoint with typography & viewport
├── vite.config.js               # Vite configuration
├── package.json                 # Dependencies & build scripts
├── README.md                    # Setup and customization guide
│
├── public/                      # Static local assets (Drop your files here!)
│   ├── images/                  # Photo gallery & story chapter pictures
│   │   ├── photo1.jpg to photo8.jpg
│   │   └── story1.jpg to story6.jpg
│   ├── music/
│   │   └── our-song.mp3         # Background anniversary song
│   ├── audio/
│   │   └── voice-note.mp3       # Personal recorded voice note
│   ├── video/
│   │   └── our-story.mp4        # Couple video memory
│   └── gif/
│       └── surprise.gif         # Cute animated GIF surprise
│
└── src/
    ├── main.jsx                 # React root mount
    ├── App.jsx                  # Main journey coordinator & state
    ├── styles.css               # Luxury dark romantic design system
    │
    ├── data/
    │   └── content.js           # ⭐ ONE FILE TO EDIT ALL PERSONAL CONTENT ⭐
    │
    ├── utils/
    │   ├── soundEffects.js      # Built-in Web Audio API synthesizer
    │   └── confetti.js          # Self-contained Canvas confetti & hearts engine
    │
    └── components/
        ├── OpeningScreen.jsx    # Cinematic entry gate
        ├── SurpriseIntro.jsx    # Prelude chapter
        ├── BalloonGame.jsx      # Balloon popping game
        ├── ThoughtCards.jsx     # 6 mini secret thoughts
        ├── PhotoGallery.jsx     # Photo album & lightbox
        ├── LoveStoryTimeline.jsx# School love story chapters
        ├── MemoryCards.jsx      # 3D nostalgia flip cards
        ├── GreetingCard.jsx     # Wax-seal envelope & parchment letter
        ├── MusicPlayer.jsx      # Vinyl disc MP3 audio player
        ├── VoiceNote.jsx        # Waveform voice note player
        ├── VideoMemory.jsx      # Responsive video player
        ├── GifSurprise.jsx      # Interactive gift box
        ├── Countdown.jsx        # Time together & milestone clock
        ├── AnniversaryCake.jsx  # Interactive 3-candle cake
        ├── FinalSurprise.jsx    # Grand finale celebration
        ├── FloatingParticles.jsx# Ambient hearts & particles
        └── Navbar.jsx           # Floating progress HUD & audio toggle
```

---

## 🚀 How to Run the Website Locally

1. Open your terminal in the `anniversary-surprise` directory:
   ```bash
   cd anniversary-surprise
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local URL (usually `http://localhost:3000` or `http://localhost:5173`).

---

## 📦 How to Build for Deployment

To generate an optimized, static production build ready to host on Vercel, Netlify, GitHub Pages, or any web server:

```bash
npm run build
```

This creates a `dist/` directory containing all optimized HTML, CSS, JavaScript, and static media files. You can upload the contents of `dist/` directly to any static web hosting platform!
