import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function CursorGlow() {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Fast, spring physics tuned for 120 FPS high refresh monitors
  const springConfig = { damping: 30, stiffness: 300, mass: 0.3 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on coarse touch pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden hidden md:block">
      <motion.div
        className="absolute top-0 left-0 w-[380px] h-[380px] rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08)_0%,rgba(59,130,246,0.04)_45%,transparent_70%)] transform-gpu will-change-transform"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </div>
  );
}
