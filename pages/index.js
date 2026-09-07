import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import HiveRoles from '../components/HiveRoles'
import Work from '../components/Work'
import Process from '../components/Process'
import HiveBrief from '../components/HiveBrief'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import WhatsAppWidget from '../components/WhatsAppWidget'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ziramzis — The Digital Hive for Ambitious Brands</title>
        <meta name="description" content="Ziramzis creates high-converting websites, digital products and brand identities for ambitious businesses." />
        <meta name="keywords" content="web design, web development, digital solutions, Mombasa" />
        <meta property="og:title" content="Ziramzis - Digital Creator" />
        <meta property="og:description" content="I Build Digital Solutions That Help Businesses Grow" />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#050A18" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div id="top" className="bg-dark text-white overflow-hidden">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content" tabIndex="-1">
          <Hero />
          <Services />
          <HiveRoles />
          <Work />
          <Process />
          <HiveBrief />
          <CTA />
        </main>
        <Footer />
        <WhatsAppWidget />
      </div>
    </>
  )
}
