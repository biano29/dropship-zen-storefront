
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Mensagem enviada com sucesso! Retornaremos em breve.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-4xl font-bold text-center mb-10">Entre em Contato</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Como podemos ajudar?</h2>
          <p className="text-shop-gray mb-8">
            Estamos aqui para ajudar com suas dúvidas, sugestões ou problemas.
            Preencha o formulário ao lado ou use os canais de atendimento abaixo.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-shop-light-blue/20 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-shop-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Telefone</h3>
                <p className="text-shop-gray">(11) 1234-5678</p>
                <p className="text-shop-gray">Segunda a Sexta: 9h - 18h</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-shop-light-blue/20 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-shop-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">E-mail</h3>
                <p className="text-shop-gray">atendimento@zendrop.com</p>
                <p className="text-shop-gray">Respondemos em até 24 horas</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-shop-light-blue/20 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-shop-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Endereço</h3>
                <p className="text-shop-gray">Av. Paulista, 1234</p>
                <p className="text-shop-gray">São Paulo - SP, 01310-100</p>
              </div>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-shop-light-blue/20 text-shop-blue hover:bg-shop-blue hover:text-white transition-colors rounded-full p-3"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="#" 
                className="bg-shop-light-blue/20 text-shop-blue hover:bg-shop-blue hover:text-white transition-colors rounded-full p-3"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="#" 
                className="bg-shop-light-blue/20 text-shop-blue hover:bg-shop-blue hover:text-white transition-colors rounded-full p-3"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Envie sua mensagem</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-shop-gray mb-1">
                Nome
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-shop-gray mb-1">
                E-mail
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-shop-gray mb-1">
                Assunto
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-shop-blue"
              >
                <option value="">Selecione um assunto</option>
                <option value="pedido">Sobre meu pedido</option>
                <option value="produto">Dúvida sobre produto</option>
                <option value="devolucao">Devolução ou troca</option>
                <option value="sugestao">Sugestão</option>
                <option value="outro">Outro assunto</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-shop-gray mb-1">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-shop-blue"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-shop-blue hover:bg-shop-light-blue"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar Mensagem"}
            </Button>
          </form>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="mt-16 bg-white p-4 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-6">Nossa Localização</h2>
        <div className="aspect-[16/9] bg-gray-200 rounded-lg">
          {/* Map Placeholder */}
          <div className="w-full h-full flex items-center justify-center text-shop-gray">
            Mapa será carregado aqui
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-10">Perguntas Frequentes</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Quanto tempo dura a entrega?</h3>
              <p className="text-shop-gray">
                O prazo de entrega varia de acordo com a localidade, mas em geral leva de 3 a 7 dias úteis
                para entregas em capitais e de 7 a 15 dias úteis para demais localidades.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Como funciona a devolução ou troca?</h3>
              <p className="text-shop-gray">
                Você pode solicitar devolução ou troca em até 7 dias após o recebimento do produto,
                conforme o Código de Defesa do Consumidor. Basta entrar em contato conosco através
                dos nossos canais de atendimento.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Quais formas de pagamento são aceitas?</h3>
              <p className="text-shop-gray">
                Aceitamos cartões de crédito das principais bandeiras, boleto bancário, PIX
                e transferência bancária. Para cartões, você pode parcelar em até 12x sem juros.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Os produtos têm garantia?</h3>
              <p className="text-shop-gray">
                Sim, todos os nossos produtos possuem garantia mínima de 90 dias, conforme exigido por lei.
                Alguns produtos podem ter garantias estendidas oferecidas pelos fabricantes.
              </p>
            </div>
          </div>
          
          <p className="text-center mt-8 text-shop-gray">
            Não encontrou o que procurava? Entre em contato conosco através do formulário acima.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
