import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    const whatsappMessage = `Olá, meu nome é ${formData.name}. Meu e-mail é ${formData.email} e meu telefone é ${formData.phone}. Gostaria de falar sobre: ${formData.message}.`;
    const whatsappUrl = `https://wa.me/5584999871610?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Redirecionando...",
      description: "Você será direcionado para o WhatsApp com sua mensagem pré-formatada.",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Entre em <span className="text-brand-orange">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atender suas necessidades e construir uma parceria de sucesso
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="border-brand-green/20">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-brand-orange mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Telefones</h4>
                    <p className="text-muted-foreground">(84) 99987-1610</p>
                    <p className="text-muted-foreground">(84) 99983-3825</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-brand-orange mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                    <a href="mailto:gilson.wig@uol.com.br" className="block text-muted-foreground">gilson.wig@uol.com.br</a>
                    <a href="mailto:wquerino@uol.com.br" className="block text-muted-foreground">wquerino@uol.com.br</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-brand-orange mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Endereço</h4>
                    <p className="text-muted-foreground">
                      R. dos Canindés, 1235 – Alecrim<br />
                      Natal/RN – CEP 59030-600
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Preferência pelo WhatsApp?
                </h3>
                <p className="text-white/90 mb-6">
                  Entre em contato direto pelo WhatsApp para um atendimento mais rápido e personalizado.
                </p>
                <Button 
                  variant="whatsapp" 
                  size="lg"
                  onClick={() => window.open("https://wa.me/5584999871610", "_blank")}
                  className="w-full"
                >
                  Conversar no WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-brand-green/20">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Solicite um Orçamento</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Nome completo *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-foreground">Telefone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="(84) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground">E-mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground">Mensagem *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 min-h-[120px]"
                    placeholder="Descreva suas necessidades ou conte-nos sobre seu projeto..."
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="cta" 
                  size="lg" 
                  className="w-full"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Solicitação
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  * Campos obrigatórios. Ao enviar, você será redirecionado para o WhatsApp.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;