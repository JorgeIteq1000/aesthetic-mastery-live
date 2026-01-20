import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-background/80">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-semibold text-background mb-1">
              Estética Avançada
            </p>
            <p className="text-sm">
              Área da Saúde Estética • Conteúdo Educacional
            </p>
          </div>
          
          <div className="flex items-center gap-1 text-sm">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-accent fill-accent" />
            <span>para profissionais da estética</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-background/10 text-center text-xs">
          <p>
            ⚠️ Conteúdo destinado exclusivamente para fins educacionais. 
            Consulte sempre um profissional habilitado.
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
