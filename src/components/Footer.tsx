import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUp, Instagram, Github, Linkedin, Mail, MessageCircle, Sparkles } from 'lucide-react';
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

  const socialLinks = [
    { name: "Instagram", url: siteConfig.socials.instagram, icon: Instagram },
    { name: "GitHub", url: siteConfig.socials.github, icon: Github },
    { name: "LinkedIn", url: siteConfig.socials.linkedin, icon: Linkedin },
    { name: "WhatsApp", url: siteConfig.socials.whatsapp, icon: MessageCircle },
    { name: "Email", url: siteConfig.socials.email, icon: Mail },
  ];

  return (
    <footer className="relative pt-24 pb-12 px-6 bg-[#050505] text-white overflow-hidden border-t border-white/10 select-none">
      
      {/* Top Gradient Shimmer Beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6] via-[#3B82F6] to-transparent animate-pulse duration-[4000ms]" />

      {/* Multi-layered Premium Ambient Background Halos */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15)_0%,rgba(59,130,246,0.08)_45%,transparent_70%)] blur-[120px] pointer-events-none transform-gpu" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[200px] bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.12)_0%,transparent_70%)] blur-[100px] pointer-events-none transform-gpu" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.12)_0%,transparent_70%)] blur-[100px] pointer-events-none transform-gpu" />

      {/* Tactile Grain Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-10 relative z-10">
        
        {/* Availability Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-white/10 backdrop-blur-xl shadow-[0_0_20px_rgba(139,92,246,0.15)] group hover:border-purple-500/40 transition-all duration-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-[11px] font-mono text-neutral-300 tracking-wider uppercase">
            Available for Freelance & Roles
          </span>
          <Sparkles className="w-3.5 h-3.5 text-purple-400 group-hover:rotate-12 transition-transform duration-300" />
        </motion.div>

        {/* Animated Brand Typography with Gradient Wave Hover */}
        <div className="overflow-hidden select-none py-1 w-full flex justify-center">
          <a
            href="#home"
            className="inline-flex items-center justify-center tracking-tight font-extrabold text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase text-white leading-none group transition-transform duration-300 max-w-full whitespace-nowrap"
          >
            {nameLetters.map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: 90, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.04,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="inline-block font-mono transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#8B5CF6] group-hover:via-[#3B82F6] group-hover:to-[#06B6D4] hover:-translate-y-2 hover:scale-110"
              >
                {char}
              </motion.span>
            ))}
          </a>
        </div>

        {/* Minimal Tagline / Bio */}
        <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-lg mx-auto leading-relaxed">
          Creative Designer & Frontend Developer crafting digital products, brand systems, and cinematic visual stories.
        </p>

        {/* Curved Glassmorphic Navigation Pill Bar */}
        <motion.nav
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 p-1.5 rounded-full bg-neutral-900/80 border border-white/10 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] ring-1 ring-white/5"
        >
          <a
            href="#home"
            className="px-4 py-2 rounded-full text-xs font-mono text-neutral-300 hover:text-white hover:bg-white/10 active:scale-95 transition-all duration-200"
          >
            Home
          </a>
          <span className="text-neutral-700 font-mono">•</span>
          <a
            href="#about"
            className="px-4 py-2 rounded-full text-xs font-mono text-neutral-300 hover:text-white hover:bg-white/10 active:scale-95 transition-all duration-200"
          >
            About
          </a>
          <span className="text-neutral-700 font-mono">•</span>
          <a
            href="#projects"
            className="px-4 py-2 rounded-full text-xs font-mono text-neutral-300 hover:text-white hover:bg-white/10 active:scale-95 transition-all duration-200"
          >
            Projects
          </a>
          <span className="text-neutral-700 font-mono">•</span>
          <a
            href="#experience"
            className="px-4 py-2 rounded-full text-xs font-mono text-neutral-300 hover:text-white hover:bg-white/10 active:scale-95 transition-all duration-200"
          >
            Experience
          </a>
          <span className="text-neutral-700 font-mono">•</span>
          <a
            href="#contact"
            className="px-4 py-2 rounded-full text-xs font-mono text-neutral-300 hover:text-white hover:bg-white/10 active:scale-95 transition-all duration-200"
          >
            Contact
          </a>
        </motion.nav>

        {/* Social Network Icon Buttons */}
        <div className="flex items-center gap-3 pt-2">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-neutral-900/90 border border-white/10 text-neutral-400 hover:text-white hover:border-purple-500/50 hover:bg-neutral-800 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300 cursor-pointer"
                title={social.name}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            );
          })}
        </div>

        {/* Divider Line with Shimmer Node */}
        <div className="w-full relative flex items-center justify-center my-4">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <div className="absolute w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#8B5CF6]" />
        </div>

        {/* Bottom Row: Location Badge, Copyright & Premium Back to Top Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full text-xs font-mono text-neutral-400 gap-4">
          
          {/* Location & Live Clock Badge */}
          <div className="px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-white/10 backdrop-blur-md flex items-center gap-2 text-neutral-300 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Calicut, IN • {time || '12:00 PM'}</span>
          </div>

          {/* Copyright Notice */}
          <div className="text-neutral-500 text-[11px] sm:text-xs">
            © {new Date().getFullYear()} <span className="text-neutral-300 font-semibold">{siteConfig.name}</span>. Crafted with precision.
          </div>

          {/* Premium Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900/90 border border-white/10 text-xs font-mono text-neutral-300 hover:text-white hover:border-purple-500/50 hover:bg-neutral-800 transition-all duration-300 cursor-pointer shadow-lg overflow-hidden"
          >
            {/* Shimmer Sweep effect */}
            <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
            <span>Back to top</span>
            <div className="p-1 rounded-full bg-white/10 group-hover:bg-[#8B5CF6] group-hover:text-white transition-all duration-300">
              <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </div>
          </motion.button>

        </div>

      </div>
    </footer>
  );
}

