import { UserCheck, GraduationCap, Stethoscope, Heart } from "lucide-react";

const audiences = [
  {
    icon: UserCheck,
    title: "Profissionais da Estética",
    description: "Esteticistas e profissionais atuantes na área"
  },
  {
    icon: GraduationCap,
    title: "Estudantes da Área da Saúde",
    description: "Em formação e buscando especialização"
  },
  {
    icon: Stethoscope,
    title: "Biomédicos, Enfermeiros e Dentistas",
    description: "Profissionais habilitados para procedimentos estéticos"
  },
  {
    icon: Heart,
    title: "Interessados em Estética Facial",
    description: "Quem deseja entender melhor toxina botulínica e preenchimento"
  }
];

export const TargetAudience = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
            👥 Público-Alvo
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Para quem é <span className="text-gradient">essa aula?</span>
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="group text-center p-6 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border border-border/50"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                <audience.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {audience.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
