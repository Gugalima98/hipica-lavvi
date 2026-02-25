"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

const galleryImages = [
    "/images/novas imagens/PRELIMINAR_2_HIPICA_page-0002.jpg",
    "/images/novas imagens/PRELIMINAR_2_HIPICA_page-0003.jpg",
    "/images/novas imagens/PRELIMINAR_2_HIPICA_page-0004.jpg",
    "/images/novas imagens/PRELIMINAR_2_HIPICA_page-0005.jpg",
    "/images/novas imagens/PRELIMINAR_2_HIPICA_page-0006.jpg",
    "/images/novas imagens/PRELIMINAR_2_HIPICA_page-0007.jpg",
    "/images/novas imagens/PRELIMINAR_2_HIPICA_page-0008.jpg",
    "/images/novas imagens/PRELIMINAR_2_HIPICA_page-0009.jpg",
    "/images/novas imagens/PRELIMINAR_2_HIPICA_page-0010.jpg",
    "/images/novas imagens/PRELIMINAR_2_HIPICA_page-0011.jpg",
    "/images/novas imagens/PRELIMINAR_2_HIPICA_page-0012.jpg",
    "/images/novas imagens/PRELIMINAR_2_HIPICA_page-0013.jpg",
    "/images/novas imagens/PRELIMINAR_2_HIPICA_page-0014.jpg",
    "/images/novas imagens/PRELIMINAR_2_HIPICA_page-0015.jpg",
    "/images/novas imagens/PRELIMINAR_2_HIPICA_page-0016.jpg",
];

const gridClasses = [
    "md:col-span-2 md:row-span-2",
    "md:col-span-1 md:row-span-1",
    "md:col-span-1 md:row-span-1",
    "md:col-span-1 md:row-span-2",
    "md:col-span-2 md:row-span-1",
    "md:col-span-1 md:row-span-1",
    "md:col-span-1 md:row-span-1",
    "md:col-span-2 md:row-span-2",
    "md:col-span-1 md:row-span-1",
    "md:col-span-1 md:row-span-2",
    "md:col-span-2 md:row-span-1",
    "md:col-span-1 md:row-span-1",
    "md:col-span-1 md:row-span-1",
    "md:col-span-2 md:row-span-2",
    "md:col-span-1 md:row-span-1",
];

export function LifestyleGallery() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % galleryImages.length);
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
        }
    };

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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px] grid-flow-dense">
                    {galleryImages.map((src, index) => (
                        <FadeIn
                            key={index}
                            delay={0.1 * (index % 4)}
                            className={`relative group overflow-hidden rounded-2xl ${gridClasses[index % gridClasses.length]}`}
                        >
                            <div
                                className="absolute inset-0 z-10 cursor-pointer"
                                onClick={() => setSelectedIndex(index)}
                                aria-label={`Ver galeria de imagens ${index + 1}`}
                            />
                            <Image
                                src={src}
                                alt={`Galeria de Imagens ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20 flex items-center justify-center pointer-events-none">
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white border border-white/50 backdrop-blur-sm px-6 py-2 rounded-full uppercase text-xs tracking-widest">
                                    Ampliar
                                </span>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>

            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-md"
                    onClick={() => setSelectedIndex(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110] p-2"
                        onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
                        aria-label="Fechar galeria"
                    >
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <button
                        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-[110] p-4 bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-sm"
                        onClick={prevImage}
                        aria-label="Imagem anterior"
                    >
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-[110] p-4 bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-sm"
                        onClick={nextImage}
                        aria-label="Próxima imagem"
                    >
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <div
                        className="relative w-full h-full max-w-7xl max-h-[85vh] flex items-center justify-center transition-all duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={galleryImages[selectedIndex]}
                            alt={`Imagem ampliada ${selectedIndex + 1}`}
                            fill
                            className="object-contain"
                            sizes="100vw"
                            priority
                            quality={100}
                        />
                    </div>

                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 tracking-widest text-sm font-light z-[110]">
                        {selectedIndex + 1} / {galleryImages.length}
                    </div>
                </div>
            )}
        </section>
    );
}
