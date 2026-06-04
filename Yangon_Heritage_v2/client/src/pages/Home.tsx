"use client";

import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MapView } from "@/components/Map";
import { heritagePlaces, HeritagePlace } from "@/data/heritageData";
import { getImageByName, getHeritageItemByName } from "@/data/heritageDataset";
import { MapPin, X as XIcon, Search, Menu, X as CloseIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/useMobile";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";

/**
 * Home Page - Yangon Heritage StoryMap
 * 
 * Responsive Layout:
 * - Mobile (< 768px): Full-screen map with draggable bottom sheet for heritage sites list
 * - Desktop (>= 768px): Side-by-side dashboard (65% map, 35% fixed scrollable sidebar)
 * 
 * Features:
 * - Bilingual Burmese/English support with proper typography
 * - Deep gold and dark teal color scheme
 * - Interactive Google Maps with heritage site markers
 * - Search and filter functionality
 * - Responsive header with hamburger menu on mobile
 */

const scrollbarStyles = `
  .heritage-scroll {
    scrollbar-width: auto;
    scrollbar-color: #D4AF37 #F5F1E8;
  }
  .heritage-scroll::-webkit-scrollbar {
    width: 12px;
  }
  .heritage-scroll::-webkit-scrollbar-track {
    background: #F5F1E8;
    border-radius: 10px;
  }
  .heritage-scroll::-webkit-scrollbar-thumb {
    background: #D4AF37;
    border-radius: 10px;
    border: 2px solid #F5F1E8;
    min-height: 40px;
  }
  .heritage-scroll::-webkit-scrollbar-thumb:hover {
    background: #C49A2A;
  }
`;

export default function Home() {
  const [location, navigate] = useLocation();
  const isMobile = useIsMobile();
  const [selectedPlace, setSelectedPlace] = useState<HeritagePlace | null>(null);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string>("");
  const [hoveredPlace, setHoveredPlace] = useState<string | null>(null);
  const [sortedPlaces, setSortedPlaces] = useState<HeritagePlace[]>([]);
  const [filteredPlaces, setFilteredPlaces] = useState<HeritagePlace[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [mapReady, setMapReady] = useState(false);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<google.maps.Marker | null>(null);
  const [selectedInfoWindow, setSelectedInfoWindow] = useState<google.maps.InfoWindow | null>(null);
  const [allMarkers, setAllMarkers] = useState<Map<string, google.maps.Marker>>(new Map());
  const [mobileSheetOpen, setMobileSheetOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sort places alphabetically by English name
  useEffect(() => {
    const sorted = [...heritagePlaces].sort((a, b) =>
      a.nameEN.localeCompare(b.nameEN)
    );
    setSortedPlaces(sorted);
    setFilteredPlaces(sorted);
  }, []);

  const handleMapReady = (googleMap: google.maps.Map) => {
    setMapReady(true);
    setMap(googleMap);

    // Center map at Yangon downtown
    const centerLocation = { lat: 16.77501991535329, lng: 96.15901974344678 };
    googleMap.setCenter(centerLocation);
    googleMap.setZoom(14);

    // Create markers for all heritage sites
    const markerMap = new Map<string, google.maps.Marker>();
    
    heritagePlaces.forEach((place) => {
      const marker = new google.maps.Marker({
        position: { lat: place.lat, lng: place.lng },
        map: googleMap,
        title: place.nameEN,
        icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
      });

      marker.addListener("click", () => {
        handlePlaceClick(place);
      });

      markerMap.set(place.nameEN, marker);
    });

    setAllMarkers(markerMap);
  };

  const handlePlaceClick = (place: HeritagePlace) => {
    setSelectedPlace(place);
    
    // Get the image URL from the unified dataset
    const imageUrl = getImageByName(place.nameEN);
    setSelectedImageUrl(imageUrl);
    
    if (mapReady && map) {
      // Remove previous marker highlight
      if (selectedMarker) {
        selectedMarker.setIcon("http://maps.google.com/mapfiles/ms/icons/red-dot.png");
      }
      if (selectedInfoWindow) {
        selectedInfoWindow.close();
      }

      // Get the marker for this place
      const marker = allMarkers.get(place.nameEN);
      if (marker) {
        // Highlight the marker
        marker.setIcon("http://maps.google.com/mapfiles/ms/icons/yellow-dot.png");

        // Get heritage item for description
        const item = getHeritageItemByName(place.nameEN);

        // Create standard Google Maps InfoWindow
        const infoContent = `
          <div style="font-family: Arial, sans-serif; width: 260px; padding: 6px; box-sizing: border-box;">
            <h4 style="margin: 0 0 4px 0; font-size: 14px; font-weight: bold; color: #1a1a1a; word-wrap: break-word;">${place.nameEN}</h4>
            ${item && item.description ? `<p style="margin: 0 0 8px 0; font-size: 12px; color: #555; line-height: 1.3;">${item.description}</p>` : ''}
            ${item ? `
              <div style="width: 100%; height: 140px; overflow: hidden; border-radius: 6px; background-color: #f0f0f0;">
                <img src="${item.image}" alt="${place.nameEN}" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
              </div>
            ` : ''}
          </div>
        `;

        const infoWindow = new google.maps.InfoWindow({
          content: infoContent,
        });

        infoWindow.open(map, marker);
        map.panTo(marker.getPosition()!);
        map.setZoom(16);

        setSelectedMarker(marker);
        setSelectedInfoWindow(infoWindow);
      }
    }

    // Close mobile sheet after selection
    if (isMobile) {
      setMobileSheetOpen(false);
    }
  };

  // Filter places based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredPlaces(sortedPlaces);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = sortedPlaces.filter((place) =>
      place.nameEN.toLowerCase().includes(query) ||
      place.nameMM.includes(searchQuery) ||
      place.category.toLowerCase().includes(query)
    );
    setFilteredPlaces(filtered);
  }, [searchQuery, sortedPlaces]);

  const clearSearch = () => {
    setSearchQuery("");
  };

  // Heritage Sites List Component
  const HeritageList = () => (
    <div className="flex flex-col h-full">
      {/* List Header */}
      <div className="px-4 py-3 border-b" style={{ borderColor: "#E8DCC8" }}>
        <h2
          className="text-lg font-semibold"
          style={{ color: "#4A4A4A", fontFamily: "'Playfair Display', serif" }}
        >
          Heritage Sites
        </h2>
        <p className="text-xs mt-1" style={{ color: "#8B7355" }}>
          {filteredPlaces.length} of {sortedPlaces.length} locations
        </p>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-3 border-b" style={{ borderColor: "#E8DCC8" }}>
        <div className="relative">
          <Search size={16} className="absolute left-3 top-3" style={{ color: "#D4AF37" }} />
          <Input
            type="text"
            placeholder="Search by name or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 pr-8 py-2 text-sm w-full"
            style={{
              backgroundColor: "#FEFDFB",
              borderColor: "#E8DCC8",
              color: "#4A4A4A",
            }}
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-3 hover:opacity-70 transition-opacity"
              title="Clear search"
            >
              <XIcon size={16} style={{ color: "#D4AF37" }} />
            </button>
          )}
        </div>
      </div>

      {/* Scrollable List */}
      <ScrollArea className="flex-1 heritage-scroll overflow-hidden">
        <div className="px-4 py-3 space-y-2 pr-2">
          {filteredPlaces.length === 0 ? (
            <div className="py-8 text-center" style={{ color: "#8B7355" }}>
              <p className="text-sm font-medium">No heritage sites found</p>
              <p className="text-xs mt-1">Try adjusting your search</p>
            </div>
          ) : (
            filteredPlaces.map((place) => (
              <div
                key={place.id}
                onClick={() => handlePlaceClick(place)}
                onMouseEnter={() => setHoveredPlace(place.id)}
                onMouseLeave={() => setHoveredPlace(null)}
                className="p-3 rounded-lg cursor-pointer transition-all duration-200"
                style={{
                  backgroundColor:
                    selectedPlace?.id === place.id
                      ? "#E8DCC8"
                      : hoveredPlace === place.id
                      ? "#EDE5D8"
                      : "#FEFDFB",
                  borderLeft:
                    selectedPlace?.id === place.id
                      ? "4px solid #D4AF37"
                      : "4px solid transparent",
                  transform: hoveredPlace === place.id ? "translateX(4px)" : "translateX(0)",
                }}
              >
                {/* English Name */}
                <h3
                  className="font-semibold text-sm"
                  style={{ color: "#4A4A4A", fontFamily: "'Playfair Display', serif", lineHeight: "1.4" }}
                >
                  {place.nameEN}
                </h3>
                
                {/* Myanmar Name with proper line height */}
                <p 
                  className="text-xs mt-1 font-medium" 
                  style={{ 
                    color: "#8B7355", 
                    fontFamily: "system-ui, 'Pyidaungsu', 'Noto Sans Myanmar', sans-serif",
                    lineHeight: "1.6"
                  }}
                >
                  {place.nameMM}
                </p>
                
                {/* Metadata */}
                <div className="flex items-center justify-between mt-2 gap-2">
                  <span className="text-xs font-medium" style={{ color: "#D4AF37" }}>
                    {place.year}
                  </span>
                  <span className="text-xs" style={{ color: "#A0825A" }}>
                    {place.category}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  );

  return (
    <div className="h-screen flex flex-col overflow-hidden" style={{ backgroundColor: "#F5F1E8" }}>
      <style>{scrollbarStyles}</style>
      
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 border-b" style={{ borderColor: "#E8DCC8", backgroundColor: "#FEFDFB" }}>
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="text-xl md:text-2xl font-bold" style={{ color: "#4A4A4A", fontFamily: "'Playfair Display', serif" }}>
            Yangon Heritage
          </h1>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex gap-2">
              <a
                href="https://uploads.knightlab.com/storymapjs/71d8c3f4144ced51e7bfcd0f37d6aa18/k-eaak-ttnttaa-heritage/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="flex items-center gap-1 text-sm px-3 py-1 transition-all hover:bg-opacity-10"
                  style={{
                    color: "#D4AF37",
                    borderColor: "#D4AF37",
                  }}
                >
                  <MapPin size={16} />
                  <span style={{ fontFamily: "'Playfair Display', serif" }}>StoryMap</span>
                </Button>
              </a>
              <Button
                onClick={() => navigate("/about")}
                style={{
                  backgroundColor: "#D4AF37",
                  color: "#FEFDFB",
                }}
                className="hover:opacity-90 transition-opacity text-sm px-3 py-1"
              >
                About
              </Button>
            </div>
          )}

          {/* Mobile Hamburger Menu */}
          {isMobile && (
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu size={20} style={{ color: "#D4AF37" }} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" style={{ backgroundColor: "#FEFDFB" }}>
                <SheetHeader>
                  <SheetTitle style={{ color: "#4A4A4A", fontFamily: "'Playfair Display', serif" }}>
                    Menu
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-6">
                  <a
                    href="https://uploads.knightlab.com/storymapjs/71d8c3f4144ced51e7bfcd0f37d6aa18/k-eaak-ttnttaa-heritage/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button
                      variant="outline"
                      className="w-full flex items-center gap-2"
                      style={{
                        color: "#D4AF37",
                        borderColor: "#D4AF37",
                      }}
                    >
                      <MapPin size={16} />
                      <span>StoryMap</span>
                    </Button>
                  </a>
                  <Button
                    onClick={() => {
                      navigate("/about");
                      setMobileMenuOpen(false);
                    }}
                    className="w-full"
                    style={{
                      backgroundColor: "#D4AF37",
                      color: "#FEFDFB",
                    }}
                  >
                    About
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </nav>

      {/* Main Content */}
      {isMobile ? (
        // Mobile Layout: Full-screen map with bottom sheet
        <div className="flex-1 relative overflow-hidden">
          <MapView
            onMapReady={handleMapReady}
            className="w-full h-full"
          />
          
          {/* Selected Place Info Card - Overlay on Map */}
          {selectedPlace && (
            <div
              className="absolute bottom-20 left-4 right-4 rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-out max-h-48"
              style={{
                backgroundColor: "#FFFFFF",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="flex flex-col w-full bg-white p-3 rounded-lg overflow-y-auto max-h-48">
                <h2 
                  className="text-base font-bold text-gray-900 mb-1 break-words" 
                  style={{ fontFamily: "'Playfair Display', serif", lineHeight: "1.3" }}
                >
                  {selectedPlace.nameEN}
                </h2>
                
                <p 
                  className="text-xs mt-0.5 font-medium break-words" 
                  style={{ 
                    color: "#8B7355", 
                    fontFamily: "system-ui, 'Pyidaungsu', 'Noto Sans Myanmar', sans-serif",
                    lineHeight: "1.5"
                  }}
                >
                  {selectedPlace.nameMM}
                </p>
                
                {selectedPlace.description && (
                  <p className="text-xs text-gray-600 mt-1 break-words">
                    {selectedPlace.description}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Mobile Bottom Sheet */}
          <Sheet open={mobileSheetOpen} onOpenChange={setMobileSheetOpen}>
            <SheetTrigger asChild>
              <Button
                className="absolute bottom-4 left-4 right-4 z-40"
                style={{
                  backgroundColor: "#D4AF37",
                  color: "#FEFDFB",
                }}
              >
                View Heritage Sites
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[70vh] rounded-t-2xl" style={{ backgroundColor: "#FEFDFB" }}>
              <SheetHeader>
                <SheetTitle style={{ color: "#4A4A4A", fontFamily: "'Playfair Display', serif" }}>
                  Heritage Sites
                </SheetTitle>
              </SheetHeader>
              <div className="mt-4 h-[calc(70vh-80px)]">
                <HeritageList />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      ) : (
        // Desktop Layout: Side-by-side (65% map, 35% sidebar)
        <div className="flex flex-1 gap-0 overflow-hidden">
          {/* Left Section - Map (65%) */}
          <div className="w-[65%] relative">
            <MapView
              onMapReady={handleMapReady}
              className="w-full h-full"
            />
            
            {/* Selected Place Info Card - Overlay on Map */}
            {selectedPlace && (
              <div
                className="absolute bottom-4 left-4 rounded-lg shadow-md max-w-xs overflow-hidden transition-all duration-300 ease-out"
                style={{
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                }}
              >
                <div className="flex flex-col w-full bg-white p-4 rounded-lg max-h-[400px] overflow-y-auto">
                  <h2 
                    className="text-lg font-bold text-gray-900 mb-1 break-words" 
                    style={{ fontFamily: "'Playfair Display', serif", lineHeight: "1.3" }}
                  >
                    {selectedPlace.nameEN}
                  </h2>
                  
                  <p 
                    className="text-xs mt-1 font-medium break-words" 
                    style={{ 
                      color: "#8B7355", 
                      fontFamily: "system-ui, 'Pyidaungsu', 'Noto Sans Myanmar', sans-serif",
                      lineHeight: "1.6"
                    }}
                  >
                    {selectedPlace.nameMM}
                  </p>
                  
                  {selectedPlace.description && (
                    <p className="text-xs text-gray-600 mb-3 break-words mt-1">
                      {selectedPlace.description}
                    </p>
                  )}
                  
                  {selectedImageUrl && (
                    <div className="w-full h-40 bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
                      <img 
                        src={selectedImageUrl} 
                        alt={selectedPlace.nameEN} 
                        className="w-full h-full object-cover block"
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Yangon_City_Hall.JPG/800px-Yangon_City_Hall.JPG";
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right Section - Sidebar (35%) */}
          <div
            className="w-[35%] flex flex-col border-l overflow-hidden h-full"
            style={{
              backgroundColor: "#F5F1E8",
              borderColor: "#E8DCC8",
            }}
          >
            <HeritageList />
          </div>
        </div>
      )}
    </div>
  );
}
