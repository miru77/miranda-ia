export default function Contacto() {
  return (
    <section id="contacto" className="py-14 bg-surface grid-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">— contacto</p>
          <h2 className="text-4xl font-semibold text-ink leading-tight mb-6">
            ¿Tenés un proyecto<br />en mente?
          </h2>
          <p className="text-base text-ink-muted leading-relaxed mb-10 max-w-lg">
            Ya sea automatizar un proceso, mejorar la seguridad de tu infraestructura o explorar el potencial de la IA en tu organización — hablemos.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              aria-label="Reservar una consulta (próximamente)"
              className="inline-flex items-center justify-center px-6 py-3 bg-signal text-white text-sm font-medium rounded-sm hover:opacity-90 transition-opacity duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal"
            >
              Reservar una consulta
            </button>
            <a
              href="mailto:jorge@miranda-ia.net.ar"
              className="inline-flex items-center justify-center px-6 py-3 border border-border text-sm font-medium text-ink rounded-sm hover:border-accent hover:text-accent transition-colors duration-200"
            >
              Enviar un mensaje →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
