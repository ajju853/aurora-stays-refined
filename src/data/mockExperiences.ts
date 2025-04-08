
export type Experience = {
  id: string;
  title: string;
  location: string;
  description: string;
  price: number;
  currency?: string;
  rating: number;
  reviews: number;
  images: string[];
  tags: string[];
  duration: string;
  groupSize: number;
  included: string[];
  host: {
    name: string;
    image: string;
    rating: number;
    isSuperHost: boolean;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  isPremium?: boolean;
  isFeatured?: boolean;
  isRareFind?: boolean;
  isFavorite?: boolean;
  category?: string;
};

const experiences: Experience[] = [
  {
    id: "exp-1",
    title: "Summit Hike at Mount Rainier",
    location: "Mount Rainier, Washington",
    description: "Experience the breathtaking views at Mount Rainier National Park with a guided summit hike. Perfect for experienced hikers looking for a challenge.",
    price: 149,
    rating: 4.9,
    reviews: 127,
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=2076&auto=format"
    ],
    tags: ["Hiking", "Adventure", "Nature", "Mountains", "views"],
    duration: "8 hours",
    groupSize: 8,
    included: ["Professional guide", "Safety equipment", "Snacks"],
    host: {
      name: "Alex Rivers",
      image: "https://i.pravatar.cc/150?img=13",
      rating: 4.95,
      isSuperHost: true
    },
    coordinates: {
      lat: 46.8523,
      lng: -121.7603
    },
    isPremium: true,
    category: "views"
  },
  {
    id: "exp-2",
    title: "Sunset Beach Yoga Retreat",
    location: "Malibu, California",
    description: "Unwind with a relaxing beach yoga session as the sun sets over the Pacific. Perfect for all experience levels and a great way to find your inner peace.",
    price: 75,
    rating: 4.8,
    reviews: 94,
    images: [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2022&auto=format",
      "https://images.unsplash.com/photo-1540539234-c14a20fb7c7b?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format"
    ],
    tags: ["Yoga", "Beach", "Sunset", "Wellness", "beach"],
    duration: "2 hours",
    groupSize: 12,
    included: ["Yoga mats", "Instructor", "Refreshments"],
    host: {
      name: "Maya Sun",
      image: "https://i.pravatar.cc/150?img=16",
      rating: 4.9,
      isSuperHost: true
    },
    coordinates: {
      lat: 34.0259,
      lng: -118.7798
    },
    isFeatured: true,
    category: "beach"
  },
  {
    id: "exp-3",
    title: "Modern Architecture Walking Tour",
    location: "Chicago, Illinois",
    description: "Explore the iconic modern architecture of downtown Chicago with an expert guide. Learn about the architects and stories behind these impressive structures.",
    price: 65,
    rating: 4.7,
    reviews: 86,
    images: [
      "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1445296608114-c55e59c24864?q=80&w=2075&auto=format",
      "https://images.unsplash.com/photo-1484249170766-998fa6efe3c0?q=80&w=2056&auto=format"
    ],
    tags: ["Architecture", "City", "Walking", "History", "modern"],
    duration: "3 hours",
    groupSize: 10,
    included: ["Guide", "City map", "Building access"],
    host: {
      name: "Robert James",
      image: "https://i.pravatar.cc/150?img=53",
      rating: 4.85,
      isSuperHost: false
    },
    coordinates: {
      lat: 41.8781,
      lng: -87.6298
    },
    category: "modern"
  },
  {
    id: "exp-4",
    title: "Tropical Rainforest Zipline Adventure",
    location: "Puerto Rico",
    description: "Soar through the canopy of a lush tropical rainforest on an exhilarating zipline tour. Experience nature from a whole new perspective.",
    price: 129,
    rating: 4.95,
    reviews: 152,
    images: [
      "https://images.unsplash.com/photo-1605540436563-5bca919ae766?q=80&w=2069&auto=format",
      "https://images.unsplash.com/photo-1586117466757-aef0f8bb4c08?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=2070&auto=format"
    ],
    tags: ["Zipline", "Adventure", "Rainforest", "Nature", "tropical"],
    duration: "4 hours",
    groupSize: 8,
    included: ["Equipment", "Safety briefing", "Transportation", "Snacks"],
    host: {
      name: "Carlos Rodriguez",
      image: "https://i.pravatar.cc/150?img=24",
      rating: 4.9,
      isSuperHost: true
    },
    coordinates: {
      lat: 18.2208,
      lng: -66.5901
    },
    isPremium: true,
    category: "tropical"
  },
  {
    id: "exp-5",
    title: "Luxury Desert Camping Retreat",
    location: "Mojave Desert, Nevada",
    description: "Experience a night under the stars in a luxurious desert camp. Enjoy gourmet meals, star gazing, and the serenity of the desert landscape.",
    price: 299,
    rating: 4.9,
    reviews: 64,
    images: [
      "https://images.unsplash.com/photo-1517859550608-596e87668f9d?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1478827536114-da961b7f86d9?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1618767451283-0f042e8ec5c5?q=80&w=2070&auto=format"
    ],
    tags: ["Glamping", "Desert", "Stargazing", "Luxury", "camping"],
    duration: "24 hours",
    groupSize: 6,
    included: ["Luxury tent", "Meals", "Activities", "Guide"],
    host: {
      name: "Samantha West",
      image: "https://i.pravatar.cc/150?img=41",
      rating: 4.95,
      isSuperHost: true
    },
    coordinates: {
      lat: 35.0117,
      lng: -115.4732
    },
    isPremium: true,
    category: "camping"
  },
  {
    id: "exp-6",
    title: "Medieval Castle Tour & Feast",
    location: "Loire Valley, France",
    description: "Step back in time with a guided tour of a medieval castle followed by an authentic medieval feast with entertainment.",
    price: 185,
    rating: 4.8,
    reviews: 78,
    images: [
      "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?q=80&w=2074&auto=format",
      "https://images.unsplash.com/photo-1564586547563-cf183828bd83?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1603306557534-279b6153e4b4?q=80&w=2070&auto=format"
    ],
    tags: ["Castle", "History", "Food", "Entertainment", "castles"],
    duration: "5 hours",
    groupSize: 15,
    included: ["Guided tour", "Medieval feast", "Entertainment", "Wine"],
    host: {
      name: "Philippe Laurent",
      image: "https://i.pravatar.cc/150?img=32",
      rating: 4.85,
      isSuperHost: false
    },
    coordinates: {
      lat: 47.2512,
      lng: 0.0836
    },
    isFeatured: true,
    category: "castles"
  },
  {
    id: "exp-7",
    title: "Alpine Ski Adventure",
    location: "Aspen, Colorado",
    description: "Hit the slopes with a professional ski instructor who will guide you through the best runs for your skill level. Equipment provided.",
    price: 225,
    rating: 4.85,
    reviews: 112,
    images: [
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1605540436563-5bca919ae766?q=80&w=2069&auto=format",
      "https://images.unsplash.com/photo-1518012312832-96aea3c91144?q=80&w=2074&auto=format"
    ],
    tags: ["Skiing", "Snow", "Winter Sports", "Mountains", "skiing"],
    duration: "6 hours",
    groupSize: 4,
    included: ["Ski equipment", "Instructor", "Lift ticket", "Hot beverages"],
    host: {
      name: "Travis Scott",
      image: "https://i.pravatar.cc/150?img=52",
      rating: 4.9,
      isSuperHost: true
    },
    coordinates: {
      lat: 39.1911,
      lng: -106.8175
    },
    category: "skiing"
  },
  {
    id: "exp-8",
    title: "Artisan Coffee Tasting Tour",
    location: "Portland, Oregon",
    description: "Discover Portland's renowned coffee scene with visits to award-winning roasteries and cafes. Learn about brewing methods and bean sourcing.",
    price: 89,
    rating: 4.75,
    reviews: 96,
    images: [
      "https://images.unsplash.com/photo-1511537190424-bbbab1a52d33?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974&auto=format",
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2037&auto=format"
    ],
    tags: ["Coffee", "Tasting", "Local", "Artisan", "cafe"],
    duration: "3 hours",
    groupSize: 8,
    included: ["Coffee tastings", "Transport between locations", "Guide", "Snacks"],
    host: {
      name: "Emma Chen",
      image: "https://i.pravatar.cc/150?img=49",
      rating: 4.8,
      isSuperHost: false
    },
    coordinates: {
      lat: 45.5152,
      lng: -122.6784
    },
    isFeatured: true,
    category: "cafe"
  },
  {
    id: "exp-9",
    title: "Ancient Ruins Archaeology Tour",
    location: "Cusco, Peru",
    description: "Explore ancient Incan ruins with an archaeology expert who will reveal the history and mysteries behind these remarkable structures.",
    price: 135,
    rating: 4.95,
    reviews: 87,
    images: [
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1526392247837-3f54dd53bdbc?q=80&w=2071&auto=format",
      "https://images.unsplash.com/photo-1583530015497-6cf7c5e17d12?q=80&w=2070&auto=format"
    ],
    tags: ["Archaeology", "History", "Ruins", "Ancient", "views"],
    duration: "7 hours",
    groupSize: 10,
    included: ["Expert guide", "Transportation", "Lunch", "Entrance fees"],
    host: {
      name: "Luis Vargas",
      image: "https://i.pravatar.cc/150?img=64",
      rating: 4.9,
      isSuperHost: true
    },
    coordinates: {
      lat: -13.5226,
      lng: -71.9673
    },
    category: "views"
  },
  {
    id: "exp-10",
    title: "Hawaiian Waterfall Hike & Swim",
    location: "Maui, Hawaii",
    description: "Trek through lush rainforests to discover hidden waterfalls where you can swim in crystal clear pools. A perfect blend of adventure and relaxation.",
    price: 119,
    rating: 4.9,
    reviews: 145,
    images: [
      "https://images.unsplash.com/photo-1546514355-7fdc90ccbd03?q=80&w=1974&auto=format",
      "https://images.unsplash.com/photo-1545861163-add0e61e128c?q=80&w=1974&auto=format",
      "https://images.unsplash.com/photo-1524097259886-c8827f72e094?q=80&w=1974&auto=format"
    ],
    tags: ["Hiking", "Waterfalls", "Swimming", "Nature", "tropical"],
    duration: "5 hours",
    groupSize: 6,
    included: ["Guide", "Water", "Snacks", "Towels"],
    host: {
      name: "Kai Nakamura",
      image: "https://i.pravatar.cc/150?img=38",
      rating: 4.85,
      isSuperHost: true
    },
    coordinates: {
      lat: 20.7984,
      lng: -156.3319
    },
    isRareFind: true,
    category: "tropical"
  },
  {
    id: "exp-11",
    title: "Coastal Cliffs Helicopter Tour",
    location: "Big Sur, California",
    description: "Soar above the stunning California coastline in a private helicopter. See iconic landmarks and breathtaking landscapes from a unique perspective.",
    price: 349,
    rating: 4.9,
    reviews: 62,
    images: [
      "https://images.unsplash.com/photo-1532339142463-fd0a8979791a?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1507812984078-917a274065be?q=80&w=2072&auto=format",
      "https://images.unsplash.com/photo-1544015759-237f07f8b1e7?q=80&w=2070&auto=format"
    ],
    tags: ["Helicopter", "Scenic", "Coastline", "Adventure", "views"],
    duration: "1 hour",
    groupSize: 3,
    included: ["Pilot", "Headsets", "Champagne", "Photos"],
    host: {
      name: "Captain Mike",
      image: "https://i.pravatar.cc/150?img=12",
      rating: 5.0,
      isSuperHost: true
    },
    coordinates: {
      lat: 36.2704,
      lng: -121.8081
    },
    isPremium: true,
    category: "views"
  },
  {
    id: "exp-12",
    title: "Urban Street Art & Graffiti Workshop",
    location: "Berlin, Germany",
    description: "Learn street art techniques from local artists and create your own piece on a designated wall. Explore the city's vibrant street art scene.",
    price: 85,
    rating: 4.8,
    reviews: 107,
    images: [
      "https://images.unsplash.com/photo-1547142499-5c8409de1239?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1584141811780-8bb5a221251e?q=80&w=2070&auto=format",
      "https://images.unsplash.com/photo-1567635025480-119698159b15?q=80&w=2070&auto=format"
    ],
    tags: ["Art", "Workshop", "Urban", "Creative", "modern"],
    duration: "4 hours",
    groupSize: 8,
    included: ["Art supplies", "Instructor", "Refreshments"],
    host: {
      name: "Nina Kunstler",
      image: "https://i.pravatar.cc/150?img=34",
      rating: 4.85,
      isSuperHost: false
    },
    coordinates: {
      lat: 52.5200,
      lng: 13.4050
    },
    category: "modern"
  }
];

// Function to filter experiences by category
export const getExperiences = (category: string | null = null) => {
  if (!category) return experiences;
  return experiences.filter(exp => exp.category === category || exp.tags.includes(category.toLowerCase()));
};

export default experiences;
