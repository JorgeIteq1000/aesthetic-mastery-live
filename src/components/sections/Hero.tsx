import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center max-w-5xl">
        <div className="animate-fade-up">
          <span className="inline-block mb-6 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
            🎓 Aula Ao Vivo • Estética Avançada
          </span>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Aula Ao Vivo:{" "}
            <span className="text-gradient">
              Fundamentos e Aplicações
            </span>
            <br />
            da Toxina Botulínica e Preenchimento Facial
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Aprenda os fundamentos, indicações clínicas e aplicações práticas com foco em 
            <strong className="text-foreground"> segurança</strong>, 
            <strong className="text-foreground"> resultados</strong> e 
            <strong className="text-foreground"> atualização profissional</strong>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="cta" size="xl" className="w-full sm:w-auto">
              🚀 Quero Participar da Aula Ao Vivo
            </Button>
            <Button variant="ctaOutline" size="xl" className="w-full sm:w-auto">
              Saiba Mais
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-muted-foreground">
            ✨ Vagas limitadas • Conteúdo exclusivo • Certificado opcional
          </p>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};
