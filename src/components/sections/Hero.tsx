import heroImage from "@/assets/hero-bg.jpg";
import logoAlpha from "@/assets/logo-alpha.png";

export const Hero = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        {/* Logo */}
        <img
          src={logoAlpha}
          alt="Alpha Logo"
          className="h-32 md:h-60 mx-auto mb-8"
        />

        <span className="inline-block mb-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
          🎓 Área do Aluno
        </span>

        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
          Aula Ao Vivo:{" "}
          <span className="text-gradient">
            Toxina Botulínica e Preenchimento Facial
          </span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Bem-vindo! Aqui você encontra o acesso à aula ao vivo e o material de
          apoio para download.
        </p>
      </div>
    </section>
  );
};
