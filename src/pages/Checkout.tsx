
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";

const Checkout: React.FC = () => {
  const { cartItems, getOrderSummary, clearCart } = useCart();
  const orderSummary = getOrderSummary();
  
  const [step, setStep] = useState<'shipping' | 'payment' | 'confirmation'>('shipping');
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'credit' | 'boleto' | 'pix'>('credit');
  
  const [shippingDetails, setShippingDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });
  
  const [paymentDetails, setPaymentDetails] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  
  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setShippingDetails(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentDetails(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handlePaymentMethodChange = (value: 'credit' | 'boleto' | 'pix') => {
    setPaymentMethod(value);
  };
  
  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
    window.scrollTo(0, 0);
  };
  
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      setStep('confirmation');
      window.scrollTo(0, 0);
    }, 2000);
  };
  
  const handlePlaceOrder = () => {
    // Simulate order placement
    setLoading(true);
    setTimeout(() => {
      toast.success("Pedido realizado com sucesso!");
      clearCart();
      setLoading(false);
      // Redirect to order confirmation page (would typically go to a specific order confirmation route)
      window.location.href = "/";
    }, 1500);
  };
  
  if (cartItems.length === 0 && step !== 'confirmation') {
    return (
      <div className="container mx-auto px-4 py-16 mt-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Seu carrinho está vazio</h1>
        <p className="text-shop-gray mb-8">
          Adicione produtos ao carrinho antes de prosseguir para o checkout.
        </p>
        <Button asChild className="bg-shop-blue hover:bg-shop-light-blue">
          <Link to="/produtos">Explorar Produtos</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl font-bold mb-8">Finalizar Compra</h1>
      
      {/* Checkout Progress */}
      <div className="mb-10">
        <div className="flex items-center justify-between max-w-3xl mx-auto">
          <div className={`flex flex-col items-center ${step === 'shipping' ? 'text-shop-blue' : 'text-green-500'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
              step === 'shipping' ? 'bg-shop-blue text-white' : 'bg-green-500 text-white'
            }`}>
              1
            </div>
            <span className="text-sm font-medium">Endereço</span>
          </div>
          
          <div className={`w-full h-1 mx-2 ${
            step === 'shipping' ? 'bg-gray-200' : 'bg-green-500'
          }`} />
          
          <div className={`flex flex-col items-center ${
            step === 'payment' ? 'text-shop-blue' : step === 'confirmation' ? 'text-green-500' : 'text-gray-400'
          }`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
              step === 'payment' ? 'bg-shop-blue text-white' :
              step === 'confirmation' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              2
            </div>
            <span className="text-sm font-medium">Pagamento</span>
          </div>
          
          <div className={`w-full h-1 mx-2 ${
            step === 'confirmation' ? 'bg-green-500' : 'bg-gray-200'
          }`} />
          
          <div className={`flex flex-col items-center ${
            step === 'confirmation' ? 'text-shop-blue' : 'text-gray-400'
          }`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
              step === 'confirmation' ? 'bg-shop-blue text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              3
            </div>
            <span className="text-sm font-medium">Confirmação</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {step === 'shipping' && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">Endereço de Entrega</h2>
              
              <form onSubmit={handleShippingSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-shop-gray mb-1">
                      Nome Completo *
                    </label>
                    <Input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={shippingDetails.fullName}
                      onChange={handleShippingChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-shop-gray mb-1">
                      E-mail *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={shippingDetails.email}
                      onChange={handleShippingChange}
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-shop-gray mb-1">
                    Telefone *
                  </label>
                  <Input
                    type="text"
                    id="phone"
                    name="phone"
                    value={shippingDetails.phone}
                    onChange={handleShippingChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="address" className="block text-sm font-medium text-shop-gray mb-1">
                    Endereço Completo *
                  </label>
                  <Input
                    type="text"
                    id="address"
                    name="address"
                    value={shippingDetails.address}
                    onChange={handleShippingChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-shop-gray mb-1">
                      Cidade *
                    </label>
                    <Input
                      type="text"
                      id="city"
                      name="city"
                      value={shippingDetails.city}
                      onChange={handleShippingChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-shop-gray mb-1">
                      Estado *
                    </label>
                    <select
                      id="state"
                      name="state"
                      value={shippingDetails.state}
                      onChange={handleShippingChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-shop-blue"
                    >
                      <option value="">Selecione...</option>
                      <option value="AC">Acre</option>
                      <option value="AL">Alagoas</option>
                      <option value="AP">Amapá</option>
                      <option value="AM">Amazonas</option>
                      <option value="BA">Bahia</option>
                      <option value="CE">Ceará</option>
                      <option value="DF">Distrito Federal</option>
                      <option value="ES">Espírito Santo</option>
                      <option value="GO">Goiás</option>
                      <option value="MA">Maranhão</option>
                      <option value="MT">Mato Grosso</option>
                      <option value="MS">Mato Grosso do Sul</option>
                      <option value="MG">Minas Gerais</option>
                      <option value="PA">Pará</option>
                      <option value="PB">Paraíba</option>
                      <option value="PR">Paraná</option>
                      <option value="PE">Pernambuco</option>
                      <option value="PI">Piauí</option>
                      <option value="RJ">Rio de Janeiro</option>
                      <option value="RN">Rio Grande do Norte</option>
                      <option value="RS">Rio Grande do Sul</option>
                      <option value="RO">Rondônia</option>
                      <option value="RR">Roraima</option>
                      <option value="SC">Santa Catarina</option>
                      <option value="SP">São Paulo</option>
                      <option value="SE">Sergipe</option>
                      <option value="TO">Tocantins</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-shop-gray mb-1">
                      CEP *
                    </label>
                    <Input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={shippingDetails.zipCode}
                      onChange={handleShippingChange}
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div className="mt-6 flex justify-between">
                  <Button 
                    asChild 
                    variant="outline"
                  >
                    <Link to="/carrinho">Voltar ao Carrinho</Link>
                  </Button>
                  <Button 
                    type="submit" 
                    className="bg-shop-blue hover:bg-shop-light-blue"
                  >
                    Continuar para Pagamento
                  </Button>
                </div>
              </form>
            </div>
          )}
          
          {step === 'payment' && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">Informações de Pagamento</h2>
              
              <form onSubmit={handlePaymentSubmit}>
                {/* Payment Method Selection */}
                <div className="mb-6">
                  <p className="text-sm font-medium text-shop-gray mb-3">Método de Pagamento</p>
                  <RadioGroup 
                    value={paymentMethod} 
                    onValueChange={(value) => handlePaymentMethodChange(value as 'credit' | 'boleto' | 'pix')}
                    className="flex flex-wrap gap-4"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="credit" id="credit" />
                      </FormControl>
                      <FormLabel htmlFor="credit" className="font-medium cursor-pointer">
                        Cartão de Crédito
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="boleto" id="boleto" />
                      </FormControl>
                      <FormLabel htmlFor="boleto" className="font-medium cursor-pointer">
                        Boleto Bancário
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="pix" id="pix" />
                      </FormControl>
                      <FormLabel htmlFor="pix" className="font-medium cursor-pointer">
                        PIX
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </div>
                
                {/* Credit Card Details - only show if credit is selected */}
                {paymentMethod === 'credit' && (
                  <div className="mb-6">
                    <p className="text-sm font-medium text-shop-gray mb-3">Detalhes do Cartão de Crédito</p>
                    
                    <div className="mb-4">
                      <label htmlFor="cardName" className="block text-sm font-medium text-shop-gray mb-1">
                        Nome no Cartão *
                      </label>
                      <Input
                        type="text"
                        id="cardName"
                        name="cardName"
                        value={paymentDetails.cardName}
                        onChange={handlePaymentChange}
                        required
                        className="w-full"
                        placeholder="Exatamente como aparece no cartão"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-shop-gray mb-1">
                        Número do Cartão *
                      </label>
                      <Input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={paymentDetails.cardNumber}
                        onChange={handlePaymentChange}
                        required
                        className="w-full"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiry" className="block text-sm font-medium text-shop-gray mb-1">
                          Data de Validade *
                        </label>
                        <Input
                          type="text"
                          id="expiry"
                          name="expiry"
                          value={paymentDetails.expiry}
                          onChange={handlePaymentChange}
                          required
                          className="w-full"
                          placeholder="MM/AA"
                        />
                      </div>
                      <div>
                        <label htmlFor="cvv" className="block text-sm font-medium text-shop-gray mb-1">
                          CVV *
                        </label>
                        <Input
                          type="text"
                          id="cvv"
                          name="cvv"
                          value={paymentDetails.cvv}
                          onChange={handlePaymentChange}
                          required
                          className="w-full"
                          placeholder="123"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Boleto Payment Details */}
                {paymentMethod === 'boleto' && (
                  <div className="mb-6 p-4 bg-gray-50 rounded-md">
                    <p className="font-medium mb-2">Informações do Boleto Bancário</p>
                    <p className="text-shop-gray mb-3">
                      Um boleto será gerado após a finalização do pedido. Você terá até 3 dias úteis para efetuar o pagamento.
                    </p>
                    <p className="text-shop-gray">
                      O pedido será confirmado automaticamente após a compensação do pagamento.
                    </p>
                  </div>
                )}

                {/* PIX Payment Details */}
                {paymentMethod === 'pix' && (
                  <div className="mb-6 p-4 bg-gray-50 rounded-md">
                    <p className="font-medium mb-2">Informações do Pagamento via PIX</p>
                    <p className="text-shop-gray mb-3">
                      Um QR Code PIX será exibido na próxima etapa. O pagamento é processado instantaneamente.
                    </p>
                    <p className="text-shop-gray">
                      O pedido será confirmado automaticamente após a confirmação do pagamento.
                    </p>
                  </div>
                )}
                
                <div className="mt-6 flex justify-between">
                  <Button 
                    type="button"
                    variant="outline"
                    onClick={() => setStep('shipping')}
                  >
                    Voltar
                  </Button>
                  <Button 
                    type="submit" 
                    className="bg-shop-blue hover:bg-shop-light-blue"
                    disabled={loading}
                  >
                    {loading ? "Processando..." : "Revisar Pedido"}
                  </Button>
                </div>
              </form>
            </div>
          )}
          
          {step === 'confirmation' && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">Revisão do Pedido</h2>
              
              {/* Shipping Address */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Endereço de Entrega</h3>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="font-medium">{shippingDetails.fullName}</p>
                  <p>{shippingDetails.address}</p>
                  <p>{shippingDetails.city}, {shippingDetails.state} - CEP: {shippingDetails.zipCode}</p>
                  <p>Telefone: {shippingDetails.phone}</p>
                  <p>E-mail: {shippingDetails.email}</p>
                </div>
              </div>
              
              {/* Payment Method */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Método de Pagamento</h3>
                <div className="bg-gray-50 p-4 rounded-md">
                  {paymentMethod === 'credit' && (
                    <>
                      <p>Cartão de Crédito</p>
                      <p>**** **** **** {paymentDetails.cardNumber.slice(-4) || '****'}</p>
                    </>
                  )}
                  {paymentMethod === 'boleto' && (
                    <p>Boleto Bancário</p>
                  )}
                  {paymentMethod === 'pix' && (
                    <p>Pagamento via PIX</p>
                  )}
                </div>
              </div>
              
              {/* Items */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Itens do Pedido</h3>
                <div className="bg-gray-50 p-4 rounded-md">
                  {cartItems.map(item => (
                    <div key={item.product.id} className="flex justify-between items-center py-2 border-b last:border-0">
                      <div className="flex items-center">
                        <div className="w-12 h-12 mr-3">
                          <img 
                            src={item.product.image} 
                            alt={item.product.name} 
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{item.product.name}</p>
                          <p className="text-sm text-shop-gray">Quantidade: {item.quantity}</p>
                        </div>
                      </div>
                      <p>R$ {(item.product.price * item.quantity).toFixed(2).replace(".", ",")}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 flex justify-between">
                <Button 
                  type="button"
                  variant="outline"
                  onClick={() => setStep('payment')}
                >
                  Voltar
                </Button>
                <Button 
                  className="bg-shop-blue hover:bg-shop-light-blue"
                  onClick={handlePlaceOrder}
                  disabled={loading}
                >
                  {loading ? "Processando..." : "Finalizar Compra"}
                </Button>
              </div>
            </div>
          )}
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Resumo do Pedido</h2>
            
            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-shop-gray">Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} itens)</span>
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
            </div>
            
            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>R$ {orderSummary.total.toFixed(2).replace(".", ",")}</span>
              </div>
            </div>
            
            {/* Items Summary */}
            <div>
              <h3 className="font-medium mb-2 text-sm">Itens no Carrinho</h3>
              <div className="max-h-64 overflow-y-auto pr-2 space-y-2">
                {cartItems.map(item => (
                  <div key={item.product.id} className="flex items-center text-sm">
                    <div className="w-10 h-10 mr-2">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name} 
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <p className="truncate">{item.product.name}</p>
                      <div className="flex justify-between mt-1">
                        <span className="text-shop-gray">Qtd: {item.quantity}</span>
                        <span>R$ {(item.product.price * item.quantity).toFixed(2).replace(".", ",")}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
