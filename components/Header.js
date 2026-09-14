'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BeeIcon } from './Icons';
import LogoMark from './LogoMark';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navItems = [
    { label: 'What I build', id: 'services' },
    { label: 'Idea Bee', id: 'colony' },
    { label: 'Website directions', id: 'work' },
    { label: 'Start a brief', id: 'brief' },
  ];

  return (
    <header
      className="fixed w-full top-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(5, 10, 24, 0.97)' : 'rgba(5, 10, 24, 0.7)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(245, 200, 66, 0.2)' : '1px solid rgba(245, 200, 66, 0.08)',
        boxShadow: scrolled ? '0 4px 40px rgba(245, 200, 66, 0.07)' : 'none',
      }}
    >
      {/* Top accent line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60" />

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between relative">

        {/* Logo */}
        <motion.button
          type="button"
          aria-label="Back to top"
          className="flex items-center gap-3 cursor-pointer group text-left"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="relative w-10 h-10 flex items-center justify-center"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
            <LogoMark size={38} id="hdr" />
          </motion.div>
          <div className="flex flex-col leading-none">
            <span className="font-black text-lg tracking-widest gradient-text">ZIRAMZIS</span>
            <span style={{ fontSize: '9px', color: 'rgba(0,245,255,0.7)', letterSpacing: '3px' }}>BUSY BEE STUDIO</span>
          </div>
        </motion.button>

        {/* Desktop Nav */}
        <motion.div
          className="hidden md:flex items-center gap-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {navItems.map((item, index) => (
            item.id === 'brief' ? (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="gradient-button px-6 py-2 rounded-lg font-bold text-black text-sm relative overflow-hidden flex items-center gap-2"
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <BeeIcon size={16} />
                  {item.label}
                </span>
              </motion.button>
            ) : (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-gray-300 hover:text-yellow-400 transition-colors text-sm font-medium group"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </motion.button>
            )
          ))}
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="h-0.5 bg-yellow-400 rounded"
              style={{ width: i === 1 ? '18px' : '24px' }}
              animate={isOpen
                ? i === 0 ? { rotate: 45, y: 8, width: '24px' }
                  : i === 1 ? { opacity: 0 }
                    : { rotate: -45, y: -8, width: '24px' }
                : { rotate: 0, y: 0, opacity: 1, width: i === 1 ? '18px' : '24px' }}
            />
          ))}
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-navigation"
              className="absolute top-full left-0 right-0 md:hidden"
              style={{
                background: 'rgba(5, 10, 24, 0.98)',
                borderBottom: '1px solid rgba(245, 200, 66, 0.2)',
                backdropFilter: 'blur(20px)',
              }}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="flex flex-col gap-2 p-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={item.id === 'brief'
                      ? 'gradient-button px-6 py-3 rounded-lg font-bold text-black w-full flex items-center justify-center gap-2'
                      : 'text-left py-3 px-2 text-gray-300 hover:text-yellow-400 transition border-b border-gray-800/50'}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.07 }}
                  >
                    {item.id === 'brief'
                      ? <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '8px' }}><BeeIcon size={18} />{item.label}</span>
                      : item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
