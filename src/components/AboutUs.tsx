import Image from 'next/image';

export default function AboutUs() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-gray-50 flex items-center justify-center border border-gray-100">
             <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-green-kapu)]/10 to-[var(--color-peach)]/10"></div>
             <Image 
                src="/logos/Color/isotipo_1_color.svg" 
                alt="Corazón Kapullitos" 
                width={200} 
                height={200}
                className="opacity-70 object-contain hover:scale-105 transition-transform duration-500" 
             />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Nuestra Historia
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              El proyecto nació del deseo profundo de ayudar a niños, niñas y adolescentes. Inicialmente concebido como un espacio seguro para ofrecer asistencia médica y psicológica junto con talleres de capacitación en oficios, nuestro propósito era brindar herramientas de sustento y una salida de situaciones de vulnerabilidad.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Tras la tragedia del <strong className="text-[var(--color-green-dark)] font-bold">24 de junio</strong>, la fundación aceleró su apertura, adaptando y expandiendo nuestro modelo para atender de manera inmediata a las familias damnificadas, aplicando nuestros principios de sanación integral y apoyo sostenido.
            </p>
            
            <div className="p-6 bg-[var(--color-lavender)]/30 rounded-2xl border border-[var(--color-lavender)]/50 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-[var(--color-lavender)]"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 pl-2">Nuestra Visión</h3>
              <p className="text-gray-700 italic pl-2 leading-relaxed">
                "Aspiramos a expandir nuestro alcance para que ningún niño sufra por falta de atención médica o acompañamiento psicológico, construyendo un futuro con infancias más sanas y plenas."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
