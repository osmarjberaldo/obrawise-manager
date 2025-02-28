
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden hero-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
          {/* Left column with text content */}
          <div className="w-full lg:w-1/2 space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-1.5 bg-construction/10 text-construction rounded-full text-sm font-medium mb-2">
              Gerencie suas obras com eficiência
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 text-balance">
              Simplifique o gerenciamento das suas{" "}
              <span className="text-construction">obras civis</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl text-balance">
              Uma plataforma completa para acompanhar o progresso, gerenciar recursos e manter o controle de todas as suas construções em um só lugar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                className="bg-construction hover:bg-construction-dark text-white font-medium text-base px-6 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300"
                size="lg"
              >
                Comece Gratuitamente
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="bg-white text-gray-700 border-gray-300 font-medium text-base px-6 py-6 h-auto hover:bg-gray-50 transition-all duration-300"
                size="lg"
              >
                Ver Demonstração
              </Button>
            </div>
            <div className="pt-6 text-gray-500 text-sm flex items-center gap-2">
              <span className="inline-flex h-2 w-2 rounded-full bg-green-400"></span>
              Mais de 500 empresas confiam em nossa plataforma
            </div>
          </div>

          {/* Right column with image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl animate-float">
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Plataforma de gerenciamento de obras"
                className="w-full h-auto rounded-xl"
                style={{ aspectRatio: "16/9", objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent rounded-xl"></div>
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 md:left-auto md:-right-6 glass-effect p-4 rounded-lg shadow-lg animate-slide-in-bottom">
              <div className="flex flex-col">
                <span className="text-sm text-gray-600">Progresso do projeto</span>
                <span className="text-2xl font-bold text-gray-900">85%</span>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-construction h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
