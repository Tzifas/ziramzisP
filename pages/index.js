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
        <title>Ziramzis - I Build Digital Solutions That Help Businesses Grow</title>
        <meta name="description" content="Ziramzis is a digital creator offering websites, web apps, and portfolios. Based in Mombasa, Kenya." />
        <meta name="keywords" content="web design, web development, digital solutions, Mombasa" />
        <meta property="og:title" content="Ziramzis - Digital Creator" />
        <meta property="og:description" content="I Build Digital Solutions That Help Businesses Grow" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="bg-dark text-white overflow-hidden">
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
