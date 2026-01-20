import { Check, Syringe, Shield, Target, AlertTriangle, Sparkles } from "lucide-react";

const learningPoints = [
  {
    icon: Syringe,
    title: "Fundamentos da Toxina Botulínica",
    description: "Mecanismo de ação, farmacologia e ciência por trás do procedimento"
  },
  {
    icon: Target,
    title: "Aplicações Práticas e Áreas de Uso",
    description: "Técnicas de aplicação, dosagens e protocolos clínicos"
  },
  {
    icon: Sparkles,
    title: "Fundamentos do Preenchimento Facial",
    description: "Tipos de preenchedores, indicações e resultados esperados"
  },
  {
    icon: Shield,
    title: "Segurança e Boas Práticas",
    description: "Critérios clínicos, contraindicações e protocolos de segurança"
  },
  {
    icon: AlertTriangle,
    title: "Erros Comuns e Como Evitá-los",
    description: "Complicações, prevenção e manejo de intercorrências"
  }
];

export const WhatYouLearn = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            📚 Conteúdo da Aula
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            O que você vai aprender <span className="text-gradient">nesta aula ao vivo</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conteúdo estruturado e atualizado para sua evolução profissional
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {learningPoints.map((point, index) => (
            <div 
              key={index}
              className="group relative p-6 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                  <point.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <Check className="w-5 h-5 text-accent/50" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
