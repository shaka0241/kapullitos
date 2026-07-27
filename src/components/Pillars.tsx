const pillars = [
  {
    title: "Salud Física",
    description: "Pediatría, medicina general y control de niño sano para garantizar el desarrollo físico óptimo.",
    icon: "🩺",
    color: "bg-blue-50 text-blue-700 border-blue-100",
    shadow: "hover:shadow-blue-100"
  },
  {
    title: "Salud Mental",
    description: "Psicología infantil, terapia de juego y espacios seguros para la sanación de traumas y estrés.",
    icon: "🧠",
    color: "bg-purple-50 text-purple-700 border-purple-100",
    shadow: "hover:shadow-purple-100"
  },
  {
    title: "Desarrollo",
    description: "Talleres de oficios (peluquería, bisutería) para dotar a las familias de herramientas de autosustento.",
    icon: "🛠️",
    color: "bg-orange-50 text-orange-700 border-orange-100",
    shadow: "hover:shadow-orange-100"
  },
  {
    title: "Familia",
    description: "Escuela para padres y orientación psicológica, porque el bienestar depende de un entorno sano.",
    icon: "👨‍👩‍👧‍👦",
    color: "bg-green-50 text-green-700 border-green-100",
    shadow: "hover:shadow-green-100"
  }
];

export default function Pillars() {
  return (
    <section id="pilares" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Nuestros Pilares de Acción</h2>
          <p className="text-lg text-gray-600">
            Operamos bajo un modelo de atención integral que busca sanar heridas físicas y emocionales.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group ${pillar.shadow}`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 ${pillar.color} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
