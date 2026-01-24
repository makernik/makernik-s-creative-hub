import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { projects } from "@/data";
import { ProjectCategory } from "@/types";

interface ProjectFilterProps {
  onFilterChange: (filteredProjects: typeof projects) => void;
}

const ProjectFilter = ({ onFilterChange }: ProjectFilterProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | "all">("all");

  const categories: (ProjectCategory | "all")[] = ["all", "digital", "physical"];

  // Get all unique tags from projects
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    projects.forEach((project) => {
      project.tags.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, []);

  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());

  // Filter logic
  useMemo(() => {
    let filtered = projects;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Filter by tags
    if (selectedTags.size > 0) {
      filtered = filtered.filter((p) =>
        Array.from(selectedTags).some((tag) => p.tags.includes(tag))
      );
    }

    onFilterChange(filtered);
  }, [searchQuery, selectedCategory, selectedTags, onFilterChange]);

  const toggleTag = (tag: string) => {
    const newTags = new Set(selectedTags);
    if (newTags.has(tag)) {
      newTags.delete(tag);
    } else {
      newTags.add(tag);
    }
    setSelectedTags(newTags);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedTags(new Set());
  };

  const hasActiveFilters = searchQuery.trim() !== "" || selectedCategory !== "all" || selectedTags.size > 0;

  return (
    <div className="space-y-6 mb-12">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-10"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className="capitalize"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Tag Filter */}
      {allTags.length > 0 && (
        <div>
          <p className="text-sm text-muted-foreground mb-2">Filter by tags:</p>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTags.has(tag) ? "default" : "outline"}
                size="sm"
                onClick={() => toggleTag(tag)}
                className="text-xs"
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Clear Filters */}
      {hasActiveFilters && (
        <Button variant="ghost" size="sm" onClick={clearFilters} className="text-muted-foreground">
          <X className="w-4 h-4 mr-2" />
          Clear all filters
        </Button>
      )}
    </div>
  );
};

export default ProjectFilter;
