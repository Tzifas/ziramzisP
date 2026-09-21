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
import { absoluteUrl, site } from '../lib/site'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ziramzis — The Digital Hive for Ambitious Brands</title>
        <meta name="description" content="Ziramzis creates high-converting websites, digital products and brand identities for ambitious businesses." />
        <meta property="og:title" content="Ziramzis — The Digital Hive for Ambitious Brands" />
        <meta property="og:description" content="Ziramzis creates high-converting websites, digital products and brand identities for ambitious businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={absoluteUrl('/')} />
        <meta property="og:site_name" content="Ziramzis" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content={absoluteUrl('/brand/campaign.jpg')} />
        <meta name="twitter:image" content={absoluteUrl('/brand/campaign.jpg')} />
        <link rel="canonical" href={absoluteUrl('/')} />
        <meta name="theme-color" content="#050A18" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Ziramzis — Busy Bee Studio',
            description: 'Web design, brand identity and web app development from Mombasa, Kenya.',
            url: absoluteUrl('/'),
            image: absoluteUrl('/brand/campaign.jpg'),
            founder: { '@type': 'Person', name: 'Ramadhan (Ziramzis)' },
            address: { '@type': 'PostalAddress', addressLocality: 'Mombasa', addressCountry: 'KE' },
            areaServed: 'Worldwide',
            priceRange: 'KSh 25,000 – KSh 300,000+',
            sameAs: [`https://wa.me/${site.whatsapp}`],
            serviceType: ['Web design', 'Web development', 'Brand identity', 'Web applications'],
          }) }}
        />
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
