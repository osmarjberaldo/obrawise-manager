
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Básico",
    price: "R$ 99",
    billing: "/mês",
    description: "Ideal para profissionais autônomos e pequenas empresas",
    features: [
      "Até 5 projetos simultâneos",
      "2 usuários incluídos",
      "Monitoramento em tempo real",
      "Relatórios básicos",
      "Suporte por email"
    ],
    buttonText: "Começar Agora",
    isPopular: false
  },
  {
    name: "Profissional",
    price: "R$ 199",
    billing: "/mês",
    description: "Perfeito para construtoras de médio porte",
    features: [
      "Até 15 projetos simultâneos",
      "10 usuários incluídos",
      "Relatórios avançados",
      "Controle orçamentário completo",
      "Acesso ao aplicativo móvel",
      "Integração com calendário",
      "Suporte prioritário"
    ],
    buttonText: "Escolher Plano",
    isPopular: true
  },
  {
    name: "Empresarial",
    price: "R$ 349",
    billing: "/mês",
    description: "Para empresas de grande porte e projetos complexos",
    features: [
      "Projetos ilimitados",
      "Usuários ilimitados",
      "Relatórios customizados",
      "API para integrações",
      "Segurança avançada",
      "Backup automático diário",
      "Gerenciamento de documentos",
      "Suporte 24/7 com atendente dedicado"
    ],
    buttonText: "Falar com Consultor",
    isPopular: false
  }
];

const PricingTable = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 text-sm font-medium text-construction bg-construction/10 rounded-full mb-4">
            Nossos Planos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Escolha o plano ideal para o seu negócio
          </h2>
          <p className="text-lg text-gray-600">
            Oferecemos pacotes flexíveis que se adaptam às necessidades de profissionais e empresas de todos os portes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl overflow-hidden shadow-pricing transition-all duration-300 hover:shadow-xl relative ${
                plan.isPopular ? "md:scale-105 ring-2 ring-construction" : ""
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-construction text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  Mais Popular
                </div>
              )}
              <div className="p-6 md:p-8 border-b">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4 h-12">{plan.description}</p>
                <div className="flex items-baseline my-4">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.billing}</span>
                </div>
                <Button 
                  className={`w-full py-6 h-auto text-base ${
                    plan.isPopular 
                      ? "bg-construction hover:bg-construction-dark" 
                      : "bg-gray-800 hover:bg-gray-700"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </div>
              <div className="p-6 md:p-8 bg-gray-50">
                <h4 className="font-medium text-gray-900 mb-4">O que está incluído:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 md:p-10 mt-16 shadow-subtle max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Precisa de um plano personalizado?</h3>
              <p className="text-gray-600">Fale com nossa equipe para criar um plano sob medida para sua empresa.</p>
            </div>
            <Button 
              variant="outline" 
              className="border-construction text-construction hover:bg-construction/5 font-medium px-6 min-w-40"
              size="lg"
            >
              Solicitar Proposta
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
