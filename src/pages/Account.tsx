
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { LogOut, UserRound } from "lucide-react";
import EditProfileSheet from "@/components/EditProfileSheet";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface UserData {
  name: string;
  email: string;
  profilePicture?: string;
}

const Account: React.FC = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const [editProfileOpen, setEditProfileOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Verificar se o usuário está logado
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    toast({
      title: "Sessão encerrada",
      description: "Você saiu da sua conta com sucesso.",
    });
    navigate("/");
  };

  const handleProfileUpdate = (updatedData: UserData) => {
    // Atualizar dados do usuário no localStorage
    const updatedUser = { ...updatedData };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    
    toast({
      title: "Perfil atualizado",
      description: "Seus dados foram atualizados com sucesso.",
    });
  };

  if (!user) {
    return <div className="container mx-auto px-4 py-28 text-center">Carregando...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-28">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Minha Conta</h1>
          <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2">
            <LogOut size={18} />
            Sair
          </Button>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-shrink-0">
              <Avatar className="h-16 w-16">
                {user.profilePicture ? (
                  <AvatarImage src={user.profilePicture} alt={user.name} />
                ) : (
                  <AvatarFallback className="bg-shop-blue/10">
                    <UserRound size={36} className="text-shop-blue" />
                  </AvatarFallback>
                )}
              </Avatar>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Informações da Conta</h3>
              <Button 
                className="w-full mb-2"
                onClick={() => setEditProfileOpen(true)}
              >
                Editar perfil
              </Button>
              <Button variant="outline" className="w-full">Alterar senha</Button>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Atividade</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full">Meus pedidos</Button>
                <Button variant="outline" className="w-full">Meus endereços</Button>
                <Button variant="outline" className="w-full">Lista de desejos</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EditProfileSheet
        open={editProfileOpen}
        onOpenChange={setEditProfileOpen}
        userData={user}
        onSave={handleProfileUpdate}
      />
    </div>
  );
};

export default Account;
