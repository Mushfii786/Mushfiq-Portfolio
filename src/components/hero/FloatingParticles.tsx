import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  alpha: number;
  targetAlpha: number;
  r: number;
  g: number;
  b: number;
  pulseSpeed: number;
}

const COLOR_PALETTE = [
  { r: 139, g: 92, b: 246 }, // Purple #8B5CF6
  { r: 59, g: 130, b: 246 },  // Blue #3B82F6
  { r: 6, g: 182, b: 212 },   // Cyan #06B6D4
  { r: 255, g: 255, b: 255 }  // White
];

export function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    
    let rect = canvas.parentElement?.getBoundingClientRect() || { width: window.innerWidth, height: window.innerHeight };
    let width = rect.width;
    let height = rect.height;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    let mouseX = -1000;
    let mouseY = -1000;

    // Optimized particle count for 120 FPS silky smooth performance
    const particleCount = Math.min(Math.floor((width * height) / 22000), 50);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const color = COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.8,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -(Math.random() * 0.35 + 0.1),
        alpha: Math.random() * 0.5 + 0.2,
        targetAlpha: Math.random() * 0.7 + 0.2,
        r: color.r,
        g: color.g,
        b: color.b,
        pulseSpeed: Math.random() * 0.012 + 0.004,
      });
    }

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      const r = canvas.parentElement.getBoundingClientRect();
      width = r.width;
      height = r.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const canvasRect = canvas.getBoundingClientRect();
      mouseX = e.clientX - canvasRect.left;
      mouseY = e.clientY - canvasRect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    let lastTime = performance.now();

    const render = (now: number) => {
      const delta = Math.min((now - lastTime) / 1000, 0.033); // Clamp delta to avoid leaps
      lastTime = now;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move particle
        p.x += p.vx * (delta * 120);
        p.y += p.vy * (delta * 120);

        // Wrap around screen edges
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Smooth mouse avoidance
        if (mouseX > 0 && mouseY > 0) {
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const distSq = dx * dx + dy * dy;
          const maxDist = 130;
          const maxDistSq = maxDist * maxDist;

          if (distSq < maxDistSq && distSq > 0) {
            const dist = Math.sqrt(distSq);
            const force = (maxDist - dist) / maxDist;
            p.x -= (dx / dist) * force * 2.5 * (delta * 120);
            p.y -= (dy / dist) * force * 2.5 * (delta * 120);
          }
        }

        // Pulse opacity smoothly
        p.alpha += (p.targetAlpha - p.alpha) * p.pulseSpeed * (delta * 120);
        if (Math.abs(p.targetAlpha - p.alpha) < 0.02) {
          p.targetAlpha = Math.random() * 0.75 + 0.15;
        }

        // Fast GPU-friendly direct drawing without expensive canvas shadowBlur
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.r}, ${p.g}, ${p.b}, ${p.alpha})`;
        ctx.fill();

        // Subtle outer aura ring for glow effect without shadowBlur overhead
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.r}, ${p.g}, ${p.b}, ${p.alpha * 0.18})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10 transform-gpu"
    />
  );
}
