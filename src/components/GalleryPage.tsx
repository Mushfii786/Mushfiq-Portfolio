import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, X, Maximize2, Heart, Share2, Sparkles, Layers, Palette, BookOpen, Type, ArrowUpRight, Check } from 'lucide-react';
import { GradientWaves } from './GradientWaves';

interface GalleryPageProps {
  onClose: () => void;
  initialCategory?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Poster Designing' | 'Photo Editing' | 'Book Covers' | 'Typography Images';
  url: string;
  caption: string;
  clientOrEvent?: string;
  tools?: string;
  year?: string;
  column: 1 | 2 | 3 | 4 | 5;
  aspectRatioClass: string;
  badge?: string;
}

// 25 Curated Works structured into 5 columns matching the exact reference studio gallery layout
export const galleryGridPhotos: GalleryItem[] = [
  // COLUMN 1
  {
    id: "gal-1-1",
    title: "Terracotta High-Fashion Editorial",
    category: "Photo Editing",
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    caption: "Vibrant orange hue adjustment, skin retouching, and studio lighting balance.",
    clientOrEvent: "Vogue Creative Studio",
    tools: "Lightroom • Photoshop",
    year: "2026",
    column: 1,
    aspectRatioClass: "aspect-[3/4]",
    badge: "Editorial Edit"
  },
  {
    id: "gal-1-2",
    title: "Monochrome Botanical Silhouette",
    category: "Photo Editing",
    url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
    caption: "High-contrast shadow grading with soft sunbeam flares.",
    clientOrEvent: "Personal Archive",
    tools: "Lightroom Classic",
    year: "2026",
    column: 1,
    aspectRatioClass: "aspect-[4/5]"
  },
  {
    id: "gal-1-3",
    title: "Ethereal Moss & Light Installation",
    category: "Photo Editing",
    url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
    caption: "Surreal color manipulation transforming forest light into emerald glow.",
    clientOrEvent: "Botanical Arts Fest",
    tools: "Photoshop • Camera Raw",
    year: "2025",
    column: 1,
    aspectRatioClass: "aspect-[3/4]"
  },
  {
    id: "gal-1-4",
    title: "Campus Music Fest Mainstage",
    category: "Poster Designing",
    url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800",
    caption: "Dynamic event poster with vibrant typography and stage lighting overlay.",
    clientOrEvent: "College Media Union",
    tools: "Photoshop • Illustrator",
    year: "2025",
    column: 1,
    aspectRatioClass: "aspect-[4/3]"
  },

  // COLUMN 2
  {
    id: "gal-2-1",
    title: "Sunlit Architectural Shadows",
    category: "Photo Editing",
    url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
    caption: "Warm terracotta and ochre color palette grading for interior design editorial.",
    clientOrEvent: "ArchDigest Edition",
    tools: "Lightroom • Capture One",
    year: "2026",
    column: 2,
    aspectRatioClass: "aspect-[9/16]",
    badge: "Featured Edit"
  },
  {
    id: "gal-2-2",
    title: "Hermes Home — Minimal Art Print",
    category: "Book Covers",
    url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800",
    caption: "Minimalist hardcover novel layout featuring abstract geometric forms.",
    clientOrEvent: "Hermes Publishing",
    tools: "InDesign • Illustrator",
    year: "2026",
    column: 2,
    aspectRatioClass: "aspect-[4/3]"
  },
  {
    id: "gal-2-3",
    title: "Abstract Geometric Balance",
    category: "Typography Images",
    url: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=800",
    caption: "Monochrome typographic artwork exploring negative space and letterforms.",
    clientOrEvent: "Type Directors Club",
    tools: "Illustrator • Photoshop",
    year: "2025",
    column: 2,
    aspectRatioClass: "aspect-[3/4]"
  },
  {
    id: "gal-2-4",
    title: "Cyan Neural Wave Network",
    category: "Typography Images",
    url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800",
    caption: "Procedural gradient mesh combined with modern sans-serif typography.",
    clientOrEvent: "Tech Symposium 2025",
    tools: "Photoshop • Cinema 4D",
    year: "2025",
    column: 2,
    aspectRatioClass: "aspect-[16/9]"
  },

  // COLUMN 3
  {
    id: "gal-3-1",
    title: "Yellow Courtyard & Desert Flora",
    category: "Photo Editing",
    url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=800",
    caption: "Vibrant yellow tint balancing direct sunlight and cactus shadows.",
    clientOrEvent: "Oasis Living Magazine",
    tools: "Lightroom Classic",
    year: "2026",
    column: 3,
    aspectRatioClass: "aspect-[4/3]"
  },
  {
    id: "gal-3-2",
    title: "Contemporary Living & Wood Forms",
    category: "Book Covers",
    url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800",
    caption: "Hardcover coffee table book layout design with rich tactile textures.",
    clientOrEvent: "Nordic Press",
    tools: "InDesign • Photoshop",
    year: "2026",
    column: 3,
    aspectRatioClass: "aspect-[4/5]",
    badge: "Book Design"
  },
  {
    id: "gal-3-3",
    title: "Desert Cactus Minimal Poster",
    category: "Poster Designing",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
    caption: "Clean poster layout for environmental conservation summit.",
    clientOrEvent: "Green Earth Org",
    tools: "Illustrator • Photoshop",
    year: "2025",
    column: 3,
    aspectRatioClass: "aspect-[3/4]"
  },

  // COLUMN 4
  {
    id: "gal-4-1",
    title: "Cinematic Neon Motion Blur",
    category: "Photo Editing",
    url: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=800",
    caption: "Long-exposure motion blur synthesis with cyberpunk glow highlights.",
    clientOrEvent: "Tokyo After Dark Series",
    tools: "Photoshop • Lightroom",
    year: "2026",
    column: 4,
    aspectRatioClass: "aspect-[3/4]"
  },
  {
    id: "gal-4-2",
    title: "Magenta Flare & Lens Distortion",
    category: "Photo Editing",
    url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800",
    caption: "Analog film light leaks combined with modern portrait retouching.",
    clientOrEvent: "Indie Album Art",
    tools: "Photoshop • Dehancer",
    year: "2026",
    column: 4,
    aspectRatioClass: "aspect-square"
  },
  {
    id: "gal-4-3",
    title: "Urban Streetwear Fashion Poster",
    category: "Poster Designing",
    url: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=800",
    caption: "High-energy promotional poster with custom distressed type and grain.",
    clientOrEvent: "Pulse Apparel Co.",
    tools: "Illustrator • Photoshop",
    year: "2025",
    column: 4,
    aspectRatioClass: "aspect-[3/4]",
    badge: "Poster Design"
  },

  // COLUMN 5
  {
    id: "gal-5-1",
    title: "Art Exhibition Crowd Silhouette",
    category: "Poster Designing",
    url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
    caption: "Sophisticated event poster featuring repeating silhouette figures.",
    clientOrEvent: "Biennale Art Expo 2026",
    tools: "Photoshop • Illustrator",
    year: "2026",
    column: 5,
    aspectRatioClass: "aspect-[4/5]",
    badge: "Exhibition Poster"
  },
  {
    id: "gal-5-2",
    title: "Alpaca Cutout Surreal Collage",
    category: "Photo Editing",
    url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
    caption: "Precision cutout line art superimposed on pastoral landscape background.",
    clientOrEvent: "Creative Media Collective",
    tools: "Photoshop Pen Tool",
    year: "2026",
    column: 5,
    aspectRatioClass: "aspect-[9/16]"
  },
  {
    id: "gal-5-3",
    title: "Organic Form Modernist Book",
    category: "Book Covers",
    url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800",
    caption: "Tactile paperback jacket layout featuring organic sculptural art.",
    clientOrEvent: "Horizon Books",
    tools: "InDesign • Photoshop",
    year: "2025",
    column: 5,
    aspectRatioClass: "aspect-[4/3]"
  },
  {
    id: "gal-5-4",
    title: "Experimental Kinetic Letterforms",
    category: "Typography Images",
    url: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=800",
    caption: "Warped kinetic typography composition for digital poster series.",
    clientOrEvent: "Type & Form Exhibition",
    tools: "Illustrator • After Effects",
    year: "2025",
    column: 5,
    aspectRatioClass: "aspect-[3/4]"
  }
];

const categories = [
  { id: 'ALL', label: 'All Works', icon: Sparkles },
  { id: 'POSTER DESIGNING', label: 'Poster Designing', icon: Layers },
  { id: 'PHOTO EDITING', label: 'Photo Editing', icon: Palette },
  { id: 'BOOK COVERS', label: 'Book Covers', icon: BookOpen },
  { id: 'TYPOGRAPHY IMAGES', label: 'Typography Images', icon: Type },
];

export function GalleryPage({ onClose, initialCategory = 'ALL' }: GalleryPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory.toUpperCase());
  const [animKey, setAnimKey] = useState<number>(0);
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [likedItems, setLikedItems] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCategoryClick = (catId: string) => {
    setSelectedCategory(catId);
    setAnimKey((prev) => prev + 1);
  };

  const containerRef = useRef<HTMLDivElement>(null);

  // Focus container on mount for immediate mouse wheel & keyboard interaction
  useEffect(() => {
    containerRef.current?.focus();
  }, []);

  // Keyboard shortcut to close on Escape & Mouse Wheel scroll handling
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeItem) {
          setActiveItem(null);
        } else {
          onClose();
        }
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (activeItem) return;
      if (containerRef.current) {
        containerRef.current.scrollTop += e.deltaY;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [activeItem, onClose]);

  const toggleLike = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const copyLink = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredItems = selectedCategory === 'ALL'
    ? galleryGridPhotos
    : galleryGridPhotos.filter((p) => p.category.toUpperCase() === selectedCategory);

  return (
    <motion.div
      ref={containerRef}
      tabIndex={-1}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] bg-[#030712] text-white overflow-y-auto overscroll-contain touch-pan-y outline-none selection:bg-[#2563EB] selection:text-white font-['Syne',sans-serif]"
    >
      {/* Background Ambient Radial Glow & Luxury Particle Mesh */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-gradient-to-br from-blue-600/15 to-indigo-600/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-cyan-500/15 to-blue-600/10 rounded-full blur-[160px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/5 rounded-full blur-[180px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent" />
      </div>

      {/* Top Editorial Header Navigation Bar - Luxury Dark Glass */}
      <header className="sticky top-0 z-40 bg-[#030712]/90 backdrop-blur-2xl border-b border-white/10 px-4 sm:px-8 py-3 flex flex-col md:flex-row md:items-center justify-between gap-3.5 shadow-[0_10px_35px_rgba(0,0,0,0.85)] relative">
        
        {/* Left: Studio Brand Identifier */}
        <div className="flex items-center gap-3.5">
          <button
            onClick={onClose}
            className="group px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-[#2563EB] text-white border border-white/20 hover:border-blue-400/50 text-[10px] font-bold tracking-[0.16em] uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:scale-105 active:scale-95"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-white" />
            <span>RETURN TO HOME</span>
          </button>

          <div className="hidden sm:block h-4 w-[1px] bg-white/20" />

          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-white font-['Syne'] drop-shadow-md">
              photography works<span className="text-blue-400">.</span>
            </span>
          </div>
        </div>

        {/* Center: Category Filters with Animated Layout Pill */}
        <div className="flex items-center gap-2 overflow-x-auto pb-0.5 md:pb-0 no-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`relative px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.1em] transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center gap-1.5 z-10 ${
                  isSelected
                    ? 'text-white'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-[0_0_20px_rgba(37,99,235,0.55)] border border-blue-300/40 -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {!isSelected && (
                  <div className="absolute inset-0 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all -z-10" />
                )}
                <Icon className={`w-3 h-3 ${isSelected ? 'text-white' : 'text-neutral-400'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

      </header>

      {/* Main Studio Canvas Area - Multi-Column Collage Layout */}
      <main className="max-w-[1600px] mx-auto px-3 sm:px-6 md:px-8 py-6 sm:py-8 relative z-10">
        
        {/* Responsive Multi-Column Mosaic Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${animKey}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-start"
          >
            {[1, 2, 3, 4, 5].map((colNum) => {
              const columnItems = filteredItems.filter((p) => p.column === colNum);

              return (
                <div key={colNum} className="flex flex-col gap-4">
                  {columnItems.map((item, idx) => {
                    const isLiked = Boolean(likedItems[item.id]);

                    return (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 20, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        whileHover={{ y: -6, scale: 1.02 }}
                        transition={{ delay: idx * 0.04, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        onClick={() => setActiveItem(item)}
                        className="group relative w-full overflow-hidden rounded-2xl bg-neutral-900/90 cursor-pointer border border-white/10 hover:border-blue-500/80 hover:shadow-[0_15px_35px_rgba(37,99,235,0.3)] transition-all duration-500"
                      >
                        {/* Image Container with Exact Aspect Ratios */}
                        <div className={`w-full ${item.aspectRatioClass} relative overflow-hidden bg-neutral-950`}>
                          <img
                            src={item.url}
                            alt={item.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-[1.07] transition-transform duration-700 ease-out brightness-[0.92] group-hover:brightness-105"
                          />

                          {/* Minimal Badge Overlay if present */}
                          {item.badge && (
                            <div className="absolute top-3.5 left-3.5 z-10 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-xl text-cyan-300 text-[9px] font-bold uppercase tracking-wider border border-cyan-500/40 shadow-xl">
                              {item.badge}
                            </div>
                          )}

                          {/* Premium Studio Vignette Hover Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                              <span className="px-2.5 py-1 rounded-full bg-blue-600/90 text-white text-[10px] font-bold uppercase tracking-wider shadow-md border border-blue-400/40 backdrop-blur-md">
                                {item.category}
                              </span>

                              <button
                                onClick={(e) => toggleLike(item.id, e)}
                                className={`p-2 rounded-full backdrop-blur-md transition-all ${
                                  isLiked
                                    ? 'bg-[#2563EB] text-white shadow-lg'
                                    : 'bg-black/60 text-white hover:bg-white hover:text-neutral-950'
                                }`}
                              >
                                <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-white' : ''}`} />
                              </button>
                            </div>

                            <div className="space-y-1">
                              <h3 className="text-white font-extrabold text-sm tracking-tight leading-tight">
                                {item.title}
                              </h3>
                              <p className="text-neutral-300 text-xs font-sans line-clamp-1">
                                {item.caption}
                              </p>
                              <div className="flex items-center justify-between text-[10px] text-neutral-400 pt-2 border-t border-white/20 font-mono">
                                <span>{item.clientOrEvent}</span>
                                <ArrowUpRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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

      </main>

      {/* Lightbox Modal Overlay when a work is selected */}
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
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] bg-neutral-900 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.9)] z-10 flex flex-col lg:flex-row my-auto text-white border border-white/15"
            >
              {/* Media View */}
              <div className="relative flex-1 bg-black flex items-center justify-center p-4 sm:p-8 min-h-[350px] lg:min-h-[550px]">
                <img
                  src={activeItem.url}
                  alt={activeItem.title}
                  className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg select-none shadow-2xl"
                />

                {/* Close Overlay Icon Mobile */}
                <button
                  onClick={() => setActiveItem(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-black/70 hover:bg-[#2563EB] text-white backdrop-blur-md transition-colors cursor-pointer lg:hidden z-20 border border-white/20"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Sidebar Metadata Info */}
              <div className="w-full lg:w-80 p-6 lg:p-8 bg-neutral-900/95 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-500/30">
                        {activeItem.category}
                      </span>
                      <h2 className="text-xl font-extrabold text-white mt-3 leading-tight font-['Syne']">
                        {activeItem.title}
                      </h2>
                    </div>

                    <button
                      onClick={() => setActiveItem(null)}
                      className="hidden lg:flex p-2 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed mb-6">
                    "{activeItem.caption}"
                  </p>

                  <div className="space-y-3 pt-4 border-t border-white/10 text-xs font-mono text-neutral-300">
                    <div>
                      <span className="text-neutral-500 uppercase text-[10px] block">Client / Event</span>
                      <span className="font-semibold text-white">{activeItem.clientOrEvent}</span>
                    </div>

                    <div>
                      <span className="text-neutral-500 uppercase text-[10px] block">Tools & Software</span>
                      <span className="font-semibold text-white">{activeItem.tools}</span>
                    </div>

                    <div>
                      <span className="text-neutral-500 uppercase text-[10px] block">Year</span>
                      <span className="font-semibold text-white">{activeItem.year}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                  <button
                    onClick={(e) => toggleLike(activeItem.id, e)}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      likedItems[activeItem.id]
                        ? 'bg-[#2563EB] text-white shadow-md'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${likedItems[activeItem.id] ? 'fill-white' : ''}`} />
                    <span>{likedItems[activeItem.id] ? 'LIKED' : 'LIKE WORK'}</span>
                  </button>

                  <button
                    onClick={(e) => copyLink(activeItem.id, e)}
                    className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 transition-colors cursor-pointer"
                    title="Share Work"
                  >
                    {copiedId === activeItem.id ? <Check className="w-4 h-4 text-green-400" /> : <Share2 className="w-4 h-4" />}
                  </button>
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
