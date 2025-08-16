import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-primary/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/6dee2f4d-82b9-4fc6-8fc3-8bdf553545f6.png"
              alt="WIG Representações"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection("inicio")}
              className="text-white hover:text-brand-orange transition-colors duration-200 font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection("sobre")}
              className="text-white hover:text-brand-orange transition-colors duration-200 font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection("servicos")}
              className="text-white hover:text-brand-orange transition-colors duration-200 font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection("contato")}
              className="text-white hover:text-brand-orange transition-colors duration-200 font-medium"
            >
              Contato
            </button>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-white">
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm">(84) 99987-1610</span>
            </div>
            <Button 
              variant="whatsapp" 
              size="sm"
              onClick={() => window.open("https://wa.me/5584999871610", "_blank")}
            >
              WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-brand-orange"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary/95 backdrop-blur-md border-t border-white/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection("inicio")}
                className="block w-full text-left px-3 py-2 text-white hover:text-brand-orange transition-colors duration-200"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection("sobre")}
                className="block w-full text-left px-3 py-2 text-white hover:text-brand-orange transition-colors duration-200"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection("servicos")}
                className="block w-full text-left px-3 py-2 text-white hover:text-brand-orange transition-colors duration-200"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection("contato")}
                className="block w-full text-left px-3 py-2 text-white hover:text-brand-orange transition-colors duration-200"
              >
                Contato
              </button>
              <div className="px-3 py-2">
                <Button 
                  variant="whatsapp" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.open("https://wa.me/5584999871610", "_blank")}
                >
                  Fale no WhatsApp
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;