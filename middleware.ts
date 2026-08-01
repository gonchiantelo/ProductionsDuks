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

  // 2. Obtener usuario actual (no lanza excepción, solo retorna null si no hay sesión)
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const path = request.nextUrl.pathname;
  const isAuthRoute = path.startsWith('/login') || path.startsWith('/register');
  const isAppRoute = path.startsWith('/app');
  const isAdminRoute = path.startsWith('/admin');
  const isOnboardingRoute = path === '/app/onboarding';

  // 3. Redirigir a login si no hay usuario y se intenta acceder a rutas protegidas
  if (!user && (isAppRoute || isAdminRoute)) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // 4. Si hay usuario, verificamos permisos según la ruta
  if (user && (isAppRoute || isAdminRoute)) {
    // Consulta defensiva: si Supabase falla (ej: error RLS), no romper la app.
    // En ese caso dejamos pasar — el usuario verá la UI que manejará el error.
    let profile = null;
    let profileError = null;

    try {
      const result = await supabase
        .from('profiles')
        .select('role, subscription_status, trial_ends_at, onboarding_completed')
        .eq('id', user.id)
        .single();

      profile = result.data;
      profileError = result.error;
    } catch (e) {
      // Error de red o excepción inesperada — tratamos como si el perfil no cargó
      profileError = e;
    }

    // Si hay error de base de datos (ej: recursión RLS), no redirigimos en loop.
    // Permitimos acceso al onboarding para que el usuario pueda completar su perfil.
    // Para cualquier otra ruta, también dejamos pasar para que la UI muestre el error.
    if (profileError) {
      console.error('[middleware] Error al cargar perfil:', profileError);
      // Evitar loop: si el error ocurre fuera de onboarding, redirigir ahí UNA SOLA VEZ
      // No redirigir si ya estamos en onboarding (evita el loop infinito)
      if (!isOnboardingRoute && isAppRoute) {
        return NextResponse.redirect(new URL('/app/onboarding', request.url))
      }
      // Si ya estamos en onboarding con error, dejamos pasar para que la UI maneje el estado
      return supabaseResponse;
    }

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

    // Regla C: Forzar Onboarding si no está completado
    if ((!profile || !profile.onboarding_completed) && !isOnboardingRoute) {
      return NextResponse.redirect(new URL('/app/onboarding', request.url))
    }
    // Si ya completó el onboarding y está intentando volver al onboarding, redirigir al manual
    if (profile?.onboarding_completed && isOnboardingRoute) {
      return NextResponse.redirect(new URL('/app/manual', request.url))
    }

    // Regla B: Proteger rutas /app (Solo suscripción activa o trial vigente)
    // Se ignora si ya estamos en /app/onboarding (debe ser siempre accesible)
    if (isAppRoute && !hasActiveAccess && path !== '/perfil' && !isOnboardingRoute) {
      return NextResponse.redirect(new URL('/perfil', request.url))
    }
  }

  // 5. Si es auth route o la landing y ya está logueado, mandarlo a la app
  if (user && (isAuthRoute || path === '/')) {
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
