import { useCallback, useRef, useEffect } from 'react';

// Singleton instance to avoid multiple Audio objects and resource issues
const hoverAudio = new Audio('/omnitrix-change.mp3');
hoverAudio.volume = 0.2;

export const useTechSound = () => {
  // Pre-load logic
  useEffect(() => {
    hoverAudio.load();
  }, []);

  const playHoverSound = useCallback(() => {
    // We only attempt to play if the audio isn't already "stuck"
    // Resetting currentTime allows rapid consecutive plays (e.g., hovering multiple items)
    hoverAudio.currentTime = 0;
    
    const playPromise = hoverAudio.play();
    
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        // Silently catch the error to prevent console spam
        // This usually happens before the first user interaction
        if (error.name !== 'NotAllowedError') {
            console.warn("Audio playback failed:", error);
        }
      });
    }
  }, []);

  return { playHoverSound };
};
