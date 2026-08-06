import React from 'react';
import { motion } from 'motion/react';
import { FloatingParticles } from './FloatingParticles';

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 bg-[#050505] overflow-hidden pointer-events-none select-none">
      
      {/* Layer 1: GPU Accelerated Gradient Radial Orbs (No heavy blur filter calculations) */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          x: [0, 30, -15, 0],
          y: [0, -25, 15, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-20 -left-20 w-[65vw] max-w-[800px] h-[65vw] max-h-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.22)_0%,rgba(59,130,246,0.12)_45%,transparent_70%)] transform-gpu will-change-transform"
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -30, 25, 0],
          y: [0, 30, -25, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-20 -right-20 w-[70vw] max-w-[850px] h-[70vw] max-h-[850px] rounded-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.18)_0%,rgba(59,130,246,0.14)_45%,transparent_70%)] transform-gpu will-change-transform"
      />

      {/* Layer 2: Center Aurora Wave Glow */}
      <motion.div
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scaleY: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[1100px] h-[350px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.16)_0%,rgba(59,130,246,0.20)_40%,rgba(6,182,212,0.12)_70%,transparent_90%)] transform-gpu will-change-transform"
      />

      {/* Layer 3: Spotlight Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12)_0%,transparent_70%)] transform-gpu" />

      {/* Layer 4: Floating Particles Canvas (120 FPS optimized) */}
      <FloatingParticles />

      {/* Layer 5: Ultra-light Static Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Layer 6: Subtle Moving Light Rays */}
      <motion.div
        animate={{
          x: ['-15%', '15%', '-15%'],
          opacity: [0.1, 0.22, 0.1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(139,92,246,0.22),transparent_100%)] transform-gpu will-change-transform"
      />

      {/* Layer 7: Edge Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#050505_95%)] pointer-events-none" />
    </div>
  );
}
