export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">

        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-medium text-accent">
            MIRANDA<span className="text-signal">.IA</span>
          </span>
          <span className="text-border" aria-hidden>|</span>
          <span className="font-mono text-xs text-ink-muted">miranda-ia.net.ar</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="font-mono text-xs text-ink-muted">
            San Miguel de Tucumán, Argentina
          </span>
          <span className="font-mono text-xs text-ink-muted">© 2026</span>
        </div>

      </div>
    </footer>
  )
}
