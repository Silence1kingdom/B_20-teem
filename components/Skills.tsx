"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

const SKILLS = [
  { name: "React / Next.js", level: 98, color: "text-cyan-400", bg: "bg-cyan-400" },
  { name: "Node.js", level: 95, color: "text-green-500", bg: "bg-green-500" },
  { name: "UI / UX", level: 99, color: "text-purple-500", bg: "bg-purple-500" },
  { name: "Cyber Security", level: 92, color: "text-red-500", bg: "bg-red-500" },
  { name: "AI Integration", level: 96, color: "text-blue-500", bg: "bg-blue-500" },
  { name: "Motion Design", level: 94, color: "text-pink-500", bg: "bg-pink-500" },
];

export function SkillsMatrix() {
  return (
    <section className="py-24 md:py-32 bg-[#030303] relative border-b border-white/5 overflow-hidden" id="skills">
      {/* Dynamic Background Noise */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuODUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2VGaWx0ZXIpIi8+PC9zdmc+')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 md:mb-24 text-center sm:text-left justify-center sm:justify-start">
           <div className="hidden sm:block w-12 h-px bg-cyan-500" />
           <h3 className="font-mono text-neutral-400 text-sm sm:text-lg tracking-widest uppercase text-glow-cyan text-center">
             HUD Interface . <span className="text-white">Skills Matrix</span>
           </h3>
           <div className="hidden sm:block w-12 h-px bg-cyan-500" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SKILLS.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, index }: { skill: any; index: number }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Only animate counter when in view, simulated with a delay here for simplicity
    const timer = setTimeout(() => {
      let start = 0;
      const end = skill.level;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const animateCounter = () => {
        start += increment;
        if (start < end) {
          setCounter(Math.ceil(start));
          requestAnimationFrame(animateCounter);
        } else {
          setCounter(end);
        }
      };
      animateCounter();
    }, 500 + index * 100);

    return () => clearTimeout(timer);
  }, [skill.level, index]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-panel p-6 relative overflow-hidden group border border-white/10 flex items-center justify-between"
    >
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="flex flex-col gap-2 relative z-10 flex-1">
        <span className="font-mono text-sm text-neutral-400 uppercase tracking-widest">{skill.name}</span>
        
        {/* Progress Bar Container */}
        <div className="h-1 w-full bg-white/10 rounded-full mt-2 overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5 + index * 0.1, ease: "easeOut" }}
            className={`h-full ${skill.bg}`}
          />
        </div>
      </div>

      <div className="relative z-10 w-16 h-16 rounded-full border border-white/10 flex items-center justify-center ml-6 bg-black/50">
        <span className={`font-mono font-bold text-xl ${skill.color}`}>
          {counter}%
        </span>
        {/* Decorative inner ring */}
        <motion.div
           animate={{ rotate: 360 }}
           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
           className="absolute inset-1 border border-white/5 rounded-full border-dashed"
        />
      </div>
    </motion.div>
  );
}
