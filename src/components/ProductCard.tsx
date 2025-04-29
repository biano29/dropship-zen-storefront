
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/types";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} foi adicionado ao carrinho`);
  };

  return (
    <div className="product-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
      <Link to={`/produto/${product.id}`}>
        <div className="relative pb-[100%] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          
          {product.discountPercentage > 0 && (
            <div className="absolute top-2 right-2 bg-shop-blue text-white text-xs font-semibold px-2 py-1 rounded">
              -{product.discountPercentage}%
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-4">
        <Link to={`/produto/${product.id}`}>
          <h3 className="font-medium text-shop-dark mb-1 line-clamp-2 hover:text-shop-blue transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`text-sm ${i < Math.round(product.rating) ? "text-yellow-400" : "text-gray-300"}`}>
                ★
              </span>
            ))}
          </div>
          <span className="text-xs text-shop-gray ml-2">({product.reviewCount} avaliações)</span>
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            {product.discountPercentage > 0 ? (
              <div className="flex items-center">
                <span className="text-lg font-semibold text-shop-blue">
                  R$ {product.price.toFixed(2).replace(".", ",")}
                </span>
                <span className="text-sm text-gray-400 line-through ml-2">
                  R$ {(product.price / (1 - product.discountPercentage / 100)).toFixed(2).replace(".", ",")}
                </span>
              </div>
            ) : (
              <span className="text-lg font-semibold text-shop-blue">
                R$ {product.price.toFixed(2).replace(".", ",")}
              </span>
            )}
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="hover:text-shop-blue"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
