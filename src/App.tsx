import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { ShapeGrid } from './components/ShapeGrid';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Videography } from './components/Videography';
import { About } from './components/About';
import { Timeline } from './components/Timeline';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize Lenis smooth scroll engine and force dark mode
  useEffect(() => {
    document.documentElement.classList.add('dark');

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-black font-sans antialiased overflow-x-hidden">
      
      {/* Fullscreen Preloader */}
      <Preloader onComplete={() => setIsLoaded(true)} />

      {/* Smooth Magnetic Cursor */}
      <CustomCursor />

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Interactive Apple/Linear/Vercel Style Grid Backdrop */}
      <ShapeGrid
        direction="diagonal"
        speed={0.4}
        squareSize={42}
        shape="square"
        hoverTrailAmount={8}
      />

      {/* Main Portfolio Content */}
      <div className={`transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navigation />

        <main>
          <Hero />
          <About />
          <div id="projects">
            <Projects />
            <Videography />
          </div>
          <Timeline />
          <Contact />
        </main>

        <Footer />
      </div>

    </div>
  );
}

export default App;
