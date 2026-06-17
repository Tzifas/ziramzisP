import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Work from '../components/Work'
import Process from '../components/Process'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ziramzis — Creative Digital Portfolio</title>
        <meta name="description" content="Ziramzis builds vibrant websites, web apps, and brand portfolios with motion, polished UI, and strong business impact." />
        <meta name="keywords" content="digital portfolio, web design, web development, creative agency, Mombasa" />
        <meta property="og:title" content="Ziramzis — Creative Digital Portfolio" />
        <meta property="og:description" content="Modern websites, apps, and portfolio experiences designed to feel alive." />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="relative overflow-hidden bg-dark text-white">
        <div className="floating-glow w-[28rem] h-[28rem] rounded-full bg-teal-500/20 left-[-8rem] top-[-10rem] hidden lg:block"></div>
        <div className="floating-glow w-[18rem] h-[18rem] rounded-full bg-yellow-400/15 right-[-6rem] top-[12rem] hidden lg:block"></div>
        <Header />
        <main>
          <Hero />
          <Services />
          <Work />
          <Process />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  )
}
