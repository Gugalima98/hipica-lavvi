import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { FloatingNav } from "@/components/layout/FloatingNav";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
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
  metadataBase: new URL("https://www.jardinsdahipica.com"),
  title: {
    default: "Jardins da Hípica | Oásis Urbano em Frente à Hípica Santo Amaro",
    template: "%s | Jardins da Hípica",
  },
  description: "Lançamento exclusivo Lavvi em frente à Hípica Santo Amaro. Apartamentos de 84m² a 276m² com vista eterna e lazer de clube em terreno de 50.000m². Antecipe-se.",
  keywords: ["Jardins da Hípica", "Lavvi Santo Amaro", "Apartamento Chácara Santo Antônio", "Lançamento Imobiliário SP", "Apartamento Alto Padrão"],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.jardinsdahipica.com",
    title: "Jardins da Hípica | Vivência de Clube Privado",
    description: "Um oásis de 50.000m² em frente à Hípica Santo Amaro.",
    siteName: "Jardins da Hípica",
    images: [
      {
        url: "/images/hero-home.png",
        width: 1200,
        height: 630,
        alt: "Jardins da Hípica - Oásis Urbano",
      }
    ]
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      "name": "Jardins da Hípica Vendas",
      "image": "https://www.jardinsdahipica.com/images/hero-home.png",
      "telephone": "+55-11-99999-9999",
      "url": "https://www.jardinsdahipica.com",
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
      "url": "https://www.jardinsdahipica.com",
      "logo": "https://www.jardinsdahipica.com/logo.png"
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
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
