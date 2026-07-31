'use client'

import { useState } from 'react'
import MainContent from '@/app/MainContent'

const modules = [
  { icon: '📖', label: 'Glosario', id: 'panel-glosario' },
  { icon: '🧠', label: 'Mentalidad', id: 'panel-mentalidad' },
  { icon: '🔧', label: 'Diagnóstico', id: 'panel-diagnostico' },
  { icon: '🔗', label: 'Cadena de señal', id: 'panel-cadena' },
  { icon: '🎤', label: 'Canal Vocal', id: 'panel-vocal' },
  { icon: '🎵', label: 'Canal Beat', id: 'panel-beat' },
  { icon: '🎚️', label: 'Canal Master', id: 'panel-master' },
  { icon: '🎸', label: 'Por Género', id: 'panel-generos' },
]

export default function ManualPage() {
  const [activeTab, setActiveTab] = useState('panel-glosario')

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
          <p style={{ fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--t4)' }}>Manual</p>
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column' }}>
          {modules.map((m) => (
            <button 
              key={m.id} 
              onClick={() => setActiveTab(m.id)} 
              className={`sidebar-item ${activeTab === m.id ? 'active' : ''}`}
              style={{
                background: activeTab === m.id ? 'var(--vocal2)' : 'transparent',
                border: 'none',
                width: '100%',
                textAlign: 'left',
                fontFamily: 'inherit',
              }}
            >
              <span className="si-icon">{m.icon}</span>
              {m.label}
            </button>
          ))}
        </nav>

        <div style={{ margin: '20px 16px 0', padding: '14px', background: 'var(--vocal2)', border: '1px solid var(--vocal3)', borderRadius: 'var(--r2)' }}>
          <p style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--vocal)', marginBottom: '4px' }}>✨ Período de Prueba</p>
          <p style={{ fontSize: '0.7rem', color: 'var(--t2)' }}>7 días de acceso total gratuito.</p>
        </div>
      </aside>

      {/* ── Main Content ── */}
      <main style={{ flex: 1, overflowY: 'auto', padding: '20px 0', position: 'relative' }}>
        <style>{`
          /* Oculta todos los paneles por defecto y muestra solo el activo */
          .tab-panel { display: none !important; }
          #${activeTab} { display: block !important; }
        `}</style>
        <MainContent />
      </main>
    </div>
  )
}
