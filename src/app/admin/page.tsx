'use client'

import { useState } from 'react'
import { createClass } from './actions'

export default function AdminPage() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'error' | 'success', text: string } | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setMessage(null)
    
    const form = e.currentTarget
    const formData = new FormData(form)
    
    const result = await createClass(formData)
    
    if (result.error) {
      setMessage({ type: 'error', text: result.error })
    } else {
      setMessage({ type: 'success', text: 'Clase guardada exitosamente en la base de datos.' })
      form.reset()
    }
    setLoading(false)
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--bg0)', color: 'var(--t1)' }}>
      {/* Panel lateral provisional o padding general */}
      <div style={{ flex: 1, padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '10px' }}>🛠️ Panel del Productor</h1>
        <p style={{ color: 'var(--t2)', marginBottom: '30px' }}>Administra las clases y el contenido del roadmap.</p>
        
        <div style={{ backgroundColor: 'var(--bg1)', padding: '30px', borderRadius: 'var(--r3)', border: '1px solid var(--border)' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--vocal)', marginBottom: '20px' }}>Subir Nueva Clase</h2>
          
          {message && (
            <div style={{ 
              padding: '15px', 
              marginBottom: '20px', 
              borderRadius: 'var(--r)', 
              backgroundColor: message.type === 'error' ? 'rgba(255,0,0,0.1)' : 'rgba(0,255,0,0.1)', 
              border: `1px solid ${message.type === 'error' ? 'red' : 'green'}` 
            }}>
              {message.type === 'error' ? '❌ ' : '✅ '}{message.text}
            </div>
          )}

          <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--t3)', marginBottom: '5px', textTransform: 'uppercase' }}>Título de la Clase</label>
              <input name="title" type="text" required placeholder="Ej: Ecualización Sustractiva" style={{ width: '100%', padding: '12px', backgroundColor: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 'var(--r)', color: 'var(--t1)', outline: 'none' }} />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--t3)', marginBottom: '5px', textTransform: 'uppercase' }}>Descripción</label>
              <textarea name="description" rows={3} placeholder="De qué trata esta clase..." style={{ width: '100%', padding: '12px', backgroundColor: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 'var(--r)', color: 'var(--t1)', outline: 'none', resize: 'vertical' }} />
            </div>

            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--t3)', marginBottom: '5px', textTransform: 'uppercase' }}>URL del Video</label>
                <input name="video_url" type="url" placeholder="https://vimeo.com/..." style={{ width: '100%', padding: '12px', backgroundColor: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 'var(--r)', color: 'var(--t1)', outline: 'none' }} />
              </div>
              <div style={{ width: '150px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--t3)', marginBottom: '5px', textTransform: 'uppercase' }}>Etapa</label>
                <select name="roadmap_stage" required style={{ width: '100%', padding: '12px', backgroundColor: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 'var(--r)', color: 'var(--t1)', outline: 'none' }}>
                  <option value="Fundamentos">Fundamentos</option>
                  <option value="Mezcla">Mezcla</option>
                  <option value="Mastering">Mastering</option>
                  <option value="Negocio">Negocio</option>
                </select>
              </div>
              <div style={{ width: '100px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--t3)', marginBottom: '5px', textTransform: 'uppercase' }}>Orden</label>
                <input name="order" type="number" defaultValue="1" required style={{ width: '100%', padding: '12px', backgroundColor: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 'var(--r)', color: 'var(--t1)', outline: 'none' }} />
              </div>
            </div>

            <button type="submit" disabled={loading} style={{ marginTop: '10px', padding: '14px', backgroundColor: 'var(--vocal)', color: '#fff', border: 'none', borderRadius: 'var(--r)', fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1 }}>
              {loading ? 'Guardando...' : 'Publicar Clase'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
