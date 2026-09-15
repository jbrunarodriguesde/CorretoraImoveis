import React from 'react';

interface JacquelineLogoProps {
  className?: string;
  variant?: 'full' | 'icon';
  transparent?: boolean;
}

export const JacquelineLogo: React.FC<JacquelineLogoProps> = ({
  className = 'w-full h-full',
  variant = 'full',
  transparent = false,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={variant === 'icon' ? '120 100 760 640' : '0 0 1000 1000'}
      className={className}
      aria-label="Jacqueline Almeida Corretora de Imóveis"
      role="img"
    >
      <defs>
        <linearGradient id="jlGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F7E2A9" />
          <stop offset="25%" stopColor="#D8B160" />
          <stop offset="50%" stopColor="#F2D898" />
          <stop offset="75%" stopColor="#BD8D39" />
          <stop offset="100%" stopColor="#E7C67D" />
        </linearGradient>

        <linearGradient id="jlGoldStroke" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5DB9A" />
          <stop offset="50%" stopColor="#CFA551" />
          <stop offset="100%" stopColor="#8F6721" />
        </linearGradient>

        <linearGradient id="jlGoldLight" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#CFA551" />
          <stop offset="60%" stopColor="#F7E5B5" />
          <stop offset="100%" stopColor="#FFF5D6" />
        </linearGradient>

        <radialGradient id="jlStarCenter" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFEBB8" stopOpacity="0.9" />
          <stop offset="20%" stopColor="#DDB766" stopOpacity="0.5" />
          <stop offset="60%" stopColor="#B28834" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="jlStarSide" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFEBB8" stopOpacity="0.75" />
          <stop offset="25%" stopColor="#DDB766" stopOpacity="0.35" />
          <stop offset="70%" stopColor="#B28834" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="jlBgAmbient" cx="50%" cy="40%" r="45%">
          <stop offset="0%" stopColor="#3A2E16" stopOpacity="0.35" />
          <stop offset="50%" stopColor="#1A150A" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background (only if not transparent) */}
      {!transparent && (
        <rect width="1000" height="1000" fill="#060606" rx="0" />
      )}

      {/* Ambient Lighting */}
      <circle cx="500" cy="400" r="380" fill="url(#jlBgAmbient)" />

      {/* Glow flares at building peaks */}
      <circle cx="500" cy="216" r="140" fill="url(#jlStarCenter)" />
      <path d="M500 130 L503 213 L586 216 L503 219 L500 302 L497 219 L414 216 L497 213 Z" fill="#FFF2CE" opacity="0.45" />

      <circle cx="362" cy="338" r="95" fill="url(#jlStarSide)" />
      <path d="M362 285 L364 336 L415 338 L364 340 L362 391 L360 340 L309 338 L360 336 Z" fill="#FFF2CE" opacity="0.3" />

      <circle cx="638" cy="338" r="95" fill="url(#jlStarSide)" />
      <path d="M638 285 L640 336 L691 338 L640 340 L638 391 L636 340 L585 338 L636 336 Z" fill="#FFF2CE" opacity="0.3" />

      {/* Towers */}
      {/* Tower 1 (Outer Left) */}
      <g stroke="url(#jlGoldStroke)" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M168 506 L212 470 L256 506 L256 650 M168 506 L168 695" />
        <path d="M212 470 L212 660" strokeWidth="5" opacity="0.9" />
        <path d="M192 486 L192 680" strokeWidth="4" stroke="url(#jlGoldLight)" opacity="0.65" />
        <path d="M234 486 L234 650" strokeWidth="4" stroke="url(#jlGoldLight)" opacity="0.65" />
      </g>

      {/* Tower 5 (Outer Right) */}
      <g stroke="url(#jlGoldStroke)" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M744 506 L788 470 L832 506 L832 695 M744 506 L744 650" />
        <path d="M788 470 L788 660" strokeWidth="5" opacity="0.9" />
        <path d="M766 486 L766 650" strokeWidth="4" stroke="url(#jlGoldLight)" opacity="0.65" />
        <path d="M808 486 L808 680" strokeWidth="4" stroke="url(#jlGoldLight)" opacity="0.65" />
      </g>

      {/* Tower 2 (Mid Left) */}
      <g stroke="url(#jlGoldStroke)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M308 386 L362 338 L416 386 L416 575 M308 386 L308 620" />
        <path d="M362 338 L362 590" strokeWidth="5.5" opacity="0.95" />
        <path d="M336 362 L336 610" strokeWidth="4.5" stroke="url(#jlGoldLight)" opacity="0.75" />
        <path d="M388 362 L388 580" strokeWidth="4.5" stroke="url(#jlGoldLight)" opacity="0.75" />
      </g>

      {/* Tower 4 (Mid Right) */}
      <g stroke="url(#jlGoldStroke)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M584 386 L638 338 L692 386 L692 620 M584 386 L584 575" />
        <path d="M638 338 L638 590" strokeWidth="5.5" opacity="0.95" />
        <path d="M612 362 L612 580" strokeWidth="4.5" stroke="url(#jlGoldLight)" opacity="0.75" />
        <path d="M664 362 L664 610" strokeWidth="4.5" stroke="url(#jlGoldLight)" opacity="0.75" />
      </g>

      {/* Tower 3 (Center Tallest Tower) */}
      <g stroke="url(#jlGoldStroke)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M444 274 L500 216 L556 274 L556 550 M444 274 L444 550" />
        <path d="M500 216 L500 545" strokeWidth="6" stroke="url(#jlGoldLight)" opacity="0.98" />
        <path d="M472 245 L472 548" strokeWidth="5" stroke="url(#jlGoldLight)" opacity="0.8" />
        <path d="M528 245 L528 548" strokeWidth="5" stroke="url(#jlGoldLight)" opacity="0.8" />
      </g>

      {/* Gable Roof */}
      <g stroke="url(#jlGoldGradient)" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path
          d="M236 714 C 280 714, 320 684, 370 644 L 500 545 L 630 644 C 680 684, 720 714, 764 714"
          strokeWidth="11"
        />
        <path
          d="M260 717 C 295 717, 335 692, 380 655 L 500 564 L 620 655 C 665 692, 705 717, 740 717"
          strokeWidth="4"
          opacity="0.6"
        />
      </g>

      {/* Four-pane window */}
      <g transform="translate(473, 660)">
        <rect x="0" y="0" width="24" height="24" rx="2" fill="url(#jlGoldLight)" />
        <rect x="30" y="0" width="24" height="24" rx="2" fill="url(#jlGoldLight)" />
        <rect x="0" y="30" width="24" height="24" rx="2" fill="url(#jlGoldLight)" />
        <rect x="30" y="30" width="24" height="24" rx="2" fill="url(#jlGoldLight)" />
      </g>

      {/* Typography (if variant === 'full') */}
      {variant === 'full' && (
        <>
          <text
            x="500"
            y="784"
            textAnchor="middle"
            fill="url(#jlGoldGradient)"
            fontFamily="'Playfair Display', 'Cinzel', 'Trajan Pro', 'Didot', 'Baskerville', 'Georgia', serif"
            fontSize="52"
            fontWeight="600"
            letterSpacing="9"
          >
            JACQUELINE ALMEIDA
          </text>

          <line x1="75" y1="814" x2="205" y2="814" stroke="url(#jlGoldStroke)" strokeWidth="2.5" strokeLinecap="round" />

          <text
            x="500"
            y="824"
            textAnchor="middle"
            fill="url(#jlGoldGradient)"
            fontFamily="'Plus Jakarta Sans', 'Montserrat', 'Inter', -apple-system, sans-serif"
            fontSize="28"
            fontWeight="500"
            letterSpacing="10"
          >
            CORRETORA DE IMÓVEIS
          </text>

          <line x1="795" y1="814" x2="925" y2="814" stroke="url(#jlGoldStroke)" strokeWidth="2.5" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
};
