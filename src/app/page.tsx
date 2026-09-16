import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProyectoDestacado from '@/components/ProyectoDestacado'
import SobreMi from '@/components/SobreMi'
import Proyectos from '@/components/Proyectos'
import FAQ from '@/components/FAQ'
import Contacto from '@/components/Contacto'
import Footer from '@/components/Footer'

// STRUCTURED DATA: `Person`, NOT `Organization`. This site sells one person's
// work, not a company's — there is no registered business name anywhere on the
// page, and claiming one in markup the visible page does not support is how
// structured data turns into a penalty instead of a rich result.
//
// EVERY FIELD BELOW IS ALREADY VISIBLE ON THE PAGE, and that is the rule this
// file has to keep: schema.org describes what a reader can see, so a claim here
// that the page does not make is both a lie to Google and unverifiable by a
// human. The degree and university come from "formación", the areas from "áreas
// de trabajo", the LinkedIn from the hero.
//
// NOT VISIBLE ON THE PAGE. It only changes what crawlers read, and it is checked
// with Ctrl+U or Google's Rich Results Test, never by looking at the site.
//
// Deliberately absent: `address`, because the page names San Miguel de Tucumán
// only as where the UNT is — that says where he studied, not where he works.
// Also absent: `aggregateRating`, which without real scored reviews breaks
// Google's review guidelines.
const LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://miranda-ia.net.ar/#jorge',
      name: 'Jorge Miranda',
      url: 'https://miranda-ia.net.ar',
      jobTitle: 'Desarrollo de software, automatización y ciberseguridad',
      description:
        'Profesional IT con experiencia en soporte, operaciones e infraestructura en entornos corporativos y de gobierno, especializado en monitoreo de automatizaciones RPA, AI Automation y desarrollo de software con IA.',
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Universidad Nacional de Tucumán',
      },
      knowsAbout: [
        'Automatización y RPA',
        'Ciberseguridad',
        'IA aplicada',
        'Cloud e infraestructura',
        'Desarrollo de software',
        'Operaciones IT',
      ],
      sameAs: ['https://www.linkedin.com/in/jorge-mir'],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://miranda-ia.net.ar/#website',
      url: 'https://miranda-ia.net.ar',
      name: 'Jorge Miranda',
      inLanguage: 'es-AR',
      publisher: { '@id': 'https://miranda-ia.net.ar/#jorge' },
    },
  ],
}

export default function Home() {
  return (
    <>
      {/* `replace(/</g, '\\u003c')` is not decoration: it stops a '<' inside any
          string above from closing this script tag early. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(LD).replace(/</g, '\\u003c'),
        }}
      />
      <Header />
      <main>
        <Hero />
        <ProyectoDestacado />
        <SobreMi />
        <Proyectos />
        <FAQ />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
