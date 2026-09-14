'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { BeeIcon, BulbIcon, WhatsAppIcon } from './Icons';

const packages = [
  { value: 'Landing page', range: 'KSh 25k–55k', note: 'For one focused offer or campaign.' },
  { value: 'Business website', range: 'KSh 55k–140k', note: 'A strong online home that builds trust.' },
  { value: 'Brand identity', range: 'KSh 35k–120k', note: 'Logo, colour, type and a clear visual system.' },
  { value: 'Web product', range: 'From KSh 140k', note: 'For portals, dashboards and custom flows.' },
];

export default function HiveBrief() {
  const [idea, setIdea] = useState('');
  const [selected, setSelected] = useState(1);
  const [budget, setBudget] = useState(75000);
  const packageChoice = packages[selected];
  const message = useMemo(() => encodeURIComponent(`Hi Ziramzis, I want to start a Hive Brief.\n\nI need: ${packageChoice.value}\nWorking budget: KSh ${budget.toLocaleString()}\n\nMy idea: ${idea || 'I will explain it when we chat.'}`), [packageChoice.value, budget, idea]);

  return (
    <section id="brief" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'radial-gradient(ellipse at 85% 20%, rgba(0,245,255,0.11), transparent 36%), linear-gradient(180deg, #050A18, #0A1628)' }}>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="eyebrow justify-center"><BulbIcon size={16} color="#F5C842" /> <span style={{ color: 'var(--cyan-mid)' }}>HIVE BRIEF</span></p>
          <h2 className="section-title mt-5">Have the idea. <span className="gradient-text">I’ll find the shape.</span></h2>
          <p className="text-gray-400 text-lg mt-5">No hard sell. Give the hive a starting point and get a real conversation about the right scope, timeline and investment for your idea.</p>
        </div>
        <div className="brief-shell grid lg:grid-cols-[1.15fr_0.85fr] gap-0 overflow-hidden">
          <div className="p-6 sm:p-9 border-b lg:border-b-0 lg:border-r border-yellow-300/10">
            <label className="text-sm font-semibold text-white block mb-4">What are we making?</label>
            <div className="grid sm:grid-cols-2 gap-3">
              {packages.map((item, index) => <button type="button" key={item.value} onClick={() => setSelected(index)} className={`brief-choice text-left ${selected === index ? 'is-selected' : ''}`} aria-pressed={selected === index}><span className="block text-white font-semibold">{item.value}</span><span className="block text-sm mt-1 text-gray-400">{item.note}</span><span className="block mt-4 text-sm font-bold" style={{ color: selected === index ? '#F5C842' : '#00C8D7' }}>{item.range}</span></button>)}
            </div>
            <label className="text-sm font-semibold text-white block mt-8 mb-3" htmlFor="idea">Tell me the rough idea</label>
            <textarea id="idea" value={idea} onChange={(event) => setIdea(event.target.value)} rows="4" maxLength="500" className="brief-input" placeholder="Example: I run a coastal restaurant and need a warm site people can book from…" />
          </div>
          <aside className="p-6 sm:p-9 bg-[#07142a]/70">
            <p className="text-xs font-bold tracking-[0.18em] text-cyan-300">BUDGET COMPASS</p>
            <p className="text-white text-2xl font-black mt-3">KSh {budget.toLocaleString()}</p>
            <p className="text-gray-400 text-sm leading-relaxed mt-2">A starting signal, not a quote. I shape scope honestly around what is worth building.</p>
            <input aria-label="Working budget" type="range" min="15000" max="300000" step="5000" value={budget} onChange={(event) => setBudget(Number(event.target.value))} className="budget-range mt-8 w-full" />
            <div className="flex justify-between text-xs text-gray-500 mt-2"><span>KSh 15k</span><span>KSh 300k+</span></div>
            <div className="mt-10 p-5 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.04]"><div className="flex gap-3"><BeeIcon size={24} /><div><p className="font-bold text-white">What happens next</p><p className="text-sm text-gray-400 mt-1">You choose the starting point. I’ll respond with realistic next steps.</p></div></div></div>
            <a className="gradient-button rounded-xl py-4 px-5 mt-6 w-full inline-flex items-center justify-center gap-2 font-bold" href={`https://wa.me/254711410442?text=${message}`} target="_blank" rel="noopener noreferrer"><span style={{ position: 'relative', zIndex: 1, display: 'inline-flex', alignItems: 'center', gap: '8px' }}><WhatsAppIcon size={19} /> Send my Hive Brief</span></a>
          </aside>
        </div>
      </div>
    </section>
  );
}
