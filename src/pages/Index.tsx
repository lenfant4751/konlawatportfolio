import Starfield from "@/components/Starfield";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative">
      <Starfield />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
