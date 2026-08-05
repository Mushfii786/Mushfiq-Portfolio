import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  Home as HomeIcon,
  FolderGit2, 
  User, 
  Briefcase, 
  Mail
} from 'lucide-react';
import { siteConfig } from '../config/site';
import { Logo } from './Logo';

export function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  // Active section scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'contact'];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 280) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'projects', label: 'Works', href: '#projects' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-5 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <div className="relative flex items-center pointer-events-auto w-[92vw] max-w-2xl sm:w-auto">
          
          {/* Main Floating Glass Pill Bar - Prominent & Roomy */}
          <div className="flex items-center justify-between sm:justify-start w-full gap-2 sm:gap-3 bg-neutral-950/95 text-white backdrop-blur-2xl border border-neutral-800/90 p-2.5 sm:p-2.5 px-4 sm:px-5 rounded-full shadow-2xl shadow-black/80 transition-all">
            
            {/* Brand Logo - Mushfii */}
            <a
              href="#home"
              className="px-2.5 sm:px-3.5 py-1.5 font-extrabold text-sm sm:text-base tracking-tight text-white rounded-full hover:bg-neutral-800/90 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2.5 group cursor-pointer"
            >
              <Logo className="w-6 h-6 sm:w-7 sm:h-7 rounded-full transition-transform duration-300 group-hover:scale-110 shadow-md shadow-black/80" />
              <span className="group-hover:text-[#FF4D12] transition-colors">{siteConfig.initials}</span>
            </a>

            <div className="hidden md:block w-[1px] h-5 bg-neutral-800/90 mx-1" />

            {/* Desktop Direct Links Navigation */}
            <nav className="hidden md:flex items-center space-x-1.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`relative px-4.5 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-full hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-white font-bold'
                        : 'text-neutral-300 hover:text-white hover:bg-neutral-800/70'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavBg"
                        className="absolute inset-0 bg-[#FF4D12] rounded-full -z-10 shadow-lg shadow-[#FF4D12]/30"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2.5 text-neutral-300 hover:bg-neutral-800 hover:scale-110 active:scale-90 rounded-full transition-all cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5 text-[#FF4D12]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </motion.header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-22 z-40 p-5 rounded-3xl bg-neutral-950/95 border border-neutral-800 text-white backdrop-blur-3xl shadow-2xl md:hidden space-y-3"
          >
            <div className="flex justify-between items-center pb-2.5 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <Logo className="w-5 h-5 rounded-full" />
                <span className="text-xs font-mono text-[#FF4D12] font-bold uppercase tracking-wider">Navigation Menu</span>
              </div>
              <span className="text-xs font-mono text-neutral-500">{siteConfig.initials}</span>
            </div>

            <nav className="flex flex-col space-y-2">
              <a
                href="#home"
                onClick={() => setMobileOpen(false)}
                className="p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 text-xs sm:text-sm font-bold text-white flex items-center justify-between hover:border-[#FF4D12] hover:scale-[1.02] active:scale-95 transition-all"
              >
                <div className="flex items-center gap-3">
                  <HomeIcon className="w-4 h-4 text-[#FF4D12]" />
                  <span>Home</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-500" />
              </a>

              <a
                href="#about"
                onClick={() => setMobileOpen(false)}
                className="p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 text-xs sm:text-sm font-bold text-white flex items-center justify-between hover:border-[#FF4D12] hover:scale-[1.02] active:scale-95 transition-all"
              >
                <div className="flex items-center gap-3">
                  <User className="w-4 h-4 text-[#FF4D12]" />
                  <span>About Bio</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-500" />
              </a>

              <a
                href="#projects"
                onClick={() => setMobileOpen(false)}
                className="p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 text-xs sm:text-sm font-bold text-white flex items-center justify-between hover:border-[#FF4D12] hover:scale-[1.02] active:scale-95 transition-all"
              >
                <div className="flex items-center gap-3">
                  <FolderGit2 className="w-4 h-4 text-[#FF4D12]" />
                  <span>Selected Works & Showcase</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-500" />
              </a>

              <a
                href="#experience"
                onClick={() => setMobileOpen(false)}
                className="p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 text-xs sm:text-sm font-bold text-white flex items-center justify-between hover:border-[#FF4D12] hover:scale-[1.02] active:scale-95 transition-all"
              >
                <div className="flex items-center gap-3">
                  <Briefcase className="w-4 h-4 text-[#FF4D12]" />
                  <span>Experience & Skills</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-500" />
              </a>

              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="p-3.5 rounded-2xl bg-[#FF4D12] text-white text-xs sm:text-sm font-bold flex items-center justify-between shadow-lg shadow-[#FF4D12]/20 hover:scale-[1.02] active:scale-95 transition-all"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4" />
                  <span>Contact Direct</span>
                </div>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
