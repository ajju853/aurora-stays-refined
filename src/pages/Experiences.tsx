
import { useState, useRef, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { Button } from "@/components/ui/button";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ExperienceCard } from "@/components/ExperienceCard";
import { PremiumFilterBar } from "@/components/PremiumFilterBar";
import { Map } from "@/components/Map";
import { getExperiences } from "@/data/mockExperiences";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, Sparkles, MapPin, ChevronDown, Heart, Star } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

const Experiences = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [showMap, setShowMap] = useState(false);
  const [experiences, setExperiences] = useState(getExperiences());
  const [priceRange, setPriceRange] = useState([50, 500]);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [activeView, setActiveView] = useState("grid");
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Handle video loading
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', () => {
        setIsVideoLoaded(true);
      });
    }
  }, []);
  
  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const parallaxFactor = 0.4;
      
      heroRef.current.style.transform = `translateY(${scrollPosition * parallaxFactor}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Filter experiences based on category
  useEffect(() => {
    setExperiences(getExperiences(activeCategory));
  }, [activeCategory]);
  
  // Filter by price range
  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
    // In a real app, we would filter experiences based on price range
  };
  
  // Group experiences by quality level
  const premiumExperiences = experiences.filter(exp => exp.isPremium);
  const featuredExperiences = experiences.filter(exp => exp.isFeatured && !exp.isPremium);
  const regularExperiences = experiences.filter(exp => !exp.isPremium && !exp.isFeatured);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Cinematic Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <div 
          ref={heroRef} 
          className="absolute inset-0 w-full h-full z-0"
        >
          {/* Video Background with Fallback Image */}
          <div className={`absolute inset-0 transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="https://cdn.coverr.co/videos/coverr-hiking-through-the-mountains-5233/1080p.mp4" type="video/mp4" />
            </video>
          </div>
          
          {/* Fallback image while video loads */}
          <div className={`absolute inset-0 transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-0' : 'opacity-100'}`}>
            <img
              src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=2070&auto=format"
              alt="Adventure experiences"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col h-full justify-center items-center px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-center">
              Extraordinary Experiences
            </h1>
            <div className="flex items-center justify-center mb-10">
              <Globe className="w-5 h-5 text-primary mr-2 animate-pulse" />
              <p className="text-white text-xl md:text-2xl text-center max-w-2xl">
                Unforgettable adventures across the globe
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full max-w-3xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <PremiumFilterBar />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-10 left-0 right-0 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="animate-bounce">
              <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center items-start p-1">
                <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto w-full px-4 py-8 md:py-16">
        {/* Category Filtering */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-display font-semibold">Find your next adventure</h2>
            <Button variant="ghost" className="flex items-center gap-2 rounded-full">
              <Sparkles className="h-4 w-4 text-primary" />
              Surprise Me
            </Button>
          </div>
          <CategoryFilter onCategoryChange={setActiveCategory} />
        </div>
        
        {/* Price Range Slider */}
        <div className="mb-12 bg-background/60 backdrop-blur-lg rounded-2xl p-6 border shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Budget</h3>
            <div className="text-sm font-medium">
              ${priceRange[0]} - ${priceRange[1]}
            </div>
          </div>
          <Slider
            defaultValue={priceRange}
            min={10}
            max={1000}
            step={10}
            value={priceRange}
            onValueChange={handlePriceChange}
            className="mb-6"
          />
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {['Luxury', 'Best Value', 'Budget-Friendly', 'All-Inclusive'].map((filter) => (
              <Button 
                key={filter} 
                variant="outline" 
                className="rounded-full text-sm"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
        
        {/* View Selector */}
        <div className="mb-8">
          <Tabs defaultValue="grid" value={activeView} onValueChange={setActiveView} className="w-full">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-display font-semibold">Top-rated experiences</h2>
              <TabsList className="grid w-[200px] grid-cols-2">
                <TabsTrigger value="grid">Grid</TabsTrigger>
                <TabsTrigger value="map">Map</TabsTrigger>
              </TabsList>
            </div>
          </Tabs>
        </div>
        
        <AnimatePresence mode="wait">
          {activeView === "grid" ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Premium Collection */}
              {premiumExperiences.length > 0 && (
                <div className="mb-16">
                  <motion.div 
                    className="flex justify-between items-center mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl font-display font-semibold flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-amber-500" />
                      Premium Experiences
                    </h2>
                    <Button variant="outline" className="rounded-full">
                      View All
                    </Button>
                  </motion.div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {premiumExperiences.slice(0, 3).map((exp, index) => (
                      <ExperienceCard
                        key={exp.id}
                        experience={exp}
                        index={index}
                        isPremium={true}
                        className="h-full"
                      />
                    ))}
                  </div>
                </div>
              )}
              
              {/* Featured Experiences */}
              {featuredExperiences.length > 0 && (
                <div className="mb-16">
                  <motion.div 
                    className="flex justify-between items-center mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <h2 className="text-2xl font-display font-semibold flex items-center gap-2">
                      <Star className="h-5 w-5 text-primary fill-primary" />
                      Featured Experiences
                    </h2>
                    <Button variant="outline" className="rounded-full">
                      View All
                    </Button>
                  </motion.div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredExperiences.slice(0, 3).map((exp, index) => (
                      <ExperienceCard
                        key={exp.id}
                        experience={exp}
                        index={index}
                        isFeatured={true}
                        className="h-full"
                      />
                    ))}
                  </div>
                </div>
              )}
              
              {/* Regular Experiences */}
              <div>
                <motion.div 
                  className="flex justify-between items-center mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="text-2xl font-display font-semibold">
                    All Experiences
                  </h2>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Sort by:</span>
                    <Button variant="ghost" className="flex items-center gap-1 text-sm">
                      Most Popular 
                      <ChevronDown className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </motion.div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {regularExperiences.map((exp, index) => (
                    <ExperienceCard
                      key={exp.id}
                      experience={exp}
                      index={index}
                      className="h-full"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="map"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="h-[800px] rounded-2xl overflow-hidden"
            >
              <Map 
                pins={experiences.map(exp => ({
                  id: `exp-${exp.id}`,
                  lat: exp.coordinates.lat,
                  lng: exp.coordinates.lng,
                  price: exp.price,
                  listingId: exp.id
                }))}
                className="w-full h-full"
              />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Map toggle button for mobile */}
        <div className="md:hidden fixed bottom-24 left-1/2 transform -translate-x-1/2 z-30">
          <Button 
            onClick={() => setActiveView(activeView === "grid" ? "map" : "grid")} 
            className="rounded-full shadow-lg px-6 py-6 flex items-center gap-2"
          >
            {activeView === "map" ? 'Show Grid' : 'Show Map'}
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

export default Experiences;
