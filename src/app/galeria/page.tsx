import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/FadeIn';
import { GalleryViewer } from '@/components/sections/GalleryViewer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Galeria de Imagens | Jardim da Hípica - Lazer de Clube",
    description: "Explore todas as imagens do projeto Jardim da Hípica, incluindo fachadas, lazer exclusivo e ambientes decorados.",
};

export default function GaleriaPage() {
    const imagesDirectory = path.join(process.cwd(), 'public/images/galeria');
    let imageFiles: string[] = [];
    try {
        imageFiles = fs.readdirSync(imagesDirectory).filter(file => file.endsWith('.webp'));
    } catch (e) {
        console.error("No gallery directory found yet");
    }

    // Generate some semi-random classes for a masonry-like grid
    const getGridClass = (index: number) => {
        const classes = [
            "md:col-span-2 md:row-span-2",
            "md:col-span-1 md:row-span-1",
            "md:col-span-1 md:row-span-2",
            "md:col-span-2 md:row-span-1"
        ];
        // use deterministic pseudo-random logic based on index
        return classes[index % classes.length];
    };

    return (
        <div className="flex min-h-screen flex-col bg-stone-50">
            <main className="flex-1 py-24 sm:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn className="text-center mb-16">
                        <h1 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-3">
                            Jardim da Hípica
                        </h1>
                        <h2 className="font-serif text-4xl text-primary md:text-5xl mb-6">
                            Galeria Completa do Projeto
                        </h2>
                        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
                            Explore cada detalhe e imagine sua nova vida de exclusividade.
                        </p>
                        <Link href="/" className="inline-block text-secondary font-bold tracking-wider hover:underline transition-all">
                            &larr; Voltar ao Início
                        </Link>
                    </FadeIn>

                    <GalleryViewer images={imageFiles} />
                </div>
            </main>
        </div>
    );
}
