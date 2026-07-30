import { signup } from '../auth/actions'
import Link from 'next/link'

export default async function RegisterPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const resolvedParams = await searchParams;
  const error = resolvedParams?.error;

  return (
    <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg0)', padding: '20px' }}>
      <div style={{ width: '100%', maxWidth: '400px', backgroundColor: 'var(--bg1)', padding: '40px', borderRadius: 'var(--r3)', border: '1px solid var(--border)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--t1)', marginBottom: '10px', textAlign: 'center' }}>
          🚀 Crea tu cuenta
        </h1>
        <p style={{ color: 'var(--t2)', fontSize: '0.85rem', textAlign: 'center', marginBottom: '30px' }}>
          Regístrate ahora y obtén 7 días de prueba gratis.
        </p>

        {error && (
          <div className="alert aer" style={{ marginBottom: '20px' }}>
            <span className="ai">❌</span>
            <p>{error}</p>
          </div>
        )}

        <form action={signup} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--t3)', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Nombre completo</label>
            <input name="name" type="text" required placeholder="Gonzalo Antelo" style={{ width: '100%', padding: '12px 14px', backgroundColor: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 'var(--r)', color: 'var(--t1)', outline: 'none' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--t3)', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</label>
            <input name="email" type="email" required placeholder="tu@email.com" style={{ width: '100%', padding: '12px 14px', backgroundColor: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 'var(--r)', color: 'var(--t1)', outline: 'none' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--t3)', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Contraseña</label>
            <input name="password" type="password" required placeholder="••••••••" style={{ width: '100%', padding: '12px 14px', backgroundColor: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 'var(--r)', color: 'var(--t1)', outline: 'none' }} />
          </div>
          <button type="submit" style={{ marginTop: '10px', width: '100%', padding: '14px', backgroundColor: 'var(--vocal)', color: '#fff', border: 'none', borderRadius: 'var(--r)', fontWeight: 700, cursor: 'pointer', transition: 'opacity 0.2s' }}>
            Comenzar prueba gratis
          </button>
        </form>

        <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.8rem', color: 'var(--t2)' }}>
          ¿Ya tienes cuenta? <Link href="/login" style={{ color: 'var(--vocal)', textDecoration: 'none', fontWeight: 600 }}>Inicia sesión</Link>
        </p>
      </div>
    </div>
  )
}
