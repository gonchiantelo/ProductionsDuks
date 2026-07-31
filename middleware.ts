import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  // 1. Inicializar cliente de Supabase para SSR
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // 2. Obtener usuario actual
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const path = request.nextUrl.pathname;
  const isAuthRoute = path.startsWith('/login') || path.startsWith('/register');
  const isAppRoute = path.startsWith('/app');
  const isAdminRoute = path.startsWith('/admin');

  // 3. Redirigir a login si no hay usuario y se intenta acceder a rutas protegidas
  if (!user && (isAppRoute || isAdminRoute)) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // 4. Si hay usuario, verificamos permisos según la ruta
  if (user && (isAppRoute || isAdminRoute)) {
    // Hacemos una consulta rápida a la tabla perfiles para ver rol y suscripción
    const { data: profile } = await supabase
      .from('profiles')
      .select('role, subscription_status, trial_ends_at, onboarding_completed')
      .eq('id', user.id)
      .single()

    const role = profile?.role || 'alumno';
    const subStatus = profile?.subscription_status;
    const trialEndsAt = new Date(profile?.trial_ends_at || 0);
    const now = new Date();

    const isProductor = role === 'productor';
    const hasActiveAccess = isProductor || subStatus === 'active' || (subStatus === 'trialing' && trialEndsAt > now);

    // Regla A: Proteger rutas /admin (Solo Productor)
    if (isAdminRoute && !isProductor) {
      return NextResponse.redirect(new URL('/app/manual', request.url))
    }

    // Regla B: Proteger rutas /app (Solo suscripción activa o trial vigente)
    if (isAppRoute && !hasActiveAccess && path !== '/perfil') {
      // Si se quedó sin acceso, lo mandamos al perfil para que pague (o renueve)
      return NextResponse.redirect(new URL('/perfil', request.url))
    }
    // Regla C: Forzar Onboarding
    const isOnboardingRoute = path === '/app/onboarding'
    if (!profile?.onboarding_completed && !isOnboardingRoute) {
      return NextResponse.redirect(new URL('/app/onboarding', request.url))
    }
    if (profile?.onboarding_completed && isOnboardingRoute) {
      return NextResponse.redirect(new URL('/app/manual', request.url))
    }
  }

  // 5. Si es auth route o la landing y ya está logueado, mandarlo a la app
  if (user && (isAuthRoute || path === '/')) {
    // Check onboarding here as well? Not strictly needed since they will hit /app/manual and be redirected by middleware again, but we can do it to avoid double redirect.
    // However, we don't have the profile here. Let's let the double redirect handle it for simplicity.
    return NextResponse.redirect(new URL('/app/manual', request.url))
  }

  return supabaseResponse
}

export const config = {
  matcher: [
    // Ejecutar el middleware en todas las rutas excepto archivos estáticos e imágenes
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
