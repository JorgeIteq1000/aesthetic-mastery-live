import { Zap, MessageCircle, Wrench, TrendingUp, Award } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Conteúdo Direto ao Ponto",
    description: "Sem enrolação, foco no que realmente importa"
  },
  {
    icon: MessageCircle,
    title: "Linguagem Acessível",
    description: "Explicações claras e didáticas"
  },
  {
    icon: Wrench,
    title: "Aplicação Prática",
    description: "Conhecimento aplicável no dia a dia"
  },
  {
    icon: TrendingUp,
    title: "Atualização Profissional",
    description: "Conteúdo atual e relevante para o mercado"
  },
  {
    icon: Award,
    title: "Certificado Opcional",
    description: "Possibilidade de certificação*"
  }
];

export const Benefits = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            ✨ Benefícios
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Por que participar <span className="text-gradient">desta aula?</span>
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 px-6 py-4 bg-card rounded-full shadow-card border border-border/50 hover:border-accent/50 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <benefit.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <span className="font-medium text-foreground">{benefit.title}</span>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-xs text-muted-foreground mt-8">
          * Consulte condições para obtenção do certificado
        </p>
      </div>
    </section>
  );
};
