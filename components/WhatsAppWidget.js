'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { WhatsAppIcon } from './Icons';

export default function WhatsAppWidget() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after 1.5 seconds delay once the page loads
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          {/* Tooltip/Label */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                className="bg-slate-900 border border-yellow-400/30 text-white text-xs font-semibold px-3 py-2 rounded-lg shadow-xl whitespace-nowrap pointer-events-none relative flex items-center"
                style={{ boxShadow: '0 4px 20px rgba(245,200,66,0.15)' }}
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                Chat on WhatsApp
                {/* Micro tooltip arrow pointing right */}
                <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-900 border-r border-t border-yellow-400/30 rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating Action Button */}
          <motion.a
            href="https://wa.me/254711410442?text=Hi%20Ziramzis%2C%20I%20have%20a%20question%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full flex items-center justify-center cursor-pointer shadow-lg relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
              boxShadow: '0 0 20px rgba(37, 211, 102, 0.4)',
            }}
            whileHover={{ scale: 1.1, y: -4, boxShadow: '0 0 30px rgba(37, 211, 102, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            {/* Pulsing overlay ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-white/30"
              animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />

            <WhatsAppIcon size={28} className="text-white" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
