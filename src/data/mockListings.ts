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
    categories: ["beach", "views", "tropical"],
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
    },
    isFeatured: true,
    isPremium: true
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
    categories: ["views", "skiing", "modern"],
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
    categories: ["views", "modern"],
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
    },
    isPremium: true
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
    categories: ["modern", "cafe"],
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
    categories: ["views", "tropical", "camping"],
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
    },
    isRareFind: true
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
    categories: ["views", "modern"],
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
  },
  {
    id: "7",
    title: "Elegant Marina Penthouse with Yacht Access",
    location: "Dubai, UAE",
    images: [
      "public/lovable-uploads/df24b022-dc3f-4ef5-aa4b-908ed533c4a2.png", 
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1920&auto=format",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1920&auto=format"
    ],
    price: 850,
    rating: 5.0,
    description: "Experience unparalleled luxury in this exclusive penthouse overlooking Dubai Marina. This spectacular residence features panoramic views through floor-to-ceiling windows, private elevator access, and direct access to yacht services. The opulent interior showcases Italian marble, designer furnishings, and smart home technology throughout. A private chef and butler service are available upon request.",
    tags: ["Waterfront", "Penthouse", "Ultra Luxury", "Marina View"],
    categories: ["beach", "modern", "views"],
    features: ["4 bedrooms", "5 bathrooms", "Private elevator", "Yacht access", "Infinity pool", "Smart home", "24/7 concierge", "Private chef available"],
    host: {
      name: "Khalid",
      image: "https://i.pravatar.cc/150?img=13",
      isSuperHost: true,
      joinedDate: "2014"
    },
    reviews: 67,
    location_cords: {
      lat: 25.0657,
      lng: 55.1379
    },
    isPremium: true,
    isFeatured: true
  },
  {
    id: "8",
    title: "Tropical Paradise Villa with Private Beach",
    location: "Maldives",
    images: [
      "public/lovable-uploads/40dad21c-fe81-453b-872d-88860662791c.png",
      "public/lovable-uploads/91436140-b7ab-4f9c-a9f6-375e0c07c5ff.png",
      "https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?q=80&w=1920&auto=format"
    ],
    price: 1200,
    rating: 4.99,
    description: "Escape to this breathtaking overwater villa in the pristine Maldives. This exclusive retreat offers direct lagoon access from your private deck with stunning sunset views. The villa features a glass floor section for observing marine life, a private infinity pool that blends seamlessly with the ocean horizon, and personalized butler service. Indulge in the ultimate tropical paradise experience.",
    tags: ["Overwater", "Private Beach", "Ultra Luxury", "Island"],
    categories: ["beach", "tropical", "views"],
    features: ["1 master suite", "Indoor/outdoor bathroom", "Private infinity pool", "Direct ocean access", "Butler service", "Water sports equipment", "Sunset views", "Gourmet dining"],
    host: {
      name: "Ibrahim",
      image: "https://i.pravatar.cc/150?img=14",
      isSuperHost: true,
      joinedDate: "2016"
    },
    reviews: 93,
    location_cords: {
      lat: 3.2028,
      lng: 73.2207
    },
    isPremium: true
  },
  {
    id: "9",
    title: "Historic Castle Estate with Private Vineyard",
    location: "Tuscany, Italy",
    images: [
      "public/lovable-uploads/847a2729-2c2c-4dd0-b2b1-8221f0868cb2.png",
      "public/lovable-uploads/3649f77e-133e-4603-96dc-68be5b32877c.png",
      "https://images.unsplash.com/photo-1590059305933-77d71b35d24d?q=80&w=1920&auto=format"
    ],
    price: 950,
    rating: 4.95,
    description: "Step back in time at this magnificently restored 16th-century castle nestled among the rolling hills of Tuscany. This exclusive property sits on a private estate with its own vineyard and olive groves. Featuring original frescoes, elegant antique furnishings, and modern amenities discreetly integrated into the historic setting. Enjoy wine tastings from your private cellar, cooking classes with local chefs, and panoramic countryside views.",
    tags: ["Historic", "Vineyard", "Castle", "Countryside"],
    categories: ["castles", "views"],
    features: ["8 bedrooms", "7 bathrooms", "Private vineyard", "Wine cellar", "Swimming pool", "Tennis court", "Chef's kitchen", "Olive grove"],
    host: {
      name: "Francesca",
      image: "https://i.pravatar.cc/150?img=16",
      isSuperHost: true,
      joinedDate: "2015"
    },
    reviews: 51,
    location_cords: {
      lat: 43.7711,
      lng: 11.2486
    },
    isFeatured: true
  },
  {
    id: "10",
    title: "Contemporary Alpine Chalet with Indoor Pool",
    location: "Swiss Alps, Switzerland",
    images: [
      "public/lovable-uploads/ae671710-0dd0-421a-bd1d-9411eb68115a.png",
      "https://images.unsplash.com/photo-1601919051950-bb9f3ffb3fee?q=80&w=1920&auto=format",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1920&auto=format"
    ],
    price: 1100,
    rating: 4.97,
    description: "Experience the ultimate mountain luxury in this stunning contemporary chalet nestled in the Swiss Alps. This architectural masterpiece features walls of glass showcasing panoramic mountain views, a private indoor swimming pool, and a wellness area complete with sauna and steam room. The chalet includes ski-in/ski-out access, heated boot room, and a cozy home cinema for après-ski relaxation.",
    tags: ["Mountain View", "Ski-in/Ski-out", "Indoor Pool", "Luxury"],
    categories: ["views", "skiing", "modern"],
    features: ["5 bedrooms", "6 bathrooms", "Indoor pool", "Wellness spa", "Home cinema", "Wine cellar", "Heated terraces", "Ski room"],
    host: {
      name: "Thomas",
      image: "https://i.pravatar.cc/150?img=18",
      isSuperHost: true,
      joinedDate: "2017"
    },
    reviews: 78,
    location_cords: {
      lat: 46.8182,
      lng: 8.2275
    },
    isPremium: true
  },
  {
    id: "11",
    title: "Ultra-Modern Beachfront Estate with Private Chef",
    location: "Phuket, Thailand",
    images: [
      "public/lovable-uploads/2fdf6a95-9867-40c3-82db-4e333f282de0.png",
      "public/lovable-uploads/cc755b34-5b86-403c-8996-b146abf50265.png",
      "https://images.unsplash.com/photo-1609749963861-f87235dca2cd?q=80&w=1920&auto=format"
    ],
    price: 780,
    rating: 4.98,
    description: "Indulge in this award-winning architectural masterpiece situated on a private beach in Phuket. This ultra-modern estate features clean lines, minimalist design, and seamless indoor-outdoor living spaces. The infinity pool appears to flow directly into the Andaman Sea, creating a mesmerizing visual effect. Enjoy the services of a private chef, daily housekeeping, and dedicated concierge throughout your stay.",
    tags: ["Beachfront", "Modern Design", "Private Chef", "Infinity Pool"],
    categories: ["beach", "modern", "tropical"],
    features: ["6 bedrooms", "7 bathrooms", "Infinity pool", "Private beach", "Cinema room", "Fitness center", "Private chef", "Concierge service"],
    host: {
      name: "Siri",
      image: "https://i.pravatar.cc/150?img=20",
      isSuperHost: true,
      joinedDate: "2016"
    },
    reviews: 124,
    location_cords: {
      lat: 7.9519,
      lng: 98.3381
    },
    isRareFind: true,
    isPremium: true
  },
  {
    id: "12",
    title: "Elegant Downtown Loft with City Skyline View",
    location: "New York, USA",
    images: [
      "public/lovable-uploads/84352c7d-b6e8-4275-bacc-b6eed4d53ba4.png",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1920&auto=format",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1920&auto=format"
    ],
    price: 550,
    rating: 4.92,
    description: "Experience the height of urban sophistication in this elegant penthouse loft in the heart of Manhattan. Floor-to-ceiling windows showcase breathtaking views of the iconic New York skyline. This expertly designed space features soaring ceilings, high-end finishes, and a gourmet kitchen. Located just steps from fine dining, world-class shopping, and cultural attractions, this is the perfect luxury base for exploring the city.",
    tags: ["City View", "Penthouse", "Design", "Central"],
    categories: ["modern", "cafe", "views"],
    features: ["2 bedrooms", "2.5 bathrooms", "Gourmet kitchen", "Home office", "Doorman building", "Fitness center", "Rooftop access", "Smart home system"],
    host: {
      name: "Sophia",
      image: "https://i.pravatar.cc/150?img=22",
      isSuperHost: true,
      joinedDate: "2018"
    },
    reviews: 87,
    location_cords: {
      lat: 40.7128,
      lng: -74.0060
    },
    isPremium: true
  },
  {
    id: "13",
    title: "Charming Mountain Cabin with Panoramic Views",
    location: "Banff National Park, Canada",
    images: [
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=1920&auto=format",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1920&auto=format",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1920&auto=format"
    ],
    price: 320,
    rating: 4.96,
    description: "Nestled in the heart of the Canadian Rockies, this charming cabin offers breathtaking panoramic views of snow-capped mountains and pristine wilderness. The floor-to-ceiling windows frame the stunning landscape, while the interior combines rustic elements with modern comfort. Enjoy the crackling fireplace after a day of hiking or skiing in the nearby national park.",
    tags: ["Mountain View", "Rustic", "Nature", "Hiking"],
    categories: ["views", "skiing", "camping"],
    features: ["2 bedrooms", "1.5 bathrooms", "Wood-burning fireplace", "Full kitchen", "Private deck", "BBQ grill", "Hiking trails access", "Wildlife viewing"],
    host: {
      name: "Robert",
      image: "https://i.pravatar.cc/150?img=30",
      isSuperHost: true,
      joinedDate: "2017"
    },
    reviews: 112,
    location_cords: {
      lat: 51.1784,
      lng: -115.5708
    },
    isRareFind: true
  },
  {
    id: "14",
    title: "Cozy Beachside Bungalow with Ocean Views",
    location: "Tulum, Mexico",
    images: [
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1920&auto=format",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1920&auto=format",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1920&auto=format"
    ],
    price: 180,
    rating: 4.89,
    description: "This cozy beachside bungalow offers the perfect blend of comfort and tropical paradise. Fall asleep to the sound of waves and wake up to stunning sunrise views over the Caribbean. The bungalow features a private deck with direct beach access, hammocks for afternoon relaxation, and simple yet elegant decor inspired by local craftsmanship.",
    tags: ["Beachfront", "Sunrise View", "Tropical", "Private"],
    categories: ["beach", "tropical"],
    features: ["1 bedroom", "1 bathroom", "Private deck", "Beach access", "Hammocks", "Outdoor shower", "Breakfast included", "Beach equipment"],
    host: {
      name: "Maria",
      image: "https://i.pravatar.cc/150?img=23",
      isSuperHost: false,
      joinedDate: "2020"
    },
    reviews: 74,
    location_cords: {
      lat: 20.2114,
      lng: -87.4654
    }
  },
  {
    id: "15",
    title: "Artisanal Coffee House & Loft",
    location: "Portland, Oregon",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1920&auto=format",
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=1920&auto=format",
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1920&auto=format"
    ],
    price: 165,
    rating: 4.92,
    description: "Experience a coffee lover's dream in this stylish loft apartment situated above an artisanal coffee shop. The space features industrial design elements with warm touches, including exposed brick walls, wood beams, and vintage furnishings. Enjoy complimentary specialty coffee during your stay and explore the vibrant neighborhood filled with boutiques, restaurants, and galleries.",
    tags: ["Coffee Shop", "Industrial", "Stylish", "Central"],
    categories: ["cafe", "modern"],
    features: ["1 bedroom", "1 bathroom", "Complimentary coffee", "Espresso machine", "Record player", "Fast wifi", "Workspace", "Bike rental"],
    host: {
      name: "Benjamin",
      image: "https://i.pravatar.cc/150?img=28",
      isSuperHost: true,
      joinedDate: "2019"
    },
    reviews: 89,
    location_cords: {
      lat: 45.5231,
      lng: -122.6765
    }
  },
  {
    id: "16",
    title: "Medieval Castle Suite with Turret Views",
    location: "Loire Valley, France",
    images: [
      "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?q=80&w=1920&auto=format",
      "https://images.unsplash.com/photo-1587974044605-c5f0fc79e6e9?q=80&w=1920&auto=format",
      "https://images.unsplash.com/photo-1528803273775-5f4f6d429667?q=80&w=1920&auto=format"
    ],
    price: 480,
    rating: 4.94,
    description: "Step back in time and experience royal living in this authentic medieval castle suite. The elegantly appointed chamber features a four-poster bed, antique furnishings, and stone walls adorned with tapestries. Climb the spiral staircase to your private turret with panoramic views of the Loire Valley vineyards and countryside. Modern amenities are subtly integrated to ensure comfort without compromising historic character.",
    tags: ["Castle", "Historic", "Vineyard View", "Luxury"],
    categories: ["castles", "views"],
    features: ["1 royal suite", "1 marble bathroom", "Private turret", "Stone fireplace", "Vineyard views", "Castle tour included", "Wine tasting", "Gourmet breakfast"],
    host: {
      name: "Pierre",
      image: "https://i.pravatar.cc/150?img=32",
      isSuperHost: true,
      joinedDate: "2016"
    },
    reviews: 67,
    location_cords: {
      lat: 47.2501,
      lng: 0.6907
    },
    isPremium: true,
    isRareFind: true
  },
  {
    id: "17",
    title: "Luxury Glamping Tent by Alpine Lake",
    location: "Lake Tahoe, California",
    images: [
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1920&auto=format",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1920&auto=format",
      "https://images.unsplash.com/photo-1533873984035-25970ab07461?q=80&w=1920&auto=format"
    ],
    price: 220,
    rating: 4.91,
    description: "Experience the perfect blend of camping and luxury in this spacious glamping tent set on the shores of a crystal-clear alpine lake. The canvas accommodation features a plush king-sized bed, stylish furnishings, and a wood-burning stove for cozy evenings. Outside, enjoy your private deck with lake views, a fire pit for s'mores under the stars, and access to kayaks and paddleboards.",
    tags: ["Glamping", "Lakefront", "Adventure", "Nature"],
    categories: ["camping", "views"],
    features: ["King bed", "Wood stove", "Private deck", "Outdoor shower", "Fire pit", "Kayak access", "Breakfast basket", "Lanterns"],
    host: {
      name: "Ashley",
      image: "https://i.pravatar.cc/150?img=25",
      isSuperHost: false,
      joinedDate: "2021"
    },
    reviews: 53,
    location_cords: {
      lat: 39.0968,
      lng: -120.0324
    }
  },
  {
    id: "18",
    title: "Alpine Ski Chalet with Private Hot Tub",
    location: "Chamonix, France",
    images: [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1920&auto=format",
      "https://images.unsplash.com/photo-1514516816566-de580c621376?q=80&w=1920&auto=format",
      "https://images.unsplash.com/photo-1517449
