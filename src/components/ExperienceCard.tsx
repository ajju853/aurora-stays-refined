
import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Heart, Star, Clock, Users } from "lucide-react";
import { Experience } from "@/data/mockExperiences";

type ExperienceCardProps = {
  experience: Experience;
  index?: number;
  isPremium?: boolean;
  isFeatured?: boolean;
  className?: string;
};

export function ExperienceCard({
  experience,
  index = 0,
  isPremium = false,
  isFeatured = false,
  className
}: ExperienceCardProps) {
  const [favorited, setFavorited] = useState(experience.isFavorite);
  const [isHovered, setIsHovered] = useState(false);
  const [isHeartAnimating, setIsHeartAnimating] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    setCurrentImageIndex((prev) => (prev + 1) % experience.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev - 1 + experience.images.length) % experience.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn("h-full", className)}
    >
      <Link 
        to={`/experience/${experience.id}`}
        className={cn(
          "block rounded-3xl overflow-hidden transform transition-all duration-300 card-hover-zoom h-full",
          "hover:translate-y-[-8px] hover:shadow-xl bg-background flex flex-col",
          className
        )}
        style={{ perspective: "1000px" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-3xl">
          <img
            src={experience.images[currentImageIndex]}
            alt={experience.title}
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

          {/* Premium badge with glassmorphism */}
          {isPremium && (
            <div className="absolute top-3 left-3 z-10">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <Badge variant="default" className="bg-gradient-to-r from-amber-500 to-yellow-500 backdrop-blur-sm flex items-center gap-1 shadow-md">
                  <span>Premium</span>
                </Badge>
              </motion.div>
            </div>
          )}

          {/* Featured badge */}
          {isFeatured && !isPremium && (
            <div className="absolute top-3 left-3 z-10">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <Badge variant="default" className="bg-primary/70 backdrop-blur-sm flex items-center gap-1 shadow-md">
                  <span>Featured</span>
                </Badge>
              </motion.div>
            </div>
          )}
          
          {/* Duration badge */}
          <div className="absolute bottom-3 left-3 z-10">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <Badge variant="default" className="bg-black/50 backdrop-blur-sm flex items-center gap-1 shadow-md">
                <Clock className="h-3 w-3" />
                <span>{experience.duration}</span>
              </Badge>
            </motion.div>
          </div>

          {/* Image navigation dots */}
          {experience.images.length > 1 && (
            <div className="absolute bottom-3 right-3 flex justify-center gap-1">
              {experience.images.map((_, i) => (
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
          {experience.images.length > 1 && isHovered && (
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

        <div className="p-4 space-y-3 flex-1 flex flex-col">
          <div className="flex justify-between">
            <h3 className="font-medium text-lg truncate">{experience.title}</h3>
            <div className="flex items-center">
              <Star className={cn("w-4 h-4 fill-foreground stroke-0", experience.rating >= 4.8 && "text-amber-400")} />
              <span className="ml-1 text-sm font-medium">{experience.rating.toFixed(1)}</span>
            </div>
          </div>
          
          <p className="text-muted-foreground text-sm">{experience.location}</p>
          
          <p className="text-sm line-clamp-2 flex-1">{experience.description}</p>
          
          <div className="flex flex-wrap gap-1 mt-1">
            {experience.tags.slice(0, 3).map((tag) => (
              <span 
                key={tag} 
                className="px-2 py-0.5 bg-secondary text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
            {experience.tags.length > 3 && (
              <span className="px-2 py-0.5 bg-secondary text-xs rounded-full">
                +{experience.tags.length - 3} more
              </span>
            )}
          </div>
          
          <div className="flex justify-between items-center pt-2">
            <p className="text-base font-semibold flex items-baseline">
              <span className="text-lg">${experience.price}</span>
              <span className="text-sm text-muted-foreground ml-1">/ person</span>
            </p>
            
            <div className="flex items-center text-muted-foreground text-sm">
              <Users className="h-3 w-3 mr-1" />
              <span>{experience.groupSize} people</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
