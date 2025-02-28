
import { 
  Clock, 
  CreditCard, 
  BarChart3, 
  Users, 
  Bell, 
  Calendar 
} from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Monitoramento em tempo real",
    description: "Acompanhe o progresso de suas obras com atualizações em tempo real e notificações instantâneas."
  },
  {
    icon: CreditCard,
    title: "Controle orçamentário",
    description: "Gerencie custos e despesas, com alertas quando os gastos ultrapassarem o planejado."
  },
  {
    icon: BarChart3,
    title: "Relatórios detalhados",
    description: "Obtenha insights através de relatórios personalizados e visualização de dados intuitiva."
  },
  {
    icon: Users,
    title: "Gestão de equipes",
    description: "Organize equipes, atribua tarefas e avalie o desempenho de todos os colaboradores."
  },
  {
    icon: Bell,
    title: "Alertas inteligentes",
    description: "Configure alertas para prazos, orçamentos e metas de projeto para nunca perder datas importantes."
  },
  {
    icon: Calendar,
    title: "Cronograma interativo",
    description: "Visualize e ajuste cronogramas de projeto com interface drag-and-drop intuitiva."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 text-sm font-medium text-construction bg-construction/10 rounded-full mb-4">
            Funcionalidades Principais
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tudo o que você precisa para gerenciar suas obras
          </h2>
          <p className="text-lg text-gray-600">
            Nossa plataforma reúne todas as ferramentas necessárias para que engenheiros, arquitetos e construtoras monitorem seus projetos com eficiência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-feature hover:shadow-elevated transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 feature-icon-bg rounded-lg flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-construction" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-24 bg-gray-50 rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Simplifique o gerenciamento das suas obras
              </h3>
              <p className="text-gray-600 mb-6">
                Nossa plataforma foi desenvolvida para facilitar o dia a dia de profissionais e empresas do setor de construção civil, permitindo o acompanhamento eficiente de projetos de todos os portes.
              </p>
              <ul className="space-y-3">
                {[
                  "Interface intuitiva e fácil de usar",
                  "Acesso a partir de qualquer dispositivo",
                  "Notificações personalizáveis",
                  "Relatórios exportáveis em PDF e Excel",
                  "Suporte técnico especializado"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-full">
              <img
                src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Dashboard da plataforma"
                className="w-full h-full object-cover"
                style={{ minHeight: "400px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
