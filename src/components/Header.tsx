
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart, Globe, Menu, User } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-40 px-4 py-4 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-rose-400 flex items-center justify-center">
            <span className="text-white font-bold">A</span>
          </div>
          <span className="font-display text-lg font-semibold tracking-tight">AuroraStays</span>
        </Link>

        <div className="hidden md:flex items-center space-x-1">
          <Link to="/">
            <Button variant="ghost" className="rounded-full">Stays</Button>
          </Link>
          <Link to="/experiences">
            <Button variant="ghost" className="rounded-full">Experiences</Button>
          </Link>
        </div>

        <div className="flex items-center space-x-2">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          
          <Link to="/favorites">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Favorites</span>
            </Button>
          </Link>
          
          <div className="hidden md:block">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Globe className="h-5 w-5" />
              <span className="sr-only">Language</span>
            </Button>
          </div>
          
          <Button variant="outline" className="rounded-full flex items-center gap-2 border shadow-sm">
            <Menu className="h-4 w-4" />
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "md:hidden fixed inset-0 bg-background/95 backdrop-blur-sm z-50 transform transition-transform duration-300",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {/* Mobile menu content */}
      </div>
    </header>
  );
}
