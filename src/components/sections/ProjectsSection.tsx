import { otherProjects } from "@/data";

const ProjectsSection = () => {
  return (
    <section id="apps" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-semibold text-balance md:text-5xl">Other apps and experiments</h2>
        <p className="mt-4 max-w-[65ch] text-lg text-muted-foreground">Live apps besides MazeMaker.</p>

        {otherProjects.length > 0 ? (
          <div className="mt-10 border-b border-foreground/15">
            {otherProjects.map((project) => (
              <article
                key={project.title}
                className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-baseline gap-x-3 gap-y-2 border-t border-foreground/15 py-6 md:gap-x-6"
              >
                <p className="border border-foreground/25 bg-background px-2 py-1 text-xs font-medium text-foreground">
                  {project.tags[0] ?? project.category}
                </p>
                <h3 className="font-display text-2xl font-semibold md:text-3xl">
                  {project.link ? (
                    <a
                      href={project.link}
                      className="underline decoration-foreground/25 underline-offset-[0.18em] hover:text-accent hover:decoration-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                {project.status && <p className="text-sm font-medium capitalize text-foreground">{project.status}</p>}
                <p className="col-start-2 max-w-[65ch] leading-relaxed text-muted-foreground">{project.description}</p>
              </article>
            ))}
          </div>
        ) : (
          <p className="mt-10 text-muted-foreground">No other apps are listed yet.</p>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
