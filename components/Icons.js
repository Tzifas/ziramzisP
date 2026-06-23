/**
 * Central SVG Icon Library — Ziramzis Portfolio
 * All icons are inline SVGs, no emoji used.
 */

/* ── Bee (Professional / Geometric Brand Mark) ───────── */
export const BeeIcon = ({ size = 24, className = '' }) => {
  // Use size as height; width is ~72% of height (portrait top-down bee)
  const w = size * 0.72;
  const h = size;
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 52 72"
      fill="none"
      className={className}
      aria-label="Bee"
    >
      <defs>
        {/* Abdomen gradient — amber to dark gold */}
        <linearGradient id="beeAbd" x1="26" y1="28" x2="26" y2="68" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#FFD700" />
          <stop offset="45%"  stopColor="#F5C842" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* Thorax gradient */}
        <linearGradient id="beeThorax" x1="26" y1="20" x2="26" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#D4A017" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
        {/* Head gradient */}
        <linearGradient id="beeHead" x1="26" y1="4" x2="26" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#E8B820" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* Wing gradients — glass-like cyan */}
        <linearGradient id="wingL1" x1="0" y1="20" x2="20" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="rgba(0,245,255,0.55)" />
          <stop offset="100%" stopColor="rgba(0,200,220,0.15)" />
        </linearGradient>
        <linearGradient id="wingR1" x1="52" y1="20" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="rgba(0,245,255,0.55)" />
          <stop offset="100%" stopColor="rgba(0,200,220,0.15)" />
        </linearGradient>
        <linearGradient id="wingL2" x1="2" y1="32" x2="18" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="rgba(0,245,255,0.35)" />
          <stop offset="100%" stopColor="rgba(0,180,200,0.08)" />
        </linearGradient>
        <linearGradient id="wingR2" x1="50" y1="32" x2="34" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="rgba(0,245,255,0.35)" />
          <stop offset="100%" stopColor="rgba(0,180,200,0.08)" />
        </linearGradient>
        {/* Vein glow */}
        <filter id="beeGlow">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.6" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ── Upper wings ── */}
      {/* Left upper wing — swept-back teardrop */}
      <path
        d="M22 26 C14 22 4 16 2 10 C0 4 6 2 12 6 C18 10 22 20 22 26 Z"
        fill="url(#wingL1)"
        stroke="rgba(0,245,255,0.7)"
        strokeWidth="0.6"
      />
      {/* Wing vein left upper */}
      <path d="M22 26 C16 18 8 10 4 7" stroke="rgba(0,245,255,0.4)" strokeWidth="0.4" strokeLinecap="round" filter="url(#beeGlow)" />

      {/* Right upper wing */}
      <path
        d="M30 26 C38 22 48 16 50 10 C52 4 46 2 40 6 C34 10 30 20 30 26 Z"
        fill="url(#wingR1)"
        stroke="rgba(0,245,255,0.7)"
        strokeWidth="0.6"
      />
      {/* Wing vein right upper */}
      <path d="M30 26 C36 18 44 10 48 7" stroke="rgba(0,245,255,0.4)" strokeWidth="0.4" strokeLinecap="round" filter="url(#beeGlow)" />

      {/* ── Lower wings ── */}
      {/* Left lower wing — shorter, angled back */}
      <path
        d="M22 30 C14 30 4 34 4 40 C4 44 10 45 16 42 C20 40 22 35 22 30 Z"
        fill="url(#wingL2)"
        stroke="rgba(0,245,255,0.45)"
        strokeWidth="0.5"
      />
      {/* Right lower wing */}
      <path
        d="M30 30 C38 30 48 34 48 40 C48 44 42 45 36 42 C32 40 30 35 30 30 Z"
        fill="url(#wingR2)"
        stroke="rgba(0,245,255,0.45)"
        strokeWidth="0.5"
      />

      {/* ── Abdomen (main body, lower) ── */}
      <ellipse cx="26" cy="50" rx="12" ry="18" fill="url(#beeAbd)" />

      {/* Abdomen highlight sheen */}
      <ellipse cx="22" cy="40" rx="4" ry="6" fill="rgba(255,255,255,0.08)" transform="rotate(-10 22 40)" />

      {/* Abdomen stripes — 3 precise dark bands */}
      <path d="M14.5 42 Q26 39.5 37.5 42" stroke="#1C0E00" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.85" />
      <path d="M14 49 Q26 46.5 38 49"   stroke="#1C0E00" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.85" />
      <path d="M15 56 Q26 53.5 37 56"   stroke="#1C0E00" strokeWidth="3"   strokeLinecap="round" fill="none" opacity="0.75" />

      {/* Abdomen edge detail */}
      <ellipse cx="26" cy="50" rx="12" ry="18" stroke="rgba(180,130,0,0.5)" strokeWidth="0.8" />

      {/* ── Thorax (middle segment) ── */}
      <ellipse cx="26" cy="30" rx="9" ry="7" fill="url(#beeThorax)" />
      <ellipse cx="26" cy="30" rx="9" ry="7" stroke="rgba(100,70,0,0.6)" strokeWidth="0.8" />
      {/* Thorax texture line */}
      <path d="M20 30 Q26 28 32 30" stroke="rgba(0,0,0,0.25)" strokeWidth="1" fill="none" />

      {/* ── Head ── */}
      <ellipse cx="26" cy="16" rx="8" ry="7" fill="url(#beeHead)" />
      <ellipse cx="26" cy="16" rx="8" ry="7" stroke="rgba(100,70,0,0.5)" strokeWidth="0.8" />
      {/* Head centre groove */}
      <path d="M26 10 L26 22" stroke="rgba(0,0,0,0.15)" strokeWidth="0.8" strokeLinecap="round" />

      {/* ── Antennae — thin, precise, angular ── */}
      {/* Left antenna */}
      <path d="M22 10 L16 4" stroke="#D4A017" strokeWidth="1" strokeLinecap="round" />
      {/* Left bulb */}
      <circle cx="15.5" cy="3.5" r="1.6" fill="#FFD700" stroke="rgba(180,130,0,0.6)" strokeWidth="0.5" />

      {/* Right antenna */}
      <path d="M30 10 L36 4" stroke="#D4A017" strokeWidth="1" strokeLinecap="round" />
      {/* Right bulb */}
      <circle cx="36.5" cy="3.5" r="1.6" fill="#FFD700" stroke="rgba(180,130,0,0.6)" strokeWidth="0.5" />

      {/* ── Stinger — sharp geometric point ── */}
      <path d="M26 68 L23 62 L29 62 Z" fill="#8B6914" stroke="rgba(100,70,0,0.5)" strokeWidth="0.5" strokeLinejoin="round" />
    </svg>
  );
};

/* ── Honey Jar ───────────────────────────────────────── */
export const HoneyJarIcon = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-label="Honey jar">
    <rect x="7" y="2" width="10" height="3" rx="1.5" fill="#F5C842" />
    <path d="M5 6 Q5 5 6 5 L18 5 Q19 5 19 6 L20 20 Q20 22 18 22 L6 22 Q4 22 4 20 Z" fill="#F5C842" />
    <path d="M5 6 Q5 5 6 5 L18 5 Q19 5 19 6 L19.5 10 L4.5 10 Z" fill="#FFD700" />
    <path d="M8 14 Q10 12 12 14 Q14 16 16 14" stroke="#B8860B" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    <circle cx="12" cy="17" r="1.5" fill="#B8860B" opacity="0.6" />
  </svg>
);

/* ── Honeycomb ───────────────────────────────────────── */
export const HoneycombIcon = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-label="Honeycomb">
    <path d="M12 2 L17 4.8 L17 10.4 L12 13.2 L7 10.4 L7 4.8 Z" stroke="#F5C842" strokeWidth="1.5" fill="rgba(245,200,66,0.15)" />
    <path d="M19 8 L22 9.7 L22 13.1 L19 14.8 L16 13.1 L16 9.7 Z" stroke="#F5C842" strokeWidth="1.2" fill="rgba(245,200,66,0.1)" />
    <path d="M5 8 L8 9.7 L8 13.1 L5 14.8 L2 13.1 L2 9.7 Z" stroke="#F5C842" strokeWidth="1.2" fill="rgba(245,200,66,0.1)" />
    <path d="M12 14 L17 16.8 L17 22.4 L12 25.2 L7 22.4 L7 16.8 Z" stroke="#F5C842" strokeWidth="1.2" fill="rgba(245,200,66,0.1)" />
  </svg>
);

/* ── Globe (Websites) ────────────────────────────────── */
export const GlobeIcon = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} aria-label="Globe">
    <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
    <path d="M12 2 C8 6 8 18 12 22 M12 2 C16 6 16 18 12 22" strokeWidth="1.5" />
    <path d="M2 12 Q6 9 12 9 Q18 9 22 12 M2 12 Q6 15 12 15 Q18 15 22 12" strokeWidth="1.5" />
  </svg>
);

/* ── Mobile / App ────────────────────────────────────── */
export const MobileIcon = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} aria-label="Mobile app">
    <rect x="5" y="2" width="14" height="20" rx="3" strokeWidth="1.5" />
    <path d="M9 7 L15 7" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M9 11 L15 11" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M9 15 L12 15" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="12" cy="19" r="1" fill={color} />
  </svg>
);

/* ── Briefcase (Portfolio) ───────────────────────────── */
export const BriefcaseIcon = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} aria-label="Briefcase">
    <rect x="2" y="8" width="20" height="14" rx="2" strokeWidth="1.5" />
    <path d="M8 8 L8 6 Q8 4 10 4 L14 4 Q16 4 16 6 L16 8" strokeWidth="1.5" />
    <path d="M2 14 L22 14" strokeWidth="1.5" />
    <path d="M10 14 L10 16 M14 14 L14 16" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/* ── Gear (Custom Solutions) ─────────────────────────── */
export const GearIcon = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} aria-label="Settings">
    <circle cx="12" cy="12" r="3.5" strokeWidth="1.5" />
    <path d="M19.4 15 C19.7 14.4 20 13.2 20 12 C20 10.8 19.7 9.6 19.4 9 L21.5 7.4 L18.5 2.3 L16.2 3.8 C15.2 3.1 14 2.6 12.8 2.3 L12.3 0 L7.7 0 L7.2 2.3 C6 2.6 4.8 3.1 3.8 3.8 L1.5 2.3 L-1.5 7.4 L0.6 9 C0.3 9.6 0 10.8 0 12 C0 13.2 0.3 14.4 0.6 15 L-1.5 16.6 L1.5 21.7 L3.8 20.2 C4.8 20.9 6 21.4 7.2 21.7 L7.7 24 L12.3 24 L12.8 21.7 C14 21.4 15.2 20.9 16.2 20.2 L18.5 21.7 L21.5 16.6 Z" strokeWidth="1.5" transform="scale(0.9) translate(1.3 1.3)" />
  </svg>
);

/* ── Wrench (Custom Solutions) ───────────────────────── */
export const WrenchIcon = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} aria-label="Tools">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── Fork & Knife (Restaurant) ───────────────────────── */
export const ForkKnifeIcon = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-label="Restaurant">
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
    <path d="M7 2v20" />
    <path d="M21 15V2a5 5 0 0 0-5 5v8c0 1.1.9 2 2 2h3z" />
    <path d="M19 17v5" />
  </svg>
);

/* ── Scale (Law) ─────────────────────────────────────── */
export const ScaleIcon = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} aria-label="Law">
    <path d="M12 3 L12 20" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8 20 L16 20" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M4 6 L12 4 L20 6" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M4 6 L1 13 Q1 16 4 16 Q7 16 7 13 Z" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M20 6 L17 13 Q17 16 20 16 Q23 16 23 13 Z" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

/* ── Tooth (Dental) ──────────────────────────────────── */
export const ToothIcon = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} aria-label="Dental">
    <path d="M12 2 C8 2 5 4.5 5 8 C5 10 5.5 11.5 6 13 C6.5 14.5 7 16 7 18 Q7 22 9 22 Q10 22 10.5 20 L11 18 Q11.5 16 12 16 Q12.5 16 13 18 L13.5 20 Q14 22 15 22 Q17 22 17 18 C17 16 17.5 14.5 18 13 C18.5 11.5 19 10 19 8 C19 4.5 16 2 12 2 Z" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M9 4 Q11 6 15 4" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

/* ── Shopping Cart (E-Commerce) ──────────────────────── */
export const CartIcon = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} aria-label="E-Commerce">
    <path d="M6 2 L3 2" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M6 2 L8 14 L20 14 L22 6 L6 6" strokeWidth="1.5" strokeLinejoin="round" />
    <circle cx="9" cy="19" r="2" strokeWidth="1.5" />
    <circle cx="18" cy="19" r="2" strokeWidth="1.5" />
  </svg>
);

/* ── Rocket (Startup / Launch) ───────────────────────── */
export const RocketIcon = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} aria-label="Rocket">
    <path d="M4.5 16.5 C2.5 14.5 2.5 11 4.5 9 L14.5 2 C17.5 0.5 21 2 22 5 L22 9.5 C22 12 20.5 14 18.5 15.5" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M7 17 L14.5 15.5 L8.5 9.5 L7 17 Z" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M5 19 L3 22 M9 19.5 L8 22" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="15" cy="9" r="2.5" strokeWidth="1.5" />
  </svg>
);

/* ── Brush / Palette (Creative) ──────────────────────── */
export const BrushIcon = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} aria-label="Creative">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L3 14.67V21h6.34l10.01-10.01a5.5 5.5 0 0 0 1.49-6.38z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 21 C3 21 6 17 9 17 C12 17 11 21 14 21" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/* ── Chart / Dashboard ───────────────────────────────── */
export const ChartIcon = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} aria-label="Dashboard">
    <rect x="2" y="14" width="4" height="8" rx="1" strokeWidth="1.5" />
    <rect x="9" y="8" width="4" height="14" rx="1" strokeWidth="1.5" />
    <rect x="16" y="2" width="4" height="20" rx="1" strokeWidth="1.5" />
    <path d="M2 2 L22 2" strokeWidth="1" strokeDasharray="2 2" />
  </svg>
);

/* ── Lightbulb (Idea) ────────────────────────────────── */
export const BulbIcon = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} aria-label="Idea">
    <path d="M12 2 A7 7 0 0 1 19 9 C19 12.5 17 14.5 16 16 L16 18 Q16 19 15 19 L9 19 Q8 19 8 18 L8 16 C7 14.5 5 12.5 5 9 A7 7 0 0 1 12 2 Z" strokeWidth="1.5" />
    <path d="M9 21 L15 21" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M10 23 L14 23" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 6 L12 9 M10.5 7.5 L13.5 10.5" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
  </svg>
);

/* ── Pencil / Design ─────────────────────────────────── */
export const PencilIcon = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} aria-label="Design">
    <path d="M11 4 L4 11 L3 21 L13 20 L20 13 Z" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M15 5 L19 9" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M14 3 Q16 1 18 1 Q21 1 21 4 Q21 6 19 8 L16 5 Z" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M4 11 L13 20" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
  </svg>
);

/* ── Hammer / Build ──────────────────────────────────── */
export const HammerIcon = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} aria-label="Build">
    <path d="M15 3 L21 9 L13 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 17 L3 21 L7 11 Z" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M15 3 L12 6" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/* ── Flask / Test ────────────────────────────────────── */
export const FlaskIcon = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} aria-label="Test">
    <path d="M9 3 L9 12 L4 19 Q3 21 5 22 L19 22 Q21 21 20 19 L15 12 L15 3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 3 L18 3" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M7 17 L12 15 M14 19 L16 17" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
  </svg>
);

/* ── Clock (Turnaround) ──────────────────────────────── */
export const ClockIcon = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} aria-label="Quick turnaround">
    <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
    <path d="M12 6 L12 12 L16 14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── Handshake / Communication ───────────────────────── */
export const HandshakeIcon = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} aria-label="Communication">
    <path d="M2 12 L7 7 L10 9 L14 7 L20 10 L22 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 12 L5 17 L8 15 L10 17 L12 15 L14 17 L17 15 L19 17 L22 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 15 L10 9 M12 15 L14 7" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
  </svg>
);

/* ── Check / Launch ──────────────────────────────────── */
export const CheckRocketIcon = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} aria-label="Launch ready">
    <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
    <path d="M8 12 L11 15 L16 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── Map Pin (Location) ──────────────────────────────── */
export const MapPinIcon = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} aria-label="Location">
    <path d="M12 2 A7 7 0 0 1 19 9 C19 15 12 22 12 22 C12 22 5 15 5 9 A7 7 0 0 1 12 2 Z" strokeWidth="1.5" />
    <circle cx="12" cy="9" r="2.5" strokeWidth="1.5" />
  </svg>
);

/* ── Email ───────────────────────────────────────────── */
export const EmailIcon = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} aria-label="Email">
    <rect x="2" y="4" width="20" height="16" rx="2" strokeWidth="1.5" />
    <path d="M2 7 L12 14 L22 7" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/* ── Phone ───────────────────────────────────────────── */
export const PhoneIcon = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} aria-label="Phone">
    <path d="M5 2 Q4 2 3 4 Q1 8 3 12 Q5 16 8 19 Q11 22 15 22 Q19 22 21 20 Q22 19 22 18 L19 15 Q18 14 17 15 L15 17 Q13 16 11 14 Q9 12 9 10 L11 8 Q12 7 11 6 Z" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

/* ── Star ────────────────────────────────────────────── */
export const StarIcon = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} aria-label="Star">
    <path d="M12 2 L15 9 L22 9 L16.5 14 L18.5 21 L12 17 L5.5 21 L7.5 14 L2 9 L9 9 Z" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

/* ── Smile (Happy) ───────────────────────────────────── */
export const SmileIcon = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} aria-label="Happy clients">
    <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
    <path d="M8 14 Q10 17 12 17 Q14 17 16 14" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="9" cy="10" r="1.2" fill={color} />
    <circle cx="15" cy="10" r="1.2" fill={color} />
  </svg>
);

/* ── Buildings (Projects) ────────────────────────────── */
export const BuildingsIcon = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} aria-label="Projects delivered">
    <rect x="3" y="8" width="8" height="14" rx="1" strokeWidth="1.5" />
    <rect x="13" y="3" width="8" height="19" rx="1" strokeWidth="1.5" />
    <path d="M5 11 L7 11 M5 14 L7 14 M5 17 L7 17" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M15 6 L17 6 M15 9 L17 9 M19 6 L19 6 M19 9 L19 9 M15 12 L17 12 M19 12 L19 12" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M1 22 L23 22" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/* ── Bolt / Lightning ────────────────────────────────── */
export const BoltIcon = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} aria-label="Lightning">
    <path d="M13 2 L4 14 L11 14 L11 22 L20 10 L13 10 Z" />
  </svg>
);

/* ── Image (Portfolio work) ──────────────────────────── */
export const ImageIcon = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} aria-label="Portfolio">
    <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5" />
    <circle cx="8.5" cy="8.5" r="2" strokeWidth="1.5" />
    <path d="M3 17 L8 12 L12 15 L15 12 L21 17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── LinkedIn ─────────────────────────────────────────── */
export const LinkedInIcon = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} aria-label="LinkedIn">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

/* ── Twitter / X ─────────────────────────────────────── */
export const XIcon = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} aria-label="X (Twitter)">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

/* ── GitHub ───────────────────────────────────────────── */
export const GitHubIcon = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} aria-label="GitHub">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

/* ── Arrow Right ─────────────────────────────────────── */
export const ArrowRightIcon = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} aria-label="Arrow right">
    <path d="M5 12 L19 12 M13 6 L19 12 L13 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── WhatsApp ────────────────────────────────────────── */
export const WhatsAppIcon = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="WhatsApp">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378L.057 24l1.689-6.163a9.864 9.864 0 01-1.322-4.977C.425 6.692 5.117 2 10.874 2c2.748 0 5.331 1.07 7.272 3.013A10.215 10.215 0 0121.1 12.2c-.003 5.757-4.696 10.449-10.452 10.449l-.177-.267z" />
  </svg>
);

/* ── Scroll Down indicator ───────────────────────────── */
export const ScrollDownIcon = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} className={className} aria-label="Scroll down">
    <path d="M12 5 L12 19 M6 13 L12 19 L18 13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
