import { useState, useEffect } from 'react';
import FlowerSVG from './components/FlowerSVG';
import WateringCanSVG from './components/WateringCanSVG';
import ProgressRing from './components/ProgressRing';
import useWateringCooldown from './hooks/useWateringCooldown';
import useSound from './hooks/useSound';
import './styles/globals.css';
import './styles/flower.css';
import './styles/watering.css';

const MAX_STAGE = 4;
const GROWTH_INCREMENT = 20;

function App() {
  const [userName, setUserName] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const [growthStage, setGrowthStage] = useState(0);
  const [growthProgress, setGrowthProgress] = useState(0);
  const [isWatering, setIsWatering] = useState(false);
  const [hasBloom, setHasBloom] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);

  const { canWater, secondsRemaining, startCooldown } = useWateringCooldown();
  const { playSound, vibrate } = useSound();

  const handleStartJourney = (e) => {
    e.preventDefault();
    if (userName.trim()) {
      setHasStarted(true);
    }
  };

  const handleRestart = () => {
    setUserName('');
    setHasStarted(false);
    setGrowthStage(0);
    setGrowthProgress(0);
    setIsWatering(false);
    setHasBloom(false);
    setShowCompletion(false);
  };

  const handleWatering = () => {
    if (!canWater) {
      playSound('cooldown', 0.2);
      vibrate(50);
      return;
    }

    if (growthStage >= MAX_STAGE) {
      return;
    }

    // Start watering animation
    setIsWatering(true);
    playSound('watering', 0.25);
    vibrate(100);

    // Calculate new growth
    setTimeout(() => {
      setIsWatering(false);
      
      const newProgress = growthProgress + GROWTH_INCREMENT;
      
      if (newProgress >= 100) {
        // Level up
        const newStage = Math.min(growthStage + 1, MAX_STAGE);
        setGrowthStage(newStage);
        setGrowthProgress(0);
        
        if (newStage === MAX_STAGE) {
          // Final bloom!
          playSound('bloom', 0.35);
          vibrate([100, 50, 100]);
          setHasBloom(true);
          setTimeout(() => {
            setShowCompletion(true);
          }, 2000);
        } else {
          playSound('growth', 0.3);
          vibrate([50, 30, 50]);
        }
      } else {
        setGrowthProgress(newProgress);
      }
      
      startCooldown();
    }, 800);
  };

  // Keyboard support
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (hasStarted && !showCompletion && e.key === ' ') {
        e.preventDefault();
        handleWatering();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [hasStarted, showCompletion, canWater, growthStage, growthProgress]);

  if (!hasStarted) {
    return (
      <div className="app">
        <div className="name-entry-container">
          <h1 className="title">Flowerama</h1>
          <p className="subtitle">A moment of calm growth</p>
          <form onSubmit={handleStartJourney} className="name-form">
            <label htmlFor="name-input" className="name-label">
              What is your name?
            </label>
            <input
              id="name-input"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your name"
              className="name-input"
              autoFocus
              maxLength={20}
              aria-required="true"
            />
            <button 
              type="submit" 
              className="start-button"
              disabled={!userName.trim()}
            >
              Begin
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (showCompletion) {
    return (
      <div className="app">
        <div className="completion-container">
          <h1 className="completion-title">
            {userName}, your flower has bloomed
          </h1>
          <p className="completion-message">
            I hope this little journey brought you some peace.
            I will Love you Forever.
          </p>
          <FlowerSVG 
            stage={growthStage} 
            isWatering={false}
            hasBloom={hasBloom}
          />
          <button 
            className="restart-button"
            onClick={handleRestart}
            aria-label="Restart and grow a new flower"
          >
            Grow Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="watering-can-container">
        <WateringCanSVG 
          isWatering={isWatering}
          canWater={canWater}
          onClick={handleWatering}
        />
        {!canWater && secondsRemaining > 0 && (
          <div className="cooldown-timer" aria-live="polite">
            {secondsRemaining}s
          </div>
        )}
      </div>
      
      <div className="flower-scene">
        <ProgressRing progress={growthProgress} />
        <FlowerSVG 
          stage={growthStage} 
          isWatering={isWatering}
          hasBloom={hasBloom}
        />
      </div>

      <div className="instruction" role="status" aria-live="polite">
        {growthStage < MAX_STAGE && (canWater ? 'Water to grow' : `Wait ${secondsRemaining}s...`)}
      </div>
    </div>
  );
}

export default App;
