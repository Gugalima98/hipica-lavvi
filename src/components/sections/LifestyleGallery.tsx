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
        alt: "Piscina do Hípica Lavvi",
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
                    {/* Item 1 - Large Left */}
                    <FadeIn delay={0.1} className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl">
                        {/* Placeholder bg */}
                        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500 italic">Imagem: Tennis/Esporte</div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                        <div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-white text-lg font-serif italic">"Aprimore seu saque ao lado de casa."</p>
                        </div>
                    </FadeIn>

                    {/* Item 2 - Small Top Right */}
                    <FadeIn delay={0.2} className="md:col-span-2 relative group overflow-hidden rounded-2xl">
                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500 italic">Imagem: Parque Burle Marx</div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                        <div className="absolute bottom-0 left-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-white font-serif italic">"Manhãs revigorantes."</p>
                        </div>
                    </FadeIn>

                    {/* Item 3 - Small Bottom Right 1 */}
                    <FadeIn delay={0.3} className="md:col-span-1 relative group overflow-hidden rounded-2xl">
                        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500 italic">Imagem: Piscina</div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                        <div className="absolute bottom-0 left-0 p-6">
                            <p className="text-white text-sm font-serif italic">"Um oásis particular."</p>
                        </div>
                    </FadeIn>

                    {/* Item 4 - Small Bottom Right 2 */}
                    <FadeIn delay={0.4} className="md:col-span-1 relative group overflow-hidden rounded-2xl">
                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500 italic">Imagem: Jantar</div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                        <div className="absolute bottom-0 left-0 p-6">
                            <p className="text-white text-sm font-serif italic">"Receba com elegância."</p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
