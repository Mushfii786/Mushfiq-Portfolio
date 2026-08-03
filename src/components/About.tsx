import React from 'react';
import { motion } from 'motion/react';
import { siteConfig, polaroids } from '../config/site';
import { Sparkles } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-28 px-6 max-w-7xl mx-auto relative">
      
      {/* Intro Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF4D12] font-semibold hover:scale-105 transition-transform duration-200 cursor-default"
          >
            <Sparkles className="w-3.5 h-3.5" /> About & Creative Philosophy
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-medium tracking-tight text-neutral-900 dark:text-white leading-tight"
          >
            Design with intention. <br />
            Engineering with speed.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-600 dark:text-neutral-300 font-light leading-relaxed"
          >
            {siteConfig.aboutIntro}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-neutral-500 dark:text-neutral-400 font-light leading-relaxed"
          >
            {siteConfig.aboutBio}
          </motion.p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-neutral-200/80 dark:border-neutral-800/80">
            {siteConfig.stats.map((stat, idx) => (
              <div key={idx} className="hover:scale-105 transition-transform duration-200 cursor-default">
                <p className="text-3xl sm:text-4xl font-mono font-bold text-neutral-900 dark:text-white">
                  {stat.value}{stat.suffix}
                </p>
                <p className="text-xs text-neutral-500 font-medium mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Polaroid Photo Strip */}
        <div className="lg:col-span-5 relative flex justify-center py-8">
          <div className="grid grid-cols-2 gap-4 max-w-md">
            {polaroids.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, rotate: item.rotation }}
                whileInView={{ opacity: 1, rotate: item.rotation }}
                whileHover={{ rotate: 0, scale: 1.08, zIndex: 20 }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bg-white text-neutral-900 p-3 pt-3 pb-5 rounded-md shadow-2xl shadow-neutral-950/10 border border-neutral-200 cursor-pointer relative group"
              >
                {/* Clear Tape Accent */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-5 bg-white/40 border border-white/60 shadow-sm backdrop-blur-[2px] rotate-[-2deg] z-10" />

                <div className="aspect-[4/5] overflow-hidden rounded bg-neutral-100 mb-3">
                  <img
                    src={item.imageUrl}
                    alt={item.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <p className="font-serif text-xs text-neutral-700 text-center tracking-tight font-medium italic">
                  {item.caption}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
