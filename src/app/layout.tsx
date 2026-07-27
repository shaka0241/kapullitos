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
    locale: "es_ES",
    type: "website",
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
