import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AboutTeaser() {
    return (
        <section className="py-24 sm:py-32 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2 lg:items-center">
                    <div className="lg:pr-8">
                        <h2 className="text-base font-semibold leading-7 text-secondary">A Grife Lavvi</h2>
                        <p className="mt-2 text-3xl font-serif font-bold tracking-tight text-primary sm:text-4xl">
                            Excelência e Alto Padrão em Cada Detalhe
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            A Lavvi é referência no mercado de alto padrão em São Paulo, entregando projetos icônicos que valorizam a arquitetura, o design e o bem-estar. O Jardins da Hípica é a síntese dessa expertise: um projeto visionário em uma localização inigualável em frente à Hípica Santo Amaro, garantindo uma vista eterna e definitiva para o verde.
                        </p>
                        <div className="mt-8">
                            <Button asChild size="lg">
                                <Link href="/sobre">Conheça a Lavvi</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="relative lg:h-full">
                        {/* Placeholder for About Image - In a real scenario, would generate another image */}
                        <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl sm:aspect-[2/1] lg:aspect-auto lg:h-[500px]">
                            <Image
                                src="/images/perspectiva_ilustrada_do_transfer_lobby.webp"
                                alt="Jardins da Hípica - Lobby de Transfer Sofisticado"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
