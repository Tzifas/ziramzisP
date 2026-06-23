'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BeeIcon, HoneyJarIcon, PhoneIcon, EmailIcon, MapPinIcon,
  GlobeIcon, LinkedInIcon, XIcon, GitHubIcon
} from './Icons';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribeMessage, setSubscribeMessage] = useState('');
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribeMessage('Welcome to the hive!');
      setEmail('');
      setTimeout(() => setSubscribeMessage(''), 3500);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const socials = [
    { name: 'LinkedIn', Icon: LinkedInIcon, color: '#F5C842' },
    { name: 'X', Icon: XIcon, color: '#00F5FF' },
    { name: 'GitHub', Icon: GitHubIcon, color: '#F5C842' },
  ];

  const contactLinks = [
    { Icon: PhoneIcon, href: 'https://wa.me/254711410442', label: 'WhatsApp: +254 711 410 442', color: '#F5C842' },
    { Icon: EmailIcon, href: 'mailto:hello@ziramzis.vercel.app', label: 'Email: hello@ziramzis.app', color: '#00F5FF' },
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">

        {/* Newsletter */}
        <motion.div
          className="mb-16 pb-16"
          style={{ borderBottom: '1px solid rgba(245,200,66,0.12)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <motion.div
                  animate={{ rotate: [-10, 10, -10], y: [0, -4, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <HoneyJarIcon size={28} />
                </motion.div>
                <h3 className="text-2xl font-black text-white">Join the Hive</h3>
              </div>
              <p className="text-gray-400 max-w-sm">Get insights on web design, development and digital solutions delivered to your inbox.</p>
            </div>
            <div className="w-full md:w-auto">
              <motion.form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <motion.input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 sm:w-72 px-4 py-3 rounded-xl text-white placeholder-gray-500 outline-none text-sm font-medium"
                  style={{ background: 'rgba(13,31,60,0.8)', border: '1px solid rgba(245,200,66,0.2)' }}
                  onFocus={(e) => { e.target.style.borderColor = 'rgba(245,200,66,0.5)'; e.target.style.boxShadow = '0 0 15px rgba(245,200,66,0.1)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(245,200,66,0.2)'; e.target.style.boxShadow = 'none'; }}
                />
                <motion.button
                  type="submit"
                  className="gradient-button px-6 py-3 rounded-xl font-bold text-black whitespace-nowrap text-sm inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <BeeIcon size={18} />
                    Subscribe
                  </span>
                </motion.button>
              </motion.form>
              {subscribeMessage && (
                <motion.p
                  className="text-yellow-400 mt-3 text-sm font-medium flex items-center gap-2"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <BeeIcon size={16} />
                  {subscribeMessage}
                </motion.p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Footer Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <motion.div className="flex items-center gap-3 mb-4 cursor-pointer" whileHover={{ x: 4 }}>
              <div className="relative w-10 h-10 flex items-center justify-center">
                <svg viewBox="0 0 40 46" className="w-10 h-10 absolute inset-0">
                  <path d="M20 2 L38 12 L38 34 L20 44 L2 34 L2 12 Z"
                    fill="none" stroke="url(#footerLogoGrad)" strokeWidth="1.5" />
                  <defs>
                    <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F5C842" />
                      <stop offset="100%" stopColor="#00F5FF" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="gradient-text font-black text-lg z-10">Z</span>
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

          {/* Socials */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold mb-5 text-white text-sm uppercase tracking-widest">Follow the Bee</h4>
            <div className="flex gap-3 flex-wrap">
              {socials.map((social, idx) => (
                <motion.a
                  key={social.name}
                  href="#"
                  target="_blank" rel="noopener noreferrer"
                  title={social.name}
                  className="w-11 h-11 rounded-xl flex items-center justify-center relative overflow-hidden"
                  style={{ background: 'rgba(13,31,60,0.8)', border: '1px solid rgba(245,200,66,0.15)' }}
                  whileHover={{ scale: 1.15, y: -5, borderColor: social.color, boxShadow: `0 0 15px ${social.color}40` }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: idx * 0.2 }}
                >
                  <social.Icon size={18} color={social.color} />
                </motion.a>
              ))}
            </div>
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
          <motion.div className="flex items-center gap-2" whileHover={{ x: 4 }}>
            <span>© {currentYear}</span>
            <span className="text-yellow-400/70">Ziramzis</span>
            <span>— Built with</span>
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <BeeIcon size={16} />
            </motion.span>
            <span>love.</span>
          </motion.div>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map((link) => (
              <motion.a key={link} href="#" className="hover:text-yellow-400 transition-colors" whileHover={{ x: 3 }}>
                {link}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
