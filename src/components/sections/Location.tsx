import { MapPin } from "lucide-react";

export function Location() {
    return (
        <section className="py-24 sm:py-32 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2 lg:items-center">
                    <div className="lg:order-2">
                        <h2 className="text-base font-semibold leading-7 text-secondary">Localização Privilegiada</h2>
                        <p className="mt-2 text-3xl font-serif font-bold tracking-tight text-primary sm:text-4xl">
                            No Coração da Chácara Santo Antônio
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Viva ao lado do Clube Hípico de Santo Amaro e desfrute de uma região arborizada, segura e completa. Próximo a escolas internacionais, shoppings e com fácil acesso aos principais eixos de negócios da cidade.
                        </p>

                        <ul className="mt-8 space-y-4">
                            <li className="flex gap-x-3">
                                <MapPin className="mt-1 h-5 w-5 flex-none text-secondary" aria-hidden="true" />
                                <span><strong className="font-semibold text-gray-900">Clube Hípico de Santo Amaro:</strong> Vizinho imediato.</span>
                            </li>
                            <li className="flex gap-x-3">
                                <MapPin className="mt-1 h-5 w-5 flex-none text-secondary" aria-hidden="true" />
                                <span><strong className="font-semibold text-gray-900">Parque Burle Marx:</strong> A poucos minutos de caminhada.</span>
                            </li>
                            <li className="flex gap-x-3">
                                <MapPin className="mt-1 h-5 w-5 flex-none text-secondary" aria-hidden="true" />
                                <span><strong className="font-semibold text-gray-900">Shopping Morumbi:</strong> Conveniência e lazer completo.</span>
                            </li>
                            <li className="flex gap-x-3">
                                <MapPin className="mt-1 h-5 w-5 flex-none text-secondary" aria-hidden="true" />
                                <span><strong className="font-semibold text-gray-900">Escolas Internacionais:</strong> Chapel School e Suíço-Brasileira nas proximidades.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:order-1 h-[400px] w-full rounded-2xl overflow-hidden shadow-lg bg-gray-200">
                        {/* Google Maps Embed Placeholder */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.672620786576!2d-46.7099!3d-23.6161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM2JzU4LjAiUyA0NsKwNDInMzUuNiJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa de Localização Jardins da Hípica"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
