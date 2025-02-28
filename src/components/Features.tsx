
import { 
  Clock, 
  CreditCard, 
  BarChart3, 
  Users, 
  Bell, 
  Calendar 
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const features = [
  {
    icon: Clock,
    titleKey: "real_time_monitoring",
    descriptionKey: "real_time_monitoring_desc"
  },
  {
    icon: CreditCard,
    titleKey: "budget_control",
    descriptionKey: "budget_control_desc"
  },
  {
    icon: BarChart3,
    titleKey: "detailed_reports",
    descriptionKey: "detailed_reports_desc"
  },
  {
    icon: Users,
    titleKey: "team_management",
    descriptionKey: "team_management_desc"
  },
  {
    icon: Bell,
    titleKey: "smart_alerts",
    descriptionKey: "smart_alerts_desc"
  },
  {
    icon: Calendar,
    titleKey: "interactive_schedule",
    descriptionKey: "interactive_schedule_desc"
  }
];

const featureTranslations = {
  "pt-BR": {
    "real_time_monitoring": "Monitoramento em tempo real",
    "real_time_monitoring_desc": "Acompanhe o progresso de suas obras com atualizações em tempo real e notificações instantâneas.",
    "budget_control": "Controle orçamentário",
    "budget_control_desc": "Gerencie custos e despesas, com alertas quando os gastos ultrapassarem o planejado.",
    "detailed_reports": "Relatórios detalhados",
    "detailed_reports_desc": "Obtenha insights através de relatórios personalizados e visualização de dados intuitiva.",
    "team_management": "Gestão de equipes",
    "team_management_desc": "Organize equipes, atribua tarefas e avalie o desempenho de todos os colaboradores.",
    "smart_alerts": "Alertas inteligentes",
    "smart_alerts_desc": "Configure alertas para prazos, orçamentos e metas de projeto para nunca perder datas importantes.",
    "interactive_schedule": "Cronograma interativo",
    "interactive_schedule_desc": "Visualize e ajuste cronogramas de projeto com interface drag-and-drop intuitiva.",
    "simplify_management": "Simplifique o gerenciamento das suas obras",
    "platform_developed": "Nossa plataforma foi desenvolvida para facilitar o dia a dia de profissionais e empresas do setor de construção civil, permitindo o acompanhamento eficiente de projetos de todos os portes.",
    "intuitive_interface": "Interface intuitiva e fácil de usar",
    "access_any_device": "Acesso a partir de qualquer dispositivo",
    "custom_notifications": "Notificações personalizáveis",
    "exportable_reports": "Relatórios exportáveis em PDF e Excel",
    "tech_support": "Suporte técnico especializado"
  },
  "en-US": {
    "real_time_monitoring": "Real-time monitoring",
    "real_time_monitoring_desc": "Track the progress of your construction projects with real-time updates and instant notifications.",
    "budget_control": "Budget control",
    "budget_control_desc": "Manage costs and expenses, with alerts when spending exceeds the planned budget.",
    "detailed_reports": "Detailed reports",
    "detailed_reports_desc": "Gain insights through custom reports and intuitive data visualization.",
    "team_management": "Team management",
    "team_management_desc": "Organize teams, assign tasks and evaluate the performance of all collaborators.",
    "smart_alerts": "Smart alerts",
    "smart_alerts_desc": "Set alerts for deadlines, budgets and project goals to never miss important dates.",
    "interactive_schedule": "Interactive schedule",
    "interactive_schedule_desc": "Visualize and adjust project schedules with an intuitive drag-and-drop interface.",
    "simplify_management": "Simplify the management of your construction projects",
    "platform_developed": "Our platform was developed to facilitate the day-to-day operations of professionals and companies in the civil construction sector, allowing efficient monitoring of projects of all sizes.",
    "intuitive_interface": "Intuitive and easy-to-use interface",
    "access_any_device": "Access from any device",
    "custom_notifications": "Customizable notifications",
    "exportable_reports": "Reports exportable to PDF and Excel",
    "tech_support": "Specialized technical support"
  },
  "es-ES": {
    "real_time_monitoring": "Monitoreo en tiempo real",
    "real_time_monitoring_desc": "Sigue el progreso de tus obras con actualizaciones en tiempo real y notificaciones instantáneas.",
    "budget_control": "Control presupuestario",
    "budget_control_desc": "Gestiona costos y gastos, con alertas cuando los gastos superen lo planificado.",
    "detailed_reports": "Informes detallados",
    "detailed_reports_desc": "Obtén información a través de informes personalizados y visualización de datos intuitiva.",
    "team_management": "Gestión de equipos",
    "team_management_desc": "Organiza equipos, asigna tareas y evalúa el desempeño de todos los colaboradores.",
    "smart_alerts": "Alertas inteligentes",
    "smart_alerts_desc": "Configura alertas para plazos, presupuestos y objetivos del proyecto para no perder fechas importantes.",
    "interactive_schedule": "Cronograma interactivo",
    "interactive_schedule_desc": "Visualiza y ajusta cronogramas de proyectos con una interfaz de arrastrar y soltar intuitiva.",
    "simplify_management": "Simplifica la gestión de tus obras",
    "platform_developed": "Nuestra plataforma fue desarrollada para facilitar el día a día de profesionales y empresas del sector de la construcción civil, permitiendo un seguimiento eficiente de proyectos de todos los tamaños.",
    "intuitive_interface": "Interfaz intuitiva y fácil de usar",
    "access_any_device": "Acceso desde cualquier dispositivo",
    "custom_notifications": "Notificaciones personalizables",
    "exportable_reports": "Informes exportables a PDF y Excel",
    "tech_support": "Soporte técnico especializado"
  }
};

const Features = () => {
  const { language, translations } = useLanguage();
  const featureText = featureTranslations[language];

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 text-sm font-medium text-construction bg-construction/10 rounded-full mb-4">
            {translations.main_features}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {translations.everything_you_need}
          </h2>
          <p className="text-lg text-gray-600">
            {translations.platform_tools}
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
                {featureText[feature.titleKey]}
              </h3>
              <p className="text-gray-600">
                {featureText[feature.descriptionKey]}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-24 bg-gray-50 rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {featureText.simplify_management}
              </h3>
              <p className="text-gray-600 mb-6">
                {featureText.platform_developed}
              </p>
              <ul className="space-y-3">
                {[
                  featureText.intuitive_interface,
                  featureText.access_any_device,
                  featureText.custom_notifications,
                  featureText.exportable_reports,
                  featureText.tech_support
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
