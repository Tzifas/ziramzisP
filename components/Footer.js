import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribeMessage, setSubscribeMessage] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribeMessage('Thanks for subscribing!')
      setEmail('')
      setTimeout(() => setSubscribeMessage(''), 3000)
    }
  }

  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="bg-dark-card border-t border-primary/20 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter */}
        <motion.div
          className="mb-16 pb-16 border-b border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
          <p className="text-gray-400 mb-6">Get insights on web design, development, and digital solutions.</p>
          <motion.form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3 max-w-md"
            whileHover={{ scale: 1.02 }}
          >
            <motion.input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg bg-dark border border-primary/20 focus:border-primary outline-none transition"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.button
              type="submit"
              className="gradient-button px-6 py-3 rounded-lg font-semibold text-white whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Subscribe
            </motion.button>
          </motion.form>
          {subscribeMessage && (
            <motion.p
              className="text-primary mt-3 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {subscribeMessage}
            </motion.p>
          )}
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
          <motion.div variants={itemVariants}>
            <motion.div
              className="flex items-center gap-2 mb-4"
              whileHover={{ x: 5 }}
            >
              <motion.div
                className="w-10 h-10 gradient-text font-bold text-2xl flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                Z
              </motion.div>
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">ZIRAMZIS</span>
            </motion.div>
            <p className="text-gray-400 text-sm">Building digital solutions that help businesses grow.</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['Services', 'Work', 'Process', 'Contact'].map((link) => (
                <li key={link}>
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-primary transition"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <motion.a
                  href="https://wa.me/254711410442"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition"
                  whileHover={{ x: 5 }}
                >
                  WhatsApp: +254 711 410 442
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="mailto:hello@ziramzis.vercel.app"
                  className="hover:text-primary transition"
                  whileHover={{ x: 5 }}
                >
                  Email: hello@ziramzis.app
                </motion.a>
              </li>
              <li>Location: Mombasa, Kenya</li>
            </ul>
          </motion.div>

          {/* Socials */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold mb-4">Follow</h4>
            <div className="flex gap-4">
              {[
                { name: 'LinkedIn', path: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z' },
                { name: 'Twitter', path: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.691.188-1.456.188-2.228.064.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' },
                { name: 'GitHub', path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
              ].map((social, idx) => (
                <motion.a
                  key={social.name}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-dark border border-primary/20 flex items-center justify-center hover:border-primary hover:text-primary transition"
                  whileHover={{ scale: 1.2, y: -5, backgroundColor: 'rgba(45, 212, 191, 0.1)' }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: idx * 0.1 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.p whileHover={{ x: 5 }}>&copy; {currentYear} Ziramzis. All rights reserved.</motion.p>
          <motion.div
            className="flex gap-6 mt-4 md:mt-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {['Privacy Policy', 'Terms of Service'].map((link) => (
              <motion.a
                key={link}
                href="#"
                className="hover:text-primary transition"
                whileHover={{ x: 5 }}
                variants={itemVariants}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
