import React from 'react';
import { motion } from 'motion/react';

interface GlassBadgeProps {
  text?: string;
  onClick?: () => void;
}

export function GlassBadge({ text = "Available for Freelance Projects", onClick }: GlassBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
      className="inline-block z-20 cursor-default"
    >
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        className="group relative inline-flex items-center gap-2.5 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-purple-500/40 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(139,92,246,0.3)] transition-all duration-300 select-none overflow-hidden"
      >
        {/* Subtle Ambient Edge Highlight */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Tiny Animated Green Status Indicator */}
        <span className="relative flex h-2 w-2 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_#10B981]"></span>
        </span>

        {/* Badge Text */}
        <span className="text-xs sm:text-sm font-medium text-white/90 group-hover:text-white tracking-wide font-sans transition-colors">
          {text}
        </span>
      </motion.div>
    </motion.div>
  );
}
