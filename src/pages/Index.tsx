import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import WhatNow from "@/components/WhatNow";
import Projects from "@/components/Projects";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <Experience />
        <Education />
        <WhatNow />
        <Projects />
      </main>
      <footer className="border-t border-primary/20 py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground font-mono text-sm">
            <span className="text-primary">&gt;</span> teoislearning.com 2025 - 2026
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
