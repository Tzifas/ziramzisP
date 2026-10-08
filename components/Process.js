'use client';

import { motion } from 'framer-motion';
import KeeperBee from './KeeperBee';

const processSteps = [
  { number: '01', label: 'Listen', title: 'You share the signal.', description: 'Your idea, your audience and the move you need visitors to make.', visual: 'listen' },
  { number: '02', label: 'Shape', title: 'I set the visual direction.', description: 'Strategy, references and a design route before the build begins.', visual: 'shape' },
  { number: '03', label: 'Build', title: 'The useful details take form.', description: 'Responsive pages, considered interactions and a tidy content system.', visual: 'build' },
  { number: '04', label: 'Check', title: 'We test what visitors feel.', description: 'Small screens, forms, links and the moments where trust is won.', visual: 'check' },
  { number: '05', label: 'Release', title: 'Launch, then keep the door open.', description: 'A clean handover and a clear next-step plan for the work to grow.', visual: 'release' },
];

function ProcessVisual({ type }) {
  if (type === 'listen') return <div className="process-visual process-visual--listen" aria-hidden="true"><div className="note"><b>idea</b><span>voice note · sketch</span></div><i /><i /><i /></div>;
  if (type === 'shape') return <div className="process-visual process-visual--shape" aria-hidden="true"><i /><i /><i /><b>mood<br />board</b><span>route</span></div>;
  if (type === 'build') return <div className="process-visual process-visual--build" aria-hidden="true"><i /><div className="screen"><b>&lt;/&gt;</b><span /><span /><span /></div><i /></div>;
  if (type === 'check') return <div className="process-visual process-visual--check" aria-hidden="true"><i>✓</i><div><span /><span /><span /></div><b>ready</b></div>;
  return <div className="process-visual process-visual--release" aria-hidden="true"><div className="launch-line"><i /><i /><i /><b>live</b></div><span>handover</span></div>;
}

export default function Process() {
  return (
    <section id="process" className="landing-section py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #050A18 0%, #08122A 50%, #050A18 100%)' }}>
      <KeeperBee />
      <div className="landing-shell process-v3">
        <motion.div className="landing-heading landing-heading--split" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div><p className="landing-kicker">How I work</p><h2>Enough process to feel <em>sure-footed.</em></h2></div>
          <p>There is room for instinct, but never confusion. The work moves through a clear set of decisions without making your idea feel like a factory job.</p>
        </motion.div>
        <div className="process-v3__route">
          {processSteps.map((step, index) => (
            <motion.article key={step.number} className="process-v3__step" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }}>
              <div className="process-v3__marker"><span className="process-step-number">{step.number}</span><p>{step.label}</p></div>
              <ProcessVisual type={step.visual} />
              <div className="process-v3__content"><h3>{step.title}</h3><span>{step.description}</span></div>
            </motion.article>
          ))}
        </div>
        <div className="process-v3__principle"><span>THE WORKING PRINCIPLE</span><p>Make it clear. Make it considered. Make it easy to use.</p></div>
      </div>
    </section>
  );
}
