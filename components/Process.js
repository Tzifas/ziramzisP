const ProcessIcon = ({ type }) => {
  const icons = {
    idea: (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
      </svg>
    ),
    design: (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    build: (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      </svg>
    ),
    test: (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    growth: (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 14c1.66 0 2.99-1.34 2.99-3S8.66 8 7 8c-1.66 0-3 1.34-3 3s1.34 3 3 3zm13.71-9.71L17 6.41V3h-2v5.59L9.71 4.29 8.29 5.71 17 14.41l8.59-8.59-1.29-1.3zM17 14c-1.66 0-2.99 1.34-2.99 3S15.34 20 17 20s3-1.34 3-3-1.34-3-3-3z" />
      </svg>
    ),
  };
  return icons[type] || icons.idea;
};

const processSteps = [
  {
    number: 1,
    title: 'You Share Your Idea',
    description: 'Tell me about your project, goals, and vision. I listen and understand your needs.',
    icon: 'idea',
  },
  {
    number: 2,
    title: 'We Plan & Design',
    description: 'I create a roadmap and design mockups to bring your vision to life.',
    icon: 'design',
  },
  {
    number: 3,
    title: 'I Build & Develop',
    description: 'Using modern technologies, I build your solution with clean, scalable code.',
    icon: 'build',
  },
  {
    number: 4,
    title: 'We Test & Deploy',
    description: 'Rigorous testing ensures everything works perfectly before launch.',
    icon: 'test',
  },
  {
    number: 5,
    title: 'You Grow & Scale',
    description: 'I provide ongoing support and maintenance to ensure your success.',
    icon: 'growth',
  },
]

import { motion } from 'framer-motion'

export default function Process() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark to-dark-card/50">
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
            How I <span className="gradient-text">Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A simple, transparent process designed to deliver exceptional results while keeping you involved every step of the way.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {processSteps.map((step, index) => (
              <motion.div key={step.number} className="relative" variants={itemVariants}>
                {/* Connector Line */}
                {index !== processSteps.length - 1 && (
                  <motion.div
                    className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-primary to-secondary hidden md:block"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  ></motion.div>
                )}

                {/* Step Container */}
                <div className="flex gap-6 md:gap-8">
                  {/* Step Number Circle */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-2xl text-white relative z-10"
                      animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}
                      whileHover={{ scale: 1.15 }}
                    >
                      <ProcessIcon type={step.icon} />
                    </motion.div>
                  </div>

                  {/* Step Content */}
                  <motion.div
                    className="flex-1 pt-2"
                    whileHover={{ x: 8 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <div className="bg-dark p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition">
                      <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Process Summary */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {[
            { icon: '⏱️', title: 'Quick Turnaround', desc: 'Efficient process without compromising quality' },
            { icon: '🤝', title: 'Full Communication', desc: 'Regular updates and transparent progress tracking' },
            { icon: '🚀', title: 'Ready to Launch', desc: 'Deploy-ready solution that\'s fully tested' },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              className="bg-dark p-6 rounded-xl text-center border border-primary/20"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              <motion.div
                className="text-4xl mb-3"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: idx * 0.2 }}
              >
                {item.icon}
              </motion.div>
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
