import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../config/site';
import { Sparkles, ArrowUpRight, Globe, Instagram, Github, Linkedin, Mail, Twitter } from 'lucide-react';

function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-4.812 3-3.104 0-5.414-2.122-5.414-5.492 0-3.376 2.222-5.508 5.281-5.508 3.324 0 4.922 2.285 4.707 5.25h-7.668c.086 1.453 1.133 2.375 2.594 2.375 1.289 0 2.117-.586 2.453-1.625h2.859zm-4.984-5.805c-1.121 0-1.895.727-2.023 1.805h3.984c-.066-1.078-.816-1.805-1.961-1.805zM6.88 12.012c1.387-.41 2.305-1.422 2.305-2.906 0-2.348-1.777-3.606-4.57-3.606H0v12.999h5.121c2.812 0 4.883-1.375 4.883-3.832 0-1.574-.988-2.336-3.124-2.655zm-3.68-2.223h1.305c1.031 0 1.621.43 1.621 1.211 0 .809-.59 1.238-1.621 1.238H3.2V9.789zm1.508 6.211H3.2v-2.738h1.508c1.23 0 1.887.488 1.887 1.367 0 .898-.657 1.371-1.887 1.371z" />
    </svg>
  );
}

function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345c-.091.379-.293 1.194-.333 1.362-.053.225-.173.271-.4.163-1.493-.695-2.427-2.877-2.427-4.631 0-3.774 2.742-7.237 7.901-7.237 4.15 0 7.375 2.957 7.375 6.91 0 4.123-2.599 7.441-6.206 7.441-1.212 0-2.352-.63-2.742-1.374l-.747 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
    </svg>
  );
}

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

export function About() {
  const socialList = [
    { name: 'Instagram', url: siteConfig.socials.instagram, icon: Instagram },
    { name: 'WhatsApp', url: siteConfig.socials.whatsapp, icon: WhatsappIcon },
    { name: 'LinkedIn', url: siteConfig.socials.linkedin, icon: Linkedin },
    { name: 'GitHub', url: siteConfig.socials.github, icon: Github },
    { name: 'Pinterest', url: siteConfig.socials.pinterest, icon: PinterestIcon },
  ];
  const experiences = [
    {
      period: "2023 - Present",
      title: "Senior Designer & Developer",
      company: "Studio Minimal / Freelance"
    },
    {
      period: "2021 - 2023",
      title: "UI/UX Designer & Media Specialist",
      company: "Apex Digital Media"
    },
    {
      period: "2019 - 2021",
      title: "Visual Graphic Designer",
      company: "Creative Pulse Studio"
    }
  ];

  const education = [
    {
      period: "2018 - 2021",
      title: "Bachelor Degree in Computer Applications",
      company: "University of Calicut"
    },
    {
      period: "2021 - 2022",
      title: "Master Certification in UI/UX & Media",
      company: "Digital Media Academy"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative select-none">
      
      {/* Background Subtle Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/5 dark:bg-blue-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Top Header Title: ❇ SELF-SUMMARY ❇ */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10 flex items-center justify-center gap-3"
      >
        <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-400 dark:text-neutral-300 animate-pulse" />
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-wider text-neutral-900 dark:text-white uppercase font-mono">
          SELF-SUMMARY
        </h2>
        <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-400 dark:text-neutral-300 animate-pulse" />
      </motion.div>

      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        
        {/* ROW 1: LEFT CARD - Profile Avatar (Col 4) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-5 lg:col-span-4 bg-neutral-900/90 border border-neutral-800/80 rounded-[2rem] p-4 flex items-center justify-center shadow-xl backdrop-blur-md hover:border-neutral-700 transition-all group"
        >
          <div className="w-full aspect-square rounded-[1.5rem] overflow-hidden bg-gradient-to-tr from-cyan-600 via-blue-600 to-indigo-500 p-1 relative flex items-center justify-center shadow-inner">
            <div className="w-full h-full rounded-[1.3rem] overflow-hidden bg-neutral-950 relative">
              <img
                src={siteConfig.avatarUrl}
                alt={siteConfig.name}
                className="w-full h-full object-cover object-top filter saturate-[1.15] brightness-[1.02] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            </div>
          </div>
        </motion.div>

        {/* ROW 1: RIGHT CARD - Name & Bio (Col 8) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-7 lg:col-span-8 bg-neutral-900/90 border border-neutral-800/80 rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between shadow-xl backdrop-blur-md relative hover:border-neutral-700 transition-all group"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-neutral-400">
              <Sparkles className="w-5 h-5 text-neutral-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>

            <div className="space-y-2 pt-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {siteConfig.name}
              </h3>
              <p className="text-xs font-mono uppercase tracking-widest text-[#2563EB] font-semibold">
                {siteConfig.title}
              </p>
            </div>

            <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed pt-2">
              {siteConfig.aboutIntro} {siteConfig.aboutBio}
            </p>
          </div>

          <div className="pt-6 flex items-center justify-between text-xs text-neutral-500 font-mono">
            <span>{siteConfig.location}</span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Available for work
            </span>
          </div>
        </motion.div>

        {/* ROW 2: LEFT CARD - Experience (Col 6) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="md:col-span-6 bg-neutral-900/90 border border-neutral-800/80 rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between shadow-xl backdrop-blur-md hover:border-neutral-700 transition-all"
        >
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold mb-6">
              EXPERIENCE
            </h4>

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="text-xs font-mono text-neutral-500">{exp.period}</span>
                  <h5 className="text-base font-bold text-white leading-snug">{exp.title}</h5>
                  <p className="text-xs text-neutral-400 font-light">{exp.company}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ROW 2: RIGHT CARD - Education (Col 6) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-6 bg-neutral-900/90 border border-neutral-800/80 rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between shadow-xl backdrop-blur-md hover:border-neutral-700 transition-all"
        >
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold mb-6">
              EDUCATION
            </h4>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="text-xs font-mono text-neutral-500">{edu.period}</span>
                  <h5 className="text-base font-bold text-white leading-snug">{edu.title}</h5>
                  <p className="text-xs text-neutral-400 font-light">{edu.company}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ROW 3: CARD 1 - Profiles / Socials (Col 3 or 4) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="md:col-span-4 lg:col-span-3 bg-neutral-900/90 border border-neutral-800/80 rounded-[2rem] p-6 flex flex-col justify-between shadow-xl backdrop-blur-md hover:border-neutral-700 transition-all group min-h-[200px]"
        >
          {/* Social Icons row */}
          <div className="flex flex-wrap items-center gap-2.5 py-1">
            {socialList.map((social) => {
              const IconComp = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-neutral-800/90 border border-neutral-700/60 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-[#2563EB] hover:border-[#2563EB] hover:scale-110 active:scale-95 transition-all shadow-sm"
                  title={social.name}
                >
                  <IconComp className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          {/* Footer Meta */}
          <div className="flex items-center justify-between pt-6">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block">
                STAY WITH ME
              </span>
              <span className="text-base font-bold text-white">Profiles</span>
            </div>
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700/60 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-[#2563EB] group-hover:border-[#2563EB] transition-all"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* ROW 3: CARD 2 - Let's work together (Col 6) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:col-span-8 lg:col-span-6 bg-neutral-900/90 border border-neutral-800/80 rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between shadow-xl backdrop-blur-md hover:border-neutral-700 transition-all group min-h-[200px]"
        >
          <div className="space-y-1">
            <Sparkles className="w-5 h-5 text-neutral-500 group-hover:text-[#2563EB] transition-colors duration-300" />
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight pt-2">
              Let's <br />
              work <span className="text-[#2563EB] font-sans italic">together.</span>
            </h3>
          </div>

          <div className="flex justify-end pt-4">
            <a
              href="#contact"
              className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700/60 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:scale-110 transition-all shadow-lg"
            >
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* ROW 3: CARD 3 - Credentials / Signature (Col 3) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="md:col-span-12 lg:col-span-3 bg-neutral-900/90 border border-neutral-800/80 rounded-[2rem] p-6 flex flex-col justify-between shadow-xl backdrop-blur-md hover:border-neutral-700 transition-all group min-h-[200px]"
        >
          {/* Signature SVG Illustration */}
          <div className="flex items-center justify-center py-2 text-neutral-300 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
            <svg className="w-36 h-12" viewBox="0 0 200 60" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {/* Handwritten signature path for Mushfii */}
              <path d="M 15 45 C 20 15, 30 10, 35 30 C 40 45, 45 40, 50 25 C 55 15, 60 35, 65 35 C 70 35, 75 20, 80 35 C 85 35, 90 22, 95 38 M 100 20 L 100 42 M 108 20 L 108 42 M 115 25 Q 130 10 145 25 Q 160 40 175 25 T 190 35" />
              <circle cx="100" cy="14" r="2" fill="currentColor" />
              <circle cx="108" cy="14" r="2" fill="currentColor" />
            </svg>
          </div>

          {/* Footer Meta */}
          <div className="flex items-center justify-between pt-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block">
                MORE ABOUT ME
              </span>
              <span className="text-base font-bold text-white">Credentials</span>
            </div>
            <a
              href="#projects"
              className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700/60 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-[#2563EB] group-hover:border-[#2563EB] transition-all"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

      </div>

    </section>
  );
}

