import { useState } from "react";
import { featuredProject } from "@/data";
import MazeField from "@/components/features/MazeField";

const primaryClass =
  "inline-flex min-h-14 w-full items-center justify-center bg-accent px-6 text-lg font-semibold text-accent-foreground transition-colors hover:bg-[hsl(18_70%_30%)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[hsl(18_70%_28%)] sm:w-auto";

function hostName(url: string) {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
}

const HeroSection = () => {
  const [seed, setSeed] = useState(1);
  const project = featuredProject;

  if (!project) return null;

  return (
    <section aria-labelledby="maze-title" className="flex min-h-[calc(100svh-4rem)] flex-col md:min-h-[calc(100svh-5rem)]">
      <div className="maze-field relative flex min-h-[24rem] flex-1 flex-col border-y border-foreground/15">
        <div className="relative z-10 m-4 max-w-md border border-foreground/15 bg-background p-5 md:absolute md:left-8 md:top-8 md:m-0 md:max-w-sm">
          <h1 id="maze-title" className="font-display text-[clamp(2.75rem,5vw,4.5rem)] font-semibold leading-[0.92] text-balance">
            {project.title}
          </h1>
          <p className="mt-3 text-lg text-foreground md:text-xl">{project.description}</p>
          {project.link && (
            <a href={project.link} className={`${primaryClass} mt-5`}>
              Make a maze
            </a>
          )}
        </div>
        <div className="relative min-h-[14rem] flex-1 md:absolute md:inset-y-0 md:right-0 md:left-[24rem]">
          <MazeField seed={seed} />
        </div>
      </div>

      <div className="border-b border-foreground/15 bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-4 md:grid-cols-[repeat(4,minmax(0,1fr))_auto] md:items-end md:px-8">
          <div className="border-t border-foreground/20 pt-2 md:border-t-0 md:pt-0">
            <p className="text-xs font-semibold text-foreground">Kind</p>
            <p className="mt-1 text-sm text-foreground">{project.tags[0] ?? project.category}</p>
          </div>
          <div className="border-t border-foreground/20 pt-2 md:border-t-0 md:pt-0">
            <p className="text-xs font-semibold text-foreground">Status</p>
            <p className="mt-1 text-sm capitalize text-foreground">{project.status}</p>
          </div>
          <div className="border-t border-foreground/20 pt-2 md:col-span-2 md:border-t-0 md:pt-0">
            <p className="text-xs font-semibold text-foreground">Sheet</p>
            <p className="mt-1 text-sm leading-relaxed text-foreground">{project.summary}</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-foreground/20 pt-3 md:border-t-0 md:pt-0">
            {project.link && (
              <a
                href={project.link}
                className="text-sm font-semibold text-foreground underline decoration-foreground/30 underline-offset-4 hover:text-accent hover:decoration-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {hostName(project.link)}
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-foreground underline decoration-foreground/30 underline-offset-4 hover:text-accent hover:decoration-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                Source
                <span className="sr-only"> on GitHub (opens in a new tab)</span>
              </a>
            )}
            <button
              type="button"
              onClick={() => setSeed((value) => value + 1)}
              className="inline-flex min-h-11 items-center justify-center border border-foreground/25 bg-background px-4 text-sm font-semibold text-foreground hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent"
            >
              Draw another
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
