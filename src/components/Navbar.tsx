'use client'

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'
import { useEffect, useState } from 'react'
import type { User } from '@supabase/supabase-js'

export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname()
  const [user, setUser] = useState<User | null>(null)
  const [role, setRole] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [showNotifications, setShowNotifications] = useState(false)
  const [notifications, setNotifications] = useState<any[]>([])

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

    const fetchNotifications = async (userId: string) => {
      try {
        const { data } = await supabase
          .from('notifications')
          .select('*')
          .eq('user_id', userId)
          .order('created_at', { ascending: false })
          .limit(10)
        if (mounted && data) {
          setNotifications(data)
        }
      } catch (err) {
        console.error('Error fetching notifications', err)
      }
    }

    supabase.auth.getUser().then(({ data }) => {
      if (mounted) {
        setUser(data.user)
        if (data.user) {
          fetchRole(data.user.id)
          fetchNotifications(data.user.id)
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
          fetchNotifications(session.user.id)
          if (_event === 'SIGNED_IN') {
            router.refresh()
          }
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

  const handleToggleNotifications = async () => {
    const willShow = !showNotifications
    setShowNotifications(willShow)
    
    if (willShow) {
      const unreadIds = notifications.filter(n => !n.is_read).map(n => n.id)
      if (unreadIds.length > 0) {
        try {
          // Actualizamos optimísticamente la UI
          setNotifications(prev => prev.map(n => ({ ...n, is_read: true })))
          
          // Actualizamos la base de datos
          await supabase
            .from('notifications')
            .update({ is_read: true })
            .in('id', unreadIds)
        } catch (err) {
          console.error('Error marking notifications as read', err)
        }
      }
    }
  }

  const hasUnread = notifications.some(n => !n.is_read)

  if (pathname === '/app/onboarding') return null;

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
      <Link href={user ? "/app/manual" : "/"} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
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
          <Link href="/app/clases" style={navLinkStyle}>
            🎓 Clases
          </Link>
          <Link href="/app/noticias" style={navLinkStyle}>
            📰 Noticias
          </Link>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingLeft: '16px', borderLeft: '1px solid var(--border)', position: 'relative' }}>
            
            {/* Notificaciones */}
            <div style={{ position: 'relative' }}>
              <button 
                onClick={handleToggleNotifications}
                style={{
                  background: 'transparent', border: 'none', color: 'var(--t2)', fontSize: '1.2rem',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: '4px'
                }}
              >
                🔔
                {hasUnread && (
                  <span style={{
                    position: 'absolute', top: 0, right: 0, width: '8px', height: '8px',
                    background: 'var(--vocal)', borderRadius: '50%', border: '2px solid rgba(7,9,15,0.96)'
                  }} />
                )}
              </button>
              
              {showNotifications && (
                <div style={{
                  position: 'absolute', top: '100%', right: '0', marginTop: '12px',
                  width: '320px', background: 'var(--bg1)', border: '1px solid var(--border)',
                  borderRadius: 'var(--r3)', padding: '8px', boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                  display: 'flex', flexDirection: 'column', gap: '4px', zIndex: 500,
                  animation: 'fadeIn 0.2s',
                  maxHeight: '400px', overflowY: 'auto'
                }}>
                  <div style={{ padding: '8px 12px', borderBottom: '1px solid var(--border)', marginBottom: '4px' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--t1)' }}>Notificaciones</span>
                  </div>
                  {notifications.length === 0 ? (
                    <div style={{ padding: '16px 12px', textAlign: 'center' }}>
                      <p style={{ fontSize: '0.85rem', color: 'var(--t3)' }}>No tienes notificaciones</p>
                    </div>
                  ) : (
                    notifications.map(notif => (
                      <div key={notif.id} style={{ 
                        padding: '12px', borderRadius: 'var(--r2)', 
                        background: notif.is_read ? 'transparent' : 'var(--bg2)', 
                        cursor: 'pointer' 
                      }}>
                        <p style={{ 
                          fontSize: '0.85rem', 
                          color: notif.is_read ? 'var(--t2)' : 'var(--t1)', 
                          fontWeight: notif.is_read ? 500 : 600, 
                          marginBottom: '4px' 
                        }}>
                          {notif.content}
                        </p>
                        <p style={{ fontSize: '0.7rem', color: 'var(--t4)' }}>
                          {new Date(notif.created_at).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>

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
