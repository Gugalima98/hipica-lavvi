import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 bg-secondary rounded-full flex items-center justify-center">
                                <span className="text-primary font-serif font-bold text-lg">L</span>
                            </div>
                            <span className="text-2xl font-serif text-white font-bold tracking-tight">Jardins da Hípica</span>
                        </div>
                        <p className="text-gray-400 font-light leading-relaxed max-w-xs">
                            O encontro perfeito entre a natureza e a sofisticação urbana. Um oásis particular em frente à Hípica Santo Amaro.
                        </p>
                        <div className="flex space-x-6">
                            <Link href="#" className="text-white/60 hover:text-white">
                                <span className="sr-only">Facebook</span>
                                <Facebook className="h-6 w-6" />
                            </Link>
                            <Link href="#" className="text-white/60 hover:text-white">
                                <span className="sr-only">Instagram</span>
                                <Instagram className="h-6 w-6" />
                            </Link>
                            <Link href="#" className="text-white/60 hover:text-white">
                                <span className="sr-only">LinkedIn</span>
                                <Linkedin className="h-6 w-6" />
                            </Link>
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Navegação</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <Link href="/empreendimento" className="text-sm leading-6 text-white/80 hover:text-white">
                                            O Empreendimento
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/imoveis" className="text-sm leading-6 text-white/80 hover:text-white">
                                            Plantas e Tipologias
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/sobre" className="text-sm leading-6 text-white/80 hover:text-white">
                                            Sobre a Lavvi
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <Link href="/termos" className="text-sm leading-6 text-white/80 hover:text-white">
                                            Termos de Uso
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacidade" className="text-sm leading-6 text-white/80 hover:text-white">
                                            Política de Privacidade
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-1 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Contato</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li className="text-sm leading-6 text-white/80">
                                        <strong className="block text-white">Endereço:</strong>
                                        Rua. Visconde de Taunay, 140 - Vila Cruzeiro, São Paulo - SP, 04726-010
                                        <br />
                                        (Ao lado do Clube Hípico)
                                    </li>
                                    <li className="text-sm leading-6 text-white/80">
                                        <strong className="block text-white">Telefone:</strong>
                                        (11) 97851-9899
                                    </li>
                                    <li className="text-sm leading-6 text-white/80">
                                        <strong className="block text-white">Email:</strong>
                                        contato@hipicalavvi.com.br
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-light">
                        <p>&copy; {new Date().getFullYear()} Jardins da Hípica. Todos os direitos reservados.</p>
                        <div className="flex gap-6">
                            <Link href="/privacidade" className="hover:text-secondary transition-colors">Política de Privacidade</Link>
                            <Link href="/termos" className="hover:text-secondary transition-colors">Termos de Uso</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
