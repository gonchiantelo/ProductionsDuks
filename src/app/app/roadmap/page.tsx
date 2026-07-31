import MainContent from '@/app/MainContent'

const modules = [
  { icon: '📖', label: 'Glosario', href: '#panel-glosario' },
  { icon: '🧠', label: 'Mentalidad', href: '#panel-mentalidad' },
  { icon: '🔧', label: 'Diagnóstico', href: '#panel-diagnostico' },
  { icon: '🔗', label: 'Cadena de señal', href: '#panel-cadena' },
  { icon: '🎤', label: 'Canal Vocal', href: '#panel-vocal' },
  { icon: '🎵', label: 'Canal Beat', href: '#panel-beat' },
  { icon: '🎚️', label: 'Canal Master', href: '#panel-master' },
  { icon: '🎸', label: 'Por Género', href: '#panel-generos' },
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
      <main style={{ flex: 1, overflowY: 'auto', padding: '20px 0' }}>
        <MainContent />
      </main>
    </div>
  )
}
