import Link from 'next/link'
import { getProfileBannerData } from '@/lib/profileHelper'

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const showIncompleteProfileBanner = await getProfileBannerData()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 54px)' }}>
      {/* Banner de Perfil Incompleto */}
      {showIncompleteProfileBanner && (
        <div style={{
          flexShrink: 0,
          background: '#d97706', // Orange-600
          borderBottom: '1px solid #b45309',
          padding: '12px 24px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '12px',
          fontSize: '0.85rem',
          color: '#fff',
          fontWeight: 600,
          zIndex: 100
        }}>
          <span>⚠️ Tu perfil está incompleto. Es obligatorio registrar tu DNI y Celular para usar las mentorías.</span>
          <Link href="/app/onboarding" style={{
            background: 'rgba(0,0,0,0.2)',
            padding: '6px 12px',
            borderRadius: 'var(--r)',
            color: '#fff',
            fontWeight: 800,
            textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.3)',
            transition: 'background 0.2s'
          }}>
            Completar Perfil
          </Link>
        </div>
      )}

      {/* Banner de Trial */}
      <div style={{
        flexShrink: 0,
        background: 'var(--vocal2)',
        borderBottom: '1px solid var(--vocal3)',
        padding: '10px 24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
        fontSize: '0.8rem',
        color: 'var(--t1)'
      }}>
        <span>🚀 Estás en tu período de prueba de 7 días.</span>
        <Link href="/app/profile" style={{
          color: 'var(--vocal)',
          fontWeight: 700,
          textDecoration: 'underline',
          textUnderlineOffset: '2px'
        }}>
          Mejora tu plan aquí
        </Link>
      </div>

      <div style={{ flex: 1 }}>
        {children}
      </div>
    </div>
  )
}
