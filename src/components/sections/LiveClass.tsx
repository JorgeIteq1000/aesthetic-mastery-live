import { Button } from "@/components/ui/button";
import { Video, Clock, Calendar } from "lucide-react";
import { useState, useEffect } from "react";

const TARGET_DATE = new Date("2026-01-21T19:30:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (): TimeLeft | null => {
  const difference = TARGET_DATE.getTime() - new Date().getTime();
  
  if (difference <= 0) {
    return null;
  }
  
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

export const LiveClass = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const isLive = timeLeft === null;

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
              {isLive 
                ? "A aula está ao vivo! Clique no botão abaixo para participar."
                : "Clique no botão abaixo para acessar a transmissão ao vivo."
              }
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent" />
                <span>21 de Janeiro de 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                <span>19:30h</span>
              </div>
            </div>

            {/* Countdown Timer */}
            {!isLive && timeLeft && (
              <div className="mb-8">
                <p className="text-sm text-muted-foreground mb-3">Tempo restante:</p>
                <div className="flex justify-center gap-3 md:gap-4">
                  <div className="bg-accent/10 rounded-xl p-3 md:p-4 min-w-[70px]">
                    <div className="text-2xl md:text-3xl font-bold text-accent">
                      {String(timeLeft.days).padStart(2, '0')}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">dias</div>
                  </div>
                  <div className="bg-accent/10 rounded-xl p-3 md:p-4 min-w-[70px]">
                    <div className="text-2xl md:text-3xl font-bold text-accent">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">horas</div>
                  </div>
                  <div className="bg-accent/10 rounded-xl p-3 md:p-4 min-w-[70px]">
                    <div className="text-2xl md:text-3xl font-bold text-accent">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">min</div>
                  </div>
                  <div className="bg-accent/10 rounded-xl p-3 md:p-4 min-w-[70px]">
                    <div className="text-2xl md:text-3xl font-bold text-accent animate-pulse">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">seg</div>
                  </div>
                </div>
              </div>
            )}

            {isLive && (
              <div className="mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-500 rounded-full text-sm font-medium">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  AO VIVO AGORA
                </span>
              </div>
            )}
            
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
