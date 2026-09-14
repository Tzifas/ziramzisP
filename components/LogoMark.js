export default function LogoMark({ size = 38, id = 'lgm', className = '' }) {
  const h = Math.round(size * 1.08);
  return (
    <svg width={size} height={h} viewBox="0 0 48 52" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id + '-grad'} x1="0" y1="0" x2="48" y2="52" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#F5C842" />
          <stop offset="1" stopColor="#00F5FF" />
        </linearGradient>
      </defs>
      <path d="M15 15 C9 11 2.5 10 3.5 14 C4.5 18 10.5 20 15 19 Z" fill="rgba(0,245,255,0.30)" stroke="#00F5FF" strokeWidth="1" strokeLinejoin="round" />
      <path d="M33 15 C39 11 45.5 10 44.5 14 C43.5 18 37.5 20 33 19 Z" fill="rgba(245,200,66,0.28)" stroke="#F5C842" strokeWidth="1" strokeLinejoin="round" />
      <path d="M24 3 L42 13 L42 35 L24 45 L6 35 L6 13 Z" stroke={'url(#' + id + '-grad)'} strokeWidth="2" strokeLinejoin="round" />
      <path d="M16 17.5 H32.5 L15.5 30.5 H32.5" stroke="#F5C842" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
