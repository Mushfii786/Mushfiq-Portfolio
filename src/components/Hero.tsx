import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, ArrowRight, Download, Sparkles, Code, Layout, Camera } from 'lucide-react';
import { siteConfig } from '../config/site';
import { ParallaxPills } from './ui/parallax-pills';
import { ResumeModal } from './ResumeModal';

const HERO_PILLS = [
  { label: 'UI/UX Design', depth: 0.8, initialX: -10, initialY: 15 },
  { label: 'Next.js 16', depth: 0.6, initialX: 75, initialY: 10 },
  { label: 'Photography', depth: 0.9, initialX: 85, initialY: 70 },
  { label: 'Tailwind v4', depth: 0.5, initialX: -15, initialY: 80 },
  { label: 'Videography', depth: 0.7, initialX: 30, initialY: 90 },
];

export function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-[90vh] pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Headline & Intro Content */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          
          {/* Live Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800/80 shadow-sm mb-6 hover:scale-105 transition-transform duration-200 cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono text-neutral-800 dark:text-neutral-300 font-medium tracking-tight">
              {siteConfig.status}
            </span>
          </motion.div>

          {/* Staggered Heading */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-neutral-950 dark:text-white leading-[1.08]"
            >
              Creative Designer <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-neutral-500 dark:text-neutral-400">&</span> Frontend Developer
            </motion.h1>
          </div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-xl font-light leading-relaxed mb-8"
          >
            I'm <strong className="font-semibold text-neutral-900 dark:text-white">{siteConfig.name}</strong> ({siteConfig.handle}). I craft human-centered digital interfaces, brand identities, and cinematic visual media.
          </motion.p>

          {/* Action CTAs - Option elements enlarge on hover/click */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 font-medium text-sm flex items-center gap-2 hover:bg-[#FF4D12] dark:hover:bg-[#FF4D12] dark:hover:text-white hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg group cursor-pointer"
            >
              <span>Explore Selected Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="px-6 py-3.5 rounded-full bg-white/80 dark:bg-neutral-900/80 text-neutral-800 dark:text-neutral-200 border border-neutral-200/80 dark:border-neutral-800/80 font-medium text-sm flex items-center gap-2 hover:border-[#FF4D12] hover:text-[#FF4D12] hover:scale-105 active:scale-95 transition-all duration-200 backdrop-blur-md cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Get in Touch</span>
            </a>

            <button
              onClick={() => setIsResumeOpen(true)}
              className="p-3.5 rounded-full bg-neutral-100 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700/80 hover:border-[#FF4D12] hover:text-[#FF4D12] hover:scale-110 active:scale-90 transition-all duration-200 cursor-pointer"
              aria-label="View CV / Resume"
            >
              <Download className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Skill Tag Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center gap-3 mt-10 pt-6 border-t border-neutral-200 dark:border-neutral-800/60 text-xs text-neutral-700 dark:text-neutral-300 font-mono"
          >
            <span className="flex items-center gap-1.5 hover:scale-105 transition-transform cursor-default"><Layout className="w-3.5 h-3.5 text-[#FF4D12]" /> UI/UX</span>
            <span>•</span>
            <span className="flex items-center gap-1.5 hover:scale-105 transition-transform cursor-default"><Code className="w-3.5 h-3.5 text-[#FF4D12]" /> Next.js 16</span>
            <span>•</span>
            <span className="flex items-center gap-1.5 hover:scale-105 transition-transform cursor-default"><Camera className="w-3.5 h-3.5 text-[#FF4D12]" /> Photography</span>
            <span>•</span>
            <span className="flex items-center gap-1.5 hover:scale-105 transition-transform cursor-default"><Sparkles className="w-3.5 h-3.5 text-[#FF4D12]" /> 120 FPS Engine</span>
          </motion.div>

        </div>

        {/* Right Interactive Morphing Avatar / Photo Showcase */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          
          {/* React Bits Parallax Pills floating in background */}
          <div className="absolute -inset-16 pointer-events-none z-0">
            <ParallaxPills pills={HERO_PILLS} />
          </div>

          {/* Central Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
            className="relative w-full max-w-sm aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-white dark:border-neutral-800 shadow-2xl shadow-neutral-900/10 dark:shadow-black/50 z-10 group transition-all duration-300"
          >
            <img
              src={siteConfig.avatarUrl}
              alt={siteConfig.name}
              className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
            />

            {/* Glass Overlay Badges */}
            <div className="absolute top-5 right-5 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 text-[11px] font-mono font-medium text-neutral-800 dark:text-neutral-200 shadow-sm leading-tight rotate-2 group-hover:scale-105 transition-transform">
              DESIGN <br />
              DEVELOP <br />
              CREATE
            </div>

            <div className="absolute bottom-5 left-5 right-5 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md p-3.5 rounded-2xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-lg flex items-center justify-between group-hover:scale-[1.02] transition-transform">
              <div>
                <p className="text-xs font-semibold text-neutral-900 dark:text-white">
                  {siteConfig.name}
                </p>
                <p className="text-[11px] text-neutral-500 font-mono">
                  {siteConfig.handle}
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#FF4D12]/10 text-[#FF4D12] flex items-center justify-center font-bold text-xs">
                {siteConfig.initials}
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* CV Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
}
