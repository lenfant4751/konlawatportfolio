import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";
const About = () => {
  return <section id="about" className="py-20 px-4">
      <div className="container max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
          <span className="text-gradient">About Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile photo */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative glass-card p-2 rounded-2xl overflow-hidden">
              <img
                src={profilePhoto}
                alt="Profile photo in formal uniform"
                loading="lazy"
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </div>

          {/* Bio & Education */}
          <div className="space-y-8">
            <Card className="glass-card p-6 space-y-4 hover:glow-blue hover-lift">
              <h3 className="text-2xl font-display font-semibold text-primary">Bio</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a Grade 12 student at Princess Chulabhorn Science High School Nakhon Si Thammarat, 
                passionate about aerospace engineering and AI. I was a finalist in the Thailand CanSat 
                Rocket Competition and have designed a 1U CubeSat. I've built a CNN-based app to detect 
                diabetic retinopathy and an underwater drone with an AI camera to monitor coral bleaching.
              </p>
            </Card>

            <Card className="glass-card p-6 space-y-4 hover:glow-blue hover-lift">
              <h3 className="text-2xl font-display font-semibold text-primary">Education</h3>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="text-foreground font-semibold">Upper Secondary (M.4–M.6)</h4>
                  <p className="text-sm">Princess Chulabhorn Science High School Nakhon Si Thammarat</p>
                  <p className="text-sm">GPAX: 3.66</p>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">Lower Secondary (M.1–M.3)</h4>
                  <p className="text-sm">Princess Chulabhorn Science High School Nakhon Si Thammarat</p>
                  <p className="text-sm">GPAX: 3.91</p>
                </div>
              </div>
            </Card>

            <div className="flex gap-4">
              <Button className="bg-primary hover:bg-primary/90 glow-blue flex-1">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button variant="outline" className="glass-card border-primary/50 hover:border-primary hover:glow-blue flex-1">
                View Transcript
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;