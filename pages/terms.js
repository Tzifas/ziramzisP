import Head from 'next/head'
import { ArrowRightIcon } from '../components/Icons'
import LogoMark from '../components/LogoMark'

export default function Page() {
  return (
    <>
      <Head>
        <title>Terms of Service — Ziramzis</title>
        <meta name="description" content="Terms of Service for Ziramzis — Busy Bee Studio, a web design and development studio in Mombasa, Kenya." />
        <link rel="canonical" href="https://ziramzis.vercel.app/terms of service/" />
        <meta name="theme-color" content="#050A18" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="bg-dark text-white" style={{ minHeight: '100vh' }}>
        <header className="sticky top-0 z-40" style={{ background: 'rgba(5,10,24,0.92)', backdropFilter: 'blur(14px)', borderBottom: '1px solid rgba(245,200,66,0.14)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3" aria-label="Back to the Ziramzis home page">
              <LogoMark size={34} id="lgterms of service" />
              <span className="font-black tracking-widest gradient-text">ZIRAMZIS</span>
            </a>
            <a href="/" className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: 'var(--cyan-mid)' }}>
              Back to the hive <ArrowRightIcon size={15} />
            </a>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <p className="eyebrow">BUSY BEE STUDIO</p>
          <h1 className="section-title mt-4">Terms of Service</h1>
          <p className="text-gray-500 text-sm mt-3">Last updated: September 2026</p>
          <div className="mt-10 space-y-8">
            <section>
              <h2 className="text-white font-bold text-lg">1. Working together</h2>
              <p className="text-gray-400 leading-relaxed mt-2">Every project starts with a Hive Brief and a written scope — the Blueprint: brief, PRD, MVP scope, architecture, tech stack and roadmap. Work begins once the downpayment is received and the scope is agreed.</p>
            </section>
            <section>
              <h2 className="text-white font-bold text-lg">2. Payments</h2>
              <p className="text-gray-400 leading-relaxed mt-2">Projects start with a downpayment; the balance is due on delivery, before final handover. Prices are quoted in Kenyan Shillings and confirmed in your brief.</p>
            </section>
            <section>
              <h2 className="text-white font-bold text-lg">3. Changes</h2>
              <p className="text-gray-400 leading-relaxed mt-2">Small adjustments inside the agreed scope are always welcome. Larger changes are quoted and scheduled separately, so the timeline stays honest.</p>
            </section>
            <section>
              <h2 className="text-white font-bold text-lg">4. Ownership</h2>
              <p className="text-gray-400 leading-relaxed mt-2">On final payment you own the delivered work completely — code, design files, documentation and the full asset kit. No lock-in.</p>
            </section>
            <section>
              <h2 className="text-white font-bold text-lg">5. Portfolio</h2>
              <p className="text-gray-400 leading-relaxed mt-2">I may showcase finished work in my portfolio and on social media. Prefer it stays private? Tell me and I will respect that.</p>
            </section>
            <section>
              <h2 className="text-white font-bold text-lg">6. Liability</h2>
              <p className="text-gray-400 leading-relaxed mt-2">I build with care and test thoroughly, but services are provided "as is". My liability is limited to the fees paid for the project.</p>
            </section>
          </div>
          <div className="mt-14 pt-8" style={{ borderTop: '1px solid rgba(245,200,66,0.15)' }}>
            <p className="text-gray-400 text-sm">
              Questions? WhatsApp <a href="https://wa.me/254711410442" className="font-semibold" style={{ color: 'var(--cyan-mid)' }}>+254 711 410 442</a> or email{' '}
              <a href="mailto:ziramzisfeis@gmail.com" className="font-semibold" style={{ color: 'var(--cyan-mid)' }}>ziramzisfeis@gmail.com</a>.
            </p>
          </div>
        </main>

        <footer className="py-8 px-4 text-center" style={{ background: '#030810', borderTop: '1px solid rgba(245,200,66,0.12)' }}>
          <span className="text-gray-600 text-sm">© {new Date().getFullYear()} Ziramzis — Busy Bee Studio, Mombasa, Kenya.</span>
        </footer>
      </div>
    </>
  )
}
