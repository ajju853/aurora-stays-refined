
import { useState } from "react";
import { Search, Calendar, Users, ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";

export function PremiumFilterBar({ className }: { className?: string }) {
  const [activeTab, setActiveTab] = useState<'location' | 'dates' | 'guests'>('location');
  const [location, setLocation] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [guests, setGuests] = useState(1);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const popularDestinations = [
    { name: "New York", emoji: "🗽" },
    { name: "Tokyo", emoji: "🗼" },
    { name: "Paris", emoji: "🇫🇷" },
    { name: "London", emoji: "🇬🇧" },
    { name: "Rome", emoji: "🏛️" },
    { name: "Sydney", emoji: "🇦🇺" },
  ];

  const handleLocationFocus = () => {
    setActiveTab('location');
    setShowSuggestions(true);
  };

  return (
    <div className={cn(
      "rounded-full bg-background/90 dark:bg-background/80 shadow-lg border backdrop-blur-md p-2",
      className
    )}>
      <div className="flex items-stretch">
        <div 
          className={cn(
            "relative flex-grow rounded-full px-6 py-4 cursor-pointer",
            activeTab === 'location' && "bg-secondary"
          )}
          onClick={() => setActiveTab('location')}
        >
          <div className="text-xs font-semibold text-foreground">Location</div>
          <div className="relative">
            <input 
              className="w-full bg-transparent border-none outline-none text-sm placeholder:text-muted-foreground"
              placeholder="Where to?"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onFocus={handleLocationFocus}
            />
            
            {activeTab === 'location' && showSuggestions && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-md shadow-lg rounded-2xl border p-3 z-50"
              >
                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground">Popular Destinations</p>
                  {popularDestinations.map((destination) => (
                    <div 
                      key={destination.name} 
                      className="flex items-center p-2 hover:bg-secondary rounded-lg cursor-pointer transition-colors"
                      onClick={() => {
                        setLocation(destination.name);
                        setShowSuggestions(false);
                      }}
                    >
                      <span className="text-xl mr-3">{destination.emoji}</span>
                      <span>{destination.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>

        <div className="h-full w-px bg-border mx-1"></div>
        
        <Popover>
          <PopoverTrigger asChild>
            <div 
              className={cn(
                "relative flex-grow rounded-full px-6 py-4 cursor-pointer",
                activeTab === 'dates' && "bg-secondary"
              )}
              onClick={() => setActiveTab('dates')}
            >
              <div className="text-xs font-semibold text-foreground">Date</div>
              <div className="text-sm">
                {date ? date.toLocaleDateString() : "Select a date"}
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="center">
            <CalendarComponent
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              className="rounded-xl"
            />
          </PopoverContent>
        </Popover>

        <div className="h-full w-px bg-border mx-1"></div>
        
        <div 
          className={cn(
            "relative flex-grow rounded-full px-6 py-4 cursor-pointer",
            activeTab === 'guests' && "bg-secondary"
          )}
          onClick={() => setActiveTab('guests')}
        >
          <div className="text-xs font-semibold text-foreground">Guests</div>
          <div className="text-sm flex justify-between items-center">
            <span>{guests} {guests === 1 ? 'Guest' : 'Guests'}</span>
            
            {activeTab === 'guests' && (
              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-5 w-5 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    setGuests(Math.max(1, guests - 1));
                  }}
                >
                  -
                </Button>
                <span className="text-xs font-medium w-4 text-center">{guests}</span>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-5 w-5 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    setGuests(guests + 1);
                  }}
                >
                  +
                </Button>
              </div>
            )}
          </div>
        </div>

        <Button 
          className="rounded-full h-14 w-14 ml-1 bg-gradient-to-r from-primary to-rose-500 hover:from-primary/90 hover:to-rose-500/90"
          size="icon"
        >
          <Search className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
