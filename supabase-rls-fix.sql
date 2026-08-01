-- ============================================================
-- FIX DEFINITIVO: RLS Policies para tabla `profiles`
-- Plataforma Edu - productions-duks.vercel.app
-- Ejecutar en: Supabase Dashboard → SQL Editor → Run All
-- ============================================================

-- PASO 1: Eliminar TODAS las políticas existentes de profiles (evita conflictos)
DO $$
DECLARE
    pol RECORD;
BEGIN
    FOR pol IN 
        SELECT policyname 
        FROM pg_policies 
        WHERE tablename = 'profiles' AND schemaname = 'public'
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON public.profiles', pol.policyname);
    END LOOP;
END $$;

-- PASO 2: Asegurar que RLS está habilitado
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- PASO 3: Crear función helper para chequear rol SIN recursión
-- SECURITY DEFINER bypasea RLS cuando es llamada, rompiendo el loop
-- DROP IF EXISTS para poder re-ejecutar el script de forma idempotente
DROP FUNCTION IF EXISTS public.get_my_role();

CREATE OR REPLACE FUNCTION public.get_my_role()
RETURNS text
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT role FROM public.profiles WHERE id = auth.uid()
$$;

-- PASO 4: Crear políticas LIMPIAS (sin recursión)

-- Política 1: Los usuarios pueden VER su propio perfil
CREATE POLICY "users_select_own_profile"
ON public.profiles
FOR SELECT
USING (auth.uid() = id);

-- Política 2: Los usuarios pueden INSERTAR su propio perfil (al registrarse)
CREATE POLICY "users_insert_own_profile"
ON public.profiles
FOR INSERT
WITH CHECK (auth.uid() = id);

-- Política 3: Los usuarios pueden ACTUALIZAR su propio perfil
CREATE POLICY "users_update_own_profile"
ON public.profiles
FOR UPDATE
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

-- Política 4: Los productores pueden VER todos los perfiles
-- Usa get_my_role() que tiene SECURITY DEFINER → no causa recursión
CREATE POLICY "productores_select_all_profiles"
ON public.profiles
FOR SELECT
USING (public.get_my_role() = 'productor');

-- Política 5: Los productores pueden ACTUALIZAR cualquier perfil
CREATE POLICY "productores_update_all_profiles"
ON public.profiles
FOR UPDATE
USING (public.get_my_role() = 'productor');

-- PASO 5: Asegurar que el trigger de auth crea el perfil automáticamente al registrarse.
-- Si el perfil no se crea automáticamente al registrar, el onboarding siempre falla.
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (
    id,
    email,
    role,
    subscription_status,
    trial_ends_at,
    onboarding_completed,
    created_at
  )
  VALUES (
    NEW.id,
    NEW.email,
    'alumno',
    'trialing',
    NOW() + INTERVAL '7 days',
    false,
    NOW()
  )
  ON CONFLICT (id) DO NOTHING; -- Idempotente: no rompe si ya existe
  RETURN NEW;
END;
$$;

-- Recrear el trigger (DROP primero para poder re-ejecutar el script)
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- ============================================================
-- VERIFICACIÓN (opcional, ejecutar por separado después del fix)
-- Debería retornar las 5 políticas creadas arriba y 0 errores
-- ============================================================
-- SELECT policyname, cmd, qual FROM pg_policies WHERE tablename = 'profiles';
