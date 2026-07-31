'use client'

import { useState } from 'react'

export default function ClasesPage() {
  const [activeTab, setActiveTab] = useState<'grabadas' | 'particulares'>('grabadas')

  return (
    <div style={{ flex: 1, padding: '40px 48px', maxWidth: '1040px', margin: '0 auto', width: '100%' }}>
      {/* ── Header ── */}
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--t1)', marginBottom: '12px' }}>
          Centro de Entrenamiento
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'var(--t2)', maxWidth: '650px', lineHeight: 1.6 }}>
          Accede a nuestras masterclasses grabadas o reserva una sesión 1 a 1 en vivo con nuestros productores para llevar tus mezclas al siguiente nivel.
        </p>
      </div>

      {/* ── Tabs ── */}
      <div style={{ 
        display: 'flex', gap: '12px', marginBottom: '32px', 
        borderBottom: '1px solid var(--border)', paddingBottom: '16px' 
      }}>
        <button
          onClick={() => setActiveTab('grabadas')}
          style={{
            padding: '10px 24px',
            background: activeTab === 'grabadas' ? 'var(--vocal)' : 'transparent',
            color: activeTab === 'grabadas' ? '#fff' : 'var(--t2)',
            border: 'none',
            borderRadius: 'var(--r2)',
            fontSize: '0.9rem',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
        >
          🎬 Clases Grabadas
        </button>
        <button
          onClick={() => setActiveTab('particulares')}
          style={{
            padding: '10px 24px',
            background: activeTab === 'particulares' ? 'var(--vocal)' : 'transparent',
            color: activeTab === 'particulares' ? '#fff' : 'var(--t2)',
            border: 'none',
            borderRadius: 'var(--r2)',
            fontSize: '0.9rem',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
        >
          🤝 Clases Particulares
        </button>
      </div>

      {/* ── Tab Content ── */}
      <div>
        {activeTab === 'grabadas' ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
            
            {/* Clase Desbloqueada (Demo) */}
            <div style={{
              background: 'var(--bg1)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--r3)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ width: '100%', aspectRatio: '16/9', background: 'var(--bg2)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--border)' }}>
                <span style={{ fontSize: '3rem' }}>▶️</span>
              </div>
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--vocal)', letterSpacing: '0.1em', marginBottom: '8px' }}>Etapa 1 • Fundamentos</span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--t1)', marginBottom: '12px' }}>Gain Staging Perfecto</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--t2)', lineHeight: 1.6, marginBottom: '24px' }}>
                  Aprende el secreto número uno para mezclas limpias. Cómo preparar tus canales antes de usar el primer plugin.
                </p>
                <button style={{
                  marginTop: 'auto',
                  padding: '10px',
                  background: 'var(--bg2)',
                  border: '1px solid var(--border)',
                  color: 'var(--t1)',
                  borderRadius: 'var(--r)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}>
                  Ver Clase
                </button>
              </div>
            </div>

            {/* Clase Bloqueada 1 */}
            <div style={{
              background: 'var(--bg1)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--r3)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative'
            }}>
              {/* Overlay Bloqueo */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'rgba(7, 9, 15, 0.85)',
                backdropFilter: 'blur(4px)',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                padding: '24px', textAlign: 'center',
                zIndex: 10
              }}>
                <span style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🔒</span>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--t1)', marginBottom: '8px' }}>Contenido Exclusivo</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--t3)', marginBottom: '20px' }}>Esta clase requiere suscripción activa.</p>
                <button style={{
                  padding: '12px 20px',
                  background: 'var(--vocal)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 'var(--r2)',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  width: '100%',
                  boxShadow: '0 8px 16px var(--vocal3)'
                }}>
                  Desbloquear total - USD 10/mes
                </button>
              </div>

              <div style={{ width: '100%', aspectRatio: '16/9', background: 'var(--bg2)', borderBottom: '1px solid var(--border)' }} />
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1, filter: 'grayscale(1)' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--t4)', letterSpacing: '0.1em', marginBottom: '8px' }}>Etapa 2 • Mezcla</span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--t2)', marginBottom: '12px' }}>Compresión Vocal Avanzada</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--t3)', lineHeight: 1.6 }}>
                  Uso de ataque y release, compresión en serie y compresión paralela para voces líderes.
                </p>
              </div>
            </div>

            {/* Clase Bloqueada 2 */}
            <div style={{
              background: 'var(--bg1)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--r3)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative'
            }}>
              {/* Overlay Bloqueo */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'rgba(7, 9, 15, 0.85)',
                backdropFilter: 'blur(4px)',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                padding: '24px', textAlign: 'center',
                zIndex: 10
              }}>
                <span style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🔒</span>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--t1)', marginBottom: '8px' }}>Contenido Exclusivo</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--t3)', marginBottom: '20px' }}>Esta clase requiere suscripción activa.</p>
                <button style={{
                  padding: '12px 20px',
                  background: 'var(--vocal)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 'var(--r2)',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  width: '100%',
                  boxShadow: '0 8px 16px var(--vocal3)'
                }}>
                  Desbloquear total - USD 10/mes
                </button>
              </div>

              <div style={{ width: '100%', aspectRatio: '16/9', background: 'var(--bg2)', borderBottom: '1px solid var(--border)' }} />
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1, filter: 'grayscale(1)' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--t4)', letterSpacing: '0.1em', marginBottom: '8px' }}>Etapa 3 • Mastering</span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--t2)', marginBottom: '12px' }}>Limitación y Loudness</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--t3)', lineHeight: 1.6 }}>
                  Cómo alcanzar niveles comerciales de volumen (-8 a -10 LUFS) sin destruir la dinámica del beat.
                </p>
              </div>
            </div>

          </div>
        ) : (
          <div style={{ animation: 'fadeIn 0.3s' }}>
            <div style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--t1)', marginBottom: '12px' }}>Mentoria 1 a 1</h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--t2)', lineHeight: 1.7, maxWidth: '700px' }}>
                Resuelve tus dudas en vivo con nuestros productores. Revisaremos tu proyecto directamente de tu DAW (Ableton, FL Studio, Logic Pro), analizaremos tu cadena de señal y te diremos exactamente qué falta para que suene profesional.
              </p>
            </div>
            
            {/* Placeholder Calendario */}
            <div style={{
              width: '100%',
              minHeight: '400px',
              border: '2px dashed var(--border)',
              borderRadius: 'var(--r3)',
              background: 'rgba(255, 255, 255, 0.02)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px'
            }}>
              <span style={{ fontSize: '3rem' }}>📅</span>
              <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--t2)' }}>
                Widget de Calendario (Próximamente)
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--t4)' }}>
                Aquí se integrará el embed de Cal.com
              </p>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
