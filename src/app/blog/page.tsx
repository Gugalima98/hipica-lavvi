import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { blogPosts } from "@/lib/blog-data";
import { ArrowRight, Calendar } from "lucide-react";

export const metadata: Metadata = {
    title: "Blog & Notícias | Hípica Lavvi Residences",
    description: "Fique por dentro das novidades do mercado imobiliário e do lançamento Hípica Lavvi.",
};

export default function BlogListingPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 bg-muted/20">
                <section className="bg-primary py-16 sm:py-24">
                    <div className="container mx-auto px-4 text-center text-white">
                        <h1 className="text-4xl font-serif font-bold tracking-tight">Lifestyle & Mercado</h1>
                        <p className="mt-4 text-lg text-primary-foreground/80">
                            Conteúdos exclusivos sobre a região e tendências de alto padrão.
                        </p>
                    </div>
                </section>

                <section className="py-16 sm:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogPosts.map((post) => (
                                <article key={post.slug} className="group bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border">
                                    <div className="aspect-[16/9] bg-gray-200 relative overflow-hidden">
                                        {/* Placeholder for Image */}
                                        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">
                                            <span>Imagem Blog</span>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <div className="flex items-center text-sm text-muted-foreground mb-4">
                                            <Calendar className="h-4 w-4 mr-2" />
                                            {post.date}
                                        </div>
                                        <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2">
                                            <Link href={`/blog/${post.slug}`}>
                                                {post.title}
                                            </Link>
                                        </h3>
                                        <p className="mt-3 text-base text-gray-600 line-clamp-3">
                                            {post.excerpt}
                                        </p>

                                        <div className="mt-6">
                                            <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-secondary font-medium hover:underline">
                                                Ler artigo completo <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
