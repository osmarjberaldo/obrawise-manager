
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage, languageNames } from "@/contexts/LanguageContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const { language, setLanguage, translations } = useLanguage();

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

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const selectLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    setIsLanguageDropdownOpen(false);
  };

  // Function to get flag emoji for language
  const getFlagEmoji = (languageCode) => {
    switch (languageCode) {
      case "pt-BR":
        return "🇧🇷";
      case "en-US":
        return "🇬🇧";
      case "es-ES":
        return "🇪🇸";
      default:
        return "🇧🇷";
    }
  };

  // Function to get language code
  const getLanguageCode = (languageCode) => {
    switch (languageCode) {
      case "pt-BR":
        return "PT";
      case "en-US":
        return "EN";
      case "es-ES":
        return "ES";
      default:
        return "PT";
    }
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
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-construction">
                Monitorie
              </span>
              <span className="text-2xl font-medium ml-1">Suas Obras</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/como-funciona"
              className="text-base font-medium text-gray-600 hover:text-construction transition-colors duration-200"
            >
              {translations.how_it_works}
            </Link>
            <a
              href="#features"
              className="text-base font-medium text-gray-600 hover:text-construction transition-colors duration-200"
            >
              {translations.features}
            </a>
            <a
              href="#pricing"
              className="text-base font-medium text-gray-600 hover:text-construction transition-colors duration-200"
            >
              {translations.pricing}
            </a>
            <a
              href="#contact"
              className="text-base font-medium text-gray-600 hover:text-construction transition-colors duration-200"
            >
              {translations.contact}
            </a>
          </nav>

          {/* Language Selector and Login Button */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={toggleLanguageDropdown}
                className="flex items-center space-x-2 px-3 py-2 rounded border border-gray-200 hover:bg-gray-50 transition-colors"
                aria-expanded={isLanguageDropdownOpen}
                aria-haspopup="true"
              >
                <span className="text-xl">{getFlagEmoji(language)}</span>
                <span className="font-medium text-gray-700">{getLanguageCode(language)}</span>
                <ChevronDown size={16} className={`transition-transform ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Language Dropdown */}
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                  <button
                    onClick={() => selectLanguage("pt-BR")}
                    className={`flex items-center w-full px-4 py-2 text-sm text-left hover:bg-gray-100 ${language === "pt-BR" ? "bg-gray-100" : ""}`}
                  >
                    <span className="text-xl mr-2">🇧🇷</span>
                    <span>PT</span>
                  </button>
                  <button
                    onClick={() => selectLanguage("en-US")}
                    className={`flex items-center w-full px-4 py-2 text-sm text-left hover:bg-gray-100 ${language === "en-US" ? "bg-gray-100" : ""}`}
                  >
                    <span className="text-xl mr-2">🇬🇧</span>
                    <span>EN</span>
                  </button>
                  <button
                    onClick={() => selectLanguage("es-ES")}
                    className={`flex items-center w-full px-4 py-2 text-sm text-left hover:bg-gray-100 ${language === "es-ES" ? "bg-gray-100" : ""}`}
                  >
                    <span className="text-xl mr-2">🇪🇸</span>
                    <span>ES</span>
                  </button>
                </div>
              )}
            </div>

            <Button
              variant="default"
              className="bg-construction hover:bg-construction-dark text-white font-medium transition-all duration-200 shadow-sm"
            >
              {translations.access_panel}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Language Selector */}
            <div className="relative">
              <button
                onClick={toggleLanguageDropdown}
                className="flex items-center space-x-1 p-2 rounded hover:bg-gray-100 transition-colors"
                aria-expanded={isLanguageDropdownOpen}
                aria-haspopup="true"
              >
                <span className="text-xl">{getFlagEmoji(language)}</span>
              </button>

              {/* Mobile Language Dropdown */}
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                  <button
                    onClick={() => selectLanguage("pt-BR")}
                    className={`flex items-center w-full px-4 py-2 text-sm text-left hover:bg-gray-100 ${language === "pt-BR" ? "bg-gray-100" : ""}`}
                  >
                    <span className="text-xl mr-2">🇧🇷</span>
                    <span>PT</span>
                  </button>
                  <button
                    onClick={() => selectLanguage("en-US")}
                    className={`flex items-center w-full px-4 py-2 text-sm text-left hover:bg-gray-100 ${language === "en-US" ? "bg-gray-100" : ""}`}
                  >
                    <span className="text-xl mr-2">🇬🇧</span>
                    <span>EN</span>
                  </button>
                  <button
                    onClick={() => selectLanguage("es-ES")}
                    className={`flex items-center w-full px-4 py-2 text-sm text-left hover:bg-gray-100 ${language === "es-ES" ? "bg-gray-100" : ""}`}
                  >
                    <span className="text-xl mr-2">🇪🇸</span>
                    <span>ES</span>
                  </button>
                </div>
              )}
            </div>
            
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
          <Link
            to="/como-funciona"
            onClick={toggleMobileMenu}
            className="text-xl font-medium text-gray-600 hover:text-construction"
          >
            {translations.how_it_works}
          </Link>
          <a
            href="#features"
            onClick={toggleMobileMenu}
            className="text-xl font-medium text-gray-600 hover:text-construction"
          >
            {translations.features}
          </a>
          <a
            href="#pricing"
            onClick={toggleMobileMenu}
            className="text-xl font-medium text-gray-600 hover:text-construction"
          >
            {translations.pricing}
          </a>
          <a
            href="#contact"
            onClick={toggleMobileMenu}
            className="text-xl font-medium text-gray-600 hover:text-construction"
          >
            {translations.contact}
          </a>
          <Button
            variant="default"
            className="bg-construction hover:bg-construction-dark text-white font-medium mt-4 w-full max-w-xs"
          >
            {translations.access_panel}
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
