import Head from 'next/head'
import { ArrowRightIcon } from '../components/Icons'
import LogoMark from '../components/LogoMark'

export default function Page() {
  return (
    <>
      <Head>
        <title>Privacy Policy — Ziramzis</title>
        <meta name="description" content="Privacy Policy for Ziramzis — Busy Bee Studio, a web design and development studio in Mombasa, Kenya." />
        <link rel="canonical" href="https://ziramzis.vercel.app/privacy policy/" />
        <meta name="theme-color" content="#050A18" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="bg-dark text-white" style={{ minHeight: '100vh' }}>
        <header className="sticky top-0 z-40" style={{ background: 'rgba(5,10,24,0.92)', backdropFilter: 'blur(14px)', borderBottom: '1px solid rgba(245,200,66,0.14)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3" aria-label="Back to the Ziramzis home page">
              <LogoMark size={34} id="lgprivacy policy" />
              <span className="font-black tracking-widest gradient-text">ZIRAMZIS</span>
            </a>
            <a href="/" className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: 'var(--cyan-mid)' }}>
              Back to the hive <ArrowRightIcon size={15} />
            </a>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <p className="eyebrow">BUSY BEE STUDIO</p>
          <h1 className="section-title mt-4">Privacy Policy</h1>
          <p className="text-gray-500 text-sm mt-3">Last updated: September 2026</p>
          <div className="mt-10 space-y-8">
            <section>
              <h2 className="text-white font-bold text-lg">What I collect</h2>
              <p className="text-gray-400 leading-relaxed mt-2">Only what you choose to send me: your name, contact details and the project information you share through WhatsApp, email or the Hive Brief. This website itself uses no tracking cookies and no advertising pixels.</p>
            </section>
            <section>
              <h2 className="text-white font-bold text-lg">How I use it</h2>
              <p className="text-gray-400 leading-relaxed mt-2">To reply to you, prepare your brief, deliver your project and stay in touch about work we have agreed on. Nothing more.</p>
            </section>
            <section>
              <h2 className="text-white font-bold text-lg">Who sees it</h2>
              <p className="text-gray-400 leading-relaxed mt-2">Me — and my AI assistants, as they help draft work under my direction and review. I never sell or share your data with anyone else. Services that carry your message (such as WhatsApp and email providers) have their own privacy policies.</p>
            </section>
            <section>
              <h2 className="text-white font-bold text-lg">How long I keep it</h2>
              <p className="text-gray-400 leading-relaxed mt-2">Project records are kept while we work together, and afterwards for reference and legal requirements. Ask me to delete your data at any time and I will.</p>
            </section>
            <section>
              <h2 className="text-white font-bold text-lg">Your rights</h2>
              <p className="text-gray-400 leading-relaxed mt-2">You can ask to see, correct or delete the information I hold about you at any time. One message is enough.</p>
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
