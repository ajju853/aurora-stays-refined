
// Sample data for listings
export const listings = [
  {
    id: "1",
    title: "Luxury Beachfront Villa with Infinity Pool",
    location: "Bali, Indonesia",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1920&auto=format",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1920&auto=format",
      "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=1920&auto=format"
    ],
    price: 350,
    rating: 4.97,
    description: "Experience tranquility in this stunning beachfront villa with panoramic ocean views. The property features an infinity pool that seemingly merges with the horizon, creating a breathtaking visual spectacle. Inside, find four spacious bedrooms, a fully-equipped modern kitchen, and a luxurious living area with floor-to-ceiling windows showcasing the spectacular surroundings.",
    tags: ["Beachfront", "Pool", "Luxury", "Ocean view"],
    features: ["4 bedrooms", "5 bathrooms", "Infinity pool", "Private beach access", "Full kitchen", "Air conditioning", "Wifi", "Daily housekeeping"],
    host: {
      name: "Alexandra",
      image: "https://i.pravatar.cc/150?img=1",
      isSuperHost: true,
      joinedDate: "2018"
    },
    reviews: 234,
    location_cords: {
      lat: -8.409518,
      lng: 115.188919
    }
  },
  {
    id: "2",
    title: "Modern Mountain Cabin with Hot Tub",
    location: "Aspen, Colorado",
    images: [
      "https://images.unsplash.com/photo-1514516816566-de580c621376?q=80&w=1920&auto=format",
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=1920&auto=format",
      "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=1920&auto=format"
    ],
    price: 275,
    rating: 4.89,
    description: "Escape to this architecturally stunning mountain retreat with floor-to-ceiling windows showcasing breathtaking mountain views. The property seamlessly blends rustic charm with modern design, featuring exposed wooden beams and contemporary furnishings. Relax in the outdoor hot tub under the stars after a day of hiking or skiing in the nearby mountains.",
    tags: ["Mountain view", "Hot tub", "Fireplace", "Modern"],
    features: ["3 bedrooms", "2 bathrooms", "Hot tub", "Fireplace", "Full kitchen", "Wifi", "Washer/dryer", "Deck"],
    host: {
      name: "Michael",
      image: "https://i.pravatar.cc/150?img=11",
      isSuperHost: true,
      joinedDate: "2016"
    },
    reviews: 176,
    location_cords: {
      lat: 39.19110,
      lng: -106.81754
    }
  },
  {
    id: "3",
    title: "Minimalist Penthouse with City Skyline Views",
    location: "Tokyo, Japan",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1920&auto=format",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1920&auto=format",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1920&auto=format"
    ],
    price: 420,
    rating: 4.95,
    description: "Experience Tokyo from this ultra-modern penthouse featuring minimalist design and breathtaking views of the city skyline. The open-concept living space is adorned with sleek contemporary furniture and smart home technology. Floor-to-ceiling windows in every room showcase the mesmerizing cityscape, while the rooftop terrace offers an exceptional space for entertaining or relaxation.",
    tags: ["City view", "Penthouse", "Minimalist", "Luxury"],
    features: ["2 bedrooms", "2.5 bathrooms", "Smart home", "Rooftop terrace", "Concierge service", "Gym access", "High-speed wifi", "Home theater"],
    host: {
      name: "Yuki",
      image: "https://i.pravatar.cc/150?img=5",
      isSuperHost: true,
      joinedDate: "2017"
    },
    reviews: 129,
    location_cords: {
      lat: 35.6895,
      lng: 139.6917
    }
  },
  {
    id: "4",
    title: "Historic Loft in Artistic District",
    location: "Barcelona, Spain",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1920&auto=format",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1920&auto=format",
      "https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?q=80&w=1920&auto=format"
    ],
    price: 185,
    rating: 4.88,
    description: "Immerse yourself in Barcelona's vibrant artistic atmosphere in this tastefully renovated historical loft. Original architectural features like exposed brick walls and wooden beams are complemented by contemporary art pieces and stylish furnishings. Located in the heart of the artistic district, you'll be steps away from galleries, cafes, and the city's most famous landmarks.",
    tags: ["Historic", "Artistic", "Central", "Stylish"],
    features: ["1 bedroom", "1 bathroom", "Original architecture", "Art collection", "Fast wifi", "Fully equipped kitchen", "Air conditioning", "Walking distance to attractions"],
    host: {
      name: "Carlos",
      image: "https://i.pravatar.cc/150?img=8",
      isSuperHost: false,
      joinedDate: "2019"
    },
    reviews: 96,
    location_cords: {
      lat: 41.3851,
      lng: 2.1734
    }
  },
  {
    id: "5",
    title: "Secluded Treehouse Retreat in Rainforest",
    location: "Costa Rica",
    images: [
      "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?q=80&w=1920&auto=format",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1920&auto=format",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1920&auto=format"
    ],
    price: 210,
    rating: 4.92,
    description: "Experience the magic of living among the treetops in this eco-friendly treehouse retreat. Surrounded by lush rainforest, the property offers a unique blend of adventure and tranquility. The open-air design allows you to fully immerse in nature while enjoying modern comforts. Fall asleep to the sounds of the forest and wake up to spectacular sunrise views and visiting wildlife.",
    tags: ["Treehouse", "Eco-friendly", "Nature", "Unique"],
    features: ["1 bedroom", "1 bathroom", "Outdoor shower", "Private deck", "Sustainable design", "Solar power", "Rainforest views", "Wildlife spotting"],
    host: {
      name: "Elena",
      image: "https://i.pravatar.cc/150?img=3",
      isSuperHost: true,
      joinedDate: "2015"
    },
    reviews: 118,
    location_cords: {
      lat: 9.7489,
      lng: -83.7534
    }
  },
  {
    id: "6",
    title: "Desert Oasis with Private Pool",
    location: "Marrakech, Morocco",
    images: [
      "https://images.unsplash.com/photo-1599320357203-7952bdad3a32?q=80&w=1920&auto=format",
      "https://images.unsplash.com/photo-1575403071235-5dcd06caae52?q=80&w=1920&auto=format",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1920&auto=format"
    ],
    price: 295,
    rating: 4.96,
    description: "Discover tranquility in this exquisite desert oasis featuring traditional Moroccan architecture with a contemporary twist. The courtyard centers around a stunning private pool surrounded by lush palm gardens. Inside, handcrafted furnishings, intricate tile work, and luxurious textiles create an authentic and elegant atmosphere. Enjoy spectacular sunset views over the desert landscape from the rooftop terrace.",
    tags: ["Desert view", "Pool", "Moroccan style", "Garden"],
    features: ["3 bedrooms", "3 bathrooms", "Private pool", "Courtyard garden", "Rooftop terrace", "Air conditioning", "Traditional hammam", "Daily breakfast"],
    host: {
      name: "Yasmine",
      image: "https://i.pravatar.cc/150?img=4",
      isSuperHost: true,
      joinedDate: "2017"
    },
    reviews: 205,
    location_cords: {
      lat: 31.6295,
      lng: -7.9811
    }
  }
];

// Function to generate map pins from listings
export function getMapPins() {
  return listings.map(listing => ({
    id: `pin-${listing.id}`,
    lat: listing.location_cords.lat,
    lng: listing.location_cords.lng,
    price: listing.price,
    listingId: listing.id
  }));
}

// Function to get a listing by id
export function getListingById(id: string) {
  return listings.find(listing => listing.id === id) || null;
}
