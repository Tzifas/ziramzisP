const ServiceIcon = ({ type }) => {
  const icons = {
    globe: (
      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.6 9h16.8M3.6 15h16.8M9 3v18M15 3v18" />
      </svg>
    ),
    mobile: (
      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    briefcase: (
      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m0 10v10l8 4m0-10l8 4" />
      </svg>
    ),
    wrench: (
      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5.36 4.364l-.707.707M9 12a3 3 0 11 0-6 3 3 3 0 010-6z" />
      </svg>
    ),
  };
  return icons[type] || icons.globe;
};

const services = [
  {
    id: 1,
    icon: 'globe',
    title: 'Websites',
    description: 'Responsive, fast and modern websites that attract and convert your customers.'
  },
  {
    id: 2,
    icon: 'mobile',
    title: 'Web Apps',
    description: 'Custom web applications that solve real problems and drive business growth.'
  },
  {
    id: 3,
    icon: 'briefcase',
    title: 'Portfolios',
    description: 'Professional portfolios that showcase your best work and represent your brand.'
  },
  {
    id: 4,
    icon: 'wrench',
    title: 'Other Solutions',
    description: 'POS Systems, Dashboards, Booking Systems, and more custom solutions.'
  },
]

import { motion } from 'framer-motion'

export default function Services() {
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
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark to-dark-card/50">
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
            What I <span className="gradient-text">Do</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I provide comprehensive digital solutions tailored to help small businesses, entrepreneurs, and professionals succeed in the digital landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="glow-effect bg-dark p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition group cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <motion.div
                className="mb-4 flex justify-center"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                whileHover={{ scale: 1.2, rotate: 0 }}
              >
                <ServiceIcon type={service.icon} />
              </motion.div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Industries */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Industries I <span className="gradient-text">Serve</span>
          </h3>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {['Restaurants', 'Law Firms', 'Dental Clinics', 'E-Commerce', 'Tech Startups', 'Creative Agencies'].map((industry, index) => (
              <motion.div
                key={industry}
                className="bg-dark p-4 rounded-lg border border-primary/20 text-center hover:border-primary/50 transition"
                variants={itemVariants}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(45, 212, 191, 0.1)' }}
              >
                {industry}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
