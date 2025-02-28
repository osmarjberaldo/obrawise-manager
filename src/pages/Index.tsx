
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PricingTable from "@/components/PricingTable";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { translations } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="py-8 bg-gray-50 text-center">
          <div className="container mx-auto px-4">
            <Link to="/como-funciona">
              <Button variant="outline" className="border-construction text-construction hover:bg-construction/10">
                {translations.know_how_it_works}
              </Button>
            </Link>
          </div>
        </div>
        <Features />
        <PricingTable />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
