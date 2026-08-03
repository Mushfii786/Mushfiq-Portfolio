import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUp, Instagram, Github, Linkedin, Mail } from 'lucide-react';
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#FF4D12]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-10 relative z-10">
        
        {/* Animated Centered Brand Typography */}
        <div className="overflow-hidden select-none py-2">
          <a href="#home" className="inline-flex items-center justify-center tracking-tight font-extrabold text-6xl sm:text-8xl md:text-9xl uppercase text-white leading-none group hover:scale-[1.02] transition-transform duration-300">
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
                className="inline-block group-hover:text-[#FF4D12] transition-colors duration-300 font-mono"
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

        {/* Centered Social Badges */}
        <div className="flex flex-wrap justify-center items-center gap-3">
          <a
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-11 h-11 rounded-full bg-neutral-900 border-2 border-neutral-800 hover:border-[#FF4D12] focus:border-[#FF4D12] active:border-[#FF4D12] text-neutral-300 hover:text-white hover:bg-[#FF4D12]/15 hover:scale-110 active:scale-95 hover:shadow-[0_0_20px_rgba(255,77,18,0.6)] transition-all duration-200 cursor-pointer relative flex items-center justify-center group"
          >
            <Instagram className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#FF4D12] opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm shadow-[#FF4D12]" />
          </a>
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-11 h-11 rounded-full bg-neutral-900 border-2 border-neutral-800 hover:border-[#FF4D12] focus:border-[#FF4D12] active:border-[#FF4D12] text-neutral-300 hover:text-white hover:bg-[#FF4D12]/15 hover:scale-110 active:scale-95 hover:shadow-[0_0_20px_rgba(255,77,18,0.6)] transition-all duration-200 cursor-pointer relative flex items-center justify-center group"
          >
            <Github className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#FF4D12] opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm shadow-[#FF4D12]" />
          </a>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-11 h-11 rounded-full bg-neutral-900 border-2 border-neutral-800 hover:border-[#FF4D12] focus:border-[#FF4D12] active:border-[#FF4D12] text-neutral-300 hover:text-white hover:bg-[#FF4D12]/15 hover:scale-110 active:scale-95 hover:shadow-[0_0_20px_rgba(255,77,18,0.6)] transition-all duration-200 cursor-pointer relative flex items-center justify-center group"
          >
            <Linkedin className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#FF4D12] opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm shadow-[#FF4D12]" />
          </a>
          <a
            href={siteConfig.socials.pinterest}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pinterest"
            className="w-11 h-11 rounded-full bg-neutral-900 border-2 border-neutral-800 hover:border-[#FF4D12] focus:border-[#FF4D12] active:border-[#FF4D12] text-neutral-300 hover:text-white hover:bg-[#FF4D12]/15 hover:scale-110 active:scale-95 hover:shadow-[0_0_20px_rgba(255,77,18,0.6)] transition-all duration-200 cursor-pointer relative flex items-center justify-center group"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.224 7.462-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
            </svg>
            <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#FF4D12] opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm shadow-[#FF4D12]" />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="w-11 h-11 rounded-full bg-neutral-900 border-2 border-neutral-800 hover:border-[#FF4D12] focus:border-[#FF4D12] active:border-[#FF4D12] text-neutral-300 hover:text-white hover:bg-[#FF4D12]/15 hover:scale-110 active:scale-95 hover:shadow-[0_0_20px_rgba(255,77,18,0.6)] transition-all duration-200 cursor-pointer relative flex items-center justify-center group"
          >
            <Mail className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#FF4D12] opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm shadow-[#FF4D12]" />
          </a>
        </div>

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
            className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-[#FF4D12] hover:scale-105 active:scale-95 transition-all cursor-pointer group"
          >
            <span>Back to top</span>
            <div className="p-1.5 rounded-full bg-neutral-900 border border-neutral-800 group-hover:border-[#FF4D12] group-hover:bg-[#FF4D12] group-hover:text-white transition-all">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
