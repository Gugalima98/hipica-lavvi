"use client";

import { FadeIn } from "@/components/ui/FadeIn";

const stats = [
    { value: "50.000", label: "m² de Terreno", suffix: "" },
    { value: "10.000", label: "m² de Parque Privativo", suffix: "" },
    { value: "60", label: "Metros de Piscina", suffix: "m" },
    { value: "4", label: "Quadras de Tênis", suffix: "" },
    { value: "All", label: "Inclusive", suffix: "" },
];

export function BigNumbers() {
    return (
        <section className="py-24 bg-primary text-white relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('/grain.png')] mix-blend-overlay" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 text-center divide-x divide-white/10">
                    {stats.map((stat, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1} className={`flex flex-col items-center ${idx === 4 ? 'col-span-2 md:col-span-1' : ''}`}>
                            <div className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-secondary mb-2 tracking-tight">
                                {stat.value}<span className="text-2xl md:text-3xl ml-1">{stat.suffix}</span>
                            </div>
                            <div className="text-sm md:text-base font-light tracking-widest uppercase text-gray-300">
                                {stat.label}
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
