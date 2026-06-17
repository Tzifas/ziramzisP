const WorkIcon = ({ type }) => {
  const icons = {
    restaurant: (
      <svg className="w-16 h-16 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
    dental: (
      <svg className="w-16 h-16 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-1.946 3.42 3.42 0 015.946 0 3.42 3.42 0 001.946 1.946 3.42 3.42 0 010 5.946 3.42 3.42 0 00-1.946 1.946 3.42 3.42 0 01-5.946 0 3.42 3.42 0 00-1.946-1.946 3.42 3.42 0 010-5.946z" />
      </svg>
    ),
    law: (
      <svg className="w-16 h-16 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17.25c0 5.105 3.07 9.408 7.5 11.398m0-20c5.5 0 10 4.745 10 10.997v13c0 5.105-3.07 9.408-7.5 11.398" />
      </svg>
    ),
    dashboard: (
      <svg className="w-16 h-16 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    ecommerce: (
      <svg className="w-16 h-16 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    portfolio: (
      <svg className="w-16 h-16 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  };
  return icons[type] || icons.portfolio;
};

const workSamples = [
  {
    id: 1,
    title: 'Restaurant Website',
    description: 'Modern restaurant website with online ordering and reservation system',
    category: 'Web Design',
    icon: 'restaurant',
  },
  {
    id: 2,
    title: 'Dental Clinic Portal',
    description: 'Patient management system for dental clinics with appointment booking',
    category: 'Web App',
    icon: 'dental',
  },
  {
    id: 3,
    title: 'Law Firm Site',
    description: 'Professional website for law firm with case management integration',
    category: 'Web Design',
    icon: 'law',
  },
  {
    id: 4,
    title: 'POS Dashboard',
    description: 'Real-time sales dashboard for retail business operations',
    category: 'Dashboard',
    icon: 'dashboard',
  },
  {
    id: 5,
    title: 'E-Commerce Platform',
    description: 'Full-featured online store with payment integration and inventory',
    category: 'Web App',
    icon: 'ecommerce',
  },
  {
    id: 6,
    title: 'Portfolio Showcase',
    description: 'Creative portfolio website for designer and artist showcase',
    category: 'Portfolio',
    icon: 'portfolio',
  },
]

import { motion } from 'framer-motion'

export default function Work() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-card/50 to-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of the projects I've built that made a real impact for my clients.
          </p>
        </motion.div>

        {/* Work Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {workSamples.map((work) => (
            <motion.div
              key={work.id}
              className="glow-effect bg-dark-card rounded-xl overflow-hidden border border-primary/20 hover:border-primary/50 transition group cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              {/* Thumbnail */}
              <motion.div
                className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden relative"
                whileHover={{ scale: 1.05 }}
              >
                <WorkIcon type={work.icon} />
              </motion.div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <motion.span
                    className="text-xs font-semibold text-primary uppercase tracking-wider"
                    whileHover={{ scale: 1.1 }}
                  >
                    {work.category}
                  </motion.span>
                  <motion.div
                    className="w-8 h-8"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{work.description}</p>
                <motion.button
                  className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition"
                  whileHover={{ x: 5 }}
                >
                  View Project →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <motion.a
            href="https://wa.me/254711410442?text=Hi%20Ziramzis%2C%20I%20want%20to%20see%20more%20of%20your%20work"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-button px-8 py-3 rounded-lg font-semibold text-white inline-block"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            Chat on WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
