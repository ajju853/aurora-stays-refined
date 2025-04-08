
import { useState, useRef, useEffect } from "react";
import { SearchBar } from "@/components/SearchBar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ListingCard } from "@/components/ListingCard";
import { Map } from "@/components/Map";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { Button } from "@/components/ui/button";
import { listings, getMapPins } from "@/data/mockListings";
import { MapPin } from "lucide-react";

const Index = () => {
  const [showMap, setShowMap] = useState(false);
  const [focusedListing, setFocusedListing] = useState<string | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect for hero section
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const parallaxFactor = 0.4;
      
      heroRef.current.style.transform = `translateY(${scrollPosition * parallaxFactor}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section with Parallax */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div 
          ref={heroRef} 
          className="absolute inset-0 w-full h-full z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1501876725168-00c445821c9e?q=80&w=2070&auto=format"
            alt="Beautiful landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col h-full justify-center items-center px-4">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-center">
            Find your next perfect stay
          </h1>
          <p className="text-white text-xl md:text-2xl mb-10 text-center max-w-2xl">
            Discover unique homes and experiences around the world
          </p>
          
          <SearchBar className="w-full max-w-4xl" />
        </div>
      </section>
      
      <div className="max-w-7xl mx-auto w-full px-4 py-8">
        <CategoryFilter />
        
        <div className="flex mt-4 mb-8">
          <div className={`transition-all duration-500 ${
            showMap ? "w-1/2 pr-4" : "w-full"
          }`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {listings.map((listing, index) => (
                <ListingCard
                  key={listing.id}
                  id={listing.id}
                  title={listing.title}
                  location={listing.location}
                  images={listing.images}
                  price={listing.price}
                  rating={listing.rating}
                  tags={listing.tags}
                  index={index}
                  className={focusedListing === listing.id ? "ring-2 ring-primary ring-offset-2" : ""}
                />
              ))}
            </div>
          </div>
          
          {showMap && (
            <div className="w-1/2 sticky top-24 h-[calc(100vh-140px)]">
              <Map 
                pins={getMapPins()}
                className="w-full h-full rounded-3xl shadow-lg"
                onPinClick={(id) => setFocusedListing(id)}
              />
            </div>
          )}
        </div>
        
        {/* Map toggle button - Only visible on desktop */}
        <div className="hidden md:block fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <Button 
            onClick={() => setShowMap(!showMap)} 
            className="rounded-full shadow-lg px-6 py-6 flex items-center gap-2"
          >
            {showMap ? 'Hide map' : 'Show map'}
            <MapPin className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
      
      <MobileNav />
    </div>
  );
};

export default Index;
