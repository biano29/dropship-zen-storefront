
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
