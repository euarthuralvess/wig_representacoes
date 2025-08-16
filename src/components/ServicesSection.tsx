import { Card, CardContent } from "@/components/ui/card";
import handshakeIcon from "@/assets/handshake-icon.png";
import growthIcon from "@/assets/growth-icon.png";
import networkIcon from "@/assets/network-icon.png";
import targetIcon from "@/assets/target-icon.png";

const ServicesSection = () => {
  const services = [
    {
      icon: handshakeIcon,
      title: "Representação Comercial",
      description: "Representamos sua marca com dedicação e profissionalismo, expandindo seu alcance no mercado com estratégias personalizadas."
    },
    {
      icon: networkIcon,
      title: "Intermediação de Negócios",
      description: "Conectamos fornecedores e compradores, facilitando transações comerciais eficientes e vantajosas para todas as partes."
    },
    {
      icon: growthIcon,
      title: "Desenvolvimento de Mercado",
      description: "Identificamos oportunidades de crescimento e desenvolvemos estratégias para maximizar o potencial de vendas."
    },
    {
      icon: targetIcon,
      title: "Consultoria Comercial",
      description: "Oferecemos orientação especializada para otimizar processos comerciais e aumentar a competitividade no mercado."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-brand-green-light/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nossos <span className="text-brand-orange">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas em representação comercial para impulsionar seus negócios
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white"
            >
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-brand-green rounded-full flex items-center justify-center group-hover:bg-brand-orange transition-colors duration-300">
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    className="w-10 h-10 object-contain filter brightness-0 invert"
                  />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-brand-green transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-primary rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Especializados em Diversos Segmentos
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto">
              Nossa experiência abrange múltiplos setores, permitindo-nos oferecer soluções 
              personalizadas que atendem às especificidades de cada mercado.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-orange mb-2">CNAE</div>
                <div className="text-white/80">46.19-2-00</div>
                <div className="text-white/60 text-sm mt-1">Representação Comercial</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-orange mb-2">100%</div>
                <div className="text-white/80">Dedicação</div>
                <div className="text-white/60 text-sm mt-1">aos seus resultados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-orange mb-2">24/7</div>
                <div className="text-white/80">Disponibilidade</div>
                <div className="text-white/60 text-sm mt-1">para atendimento</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;