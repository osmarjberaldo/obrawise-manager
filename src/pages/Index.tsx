
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PricingTable from "@/components/PricingTable";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="py-8 bg-gray-50 text-center">
          <div className="container mx-auto px-4">
            <Link to="/como-funciona">
              <Button variant="outline" className="border-construction text-construction hover:bg-construction/10">
                Saiba como funciona o App Diário de Obra
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
