
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { properties } from "@/lib/data";
import { BedDouble, Bath, Car, ArrowLeft, Ruler, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";

interface Props {
    params: { slug: string };
}

export function generateStaticParams() {
    return properties.map((property) => ({
        slug: property.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const property = properties.find((p) => p.slug === params.slug);
    if (!property) return { title: "Imóvel não encontrado" };

    return {
        title: `${property.title} | Hípica Lavvi Residences`,
        description: property.description,
    };
}

export default function PropertyDetailsPage({ params }: Props) {
    const property = properties.find((p) => p.slug === params.slug);

    if (!property) {
        notFound();
    }

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": property.title,
        "description": property.description,
        "image": "https://hipicalavvi.com.br/images/hero-home.png", // Use real image URL
        "brand": {
            "@type": "Brand",
            "name": "Lavvi"
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "BRL",
            "availability": "https://schema.org/PreOrder",
            "price": "0" // Price on request
        }
    };

    return (
        <div className="flex min-h-screen flex-col">
            <JsonLd data={productSchema} />
            <Header />
            <main className="flex-1">
                {/* Breadcrumb / Back */}
                <div className="bg-muted/30 py-4 border-b">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <Link href="/imoveis" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Imóveis
                        </Link>
                    </div>
                </div>

                <section className="py-12 lg:py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            {/* Image Gallery Placeholder */}
                            <div className="space-y-4">
                                <div className="aspect-[4/3] bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400">
                                    <span className="text-lg font-medium">Perspectiva Ilustrada / Planta</span>
                                </div>
                                <div className="grid grid-cols-4 gap-4">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="aspect-square bg-gray-100 rounded-lg" />
                                    ))}
                                </div>
                            </div>

                            {/* Details */}
                            <div>
                                <div className="mb-6">
                                    <h1 className="text-3xl font-serif font-bold text-primary sm:text-4xl">{property.title}</h1>
                                    <p className="mt-2 text-xl text-muted-foreground">{property.description}</p>
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 border-y border-border">
                                    <div className="text-center p-4 bg-muted/20 rounded-lg">
                                        <Ruler className="h-6 w-6 text-secondary mx-auto mb-2" />
                                        <span className="block text-sm font-medium text-muted-foreground">Área</span>
                                        <span className="block text-lg font-bold text-primary">{property.area}m²</span>
                                    </div>
                                    <div className="text-center p-4 bg-muted/20 rounded-lg">
                                        <BedDouble className="h-6 w-6 text-secondary mx-auto mb-2" />
                                        <span className="block text-sm font-medium text-muted-foreground">Dormitórios</span>
                                        <span className="block text-lg font-bold text-primary">{property.bedrooms}</span>
                                    </div>
                                    <div className="text-center p-4 bg-muted/20 rounded-lg">
                                        <Bath className="h-6 w-6 text-secondary mx-auto mb-2" />
                                        <span className="block text-sm font-medium text-muted-foreground">Suítes</span>
                                        <span className="block text-lg font-bold text-primary">{property.suites}</span>
                                    </div>
                                    <div className="text-center p-4 bg-muted/20 rounded-lg">
                                        <Car className="h-6 w-6 text-secondary mx-auto mb-2" />
                                        <span className="block text-sm font-medium text-muted-foreground">Vagas</span>
                                        <span className="block text-lg font-bold text-primary">{property.garages}</span>
                                    </div>
                                </div>

                                <div className="py-8">
                                    <h3 className="text-lg font-bold text-primary mb-4">Diferenciais</h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {property.features.map((feature) => (
                                            <li key={feature} className="flex items-center text-gray-700">
                                                <CheckCircle2 className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                                    <h3 className="text-lg font-bold text-primary mb-2">Interessou?</h3>
                                    <p className="text-sm text-gray-600 mb-6">Cadastre-se para receber a planta detalhada em PDF e a tabela de preços deste mês.</p>
                                    <Button size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90" asChild>
                                        <Link href="/contato">Solicitar Tabela e Planta</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
