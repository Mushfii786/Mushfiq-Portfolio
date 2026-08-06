import React from 'react';

export function GradientWaves() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-5] overflow-hidden select-none bg-[#050505]">
      {/* Background Base Deep Dark Canvas */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Top-Left Corner Glow: Deep Purple & Violet */}
      <div className="absolute top-[-15%] left-[-15%] w-[65vw] max-w-[900px] h-[65vw] max-h-[900px] rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.22)_0%,rgba(168,85,247,0.12)_40%,transparent_70%)] blur-[80px] transform-gpu animate-pulse duration-[10000ms]" />

      {/* Top-Right Corner Glow: Cyan & Electric Blue */}
      <div className="absolute top-[-15%] right-[-15%] w-[65vw] max-w-[900px] h-[65vw] max-h-[900px] rounded-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.20)_0%,rgba(59,130,246,0.12)_40%,transparent_70%)] blur-[90px] transform-gpu animate-pulse duration-[12000ms]" />

      {/* Bottom-Left Corner Glow: Indigo & Purple Mesh */}
      <div className="absolute bottom-[-15%] left-[-15%] w-[70vw] max-w-[950px] h-[70vw] max-h-[950px] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.20)_0%,rgba(139,92,246,0.10)_45%,transparent_70%)] blur-[100px] transform-gpu animate-pulse duration-[14000ms]" />

      {/* Bottom-Right Corner Glow: Cyan & Deep Blue Glow */}
      <div className="absolute bottom-[-15%] right-[-15%] w-[70vw] max-w-[950px] h-[70vw] max-h-[950px] rounded-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.18)_0%,rgba(37,99,235,0.12)_45%,transparent_70%)] blur-[100px] transform-gpu animate-pulse duration-[11000ms]" />

      {/* Center Core Ambient Illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[1200px] h-[60vh] max-h-[700px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.08)_0%,rgba(59,130,246,0.06)_40%,rgba(6,182,212,0.04)_70%,transparent_90%)] blur-[60px] transform-gpu" />

      {/* SVG Fluid Waves in Purple, Blue, Cyan */}
      <div className="absolute inset-0 opacity-30 mix-blend-screen">
        <svg
          className="w-full h-full min-w-[1200px] animate-wave-slow transform-gpu"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="cornerWave1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.7" />
            </linearGradient>
            <filter id="cornerGlow1" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="30" />
            </filter>
          </defs>
          <path
            d="M-100 200 C 200 100, 400 350, 700 180 C 1000 10, 1300 300, 1600 150 L 1600 850 L -100 850 Z"
            fill="url(#cornerWave1)"
            filter="url(#cornerGlow1)"
          />
        </svg>
      </div>

      <div className="absolute inset-0 opacity-20 mix-blend-overlay">
        <svg
          className="w-full h-full min-w-[1200px] animate-wave-medium transform-gpu"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="cornerWave2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
            </linearGradient>
            <filter id="cornerGlow2" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="40" />
            </filter>
          </defs>
          <path
            d="M-100 350 C 250 500, 550 150, 850 400 C 1150 650, 1350 200, 1650 320 L 1650 850 L -100 850 Z"
            fill="url(#cornerWave2)"
            filter="url(#cornerGlow2)"
          />
        </svg>
      </div>

      {/* Floating Sparkle Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-[10%] left-[15%] w-2 h-2 rounded-full bg-[#8B5CF6] shadow-[0_0_12px_#8B5CF6] animate-ping duration-10000" />
        <div className="absolute top-[35%] right-[12%] w-2.5 h-2.5 rounded-full bg-[#06B6D4] shadow-[0_0_15px_#06B6D4] animate-ping duration-12000" />
        <div className="absolute bottom-[20%] left-[18%] w-2 h-2 rounded-full bg-[#3B82F6] shadow-[0_0_12px_#3B82F6] animate-ping duration-8000" />
        <div className="absolute bottom-[15%] right-[25%] w-2 h-2 rounded-full bg-[#A855F7] shadow-[0_0_14px_#A855F7] animate-ping duration-9000" />
      </div>

      {/* Grain Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
}
