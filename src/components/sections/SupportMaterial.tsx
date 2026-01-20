import { Button } from "@/components/ui/button";
import { Download, FileText, BookOpen, CheckCircle } from "lucide-react";

export const SupportMaterial = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block mb-4 text-4xl">📘</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Material de Apoio <span className="text-gradient">para Download</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Além da aula ao vivo, você terá acesso a material de apoio exclusivo para 
              baixar e utilizar no seu dia a dia profissional.
            </p>
          </div>
          
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <FileText className="w-12 h-12 text-accent" />
                </div>
              </div>
              
              <div className="flex-grow text-center md:text-left">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  Material Exclusivo
                </h3>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary rounded-full text-sm text-secondary-foreground">
                    <CheckCircle className="w-4 h-4" /> PDF Completo
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary rounded-full text-sm text-secondary-foreground">
                    <CheckCircle className="w-4 h-4" /> Protocolos
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary rounded-full text-sm text-secondary-foreground">
                    <CheckCircle className="w-4 h-4" /> Resumos
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Conteúdo complementar para fixação do aprendizado
                </p>
              </div>
              
              <div className="flex-shrink-0">
                <Button variant="cta" size="lg">
                  <Download className="w-5 h-5" />
                  Baixar Material
                </Button>
                <p className="mt-2 text-xs text-center text-muted-foreground">
                  * Inserir link aqui
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
