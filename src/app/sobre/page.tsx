import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn"; // Assuming FadeIn is used in other pages for consistecy

export const metadata: Metadata = {
    title: "A Grife Lavvi | Jardins da Hípica",
    description: "Conheça a Lavvi, incorporadora de alto padrão responsável pelo Jardins da Hípica. Excelência, design e inovação em cada detalhe.",
};

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                {/* Page Header - Enhanced visuals */}
                <section className="bg-primary py-32 sm:py-40 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 text-white">
                        <FadeIn>
                            <h1 className="text-5xl font-serif font-bold tracking-tight sm:text-7xl mb-8">
                                A Grife do Morar Bem
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
                                Mais do que construir metros quadrados, a Lavvi edifica legados. Uma trajetória marcada pela ousadia, pelo design autoral e pela busca incessante da perfeição.
                            </p>
                        </FadeIn>
                    </div>
                </section>

                {/* Manifesto - Expanded */}
                <section className="py-32 bg-white relative">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center space-y-12">
                            <FadeIn>
                                <h2 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-8">Nosso Manifesto</h2>
                                <p className="text-3xl md:text-4xl font-serif text-primary leading-tight">
                                    "Acreditamos que o verdadeiro luxo reside na gentileza urbana, na fluidez dos espaços e na capacidade de surpreender. Viver Lavvi é escolher a excelência como padrão diário, onde cada detalhe é um convite para celebrar a vida."
                                </p>
                            </FadeIn>
                            <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
                        </div>
                    </div>
                </section>

                {/* Detailed Story Section */}
                <section className="py-24 bg-stone-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <FadeIn className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
                                <h3 className="text-3xl font-serif font-bold text-primary mb-4">Uma História de Pioneirismo</h3>
                                <p>
                                    Nascida da expertise de um dos grupos mais sólidos do mercado imobiliário brasileiro, a <strong>Lavvi</strong> surgiu com um propósito claro: redefinir o segmento de alto padrão em São Paulo. Desde o início, nossa missão foi ir além do óbvio, entregando empreendimentos que não são apenas lugares para morar, mas obras de arte arquitetônicas.
                                </p>
                                <p>
                                    Fomos pioneiros em trazer marcas de luxo globais para o mercado residencial brasileiro. As parcerias inéditas com gigantes como <strong>Versace Home</strong> e <strong>Fendi Casa</strong> não apenas elevaram o nosso patamar, mas transformaram o skyline da cidade e a percepção de valor no mercado imobiliário de luxo.
                                </p>
                                <p>
                                    O <strong>Jardins da Hípica</strong> é a materialização de toda essa bagagem. Um projeto grandioso, em um terreno raro de 50.000m² em frente à Hípica Santo Amaro, que une a sofisticação da nossa marca com a qualidade de vida de um resort urbano integrado à natureza.
                                </p>
                            </FadeIn>
                            <FadeIn delay={0.2} className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
                                {/* Placeholder for institutional image */}
                                <Image
                                    src="/images/Lavvi.jpg"
                                    alt="Lavvi - Excelência e Alto Padrão"
                                    fill
                                    className="object-cover"
                                />
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* Timeline / Track Record - Enhanced */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <FadeIn className="text-center mb-20">
                            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Marcos de uma Trajetória Sólida</h2>
                            <p className="text-gray-500 max-w-2xl mx-auto">Momentos que construíram nossa reputação de excelência e confiança.</p>
                        </FadeIn>

                        <div className="space-y-24 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-secondary before:to-transparent">
                            {/* Item 1 */}
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                <div className="flex items-center justify-center w-14 h-14 rounded-full border-4 border-white bg-primary shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-white font-bold text-sm">
                                    2024
                                </div>
                                <FadeIn direction="up" className="w-[calc(100%-4rem)] md:w-[calc(50%-3.5rem)] bg-white p-8 rounded-2xl border border-gray-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                    <h3 className="text-2xl font-serif text-primary font-bold mb-2">Jardins da Hípica</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        O lançamento mais aguardado do ano. Um terreno único de 50.000m² ao lado da Hípica de Santo Amaro, redefinindo o conceito de viver bem com lazer de clube e natureza exuberante.
                                    </p>
                                </FadeIn>
                            </div>

                            {/* Item 2 */}
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                <div className="flex items-center justify-center w-14 h-14 rounded-full border-4 border-white bg-secondary shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-white font-bold text-sm">
                                    2021
                                </div>
                                <FadeIn direction="up" className="w-[calc(100%-4rem)] md:w-[calc(50%-3.5rem)] bg-white p-8 rounded-2xl border border-gray-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                    <h3 className="text-2xl font-serif text-primary font-bold mb-2">Villa by Versace Home</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Um marco histórico. O primeiro empreendimento residencial da América Latina com a assinatura da icônica grife italiana Versace Home. Sucesso absoluto de vendas e crítica.
                                    </p>
                                </FadeIn>
                            </div>

                            {/* Item 3 */}
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                <div className="flex items-center justify-center w-14 h-14 rounded-full border-4 border-white bg-primary shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-white font-bold text-sm">
                                    2019
                                </div>
                                <FadeIn direction="up" className="w-[calc(100%-4rem)] md:w-[calc(50%-3.5rem)] bg-white p-8 rounded-2xl border border-gray-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                    <h3 className="text-2xl font-serif text-primary font-bold mb-2">IPO na B3</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Abertura de capital na Bolsa de Valores brasileira (LAVV3), consolidando a robustez financeira, a governança corporativa e a capacidade de expansão da companhia.
                                    </p>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-primary text-white py-24 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grain.png')] opacity-10 mix-blend-overlay" />
                    <div className="container mx-auto px-4 relative z-10">
                        <h2 className="text-3xl md:text-4xl font-serif mb-8">Faça parte desta história exclusiva</h2>
                        <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary transition-colors px-12 py-6 rounded-full text-lg" asChild>
                            <Link href="/contato">Fale com um Consultor Especialista</Link>
                        </Button>
                    </div>
                </section>
            </main>
        </div>
    );
}
