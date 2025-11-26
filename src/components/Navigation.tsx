import { Terminal } from "lucide-react";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "experience", "education", "what-now", "projects"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id === "hero" ? "root" : id);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  
  const navItems = [
    { id: "hero", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "what-now", label: "What Now?" },
    { id: "projects", label: "Projects" },
  ];
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <Terminal className="w-5 h-5" />
            <span className="font-bold font-jetbrains">Dev.Portfolio</span>
          </button>
          
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 font-mono text-sm transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
