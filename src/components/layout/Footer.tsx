import { socialLinks } from "@/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/15">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="text-sm text-muted-foreground">© {currentYear} makernik. Built with curiosity and caffeine.</p>
        <ul className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center border border-foreground/15 text-foreground hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent"
                aria-label={`${social.label} (opens in a new tab)`}
              >
                <social.icon className="h-5 w-5" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
