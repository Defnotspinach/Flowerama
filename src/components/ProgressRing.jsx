const CIRCLE_RADIUS = 120;
const CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;

const ProgressRing = ({ progress }) => {
  const strokeDashoffset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;

  return (
    <svg 
      className="progress-ring" 
      width="300" 
      height="300"
      role="img"
      aria-label={`Growth progress: ${Math.round(progress)}%`}
    >
      {/* Background ring */}
      <circle
        className="progress-ring-background"
        stroke="#1a1a1a"
        strokeWidth="3"
        fill="none"
        r={CIRCLE_RADIUS}
        cx="150"
        cy="150"
      />
      
      {/* Progress ring */}
      <circle
        className="progress-ring-progress"
        stroke="#7cb342"
        strokeWidth="3"
        fill="none"
        r={CIRCLE_RADIUS}
        cx="150"
        cy="150"
        strokeDasharray={CIRCUMFERENCE}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        transform="rotate(-90 150 150)"
      />
    </svg>
  );
};

export default ProgressRing;
