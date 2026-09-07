'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon, BeeIcon, CartIcon, ForkKnifeIcon, ScaleIcon } from './Icons';

const samples = [
  { id: 'dining', category: 'HOSPITALITY', title: 'A restaurant that feels like a reservation.', detail: 'Atmosphere up front, booking never far away.', Icon: ForkKnifeIcon, image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1600&q=85' },
  { id: 'legal', category: 'PROFESSIONAL', title: 'A law practice with instant presence.', detail: 'Clear expertise, quiet confidence, one obvious next step.', Icon: ScaleIcon, image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=85' },
  { id: 'goods', category: 'COMMERCE', title: 'A product brand people want to keep exploring.', detail: 'Editorial storytelling paired with a clean path to purchase.', Icon: CartIcon, image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1600&q=85' },
];

function BrowserFrame({ sample }) {
  return <div className={`sample-browser sample-browser--${sample.id}`}>
    <div className="sample-browser__chrome"><span /><span /><span /><div>ziramzis.studio / {sample.id}</div></div>
    {sample.id === 'dining' && <div className="sample-site sample-site--dining" style={{ backgroundImage: `linear-gradient(90deg, rgba(10,15,11,.72), rgba(10,15,11,.14)), url(${sample.image})` }}><header><b>MARÉA</b><span>Menu&nbsp;&nbsp;&nbsp; Story&nbsp;&nbsp;&nbsp; Visit</span></header><main><p>COASTAL KITCHEN</p><h3>Gather<br />slowly.</h3><button>Reserve a table <ArrowRightIcon size={14} /></button></main><aside>KENYA · 2026</aside></div>}
    {sample.id === 'legal' && <div className="sample-site sample-site--legal"><header><b>ALTO<br />LAW</b><span>Expertise&nbsp;&nbsp; People&nbsp;&nbsp; Insights&nbsp;&nbsp; Contact</span></header><main><p>MEASURED ADVICE. MEANINGFUL OUTCOMES.</p><h3>Clarity for<br />what comes next.</h3><a>Speak to our team <ArrowRightIcon size={15} /></a></main><div className="legal-image" style={{ backgroundImage: `url(${sample.image})` }} /><div className="legal-stamp">EST.<br />2026</div></div>}
    {sample.id === 'goods' && <div className="sample-site sample-site--goods"><header><b>ATELIER<br />NORTH</b><span>Shop&nbsp;&nbsp;&nbsp; Journal&nbsp;&nbsp;&nbsp; About</span><i>Bag (0)</i></header><main><p>THE EVERYDAY EDIT</p><h3>Made to<br />be lived in.</h3><button>Shop new arrivals</button></main><div className="goods-image" style={{ backgroundImage: `url(${sample.image})` }} /><div className="goods-card"><span>01</span><b>Essential forms</b><small>New collection</small></div></div>}
  </div>;
}

export default function Work() {
  const [active, setActive] = useState(samples[0]);
  return (
    <section id="work" className="work-showcase py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="work-showcase__beam" aria-hidden="true" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div className="max-w-3xl" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="eyebrow"><BeeIcon size={16} /> WEBSITE DIRECTIONS</p>
          <h2 className="section-title mt-5">Your site can do more than <span className="gradient-text">look busy.</span></h2>
          <p className="text-gray-400 text-lg leading-relaxed mt-5">Explore three real interface directions for the kinds of businesses Ziramzis can shape. Every screen is designed to give the visitor a feeling—and a next move.</p>
        </motion.div>
        <div className="grid lg:grid-cols-[.7fr_1.3fr] gap-8 mt-12 items-start">
          <div className="sample-selector" role="tablist" aria-label="Website directions">
            {samples.map((sample, index) => <button type="button" role="tab" aria-selected={active.id === sample.id} key={sample.id} onClick={() => setActive(sample)} className={active.id === sample.id ? 'is-active' : ''}><span className="sample-selector__count">0{index + 1}</span><span className="sample-selector__icon"><sample.Icon size={21} color={active.id === sample.id ? '#F5C842' : '#7d93b3'} /></span><span className="text-left"><b>{sample.category}</b><em>{sample.detail}</em></span><ArrowRightIcon size={18} color={active.id === sample.id ? '#F5C842' : '#66738a'} /></button>)}
            <a href="#brief" className="sample-selector__start">Start with your own direction <ArrowRightIcon size={17} /></a>
          </div>
          <motion.article layout className="sample-stage"><AnimatePresence mode="wait"><motion.div key={active.id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.26 }}><BrowserFrame sample={active} /></motion.div></AnimatePresence><div className="sample-stage__caption"><div><p>{active.category} / WEBSITE DIRECTION</p><h3>{active.title}</h3></div><a href="#brief">Use this as a starting point <ArrowRightIcon size={17} /></a></div></motion.article>
        </div>
      </div>
    </section>
  );
}
