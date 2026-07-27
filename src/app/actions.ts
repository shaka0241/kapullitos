'use server'

export async function submitContactForm(prevState: any, formData: FormData) {
  const nombre = formData.get('nombre');
  const email = formData.get('email');
  const especialidad = formData.get('especialidad');
  const mensaje = formData.get('mensaje');

  // Validaciones
  if (!nombre || !email || !especialidad) {
    return { error: 'Por favor, completa todos los campos requeridos.' };
  }

  // Simulamos un retraso de red
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Aquí se enviaría el correo o conectaría con Formspree / BD real
  console.log('Action received:', { nombre, email, especialidad, mensaje });

  return { success: '¡Gracias por tu interés! Nos pondremos en contacto pronto.' };
}
