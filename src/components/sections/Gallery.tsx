"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

const images = [
    { src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop", alt: "Fachada imponente ao entardecer", span: "row-span-2 col-span-2" },
    { src: "https://images.unsplash.com/photo-1600596542815-e32caca73783?q=80&w=1200&auto=format&fit=crop", alt: "Living ampliado com vista panorâmica", span: "row-span-1 col-span-1" },
    { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop", alt: "Suíte Master com closet", span: "row-span-1 col-span-1" },
    { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop", alt: "Área Gourmet integrada", span: "row-span-1 col-span-2" },
    { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop", alt: "Piscina com borda infinita", span: "row-span-2 col-span-1" },
    { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop", alt: "Lobby com pé-direito duplo", span: "row-span-1 col-span-1" },
];

export function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section className="bg-muted/30 py-24 sm:py-32" id="galeria">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-sm font-medium tracking-[0.2em] text-secondary uppercase mb-3">
                        Experiência Visual
                    </h2>
                    <p className="text-3xl font-serif font-light tracking-tight text-primary sm:text-5xl">
                        Cada Detalhe, Uma Obra de Arte
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={cn(
                                "relative group overflow-hidden rounded-xl cursor-zoom-in",
                                img.span || "row-span-1 col-span-1"
                            )}
                            onClick={() => setSelectedImage(img.src)}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <ZoomIn className="text-white w-10 h-10 opacity-80" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-white text-sm font-medium">{img.alt}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-6xl aspect-video rounded-lg overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Visualização ampliada"
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
