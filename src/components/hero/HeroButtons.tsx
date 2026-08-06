import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare } from 'lucide-react';

interface HeroButtonsProps {
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export function HeroButtons({
  primaryText = "Explore My Work",
  primaryHref = "#projects",
  secondaryText = "Let's Talk",
  secondaryHref = "#contact"
}: HeroButtonsProps) {
  // Magnetic effect for primary button
  const primaryBtnRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!primaryBtnRef.current) return;
    const { left, top, width, height } = primaryBtnRef.current.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * 0.25;
    const y = (e.clientY - (top + height / 2)) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
      className="flex flex-wrap items-center justify-center gap-4 pt-2 z-20"
    >
      {/* Primary Button */}
      <motion.a
        ref={primaryBtnRef}
        href={primaryHref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.5 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm sm:text-base text-white tracking-wide overflow-hidden cursor-pointer shadow-[0_0_30px_rgba(139,92,246,0.45)] hover:shadow-[0_0_50px_rgba(139,92,246,0.75)] transition-all duration-300"
      >
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4] bg-[length:200%_auto] animate-gradient-flow" />

        {/* Shimmer Light Line Moving Across */}
        <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] group-hover:left-[200%] transition-all duration-1000 ease-in-out" />

        {/* Button Content */}
        <span className="relative z-10 font-sans tracking-wide">{primaryText}</span>
        <ArrowRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
      </motion.a>

      {/* Secondary Button */}
      <motion.a
        href={secondaryHref}
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.96 }}
        className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-sm sm:text-base text-white/90 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-purple-500/50 backdrop-blur-xl shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 cursor-pointer overflow-hidden"
      >
        <span className="relative z-10 font-sans tracking-wide">{secondaryText}</span>
        <MessageSquare className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 text-purple-400 group-hover:text-cyan-400 transition-colors duration-300 group-hover:rotate-12" />
      </motion.a>
    </motion.div>
  );
}
