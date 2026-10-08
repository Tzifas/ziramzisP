'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon, BeeIcon } from './Icons';
import LogoMark from './LogoMark';

const conversation = [
  { from: 'visitor', text: 'Niko na idea ya biashara — my website in Mombasa CBD haisaidii customers.' },
  { from: 'ziramzis', text: 'Sawa — tuanze na the one thing a visitor should understand immediately.' },
  { from: 'visitor', text: 'What I offer, then how they can reach me bila stress.' },
  { from: 'ziramzis', text: 'Poa. That is enough to shape a clear digital front door.' },
];

const steps = [
  { n: '01', title: 'Share the spark', body: 'WhatsApp, a voice note, or a scribble on paper.' },
  { n: '02', title: 'Shape the brief', body: 'Scope, timing and budget with no guesswork.' },
  { n: '03', title: 'Build with a blueprint', body: 'The direction is clear before code begins.' },
];

export default function HiveRoles() {
  const [visible, setVisible] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timer;
    let cancelled = false;
    const reveal = (index) => {
      if (cancelled) return;
      setTyping(false);
      setVisible(index + 1);
      if (index === conversation.length - 1) {
        timer = setTimeout(() => { setVisible(0); setTyping(true); timer = setTimeout(() => reveal(0), 900); }, 3600);
        return;
      }
      timer = setTimeout(() => { setTyping(true); timer = setTimeout(() => reveal(index + 1), 900); }, 850);
    };
    timer = setTimeout(() => reveal(0), 900);
    return () => { cancelled = true; clearTimeout(timer); };
  }, []);

  return (
    <section id="colony" className="landing-section idea-hive py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="idea-hive__glow" aria-hidden="true" />
      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-[0.88fr_1.12fr] gap-9 lg:gap-16 items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="eyebrow"><BeeIcon size={16} /> <span style={{ color: 'var(--cyan-mid)' }}>THE IDEA INTAKE</span></p>
          <h2 className="section-title--md mt-5">Bring the spark. <span className="gradient-text">I&apos;ll help it take shape.</span></h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mt-5 sm:mt-6 max-w-xl">Not sure where to begin? Treat this like a quick WhatsApp chat. Share the challenge — the conversation becomes your brief.</p>
          <div className="idea-hive__steps">
            {steps.map((item, index) => <div key={item.n} className={`idea-hive__step idea-hive__step--${index + 1}`}><span>{item.n}</span><div><p>{item.title}</p><p>{item.body}</p></div></div>)}
          </div>
          <a href="#brief" className="idea-hive__cta gradient-button inline-flex items-center px-5 py-3 rounded-xl text-sm font-black" style={{ textDecoration: 'none' }}><span style={{ position: 'relative', zIndex: 1 }}>Start with your idea</span></a>
        </motion.div>
        <motion.div className="wa-chat" initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.1 }}>
          <div className="wa-chat__top"><div className="wa-chat__profile" aria-hidden="true"><LogoMark size={29} id="chat-profile" /></div><div><b>Ziramzis</b><span><i /> online</span></div><span className="wa-chat__dots">&bull;&bull;&bull;</span></div>
          <div className="wa-chat__body">
            <AnimatePresence initial={false}>{conversation.slice(0, visible).map((msg, index) => <motion.div key={msg.text} className={`wa-bubble wa-bubble--${msg.from}`} initial={{ opacity: 0, y: 11, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.32 }}><p>{msg.text}</p><small>{index === 0 ? 'now' : 'seen'}</small></motion.div>)}</AnimatePresence>
            {typing && <div className={`wa-typing wa-typing--${conversation[visible]?.from || 'visitor'}`}><i /><i /><i /></div>}
          </div>
          <div className="wa-chat__actions"><a href="#brief">Start your own conversation <ArrowRightIcon size={16} /></a></div>
          <p className="wa-chat__caption">A better digital experience starts with a useful conversation.</p>
        </motion.div>
      </div>
    </section>
  );
}
