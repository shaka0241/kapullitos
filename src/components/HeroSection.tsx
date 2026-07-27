import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-[var(--color-lavender)]/30 to-[var(--color-peach)]/20">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--color-peach)] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-48 -left-24 w-72 h-72 bg-[var(--color-lavender)] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="inline-block py-1.5 px-4 rounded-full bg-[var(--color-green-kapu)]/15 text-[var(--color-green-dark)] text-sm font-bold mb-6 tracking-wider uppercase shadow-sm">
          Construyendo un futuro más sano
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-8 leading-tight">
          Protegemos la salud <br className="hidden sm:block" />
          <span className="text-[var(--color-green-kapu)]">física y emocional</span> de la infancia
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
          Ofrecemos asistencia médica integral, soporte psicológico y un entorno seguro para que los niños y sus familias puedan sanar, crecer y alcanzar su máximo potencial.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="#contacto" className="bg-[var(--color-green-kapu)] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[var(--color-green-dark)] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            Únete como Voluntario
          </Link>
          <Link href="#nosotros" className="bg-white text-gray-800 px-8 py-4 rounded-full text-lg font-semibold border border-gray-200 hover:border-gray-300 hover:bg-gray-50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            Conoce nuestra historia
          </Link>
        </div>
      </div>
    </section>
  );
}
