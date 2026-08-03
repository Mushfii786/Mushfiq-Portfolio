import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, FileText } from 'lucide-react';
import { siteConfig, timelineItems, techStack } from '../config/site';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const handleDownload = () => {
    // Generate clean markdown resume file download
    const content = `
# ${siteConfig.name}
${siteConfig.title} | ${siteConfig.location}
Email: ${siteConfig.email} | Instagram: ${siteConfig.handle}

## Professional Summary
${siteConfig.aboutBio}

## Key Skills & Tech Stack
${techStack.map(t => `- ${t.name} (${t.category})`).join('\n')}

## Experience & Education
${timelineItems.map(t => `### ${t.roleOrDegree} - ${t.organization} (${t.period})\n${t.description.map(d => `* ${d}`).join('\n')}`).join('\n\n')}
    `.trim();

    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `${siteConfig.name.replace(/\s+/g, '_')}_Resume_2026.md`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-950/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl max-h-[85vh] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-neutral-900 dark:text-white">
                    {siteConfig.name} — Curriculum Vitae
                  </h3>
                  <p className="text-xs text-neutral-500 font-mono">Verified 2026 Edition</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 rounded-full text-xs font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download CV
                </button>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-110 active:scale-90 transition-all duration-200 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Resume Content Body */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-8 text-neutral-800 dark:text-neutral-200 text-sm leading-relaxed">
              {/* Summary */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#FF4D12] mb-2 font-semibold">
                  Executive Summary
                </h4>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-base">
                  {siteConfig.aboutBio}
                </p>
              </div>

              {/* Roles */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#FF4D12] mb-3 font-semibold">
                  Core Specializations
                </h4>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.roles.map((r, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-neutral-800 dark:text-neutral-300 hover:scale-105 transition-transform duration-200 cursor-default"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              {/* Experience Highlights */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#FF4D12] mb-4 font-semibold">
                  Career Experience
                </h4>
                <div className="space-y-6">
                  {timelineItems.filter(t => t.type === 'experience').map((item) => (
                    <div key={item.id} className="border-l-2 border-neutral-200 dark:border-neutral-800 pl-4 space-y-1 hover:border-[#FF4D12] transition-colors">
                      <div className="flex justify-between items-start">
                        <h5 className="font-semibold text-neutral-900 dark:text-white text-base">
                          {item.roleOrDegree}
                        </h5>
                        <span className="text-xs font-mono text-neutral-500">{item.period}</span>
                      </div>
                      <p className="text-xs font-medium text-neutral-500">{item.organization} • {item.location}</p>
                      <ul className="mt-2 space-y-1 text-neutral-600 dark:text-neutral-400 list-disc list-inside text-xs">
                        {item.description.map((d, idx) => (
                          <li key={idx}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Stack */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#FF4D12] mb-3 font-semibold">
                  Tools & Technologies
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {techStack.map((tech) => (
                    <div
                      key={tech.id}
                      className="p-2.5 rounded-xl bg-neutral-100/70 dark:bg-neutral-800/50 border border-neutral-200/50 dark:border-neutral-700/50 text-xs font-mono flex justify-between items-center hover:scale-105 transition-transform duration-200 cursor-default"
                    >
                      <span>{tech.name}</span>
                      <span className="text-[10px] text-neutral-500">{tech.category}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
