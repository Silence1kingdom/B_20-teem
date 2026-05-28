"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { MousePointerClick, ArrowLeft } from "lucide-react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    // Generate particles on client side to avoid hydration mismatch
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 5,
      xOffset: Math.random() * 100 - 50,
      yOffset: -(Math.random() * 150 + 50),
      size: Math.random() * 3 + 1,
      color: Math.random() > 0.5 ? "bg-purple-500/50" : "bg-blue-500/50"
    }));
    setParticles(newParticles);

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position between -1 and 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-10" id="hero">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] md:bg-[size:24px_36px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className={`absolute rounded-full ${p.color}`}
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, p.yOffset],
              x: [0, p.xOffset],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Mouse Reactive Glow */}
      <motion.div
        className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full blur-[80px] md:blur-[120px] mix-blend-screen pointer-events-none opacity-30 z-0 bg-purple-600/50"
        animate={{
          x: mousePosition.x * 50,
          y: mousePosition.y * 50,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
      
      <motion.div
        className="absolute w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full blur-[60px] md:blur-[100px] mix-blend-screen pointer-events-none opacity-20 z-0 bg-blue-600/50"
        animate={{
          x: mousePosition.x * -40,
          y: mousePosition.y * -40,
        }}
        transition={{ type: "spring", stiffness: 40, damping: 20 }}
      />

      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center text-center flex-1 justify-center mt-[-10vh]">
        {/* Giant Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="relative"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * -10}deg) rotateY(${mousePosition.x * 10}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          <h1 
            className="text-[6rem] md:text-[120px] lg:text-[180px] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/20 pb-4 relative z-10 leading-none drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            style={{ transform: "translateZ(50px)" }}
          >
            B_20
            <span className="absolute inset-0 glitch-text z-[-1]" data-text="B_20" />
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-3xl -z-10 rounded-full opacity-60 animate-pulse" />
        </motion.div>

        {/* Dynamic Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 flex flex-col items-center gap-6 w-full"
        >
          <p className="text-lg md:text-3xl lg:text-4xl font-light text-neutral-300 max-w-3xl leading-relaxed px-4">
            نحن لا نبني مواقع فقط... <br className="hidden sm:block" />
            <span className="font-bold text-white text-glow-purple block mt-2 sm:mt-4 text-xl sm:text-4xl">نحن نصنع تجارب رقمية من المستقبل.</span>
          </p>
          
          <div className="flex flex-wrap gap-x-4 gap-y-2 items-center justify-center text-xs md:text-sm font-mono text-neutral-400 mt-4 max-w-md md:max-w-none">
            <span>[ تطوير مواقع ]</span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-purple-500 box-glow" />
            <span>[ أنظمة ذكية ]</span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-blue-500 box-glow" />
            <span>[ حلول رقمية ]</span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-white box-glow" />
            <span>[ AI ]</span>
          </div>

          {/* Magnetic Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10 sm:mt-16 w-full sm:w-auto px-4 sm:px-0">
            <MagneticButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="group relative px-6 sm:px-8 py-4 sm:py-5 bg-white text-black font-bold rounded-xl sm:rounded-none overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] w-full sm:w-auto min-w-[220px]">
              <div className="absolute inset-0 w-0 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-[500ms] ease-out group-hover:w-full -z-10" />
              <span className="relative z-10 flex items-center justify-center gap-2 text-base sm:text-lg group-hover:text-white transition-colors duration-300">
                <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                ابدأ مشروعك الملحمي
              </span>
            </MagneticButton>

            <MagneticButton onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="group relative px-6 sm:px-8 py-4 sm:py-5 bg-black/50 backdrop-blur-md text-white font-bold rounded-xl sm:rounded-none border border-white/20 overflow-hidden transition-all hover:border-purple-500/60 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] w-full sm:w-auto min-w-[220px]">
              <span className="relative z-10 flex items-center justify-center gap-2 text-base sm:text-lg text-neutral-300 group-hover:text-white transition-colors">
                <MousePointerClick className="w-5 h-5 sm:w-6 sm:h-6 group-hover:opacity-100 opacity-50 transition-opacity" />
                استكشف أعمالنا
              </span>
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      {/* Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-neutral-500">Scroll Down</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-purple-500 to-transparent" 
        />
      </motion.div>

      {/* Bottom fade line */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#030303] via-[#030303]/80 to-transparent z-10 pointer-events-none" />
    </section>
  );
}

// Magnetic Button Helper Component
function MagneticButton({ children, className, onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only apply magnetic effect on desktop
    if (window.innerWidth < 768) return;
    
    const { clientX, clientY } = e;
    const { height, width, left, top } = e.currentTarget.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className={`interactive cursor-pointer ${className}`}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
