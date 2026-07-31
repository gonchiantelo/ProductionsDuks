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
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--t1)', marginBottom: '12px' }}>Selecciona a tu Productor</h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--t2)', lineHeight: 1.7, maxWidth: '700px' }}>
                Aún no tienes un productor asignado. Revisa los perfiles de nuestros expertos y elige al que mejor se adapte a tu estilo y objetivos musicales. Podrás reservar tus mentorías 1 a 1 directamente con él.
              </p>
            </div>
            
            {/* Roster de Productores Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
              
              {/* Productor 1 */}
              <div style={{
                background: 'var(--bg1)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--r3)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ 
                    width: '64px', height: '64px', borderRadius: '50%', 
                    background: 'var(--vocal2)', border: '2px solid var(--vocal3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' 
                  }}>
                    🎧
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--t1)' }}>Gonzalo</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--vocal)', fontWeight: 600 }}>Especialista en Mezcla Vocal</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.7rem', padding: '4px 10px', background: 'var(--bg2)', borderRadius: '100px', color: 'var(--t2)', fontWeight: 600 }}>Reggaeton</span>
                  <span style={{ fontSize: '0.7rem', padding: '4px 10px', background: 'var(--bg2)', borderRadius: '100px', color: 'var(--t2)', fontWeight: 600 }}>Trap</span>
                  <span style={{ fontSize: '0.7rem', padding: '4px 10px', background: 'var(--bg2)', borderRadius: '100px', color: 'var(--t2)', fontWeight: 600 }}>Pop Urbano</span>
                </div>
                
                <p style={{ fontSize: '0.85rem', color: 'var(--t3)', lineHeight: 1.6, flex: 1 }}>
                  "Mi objetivo es que tus voces suenen claras, potentes y al frente. Trabajaremos en ecualización quirúrgica, compresión armónica y texturas."
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: 'auto' }}>
                  <button onClick={() => alert('Abriendo chat/contacto...')} style={{
                    padding: '10px', background: 'transparent', border: '1px solid var(--border)', color: 'var(--t1)',
                    borderRadius: 'var(--r2)', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer', transition: 'border-color 0.2s'
                  }}>
                    Contactar
                  </button>
                  <button style={{
                    padding: '10px', background: 'var(--vocal)', border: 'none', color: '#fff',
                    borderRadius: 'var(--r2)', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer',
                    boxShadow: '0 4px 12px var(--vocal3)'
                  }}>
                    Elegir Productor
                  </button>
                </div>
              </div>

              {/* Productor 2 */}
              <div style={{
                background: 'var(--bg1)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--r3)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ 
                    width: '64px', height: '64px', borderRadius: '50%', 
                    background: 'var(--vocal2)', border: '2px solid var(--vocal3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' 
                  }}>
                    🎹
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--t1)' }}>Pato</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--vocal)', fontWeight: 600 }}>Especialista en Mastering</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.7rem', padding: '4px 10px', background: 'var(--bg2)', borderRadius: '100px', color: 'var(--t2)', fontWeight: 600 }}>EDM</span>
                  <span style={{ fontSize: '0.7rem', padding: '4px 10px', background: 'var(--bg2)', borderRadius: '100px', color: 'var(--t2)', fontWeight: 600 }}>Pop</span>
                  <span style={{ fontSize: '0.7rem', padding: '4px 10px', background: 'var(--bg2)', borderRadius: '100px', color: 'var(--t2)', fontWeight: 600 }}>Hip Hop</span>
                </div>
                
                <p style={{ fontSize: '0.85rem', color: 'var(--t3)', lineHeight: 1.6, flex: 1 }}>
                  "Llevo tu mezcla al estándar comercial. Te ayudo a conseguir el loudness perfecto sin sacrificar la dinámica ni el punch original de tu tema."
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: 'auto' }}>
                  <button onClick={() => alert('Abriendo chat/contacto...')} style={{
                    padding: '10px', background: 'transparent', border: '1px solid var(--border)', color: 'var(--t1)',
                    borderRadius: 'var(--r2)', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer', transition: 'border-color 0.2s'
                  }}>
                    Contactar
                  </button>
                  <button style={{
                    padding: '10px', background: 'var(--vocal)', border: 'none', color: '#fff',
                    borderRadius: 'var(--r2)', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer',
                    boxShadow: '0 4px 12px var(--vocal3)'
                  }}>
                    Elegir Productor
                  </button>
                </div>
              </div>

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
