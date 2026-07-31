'use server'

import { createClient } from '@/lib/supabase-server'
import { revalidatePath } from 'next/cache'

export async function createClass(formData: FormData) {
  const title = formData.get('title') as string
  const description = formData.get('description') as string
  const video_url = formData.get('video_url') as string
  const roadmap_stage = formData.get('roadmap_stage') as string
  const order = parseInt(formData.get('order') as string, 10)

  if (!title || !roadmap_stage) {
    return { error: 'El título y la etapa son obligatorios' }
  }

  const supabase = await createClient()

  // Verificación de seguridad adicional a nivel Servidor
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { error: 'No autorizado' }

  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single()
  if (profile?.role !== 'productor') return { error: 'No autorizado' }

  const { error } = await supabase.from('classes').insert({
    title,
    description,
    video_url,
    roadmap_stage,
    order: isNaN(order) ? 0 : order,
    is_published: true
  })

  if (error) {
    console.error("Error al insertar clase:", error)
    return { error: error.message }
  }

  revalidatePath('/admin')
  return { success: true }
}
