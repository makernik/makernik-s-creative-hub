export type ProjectCategory = "digital" | "physical";

export interface Project {
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  tags: string[];
  link?: string;
  github?: string;
  slug?: string;
}
