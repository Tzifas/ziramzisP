'use client';

import { motion } from 'framer-motion';
import { WhatsAppIcon, PhoneIcon, MapPinIcon, InstagramIcon } from './Icons';
import { ContactBee } from './BeeScenes';
import { site } from '../lib/site';

const contacts = [
  { Icon: WhatsAppIcon, label: 'WhatsApp', value: 'Start a chat', href: `https://wa.me/${site.whatsapp}` },
  { Icon: PhoneIcon, label: 'Call', value: 'Let’s discuss', href: `tel:${site.phone}` },
  { Icon: InstagramIcon, label: 'Instagram', value: '@ziramzis', href: 'https://www.instagram.com/ziramzis/' },
  { Icon: MapPinIcon, label: 'Based in', value: 'Mombasa, Kenya' },
];

export default function CTA() {
  return (
    <section id="contact" className="landing-section landing-contact">
      <div className="landing-shell">
        <motion.div className="contact-v2" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6 }}>
          <div className="contact-v2__copy">
            <p className="landing-kicker">The next move</p>
            <h2>Let’s give the idea<br /><em>a proper shape.</em></h2>
            <p>You do not need a perfect brief. Start with the rough version, and we will work out what earns a place in the final one.</p>
            <div className="contact-v2__actions">
              <a href={`https://wa.me/${site.whatsapp}?text=Hi%20Ziramzis%2C%20I%20have%20a%20project%20idea%20I%27d%20like%20to%20discuss`} target="_blank" rel="noopener noreferrer" className="contact-v2__primary"><WhatsAppIcon size={18} /> Start on WhatsApp</a>
              <a href={`tel:${site.phone}`} className="contact-v2__call"><PhoneIcon size={16} /> Call instead</a>
            </div>
          </div>
          <div className="contact-v2__side">
            <div className="contact-v2__bee"><ContactBee size={76} /></div>
            <p><strong>Direct line to the keeper.</strong><span>Fastest on WhatsApp. Real conversation, no hard sell.</span></p>
          </div>
          <div className="contact-v2__details">
            {contacts.map(({ Icon, label, value, href }) => {
              const content = <><Icon size={16} /><span><small>{label}</small><b>{value}</b></span></>;
              return href ? <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{content}</a> : <div key={label}>{content}</div>;
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
