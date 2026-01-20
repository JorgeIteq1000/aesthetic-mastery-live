import { Button } from "@/components/ui/button";
import { Video, Clock, Calendar } from "lucide-react";

export const LiveClass = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-lg border border-border/50 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center">
              <Video className="w-10 h-10 text-accent" />
            </div>
            
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Aula Ao Vivo
            </h2>
            
            <p className="text-muted-foreground mb-6">
              Clique no botão abaixo para acessar a transmissão ao vivo.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent" />
                <span>21 de Janeiro de 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                <span>19:30h</span>
              </div>
            </div>
            
            <Button 
              variant="cta" 
              size="xl" 
              className="w-full sm:w-auto"
              asChild
            >
              <a href="https://meet.google.com/zgb-fhop-ykg" target="_blank" rel="noopener noreferrer">
                🔗 Acessar Aula Ao Vivo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
