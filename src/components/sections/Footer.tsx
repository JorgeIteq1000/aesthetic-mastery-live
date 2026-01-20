export const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          Conteúdo exclusivo para alunos • Área da Saúde e Estética
        </p>
        <p className="mt-2 text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
