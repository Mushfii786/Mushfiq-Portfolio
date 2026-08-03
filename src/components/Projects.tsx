import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Heart, Sparkles, Maximize2, Play } from 'lucide-react';
import { projects, photography, videography } from '../config/site';
import { Project, Photo, VideoItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { PhotoLightbox } from './PhotoLightbox';
import { VideoLightbox } from './VideoLightbox';
import { GalleryPage } from './GalleryPage';

// Combine projects, photography, and videography into unified showcase items
interface ShowcaseItem {
  id: string;
  title: string;
  category: string;
  url: string;
  caption: string;
  year: string;
  likes: number;
  type: 'project' | 'photo' | 'video';
  projectData?: Project;
  photoData?: Photo;
  videoData?: VideoItem;
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: "item-1",
    title: "Cybernetic Silhouette & Neon Lights",
    category: "Photography",
    url: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=1200&h=1600",
    caption: "Futuristic visor reflection and ambient cyberpunk Tokyo night light.",
    year: "2026 Archive",
    likes: 540,
    type: "photo",
    photoData: photography[0]
  },
  {
    id: "item-2",
    title: "Tokyo Neon Streets & Midnight Drift",
    category: "Cinematic Reel",
    url: videography[0].posterUrl,
    caption: videography[0].caption,
    year: "2026 Film",
    likes: 1850,
    type: "video",
    videoData: videography[0]
  },
  {
    id: "item-3",
    title: "Loom Studio - AI Editorial Canvas",
    category: "UI/UX Design",
    url: projects[0].image,
    caption: projects[0].description,
    year: "2025 Project",
    likes: 950,
    type: "project",
    projectData: projects[0]
  },
  {
    id: "item-4",
    title: "Getting that film look in post",
    category: "Photography",
    url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200&h=1600",
    caption: "Organic botanical stillness and rich natural film grain grading.",
    year: "2025 Archive",
    likes: 620,
    type: "photo",
    photoData: photography[1]
  },
  {
    id: "item-5",
    title: "Aerial Coastal Horizons & Wave Rhythms",
    category: "Drone Reel",
    url: videography[1].posterUrl,
    caption: videography[1].caption,
    year: "2025 Film",
    likes: 2410,
    type: "video",
    videoData: videography[1]
  },
  {
    id: "item-6",
    title: "Rhythm OS - Calm Analytics",
    category: "Development",
    url: projects[1].image,
    caption: projects[1].description,
    year: "2025 Project",
    likes: 880,
    type: "project",
    projectData: projects[1]
  },
  {
    id: "item-7",
    title: "Visualizing distorted sound mixes",
    category: "Digital Concept",
    url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=1200&h=1600",
    caption: "Gothic architecture emerging through dramatic fog and atmospheric lighting.",
    year: "2025 Archive",
    likes: 490,
    type: "photo",
    photoData: photography[2]
  }
];

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0); // Center item
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activePhoto, setActivePhoto] = useState<Photo | null>(null);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [showFullGallery, setShowFullGallery] = useState(false);

  const total = showcaseItems.length;

  // Auto-advance showcase every 3 seconds (3000ms)
  useEffect(() => {
    if (activeProject || activePhoto || activeVideo || showFullGallery) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(timer);
  }, [activeProject, activePhoto, activeVideo, showFullGallery, total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const handleItemClick = (item: ShowcaseItem, isCenter: boolean) => {
    if (!isCenter) {
      const idx = showcaseItems.findIndex(i => i.id === item.id);
      if (idx !== -1) setCurrentIndex(idx);
    } else {
      if (item.type === 'project' && item.projectData) {
        setActiveProject(item.projectData);
      } else if (item.type === 'video' && item.videoData) {
        setActiveVideo(item.videoData);
      } else if (item.photoData) {
        setActivePhoto(item.photoData);
      }
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto relative overflow-hidden select-none">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FF4D12]/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Header matching uploaded screenshot */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
        
        {/* Top Orange Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF4D12]/10 border border-[#FF4D12]/30 text-[#FF4D12] text-xs font-mono font-bold tracking-widest uppercase hover:scale-105 transition-transform duration-200 cursor-default"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#FF4D12]" />
          <span>PORTFOLIO & CREATIVE ARCHIVE</span>
        </motion.div>

        {/* Big Display Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white uppercase leading-[1.05]"
        >
          Photography <br />
          Works & <br />
          Showcase
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xs sm:text-base text-neutral-600 dark:text-neutral-400 font-light max-w-xl mx-auto leading-relaxed"
        >
          Digital product engineering, spatial visual concepts, fine-art photography, and motion reels.
        </motion.p>
      </div>

      {/* 3D Slide Carousel (Cover Flow) */}
      <div className="relative py-8 my-2 flex items-center justify-center min-h-[480px]">
        <div className="relative w-full max-w-5xl h-[440px] flex items-center justify-center">
          {showcaseItems.map((item, idx) => {
            let offset = idx - currentIndex;
            if (offset < -Math.floor(total / 2)) offset += total;
            if (offset > Math.floor(total / 2)) offset -= total;

            const isCenter = offset === 0;
            const isVisible = Math.abs(offset) <= 2;

            if (!isVisible) return null;

            const translateX = offset * 230; 
            const scale = isCenter ? 1.05 : 1 - Math.abs(offset) * 0.12;
            const opacity = isCenter ? 1 : 1 - Math.abs(offset) * 0.45;
            const zIndex = 30 - Math.abs(offset) * 10;
            const rotateY = offset * -15;

            return (
              <motion.div
                key={item.id}
                initial={false}
                animate={{
                  x: translateX,
                  scale: scale,
                  opacity: opacity,
                  rotateY: rotateY,
                  zIndex: zIndex
                }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => handleItemClick(item, isCenter)}
                className={`absolute w-[280px] sm:w-[320px] h-[410px] rounded-[2rem] overflow-hidden cursor-pointer shadow-2xl backdrop-blur-xl border transition-all duration-200 hover:scale-[1.08] active:scale-95 ${
                  isCenter
                    ? 'border-2 border-[#FF4D12] shadow-[#FF4D12]/25 ring-4 ring-[#FF4D12]/20'
                    : 'border-neutral-800 bg-neutral-900/80 hover:border-neutral-700'
                }`}
                style={{ perspective: 1000 }}
              >
                {/* Image */}
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* Center orange dot accent on bottom left border ring */}
                {isCenter && (
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF4D12] absolute -bottom-1 -left-1 ring-2 ring-black z-40" />
                )}

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-5 flex flex-col justify-between">
                  
                  {/* Top Row: Category Pill Tag */}
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 rounded-full bg-[#FF4D12] text-white text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-md shadow-md">
                      {item.category}
                    </span>
                    {isCenter && (
                      <div className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-[#FF4D12] hover:scale-110 active:scale-90 transition-all">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    )}
                  </div>

                  {/* Bottom Row: Title & Heart Meta */}
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug font-mono line-clamp-2">
                      {item.title}
                    </h3>

                    <div className="flex items-center justify-between text-xs font-mono text-neutral-400 pt-2 border-t border-white/10">
                      <span>{item.year}</span>
                      <div className="flex items-center gap-1 text-[#FF4D12] font-semibold">
                        <Heart className="w-3.5 h-3.5 fill-[#FF4D12]" />
                        <span>{item.likes}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Pagination & Arrow Controls Row */}
      <div className="flex items-center justify-center gap-5 mt-6">
        
        {/* Left Chevron */}
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 text-white flex items-center justify-center hover:bg-[#FF4D12] hover:border-[#FF4D12] hover:scale-110 active:scale-90 transition-all cursor-pointer shadow-lg"
          title="Previous"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Dots Indicator Pill Bar */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/90 border border-neutral-800 shadow-lg">
          {showcaseItems.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all cursor-pointer hover:scale-125 ${
                currentIndex === i
                  ? 'w-6 bg-[#FF4D12]'
                  : 'w-2 bg-neutral-700 hover:bg-neutral-500'
              }`}
            />
          ))}
        </div>

        {/* Right Chevron */}
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 text-white flex items-center justify-center hover:bg-[#FF4D12] hover:border-[#FF4D12] hover:scale-110 active:scale-90 transition-all cursor-pointer shadow-lg"
          title="Next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

      </div>

      {/* SEE MORE Action Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => setShowFullGallery(true)}
          className="group px-8 py-3 rounded-full bg-neutral-900 text-white border border-neutral-800 text-xs font-mono font-bold tracking-wider uppercase hover:bg-[#FF4D12] hover:border-[#FF4D12] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow-2xl inline-flex items-center gap-2"
        >
          <span>SEE MORE</span>
          <span className="text-[#FF4D12] group-hover:text-white transition-colors">↗</span>
        </button>
      </div>

      {/* Modal for Project Detail */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />

      {/* Modal Lightbox for Video */}
      {activeVideo && (
        <VideoLightbox
          video={activeVideo}
          videos={videography}
          onClose={() => setActiveVideo(null)}
          onSelectVideo={(v) => setActiveVideo(v)}
        />
      )}

      {/* Modal Lightbox for Photo */}
      {activePhoto && (
        <PhotoLightbox
          photo={activePhoto}
          photos={photography}
          onClose={() => setActivePhoto(null)}
          onSelectPhoto={(p) => setActivePhoto(p)}
        />
      )}

      {/* Full Gallery Page View matching the exact reference design */}
      {showFullGallery && (
        <GalleryPage onClose={() => setShowFullGallery(false)} />
      )}

    </section>
  );
}
