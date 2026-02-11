import { Trees, Warehouse, Trophy, Globe } from "lucide-react";

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
        icon: Warehouse, // Using Warehouse as a placeholder for structural amenity, or maybe Umbrella/Sun
    },
    {
        name: "Design Internacional",
        description: "Arquitetura e paisagismo assinados por grandes nomes, elevando o padrão de moradia.",
        icon: Globe,
    },
];

export function Highlights() {
    return (
        <section className="bg-muted py-24 sm:py-32">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-secondary">Exclusividade e Grandeza</h2>
                    <p className="mt-2 text-3xl font-serif font-bold tracking-tight text-primary sm:text-4xl">
                        Tudo o que você precisa, sem sair de casa
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        O Hípica Lavvi Residences redefine o conceito de morar bem, integrando natureza, esporte e sofisticação em um único lugar.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-primary">
                                    <feature.icon className="h-5 w-5 flex-none text-secondary" aria-hidden="true" />
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}
