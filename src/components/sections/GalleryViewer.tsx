"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

interface GalleryViewerProps {
    images: string[];
}

function formatTitle(filename: string) {
    return filename
        .replace(".webp", "")
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

export function GalleryViewer({ images }: GalleryViewerProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % images.length);
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
        }
    };

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px] grid-flow-dense">
                {images.map((file, index) => {
                    const isFeatured = index % 5 === 0;
                    const gridClass = isFeatured ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1 md:row-span-1';

                    return (
                        <FadeIn
                            key={file}
                            delay={(index % 8) * 0.05}
                            className={`relative group overflow-hidden rounded-2xl ${gridClass}`}
                        >
                            <div
                                className="absolute inset-0 z-10 cursor-pointer"
                                onClick={() => setSelectedIndex(index)}
                                aria-label={`Ver imagem ampliada`}
                            />
                            <Image
                                src={`/images/galeria/${file}`}
                                alt={`Projeto Jardim da Hípica - ${formatTitle(file)}`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Hover Overlay with text */}
                            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40 flex flex-col justify-end p-4 pointer-events-none">
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-serif text-lg md:text-xl drop-shadow-md translate-y-4 group-hover:translate-y-0 relative z-20">
                                    {formatTitle(file)}
                                </span>
                            </div>
                        </FadeIn>
                    );
                })}
            </div>

            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md"
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
                        className="relative w-full h-[80vh] max-w-7xl flex items-center justify-center transition-all duration-300 px-4 sm:px-16"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={`/images/galeria/${images[selectedIndex]}`}
                            alt={`Imagem ampliada - ${formatTitle(images[selectedIndex])}`}
                            fill
                            className="object-contain"
                            sizes="100vw"
                            priority
                            quality={100}
                        />
                    </div>

                    <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center justify-center text-center z-[110] pointer-events-none px-4 box-border">
                        <h3 className="text-white text-2xl font-serif mb-2 drop-shadow-lg">
                            {formatTitle(images[selectedIndex])}
                        </h3>
                        <div className="text-white/70 tracking-widest text-sm font-light">
                            {selectedIndex + 1} / {images.length}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
