
import { Search, CalendarIcon, Users, MapPin, TrendingUp, Clock } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

type TrendingSearch = {
  query: string;
  location: string;
  icon: keyof typeof locationIcons;
};

const locationIcons = {
  beach: "🏖️",
  mountain: "🏔️",
  city: "🏙️",
  countryside: "🌄",
  island: "🏝️",
};

const trendingSearches: TrendingSearch[] = [
  { query: "Beach villas in Bali", location: "Bali, Indonesia", icon: "beach" },
  { query: "Mountain cabins", location: "Aspen, Colorado", icon: "mountain" },
  { query: "Modern apartments", location: "Tokyo, Japan", icon: "city" },
  { query: "Countryside retreats", location: "Tuscany, Italy", icon: "countryside" },
];

export function SearchBar({ className }: { className?: string }) {
  const [checkIn, setCheckIn] = useState<Date | undefined>(undefined);
  const [checkOut, setCheckOut] = useState<Date | undefined>(undefined);
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState(1);
  const [activeTab, setActiveTab] = useState<'location' | 'dates' | 'guests'>('location');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Close suggestions when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLocationFocus = () => {
    setActiveTab('location');
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion: TrendingSearch) => {
    setLocation(suggestion.query);
    setShowSuggestions(false);
  };

  return (
    <div className={cn("rounded-full bg-background/90 dark:bg-background/80 shadow-lg border backdrop-blur-md p-2", className)}>
      <div className="flex items-stretch">
        <div 
          className={cn(
            "relative flex-grow rounded-full px-6 py-4 cursor-pointer",
            activeTab === 'location' && "bg-secondary"
          )}
          onClick={() => setActiveTab('location')}
        >
          <div className="text-xs font-semibold text-foreground">Where</div>
          <input 
            className="w-full bg-transparent border-none outline-none text-sm placeholder:text-muted-foreground"
            placeholder="Search destinations"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onFocus={handleLocationFocus}
          />

          {/* Location suggestions */}
          {showSuggestions && (
            <div 
              ref={suggestionsRef}
              className="absolute top-full left-0 mt-2 w-72 bg-background/95 dark:bg-background/90 backdrop-blur-md shadow-lg rounded-2xl border p-3 z-50"
            >
              <div className="mb-3">
                <div className="flex items-center mb-2">
                  <TrendingUp className="w-4 h-4 text-primary mr-2" />
                  <p className="text-sm font-medium">Trending</p>
                </div>
                <div className="space-y-2">
                  {trendingSearches.map((search, i) => (
                    <div 
                      key={i} 
                      className="flex items-center p-2 hover:bg-secondary rounded-lg cursor-pointer transition-colors"
                      onClick={() => handleSuggestionClick(search)}
                    >
                      <span className="text-xl mr-3">{locationIcons[search.icon]}</span>
                      <div>
                        <p className="text-sm font-medium">{search.query}</p>
                        <p className="text-xs text-muted-foreground flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {search.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <Clock className="w-4 h-4 text-primary mr-2" />
                  <p className="text-sm font-medium">Recent Searches</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Paris", "Beach house", "Ski resort"].map((term, i) => (
                    <div 
                      key={i} 
                      className="px-3 py-1 bg-secondary rounded-full text-xs cursor-pointer"
                      onClick={() => setLocation(term)}
                    >
                      {term}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
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
              <div className="text-xs font-semibold text-foreground">Check in</div>
              <div className="text-sm">
                {checkIn ? checkIn.toLocaleDateString() : "Add dates"}
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 shadow-xl" align="start">
            <Calendar
              mode="single"
              selected={checkIn}
              onSelect={setCheckIn}
              initialFocus
              className="rounded-xl"
            />
          </PopoverContent>
        </Popover>

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
              <div className="text-xs font-semibold text-foreground">Check out</div>
              <div className="text-sm">
                {checkOut ? checkOut.toLocaleDateString() : "Add dates"}
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 shadow-xl" align="start">
            <Calendar
              mode="single"
              selected={checkOut}
              onSelect={setCheckOut}
              initialFocus
              disabled={(date) => 
                (checkIn ? date < checkIn : false) || 
                date < new Date()
              }
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
          <div className="text-xs font-semibold text-foreground">Who</div>
          <div className="text-sm flex justify-between">
            <span>{guests} {guests === 1 ? 'guest' : 'guests'}</span>
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                size="icon" 
                className="h-6 w-6 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  setGuests(Math.max(1, guests - 1));
                }}
              >
                -
              </Button>
              <span>{guests}</span>
              <Button 
                variant="outline" 
                size="icon" 
                className="h-6 w-6 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  setGuests(guests + 1);
                }}
              >
                +
              </Button>
            </div>
          </div>
        </div>

        <Button 
          className="rounded-full h-14 w-14 ml-1 ripple bg-gradient-to-r from-primary to-rose-500 hover:from-primary/90 hover:to-rose-500/90"
          size="icon"
        >
          <Search className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
