
import React from "react";
import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";
import FeaturedCategories from "@/components/FeaturedCategories";
import NewsletterSection from "@/components/NewsletterSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { mockProducts, mockCategories, mockBanners } from "@/mock-data";

const Home: React.FC = () => {
  const featuredProducts = mockProducts.filter(product => product.isFeatured);
  const bestSellers = mockProducts.filter(product => product.isBestSeller);

  return (
    <>
      <Banner items={mockBanners} />
      
      {/* Featured Categories */}
      <FeaturedCategories categories={mockCategories} />
      
      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Produtos em Destaque</h2>
            <Link to="/produtos">
              <Button variant="ghost" className="text-shop-blue hover:text-shop-light-blue">
                Ver Todos
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="bg-shop-light-gray py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg text-center shadow-sm">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-shop-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Qualidade Garantida</h3>
              <p className="text-shop-gray">
                Produtos selecionados e testados para garantir a sua satisfação.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg text-center shadow-sm">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-shop-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Preço Justo</h3>
              <p className="text-shop-gray">
                Produtos com o melhor custo-benefício do mercado.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg text-center shadow-sm">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-shop-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Entrega Rápida</h3>
              <p className="text-shop-gray">
                Envios expressos para todo o Brasil com rastreamento em tempo real.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Best Sellers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Mais Vendidos</h2>
            <Link to="/produtos">
              <Button variant="ghost" className="text-shop-blue hover:text-shop-light-blue">
                Ver Todos
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {bestSellers.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <NewsletterSection />
    </>
  );
};

export default Home;
