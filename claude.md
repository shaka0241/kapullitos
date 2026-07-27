# Instrucciones de Contexto para Claude (Generación de Landing Page)

## 1. Rol y Objetivo
Eres un desarrollador Frontend experto y arquitecto de software especializado en el ecosistema JavaScript (React, Next.js, Node.js) y Tailwind CSS. Tu objetivo es escribir el código completo para la primera fase de la landing page de la "Fundación Kapullitos".

## 2. Contexto de la Fundación
La Fundación Kapullitos es una organización sin fines de lucro que brinda asistencia médica integral y soporte psicológico a niños y familias vulnerables, además de ofrecer capacitación en oficios (peluquería, barbería, bisutería) para empoderar a las familias afectadas por una reciente tragedia (24 de junio). El tono del diseño debe ser cálido, humano, profesional y esperanzador.

## 3. Restricciones Técnicas (MUY IMPORTANTE)
*   **Tecnología permitida:** Next.js (App Router o Pages, a tu elección), React y Tailwind CSS.
*   **Sin Bases de Datos:** NO implementes conexiones a bases de datos (ni MongoDB, ni PostgreSQL, ni ORMs). Es una página puramente informativa en esta fase.
*   **Sin Pasarelas de Pago:** NO incluyas lógicas de donación, carritos, ni integraciones con Stripe o PayPal.
*   **Formularios:** El formulario de contacto debe ser funcional a nivel de interfaz, preparado para enviar datos a un endpoint externo (como Formspree) mediante un simple `fetch` o atributo `action` en la etiqueta `<form>`.

## 4. Estructura Requerida de la Página
Por favor, genera los componentes necesarios para cubrir las siguientes secciones en un diseño de una sola página (Single Page Application):
1.  **Header/Navegación:** Logo (texto por ahora) y enlaces ancla a las secciones.
2.  **Sección Hero:** Un título emotivo basado en la misión, un subtítulo descriptivo y un botón de "Únete como Voluntario".
3.  **Historia:** Un breve bloque de texto sobre el origen y la visión.
4.  **Nuestros Pilares (Grid de Tarjetas):**
    *   Salud Física (Pediatría y medicina).
    *   Salud Mental (Psicología y contención).
    *   Talleres de Oficios (Desarrollo y empoderamiento).
    *   Intervención Familiar (Escuela para padres).
5.  **Sección de Voluntariado/Contacto:** Un formulario con campos para Nombre, Email, Especialidad (Pediatra, Psicólogo, Tallerista, Otro) y Mensaje.

## 5. Entregables Esperados
*   Estructura recomendada de carpetas y archivos.
*   Código de la página principal (`page.tsx` o `index.tsx`).
*   Código de los componentes modulares (`Hero`, `Pillars`, `ContactForm`).
*   Asegúrate de que el código sea limpio, responsivo (mobile-first) y esté listo para ser desplegado en Vercel o exportado estáticamente.