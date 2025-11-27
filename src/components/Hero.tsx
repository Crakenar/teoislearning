import { Terminal, Code2, Database, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import profileImage from "@/assets/me.webp";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Avatar className="w-40 h-40 mx-auto mb-6 terminal-border absolute left-0 top-0 invisible lg:visible">
            <AvatarImage src={profileImage} alt="Teo Berguerre" />
            <AvatarFallback className="bg-card text-primary text-4xl font-mono">TB</AvatarFallback>
          </Avatar>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-card/50 backdrop-blur-sm mb-4">
            <Terminal className="w-4 h-4 text-primary animate-glow-pulse" />
            <span className="text-sm text-muted-foreground font-mono">System.Status.Online</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient glow">Full-Stack Developer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-mono">
            <span className="text-primary">&gt;</span> Backend Specialist | High-Performance Systems
          </p>
          
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Crafting robust, scalable solutions with expertise in Laravel, Vue.js, React Native, 
            and modern web technologies. Passionate about optimizing performance and building 
            efficient backend architectures.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Button 
              onClick={() => scrollToSection("experience")}
              className="terminal-border bg-primary hover:bg-primary/90 text-primary-foreground font-mono"
            >
              <Code2 className="w-4 h-4 mr-2" />
              View Experience
            </Button>
            <Button 
              onClick={() => scrollToSection("projects")}
              variant="outline"
              className="terminal-border font-mono"
            >
              <Database className="w-4 h-4 mr-2" />
              See Projects
            </Button>
          </div>

          <div className="flex gap-6 justify-center pt-8">
            <a 
              href="https://github.com/crakenar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-md border border-primary/30 bg-card/50 backdrop-blur-sm hover:bg-card hover:border-primary/50 transition-all hover-scale"
            >
              <Github className="w-5 h-5 text-primary" />
              <span className="text-sm font-mono">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/teo-berguerre/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-md border border-primary/30 bg-card/50 backdrop-blur-sm hover:bg-card hover:border-primary/50 transition-all hover-scale"
            >
              <Linkedin className="w-5 h-5 text-primary" />
              <span className="text-sm font-mono">LinkedIn</span>
            </a>
            <a 
              href="mailto:teo.berguerre@teoislearning.com"
              className="flex items-center gap-2 px-4 py-2 rounded-md border border-primary/30 bg-card/50 backdrop-blur-sm hover:bg-card hover:border-primary/50 transition-all hover-scale"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-sm font-mono">Email</span>
            </a>
          </div>
          
          <div className="flex gap-6 justify-center pt-12 text-sm text-muted-foreground font-mono">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
              <span>Laravel</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary animate-glow-pulse" />
              <span>Vue.js</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
              <span>React Native</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary animate-glow-pulse" />
              <span>Go</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
