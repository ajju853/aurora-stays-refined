import { useState, useRef, useEffect } from "react";
import { SearchBar } from "@/components/SearchBar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ListingCard } from "@/components/ListingCard";
import { Map } from "@/components/Map";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { Button } from "@/components/ui/button";
import { listings, getMapPins, getListingsByCategory } from "@/data/mockListings";
import { MapPin, Globe, Sparkles, Diamond, Award } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollToTop } from "@/components/ScrollToTop";

const Index = () => {
  const [showMap, setShowMap] = useState(false);
  const [focusedListing, setFocusedListing] = useState<string | null>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [filteredListings, setFilteredListings] = useState(listings);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    setFilteredListings(getListingsByCategory(activeCategory));
  }, [activeCategory]);
  
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

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', () => {
        setIsVideoLoaded(true);
      });
    }
  }, []);

  const premiumListings = filteredListings.filter(listing => listing.isPremium);
  const featuredListings = filteredListings.filter(listing => listing.isFeatured && !listing.isPremium);
  const regularListings = filteredListings.filter(listing => !listing.isPremium && !listing.isFeatured);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="relative h-[85vh] w-full overflow-hidden">
        <div 
          ref={heroRef} 
          className="absolute inset-0 w-full h-full z-0"
        >
          <div className={`absolute inset-0 transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="https://cdn.coverr.co/videos/coverr-aerial-view-of-a-beach-resort-2633/1080p.mp4" type="video/mp4" />
            </video>
          </div>
          
          <div className={`absolute inset-0 transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-0' : 'opacity-100'}`}>
            <img
              src="https://images.unsplash.com/photo-1501876725168-00c445821c9e?q=80&w=2070&auto=format"
              alt="Beautiful landscape"
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
              Discover extraordinary stays
            </h1>
            <div className="flex items-center justify-center mb-10">
              <Globe className="w-5 h-5 text-primary mr-2 animate-pulse" />
              <p className="text-white text-xl md:text-2xl text-center max-w-2xl">
                Unique destinations and experiences worldwide
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full max-w-4xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <SearchBar className="w-full glass" />
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
      
      <div className="max-w-7xl mx-auto w-full px-4 py-8 md:py-16">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="flex justify-between items-center mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-display font-semibold">Explore top destinations</h2>
            <Button variant="ghost" className="flex items-center gap-2 rounded-full">
              <Sparkles className="h-4 w-4 text-primary" />
              Inspire Me
            </Button>
          </motion.div>
          <CategoryFilter onCategoryChange={setActiveCategory} />
        </motion.div>
      
        {premiumListings.length > 0 && (
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="flex justify-between items-center mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-display font-semibold flex items-center gap-2">
                <Diamond className="h-6 w-6 text-amber-500" />
                Premium Collection
              </h2>
              <Button variant="ghost" className="flex items-center gap-2 rounded-full">
                <Sparkles className="h-4 w-4 text-amber-500" />
                View All Premium
              </Button>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              {premiumListings.slice(0, 3).map((listing, index) => (
                <motion.div key={listing.id} variants={itemVariants}>
                  <ListingCard
                    id={listing.id}
                    title={listing.title}
                    location={listing.location}
                    images={listing.images}
                    price={listing.price}
                    rating={listing.rating}
                    tags={listing.tags}
                    index={index}
                    isPremium={true}
                    className={focusedListing === listing.id ? "ring-2 ring-amber-500 ring-offset-2" : ""}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {featuredListings.length > 0 && (
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="flex justify-between items-center mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-display font-semibold flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                Featured Properties
              </h2>
              <Button variant="ghost" className="flex items-center gap-2 rounded-full">
                <Sparkles className="h-4 w-4 text-primary" />
                View All Featured
              </Button>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              {featuredListings.slice(0, 3).map((listing, index) => (
                <motion.div key={listing.id} variants={itemVariants}>
                  <ListingCard
                    id={listing.id}
                    title={listing.title}
                    location={listing.location}
                    images={listing.images}
                    price={listing.price}
                    rating={listing.rating}
                    tags={listing.tags}
                    index={index}
                    isFeatured={true}
                    className={focusedListing === listing.id ? "ring-2 ring-primary ring-offset-2" : ""}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
        
        <div className="flex mt-4 mb-8">
          <div className={`transition-all duration-500 ${
            showMap ? "w-1/2 pr-4" : "w-full"
          }`}>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              {regularListings.map((listing, index) => (
                <motion.div key={listing.id} variants={itemVariants}>
                  <ListingCard
                    id={listing.id}
                    title={listing.title}
                    location={listing.location}
                    images={listing.images}
                    price={listing.price}
                    rating={listing.rating}
                    tags={listing.tags}
                    index={index}
                    isRareFind={listing.isRareFind}
                    className={focusedListing === listing.id ? "ring-2 ring-primary ring-offset-2" : ""}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {showMap && (
            <motion.div 
              className="w-1/2 sticky top-24 h-[calc(100vh-140px)]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Map 
                pins={getMapPins()}
                className="w-full h-full rounded-3xl shadow-lg"
                onPinClick={(id) => setFocusedListing(id)}
              />
            </motion.div>
          )}
        </div>
        
        <div className="hidden md:block fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              onClick={() => setShowMap(!showMap)} 
              className="rounded-full shadow-lg px-6 py-6 flex items-center gap-2 glass"
            >
              {showMap ? 'Hide map' : 'Show map'}
              <MapPin className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
      
      <MobileNav />
      <ScrollToTop />
    </div>
  );
};

export default Index;
