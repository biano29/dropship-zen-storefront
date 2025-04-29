
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems } = useCart();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-shop-blue">
            SantelineStore
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-shop-dark hover:text-shop-blue transition-colors">
              Home
            </Link>
            <Link to="/produtos" className="text-shop-dark hover:text-shop-blue transition-colors">
              Produtos
            </Link>
            <Link to="/sobre" className="text-shop-dark hover:text-shop-blue transition-colors">
              Sobre Nós
            </Link>
            <Link to="/contato" className="text-shop-dark hover:text-shop-blue transition-colors">
              Contato
            </Link>
            <Link to="/politicas" className="text-shop-dark hover:text-shop-blue transition-colors">
              Políticas
            </Link>
          </nav>
          
          {/* Right Side - Search, Account, Cart */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <Input
                placeholder="Buscar produtos..."
                className="w-64 pl-10 py-2 rounded-full bg-gray-100"
              />
              <Search 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" 
                size={18} 
              />
            </div>
            <Link to="/conta" className="text-shop-dark hover:text-shop-blue">
              <User size={24} />
            </Link>
            <Link to="/carrinho" className="relative">
              <ShoppingCart size={24} className="text-shop-dark hover:text-shop-blue" />
              {totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-shop-blue text-white rounded-full h-5 w-5 flex items-center justify-center p-0">
                  {totalItems}
                </Badge>
              )}
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <Link to="/carrinho" className="relative">
              <ShoppingCart size={24} className="text-shop-dark" />
              {totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-shop-blue text-white rounded-full h-5 w-5 flex items-center justify-center p-0">
                  {totalItems}
                </Badge>
              )}
            </Link>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={24} />
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="relative mb-4">
              <Input
                placeholder="Buscar produtos..."
                className="w-full pl-10 py-2 rounded-full bg-gray-100"
              />
              <Search 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" 
                size={18} 
              />
            </div>
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-shop-dark hover:text-shop-blue p-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/produtos" 
                className="text-shop-dark hover:text-shop-blue p-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Produtos
              </Link>
              <Link 
                to="/sobre" 
                className="text-shop-dark hover:text-shop-blue p-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link 
                to="/contato" 
                className="text-shop-dark hover:text-shop-blue p-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contato
              </Link>
              <Link 
                to="/politicas" 
                className="text-shop-dark hover:text-shop-blue p-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Políticas
              </Link>
              <Link 
                to="/conta" 
                className="text-shop-dark hover:text-shop-blue p-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Minha Conta
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
