'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  BeeIcon, GlobeIcon, MobileIcon, BriefcaseIcon, BoltIcon,
  BuildingsIcon, SmileIcon, StarIcon, HoneyJarIcon, WhatsAppIcon, EmailIcon
} from './Icons';

/* ── Animated Honeycomb Grid ──────────────────────────── */
const HoneycombGrid = () => {
  const hexes = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    x: (i % 6) * 90 + (Math.floor(i / 6) % 2 === 0 ? 0 : 45),
    y: Math.floor(i / 6) * 78,
    delay: i * 0.08,
    size: 35 + (i % 3) * 10,
    opacity: 0.04 + (i % 4) * 0.02,
  }));

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
      {hexes.map((hex) => (
        <motion.div
          key={hex.id}
          className="absolute"
          style={{ left: `${hex.x}px`, top: `${hex.y}px` }}
          animate={{ opacity: [hex.opacity, hex.opacity * 3, hex.opacity], scale: [1, 1.1, 1] }}
          transition={{ duration: 3 + hex.delay * 2, repeat: Infinity, delay: hex.delay, ease: 'easeInOut' }}
        >
          <svg width={hex.size} height={hex.size * 1.15} viewBox="0 0 40 46">
            <path d="M20 2 L38 11.6 L38 34.4 L20 44 L2 34.4 L2 11.6 Z"
              fill="rgba(245,200,66,0.05)" stroke="rgba(245,200,66,0.18)" strokeWidth="1" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

/* ── Animated Bee Character ──────────────────────────── */
const BeeCharacter = () => (
  <motion.div
    className="absolute pointer-events-none right-[4%] top-[12%] sm:right-[6%] sm:top-[18%] lg:right-[8%] lg:top-[25%] z-10 scale-[0.65] sm:scale-75 md:scale-90 lg:scale-100"
    style={{ transformOrigin: 'top right' }}
    animate={{
      x: [0, 60, -30, 90, 20, 0],
      y: [0, -50, -90, -60, -20, 0],
      rotate: [-10, 15, -8, 20, -12, -10],
    }}
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

/* ── Floating Honey Drops ────────────────────────────── */
const HoneyDrops = () => {
  const drops = [
    { id: 0, x: '10%', delay: 0, color: 'rgba(245,200,66,0.6)' },
    { id: 1, x: '75%', delay: 1.5, color: 'rgba(0,245,255,0.5)' },
    { id: 2, x: '40%', delay: 3, color: 'rgba(245,200,66,0.4)' },
    { id: 3, x: '88%', delay: 4.5, color: 'rgba(255,241,118,0.5)' },
    { id: 4, x: '22%', delay: 6, color: 'rgba(0,245,255,0.4)' },
  ];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute"
          style={{ left: drop.x, bottom: '-10px' }}
          animate={{ y: [0, -800], opacity: [0, 0.8, 0.4, 0] }}
          transition={{ duration: 8 + drop.delay, delay: drop.delay, repeat: Infinity, ease: 'easeOut' }}
        >
          <svg width="12" height="16" viewBox="0 0 12 16">
            <path d="M6 0 C6 0 0 8 0 11 C0 14.3 2.7 16 6 16 C9.3 16 12 14.3 12 11 C12 8 6 0 6 0 Z"
              fill={drop.color} />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

/* ── Stat entry ──────────────────────────────────────── */
const stats = [
  { num: '50+', label: 'Projects Delivered', Icon: BuildingsIcon },
  { num: '30+', label: 'Happy Clients', Icon: SmileIcon },
  { num: '3+', label: 'Years Experience', Icon: StarIcon },
];

/* ── Orbiting icons ──────────────────────────────────── */
const orbitIcons = [GlobeIcon, MobileIcon, BriefcaseIcon, BoltIcon];

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  const [typedText, setTypedText] = useState('');
  const words = ['Websites.', 'Web Apps.', 'Portfolios.', 'Solutions.'];
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setTypedText(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800);
        } else {
          setCharIdx(charIdx + 1);
        }
      } else {
        setTypedText(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx((wordIdx + 1) % words.length);
          setCharIdx(0);
        } else {
          setCharIdx(charIdx - 1);
        }
      }
    }, deleting ? 60 : 100);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx]);

  return (
    <section
      className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #050A18 0%, #08122A 50%, #050A18 100%)' }}
    >
      <HoneycombGrid />
      <HoneyDrops />
      <BeeCharacter />

      {/* Radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div className="absolute rounded-full"
          style={{ width: '600px', height: '600px', background: 'radial-gradient(ellipse, rgba(245,200,66,0.08) 0%, transparent 70%)', left: '-100px', top: '10%' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div className="absolute rounded-full"
          style={{ width: '400px', height: '400px', background: 'radial-gradient(ellipse, rgba(0,245,255,0.06) 0%, transparent 70%)', right: '-50px', bottom: '10%' }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">

          {/* Badge */}
          <motion.div variants={itemVariants}>
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
              style={{ background: 'rgba(245,200,66,0.1)', border: '1px solid rgba(245,200,66,0.3)', color: '#F5C842' }}
              whileHover={{ scale: 1.05 }}
              animate={{ boxShadow: ['0 0 10px rgba(245,200,66,0.1)', '0 0 20px rgba(245,200,66,0.25)', '0 0 10px rgba(245,200,66,0.1)'] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <BeeIcon size={18} />
              Busy Bee Studio — Mombasa, Kenya
            </motion.span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
              <motion.span className="block text-white"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity }}>
                I Build Digital
              </motion.span>
              <span className="block gradient-text mt-1">
                {typedText}
                <motion.span
                  className="inline-block w-0.5 h-12 ml-1 align-middle"
                  style={{ background: '#F5C842' }}
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                />
              </span>
              <span className="block text-white mt-1">That Help Businesses</span>
              <motion.span
                className="block flex items-center gap-3"
                style={{ color: '#00F5FF' }}
                animate={{ textShadow: ['0 0 10px rgba(0,245,255,0.3)', '0 0 30px rgba(0,245,255,0.7)', '0 0 10px rgba(0,245,255,0.3)'] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                Grow.
                <motion.span animate={{ rotate: [-10, 10, -10], y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                  <HoneyJarIcon size={48} />
                </motion.span>
              </motion.span>
            </h1>
            <p className="mt-5 text-gray-400 text-lg max-w-lg leading-relaxed">
              Modern, fast and crafted with purpose — like a bee building its hive. Every pixel counts, every line of code matters.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
            <motion.a
              href="https://wa.me/254711410442?text=Hi%20Ziramzis%2C%20I%20want%20to%20discuss%20my%20project"
              target="_blank" rel="noopener noreferrer"
              className="gradient-button px-8 py-4 rounded-xl font-bold text-black text-center inline-flex items-center justify-center gap-3"
              whileHover={{ scale: 1.06, y: -4 }}
              whileTap={{ scale: 0.97 }}
            >
              <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <WhatsAppIcon size={20} />
                Chat on WhatsApp
              </span>
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 rounded-xl font-bold text-center border-2 transition inline-flex items-center justify-center gap-3"
              style={{ borderColor: 'rgba(0,245,255,0.5)', color: '#00F5FF', background: 'rgba(0,245,255,0.05)' }}
              whileHover={{ scale: 1.06, y: -4, borderColor: '#00F5FF', boxShadow: '0 0 25px rgba(0,245,255,0.4)', background: 'rgba(0,245,255,0.1)' }}
              whileTap={{ scale: 0.97 }}
            >
              <EmailIcon size={20} color="#00F5FF" />
              Send a Message
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-6 pt-8"
            variants={itemVariants}
            style={{ borderTop: '1px solid rgba(245,200,66,0.15)' }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                whileHover={{ scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <motion.div
                  className="flex justify-center mb-2"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                >
                  <stat.Icon size={22} color="#F5C842" />
                </motion.div>
                <p className="text-3xl font-black gradient-text">{stat.num}</p>
                <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — Visual Hive */}
        <motion.div
          className="hidden lg:flex items-center justify-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="relative w-96 h-96">
            {/* Rotating outer hex */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            >
              <svg viewBox="0 0 200 230" className="w-full h-full">
                <path d="M100 10 L190 55 L190 175 L100 220 L10 175 L10 55 Z"
                  fill="none" stroke="rgba(245,200,66,0.15)" strokeWidth="2" />
                <path d="M100 30 L175 68 L175 162 L100 200 L25 162 L25 68 Z"
                  fill="rgba(245,200,66,0.04)" stroke="rgba(245,200,66,0.25)" strokeWidth="1" />
              </svg>
            </motion.div>

            {/* Center */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.div
                className="w-24 h-24 flex items-center justify-center rounded-full mb-4"
                style={{ background: 'radial-gradient(circle, rgba(245,200,66,0.2), rgba(245,200,66,0.05))' }}
                animate={{ boxShadow: ['0 0 20px rgba(245,200,66,0.2)', '0 0 60px rgba(245,200,66,0.5)', '0 0 20px rgba(245,200,66,0.2)'] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <BeeIcon size={52} />
              </motion.div>
              <h3 className="text-xl font-black gradient-text">Busy Bee</h3>
              <p className="text-gray-400 text-sm text-center mt-1">Building your digital hive</p>
            </div>

            {/* Orbiting Icons */}
            {orbitIcons.map((IconComp, i) => {
              const angle = (i * 90) * (Math.PI / 180);
              return (
                <motion.div
                  key={i}
                  className="absolute w-14 h-14 flex items-center justify-center rounded-lg"
                  style={{
                    left: `${50 + Math.cos(angle) * 40}%`,
                    top: `${50 + Math.sin(angle) * 40}%`,
                    transform: 'translate(-50%, -50%)',
                    background: 'rgba(13, 31, 60, 0.9)',
                    border: '1px solid rgba(245,200,66,0.25)',
                  }}
                  animate={{ rotate: [0, -360] }}
                  transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                  whileHover={{ scale: 1.2, zIndex: 20 }}
                >
                  <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}>
                    <IconComp size={22} color="#F5C842" />
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Floating dots */}
            {[...Array(8)].map((_, i) => (
              <motion.div key={i} className="absolute pointer-events-none"
                style={{ left: `${10 + (i * 11) % 80}%`, top: `${10 + (i * 17) % 80}%` }}
                animate={{ opacity: [0, 0.6, 0], scale: [0, 1, 0], y: [0, -30] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4, ease: 'easeOut' }}
              >
                <div className="w-2 h-2 rounded-full" style={{ background: i % 2 === 0 ? '#F5C842' : '#00F5FF' }} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.span className="text-xs text-gray-500"
          animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>
          Scroll to explore
        </motion.span>
        <motion.div
          className="w-6 h-10 rounded-full border flex items-start justify-center pt-2"
          style={{ borderColor: 'rgba(245,200,66,0.3)' }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: '#F5C842' }}
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
