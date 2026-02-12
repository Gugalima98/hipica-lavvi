"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Home", href: "/" },
    { name: "O Empreendimento", href: "/empreendimento" },
    { name: "Imóveis", href: "/imoveis" },
    { name: "Sobre", href: "/sobre" },
    { name: "Contato", href: "/contato" },
];

import { usePathname } from "next/navigation";

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <header className={cn(
            "w-full z-40 transition-all duration-300",
            isHome ? "absolute top-0 border-b border-white/10 bg-transparent" : "relative bg-primary shadow-md border-b border-white/10"
        )}>
            <div className="container mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="text-2xl font-serif font-bold text-white tracking-wide">
                            HÍPICA LAVVI
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium leading-6 text-white/90 hover:text-secondary transition-colors tracking-wide"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white hover:text-primary bg-transparent backdrop-blur-sm" asChild>
                        <Link href="/contato">Agendar Visita</Link>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="sr-only">Abrir menu principal</span>
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Menu className="h-6 w-6" aria-hidden="true" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden">
                    <div className="space-y-1 px-4 pb-3 pt-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="mt-4">
                            <Button className="w-full" asChild>
                                <Link href="/contato" onClick={() => setMobileMenuOpen(false)}>
                                    Agendar Visita
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
