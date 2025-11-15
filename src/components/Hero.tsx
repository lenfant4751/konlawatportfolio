import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Facebook, Download, ArrowDown } from "lucide-react";
const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
      {/* Nebula glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] animate-glow-pulse" />
      
      <div className="container max-w-6xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl font-display font-bold tracking-tight md:text-6xl">                                                                                                                              Aerospace & AI
Engineer Student  Portfolio                              <span className="text-gradient">Aerospace & AI</span>
              <br />
              Student Engineer
            </h1>
            <p className="text-xl max-w-2xl mx-[200px] text-slate-50 md:text-4xl">
              Konlawat Phaikaew



  
            </p>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Badge variant="secondary" className="glass-card px-4 py-2 text-sm hover:glow-blue hover-lift">
              CubeSat Design (1U)
            </Badge>
            <Badge variant="secondary" className="glass-card px-4 py-2 text-sm hover:glow-blue hover-lift">
              CanSat Finalist
            </Badge>
            <Badge variant="secondary" className="glass-card px-4 py-2 text-sm hover:glow-blue hover-lift">
              CNN Medical App
            </Badge>
            <Badge variant="secondary" className="glass-card px-4 py-2 text-sm hover:glow-blue hover-lift">
              ROV for Coral Monitoring
            </Badge>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <Button size="lg" className="bg-primary hover:bg-primary/90 glow-blue" onClick={() => scrollToSection('portfolio')}>
              View Projects
            </Button>
            <Button size="lg" variant="outline" className="glass-card border-primary/50 hover:border-primary hover:glow-blue" onClick={() => scrollToSection('services')}>
              Hire for a Prototype
            </Button>
            <Button size="lg" variant="outline" className="glass-card border-border hover:border-primary hover:glow-blue">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>

          {/* Contact info */}
          <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-muted-foreground">
            <a href="mailto:kp.lenfant@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              kp.lenfant@gmail.com
            </a>
            <a href="https://www.facebook.com/profile.php?id=konlawat.phaikaew" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Facebook className="h-4 w-4" />
              Konlawat Phaikaew
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="pt-12 animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-primary" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;