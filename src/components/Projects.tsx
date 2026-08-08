import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { projects, photography, videography } from '../config/site';
import { Project, Photo, VideoItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { PhotoLightbox } from './PhotoLightbox';
import { VideoLightbox } from './VideoLightbox';
import { GalleryPage } from './GalleryPage';
import { CoverFlowGallery, CoverFlowItem } from './CoverFlowGallery';
import RegeneratedImage from '../assets/images/regenerated_image_1786114032574.png';
import RegeneratedImage2 from '../assets/images/FortKochi.jpg';

// Items matching the reference screenshot design
const coverFlowData: CoverFlowItem[] = [
  {
    id: "cf-1",
    title: "Gery & Gany",
    subtitle: "Rusuk",
    category: "Creativestyle",
    url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1000",
    type: "photo",
    data: photography[0]
  },
  {
    id: "cf-2",
    title: "Mahalini",
    subtitle: "Bawa Dia Kembali",
    category: "Fábula",
    url: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=1000",
    type: "photo",
    data: photography[1]
  },
  {
    id: "cf-3",
    title: "Tulus",
    subtitle: "Monokrom",
    category: "Studio Album",
    url: RegeneratedImage,
    type: "photo",
    data: photography[2]
  },
  {
    id: "cf-4",
    title: "Anggi Marito",
    subtitle: "Mana Boleh",
    category: "Editorial",
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000",
    type: "photo",
    data: photography[3] || photography[0]
  },
  {
    id: "cf-5",
    title: "Cybernetic Silhouette",
    subtitle: "Tokyo 2026 Archive",
    category: "Cyberpunk",
    url: RegeneratedImage2,
    type: "photo",
    data: photography[0]
  },
  {
    id: "cf-6",
    title: "Tokyo Neon Streets",
    subtitle: "Cinematic Reel 2026",
    category: "Film & Drone",
    url: videography[0].posterUrl,
    type: "video",
    data: videography[0]
  },
  {
    id: "cf-7",
    title: "Loom Studio",
    subtitle: "UI/UX & Spatial Design",
    category: "Product Engineering",
    url: projects[0].image,
    type: "project",
    data: projects[0]
  }
];

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activePhoto, setActivePhoto] = useState<Photo | null>(null);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [showFullGallery, setShowFullGallery] = useState(false);

  const handleSelectItem = (item: CoverFlowItem) => {
    if (item.type === 'project' && item.data) {
      setActiveProject(item.data);
    } else if (item.type === 'video' && item.data) {
      setActiveVideo(item.data);
    } else if (item.data) {
      setActivePhoto(item.data);
    } else {
      setShowFullGallery(true);
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto relative overflow-hidden select-none">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#2563EB]/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
        
        {/* Top Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/30 text-[#2563EB] text-xs font-mono font-bold tracking-widest uppercase hover:scale-105 transition-transform duration-200 cursor-default"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
          <span>CREATIVE PHOTOGRAPHY</span>
        </motion.div>

        {/* Big Display Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white uppercase leading-[1.05]"
        >
          PHOTOGRAPHY WORKS
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xs sm:text-base text-neutral-600 dark:text-neutral-400 font-light max-w-xl mx-auto leading-relaxed"
        >
          Interactive 3D Cover Flow Deck with a 5-second auto-scroll interval and smooth cubic-bezier 3D depth transitions.
        </motion.p>
      </div>

      {/* Interactive 3D Cover Flow Gallery */}
      <CoverFlowGallery
        items={coverFlowData}
        onSelectItem={handleSelectItem}
        autoPlayInterval={5000}
      />

      {/* SEE MORE Action Button */}
      <div className="text-center mt-8 sm:mt-10">
        <button
          onClick={() => setShowFullGallery(true)}
          className="group relative overflow-hidden px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-neutral-950/90 text-white border border-white/15 hover:border-[#2563EB]/70 text-[11px] sm:text-xs font-['Syne'] font-bold tracking-[0.18em] uppercase transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.8)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:scale-[1.03] active:scale-95 inline-flex items-center gap-2.5 sm:gap-3 backdrop-blur-md"
        >
          {/* Animated Sheen Overlay */}
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-[#2563EB]/25 to-transparent transition-transform duration-1000 ease-in-out pointer-events-none" />
          
          <span className="relative z-10 text-white group-hover:text-blue-300 transition-colors duration-300">
            SEE MORE PHOTOGRAPHY
          </span>
          <div className="relative z-10 w-6 h-6 rounded-full bg-white/5 border border-white/10 group-hover:bg-[#2563EB] group-hover:border-[#2563EB] flex items-center justify-center transition-all duration-300">
            <ArrowRight className="w-3 h-3 text-blue-400 group-hover:text-white transition-transform duration-300 group-hover:translate-x-0.5" />
          </div>
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

      {/* Full Gallery Page View */}
      {showFullGallery && (
        <GalleryPage onClose={() => setShowFullGallery(false)} />
      )}

    </section>
  );
}

