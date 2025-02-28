
import { Book, Calendar, CheckSquare, ClipboardList, FileText, Image, MessageCircle, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ComoFunciona = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-orange-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                O que é o App Diário de Obra?
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                É um software que permite registrar e acompanhar diariamente os serviços realizados nas obras, 
                através de um relatório padronizado "Relatório Diário de Obra (RDO)", fácil de preencher e simples de acompanhar.
              </p>
              <div className="flex justify-center">
                <Button 
                  className="bg-construction hover:bg-construction-dark text-white font-medium text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Experimente 30 Dias Grátis
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  Permite ter um histórico diário de tudo que aconteceu, saber os principais problemas 
                  e ocorrências que estão acontecendo nas obras.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Registrar as atividades executadas, mão de obra e pessoas presentes, fotos e vídeos da execução diária.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Manter o cliente da obra atualizado diariamente sobre a evolução do projeto e facilitar 
                  a comunicação entre o canteiro de obra, fiscalização, gestor de obra, engenheiro responsável, 
                  diretor e o escritório da empresa. 
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                  Como funciona na prática o App Diário de Obra
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  O relatório diário de obra é um sistema online valioso para o gerenciamento de obras de construção.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Te ajuda a monitorar o progresso da obra, identificar problemas, melhorar a comunicação, 
                  documentar o projeto, gerenciar recursos, identificar oportunidades de melhoria e muito mais.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
                Veja como o funcionamento é simples e padronizado
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-construction/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-construction">1</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Cadastre suas obras</h3>
                  </div>
                  <p className="text-gray-700 ml-16">
                    Cadastre todas as suas obras no sistema
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-construction/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-construction">2</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Crie relatórios diários</h3>
                  </div>
                  <p className="text-gray-700 ml-16">
                    Para cada dia de trabalho na obra, se cria um relatório
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-construction/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-construction">3</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Registre informações</h3>
                  </div>
                  <p className="text-gray-700 ml-16">
                    Registre informações e fatos importantes referente ao andamento dos serviços executados nas obras, fotos e vídeos
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-construction/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-construction">4</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Compartilhe e acompanhe</h3>
                  </div>
                  <p className="text-gray-700 ml-16">
                    Acompanhe e compartilhe as informações registradas com outras pessoas da empresa e cliente da obra
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Register Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                O que registrar no relatório?
              </h2>
              <p className="text-lg text-gray-700 mb-10 text-center">
                Tudo que você precisa para registrar o dia a dia de sua obra, e ter segurança para armazenar as informações 
                e compartilhar de forma simples com todos os envolvidos no projeto.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[
                  { icon: FileText, text: "Informações da obra" },
                  { icon: Calendar, text: "Prazos" },
                  { icon: Clock, text: "Horário de trabalho" },
                  { icon: Cloud, text: "Condição climática" },
                  { icon: Users, text: "Mão de obra" },
                  { icon: Truck, text: "Equipamentos" },
                  { icon: CheckSquare, text: "Tarefas realizadas" },
                  { icon: AlertTriangle, text: "Problemas (ocorrências)" },
                  { icon: Package, text: "Materiais recebidos" },
                  { icon: MessageCircle, text: "Comentários" },
                  { icon: Image, text: "Fotos e Vídeo" },
                  { icon: Paperclip, text: "Anexos" },
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-construction/5 transition-colors duration-300">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-construction/10 rounded-full flex items-center justify-center mb-3">
                        <item.icon className="w-6 h-6 text-construction" />
                      </div>
                      <span className="text-gray-800 font-medium">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* For Who Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
                Para quem é o App Diário de Obra
              </h2>
              
              <div className="bg-white rounded-xl shadow-md p-8 mb-10">
                <p className="text-lg text-gray-700 mb-6">
                  Este aplicativo é ideal para engenheiros, gestor de obra, construtoras, fiscais de obra ou qualquer 
                  empresa de serviço que precisa de uma solução simples e fácil de utilizar para:
                </p>
                
                <ul className="space-y-3 ml-6">
                  {[
                    "Acompanhar várias obras ao mesmo tempo.",
                    "Registrar e ter um histórico do dia a dia da obra.",
                    "Registrar fotos e vídeos.",
                    "Facilitar a comunicação entre canteiro de obra e escritório.",
                    "Fazer análise dos dados para melhor tomada de decisão.",
                    "Saber quais os problemas e desafios estão acontecendo diariamente durante a execução da obra.",
                    "Compartilhar as informações com o cliente da obra e demonstrar transparência dos serviços executados."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Gerar relatório de obra não deveria ser complicado e chato…
                </h3>
                <p className="text-lg text-gray-700 mb-8">
                  É fundamental que seja um processo simples, eficiente e descomplicado. Assim, facilita o trabalho e economiza tempo.
                </p>
                <Button 
                  className="bg-construction hover:bg-construction-dark text-white font-medium text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Receba 30 dias de teste total
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

const Clock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const Cloud = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
  </svg>
);

const Truck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck">
    <path d="M10 17h4V5H2v12h3"></path>
    <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1"></path>
    <circle cx="7.5" cy="17.5" r="2.5"></circle>
    <circle cx="17.5" cy="17.5" r="2.5"></circle>
  </svg>
);

const AlertTriangle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-alert-triangle">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
    <path d="M12 9v4"></path>
    <path d="M12 17h.01"></path>
  </svg>
);

const Package = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package">
    <path d="m7.5 4.27 9 5.15"></path>
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
    <path d="m3.3 7 8.7 5 8.7-5"></path>
    <path d="M12 22V12"></path>
  </svg>
);

const Paperclip = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-paperclip">
    <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
  </svg>
);

export default ComoFunciona;
