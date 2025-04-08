
import { Search, CalendarIcon, Users } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

export function SearchBar({ className }: { className?: string }) {
  const [checkIn, setCheckIn] = useState<Date | undefined>(undefined);
  const [checkOut, setCheckOut] = useState<Date | undefined>(undefined);
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState(1);
  const [activeTab, setActiveTab] = useState<'location' | 'dates' | 'guests'>('location');

  return (
    <div className={cn("rounded-full bg-background shadow-lg border p-2", className)}>
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
          />
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
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={checkIn}
              onSelect={setCheckIn}
              initialFocus
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
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={checkOut}
              onSelect={setCheckOut}
              initialFocus
              disabled={(date) => 
                (checkIn ? date < checkIn : false) || 
                date < new Date()
              }
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

        <Button className="rounded-full h-14 w-14 ml-1 ripple" size="icon">
          <Search className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
