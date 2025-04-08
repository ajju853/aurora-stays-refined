
import { useState } from "react";
import { Heart, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

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
}: ListingCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [favorited, setFavorited] = useState(isFavorite);
  const [isHovered, setIsHovered] = useState(false);

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    setFavorited(!favorited);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Link 
      to={`/listing/${id}`}
      className={cn(
        "block rounded-3xl overflow-hidden transform transition-all duration-300 card-hover-zoom",
        "animate-fade-in",
        className
      )}
      style={{ 
        animationDelay: `${index * 100}ms`,
        opacity: 0 // Start invisible, animation will fade it in
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
        <img
          src={images[currentImageIndex]}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500"
        />
        
        <button
          onClick={handleFavorite}
          className={cn(
            "absolute top-3 right-3 z-10 p-2 rounded-full transition-all",
            favorited ? "bg-primary/10" : "bg-black/20 hover:bg-black/30"
          )}
        >
          <Heart
            className={cn(
              "h-5 w-5",
              favorited ? "fill-primary stroke-primary" : "stroke-white", 
              favorited && "animate-pulse-heart"
            )}
          />
        </button>

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
            <button 
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1"
              onClick={prevImage}
            >
              <span className="sr-only">Previous image</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1"
              onClick={nextImage}
            >
              <span className="sr-only">Next image</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      <div className="pt-3 space-y-1">
        <div className="flex justify-between">
          <h3 className="font-medium text-lg truncate">{title}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-foreground stroke-0" />
            <span className="ml-1 text-sm">{rating.toFixed(1)}</span>
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
        
        <p className="text-base font-medium pt-1">
          <span className="font-semibold">${price}</span> night
        </p>
      </div>
    </Link>
  );
}
