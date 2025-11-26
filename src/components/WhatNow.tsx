import { Target, Zap, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";

const WhatNow = () => {
  return (
    <section id="what-now" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-primary font-mono">&gt; </span>
              <span className="text-gradient glow">What Now?</span>
            </h2>
            <p className="text-muted-foreground font-mono">
              // Future objectives and professional goals
            </p>
          </div>
          
          <div className="space-y-6">
            <Card className="terminal-border bg-card/50 backdrop-blur-sm p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3 font-jetbrains">
                    Professional Objectives
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Enthusiastic and determined, my professional goal is to become a versatile expert 
                    in programming and application design. Fueled by my passion for software development, 
                    I strive to cultivate in-depth expertise in these dynamic and ever-evolving fields.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="terminal-border bg-card/50 backdrop-blur-sm p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/30">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-3 font-jetbrains">
                    Programming Expertise
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    My ambition is to master various programming languages, ranging from established 
                    languages to emerging technologies. With a solid understanding of fundamental computer 
                    science principles, I aim to tackle complex programming challenges while optimizing 
                    code efficiency and quality.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="terminal-border bg-card/50 backdrop-blur-sm p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3 font-jetbrains">
                    Technical Reference
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Aspiring to become a technical reference, I am committed to staying at the forefront 
                    of technological advancements. I want to contribute to the professional community by 
                    sharing my knowledge, participating in collaborative projects, and demonstrating 
                    excellence in solving complex problems.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatNow;
