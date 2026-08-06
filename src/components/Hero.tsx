import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { AnimatedBackground } from './hero/AnimatedBackground';
import { GlassBadge } from './hero/GlassBadge';
import { GradientText } from './hero/GradientText';
import { HeroButtons } from './hero/HeroButtons';
import { CursorGlow } from './hero/CursorGlow';
import { siteConfig } from '../config/site';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Staggered entrance variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 35, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden select-none bg-[#050505] px-4 sm:px-6 py-20"
    >
      {/* Layered Cinematic Animated Background */}
      <AnimatedBackground />

      {/* Interactive Cursor Spotlight Glow */}
      <CursorGlow />

      {/* Hero Core Content Container with Scroll Parallax */}
      <motion.div
        style={{
          y: contentY,
          scale: contentScale,
          opacity: contentOpacity,
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-[1200px] w-full mx-auto flex flex-col items-center justify-center space-y-8 sm:space-y-10"
      >
        {/* Top Floating Glass Badge */}
        <motion.div variants={lineVariants}>
          <GlassBadge text="Available for Freelance Projects" />
        </motion.div>

        {/* Main Headline */}
        <div className="space-y-0.5 sm:space-y-1">
          <motion.div variants={lineVariants} className="overflow-hidden">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[4.8rem] font-bold tracking-tight text-white leading-[1.08]">
              Bringing Stories
            </h1>
          </motion.div>

          <motion.div variants={lineVariants} className="overflow-hidden">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[4.8rem] font-bold tracking-tight text-white leading-[1.08]">
              To Life Through
            </h1>
          </motion.div>

          <motion.div variants={lineVariants} className="overflow-hidden">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[4.8rem] font-bold tracking-tight leading-[1.08]">
              <GradientText>Photography & Films</GradientText>
            </h1>
          </motion.div>
        </div>

        {/* Subtitle Introduction */}
        <motion.div variants={lineVariants} className="max-w-[620px] mx-auto px-2">
          <p className="text-sm sm:text-base md:text-lg text-white/65 font-light leading-relaxed tracking-wide">
            Hi, I'm <strong className="font-semibold text-white">{siteConfig.name || 'Mushfii'}</strong>. I create cinematic photography, films, visual storytelling and digital experiences that leave a lasting impression.
          </p>
        </motion.div>

        {/* Interactive Action Buttons */}
        <motion.div variants={lineVariants}>
          <HeroButtons
            primaryText="Explore My Work"
            primaryHref="#projects"
            secondaryText="Let's Talk"
            secondaryHref="#contact"
          />
        </motion.div>
      </motion.div>

      {/* Subtle Scroll Down Prompt Indicator at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">
          SCROLL TO EXPLORE
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-4 h-7 rounded-full border border-white/20 flex items-start justify-center p-1"
        >
          <div className="w-1 h-1.5 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
