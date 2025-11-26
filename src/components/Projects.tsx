import { Folder, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-primary font-mono">&gt; </span>
              <span className="text-gradient glow">Projects</span>
            </h2>
            <p className="text-muted-foreground font-mono">
              // Showcase of technical implementations
            </p>
          </div>
          
          <Card className="terminal-border bg-card/50 backdrop-blur-sm p-12 text-center">
            <Folder className="w-16 h-16 text-primary mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground font-mono">
              // Projects section ready for content
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Add your notable projects here to showcase your work
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
