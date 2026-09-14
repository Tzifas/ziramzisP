'use client';
import { motion } from 'framer-motion';
import {
  BeeIcon, BulbIcon, PencilIcon, HammerIcon, FlaskIcon, RocketIcon,
  ClockIcon, HandshakeIcon, CheckRocketIcon, HoneycombIcon
} from './Icons';
import KeeperBee from './KeeperBee';

const processSteps = [
  { number: 1, Icon: BulbIcon, title: 'You Share Your Idea', description: 'Tell me about your project, goals, and vision. I listen carefully, ask the right questions, and make sure I understand your needs.', accent: '#F5C842' },
  { number: 2, Icon: PencilIcon, title: 'I Plan & Design', description: 'I create a roadmap and design mockups that bring your vision to life. Every detail is decided before anything gets built.', accent: '#00F5FF' },
  { number: 3, Icon: HammerIcon, title: 'I Build & Develop', description: 'Using modern technologies, I build your solution with clean, scalable code — every line crafted with care.', accent: '#F5C842' },
  { number: 4, Icon: FlaskIcon, title: 'I Test & Deploy', description: 'Rigorous testing ensures everything works perfectly. Then I launch — smooth, with zero hiccups.', accent: '#00F5FF' },
  { number: 5, Icon: RocketIcon, title: 'You Grow & Scale', description: 'Ongoing support and maintenance so your success continues long after launch — and keeps growing.', accent: '#F5C842' },
];

const summaryCards = [
  { Icon: ClockIcon, title: 'Quick Turnaround', desc: 'Efficient process without ever compromising on quality', accent: '#F5C842' },
  { Icon: HandshakeIcon, title: 'Full Communication', desc: 'Regular updates and completely transparent progress tracking', accent: '#00F5FF' },
  { Icon: CheckRocketIcon, title: 'Ready to Launch', desc: 'Deploy-ready, fully tested solution — sweet and clean', accent: '#F5C842' },
];

const HexStep = ({ number, accent }) => (
  <div className="relative flex-shrink-0">
    <svg width="64" height="74" viewBox="0 0 64 74">
      <path d="M32 4 L60 19 L60 55 L32 70 L4 55 L4 19 Z"
        fill={`${accent}18`} stroke={accent} strokeWidth="1.5" />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center font-black text-2xl"
      style={{ color: accent, textShadow: `0 0 15px ${accent}60` }}>
      {number}
    </div>
  </div>
);

export default function Process() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const stepVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050A18 0%, #08122A 50%, #050A18 100%)' }}>

      <div className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='92' viewBox='0 0 80 92'%3E%3Cpath d='M40 4 L76 23 L76 69 L40 88 L4 69 L4 23 Z' fill='none' stroke='%2300F5FF' stroke-width='0.4' opacity='0.07'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 92px',
        }}
      />

      <KeeperBee />
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-80px' }}>
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{ background: 'rgba(0,245,255,0.08)', border: '1px solid rgba(0,245,255,0.2)', color: '#00F5FF' }}
          >
            <BeeIcon size={18} />
            Working with me
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            How I <span className="gradient-text">Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A transparent, step-by-step process designed to deliver exceptional results. No surprises — just sweet outcomes.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <motion.div className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}>
            {processSteps.map((step, index) => (
              <motion.div key={step.number} className="relative" variants={stepVariants}>
                {index !== processSteps.length - 1 && (
                  <motion.div
                    className="absolute left-8 top-20 w-px hidden md:block"
                    style={{ height: '40px', background: `linear-gradient(180deg, ${step.accent}, ${processSteps[index + 1].accent})` }}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  />
                )}
                <div className="process-step-row flex gap-6 md:gap-8">
                  <div className="process-step-number">
                    <HexStep number={step.number} accent={step.accent} />
                  </div>
                  <motion.div className="process-step-card flex-1 pt-1"
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}>
                    <div className="honey-card p-6 rounded-2xl group cursor-pointer relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                        style={{ background: `radial-gradient(ellipse at left center, ${step.accent}08, transparent 60%)` }}
                      />
                      <div className="process-step-card__content flex items-start gap-4">
                        <div className="step-icon flex-shrink-0 mt-1">
                          <step.Icon size={28} color={step.accent} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                          <p className="text-gray-400 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                      <motion.div
                        className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 transition-all duration-500"
                        style={{ background: `linear-gradient(90deg, ${step.accent}, transparent)` }}
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Summary Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          {summaryCards.map((item, idx) => (
            <motion.div
              key={item.title}
              className="process-summary-card honey-card p-6 rounded-2xl text-center group cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{ background: `radial-gradient(ellipse at center, ${item.accent}08, transparent 70%)` }}
              />
              <div className="flex justify-center mb-4">
                <item.Icon size={36} color={item.accent} />
              </div>
              <h4 className="font-bold mb-2 text-white">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              <div className="absolute top-3 right-3 opacity-20">
                <svg width="24" height="28" viewBox="0 0 24 28">
                  <path d="M12 2 L22 7.5 L22 20.5 L12 26 L2 20.5 L2 7.5 Z" fill={item.accent} />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
