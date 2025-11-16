import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <footer className="border-t border-border/50 bg-space-darker/50">
      <div className="container max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-display font-bold text-gradient mb-2">
              Konlawat Phaikaew
            </h3>
            <p className="text-sm text-muted-foreground">
              Aerospace & AI Student Engineer
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <div className="space-y-2">
              <button onClick={() => scrollToSection('about')} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('services')} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Services
              </button>
              <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-primary">
                <Download className="h-3 w-3 mr-1" />
                Resume
              </Button>
            </div>
          </div>

          {/* Social */}
          <div>
            
            <div className="flex gap-3">
              <a href="mailto:kp.lenfant@gmail.com" className="p-2 rounded-lg bg-muted/50 hover:bg-primary/20 hover:glow-blue transition-all">
                
              </a>
              <a href="https://www.facebook.com/profile.php?id=konlawat.phaikaew" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-muted/50 hover:bg-primary/20 hover:glow-blue transition-all">
                
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-muted/50 hover:bg-primary/20 hover:glow-blue transition-all">
                
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Konlawat Phaikaew. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;