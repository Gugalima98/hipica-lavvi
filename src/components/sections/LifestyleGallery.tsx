"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

const galleryImages = [
    "/images/galeria/fachada-torre-cjpg.webp",
    "/images/galeria/piscina-coberta-ef-v2.webp",
    "/images/galeria/piscina-60m-c.webp",
    "/images/galeria/eixo-jardim-ef3.webp",
    "/images/galeria/quadra-tenis.webp",
    "/images/galeria/spa-clube-c-ef-hpc-81.webp",
    "/images/galeria/quadras-recreativas.webp",
    "/images/galeria/playground.webp",
    "/images/galeria/festas-ta-c.webp",
    "/images/galeria/fitness-clube-b-ef.webp",
    "/images/galeria/private-house-ta.webp",
    "/images/galeria/brinquedoteca-tc-a-ef2.webp",
    "/images/galeria/salao-de-jogos-ta.webp",
    "/images/galeria/bar-piscina.webp",
    "/images/galeria/transfer-chegada.webp"
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
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

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
                    {galleryImages.map((src, index) => {
                        const isVideoThumb = index === 0;

                        return (
                            <FadeIn
                                key={index}
                                delay={0.1 * (index % 4)}
                                className={`relative group overflow-hidden rounded-2xl ${gridClasses[index % gridClasses.length]}`}
                            >
                                <div
                                    className="absolute inset-0 z-10 cursor-pointer"
                                    onClick={() => isVideoThumb ? setIsVideoModalOpen(true) : setSelectedIndex(index)}
                                    aria-label={isVideoThumb ? "Assistir ao Filme do Produto" : `Ver galeria de imagens ${index + 1}`}
                                />
                                <Image
                                    src={src}
                                    alt={`Galeria de Imagens ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />

                                {/* Overlay para a capa do video */}
                                {isVideoThumb && (
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-colors duration-300 group-hover:bg-black/50 pointer-events-none z-20">
                                        <div className="flex flex-col items-center">
                                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 mb-3 group-hover:scale-110 transition-transform duration-300">
                                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span className="text-white font-serif uppercase tracking-widest text-sm font-semibold drop-shadow-md">
                                                Assista ao Filme
                                            </span>
                                        </div>
                                    </div>
                                )}

                                {/* Overlay padrão de ampliar imagens */}
                                {!isVideoThumb && (
                                    <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20 flex items-center justify-center pointer-events-none">
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white border border-white/50 backdrop-blur-sm px-6 py-2 rounded-full uppercase text-xs tracking-widest">
                                            Ampliar
                                        </span>
                                    </div>
                                )}
                            </FadeIn>
                        )
                    })}
                </div>

                <div className="mt-16 text-center">
                    <FadeIn delay={0.4}>
                        <Link href="/galeria" className="inline-block bg-primary text-white font-serif px-8 py-4 rounded-full hover:bg-primary/90 transition-colors tracking-widest text-sm">
                            VER GALERIA COMPLETA
                        </Link>
                    </FadeIn>
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

            {isVideoModalOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-md"
                    onClick={() => setIsVideoModalOpen(false)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110] p-2"
                        onClick={(e) => { e.stopPropagation(); setIsVideoModalOpen(false); }}
                        aria-label="Fechar vídeo"
                    >
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div
                        className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <video
                            autoPlay
                            controls
                            className="w-full h-full outline-none"
                            poster="/images/galeria/piscina-60m-c.webp"
                        >
                            <source src="/videos/filme-produto.mp4" type="video/mp4" />
                            Seu navegador não suporta a tag de vídeo.
                        </video>
                    </div>
                </div>
            )}
        </section>
    );
}
