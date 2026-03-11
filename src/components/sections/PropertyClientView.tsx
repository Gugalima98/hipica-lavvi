"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BedDouble, Bath, Car, ArrowLeft, Ruler, CheckCircle2 } from "lucide-react";
import { ImageCarousel } from "@/components/ui/ImageCarousel";

// Copiando a interface pra cá para garantir que o Client Component tem o contrato
interface PropertyClientViewProps {
    property: any;
    otherProperties: any[];
}

export function PropertyClientView({ property, otherProperties }: PropertyClientViewProps) {
    const [isOptionView, setIsOptionView] = useState(false);

    return (
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
                            {/* Floor Plan Display */}
                            <div className="space-y-4">
                                <h1 className="text-3xl lg:text-4xl font-serif font-bold text-primary mb-2">{property.title}</h1>
                                <p className="text-lg text-gray-500 mb-6">{property.description}</p>

                                <div className="flex flex-col gap-6">
                                    <div className="relative aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-inner border border-gray-100 flex items-center justify-center group p-4">
                                        <Image
                                            src={isOptionView && property.images[2] ? property.images[2] : property.images[1]}
                                            alt={`Planta de ${property.title} - Jardim da Hípica`}
                                            fill
                                            className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 1024px) 100vw, 60vw"
                                            priority
                                        />
                                    </div>

                                    {/* View Toggle */}
                                    {property.images[2] && (
                                        <div className="flex justify-center bg-white p-2 rounded-xl border border-gray-200 shadow-sm mx-auto">
                                            <button
                                                className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${!isOptionView ? 'bg-secondary text-white' : 'text-gray-500 hover:text-primary'}`}
                                                onClick={() => setIsOptionView(false)}
                                            >
                                                Planta Padrão
                                            </button>
                                            <button
                                                className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${isOptionView ? 'bg-secondary text-white' : 'text-gray-500 hover:text-primary'}`}
                                                onClick={() => setIsOptionView(true)}
                                            >
                                                Opção Modificada
                                            </button>
                                        </div>
                                    )}
                                </div>
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
                                    {property.features.map((feature: string) => (
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
                                        <Link href={`https://wa.me/5511978519899?text=Olá, gostaria de mais informações sobre o apartamento de ${property.area}m² do Jardim da Hípica.`} target="_blank">
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

            {/* Cross-linking SEO Section */}
            <section className="py-16 bg-muted/30 border-t border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-serif font-bold text-primary">
                            Conheça Outras Plantas no Jardim da Hípica Lavvi
                        </h2>
                        <Link href="/imoveis" className="text-sm font-medium text-secondary hover:underline hidden sm:block" title="Ver todas as plantas e imóveis Jardim da Hípica">
                            Ver todas as plantas &rarr;
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {otherProperties.map((p) => (
                            <Link
                                key={p.slug}
                                href={`/imoveis/${p.slug}`}
                                title={`Ver detalhes e diferenciais da ${p.title} - Jardim da Hípica`}
                                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
                            >
                                <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10" />
                                    <Image
                                        src={p.images[0]}
                                        alt={`Planta ${p.title} - Jardim da Hípica Lavvi`}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="text-xs font-bold tracking-widest text-secondary uppercase mb-2">
                                        {p.tower}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                        {p.area}m² - {p.bedrooms} Dormitórios
                                    </h3>
                                    <p className="text-sm text-gray-500 line-clamp-2">
                                        {p.description}
                                    </p>
                                    <div className="mt-auto pt-4 flex items-center text-sm font-medium text-secondary">
                                        Ver Informações <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="mt-8 text-center sm:hidden">
                        <Button variant="outline" className="w-full h-12 rounded-xl border-gray-200" asChild>
                            <Link href="/imoveis" title="Ver catálogo de imóveis Jardim da Hípica">Ver catálogo completo</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
