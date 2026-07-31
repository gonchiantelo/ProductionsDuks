import Link from 'next/link'

export default function LandingPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 54px)', alignItems: 'center', backgroundColor: 'var(--bg0)' }}>
      {/* Hero Section */}
      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '80px 20px', maxWidth: '900px', width: '100%' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--t1)', lineHeight: 1.1, marginBottom: '24px' }}>
          Aprende a mezclar voces <br />
          <span style={{ color: 'var(--vocal)' }}>como un profesional</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--t2)', maxWidth: '650px', marginBottom: '48px', lineHeight: 1.6 }}>
          Domina la ecualización, compresión, afinación y todos los secretos de la mezcla vocal con nuestro manual interactivo paso a paso.
        </p>

        {/* Video Placeholder */}
        <div style={{ 
          width: '100%', 
          maxWidth: '800px', 
          aspectRatio: '16/9', 
          backgroundColor: 'var(--bg1)', 
          border: '1px solid var(--border)', 
          borderRadius: 'var(--r3)', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          marginBottom: '48px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
        }}>
          <span style={{ fontSize: '4rem', marginBottom: '10px' }}>▶️</span>
          <p style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--t2)' }}>Teaser / Video de Presentación</p>
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/register" style={{
            padding: '16px 32px',
            backgroundColor: 'var(--vocal)',
            color: '#fff',
            fontSize: '1.1rem',
            fontWeight: 800,
            borderRadius: 'var(--r2)',
            textDecoration: 'none',
            boxShadow: '0 10px 20px var(--vocal3)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}>
            Comenzar prueba de 7 días
          </Link>
          <Link href="/login" style={{
            padding: '16px 32px',
            backgroundColor: 'transparent',
            border: '2px solid var(--border)',
            color: 'var(--t1)',
            fontSize: '1.1rem',
            fontWeight: 700,
            borderRadius: 'var(--r2)',
            textDecoration: 'none',
            transition: 'background-color 0.2s, border-color 0.2s'
          }}>
            Iniciar Sesión
          </Link>
        </div>
      </section>
    </div>
  )
}
