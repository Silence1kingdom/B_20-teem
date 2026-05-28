"use client";

import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#team", label: "Team" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      if (y > 200 && y > lastY) setHidden(true);
      else if (y < lastY || y < 200) setHidden(false);
      setLastY(y);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (y / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.1 }
    );

    for (const link of NAV_LINKS) {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-500 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-[0_0_30px_rgba(139,92,246,0.1)]"
            : "bg-transparent"
        }`}
      >
        {/* Scroll Progress Bar */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/5">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        )}

        <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollTo("#hero")}
            className="group text-2xl font-black tracking-tighter relative"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400 group-hover:to-white transition-all duration-300">
              B_20
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-500" />
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`relative px-4 py-2 text-sm font-mono rounded-lg transition-all tracking-wide ${
                  activeSection === link.href.slice(1)
                    ? "text-white bg-white/10"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                /{link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="active"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                  />
                )}
              </button>
            ))}

            <button
              onClick={() => scrollTo("#contact")}
              className="mr-3 px-5 py-2 text-sm font-bold bg-white text-black rounded-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <Zap className="w-4 h-4" />
              ابدأ مشروعك
            </button>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors relative z-[100]"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-[85] w-[280px] bg-black/95 backdrop-blur-2xl border-l border-white/10 md:hidden flex flex-col pt-24 px-6"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`w-full text-right px-4 py-4 text-lg font-mono rounded-xl transition-all ${
                    activeSection === link.href.slice(1)
                      ? "text-white bg-white/10 border border-white/10"
                      : "text-neutral-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  /{link.label}
                </button>
              ))}
            </div>

            <div className="mt-auto mb-12">
              <button
                onClick={() => scrollTo("#contact")}
                className="w-full py-4 bg-white text-black font-bold rounded-xl text-lg flex items-center justify-center gap-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition-all"
              >
                <Zap className="w-5 h-5" />
                ابدأ مشروعك
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
