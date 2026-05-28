"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import React, { useRef } from "react";
import { Terminal, Lightbulb, PenTool } from "lucide-react";

const TEAM_MEMBERS = [
  {
    id: "almani",
    name: "الألماني",
    role: "Backend Engineering",
    icon: Terminal,
    color: "from-blue-600 to-cyan-400",
    skills: ["Security Systems", "Database Architecture", "Microservices", "Go / Rust"],
    description: "مهندس النظم المعقدة وحارس البوابات الأمنية. يبني قواعد بيانات لا تقهر.",
  },
  {
    id: "volt",
    name: "فولت",
    role: "Frontend Development",
    icon: Lightbulb,
    color: "from-purple-600 to-pink-500",
    skills: ["Motion UI", "React / Next.js", "WebGL / Three.js", "Performance"],
    description: "ساحر الواجهات. يحول الكود إلى تجارب بصرية حية تتنفس وتتفاعل.",
  },
  {
    id: "phantom",
    name: "فانتوم",
    role: "UI/UX & Visual Identity",
    icon: PenTool,
    color: "from-emerald-500 to-teal-400",
    skills: ["Creative Systems", "Prototyping", "3D Modeling", "Figma Elite"],
    description: "العقل المدبر للتجربة المرئية. يصمم واجهات من المستقبل لا مثيل لها.",
  },
];

export function Team() {
  return (
    <section className="py-24 md:py-32 relative bg-black overflow-hidden" id="team">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 font-mono tracking-tighter"
          >
            [ TEAM_<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">CORE</span> ]
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto px-4"
          >
            وحوش التقنية ومهندسي المستقبل. كل عضو هو أسطورة في مجاله.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 max-w-6xl mx-auto">
          {TEAM_MEMBERS.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member, index }: { member: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Motion values for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for rotation
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], ["15deg", "-15deg"]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], ["-15deg", "15deg"]), { stiffness: 150, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalize to -0.5 to 0.5
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      style={{ perspective: 1000 }}
      className="relative z-10"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`group relative w-full rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 p-8 cursor-crosshair transition-colors duration-500 hover:border-white/30`}
      >
        {/* Dynamic Glow Background on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl -z-10`} />

        {/* Floating elements to emphasize 3D */}
        <div className="relative" style={{ transform: "translateZ(60px)" }}>
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-3xl font-black text-white mb-2">{member.name}</h3>
              <p className="text-sm font-mono text-neutral-400 border border-white/10 rounded-full px-3 py-1 inline-block bg-white/5">
                {member.role}
              </p>
            </div>
            <div className={`p-3 rounded-xl bg-gradient-to-br ${member.color} bg-opacity-20`}>
              <member.icon className="w-8 h-8 text-white" />
            </div>
          </div>

          <p className="text-neutral-400 mb-8 leading-relaxed">
            {member.description}
          </p>

          <div className="space-y-3">
            {member.skills.map((skill: string, i: number) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-1 h-3 rounded-full bg-gradient-to-b ${member.color}`} />
                <span className="text-sm text-neutral-300 font-mono tracking-tight">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Holographic overlay */}
        <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(105deg,transparent_20%,rgba(255,255,255,0.05)_25%,transparent_30%)] group-hover:bg-[linear-gradient(105deg,transparent_100%,rgba(255,255,255,0.05)_105%,transparent_110%)] transition-[background] duration-1000 ease-in-out pointer-events-none" />
        
        {/* Neon corner brackets */}
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-transparent group-hover:border-white/50 transition-colors rounded-tr-xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-transparent group-hover:border-white/50 transition-colors rounded-bl-xl pointer-events-none" />
      </motion.div>
    </motion.div>
  );
}
