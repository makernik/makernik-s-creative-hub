import { useEffect } from "react";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import BuildsSection from "@/components/sections/BuildsSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

const Index = () => {
  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.replace("#", "");
      if (!id) return;
      document.getElementById(id)?.scrollIntoView();
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <HeroSection />
        <ProjectsSection />
        <BuildsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
