
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { translations } = useLanguage();

  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden hero-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
          {/* Left column with text content */}
          <div className="w-full lg:w-1/2 space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-1.5 bg-construction/10 text-construction rounded-full text-sm font-medium mb-2">
              {translations.manage_efficiently}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 text-balance">
              {translations.simplify_management}{" "}
              <span className="text-construction">{translations.civil_works}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl text-balance">
              {translations.platform_description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                className="bg-construction hover:bg-construction-dark text-white font-medium text-base px-6 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300"
                size="lg"
              >
                {translations.get_started}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="bg-white text-gray-700 border-gray-300 font-medium text-base px-6 py-6 h-auto hover:bg-gray-50 transition-all duration-300"
                size="lg"
              >
                {translations.see_demo}
              </Button>
            </div>
            <div className="pt-6 text-gray-500 text-sm flex items-center gap-2">
              <span className="inline-flex h-2 w-2 rounded-full bg-green-400"></span>
              {translations.trusted_companies}
            </div>
          </div>

          {/* Right column with image grid */}
          <div className="w-full lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden shadow-2xl animate-float">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Construction team reviewing plans"
                  className="w-full h-48 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent rounded-xl"></div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl animate-float delay-100">
                <img
                  src="https://thumbs.dreamstime.com/b/casa-sob-constru%C3%A7%C3%A3o-em-modelos-53360048.jpg"
                  alt="Construction project inspection"
                  className="w-full h-48 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent rounded-xl"></div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl animate-float delay-200">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Construction site supervisor with safety helmet"
                  className="w-full h-48 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent rounded-xl"></div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl animate-float delay-300">
                <img
                  src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Construction workers on site"
                  className="w-full h-48 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 md:left-auto md:-right-6 glass-effect p-4 rounded-lg shadow-lg animate-slide-in-bottom">
              <div className="flex flex-col">
                <span className="text-sm text-gray-600">{translations.project_progress}</span>
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
