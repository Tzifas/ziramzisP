import { motion } from 'framer-motion';
import {
  BeeIcon, PhoneIcon, EmailIcon, MapPinIcon, GlobeIcon
} from './Icons';
import BrandLockup from './BrandLockup';
import { site } from '../lib/site';
import ShareSite from './ShareSite';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const contactLinks = [
    { Icon: PhoneIcon, href: `https://wa.me/${site.whatsapp}`, label: `WhatsApp: ${site.phone}`, color: '#F5C842' },
    { Icon: EmailIcon, href: `mailto:${site.email}`, label: `Email: ${site.email}`, color: '#00F5FF' },
    { Icon: MapPinIcon, href: null, label: 'Location: Mombasa, Kenya', color: '#F5C842' },
  ];

  return (
    <footer className="footer-v2 relative overflow-hidden" style={{ background: '#030810', borderTop: '1px solid rgba(245,200,66,0.15)' }}>
      <div className="absolute inset-0 opacity-40 pointer-events-none hex-grid-bg" />
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(245,200,66,0.4), rgba(0,245,255,0.2), transparent)' }} />

      <a href="#top" className="follow-bee footer-v2__follow" aria-label="Follow the Bee back to the top of the page">
        <span className="follow-bee__trail" aria-hidden="true" />
        <motion.span animate={{ y: [0, -4, 0], rotate: [-5, 5, -5] }} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}><BeeIcon size={24} /></motion.span>
        <span>Follow the Bee</span><span className="follow-bee__arrow">↑</span>
      </a>

      <div className="footer-v2__inner max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="footer-v2__main">
          <div className="footer-v2__brand">
            <BrandLockup className="h-9 w-auto" />
            <p>Building digital hives that help businesses grow. Based in Mombasa, Kenya — working with clients worldwide.</p>
            <div className="footer-v2__worldwide"><GlobeIcon size={14} color="#4A5A78" /><span>Worldwide</span></div>
          </div>

          <nav className="footer-v2__links" aria-label="Footer navigation">
            <h4>Quick Links</h4>
            <a href="/keeper">Meet the Keeper</a>
            {['Services', 'Work', 'Process', 'Contact'].map((link) => <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}
          </nav>

          <div className="footer-v2__contact">
            <h4>Contact</h4>
            {contactLinks.map((contact) => {
              const content = <><contact.Icon size={14} color={contact.color} />{contact.label}</>;
              return contact.href
                ? <a key={contact.label} href={contact.href} target={contact.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{content}</a>
                : <span key={contact.label}>{content}</span>;
            })}
          </div>

          <div className="footer-v2__availability">
            <h4>Let&apos;s work together</h4>
            <p>Have a project in mind? Start with a short message and I&apos;ll get back to you with the right next step.</p>
            <a href={`https://wa.me/${site.whatsapp}?text=Hi%20Ziramzis%2C%20I%27d%20like%20to%20discuss%20a%20project`} target="_blank" rel="noopener noreferrer"><BeeIcon size={17} /> Start a conversation</a>
            <ShareSite />
          </div>
        </div>

        <div className="footer-v2__bottom">
          <span>© {currentYear} Ziramzis — Busy Bee Studio, Mombasa, Kenya.</span>
          <span><a href="/terms">Terms</a><a href="/privacy">Privacy</a></span>
        </div>
      </div>
    </footer>
  );
}
