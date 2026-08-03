import React, { useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { Mail, Phone, MapPin, Send, Instagram, Github, Linkedin, MessageSquare, Globe, Check } from 'lucide-react';
import { siteConfig } from '../config/site';

export function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) return;

    setFormSubmitted(true);
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF4D12', '#10B981', '#3B82F6', '#F59E0B']
      });
    } catch (e) {}
  };

  return (
    <section id="contact" className="py-28 px-6 max-w-7xl mx-auto relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Heading, Direct Info Cards & Networks */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Eyebrow & Headline */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF4D12] font-semibold"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF4D12] animate-pulse" />
              <span>START A CONVERSATION</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.08]"
            >
              Let's Build <br />
              Something <br />
              <span className="text-[#FF4D12]">Amazing.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed max-w-md"
            >
              Have a new venture, product redesign, or Framer motion concept in mind? Fill out the form or reach out directly.
            </motion.p>
          </div>

          {/* Direct Stacked Cards */}
          <div className="space-y-3.5">
            
            {/* Email Card */}
            <motion.a
              href={`mailto:${siteConfig.email}`}
              whileHover={{ x: 6 }}
              className="p-5 rounded-2xl bg-neutral-900/90 dark:bg-neutral-900/90 border border-neutral-800 text-white flex items-center gap-4 transition-all shadow-lg group cursor-pointer"
            >
              <div className="p-3 rounded-xl bg-neutral-800/80 text-[#FF4D12] group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-0.5">
                  DIRECT EMAIL
                </p>
                <p className="text-sm font-mono font-bold text-white group-hover:text-[#FF4D12] transition-colors">
                  {siteConfig.email}
                </p>
              </div>
            </motion.a>

            {/* Direct Line / Phone Card */}
            <motion.a
              href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 6 }}
              className="p-5 rounded-2xl bg-neutral-900/90 dark:bg-neutral-900/90 border border-neutral-800 text-white flex items-center gap-4 transition-all shadow-lg group cursor-pointer"
            >
              <div className="p-3 rounded-xl bg-neutral-800/80 text-[#FF4D12] group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-0.5">
                  DIRECT LINE
                </p>
                <p className="text-sm font-mono font-bold text-white group-hover:text-[#FF4D12] transition-colors">
                  {siteConfig.whatsapp}
                </p>
              </div>
            </motion.a>

            {/* Location Card */}
            <motion.div
              whileHover={{ x: 6 }}
              className="p-5 rounded-2xl bg-neutral-900/90 dark:bg-neutral-900/90 border border-neutral-800 text-white flex items-center gap-4 transition-all shadow-lg group"
            >
              <div className="p-3 rounded-xl bg-neutral-800/80 text-[#FF4D12] group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-0.5">
                  LOCATION
                </p>
                <p className="text-sm font-mono font-bold text-white">
                  {siteConfig.location}
                </p>
              </div>
            </motion.div>

          </div>

          {/* Social Networks Row */}
          <div className="pt-2">
            <p className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 font-medium mb-3">
              CONNECT ACROSS NETWORKS
            </p>

            <div className="flex items-center gap-3 flex-wrap">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-neutral-100 dark:bg-neutral-900/90 border-2 border-neutral-200/80 dark:border-neutral-800/80 hover:border-[#FF4D12] dark:hover:border-[#FF4D12] focus:border-[#FF4D12] active:border-[#FF4D12] flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:text-white hover:bg-[#FF4D12]/15 hover:scale-110 active:scale-95 hover:shadow-[0_0_20px_rgba(255,77,18,0.6)] transition-all duration-200 cursor-pointer relative group"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
                <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#FF4D12] opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm shadow-[#FF4D12]" />
              </a>

              <a
                href={siteConfig.socials.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-neutral-100 dark:bg-neutral-900/90 border-2 border-neutral-200/80 dark:border-neutral-800/80 hover:border-[#FF4D12] dark:hover:border-[#FF4D12] focus:border-[#FF4D12] active:border-[#FF4D12] flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:text-white hover:bg-[#FF4D12]/15 hover:scale-110 active:scale-95 hover:shadow-[0_0_20px_rgba(255,77,18,0.6)] transition-all duration-200 cursor-pointer relative group"
                title="Pinterest"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.224 7.462-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
                <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#FF4D12] opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm shadow-[#FF4D12]" />
              </a>

              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-neutral-100 dark:bg-neutral-900/90 border-2 border-neutral-200/80 dark:border-neutral-800/80 hover:border-[#FF4D12] dark:hover:border-[#FF4D12] focus:border-[#FF4D12] active:border-[#FF4D12] flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:text-white hover:bg-[#FF4D12]/15 hover:scale-110 active:scale-95 hover:shadow-[0_0_20px_rgba(255,77,18,0.6)] transition-all duration-200 cursor-pointer relative group"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
                <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#FF4D12] opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm shadow-[#FF4D12]" />
              </a>

              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-neutral-100 dark:bg-neutral-900/90 border-2 border-neutral-200/80 dark:border-neutral-800/80 hover:border-[#FF4D12] dark:hover:border-[#FF4D12] focus:border-[#FF4D12] active:border-[#FF4D12] flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:text-white hover:bg-[#FF4D12]/15 hover:scale-110 active:scale-95 hover:shadow-[0_0_20px_rgba(255,77,18,0.6)] transition-all duration-200 cursor-pointer relative group"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
                <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#FF4D12] opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm shadow-[#FF4D12]" />
              </a>

              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-neutral-100 dark:bg-neutral-900/90 border-2 border-neutral-200/80 dark:border-neutral-800/80 hover:border-[#FF4D12] dark:hover:border-[#FF4D12] focus:border-[#FF4D12] active:border-[#FF4D12] flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:text-white hover:bg-[#FF4D12]/15 hover:scale-110 active:scale-95 hover:shadow-[0_0_20px_rgba(255,77,18,0.6)] transition-all duration-200 cursor-pointer relative group"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
                <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#FF4D12] opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm shadow-[#FF4D12]" />
              </a>

              <a
                href="#home"
                className="w-11 h-11 rounded-full bg-neutral-100 dark:bg-neutral-900/90 border-2 border-neutral-200/80 dark:border-neutral-800/80 hover:border-[#FF4D12] dark:hover:border-[#FF4D12] focus:border-[#FF4D12] active:border-[#FF4D12] flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:text-white hover:bg-[#FF4D12]/15 hover:scale-110 active:scale-95 hover:shadow-[0_0_20px_rgba(255,77,18,0.6)] transition-all duration-200 cursor-pointer relative group"
                title="Website"
              >
                <Globe className="w-4 h-4" />
                <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#FF4D12] opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm shadow-[#FF4D12]" />
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Dark Modern Form Container */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-[2.5rem] bg-neutral-950/90 border border-neutral-800/90 backdrop-blur-2xl shadow-2xl text-white">
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#FF4D12]/20 text-[#FF4D12] mx-auto flex items-center justify-center">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Message Dispatched!
                </h3>
                <p className="text-sm text-neutral-400 max-w-md mx-auto">
                  Thank you for reaching out, {formData.firstName}. I'll respond to <span className="text-[#FF4D12] font-mono">{formData.email}</span> within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ firstName: '', lastName: '', email: '', phone: '', location: '', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors cursor-pointer mt-4"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Row 1: First Name / Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="First Name"
                      className="w-full px-5 py-3.5 rounded-2xl bg-neutral-900/90 border border-neutral-800/80 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF4D12] transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Last Name"
                      className="w-full px-5 py-3.5 rounded-2xl bg-neutral-900/90 border border-neutral-800/80 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF4D12] transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Email / Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Email"
                      className="w-full px-5 py-3.5 rounded-2xl bg-neutral-900/90 border border-neutral-800/80 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF4D12] transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Phone"
                      className="w-full px-5 py-3.5 rounded-2xl bg-neutral-900/90 border border-neutral-800/80 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF4D12] transition-colors"
                    />
                  </div>
                </div>

                {/* Row 3: Country & Place */}
                <div>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Country & Place"
                    className="w-full px-5 py-3.5 rounded-2xl bg-neutral-900/90 border border-neutral-800/80 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF4D12] transition-colors"
                  />
                </div>

                {/* Row 4: Your Message */}
                <div className="relative">
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your Message"
                    className="w-full px-5 py-3.5 rounded-2xl bg-neutral-900/90 border border-neutral-800/80 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF4D12] transition-colors resize-none"
                  />
                </div>

                {/* Action Row */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-full bg-white text-black font-bold text-xs hover:bg-neutral-200 transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95"
                    data-cursor-text="Submit"
                  >
                    Submit
                  </button>
                </div>

              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
