import Link from 'next/link'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 54px)' }}>
      {/* Banner de Trial */}
      <div style={{
        flexShrink: 0,
        background: 'var(--vocal2)',
        borderBottom: '1px solid var(--vocal3)',
        padding: '10px 24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
        fontSize: '0.8rem',
        color: 'var(--t1)'
      }}>
        <span>🚀 Estás en tu período de prueba de 7 días.</span>
        <Link href="/app/profile" style={{
          color: 'var(--vocal)',
          fontWeight: 700,
          textDecoration: 'underline',
          textUnderlineOffset: '2px'
        }}>
          Mejora tu plan aquí
        </Link>
      </div>

      {/* Main Area */}
      <div style={{ flex: 1, overflow: 'hidden' }}>
        {children}
      </div>
    </div>
  )
}
