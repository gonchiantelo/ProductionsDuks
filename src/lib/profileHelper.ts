import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function getProfileBannerData() {
  try {
    const cookieStore = await cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll()
          },
          setAll(cookiesToSet) {
            // Read-only server component action
          },
        },
      }
    )

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return null

    const { data: profile } = await supabase
      .from('profiles')
      .select('document_id, phone_number')
      .eq('id', user.id)
      .single()

    if (profile && (
      !profile.document_id || profile.document_id.trim() === '' || 
      !profile.phone_number || profile.phone_number.trim() === ''
    )) {
      return true
    }
    
    return false
  } catch (error) {
    return false
  }
}
