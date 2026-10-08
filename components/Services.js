'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    id: 'brand',
    label: 'Brand systems',
    eyebrow: '01 · BRAND',
    title: 'Make the business recognisable before the conversation begins.',
    body: 'A clear identity system that gives the business a face, a voice and the practical assets to show up consistently.',
    includes: ['Logo direction', 'Type + colour system', 'Practical brand kit'],
  },
  {
    id: 'website',
    label: 'Websites',
    eyebrow: '02 · WEBSITE',
    title: 'Turn a first look into a useful next move.',
    body: 'Fast, focused pages that make the offer clear and guide people toward a booking, enquiry, order or call.',
    includes: ['Content structure', 'Responsive build', 'Conversion paths'],
  },
  {
    id: 'product',
    label: 'Web products',
    eyebrow: '03 · PRODUCT',
    title: 'Remove friction from the work people actually do.',
    body: 'Portals, booking flows and lightweight tools shaped around a real task—not features for their own sake.',
    includes: ['User journeys', 'Useful dashboards', 'Custom flows'],
  },
  {
    id: 'growth',
    label: 'Growth work',
    eyebrow: '04 · GROWTH',
    title: 'Give a good business room to keep moving.',
    body: 'Campaign pages and focused improvements that make a working business easier to find, trust and choose.',
    includes: ['Campaign pages', 'Content direction', 'Ongoing refinement'],
  },
];

function ServiceVisual({ type }) {
  if (type === 'brand') return <div className="service-viewer__visual service-viewer__visual--brand" aria-hidden="true"><b>Zi</b><span /><i /><i /><i /><em>identity / system</em></div>;
  if (type === 'website') return <div className="service-viewer__visual service-viewer__visual--website" aria-hidden="true"><div><i /><i /><i /><b>Make it<br />matter.</b><span /></div></div>;
  if (type === 'product') return <div className="service-viewer__visual service-viewer__visual--product" aria-hidden="true"><b>Today</b><i /><i /><i /><i /></div>;
  return <div className="service-viewer__visual service-viewer__visual--growth" aria-hidden="true"><i /><i /><i /><i /><b>↗</b><span>momentum</span></div>;
}

export default function Services() {
  const [activeId, setActiveId] = useState(services[0].id);
  const active = services.find((service) => service.id === activeId) || services[0];

  return (
    <section id="services" className="landing-section landing-services">
      <div className="landing-shell">
        <motion.div className="landing-heading landing-heading--split" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div><p className="landing-kicker">What I build</p><h2>Work that earns its <em>place in the business.</em></h2></div>
          <p>Brand, website and product work are connected. Pick a lane to see exactly what that means for your business.</p>
        </motion.div>

        <div className="service-viewer">
          <div className="service-viewer__nav" role="tablist" aria-label="What Ziramzis builds">
            {services.map((service, index) => (
              <button key={service.id} type="button" role="tab" aria-selected={activeId === service.id} onClick={() => setActiveId(service.id)} className={activeId === service.id ? 'is-active' : ''}>
                <span>0{index + 1}</span>{service.label}
              </button>
            ))}
          </div>
          <motion.article key={active.id} className="service-viewer__stage" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .24 }}>
            <div className="service-viewer__copy">
              <p>{active.eyebrow}</p>
              <h3>{active.title}</h3>
              <span>{active.body}</span>
              <div className="service-viewer__includes">{active.includes.map((item) => <i key={item}>{item}</i>)}</div>
            </div>
            <ServiceVisual type={active.id} />
          </motion.article>
        </div>
      </div>
    </section>
  );
}
