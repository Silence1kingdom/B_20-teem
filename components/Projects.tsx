"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    title: "NEXUS Core",
    type: "AI Platform",
    tech: ["Next.js", "GPT-4", "Three.js", "Supabase"],
    desc: "منصة ذكاء اصطناعي لتحليل البيانات المعقدة وعرضها في واجهات ثلاثية الأبعاد تفاعلية.",
    image: "https://picsum.photos/seed/cyber1/1920/1080",
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "AETHER E-Commerce",
    type: "Luxury Store App",
    tech: ["React Native", "Node.js", "Stripe", "GraphQL"],
    desc: "تطبيق متجر إلكتروني فاخر لأزياء المستقبل، بتجربة مستخدم سينمائية.",
    image: "https://picsum.photos/seed/cyber2/1920/1080",
    color: "from-purple-600 to-pink-500",
  },
  {
    title: "VANGUARD Shield",
    type: "Cyber Security Dashboard",
    tech: ["Vue 3", "Python Backend", "WebSockets", "D3.js"],
    desc: "لوحة تحكم حية لمراقبة الهجمات السيبرانية والأمان للشركات الكبرى.",
    image: "https://picsum.photos/seed/cyber3/1920/1080",
    color: "from-emerald-500 to-teal-500",
  },
];

export function Projects() {
  return (
    <section className="py-24 md:py-32 bg-[#020202] relative border-t border-white/5" id="projects">
      {/* Dynamic Background Noise */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuODUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2VGaWx0ZXIpIi8+PC9zdmc+')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
      
      <div className="container mx-auto px-4 mb-16 md:mb-24 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <div className="inline-flex flex-col items-center">
             <div className="flex items-center gap-2 mb-4">
               <span className="w-8 h-px bg-purple-500" />
               <span className="text-purple-400 font-mono text-xs sm:text-sm tracking-widest uppercase">Select Work</span>
               <span className="w-8 h-px bg-purple-500" />
             </div>
             <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white drop-shadow-2xl">
               أعمالنا <span className="opacity-30 mx-2 text-white font-light">/</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Projects</span>
             </h2>
          </div>
          <p className="text-neutral-400 text-sm md:text-lg max-w-2xl mx-auto mt-6">
            كل مشروع هو تحفة هندسية تم بناؤها من الصفر لتكون الأفضل في فئتها، لا مكان للحلول الوسطى في قاموسنا.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-16 md:gap-32 container mx-auto px-4 z-10 relative">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center group`}
    >
      {/* Image Panel */}
      <div className={`w-full lg:w-[60%] h-[300px] sm:h-[400px] lg:h-[550px] relative rounded-3xl overflow-hidden glass-panel border border-white/10 p-2 sm:p-3 perspective-1000 shadow-2xl hover:shadow-[0_0_60px_rgba(139,92,246,0.3)] transition-shadow duration-700`}>
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/50">
           <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
            referrerPolicy="no-referrer"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/40 to-transparent opacity-80 lg:opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent opacity-60 mix-blend-multiply" />
          
          <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} mix-blend-overlay opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />
          
          {/* Tech stack floating tags */}
          <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 left-4 sm:left-6 flex flex-wrap gap-2 justify-start sm:justify-end opacity-100 lg:opacity-0 lg:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 z-20">
            {project.tech.map((tech: string, i: number) => (
              <span key={i} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-black/60 backdrop-blur-md rounded-md border border-white/20 text-[10px] sm:text-xs font-mono text-white/90 shadow-lg">
                {tech}
              </span>
            ))}
          </div>

          {/* Project Number overlay inside image on mobile, outside on desktop */}
          <div className="absolute top-4 left-4 lg:hidden font-black text-6xl text-white/10 font-mono select-none">
            0{index + 1}
          </div>
        </div>
      </div>

      {/* Info Panel */}
      <div className="w-full lg:w-[40%] flex flex-col justify-center relative">
        <div className={`hidden lg:block absolute -top-20 ${isEven ? '-right-10' : '-left-10'} text-[180px] font-black text-white/[0.02] font-mono leading-none pointer-events-none select-none z-0 tracking-tighter`}>
          0{index + 1}.
        </div>

        <div className="relative z-10 text-right lg:text-right">
          <div className="flex flex-row-reverse lg:flex-row items-center gap-3 mb-4 lg:mb-6 justify-end lg:justify-start">
            <span className="font-mono text-xs sm:text-sm tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-white">
              {project.type}
            </span>
            <span className="w-8 lg:w-12 h-px bg-white/20" />
          </div>
          
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-500 transition-all duration-300 leading-tight">
            {project.title}
          </h3>
          
          <p className="text-neutral-400 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 md:max-w-md lg:max-w-full">
            {project.desc}
          </p>

          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-3 text-white font-bold group/btn pb-2 border-b border-white/20 hover:border-white transition-colors text-sm sm:text-base">
            <span className="tracking-wide">استعرض التحفة الفنية</span>
            <div className="p-1 sm:p-2 rounded-full bg-white/5 group-hover/btn:bg-white group-hover/btn:text-black transition-colors">
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
