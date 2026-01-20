import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

export const SupportMaterial = () => {
  return (
    <section className="py-12 md:py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-lg border border-border/50 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
              <FileText className="w-10 h-10 text-primary" />
            </div>
            
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Material de Apoio
            </h2>
            
            <p className="text-muted-foreground mb-8">
              Baixe o material complementar da aula para acompanhar o conteúdo.
            </p>
            
            <Button variant="cta" size="xl" className="w-full sm:w-auto">
              <Download className="w-5 h-5" />
              Baixar Material
            </Button>
            <p className="mt-3 text-xs text-muted-foreground">
              * Inserir link do material aqui
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
