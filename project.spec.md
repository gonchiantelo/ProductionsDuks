# Especificación Técnica de la Plataforma Educativa
> **Regla de oro:** Desarrollo práctico, sin sobre-ingeniería. UX altamente pedagógica.

---

## Stack de Decisiones Técnicas Finales

| Área | Decisión | Justificación |
|------|----------|---------------|
| 💳 Pagos | **MercadoPago** (API de suscripciones) | Sin fricción para público LATAM, débito automático |
| 📂 Archivos | **Supabase Storage** | Ecosistema integrado, capa gratuita incluida |
| 📅 Mentorías | **Calendly embebido** | Cero desarrollo, Pato autogestiona su agenda |
| 📧 Emails | **Resend** | 3.000 emails/mes gratis, integración nativa con Next.js |
| 👁️ Visor PDF | **react-pdf** | Crítico: el alumno consume el contenido en la web, sin descarga fácil |

---

## Etapa 1: Setup ✅
- [x] Inicializar el proyecto Next.js y estructura de carpetas (Backend/Frontend).
- [x] Configurar estilos globales y variables CSS (`--vocal`, `--beat`, `--mast`, etc.).
- [x] Integrar tipografías (Inter, JetBrains Mono) y estética Dark Mode.

## Etapa 2: Integración del Manual ✅
- [x] Migrar el código HTML monolítico del manual a la nueva estructura web.
- [x] Conservar y aplicar las variables CSS personalizadas (`--vocal`, `--beat`, `--mast`).
- [x] Mantener la lógica de navegación lateral (sidebar) y pestañas (tab-panel).
- [x] Asegurar la responsividad intacta del menú hamburguesa.
- [x] Conectar Supabase (cliente configurado + variables de entorno).

---

## Etapa 3: Autenticación, Roles y Suscripción (Paywall)
> **Objetivo:** Controlar el acceso al manual y herramientas mediante suscripción mensual.

### 3.1 — Autenticación (Supabase Auth)
- [x] Registro de usuario con email y contraseña (vía Supabase Auth).
- [x] Login / Logout con sesión persistente.
- [ ] Recuperación de contraseña por email (email transaccional via **Resend**).
- [ ] Página de perfil básico del alumno (`/perfil`): estado de suscripción, días de trial restantes.

### 3.2 — Roles de Usuario
- [x] Definir dos roles en la tabla `profiles` de Supabase: `alumno` y `productor`.
- [x] Middleware de Next.js (`middleware.ts`) para proteger rutas según rol:
  - `/app/*` → solo accesible por usuarios con suscripción `trialing` o `active`.
  - `/admin/*` → solo accesible por usuarios con rol `productor`.
  - Sin sesión → redirigir a `/login`.

### 3.3 — Suscripción y Paywall (MercadoPago)
- [ ] Al registrarse, activar automáticamente **7 días de prueba gratuita** (campo `trial_ends_at` en `profiles`).
- [ ] Integrar **MercadoPago Subscriptions API** para cobro mensual recurrente (USD $7–$10/mes).
- [ ] Guardar en `profiles`: `subscription_status` (`trialing` | `active` | `past_due` | `canceled`) y `mp_subscription_id`.
- [ ] Endpoint/Webhook (`/api/webhooks/mercadopago`) para escuchar eventos de MercadoPago y actualizar `subscription_status` en Supabase.
- [ ] Email automático via **Resend** cuando: bienvenida, trial por vencer (día 5), suscripción activada, pago fallido.
- [ ] Bloquear acceso al contenido protegido si `subscription_status` no es `trialing` ni `active`.

### 3.4 — Schema de Base de Datos (Supabase)
- [ ] Tabla `profiles`: `id` (FK auth.users), `email`, `role`, `display_name`, `subscription_status`, `trial_ends_at`, `mp_subscription_id`, `created_at`.
- [ ] Tabla `classes`: `id`, `title`, `description`, `video_url` (Vimeo/YT oculto), `roadmap_stage`, `order`, `is_published`, `created_at`.
- [ ] Tabla `materials`: `id`, `class_id`, `name`, `file_url` (Supabase Storage), `type` (`pdf` | `excel` | `word`).
- [ ] Tabla `student_progress`: `id`, `user_id`, `class_id`, `completed_at`.
- [ ] Tabla `news`: `id`, `title`, `body`, `published_at`, `author_id`.
- [ ] Tabla `mentorship_bookings`: `id`, `student_id`, `mentor_id`, `scheduled_at`, `status` (`pending` | `confirmed` | `canceled`), `notes`.
- [ ] Row Level Security (RLS) habilitado en **todas** las tablas. Los alumnos solo leen su propio progreso; los productores tienen acceso completo.

---

## Etapa 4: Panel del Productor (Admin)
> **Objetivo:** Interfaz para que el Productor (Pato) gestione todo el contenido sin tocar código.
> Ruta protegida: `/admin` (rol `productor`).

### 4.1 — Dashboard General
- [ ] Vista resumen: alumnos activos, trials activos, clases publicadas, bookings pendientes.

### 4.2 — Gestión de Clases
- [ ] Listado de clases con filtro por Roadmap/Nivel y estado (publicada/borrador).
- [x] Formulario para crear/editar clase:
  - Título, descripción (rich text simple).
  - URL del video (Vimeo o YouTube Oculto — sin subir archivos de video al servidor).
  - Asignación a etapa del Roadmap y orden de aparición.
  - Toggle de publicación.
- [ ] Módulo de materiales adjuntos: subir PDF, Excel, Word a **Supabase Storage** y guardar URL en tabla `materials`.
- [ ] Eliminar clase (borrado lógico: `is_published = false`).

### 4.3 — Sección de Novedades
- [ ] Crear/editar/eliminar artículos de novedades (título + cuerpo de texto enriquecido).
- [ ] Toggle de publicación inmediata.

### 4.4 — Gestión de Mentorías
- [ ] Listado de bookings recibidos con estado (`pendiente`, `confirmado`, `cancelado`).
- [ ] Confirmar o rechazar un booking desde el panel (dispara email al alumno via **Resend**).
- [ ] Ver notas del alumno al solicitar la mentoría.

### 4.5 — Gestión de Alumnos
- [ ] Listado de usuarios: nombre, email, estado de suscripción, fecha de registro.
- [ ] Acción manual para extender el acceso de un alumno puntual (editar `trial_ends_at`).

---

## Etapa 5: Frontend del Alumno
> **Objetivo:** Experiencia de aprendizaje clara, motivadora y auto-guiada. Ruta: `/app`

### 5.1 — Roadmap (Ruta de Aprendizaje)
- [ ] Página principal `/app/roadmap`: visual tipo "camino" por Semestres o Niveles.
- [ ] Cada nodo del roadmap es una clase. Estado visual: `bloqueada` / `disponible` / `completada`.
- [ ] Barra de progreso general (% de clases completadas).
- [ ] Botón "Marcar como completada" en cada clase (inserta en `student_progress`).

### 5.2 — Vista de Clase Individual (`/app/clases/[id]`)
- [ ] Player de video embebido (Vimeo/YouTube iframe, sin controles de descarga).
- [ ] Descripción de la clase debajo del video.
- [ ] Sección de materiales adjuntos:
  - **PDF** → visor inline con **react-pdf** (el usuario no puede descargar fácilmente; solo ve dentro de la app).
  - **Excel/Word** → botón de descarga directa desde Supabase Storage.
- [ ] Navegación "Clase anterior / Siguiente clase".

### 5.3 — Sección Pedagógica Transversal (`/app/pedagogia`)
- [ ] Contenido estático/editorial, accesible con suscripción activa.
  - Sub-sección: Plugins gratuitos recomendados (con links externos).
  - Sub-sección: Armado de Home Studio (guía de equipamiento por presupuesto).
  - Sub-sección: Herramientas recomendadas (DAWs, recursos online, etc.).

### 5.4 — Novedades (`/app/novedades`)
- [ ] Feed de artículos publicados por el Productor.
- [ ] Vista de artículo individual con fecha y autor.

### 5.5 — Mentorías (`/app/mentorias`)
- [ ] Página descriptiva del servicio.
- [ ] **Widget de Calendly embebido** para que el alumno reserve su sesión 1 a 1 con Pato directamente.
- [ ] Historial de mentorías solicitadas (leído desde `mentorship_bookings`).

### 5.6 — El Manual Interactivo (`/app/manual`)
- [ ] El manual actual queda disponible solo con suscripción activa.
- [ ] Herramienta web, **no descargable**.
- [ ] Mantener toda la funcionalidad interactiva actual (tabs, sidebar, EQ canvas, etc.).

---

## Backlog / Futuras Mejoras (fuera de scope actual)
- [ ] Sistema de certificados al completar el roadmap.
- [ ] Foro o canal de comunidad entre alumnos.
- [ ] App móvil nativa (React Native).
- [ ] Sistema de cupones de descuento para suscripción.
- [ ] Modo oscuro/claro configurable por el alumno.
