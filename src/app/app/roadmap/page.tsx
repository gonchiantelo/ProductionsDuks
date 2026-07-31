import Link from 'next/link'

const modules = [
  { icon: '🎯', label: 'Introducción', href: '#intro' },
  { icon: '🎚️', label: 'Etapa 1: Fundamentos', href: '#fundamentos' },
  { icon: '🎤', label: 'Etapa 2: Mezcla Vocal', href: '#mezcla' },
  { icon: '🔊', label: 'Etapa 3: Mastering', href: '#mastering' },
  { icon: '💼', label: 'Negocio & Producción', href: '#negocio' },
  { icon: '🛠️', label: 'Herramientas y Plugins', href: '#herramientas' },
]

export default function RoadmapPage() {
  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 54px)' }}>

      {/* ── Sidebar ── */}
      <aside style={{
        width: '240px', flexShrink: 0,
        position: 'sticky', top: '54px', alignSelf: 'flex-start',
        height: 'calc(100vh - 54px)', overflowY: 'auto',
        borderRight: '1px solid var(--border)',
        background: 'var(--bg1)',
        padding: '24px 0'
      }}>
        <div style={{ padding: '0 16px 12px', borderBottom: '1px solid var(--border)', marginBottom: '8px' }}>
          <p style={{ fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--t4)' }}>Roadmap</p>
        </div>
        <nav>
          {modules.map((m, i) => (
            <a key={i} href={m.href} style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '9px 16px',
              fontSize: '0.8rem', fontWeight: 500, color: 'var(--t2)',
              textDecoration: 'none', borderLeft: '3px solid transparent',
              transition: 'all 0.18s'
            }}>
              <span style={{ fontSize: '0.9rem', width: '20px', textAlign: 'center' }}>{m.icon}</span>
              {m.label}
            </a>
          ))}
        </nav>

        <div style={{ margin: '20px 16px 0', padding: '14px', background: 'var(--vocal2)', border: '1px solid var(--vocal3)', borderRadius: 'var(--r2)' }}>
          <p style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--vocal)', marginBottom: '4px' }}>✨ Período de Prueba</p>
          <p style={{ fontSize: '0.7rem', color: 'var(--t2)' }}>7 días de acceso total gratuito.</p>
        </div>
      </aside>

      {/* ── Main Content ── */}
      <main style={{ flex: 1, overflowY: 'auto', padding: '40px 48px', maxWidth: '860px' }}>

        {/* Header */}
        <div id="intro" style={{ marginBottom: '40px' }}>
          <span style={{
            display: 'inline-block', padding: '4px 12px',
            background: 'var(--vocal2)', border: '1px solid var(--vocal3)',
            borderRadius: '100px', fontSize: '0.7rem', fontWeight: 700,
            color: 'var(--vocal)', marginBottom: '14px'
          }}>
            🗺️ Tu Hoja de Ruta
          </span>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--t1)', lineHeight: 1.2, marginBottom: '12px' }}>
            Manual de Mezcla Vocal
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--t2)', lineHeight: 1.7, maxWidth: '620px' }}>
            Una guía paso a paso para que domines la mezcla de voces de forma profesional.
            Seguí el orden del roadmap o saltá directo a la sección que necesites.
          </p>
        </div>

        {/* ─── Clase de Ejemplo ─── */}
        <section id="mezcla" style={{
          background: 'var(--bg1)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--r3)',
          overflow: 'hidden',
          marginBottom: '32px'
        }}>
          {/* Cabecera de sección */}
          <div style={{
            padding: '20px 28px',
            borderBottom: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', gap: '12px'
          }}>
            <span style={{
              width: '36px', height: '36px', borderRadius: 'var(--r)',
              background: 'var(--vocal2)', display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0
            }}>🎤</span>
            <div>
              <p style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--vocal)', marginBottom: '2px' }}>Etapa 2 · Mezcla Vocal</p>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--t1)' }}>Ecualización Sustractiva en Voces</h2>
            </div>
          </div>

          <div style={{ padding: '28px' }}>

            {/* Contenedor de Video */}
            <div style={{
              width: '100%', aspectRatio: '16/9',
              background: 'var(--bg0)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--r2)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: '10px', marginBottom: '28px',
              color: 'var(--t3)'
            }}>
              <span style={{ fontSize: '2.5rem' }}>▶️</span>
              <p style={{ fontSize: '0.85rem', fontWeight: 600 }}>Video de la clase</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--t4)' }}>El productor subirá el video desde el panel de administración.</p>
            </div>

            {/* Contenido del manual */}
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--t1)', marginBottom: '10px' }}>¿Qué es la ecualización sustractiva?</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--t2)', lineHeight: 1.75, marginBottom: '16px' }}>
              La ecualización sustractiva consiste en quitar frecuencias problemáticas antes de agregar cualquier cosa. 
              Este método mantiene el espacio de mezcla limpio y permite que cada instrumento ocupe su rango sin competir con las voces.
            </p>

            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--t1)', marginBottom: '10px' }}>Pasos de trabajo</h3>
            <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                'Usa un analizador de espectro para identificar resonancias de la voz entre 200–400 Hz.',
                'Aplica un filtro de corte alto (High Pass) para eliminar los subgraves por debajo de 80 Hz.',
                'Busca la frecuencia problemática con un boost temporal de +10 dB y luego córtala entre -4 y -8 dB.',
                'Escucha siempre en contexto de la mezcla completa, no en solo.'
              ].map((step, i) => (
                <li key={i} style={{ fontSize: '0.88rem', color: 'var(--t2)', lineHeight: 1.65 }}>
                  {step}
                </li>
              ))}
            </ol>

            {/* Tip */}
            <div style={{ marginTop: '24px', padding: '14px 18px', background: 'var(--beat2)', border: '1px solid var(--beat3)', borderRadius: 'var(--r2)', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>💡</span>
              <p style={{ fontSize: '0.82rem', color: 'var(--t2)', lineHeight: 1.65 }}>
                <strong style={{ color: 'var(--t1)' }}>Consejo PRO:</strong> Siempre comparar el procesamiento con bypass activo. Si el bypass suena mejor, estás cortando demasiado.
              </p>
            </div>
          </div>
        </section>

        {/* Cards de próximas etapas */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
          {[
            { emoji: '🎯', stage: 'Fundamentos', title: 'Ganancia y Headroom', color: 'var(--mast)' },
            { emoji: '🔊', stage: 'Mastering', title: 'Limitación y Loudness', color: 'var(--beat)' },
            { emoji: '🛠️', stage: 'Herramientas', title: 'Plugins Gratuitos Esenciales', color: 'var(--reg)' },
          ].map((card, i) => (
            <div key={i} style={{
              background: 'var(--bg1)', border: '1px solid var(--border)',
              borderRadius: 'var(--r2)', padding: '20px',
              display: 'flex', flexDirection: 'column', gap: '8px'
            }}>
              <span style={{ fontSize: '1.5rem' }}>{card.emoji}</span>
              <p style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: card.color }}>{card.stage}</p>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--t1)' }}>{card.title}</h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--t3)', marginTop: 'auto', paddingTop: '8px' }}>Próximamente…</p>
            </div>
          ))}
        </div>

      </main>
    </div>
  )
}
