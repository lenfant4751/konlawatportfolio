import { Card } from "@/components/ui/card";
import schoolLogo from "@/assets/school-logo.png";
import fusion360Logo from "@/assets/fusion360-logo.png";
import ansysLogo from "@/assets/ansys-logo.png";
import vscodeLogo from "@/assets/vscode-logo.png";
import githubLogo from "@/assets/github-logo.png";
const Education = () => {
  const education = [{
    institution: "Princess Chulabhorn Science High School Nakhon Si Thammarat",
    degree: "Upper Secondary (M.4–M.6)",
    grade: "GPAX 3.66",
    period: "2026",
    location: "Nakhon Si Thammarat, Thailand"
  }, {
    institution: "Princess Chulabhorn Science High School Nakhon Si Thammarat",
    degree: "Lower Secondary (M.1–M.3)",
    grade: "GPAX 3.91",
    period: "Completed",
    location: "Nakhon Si Thammarat, Thailand"
  }];
  const software = [{
    name: "Fusion 360",
    category: "CAD",
    logo: fusion360Logo
  }, {
    name: "ANSYS",
    category: "Simulation",
    logo: ansysLogo
  }, {
    name: "EasyEDA",
    category: "PCB Design"
  }, {
    name: "Python",
    category: "Programming"
  }, {
    name: "PyTorch",
    category: "ML Framework"
  }, {
    name: "TensorFlow",
    category: "ML Framework"
  }, {
    name: "OpenCV",
    category: "Computer Vision"
  }, {
    name: "Arduino IDE",
    category: "Embedded"
  }, {
    name: "VS Code",
    category: "IDE",
    logo: vscodeLogo
  }, {
    name: "Git/GitHub",
    category: "Version Control",
    logo: githubLogo
  }];
  return <section id="education" className="py-20 px-4 bg-space-darker/30">
      <div className="container max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
          <span className="text-gradient">Education</span>
        </h2>

        <div className="space-y-6 mb-20">
          {education.map((edu, index) => <Card key={index} className="glass-card p-6 md:p-8 hover:glow-blue hover-lift">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-lg bg-primary/10 shrink-0">
                    <img src={schoolLogo} alt="Princess Chulabhorn Science High School Logo" className="w-20 h-20 object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold mb-2">
                      {edu.institution}
                    </h3>
                    <p className="text-foreground font-medium mb-1 text-sm">{edu.degree}</p>
                    <p className="text-3xl text-red-400">{edu.grade}</p>
                  </div>
                </div>
                <div className="text-right md:text-right">
                  <p className="font-mono text-sm text-primary mb-1">{edu.period}</p>
                  <p className="text-sm text-muted-foreground">{edu.location}</p>
                </div>
              </div>
            </Card>)}
        </div>

        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
          <span className="text-gradient">Technical Software Experience</span>
        </h2>

        <Card className="glass-card p-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {software.map((tool, index) => (
              <div key={index} className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-primary/5 transition-colors">
                {tool.logo ? (
                  <img 
                    src={tool.logo} 
                    alt={`${tool.name} logo`}
                    className="w-16 h-16 object-contain"
                  />
                ) : (
                  <div className="text-lg font-medium">{tool.name}</div>
                )}
                <span className="text-xs text-muted-foreground">{tool.category}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>;
};
export default Education;