import Head from 'next/head'
import { motion } from 'framer-motion'
import {
  BeeIcon, BulbIcon, PencilIcon, HammerIcon, WhatsAppIcon, ArrowRightIcon,
  MapPinIcon, ChartIcon, BriefcaseIcon, HoneycombIcon, ClockIcon,
  ScaleIcon, CheckRocketIcon, GlobeIcon,
} from '../components/Icons'
import LogoMark from '../components/LogoMark'

const cardStyle = {
  background: 'linear-gradient(135deg, rgba(13,31,60,0.9), rgba(10,22,40,0.95))',
  border: '1px solid rgba(245,200,66,0.15)',
  borderRadius: '1rem',
}

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: 'easeOut' },
}

const short = [
  { title: 'One keeper. Zero handoffs.', body: 'You talk to the person doing the work — every message, every revision.' },
  { title: 'Brand to build, one line.', body: 'Identity, assets, design and code come from the same head.' },
  { title: 'AI-assisted, human-signed.', body: 'The bees draft and speed things up; I decide what actually ships.' },
]

const crafts = [
  { Icon: BulbIcon, title: 'Brand from scratch', body: 'Logo, colour, type and a visual system with a point of view — then the complete asset kit: every file, format and size your brand needs to show up consistently anywhere.' },
  { Icon: PencilIcon, title: 'Design with intent', body: 'Interfaces that make a business feel credible before the first message. Layout, copy and motion working together — every screen earning its place.' },
  { Icon: HammerIcon, title: 'Build & launch', body: 'Modern, fast websites and web apps, developed clean and deployed ready. No template smell, no loose ends — and I stay close after launch.' },
]

const pipeline = ['Brand', 'Asset kit', 'Design', 'Build', 'Launch', 'Care']

const bees = [
  { Icon: MapPinIcon, name: 'Scout Bee', job: 'Finds the signal.', accent: '#F5C842', line: 'Research, market scans, competitor sweeps — and the questions worth asking before we build.' },
  { Icon: ChartIcon, name: 'Strategy Bee', job: 'Shapes the brief.', accent: '#00F5FF', line: 'Turns a rough idea into a clear problem, offer and next best action — so we build the right thing.' },
  { Icon: BriefcaseIcon, name: 'Build Bee', job: 'Does the heavy lifting.', accent: '#F5C842', line: 'Drafts code, layouts and assets at speed — under my direction and review, never on its own.' },
  { Icon: WhatsAppIcon, name: 'Care Bee', job: 'Keeps clients close.', accent: '#00F5FF', line: 'Follow-ups, launch checks and the next useful touch, on time every time.' },
]

const blueprint = [
  { n: '01', title: 'Brief', body: "We talk. You share the idea and the goal; I shape it into a working brief with scope, timeline and the picture of success. You'll know exactly what we're chasing." },
  { n: '02', title: 'PRD', body: 'The Product Requirements Document: what we are building, for whom, and why — features, flows and the rules that keep it honest. No surprises later.' },
  { n: '03', title: 'MVP scope', body: 'The smallest version that delivers real value, so you launch fast and grow on a base that holds. Everything else goes on the roadmap — not in the way.' },
  { n: '04', title: 'Architecture', body: 'Structure, data and tech stack decided up front: pages, components, integrations and how it all fits together. The skeleton before the skin.' },
  { n: '05', title: 'Roadmap', body: 'Milestones, review points and delivery dates you can hold me to. You will always know what is next and what is done.' },
  { n: '06', title: 'Build & launch', body: 'Now the code. Fast, clean, tested and deployed — because every decision was already made. Launch day is calm by design.' },
]

const toolbox = [
  { label: 'Frontend', items: ['Next.js', 'React', 'Tailwind CSS', 'Motion'] },
  { label: 'Backend & data', items: ['Node.js', 'APIs', 'Databases', 'Integrations'] },
  { label: 'Design', items: ['Figma', 'Illustrator', 'Design systems', 'Asset kits'] },
  { label: 'AI & agents', items: ['AI agents', 'Automation', 'Prompt systems', 'Review loops'] },
  { label: 'Delivery', items: ['Git', 'Vercel', 'Analytics', 'SEO basics'] },
]

const ways = [
  { Icon: WhatsAppIcon, title: 'A direct line', body: 'You talk to me — the keeper — not an account manager. WhatsApp is usually the fastest way to reach me.' },
  { Icon: ClockIcon, title: 'Clear checkpoints', body: 'You see the blueprint, the designs and the build at agreed points. Feedback lands early, while it is still cheap.' },
  { Icon: ScaleIcon, title: 'Honest scope', body: 'If something is not worth building, I will say so. A smaller thing that works beats a bigger thing that does not.' },
  { Icon: CheckRocketIcon, title: 'Yours to keep', body: 'Code, files and assets hand over completely at the end. No lock-in, no hostage-taking, no mystery invoices.' },
]

const needs = [
  'Your idea — rough is perfectly fine.',
  'Decisions at the checkpoints (I make them easy).',
  'Honest feedback, early and often.',
]

const faq = [
  { q: 'How long does a project take?', a: 'A landing page can be live within days. A full business website usually takes two to four weeks depending on scope. You get the roadmap up front — and I keep to it.' },
  { q: 'What does it cost?', a: 'Landing pages from KSh 25k, business websites KSh 55k–140k, brand identities KSh 35k–120k, web products from KSh 140k. The Hive Brief turns your idea into a real number.' },
  { q: 'Do you work with clients outside Kenya?', a: 'Yes. I am based in Mombasa and work with clients anywhere. WhatsApp, email and scheduled calls keep things simple across time zones.' },
  { q: 'Who owns the work?', a: 'You do — completely. Code, design files, documentation and the full asset kit all hand over at the end. No lock-in, ever.' },
  { q: 'Can you work with my existing brand?', a: 'Absolutely. I can extend an identity you already have, or rebuild it from scratch if it is holding you back. We decide together in the brief.' },
]

export default function Keeper() {
  return (
    <>
      <Head>
        <title>Meet the Keeper — Ziramzis | Brand, Web Design & Development in Mombasa</title>
        <meta name="description" content="Meet Ramadhan “Ziramzis” — a Mombasa web designer and developer building brand identities, websites and web apps with a colony of AI assistants. Blueprint before code, from KSh 25k." />
        <link rel="canonical" href="https://ziramzis.vercel.app/keeper/" />
        <meta name="theme-color" content="#050A18" />
        <meta property="og:title" content="Meet the Keeper — Ziramzis" />
        <meta property="og:description" content="The person and the process behind Ziramzis — brand, web design and development from Mombasa, Kenya, with AI bee helpers." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://ziramzis.vercel.app/keeper/" />
        <meta property="og:image" content="https://ziramzis.vercel.app/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://ziramzis.vercel.app/og-image.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Ramadhan',
              alternateName: 'Ziramzis',
              jobTitle: 'Web designer and developer',
              url: 'https://ziramzis.vercel.app/keeper/',
              image: 'https://ziramzis.vercel.app/images/keeper-hero.jpeg',
              address: { '@type': 'PostalAddress', addressLocality: 'Mombasa', addressCountry: 'KE' },
              knowsAbout: ['Web design', 'Web development', 'Brand identity', 'Web applications', 'AI agents'],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                { '@type': 'Question', name: 'How long does a project take?', acceptedAnswer: { '@type': 'Answer', text: 'A landing page can be live within days. A full business website usually takes two to four weeks depending on scope. You get the roadmap up front — and I keep to it.' } },
                { '@type': 'Question', name: 'What does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Landing pages from KSh 25k, business websites KSh 55k–140k, brand identities KSh 35k–120k, web products from KSh 140k. The Hive Brief turns your idea into a real number.' } },
                { '@type': 'Question', name: 'Do you work with clients outside Kenya?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. I am based in Mombasa and work with clients anywhere. WhatsApp, email and scheduled calls keep things simple across time zones.' } },
                { '@type': 'Question', name: 'Who owns the work?', acceptedAnswer: { '@type': 'Answer', text: 'You do — completely. Code, design files, documentation and the full asset kit all hand over at the end. No lock-in, ever.' } },
                { '@type': 'Question', name: 'Can you work with my existing brand?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. I can extend an identity you already have, or rebuild it from scratch if it is holding you back. We decide together in the brief.' } },
              ],
            },
          ]) }}
        />
      </Head>

      <div className="bg-dark text-white overflow-hidden">
        <header className="sticky top-0 z-40" style={{ background: 'rgba(5,10,24,0.92)', backdropFilter: 'blur(14px)', borderBottom: '1px solid rgba(245,200,66,0.14)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3" aria-label="Back to the Ziramzis home page">
              <LogoMark size={36} id="kprhdr" />
              <span className="font-black tracking-widest gradient-text">ZIRAMZIS</span>
            </a>
            <a href="/" className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: 'var(--cyan-mid)' }}>
              Back to the hive <ArrowRightIcon size={15} />
            </a>
          </div>
        </header>

        <main>
          {/* HERO */}
          <section className="pt-14 pb-14 sm:pt-20 sm:pb-20 px-4 sm:px-6 lg:px-8 relative" style={{ background: 'linear-gradient(160deg, #050A18 0%, #08122A 60%, #050A18 100%)' }}>
            <motion.div {...fadeUp} className="mt-10 lg:mt-0 lg:absolute lg:right-0 lg:top-6 lg:w-[34%]">
              <img src="/images/keeper-hero.jpeg" alt="Illustration of a glowing honeycomb hive with a stylised bee — the Ziramzis digital studio, Mombasa" className="w-full h-auto rounded-2xl" style={{ border: '1px solid rgba(245,200,66,0.25)', boxShadow: '0 24px 60px rgba(0,0,0,0.45)' }} />
            </motion.div>
            <div className="max-w-6xl mx-auto relative">
              <motion.p {...fadeUp} className="eyebrow"><BeeIcon size={16} /> THE KEEPER</motion.p>
              <motion.h1 {...fadeUp} className="text-4xl sm:text-6xl font-black leading-[1.05] mt-5 max-w-2xl" style={{ letterSpacing: '-0.04em' }}>
                The person behind <span className="gradient-text">the hive.</span>
              </motion.h1>
              <motion.p {...fadeUp} className="text-gray-400 text-lg leading-relaxed mt-6 max-w-2xl">
                I am Ziramzis — a nickname that grew out of Ramadhan, and it stuck. I am a tech enthusiast from Mombasa who designs brands
                from scratch, produces the full asset kit, and designs &amp; develops the websites that carry them. Full-time, on time, with energy to spare.
              </motion.p>
              <motion.p {...fadeUp} className="text-gray-400 text-lg leading-relaxed mt-4 max-w-2xl">
                A hive works because every part serves the whole. That is the idea here: one keeper, a colony of AI helpers, and your project at the centre.
              </motion.p>
              <motion.div {...fadeUp} className="flex flex-wrap gap-3 mt-8">
                {['Brand from scratch', 'Design + Development', 'Based in Mombasa, working worldwide'].map((chip) => (
                  <span key={chip} className="text-sm font-semibold px-4 py-2 rounded-full"
                    style={{ background: 'rgba(245,200,66,0.08)', border: '1px solid rgba(245,200,66,0.25)', color: '#F5C842' }}>
                    {chip}
                  </span>
                ))}
              </motion.div>
            </div>
          </section>

          {/* THE SHORT VERSION */}
          <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8" style={{ background: '#050A18' }}>
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
              {short.map((s) => (
                <motion.div key={s.title} {...fadeUp} className="p-6" style={{ ...cardStyle, borderColor: 'rgba(0,245,255,0.18)' }}>
                  <h2 className="text-lg font-black text-white">{s.title}</h2>
                  <p className="text-gray-400 text-sm leading-relaxed mt-2">{s.body}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* WHAT I DO */}
          <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(180deg, #050A18, #08122A 50%, #050A18)' }}>
            <div className="max-w-6xl mx-auto">
              <motion.p {...fadeUp} className="eyebrow"><HoneycombIcon size={16} /> THE CRAFT</motion.p>
              <motion.h2 {...fadeUp} className="section-title mt-5">One line, <span className="gradient-text">three crafts.</span></motion.h2>
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                {crafts.map((c) => (
                  <motion.div key={c.title} {...fadeUp} whileHover={{ y: -4 }} transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="p-6" style={cardStyle}>
                    <div className="flex items-center gap-3 mb-4">
                      <c.Icon size={26} color="#F5C842" />
                      <h3 className="text-lg font-bold text-white">{c.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{c.body}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div {...fadeUp} className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2">
                {pipeline.map((step, i) => (
                  <span key={step} className="inline-flex items-center gap-3">
                    <span className="text-xs font-black tracking-[0.18em]" style={{ color: i === pipeline.length - 1 ? 'var(--cyan-mid)' : '#F5C842' }}>
                      {step.toUpperCase()}
                    </span>
                    {i < pipeline.length - 1 && <ArrowRightIcon size={14} color="rgba(245,200,66,0.5)" />}
                  </span>
                ))}
              </motion.div>
            </div>
          </section>

          {/* THE BEES */}
          <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8" style={{ background: '#050A18' }}>
            <div className="max-w-6xl mx-auto">
              <motion.p {...fadeUp} className="eyebrow"><HoneycombIcon size={16} /> THE HIVE, EXPLAINED</motion.p>
              <motion.h2 {...fadeUp} className="section-title mt-5">
                Yes, the bees are AI. <span className="gradient-text">Here is how we work.</span>
              </motion.h2>
              <motion.p {...fadeUp} className="text-gray-400 text-lg leading-relaxed mt-6 max-w-2xl">
                Around my studio you will meet bees. They are my AI helpers — each one wears a role, like a colony with a job for everyone.
                You see them working in the open, never behind your back.
              </motion.p>
              <motion.div {...fadeUp} className="mt-10">
                <img src="/images/keeper-bees.jpeg" alt="Four AI bee assistants — Scout, Strategy, Build and Care — working together on a client project" className="w-full h-auto rounded-2xl" style={{ border: '1px solid rgba(245,200,66,0.2)', boxShadow: '0 20px 50px rgba(0,0,0,0.4)' }} />
              </motion.div>
              <div className="grid sm:grid-cols-2 gap-6 mt-12">
                {bees.map((b) => (
                  <motion.div key={b.name} {...fadeUp} className="p-6" style={cardStyle}>
                    <div className="flex items-center gap-3">
                      <span className="w-11 h-11 flex items-center justify-center rounded-xl" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(245,200,66,0.2)' }}>
                        <b.Icon size={22} color={b.accent} />
                      </span>
                      <div>
                        <h3 className="font-bold text-white">{b.name}</h3>
                        <p className="text-xs font-semibold" style={{ color: 'var(--cyan-mid)' }}>{b.job}</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mt-4">{b.line}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div {...fadeUp} className="mt-10 p-6" style={{ ...cardStyle, borderColor: 'rgba(0,245,255,0.2)' }}>
                <h3 className="font-bold text-white">How I direct them</h3>
                <p className="text-gray-400 text-sm leading-relaxed mt-2">
                  Every bee answers to the keeper. I set the brief, review the drafts, correct the taste and sign off the quality.
                  What reaches you is my standard — the bees just get us there faster.
                </p>
              </motion.div>
              <motion.p {...fadeUp} className="text-gray-300 text-base sm:text-lg leading-relaxed mt-10 max-w-3xl" style={{ borderLeft: '2px solid rgba(245,200,66,0.5)', paddingLeft: '1.25rem' }}>
                This is the innovative part of working with me: a one-person studio that runs like a team. I bring the ideas, judgment and taste;
                the bees bring speed and tireless drafting. We evolve with the tech — using it where it values us, never as a shortcut past craft.
              </motion.p>
            </div>
          </section>

          {/* BLUEPRINT */}
          <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(180deg, #050A18, #08122A 50%, #050A18)' }}>
            <div className="max-w-4xl mx-auto">
              <motion.p {...fadeUp} className="eyebrow"><BulbIcon size={16} color="#F5C842" /> THE BLUEPRINT</motion.p>
              <motion.h2 {...fadeUp} className="section-title mt-5">
                Blueprint <span className="gradient-text">before code.</span>
              </motion.h2>
              <motion.p {...fadeUp} className="text-gray-400 text-lg leading-relaxed mt-6 max-w-2xl">
                After we agree on the brief and the downpayment lands, the build starts on paper — not in code. Six documents decide
                everything before a single line is written, so the code becomes the easy part.
              </motion.p>
              <motion.div {...fadeUp} className="mt-10">
                <img src="/images/keeper-blueprint.jpeg" alt="Blueprint diagram of a web project plan: brief, PRD, MVP scope, architecture, roadmap and launch" className="w-full h-auto rounded-2xl" style={{ border: '1px solid rgba(0,245,255,0.2)', boxShadow: '0 20px 50px rgba(0,0,0,0.4)' }} />
              </motion.div>
              <div className="mt-12 relative" style={{ paddingLeft: '1.75rem' }}>
                <div className="absolute" style={{ left: 6, top: 8, bottom: 8, width: 1, background: 'linear-gradient(180deg, rgba(245,200,66,0.55), rgba(0,245,255,0.35))' }} />
                {blueprint.map((step) => (
                  <motion.div key={step.n} {...fadeUp} className="relative pb-9">
                    <span className="absolute rounded-full" style={{ left: '-1.75rem', top: 4, width: 13, height: 13, background: '#0A1628', border: '2px solid #F5C842' }} />
                    <div className="flex gap-5">
                      <span className="font-black text-lg flex-shrink-0" style={{ color: '#F5C842', letterSpacing: '0.08em', width: 34 }}>{step.n}</span>
                      <div>
                        <h3 className="text-lg font-bold text-white">{step.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mt-1.5">{step.body}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="text-gray-500 italic text-sm">Every project gets this treatment — from a one-page site to a full web product.</p>
            </div>
          </section>

          {/* TOOLBOX */}
          <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#050A18' }}>
            <div className="max-w-6xl mx-auto">
              <motion.p {...fadeUp} className="eyebrow"><BriefcaseIcon size={16} /> THE TOOLBOX</motion.p>
              <motion.h2 {...fadeUp} className="section-title mt-5">What I build <span className="gradient-text">with.</span></motion.h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {toolbox.map((group) => (
                  <motion.div key={group.label} {...fadeUp} className="p-5" style={cardStyle}>
                    <h3 className="text-xs font-black tracking-[0.18em]" style={{ color: 'var(--cyan-mid)' }}>{group.label.toUpperCase()}</h3>
                    <div className="flex flex-wrap gap-2 mt-3.5">
                      {group.items.map((item) => (
                        <span key={item} className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: 'rgba(245,200,66,0.07)', border: '1px solid rgba(245,200,66,0.2)', color: '#E8D9A8' }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* HOW WE WORK */}
          <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(180deg, #050A18, #08122A 50%, #050A18)' }}>
            <div className="max-w-6xl mx-auto">
              <motion.p {...fadeUp} className="eyebrow"><GlobeIcon size={16} /> WORKING WITH ME</motion.p>
              <motion.h2 {...fadeUp} className="section-title mt-5">What you can <span className="gradient-text">count on.</span></motion.h2>
              <div className="grid sm:grid-cols-2 gap-6 mt-12">
                {ways.map((w) => (
                  <motion.div key={w.title} {...fadeUp} className="p-6" style={cardStyle}>
                    <div className="flex items-center gap-3 mb-3">
                      <w.Icon size={22} color="#F5C842" />
                      <h3 className="font-bold text-white">{w.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{w.body}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div {...fadeUp} className="mt-10 p-6" style={{ ...cardStyle, borderColor: 'rgba(0,245,255,0.2)' }}>
                <h3 className="font-bold text-white">What I need from you</h3>
                <ul className="mt-3 grid sm:grid-cols-3 gap-3">
                  {needs.map((n) => (
                    <li key={n} className="text-gray-400 text-sm flex items-start gap-2.5">
                      <span className="mt-1.5 flex-shrink-0" style={{ width: 6, height: 6, borderRadius: 999, background: '#F5C842', boxShadow: '0 0 10px rgba(245,200,66,0.9)' }} />
                      {n}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8" style={{ background: '#050A18' }}>
            <div className="max-w-3xl mx-auto">
              <motion.p {...fadeUp} className="eyebrow"><ScaleIcon size={16} /> STRAIGHT ANSWERS</motion.p>
              <motion.h2 {...fadeUp} className="section-title mt-5">Questions, <span className="gradient-text">answered.</span></motion.h2>
              <div className="mt-10">
                {faq.map((f) => (
                  <motion.details key={f.q} {...fadeUp} className="group py-5" style={{ borderTop: '1px solid rgba(245,200,66,0.18)' }}>
                    <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-white font-bold">
                      <span>{f.q}</span>
                      <span className="group-open:rotate-45 transition-transform flex-shrink-0" style={{ color: '#F5C842', fontSize: 20, lineHeight: 1 }}>+</span>
                    </summary>
                    <p className="text-gray-400 text-sm leading-relaxed mt-3 max-w-2xl">{f.a}</p>
                  </motion.details>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(180deg, #050A18, #0A1628)' }}>
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2 {...fadeUp} className="text-3xl sm:text-5xl font-black" style={{ letterSpacing: '-0.04em' }}>
                Bring the spark. <span className="gradient-text">I will bring the hive.</span>
              </motion.h2>
              <motion.p {...fadeUp} className="text-gray-300 text-base sm:text-lg mt-6">
                Start with a short message. I will answer with the right next step — no hard sell, no jargon.
              </motion.p>
              <motion.div {...fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <a href="https://wa.me/254711410442?text=Hi%20Ziramzis%2C%20I%20got%20your%20message%20from%20the%20Keeper%20page"
                  target="_blank" rel="noopener noreferrer"
                  className="gradient-button px-8 py-4 rounded-xl font-bold text-black text-sm sm:text-base inline-flex items-center justify-center gap-3">
                  <WhatsAppIcon size={20} /> Start a Hive Brief
                </a>
                <a href="/" className="px-8 py-4 rounded-xl font-bold text-sm sm:text-base border-2 inline-flex items-center justify-center gap-2"
                  style={{ borderColor: 'rgba(0,245,255,0.4)', color: 'var(--cyan-mid)' }}>
                  Back to the site
                </a>
              </motion.div>
            </div>
          </section>
        </main>

        <footer className="py-10 px-4 text-center" style={{ background: '#030810', borderTop: '1px solid rgba(245,200,66,0.12)' }}>
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Ziramzis — Busy Bee Studio, Mombasa, Kenya.</p>
          <p className="text-gray-600 text-xs mt-2">Web design, brand identity and web app development — built in Mombasa, working worldwide.</p>
        </footer>
      </div>
    </>
  )
}
