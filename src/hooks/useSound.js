import { useEffect, useRef, useCallback } from 'react';

// Free sound URLs from freesound.org and other CC0/public domain sources
const SOUND_URLS = {
  watering: 'https://assets.mixkit.co/active_storage/sfx/2014/2014-preview.mp3', // gentle water pour
  growth: 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3', // soft bell
  bloom: 'https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3', // magical chime
  cooldown: 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3' // soft click
};

const useSound = () => {
  const audioRefs = useRef({});

  useEffect(() => {
    // Preload all sounds
    Object.keys(SOUND_URLS).forEach(key => {
      const audio = new Audio(SOUND_URLS[key]);
      audio.volume = 0.3;
      audio.preload = 'auto';
      audioRefs.current[key] = audio;
    });

    return () => {
      // Cleanup
      Object.values(audioRefs.current).forEach(audio => {
        audio.pause();
        audio.src = '';
      });
    };
  }, []);

  const playSound = useCallback((soundName, volume = 0.3) => {
    const audio = audioRefs.current[soundName];
    if (audio) {
      audio.volume = volume;
      audio.currentTime = 0;
      audio.play().catch(err => {
        // Silently fail if autoplay is blocked
        console.debug('Sound playback prevented:', err);
      });
    }
  }, []);

  const vibrate = useCallback((pattern) => {
    if (navigator.vibrate) {
      navigator.vibrate(pattern);
    }
  }, []);

  return {
    playSound,
    vibrate
  };
};

export default useSound;
