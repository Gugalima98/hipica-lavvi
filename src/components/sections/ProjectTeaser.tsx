"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function ProjectTeaser() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    {/* Image Column (Right Aligned, 70% width on Desktop) */}
                    <div className="ml-auto w-full lg:w-[75%] h-[400px] lg:h-[600px] relative rounded-3xl overflow-hidden shadow-2xl">
                        {/* Placeholder Texture/Image */}
                        <Image
                            src="/images/hero-home.png"
                            alt="Jardins da Hípica - Resort Urbano"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content Card (Floating Left, Overlapping) */}
                    <div className="relative mt-[-100px] lg:mt-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-0 lg:w-[45%]">
                        <FadeIn delay={0.2}>
                            <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-gray-100 relative z-10">
                                <span className="inline-block text-secondary tracking-[0.2em] uppercase text-xs font-bold mb-4">
                                    Conceito Exclusivo
                                </span>
                                <h2 className="text-4xl lg:text-5xl font-serif text-primary font-bold mb-6 leading-tight">
                                    Um Resort Urbano <br />
                                    <span className="text-secondary italic">Particular</span>
                                </h2>
                                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                    Esqueça o mundo lá fora. Aqui, cada detalhe foi desenhado para transportar você a um estado de relaxamento absoluto.
                                    São 50.000m² de pura inspiração.
                                </p>
                                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-xl px-8 h-14 text-base w-full sm:w-auto" asChild>
                                    <Link href="/empreendimento">
                                        Explorar o Projeto <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
