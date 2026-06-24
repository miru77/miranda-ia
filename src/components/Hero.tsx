import Image from 'next/image'

function IconLinkedIn() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function IconGitHub() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
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
              <button
                type="button"
                aria-label="Reservar una consulta (próximamente)"
                className="inline-flex items-center justify-center px-6 py-3 bg-signal text-white text-sm font-medium rounded-sm hover:opacity-90 transition-opacity duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal"
              >
                Reservar una consulta
              </button>
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
                  src="/jorge.png"
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
              <a
                href="https://github.com/miru77"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-sm text-sm text-ink-muted hover:border-accent hover:text-accent transition-colors duration-200"
              >
                <IconGitHub />
                <span className="font-mono text-xs">GitHub</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
