import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/6dee2f4d-82b9-4fc6-8fc3-8bdf553545f6.png"
                alt="WIG Representações"
                className="h-12 w-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">WIG Representações Comerciais LTDA</h3>
              <p className="text-white/80 text-sm mb-2">CNPJ: 04.907.885/0001-68</p>
              <p className="text-white/80">
                Especializada em representação comercial e intermediação de negócios desde 2002.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-brand-orange" />
                <div className="text-sm">
                  <div>(84) 99987-1610</div>
                  <div>(84) 99983-3825</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-4 w-4 mr-3 mt-1 text-brand-orange flex-shrink-0" />
                <div className="text-sm flex flex-col gap-0.5">
                  <a href="mailto:gilson.wig@uol.com.br" className="block break-words">
                    gilson.wig@uol.com.br
                  </a>
                  <a href="mailto:wquerino@uol.com.br" className="block break-words">
                    wquerino@uol.com.br
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 mt-1 text-brand-orange flex-shrink-0" />
                <div className="text-sm">
                  <div>R. dos Canindés, 1235</div>
                  <div>Alecrim – Natal/RN</div>
                  <div>CEP 59030-600</div>
                </div>
              </div>
            </div>
          </div>

{/* Quick Actions */}
<div>
  <h4 className="text-lg font-semibold mb-4">Ação Rápida</h4>
  <div className="space-y-3">
    <Button 
      variant="whatsapp" 
      size="sm" 
      className="w-full"
      onClick={() => window.open("https://wa.me/5584999871610", "_blank")}
    >
      <ExternalLink className="h-4 w-4 mr-2" />
      WhatsApp
    </Button>

    <Button 
      variant="secondary" 
      size="sm" 
      className="w-full"
      onClick={() => (window.location.href = "mailto:gilson.wig@uol.com.br")}
    >
      <Mail className="h-4 w-4 mr-2" />
      E-mail
    </Button>
  </div>
</div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm">
              © 2025 WIG Representações Comerciais LTDA. Todos os direitos reservados.
            </p>
            <p className="text-white/60 text-sm mt-2 md:mt-0">
              Desenvolvido com tecnologia e dedicação por AA Consultoria e Soluções em TI.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;