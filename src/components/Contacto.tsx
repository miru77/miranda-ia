import { WHATSAPP_URL } from '@/lib/whatsapp'

export default function Contacto() {
  return (
    <section id="contacto" className="py-10 bg-surface grid-bg">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="max-w-xl">
          <p className="eyebrow mb-3">— contacto</p>
          <h2 className="text-3xl font-semibold text-ink leading-tight mb-3">
            ¿Tenés un proyecto en mente?
          </h2>
          <p className="text-base text-ink-muted leading-relaxed">
            Ya sea automatizar un proceso, mejorar la seguridad de tu infraestructura o explorar el potencial de la IA en tu organización — hablemos.
          </p>
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 self-start md:self-center inline-flex items-center justify-center px-6 py-3 bg-signal text-white text-sm font-medium rounded-sm hover:opacity-90 transition-opacity duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal"
        >
          Escribime por WhatsApp
        </a>
      </div>
    </section>
  )
}
