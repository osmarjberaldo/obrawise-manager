
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white/90 shadow-sm backdrop-blur-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold text-construction">
                Monitorie
              </span>
              <span className="text-2xl font-medium ml-1">Suas Obras</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-base font-medium text-gray-600 hover:text-construction transition-colors duration-200"
            >
              Funcionalidades
            </a>
            <a
              href="#pricing"
              className="text-base font-medium text-gray-600 hover:text-construction transition-colors duration-200"
            >
              Planos
            </a>
            <a
              href="#contact"
              className="text-base font-medium text-gray-600 hover:text-construction transition-colors duration-200"
            >
              Contato
            </a>
          </nav>

          {/* Login Button */}
          <div className="hidden md:block">
            <Button
              variant="default"
              className="bg-construction hover:bg-construction-dark text-white font-medium transition-all duration-200 shadow-sm"
            >
              Acessar Painel
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-construction focus:outline-none"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-600 hover:text-construction"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center space-y-8 p-8 h-full">
          <a
            href="#features"
            onClick={toggleMobileMenu}
            className="text-xl font-medium text-gray-600 hover:text-construction"
          >
            Funcionalidades
          </a>
          <a
            href="#pricing"
            onClick={toggleMobileMenu}
            className="text-xl font-medium text-gray-600 hover:text-construction"
          >
            Planos
          </a>
          <a
            href="#contact"
            onClick={toggleMobileMenu}
            className="text-xl font-medium text-gray-600 hover:text-construction"
          >
            Contato
          </a>
          <Button
            variant="default"
            className="bg-construction hover:bg-construction-dark text-white font-medium mt-4 w-full max-w-xs"
          >
            Acessar Painel
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
