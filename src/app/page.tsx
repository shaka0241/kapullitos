import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import Pillars from "@/components/Pillars";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Fundación Kapullitos",
    "url": "https://fundacionkapullitos.org",
    "logo": "https://fundacionkapullitos.org/logos/Color/logo_principal_color@4x.png",
    "description": "Brindamos atención médica integral y contención emocional especializada a niños y niñas en situación de vulnerabilidad.",
    "sameAs": [
      "https://www.instagram.com/fundacionkapullitos",
      "https://www.facebook.com/fundacionkapullitos"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Atención al donante / Voluntariado",
      "email": "contacto@fundacionkapullitos.org",
      "availableLanguage": "Spanish"
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Pillars />
      <ContactForm />
      <Footer />
    </main>
  );
}
