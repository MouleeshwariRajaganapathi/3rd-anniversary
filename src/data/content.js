/**
 * ====================================================================
 * PERSONAL CONTENT CONFIGURATION FILE
 * ====================================================================
 * 
 * Edit this file to easily customize all names, dates, photos,
 * messages, stories, songs, and memories for your anniversary surprise!
 * 
 * You DO NOT need to touch any JSX or CSS code.
 * Simply edit the text and file paths below.
 * ====================================================================
 */

export const anniversaryContent = {
  // ------------------------------------------------------------------
  // 1. COUPLE INFORMATION
  // ------------------------------------------------------------------
  // CHANGE YOUR NAMES HERE
  couple: {
    partnerName: "Mama",        // What you call your partner (e.g., "Sarah", "Alex", "Baby")
    yourName: "Yours Forever",     // Your name or sign-off
    displayTitle: "DK & Mouliii", // Both names displayed together
    anniversaryYears: 3,           // Anniversary year number
  },

  // ------------------------------------------------------------------
  // 2. ANNIVERSARY DATE
  // ------------------------------------------------------------------
  // FORMAT: YYYY-MM-DD
  // Change this to the exact date you became a couple!
  anniversaryDate: "2023-10-15T00:00:00",

  // ------------------------------------------------------------------
  // 3. OPENING SCREEN
  // ------------------------------------------------------------------
  opening: {
    greeting: "Ennagaaa... ❤️",
    subMessage: "I made something special for us.",
    buttonText: "OPEN OUR SURPRISE ❤️",
  },

  // ------------------------------------------------------------------
  // 4. SURPRISE INTRO
  // ------------------------------------------------------------------
  intro: {
    preTitle: "Before we begin...",
    emotionalLines: [
      "Three years.",
      "So many memories.",
      "So many little moments.",
      "And one beautiful story that is still being written..."
    ],
    question: "Are you ready?",
    buttonText: "YES, SHOW ME ❤️",
  },

  // ------------------------------------------------------------------
  // 5. BALLOON POPPING GAME
  // ------------------------------------------------------------------
  balloonGame: {
    title: "Pop the balloons 🎈",
    instruction: "Pop them all... something is waiting for you.",
    balloons: [
      { id: 1, color: "#ff4d6d", message: "I still remember that smile ❤️" },
      { id: 2, color: "#ff758c", message: "You are my favourite person." },
      { id: 3, color: "#c77dff", message: "One memory I can never forget..." },
      { id: 4, color: "#f72585", message: "I would choose you again." },
      { id: 5, color: "#ff9e00", message: "My favourite place is next to you ✨" },
      { id: 6, color: "#7209b7", message: "You still give me butterflies 🦋" },
    ],
    revealButtonText: "REVEAL THE SURPRISE ✨",
  },

  // ------------------------------------------------------------------
  // 6. MINI SURPRISES / THOUGHT CARDS
  // ------------------------------------------------------------------
  // EDIT YOUR 6 THOUGHTS HERE
  thoughtsSection: {
    title: "Little Things I Want You To Know ❤️",
    subtitle: "Tap each card to reveal a secret thought from my heart",
    cards: [
      {
        id: 1,
        tag: "Thought #1",
        frontHint: "About your laughter...",
        text: "The way your eyes crinkle when you genuinely laugh is the sweetest sound in the universe. It can turn my worst days into pure sunshine in an instant."
      },
      {
        id: 2,
        tag: "Thought #2",
        frontHint: "About our safe place...",
        text: "With you, I never have to wear a mask. You are my calm in every storm, my comfort zone, and the place where my soul truly rests."
      },
      {
        id: 3,
        tag: "Thought #3",
        frontHint: "About late-night talks...",
        text: "Those 2 AM conversations when the world falls asleep and it's just the two of us sharing dreams, silliness, and whispered secrets. I treasure every single second."
      },
      {
        id: 4,
        tag: "Thought #4",
        frontHint: "About your kindness...",
        text: "Your gentle heart, your empathy, and the quiet compassion you show every day inspire me to be a better person. You are truly rare."
      },
      {
        id: 5,
        tag: "Thought #5",
        frontHint: "About our little quirks...",
        text: "Our inside jokes that nobody else understands, the way we know what the other is thinking with just a glance, and our warm hugs that make everything feel right."
      },
      {
        id: 6,
        tag: "Thought #6",
        frontHint: "About my promise...",
        text: "If I was given a thousand lifetimes, in every single universe, I would search for you and fall in love with you all over again without a second thought."
      },
    ]
  },

  // ------------------------------------------------------------------
  // 7. PHOTO GALLERY
  // ------------------------------------------------------------------
  // ADD YOUR PHOTOS HERE:
  // Put your images inside /public/images/ with filenames photo1.jpg to photo8.jpg
  // You can also change the captions and dates below:
  photoGallery: {
    title: "Our Memories 📸",
    subtitle: "A collection of moments frozen in time, forever special",
    photos: [
      {
        id: 1,
        src: "/images/photo1.jpg",
        caption: "Where our journey truly began",
        date: "October 2023",
        tag: "The Beginning"
      },
      {
        id: 2,
        src: "/images/photo2.jpg",
        caption: "Sunset walks and quiet conversations",
        date: "December 2023",
        tag: "Golden Hour"
      },
      {
        id: 3,
        src: "/images/photo3.jpg",
        caption: "That rainy day we couldn't stop laughing",
        date: "March 2024",
        tag: "Sweet Chaos"
      },
      {
        id: 4,
        src: "/images/photo4.jpg",
        caption: "Our first road trip adventures together",
        date: "July 2024",
        tag: "Adventure"
      },
      {
        id: 5,
        src: "/images/photo5.jpg",
        caption: "City lights and your hand in mine",
        date: "November 2024",
        tag: "City Lights"
      },
      {
        id: 6,
        src: "/images/photo6.jpg",
        caption: "A smile that melts my heart every single time",
        date: "February 2025",
        tag: "Pure Joy"
      },
      {
        id: 7,
        src: "/images/photo7.jpg",
        caption: "Lazy cozy Sunday mornings together",
        date: "June 2025",
        tag: "Cozy Days"
      },
      {
        id: 8,
        src: "/images/photo8.jpg",
        caption: "Celebrating three years of unconditional love",
        date: "Today & Forever",
        tag: "Anniversary"
      },
    ]
  },

  // ------------------------------------------------------------------
  // 8. OUR SCHOOL LOVE STORY (Cinematic Storybook Timeline)
  // ------------------------------------------------------------------
  // EDIT YOUR SCHOOL STORY CHAPTERS HERE:
  // Put your images inside /public/images/story1.jpg to story6.jpg
  // ------------------------------------------------------------------
// 8. OUR SCHOOL LOVE STORY ❤️
// ------------------------------------------------------------------
storyTimeline: {
  title: "Our School Love Story 🏫❤️",

  subtitle:
    "A junior who kept looking at her senior... until one Instagram request changed everything.",

  chapters: [
    {
      number: "01",
      title: "The Senior I Kept Noticing",
      date: "Back in School",
      quote: "You were my senior. I was just the junior who kept looking at you. ❤️",

      text:
        "You were my senior, and I was your junior. I don't even remember exactly when I first started noticing you. But slowly, I started looking for you without even realizing it. Whenever I saw you, somehow my eyes would automatically find you.",

      image: "/images/story1.jpg",
      caption: "The senior I couldn't stop noticing ❤️"
    },

    {
      number: "02",
      title: "Those Little Looks",
      date: "Corridors & Prayer Time",
      quote: "Some stories begin without a single word.",

      text:
        "For a long time, nothing really happened between us. I would just look at you whenever I got the chance. In the school corridors, during prayer time, while passing by... those small moments became a secret part of my everyday school life. I don't know if you noticed me back then, but I definitely noticed you.",

      image: "/images/story2.jpg",
      caption: "Corridors, prayer time and those little looks 👀❤️"
    },

    {
      number: "03",
      title: "The Instagram Request",
      date: "When You Were in 12th",
      quote: "One small request. One big beginning. ❤️",

      text:
        "Then came the moment when you were studying in 12th. I finally gathered enough courage and sent you an Instagram request. It looked like just one simple request on a screen... but I never knew that little click would become the beginning of our story.",

      image: "/images/story3.jpg",
      caption: "The request that changed our story 📱❤️"
    },

    {
      number: "04",
      title: "From Messages to Calls",
      date: "The Beginning of Us",
      quote: "First messages, then calls... and slowly, you became my favourite person.",

      text:
        "After that, we started talking. At first it was just small conversations. Then came those little video calls that somehow never felt long enough. Slowly, talking to you became a part of my everyday life. Without realizing it, the person I used to only look at from a distance had become someone I could actually talk to.",

      image: "/images/story4.jpg",
      caption: "From messages to little video calls 📱🥹"
    },

    {
      number: "05",
      title: "Our First Meetups",
      date: "Making Memories Together",
      quote: "From seeing you from far away to finally being beside you.",

      text:
        "Then came our meetups. Seeing each other was no longer just a moment in a school corridor. We started creating our own memories together. Every meeting, every conversation, every silly moment slowly became another little chapter in our story.",

      image: "/images/story5.jpg",
      caption: "The moments we finally got to share together ❤️"
    },

    {
      number: "06",
      title: "Three Years of Us",
      date: "Three Years & Counting",
      quote: "Not a perfect story. Just our story. ❤️",

      text:
        "And now, almost three years have passed. In between, we have had our little fights, misunderstandings, lots of memories, happy moments, emotional days, family scoldings and countless reasons to smile. It was never a perfect journey, but every little moment made our relationship what it is today. The junior who once secretly looked at her senior now gets to call that person her love. And somehow, that is my favourite story of all.",

      image: "/images/story6.jpg",
      caption: "Three years of memories, love, fights and us ❤️"
    }
  ]
},

  // ------------------------------------------------------------------
  // 9. MEMORY CARDS (Do You Remember?)
  // ------------------------------------------------------------------
  // EDIT YOUR 6 NOSTALGIA QUESTIONS & ANSWERS HERE
  memoriesSection: {
    title: "Do You Remember? 🥹",
    subtitle: "Click each card to flip back in time",
    cards: [
      {
        id: 1,
        question: "Do you remember our first conversation?",
        answer: "A simple insta convo start as anna with lot a confusions "
      },
      {
        id: 2,
        question: "Do you remember that day?",
        answer: "That first convo on school after a lunch break appo paakkanume thiru thiru mullichaa daa"
      },
      {
        id: 3,
        question: "Do you remember the moment?",
        answer:" padikka solli veliya anuppana sight adichittu irruthom aana athum alaga tha irrunthatnu laa "
      },
      {
        id: 4,
        question: "Do you remember our first photo?",
        answer:" first time veliyaa ponna appo tha namba first photo eduthom annaikku namakku time ehh illaa"
      },
      {
        id: 5,
        question: "Do you remember little late night fights ?",
        answer: " avlo sanda pottu irrukken even 2 mani varaikkum kooda sanda pottu irrukkom ana antha sandaikku aprm vara oru samathanathoda senthu vara convo romba nalla irukkum"
      },
      {
        id: 6,
        question: "Do you remember our first bike ride?",
        answer: " konja thooram tha ponnom unna katti pudichittu athu oru mathiri nalla irrunthathu"
      },
    ]
  },

  // ------------------------------------------------------------------
  // 10. GREETING CARD / LOVE LETTER
  // ------------------------------------------------------------------
  // WRITE YOUR PERSONAL LONG-FORM LETTER HERE
  loveLetter: {
    title: "A Little Letter For You 💌",
    envelopeLabel: "To Endless happiness",
    date: "Celebrating Our 3rd Anniversary",
    salutation: "Mama...,",
    paragraphs: [
      "Three years ago, you walked into my world, and quietly, without making a sound, turned ordinary life into something extraordinary.",
      "Looking back at everything we've shared—from our shy school beginnings to every late-night conversation, every tear wiped away, and every milestone celebrated—I realize how deeply blessed I am to hold your hand.",
      "Thank you for being my anchor when life feels overwhelming. Thank you for your warm hugs, your gentle patience, and the way you can make me smile even on the darkest days.",
      "With you, love isn't complicated; it feels like coming home after a long journey. Every single day with you is my new favorite day.",
      "Happy 3rd Anniversary, my love. Here is to the memories behind us, the love between us, and the endless beautiful chapters still ahead."
    ],
    closing: "Forever and always yours,",
    signature: "With all my heart ❤️",
    continueButton: "CONTINUE OUR JOURNEY ❤️"
  },

  // ------------------------------------------------------------------
  // 11. OUR SONG / MUSIC PLAYER
  // ------------------------------------------------------------------
  // Put your MP3 file at: /public/music/our-song.mp3
  music: {
    title: "Our Special Song 🎵",
    songTitle: "For my Dear ",
    artist: "Dedicated to our love story",
    src: "/music/our-song.mp3",
    coverImage: "/images/photo1.jpg",
    note: "A melody that brings back every sweet memory..."
  },

  // ------------------------------------------------------------------
  // 12. VOICE NOTE
  // ------------------------------------------------------------------
  // Put your voice recording at: /public/audio/voice-note.mp3
  voiceNote: {
    title: "A Voice Note Just For You 🎙️",
    subtitle: "Listen when you're ready...",
    src: "/audio/voice-note.mp3",
    noteMessage: "Press play to hear a little whisper from my heart straight to your ears.",
    durationPlaceholder: "0:45"
  },

  // ------------------------------------------------------------------
  // 13. VIDEO MEMORY (Optional)
  // ------------------------------------------------------------------
  // Put your video at: /public/video/our-story.mp4
  video: {
    title: "Our Little Movie 🎬",
    subtitle: "A short highlight of our laughter and memories",
    src: "/video/our-story.mp4",
    poster: "/images/photo4.jpg",
    caption: "Every second captured is a reminder of how lucky I am to share this life with you."
  },

  // ------------------------------------------------------------------
  // 14. GIF SURPRISE (Optional)
  // ------------------------------------------------------------------
  // Put your GIF at: /public/gif/surprise.gif
  gif: {
    title: "A Sweet Surprise For You 🎁",
    subtitle: "Untie the ribbon to unwrap a special smile",
    src: "/gif/surprise.gif",
    boxPrompt: "Tap the gift box to open! 🎀",
    caption: "Sending you infinite warm cuddles, soft forehead kisses, and all my love!"
  },

  // ------------------------------------------------------------------
  // 15. COUNTDOWN / ANNIVERSARY CLOCK
  // ------------------------------------------------------------------
  countdown: {
    title: "Until Our Next Chapter ❤️",
    pastMessage: "Three wonderful years together... and a brand new chapter has begun!",
    futureMessage: "Counting down every second until we celebrate our special day!",
    yearsLabel: "Years",
    daysLabel: "Days",
    hoursLabel: "Hours",
    minutesLabel: "Minutes",
    secondsLabel: "Seconds",
  },

  // ------------------------------------------------------------------
  // 16. INTERACTIVE ANNIVERSARY CAKE
  // ------------------------------------------------------------------
  cake: {
    title: "Make A Wish 🎂",
    subtitle: "Blow out the candles on our 3rd anniversary cake!",
    prompt: "Tap the candles to blow them out ✨",
    blownMessage: "Make a wish... ❤️ Your wish will come true!",
    subWishMessage: "May our love grow deeper, warmer, and sweeter with each passing day.",
    resetButton: "Relight Candles 🕯️"
  },

  // ------------------------------------------------------------------
  // 17. FINAL SURPRISE & GRAND FINALE
  // ------------------------------------------------------------------
  finalSurprise: {
    preTitle: "One last thing...",
    emotionalText: "Thank you for being part of my life.",
    buttonText: "OPEN THE FINAL SURPRISE ❤️",
    headline: "HAPPY 3rd ANNIVERSARY ❤️",
    phrase1: "3 years down...",
    phrase2: "and a lifetime to go.",
    loveDeclaration: "I LOVE YOU ❤️",
    promise: "No matter where life takes us, my hand will always find yours.",
    certificateTitle: "3rd Anniversary Certificate of Pure Love",
    replayButton: "Relive Our Story From The Beginning 🔄"
  }
};
