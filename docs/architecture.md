# Arquitectura Técnica: Landing Page Fundación Kapullitos (Fase 1)

## 1. Visión General de la Arquitectura
El objetivo de esta primera fase es desplegar una presencia digital informativa, rápida y segura, orientada a dar a conocer la fundación y captar voluntarios (pediatras, psicólogos, capacitadores). 

Para mantener la simplicidad y reducir los costos operativos, esta arquitectura omite el uso de bases de datos propias y pasarelas de pago, basándose enteramente en un enfoque de **Sitio Estático / Frontend Moderno**.

## 2. Stack Tecnológico Frontend
*   **Framework:** **Next.js** o **React** puro (mediante Vite). Permite modularizar la interfaz en componentes reutilizables (tarjetas de servicios, formulario de contacto, secciones de información) y facilita escalar el proyecto en el futuro si se decide agregar lógica de backend.
*   **Estilos:** **Tailwind CSS**. Garantiza un desarrollo ágil y un diseño *mobile-first*, asegurando que la página cargue rápido y se visualice correctamente en cualquier dispositivo.
*   **Lenguaje:** JavaScript / TypeScript.

## 3. Gestión de Datos y Formularios (Serverless)
Dado que no se implementará una base de datos en esta fase, la recolección de datos (ej. postulaciones de voluntarios) se manejará mediante servicios de terceros que envían la información directamente por correo:
*   **Servicio de Formularios:** **Formspree**, **EmailJS** o **Netlify Forms**. Se integran directamente en el código del frontend mediante un endpoint (URL), sin necesidad de gestionar un servidor propio.

## 4. Despliegue y Alojamiento
*   **Control de Versiones:** **GitHub** o **GitLab**.
*   **Hosting:** **Vercel** o **Cloudflare Pages**. Plataformas ideales para proyectos Next.js/React. Ofrecen un nivel gratuito (Free Tier) robusto, certificados SSL automáticos y despliegue continuo (cada vez que se hace un *push* a la rama principal, la página se actualiza sola).
*   **Alternativa Self-Hosted:** En caso de contar con infraestructura propia (servidores Linux/Ubuntu), el proyecto se puede compilar de forma estática (`npm run build`) y servir mediante **Nginx**, o gestionarlo utilizando herramientas como **pm2** si se requiere ejecutar un servidor Node.js ligero.

## 5. Estructura de Componentes Propuesta
1.  `Navbar`: Navegación principal.
2.  `HeroSection`: Mensaje de impacto (Misión) y botón principal para contacto.
3.  `AboutUs`: Breve historia y origen (tragedia del 24 de junio).
4.  `Pillars`: Tarjetas (Cards) detallando las 4 áreas: Salud Infantil, Emocional, Familiar y Sostenibilidad/Talleres.
5.  `ContactForm`: Formulario para captar alianzas y voluntarios.
6.  `Footer`: Información de contacto básica y redes sociales.