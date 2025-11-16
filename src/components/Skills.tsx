import { Card } from "@/components/ui/card";
import { Brain, Cpu, Rocket, Code2 } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "AI/ML & Computer Vision",
      description: "CNN pipelines, dataset curation, model evaluation, edge inference",
      tools: ["Python", "PyTorch/TensorFlow", "OpenCV"],
    },
    {
      icon: Cpu,
      title: "Robotics / Embedded & IoT",
      description: "Sensor integration, ROV/underwater design, telemetry",
      tools: ["Arduino/ESP32", "C/C++", "Python", "VS Code"],
    },
    {
      icon: Rocket,
      title: "Aerospace & Systems",
      description: "CanSat payload integration, 1U CubeSat architecture, mission concepts",
      tools: ["Fusion 360", "EasyEDA", "GitHub", "ANSYS"],
    },
    {
      icon: Code2,
      title: "General Development",
      description: "Version control, rapid prototyping, technical documentation",
      tools: ["Git/GitHub", "VS Code"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-space-darker/50">
      <div className="container max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
          <span className="text-gradient">Skills & Expertise</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="glass-card p-6 space-y-4 hover:glow-blue hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-semibold mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool, toolIndex) => (
                      <span 
                        key={toolIndex}
                        className="px-3 py-1 text-xs font-mono bg-muted/50 rounded-full border border-border/50"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
