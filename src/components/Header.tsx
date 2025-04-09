
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, Globe, Menu, User, Search, PlusCircle, MessageSquare, Bell } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export function Header() {
  const { pathname } = useLocation();
  const [showSearch, setShowSearch] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Detect scroll direction to show/hide header
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setIsHeaderVisible(scrollY < lastScrollY);
      } else {
        setIsHeaderVisible(true);
      }
      setLastScrollY(scrollY);
      
      // Add background when scrolling
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Experiences", path: "/experiences" },
    { name: "Luxury", path: "/luxury" }
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-40 px-4 py-4 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-lg shadow-sm" : "bg-transparent",
      isHeaderVisible ? "transform translate-y-0" : "transform -translate-y-full"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary via-rose-400 to-orange-400 flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className="font-display text-lg font-semibold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            AuroraStays
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-1">
          {menuItems.map(item => (
            <Link key={item.name} to={item.path}>
              <Button variant="ghost" className="rounded-full hover:bg-secondary">{item.name}</Button>
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"></span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-72">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex flex-col items-start">
                <div className="font-medium">New promotion available</div>
                <div className="text-xs text-muted-foreground">Get 20% off your next booking</div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start">
                <div className="font-medium">Review reminder</div>
                <div className="text-xs text-muted-foreground">How was your stay in Bali?</div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
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
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant={isScrolled ? "outline" : "secondary"} 
                className="rounded-full flex items-center gap-2 border shadow-sm"
              >
                <Menu className="h-4 w-4" />
                <User className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" /> Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MessageSquare className="mr-2 h-4 w-4" /> Messages
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Heart className="mr-2 h-4 w-4" /> Saved
              </DropdownMenuItem>
              <DropdownMenuItem>
                <PlusCircle className="mr-2 h-4 w-4" /> List your property
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      {/* Mobile search bar that appears when scrolled */}
      <div className={cn(
        "md:hidden max-w-lg mx-auto transition-all duration-300 overflow-hidden",
        isScrolled ? "max-h-12 opacity-100 mt-3" : "max-h-0 opacity-0"
      )}>
        <Button variant="outline" className="w-full justify-start text-muted-foreground rounded-full px-4">
          <Search className="mr-2 h-4 w-4" />
          <span>Where to?</span>
        </Button>
      </div>
    </header>
  );
}
