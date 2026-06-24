const areas = [
  { label: 'Automatización & RPA', detail: 'n8n · monitoring · workflows' },
  { label: 'Ciberseguridad', detail: 'ISO 27001 · SOC · Ethical Hacking' },
  { label: 'IA Aplicada', detail: 'Claude Code · LLMs · agentes' },
  { label: 'Cloud & Infra', detail: 'AWS · GWorkspace · M365 · Linux' },
  { label: 'Desarrollo', detail: 'React.js · JavaScript · Git' },
  { label: 'Operaciones IT', detail: 'ServiceNow · GLPI · Jira' },
]

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="py-14 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Columna izquierda */}
          <div className="lg:col-span-4">
            <p className="eyebrow mb-4">— sobre mí</p>
            <h2 className="text-3xl font-semibold text-ink leading-tight">
              De la infraestructura<br />al futuro inteligente
            </h2>

            <div className="mt-10 pt-8 border-t border-border space-y-4">
              <div>
                <p className="font-mono text-xs text-ink-muted mb-1">formación</p>
                <p className="text-sm font-semibold text-ink">
                  Programador Universitario
                </p>
                <p className="font-mono text-xs text-ink-muted mt-0.5">UNT — San Miguel de Tucumán</p>
              </div>

              <div>
                <p className="font-mono text-xs text-ink-muted mb-1">trayectoria</p>
                <p className="text-sm font-semibold text-ink">10+ años en IT y operaciones</p>
                <p className="font-mono text-xs text-ink-muted mt-0.5">sector público · privado</p>
              </div>

              <div>
                <p className="font-mono text-xs text-ink-muted mb-1">certificaciones</p>
                <p className="text-sm font-semibold text-ink">AWS · ISO 27001 · GAIPC™</p>
                <p className="font-mono text-xs text-ink-muted mt-0.5">Cisco · Ethical Hacking · SOC</p>
              </div>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-4 text-base text-ink-muted leading-relaxed">
              <p>
                Profesional IT con experiencia en soporte, operaciones e infraestructura en entornos corporativos y de gobierno. Hoy me especializo en monitoreo de automatizaciones RPA, AI Automation y desarrollo de software con IA.
              </p>
              <p>
                Combino operaciones, troubleshooting y ciberseguridad con desarrollo frontend y construcción de agentes de IA usando Claude Code y n8n. Certificado en ISO 27001 Lead Auditor, AWS Cloud Practitioner y Ethical Hacking.
              </p>
              <p>
                Trabajo en el cruce entre la infraestructura sólida y las herramientas modernas de IA — para que los procesos sean más inteligentes, seguros y automatizados.
              </p>
            </div>

            <div>
              <p className="eyebrow mb-4">áreas de trabajo</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {areas.map(({ label, detail }) => (
                  <div
                    key={label}
                    className="border border-border rounded-sm p-3 hover:border-accent transition-colors duration-200 group"
                  >
                    <p className="text-sm font-medium text-ink group-hover:text-accent transition-colors duration-200">
                      {label}
                    </p>
                    <p className="font-mono text-xs text-ink-muted mt-0.5">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
