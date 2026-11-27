import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { featuredProject, navLinks } from "@/data";

const ctaClass =
  "min-h-11 items-center justify-center bg-accent px-4 text-sm font-semibold text-accent-foreground transition-colors hover:bg-[hsl(18_70%_30%)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[hsl(18_70%_28%)]";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const mazeLink = featuredProject?.link;

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const first = menuRef.current?.querySelector<HTMLElement>("a");
    first?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-20 md:px-8">
        <a href="/" className="font-display text-xl font-semibold text-foreground">
          maker<span className="text-accent">nik</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Sections">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {mazeLink && (
            <a href={mazeLink} className={`${ctaClass} hidden md:inline-flex`}>
              Make a maze
            </a>
          )}
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center text-foreground md:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="site-menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            <span className="sr-only">{isMobileMenuOpen ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div ref={menuRef} id="site-menu" className="border-t border-foreground/10 bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4" aria-label="Sections">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-1 py-3 text-lg font-medium text-foreground"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            {mazeLink && (
              <a href={mazeLink} className={`${ctaClass} mt-3 inline-flex`} onClick={closeMenu}>
                Make a maze
              </a>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
