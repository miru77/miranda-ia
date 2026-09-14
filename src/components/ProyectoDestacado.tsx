/**
 * El proyecto estrella, justo debajo del Hero: es lo primero que se ve al bajar.
 *
 * La captura anotada es la misma del calendario de psiconsultorio.com.ar, con
 * sus coordenadas. Flechas, textos y captura comparten el sistema de
 * coordenadas del lienzo (el SVG usa su `viewBox` y todo lo demás va en
 * porcentajes), así que se escalan juntos y cada punta sigue cayendo sobre el
 * turno que señala. El cuerpo del texto va en `cqw` por la misma razón.
 *
 * Debajo de `lg` no hay lienzo: dentro de la imagen las notas quedarían
 * ilegibles, así que van como lista debajo de la captura.
 */

type Nota = {
  texto: string
  color: string
  x: number
  y: number
  ancho: number
  alinea: 'left' | 'right'
  desde: readonly [number, number]
  hasta: readonly [number, number]
}

const LIENZO = [1085, 480] as const
const CAPTURA = { x: 325, y: 0, ancho: 415, alto: 480 }

const NOTAS: readonly Nota[] = [
  {
    texto: 'Cancelado, pero lo cobraste. Sigue contando.',
    color: '#2b7146',
    x: 0,
    y: 112,
    ancho: 280,
    alinea: 'right',
    desde: [295, 140],
    hasta: [473, 162],
  },
  {
    texto: 'Rojo: te debe esa sesión.',
    color: '#a32a21',
    x: 785,
    y: 230,
    ancho: 300,
    alinea: 'left',
    desde: [770, 250],
    hasta: [602, 259],
  },
  {
    texto: 'Cancelado sin cargo. Se apaga y no reclama nada.',
    color: '#6b695f',
    x: 0,
    y: 338,
    ancho: 280,
    alinea: 'right',
    desde: [295, 366],
    hasta: [473, 302],
  },
]

const TECH = ['Next.js', 'Supabase', 'Row Level Security', 'Cloudflare', 'Claude Code']

const pctX = (v: number) => `${(v / LIENZO[0]) * 100}%`
const pctY = (v: number) => `${(v / LIENZO[1]) * 100}%`

function CalendarioAnotado() {
  const alt = 'El calendario semanal de psiconsultorio: cada turno con el color de su estado de pago'

  return (
    <>
      {/* Hasta lg: la captura, y debajo las notas como lista. */}
      <div className="flex flex-col gap-5 lg:hidden">
        <img
          src="/calendario.png"
          alt={alt}
          width={CAPTURA.ancho}
          height={CAPTURA.alto}
          className="mx-auto w-full max-w-sm h-auto rounded-sm border border-border shadow-lg"
        />
        <ul className="flex flex-col gap-2">
          {NOTAS.map((nota) => (
            <li key={nota.texto} className="text-sm leading-relaxed" style={{ color: nota.color }}>
              {nota.texto}
            </li>
          ))}
        </ul>
      </div>

      {/* De lg en adelante: el lienzo con las flechas. */}
      <div
        className="relative mx-auto hidden w-full lg:block"
        style={{
          maxWidth: LIENZO[0],
          aspectRatio: `${LIENZO[0]} / ${LIENZO[1]}`,
          containerType: 'inline-size',
        }}
      >
        <img
          src="/calendario.png"
          alt={alt}
          width={CAPTURA.ancho}
          height={CAPTURA.alto}
          className="absolute h-auto rounded-sm border border-border shadow-xl"
          style={{ left: pctX(CAPTURA.x), top: pctY(CAPTURA.y), width: pctX(CAPTURA.ancho) }}
        />

        <svg
          viewBox={`0 0 ${LIENZO[0]} ${LIENZO[1]}`}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
        >
          <defs>
            {NOTAS.map((nota, i) => (
              <marker
                key={nota.texto}
                id={`calendario-punta-${i}`}
                viewBox="0 0 10 10"
                refX="9"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={nota.color} />
              </marker>
            ))}
          </defs>
          {NOTAS.map((nota, i) => (
            <line
              key={nota.texto}
              x1={nota.desde[0]}
              y1={nota.desde[1]}
              x2={nota.hasta[0]}
              y2={nota.hasta[1]}
              stroke={nota.color}
              strokeWidth="1.5"
              strokeLinecap="round"
              markerEnd={`url(#calendario-punta-${i})`}
            />
          ))}
        </svg>

        {NOTAS.map((nota) => (
          <p
            key={nota.texto}
            className="absolute m-0 leading-snug"
            style={{
              left: pctX(nota.x),
              top: pctY(nota.y),
              width: pctX(nota.ancho),
              textAlign: nota.alinea,
              color: nota.color,
              fontSize: `${(20 / LIENZO[0]) * 100}cqw`,
            }}
          >
            {nota.texto}
          </p>
        ))}
      </div>
    </>
  )
}

export default function ProyectoDestacado() {
  return (
    <section id="destacado" className="py-14 bg-surface border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-10">
          <p className="eyebrow mb-4">— proyecto destacado</p>
          <h2 className="text-3xl font-semibold text-ink leading-tight mb-4">psiconsultorio</h2>
          <p className="text-base text-ink-muted leading-relaxed mb-6">
            La app para psicólogos donde el paciente también entra. Turnos, pagos, historia clínica y
            portal del paciente, en producción con un consultorio real. La diseñé, la construí y la
            mantengo yo.
          </p>

          <div className="flex flex-wrap gap-1.5 mb-8">
            {TECH.map((t) => (
              <span key={t} className="font-mono text-xs text-ink-muted bg-bg px-2 py-0.5 rounded-sm">
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://psiconsultorio.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white text-sm font-medium rounded-sm hover:bg-accent-dark transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            >
              Ver psiconsultorio.com.ar ↗
            </a>
          </div>
        </div>

        <CalendarioAnotado />
      </div>
    </section>
  )
}
