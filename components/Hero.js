'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const floatVariants = {
    animate: {
      y: [0, -20, 0],
      transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center bg-gradient-to-b from-dark via-dark to-dark/95">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              I Build Digital
              <br />
              <span className="gradient-text">Solutions That Help</span>
              <br />
              Businesses Grow.
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl max-w-lg">
              Websites, Web Apps & Portfolios built with passion and purpose. Modern, fast and built to make an impact.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
            <motion.a
              href="https://wa.me/254711410442?text=Hi%20Ziramzis%2C%20I%20want%20to%20discuss%20my%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button px-8 py-4 rounded-lg font-semibold text-white text-center inline-flex items-center justify-center gap-2 hover:shadow-lg transition"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.289-3.795 6.233-1.976 9.038 1.819 2.805 5.063 3.289 7.68 2.2l.5.291c.39.113.645.6.211 1.127-.434.527-.923.852-1.346.852-.423 0-.923-.325-1.346-.852l-.5-.291c-2.617 1.089-5.861.605-7.68-2.2-1.819-2.805-1.079-6.749 1.976-9.038a9.87 9.87 0 015.031-1.378z"/>
              </svg>
              Chat on WhatsApp
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 rounded-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition text-center"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              Send a Message
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-800" variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
              <p className="text-2xl font-bold gradient-text">50+</p>
              <p className="text-gray-400 text-sm">Projects Delivered</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
              <p className="text-2xl font-bold gradient-text">30+</p>
              <p className="text-gray-400 text-sm">Happy Clients</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
              <p className="text-2xl font-bold gradient-text">3+</p>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          className="hidden lg:flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className="relative w-full h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-primary/20 flex items-center justify-center overflow-hidden group"
            variants={floatVariants}
            animate="animate"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 group-hover:opacity-75 transition opacity-0"></div>
            <div className="relative z-10 text-center space-y-4">
              <motion.div
                className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold">Digital Impact</h3>
              <p className="text-gray-300">Modern solutions for modern businesses</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
