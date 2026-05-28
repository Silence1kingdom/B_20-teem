"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import { Header } from "@/components/Header";
import { CustomCursor } from "@/components/CustomCursor";
import { Loader } from "@/components/Loader";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Team } from "@/components/Team";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { SkillsMatrix } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("b20_loaded");
    if (!seen) {
      setShowLoader(true);
      sessionStorage.setItem("b20_loaded", "true");
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <>
      <CustomCursor />
      
      <AnimatePresence>
        {showLoader && loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <main className="min-h-screen bg-[#030303] text-white selection:bg-purple-500/30">
          <Header />
          <Hero />
          <About />
          <Team />
          <Services />
          <Projects />
          <SkillsMatrix />
          <Contact />
          <Footer />
          <BackToTop />
        </main>
      )}
    </>
  );
}
