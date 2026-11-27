const ContactSection = () => {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-foreground/15 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-[14ch] font-display text-4xl font-semibold text-balance md:text-6xl">Hire me</h2>
        <p className="mt-6 max-w-[65ch] text-lg leading-relaxed text-muted-foreground">
          Have a project idea, collaboration opportunity, or just want to chat about making things? I'd love to hear from you.
        </p>
        <a
          href="mailto:makernik27@gmail.com"
          className="mt-8 inline-flex min-h-12 items-center font-display text-2xl font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-8 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:text-3xl"
        >
          makernik27@gmail.com
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
