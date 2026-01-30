import { useState, useCallback } from 'react';

const COOLDOWN_OPTIONS = [1, 2, 3, 4, 5]; // in seconds

const useWateringCooldown = () => {
  const [canWater, setCanWater] = useState(true);
  const [cooldownProgress, setCooldownProgress] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState(0);

  const startCooldown = useCallback(() => {
    // Pick a random cooldown from 1-5 seconds
    const cooldownSeconds = COOLDOWN_OPTIONS[Math.floor(Math.random() * COOLDOWN_OPTIONS.length)];
    const COOLDOWN_TIME = cooldownSeconds * 1000; // convert to milliseconds

    setCanWater(false);
    setCooldownProgress(0);

    const startTime = Date.now();

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min((elapsed / COOLDOWN_TIME) * 100, 100);
      const remaining = Math.ceil((COOLDOWN_TIME - elapsed) / 1000);

      setCooldownProgress(progress);
      setSecondsRemaining(Math.max(0, remaining));

      if (elapsed >= COOLDOWN_TIME) {
        setCanWater(true);
        setCooldownProgress(0);
        setSecondsRemaining(0);
      } else {
        requestAnimationFrame(updateProgress);
      }
    };

    requestAnimationFrame(updateProgress);
  }, []);

  return {
    canWater,
    cooldownProgress,
    secondsRemaining,
    startCooldown
  };
};

export default useWateringCooldown;
