"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero-home.png"
                    alt="Hípica Lavvi Residences - Vista aérea do complexo com piscinas e área verde"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                {/* Overlay Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
            </div>

            {/* Content */}
            <div className="relative container mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl font-serif font-bold tracking-tight sm:text-5xl lg:text-6xl"
                    >
                        Um Oásis Urbano ao Lado da Hípica de Santo Amaro
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-6 text-xl text-gray-200"
                    >
                        Descubra o privilégio de viver em um terreno de 50.000m² com lazer de clube internacional. Apartamentos de 2 a 4 suítes com design assinado.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-10 flex flex-wrap gap-4"
                    >
                        <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8" asChild>
                            <Link href="/contato">Entrar na Lista VIP</Link>
                        </Button>
                        <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white hover:text-primary text-lg px-8" asChild>
                            <Link href="/empreendimento">Conhecer o Projeto</Link>
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <div className="flex flex-col items-center gap-2 text-white/60">
                    <span className="text-xs uppercase tracking-widest">Explore</span>
                    <div className="h-10 w-[1px] bg-gradient-to-b from-white to-transparent" />
                </div>
            </motion.div>
        </section>
    );
}
