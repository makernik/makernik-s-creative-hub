import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: "digital" | "physical";
  tags: string[];
  link?: string;
  github?: string;
}

const ProjectCard = ({ title, description, image, category, tags, link, github }: ProjectCardProps) => {
  return (
    <article className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-lg">
      {/* Image container */}
      <div className="aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Category badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className={`inline-block px-2 py-1 text-[10px] font-semibold tracking-wider uppercase rounded ${
            category === "digital" 
              ? "bg-accent/10 text-accent" 
              : "bg-foreground/10 text-foreground"
          }`}>
            {category}
          </span>
        </div>
        
        {/* Title */}
        <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-border">
          {link && (
            <a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View</span>
            </a>
          )}
          {github && (
            <a 
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
