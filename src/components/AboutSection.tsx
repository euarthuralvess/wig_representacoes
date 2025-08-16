import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calendar, Building, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Sobre a <span className="text-brand-orange">WIG Representações</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma trajetória sólida de mais de duas décadas no mercado de representações comerciais
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Nossa História
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Fundada em 14 de fevereiro de 2002, a WIG Representações Comerciais LTDA nasceu com o 
              propósito de conectar produtos de qualidade às melhores oportunidades de negócios no mercado.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Localizada estrategicamente em Natal/RN, nossa empresa se especializou em representação 
              comercial e intermediação de negócios, construindo uma reputação sólida baseada na 
              confiança, transparência e resultados efetivos.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Calendar className="h-6 w-6 text-brand-orange mr-3" />
                <div>
                  <div className="font-semibold text-foreground">Fundada em</div>
                  <div className="text-muted-foreground">14/02/2002</div>
                </div>
              </div>
              <div className="flex items-center">
                <Building className="h-6 w-6 text-brand-orange mr-3" />
                <div>
                  <div className="font-semibold text-foreground">CNPJ</div>
                  <div className="text-muted-foreground">04.907.885/0001-68</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-brand-green/20 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <CheckCircle className="h-8 w-8 text-brand-orange mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">Experiência Comprovada</h4>
                    <p className="text-muted-foreground">
                      Mais de 22 anos de atuação no mercado, com profundo conhecimento dos 
                      setores e necessidades dos nossos clientes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-brand-green/20 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Users className="h-8 w-8 text-brand-orange mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">Relacionamentos Sólidos</h4>
                    <p className="text-muted-foreground">
                      Construímos parcerias duradouras baseadas na confiança mútua e 
                      no comprometimento com o sucesso de todos os envolvidos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-brand-green/20 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Building className="h-8 w-8 text-brand-orange mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">Localização Estratégica</h4>
                    <p className="text-muted-foreground">
                      Situada em Natal/RN, oferecemos cobertura regional eficiente e 
                      acesso privilegiado aos mercados do Nordeste.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            Nossos Valores
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="px-6 py-3 text-lg bg-brand-green/10 text-brand-green hover:bg-brand-green/20">
              Confiança
            </Badge>
            <Badge variant="secondary" className="px-6 py-3 text-lg bg-brand-orange/10 text-brand-orange hover:bg-brand-orange/20">
              Transparência
            </Badge>
            <Badge variant="secondary" className="px-6 py-3 text-lg bg-brand-green/10 text-brand-green hover:bg-brand-green/20">
              Resultados
            </Badge>
            <Badge variant="secondary" className="px-6 py-3 text-lg bg-brand-orange/10 text-brand-orange hover:bg-brand-orange/20">
              Compromisso
            </Badge>
            <Badge variant="secondary" className="px-6 py-3 text-lg bg-brand-green/10 text-brand-green hover:bg-brand-green/20">
              Inovação
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;