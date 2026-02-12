"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
    { name: "O Empreendimento", href: "/empreendimento" },
    { name: "Tipologias", href: "/imoveis" },
    { name: "Sobre", href: "/sobre" },
    { name: "Contato", href: "/contato" },
];

export function FloatingNav() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            // Show nav after scrolling down 100px
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Only render if visible or if mobile menu is open (to not trap user)
    // We keep it mounted but animate presence

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.header
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                    className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
                >
                    <div className="relative flex items-center justify-between gap-8 rounded-full border border-white/10 bg-primary/80 backdrop-blur-md px-6 py-3 shadow-2xl shadow-black/20 ring-1 ring-white/10">

                        {/* Logo Compacto */}
                        <Link href="/" className="flex items-center gap-2 pr-4 border-r border-white/10">
                            <span className="font-serif text-xl font-bold tracking-tighter text-white">
                                LV
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-1">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-white/10 hover:text-white",
                                        pathname === link.href
                                            ? "bg-white/10 text-white"
                                            : "text-white/70"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        {/* CTA & Mobile Toggle */}
                        <div className="flex items-center gap-3 pl-4 border-l border-white/10">
                            <Button
                                size="sm"
                                className="hidden md:flex rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg shadow-secondary/20"
                                asChild
                            >
                                <Link href="/contato">
                                    Lista VIP
                                </Link>
                            </Button>

                            <button
                                className="md:hidden p-2 text-white/80 hover:text-white"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </motion.header>
            )}

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="fixed inset-0 z-40 bg-primary/95 backdrop-blur-xl pt-32 px-6"
                >
                    <div className="flex flex-col gap-6">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-2xl font-serif text-white/90 hover:text-secondary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button
                            size="lg"
                            className="mt-8 w-full rounded-full bg-secondary text-secondary-foreground"
                            asChild
                        >
                            <Link href="/contato" onClick={() => setIsMobileMenuOpen(false)}>
                                Entrar na Lista VIP
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
