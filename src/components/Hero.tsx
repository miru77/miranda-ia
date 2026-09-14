import Image from 'next/image'
import { WHATSAPP_URL } from '@/lib/whatsapp'

function IconLinkedIn() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative grid-bg pt-16">
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* Columna izquierda: texto */}
          <div className="space-y-8">
            <p className="eyebrow">// jorge miranda</p>

            <h1 className="text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-tight text-ink">
              Desarrollo de software<br />impulsado por{' '}
              <span className="text-accent">IA</span>
            </h1>

            <p className="font-mono text-xs tracking-widest uppercase text-ink-muted border border-border rounded-sm px-3 py-1.5 inline-block">
              con foco en arquitectura y seguridad
            </p>

            <p className="text-lg text-ink-muted leading-relaxed max-w-lg">
              Profesional IT con experiencia en operaciones y automatización, evolucionando hacia la construcción de aplicaciones modernas con IA, buenas prácticas de desarrollo y security-by-design.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-signal text-white text-sm font-medium rounded-sm hover:opacity-90 transition-opacity duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal"
              >
                Escribime por WhatsApp
              </a>
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center px-6 py-3 border border-border text-sm font-medium text-ink rounded-sm hover:border-accent hover:text-accent transition-colors duration-200"
              >
                Ver proyectos →
              </a>
            </div>
          </div>

          {/* Columna derecha: foto + redes */}
          <div className="flex flex-col items-center gap-6">

            {/* Foto circular con anillo decorativo */}
            <div className="relative">
              {/* Anillo exterior decorativo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 via-transparent to-signal/20 -m-1.5" />
              {/* Anillo separador */}
              <div className="absolute inset-0 rounded-full bg-bg -m-0.5" />
              {/* Foto */}
              <div className="relative w-52 h-52 lg:w-60 lg:h-60 rounded-full overflow-hidden">
                <Image
                  src="/jorge.webp"
                  alt="Jorge Miranda"
                  fill
                  className="object-cover object-top"
                  priority
                  unoptimized
                />
              </div>
            </div>

            {/* Links sociales */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/jorge-mir"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-sm text-sm text-ink-muted hover:border-accent hover:text-accent transition-colors duration-200"
              >
                <IconLinkedIn />
                <span className="font-mono text-xs">LinkedIn</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
