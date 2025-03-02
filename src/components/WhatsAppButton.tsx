
import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Show the button after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const phoneNumber = "5511999999999"; // Replace with your actual WhatsApp number
  const message = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre a plataforma Monitorie Suas Obras."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
          {/* Chat bubble that appears when hovering or clicking */}
          {isOpen && (
            <div className="bg-white rounded-lg shadow-elevated p-4 mb-4 max-w-xs w-full animate-fade-in">
              <div className="text-gray-700 font-medium mb-2">Precisa de ajuda?</div>
              <p className="text-gray-600 text-sm mb-3">
                Estamos prontos para responder suas dúvidas sobre nossa plataforma.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-colors duration-200"
              >
                {/* Tooltip */}
                <div className="absolute bottom-full right-0 mb-2 w-48 p-2 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <p className="text-gray-700 text-sm">Como podemos ajudar você?</p>
                  <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z" />
                </svg>
              </a>
            </div>
          )}

          {/* WhatsApp button */}
          <button
            onClick={toggleOpen}
            className="bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Chat no WhatsApp"
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;
