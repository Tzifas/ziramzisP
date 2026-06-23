'use client';
import { motion } from 'framer-motion';
import { BeeIcon, WhatsAppIcon, EmailIcon, PhoneIcon, MapPinIcon } from './Icons';

/* ── Bee Flyby ────────────────────────────────────────── */
const BeeFlyby = () => (
  <motion.div
    className="absolute pointer-events-none z-10"
    style={{ top: '20%' }}
    initial={{ left: '-80px' }}
    animate={{ left: 'calc(100% + 80px)' }}
    transition={{ duration: 8, repeat: Infinity, repeatDelay: 12, ease: 'easeInOut' }}
  >
    <motion.div animate={{ y: [0, -15, 10, -8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
      <BeeIcon size={50} />
    </motion.div>
  </motion.div>
);

const contactDetails = [
  { Icon: PhoneIcon, label: 'WhatsApp', value: '+254 711 410 442', href: 'https://wa.me/254711410442', color: '#F5C842' },
  { Icon: EmailIcon, label: 'Email', value: 'hello@ziramzis.app', href: 'mailto:hello@ziramzis.vercel.app', color: '#00F5FF' },
  { Icon: MapPinIcon, label: 'Location', value: 'Mombasa, Kenya', href: null, color: '#F5C842' },
];

export default function CTA() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050A18 0%, #0A1628 100%)' }}>

      <div className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='92' viewBox='0 0 80 92'%3E%3Cpath d='M40 4 L76 23 L76 69 L40 88 L4 69 L4 23 Z' fill='none' stroke='%23F5C842' stroke-width='0.4' opacity='0.09'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 92px',
        }}
      />

      <BeeFlyby />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="relative rounded-3xl p-1 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Animated gradient border */}
          <motion.div
            className="absolute inset-0 rounded-3xl"
            style={{ background: 'linear-gradient(135deg, rgba(245,200,66,0.4), rgba(0,245,255,0.2), rgba(245,200,66,0.4))' }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          <div className="relative rounded-3xl p-10 sm:p-14 text-center"
            style={{ background: 'linear-gradient(135deg, #050A18 0%, #0A1628 50%, #050A18 100%)' }}>

            {/* Corner hex decorations */}
            <div className="hidden sm:block absolute top-6 left-6 opacity-20">
              <svg width="50" height="58" viewBox="0 0 50 58">
                <path d="M25 3 L47 15.5 L47 42.5 L25 55 L3 42.5 L3 15.5 Z"
                  fill="rgba(245,200,66,0.4)" stroke="rgba(245,200,66,0.6)" strokeWidth="1" />
              </svg>
            </div>
            <div className="hidden sm:block absolute top-6 right-6 opacity-20">
              <svg width="40" height="46" viewBox="0 0 40 46">
                <path d="M20 2 L38 11.5 L38 34.5 L20 44 L2 34.5 L2 11.5 Z"
                  fill="rgba(0,245,255,0.4)" stroke="rgba(0,245,255,0.6)" strokeWidth="1" />
              </svg>
            </div>

            {/* Big bee icon */}
            <motion.div
              className="flex justify-center mb-6"
              animate={{ rotate: [-10, 10, -10], y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div style={{ filter: 'drop-shadow(0 0 20px rgba(245,200,66,0.5))' }}>
                <BeeIcon size={64} />
              </div>
            </motion.div>

            <motion.h2
              className="text-4xl sm:text-5xl font-black mb-6"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Let's Build Your <span className="gradient-text">Digital Hive</span>
            </motion.h2>

            <motion.p
              className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Have a project in mind? The busy bee is ready to get to work. Let's turn your vision into something sweet — reach out and let's build together.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="https://wa.me/254711410442?text=Hi%20Ziramzis%2C%20I%20have%20a%20project%20idea%20I%27d%20like%20to%20discuss"
                target="_blank" rel="noopener noreferrer"
                className="gradient-button px-10 py-4 rounded-xl font-bold text-black text-base inline-flex items-center justify-center gap-3"
                whileHover={{ scale: 1.06, y: -4 }}
                whileTap={{ scale: 0.97 }}
              >
                <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <WhatsAppIcon size={20} />
                  Chat on WhatsApp
                </span>
              </motion.a>

              <motion.button
                onClick={() => { window.location.href = 'mailto:hello@ziramzis.vercel.app'; }}
                className="px-10 py-4 rounded-xl font-bold text-base border-2 inline-flex items-center justify-center gap-3 transition"
                style={{ borderColor: 'rgba(0,245,255,0.5)', color: '#00F5FF', background: 'rgba(0,245,255,0.05)' }}
                whileHover={{ scale: 1.06, y: -4, borderColor: '#00F5FF', boxShadow: '0 0 25px rgba(0,245,255,0.3)', background: 'rgba(0,245,255,0.1)' }}
                whileTap={{ scale: 0.97 }}
              >
                <EmailIcon size={20} color="#00F5FF" />
                Send Email
              </motion.button>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              style={{ borderTop: '1px solid rgba(245,200,66,0.12)', paddingTop: '2rem' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              viewport={{ once: true }}
            >
              {contactDetails.map((contact, idx) => (
                <motion.div
                  key={contact.label}
                  className="text-center"
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <motion.div
                    className="flex justify-center mb-2"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: idx * 0.5 }}
                  >
                    <contact.Icon size={24} color={contact.color} />
                  </motion.div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">{contact.label}</p>
                  {contact.href ? (
                    <motion.a href={contact.href} className="font-semibold text-sm transition-colors"
                      style={{ color: contact.color }} whileHover={{ x: 3 }}>
                      {contact.value}
                    </motion.a>
                  ) : (
                    <p className="font-semibold text-sm text-white">{contact.value}</p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
