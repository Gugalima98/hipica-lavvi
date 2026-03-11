interface Property {
    slug: string;
    title: string;
    description: string;
    price: string;
    area: number;
    bedrooms: number;
    suites: number;
    bathrooms: number;
    garages: number;
    tower: string;
    images: string[];
    features: string[];
    towerDetails: {
        floors: number;
        unitsPerFloor: number;
        elevators: string; // Placeholder or estimate
        totalUnits: number;
    };
}

export const properties: Property[] = [
    // TORRE A
    {
        slug: "torre-a-276m",
        title: "Torre A - 276m²",
        description: "A máxima exclusividade. 4 Suítes, sendo a master com closet Sr. e Sra., living com vista panorâmica.",
        price: "Sob Consulta",
        area: 276,
        bedrooms: 4,
        suites: 4,
        bathrooms: 5,
        garages: 4,
        tower: "Torre A",
        images: ["/images/torres/jardins-da-hipica-lavvi-torre-a-276m.png", "/images/plantas-novas/apto-ta-final-1-276m-tipo-ef.webp", "/images/plantas-novas/apto-ta-final-1-276m-opcao-ef2.webp"],
        features: ["Hall Privativo", "Varanda Gourmet Integrada", "Closet Sr. e Sra.", "Dependência Completa", "Vista Panorâmica"],
        towerDetails: { floors: 43, unitsPerFloor: 4, elevators: "Social + Serviço", totalUnits: 172 }
    },
    {
        slug: "torre-a-180m",
        title: "Torre A - 180m²",
        description: "Sofisticação e amplitude. 4 dormitórios ou 3 suítes com sala ampliada.",
        price: "Sob Consulta",
        area: 180,
        bedrooms: 4,
        suites: 3,
        bathrooms: 5,
        garages: 3,
        tower: "Torre A",
        images: ["/images/torres/jardins-da-hipica-lavvi-torre-a-180m.png", "/images/plantas-novas/apto-ta-final-3-180m-tipo-ef.webp", "/images/plantas-novas/apto-ta-final-3-180m-opcao-ef.webp"],
        features: ["Hall Privativo", "Varanda Gourmet", "Lavabo", "Despensa", "Suíte Master com Closet"],
        towerDetails: { floors: 43, unitsPerFloor: 4, elevators: "Social + Serviço", totalUnits: 172 }
    },
    // TORRE B
    {
        slug: "torre-b-149m",
        title: "Torre B - 149m² (Final 6: 150m²)",
        description: "3 Suítes confortáveis e um living que convida ao convívio.",
        price: "Sob Consulta",
        area: 150,
        bedrooms: 3,
        suites: 3,
        bathrooms: 4,
        garages: 2,
        tower: "Torre B",
        images: ["/images/torres/jardins-da-hipica-lavvi-torre-b-149m.png", "/images/plantas-novas/apto-tb-final-6-150m-tipo-ef2.webp", "/images/plantas-novas/apto-tb-final-6-150m-opcao-ef.webp"],
        features: ["Varanda Gourmet", "Hall Semiprivativo", "Lavabo", "Suíte Master com Closet"],
        towerDetails: { floors: 43, unitsPerFloor: 6, elevators: "Social + Serviço", totalUnits: 258 }
    },
    {
        slug: "torre-b-133m",
        title: "Torre B - 133m²",
        description: "A medida certa da sofisticação. 3 Suítes e varanda gourmet integrada.",
        price: "Sob Consulta",
        area: 133,
        bedrooms: 3,
        suites: 3,
        bathrooms: 4,
        garages: 2,
        tower: "Torre B",
        images: ["/images/torres/jardins-da-hipica-lavvi-torre-b-133m.png", "/images/plantas-novas/apto-tb-final-3-133m-tipo-ef2.webp", "/images/plantas-novas/apto-tb-final-3-133m-opcao-ef2.webp"],
        features: ["Varanda Gourmet", "Lavabo", "Cozinha Americana (Opcional)", "Rouparia"],
        towerDetails: { floors: 43, unitsPerFloor: 6, elevators: "Social + Serviço", totalUnits: 258 }
    },
    {
        slug: "torre-b-84m",
        title: "Torre B - 84m²",
        description: "Compacto premium com 2 suítes ou 3 dormitórios.",
        price: "Sob Consulta",
        area: 84,
        bedrooms: 3,
        suites: 1,
        bathrooms: 2,
        garages: 1,
        tower: "Torre B",
        images: ["/images/torres/jardins-da-hipica-lavvi-torre-b-84m.png", "/images/plantas-novas/apto-tb-final-5-84m-tipo-ef2.webp", "/images/plantas-novas/apto-tb-final-5-84m-opcao-ef2.webp"],
        features: ["Varanda Integrada", "Opção 2 Suítes", "Lavabo", "Cozinha Moderna"],
        towerDetails: { floors: 43, unitsPerFloor: 6, elevators: "Social + Serviço", totalUnits: 258 }
    },
    // TORRE C
    {
        slug: "torre-c-170m",
        title: "Torre C - 171m²",
        description: "Espaço para viver grandes momentos. 4 dormitórios e layout flexível.",
        price: "Sob Consulta",
        area: 171,
        bedrooms: 4,
        suites: 2,
        bathrooms: 4,
        garages: 2,
        tower: "Torre C",
        images: ["/images/torres/jardins-da-hipica-lavvi-torre-c-170m.png", "/images/plantas-novas/apto-tc-final-8-171m-tipo-ef2.webp", "/images/plantas-novas/apto-tc-final-8-171m-opcao-p3.webp"],
        features: ["Varanda Gourmet", "Hall Semiprivativo", "Lavabo", "Área de Serviço Separada"],
        towerDetails: { floors: 43, unitsPerFloor: 8, elevators: "Social + Serviço", totalUnits: 344 }
    },
    {
        slug: "torre-c-133m",
        title: "Torre C - 134m²",
        description: "Planta versátil com 3 suítes.",
        price: "Sob Consulta",
        area: 134,
        bedrooms: 3,
        suites: 3,
        bathrooms: 4,
        garages: 2,
        tower: "Torre C",
        images: ["/images/torres/jardins-da-hipica-lavvi-torre-c-133m.png", "/images/plantas-novas/apto-tc-final-5-134m-tipo-ef2.webp", "/images/plantas-novas/apto-tc-final-5-134m-opcao-ef.webp"],
        features: ["Varanda Gourmet", "Lavabo", "Suíte Master"],
        towerDetails: { floors: 43, unitsPerFloor: 8, elevators: "Social + Serviço", totalUnits: 344 }
    },
    {
        slug: "torre-c-84m",
        title: "Torre C - 84m²",
        description: "Ideal para investir ou morar. Opções de 2 ou 3 dormitórios.",
        price: "Sob Consulta",
        area: 84,
        bedrooms: 3,
        suites: 1,
        bathrooms: 2,
        garages: 1,
        tower: "Torre C",
        images: ["/images/torres/jardins-da-hipica-lavvi-torre-c-84m.png", "/images/plantas-novas/apto-tc-final-6-84m-tipo-ef2.webp", "/images/plantas-novas/apto-tc-final-6-84m-opcao-p3.webp"],
        features: ["Varanda Integrada", "Compacto de Luxo", "Lavabo"],
        towerDetails: { floors: 43, unitsPerFloor: 8, elevators: "Social + Serviço", totalUnits: 344 }
    },
    // TORRE D
    {
        slug: "torre-d-223m",
        title: "Torre D - 223m²",
        description: "Luxo e conforto em cada detalhe. 4 Suítes espaçosas.",
        price: "Sob Consulta",
        area: 223,
        bedrooms: 4,
        suites: 4,
        bathrooms: 5,
        garages: 3,
        tower: "Torre D",
        images: ["/images/torres/jardins-da-hipica-lavvi-torre-d-223m.png", "/images/plantas-novas/apto-td-final-2-223m-tipo-ef2.webp", "/images/plantas-novas/apto-td-final-2-223m-opcao-ef2.webp"],
        features: ["Hall Privativo", "Varanda Gourmet em L", "Suíte Master Ampliada", "Dependência de Serviço"],
        towerDetails: { floors: 43, unitsPerFloor: 4, elevators: "Social + Serviço", totalUnits: 172 }
    },
    {
        slug: "torre-d-184m",
        title: "Torre D - 184m²",
        description: "Planta inteligente com 4 dormitórios.",
        price: "Sob Consulta",
        area: 184,
        bedrooms: 4,
        suites: 3,
        bathrooms: 4,
        garages: 2,
        tower: "Torre D",
        images: ["/images/torres/jardins-da-hipica-lavvi-torre-d-184m.png", "/images/plantas-novas/apto-td-final-3-184m-tipo-ef.webp", "/images/plantas-novas/apto-td-final-3-184m-opcao-ef2.webp"],
        features: ["Hall Privativo", "Varanda Gourmet", "Lavabo", "Cozinha com Ventilação Natural"],
        towerDetails: { floors: 43, unitsPerFloor: 4, elevators: "Social + Serviço", totalUnits: 172 }
    },
];
