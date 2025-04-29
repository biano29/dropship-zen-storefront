
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulating API call
    setTimeout(() => {
      toast.success("E-mail cadastrado com sucesso!");
      setEmail("");
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="bg-shop-light-gray py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Inscreva-se na nossa Newsletter</h2>
          <p className="text-shop-gray mb-8">
            Receba as melhores ofertas, lançamentos e dicas diretamente no seu e-mail.
            Prometemos não enviar spam!
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-grow"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              type="submit" 
              className="bg-shop-blue hover:bg-shop-light-blue transition-colors"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Inscrever-se"}
            </Button>
          </form>
          
          <p className="text-shop-gray text-sm mt-4">
            Ao se inscrever, você concorda com nossa Política de Privacidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
