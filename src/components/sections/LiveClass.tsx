import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, Video } from "lucide-react";

export const LiveClass = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block mb-4 text-4xl">📅</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Aula Ao Vivo <span className="text-gradient">Exclusiva</span>
            </h2>
          </div>
          
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border/50">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Participe de uma aula ao vivo com conteúdo atualizado e linguagem clara, 
                  voltada para <strong className="text-foreground">profissionais e estudantes</strong> da 
                  área da estética e saúde.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Video className="w-5 h-5 text-accent" />
                    <span>Transmissão ao vivo em alta qualidade</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Users className="w-5 h-5 text-accent" />
                    <span>Interação em tempo real</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="w-5 h-5 text-accent" />
                    <span>Replay disponível por tempo limitado</span>
                  </div>
                </div>
                
                <Button variant="cta" size="xl" className="w-full md:w-auto">
                  🔗 Acessar Aula Ao Vivo
                </Button>
                <p className="mt-3 text-xs text-muted-foreground">
                  * Inserir link da aula aqui
                </p>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl p-8 text-center">
                  <Calendar className="w-16 h-16 mx-auto text-accent mb-4" />
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    Em Breve
                  </h3>
                  <p className="text-muted-foreground">
                    Data e horário serão anunciados
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
