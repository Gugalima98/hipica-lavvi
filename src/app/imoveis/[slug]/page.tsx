
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { properties } from "@/lib/data";
import { BedDouble, Bath, Car, ArrowLeft, Ruler, CheckCircle2 } from "lucide-react";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
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
    if (!property) {
        return {
            title: "Imóvel não encontrado | Jardins da Hípica",
        };
    }

    return {
        title: `${property.title} | Jardins da Hípica`,
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
        "image": "https://www.jardinsdahipica.com/images/hero-home.png", // Use real image URL
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
            <main className="flex-1">
                {/* Breadcrumb / Back */}
                <div className="bg-muted/30 py-4 border-b">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <Link href="/imoveis" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Imóveis
                        </Link>
                    </div>
                </div>

                <section className="py-12 lg:py-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                            {/* Left Column: Gallery & Highlights (lg:col-span-7) */}
                            <div className="lg:col-span-7 space-y-12">
                                {/* Carousel */}
                                <div className="space-y-4">
                                    <h1 className="text-3xl lg:text-4xl font-serif font-bold text-primary mb-2">{property.title}</h1>
                                    <p className="text-lg text-gray-500 mb-6">{property.description}</p>
                                    <ImageCarousel images={property.images} alt={property.title} />
                                </div>

                                {/* Tower Specs */}
                                <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                                    <h3 className="text-xl font-bold text-primary mb-6 flex items-center">
                                        <Ruler className="mr-2 h-6 w-6 text-secondary" />
                                        Ficha Técnica da Torre
                                    </h3>
                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                                        <div className="p-4 bg-muted/20 rounded-xl">
                                            <span className="block text-xs uppercase tracking-wider text-muted-foreground mb-1">Torre</span>
                                            <span className="font-bold text-primary text-lg">{property.tower}</span>
                                        </div>
                                        <div className="p-4 bg-muted/20 rounded-xl">
                                            <span className="block text-xs uppercase tracking-wider text-muted-foreground mb-1">Pavimentos</span>
                                            <span className="font-bold text-primary text-lg">{property.towerDetails?.floors || "43"}</span>
                                        </div>
                                        <div className="p-4 bg-muted/20 rounded-xl">
                                            <span className="block text-xs uppercase tracking-wider text-muted-foreground mb-1">Unidades/Andar</span>
                                            <span className="font-bold text-primary text-lg">{property.towerDetails?.unitsPerFloor}</span>
                                        </div>
                                        <div className="p-4 bg-muted/20 rounded-xl">
                                            <span className="block text-xs uppercase tracking-wider text-muted-foreground mb-1">Elevadores</span>
                                            <span className="font-bold text-primary text-lg">{property.towerDetails?.elevators || "Social+Serviço"}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Features List */}
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-6">Diferenciais da Unidade</h3>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {property.features.map((feature) => (
                                            <li key={feature} className="flex items-start p-4 bg-stone-50 rounded-lg">
                                                <CheckCircle2 className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700 font-medium">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Right Column: Sticky Summary & CTA (lg:col-span-5) */}
                            <div className="lg:col-span-5">
                                <div className="sticky top-8 bg-white border border-gray-100 rounded-2xl p-8 shadow-xl">
                                    <div className="text-center mb-8 pb-8 border-b border-gray-100">
                                        <span className="block text-sm font-medium text-gray-500 uppercase tracking-widest mb-2">Área Privativa</span>
                                        <div className="flex items-center justify-center gap-1">
                                            <span className="text-6xl font-serif font-bold text-primary">{property.area}</span>
                                            <span className="text-2xl text-gray-400 mt-4">m²</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4 mb-8">
                                        <div className="text-center">
                                            <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-2 text-secondary">
                                                <BedDouble size={20} />
                                            </div>
                                            <span className="block text-sm font-bold text-gray-900">{property.bedrooms} Dorms</span>
                                            <span className="text-xs text-gray-500">({property.suites} Suítes)</span>
                                        </div>
                                        <div className="text-center border-x border-gray-100">
                                            <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-2 text-secondary">
                                                <Car size={20} />
                                            </div>
                                            <span className="block text-sm font-bold text-gray-900">{property.garages} Vagas</span>
                                            <span className="text-xs text-gray-500">Determinadas</span>
                                        </div>
                                        <div className="text-center">
                                            <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-2 text-secondary">
                                                <Bath size={20} />
                                            </div>
                                            <span className="block text-sm font-bold text-gray-900">{property.bathrooms} Banhos</span>
                                            <span className="text-xs text-gray-500">Total</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-lg rounded-xl shadow-lg shadow-primary/20" asChild>
                                            <Link href={`https://wa.me/5511978519899?text=Olá, gostaria de mais informações sobre o apartamento de ${property.area}m² do Jardins da Hípica.`} target="_blank">
                                                Falar no WhatsApp
                                            </Link>
                                        </Button>
                                    </div>

                                    <p className="text-xs text-center text-gray-400 mt-6">
                                        * Valores e disponibilidade sujeitos a alteração sem aviso prévio. As imagens são perspectivas artísticas.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
