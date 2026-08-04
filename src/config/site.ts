import { SiteConfig, Project, Photo, VideoItem, TimelineItem, TechItem, Service, ProcessStep, PolaroidPhoto } from '../types';
import MushfiiImage from "../assets/images/Mushfii.jpg"
import Night from "../assets/images/Night.jpg";
import Dog from "../assets/images/Dog.jpg";
import House from "../assets/images/House.jpg";
import Horse from "../assets/images/Horse.jpg";

export const siteConfig: SiteConfig = {
  name: "Mushfii",
  initials: "Mushfii",
  handle: "@mushfii_786",
  title: "Creative Designer & Frontend Developer",
  tagline: "Building digital experiences that combine cinematic aesthetic with functional precision.",
  aboutIntro: "I'm Mushfii, a multidisciplinary designer and creative developer crafting human-centered digital products, brand identities, and visual narratives.",
  aboutBio: "With over 5 years of experience bridging art direction, high-performance web engineering, and visual media, I build interfaces that feel calm, considered, and quietly fast. My work spans brand strategy, UI/UX systems, photography, and video creation.",
  email: "muhammedmushfiq178@gmail.com",
  whatsapp: "+918157868714",
  location: "Calicut, Kerala, India • Available Worldwide",
  status: "Available for freelance projects & design roles",
  avatarUrl: MushfiiImage,
  resumeUrl: "#resume",
  roles: [
    "Creative Designer",
    "UI/UX Designer",
    "Graphic Designer",
    "Photographer",
    "Videographer",
    "Frontend Developer",
    "Content Creator"
  ],
  socials: {
    instagram: "https://instagram.com/mushfii_786",
    github: "https://github.com/mushfiq786",
    linkedin: "https://linkedin.com/in/muhammed-mushfiq",
    pinterest: "https://pin.it/1ONUTFjLl",
    whatsapp: "https://wa.me/918157868714",
    email: "mailto:muhammedmushfiq178@gmail.com"
  },
  stats: [
    { label: "Years Experience", value: "5", suffix: "+" },
    { label: "Projects Delivered", value: "40", suffix: "+" },
    { label: "Content Impressions", value: "250", suffix: "K+" },
    { label: "Client Satisfaction", value: "100", suffix: "%" }
  ]
};

export const projects: Project[] = [
  {
    id: "loom-ai",
    title: "Loom Studio",
    subtitle: "AI Writing & Editorial Canvas",
    description: "An AI writing companion that thinks alongside you, allowing you to capture ideas, edits, and drafts in one focused, distraction-free space.",
    longDescription: "Loom Studio reimagines document editing by placing generative suggestions in an ambient sidebar. Built with Next.js 16, Tailwind CSS v4, and real-time WebGL canvas overlays.",
    role: "Lead UI/UX & Frontend Developer",
    year: "2025",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=1200&h=800",
    gallery: [
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=1200&h=800",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200&h=800"
    ],
    tags: ["Next.js 16", "Tailwind v4", "TypeScript", "Framer Motion", "Design System"],
    link: "https://loom-studio.example.com",
    github: "https://github.com/mushfiq786/loom-studio",
    featured: true,
    metrics: [
      { label: "User Retention", value: "+42%" },
      { label: "Speed Score", value: "99/100" }
    ]
  },
  {
    id: "rhythm-analytics",
    title: "Rhythm OS",
    subtitle: "Calm Analytics for Indie Creators",
    description: "A weekly analytics digest that transforms raw product telemetry into readable narrative stories for independent builders.",
    longDescription: "Designed to remove dashboard anxiety. Rhythm aggregates metrics from Stripe, PostHog, and Vercel into a beautifully formatted Sunday morning digest.",
    role: "Founder & Creative Director",
    year: "2025",
    category: "Development",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200&h=800",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200&h=800"
    ],
    tags: ["React 19", "Three.js", "GSAP", "Chart.js", "Tailwind CSS"],
    link: "https://rhythm-analytics.example.com",
    github: "https://github.com/mushfiq786/rhythm-os",
    featured: true,
    metrics: [
      { label: "Monthly Digest Read Rate", value: "88%" }
    ]
  },
  {
    id: "atlas-studio",
    title: "Atlas Design Lab",
    subtitle: "Two-Week Brand & Digital Sprint",
    description: "Complete visual identity, editorial website, and interactive product surface for a modern architectural studio.",
    longDescription: "Created a bespoke design language with custom typography, 3D architectural mockups in WebGL, and ultra-smooth Lenis scroll transitions.",
    role: "Brand & Motion Designer",
    year: "2024",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=1200&h=800",
    gallery: [
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=1200&h=800"
    ],
    tags: ["Branding", "3D WebGL", "GSAP", "Lenis Scroll", "Figma"],
    link: "https://atlas-lab.example.com",
    featured: true
  },
  {
    id: "groove-music",
    title: "Groove Platform",
    subtitle: "Reimagining Music Education",
    description: "An intuitive booking and curriculum management platform assisting thousands of students in discovering music mentors.",
    longDescription: "Led the end-to-end redesign of the scheduling flow, reducing drop-off by 54% and introducing real-time video preview rooms.",
    role: "Lead UI/UX Designer",
    year: "2024",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=1200&h=800",
    gallery: [
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=1200&h=800"
    ],
    tags: ["UI/UX Design", "User Testing", "Figma", "Design Systems"],
    link: "https://groove-app.example.com",
    featured: true
  },
  {
    id: "aurora-3d",
    title: "Aurora Spatial Shader",
    subtitle: "Interactive WebGL Audio Visualizer",
    description: "A GPU-accelerated interactive 3D particle canvas reacting dynamically to ambient web audio and mouse movement.",
    longDescription: "Built with Three.js, React Three Fiber, GLSL shaders, and Web Audio API. Used as hero backdrop for high-end digital agency portfolios.",
    role: "3D & Shader Developer",
    year: "2024",
    category: "3D & Motion",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200&h=800",
    tags: ["Three.js", "GLSL Shaders", "React Three Fiber", "Web Audio"],
    link: "https://aurora-visualizer.example.com",
    github: "https://github.com/mushfiq786/aurora-shader"
  },
  {
    id: "zenith-app",
    title: "Zenith Workspace",
    subtitle: "Minimalist Focus & Time Tracking",
    description: "A dark-mode first productivity app with integrated soundscapes, pomodoro timers, and visual task flows.",
    longDescription: "Features custom audio synthesis using Web Audio API, local storage persistence, and sleek micro-interactions built with Framer Motion.",
    role: "Product Designer & Developer",
    year: "2023",
    category: "Development",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200&h=800",
    tags: ["React", "TypeScript", "Tailwind CSS", "PWA"],
    link: "https://zenith-app.example.com"
  }
];

export const photography: Photo[] = [
  {
    id: "photo-1",
    title: "Cybernetic Silhouette & Neon Lights",
    category: "Photography",
    url: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=1200&h=1600",
    caption: "Futuristic visor reflection and ambient cyberpunk Tokyo night light.",
    location: "Shinjuku District",
    camera: "Sony A7IV",
    lens: "85mm f/1.4 GM",
    settings: "f/1.8 • 1/500s • ISO 400",
    year: "2026 Archive"
  },
  {
    id: "photo-2",
    title: "Getting That Film Look in Post",
    category: "Branding",
    url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200&h=1600",
    caption: "Organic botanical stillness and rich natural film grain grading.",
    location: "Studio 4",
    camera: "Fujifilm X-T5",
    lens: "35mm f/2.0",
    settings: "f/2.8 • 1/1000s • ISO 160",
    year: "2025 Archive"
  },
  {
    id: "photo-3",
    title: "Visualizing Distorted Sound Mixes",
    category: "Digital Concept",
    url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=1200&h=1600",
    caption: "Gothic architecture emerging through dramatic fog and atmospheric lighting.",
    location: "Old Town Square",
    camera: "Sony A7IV",
    lens: "35mm f/1.4 GM",
    settings: "f/1.4 • 1/160s • ISO 800",
    year: "2025 Archive"
  },
  {
    id: "photo-4",
    title: "Exora Ambient Studio Liquid Art",
    category: "Spatial Art",
    url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200&h=1600",
    caption: "Fluid gradient waves and vibrant luminescent particle fields.",
    location: "Digital Canvas",
    camera: "WebGL Shader Engine",
    lens: "Custom GLSL",
    settings: "GPU Realtime",
    year: "2026 Archive"
  },
  {
    id: "photo-5",
    title: "Aetheria Node Spatial Canvas",
    category: "3D & Motion",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200&h=1600",
    caption: "Deep sea dark matter network with subtle glowing cyan grid nodes.",
    location: "Spatial Lab",
    camera: "Three.js Canvas",
    lens: "Perspective Camera",
    settings: "120 FPS Render",
    year: "2026 Archive"
  }
];

export const videography: VideoItem[] = [
  {
    id: "video-1",
    title: "Tokyo Neon Streets & Midnight Drift",
    category: "Cinematic Reel",
    posterUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=1200&h=1600",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-tokyo-street-with-neon-lights-at-night-41541-large.mp4",
    caption: "Night walkthrough through Shinjuku neon lanes featuring anamorphic lens flares and deep teal-orange color balance.",
    location: "Tokyo, Japan",
    duration: "0:45",
    camera: "Sony A7S III",
    lens: "35mm T1.5 Anamorphic",
    settings: "4K 60fps • S-Log3",
    year: "2026 Film",
    views: 14200,
    likes: 1850
  },
  {
    id: "video-2",
    title: "Aerial Coastal Horizons & Wave Rhythms",
    category: "Drone Reel",
    posterUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200&h=1600",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-beach-and-the-ocean-41550-large.mp4",
    caption: "Cinematic FPV drone sweeping over rugged coastal cliffs at golden hour.",
    location: "Varkala & Wayanad",
    duration: "1:12",
    camera: "DJI Mavic 3 Pro",
    lens: "24mm Hasselblad Prime",
    settings: "5.1K 50fps • D-Log",
    year: "2025 Film",
    views: 22800,
    likes: 2410
  },
  {
    id: "video-3",
    title: "Futuristic Urban Transit & Night Motion",
    category: "Motion & VFX",
    posterUrl: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=1200&h=1600",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4",
    caption: "Long-exposure time-lapse and speed ramping of city traffic light trails.",
    location: "Metropolis Hub",
    duration: "0:38",
    camera: "RED Komodo 6K",
    lens: "50mm Cine Lens",
    settings: "6K 120fps • REDCODE RAW",
    year: "2026 Film",
    views: 18900,
    likes: 1980
  },
  {
    id: "video-4",
    title: "Fluid Liquid Motion & Ambient Waves",
    category: "Creative Direction",
    posterUrl: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=1200&h=1600",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4",
    caption: "Macro liquid optics exploring light refraction, caustics, and organic wave physics.",
    location: "Studio Lab",
    duration: "0:50",
    camera: "Phantom Flex 4K",
    lens: "100mm Macro Lens",
    settings: "4K 1000fps • RAW",
    year: "2026 Film",
    views: 31200,
    likes: 3400
  },
  {
    id: "video-5",
    title: "Golden Hour Ocean Sunset & Reflection",
    category: "Commercial Film",
    posterUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200&h=1600",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-sunset-over-the-ocean-with-waves-41548-large.mp4",
    caption: "Atmospheric brand promo highlighting natural sunlight, gentle ocean swells, and peaceful mood.",
    location: "Kozhikode Beach",
    duration: "1:05",
    camera: "Sony FX6",
    lens: "85mm F1.4 GM",
    settings: "4K 120fps • S-Cinetone",
    year: "2025 Film",
    views: 15400,
    likes: 1620
  }
];

export const polaroids: PolaroidPhoto[] = [
  {
    id: "pol-1",
    imageUrl: Night,
    caption: "Creating in the studio 🎨",
    rotation: -4
  },
  {
    id: "pol-2",
    imageUrl: Dog,
    caption: "Design sprint with the team 💻",
    rotation: 3
  },
  {
    id: "pol-3",
    imageUrl: House,
    caption: "Framing coastal sunsets 📸",
    rotation: -2
  },
  {
    id: "pol-4",
    imageUrl: Horse,
    caption: "Late night code sessions ☕",
    rotation: 5
  }
];

export const timelineItems: TimelineItem[] = [
  {
    id: "exp-1",
    type: "experience",
    roleOrDegree: "Senior Lead Designer & Frontend Engineer",
    organization: "Studio Minimal / Freelance",
    location: "Remote / Calicut",
    period: "2023 — Present",
    description: [
      "Directing visual strategy and frontend architecture for high-growth tech startups and creative agencies.",
      "Building high-conversion websites, WebGL experiences, and design systems using Next.js 16, React 19, and Tailwind CSS v4.",
      "Producing brand identity assets, video campaigns, and high-impact social media content reaching 250K+ combined viewers."
    ],
    skills: ["Next.js 16", "Tailwind CSS v4", "Framer Motion", "GSAP", "Three.js", "Brand Strategy"]
  },
  {
    id: "exp-2",
    type: "experience",
    roleOrDegree: "UI/UX Designer & Media Specialist",
    organization: "Apex Digital Media",
    location: "Kochi, Kerala",
    period: "2021 — 2023",
    description: [
      "Led UI/UX redesigns for 15+ SaaS and enterprise client portals, improving task completion rates by 35%.",
      "Head of commercial photography and promo video production, directing lightning, composition, and color grading in DaVinci Resolve.",
      "Created motion graphics and interactive prototypes for investor pitches and product launches."
    ],
    skills: ["Figma", "DaVinci Resolve", "Commercial Photography", "Motion Graphics", "Prototyping"]
  },
  {
    id: "exp-3",
    type: "experience",
    roleOrDegree: "Visual Graphic Designer & Content Creator",
    organization: "Creative Pulse Studio",
    location: "Calicut",
    period: "2019 — 2021",
    description: [
      "Crafted brand identities, editorial layouts, poster design, and digital marketing collaterals for local and regional brands.",
      "Grew brand social media engagement by 300% through high-energy short-form video reels and motion design."
    ],
    skills: ["Photoshop", "Illustrator", "After Effects", "Social Media Strategy"]
  },
  {
    id: "edu-1",
    type: "education",
    roleOrDegree: "Bachelor of Computer Applications & Digital Media",
    organization: "University of Calicut",
    location: "Calicut, Kerala",
    period: "2018 — 2021",
    description: [
      "Specialized in Software Engineering, Web Development, Multimedia Production, and User Interface Engineering.",
      "Awarded Best Digital Media Capstone Project for interactive web application."
    ],
    skills: ["Computer Science", "Web Development", "UI Engineering", "Digital Media Production"]
  }
];

export const techCategories = [
  {
    title: "Design & Systems",
    skills: [
      { name: "Figma & UI Kits", level: 96 },
      { name: "Framer Motion", level: 94 },
      { name: "Brand Systems", level: 90 },
      { name: "Photoshop & Illustrator", level: 88 }
    ]
  },
  {
    title: "Frontend Engineering",
    skills: [
      { name: "React 19 & Next.js 16", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS v4", level: 98 },
      { name: "Three.js & Shaders", level: 85 }
    ]
  },
  {
    title: "Media & Motion",
    skills: [
      { name: "Lightroom Classic", level: 92 },
      { name: "DaVinci Resolve", level: 88 },
      { name: "After Effects", level: 85 },
      { name: "Cinematography", level: 90 }
    ]
  },
  {
    title: "Deployment & Tools",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "Vercel / Cloud Run", level: 90 },
      { name: "Lenis & GSAP", level: 94 },
      { name: "Web Audio API", level: 86 }
    ]
  }
];

export const techStack: TechItem[] = [
  { id: "figma", name: "Figma", category: "Design", icon: "Figma", level: 95, featured: true },
  { id: "photoshop", name: "Photoshop", category: "Design", icon: "Image", level: 90, featured: true },
  { id: "illustrator", name: "Illustrator", category: "Design", icon: "PenTool", level: 88, featured: true },
  { id: "react", name: "React 19", category: "Frontend", icon: "Code2", level: 95, featured: true },
  { id: "nextjs", name: "Next.js 16", category: "Frontend", icon: "Globe", level: 92, featured: true },
  { id: "typescript", name: "TypeScript", category: "Frontend", icon: "FileCode", level: 90, featured: true },
  { id: "tailwind", name: "Tailwind v4", category: "Frontend", icon: "Palette", level: 96, featured: true }
];

export const services: Service[] = [
  {
    id: "ui-ux",
    title: "UI/UX & Product Design",
    tagline: "Crafting intuitive interfaces that turn complex problems into seamless experiences.",
    description: "End-to-end product design from user research and wireframing to high-fidelity design systems and interactive prototypes.",
    deliverables: ["User Research & Journeys", "Wireframing & Prototyping", "Design Systems & UI Kits", "SaaS & Mobile App Design"],
    icon: "Layout"
  },
  {
    id: "frontend-dev",
    title: "Frontend Development",
    tagline: "High-performance, pixel-perfect websites built with modern web technologies.",
    description: "Clean, responsive, accessible React/Next.js codebases infused with smooth Framer Motion, GSAP, and WebGL animations.",
    deliverables: ["Next.js 16 & React 19", "Tailwind CSS v4", "WebGL & 120 FPS Performance", "Lighthouse 100/100 Speed"],
    icon: "Code"
  },
  {
    id: "branding",
    title: "Brand Identity & Art Direction",
    tagline: "Building distinct visual identities that captivate and stand out in crowded markets.",
    description: "Developing complete brand design systems including logo design, color palettes, typography, guidelines, and marketing collaterals.",
    deliverables: ["Logo & Visual Identity", "Brand Strategy & Guidelines", "Typography & Color Systems", "Marketing Assets"],
    icon: "Palette"
  }
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "Diving deep into your brand, target audience, technical goals, and competitive landscape to define a clear roadmap.",
    details: ["Stakeholder Interviews", "Competitor Benchmarking", "Target Persona Mapping", "Project Scope & Timeline"]
  }
];
