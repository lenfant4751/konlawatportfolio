import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Satellite, Radio, Eye, Waves } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Satellite,
      title: "1U CubeSat Concept & Subsystem Design",
      description: "Mission concept, subsystem trade studies (EPS/ADCS/comms/payload), 1U bus CAD, block diagrams, test plans.",
      tools: ["Fusion 360", "Python", "GitHub", "EasyEDA"],
    },
    {
      icon: Radio,
      title: "CanSat Payload & Telemetry Integration",
      description: "End-to-end payload design, sensor suite, flight software, telemetry/ground station, post-flight analysis.",
      tools: ["Fusion 360", "ESP32", "C/C++", "Python"],
    },
    {
      icon: Eye,
      title: "Diabetic Retinopathy Screening Model/App",
      description: "CNN training/evaluation, dataset curation, edge inference, clinician-friendly UI.",
      tools: ["Python", "PyTorch/TensorFlow", "OpenCV", "Flutter"],
    },
    {
      icon: Waves,
      title: "ROV/Underwater AI Drone for Coral Monitoring",
      description: "ROV frame/electronics, camera pipeline, real-time bleaching detection, field workflow.",
      tools: ["ESP32", "C/C++", "Python (CV/ML)", "ANSYS"],
    },
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="container max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
          <span className="text-gradient">Services</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Available for prototype development and technical consulting in aerospace and AI systems
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="glass-card p-6 space-y-4 hover:glow-blue hover-lift flex flex-col"
            >
              <div className="p-3 rounded-lg bg-primary/10 w-fit">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-display font-semibold">{service.title}</h3>
              
              <p className="text-sm text-muted-foreground flex-1">{service.description}</p>
              
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {service.tools.map((tool, toolIndex) => (
                    <span 
                      key={toolIndex}
                      className="px-2 py-1 text-xs font-mono bg-muted/50 rounded border border-border/50"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 glow-blue"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get a Quote
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
