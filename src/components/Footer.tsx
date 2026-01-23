const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} makernik. Built with curiosity and caffeine.
          </p>
          <nav className="flex items-center gap-6">
            <a 
              href="#projects" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Projects
            </a>
            <a 
              href="#about" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
