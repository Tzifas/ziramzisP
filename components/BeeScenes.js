'use client';

import { motion } from 'framer-motion';
import { BeeIcon } from './Icons';

const glow = 'drop-shadow(0 12px 12px rgba(0,0,0,.34)) drop-shadow(0 0 15px rgba(0,245,255,.28))';

export function NoteBee({ size = 122, className = '' }) {
  return (
    <motion.div className={`bee-scene bee-scene--notes ${className}`} style={{ width: size * 1.34, height: size * 1.08 }} animate={{ y: [0, -5, 0], rotate: [-1, 1, -1] }} transition={{ duration: 3.1, repeat: Infinity, ease: 'easeInOut' }}>
      <div className="bee-scene__hive-door" />
      <div className="bee-scene__notebook"><i /><i /><i /><b /></div>
      <motion.div className="bee-scene__body" style={{ filter: glow }} animate={{ rotate: [-2, 1, -2] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}><BeeIcon size={size} /></motion.div>
      <motion.span className="bee-scene__pencil" animate={{ rotate: [-8, 7, -8], y: [0, 2, 0] }} transition={{ duration: .72, repeat: Infinity, ease: 'easeInOut' }} />
      <span className="bee-scene__spark bee-scene__spark--one" /><span className="bee-scene__spark bee-scene__spark--two" />
    </motion.div>
  );
}

export function PhoneBee({ size = 94, className = '' }) {
  return (
    <motion.div className={`bee-scene bee-scene--phone ${className}`} style={{ width: size * 1.25, height: size * 1.12 }} animate={{ y: [0, -6, 0], rotate: [-2, 2, -2] }} transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}>
      <div className="bee-scene__phone-glow" />
      <motion.div className="bee-scene__body" style={{ filter: glow }}><BeeIcon size={size} /></motion.div>
      <motion.div className="bee-scene__phone" animate={{ rotate: [-3, 3, -3] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}><i /><b /><span /></motion.div>
      <span className="bee-scene__arm bee-scene__arm--phone" />
    </motion.div>
  );
}
