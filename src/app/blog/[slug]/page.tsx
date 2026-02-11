
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";

interface Props {
    params: { slug: string };
}

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) return { title: "Artigo não encontrado" };

    return {
        title: `${post.title} | Blog Hípica Lavvi`,
        description: post.excerpt,
    };
}

export default function BlogPostPage({ params }: Props) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                <article className="py-16 sm:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                        <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para o Blog
                        </Link>

                        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center text-sm text-gray-500 mb-8 border-b border-border pb-8">
                            <Calendar className="h-4 w-4 mr-2" />
                            {post.date}
                        </div>

                        <div
                            className="prose prose-lg prose-gray max-w-none prose-headings:font-serif prose-headings:text-primary prose-a:text-secondary"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
