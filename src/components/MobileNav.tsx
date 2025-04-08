
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Home, Heart, User } from "lucide-react";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [activeTab, setActiveTab] = useState('home');
  
  const tabs = [
    { id: 'explore', icon: Search, label: 'Explore', path: '/search' },
    { id: 'home', icon: Home, label: 'Home', path: '/' },
    { id: 'favorites', icon: Heart, label: 'Saved', path: '/favorites' },
    { id: 'profile', icon: User, label: 'Profile', path: '/profile' }
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-lg border-t z-40">
      <div className="flex justify-around items-center py-2">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            to={tab.path}
            className="flex flex-col items-center px-3 py-1"
            onClick={() => setActiveTab(tab.id)}
          >
            <div 
              className={cn(
                "rounded-full p-1.5 transition-all duration-300",
                activeTab === tab.id ? "bg-primary text-white" : "text-muted-foreground"
              )}
            >
              <tab.icon className="h-5 w-5" />
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
      </div>
    </div>
  );
}
