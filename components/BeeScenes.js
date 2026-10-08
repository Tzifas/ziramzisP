'use client';

import { motion } from 'framer-motion';
import { BeeIcon } from './Icons';

const glow = 'drop-shadow(0 12px 12px rgba(0,0,0,.34)) drop-shadow(0 0 15px rgba(0,245,255,.28))';

export function NoteBee({ size = 122, className = '', still = false }) {
  return (
    <motion.div
      className={`bee-scene bee-scene--notes ${className}`}
      style={{ width: size * 1.34, height: size * 1.08 }}
      {...(!still && { animate: { y: [0, -5, 0], rotate: [-1, 1, -1] }, transition: { duration: 3.1, repeat: Infinity, ease: 'easeInOut' } })}
    >
      <div className="bee-scene__hive-door" />
      <div className="bee-scene__notebook"><i /><i /><i /><b /></div>
      <motion.div
        className="bee-scene__body"
        style={{ filter: glow }}
        {...(!still && { animate: { rotate: [-2, 1, -2] }, transition: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' } })}
      >
        <BeeIcon size={size} />
      </motion.div>
      <motion.span
        className="bee-scene__pencil"
        {...(!still && { animate: { rotate: [-8, 7, -8], y: [0, 2, 0] }, transition: { duration: .72, repeat: Infinity, ease: 'easeInOut' } })}
      />
      <span className="bee-scene__spark bee-scene__spark--one" style={still ? { animation: 'none' } : undefined} />
      <span className="bee-scene__spark bee-scene__spark--two" style={still ? { animation: 'none' } : undefined} />
    </motion.div>
  );
}

export function PhoneBee({ size = 94, className = '', still = false }) {
  return (
    <motion.div
      className={`bee-scene bee-scene--phone ${className}`}
      style={{ width: size * 1.25, height: size * 1.12 }}
      {...(!still && { animate: { y: [0, -6, 0], rotate: [-2, 2, -2] }, transition: { duration: 2.8, repeat: Infinity, ease: 'easeInOut' } })}
    >
      <div className="bee-scene__phone-glow" />
      <motion.div className="bee-scene__body" style={{ filter: glow }}><BeeIcon size={size} /></motion.div>
      <motion.div
        className="bee-scene__phone"
        {...(!still && { animate: { rotate: [-3, 3, -3] }, transition: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' } })}
      >
        <i /><b /><span />
      </motion.div>
      <span className="bee-scene__arm bee-scene__arm--phone" />
    </motion.div>
  );
}

export function ContactBee({ size = 96, className = '', still = false }) {
  const motionProps = still ? {} : { animate: { y: [0, -4, 0], rotate: [-1.5, 1.5, -1.5] }, transition: { duration: 2.7, repeat: Infinity, ease: 'easeInOut' } };
  return (
    <motion.div className={`contact-bee ${className}`} style={{ width: size * 1.28, height: size }} {...motionProps}>
      <svg width="100%" height="100%" viewBox="0 0 128 100" fill="none" aria-label="Bee holding a phone">
        <defs>
          <linearGradient id="contact-bee-body" x1="26" y1="28" x2="58" y2="78" gradientUnits="userSpaceOnUse"><stop stopColor="#FFD76B" /><stop offset=".55" stopColor="#F5C842" /><stop offset="1" stopColor="#9D6B10" /></linearGradient>
          <linearGradient id="contact-bee-wing" x1="26" y1="19" x2="56" y2="44" gradientUnits="userSpaceOnUse"><stop stopColor="#8AF6F5" stopOpacity=".8" /><stop offset="1" stopColor="#00AFC0" stopOpacity=".12" /></linearGradient>
          <linearGradient id="contact-bee-phone" x1="96" y1="32" x2="116" y2="70" gradientUnits="userSpaceOnUse"><stop stopColor="#143953" /><stop offset="1" stopColor="#07101E" /></linearGradient>
          <filter id="contact-bee-glow" x="-30%" y="-30%" width="180%" height="180%"><feGaussianBlur stdDeviation="2" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        </defs>
        <motion.path d="M43 38C29 30 14 14 10 22c-4 9 13 24 31 27Z" fill="url(#contact-bee-wing)" stroke="#3FE7EA" strokeWidth="1" style={{ transformOrigin: '43px 38px' }} {...(!still && { animate: { rotate: [-8, 7, -8] }, transition: { duration: .13, repeat: Infinity } })} />
        <motion.path d="M51 39C42 23 31 11 26 20c-4 8 8 22 24 27Z" fill="url(#contact-bee-wing)" stroke="#3FE7EA" strokeWidth="1" style={{ transformOrigin: '51px 39px' }} {...(!still && { animate: { rotate: [8, -7, 8] }, transition: { duration: .13, repeat: Infinity } })} />
        <ellipse cx="46" cy="62" rx="19" ry="24" fill="url(#contact-bee-body)" stroke="#8A6115" />
        <path d="M29 51Q46 47 63 51M27 60Q46 56 65 60M28 69Q46 65 64 69" stroke="#1B160B" strokeWidth="5" strokeLinecap="round" />
        <ellipse cx="55" cy="39" rx="13" ry="11" fill="#D29A1A" stroke="#8A6115" />
        <circle cx="68" cy="29" r="10" fill="#E5AF28" stroke="#8A6115" />
        <path d="M63 21l-5-9M71 20l4-9" stroke="#E5AF28" strokeWidth="2" strokeLinecap="round" /><circle cx="57" cy="11" r="2" fill="#F5C842" /><circle cx="76" cy="10" r="2" fill="#F5C842" />
        <path d="M67 26c4-2 7 0 8 3M65 27c-2 2-2 5 0 7" stroke="#062636" strokeWidth="2" strokeLinecap="round" /><circle cx="70" cy="28" r="1.2" fill="#78FFFF" />
        <path d="M58 43c9 4 15 12 22 16" stroke="#E5AF28" strokeWidth="3" strokeLinecap="round" /><circle cx="80" cy="59" r="2" fill="#00DCE7" filter="url(#contact-bee-glow)" />
        <path d="M81 60c7-3 9-9 12-13" stroke="#E5AF28" strokeWidth="3" strokeLinecap="round" />
        <rect x="93" y="27" width="23" height="43" rx="5" fill="url(#contact-bee-phone)" stroke="#F5C842" strokeWidth="1.4" transform="rotate(8 93 27)" />
        <rect x="96" y="33" width="17" height="26" rx="2" fill="#071A2C" transform="rotate(8 96 33)" /><path d="M99 39l9 1M98 44l11 2M99 50l7 1" stroke="#00DCE7" strokeWidth="1.4" strokeLinecap="round" filter="url(#contact-bee-glow)" /><circle cx="106" cy="64" r="1.4" fill="#F5C842" />
        <circle cx="119" cy="22" r="2" fill="#00DCE7" filter="url(#contact-bee-glow)" /><circle cx="122" cy="75" r="1.5" fill="#F5C842" />
      </svg>
    </motion.div>
  );
}
