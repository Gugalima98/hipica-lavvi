
import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { properties } from "@/lib/data";
import { BedDouble, Bath, Car, ArrowLeft, Ruler, CheckCircle2 } from "lucide-react";
import { PropertyClientView } from "@/components/sections/PropertyClientView";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";

interface Props {
    params: { slug: string };
}

export function generateStaticParams() {
    return properties.map((property) => ({
        slug: property.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const property = properties.find((p) => p.slug === params.slug);
    if (!property) {
        return {
            title: "Imóvel não encontrado | Jardim da Hípica",
        };
    }

    return {
        title: `Jardins da Hípica Lavvi | ${property.tower} - ${property.area}m² - ${property.bedrooms} Quartos`,
        description: `Conheça a ${property.title} no Jardim da Hípica Lavvi (Jardins da Hípica) em Santo Amaro. Apartamento de ${property.area}m² com ${property.suites} suítes e ${property.garages} vagas. ${property.description}`,
    };
}

export default function PropertyDetailsPage({ params }: Props) {
    const property = properties.find((p) => p.slug === params.slug);

    if (!property) {
        notFound();
    }

    const otherProperties = properties.filter((p) => p.slug !== params.slug).slice(0, 3);

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": `Jardim da Hípica Lavvi - ${property.title}`,
        "description": property.description,
        "image": `https://www.jardinsdahipica.com${property.images[0]}`,
        "brand": {
            "@type": "Brand",
            "name": "Lavvi"
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "BRL",
            "availability": "https://schema.org/PreOrder",
            "price": "0" // Price on request
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.jardinsdahipica.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Imóveis",
                "item": "https://www.jardinsdahipica.com/imoveis"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": `${property.title}`
            }
        ]
    };

    return (
        <div className="flex min-h-screen flex-col">
            <JsonLd data={[productSchema, breadcrumbSchema]} />
            <PropertyClientView property={property} otherProperties={otherProperties} />
        </div>
    );
}
