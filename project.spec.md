# Especificación Técnica de la Plataforma Educativa

## Etapa 1: Setup
- [ ] Inicializar el proyecto y estructura de carpetas (Backend/Frontend).
- [ ] Configurar estilos globales y variables CSS.
- [ ] Integrar tipografías (Inter, JetBrains Mono) y estética Dark Mode.

## Etapa 2: Integración del Manual
- [ ] Migrar el código HTML monolítico del manual a la nueva estructura web.
- [ ] Conservar y aplicar las variables CSS personalizadas (`--vocal`, `--beat`, `--mast`).
- [ ] Mantener la lógica de navegación lateral (sidebar) y pestañas (tab-panel).
- [ ] Asegurar la responsividad intacta del menú hamburguesa.

## Etapa 3: Backend/Autenticación
- [ ] Configurar la base de datos para usuarios, clases y novedades.
- [ ] Implementar sistema de inicio de sesión seguro.
- [ ] Definir roles de usuario (Productor/Administrador vs Alumnos).

## Etapa 4: Panel del Productor (Subida de clases)
- [ ] Desarrollar interfaz del dashboard de administración.
- [ ] Crear módulo para añadir una nueva 'Clase' (Título, descripción, enlace de video embebido, archivos adjuntos).
- [ ] Crear módulo para publicar artículos en el área de 'Novedades'.
- [ ] Integrar operaciones de creación y subida con el backend.

## Etapa 5: Frontend de Alumnos
- [ ] Diseñar el panel de usuario/alumno.
- [ ] Mostrar listado de clases disponibles y novedades.
- [ ] Crear vista de consumo de clase (reproducción de video y descarga de material).
