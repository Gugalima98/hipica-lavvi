import type { Metadata } from "next";
import {
    Trees,
    Waves,
    Dumbbell,
    PartyPopper,
    Gamepad2,
    Utensils,
    Store,
    Car,
    Shield,
    Sun,
    Dog,
    Sparkles,
    Wind,
    Heart,
    Umbrella,
    Laugh
} from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/ui/FadeIn";
import { BigNumbers } from "@/components/sections/BigNumbers";
import { ServiceEcosystem } from "@/components/sections/ServiceEcosystem";

export const metadata: Metadata = {
    title: "O Empreendimento | Jardins da Hípica - Lazer de Clube",
    description: "Um resort urbano com mais de 50 itens de lazer, assessoria esportiva completa e serviços exclusivos.",
};

const amenitiesByFloor = [
    {
        floor: "Térreo - Parque Privativo",
        description: "A integração perfeita com a natureza em 10.000m² de área verde.",
        items: [
            { name: "Praça Central de 10.000m²", icon: Trees },
            { name: "4 Quadras de Tênis", icon: Gamepad2 },
            { name: "Quadra de Beach Tennis", icon: Sun },
            { name: "Quadra Poliesportiva", icon: Gamepad2 },
            { name: "Pet Place e Pet Care (Zazuu)", icon: Dog },
            { name: "Minimercado (Smart Break)", icon: Store },
        ]
    },
    {
        floor: "2º Pavimento - Clube",
        description: "Bem-estar e saúde em um pavimento exclusivo.",
        items: [
            { name: "Piscina Coberta 25m (5 raias)", icon: Waves },
            { name: "Fitness Center (Body Care)", icon: Dumbbell },
            { name: "Spa com Sala de Descanso", icon: Sparkles },
            { name: "Saunas Seca e Úmida", icon: Wind },
            { name: "Sala de Massagem", icon: Heart },
        ]
    },
    {
        floor: "4º Pavimento - Lazer Elevado",
        description: "Lazer social e piscinas com vista privilegiada.",
        items: [
            { name: "Piscina Externa de 60m", icon: Waves },
            { name: "Pool Houses Privativas", icon: Umbrella },
            { name: "3 Salões de Festas", icon: PartyPopper },
            { name: "Pub Gourmet e Jogos", icon: Utensils },
            { name: "Brinquedotecas", icon: Gamepad2 },
            { name: "Playgrounds", icon: Laugh },
        ]
    }
];

export default function EmpreendimentoPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                {/* Hero Section */}
                <section className="bg-primary/5 py-24 sm:py-32 relative overflow-hidden bg-grain">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <FadeIn>
                            <h1 className="text-4xl font-serif font-bold tracking-tight text-primary sm:text-6xl mb-6">
                                Grandiosidade e <span className="italic text-secondary">Natureza</span>
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                                O Jardins da Hípica redefine o conceito de morar bem em São Paulo. Um projeto único que une a sofisticação da Lavvi com a tranquilidade da natureza.
                            </p>
                        </FadeIn>
                    </div>
                </section>

                {/* Big Numbers */}
                <BigNumbers />

                {/* Lazer Setorizado */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-3">Lazer Setorizado</h2>
                            <h3 className="text-3xl font-serif text-primary">Infraestrutura de Clube Internacional</h3>
                        </div>

                        <div className="space-y-16">
                            {amenitiesByFloor.map((sector, idx) => (
                                <FadeIn key={sector.floor} delay={idx * 0.1}>
                                    <div className="bg-stone-50 rounded-3xl p-8 lg:p-12 border border-stone-100">
                                        <div className="mb-8">
                                            <h4 className="text-2xl font-serif font-bold text-primary mb-2">{sector.floor}</h4>
                                            <p className="text-gray-600">{sector.description}</p>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {sector.items.map((item) => (
                                                <div key={item.name} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-50 hover:border-secondary/30 transition-colors">
                                                    <div className="p-2 bg-primary/5 rounded-full text-primary">
                                                        <item.icon className="w-6 h-6" />
                                                    </div>
                                                    <span className="font-medium text-gray-800">{item.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Service Ecosystem */}
                <ServiceEcosystem />

                {/* Technical Sheet */}
                <section className="py-24 bg-primary text-white relative overflow-hidden bg-grain">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <div>
                                <h2 className="text-3xl font-serif font-bold mb-8">Ficha Técnica</h2>
                                <dl className="space-y-6">
                                    <div className="border-b border-white/10 pb-4">
                                        <dt className="text-secondary text-sm font-bold uppercase tracking-wider mb-1">Incorporação e Construção</dt>
                                        <dd className="text-lg">Lavvi Empreendimentos Imobiliários</dd>
                                    </div>
                                    <div className="border-b border-white/10 pb-4">
                                        <dt className="text-secondary text-sm font-bold uppercase tracking-wider mb-1">Projeto Arquitetônico</dt>
                                        <dd className="text-lg">MCAA Arquitetos</dd>
                                    </div>
                                    <div className="border-b border-white/10 pb-4">
                                        <dt className="text-secondary text-sm font-bold uppercase tracking-wider mb-1">Paisagismo</dt>
                                        <dd className="text-lg">Benedito Abbud</dd>
                                    </div>
                                    <div className="border-b border-white/10 pb-4">
                                        <dt className="text-secondary text-sm font-bold uppercase tracking-wider mb-1">Decoração de Interiores</dt>
                                        <dd className="text-lg">Chris Silveira</dd>
                                    </div>
                                </dl>
                            </div>
                            <div className="space-y-6">
                                <div className="border-b border-white/10 pb-4">
                                    <dt className="text-secondary text-sm font-bold uppercase tracking-wider mb-1">Área do Terreno</dt>
                                    <dd className="text-lg">Mais de 50.000m²</dd>
                                </div>
                                <div className="border-b border-white/10 pb-4">
                                    <dt className="text-secondary text-sm font-bold uppercase tracking-wider mb-1">Torres</dt>
                                    <dd className="text-lg">4 Torres Residenciais</dd>
                                </div>
                                <div className="border-b border-white/10 pb-4">
                                    <dt className="text-secondary text-sm font-bold uppercase tracking-wider mb-1">Tipologias</dt>
                                    <dd className="text-lg">Apartamentos de 84m² a 276m² | 2 a 4 Suítes</dd>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                        <h2 className="text-3xl font-serif font-bold text-center text-primary mb-12">Perguntas Frequentes</h2>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Qual a previsão de entrega?</AccordionTrigger>
                                <AccordionContent>
                                    A previsão de entrega é para 2027/2028 (Data sujeita a confirmação no stand).
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Quais as opções de lazer?</AccordionTrigger>
                                <AccordionContent>
                                    O empreendimento conta com lazer de clube completo: 4 quadras de tênis, piscina coberta de 25m, piscina externa de 60m, beach tennis, spa, fitness center by Body Care e muito mais.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Onde fica o stand de vendas?</AccordionTrigger>
                                <AccordionContent>
                                    O stand fica localizado no próprio terreno, na Rua Antônio Bandeira, Chácara Santo Antônio. Agende sua visita para conhecer os decorados.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </section>
            </main>
        </div>
    );
}
