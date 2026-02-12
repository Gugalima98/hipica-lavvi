import Link from "next/link";
import { Button } from "@/components/ui/button";

const units = [
    { area: "276m²", rooms: "4 Suítes", vacancies: "3 Vagas", description: "Torre A - Exclusividade total", slug: "torre-a-276m" },
    { area: "223m²", rooms: "4 Suítes", vacancies: "3 Vagas", description: "Torre D - Amplitude e conforto", slug: "torre-d-223m" },
    { area: "184m²", rooms: "4 Dorms / 3 Suítes", vacancies: "2 Vagas", description: "Torre D - Planta inteligente", slug: "torre-d-184m" },
    { area: "149m²", rooms: "3 Suítes", vacancies: "2 Vagas", description: "Torre B - Ideal para famílias", slug: "torre-b-149m" },
    { area: "133m²", rooms: "3 Suítes", vacancies: "2 Vagas", description: "Torre C - Praticidade e estilo", slug: "torre-c-133m" },
    { area: "84m²", rooms: "2 Suítes", vacancies: "1 Vaga", description: "Torre C - Investimento perfeito", slug: "torre-c-84m" },
];

export function PropertyTeaser() {
    return (
        <section className="bg-[#050A14] py-24 sm:py-32 relative overflow-hidden">
            {/* Decorative background element - increased opacity */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10 select-none pointer-events-none">
                <span className="font-serif text-[400px] text-white leading-none">JH</span>
            </div>

            <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    <h2 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-3">
                        Tipologias
                    </h2>
                    <p className="text-3xl font-serif font-medium tracking-tight text-white sm:text-4xl">
                        Plantas Feitas para o Seu Momento
                    </p>
                    <p className="mt-6 text-lg leading-8 text-primary-foreground/80">
                        Do compacto de luxo às grandes metragens para famílias, encontre a planta que se adapta perfeitamente ao seu estilo de vida.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3">
                        {units.map((unit) => (
                            <div key={unit.area} className="group relative flex flex-col overflow-hidden rounded-xl bg-white/5 p-8 transition-all duration-500 hover:bg-white/10 hover:shadow-2xl hover:shadow-primary/50 border border-white/10 hover:border-secondary/30 backdrop-blur-sm">
                                <div className="absolute top-0 right-0 p-4 opacity-10 transition-opacity group-hover:opacity-20">
                                    <span className="font-serif text-6xl text-secondary">JH</span>
                                </div>
                                <dt className="text-3xl font-serif font-light text-white group-hover:text-secondary transition-colors">
                                    {unit.area}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                                    <p className="font-medium text-white text-lg border-b border-white/10 pb-4 mb-4">{unit.rooms}</p>
                                    <p className="text-sm uppercase tracking-wider text-secondary mb-1">Vagas</p>
                                    <p>{unit.vacancies}</p>
                                    <p className="mt-4 flex-auto text-sm font-light opacity-80 leading-relaxed">{unit.description}</p>
                                    <p className="mt-8 pt-4 border-t border-white/5">
                                        <Button variant="ghost" className="w-full justify-between text-white hover:text-secondary hover:bg-transparent p-0 group-hover:translate-x-2 transition-transform" asChild>
                                            <Link href={`/imoveis/${unit.slug}`}>
                                                Ver Planta <span aria-hidden="true">&rarr;</span>
                                            </Link>
                                        </Button>
                                    </p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                    <div className="mt-20 flex justify-center">
                        <Button size="lg" className="h-14 px-10 bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg tracking-wide rounded-full shadow-lg hover:shadow-secondary/20 transition-all duration-300" asChild>
                            <Link href="/imoveis">Ver Todas as Opções</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
