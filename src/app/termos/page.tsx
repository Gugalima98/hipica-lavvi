import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Termos de Uso | Hípica Lavvi Residences",
    description: "Termos e condições de uso do site oficial Hípica Lavvi Residences.",
};

export default function TermsPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-12 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-gray-700 space-y-6">
                    <h1 className="text-3xl font-bold text-primary mb-8">Termos de Uso</h1>
                    <p><strong>Última atualização: Fevereiro de 2026</strong></p>

                    <h2 className="text-xl font-semibold text-gray-900">1. Aceitação dos Termos</h2>
                    <p>Ao acessar e utilizar este site, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso.</p>

                    <h2 className="text-xl font-semibold text-gray-900">2. Uso do Site</h2>
                    <p>O conteúdo deste site é para sua informação geral e uso pessoal apenas. Ele está sujeito a alterações sem aviso prévio. As imagens apresentadas são meramente ilustrativas e o projeto poderá sofrer alterações.</p>

                    <h2 className="text-xl font-semibold text-gray-900">3. Propriedade Intelectual</h2>
                    <p>Este site contém material que é de nossa propriedade ou licenciado para nós. Este material inclui, mas não está limitado a, design, layout, aparência e gráficos. A reprodução é proibida.</p>

                    <h2 className="text-xl font-semibold text-gray-900">4. Limitação de Responsabilidade</h2>
                    <p>As informações contidas neste site são fornecidas "como estão". Não oferecemos garantias de qualquer tipo, expressas ou implícitas, sobre a integridade, precisão, confiabilidade, adequação ou disponibilidade em relação ao site ou às informações.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
