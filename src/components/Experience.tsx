import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      role: "Developer",
      project: "Diabetic Retinopathy CNN App",
      period: "2025",
      description: "Built screening prototype (preprocessing, training/evaluation, edge inference); designed clinician-friendly UI.",
      type: "School/Independent",
    },
    {
      role: "Aerospace Designer",
      project: "1U CubeSat Concept",
      period: "2024-2025",
      description: "Drafted 1U bus architecture for dual-band imaging (NDVI mapping); complete subsystem design.",
      type: "School/Independent",
    },
    {
      role: "Team Leader - Finalist",
      project: "Thailand CanSat Rocket Competition",
      period: "2024 - 2025",
      description: "Designed grid fins to control descent; assisted with payload integration and telemetry systems.",
      type: "Competition",
    },
    {
      role: "Developer & Designer",
      project: "ROV/Underwater AI Drone",
      period: "2024-2025",
      description: "Frame/electronics design, camera pipeline, real-time CV model for coral-bleaching detection; field workflow.",
      type: "School/Independent",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
          <span className="text-gradient">Experience</span>
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="glass-card p-6 hover:glow-blue hover-lift relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-3 top-8 w-6 h-6 rounded-full bg-primary border-4 border-background hidden md:block" />
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-xl font-display font-semibold text-primary">{exp.role}</h3>
                  <p className="text-foreground font-medium">{exp.project}</p>
                  <p className="text-sm text-muted-foreground">{exp.type}</p>
                </div>
                <span className="text-sm font-mono text-muted-foreground whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-sm text-muted-foreground">{exp.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
