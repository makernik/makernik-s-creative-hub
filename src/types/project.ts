export type ProjectCategory = "digital" | "physical";

export interface Project {
  title: string;
  description: string;
  /** Longer line already published with the project. Optional. */
  summary?: string;
  image: string;
  category: ProjectCategory;
  tags: string[];
  link?: string;
  github?: string;
  slug?: string;
  featured?: boolean;
  status?: "live" | "in-progress" | "paused";
}
