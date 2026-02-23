import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Política de Privacidade | Jardins da Hípica",
    description: "Como tratamos seus dados no site oficial Jardins da Hípica.",
};
export default function PrivacyPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1 py-12 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-gray-700 space-y-6">
                    <h1 className="text-3xl font-bold text-primary mb-8">Política de Privacidade</h1>
                    <p><strong>Última atualização: Fevereiro de 2026</strong></p>

                    <h2 className="text-xl font-semibold text-gray-900">1. Coleta de Informações</h2>
                    <p>Coletamos informações que você nos fornece diretamente, como quando você preenche o formulário de contato (nome, email, telefone). Também coletamos dados de navegação anonimizados para fins estatísticos.</p>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        A sua privacidade é importante para nós. É política do Jardins da Hípica respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <a href="https://www.jardinsdahipica.com" className="text-secondary hover:underline">Jardins da Hípica</a>, e outros sites que possuímos e operamos.
                    </p>
                    <h2 className="text-xl font-semibold text-gray-900">2. Uso das Informações</h2>
                    <p>Utilizamos suas informações para: responder às suas solicitações, enviar informações sobre o empreendimento (com seu consentimento) e melhorar nosso site.</p>

                    <h2 className="text-xl font-semibold text-gray-900">3. Compartilhamento de Dados</h2>
                    <p>Não vendemos ou alugamos seus dados pessoais a terceiros. Podemos compartilhar dados com parceiros de vendas oficiais da Lavvi exclusivamente para atendimento do seu interesse no imóvel.</p>

                    <h2 className="text-xl font-semibold text-gray-900">4. Seus Direitos</h2>
                    <p>Você tem o direito de solicitar o acesso, correção ou exclusão de seus dados pessoais a qualquer momento, entrando em contato conosco através do email informado no rodapé.</p>
                </div>
            </main>
        </div>
    );
}
