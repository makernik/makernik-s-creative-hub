import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto flex min-h-[70vh] max-w-xl flex-col justify-center px-5 py-24">
        <h1 className="font-display text-5xl font-semibold">Page not found</h1>
        <p className="mt-4 text-lg text-muted-foreground">That page doesn’t exist.</p>
        <Link
          to="/"
          className="mt-8 inline-flex min-h-12 w-fit items-center bg-accent px-5 font-semibold text-accent-foreground hover:bg-[hsl(18_70%_30%)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[hsl(18_70%_28%)]"
        >
          Back to the homepage
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
