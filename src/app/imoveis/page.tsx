import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { properties } from "@/lib/data";
import { BedDouble, Bath, Car, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Plantas e Tipologias | Hípica Lavvi Residences",
    description: "Conheça as opções de plantas de 84m² a 276m² no Hípica Lavvi Residences. Apartamentos de 2 a 4 suítes.",
};

export default function ListingPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 bg-muted/20">
                <section className="bg-primary py-24 sm:py-32">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                        <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-6xl">Escolha o Seu Espaço</h1>
                        <p className="mt-6 text-xl leading-8 text-primary-foreground/80 max-w-2xl mx-auto">
                            Plantas inteligentes e flexíveis, projetadas para oferecer o máximo de conforto e privacidade.
                        </p>
                    </div>
                </section>

                <section className="py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {properties.map((property) => (
                                <div key={property.slug} className="group bg-background rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border">
                                    {/* Image Placeholder */}
                                    <div className="aspect-[16/9] bg-gray-200 relative">
                                        {/* In real app, use Next Image here */}
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                            <span className="text-sm font-medium">Render {property.title}</span>
                                        </div>
                                        <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                            {property.tower}
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                                            {property.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                                            {property.description}
                                        </p>

                                        <div className="mt-6 flex items-center justify-between text-sm text-gray-600">
                                            <div className="flex items-center gap-1">
                                                <BedDouble className="h-4 w-4 text-secondary" />
                                                <span>{property.bedrooms} Dorms</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Bath className="h-4 w-4 text-secondary" />
                                                <span>{property.suites} Suítes</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Car className="h-4 w-4 text-secondary" />
                                                <span>{property.garages} Vagas</span>
                                            </div>
                                        </div>

                                        <div className="mt-6">
                                            <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                                                <Link href={`/imoveis/${property.slug}`}>
                                                    Ver Detalhes <ArrowRight className="ml-2 h-4 w-4" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
