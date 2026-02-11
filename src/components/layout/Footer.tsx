import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <span className="text-2xl font-serif font-bold tracking-tight">
                            HÍPICA LAVVI
                        </span>
                        <p className="text-sm leading-6 text-primary-foreground/80 max-w-xs">
                            Um residencial clube exclusivo com 50.000m² ao lado da Hípica de Santo Amaro. O encontro perfeito entre a natureza e o design.
                        </p>
                        <div className="flex space-x-6">
                            <Link href="#" className="text-primary-foreground/60 hover:text-white">
                                <span className="sr-only">Facebook</span>
                                <Facebook className="h-6 w-6" />
                            </Link>
                            <Link href="#" className="text-primary-foreground/60 hover:text-white">
                                <span className="sr-only">Instagram</span>
                                <Instagram className="h-6 w-6" />
                            </Link>
                            <Link href="#" className="text-primary-foreground/60 hover:text-white">
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
                                        <Link href="/empreendimento" className="text-sm leading-6 text-primary-foreground/80 hover:text-white">
                                            O Empreendimento
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/imoveis" className="text-sm leading-6 text-primary-foreground/80 hover:text-white">
                                            Plantas e Tipologias
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/sobre" className="text-sm leading-6 text-primary-foreground/80 hover:text-white">
                                            Sobre a Lavvi
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog" className="text-sm leading-6 text-primary-foreground/80 hover:text-white">
                                            Blog e Notícias
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <Link href="/termos" className="text-sm leading-6 text-primary-foreground/80 hover:text-white">
                                            Termos de Uso
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacidade" className="text-sm leading-6 text-primary-foreground/80 hover:text-white">
                                            Política de Privacidade
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-1 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Contato (NAP)</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li className="text-sm leading-6 text-primary-foreground/80">
                                        <strong className="block text-white">Endereço:</strong>
                                        Rua. Visconde de Taunay, 140 - Vila Cruzeiro, São Paulo - SP, 04726-010
                                        <br />
                                        (Ao lado do Clube Hípico)
                                    </li>
                                    <li className="text-sm leading-6 text-primary-foreground/80">
                                        <strong className="block text-white">Telefone:</strong>
                                        (11) 99999-9999
                                    </li>
                                    <li className="text-sm leading-6 text-primary-foreground/80">
                                        <strong className="block text-white">Email:</strong>
                                        contato@hipicalavvi.com.br
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-primary-foreground/60">
                        &copy; 2026 Hípica Lavvi Residences. Todos os direitos reservados.
                        <br />
                        As imagens são meramente ilustrativas e podem sofrer alterações sem aviso prévio. Material preliminar sujeito a aprovação.
                    </p>
                </div>
            </div>
        </footer>
    );
}
