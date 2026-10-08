'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { BeeCharacter } from './Hero';

export default function KeeperBee() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [started, setStarted] = useState(false);
  const [parked, setParked] = useState(false);
  const [startX, setStartX] = useState(-400);
  const [top, setTop] = useState(120);
  const [showHint, setShowHint] = useState(false);
  const anchorRef = useRef(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    const section = anchorRef.current ? anchorRef.current.parentElement : null;
    if (!section || typeof IntersectionObserver === 'undefined') { setSectionVisible(true); return; }
    const io = new IntersectionObserver((e) => setSectionVisible(!!e[0] && e[0].isIntersecting), { threshold: 0 });
    io.observe(section);
    return () => io.disconnect();
  }, [mounted]);

  // Park position: anchored above the first hex step
  useEffect(() => {
    if (!mounted || !sectionVisible) return;
    let raf = 0;
    const update = () => {
      const hex = document.querySelector('.process-step-number');
      if (!hex) return;
      const r = hex.getBoundingClientRect();
      setTop(Math.max(Math.min(r.top - 92, window.innerHeight - 220), 84));
    };
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [mounted, sectionVisible]);

  useEffect(() => {
    if (!mounted || !sectionVisible || started) return;
    setStartX(-(window.innerWidth + 40));
    setStarted(true);
  }, [mounted, sectionVisible, started]);

  // 8-second hint mechanic — fires once per session
  useEffect(() => {
    if (!parked) return;
    if (typeof window !== 'undefined' && sessionStorage.getItem('hive-hinted') === '1') return;
    const t = setTimeout(() => {
      setShowHint(true);
      setTimeout(() => {
        setShowHint(false);
        if (typeof window !== 'undefined') sessionStorage.setItem('hive-hinted', '1');
      }, 4000);
    }, 8000);
    return () => clearTimeout(t);
  }, [parked]);

  function catchBee() {
    router.push('/keeper');
  }

  if (!mounted) return null;

  return (
    <>
      <div ref={anchorRef} style={{ height: 0 }} />
      {sectionVisible && started && (
        <motion.button
          type="button"
          className="keeper-bee"
          onClick={catchBee}
          aria-label="Meet the Keeper — about Ziramzis"
          initial={parked ? false : { x: startX }}
          animate={{ x: 0 }}
          transition={parked ? { duration: 0 } : { duration: 9, ease: 'easeInOut' }}
          onAnimationComplete={() => setParked(true)}
          whileHover={{ scale: 1.04 }}
          style={{ position: 'fixed', right: 10, top, zIndex: 45, width: 130, height: 170,
            pointerEvents: 'auto', cursor: 'pointer', background: 'transparent', border: 'none', padding: 0 }}
        >
          <motion.div
            animate={{ x: [0, 9, -7, 11, 4, 0], y: [0, -7, 2, -5, -2, 0], rotate: [0, 2, -1.5, 2, 0, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'absolute', right: 0, top: 0, width: 84, height: 74 }}
          >
            <BeeCharacter drift={false} className="right-0 top-0" style={{ scale: 0.58 }} />

            {/* Hint tooltip (8-second mechanic, once per session) */}
            <AnimatePresence>
              {showHint ? (
                <motion.div
                  key="hint"
                  initial={{ opacity: 0, scale: 0.85, y: 4 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    position: 'absolute', left: '50%', top: '100%',
                    transform: 'translateX(-50%)', marginTop: 8,
                    whiteSpace: 'nowrap',
                    background: 'rgba(5,10,24,0.97)',
                    border: '1px solid rgba(245,200,66,0.55)',
                    color: 'white', fontSize: 12, fontWeight: 700,
                    padding: '8px 14px', borderRadius: 999,
                    boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                  }}
                >
                  Curious who&apos;s behind the hive? &rarr;
                </motion.div>
              ) : (
                <motion.span
                  key="label"
                  className="keeper-bee__label"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    position: 'absolute', left: '50%', top: '100%',
                    transform: 'translateX(-50%)', marginTop: 6,
                    whiteSpace: 'nowrap',
                    background: 'rgba(13,31,60,0.95)',
                    border: '1px solid rgba(245,200,66,0.45)',
                    color: 'var(--cyan-mid)', fontSize: 11, fontWeight: 800,
                    padding: '5px 11px', borderRadius: 999,
                    boxShadow: '0 6px 18px rgba(0,0,0,0.3)',
                  }}
                >
                  Meet the Keeper
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.button>
      )}
    </>
  );
}
