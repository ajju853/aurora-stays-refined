
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ListingCard } from "@/components/ListingCard";
import { getListingsByCategory } from "@/data/mockListings";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PremiumFilterBar } from "@/components/PremiumFilterBar";
import { Diamond, MapPin, Crown } from "lucide-react";

const Luxury = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [showMap, setShowMap] = useState(false);
  
  // Get premium listings
  const listings = getListingsByCategory(activeCategory).filter(listing => listing.isPremium);
  
  const handleCategoryChange = (category: string | null) => {
    setActiveCategory(category);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          {/* Background Image with Gradient Overlay */}
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1920&auto=format"
            alt="Luxury accommodations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col h-full justify-center px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <Diamond className="w-6 h-6 text-amber-400 mr-2" />
              <h2 className="text-white text-lg uppercase tracking-wider font-medium">Premium Collection</h2>
            </div>
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
              Luxury Accommodations
            </h1>
            <p className="text-white/90 text-xl md:text-2xl text-center max-w-2xl mx-auto">
              Discover our exclusive collection of the world's most extraordinary places to stay
            </p>
          </motion.div>
          
          <motion.div 
            className="w-full max-w-3xl mx-auto mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <PremiumFilterBar />
          </motion.div>
        </div>
      </section>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto w-full px-4 py-12">
        {/* Category Filtering */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <Crown className="h-5 w-5 text-amber-500 mr-2" />
              <h2 className="text-2xl font-display font-semibold">Luxury Categories</h2>
            </div>
          </div>
          <CategoryFilter onCategoryChange={handleCategoryChange} />
        </div>
        
        {/* Luxury Listings */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-display font-semibold">Premium Properties</h2>
            <Button variant="outline" className="flex items-center gap-2 rounded-full">
              <MapPin className="h-4 w-4" />
              View on Map
            </Button>
          </div>
          
          {listings.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                  isPremium={listing.isPremium}
                  isFeatured={listing.isFeatured}
                  isRareFind={listing.isRareFind}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-600">No luxury listings found in this category</h3>
              <p className="text-gray-500 mt-2">Try selecting a different category or clearing filters</p>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
      
      <MobileNav />
    </div>
  );
};

export default Luxury;
