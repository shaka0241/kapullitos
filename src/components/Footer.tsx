import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-green-dark)] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Image 
              src="/logos/Blanco/logo_principal_blanco.svg" 
              alt="Fundación Kapullitos Logo" 
              width={180} 
              height={70} 
              className="mb-6 object-contain"
            />
            <p className="text-sm text-gray-200 leading-relaxed">
              Brindamos atención médica integral y contención emocional especializada a niños y niñas en situación de vulnerabilidad, construyendo un futuro más sano y pleno.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[var(--color-peach)]">Navegación</h3>
            <ul className="space-y-3 text-gray-100">
              <li><Link href="#nosotros" className="hover:text-[var(--color-lavender)] hover:translate-x-1 inline-block transition-transform duration-300">Nuestra Historia</Link></li>
              <li><Link href="#pilares" className="hover:text-[var(--color-lavender)] hover:translate-x-1 inline-block transition-transform duration-300">Pilares de Acción</Link></li>
              <li><Link href="#contacto" className="hover:text-[var(--color-lavender)] hover:translate-x-1 inline-block transition-transform duration-300">Únete como Voluntario</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[var(--color-peach)]">Contacto</h3>
            <p className="text-gray-200 mb-2 text-sm leading-relaxed">Si deseas apoyar nuestra causa o tienes alguna consulta, escríbenos a través del formulario de voluntarios.</p>
            <p className="text-gray-300 text-xs mt-6">&copy; {new Date().getFullYear()} Fundación Kapullitos. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
