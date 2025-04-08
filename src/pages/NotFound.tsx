
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { MobileNav } from "@/components/MobileNav";

const NotFound = () => {
  useEffect(() => {
    console.error("404 Error: Page not found");
  }, []);

  return (
    <>
      <Header />
      
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4">404</h1>
          <img
            src="https://images.unsplash.com/photo-1568362684413-6def7e85752c?q=80&w=1920&auto=format"
            alt="Lost traveler"
            className="w-64 h-64 mx-auto object-cover rounded-xl mb-6"
          />
          <p className="text-xl sm:text-2xl md:text-3xl font-display mb-4">
            Oops! This destination doesn't exist
          </p>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for may have been moved or removed.
            Let's get you back on track.
          </p>
          <Link to="/">
            <Button size="lg" className="ripple">
              Return to homepage
            </Button>
          </Link>
        </div>
      </div>
      
      <MobileNav />
    </>
  );
};

export default NotFound;
