import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { projects, photography, videography } from '../config/site';
import { Project, Photo, VideoItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { PhotoLightbox } from './PhotoLightbox';
import { VideoLightbox } from './VideoLightbox';
import { GalleryPage } from './GalleryPage';
import CircularGallery from './CircularGallery';

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
    title: "Cybernetic Silhouette",
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
    title: "Tokyo Neon Streets",
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
    title: "Loom Studio",
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
    title: "Film Look Post",
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
    title: "Coastal Horizons",
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
    title: "Rhythm OS",
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
    title: "Distorted Sound",
    category: "Digital Concept",
    url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=1200&h=1600",
    caption: "Gothic architecture emerging through dramatic fog and atmospheric lighting.",
    year: "2025 Archive",
    likes: 490,
    type: "photo",
    photoData: photography[2]
  }
];

const galleryItems = showcaseItems.map(item => ({
  image: item.url,
  text: item.title
}));

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activePhoto, setActivePhoto] = useState<Photo | null>(null);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [showFullGallery, setShowFullGallery] = useState(false);

  return (
    <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto relative overflow-hidden select-none">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FF4D12]/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Header */}
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
          Interactive 3D Circular Gallery — drag or scroll to rotate through digital product engineering, spatial visual concepts, and fine-art photography.
        </motion.p>
      </div>

      {/* Interactive Circular Gallery */}
      <div className="relative w-full h-[500px] sm:h-[600px] rounded-3xl overflow-hidden border border-neutral-800/80 bg-neutral-950/70 shadow-2xl backdrop-blur-xl my-4">
        <CircularGallery
          items={galleryItems}
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          font="bold 28px Figtree"
          scrollSpeed={2}
          scrollEase={0.05}
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none text-center">
          <p className="text-[11px] font-mono uppercase tracking-widest text-neutral-400/80 bg-black/60 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10">
            Drag horizon or scroll wheel to navigate gallery
          </p>
        </div>
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

