import { physicalBuilds, type BuildAspect } from "@/data";

const aspectClass: Record<BuildAspect, string> = {
  tall: "aspect-[3/4]",
  square: "aspect-square",
  wide: "aspect-[5/4]",
};

const BuildsSection = () => {
  return (
    <section id="builds" className="scroll-mt-24 border-t border-foreground/15 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-semibold text-balance md:text-5xl">Physical builds</h2>
        <p className="mt-4 max-w-[65ch] text-lg leading-relaxed text-muted-foreground">
          Photographs of physical builds will sit in these mounts. The drawer is empty until the pictures are added.
        </p>

        <div className="mt-12 grid grid-cols-1 items-start gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {physicalBuilds.map((build) => (
            <figure key={build.id}>
              {build.image ? (
                <img src={build.image} alt={build.alt} className={`${aspectClass[build.aspect]} w-full object-cover`} />
              ) : (
                <div
                  className={`${aspectClass[build.aspect]} flex items-center justify-center border border-dashed border-foreground/30 bg-background`}
                >
                  <span className="font-display text-sm font-semibold text-foreground">Photo needed</span>
                </div>
              )}
              <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">{build.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuildsSection;
