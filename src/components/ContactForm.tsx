'use client';
import { useActionState } from 'react';
import { submitContactForm } from '@/app/actions';

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null);

  return (
    <section id="contacto" className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-50/50 -z-10"></div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-peach)] rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          
          <div className="text-center mb-10 relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Únete como Voluntario</h2>
            <p className="text-lg text-gray-600">
              Tu ayuda es fundamental. Regístrate y sé parte de la reconstrucción de nuestro futuro.
            </p>
          </div>
          
          <form action={formAction} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-2">Nombre completo</label>
                <input required type="text" id="nombre" name="nombre" aria-label="Nombre completo" aria-invalid={state?.error ? "true" : "false"} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--color-green-kapu)] focus:border-transparent transition-all outline-none" placeholder="Ej. Ana Pérez" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Correo electrónico</label>
                <input required type="email" id="email" name="email" aria-label="Correo electrónico" aria-invalid={state?.error ? "true" : "false"} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--color-green-kapu)] focus:border-transparent transition-all outline-none" placeholder="ejemplo@correo.com" />
              </div>
            </div>
            
            <div>
              <label htmlFor="especialidad" className="block text-sm font-semibold text-gray-700 mb-2">Especialidad / Área de interés</label>
              <select required id="especialidad" name="especialidad" aria-label="Especialidad o Área de interés" aria-invalid={state?.error ? "true" : "false"} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--color-green-kapu)] focus:border-transparent transition-all outline-none bg-white">
                <option value="">Selecciona una opción</option>
                <option value="pediatria">Pediatría / Medicina General</option>
                <option value="psicologia">Psicología / Salud Mental</option>
                <option value="talleres">Tallerista (Oficios, Educación)</option>
                <option value="logistica">Logística y Apoyo General</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-700 mb-2">Mensaje (Opcional)</label>
              <textarea id="mensaje" name="mensaje" aria-label="Mensaje opcional" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--color-green-kapu)] focus:border-transparent transition-all outline-none resize-none" placeholder="Cuéntanos un poco sobre ti y cómo te gustaría ayudar..."></textarea>
            </div>
            
            <button type="submit" disabled={isPending} aria-busy={isPending} className="w-full bg-[var(--color-green-kapu)] text-white font-bold text-lg py-4 rounded-xl hover:bg-[var(--color-green-dark)] shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed">
              {isPending ? 'Enviando Solicitud...' : 'Enviar Solicitud'}
            </button>
            
            {state?.success && (
              <div role="alert" className="mt-4 p-4 bg-green-50 text-green-700 rounded-xl text-center font-medium animate-pulse">
                {state.success}
              </div>
            )}
            {state?.error && (
              <div role="alert" className="mt-4 p-4 bg-red-50 text-red-700 rounded-xl text-center font-medium">
                {state.error}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
