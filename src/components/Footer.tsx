import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { siteConfig } from '../config/site';

export function Footer() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit' }));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nameLetters = "MUSHFII".split("");

  return (
    <footer className="relative pt-20 pb-12 px-6 border-t border-neutral-800/80 bg-neutral-950 text-white overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#2563EB]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-10 relative z-10">
        
        {/* Animated Centered Brand Typography */}
        <div className="overflow-hidden select-none py-2 w-full flex justify-center">
          <a href="#home" className="inline-flex items-center justify-center tracking-tight font-extrabold text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase text-white leading-none group hover:scale-[1.02] transition-transform duration-300 max-w-full whitespace-nowrap">
            {nameLetters.map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.04,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="inline-block group-hover:text-[#2563EB] transition-colors duration-300 font-mono"
              >
                {char}
              </motion.span>
            ))}
          </a>
        </div>

        {/* Minimal Tagline / Bio */}
        <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-md mx-auto leading-relaxed">
          Creative Designer & Frontend Developer crafting digital products and visual stories.
        </p>

        {/* Centered Navigation Links with option scale hover */}
        <nav className="flex flex-wrap justify-center items-center gap-6 text-xs font-mono">
          <a href="#home" className="text-neutral-400 hover:text-white hover:scale-110 active:scale-95 transition-all duration-200">Home</a>
          <span className="text-neutral-800">•</span>
          <a href="#projects" className="text-neutral-400 hover:text-white hover:scale-110 active:scale-95 transition-all duration-200">Projects</a>
          <span className="text-neutral-800">•</span>
          <a href="#about" className="text-neutral-400 hover:text-white hover:scale-110 active:scale-95 transition-all duration-200">About</a>
          <span className="text-neutral-800">•</span>
          <a href="#experience" className="text-neutral-400 hover:text-white hover:scale-110 active:scale-95 transition-all duration-200">Experience</a>
          <span className="text-neutral-800">•</span>
          <a href="#contact" className="text-neutral-400 hover:text-white hover:scale-110 active:scale-95 transition-all duration-200">Contact</a>
        </nav>

        {/* Divider */}
        <div className="w-full h-[1px] bg-neutral-800/80 my-4" />

        {/* Centered Bottom Row & Back-to-Top Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full text-xs font-mono text-neutral-500 gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Calicut, IN • {time || '12:00 PM'}</span>
          </div>

          <div>
            © {new Date().getFullYear()} MUSHFII. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-[#2563EB] hover:scale-105 active:scale-95 transition-all cursor-pointer group"
          >
            <span>Back to top</span>
            <div className="p-1.5 rounded-full bg-neutral-900 border border-neutral-800 group-hover:border-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
