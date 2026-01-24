import { Mail, Github, Twitter, Linkedin, ArrowUpRight } from "lucide-react";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30">
      <div className="container px-6 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-accent mb-4">
            Get in Touch
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's Build<br />Something Together
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Have a project idea, collaboration opportunity, or just want to chat 
            about making things? I'd love to hear from you.
          </p>
          
          {/* Email CTA */}
          <a 
            href="mailto:makernik27@gmail.com"
            className="group inline-flex items-center gap-3 text-xl md:text-2xl font-display font-semibold text-foreground hover:text-accent transition-colors duration-300 mb-12"
          >
            <Mail className="w-6 h-6" />
            <span>makernik27@gmail.com</span>
            <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </a>
          
          {/* Social links */}
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
