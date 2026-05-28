"use client";

import { motion } from "motion/react";
import { Users, Code, Cpu, Shield, Zap } from "lucide-react";

export function About() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#030303]" id="about">
      {/* Decorative vertical lines - responsive spread */}
      <div className="absolute top-0 bottom-0 left-[20%] w-px bg-gradient-to-b from-transparent via-purple-500/10 to-transparent" />
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-blue-500/10 to-transparent" />
      <div className="absolute top-0 bottom-0 left-[80%] w-px bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          
          {/* Visual Element (Glass Panel abstract representation) */}
          <motion.div 
            className="w-full lg:w-1/2 order-2 lg:order-1 relative"
            initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ perspective: "1000px" }}
          >
            <div className="relative w-full aspect-square max-w-[400px] lg:max-w-[500px] mx-auto group">
              {/* Layer 1 (Back - Rotating Dash) */}
              <motion.div 
                animate={{ rotateZ: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 sm:inset-10 border-2 border-purple-500/20 rounded-full border-dashed"
              />
              <motion.div 
                animate={{ rotateZ: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 sm:inset-16 border border-blue-500/30 rounded-full opacity-50"
              />
              
              {/* Layer 2 (Middle - Glass Panel) */}
              <div className="absolute inset-2 sm:inset-6 glass-panel border-purple-500/30 overflow-hidden shadow-[0_0_40px_rgba(139,92,246,0.1)] transition-all duration-700 group-hover:border-blue-500/50 group-hover:shadow-[0_0_60px_rgba(59,130,246,0.2)]">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-black/40 to-blue-500/10 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPHBhdGggZD0iTTAgMEw4IDhaTTAgOEw4IDBaIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] mix-blend-overlay" />
                
                {/* Simulated code snippet */}
                <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-6 bg-black/60 backdrop-blur-xl rounded-xl border border-white/5 font-mono text-[10px] sm:text-xs text-green-400/80 shadow-2xl overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 opacity-50" />
                  <p className="opacity-50 text-neutral-400">{"// INITIALIZING CORE SYSTEMS"}</p>
                  <motion.p
                     initial={{ width: 0 }}
                     whileInView={{ width: "100%" }}
                     viewport={{ once: true }}
                     transition={{ duration: 2, ease: "linear" }}
                     className="overflow-hidden whitespace-nowrap mt-3 text-cyan-300 border-l-2 border-cyan-500 pl-2"
                  >
                    sys.mount(&quot;B_20_MODULES&quot;, config.ELITE);
                  </motion.p>
                  <motion.p
                     initial={{ width: 0 }}
                     whileInView={{ width: "100%" }}
                     viewport={{ once: true }}
                     transition={{ delay: 1, duration: 1.5, ease: "linear" }}
                     className="overflow-hidden whitespace-nowrap mt-2 text-purple-300 border-l-2 border-purple-500 pl-2"
                  >
                    await net.connect(AI_NODES);
                  </motion.p>
                </div>
              </div>

              {/* Central Glowing Orb */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-24 sm:h-24 bg-white rounded-full shadow-[0_0_60px_rgba(255,255,255,0.8),0_0_120px_rgba(139,92,246,0.6)] mix-blend-screen opacity-90 animate-pulse" />
            </div>
            
            {/* Ambient Background glow behind graphic */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 blur-[80px] -z-10 rounded-full" />
          </motion.div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 relative z-10 text-center lg:text-right">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <div className="h-px w-12 sm:w-24 bg-gradient-to-r from-purple-500 to-transparent" />
                <span className="font-mono text-purple-400 text-xs sm:text-sm uppercase tracking-widest">[ ABOUT_US ]</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 leading-tight tracking-tighter">
                شركة <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 mt-2 block pb-2 text-glow">Digital Engineering Elite</span>
              </h2>
              
              <div className="space-y-4 md:space-y-6 text-base md:text-lg text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                <p>
                  نحن في <span className="text-white font-bold tracking-wider">B_20</span> لسنا مجرد فريق تصميم، نحن كتيبة هندسة رقمية. ندمج بين الفن والإمكانيات التقنية المطلقة لبناء واجهات مستقبلية وأنظمة معقدة.
                </p>
                <p>
                  من تطوير المواقع الحديثة إلى هندسة الأنظمة الذكية وتكامل الذكاء الاصطناعي، نضمن لك بنية تحتية لا تُقهر وتجربة تجعل المنافسين في الخلفية.
                </p>
              </div>

              <div className="mt-10 md:mt-12 flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
                {[
                  { icon: Code, text: "تطوير مواقع حديثة", color: "text-blue-400" },
                  { icon: Cpu, text: "تكامل الذكاء الاصطناعي", color: "text-purple-400" },
                  { icon: Shield, text: "أمان متقدم", color: "text-emerald-400" },
                  { icon: Zap, text: "تجارب رقمية", color: "text-cyan-400" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2 md:py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:border-purple-500/50 hover:bg-purple-500/10 hover:-translate-y-1 transition-all"
                  >
                    <item.icon className={`w-4 h-4 md:w-5 md:h-5 ${item.color}`} />
                    <span className="text-xs md:text-sm font-medium text-neutral-200">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
