import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Camera, MapPin, Calendar, Info } from 'lucide-react';
import { Photo } from '../types';

interface PhotoLightboxProps {
  photo: Photo | null;
  photos: Photo[];
  onClose: () => void;
  onSelectPhoto: (p: Photo) => void;
}

export function PhotoLightbox({ photo, photos, onClose, onSelectPhoto }: PhotoLightboxProps) {
  if (!photo) return null;

  const currentIndex = photos.findIndex(p => p.id === photo.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIdx = (currentIndex - 1 + photos.length) % photos.length;
    onSelectPhoto(photos[prevIdx]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIdx = (currentIndex + 1) % photos.length;
    onSelectPhoto(photos[nextIdx]);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-neutral-950/90 backdrop-blur-xl"
        />

        {/* Content Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ type: 'spring', damping: 25, stiffness: 280 }}
          className="relative max-w-5xl w-full max-h-[90vh] flex flex-col lg:flex-row bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl z-10 my-auto"
        >
          {/* Main Photo Frame */}
          <div className="relative flex-1 bg-black flex items-center justify-center min-h-[350px] lg:min-h-[500px]">
            <img
              src={photo.url}
              alt={photo.title}
              className="max-h-[75vh] w-auto max-w-full object-contain select-none"
            />

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 p-3 rounded-full bg-black/60 hover:bg-white text-white hover:text-black hover:scale-110 active:scale-90 transition-all duration-200 backdrop-blur-md cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 p-3 rounded-full bg-black/60 hover:bg-white text-white hover:text-black hover:scale-110 active:scale-90 transition-all duration-200 backdrop-blur-md cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Metadata Sidebar */}
          <div className="w-full lg:w-80 p-6 lg:p-8 bg-neutral-900 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-neutral-800 text-white">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="px-2.5 py-1 rounded-full bg-neutral-800 text-xs font-mono text-emerald-400 font-medium">
                    {photo.category}
                  </span>
                  <h3 className="text-2xl font-medium text-white mt-3">{photo.title}</h3>
                </div>

                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white hover:scale-110 active:scale-90 transition-all duration-200 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">
                "{photo.caption}"
              </p>

              {/* Camera Metadata EXIF */}
              <div className="space-y-4 pt-6 border-t border-neutral-800 text-xs text-neutral-400 font-mono">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>{photo.location}</span>
                </div>

                {photo.camera && (
                  <div className="flex items-center gap-2">
                    <Camera className="w-4 h-4 text-emerald-400" />
                    <span>{photo.camera} • {photo.lens}</span>
                  </div>
                )}

                {photo.settings && (
                  <div className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-emerald-400" />
                    <span>{photo.settings}</span>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span>Captured {photo.year}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 text-xs font-mono text-neutral-500 flex justify-between">
              <span>Photo {currentIndex + 1} of {photos.length}</span>
              <span>Muhammed Mushfiq</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
