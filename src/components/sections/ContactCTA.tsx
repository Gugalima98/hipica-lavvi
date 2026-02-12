import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ContactCTA() {
    return (
        <section className="bg-secondary py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-serif font-bold tracking-tight text-white sm:text-4xl">
                    Antecipe-se ao Lançamento
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-secondary-foreground/90">
                    Faça parte da nossa Lista VIP e receba em primeira mão as plantas detalhadas e as condições exclusivas de pré-lançamento.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 h-auto" asChild>
                        <Link href="https://wa.me/5511978519899?text=Olá, gostaria de receber informações sobre o Jardins da Hípica." target="_blank">Quero Receber Informações</Link>
                    </Button>
                    <Link href="/sobre" className="text-sm font-semibold leading-6 text-white hover:text-white/80">
                        Saber mais sobre o projeto <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
