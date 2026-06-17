import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  const menuVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: 'auto' },
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-dark/95 backdrop-blur-md border-b border-primary/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="w-10 h-10 gradient-text font-bold text-2xl flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            Z
          </motion.div>
          <span className="font-bold text-lg hidden sm:block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">ZIRAMZIS</span>
        </motion.div>

        {/* Desktop Menu */}
        <motion.div className="hidden md:flex items-center gap-8" variants={menuVariants} initial="closed" animate="open">
          {['Services', 'Work', 'Process', 'Contact'].map((item, index) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={item === 'Contact' ? 'gradient-button px-6 py-2 rounded-lg font-semibold text-white' : 'hover:text-primary transition text-gray-300'}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item}
            </motion.button>
          ))}
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            className="w-6 h-0.5 bg-white"
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          ></motion.div>
          <motion.div
            className="w-6 h-0.5 bg-white"
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          ></motion.div>
          <motion.div
            className="w-6 h-0.5 bg-white"
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          ></motion.div>
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-full left-0 right-0 bg-dark border-b border-primary/10 md:hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.div className="flex flex-col gap-4 p-4">
                {['Services', 'Work', 'Process', 'Contact'].map((item, index) => (
                  <motion.button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={item === 'Contact' ? 'gradient-button px-6 py-2 rounded-lg font-semibold text-white w-full' : 'text-left hover:text-primary transition py-2 text-gray-300'}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item}
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
