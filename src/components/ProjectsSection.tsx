import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Smart Home Dashboard",
    description: "A responsive web dashboard for controlling IoT devices, featuring real-time data visualization and voice commands.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
    category: "digital" as const,
    tags: ["React", "TypeScript", "IoT", "WebSocket"],
    link: "#",
    github: "#",
  },
  {
    title: "Mechanical Keyboard",
    description: "Custom-built ergonomic split keyboard with hand-wired switches and custom firmware.",
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&auto=format&fit=crop",
    category: "physical" as const,
    tags: ["Hardware", "3D Print", "QMK", "Electronics"],
    link: "#",
  },
  {
    title: "Generative Art Engine",
    description: "A creative coding tool that generates unique abstract artwork using algorithms and randomness.",
    image: "https://images.unsplash.com/photo-1634017839464-5c339bbe3c3b?w=800&auto=format&fit=crop",
    category: "digital" as const,
    tags: ["Canvas", "P5.js", "Algorithms"],
    link: "#",
    github: "#",
  },
  {
    title: "LED Matrix Display",
    description: "WiFi-connected LED panel displaying real-time data, animations, and notifications.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop",
    category: "physical" as const,
    tags: ["ESP32", "LED", "PCB Design"],
    link: "#",
  },
  {
    title: "Portfolio Generator",
    description: "CLI tool that automatically generates beautiful portfolio websites from a config file.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
    category: "digital" as const,
    tags: ["Node.js", "CLI", "Templates"],
    github: "#",
  },
  {
    title: "Modular Synth Module",
    description: "A DIY eurorack synthesizer module with custom circuit design and front panel.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&auto=format&fit=crop",
    category: "physical" as const,
    tags: ["Audio", "Analog", "PCB", "Eurorack"],
    link: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary/30">
      <div className="container px-6 md:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-accent mb-4">
            Selected Work
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Projects
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A collection of digital products and physical creations—
            from web applications to handcrafted hardware.
          </p>
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
