"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

const galleryItems = [
    {
        src: "/images/gallery/tennis.jpg", // Placeholder
        alt: "Quadras de Tênis no Clube Hípico",
        caption: "Aprimore seu saque ao lado de casa.",
        size: "large", // spans 2 cols
    },
    {
        src: "/images/gallery/park.jpg", // Placeholder
        alt: "Parque Burle Marx",
        caption: "Manhãs revigorantes em contato com a natureza.",
        size: "small",
    },
    {
        src: "/images/gallery/pool.jpg", // Placeholder
        alt: "Piscina do Jardins da Hípica",
        caption: "Mergulhe em um oásis particular.",
        size: "small",
    },
    {
        src: "/images/gallery/dinner.jpg", // Placeholder
        alt: "Jantar na Varanda Gourmet",
        caption: "Receba amigos com elegância e conforto.",
        size: "wide", // spans 2 cols, small height
    },
];

export function LifestyleGallery() {
    return (
        <section className="py-24 bg-stone-50 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-3">
                        Estilo de Vida
                    </h2>
                    <h3 className="font-serif text-4xl text-primary mb-6">
                        Viva a Exclusividade
                    </h3>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        Mais do que um apartamento, um convite para viver os melhores momentos da sua vida.
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
                    {/* Item 1 - Large Left - Piscina/Lazer */}
                    <FadeIn delay={0.1} className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl">
                        <Image
                            src="/images/empreendimento/Hipica_Book_pages-to-jpg-0030.jpg"
                            alt="Área de Lazer Jardins da Hípica"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                        <div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-white text-lg font-serif italic">"Mergulhe em um oásis particular."</p>
                        </div>
                    </FadeIn>

                    {/* Item 2 - Large Top Right - Fachada/Porte Cochère */}
                    <FadeIn delay={0.2} className="md:col-span-2 relative group overflow-hidden rounded-2xl">
                        <Image
                            src="/images/empreendimento/Hipica_Book_pages-to-jpg-0014.jpg"
                            alt="Fachada Jardins da Hípica"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                        <div className="absolute bottom-0 left-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-white font-serif italic">"Imponência e exclusividade."</p>
                        </div>
                    </FadeIn>

                    {/* Item 3 - Small Bottom Right 1 - Interiores/Living */}
                    <FadeIn delay={0.3} className="md:col-span-1 relative group overflow-hidden rounded-2xl">
                        <Image
                            src="/images/empreendimento/Hipica_Book_pages-to-jpg-0020.jpg"
                            alt="Interiores Jardins da Hípica"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                        <div className="absolute bottom-0 left-0 p-6">
                            <p className="text-white text-sm font-serif italic">"Design sofisticado."</p>
                        </div>
                    </FadeIn>

                    {/* Item 4 - Small Bottom Right 2 - Outro detalhe */}
                    <FadeIn delay={0.4} className="md:col-span-1 relative group overflow-hidden rounded-2xl">
                        <Image
                            src="/images/empreendimento/Hipica_Book_pages-to-jpg-0025.jpg"
                            alt="Detalhes Jardins da Hípica"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                        <div className="absolute bottom-0 left-0 p-6">
                            <p className="text-white text-sm font-serif italic">"Acabamentos premium."</p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
