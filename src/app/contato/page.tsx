import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: "Contato e Agendamentos | Jardim da Hípica",
    description: "Agende sua visita ao decorado do Jardim da Hípica ou fale com nossos especialistas.",
};
export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                <section className="bg-primary py-16 sm:py-24">
                    <div className="container mx-auto px-4 text-center text-white">
                        <h1 className="text-4xl font-serif font-bold tracking-tight">Fale Conosco</h1>
                        <p className="mt-4 text-lg text-primary-foreground/80">
                            Nossa equipe está pronta para apresentar todos os detalhes deste projeto exclusivo.
                        </p>
                    </div>
                </section>

                <section className="py-24 bg-background">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            {/* Info Column */}
                            <div>
                                <h2 className="text-2xl font-bold text-primary mb-8">Canais de Atendimento</h2>
                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-secondary/10 rounded-lg">
                                            <Phone className="h-6 w-6 text-secondary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg text-gray-900">Telefone / WhatsApp</h3>
                                            <p className="text-gray-600">(11) 97851-9899</p>
                                            <p className="text-sm text-gray-500">Atendimento diário das 9h às 19h</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-secondary/10 rounded-lg">
                                            <MapPin className="h-6 w-6 text-secondary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg text-gray-900">Stand de Vendas</h3>
                                            <p className="text-gray-600">R. Antônio Bandeira, 129</p>
                                            <p className="text-gray-600">Alto da Boa Vista - São Paulo, SP</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-secondary/10 rounded-lg">
                                            <Mail className="h-6 w-6 text-secondary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg text-gray-900">Email</h3>
                                            <p className="text-gray-600">contato@jardinsdahipica.com</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 h-[300px] w-full rounded-2xl overflow-hidden bg-gray-200">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.2033!2d-46.703!3d-23.627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50e8544f808f%3A0x6bba3c2b0c3f0c3a!2sR.%20Ant%C3%B4nio%20Bandeira%2C%20129%20-%20Vila%20Cruzeiro%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004731-000!5e0!3m2!1spt-BR!2sbr!4v1711380000000!5m2!1spt-BR!2sbr"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Localização do Stand de Vendas do Jardim da Hípica"
                                    ></iframe>
                                </div>
                            </div>

                            {/* Form Column */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-border">
                                <h2 className="text-2xl font-bold text-primary mb-6">Envie uma Mensagem</h2>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
