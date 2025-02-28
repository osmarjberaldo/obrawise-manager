
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "pt-BR" | "en-US" | "es-ES";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: Record<string, string>;
}

const translations: Record<Language, Record<string, string>> = {
  "pt-BR": {
    "home": "Início",
    "how_it_works": "Como Funciona",
    "features": "Funcionalidades",
    "pricing": "Planos",
    "contact": "Contato",
    "access_panel": "Acessar Painel",
    "get_started": "Comece Gratuitamente",
    "see_demo": "Ver Demonstração",
    "manage_efficiently": "Gerencie suas obras com eficiência",
    "simplify_management": "Simplifique o gerenciamento das suas",
    "civil_works": "obras civis",
    "platform_description": "Uma plataforma completa para acompanhar o progresso, gerenciar recursos e manter o controle de todas as suas construções em um só lugar.",
    "trusted_companies": "Mais de 500 empresas confiam em nossa plataforma",
    "project_progress": "Progresso do projeto",
    "know_how_it_works": "Saiba como funciona o App Diário de Obra",
    "main_features": "Funcionalidades Principais",
    "everything_you_need": "Tudo o que você precisa para gerenciar suas obras",
    "platform_tools": "Nossa plataforma reúne todas as ferramentas necessárias para que engenheiros, arquitetos e construtoras monitorem seus projetos com eficiência.",
    "our_plans": "Nossos Planos",
    "choose_ideal_plan": "Escolha o plano ideal para o seu negócio",
    "flexible_packages": "Oferecemos pacotes flexíveis que se adaptam às necessidades de profissionais e empresas de todos os portes.",
    "custom_plan": "Precisa de um plano personalizado?",
    "talk_to_team": "Fale com nossa equipe para criar um plano sob medida para sua empresa.",
    "request_proposal": "Solicitar Proposta"
  },
  "en-US": {
    "home": "Home",
    "how_it_works": "How It Works",
    "features": "Features",
    "pricing": "Pricing",
    "contact": "Contact",
    "access_panel": "Access Dashboard",
    "get_started": "Get Started for Free",
    "see_demo": "See Demo",
    "manage_efficiently": "Manage your construction projects efficiently",
    "simplify_management": "Simplify the management of your",
    "civil_works": "construction projects",
    "platform_description": "A complete platform to track progress, manage resources, and maintain control of all your construction projects in one place.",
    "trusted_companies": "More than 500 companies trust our platform",
    "project_progress": "Project progress",
    "know_how_it_works": "Learn how the Construction Diary App works",
    "main_features": "Main Features",
    "everything_you_need": "Everything you need to manage your construction projects",
    "platform_tools": "Our platform brings together all the necessary tools for engineers, architects, and construction companies to efficiently monitor their projects.",
    "our_plans": "Our Plans",
    "choose_ideal_plan": "Choose the ideal plan for your business",
    "flexible_packages": "We offer flexible packages that adapt to the needs of professionals and companies of all sizes.",
    "custom_plan": "Need a custom plan?",
    "talk_to_team": "Talk to our team to create a tailored plan for your company.",
    "request_proposal": "Request Proposal"
  },
  "es-ES": {
    "home": "Inicio",
    "how_it_works": "Cómo Funciona",
    "features": "Características",
    "pricing": "Planes",
    "contact": "Contacto",
    "access_panel": "Acceder al Panel",
    "get_started": "Comienza Gratis",
    "see_demo": "Ver Demostración",
    "manage_efficiently": "Gestiona tus obras con eficiencia",
    "simplify_management": "Simplifica la gestión de tus",
    "civil_works": "obras civiles",
    "platform_description": "Una plataforma completa para seguir el progreso, gestionar recursos y mantener el control de todas tus construcciones en un solo lugar.",
    "trusted_companies": "Más de 500 empresas confían en nuestra plataforma",
    "project_progress": "Progreso del proyecto",
    "know_how_it_works": "Descubre cómo funciona la App Diario de Obra",
    "main_features": "Características Principales",
    "everything_you_need": "Todo lo que necesitas para gestionar tus obras",
    "platform_tools": "Nuestra plataforma reúne todas las herramientas necesarias para que ingenieros, arquitectos y constructoras monitoreen sus proyectos con eficiencia.",
    "our_plans": "Nuestros Planes",
    "choose_ideal_plan": "Elige el plan ideal para tu negocio",
    "flexible_packages": "Ofrecemos paquetes flexibles que se adaptan a las necesidades de profesionales y empresas de todos los tamaños.",
    "custom_plan": "¿Necesitas un plan personalizado?",
    "talk_to_team": "Habla con nuestro equipo para crear un plan a medida para tu empresa.",
    "request_proposal": "Solicitar Propuesta"
  }
};

const languageNames: Record<Language, string> = {
  "pt-BR": "Português",
  "en-US": "English",
  "es-ES": "Español"
};

const LanguageContext = createContext<LanguageContextType>({
  language: "pt-BR",
  setLanguage: () => {},
  translations: translations["pt-BR"]
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    return savedLanguage || "pt-BR";
  });

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage) {
      setLanguageState(savedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage, 
        translations: translations[language] 
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export { languageNames };
