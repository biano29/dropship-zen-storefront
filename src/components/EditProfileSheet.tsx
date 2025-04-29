
import React, { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetFooter
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Camera, UserRound } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const profileSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Digite um email válido"),
  profilePicture: z.string().optional(),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

interface EditProfileSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userData: {
    name: string;
    email: string;
    profilePicture?: string;
  };
  onSave: (data: ProfileFormValues) => void;
}

const EditProfileSheet: React.FC<EditProfileSheetProps> = ({ 
  open, 
  onOpenChange, 
  userData, 
  onSave 
}) => {
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(userData.profilePicture);
  const { toast } = useToast();

  // Reset form when userData changes
  useEffect(() => {
    if (open) {
      form.reset({
        name: userData.name,
        email: userData.email,
        profilePicture: userData.profilePicture,
      });
      setPreviewUrl(userData.profilePicture);
    }
  }, [open, userData]);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: userData.name,
      email: userData.email,
      profilePicture: userData.profilePicture,
    },
  });

  const handleSubmit = (values: ProfileFormValues) => {
    // Ensure we're saving the profile picture URL
    const updatedData = {
      ...values,
      profilePicture: previewUrl,
    };
    
    onSave(updatedData);
    onOpenChange(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Erro ao carregar imagem",
        description: "Por favor, selecione um arquivo de imagem válido.",
        variant: "destructive"
      });
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "Arquivo muito grande",
        description: "A imagem deve ter no máximo 5MB.",
        variant: "destructive"
      });
      return;
    }

    // Read file as data URL to store in localStorage
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      setPreviewUrl(dataUrl);
      form.setValue("profilePicture", dataUrl);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader className="mb-6">
          <SheetTitle>Editar Perfil</SheetTitle>
        </SheetHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            <div className="flex flex-col items-center mb-6">
              <div className="relative mb-4">
                <Avatar className="h-24 w-24">
                  {previewUrl ? (
                    <AvatarImage src={previewUrl} alt="Foto de perfil" />
                  ) : (
                    <AvatarFallback className="bg-shop-blue/10">
                      <UserRound size={48} className="text-shop-blue" />
                    </AvatarFallback>
                  )}
                </Avatar>
                
                <label 
                  htmlFor="profile-picture" 
                  className="absolute bottom-0 right-0 p-1.5 bg-shop-blue text-white rounded-full cursor-pointer hover:bg-blue-700"
                >
                  <Camera size={18} />
                  <span className="sr-only">Alterar foto de perfil</span>
                </label>
                
                <Input 
                  id="profile-picture" 
                  type="file" 
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>
              <p className="text-sm text-gray-500">Clique no ícone da câmera para alterar sua foto</p>
            </div>

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="seu@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <SheetFooter className="flex justify-end gap-2 pt-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => onOpenChange(false)}
              >
                Cancelar
              </Button>
              <Button type="submit">Salvar Alterações</Button>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};

export default EditProfileSheet;
