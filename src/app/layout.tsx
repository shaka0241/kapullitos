import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fundación Kapullitos - Construyendo un futuro más sano",
  description: "Brindamos atención médica integral y contención emocional especializada a niños y niñas en situación de vulnerabilidad.",
  keywords: ["fundación", "kapullitos", "salud infantil", "psicología infantil", "talleres de oficios", "voluntariado"],
  openGraph: {
    title: "Fundación Kapullitos",
    description: "Atención médica y emocional especializada a niños y niñas en situación de vulnerabilidad.",
    url: "https://fundacionkapullitos.org",
    siteName: "Fundación Kapullitos",
    images: [
      {
        url: "/logos/Color/logo_principal_color@4x.png",
        width: 1200,
        height: 630,
        alt: "Fundación Kapullitos - Construyendo un futuro más sano",
      }
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fundación Kapullitos",
    description: "Atención médica y emocional especializada a niños y niñas en situación de vulnerabilidad.",
    images: ["/logos/Color/logo_principal_color@4x.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
