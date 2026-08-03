import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Heart, Sparkles, Play, Video, Eye } from 'lucide-react';
import { videography } from '../config/site';
import { VideoItem } from '../types';
import { VideoLightbox } from './VideoLightbox';
import { VideoGalleryPage } from './VideoGalleryPage';

export function Videography() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [showFullGallery, setShowFullGallery] = useState(false);

  const total = videography.length;

  // Auto-advance video showcase every 3 seconds (3000ms)
  useEffect(() => {
    if (activeVideo || showFullGallery) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(timer);
  }, [activeVideo, showFullGallery, total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const handleItemClick = (item: VideoItem, isCenter: boolean) => {
    if (!isCenter) {
      const idx = videography.findIndex(v => v.id === item.id);
      if (idx !== -1) setCurrentIndex(idx);
    } else {
      setActiveVideo(item);
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto relative overflow-hidden select-none border-t border-neutral-800/60">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FF4D12]/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
        
        {/* Top Orange Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF4D12]/10 border border-[#FF4D12]/30 text-[#FF4D12] text-xs font-mono font-bold tracking-widest uppercase hover:scale-105 transition-transform duration-200 cursor-default"
        >
          <Video className="w-3.5 h-3.5 text-[#FF4D12]" />
          <span>CINEMATIC REELS & MOTION</span>
        </motion.div>

        {/* Big Display Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.05]"
        >
          Videography & <br />
          Cinematic <br />
          Showcase
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xs sm:text-base text-neutral-400 font-light max-w-xl mx-auto leading-relaxed"
        >
          Commercial films, drone cinematography, short-form reels, and color grading narratives.
        </motion.p>
      </div>

      {/* 3D Slide Carousel (Cover Flow) */}
      <div className="relative py-8 my-2 flex items-center justify-center min-h-[480px]">
        <div className="relative w-full max-w-5xl h-[440px] flex items-center justify-center">
          {videography.map((item, idx) => {
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
                className={`group absolute w-[280px] sm:w-[320px] h-[410px] rounded-[2rem] overflow-hidden cursor-pointer shadow-2xl backdrop-blur-xl border transition-all duration-200 hover:scale-[1.08] active:scale-95 ${
                  isCenter
                    ? 'border-2 border-[#FF4D12] shadow-[#FF4D12]/25 ring-4 ring-[#FF4D12]/20'
                    : 'border-neutral-800 bg-neutral-900/80 hover:border-neutral-700'
                }`}
                style={{ perspective: 1000 }}
              >
                {/* Poster / Video Element */}
                {isCenter ? (
                  <video
                    src={item.videoUrl}
                    poster={item.posterUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={item.posterUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Orange Dot accent on bottom left border ring */}
                {isCenter && (
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF4D12] absolute -bottom-1 -left-1 ring-2 ring-black z-40" />
                )}

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-5 flex flex-col justify-between">
                  
                  {/* Top Row: Category Pill & Duration Badge */}
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 rounded-full bg-[#FF4D12] text-white text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-md shadow-md">
                      {item.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/60 text-neutral-300 text-[10px] font-mono font-medium backdrop-blur-md border border-white/10">
                      {item.duration}
                    </span>
                  </div>

                  {/* Center Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className={`p-4 rounded-full bg-[#FF4D12]/90 text-white shadow-2xl shadow-[#FF4D12]/50 backdrop-blur-md transition-all duration-300 ${
                      isCenter ? 'scale-100 group-hover:scale-125' : 'scale-75 opacity-70'
                    }`}>
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Bottom Row: Title & Metrics */}
                  <div className="space-y-2 z-10">
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug font-mono line-clamp-2">
                      {item.title}
                    </h3>

                    <div className="flex items-center justify-between text-xs font-mono text-neutral-400 pt-2 border-t border-white/10">
                      <div className="flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5 text-neutral-400" />
                        <span>{item.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[#FF4D12] font-semibold">
                        <Heart className="w-3.5 h-3.5 fill-[#FF4D12]" />
                        <span>{item.likes.toLocaleString()}</span>
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
          title="Previous Video"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Dots Indicator Pill Bar */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/90 border border-neutral-800 shadow-lg">
          {videography.map((_, i) => (
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
          title="Next Video"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

      </div>

      {/* SEE MORE Action Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => {
            setShowFullGallery(true);
          }}
          className="group px-8 py-3 rounded-full bg-neutral-900 text-white border border-neutral-800 text-xs font-mono font-bold tracking-wider uppercase hover:bg-[#FF4D12] hover:border-[#FF4D12] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow-2xl inline-flex items-center gap-2"
        >
          <span>SEE MORE</span>
          <Play className="w-3.5 h-3.5 fill-current text-[#FF4D12] group-hover:text-white transition-colors" />
        </button>
      </div>

      {/* Modal Video Lightbox */}
      {activeVideo && (
        <VideoLightbox
          video={activeVideo}
          videos={videography}
          onClose={() => setActiveVideo(null)}
          onSelectVideo={(v) => setActiveVideo(v)}
        />
      )}

      {/* Dedicated Videography Gallery Page View matching the exact reference design */}
      {showFullGallery && (
        <VideoGalleryPage
          onClose={() => setShowFullGallery(false)}
        />
      )}

    </section>
  );
}
