'use client'

import { useState } from 'react'

const PRODUCERS = [
  { id: 'gonzalo', name: 'Gonzalo', role: 'Especialista en Mezcla Vocal', icon: '🎧', genres: ['Reggaeton', 'Trap', 'Pop Urbano'], quote: '"Mi objetivo es que tus voces suenen claras, potentes y al frente. Trabajaremos en ecualización quirúrgica, compresión armónica y texturas."' },
  { id: 'pato', name: 'Pato', role: 'Especialista en Mastering', icon: '🎹', genres: ['EDM', 'Pop', 'Hip Hop'], quote: '"Llevo tu mezcla al estándar comercial. Te ayudo a conseguir el loudness perfecto sin sacrificar la dinámica ni el punch original de tu tema."' }
]

export default function ClasesPage() {
  const [activeTab, setActiveTab] = useState<'grabadas' | 'particulares'>('grabadas')
  const [requestStatus, setRequestStatus] = useState<'idle' | 'pending' | 'approved'>('idle')
  const [isMatched, setIsMatched] = useState(false)
  const [selectedProducer, setSelectedProducer] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSelectProducer = (id: string) => {
    setSelectedProducer(id)
    setIsModalOpen(true)
  }

  const handleSubmitRequest = () => {
    setIsModalOpen(false)
    setRequestStatus('pending')
  }

  // Obtenemos el productor asignado si está en estado matched (por defecto el primero o el que se haya seleccionado si venimos de pending)
  const assignedProducer = PRODUCERS.find(p => p.id === selectedProducer) || PRODUCERS[0]

  return (
    <div style={{ flex: 1, padding: '40px 48px', maxWidth: '1040px', margin: '0 auto', width: '100%', position: 'relative' }}>
      
      {/* ── Test Buttons (Hidden/Discreet) ── */}
      <div style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', gap: '8px', opacity: 0.1 }}>
        <button 
          onClick={() => setRequestStatus(prev => prev === 'approved' ? 'idle' : 'approved')}
          style={{ fontSize: '0.6rem', cursor: 'pointer' }}
        >
          Toggle Paywall Test
        </button>
        <button 
          onClick={() => setIsMatched(!isMatched)}
          style={{ fontSize: '0.6rem', cursor: 'pointer' }}
        >
          Toggle Matched Test
        </button>
      </div>

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
              <div style={{
                position: 'absolute', inset: 0, background: 'rgba(7, 9, 15, 0.85)', backdropFilter: 'blur(4px)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                padding: '24px', textAlign: 'center', zIndex: 10
              }}>
                <span style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🔒</span>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--t1)', marginBottom: '8px' }}>Contenido Exclusivo</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--t3)', marginBottom: '20px' }}>Esta clase requiere suscripción activa.</p>
                <button style={{
                  padding: '12px 20px', background: 'var(--vocal)', color: '#fff', border: 'none',
                  borderRadius: 'var(--r2)', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', width: '100%',
                  boxShadow: '0 8px 16px var(--vocal3)'
                }}>Desbloquear total - USD 10/mes</button>
              </div>
              <div style={{ width: '100%', aspectRatio: '16/9', background: 'var(--bg2)', borderBottom: '1px solid var(--border)' }} />
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1, filter: 'grayscale(1)' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--t4)', letterSpacing: '0.1em', marginBottom: '8px' }}>Etapa 2 • Mezcla</span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--t2)', marginBottom: '12px' }}>Compresión Vocal Avanzada</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--t3)', lineHeight: 1.6 }}>Uso de ataque y release, compresión en serie y compresión paralela para voces líderes.</p>
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
              <div style={{
                position: 'absolute', inset: 0, background: 'rgba(7, 9, 15, 0.85)', backdropFilter: 'blur(4px)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                padding: '24px', textAlign: 'center', zIndex: 10
              }}>
                <span style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🔒</span>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--t1)', marginBottom: '8px' }}>Contenido Exclusivo</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--t3)', marginBottom: '20px' }}>Esta clase requiere suscripción activa.</p>
                <button style={{
                  padding: '12px 20px', background: 'var(--vocal)', color: '#fff', border: 'none',
                  borderRadius: 'var(--r2)', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', width: '100%',
                  boxShadow: '0 8px 16px var(--vocal3)'
                }}>Desbloquear total - USD 10/mes</button>
              </div>
              <div style={{ width: '100%', aspectRatio: '16/9', background: 'var(--bg2)', borderBottom: '1px solid var(--border)' }} />
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1, filter: 'grayscale(1)' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--t4)', letterSpacing: '0.1em', marginBottom: '8px' }}>Etapa 3 • Mastering</span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--t2)', marginBottom: '12px' }}>Limitación y Loudness</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--t3)', lineHeight: 1.6 }}>Cómo alcanzar niveles comerciales de volumen (-8 a -10 LUFS) sin destruir la dinámica del beat.</p>
              </div>
            </div>

          </div>
        ) : requestStatus === 'approved' ? (
          <div style={{ animation: 'fadeIn 0.3s', position: 'relative' }}>
             <div style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--t1)', marginBottom: '12px' }}>Reserva tu Mentoría</h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--t2)', lineHeight: 1.7, maxWidth: '700px' }}>
                Tu solicitud ha sido aprobada. Desbloquea el calendario para reservar tu primera sesión 1 a 1.
              </p>
            </div>
            {/* Paywall Calendario */}
            <div style={{
              width: '100%', minHeight: '400px', border: '1px solid var(--border)', borderRadius: 'var(--r3)',
              background: 'var(--bg1)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              position: 'relative', overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute', inset: 0, background: 'rgba(7, 9, 15, 0.85)', backdropFilter: 'blur(8px)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                padding: '24px', textAlign: 'center', zIndex: 10
              }}>
                <span style={{ fontSize: '3rem', marginBottom: '16px' }}>🔒</span>
                <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--t1)', marginBottom: '12px' }}>Desbloquea el Calendario</h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--t3)', marginBottom: '24px', maxWidth: '400px', lineHeight: 1.5 }}>
                  Suscríbete para elegir el día y horario de tu mentoría. Cancelable en cualquier momento.
                </p>
                <button style={{
                  padding: '14px 28px', background: 'var(--vocal)', color: '#fff', border: 'none',
                  borderRadius: 'var(--r2)', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer',
                  boxShadow: '0 8px 16px var(--vocal3)'
                }}>Desbloquear acceso total - USD 10/mes</button>
              </div>
              {/* Background Mock Calendario */}
              <div style={{ width: '100%', height: '100%', background: 'var(--bg2)', display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '1px', opacity: 0.2 }}>
                <div style={{ background: 'var(--bg1)' }}></div>
                <div style={{ background: 'var(--bg1)' }}></div>
              </div>
            </div>
          </div>
        ) : isMatched ? (
          <div style={{ animation: 'fadeIn 0.3s' }}>
            <div style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--t1)', marginBottom: '12px' }}>Tu Productor Asignado</h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--t2)', lineHeight: 1.7, maxWidth: '700px' }}>
                ¡Ya tienes un mentor exclusivo! Coordina directamente con él para resolver tus dudas y agendar las revisiones de tus proyectos.
              </p>
            </div>
            
            <div style={{
              background: 'var(--bg1)',
              border: '2px solid var(--border)',
              borderRadius: 'var(--r3)',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              maxWidth: '600px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Glow background sutil */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--vocal)', opacity: 0.8 }} />

              <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                <div style={{ 
                  width: '80px', height: '80px', borderRadius: '50%', 
                  background: 'var(--vocal2)', border: '2px solid var(--vocal3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' 
                }}>
                  {assignedProducer.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--t1)', marginBottom: '4px' }}>{assignedProducer.name}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--vocal)', fontWeight: 600 }}>{assignedProducer.role}</p>
                </div>
              </div>
              
              <div style={{ background: 'var(--bg2)', padding: '20px', borderRadius: 'var(--r2)', border: '1px solid var(--border)' }}>
                <p style={{ fontSize: '0.95rem', color: 'var(--t2)', lineHeight: 1.6, fontStyle: 'italic' }}>
                  {assignedProducer.quote}
                </p>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '8px' }}>
                <button onClick={() => alert('Abriendo Calendario...')} style={{
                  padding: '12px', background: 'var(--vocal)', border: 'none', color: '#fff',
                  borderRadius: 'var(--r2)', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer',
                  boxShadow: '0 4px 12px var(--vocal3)'
                }}>
                  Ir al Calendario de Reservas
                </button>
                <button onClick={() => alert('Abriendo chat directo...')} style={{
                  padding: '12px', background: 'transparent', border: '2px solid var(--border)', color: 'var(--t1)',
                  borderRadius: 'var(--r2)', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer', transition: 'border-color 0.2s'
                }}>
                  Enviar Mensaje
                </button>
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
              {PRODUCERS.map(producer => {
                const isSelected = requestStatus === 'pending' && selectedProducer === producer.id
                const isOtherPending = requestStatus === 'pending' && selectedProducer !== producer.id

                return (
                  <div key={producer.id} style={{
                    background: 'var(--bg1)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--r3)',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    opacity: isOtherPending ? 0.5 : 1,
                    pointerEvents: isOtherPending ? 'none' : 'auto',
                    transition: 'all 0.3s'
                  }}>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                      <div style={{ 
                        width: '64px', height: '64px', borderRadius: '50%', 
                        background: 'var(--vocal2)', border: '2px solid var(--vocal3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' 
                      }}>
                        {producer.icon}
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--t1)' }}>{producer.name}</h3>
                        <p style={{ fontSize: '0.8rem', color: 'var(--vocal)', fontWeight: 600 }}>{producer.role}</p>
                      </div>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {producer.genres.map(genre => (
                        <span key={genre} style={{ fontSize: '0.7rem', padding: '4px 10px', background: 'var(--bg2)', borderRadius: '100px', color: 'var(--t2)', fontWeight: 600 }}>
                          {genre}
                        </span>
                      ))}
                    </div>
                    
                    <p style={{ fontSize: '0.85rem', color: 'var(--t3)', lineHeight: 1.6, flex: 1 }}>
                      {producer.quote}
                    </p>
                    
                    <div style={{ marginTop: 'auto' }}>
                      {isSelected ? (
                        <div style={{
                          background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border)', 
                          padding: '12px', borderRadius: 'var(--r2)', textAlign: 'center'
                        }}>
                          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--t1)' }}>⏳ Solicitud Enviada</span>
                          <p style={{ fontSize: '0.75rem', color: 'var(--t3)', marginTop: '4px' }}>Pendiente de Aprobación</p>
                        </div>
                      ) : (
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                          <button onClick={() => alert('Abriendo chat/contacto...')} style={{
                            padding: '10px', background: 'transparent', border: '1px solid var(--border)', color: 'var(--t1)',
                            borderRadius: 'var(--r2)', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer', transition: 'border-color 0.2s'
                          }}>
                            Contactar
                          </button>
                          <button onClick={() => handleSelectProducer(producer.id)} style={{
                            padding: '10px', background: 'var(--vocal)', border: 'none', color: '#fff',
                            borderRadius: 'var(--r2)', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer',
                            boxShadow: '0 4px 12px var(--vocal3)'
                          }}>
                            Elegir Productor
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>

      {/* ── Modal de Solicitud ── */}
      {isModalOpen && selectedProducer && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 1000,
          background: 'rgba(7, 9, 15, 0.8)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px'
        }}>
          <div style={{
            background: 'var(--bg1)', border: '1px solid var(--border)', borderRadius: 'var(--r3)',
            padding: '32px', width: '100%', maxWidth: '500px',
            animation: 'fadeIn 0.2s'
          }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--t1)', marginBottom: '8px' }}>
              Solicitud de Mentoría con {PRODUCERS.find(p => p.id === selectedProducer)?.name}
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--t2)', lineHeight: 1.5, marginBottom: '24px' }}>
              Cuéntale a tu productor sobre tu proyecto, tus referencias y qué te gustaría lograr en las sesiones 1 a 1.
            </p>
            
            <textarea 
              placeholder="Ej. Estoy produciendo un tema urbano y siento que a las voces les falta brillo y presencia..."
              style={{
                width: '100%', minHeight: '120px', background: 'var(--bg2)', border: '1px solid var(--border)',
                borderRadius: 'var(--r2)', padding: '16px', color: 'var(--t1)', fontSize: '0.9rem',
                resize: 'vertical', outline: 'none', marginBottom: '24px', fontFamily: 'inherit'
              }}
            />
            
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button onClick={() => setIsModalOpen(false)} style={{
                padding: '10px 20px', background: 'transparent', border: '1px solid var(--border)', color: 'var(--t2)',
                borderRadius: 'var(--r2)', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer'
              }}>
                Cancelar
              </button>
              <button onClick={handleSubmitRequest} style={{
                padding: '10px 24px', background: 'var(--vocal)', border: 'none', color: '#fff',
                borderRadius: 'var(--r2)', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer'
              }}>
                Enviar Solicitud
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
