# Plan de Acción: Landing Page Fundación Kapullitos

## 1. Contexto
La Fundación Kapullitos requiere una Landing Page informativa (Single Page Application) sin backend ni base de datos, enfocada en captar voluntarios y dar a conocer sus 4 pilares: Salud Física, Salud Mental, Talleres y Desarrollo, e Intervención Familiar.

## 2. Decisiones Técnicas (Aprobadas)
- Framework: Next.js (App Router).
- Gestor de paquetes: `pnpm`.
- Estilos: Tailwind CSS (usando paleta de marca: Lavanda, Melocotón, Verde, Verde oscuro).
- Testing: Jest / React Testing Library (Unitario) y Playwright (End-to-End).
- Formularios: Acción de form genérica (para futura integración con Formspree).
- Assets: Los logos (SVG/PNG) se sirven desde `public/logos/`.

## 3. Plan de Implementación
### Fase 1: Inicialización
1. `pnpm create next-app@latest ./` (App Router, Tailwind, TypeScript).
2. Configurar `tailwind.config.ts`.
3. Instalar y configurar dependencias de testing (`jest`, `playwright`).
4. Mover recursos visuales a `public/logos/`.

### Fase 2: Desarrollo UI
1. `Navbar` y `Footer`.
2. `HeroSection`.
3. `AboutUs` (Historia del 24 de junio).
4. `Pillars` (Tarjetas de servicios).

### Fase 3: Integración y Funcionalidad
1. `ContactForm` (Endpoint temporal mockeado o log a consola).
2. Integración final en `page.tsx`.

### Fase 4: Pruebas
1. Tests unitarios en componentes.
2. Flujo E2E en Playwright.
3. Auditoría SEO/Accesibilidad.
