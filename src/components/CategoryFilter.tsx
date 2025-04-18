
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Mountain, Palmtree, Building, Waves, Tent, Castle, Snowflake, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export type Category = {
  id: string;
  name: string;
  icon: React.ElementType;
};

export const categories: Category[] = [
  { id: "views", name: "Amazing views", icon: Mountain },
  { id: "beach", name: "Beachfront", icon: Waves },
  { id: "modern", name: "Modern", icon: Building },
  { id: "tropical", name: "Tropical", icon: Palmtree },
  { id: "camping", name: "Camping", icon: Tent },
  { id: "castles", name: "Castles", icon: Castle },
  { id: "skiing", name: "Skiing", icon: Snowflake },
  { id: "cafe", name: "Cafes", icon: Coffee },
];

type CategoryFilterProps = {
  onCategoryChange?: (category: string | null) => void;
};

export function CategoryFilter({ onCategoryChange }: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    
    const scrollAmount = 300;
    const newScrollLeft = direction === 'left'
      ? scrollRef.current.scrollLeft - scrollAmount
      : scrollRef.current.scrollLeft + scrollAmount;
      
    scrollRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
    
    setTimeout(checkScroll, 300); // Check after animation
  };

  const handleCategoryClick = (categoryId: string) => {
    const newCategory = activeCategory === categoryId ? null : categoryId;
    setActiveCategory(newCategory);
    
    if (onCategoryChange) {
      onCategoryChange(newCategory);
    }
  };

  return (
    <div className="relative">
      <motion.div 
        className="flex items-center space-x-1 overflow-x-auto hide-scrollbar py-4"
        ref={scrollRef}
        onScroll={checkScroll}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex-shrink-0 w-4"></div>
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Button
                variant={activeCategory === category.id ? "default" : "ghost"}
                className={cn(
                  "rounded-full px-4 py-6 flex-shrink-0 transition-all",
                  activeCategory === category.id 
                    ? "bg-foreground text-background" 
                    : "hover:bg-secondary"
                )}
                onClick={() => handleCategoryClick(category.id)}
              >
                <Icon className="mr-2 h-4 w-4" />
                {category.name}
              </Button>
            </motion.div>
          );
        })}
        <div className="flex-shrink-0 w-4"></div>
      </motion.div>

      {canScrollLeft && (
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full shadow-md bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>
      )}
      
      {canScrollRight && (
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full shadow-md bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
