import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "MazeMaker",
    description: "Make and Print mazes at home!",
    summary: "A small web app that generates printable PDF maze packs.",
    image: "/placeholder.svg",
    category: "digital",
    tags: ["Web App"],
    link: "https://maze.makernik.com",
    github: "https://github.com/makernik/MazeMaker",
    featured: true,
    status: "live",
  },
  {
    title: "Hidelog",
    description: "A personal log for capturing patterns, reflections, and daily notes in a simple, focused way.",
    image: "/placeholder.svg",
    category: "digital",
    tags: ["Web App"],
    link: "https://hidelog.lovable.app",
    status: "live",
  },
];

export const featuredProject = projects.find((project) => project.featured) ?? projects[0];

export const otherProjects = projects.filter((project) => !project.featured);
