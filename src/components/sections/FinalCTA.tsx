import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, Star } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
            <Clock className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Vagas Limitadas</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Garanta sua participação <span className="text-gradient">agora</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Não perca a oportunidade de aprofundar seus conhecimentos em 
            <strong className="text-foreground"> toxina botulínica</strong> e 
            <strong className="text-foreground"> preenchimento facial</strong>.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Star className="w-5 h-5 text-accent" />
              <span>Conteúdo Exclusivo</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-5 h-5 text-accent" />
              <span>Interação ao Vivo</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5 text-accent" />
              <span>Acesso Imediato</span>
            </div>
          </div>
          
          <Button variant="cta" size="xl" className="group">
            🚀 Quero Participar da Aula
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <p className="mt-6 text-sm text-muted-foreground">
            Ao participar, você concorda com nossos termos de uso
          </p>
        </div>
      </div>
    </section>
  );
};
