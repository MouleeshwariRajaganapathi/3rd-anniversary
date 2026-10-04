import React, { useState, useRef, useEffect } from 'react';
import { anniversaryContent } from './data/content';
import { FloatingParticles } from './components/FloatingParticles';
import { Navbar } from './components/Navbar';
import { OpeningScreen } from './components/OpeningScreen';
import { SurpriseIntro } from './components/SurpriseIntro';
import { BalloonGame } from './components/BalloonGame';
import { ThoughtCards } from './components/ThoughtCards';
import { PhotoGallery } from './components/PhotoGallery';
import { LoveStoryTimeline } from './components/LoveStoryTimeline';
import { MemoryCards } from './components/MemoryCards';
import { GreetingCard } from './components/GreetingCard';
import { MusicPlayer } from './components/MusicPlayer';
import { VoiceNote } from './components/VoiceNote';
import { VideoMemory } from './components/VideoMemory';
import { GifSurprise } from './components/GifSurprise';
import { Countdown } from './components/Countdown';
import { AnniversaryCake } from './components/AnniversaryCake';
import { FinalSurprise } from './components/FinalSurprise';

export function App() {
  const [hasOpenedExperience, setHasOpenedExperience] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const audioRef = useRef(null);

  const totalSteps = 14;

  const sectionOrder = [
    'section-intro',
    'section-balloons',
    'section-thoughts',
    'section-photos',
    'section-story',
    'section-memories',
    'section-letter',
    'section-music',
    'section-voice',
    'section-video',
    'section-gif',
    'section-countdown',
    'section-cake',
    'section-final',
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const handleNextSection = (currentIndex) => {
    if (currentIndex < sectionOrder.length - 1) {
      scrollToSection(sectionOrder[currentIndex + 1]);
    }
  };

  // Open the experience
  // Music will NOT start automatically.
  const handleOpenExperience = () => {
    setHasOpenedExperience(true);
    setIsAudioPlaying(false);
  };

  // Toggle music from the Navbar
  const handleToggleAudio = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isAudioPlaying) {
      audio.pause();
      setIsAudioPlaying(false);
    } else {
      audio
        .play()
        .then(() => {
          setIsAudioPlaying(true);
        })
        .catch(() => {
          console.log('Song could not be played.');
        });
    }
  };

  // Replay from beginning
  const handleReplay = () => {
    const audio = audioRef.current;

    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    setIsAudioPlaying(false);

    scrollToSection('section-intro');
    setCurrentStep(1);
  };

  // Track active section
  useEffect(() => {
    if (!hasOpenedExperience) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionOrder.indexOf(
              entry.target.id
            );

            if (index !== -1) {
              setCurrentStep(index + 1);
            }
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    sectionOrder.forEach((id) => {
      const el = document.getElementById(id);

      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [hasOpenedExperience]);

  return (
    <div className="anniversary-app">

      <FloatingParticles />

      <OpeningScreen
        config={anniversaryContent}
        onOpenExperience={handleOpenExperience}
      />

      {hasOpenedExperience && (
        <Navbar
          currentStep={currentStep}
          totalSteps={totalSteps}
          isAudioPlaying={isAudioPlaying}
          onToggleAudio={handleToggleAudio}
          onJumpToSection={scrollToSection}
        />
      )}

      <main
        id="main-content"
        style={{
          opacity: hasOpenedExperience ? 1 : 0,
          transition: 'opacity 0.6s ease',
        }}
      >

        <SurpriseIntro
          config={anniversaryContent}
          onNext={() => handleNextSection(0)}
        />

        <BalloonGame
          config={anniversaryContent}
          onNext={() => handleNextSection(1)}
        />

        <ThoughtCards
          config={anniversaryContent}
          onNext={() => handleNextSection(2)}
        />

        <PhotoGallery
          config={anniversaryContent}
          onNext={() => handleNextSection(3)}
        />

        <LoveStoryTimeline
          config={anniversaryContent}
          onNext={() => handleNextSection(4)}
        />

        <MemoryCards
          config={anniversaryContent}
          onNext={() => handleNextSection(5)}
        />

        <GreetingCard
          config={anniversaryContent}
          onNext={() => handleNextSection(6)}
        />

        <MusicPlayer
          config={anniversaryContent}
          onNext={() => handleNextSection(7)}
          audioRef={audioRef}
          isPlaying={isAudioPlaying}
          setIsPlaying={setIsAudioPlaying}
        />

        <VoiceNote
          config={anniversaryContent}
          onNext={() => handleNextSection(8)}
        />

        <VideoMemory
          config={anniversaryContent}
          onNext={() => handleNextSection(9)}
        />

        <GifSurprise
          config={anniversaryContent}
          onNext={() => handleNextSection(10)}
        />

        <Countdown
          config={anniversaryContent}
          onNext={() => handleNextSection(11)}
        />

        <AnniversaryCake
          config={anniversaryContent}
          onNext={() => handleNextSection(12)}
        />

        <FinalSurprise
          config={anniversaryContent}
          onReplay={handleReplay}
        />

      </main>
    </div>
  );
}

export default App;
