
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Minus, Plus, Check, ChevronRight } from "lucide-react";
import ReviewStars from "@/components/ReviewStars";
import CustomerReviews from "@/components/CustomerReviews";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/contexts/CartContext";
import { mockProducts, mockReviews } from "@/mock-data";
import { toast } from "sonner";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [product, setProduct] = useState(mockProducts.find(p => p.id === id));
  const [relatedProducts, setRelatedProducts] = useState(
    mockProducts
      .filter(p => p.category === product?.category && p.id !== id)
      .slice(0, 4)
  );
  
  const reviews = mockReviews.filter(review => review.productId === id);
  const averageRating = product ? product.rating : 0;
  
  useEffect(() => {
    // Simulate fetching product details
    const foundProduct = mockProducts.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setRelatedProducts(
        mockProducts
          .filter(p => p.category === foundProduct.category && p.id !== id)
          .slice(0, 4)
      );
      
      // Reset quantity and selected image when product changes
      setQuantity(1);
      setSelectedImage(0);
      
      // Scroll to top when product changes
      window.scrollTo(0, 0);
    }
  }, [id]);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Produto não encontrado</h1>
        <p className="mb-8">O produto que você está procurando não existe ou foi removido.</p>
        <Button asChild>
          <Link to="/produtos">Voltar para a loja</Link>
        </Button>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${product.name} foi adicionado ao carrinho`);
  };
  
  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(prev => prev + 1);
    }
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      {/* Breadcrumbs */}
      <nav className="flex mb-6 text-sm">
        <Link to="/" className="text-shop-gray hover:text-shop-blue transition-colors">
          Home
        </Link>
        <ChevronRight size={16} className="mx-2" />
        <Link to="/produtos" className="text-shop-gray hover:text-shop-blue transition-colors">
          Produtos
        </Link>
        <ChevronRight size={16} className="mx-2" />
        <span className="font-medium text-shop-dark">{product.name}</span>
      </nav>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Product Images */}
        <div>
          <div className="bg-white rounded-lg overflow-hidden border border-gray-200 mb-4">
            <img 
              src={product.images?.[selectedImage] || product.image} 
              alt={product.name}
              className="w-full h-auto object-contain aspect-square"
            />
          </div>
          
          {/* Thumbnail Gallery */}
          {product.images && product.images.length > 1 && (
            <div className="grid grid-cols-5 gap-2">
              {product.images.map((img, index) => (
                <div 
                  key={index}
                  className={`cursor-pointer border rounded-md overflow-hidden ${
                    selectedImage === index ? 'border-shop-blue' : 'border-gray-200'
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img 
                    src={img} 
                    alt={`${product.name} - Imagem ${index + 1}`} 
                    className="w-full h-auto aspect-square object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <ReviewStars rating={product.rating} showRating />
            <span className="ml-2 text-shop-gray">({product.reviewCount} avaliações)</span>
          </div>
          
          <div className="mb-6">
            {product.discountPercentage > 0 ? (
              <div className="flex items-center">
                <span className="text-3xl font-bold text-shop-blue">
                  R$ {product.price.toFixed(2).replace(".", ",")}
                </span>
                <span className="text-lg text-gray-400 line-through ml-3">
                  R$ {(product.price / (1 - product.discountPercentage / 100)).toFixed(2).replace(".", ",")}
                </span>
                <span className="ml-3 bg-shop-blue text-white text-sm font-semibold px-2 py-1 rounded">
                  -{product.discountPercentage}%
                </span>
              </div>
            ) : (
              <span className="text-3xl font-bold text-shop-blue">
                R$ {product.price.toFixed(2).replace(".", ",")}
              </span>
            )}
            
            <p className="text-sm text-green-600 mt-2">
              {product.stock > 0 ? (
                <span className="flex items-center">
                  <Check size={16} className="mr-1" /> Em estoque ({product.stock} disponíveis)
                </span>
              ) : (
                <span className="text-red-500">Esgotado</span>
              )}
            </p>
          </div>
          
          <div className="mb-8">
            <p className="text-shop-gray mb-4">
              {product.description}
            </p>
            
            {/* Product Features */}
            {product.features && product.features.length > 0 && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Características:</h3>
                <ul className="list-disc list-inside text-shop-gray space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          {/* Quantity Selector & Add to Cart */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center border border-gray-300 rounded-md">
              <button 
                onClick={decrementQuantity}
                disabled={quantity <= 1}
                className="px-4 py-2 text-shop-dark hover:text-shop-blue disabled:text-gray-300"
              >
                <Minus size={20} />
              </button>
              <span className="w-12 text-center font-medium">{quantity}</span>
              <button 
                onClick={incrementQuantity}
                disabled={quantity >= product.stock}
                className="px-4 py-2 text-shop-dark hover:text-shop-blue disabled:text-gray-300"
              >
                <Plus size={20} />
              </button>
            </div>
            
            <Button 
              onClick={handleAddToCart}
              className="flex-1 bg-shop-blue hover:bg-shop-light-blue h-11"
              disabled={product.stock === 0}
            >
              <ShoppingCart className="mr-2" size={18} />
              Adicionar ao Carrinho
            </Button>
          </div>
          
          {/* Shipping Info */}
          <div className="mt-8 p-4 bg-shop-light-gray rounded-lg text-sm">
            <p className="font-medium">Informações de Entrega:</p>
            <p className="mt-1">• Frete grátis para compras acima de R$ 200,00</p>
            <p className="mt-1">• Envio em até 24 horas</p>
            <p className="mt-1">• Prazo de entrega: 3-7 dias úteis</p>
          </div>
        </div>
      </div>
      
      {/* Customer Reviews Section */}
      <CustomerReviews 
        reviews={reviews}
        productName={product.name}
        averageRating={averageRating}
        totalReviews={reviews.length}
      />
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Produtos Relacionados</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
