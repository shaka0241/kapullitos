import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/logos/Color/logo_principal_color.svg" 
              alt="Fundación Kapullitos Logo" 
              width={160} 
              height={60} 
              className="object-contain"
              priority
            />
          </Link>
          <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            <Link href="#nosotros" className="hover:text-[var(--color-green-kapu)] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-green-kapu)] focus-visible:ring-offset-2 rounded-sm px-1">Nosotros</Link>
            <Link href="#pilares" className="hover:text-[var(--color-green-kapu)] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-green-kapu)] focus-visible:ring-offset-2 rounded-sm px-1">Pilares</Link>
            <Link href="#contacto" className="bg-[var(--color-green-kapu)] text-white px-6 py-2.5 rounded-full hover:bg-[var(--color-green-dark)] hover:-translate-y-0.5 shadow-md hover:shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-green-dark)] focus-visible:ring-offset-2">
              Voluntariado
            </Link>
          </div>
          {/* Mobile menu button could go here */}
        </div>
      </div>
    </nav>
  );
}
