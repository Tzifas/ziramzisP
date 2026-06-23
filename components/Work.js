'use client';
import { motion } from 'framer-motion';
import {
  ForkKnifeIcon, ToothIcon, ScaleIcon, ChartIcon, CartIcon,
  ImageIcon, BeeIcon, WhatsAppIcon, ArrowRightIcon
} from './Icons';

const workSamples = [
  { id: 1, Icon: ForkKnifeIcon, title: 'Restaurant Website', description: 'Modern site with online ordering and reservations', category: 'Web Design', accentColor: '#F5C842' },
  { id: 2, Icon: ToothIcon, title: 'Dental Clinic Portal', description: 'Patient management with appointment booking system', category: 'Web App', accentColor: '#00F5FF' },
  { id: 3, Icon: ScaleIcon, title: 'Law Firm Site', description: 'Professional website with case management integration', category: 'Web Design', accentColor: '#F5C842' },
  { id: 4, Icon: ChartIcon, title: 'POS Dashboard', description: 'Real-time sales dashboard for retail operations', category: 'Dashboard', accentColor: '#00F5FF' },
  { id: 5, Icon: CartIcon, title: 'E-Commerce Platform', description: 'Full-featured online store with payment integration', category: 'Web App', accentColor: '#F5C842' },
  { id: 6, Icon: ImageIcon, title: 'Portfolio Showcase', description: 'Creative portfolio for designers and artists', category: 'Portfolio', accentColor: '#00F5FF' },
];

export default function Work() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050A18 0%, #0A1628 60%, #050A18 100%)' }}>

      <div className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='92' viewBox='0 0 80 92'%3E%3Cpath d='M40 4 L76 23 L76 69 L40 88 L4 69 L4 23 Z' fill='none' stroke='%23F5C842' stroke-width='0.4' opacity='0.07'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 92px',
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(245,200,66,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-80px' }}>
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{ background: 'rgba(0,245,255,0.08)', border: '1px solid rgba(0,245,255,0.2)', color: '#00F5FF' }}
          >
            <ChartIcon size={16} color="#00F5FF" />
            The Hive's Work
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real projects. Real impact. Each one built with the dedication of a busy bee — crafted carefully, delivered with pride.
          </p>
        </motion.div>

        {/* Work Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {workSamples.map((work, idx) => (
            <motion.div
              key={work.id}
              className="honey-card rounded-2xl overflow-hidden cursor-pointer group"
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 350, damping: 10 }}
            >
              {/* Thumbnail */}
              <div className="relative h-52 overflow-hidden flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${work.accentColor}12 0%, rgba(5,10,24,0.8) 100%)` }}>
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='46' viewBox='0 0 40 46'%3E%3Cpath d='M20 2 L38 11.5 L38 34.5 L20 44 L2 34.5 L2 11.5 Z' fill='none' stroke='${work.accentColor.replace('#', '%23')}' stroke-width='0.8' opacity='0.4'/%3E%3C/svg%3E")`,
                    backgroundSize: '40px 46px',
                  }}
                />
                <motion.div
                  className="relative z-10"
                  animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, delay: idx * 0.3 }}
                  whileHover={{ scale: 1.15, rotate: 0 }}
                >
                  <work.Icon size={72} color={work.accentColor} />
                </motion.div>
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse, ${work.accentColor}20 0%, transparent 70%)` }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${work.accentColor}60, transparent)` }} />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <motion.span
                    className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ color: work.accentColor, background: `${work.accentColor}15`, border: `1px solid ${work.accentColor}30` }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {work.category}
                  </motion.span>
                  <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}>
                    <svg width="20" height="23" viewBox="0 0 20 23" fill="none">
                      <path d="M10 1 L19 5.8 L19 17.2 L10 22 L1 17.2 L1 5.8 Z"
                        stroke={work.accentColor} strokeWidth="1" fill={`${work.accentColor}15`} />
                    </svg>
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors duration-300">{work.title}</h3>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">{work.description}</p>
                <motion.button
                  className="flex items-center gap-2 text-sm font-semibold"
                  style={{ color: work.accentColor }}
                  whileHover={{ x: 6 }}
                >
                  View Project
                  <ArrowRightIcon size={16} color={work.accentColor} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}>
          <p className="text-gray-400 mb-6">The hive has more honey — want to see more projects?</p>
          <motion.a
            href="https://wa.me/254711410442?text=Hi%20Ziramzis%2C%20I%20want%20to%20see%20more%20of%20your%20work"
            target="_blank" rel="noopener noreferrer"
            className="gradient-button px-8 py-4 rounded-xl font-bold text-black inline-flex items-center gap-3"
            whileHover={{ scale: 1.06, y: -4 }}
            whileTap={{ scale: 0.97 }}
          >
            <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <BeeIcon size={22} />
              Chat on WhatsApp
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
