"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Dumbbell, GraduationCap, Sparkles, Dog, ShoppingCart } from "lucide-react";

const partners = [
    {
        name: "Body Care",
        role: "Assessoria Esportiva",
        description: "Gestão completa de fitness e bem-estar.",
        icon: Dumbbell,
    },
    {
        name: "Red Balloon",
        role: "Escola de Inglês",
        description: "Aulas inclusas para crianças e adolescentes.",
        icon: GraduationCap,
    },
    {
        name: "Bluma",
        role: "Beleza e Spa",
        description: "Serviços de beleza premium on-demand.",
        icon: Sparkles,
    },
    {
        name: "Zazuu",
        role: "Pet Care",
        description: "Cuidado e carinho para o seu melhor amigo.",
        icon: Dog,
    },
    {
        name: "Smart Break",
        role: "Conveniência",
        description: "Mercado autônomo 24h para sua comodidade.",
        icon: ShoppingCart,
    },
];

export function ServiceEcosystem() {
    return (
        <section className="py-24 bg-stone-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-3">
                        Exclusividade Lavvi
                    </h2>
                    <h3 className="text-4xl font-serif text-primary mb-6">
                        Um Ecossistema de Serviços Incomparável
                    </h3>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        Parcerias com marcas renomadas para oferecer o máximo de conveniência e qualidade de vida, tudo dentro do seu condomínio.
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {partners.map((partner, idx) => (
                        <FadeIn key={partner.name} delay={idx * 0.1}>
                            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 h-full flex flex-col items-center text-center group">
                                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors">
                                    <partner.icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors" />
                                </div>
                                <h4 className="text-lg font-bold text-primary mb-1">{partner.name}</h4>
                                <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-3 block">{partner.role}</span>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {partner.description}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
