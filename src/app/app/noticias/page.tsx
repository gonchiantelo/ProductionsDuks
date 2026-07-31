'use client'

export default function NoticiasPage() {
  const NEWS_DATA = [
    {
      id: 1,
      title: "Gonzalo acaba de mezclar el nuevo hit de Duki",
      description: "Descubre el proceso detrás de la cadena vocal y cómo logramos que las frecuencias graves no ensucien el beat. Un breakdown completo de los plugins utilizados.",
      badges: ["🔥 NUEVO LANZAMIENTO", "TRAP", "BREAKDOWN"],
      cta: "Ver en Instagram",
      icon: "📱",
      isFeatured: true,
      gradient: "linear-gradient(135deg, rgba(235, 78, 55, 0.4) 0%, rgba(7, 9, 15, 0.9) 100%)"
    },
    {
      id: 2,
      title: "Actualización de la Plantilla de Mastering",
      description: "Hemos subido la versión 2.0 de nuestra plantilla para FL Studio y Ableton. Nuevos macros de saturación incluidos.",
      badges: ["🛠️ RECURSOS", "UPDATE"],
      cta: "Descargar Archivo",
      icon: "⬇️",
      isFeatured: false,
      gradient: "linear-gradient(135deg, rgba(55, 120, 235, 0.3) 0%, rgba(7, 9, 15, 0.9) 100%)"
    },
    {
      id: 3,
      title: "Tips: Compresión Multibanda en Bajos",
      description: "Aprende a domar las resonancias de un 808 sin perder el ataque inicial usando compresión multibanda dinámica.",
      badges: ["💡 TIPS", "MEZCLA"],
      cta: "Leer Artículo",
      icon: "📖",
      isFeatured: false,
      gradient: "linear-gradient(135deg, rgba(80, 200, 120, 0.3) 0%, rgba(7, 9, 15, 0.9) 100%)"
    }
  ]

  return (
    <div style={{ flex: 1, padding: '40px 48px', maxWidth: '1200px', margin: '0 auto', width: '100%', animation: 'fadeIn 0.3s' }}>
      
      {/* ── Header ── */}
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--t1)', marginBottom: '12px' }}>
          Radar de la Comunidad
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'var(--t2)', maxWidth: '650px', lineHeight: 1.6 }}>
          Nuevos lanzamientos, recursos exclusivos, tips rápidos de mezcla y todo lo que pasa en el ecosistema de ProductionsDuks.
        </p>
      </div>

      {/* ── Grid Asimétrica ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px'
      }}>
        {NEWS_DATA.map((news) => (
          <div
            key={news.id}
            style={{
              background: 'var(--bg1)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--r3)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              gridColumn: news.isFeatured ? '1 / -1' : 'span 1',
              position: 'relative',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)'
            }}
          >
            {/* Imagen / Placeholder */}
            <div style={{
              width: '100%',
              minHeight: news.isFeatured ? '300px' : '200px',
              background: news.gradient,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '24px',
              position: 'relative'
            }}>
              {/* Overlay oscuro para legibilidad */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,9,15,1) 0%, rgba(7,9,15,0) 80%)' }} />
              
              <div style={{ position: 'relative', zIndex: 10, display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {news.badges.map(badge => (
                  <span key={badge} style={{
                    padding: '4px 10px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)',
                    border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px',
                    fontSize: '0.65rem', fontWeight: 800, color: 'var(--t1)', letterSpacing: '0.05em'
                  }}>
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Contenido */}
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1, background: 'var(--bg1)' }}>
              <h2 style={{ fontSize: news.isFeatured ? '1.8rem' : '1.3rem', fontWeight: 900, color: 'var(--t1)', marginBottom: '12px', lineHeight: 1.2 }}>
                {news.title}
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--t2)', lineHeight: 1.6, marginBottom: '24px', flex: 1 }}>
                {news.description}
              </p>

              <button style={{
                alignSelf: 'flex-start',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 16px',
                background: 'transparent',
                border: '1px solid var(--border)',
                borderRadius: 'var(--r2)',
                color: 'var(--t1)',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg2)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <span>{news.icon}</span> {news.cta}
              </button>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (min-width: 900px) {
          /* En pantallas grandes, forzar que la primera tarjeta ocupe 2 columnas si es featured */
          div[style*="grid-column: 1 / -1"] {
            grid-column: 1 / -1 !important;
          }
        }
      `}</style>
    </div>
  )
}
