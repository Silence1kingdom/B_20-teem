"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("INITIALIZING_SYSTEM...");

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 15;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setText("SYSTEM_ONLINE");
        setTimeout(() => {
          onComplete();
        }, 800); // Hold at 100% briefly
      }
      setProgress(Math.floor(currentProgress));

      // Terminal text effects
      if (currentProgress < 30) setText("ESTABLISHING_NEURAL_LINK...");
      else if (currentProgress < 60) setText("COMPILING_ASSETS...");
      else if (currentProgress < 90) setText("BYPASSING_SECURITY...");
      
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[110] flex flex-col items-center justify-center bg-[#020202] font-mono text-xs md:text-sm text-cyan-500/80 uppercase"
      exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="w-full max-w-md p-8 flex flex-col gap-4">
        <div className="flex justify-between items-end mb-2">
          <span className="text-purple-400">B_20 [Version 3.1.4]</span>
          <span className="text-white font-bold">{progress}%</span>
        </div>
        
        {/* Progress Bar Container */}
        <div className="h-[2px] w-full bg-white/10 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex flex-col gap-1 mt-4 text-white/50 h-24 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-b from-[#020202]/0 to-[#020202] pointer-events-none z-10" />
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              key={text}
              className="text-white text-glow-cyan"
            >
              &gt; {text}
            </motion.span>
            {/* Fake terminal history */}
            {progress > 10 && <span className="text-neutral-600">&gt; LOADING MODULES: OK</span>}
            {progress > 30 && <span className="text-neutral-500">&gt; CONNECTING SECURE ENCLAVE: OK</span>}
            {progress > 50 && <span className="text-neutral-400">&gt; INJECTING AESTHETICS: COMPLETE</span>}
            {progress > 80 && <span className="text-purple-400">&gt; INITIALIZING B_20 MATRIX</span>}
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden mix-blend-screen opacity-20">
         {/* Simple scanning lines effect */}
         <div className="w-full h-[2px] bg-cyan-500 absolute top-0 animate-[scan_3s_linear_infinite]" 
              style={{ boxShadow: "0 0 40px 5px rgba(6, 182, 212, 0.5)" }} />
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
            0% { transform: translateY(-100vh); }
            100% { transform: translateY(100vh); }
        }
      `}} />
    </motion.div>
  );
}
