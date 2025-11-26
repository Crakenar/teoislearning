import { GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const education = [
  {
    degree: "Master's degree in Software Engineering",
    institution: "University of Grenoble Alpes",
    period: "In Progress",
    description: "Pursuing a Master's degree in Software Engineering through a work-study program, focusing on advanced software development practices and system architecture.",
  },
  {
    degree: "Professional Bachelor's in Web Development",
    institution: "University of Grenoble Alpes",
    period: "2020-2021",
    description: "Learned the fundamentals of web development with a focus on Windows technologies. First experience working on a long-term project as a solo developer for a company.",
  },
  {
    degree: "Technology University Diploma in Computer Science",
    institution: "University of Grenoble Alpes",
    period: "2018-2020",
    description: "After high school and being introduced to programming through building a game in Java, decided to pursue computer science. Received bachelor's degree in computer science.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-primary font-mono">&gt; </span>
              <span className="text-gradient glow">Education</span>
            </h2>
            <p className="text-muted-foreground font-mono">
              // Academic foundation and continuous learning
            </p>
          </div>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="terminal-border bg-card/50 backdrop-blur-sm p-6 hover:shadow-[0_0_20px_rgba(0,255,65,0.2)] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2 font-jetbrains">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-4 text-muted-foreground mb-3">
                      <span className="font-mono">{edu.institution}</span>
                      <span className="text-secondary font-mono text-sm">{edu.period}</span>
                    </div>
                    <p className="text-foreground/80">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
