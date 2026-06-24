const proyectos = [
  {
    id: '01',
    tag: 'Automatización',
    title: 'Monitoreo RPA y gestión de incidentes',
    description:
      'Monitoreo de workflows RPA en entorno corporativo (Consensus Group), detección y análisis de incidentes, seguimiento de automatizaciones críticas y escalación técnica con herramientas ITSM.',
    tech: ['RPA', 'n8n', 'ServiceNow', 'GLPI'],
  },
  {
    id: '02',
    tag: 'Ciberseguridad',
    title: 'Infraestructura, seguridad y operaciones IT',
    description:
      'Soporte técnico, gestión de infraestructura y ciberseguridad en entornos corporativos. Certificado en ISO 27001 Lead Auditor, Ethical Hacking y análisis SOC. Experiencia con AWS, Linux y herramientas ITSM.',
    tech: ['ISO 27001', 'Cisco', 'AWS', 'Linux'],
  },
  {
    id: '03',
    tag: 'IA Aplicada',
    title: 'Agentes de IA y automatización con Claude Code y n8n',
    description:
      'Desarrollo de agentes de IA y flujos de automatización con Claude Code y n8n. Construcción de aplicaciones modernas con React.js e integración de LLMs en workflows reales.',
    tech: ['Claude Code', 'n8n', 'React.js', 'Git'],
  },
]

export default function Proyectos() {
  return (
    <section id="proyectos" className="py-14 bg-bg">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-12">
          <p className="eyebrow mb-4">— proyectos</p>
          <h2 className="text-3xl font-semibold text-ink leading-tight">
            Trabajo seleccionado
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {proyectos.map((p) => (
            <article
              key={p.id}
              className="bg-surface border border-border rounded-sm p-6 flex flex-col gap-4 hover:border-accent transition-colors duration-200 group"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-signal font-medium">{p.tag}</span>
                <span className="font-mono text-xs text-border group-hover:text-ink-muted transition-colors duration-200">
                  {p.id}
                </span>
              </div>

              <h3 className="text-base font-semibold text-ink leading-snug group-hover:text-accent transition-colors duration-200">
                {p.title}
              </h3>

              <p className="text-sm text-ink-muted leading-relaxed flex-1">{p.description}</p>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs text-ink-muted bg-bg px-2 py-0.5 rounded-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
