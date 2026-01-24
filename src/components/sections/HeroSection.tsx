import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      <div className="container relative z-10 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline */}
          <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6 opacity-0 animate-fade-up">
            Digital & Physical Maker
          </p>
          
          {/* Main heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 opacity-0 animate-fade-up animation-delay-100">
            <span className="text-foreground">maker</span>
            <span className="text-accent">nik</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body leading-relaxed opacity-0 animate-fade-up animation-delay-200">
            I build things—from code to circuits, pixels to prototypes. 
            Bridging the digital and physical worlds through creative projects.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-up animation-delay-300">
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#about">About Me</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-400">
        <a 
          href="#projects"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-300"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
