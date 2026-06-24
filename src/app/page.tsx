import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SobreMi from '@/components/SobreMi'
import Proyectos from '@/components/Proyectos'
import Contacto from '@/components/Contacto'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SobreMi />
        <Proyectos />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
