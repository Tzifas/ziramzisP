'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  BeeIcon,
  WhatsAppIcon
} from './Icons';
import { seedColony, summarizeColony } from '../lib/hive';
import { site } from '../lib/site';

/* ── Static Honeycomb Grid ──────────────────────────── */
const HoneycombGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full absolute inset-0 opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hex-pattern" x="0" y="0" width="80" height="92" patternUnits="userSpaceOnUse">
            <path d="M40 4 L76 23 L76 69 L40 88 L4 69 L4 23 Z"
              fill="none" stroke="rgba(245,200,66,0.12)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-pattern)" />
      </svg>
    </div>
  );
};

/* ── Animated Bee Character ──────────────────────────── */
const BeeCharacter = ({ className = '', style: extraStyle, drift = true }) => (
  <motion.div
    className={'absolute pointer-events-none z-10 ' + className}
    style={{ transformOrigin: 'top right', ...extraStyle }}
    animate={drift ? {
      x: [0, 60, -30, 90, 20, 0],
      y: [0, -50, -90, -60, -20, 0],
      rotate: [-10, 15, -8, 20, -12, -10],
    } : undefined}
    transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
  >
    <motion.div animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 0.4, repeat: Infinity, ease: 'easeInOut' }}>
      <svg width="130" height="110" viewBox="0 0 130 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Abdomen gradient */}
          <linearGradient id="cyberAbd" x1="0" y1="0" x2="30" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#B8860B" />
            <stop offset="50%" stopColor="#F5C842" />
            <stop offset="100%" stopColor="#FFD700" />
          </linearGradient>
          {/* Thorax gradient */}
          <linearGradient id="cyberThorax" x1="45" y1="35" x2="65" y2="55" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8B6914" />
            <stop offset="100%" stopColor="#D4A017" />
          </linearGradient>
          {/* Head gradient */}
          <linearGradient id="cyberHead" x1="68" y1="30" x2="82" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#B8860B" />
            <stop offset="100%" stopColor="#FFD700" />
          </linearGradient>
          {/* Wing gradient */}
          <linearGradient id="cyberWing" x1="20" y1="18" x2="52" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(0,245,255,0.7)" />
            <stop offset="100%" stopColor="rgba(0,245,255,0.15)" />
          </linearGradient>
          {/* Laptop Screen background gradient */}
          <linearGradient id="screenBg" x1="88" y1="62" x2="108" y2="41" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0B1C3A" />
            <stop offset="100%" stopColor="#023059" />
          </linearGradient>
          {/* Hologram projection gradient */}
          <linearGradient id="hologram" x1="101" y1="52" x2="76" y2="39" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(0,245,255,0.4)" />
            <stop offset="100%" stopColor="rgba(0,245,255,0)" />
          </linearGradient>
          {/* Neon Glow Filter */}
          <filter id="cyberGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Holographic Beam Projection ── */}
        <polygon points="94,38 108,41 78,40 74,38" fill="url(#hologram)" />

        {/* ── Abdomen (Rear body segment, tilted down-left) ── */}
        <g transform="translate(48, 48) rotate(22)">
          {/* Abdomen shell */}
          <ellipse cx="-16" cy="6" rx="18" ry="10" fill="url(#cyberAbd)" stroke="rgba(100,70,0,0.6)" strokeWidth="0.8" />
          {/* Cybernetic Dark Stripes */}
          <path d="M -10 -3 Q -7 7 -10 15" stroke="#1C0E00" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M -17 -4 Q -14 6 -17 16" stroke="#1C0E00" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M -24 -3 Q -21 5 -24 13" stroke="#1C0E00" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.8" />
          {/* Mechanical Stinger */}
          <path d="M -34 6 L -42 7 L -34 9 Z" fill="#8B6914" stroke="rgba(100,70,0,0.5)" strokeWidth="0.5" />
        </g>

        {/* ── Rear Leg ── */}
        <path d="M 46 47 L 42 62 L 54 72" stroke="#8B6914" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />

        {/* ── Middle Leg ── */}
        <path d="M 52 47 L 58 60 L 78 71" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="58" cy="60" r="1.2" fill="#00F5FF" />

        {/* ── Thorax (Main body segment) ── */}
        <ellipse cx="54" cy="44" rx="11" ry="9" fill="url(#cyberThorax)" stroke="rgba(100,70,0,0.6)" strokeWidth="0.8" />
        {/* Thorax panel detail */}
        <path d="M 48 44 Q 54 41 60 44" stroke="rgba(0,0,0,0.25)" strokeWidth="1" fill="none" />

        {/* ── Wing Left (Background wing, flaps) ── */}
        <motion.g
          style={{ transformOrigin: '50px 38px' }}
          animate={{ rotate: [0, -12, 0, 12, 0], scaleY: [1, 0.8, 1, 0.9, 1] }}
          transition={{ duration: 0.12, repeat: Infinity, ease: 'linear' }}
        >
          <path d="M 50 38 C 40 28 26 16 16 20 C 10 23 14 33 28 40 C 36 44 50 38 50 38 Z" fill="url(#cyberWing)" stroke="#00F5FF" strokeWidth="0.8" />
          <path d="M 50 38 C 40 31 30 24 22 23" stroke="rgba(0,245,255,0.4)" strokeWidth="0.5" />
        </motion.g>

        {/* ── Wing Right (Foreground wing, flaps) ── */}
        <motion.g
          style={{ transformOrigin: '56px 40px' }}
          animate={{ rotate: [0, 12, 0, -12, 0], scaleY: [1, 0.85, 1, 0.9, 1] }}
          transition={{ duration: 0.12, repeat: Infinity, ease: 'linear', delay: 0.04 }}
        >
          <path d="M 56 40 C 48 26 34 12 24 16 C 16 19 20 31 36 41 C 44 46 56 40 56 40 Z" fill="url(#cyberWing)" stroke="#00F5FF" strokeWidth="0.9" />
          <path d="M 56 40 C 46 32 34 22 28 21" stroke="rgba(0,245,255,0.5)" strokeWidth="0.6" filter="url(#cyberGlow)" />
        </motion.g>

        {/* ── Head ── */}
        <circle cx="73" cy="38" r="7.5" fill="url(#cyberHead)" stroke="rgba(100,70,0,0.6)" strokeWidth="0.8" />

        {/* ── Cyber Visor (VR/AR PC HUD style) ── */}
        <path d="M 72 34 C 76 34 80 37 80 40 C 79 43 75 44 71 43 Z" fill="#00F5FF" filter="url(#cyberGlow)" opacity="0.95" />
        <path d="M 73 36 C 76 36 78 38 78 40" stroke="#FFF" strokeWidth="0.8" strokeLinecap="round" opacity="0.8" />

        {/* ── Antennae (With cyber sensor bulbs) ── */}
        <path d="M 69 32 L 64 24" stroke="#D4A017" strokeWidth="1" />
        <circle cx="63" cy="23" r="1.5" fill="#FFD700" filter="url(#cyberGlow)" />

        {/* ── Front Robotic Arm (Typing/holding PC) ── */}
        <path d="M 58 45 L 68 55 L 76 68" stroke="#F5C842" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="68" cy="55" r="1.8" fill="#00F5FF" filter="url(#cyberGlow)" />

        {/* ── The Floating PC / Laptop ── */}
        <g>
          {/* Laptop keyboard base (isometric plane) */}
          <polygon points="72,76 92,80 104,65 88,62" fill="#0B122A" stroke="#F5C842" strokeWidth="1" />
          {/* Glowing keys / trackpad */}
          <path d="M 76 74 L 88 76 M 78 72 L 90 74 M 82 68 L 94 70" stroke="#00F5FF" strokeWidth="1" opacity="0.75" />
          <rect x="85" y="72" width="4" height="2" fill="#F5C842" opacity="0.8" transform="rotate(12 85 72)" />

          {/* Laptop screen (angled up, projecting glow) */}
          <polygon points="88,62 104,65 108,41 94,38" fill="url(#screenBg)" stroke="#00F5FF" strokeWidth="1.2" filter="url(#cyberGlow)" />
          {/* Glowing screen bezel inner */}
          <polygon points="90,61 102,63 106,43 96,40" fill="#040D21" />

          {/* Code lines on the laptop screen */}
          <line x1="92" y1="46" x2="102" y2="48" stroke="#00F5FF" strokeWidth="1" opacity="0.9" />
          <line x1="93" y1="51" x2="105" y2="53" stroke="#F5C842" strokeWidth="1" opacity="0.9" />
          <line x1="91" y1="56" x2="99" y2="58" stroke="#FFF" strokeWidth="1" opacity="0.8" />

          {/* Logo on the back of the laptop screen */}
          <polygon points="99,49 101,50 100,52 98,51" fill="#F5C842" opacity="0.6" />
        </g>

        {/* ── Floating Code / Tech particles around the PC ── */}
        {/* Floating '<' symbol */}
        <path d="M 112 50 L 117 47 L 112 44" stroke="#00F5FF" strokeWidth="1.2" fill="none" strokeLinecap="round" filter="url(#cyberGlow)" />
        {/* Floating '>' symbol */}
        <path d="M 122 50 L 117 47 L 122 44" stroke="#00F5FF" strokeWidth="1.2" fill="none" strokeLinecap="round" filter="url(#cyberGlow)" />
        {/* Small floating hex cells */}
        <path d="M 116 28 L 120 30 L 120 34 L 116 36 L 112 34 L 112 30 Z" fill="none" stroke="rgba(245,200,66,0.5)" strokeWidth="0.8" />
        <path d="M 104 20 L 107 21.5 L 107 24.5 L 104 26 L 101 24.5 L 101 21.5 Z" fill="none" stroke="rgba(0,245,255,0.4)" strokeWidth="0.8" filter="url(#cyberGlow)" />
      </svg>
    </motion.div>
    <motion.div
      className="absolute inset-0 rounded-full"
      style={{
        background: 'radial-gradient(ellipse, rgba(0,245,255,0.18), transparent 75%)',
        filter: 'blur(20px)',
        pointerEvents: 'none',
        width: '180px',
        height: '160px',
        left: '-25px',
        top: '-25px',
      }}
      animate={{ opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    />
  </motion.div>
);

/* ── Stat entry ──────────────────────────────────────── */
const stats = [
  { num: 'KSh 25k', label: 'Starting price' },
  { num: 'Blueprint first', label: 'Always, no exceptions' },
  { num: 'Mombasa', label: 'Working worldwide' },
];

/* ── Colony Live Panel ───────────────────────────────── */
function ColonyLive() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const fmt = () => new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    setTime(fmt());
    const t = setInterval(() => setTime(fmt()), 60000);
    return () => clearInterval(t);
  }, []);

  const summary = summarizeColony(seedColony);
  const topBees = seedColony.bees.slice(0, 4);

  return (
    <div className="honey-card hidden lg:block" style={{
      border: '1px solid rgba(0,245,255,0.25)',
      boxShadow: '0 0 40px rgba(0,245,255,0.07)',
      borderRadius: '1.25rem',
      padding: '1.25rem',
    }}>
      {/* Top bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ width: '0.45rem', height: '0.45rem', borderRadius: '50%', background: '#5ad9bd', boxShadow: '0 0 8px #5ad9bd', display: 'inline-block', animation: 'glowPulse 2.5s ease-in-out infinite' }} />
          <span className="eyebrow" style={{ fontSize: '0.65rem' }}>COLONY · LIVE</span>
        </div>
        <span style={{ color: 'var(--gray-muted)', fontSize: '0.65rem', fontFamily: "'Space Grotesk', sans-serif" }}>{time}</span>
      </div>

      {/* Secretary digest */}
      <p style={{ color: 'var(--gray-text)', fontSize: '0.72rem', lineHeight: 1.5, marginBottom: '0.85rem', paddingBottom: '0.85rem', borderBottom: '1px solid rgba(245,200,66,0.1)' }}>
        {summary.digest[0]}
      </p>

      {/* Bee rows */}
      <div style={{ display: 'grid', gap: '0.5rem', marginBottom: '0.85rem' }}>
        {topBees.map((bee) => (
          <div key={bee.id} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', padding: '0.5rem 0.6rem', borderRadius: '0.6rem', background: 'rgba(5,14,25,0.5)', border: '1px solid rgba(145,168,178,0.09)' }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ margin: 0, color: '#eef0e8', fontSize: '0.76rem', fontWeight: 700 }}>{bee.name}</p>
              <p style={{ margin: 0, color: 'var(--gray-text)', fontSize: '0.66rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{bee.task}</p>
            </div>
            <span className={`hive-pill hive-pill--${bee.status}`} style={{ flexShrink: 0 }}>{bee.status}</span>
          </div>
        ))}
      </div>

      {/* Bottom strip */}
      <p style={{ margin: 0, color: 'var(--gray-muted)', fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', paddingTop: '0.75rem', borderTop: '1px solid rgba(245,200,66,0.08)' }}>
        {seedColony.bees.length} bees · {summary.activeBees} active
      </p>
    </div>
  );
}

export { BeeCharacter };

export default function Hero() {
  const rise = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="hero-section hero-v2">
      <HoneycombGrid />
      <div className="hero-v2__glow" aria-hidden="true" />
      <div className="hero-v2__inner">
        <motion.div className="hero-v2__copy" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.h1 variants={rise}>Digital work with<br /><em>a real point of view.</em></motion.h1>
          <motion.p variants={rise} className="hero-v2__intro">Ziramzis shapes brand identities, websites and useful web products for businesses ready to look as serious as their ambition.</motion.p>
          <motion.div variants={rise} className="hero-v2__actions">
            <a href={'https://wa.me/' + site.whatsapp + '?text=Hi%20Ziramzis%2C%20I%20want%20to%20discuss%20my%20project'} target="_blank" rel="noopener noreferrer" className="hero-v2__primary"><WhatsAppIcon size={18} /> Start a project</a>
            <a href="#work" className="hero-v2__secondary">See directions <span>↓</span></a>
          </motion.div>
          <motion.div variants={rise} className="hero-v2__proof" aria-label="Studio principles">
            <span>Blueprint first</span><i /> <span>Human-led</span><i /> <span>Built to last</span>
          </motion.div>
        </motion.div>

        <motion.div className="hero-v2__art" initial={{ opacity: 0, scale: 0.96, y: 22 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}>
          <BeeCharacter className="hero-v2__bee" style={{ scale: 0.76 }} />
          <div className="hero-v2__art-frame">
            <img src="/brand/campaign.jpg" alt="Ziramzis campaign artwork: a digital hive, bee and laptop" />
          </div>
          <div className="hero-v2__art-label"><span>01</span><p>Brand<br />to build</p></div>
          <div className="hero-v2__art-note"><strong>Busy Bee Studio</strong><span>Ideas deserve a proper home.</span></div>
        </motion.div>
      </div>
    </section>
  );
}
