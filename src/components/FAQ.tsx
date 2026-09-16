// EVERY ANSWER HERE WAS CONFIRMED BY JORGE OR TAKEN FROM THE PAGE ITSELF
// (2026-09-16). That is not a nicety: these are commercial commitments a
// prospect will hold him to, so nothing in this file may be written from
// inference. What came from him directly: the two "lo presupuestamos" answers,
// remote-only, under 12 hours, ARCA, and taking both solo projects and existing
// teams. What came from the page: the psiconsultorio feature list (the flagship
// section) and the certifications (the "sobre mí" section).
//
// TWO QUESTIONS WERE DELIBERATELY LEFT OUT. A maintenance question, because the
// page says he maintains psiconsultorio and NOT that he sells maintenance as a
// service, and he never confirmed the wider claim. And "what kind of projects do
// you take", because the "áreas de trabajo" grid right above already answers it.
//
// NO FAQPage JSON-LD, ON PURPOSE. Google stopped showing FAQ rich results on
// 2026-05-07, so the markup earns nothing and would only be one more thing to
// keep in sync with the copy. This FAQ exists to turn a reader into a WhatsApp
// message, not to win a search result.
const faqs = [
  {
    q: '¿Podés hacer una app como psiconsultorio para otra profesión?',
    a: 'Sí. psiconsultorio resuelve turnos, pagos, historia clínica y un portal donde el paciente entra a ver lo suyo. Esa misma estructura sirve para cualquier profesional que atienda personas con seguimiento. Contame qué necesitás y lo presupuestamos.',
  },
  {
    q: '¿Tomás trabajos chicos o solo proyectos completos?',
    a: 'Las dos cosas. Desde una automatización suelta hasta una aplicación completa en producción. Contame qué necesitás y lo presupuestamos.',
  },
  {
    q: '¿Trabajás solo o te sumás a un equipo que ya existe?',
    a: 'Las dos. Puedo llevar un proyecto de punta a punta o integrarme a un equipo que ya está andando.',
  },
  {
    q: '¿Cómo manejás la seguridad?',
    a: 'Security-by-design, no como un parche al final. Certificado en ISO 27001 Lead Auditor, AWS Cloud Practitioner y Ethical Hacking, con más de diez años en operaciones e infraestructura en entornos corporativos y de gobierno.',
  },
  {
    q: '¿Trabajás remoto o presencial?',
    a: 'Remoto.',
  },
  {
    q: '¿En cuánto respondés?',
    a: 'Menos de 12 horas.',
  },
  {
    q: '¿Facturás?',
    a: 'Sí. Estoy inscripto en ARCA como servicios de informática.',
  },
]

export default function FAQ() {
  return (
    // `border-b` SEPARATES THIS FROM CONTACTO, which is also `bg-surface`.
    // The top edge needs nothing: Proyectos above is `bg-bg`, so the colour
    // already changes there.
    <section id="faq" className="py-14 bg-surface border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <p className="eyebrow mb-4">— preguntas</p>
        <h2 className="text-3xl font-semibold text-ink leading-tight mb-8">
          Antes de escribirme
        </h2>

        <div className="max-w-3xl border-t border-border">
          {faqs.map(({ q, a }) => (
            // NATIVE `<details>`, NO JAVASCRIPT. It folds on its own, the
            // summary is focusable and toggles with Enter or Space, and a
            // screen reader announces it as expandable — three things a
            // hand-rolled accordion would each have to earn. Closed by default,
            // so the list reads as a list of questions rather than a wall.
            <details key={q} className="group border-b border-border">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-base font-medium text-ink transition-colors duration-200 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent [&::-webkit-details-marker]:hidden">
                {q}
                <span
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 font-mono text-lg leading-none text-ink-muted transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-5 pr-8 text-base text-ink-muted leading-relaxed">
                {a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
