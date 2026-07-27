# Prompt para Copilot (o cualquier IA generativa)

Por favor, actúa como un Desarrollador Frontend Senior experto en React, Next.js y Tailwind CSS. 
Tu tarea es implementar la primera fase de la Landing Page para la "Fundación Kapullitos", siguiendo rigurosamente las pautas descritas en el archivo adjunto `plan.md`.

Contexto y reglas adicionales:
1. Asegúrate de usar la estructura de App Router en Next.js.
2. Los componentes visuales principales deben ser: Navbar, HeroSection, AboutUs, Pillars y ContactForm.
3. El diseño debe ser *mobile-first* y lucir Premium (agrega micro-animaciones, sombras suaves y transiciones donde aplique usando clases de Tailwind).
4. Usa los colores corporativos: Lavanda, Melocotón, Verde, Verde oscuro, Blanco y Negro. Configúralos en `tailwind.config.ts`.
5. El proyecto fue inicializado con `pnpm`. Todos los comandos de instalación de nuevas dependencias deben hacerse con `pnpm`.
6. En el formulario de contacto (`ContactForm`), asume que no hay base de datos y por ahora pon un endpoint falso o muestra en consola los datos enviados.
7. Crea las pruebas automatizadas según el plan: pruebas unitarias con Jest/React Testing Library y pruebas E2E con Playwright.

Por favor, comienza analizando el `plan.md` y luego pregúntame cuál es el primer componente que deseas que construyamos juntos.
