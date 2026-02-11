import Link from "next/link";
import { Button } from "@/components/ui/button";

const units = [
    { area: "276m²", rooms: "4 Suítes", vacancies: "3 Vagas", description: "Torre A - Exclusividade total" },
    { area: "215m²", rooms: "4 Dorms / 3 Suítes", vacancies: "3 Vagas", description: "Torre B - Amplitude e conforto" },
    { area: "190m²", rooms: "4 Dorms / 2 Suítes", vacancies: "2 Vagas", description: "Torre A - Planta inteligente" },
    { area: "149m²", rooms: "3 Suítes", vacancies: "2 Vagas", description: "Torre B - Ideal para famílias" },
    { area: "133m²", rooms: "3 Suítes", vacancies: "2 Vagas", description: "Torre C - Praticidade e estilo" },
    { area: "84m²", rooms: "2 Suítes", vacancies: "1 Vaga", description: "Torre C - Investimento perfeito" },
];

export function PropertyTeaser() {
    return (
        <section className="bg-primary py-24 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-secondary">Tipologias</h2>
                    <p className="mt-2 text-3xl font-serif font-bold tracking-tight text-white sm:text-4xl">
                        Plantas Feitas para o Seu Momento
                    </p>
                    <p className="mt-6 text-lg leading-8 text-primary-foreground/80">
                        Do compacto de luxo às grandes metragens para famílias, encontre a planta que se adapta perfeitamente ao seu estilo de vida.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
                        {units.map((unit) => (
                            <div key={unit.area} className="flex flex-col rounded-2xl bg-white/5 p-8 border border-white/10 hover:border-secondary/50 transition-colors">
                                <dt className="text-2xl font-bold leading-7 text-white">
                                    {unit.area}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-primary-foreground/90">
                                    <p className="font-semibold text-secondary">{unit.rooms}</p>
                                    <p className="mt-1">{unit.vacancies}</p>
                                    <p className="mt-4 flex-auto text-sm opacity-80">{unit.description}</p>
                                    <p className="mt-6">
                                        <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white hover:text-primary" asChild>
                                            <Link href={`/imoveis`}>Ver Planta</Link>
                                        </Button>
                                    </p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                    <div className="mt-16 flex justify-center">
                        <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90" asChild>
                            <Link href="/imoveis">Ver Todas as Opções</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
