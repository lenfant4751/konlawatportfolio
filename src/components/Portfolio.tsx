import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar } from "lucide-react";
import cubesatDiagram from "@/assets/cubesat-diagram.png";
import cansatParachute from "@/assets/cansat-parachute.jpg";
const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const projects = [{
    id: 1,
    title: "1U CubeSat Concept",
    category: "aerospace",
    year: "2024-2025",
    description: "1U bus architecture for dual-band imaging to build NDVI maps. Complete subsystem trade studies (EPS/ADCS/comms), system diagrams, and preliminary CAD.",
    tech: ["Fusion 360", "Fusion 360", "System Design"],
    image: "cubesat",
    pdfUrl: "https://drive.google.com/file/d/1B_ebIUeki_HLr6hALIy77QWFvXBktEtv/view?usp=sharing"
  }, {
    id: 2,
    title: "Thailand CanSat Rocket Competition",
    category: "aerospace",
    year: "2024",
    description: "Finalist team member. Designed grid fins for descent control, payload integration, and telemetry systems.",
    tech: ["Fusion 360", "ESP32", "C/C++"],
    image: "cansat"
  }, {
    id: 3,
    title: "Diabetic Retinopathy CNN App",
    category: "ai",
    year: "2024-2025",
    description: "Screening prototype with preprocessing, model training/evaluation, and on-device inference. Primary-care-friendly UI for clinical use.",
    tech: ["Python", "PyTorch", "OpenCV", "Flutter"],
    image: "dr-app"
  }, {
    id: 4,
    title: "AI Underwater Drone",
    category: "robotics",
    year: "2024-2025",
    description: "ROV frame and electronics with real-time coral bleaching detection pipeline. Complete field-testing workflow for environmental monitoring.",
    tech: ["Fusion360", "C/C++", "ESP32", "ANSYS"],
    image: "rov"
  }];
  const filters = [{
    id: "all",
    label: "All Projects"
  }, {
    id: "aerospace",
    label: "Aerospace"
  }, {
    id: "ai",
    label: "AI/ML"
  }, {
    id: "robotics",
    label: "Robotics"
  }];
  const filteredProjects = activeFilter === "all" ? projects : projects.filter(p => p.category === activeFilter);
  return <section id="portfolio" className="py-20 px-4 bg-space-darker/50">
      <div className="container max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
          <span className="text-gradient">Portfolio</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Key projects showcasing aerospace and AI engineering work
        </p>

        {/* Filter chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(filter => <Button key={filter.id} variant={activeFilter === filter.id ? "default" : "outline"} className={activeFilter === filter.id ? "bg-primary hover:bg-primary/90 glow-blue" : "glass-card border-border hover:border-primary hover:glow-blue"} onClick={() => setActiveFilter(filter.id)}>
              {filter.label}
            </Button>)}
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => <Card key={project.id} className="glass-card overflow-hidden hover:glow-blue hover-lift group" style={{
          animationDelay: `${index * 100}ms`
        }}>
              {/* Project image placeholder */}
              <div className="h-48 bg-background relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  {project.image === "cubesat" && (
                    <img src={cubesatDiagram} alt="CubeSat Diagram" className="w-full h-full object-cover" />
                  )}
                  {project.image === "cansat" && (
                    <img src={cansatParachute} alt="CanSat Parachute Descent" className="w-full h-full object-cover" />
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="glass-card">
                    <Calendar className="h-3 w-3 mr-1" />
                    {project.year}
                  </Badge>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => <span key={techIndex} className="px-2 py-1 text-xs font-mono bg-muted/50 rounded border border-border/50">
                      {tech}
                    </span>)}
                </div>

                {project.pdfUrl ? (
                  <Button variant="outline" className="w-full glass-card border-primary/50 hover:border-primary hover:glow-blue" asChild>
                    <a href={project.pdfUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Details
                    </a>
                  </Button>
                ) : (
                  <Button variant="outline" className="w-full glass-card border-primary/50 hover:border-primary hover:glow-blue" disabled>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                )}
              </div>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Portfolio;