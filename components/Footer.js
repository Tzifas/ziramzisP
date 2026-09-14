import { motion } from 'framer-motion';
import {
  BeeIcon, PhoneIcon, EmailIcon, MapPinIcon, GlobeIcon
} from './Icons';
import LogoMark from './LogoMark';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const contactLinks = [
    { Icon: PhoneIcon, href: 'https://wa.me/254711410442', label: 'WhatsApp: +254 711 410 442', color: '#F5C842' },
    { Icon: EmailIcon, href: 'mailto:ziramzisfeis@gmail.com', label: 'Email: ziramzisfeis@gmail.com', color: '#00F5FF' },
    { Icon: MapPinIcon, href: null, label: 'Location: Mombasa, Kenya', color: '#F5C842' },
  ];

  return (
    <footer className="relative overflow-hidden"
      style={{ background: '#030810', borderTop: '1px solid rgba(245,200,66,0.15)' }}>

      {/* Hex pattern */}
      <div className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='92' viewBox='0 0 80 92'%3E%3Cpath d='M40 4 L76 23 L76 69 L40 88 L4 69 L4 23 Z' fill='none' stroke='%23F5C842' stroke-width='0.4' opacity='0.06'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 92px',
        }}
      />

      {/* Top glow line */}
      <div className="h-px w-full"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(245,200,66,0.4), rgba(0,245,255,0.2), transparent)' }} />

      <a href="#top" className="follow-bee" aria-label="Follow the Bee back to the top of the page">
        <span className="follow-bee__trail" aria-hidden="true" />
        <motion.span animate={{ y: [0, -6, 0], rotate: [-5, 5, -5] }} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}><BeeIcon size={34} /></motion.span>
        <span>Follow the Bee</span><span className="follow-bee__arrow">↑</span>
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">

        {/* Footer Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="col-span-2 md:col-span-1">
            <motion.div className="flex items-center gap-3 mb-4 cursor-pointer" whileHover={{ x: 4 }}>
              <div className="relative w-10 h-10 flex items-center justify-center">
                <LogoMark size={38} id="flr" />
              </div>
              <div>
                <div className="font-black text-lg gradient-text tracking-widest leading-none">ZIRAMZIS</div>
                <div style={{ fontSize: '9px', color: 'rgba(0,245,255,0.6)', letterSpacing: '2px' }}>BUSY BEE STUDIO</div>
              </div>
            </motion.div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Building digital hives that help businesses grow. Based in Mombasa, Kenya — working with clients worldwide.
            </p>
            <div className="flex items-center gap-2 mt-3">
              <GlobeIcon size={14} color="#4A5A78" />
              <span className="text-gray-600 text-xs">Worldwide</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold mb-5 text-white text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                  <motion.a
                    href="/keeper"
                    className="text-gray-500 hover:text-yellow-400 transition-colors text-sm flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/40 group-hover:bg-yellow-400 transition-colors flex-shrink-0" />
                    Meet the Keeper
                  </motion.a>
                </li>
              {['Services', 'Work', 'Process', 'Contact'].map((link) => (
                <li key={link}>
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-500 hover:text-yellow-400 transition-colors text-sm flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/40 group-hover:bg-yellow-400 transition-colors flex-shrink-0" />
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold mb-5 text-white text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-3">
              {contactLinks.map((c) => (
                <li key={c.label}>
                  {c.href ? (
                    <motion.a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-yellow-400 transition-colors text-sm flex items-center gap-2"
                      whileHover={{ x: 5 }}>
                      <c.Icon size={14} color={c.color} />
                      {c.label}
                    </motion.a>
                  ) : (
                    <span className="text-gray-500 text-sm flex items-center gap-2">
                      <c.Icon size={14} color={c.color} />
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Availability */}
          <motion.div variants={itemVariants} className="col-span-2 md:col-span-1">
            <h4 className="font-bold mb-5 text-white text-sm uppercase tracking-widest">Let's work together</h4>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">Have a project in mind? Start with a short message and I’ll get back to you with the right next step.</p>
            <motion.a
              href="https://wa.me/254711410442?text=Hi%20Ziramzis%2C%20I%27d%20like%20to%20discuss%20a%20project"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-yellow-400 hover:text-yellow-300"
              whileHover={{ x: 4 }}
            >
              <BeeIcon size={17} /> Start a conversation
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-sm text-gray-600"
          style={{ borderTop: '1px solid rgba(245,200,66,0.08)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span>© {currentYear} Ziramzis — Busy Bee Studio, Mombasa, Kenya.</span>
          <span className="flex items-center gap-5">
            <a href="/terms" className="hover:text-yellow-400 transition-colors">Terms</a>
            <a href="/privacy" className="hover:text-yellow-400 transition-colors">Privacy</a>
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
