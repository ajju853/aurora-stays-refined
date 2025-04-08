
import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, Star, Share2, ArrowLeft, Wifi, Home, Coffee, Utensils, Navigation, Calendar, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getListingById } from "@/data/mockListings";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { cn } from "@/lib/utils";

const ListingDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [listing, setListing] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const [favorited, setFavorited] = useState(false);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [guestCount, setGuestCount] = useState(2);
  const bookingRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!id) return;
    
    // In a real app, we would fetch from an API
    const fetchedListing = getListingById(id);
    setListing(fetchedListing);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-32 h-32 bg-secondary rounded-full mb-4"></div>
          <div className="h-6 w-48 bg-secondary rounded-md"></div>
        </div>
      </div>
    );
  }

  if (!listing) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-display font-semibold mb-4">Listing not found</h2>
          <p className="mb-6 text-muted-foreground">The listing you're looking for doesn't exist.</p>
          <Link to="/">
            <Button>Go back to home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const calculateTotalPrice = () => {
    const nights = checkInDate && checkOutDate 
      ? Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24)) 
      : 5;
    const nightPrice = listing.price * nights;
    const serviceFee = Math.round(nightPrice * 0.12);
    const cleaningFee = Math.round(listing.price * 0.15);
    
    return {
      nights,
      nightPrice,
      serviceFee,
      cleaningFee,
      total: nightPrice + serviceFee + cleaningFee
    };
  };

  const { nights, nightPrice, serviceFee, cleaningFee, total } = calculateTotalPrice();

  return (
    <>
      <Header />
      
      {/* Full-screen photo gallery */}
      {showAllPhotos && (
        <div className="fixed inset-0 bg-background z-50 overflow-y-auto">
          <div className="p-4 md:p-8">
            <div className="flex justify-between items-center mb-4">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setShowAllPhotos(false)}
                className="rounded-full"
              >
                <X className="h-5 w-5" />
              </Button>
              <h2 className="font-display text-xl">Photos</h2>
              <div></div> {/* Empty div for centering */}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {listing.images.map((image: string, i: number) => (
                <div key={i} className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <img 
                    src={image} 
                    alt={`${listing.title} - photo ${i+1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      <main className="max-w-7xl mx-auto pt-24 px-4">
        <Link to="/" className="inline-flex items-center text-sm mb-4 hover:underline">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to listings
        </Link>
        
        <h1 className="text-3xl font-display font-semibold mb-2">{listing.title}</h1>
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Star className="h-4 w-4 fill-foreground stroke-0 mr-1" />
              <span>{listing.rating} · <span className="underline">{listing.reviews} reviews</span></span>
            </span>
            <span>·</span>
            <span>{listing.location}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" className="rounded-full" onClick={() => setFavorited(!favorited)}>
              <Heart className={cn(
                "h-5 w-5 mr-1 transition-all", 
                favorited ? "fill-primary stroke-primary" : ""
              )} />
              {favorited ? 'Saved' : 'Save'}
            </Button>
            
            <Button variant="ghost" className="rounded-full">
              <Share2 className="h-5 w-5 mr-1" />
              Share
            </Button>
          </div>
        </div>
        
        {/* Image gallery */}
        <div className="relative rounded-3xl overflow-hidden mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 max-h-[500px]">
            <div className="md:col-span-2 row-span-2 relative aspect-[4/3] md:h-full">
              <img 
                src={listing.images[0]} 
                alt={listing.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="hidden md:block aspect-[4/3] h-full">
              {listing.images[1] && (
                <img 
                  src={listing.images[1]} 
                  alt={listing.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            
            <div className="hidden md:block aspect-[4/3] h-full">
              {listing.images[2] && (
                <img 
                  src={listing.images[2]} 
                  alt={listing.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
          
          <Button 
            variant="secondary" 
            className="absolute bottom-4 right-4"
            onClick={() => setShowAllPhotos(true)}
          >
            Show all photos
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-display font-semibold">
                  Hosted by {listing.host.name}
                </h2>
                <p className="text-muted-foreground">
                  {listing.features[0]} · {listing.features[1]}
                </p>
              </div>
              
              <div className="flex items-center">
                <img 
                  src={listing.host.image} 
                  alt={listing.host.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                {listing.host.isSuperHost && (
                  <div className="ml-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    Superhost
                  </div>
                )}
              </div>
            </div>
            
            <div className="border-b pb-6 mb-6">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4">
                  <Home className="mx-auto h-6 w-6 mb-2" />
                  <p className="text-sm">{listing.features[0]}</p>
                </div>
                
                <div className="text-center p-4">
                  <Wifi className="mx-auto h-6 w-6 mb-2" />
                  <p className="text-sm">Fast Wifi</p>
                </div>
                
                <div className="text-center p-4">
                  <Coffee className="mx-auto h-6 w-6 mb-2" />
                  <p className="text-sm">Workspace</p>
                </div>
              </div>
              
              <p className="text-base">
                {listing.description}
              </p>
            </div>
            
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full grid grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="pt-6">
                <h3 className="text-lg font-semibold mb-4">About this place</h3>
                <p className="mb-4">
                  {listing.description}
                </p>
                
                <h4 className="font-semibold mt-6 mb-2">The space</h4>
                <p className="mb-4">
                  This unique property offers a perfect blend of comfort and style. With spacious rooms and quality amenities, you'll feel right at home while enjoying the beautiful surroundings.
                </p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {listing.tags.map((tag: string) => (
                    <span key={tag} className="bg-secondary px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="amenities" className="pt-6">
                <h3 className="text-lg font-semibold mb-4">What this place offers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
                  {listing.features.map((feature: string) => (
                    <div key={feature} className="flex items-center">
                      <div className="bg-secondary w-8 h-8 rounded-full flex items-center justify-center mr-3">
                        <Utensils className="h-4 w-4" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="pt-6">
                <div className="flex items-center mb-6">
                  <Star className="h-5 w-5 fill-foreground stroke-0 mr-2" />
                  <span className="text-lg font-semibold">{listing.rating} · {listing.reviews} reviews</span>
                </div>
                
                <div className="space-y-6">
                  {/* Mock reviews */}
                  <div className="pb-6 border-b">
                    <div className="flex items-center mb-2">
                      <img 
                        src="https://i.pravatar.cc/150?img=12" 
                        alt="Reviewer" 
                        className="w-10 h-10 rounded-full mr-3" 
                      />
                      <div>
                        <div className="font-medium">Sarah T.</div>
                        <div className="text-sm text-muted-foreground">March 2023</div>
                      </div>
                    </div>
                    <p className="mt-2">
                      Absolutely loved staying here! The views were spectacular and the host was incredibly helpful. Would definitely return!
                    </p>
                  </div>
                  
                  <div className="pb-6 border-b">
                    <div className="flex items-center mb-2">
                      <img 
                        src="https://i.pravatar.cc/150?img=20" 
                        alt="Reviewer" 
                        className="w-10 h-10 rounded-full mr-3" 
                      />
                      <div>
                        <div className="font-medium">James R.</div>
                        <div className="text-sm text-muted-foreground">February 2023</div>
                      </div>
                    </div>
                    <p className="mt-2">
                      Perfect location for our family vacation. Clean, comfortable, and exactly as described. We especially enjoyed the amenities.
                    </p>
                  </div>
                </div>
                
                <Button className="mt-6">Show all {listing.reviews} reviews</Button>
              </TabsContent>
              
              <TabsContent value="location" className="pt-6">
                <h3 className="text-lg font-semibold mb-4">Where you'll be</h3>
                <div className="aspect-[16/9] bg-secondary rounded-xl overflow-hidden mb-4">
                  {/* This would be a real map in production */}
                  <div 
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${listing.location_cords.lng},${listing.location_cords.lat},12,0/600x400?access_token=placeholder')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                  ></div>
                </div>
                <p className="mb-2 font-medium">{listing.location}</p>
                <p className="text-muted-foreground mb-4">
                  The neighborhood is known for its vibrant atmosphere and convenient location. You'll be close to local attractions, restaurants, and transportation options.
                </p>
                
                <div className="flex items-center text-primary">
                  <Navigation className="h-5 w-5 mr-1" />
                  <span className="underline">Get directions</span>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="md:col-span-1" ref={bookingRef}>
            <div className="sticky top-24 bg-background rounded-xl border shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xl font-semibold">
                  <span>${listing.price}</span> <span className="text-base font-normal">night</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-foreground stroke-0 mr-1" />
                  <span>{listing.rating} · <span className="underline">{listing.reviews} reviews</span></span>
                </div>
              </div>
              
              <div className="border rounded-xl overflow-hidden mb-4">
                <div className="grid grid-cols-2">
                  <div className="p-3 border-r border-b">
                    <div className="text-xs font-semibold">CHECK-IN</div>
                    <div className="mt-1">
                      {checkInDate ? checkInDate.toLocaleDateString() : "Add date"}
                    </div>
                  </div>
                  
                  <div className="p-3 border-b">
                    <div className="text-xs font-semibold">CHECKOUT</div>
                    <div className="mt-1">
                      {checkOutDate ? checkOutDate.toLocaleDateString() : "Add date"}
                    </div>
                  </div>
                </div>
                
                <div className="p-3">
                  <div className="text-xs font-semibold">GUESTS</div>
                  <div className="mt-1 flex justify-between items-center">
                    <span>{guestCount} {guestCount === 1 ? "guest" : "guests"}</span>
                    <div className="flex items-center space-x-2">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-6 w-6 rounded-full"
                        onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                      >
                        -
                      </Button>
                      <span>{guestCount}</span>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-6 w-6 rounded-full"
                        onClick={() => setGuestCount(guestCount + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button className="w-full mb-4 ripple" size="lg">
                <Calendar className="mr-2 h-4 w-4" />
                {checkInDate && checkOutDate ? "Reserve" : "Check availability"}
              </Button>
              
              <div className="text-center text-sm mb-4">
                You won't be charged yet
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="underline">${listing.price} x {nights} nights</span>
                  <span>${nightPrice}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="underline">Cleaning fee</span>
                  <span>${cleaningFee}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="underline">Service fee</span>
                  <span>${serviceFee}</span>
                </div>
                
                <div className="border-t pt-3 mt-3 flex justify-between font-semibold">
                  <span>Total before taxes</span>
                  <span>${total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <div className="mt-20">
        <Footer />
      </div>
      
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t p-4 flex justify-between items-center z-30">
        <div>
          <div className="text-lg font-semibold">${listing.price} <span className="text-sm font-normal">night</span></div>
          <div className="flex items-center text-sm">
            <Star className="h-3 w-3 fill-foreground stroke-0 mr-1" />
            <span>{listing.rating}</span>
          </div>
        </div>
        
        <Button size="lg" className="ripple">Reserve</Button>
      </div>
      
      <MobileNav />
    </>
  );
};

export default ListingDetail;
