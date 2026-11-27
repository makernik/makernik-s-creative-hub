import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container px-6 md:px-8 py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-display text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The project you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Image */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden bg-secondary">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        {/* Content */}
        <article className="container px-6 md:px-8 py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Button variant="ghost" asChild className="mb-8">
              <Link to="/#apps">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to apps
              </Link>
            </Button>

            {/* Header */}
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded ${
                    project.category === "digital"
                      ? "bg-accent/10 text-accent"
                      : "bg-foreground/10 text-foreground"
                  }`}
                >
                  {project.category}
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </header>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-12">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm text-muted-foreground bg-secondary px-3 py-1.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 mb-12 pb-12 border-b border-border">
              {project.link && (
                <Button variant="outline" asChild>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </a>
                </Button>
              )}
              {project.github && (
                <Button variant="outline" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </Button>
              )}
            </div>

            {/* Project Content Placeholder */}
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground">
                More details about this project will be added here. This could include
                project goals, technical challenges, solutions, and outcomes.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
