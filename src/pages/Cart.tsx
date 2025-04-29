
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, getOrderSummary, clearCart } = useCart();
  const orderSummary = getOrderSummary();
  
  const handleQuantityChange = (productId: string, newQuantity: number, maxStock: number) => {
    if (newQuantity < 1) return;
    if (newQuantity > maxStock) {
      toast.error(`Apenas ${maxStock} unidades disponíveis`);
      return;
    }
    updateQuantity(productId, newQuantity);
  };
  
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 mt-16 text-center">
        <div className="max-w-md mx-auto">
          <ShoppingCart size={64} className="mx-auto text-gray-300 mb-6" />
          <h1 className="text-3xl font-bold mb-4">Seu carrinho está vazio</h1>
          <p className="text-shop-gray mb-8">
            Parece que você ainda não adicionou nenhum produto ao seu carrinho.
          </p>
          <Button asChild className="bg-shop-blue hover:bg-shop-light-blue">
            <Link to="/produtos">Continuar Comprando</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl font-bold mb-8">Seu Carrinho</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Header */}
            <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b">
              <div className="col-span-6">
                <span className="font-medium">Produto</span>
              </div>
              <div className="col-span-2 text-center">
                <span className="font-medium">Preço</span>
              </div>
              <div className="col-span-2 text-center">
                <span className="font-medium">Quantidade</span>
              </div>
              <div className="col-span-2 text-center">
                <span className="font-medium">Total</span>
              </div>
            </div>
            
            {/* Cart Items */}
            {cartItems.map(item => (
              <div 
                key={item.product.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border-b items-center"
              >
                {/* Product */}
                <div className="col-span-1 md:col-span-6 flex gap-4">
                  <Link to={`/produto/${item.product.id}`} className="flex-shrink-0">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name} 
                      className="w-20 h-20 object-cover rounded"
                    />
                  </Link>
                  <div className="flex flex-col justify-between py-1">
                    <Link to={`/produto/${item.product.id}`} className="font-medium hover:text-shop-blue transition-colors">
                      {item.product.name}
                    </Link>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="flex items-center text-red-500 hover:text-red-600 text-sm mt-2"
                    >
                      <Trash2 size={14} className="mr-1" /> Remover
                    </button>
                  </div>
                </div>
                
                {/* Price */}
                <div className="col-span-1 md:col-span-2 text-left md:text-center">
                  <div className="md:hidden text-sm text-gray-500">Preço:</div>
                  <div>R$ {item.product.price.toFixed(2).replace(".", ",")}</div>
                </div>
                
                {/* Quantity */}
                <div className="col-span-1 md:col-span-2 text-left md:text-center">
                  <div className="md:hidden text-sm text-gray-500 mb-1">Quantidade:</div>
                  <div className="flex items-center justify-start md:justify-center">
                    <button 
                      onClick={() => handleQuantityChange(item.product.id, item.quantity - 1, item.product.stock)}
                      className="p-1 border rounded-l-md hover:bg-gray-100 disabled:opacity-50"
                      disabled={item.quantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-3 py-1 border-t border-b">{item.quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(item.product.id, item.quantity + 1, item.product.stock)}
                      className="p-1 border rounded-r-md hover:bg-gray-100 disabled:opacity-50"
                      disabled={item.quantity >= item.product.stock}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
                
                {/* Total */}
                <div className="col-span-1 md:col-span-2 text-left md:text-center">
                  <div className="md:hidden text-sm text-gray-500 mb-1">Total:</div>
                  <div className="font-semibold">
                    R$ {(item.product.price * item.quantity).toFixed(2).replace(".", ",")}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Actions */}
            <div className="p-4 flex justify-between">
              <Button
                variant="outline"
                onClick={clearCart}
                className="text-red-500 border-red-500 hover:bg-red-50 hover:text-red-600"
              >
                <Trash2 size={16} className="mr-2" /> Limpar Carrinho
              </Button>
              
              <Button asChild variant="outline" className="text-shop-blue hover:text-shop-light-blue">
                <Link to="/produtos">
                  Continuar Comprando
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Resumo do Pedido</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-shop-gray">Subtotal</span>
                  <span>R$ {orderSummary.subtotal.toFixed(2).replace(".", ",")}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-shop-gray">Frete</span>
                  {orderSummary.shipping === 0 ? (
                    <span className="text-green-600">Grátis</span>
                  ) : (
                    <span>R$ {orderSummary.shipping.toFixed(2).replace(".", ",")}</span>
                  )}
                </div>
                
                {orderSummary.discount > 0 && (
                  <div className="flex justify-between">
                    <span className="text-shop-gray">Desconto</span>
                    <span className="text-green-600">
                      -R$ {orderSummary.discount.toFixed(2).replace(".", ",")}
                    </span>
                  </div>
                )}
                
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>R$ {orderSummary.total.toFixed(2).replace(".", ",")}</span>
                  </div>
                </div>
              </div>
              
              <Button asChild className="w-full bg-shop-blue hover:bg-shop-light-blue py-3 h-auto text-base">
                <Link to="/checkout">
                  Finalizar Compra <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
              
              {/* Payment Methods */}
              <div className="mt-6">
                <p className="text-sm text-center text-shop-gray mb-3">Métodos de pagamento aceitos:</p>
                <div className="flex justify-center space-x-2">
                  {/* Credit Card Icons */}
                  <div className="h-8 w-12 bg-gray-200 rounded"></div>
                  <div className="h-8 w-12 bg-gray-200 rounded"></div>
                  <div className="h-8 w-12 bg-gray-200 rounded"></div>
                  <div className="h-8 w-12 bg-gray-200 rounded"></div>
                </div>
              </div>
              
              {/* Free Shipping Notice */}
              {orderSummary.subtotal < 200 && (
                <div className="mt-6 p-3 bg-blue-50 text-shop-blue rounded-md text-sm">
                  Faltam R$ {(200 - orderSummary.subtotal).toFixed(2).replace(".", ",")} para você ganhar frete grátis!
                </div>
              )}
            </div>
          </div>
          
          {/* Coupon Code */}
          <div className="mt-4 bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4">
              <h3 className="font-medium mb-2">Cupom de Desconto</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Digite o código"
                  className="flex-1 border rounded-md px-3 py-2 text-sm"
                />
                <Button variant="outline" className="text-shop-blue hover:text-shop-light-blue">
                  Aplicar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
