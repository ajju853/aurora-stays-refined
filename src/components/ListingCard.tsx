
import { useState } from "react";
import { Heart, Star, Award, Diamond, Crown, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

type ListingCardProps = {
  id: string;
  title: string;
  location: string;
  images: string[];
  price: number;
  rating: number;
  dates?: string;
  tags: string[];
  isFavorite?: boolean;
  className?: string;
  index?: number;
  featured?: boolean;
  isRareFind?: boolean;
  isPremium?: boolean;
  isFeatured?: boolean;
};

export function ListingCard({
  id,
  title,
  location,
  images,
  price,
  rating,
  dates,
  tags,
  isFavorite = false,
  className,
  index = 0,
  featured,
  isRareFind,
  isPremium,
  isFeatured,
}: ListingCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [favorited, setFavorited] = useState(isFavorite);
  const [isHovered, setIsHovered] = useState(false);
  const [isHeartAnimating, setIsHeartAnimating] = useState(false);

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    setFavorited(!favorited);
    if (!favorited) {
      setIsHeartAnimating(true);
      setTimeout(() => setIsHeartAnimating(false), 1000);
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Display premium badge if the property is marked as premium
  const showPremium = isPremium || (index % 4 === 0);
  // Display featured badge if the property is marked as featured
  const showFeatured = isFeatured || featured || (index % 7 === 0);
  // Display rare find badge if the property is marked as a rare find
  const showRareFind = isRareFind || (index % 5 === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link 
        to={`/listing/${id}`}
        className={cn(
          "block rounded-3xl overflow-hidden transform transition-all duration-300 card-hover-zoom",
          "hover:translate-y-[-8px] hover:shadow-xl bg-background",
          className
        )}
        style={{ 
          perspective: "1000px",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <img
            src={images[currentImageIndex]}
            alt={title}
            className={cn(
              "w-full h-full object-cover transition-transform duration-500",
              isHovered && "scale-110"
            )}
          />
          
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleFavorite}
            className={cn(
              "absolute top-3 right-3 z-10 p-2 rounded-full transition-all",
              favorited ? "bg-primary/20 backdrop-blur-sm" : "bg-black/20 backdrop-blur-sm hover:bg-black/30"
            )}
          >
            <Heart
              className={cn(
                "h-5 w-5",
                favorited ? "fill-primary stroke-primary" : "stroke-white", 
                isHeartAnimating && "animate-pulse-heart"
              )}
            />
          </motion.button>

          {/* Premium status badge with glassmorphism */}
          {showPremium && (
            <div className="absolute top-3 left-3 z-10">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <Badge variant="default" className="bg-gradient-to-r from-amber-500 to-yellow-500 backdrop-blur-sm flex items-center gap-1 shadow-md">
                  <Diamond className="h-3 w-3" />
                  <span>Premium</span>
                </Badge>
              </motion.div>
            </div>
          )}

          {/* Featured badge with glassmorphism */}
          {showFeatured && !showPremium && (
            <div className="absolute top-3 left-3 z-10">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <Badge variant="default" className="bg-primary/70 backdrop-blur-sm flex items-center gap-1 shadow-md">
                  <Crown className="h-3 w-3" />
                  <span>Featured</span>
                </Badge>
              </motion.div>
            </div>
          )}
          
          {/* Rare find badge with glassmorphism */}
          {showRareFind && !showPremium && !showFeatured && (
            <div className="absolute top-3 left-3 z-10">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <Badge variant="default" className="bg-indigo-500/70 backdrop-blur-sm flex items-center gap-1 shadow-md">
                  <Shield className="h-3 w-3" />
                  <span>Rare Find</span>
                </Badge>
              </motion.div>
            </div>
          )}

          {/* Image navigation dots */}
          {images.length > 1 && (
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "w-1.5 h-1.5 rounded-full transition-all",
                    currentImageIndex === i ? "bg-white" : "bg-white/40"
                  )}
                />
              ))}
            </div>
          )}

          {/* Image navigation arrows - only show on hover */}
          {images.length > 1 && isHovered && (
            <>
              <motion.button 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 transition-all"
                onClick={prevImage}
              >
                <span className="sr-only">Previous image</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              <motion.button 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 transition-all"
                onClick={nextImage}
              >
                <span className="sr-only">Next image</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </>
          )}
        </div>

        <div className="pt-4 pb-3 px-3 space-y-1.5">
          <div className="flex justify-between">
            <h3 className="font-medium text-lg truncate">{title}</h3>
            <div className="flex items-center">
              <Star className={cn("w-4 h-4 fill-foreground stroke-0", rating >= 4.8 && "text-amber-400")} />
              <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
            </div>
          </div>
          
          <p className="text-muted-foreground text-sm">{location}</p>
          
          {dates && (
            <p className="text-muted-foreground text-sm">{dates}</p>
          )}
          
          <div className="flex flex-wrap gap-1 mt-1">
            {tags.slice(0, 2).map((tag) => (
              <span 
                key={tag} 
                className="px-2 py-0.5 bg-secondary text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
            {tags.length > 2 && (
              <span className="px-2 py-0.5 bg-secondary text-xs rounded-full">
                +{tags.length - 2} more
              </span>
            )}
          </div>
          
          <p className="text-base font-semibold pt-1 flex items-baseline">
            <span className="text-lg">${price}</span>
            <span className="text-sm text-muted-foreground ml-1">night</span>
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
