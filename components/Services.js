'use client';
import { motion } from 'framer-motion';
import {
  HoneycombIcon, GlobeIcon, MobileIcon, BriefcaseIcon, WrenchIcon,
  ForkKnifeIcon, ScaleIcon, ToothIcon, CartIcon, RocketIcon, BrushIcon
} from './Icons';

const HexIcon = ({ children, glow = 'honey' }) => (
  <div className="relative w-20 h-20 mx-auto mb-5 flex items-center justify-center">
    <svg viewBox="0 0 80 92" className="absolute inset-0 w-full h-full">
      <path d="M40 4 L76 23 L76 69 L40 88 L4 69 L4 23 Z"
        fill={glow === 'honey' ? 'rgba(245,200,66,0.08)' : 'rgba(0,245,255,0.08)'}
        stroke={glow === 'honey' ? 'rgba(245,200,66,0.4)' : 'rgba(0,245,255,0.4)'}
        strokeWidth="1.5" />
    </svg>
    <div className="relative z-10">{children}</div>
  </div>
);

const services = [
  { id: 1, Icon: GlobeIcon, title: 'Websites', description: 'Responsive, lightning-fast websites that attract visitors and convert them into customers.', glow: 'honey', iconColor: '#F5C842' },
  { id: 2, Icon: MobileIcon, title: 'Web Apps', description: 'Custom web applications built to solve real problems and accelerate business growth.', glow: 'cyan', iconColor: '#00F5FF' },
  { id: 3, Icon: BriefcaseIcon, title: 'Portfolios', description: 'Professional portfolios that showcase your best work and represent your unique brand.', glow: 'honey', iconColor: '#F5C842' },
  { id: 4, Icon: WrenchIcon, title: 'Custom Solutions', description: 'POS Systems, Dashboards, Booking Systems — if you can dream it, I can build it.', glow: 'cyan', iconColor: '#00F5FF' },
];

const industries = [
  { label: 'Restaurants', Icon: ForkKnifeIcon },
  { label: 'Law Firms', Icon: ScaleIcon },
  { label: 'Dental Clinics', Icon: ToothIcon },
  { label: 'E-Commerce', Icon: CartIcon },
  { label: 'Tech Startups', Icon: RocketIcon },
  { label: 'Creative Agencies', Icon: BrushIcon },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050A18 0%, #08122A 50%, #050A18 100%)' }}>

      <div className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='92' viewBox='0 0 80 92'%3E%3Cpath d='M40 4 L76 23 L76 69 L40 88 L4 69 L4 23 Z' fill='none' stroke='%23F5C842' stroke-width='0.4' opacity='0.08'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 92px',
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(245,200,66,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-80px' }}>
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{ background: 'rgba(245,200,66,0.08)', border: '1px solid rgba(245,200,66,0.2)', color: '#F5C842' }}
            animate={{ boxShadow: ['0 0 10px rgba(245,200,66,0.1)', '0 0 20px rgba(245,200,66,0.2)', '0 0 10px rgba(245,200,66,0.1)'] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <HoneycombIcon size={16} />
            What the Bee Does
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            What I <span className="gradient-text">Do</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Like a busy bee building its hive, I craft digital solutions with precision and purpose — tailored for businesses that want to stand out.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="honey-card p-6 rounded-2xl text-center cursor-pointer group relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <div className="absolute top-0 right-0 opacity-20 pointer-events-none">
                <svg width="40" height="46" viewBox="0 0 40 46">
                  <path d="M20 2 L38 11.5 L38 34.5 L20 44 L2 34.5 L2 11.5 Z"
                    fill={service.glow === 'honey' ? 'rgba(245,200,66,0.3)' : 'rgba(0,245,255,0.3)'} />
                </svg>
              </div>
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: service.glow === 'honey' ? 'radial-gradient(ellipse at center, rgba(245,200,66,0.06), transparent 70%)' : 'radial-gradient(ellipse at center, rgba(0,245,255,0.06), transparent 70%)' }}
              />
              <HexIcon glow={service.glow}>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.3 }}
                >
                  <service.Icon size={32} color={service.iconColor} />
                </motion.div>
              </HexIcon>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${service.glow === 'honey' ? '#F5C842' : '#00F5FF'}, transparent)` }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Industries */}
        <motion.div className="mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-80px' }}>
          <h3 className="text-3xl font-black text-center mb-4">
            Industries I <span className="gradient-text">Serve</span>
          </h3>
          <p className="text-gray-400 text-center mb-10 max-w-xl mx-auto">
            The busy bee pollinates every flower — I bring digital excellence to every industry.
          </p>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {industries.map((industry, index) => (
              <motion.div
                key={industry.label}
                className="honey-card p-4 rounded-xl text-center font-semibold text-sm cursor-pointer relative overflow-hidden group"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                  style={{ background: 'linear-gradient(135deg, rgba(245,200,66,0.08), rgba(0,245,255,0.04))' }}
                />
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <motion.div
                    animate={{ rotate: [0, 8, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.25 }}
                  >
                    <industry.Icon size={24} color={index % 2 === 0 ? '#F5C842' : '#00F5FF'} />
                  </motion.div>
                  <span className="text-gray-300 group-hover:text-yellow-400 transition-colors duration-300">
                    {industry.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
