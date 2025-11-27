import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import storageImg from "@/assets/Projects/storage-app.jpg";
import teoislearningImg from "@/assets/Projects/teoislearning.jpg";
import prelude from "@/assets/Projects/prelude.jpg";

const projects = [
    {
    title: "Prelude SDK",
    description: "PHP SDK to allow simple Prelude (SMS Service) Implementation",
    image: prelude,
    imageAlt: "Playful character representing the PreludeSDK project",
    link: "https://github.com/Crakenar/PreludeSDK",
    tech: ["Laravel", "SDK", "ReadyForProd"]
  },
  {
    title: "Storage App",
    description: "A file and audio storage application with server management capabilities",
    image: storageImg,
    imageAlt: "Server infrastructure showing a storage application for files and audio",
    link: "https://github.com/Crakenar/storage-app",
    tech: ["NodeJs", "Docker", "ReadyForProd"]
  },
  {
    title: "Teoislearning V3",
    description: "Third iteration of the teoislearning.com learning platform",
    image: teoislearningImg,
    imageAlt: "Icon representing the teoislearning.com website",
    link: "https://github.com/Crakenar/teoislearning",
    tech: ["React / Vue", "Web", "On Production"]
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-primary font-mono">&gt; </span>
              <span className="text-gradient glow">Projects</span>
            </h2>
            <p className="text-muted-foreground font-mono">
              // Showcase of technical implementations
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="terminal-border bg-card/50 backdrop-blur-sm overflow-hidden hover:bg-card transition-all duration-300 hover-scale h-full">
                  <div className="relative overflow-hidden aspect-square bg-muted/20">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                      <p className="text-[10px] text-foreground font-mono leading-tight">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-2">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-xs font-bold text-gradient font-mono truncate">
                        {project.title}
                      </h3>
                      <ExternalLink className="w-3 h-3 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0" />
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-[9px] px-1.5 py-0.5 rounded border border-primary/30 text-primary font-mono bg-primary/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
