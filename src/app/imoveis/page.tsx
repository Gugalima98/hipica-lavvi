
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { properties } from "@/lib/data";
import { BedDouble, Bath, Car, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
    title: "Plantas e Tipologias | Jardins da Hípica",
    description: "Conheça as opções de plantas do Jardins da Hípica: 84m² a 276m².",
};

export default function ImoveisPage() {
    return (
        <div className="bg-background min-h-screen">
            <section className="bg-primary/5 py-24 sm:py-32 relative overflow-hidden bg-grain">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <FadeIn>
                        <h1 className="text-4xl font-serif font-bold tracking-tight text-primary sm:text-6xl mb-6">
                            Plantas Exclusivas
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                            Escolha a planta ideal para o seu estilo de vida no Jardins da Hípica.
                        </p>
                    </FadeIn>
                </div>
            </section>

            <section className="py-24 bg-stone-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {properties.map((property, idx) => (
                            <FadeIn key={property.slug} delay={idx * 0.1}>
                                <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
                                    {/* Image Placeholder */}
                                    <div className="aspect-[16/9] bg-gray-200 relative overflow-hidden group">
                                        <Image
                                            src={property.images[0]}
                                            alt={`Perspectiva ${property.title}`}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />

                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm z-10">
                                            {property.tower}
                                        </div>
                                    </div>

                                    <div className="p-8 flex flex-col flex-1">
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-serif font-bold text-primary group-hover:text-secondary transition-colors mb-3">
                                                {property.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed mb-6">
                                                {property.description}
                                            </p>

                                            <div className="flex items-center justify-between text-sm text-gray-500 py-6 border-y border-gray-100 mb-6">
                                                <div className="flex flex-col items-center gap-1">
                                                    <BedDouble className="h-5 w-5 text-secondary mb-1" />
                                                    <span>{property.bedrooms} Dorms</span>
                                                </div>
                                                <div className="w-px h-8 bg-gray-100" />
                                                <div className="flex flex-col items-center gap-1">
                                                    <Bath className="h-5 w-5 text-secondary mb-1" />
                                                    <span>{property.suites} Suítes</span>
                                                </div>
                                                <div className="w-px h-8 bg-gray-100" />
                                                <div className="flex flex-col items-center gap-1">
                                                    <Car className="h-5 w-5 text-secondary mb-1" />
                                                    <span>{property.garages} Vagas</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <Button size="lg" className="w-full bg-primary hover:bg-primary/90 rounded-xl h-12 text-base" asChild>
                                                <Link href={`/imoveis/${property.slug}`}>
                                                    Ver Detalhes e Planta <ArrowRight className="ml-2 h-4 w-4" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
