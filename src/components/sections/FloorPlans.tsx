"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Download, Check } from "lucide-react";

interface FloorPlan {
    id: string;
    label: string;
    description: string;
    features: string[];
    images: {
        tipo: string;
        opcao?: string;
    };
    slug: string;
}

const floorPlans: FloorPlan[] = [
    {
        id: "276m",
        label: "276m²",
        description: "Torre A | 4 Suítes | Hall Privativo",
        features: [
            "Living com Vista Panorâmica",
            "Varanda Gourmet Integrada",
            "Closet Sr. e Sra.",
            "Dependência Completa",
            "4 Vagas Determinadas"
        ],
        images: {
            tipo: "/images/plantas-novas/apto-ta-final-1-276m-tipo-ef.webp",
            opcao: "/images/plantas-novas/apto-ta-final-1-276m-opcao-ef2.webp"
        },
        slug: "torre-a-276m",
    },
    {
        id: "223m",
        label: "223m²",
        description: "Torre D | 4 Suítes | Hall Privativo",
        features: [
            "Varanda Gourmet em L",
            "Suíte Master Ampliada",
            "Cozinha com Ilha",
            "Lavabo Social",
            "3 Vagas"
        ],
        images: {
            tipo: "/images/plantas-novas/apto-td-final-2-223m-tipo-ef2.webp",
            opcao: "/images/plantas-novas/apto-td-final-2-223m-opcao-ef2.webp"
        },
        slug: "torre-d-223m",
    },
    {
        id: "184m",
        label: "184m²",
        description: "Torre D | 4 Dorms | Hall Privativo",
        features: [
            "Planta Equilibrada",
            "Varanda Gourmet",
            "Área Íntima Preservada",
            "Banho de Serviço",
            "2 Vagas"
        ],
        images: {
            tipo: "/images/plantas-novas/apto-td-final-3-184m-tipo-ef.webp",
            opcao: "/images/plantas-novas/apto-td-final-3-184m-opcao-ef2.webp"
        },
        slug: "torre-d-184m",
    },
    {
        id: "180m",
        label: "180m²",
        description: "Torre A | 4 Dorms | Hall Privativo",
        features: [
            "Opção de Sala Ampliada",
            "Varanda Gourmet",
            "Suíte Master com Closet",
            "Entrada Social e Serviço",
            "3 Vagas"
        ],
        images: {
            tipo: "/images/plantas-novas/apto-ta-final-3-180m-tipo-ef.webp",
            opcao: "/images/plantas-novas/apto-ta-final-3-180m-opcao-ef.webp"
        },
        slug: "torre-a-180m",
    },
    {
        id: "170m",
        label: "171m²",
        description: "Torre C | 4 Dorms | Hall Semiprivativo",
        features: [
            "Amplo Living",
            "Varanda com Churrasqueira",
            "Lavabo",
            "Cozinha Espaçosa",
            "2 Vagas"
        ],
        images: {
            tipo: "/images/plantas-novas/apto-tc-final-8-171m-tipo-ef2.webp",
            opcao: "/images/plantas-novas/apto-tc-final-8-171m-opcao-p3.webp"
        },
        slug: "torre-c-170m",
    },
    {
        id: "149m",
        label: "150m²",
        description: "Torre B | 3 Suítes | Hall Semiprivativo",
        features: [
            "Living Integrado",
            "Varanda Gourmet",
            "Lavabo",
            "Suíte Master Confortável",
            "2 Vagas"
        ],
        images: {
            tipo: "/images/plantas-novas/apto-tb-final-6-150m-tipo-ef2.webp",
            opcao: "/images/plantas-novas/apto-tb-final-6-150m-opcao-ef.webp"
        },
        slug: "torre-b-149m",
    },
    {
        id: "133m",
        label: "133m/134m²",
        description: "Torre B/C | 3 Suítes",
        features: [
            "Planta Versátil",
            "Varanda Gourmet",
            "Lavabo",
            "Cozinha Americana (Opcional)",
            "2 Vagas"
        ],
        images: {
            tipo: "/images/plantas-novas/apto-tb-final-3-133m-tipo-ef2.webp",
            opcao: "/images/plantas-novas/apto-tb-final-3-133m-opcao-ef2.webp"
        },
        slug: "torre-c-133m",
    },
    {
        id: "84m",
        label: "84m²",
        description: "Torre B/C | 2 ou 3 Dorms",
        features: [
            "Compacto Premium",
            "Varanda Integrada",
            "Opção de 2 Suítes",
            "Lavabo",
            "1 Vaga"
        ],
        images: {
            tipo: "/images/plantas-novas/apto-tb-final-5-84m-tipo-ef2.webp",
            opcao: "/images/plantas-novas/apto-tb-final-5-84m-opcao-ef2.webp"
        },
        slug: "torre-c-84m",
    },
];

export function FloorPlans() {
    const [selectedPlan, setSelectedPlan] = useState(floorPlans[0]);
    const [isOptionView, setIsOptionView] = useState(false);

    // Reset option view when changing plan if option doesn't exist
    const handlePlanChange = (plan: FloorPlan) => {
        setSelectedPlan(plan);
        if (!plan.images.opcao) {
            setIsOptionView(false);
        }
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden" id="plantas">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-3">
                        Sua Nova Residência
                    </h2>
                    <h3 className="font-serif text-4xl text-primary mb-6">
                        Plantas Desenhadas para o Seu Estilo
                    </h3>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        Escolha a metragem ideal para sua família. Plantas flexíveis e modernas, pensadas para o máximo conforto.
                    </p>
                </FadeIn>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {floorPlans.map((plan) => (
                        <button
                            key={plan.id}
                            onClick={() => handlePlanChange(plan)}
                            className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${selectedPlan.id === plan.id
                                ? "bg-primary text-white border-primary shadow-lg scale-105"
                                : "bg-white text-gray-600 border-gray-200 hover:border-primary/50 hover:text-primary"
                                }`}
                        >
                            {plan.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedPlan.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid lg:grid-cols-2 gap-12 items-start bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-sm"
                    >
                        {/* Image Side */}
                        <div className="flex flex-col gap-6">
                            <div className="relative aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-inner border border-gray-100 flex items-center justify-center group p-4">
                                <Image
                                    src={isOptionView && selectedPlan.images.opcao ? selectedPlan.images.opcao : selectedPlan.images.tipo}
                                    alt={`Planta de ${selectedPlan.label} - Jardim da Hípica`}
                                    fill
                                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </div>

                            {/* View Toggle */}
                            {selectedPlan.images.opcao && (
                                <div className="flex justify-center bg-white p-2 rounded-xl border border-gray-200 shadow-sm mx-auto">
                                    <button
                                        className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${!isOptionView ? 'bg-secondary text-white' : 'text-gray-500 hover:text-primary'}`}
                                        onClick={() => setIsOptionView(false)}
                                    >
                                        Planta Padrão
                                    </button>
                                    <button
                                        className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${isOptionView ? 'bg-secondary text-white' : 'text-gray-500 hover:text-primary'}`}
                                        onClick={() => setIsOptionView(true)}
                                    >
                                        Opção Modificada
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Details Side */}
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-3xl font-serif text-primary mb-2">
                                    {selectedPlan.label}
                                </h4>
                                <p className="text-lg text-primary/80 font-medium">
                                    {selectedPlan.description}
                                </p>
                            </div>

                            <ul className="space-y-4">
                                {selectedPlan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="mt-1 bg-secondary/10 p-1 rounded-full">
                                            <Check className="w-4 h-4 text-secondary" />
                                        </div>
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-6 border-t border-gray-200">
                                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all shadow-md rounded-xl" asChild>
                                    <Link href={`/imoveis/${selectedPlan.slug}`} title={`Ver todos os detalhes e diferenciais da planta de ${selectedPlan.label}`}>
                                        Ver Detalhes do Imóvel
                                    </Link>
                                </Button>
                                <p className="mt-4 text-xs text-gray-400 text-center sm:text-left">
                                    *Perspectiva artística da planta. Móveis e decoração não inclusos.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
