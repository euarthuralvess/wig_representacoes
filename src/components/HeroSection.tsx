import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
/*const brands = [
  {
    name: "Empresa Alpha",
    logo: "/empresas/alpha.png",
    site: "https://empresa-alpha.com",
  },
  {
    name: "Empresa Beta",
    logo: "/empresas/beta.png",
    site: "https://empresa-beta.com",
  },
  {
    name: "Empresa Gamma",
    logo: "/empresas/gamma.png",
    site: "https://empresa-gamma.com",
  },
  // Adicione mais empresas conforme necessário
];
*/
const RepresentedBrands = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-brand-green mb-8">
        Empresas que Representamos
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
        {brands.map((brand) => (
          <a
            key={brand.name}
            href={brand.site}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-20 w-auto mb-2 grayscale group-hover:grayscale-0 transition duration-300"
              loading="lazy"
            />
            <span className="text-sm text-gray-700">{brand.name}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

  return (
    <section 
      id="inicio" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-brand-green-light relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/6dee2f4d-82b9-4fc6-8fc3-8bdf553545f6.png"
            alt="WIG Representações"
            className="h-32 w-auto mx-auto mb-6"
          />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Conectando Produtos a{" "}
          <span className="text-brand-orange">Oportunidades</span>{" "}
          de Negócios
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Desde 2002, atuando com confiança e resultados no mercado de representações comerciais.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="cta" 
            size="lg" 
            onClick={scrollToContact}
            className="text-lg px-8 py-4 h-auto"
          >
            Solicite um Orçamento
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open("https://wa.me/5584999871610", "_blank")}
            className="text-lg px-8 py-4 h-auto bg-[#075E54] text-white hover:bg-[#064C43] border-none"
          >
            Fale no WhatsApp
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-brand-orange mb-2">22+</div>
            <div className="text-white/80 text-lg">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-brand-orange mb-2">100%</div>
            <div className="text-white/80 text-lg">Foco em Resultados</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-brand-orange mb-2">24h</div>
            <div className="text-white/80 text-lg">Suporte Disponível</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
