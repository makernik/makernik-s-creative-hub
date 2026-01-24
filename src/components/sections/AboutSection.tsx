import { skills } from "@/data";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Text */}
          <div>
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-accent mb-4">
              About
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              The Maker Behind<br />the Projects
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a maker at heart—someone who finds joy in building things, 
                whether that's writing code or working with my hands. My workshop 
                is both a terminal and a workbench.
              </p>
              <p>
                With a background in software engineering and a passion for 
                hardware, I create projects that span the digital-physical divide. 
                Every project is a chance to explore new technologies, solve 
                interesting problems, and craft something meaningful.
              </p>
              <p>
                When I'm not building, you'll find me exploring open-source 
                communities, sketching new ideas, or deep in documentation 
                learning about my next obsession.
              </p>
            </div>
          </div>
          
          {/* Right column - Skills */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.title}
                className="group p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <skill.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
