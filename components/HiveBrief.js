'use client';

import { useMemo, useState } from 'react';
import { ArrowRightIcon, WhatsAppIcon } from './Icons';
import { site } from '../lib/site';

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
  const message = useMemo(
    () => encodeURIComponent(`Hi Ziramzis, I want to start a Hive Brief.\n\nI need: ${packageChoice.value}\nWorking budget: KSh ${budget.toLocaleString()}\n\nMy idea: ${idea || 'I will explain it when we chat.'}`),
    [packageChoice.value, budget, idea],
  );

  return (
    <section id="brief" className="landing-section py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'radial-gradient(ellipse at 85% 20%, rgba(0,245,255,0.11), transparent 36%), linear-gradient(180deg, #050A18, #0A1628)' }}>
      <div className="landing-shell relative z-10">
        <div className="landing-heading landing-heading--split">
          <div><p className="landing-kicker">Hive brief</p><h2>Bring the spark. <em>I’ll find its shape.</em></h2></div>
          <p>Give the hive a useful starting point. You will get a real response about the right scope, timeline and investment — not a hard sell.</p>
        </div>
        <div className="brief-v2">
          <div className="brief-v2__form">
            <label className="brief-v2__label">What are we making?</label>
            <div className="brief-v2__choices">
              {packages.map((item, index) => (
                <button type="button" key={item.value} onClick={() => setSelected(index)} className={`brief-v2__choice ${selected === index ? 'is-selected' : ''}`} aria-pressed={selected === index}>
                  <span>0{index + 1}</span><div><b>{item.value}</b><small>{item.note}</small></div><strong>{item.range}</strong>
                </button>
              ))}
            </div>
            <label className="brief-v2__label" htmlFor="idea">Tell me the rough idea</label>
            <textarea id="idea" value={idea} onChange={(event) => setIdea(event.target.value)} rows="4" maxLength="500" className="brief-input" placeholder="Example: I run a coastal restaurant and need a warm site people can book from…" />
          </div>
          <aside className="brief-v2__scope">
            <p className="landing-kicker">Working budget</p>
            <p className="brief-v2__budget">KSh {budget.toLocaleString()}</p>
            <p>A starting signal, not a quote. I shape scope honestly around what is worth building.</p>
            <input aria-label="Working budget" type="range" min="15000" max="300000" step="5000" value={budget} onChange={(event) => setBudget(Number(event.target.value))} className="budget-range mt-8 w-full" />
            <div className="flex justify-between text-xs text-gray-500 mt-2"><span>KSh 15k</span><span>KSh 300k+</span></div>
            <p className="brief-v2__estimate">{budget < 50000 ? 'Estimated: 1–2 weeks · Landing page or brand direction' : budget < 120000 ? 'Estimated: 2–4 weeks · Full site or identity system' : 'Estimated: 4–8 weeks · Web product or full brand build'}</p>
            <div className="brief-v2__next"><b>What happens next</b><span>You choose the signal. I respond with realistic next steps.</span></div>
            <a className="brief-v2__send" href={`https://wa.me/${site.whatsapp}?text=${message}`} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={18} /> Send my brief <ArrowRightIcon size={16} /></a>
          </aside>
        </div>
      </div>
    </section>
  );
}
