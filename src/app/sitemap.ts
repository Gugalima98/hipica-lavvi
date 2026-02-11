import { MetadataRoute } from "next";
import { properties } from "@/lib/data";
import { blogPosts } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://hipicalavvi.com.br"; // Replace with actual domain

    const staticRoutes = [
        "",
        "/sobre",
        "/empreendimento",
        "/imoveis",
        "/contato",
        "/blog",
        "/termos",
        "/privacidade",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    const propertyRoutes = properties.map((property) => ({
        url: `${baseUrl}/imoveis/${property.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    }));

    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(), // In a real app, use post.date
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [...staticRoutes, ...propertyRoutes, ...blogRoutes];
}
