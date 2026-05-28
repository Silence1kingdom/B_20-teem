"use client";

export function Footer() {
  return (
    <footer className="bg-[#030303] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Logo element */}
          <div className="text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 glitch-wrapper" data-text="B_20">
            B_20
          </div>
          
          <div className="flex gap-6 text-sm font-mono text-neutral-500">
            <a href="#about" className="hover:text-white transition-colors">/About</a>
            <a href="#team" className="hover:text-white transition-colors">/Team</a>
            <a href="#projects" className="hover:text-white transition-colors">/Projects</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">/Contact</a>
          </div>
        </div>

        <div className="border-t border-white/5pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-neutral-600">
          <p>&copy; {new Date().getFullYear()} B_20 Digital Engineering Elite. All systems operational.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500 box-glow" />
            <span>Encrypted & Secured</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
