import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Waves, Dumbbell, Flower2, Palmtree, Gamepad2, ShieldCheck, Car } from "lucide-react";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "O Empreendimento | Hípica Lavvi Residences - Lazer de Clube",
    description: "Descubra o Hípica Lavvi Residences: terreno de 50.000m² com lazer completo, segurança e serviços exclusivos ao lado do Clube Hípico de Santo Amaro.",
};

const amenities = [
    { name: "Complexo Aquático", icon: Waves, description: "Piscinas adulto e infantil, raia coberta e descoberta." },
    { name: "Fitness Center", icon: Dumbbell, description: "Academia equipada com aparelhos de última geração." },
    { name: "Beach Tennis", icon: Palmtree, description: "Quadras de areia para Beach Tennis e Futevôlei." },
    { name: "Paisagismo Exuberante", icon: Flower2, description: "Jardins assinados que integram o condomínio à natureza." },
    { name: "Espaço Kids", icon: Gamepad2, description: "Brinquedoteca e playground monitorados." },
    { name: "Segurança 24h", icon: ShieldCheck, description: "Monitoramento e controle de acesso rigoroso." },
    { name: "Vagas Demarcadas", icon: Car, description: "Garagens espaçosas e pontos para carros elétricos." },
];

const faqs = [
    {
        question: "Onde fica o Hípica Lavvi Residences?",
        answer: "O empreendimento está localizado na Rua Visconde de Taunay, na Chácara Santo Antônio, vizinho de muro com o Clube Hípico de Santo Amaro e próximo ao Parque Burle Marx.",
    },
    {
        question: "Quais são as metragens dos apartamentos?",
        answer: "Oferecemos opções de 84m² (2 suítes), 133m² (3 suítes), 149m² (3 ou 4 dorms), 190m² e 276m² (4 suítes com 3 vagas).",
    },
    {
        question: "Qual o tamanho do terreno?",
        answer: "O Hípica Lavvi Residences ocupa um terreno raro de aproximadamente 50.000m², proporcionando uma área de lazer inigualável na região.",
    },
    {
        question: "Quem assina o projeto?",
        answer: "O projeto conta com arquitetura do escritório Mcaa Arquitetos, paisagismo de Benedito Abbud e decoração de interiores por João Armentano (nomes de referência a confirmar no memorial descritivo oficial).",
    },
    {
        question: "O condomínio terá serviços?",
        answer: "Sim, o conceito 'Residences' inclui serviços de conciergerie, monitoria infantil e gestão esportiva para as diversas modalidades oferecidas no complexo.",
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
        }
    }))
};

export default function ProjectPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <JsonLd data={faqSchema} />
            <Header />
            <main className="flex-1">
                {/* Hero */}
                <section className="bg-primary py-24 sm:py-32">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                        <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-6xl">Viva em um Resort Urbano</h1>
                        <p className="mt-6 text-xl leading-8 text-primary-foreground/80 max-w-2xl mx-auto">
                            50.000m² de terreno dedicados ao seu bem-estar. O encontro perfeito entre a exclusividade da Hípica e o conforto de casa.
                        </p>
                    </div>
                </section>

                {/* Concept */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-lg leading-loose text-gray-700">
                            <h2 className="text-3xl font-serif font-bold text-primary mb-8">Conceito Único</h2>
                            <p className="mb-6">
                                Imagine acordar todos os dias com a vista para o verde do Clube Hípico e ter, à sua disposição, um clube privativo dentro do seu próprio condomínio. O <strong>Hípica Lavvi Residences</strong> foi concebido para quem não abre mão de espaço, segurança e lazer.
                            </p>
                            <p>
                                Com torres dispostas de forma a garantir privacidade e insolação ideal, o projeto se destaca pelo paisagismo exuberante que permeia todo o térreo, criando caminhos e praças de convivência que convidam ao encontro e ao relaxamento.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Amenities */}
                <section className="py-24 bg-muted/30">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-serif font-bold text-primary text-center mb-16">Infraestrutura Completa</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {amenities.map((item) => (
                                <div key={item.name} className="bg-background p-6 rounded-xl shadow-sm border border-border/50 flex items-start space-x-4">
                                    <div className="p-3 bg-secondary/10 rounded-lg">
                                        <item.icon className="h-6 w-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-primary">{item.name}</h3>
                                        <p className="text-muted-foreground mt-1">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ - SEO Goldmine */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                        <h2 className="text-3xl font-serif font-bold text-primary text-center mb-12">Perguntas Frequentes</h2>
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="text-left text-lg font-medium text-gray-900">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-base text-gray-600">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-secondary text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold text-white mb-6">Venha conhecer o decorado</h2>
                        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                            <Link href="/contato">Agendar Visita ao Stand</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
