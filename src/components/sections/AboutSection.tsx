import { skills } from "@/data";

const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-24 border-t border-foreground/15 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,65ch)_minmax(16rem,22rem)] lg:gap-20">
        <div>
          <h2 className="font-display text-4xl font-semibold text-balance md:text-5xl">
            The Maker Behind the Projects
          </h2>
          <div className="mt-8 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a maker at heart—someone who finds joy in building things, whether that's writing code or working with my hands. My workshop is both a terminal and a workbench.
            </p>
            <p>
              With a background in software engineering and a passion for hardware, I create projects that span the digital-physical divide. Every project is a chance to explore new technologies, solve interesting problems, and craft something meaningful.
            </p>
            <p>
              When I'm not building, I'm tending bonsai trees. The slow, careful work of pruning and shaping mirrors systems thinking—small, intentional changes that compound into resilient, elegant forms.
            </p>
          </div>
        </div>

        <dl className="border-t border-foreground/15 lg:mt-4">
          {skills.map((skill) => (
            <div key={skill.title} className="border-b border-foreground/15 py-5">
              <dt className="flex items-center gap-3 font-display text-lg font-semibold text-foreground">
                <skill.icon className="h-4 w-4 text-accent" aria-hidden="true" />
                {skill.title}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{skill.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default AboutSection;
