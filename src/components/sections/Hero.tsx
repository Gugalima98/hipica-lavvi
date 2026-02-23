"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/FadeIn";

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-primary bg-grain">
            {/* Background Image with slow zoom effect */}
            <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, ease: "easeOut" }}
            >
                <Image
                    src="/images/hero.webp"
                    alt="Jardins da Hípica - Vista aérea do complexo com piscinas e área verde"
                    fill
                    className="object-cover"
                    priority
                    fetchPriority="high"
                    sizes="100vw"
                    quality={75}
                />
                {/* Advanced Gradient Overlay for maximum readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40" />
            </motion.div>

            {/* Content */}
            <div className="relative container mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl pt-20">
                    <FadeIn delay={0.2} direction="right" className="flex items-center gap-4 mb-6">
                        <div className="h-[1px] w-12 bg-secondary" />
                        <span className="text-sm font-medium tracking-[0.3em] text-secondary uppercase drop-shadow-md">
                            Breve Lançamento
                        </span>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <h1 className="font-serif text-5xl font-light tracking-wide text-white sm:text-7xl lg:text-8xl leading-[1.1] drop-shadow-lg">
                            Oásis Urbano <br />
                            <span className="font-medium italic text-white relative">
                                Jardins da Hípica
                                <span className="absolute -bottom-2 left-0 w-full h-1 bg-secondary rounded-full shadow-[0_0_15px_rgba(197,160,89,0.5)]"></span>
                            </span>
                        </h1>
                        <div className="mt-4 mb-2">
                            <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 border border-secondary/50 text-secondary text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
                                Em frente à Hípica Santo Amaro • Vista Eterna
                            </span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.6}>
                        <p className="mt-8 max-w-xl text-lg font-light text-white/90 sm:text-xl leading-relaxed border-l-2 border-secondary pl-6 drop-shadow-md">
                            Descubra o privilégio de viver em um terreno raro de 50.000m² com lazer de clube internacional.
                            Apartamentos de 2 a 4 suítes com design assinado.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.8} className="mt-12 flex flex-wrap gap-6">
                        <Button size="lg" className="h-14 px-10 text-base bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] rounded-full" asChild>
                            <Link href="https://wa.me/5511978519899?text=Olá, gostaria de entrar na Lista VIP do Jardins da Hípica." target="_blank">Entrar na Lista VIP</Link>
                        </Button>
                        <Button variant="outline" size="lg" className="h-14 px-10 text-base bg-white/5 text-white border-white/20 hover:bg-white hover:text-primary transition-all duration-500 backdrop-blur-md rounded-full" asChild>
                            <Link href="/empreendimento">Conhecer o Projeto</Link>
                        </Button>
                    </FadeIn>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="flex flex-col items-center gap-3 text-white/50">
                    <span className="text-[10px] uppercase tracking-[0.3em]">Explore</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="h-12 w-[1px] bg-gradient-to-b from-white to-transparent"
                    />
                </div>
            </motion.div>
        </section>
    );
}
