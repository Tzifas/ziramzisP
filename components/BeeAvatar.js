export default function BeeAvatar({ size = 92, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="ba-body" cx="38%" cy="28%" r="80%">
          <stop offset="0%" stopColor="#FFE9A8" />
          <stop offset="35%" stopColor="#FFC93C" />
          <stop offset="75%" stopColor="#E9A825" />
          <stop offset="100%" stopColor="#C8891A" />
        </radialGradient>
        <radialGradient id="ba-head" cx="40%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#FFE39A" />
          <stop offset="55%" stopColor="#F0B32E" />
          <stop offset="100%" stopColor="#C8891A" />
        </radialGradient>
        <linearGradient id="ba-wing" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(190,245,255,0.85)" />
          <stop offset="55%" stopColor="rgba(80,215,240,0.45)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.12)" />
        </linearGradient>
        <clipPath id="ba-body-clip">
          <circle cx="60" cy="74" r="31" />
        </clipPath>
      </defs>

      {/* soft ground shadow */}
      <ellipse cx="60" cy="113" rx="30" ry="5.5" fill="rgba(0,0,0,0.32)" />

      {/* wings (behind the body) */}
      <ellipse cx="36" cy="40" rx="26" ry="14" transform="rotate(-32 36 40)" fill="url(#ba-wing)" stroke="rgba(155,234,255,0.6)" strokeWidth="1.2" />
      <ellipse cx="84" cy="40" rx="26" ry="14" transform="rotate(32 84 40)" fill="url(#ba-wing)" stroke="rgba(155,234,255,0.6)" strokeWidth="1.2" />
      <path d="M20 44 L52 33 M24 51 L50 42" stroke="rgba(200,248,255,0.5)" strokeWidth="1" strokeLinecap="round" />
      <path d="M100 44 L68 33 M96 51 L70 42" stroke="rgba(200,248,255,0.5)" strokeWidth="1" strokeLinecap="round" />

      {/* abdomen */}
      <circle cx="60" cy="74" r="31" fill="url(#ba-body)" />
      <g clipPath="url(#ba-body-clip)">
        <rect x="40" y="42" width="9.5" height="64" rx="4" fill="#241A07" opacity="0.82" />
        <rect x="55.5" y="40" width="9.5" height="70" rx="4" fill="#241A07" opacity="0.82" />
        <rect x="71" y="42" width="9.5" height="64" rx="4" fill="#241A07" opacity="0.82" />
        <ellipse cx="47" cy="58" rx="16" ry="10" transform="rotate(-28 47 58)" fill="#FFFFFF" opacity="0.16" />
      </g>
      <circle cx="60" cy="74" r="31" fill="none" stroke="rgba(200,150,40,0.55)" strokeWidth="1" />
      <path d="M86 57 A31 31 0 0 1 79 99" stroke="rgba(0,245,255,0.5)" strokeWidth="2.2" strokeLinecap="round" fill="none" />

      {/* stinger */}
      <path d="M55.5 101 L60 110.5 L64.5 101 Z" fill="#C8891A" />

      {/* head */}
      <circle cx="60" cy="38" r="17.5" fill="url(#ba-head)" />
      <circle cx="60" cy="38" r="17.5" fill="none" stroke="rgba(200,150,40,0.5)" strokeWidth="1" />
      <ellipse cx="53" cy="31" rx="7" ry="5" transform="rotate(-24 53 31)" fill="#FFFFFF" opacity="0.22" />

      {/* antennae */}
      <path d="M52 23 C48 14 42 10 36 8" stroke="#E9A825" strokeWidth="3.2" fill="none" strokeLinecap="round" />
      <path d="M68 23 C72 14 78 10 84 8" stroke="#E9A825" strokeWidth="3.2" fill="none" strokeLinecap="round" />
      <circle cx="36" cy="8" r="3.6" fill="#FFD97A" stroke="#C8891A" strokeWidth="1" />
      <circle cx="84" cy="8" r="3.6" fill="#FFD97A" stroke="#C8891A" strokeWidth="1" />

      {/* eyes */}
      <ellipse cx="52.5" cy="39.5" rx="5.4" ry="6.2" fill="#1C1206" />
      <ellipse cx="67.5" cy="39.5" rx="5.4" ry="6.2" fill="#1C1206" />
      <circle cx="54.4" cy="37.2" r="1.8" fill="#FFFFFF" opacity="0.92" />
      <circle cx="69.4" cy="37.2" r="1.8" fill="#FFFFFF" opacity="0.92" />

      {/* subtle smile */}
      <path d="M55 48.5 Q60 52 65 48.5" stroke="#8A5A10" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.75" />
    </svg>
  );
}
