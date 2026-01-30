const WateringCanSVG = ({ isWatering, canWater, onClick }) => {
  return (
    <button
      className={`watering-can-button ${isWatering ? 'watering' : ''} ${!canWater ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={!canWater}
      aria-label="Water the flower"
      aria-disabled={!canWater}
    >
      <svg 
        viewBox="0 0 100 100" 
        className="watering-can-svg"
        role="img"
        aria-hidden="true"
      >
        {/* Can body */}
        <path
          d="M 30 40 L 30 65 Q 30 70 35 70 L 60 70 Q 65 70 65 65 L 65 40 Z"
          fill="#5a7c8c"
          stroke="#3a5c6c"
          strokeWidth="2"
        />
        
        {/* Handle */}
        <path
          d="M 65 45 Q 75 45 75 55 Q 75 65 65 65"
          fill="none"
          stroke="#3a5c6c"
          strokeWidth="3"
          strokeLinecap="round"
        />
        
        {/* Spout */}
        <path
          d="M 30 50 L 15 45 L 15 55 Z"
          fill="#5a7c8c"
          stroke="#3a5c6c"
          strokeWidth="2"
        />
        
        {/* Spout holes */}
        <circle cx="12" cy="47" r="1.5" fill="#3a5c6c" />
        <circle cx="12" cy="50" r="1.5" fill="#3a5c6c" />
        <circle cx="12" cy="53" r="1.5" fill="#3a5c6c" />
        
        {/* Lid */}
        <ellipse
          cx="47.5"
          cy="40"
          rx="17.5"
          ry="5"
          fill="#6a8c9c"
          stroke="#3a5c6c"
          strokeWidth="2"
        />
        
        {/* Lid knob */}
        <circle
          cx="47.5"
          cy="38"
          r="3"
          fill="#7a9cac"
        />
      </svg>
    </button>
  );
};

export default WateringCanSVG;
