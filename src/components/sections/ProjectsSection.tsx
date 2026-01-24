import { useState } from "react";
import ProjectCard from "@/components/features/ProjectCard";
import ProjectFilter from "@/components/features/ProjectFilter";
import { projects } from "@/data";
import { Project } from "@/types";

const ProjectsSection = () => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

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

        {/* Filter Component */}
        <ProjectFilter onFilterChange={setFilteredProjects} />
        
        {/* Projects grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.title}
                className="opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No projects found matching your filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
