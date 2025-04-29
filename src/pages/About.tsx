
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre a ZenDrop</h1>
          <p className="text-lg text-shop-gray mb-6">
            Nascemos com a visão de transformar o e-commerce brasileiro,
            trazendo produtos de qualidade com preços acessíveis e entregas rápidas.
          </p>
          <p className="text-shop-gray mb-6">
            Nossa missão é conectar consumidores a produtos incríveis de todo o mundo,
            eliminando intermediários e oferecendo a melhor experiência de compra online.
          </p>
          <Button asChild className="bg-shop-blue hover:bg-shop-light-blue">
            <Link to="/produtos">Conheça nossos produtos</Link>
          </Button>
        </div>
        <div className="md:w-1/2">
          <div className="aspect-video rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1582892491743-7fcf399d0f60?q=80&w=1200&auto=format&fit=crop"
              alt="Equipe ZenDrop"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Values Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="bg-shop-light-blue/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-shop-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Qualidade</h3>
            <p className="text-shop-gray">
              Selecionamos criteriosamente cada produto para garantir que você
              receba apenas o melhor, com rigorosos padrões de qualidade.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="bg-shop-light-blue/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-shop-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Preço Justo</h3>
            <p className="text-shop-gray">
              Trabalhamos diretamente com fornecedores para oferecer os melhores
              preços, sem intermediários que encarecem o produto final.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="bg-shop-light-blue/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-shop-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Entrega Rápida</h3>
            <p className="text-shop-gray">
              Estabelecemos parcerias estratégicas com transportadoras em todo
              o Brasil para garantir que seu pedido chegue o mais rápido possível.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 bg-shop-light-gray rounded-lg px-6 my-16">
        <h2 className="text-3xl font-bold text-center mb-10">Nossa História</h2>
        <div className="max-w-3xl mx-auto">
          <p className="mb-4 text-shop-gray">
            A ZenDrop começou em 2023, quando três amigos, frustrados com a dificuldade
            de encontrar produtos de qualidade a preços acessíveis no Brasil, decidiram
            criar sua própria solução.
          </p>
          <p className="mb-4 text-shop-gray">
            Começamos pequeno, com apenas uma categoria de produtos, mas rapidamente
            expandimos nosso catálogo graças à excelente recepção dos clientes e ao
            compromisso com a qualidade e atendimento.
          </p>
          <p className="mb-4 text-shop-gray">
            Hoje, a ZenDrop é reconhecida como uma das lojas de dropshipping mais
            confiáveis do país, com milhares de clientes satisfeitos e uma reputação
            construída na transparência e na excelência do serviço.
          </p>
          <p className="text-shop-gray">
            Continuamos crescendo e inovando, sempre com o compromisso de oferecer
            a melhor experiência de compra online para nossos clientes.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Por que escolher a ZenDrop?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start">
            <div className="bg-shop-light-blue/20 rounded-full p-3 mr-4">
              <svg className="w-6 h-6 text-shop-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Produtos Curados</h3>
              <p className="text-shop-gray">
                Nossa equipe testa e avalia cada produto antes de adicioná-lo ao catálogo,
                garantindo que você receba apenas itens de qualidade comprovada.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-shop-light-blue/20 rounded-full p-3 mr-4">
              <svg className="w-6 h-6 text-shop-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Pagamentos Seguros</h3>
              <p className="text-shop-gray">
                Utilizamos as mais avançadas tecnologias de segurança para proteger
                seus dados e garantir transações seguras em todos os momentos.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-shop-light-blue/20 rounded-full p-3 mr-4">
              <svg className="w-6 h-6 text-shop-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Garantia de Satisfação</h3>
              <p className="text-shop-gray">
                Oferecemos garantia de 30 dias em todos os produtos e um processo
                de devolução simplificado para sua tranquilidade.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-shop-light-blue/20 rounded-full p-3 mr-4">
              <svg className="w-6 h-6 text-shop-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Suporte Dedicado</h3>
              <p className="text-shop-gray">
                Nossa equipe de atendimento ao cliente está sempre disponível para
                ajudar com qualquer dúvida ou problema que você possa ter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 bg-gradient-to-r from-shop-blue to-shop-light-blue text-white rounded-lg px-6">
        <h2 className="text-3xl font-bold mb-6">Pronto para descobrir produtos incríveis?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Explore nosso catálogo e encontre produtos exclusivos com os melhores preços do mercado,
          entregues diretamente na sua porta.
        </p>
        <Button asChild size="lg" variant="outline" className="bg-white text-shop-blue hover:bg-gray-100 border-none">
          <Link to="/produtos">Começar a Comprar</Link>
        </Button>
      </section>
    </div>
  );
};

export default About;
