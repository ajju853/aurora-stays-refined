
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Home, Heart, User, PlusCircle, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function MobileNav() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('home');
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  // Set active tab based on current location
  useEffect(() => {
    if (location.pathname === '/') setActiveTab('home');
    else if (location.pathname.includes('/search')) setActiveTab('explore');
    else if (location.pathname.includes('/favorites')) setActiveTab('favorites');
    else if (location.pathname.includes('/profile')) setActiveTab('profile');
  }, [location]);

  // Hide nav on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      const isScrollingDown = currentScrollPosition > previousScrollPosition;
      
      if (currentScrollPosition > 100) {
        setIsVisible(!isScrollingDown);
      } else {
        setIsVisible(true);
      }
      
      setPreviousScrollPosition(currentScrollPosition);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [previousScrollPosition]);
  
  const tabs = [
    { id: 'explore', icon: Search, label: 'Explore', path: '/search' },
    { id: 'home', icon: Home, label: 'Home', path: '/' },
    { id: 'favorites', icon: Heart, label: 'Saved', path: '/favorites' },
    { id: 'profile', icon: User, label: 'Profile', path: '/profile' }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="md:hidden fixed bottom-0 left-0 right-0 bg-background/90 backdrop-blur-lg border-t z-40 shadow-lg"
        >
          <div className="flex justify-around items-center py-2">
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                to={tab.path}
                className="flex flex-col items-center px-3 py-1 relative"
                onClick={() => setActiveTab(tab.id)}
              >
                <div 
                  className={cn(
                    "rounded-full p-2 transition-all duration-300",
                    activeTab === tab.id 
                      ? "bg-primary text-white" 
                      : "text-muted-foreground bg-transparent"
                  )}
                >
                  <tab.icon className="h-5 w-5" />
                  
                  {/* Active indicator dot */}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute h-1 w-1 rounded-full bg-white bottom-0 left-1/2 transform -translate-x-1/2"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </div>
                <span 
                  className={cn(
                    "text-xs mt-1",
                    activeTab === tab.id ? "font-medium" : "text-muted-foreground"
                  )}
                >
                  {tab.label}
                </span>
              </Link>
            ))}

            {/* Special add/new button */}
            <div className="flex flex-col items-center px-3 py-1">
              <div className="rounded-full p-2 bg-gradient-to-r from-primary to-rose-500 text-white">
                <PlusCircle className="h-5 w-5" />
              </div>
              <span className="text-xs mt-1">New</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
