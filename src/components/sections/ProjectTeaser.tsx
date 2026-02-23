"use client";

import { useState, useRef } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";

export function ProjectTeaser() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);

    const toggleSound = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <section className="bg-stone-50 overflow-hidden">
            {/* Split Layout Container */}
            <div className="flex flex-col lg:flex-row min-h-[600px] lg:h-screen lg:max-h-[900px]">

                {/* Text Content - Left Side (Order 2 on Mobile, Order 1 on Desktop) */}
                <div className="w-full lg:w-[60%] flex items-center justify-center p-8 md:p-12 lg:p-20 order-2 lg:order-1 bg-white relative">
                    <FadeIn className="max-w-xl">
                        <span className="inline-block text-secondary tracking-[0.2em] uppercase text-xs font-bold mb-6">
                            Conceito Exclusivo
                        </span>
                        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-primary font-bold mb-8 leading-tight">
                            Um Resort Urbano <br />
                            <span className="text-secondary italic">Particular</span>
                        </h2>
                        <p className="text-gray-600 text-lg lg:text-xl mb-10 leading-relaxed font-light">
                            Esqueça o mundo lá fora. Aqui, cada detalhe foi desenhado para transportar você a um estado de relaxamento absoluto.
                            São 50.000m² de pura inspiração, onde a natureza se encontra com o design contemporâneo.
                        </p>
                        <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-full px-10 h-14 text-base w-full sm:w-auto shadow-xl shadow-primary/20 transition-transform hover:scale-105" asChild>
                            <Link href="/empreendimento">
                                Explorar o Projeto <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </FadeIn>
                </div>

                {/* Video - Right Side (Order 1 on Mobile, Order 2 on Desktop) */}
                <div className="w-full lg:w-[40%] relative h-[500px] lg:h-auto order-1 lg:order-2 bg-stone-900 group">
                    <video
                        ref={videoRef}
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="/Captions_572A17.MP4" type="video/mp4" />
                        Seu navegador não suporta vídeos HTML5.
                    </video>

                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-black/10 pointer-events-none" />

                    {/* Sound Toggle Button */}
                    <button
                        onClick={toggleSound}
                        className="absolute bottom-8 right-8 z-20 p-3 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20 hover:bg-white/20 transition-all duration-300 group/btn"
                        aria-label={isMuted ? "Ativar som" : "Desativar som"}
                    >
                        {isMuted ? (
                            <VolumeX className="w-6 h-6" />
                        ) : (
                            <Volume2 className="w-6 h-6" />
                        )}
                    </button>
                </div>

            </div>
        </section>
    );
}
