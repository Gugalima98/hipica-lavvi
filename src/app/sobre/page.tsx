import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Sobre a Lavvi | Excelência e Inovação no Mercado Imobiliário",
    description: "Conheça a trajetória da Lavvi, sinônimo de alto padrão e projetos icônicos em São Paulo.",
};

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                {/* Page Header */}
                <section className="bg-primary py-24 sm:py-32">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                        <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-6xl">A Grife do Morar Bem</h1>
                        <p className="mt-6 text-lg leading-8 text-primary-foreground/80 max-w-2xl mx-auto">
                            Mais do que construir apartamentos, a Lavvi cria legados. Projetos que transformam o horizonte da cidade e a vida de quem os habita.
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-24 sm:py-32 bg-background">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 lg:items-start">
                            <div className="space-y-6 text-lg leading-loose text-gray-700">
                                <p>
                                    A <strong>Lavvi</strong> nasceu com o propósito de redefinir o conceito de alto padrão em São Paulo. Com um portfólio de empreendimentos icônicos, como o <em>Villa Versace</em> e o <em>Palazzo Fendi</em>, a incorporadora se consolidou como referência em design, inovação e exclusividade.
                                </p>
                                <p>
                                    Nossa filosofia é pautada na busca incessante pela perfeição. Cada projeto é meticulosamente planejado, desde a escolha do terreno até o último detalhe do acabamento. A parceria com os maiores escritórios de arquitetura e paisagismo do mundo garante que cada entrega seja uma obra de arte.
                                </p>
                                <p>
                                    No <strong>Hípica Lavvi Residences</strong>, trazemos essa expertise para a Chácara Santo Antônio. Um projeto que une a grandiosidade de um terreno de 50.000m² com a sofisticação que é nossa marca registrada. É o encontro do urbano com a natureza, do luxo com o conforto.
                                </p>

                                <div className="pt-8">
                                    <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90" asChild>
                                        <Link href="/empreendimento">Conheça o Hípica Lavvi</Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Image Placeholder */}
                            <div className="aspect-[4/5] w-full rounded-2xl bg-gray-100 object-cover shadow-xl flex items-center justify-center text-gray-400">
                                <span className="text-sm">Imagem Institucional Lavvi / Empreendimento</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
