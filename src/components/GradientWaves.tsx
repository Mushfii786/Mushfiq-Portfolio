import React from 'react';

export function GradientWaves() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-5] overflow-hidden select-none">
      {/* Background base mesh glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-[#030712] to-black dark:from-[#030712] dark:via-[#090d16] dark:to-black opacity-95 transition-colors duration-700" />

      {/* Radial Blue & White Ambient Light Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-br from-[#2563EB]/20 via-[#3B82F6]/10 to-transparent blur-[130px] animate-pulse duration-[8000ms]" />
      <div className="absolute top-[20%] right-[-15%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-bl from-white/10 via-[#2563EB]/15 to-transparent blur-[140px] animate-pulse duration-[10000ms]" />
      <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[50vw] rounded-full bg-gradient-to-tr from-[#1D4ED8]/20 via-[#60A5FA]/10 to-white/5 blur-[150px] animate-pulse duration-[9000ms]" />

      {/* SVG Animated Gradient Waves Layer 1 (Primary Electric Blue & White Gradient) */}
      <div className="absolute inset-0 opacity-40 dark:opacity-30 mix-blend-screen">
        <svg
          className="w-full h-full min-w-[1200px] animate-wave-slow"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
              <stop offset="40%" stopColor="#60A5FA" stopOpacity="0.6" />
              <stop offset="80%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.7" />
            </linearGradient>
            <filter id="glow1" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="25" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <path
            d="M-100 250 C 150 150, 350 400, 650 220 C 950 40, 1250 350, 1550 180 L 1550 850 L -100 850 Z"
            fill="url(#waveGrad1)"
            filter="url(#glow1)"
          />
        </svg>
      </div>

      {/* SVG Animated Gradient Waves Layer 2 (Luminous White & Blue Fluid Curve) */}
      <div className="absolute inset-0 opacity-30 dark:opacity-25 mix-blend-overlay">
        <svg
          className="w-full h-full min-w-[1200px] animate-wave-medium"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#3B82F6" stopOpacity="0.7" />
              <stop offset="70%" stopColor="#0066FF" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.8" />
            </linearGradient>
            <filter id="glow2" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="35" />
            </filter>
          </defs>
          <path
            d="M-100 400 C 200 550, 500 200, 800 450 C 1100 700, 1300 250, 1600 380 L 1600 850 L -100 850 Z"
            fill="url(#waveGrad2)"
            filter="url(#glow2)"
          />
        </svg>
      </div>

      {/* SVG Animated Gradient Waves Layer 3 (Deep Cobalt Parallax Wave) */}
      <div className="absolute inset-0 opacity-25 dark:opacity-20 mix-blend-screen">
        <svg
          className="w-full h-full min-w-[1200px] animate-wave-fast"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGrad3" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0.9" />
            </linearGradient>
            <filter id="glow3" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="40" />
            </filter>
          </defs>
          <path
            d="M-100 120 C 300 320, 600 80, 900 280 C 1200 480, 1400 120, 1600 220 L 1600 850 L -100 850 Z"
            fill="url(#waveGrad3)"
            filter="url(#glow3)"
          />
        </svg>
      </div>

      {/* Floating Luminous Blue-White Light Particles / Sparks */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-[15%] left-[25%] w-2 h-2 rounded-full bg-white shadow-[0_0_12px_#FFFFFF] animate-ping duration-10000" />
        <div className="absolute top-[45%] right-[20%] w-3 h-3 rounded-full bg-[#60A5FA] shadow-[0_0_15px_#2563EB] animate-ping duration-12000" />
        <div className="absolute top-[70%] left-[60%] w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_14px_#FFFFFF] animate-ping duration-8000" />
        <div className="absolute top-[30%] left-[80%] w-1.5 h-1.5 rounded-full bg-[#3B82F6] shadow-[0_0_10px_#3B82F6] animate-ping duration-9000" />
      </div>

      {/* Premium Subtle Grain Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
}
