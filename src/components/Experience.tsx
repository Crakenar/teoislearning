import { Briefcase, MapPin, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    title: "Full-Stack Developer",
    company: "BPS",
    location: "France",
    period: "September 2022 - Present",
    description: [
      "Key contributor to the backend API of the WIGL mobile application.",
      "Designed and implemented a robust queue architecture with standardized job workflows.",
      "Established and deployed best-practice standards for external API error handling.",
      "Strong focus on improving existing code through systematic refactoring and performance optimization.",
      "Optimized scheduled tasks and enhanced Eloquent query performance.",
      "Played a pivotal role in the development and maintenance of key features for the Feel-mining website and Othila web app, spanning the back-office, API, and website.",
      "Executed a smooth migration of the front-end library from Vue Bootstrap/Bootstrap to Vuetify.",
      "Actively participated in task planning and had hands-on involvement in the Wigl application, working on mobile and back-office features, as well as the API.",
    ],
    skills: ["Laravel",  "Vue.js", "React Native", "Nova", "Vuetify", "JIRA", "Tailwind CSS"],
  },
  {
    title: "Remote Developer",
    company: "AM-Creation",
    location: "France",
    period: "February 2022 - June 2022",
    description: [
      "Tasked with application development and ongoing maintenance for Enedis project.",
      "Worked with .NetCore and Vue.js technologies.",
      "Utilized project management tools like Jira and followed Agile methodologies for efficient progress.",
    ],
    skills: [".NetCore MVC", "SQL", "Vue.js", "Jira", "Agile"],
  },
  {
    title: "Developer Analyst",
    company: "Axopen",
    location: "France",
    period: "October 2021 - January 2022",
    description: [
      "Modernized a website using Gatsby, Strapi, React, and GraphQL to transform its functionality and user experience.",
      "Developed an application for mining machines leveraging VueJS and SCSS.",
      "Created a website for managing virtual machines and conducting audits using Angular 2+, Spring Boot, and SCSS.",
    ],
    skills: ["Gatsby", "Strapi", "React", "GraphQL", "VueJS", "Angular 2+", "Spring Boot", "SCSS"],
  },
  {
    title: "Work-study Developer",
    company: "Trixell",
    location: "France",
    period: "September 2020 - September 2021",
    description: [
      "Developed the new 'Trixnet' intranet utilizing Dotnet Core MVC, Orchard, SQL, SASS, and Bootstrap.",
      "Gathered requirements from different departments to create detailed project plans following agile methodology.",
      "Set up the database for the Headless CMS OrchardCore and configured IIS server for deployment.",
      "Established a Git workflow with basic checks for critical tests and dockerized the database.",
      "Developed an Organizational Chart application from scratch with an administrative interface for each department.",
    ],
    skills: [".Net Core MVC", "OrchardCore", "SQL", "SASS", "Bootstrap", "Entity Framework", "LinQ", "Docker"],
  },
  {
    title: "Internship as Full-Stack Developer",
    company: "Mobiteach",
    location: "France",
    period: "April 2020 - July 2020",
    description: [
      "Deeply involved in the development of the Mobiteach application.",
      "Contributed to the creation of a dynamic and innovative application showcasing proficiency in cutting-edge technologies.",
    ],
    skills: ["AngularJS", "NodeJS", "NoSQL"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-primary font-mono">&gt; </span>
              <span className="text-gradient glow">Experience</span>
            </h2>
            <p className="text-muted-foreground font-mono">
              // Building scalable systems and optimizing performance
            </p>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="terminal-border bg-card/50 backdrop-blur-sm p-6 hover:shadow-[0_0_20px_rgba(0,255,65,0.2)] transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2 font-jetbrains">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-4 text-muted-foreground mb-2">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        <span className="font-mono">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="font-mono">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-secondary font-mono text-sm mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                </div>
                
                <ul className="space-y-2 mb-4 text-foreground/80">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary mt-1">▹</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs font-mono rounded border border-primary/30 bg-primary/10 text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
