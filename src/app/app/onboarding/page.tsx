'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'

export default function OnboardingPage() {
  const router = useRouter()
  const [userId, setUserId] = useState<string | null>(null)
  const [role, setRole] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  // Form State
  const [formData, setFormData] = useState({
    document_id: '',
    phone_number: '',
    bio: '',
    software: [] as string[],
    specialties: [] as string[],
    genres: [] as string[]
  })

  const [softwareInput, setSoftwareInput] = useState('')
  const [specialtiesInput, setSpecialtiesInput] = useState('')
  const [genresInput, setGenresInput] = useState('')

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    let mounted = true
    supabase.auth.getUser().then(({ data }) => {
      if (mounted && data.user) {
        setUserId(data.user.id)
        supabase.from('profiles').select('role, onboarding_completed').eq('id', data.user.id).single()
          .then(({ data: profile }) => {
            if (mounted) {
              if (profile?.onboarding_completed) {
                router.push('/app/manual')
              } else {
                setRole(profile?.role || 'alumno')
                setIsLoading(false)
              }
            }
          })
      } else {
        if (mounted) router.push('/login')
      }
    })
    return () => { mounted = false }
  }, [router, supabase])

  const handleAddTag = (field: 'software' | 'specialties' | 'genres', e: React.KeyboardEvent<HTMLInputElement>, inputValue: string, setInputValue: (v: string) => void) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault()
      const val = inputValue.trim()
      if (val && !formData[field].includes(val)) {
        setFormData(prev => ({ ...prev, [field]: [...prev[field], val] }))
      }
      setInputValue('')
    }
  }

  const handleRemoveTag = (field: 'software' | 'specialties' | 'genres', tag: string) => {
    setFormData(prev => ({ ...prev, [field]: prev[field].filter(t => t !== tag) }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!userId) return

    setIsSubmitting(true)
    setError('')

    try {
      const { error: updateError } = await supabase
        .from('profiles')
        .update({
          document_id: formData.document_id,
          phone_number: formData.phone_number,
          bio: formData.bio,
          software: role === 'productor' ? formData.software : null,
          specialties: role === 'productor' ? formData.specialties : null,
          genres: role === 'alumno' ? formData.genres : null,
          onboarding_completed: true
        })
        .eq('id', userId)

      if (updateError) throw updateError

      router.push('/app/manual')
    } catch (err: any) {
      setError(err.message || 'Error al guardar los datos')
      setIsSubmitting(false)
    }
  }

  if (isLoading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg1)' }}>
        <div style={{ width: '30px', height: '30px', borderRadius: '50%', border: '3px solid var(--t4)', borderTopColor: 'var(--vocal)', animation: 'spin 1s linear infinite' }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg1)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
      
      <div style={{
        background: 'var(--bg2)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--r3)',
        padding: '40px',
        maxWidth: '600px',
        width: '100%',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        animation: 'fadeIn 0.4s ease-out'
      }}>
        
        <h1 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--t1)', marginBottom: '8px', textAlign: 'center' }}>
          Configura tu Perfil
        </h1>
        <p style={{ color: 'var(--t2)', fontSize: '0.95rem', textAlign: 'center', marginBottom: '32px' }}>
          Completa estos datos para personalizar tu experiencia en la plataforma.
        </p>

        {error && (
          <div style={{ background: 'rgba(235, 78, 55, 0.1)', color: '#eb4e37', padding: '12px', borderRadius: 'var(--r2)', marginBottom: '24px', fontSize: '0.85rem', fontWeight: 600 }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Sección A: Datos Generales */}
          <div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--t1)', marginBottom: '16px', borderBottom: '1px solid var(--border)', paddingBottom: '8px' }}>
              Datos Generales
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--t2)' }}>Cédula / DNI</label>
                <input 
                  type="text" required
                  value={formData.document_id} onChange={e => setFormData({...formData, document_id: e.target.value})}
                  style={inputStyle}
                  placeholder="Ej: 12345678"
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--t2)' }}>Número de WhatsApp</label>
                <input 
                  type="tel" required
                  value={formData.phone_number} onChange={e => setFormData({...formData, phone_number: e.target.value})}
                  style={inputStyle}
                  placeholder="+598 99..."
                />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--t2)' }}>Biografía corta</label>
              <textarea 
                required rows={3}
                value={formData.bio} onChange={e => setFormData({...formData, bio: e.target.value})}
                style={{ ...inputStyle, resize: 'none' }}
                placeholder="Cuéntanos un poco sobre ti..."
              />
            </div>
          </div>

          {/* Sección B: Específica por Rol */}
          <div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--t1)', marginBottom: '16px', borderBottom: '1px solid var(--border)', paddingBottom: '8px' }}>
              {role === 'productor' ? 'Datos de Productor' : 'Tus Intereses'}
            </h2>
            
            {role === 'productor' ? (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--t2)' }}>DAWs / Software (Presiona Enter para agregar)</label>
                  <input 
                    type="text" 
                    value={softwareInput} onChange={e => setSoftwareInput(e.target.value)}
                    onKeyDown={e => handleAddTag('software', e, softwareInput, setSoftwareInput)}
                    style={inputStyle}
                    placeholder="Ej: Ableton Live, FL Studio..."
                  />
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                    {formData.software.map(tag => (
                      <span key={tag} onClick={() => handleRemoveTag('software', tag)} style={tagStyle}>
                        {tag} ✕
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--t2)' }}>Especialidades (Presiona Enter para agregar)</label>
                  <input 
                    type="text" 
                    value={specialtiesInput} onChange={e => setSpecialtiesInput(e.target.value)}
                    onKeyDown={e => handleAddTag('specialties', e, specialtiesInput, setSpecialtiesInput)}
                    style={inputStyle}
                    placeholder="Ej: Mezcla Vocal, Beatmaking..."
                  />
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                    {formData.specialties.map(tag => (
                      <span key={tag} onClick={() => handleRemoveTag('specialties', tag)} style={tagStyle}>
                        {tag} ✕
                      </span>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--t2)' }}>Géneros de interés (Presiona Enter para agregar)</label>
                <input 
                  type="text" 
                  value={genresInput} onChange={e => setGenresInput(e.target.value)}
                  onKeyDown={e => handleAddTag('genres', e, genresInput, setGenresInput)}
                  style={inputStyle}
                  placeholder="Ej: Reggaeton, Trap, EDM..."
                />
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                  {formData.genres.map(tag => (
                    <span key={tag} onClick={() => handleRemoveTag('genres', tag)} style={tagStyle}>
                      {tag} ✕
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            style={{
              padding: '14px',
              background: 'var(--vocal)',
              color: '#fff',
              border: 'none',
              borderRadius: 'var(--r2)',
              fontSize: '1rem',
              fontWeight: 800,
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              opacity: isSubmitting ? 0.7 : 1,
              marginTop: '16px',
              transition: 'opacity 0.2s'
            }}
          >
            {isSubmitting ? 'Guardando...' : 'Comenzar'}
          </button>

        </form>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

const inputStyle = {
  background: 'rgba(7,9,15,0.5)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--r2)',
  padding: '10px 14px',
  color: 'var(--t1)',
  fontSize: '0.9rem',
  outline: 'none'
}

const tagStyle = {
  background: 'var(--bg1)',
  border: '1px solid var(--vocal)',
  borderRadius: '100px',
  padding: '4px 10px',
  fontSize: '0.75rem',
  color: 'var(--vocal)',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  fontWeight: 600
}
