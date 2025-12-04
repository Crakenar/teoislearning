import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import storageImg from "@/assets/Projects/storage-app.jpg";
import teoislearningImg from "@/assets/Projects/teoislearning.jpg";
import prelude from "@/assets/Projects/prelude.jpg";
import frenchSalaryCalculatorImg from "@/assets/Projects/frenchSalaryCalculator.jpg";
import jsonTrad from "@/assets/Projects/jsonTrad.jpg";
import asuraBlock from "@/assets/Projects/asurablock.jpg";

const projects = [
    {
    title: "Prelude SDK",
    description: "PHP SDK to allow simple Prelude (SMS Service) Implementation",
    image: prelude,
    imageAlt: "Playful character representing the PreludeSDK project",
    link: "https://github.com/Crakenar/PreludeSDK",
    tech: ["Laravel", "SDK"],
    status: "Production Ready",
  },
  {
    title: "Storage App",
    description: "A file and audio storage application with server management capabilities",
    image: storageImg,
    imageAlt: "Server infrastructure showing a storage application for files and audio",
    link: "https://github.com/Crakenar/storage-app",
    tech: ["NodeJs", "Docker"],
    status: "Production Ready",
  },
  {
    title: "Teoislearning V3",
    description: "Third iteration of the teoislearning.com learning platform",
    image: teoislearningImg,
    imageAlt: "Icon representing the teoislearning.com website",
    link: "https://github.com/Crakenar/teoislearning",
    tech: ["React / Vue", "Web"],
    status: "Live Production",
    stats: [
      { label: "Daily Visitors", value: "+2.5k" }
    ]
  },
  {
  title: "Empty Trad Checker",
  description: "Rust webserver to upload two JSON files and detect missing or differing translation keys.",
  image: jsonTrad,
  imageAlt: "Rust webserver comparing translation JSON keys",
  link: "https://github.com/Crakenar/EmptyTradKeys",
  tech: ["Rust", "Rocket Framework"],
  status: "Production Ready",
},
{
  title: "Manga Block Ad Extension",
  description: "Chrome extension blocking intrusive ads on Asurascan.com, used daily by ~30 users.",
  image: asuraBlock,
  imageAlt: "Browser extension blocking ads on Asurascan",
  link: "https://github.com/Crakenar/MangaBlockAddExtension",
  tech: ["JavaScript", "Chrome Extension"],
  status: "Live Production",
  stats: [
    { label: "Daily Users", value: "30+" }
  ]
},
{
  title: "French Salary Calculator",
  description: "Simple website to convert French gross salary to net, used by more than 3k daily visitors.",
  image: frenchSalaryCalculatorImg,
  imageAlt: "French salary calculation website interface",
  link: "https://github.com/Crakenar/FrenchSalaryCalculator",
  tech: ["HTML", "JavaScript", "Tailwind"],
  status: "Live Production",
  stats: [
    { label: "Daily Visitors", value: "3k+" }
  ]
},
];
type Project = typeof projects[number];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
              <div
                key={index}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
                <Card className="terminal-border bg-card/50 backdrop-blur-sm overflow-hidden hover:bg-card transition-all duration-300 hover-scale h-full">
                  <div className="relative overflow-hidden aspect-square bg-muted/20">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  
                  <div className="p-2">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-xs font-bold text-gradient font-mono truncate">
                        {project.title}
                      </h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 2).map((tech, techIndex) => (
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
              </div>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden bg-card border-primary/20">
          <DialogTitle className="sr-only">{selectedProject?.title}</DialogTitle>
          {selectedProject && (
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 bg-muted/20 flex items-center justify-center p-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.imageAlt}
                  className="max-w-full max-h-64 object-contain"
                />
              </div>
              
              <div className="md:w-1/2 p-6 flex flex-col gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gradient font-mono mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-2 py-1 rounded border border-primary/30 text-primary font-mono bg-primary/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {selectedProject.status && (
                  <span className="text-xs px-2 py-1 rounded bg-accent/20 text-accent-foreground font-mono w-fit">
                    {selectedProject.status}
                  </span>
                )}

                {selectedProject.stats && (
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stats.map((stat, statIndex) => (
                      <span
                        key={statIndex}
                        className="text-xs px-2 py-1 rounded bg-primary/10 text-primary font-mono"
                      >
                        {stat.label}: {stat.value}
                      </span>
                    ))}
                  </div>
                )}

                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-sm text-primary hover:underline font-mono"
                >
                  View on GitHub <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
