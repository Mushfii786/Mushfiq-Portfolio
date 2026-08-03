import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, X, Maximize2, Heart, Share2, Camera, MapPin, Sparkles, Filter, Play, Eye, Video } from 'lucide-react';
import { Photo, VideoItem } from '../types';

interface GalleryPageProps {
  onClose: () => void;
  initialCategory?: string;
}

export interface GalleryItem extends Photo {
  column: 1 | 2 | 3 | 4;
  aspectRatioClass: string;
  isVideo?: boolean;
  videoUrl?: string;
  duration?: string;
  views?: number;
  likesCount?: number;
}

// 24 Curated Photos & Videos structured into 4 columns matching the reference image layout exactly
export const galleryGridPhotos: GalleryItem[] = [
  // COLUMN 1
  {
    id: "gal-1-1",
    title: "Shadows & Fence",
    category: "Portraits",
    url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
    caption: "Geometric fence shadow patterns across golden light portrait.",
    location: "Downtown Los Angeles",
    camera: "Leica M11",
    lens: "50mm f/1.4 Summilux",
    settings: "f/2.0 • 1/1250s • ISO 100",
    year: "2026 Archive",
    column: 1,
    aspectRatioClass: "aspect-[3/4]"
  },
  {
    id: "gal-1-1b",
    title: "Tokyo Neon Streets",
    category: "Street",
    url: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=800",
    caption: "Night walkthrough through Shinjuku neon lanes.",
    location: "Tokyo, Japan",
    camera: "Leica Q3",
    lens: "28mm f/1.7 Summilux",
    settings: "f/1.7 • 1/250s • ISO 800",
    year: "2026 Archive",
    column: 1,
    aspectRatioClass: "aspect-[9/16]"
  },
  {
    id: "gal-1-2",
    title: "Warm Embrace",
    category: "Couples",
    url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=800",
    caption: "Intimate indoor moment in soft daylight.",
    location: "Studio Loft",
    camera: "Canon EOS R5",
    lens: "35mm f/1.4",
    settings: "f/1.8 • 1/250s • ISO 400",
    year: "2026 Archive",
    column: 1,
    aspectRatioClass: "aspect-[4/5]"
  },
  {
    id: "gal-1-3",
    title: "Brick Wall Silhouette",
    category: "Street",
    url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
    caption: "Harsh sunlight casting dramatic architectural shadow.",
    location: "SoHo, New York",
    camera: "Fujifilm X100V",
    lens: "23mm f/2.0",
    settings: "f/4.0 • 1/800s • ISO 160",
    year: "2025 Archive",
    column: 1,
    aspectRatioClass: "aspect-[3/4]"
  },
  {
    id: "gal-1-4",
    title: "Urban Facade",
    category: "Architecture",
    url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=800",
    caption: "Atmospheric evening tones on vintage brickwork.",
    location: "London East End",
    camera: "Sony A7IV",
    lens: "35mm f/1.4 GM",
    settings: "f/2.8 • 1/160s • ISO 800",
    year: "2025 Archive",
    column: 1,
    aspectRatioClass: "aspect-[4/3]"
  },

  // COLUMN 2
  {
    id: "gal-2-1",
    title: "The Doorway Veil",
    category: "Couples",
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    caption: "Looking through framing doorway at bridal preparation.",
    location: "Tuscany Villa",
    camera: "Sony A7R V",
    lens: "85mm f/1.2 GM",
    settings: "f/1.4 • 1/1000s • ISO 100",
    year: "2026 Archive",
    column: 2,
    aspectRatioClass: "aspect-square"
  },
  {
    id: "gal-2-2b",
    title: "Aerial Coastal Horizons",
    category: "Lifestyle",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
    caption: "Sweeping view over rugged coastal cliffs at golden hour.",
    location: "Varkala Coast",
    camera: "DJI Mavic 3 Pro",
    lens: "24mm Hasselblad Prime",
    settings: "f/4.0 • 1/1000s • ISO 100",
    year: "2025 Archive",
    column: 2,
    aspectRatioClass: "aspect-[16/9]"
  },
  {
    id: "gal-2-2",
    title: "Minimal Studio Portrait",
    category: "Studio",
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    caption: "Classic black backdrop editorial studio portrait.",
    location: "Creative Space Studio",
    camera: "Hasselblad X2D 100C",
    lens: "90mm f/2.5",
    settings: "f/5.6 • 1/160s • ISO 64",
    year: "2026 Archive",
    column: 2,
    aspectRatioClass: "aspect-[3/4]"
  },
  {
    id: "gal-2-3",
    title: "Movement & Form",
    category: "Studio",
    url: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800",
    caption: "Dual exposure dance and movement sequence.",
    location: "Ballet Academy",
    camera: "Canon EOS R3",
    lens: "50mm f/1.2",
    settings: "f/2.0 • 1/500s • ISO 200",
    year: "2025 Archive",
    column: 2,
    aspectRatioClass: "aspect-[16/9]"
  },
  {
    id: "gal-2-5",
    title: "Coastal Dunes",
    category: "Lifestyle",
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    caption: "Sun-drenched laughter among sea grass.",
    location: "Big Sur Coast",
    camera: "Leica Q3",
    lens: "28mm f/1.7 Summilux",
    settings: "f/2.8 • 1/2000s • ISO 100",
    year: "2026 Archive",
    column: 2,
    aspectRatioClass: "aspect-[3/4]"
  },

  // COLUMN 3
  {
    id: "gal-3-1",
    title: "Quiet Afternoon",
    category: "Couples",
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    caption: "Relaxed intimate pose lying down together.",
    location: "Home Studio",
    camera: "Canon EOS R6",
    lens: "50mm f/1.4",
    settings: "f/2.2 • 1/320s • ISO 200",
    year: "2026 Archive",
    column: 3,
    aspectRatioClass: "aspect-[16/9]"
  },
  {
    id: "gal-3-2",
    title: "Ocean Breeze",
    category: "Lifestyle",
    url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800",
    caption: "Contemplative seaside portrait in late daylight.",
    location: "Malibu Beach",
    camera: "Sony A7IV",
    lens: "85mm f/1.4 GM",
    settings: "f/1.8 • 1/1600s • ISO 100",
    year: "2026 Archive",
    column: 3,
    aspectRatioClass: "aspect-[3/4]"
  },
  {
    id: "gal-3-3b",
    title: "Futuristic Urban Transit",
    category: "Street",
    url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=800",
    caption: "Long-exposure time-lapse of city traffic light trails.",
    location: "Metropolis Hub",
    camera: "Sony A7IV",
    lens: "50mm f/1.4 GM",
    settings: "f/8.0 • 4s • ISO 100",
    year: "2026 Archive",
    column: 3,
    aspectRatioClass: "aspect-square"
  },
  {
    id: "gal-3-3",
    title: "Low-Key Profile",
    category: "Studio",
    url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
    caption: "Chiaroscuro lighting emphasizing silhouette contours.",
    location: "Darkroom Studio",
    camera: "Fujifilm GFX 100II",
    lens: "110mm f/2.0",
    settings: "f/4.0 • 1/125s • ISO 100",
    year: "2025 Archive",
    column: 3,
    aspectRatioClass: "aspect-square"
  },
  {
    id: "gal-3-4",
    title: "Staircase Conversation",
    category: "Couples",
    url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800",
    caption: "Warm natural tones on rustic wooden steps.",
    location: "Old Town Residence",
    camera: "Sony A7S III",
    lens: "35mm f/1.4",
    settings: "f/2.0 • 1/400s • ISO 320",
    year: "2025 Archive",
    column: 3,
    aspectRatioClass: "aspect-[3/4]"
  },

  // COLUMN 4
  {
    id: "gal-4-1",
    title: "Denim & Light",
    category: "Portraits",
    url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
    caption: "Natural daylight portrait with effortless attitude.",
    location: "Urban Terrace",
    camera: "Canon EOS R5",
    lens: "85mm f/1.2",
    settings: "f/1.6 • 1/2000s • ISO 100",
    year: "2026 Archive",
    column: 4,
    aspectRatioClass: "aspect-[3/4]"
  },
  {
    id: "gal-4-4b",
    title: "Golden Hour Ocean Sunset",
    category: "Lifestyle",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
    caption: "Natural sunlight reflections over gentle ocean swells.",
    location: "Kozhikode Beach",
    camera: "Sony A7S III",
    lens: "24-70mm f/2.8 GM II",
    settings: "f/2.8 • 1/1600s • ISO 100",
    year: "2026 Archive",
    column: 4,
    aspectRatioClass: "aspect-[16/9]"
  },
  {
    id: "gal-4-2",
    title: "Morning Light Canopy",
    category: "Couples",
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800",
    caption: "High key bedroom aesthetic with soft linen textures.",
    location: "Nordic Villa",
    camera: "Hasselblad X1D II",
    lens: "45mm f/3.5",
    settings: "f/4.0 • 1/200s • ISO 100",
    year: "2026 Archive",
    column: 4,
    aspectRatioClass: "aspect-square"
  },
  {
    id: "gal-4-3",
    title: "White Sweater & Sun",
    category: "Portraits",
    url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800",
    caption: "Clean bright lighting on stone staircase background.",
    location: "Milan Street",
    camera: "Sony A7IV",
    lens: "50mm f/1.2 GM",
    settings: "f/1.8 • 1/1250s • ISO 100",
    year: "2026 Archive",
    column: 4,
    aspectRatioClass: "aspect-[3/4]"
  },
  {
    id: "gal-4-4",
    title: "Summer Sunglasses",
    category: "Lifestyle",
    url: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=800",
    caption: "Pop of yellow and vintage sunglasses contrast.",
    location: "Valencia Promenade",
    camera: "Fujifilm X100V",
    lens: "23mm f/2.0",
    settings: "f/2.8 • 1/1600s • ISO 160",
    year: "2025 Archive",
    column: 4,
    aspectRatioClass: "aspect-[3/4]"
  }
];

const categories = ['ALL', 'PORTRAITS', 'COUPLES', 'STUDIO', 'LIFESTYLE', 'STREET'];

export function GalleryPage({ onClose, initialCategory = 'ALL' }: GalleryPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory.toUpperCase());
  const [animKey, setAnimKey] = useState<number>(0);
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [likedItems, setLikedItems] = useState<Record<string, boolean>>({});

  const handleCategoryClick = (cat: string) => {
    setSelectedCategory(cat);
    setAnimKey((prev) => prev + 1);
  };

  // Keyboard shortcut to close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeItem) {
          setActiveItem(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem, onClose]);

  const toggleLike = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredItems = selectedCategory === 'ALL'
    ? galleryGridPhotos
    : galleryGridPhotos.filter((p) => p.category.toUpperCase() === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] bg-[#FAF8F5] dark:bg-[#080808] text-neutral-900 dark:text-neutral-100 overflow-y-auto selection:bg-[#FF4D12] selection:text-white"
    >
      {/* Top Header Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 dark:bg-[#080808]/90 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800/80 px-4 sm:px-8 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Left: Back Button & Title */}
        <div className="flex items-center gap-4">
          <button
            onClick={onClose}
            className="group px-4 py-2 rounded-full bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 text-xs font-mono font-bold tracking-widest uppercase hover:bg-[#FF4D12] dark:hover:bg-[#FF4D12] dark:hover:text-white transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-md hover:scale-105 active:scale-95"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>BACK TO PORTFOLIO</span>
          </button>

          <div className="hidden sm:block h-5 w-[1px] bg-neutral-300 dark:bg-neutral-800" />

          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#FF4D12]" />
            <h1 className="text-sm sm:text-base font-extrabold uppercase tracking-tight font-mono">
              CURATED VISUAL GALLERY
            </h1>
          </div>
        </div>

        {/* Center: Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`px-3.5 py-1.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                selectedCategory === cat
                  ? 'bg-[#FF4D12] text-white shadow-md shadow-[#FF4D12]/20'
                  : 'bg-neutral-200/70 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-300 dark:hover:bg-neutral-800'
              }`}
            >
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Right: Counter & Close */}
        <div className="flex items-center justify-end gap-3 text-xs font-mono text-neutral-500">
          <span className="hidden lg:inline">{filteredItems.length} WORKS ARCHIVED</span>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-neutral-200/80 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-[#FF4D12] hover:text-white transition-colors cursor-pointer"
            title="Close Gallery (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

      </header>

      {/* Main Canvas Area - Designed to match the exact reference collage layout */}
      <main className="max-w-[1440px] mx-auto px-3 sm:px-6 md:px-10 py-8 sm:py-12">
        
        {/* Subtle Off-White Framed Grid Container */}
        <div className="bg-[#FAF8F5] dark:bg-[#080808] p-2 sm:p-4 rounded-xl">
          
          {/* 4-Column Responsive Grid with Category Startup Animations */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${animKey}`}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-start"
            >
              {[1, 2, 3, 4].map((colNum) => {
                const columnItems = filteredItems.filter((p) => p.column === colNum);

                return (
                  <div key={colNum} className="flex flex-col gap-3 sm:gap-4">
                    {columnItems.map((item, idx) => {
                      const isLiked = Boolean(likedItems[item.id]);

                      return (
                        <motion.div
                          key={item.id}
                          layout
                          initial={{ opacity: 0, y: 18, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ delay: idx * 0.04, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          onClick={() => setActiveItem(item)}
                          className="group relative w-full overflow-hidden rounded-sm sm:rounded-md bg-neutral-200 dark:bg-neutral-900 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-200/60 dark:border-neutral-800/60"
                        >
                        {/* Image/Video Poster element with crisp aspect ratio styling */}
                        <div className={`w-full ${item.aspectRatioClass} relative overflow-hidden bg-neutral-200 dark:bg-neutral-900`}>
                          <img
                            src={item.url}
                            alt={item.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                          />

                          {/* Video Play Badge Indicator */}
                          {item.isVideo && (
                            <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 border border-white/20">
                              <Play className="w-3 h-3 fill-white text-white" />
                              <span>{item.duration || 'REEL'}</span>
                            </div>
                          )}

                          {/* Minimalist Hover Vignette Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                              <span className="px-2.5 py-1 rounded-full bg-[#FF4D12] text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                                {item.isVideo && <Video className="w-3 h-3 text-white" />}
                                <span>{item.category}</span>
                              </span>
                              <button
                                onClick={(e) => toggleLike(item.id, e)}
                                className={`p-2 rounded-full backdrop-blur-md transition-all ${
                                  isLiked
                                    ? 'bg-[#FF4D12] text-white'
                                    : 'bg-black/40 text-white hover:bg-[#FF4D12]'
                                }`}
                              >
                                <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-white' : ''}`} />
                              </button>
                            </div>

                            {/* Center Play icon if video */}
                            {item.isVideo && (
                              <div className="self-center p-3 rounded-full bg-[#FF4D12] text-white shadow-xl transform scale-90 group-hover:scale-110 transition-transform">
                                <Play className="w-5 h-5 fill-white ml-0.5" />
                              </div>
                            )}

                            <div className="space-y-1">
                              <h3 className="text-white font-mono font-bold text-sm tracking-tight">
                                {item.title}
                              </h3>
                              <p className="text-neutral-300 text-xs font-sans line-clamp-1">
                                {item.caption}
                              </p>
                              <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 pt-1 border-t border-white/20">
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-3 h-3 text-[#FF4D12]" />
                                  {item.location}
                                </span>
                                <Maximize2 className="w-3.5 h-3.5 text-white" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              );
            })}

          </motion.div>
        </AnimatePresence>

        </div>

      </main>

      {/* Lightbox Inspector Overlay when an item is clicked */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-3 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-2xl"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] bg-neutral-900 border border-neutral-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col lg:flex-row my-auto text-white"
            >
              {/* Media View (Photo or Video Player) */}
              <div className="relative flex-1 bg-black flex items-center justify-center p-4 min-h-[320px] lg:min-h-[520px]">
                {activeItem.isVideo && activeItem.videoUrl ? (
                  <video
                    src={activeItem.videoUrl}
                    poster={activeItem.url}
                    controls
                    autoPlay
                    loop
                    className="max-h-[75vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
                  />
                ) : (
                  <img
                    src={activeItem.url}
                    alt={activeItem.title}
                    className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg select-none"
                  />
                )}

                {/* Close Overlay Icon */}
                <button
                  onClick={() => setActiveItem(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-[#FF4D12] text-white backdrop-blur-md transition-colors cursor-pointer lg:hidden z-20"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Sidebar Metadata Info */}
              <div className="w-full lg:w-80 p-6 lg:p-8 bg-neutral-900 border-t lg:border-t-0 lg:border-l border-neutral-800 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="px-2.5 py-1 rounded-full bg-[#FF4D12]/20 border border-[#FF4D12]/40 text-[#FF4D12] text-xs font-mono font-bold uppercase flex items-center gap-1.5 w-fit">
                        {activeItem.isVideo && <Video className="w-3.5 h-3.5 text-[#FF4D12]" />}
                        <span>{activeItem.category}</span>
                      </span>
                      <h2 className="text-xl font-bold font-mono text-white mt-3 leading-tight">
                        {activeItem.title}
                      </h2>
                    </div>

                    <button
                      onClick={() => setActiveItem(null)}
                      className="hidden lg:flex p-2 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
                    "{activeItem.caption}"
                  </p>

                  <div className="space-y-3 pt-4 border-t border-neutral-800 text-xs font-mono text-neutral-400">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#FF4D12]" />
                      <span>{activeItem.location}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Camera className="w-4 h-4 text-[#FF4D12]" />
                      <span>{activeItem.camera} • {activeItem.lens}</span>
                    </div>

                    <div className="text-[11px] text-neutral-500 pl-6">
                      {activeItem.settings}
                    </div>

                    {activeItem.views && (
                      <div className="flex items-center gap-2 text-[11px] text-neutral-400 pt-1">
                        <Eye className="w-3.5 h-3.5 text-[#FF4D12]" />
                        <span>{activeItem.views.toLocaleString()} VIEWS</span>
                      </div>
                    )}

                    <div className="pt-2 text-[11px] text-neutral-500">
                      {activeItem.year}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-neutral-800 flex items-center justify-between">
                  <button
                    onClick={(e) => toggleLike(activeItem.id, e)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold transition-colors cursor-pointer ${
                      likedItems[activeItem.id]
                        ? 'bg-[#FF4D12] text-white'
                        : 'bg-neutral-800 text-neutral-200 hover:bg-neutral-700'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${likedItems[activeItem.id] ? 'fill-white' : ''}`} />
                    <span>{likedItems[activeItem.id] ? 'LIKED' : 'LIKE'}</span>
                  </button>

                  <span className="text-[10px] font-mono text-neutral-500">
                    MUSHFIQ ARCHIVE
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default GalleryPage;

