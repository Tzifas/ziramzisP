'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon, CartIcon, ForkKnifeIcon, ScaleIcon, ToothIcon } from './Icons';

const samples = [
  { id: 'dining', category: 'HOSPITALITY', title: 'A restaurant that feels like a reservation.', detail: 'Atmosphere up front, booking never far away.', Icon: ForkKnifeIcon, image: '/images/work-samples/marea-hospitality.jpg' },
  { id: 'legal', category: 'PROFESSIONAL', title: 'A law practice with instant presence.', detail: 'Clear expertise, quiet confidence, one obvious next step.', Icon: ScaleIcon, image: '/images/work-samples/alto-legal.jpg' },
  { id: 'goods', category: 'COMMERCE', title: 'A product brand people want to keep exploring.', detail: 'Editorial storytelling paired with a clean path to purchase.', Icon: CartIcon, image: '/images/work-samples/atelier-commerce.jpg' },
  { id: 'health', category: 'HEALTH', title: 'A dental practice you actually want to visit.', detail: 'Trust up front, your schedule one tap away.', Icon: ToothIcon, image: null },
];

function BrowserFrame({ sample }) {
  return (
    <div className={`sample-browser sample-browser--${sample.id}`}>
      <div className="sample-browser__chrome"><span /><span /><span /><div>ziramzis.studio / {sample.id}</div></div>
      {sample.id === 'dining' && (
        <div className="sample-site sample-site--dining" style={{ backgroundImage: `linear-gradient(90deg, rgba(10,15,11,.72), rgba(10,15,11,.14)), url(${sample.image})` }}>
          <header><b>MAR&Eacute;A</b><span>Menu&nbsp;&nbsp;&nbsp; Story&nbsp;&nbsp;&nbsp; Visit</span></header>
          <main><p>COASTAL KITCHEN</p><h3>Gather<br />slowly.</h3><button>Reserve a table <ArrowRightIcon size={14} /></button></main>
          <aside>KENYA &middot; 2026</aside>
        </div>
      )}
      {sample.id === 'legal' && (
        <div className="sample-site sample-site--legal">
          <header><b>ALTO<br />LAW</b><span>Expertise&nbsp;&nbsp; People&nbsp;&nbsp; Insights&nbsp;&nbsp; Contact</span></header>
          <main><p>MEASURED ADVICE. MEANINGFUL OUTCOMES.</p><h3>Clarity for<br />what comes next.</h3><a>Speak to our team <ArrowRightIcon size={15} /></a></main>
          <div className="legal-image" style={{ backgroundImage: `url(${sample.image})` }} />
          <div className="legal-stamp">EST.<br />2026</div>
        </div>
      )}
      {sample.id === 'goods' && (
        <div className="sample-site sample-site--goods">
          <header><b>ATELIER<br />NORTH</b><span>Shop&nbsp;&nbsp;&nbsp; Journal&nbsp;&nbsp;&nbsp; About</span><i>Bag (0)</i></header>
          <main><p>THE EVERYDAY EDIT</p><h3>Made to<br />be lived in.</h3><button>Shop new arrivals</button></main>
          <div className="goods-image" style={{ backgroundImage: `url(${sample.image})` }} />
          <div className="goods-card"><span>01</span><b>Essential forms</b><small>New collection</small></div>
        </div>
      )}
      {sample.id === 'health' && (
        <div className="sample-site sample-site--health" style={{ position: 'relative', overflow: 'hidden' }}>
          <header><b>COASTLINE<br />DENTAL</b><span>Services&nbsp;&nbsp; Team&nbsp;&nbsp; Book</span></header>
          <main><p>BAMBURI &middot; MOMBASA</p><h3>Your smile,<br />your schedule.</h3><button>Book an appointment</button></main>
          <div className="health-panel"><div className="health-glow" /><div className="health-orbit health-orbit--one" /><div className="health-orbit health-orbit--two" /><div className="health-tooth"><i /><i /><i /></div><span>CALM CARE</span></div>
        </div>
      )}
    </div>
  );
}

export default function Work() {
  const [active, setActive] = useState(samples[0]);
  return (
    <section id="work" className="landing-section work-showcase py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="work-showcase__beam" aria-hidden="true" />
      <div className="landing-shell relative z-10">
        <motion.div className="landing-heading landing-heading--split" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div><p className="landing-kicker">Website directions</p><h2>Choose a feeling, then <em>give it a job.</em></h2></div>
          <p>Four starting directions for different kinds of businesses. These are not templates — they are visual languages to shape around your own story.</p>
        </motion.div>
        <div className="grid lg:grid-cols-[.7fr_1.3fr] gap-8 mt-12 items-start">
          <div className="sample-selector" role="tablist" aria-label="Website directions"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.55rem' }}>
            {samples.map((sample, index) => (
              <button
                type="button"
                role="tab"
                aria-selected={active.id === sample.id}
                key={sample.id}
                onClick={() => setActive(sample)}
                className={active.id === sample.id ? 'is-active' : ''}
                style={{
                  padding: '1.3rem 1rem',
                  boxShadow: active.id === sample.id ? 'inset 3px 0 0 var(--honey-gold)' : 'none',
                }}
              >
                <span className="sample-selector__count">0{index + 1}</span>
                <span className="sample-selector__icon"><sample.Icon size={21} color={active.id === sample.id ? '#F5C842' : '#7d93b3'} /></span>
                <span className="text-left"><b>{sample.category}</b><em>{sample.detail}</em></span>
                <ArrowRightIcon size={18} color={active.id === sample.id ? '#F5C842' : '#66738a'} />
              </button>
            ))}
            <a href="#brief" className="sample-selector__start" style={{ gridColumn: '1 / -1' }}>Start with your own direction <ArrowRightIcon size={17} /></a>
          </div>
          <motion.article layout className="sample-stage">
            <AnimatePresence mode="wait">
              <motion.div key={active.id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.26 }}>
                <BrowserFrame sample={active} />
              </motion.div>
            </AnimatePresence>
            <div className="sample-stage__caption">
              <div><p>{active.category} / WEBSITE DIRECTION</p><h3>{active.title}</h3></div>
              <a href="#brief">Use this as a starting point <ArrowRightIcon size={17} /></a>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
