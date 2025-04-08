
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

// Mock data for map pins
type MapPin = {
  id: string;
  lat: number;
  lng: number;
  price: number;
  listingId: string;
};

type MapProps = {
  pins?: MapPin[];
  className?: string;
  onPinClick?: (id: string) => void;
};

export function Map({ pins = [], className, onPinClick }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [showMap, setShowMap] = useState(false);
  const [activePin, setActivePin] = useState<string | null>(null);
  
  // In a real app, this would use a map library like Mapbox or Google Maps
  // For now, we'll create a placeholder with pins
  
  useEffect(() => {
    // This would be where we'd initialize the map
    console.log("Map would initialize here with pins:", pins);
  }, [pins]);

  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      {/* Placeholder map */}
      <div 
        ref={mapRef} 
        className="bg-gray-100 dark:bg-gray-800 w-full h-full relative overflow-hidden"
        style={{
          backgroundImage: "url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/103.8198,1.3521,11/600x600@2x?access_token=placeholder')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* This would be replaced by actual map implementation */}
        
        {/* Mock pins */}
        {pins.map((pin) => (
          <button
            key={pin.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all ${
              activePin === pin.id ? 'scale-125 z-20' : 'scale-100 z-10'
            }`}
            style={{
              left: `${(pin.lng + 180) * (100 / 360)}%`, 
              top: `${90 - (pin.lat + 90) * (100 / 180)}%`
            }}
            onClick={() => {
              setActivePin(pin.id === activePin ? null : pin.id);
              onPinClick?.(pin.listingId);
            }}
            onMouseEnter={() => setActivePin(pin.id)}
            onMouseLeave={() => setActivePin(null)}
          >
            <div className={`
              px-2 py-1 rounded-full font-medium shadow-md transition-all
              ${activePin === pin.id 
                ? 'bg-primary text-white scale-110' 
                : 'bg-white text-foreground hover:bg-white/90'
              }
            `}>
              ${pin.price}
            </div>
          </button>
        ))}
      </div>
      
      {/* Map toggle button */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <Button 
          onClick={() => setShowMap(!showMap)}
          className="rounded-full shadow-lg flex items-center gap-2"
        >
          {showMap ? 'Show list' : 'Show map'}
          <MapPin className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
