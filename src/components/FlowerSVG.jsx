const GROWTH_STAGES = {
  SEED: 0,
  SPROUT: 1,
  STEM: 2,
  BUD: 3,
  BLOOM: 4
};

const FlowerSVG = ({ stage, isWatering, hasBloom }) => {
  return (
    <div className={`flower-container ${hasBloom ? 'bloomed' : ''}`}>
      <svg 
        viewBox="0 0 200 300" 
        className="flower-svg"
        role="img"
        aria-label={`Flower at growth stage ${stage + 1}`}
      >
        {/* Soil */}
        <ellipse 
          cx="100" 
          cy="280" 
          rx="80" 
          ry="15" 
          fill="#2a1810"
          opacity="0.6"
        />

        {/* Water drops during watering */}
        {isWatering && (
          <g className="water-drops">
            <circle cx="100" cy="50" r="3" fill="#4a9eff" className="drop drop-1" />
            <circle cx="110" cy="60" r="2.5" fill="#4a9eff" className="drop drop-2" />
            <circle cx="90" cy="55" r="2" fill="#4a9eff" className="drop drop-3" />
          </g>
        )}

        {/* Stage 0: Seed */}
        {stage >= GROWTH_STAGES.SEED && (
          <g className="stage-seed">
            <ellipse 
              cx="100" 
              cy="270" 
              rx="8" 
              ry="10" 
              fill="#8b6f47"
            />
          </g>
        )}

        {/* Stage 1: Sprout */}
        {stage >= GROWTH_STAGES.SPROUT && (
          <g className="stage-sprout">
            <path 
              d="M 100 270 Q 100 250 100 240" 
              stroke="#7cb342" 
              strokeWidth="3" 
              fill="none"
              strokeLinecap="round"
            />
            <ellipse 
              cx="100" 
              cy="237" 
              rx="5" 
              ry="8" 
              fill="#9ccc65"
            />
          </g>
        )}

        {/* Stage 2: Stem with leaves */}
        {stage >= GROWTH_STAGES.STEM && (
          <g className="stage-stem">
            <path 
              d="M 100 270 Q 98 200 100 150" 
              stroke="#558b2f" 
              strokeWidth="4" 
              fill="none"
              strokeLinecap="round"
            />
            {/* Left leaf */}
            <path 
              d="M 100 200 Q 70 190 65 200 Q 70 210 100 205" 
              fill="#7cb342"
            />
            {/* Right leaf */}
            <path 
              d="M 100 180 Q 130 170 135 180 Q 130 190 100 185" 
              fill="#7cb342"
            />
          </g>
        )}

        {/* Stage 3: Bud - Tulip bud */}
        {stage >= GROWTH_STAGES.BUD && (
          <g className="stage-bud">
            {/* Tulip bud shape */}
            <path 
              d="M 100 130 Q 85 140 85 150 Q 85 160 100 165 Q 115 160 115 150 Q 115 140 100 130 Z" 
              fill="#7b1fa2"
              opacity="0.8"
              className="bud"
            />
            <ellipse 
              cx="100" 
              cy="145" 
              rx="10" 
              ry="15" 
              fill="#8e24aa"
            />
          </g>
        )}

        {/* Stage 4: Bloom - Tulip */}
        {stage >= GROWTH_STAGES.BLOOM && (
          <g className="stage-bloom">
            {/* Tulip petals */}
            <g className="petals">
              {/* Back petal */}
              <ellipse
                cx="100"
                cy="115"
                rx="20"
                ry="35"
                fill="#7b1fa2"
                opacity="0.7"
                className="petal petal-back"
              />
              {/* Left petal */}
              <path
                d="M 100 130 Q 70 120 65 100 Q 65 85 75 80 Q 85 90 100 105 Z"
                fill="#9c27b0"
                className="petal petal-1"
              />
              {/* Right petal */}
              <path
                d="M 100 130 Q 130 120 135 100 Q 135 85 125 80 Q 115 90 100 105 Z"
                fill="#9c27b0"
                className="petal petal-2"
              />
              {/* Center front petal */}
              <path
                d="M 100 130 Q 100 100 100 85 Q 90 75 85 85 Q 95 95 100 110 Z"
                fill="#ab47bc"
                className="petal petal-3"
              />
              <path
                d="M 100 130 Q 100 100 100 85 Q 110 75 115 85 Q 105 95 100 110 Z"
                fill="#ab47bc"
                className="petal petal-4"
              />
            </g>
            {/* Stamen (center) */}
            <ellipse 
              cx="100" 
              cy="110" 
              rx="8" 
              ry="12" 
              fill="#212121"
              opacity="0.8"
              className="flower-center"
            />
            <ellipse 
              cx="100" 
              cy="108" 
              rx="6" 
              ry="8" 
              fill="#ffd54f"
              opacity="0.9"
            />
            {/* Glow effect when bloomed */}
            {hasBloom && (
              <circle 
                cx="100" 
                cy="120" 
                r="40" 
                fill="none"
                stroke="#9c27b0"
                strokeWidth="2"
                opacity="0.3"
                className="bloom-glow"
              />
            )}
          </g>
        )}
      </svg>
    </div>
  );
};

export default FlowerSVG;
