'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon, BeeIcon } from './Icons';
import { NoteBee } from './BeeScenes';

const conversation = [
  { from: 'visitor', text: 'Niko na idea ya biashara, but my page doesn’t explain it vizuri.' },
  { from: 'ziramzis', text: 'Sawa—tuanze na the one thing a visitor should understand immediately.' },
  { from: 'visitor', text: 'What I offer, then how they can reach me bila stress.' },
  { from: 'ziramzis', text: 'Poa. That is enough to shape a clear digital front door.' },
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
        timer = setTimeout(() => {
          setVisible(0);
          setTyping(true);
          timer = setTimeout(() => reveal(0), 900);
        }, 3600);
        return;
      }
      timer = setTimeout(() => {
        setTyping(true);
        timer = setTimeout(() => reveal(index + 1), 900);
      }, 850);
    };
    setTyping(true);
    timer = setTimeout(() => reveal(0), 900);
    return () => { cancelled = true; clearTimeout(timer); };
  }, []);

  return (
    <section id="colony" className="idea-hive py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="idea-hive__glow" aria-hidden="true" />
      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-[0.88fr_1.12fr] gap-9 lg:gap-16 items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="eyebrow"><BeeIcon size={16} /> THE IDEA HIVE</p>
          <h2 className="section-title mt-5">Bring the spark. <span className="gradient-text">Meet the Bee.</span></h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mt-5 sm:mt-6 max-w-xl">Not sure where to begin? Treat this like a quick WhatsApp chat. Share the challenge, then let the first useful question reveal the right next move.</p>
          <div className="idea-points mt-7 sm:mt-8">{['A rough idea is welcome.', 'No pitch deck needed.', 'The conversation becomes your brief.'].map((point) => <div key={point}><span />{point}</div>)}</div>
          <div className="bee-console mt-8 sm:mt-10" aria-hidden="true"><div className="bee-console__rings" /><div className="bee-console__spark bee-console__spark--one" /><div className="bee-console__spark bee-console__spark--two" /><div className="bee-console__entrance"><NoteBee size={116} /></div><span className="bee-console__label">IDEA INTAKE</span></div>
        </motion.div>
        <motion.div className="wa-chat" initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.1 }}>
          <div className="wa-chat__top"><div className="wa-chat__profile" aria-hidden="true">Z</div><div><b>Ziramzis</b><span><i /> online</span></div><span className="wa-chat__dots">•••</span></div>
          <div className="wa-chat__body"><AnimatePresence initial={false}>{conversation.slice(0, visible).map((message, index) => <motion.div key={`${visible}-${message.text}`} className={`wa-bubble wa-bubble--${message.from}`} initial={{ opacity: 0, y: 11, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: .32 }}><p>{message.text}</p><small>{index === 0 ? 'now' : 'seen'}</small></motion.div>)}</AnimatePresence>{typing && <div className={`wa-typing wa-typing--${conversation[visible]?.from || 'visitor'}`}><i /><i /><i /></div>}</div>
          <div className="wa-chat__actions"><a href="#brief">Start your own conversation <ArrowRightIcon size={16} /></a></div>
          <p className="wa-chat__caption">A better digital experience starts with a useful conversation.</p>
        </motion.div>
      </div>
    </section>
  );
}
