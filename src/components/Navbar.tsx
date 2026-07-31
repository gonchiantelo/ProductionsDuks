'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'
import { useEffect, useState } from 'react'
import type { User } from '@supabase/supabase-js'

export default function Navbar() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [role, setRole] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    let mounted = true

    const fetchRole = async (userId: string) => {
      const { data } = await supabase.from('profiles').select('role').eq('id', userId).single()
      if (mounted) {
        setRole(data?.role ?? null)
        setIsLoading(false)
      }
    }

    supabase.auth.getUser().then(({ data }) => {
      if (mounted) {
        setUser(data.user)
        if (data.user) {
          fetchRole(data.user.id)
        } else {
          setIsLoading(false)
        }
      }
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (mounted) {
        setUser(session?.user ?? null)
        if (session?.user) {
          fetchRole(session.user.id)
        } else {
          setRole(null)
          setIsLoading(false)
        }
      }
    })

    return () => {
      mounted = false
      listener.subscription.unsubscribe()
    }
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 400,
      height: '54px', display: 'flex', alignItems: 'center',
      padding: '0 24px', gap: '16px',
      background: 'rgba(7,9,15,0.96)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border)'
    }}>
      {/* Logo */}
      <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
        <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '-0.01em', color: 'var(--t1)' }}>
          Productions<em style={{ color: 'var(--vocal)', fontStyle: 'normal' }}>Duks</em>
        </span>
      </Link>

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Links según sesión */}
      {isLoading ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.5 }}>
          <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid var(--t4)', borderTopColor: 'var(--vocal)', animation: 'spin 1s linear infinite' }} />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      ) : user ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {role === 'productor' && (
            <Link href="/admin" style={navLinkStyle}>
              🛠️ Admin
            </Link>
          )}
          <Link href="/app/manual" style={navLinkStyle}>
            📖 Manual
          </Link>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingLeft: '16px', borderLeft: '1px solid var(--border)' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--t3)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              {user.email}
              <span style={{ 
                color: role === 'productor' ? 'var(--vocal)' : 'var(--t2)', 
                fontWeight: 700,
                backgroundColor: 'var(--bg2)',
                padding: '2px 6px',
                borderRadius: '4px',
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {role === 'productor' ? 'Productor' : 'Alumno'}
              </span>
            </span>
            <button onClick={handleLogout} style={logoutBtnStyle}>
              Cerrar Sesión
            </button>
          </div>
        </div>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Link href="/login" style={navLinkStyle}>
            Iniciar Sesión
          </Link>
          <Link href="/register" style={registerBtnStyle}>
            Registrarse
          </Link>
        </div>
      )}
    </nav>
  )
}

const navLinkStyle: React.CSSProperties = {
  padding: '7px 14px',
  borderRadius: 'var(--r)',
  fontSize: '0.8rem',
  fontWeight: 600,
  color: 'var(--t2)',
  textDecoration: 'none',
  transition: 'color 0.2s, background 0.2s',
  background: 'transparent'
}

const registerBtnStyle: React.CSSProperties = {
  padding: '7px 16px',
  borderRadius: 'var(--r)',
  fontSize: '0.8rem',
  fontWeight: 700,
  color: '#fff',
  textDecoration: 'none',
  background: 'var(--vocal)',
  transition: 'opacity 0.2s'
}

const logoutBtnStyle: React.CSSProperties = {
  padding: '7px 14px',
  borderRadius: 'var(--r)',
  fontSize: '0.8rem',
  fontWeight: 600,
  color: 'var(--t2)',
  background: 'transparent',
  border: '1px solid var(--border)',
  cursor: 'pointer',
  transition: 'color 0.2s, border-color 0.2s'
}
