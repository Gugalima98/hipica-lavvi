import { Trees, Warehouse, Trophy, Globe } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const features = [
    {
        name: "50.000m² de Terreno",
        description: "Um dos maiores terrenos residenciais de São Paulo, proporcionando uma experiência de resort urbano.",
        icon: Trees,
    },
    {
        name: "Vizinho da Hípica",
        description: "Localização privilegiada ao lado do Clube Hípico de Santo Amaro e próximo ao Parque Burle Marx.",
        icon: Trophy,
    },
    {
        name: "Lazer de Clube",
        description: "Beach Tennis, complexo aquático, quadras de tênis e muito mais para toda a família.",
        icon: Warehouse,
    },
    {
        name: "Design Internacional",
        description: "Arquitetura e paisagismo assinados por grandes nomes, elevando o padrão de moradia.",
        icon: Globe,
    },
];

export function Highlights() {
    return (
        <section className="bg-slate-50 relative overflow-hidden py-24 sm:py-32 bg-grain">
            <div className="absolute inset-0 opacity-[0.03] bg-[url('/grid.svg')] bg-center" />

            <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    <FadeIn direction="down">
                        <h2 className="text-base font-bold tracking-widest text-secondary uppercase">Diferenciais Exclusivos</h2>
                        <p className="mt-2 text-3xl font-serif font-medium tracking-tight text-primary sm:text-4xl">
                            Tudo o que você precisa para viver bem
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Uma infraestrutura completa de lazer e serviços, desenhada para elevar sua qualidade de vida.
                        </p>
                    </FadeIn>
                </div>

                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <FadeIn key={feature.name} delay={index * 0.1} className="flex flex-col items-start p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all duration-300 group">
                            <dt className="flex flex-col items-start gap-y-4 text-xl font-serif text-primary">
                                <div className="rounded-full bg-secondary/10 p-4 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                                    <feature.icon className="h-6 w-6 text-secondary group-hover:text-white transition-colors" aria-hidden="true" />
                                </div>
                                <span className="font-semibold">{feature.name}</span>
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-sm leading-6 text-gray-600 group-hover:text-gray-900 transition-colors">
                                <p className="flex-auto">{feature.description}</p>
                            </dd>
                        </FadeIn>
                    ))}
                </dl>
            </div>
        </section>
    );
}
