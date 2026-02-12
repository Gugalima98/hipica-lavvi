import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { FloatingNav } from "@/components/layout/FloatingNav";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hípica Lavvi Residences | Oásis Urbano na Chácara Santo Antônio",
  description: "Lançamento exclusivo Lavvi ao lado do Clube Hípico de Santo Amaro. Apartamentos de 84m² a 276m² com lazer de clube em terreno de 50.000m². Antecipe-se.",
  keywords: ["Hípica Lavvi", "Lavvi Santo Amaro", "Apartamento Chácara Santo Antônio", "Lançamento Imobiliário SP", "Apartamento Alto Padrão"],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://hipicalavvi.com.br",
    title: "Hípica Lavvi Residences | Vivência de Clube Privado",
    description: "Um oásis de 50.000m² entre a Hípica e o Parque Burle Marx.",
    siteName: "Hípica Lavvi Residences",
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      "name": "Hípica Lavvi Residences Vendas",
      "image": "https://hipicalavvi.com.br/images/hero-home.png",
      "telephone": "+55-11-99999-9999",
      "url": "https://hipicalavvi.com.br",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Visconde de Taunay, 140",
        "addressLocality": "São Paulo",
        "addressRegion": "SP",
        "postalCode": "04726-010",
        "addressCountry": "BR"
      },
      "priceRange": "$$$$"
    },
    {
      "@type": "Organization",
      "name": "Lavvi",
      "url": "https://hipicalavvi.com.br",
      "logo": "https://hipicalavvi.com.br/logo.png"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <JsonLd data={jsonLdData} />
      </head>
      <body className={cn(inter.variable, playfair.variable, "font-sans antialiased bg-background text-foreground selection:bg-secondary selection:text-secondary-foreground")}>
        <FloatingNav />
        <Header />
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
