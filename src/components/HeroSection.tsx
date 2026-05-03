"use client";
import { useEffect, useRef } from "react";
import { ChevronDown, Flower2, Star, Heart } from "lucide-react";

// Pre-computed — no Math.* at render time (avoids SSR hydration mismatch)
const SPOKES = Array.from({ length: 12 }, (_, i) => {
  const rad = (i * 30 * Math.PI) / 180;
  return { x2: (100 + 90 * Math.cos(rad)).toFixed(4), y2: (100 + 90 * Math.sin(rad)).toFixed(4) };
});

const PETALS: { top?: string; bottom?: string; left?: string; right?: string; size: number; delay: string }[] = [
  { top: "15%", left: "8%",  size: 40, delay: "0s" },
  { top: "30%", right: "10%", size: 28, delay: "1.2s" },
  { bottom: "25%", left: "15%", size: 36, delay: "0.6s" },
  { top: "60%",  right: "8%",  size: 24, delay: "1.8s" },
  { top: "10%",  right: "25%", size: 44, delay: "0.9s" },
  { bottom: "15%", right: "20%", size: 20, delay: "2.1s" },
];

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      el.style.setProperty("--rx", `${((e.clientY - top) / height - 0.5) * -8}deg`);
      el.style.setProperty("--ry", `${((e.clientX - left) / width - 0.5) * 8}deg`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden section-hero">
      {/* Geometric circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-400/10 rounded-full translate-y-1/3 -translate-x-1/4" />
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] border border-cyan-400/8 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] border border-cyan-400/8 rounded-full -translate-x-1/2 -translate-y-1/2" />

      {/* Local rotating ornament */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-8 rotate-slow pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" stroke="#22d3ee" strokeWidth="0.5">
          {SPOKES.map((s, i) => <line key={i} x1="100" y1="100" x2={s.x2} y2={s.y2} />)}
          <circle cx="100" cy="100" r="90" /><circle cx="100" cy="100" r="70" /><circle cx="100" cy="100" r="50" />
        </svg>
      </div>

      {/* Floating petals */}
      {PETALS.map((p, i) => (
        <div key={i} className="absolute opacity-20 pointer-events-none"
          style={{ top: p.top, bottom: p.bottom, left: p.left, right: p.right,
            width: p.size, height: p.size,
            animation: `float 5s ease-in-out infinite`, animationDelay: p.delay }}>
          <Flower2 className="text-cyan-300 w-full h-full" />
        </div>
      ))}

      <Star className="absolute top-[20%] left-[20%] text-amber-300/30 w-4 h-4" />
      <Star className="absolute top-[40%] right-[15%] text-amber-300/20 w-3 h-3" />
      <Star className="absolute bottom-[30%] left-[30%] text-amber-300/25 w-5 h-5" />

      {/* Content */}
      <div ref={ref} className="relative z-10 text-center max-w-4xl mx-auto px-4 pt-24 sm:pt-0">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8"
          style={{ animation: "slide-up 0.8s ease 0.2s both" }}>
          <Heart className="w-4 h-4 text-amber-300" />
          <span className="text-cyan-200 text-sm font-medium">"İşte onlardır hayırlı işlerde koşuşarak yarışanlar"</span>
          <Heart className="w-4 h-4 text-amber-300" />
        </div>

        <div className="flex justify-center mb-6" style={{ animation: "slide-up 0.8s ease 0.4s both" }}>
          <div className="w-28 h-28 rounded-full overflow-hidden shadow-2xl glow-animation float-animation bg-white p-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.jpg" alt="Arife Çiçeği Derneği Logosu" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
          style={{ animation: "slide-up 0.8s ease 0.6s both" }}>
          Arife Çiçeği
        </h1>
        <p className="text-cyan-200 text-lg sm:text-xl mb-2 font-medium"
          style={{ animation: "slide-up 0.8s ease 0.75s both" }}>
          Sosyal Yardım Eğitim ve Araştırma Derneği
        </p>

        <div className="my-8 relative" style={{ animation: "slide-up 0.8s ease 0.9s both" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent rounded-2xl" />
          <p className="relative text-2xl sm:text-3xl md:text-4xl font-bold text-amber-300 py-4 px-6 italic">
            "İyilik bir çiçekle başlar,<br />
            <span className="text-amber-200">bin umut yeşerir."</span>
          </p>
        </div>

        <p className="text-cyan-100/80 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ animation: "slide-up 0.8s ease 1.05s both" }}>
          Allah rızası için salih amel işlemeyi, ilmi yaymayı ve ihtiyaç sahiplerine ulaşmayı kendimize hedef edinen gönüllü bir dayanışma topluluğuyuz.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animation: "slide-up 0.8s ease 1.2s both" }}>
          <button onClick={() => document.querySelector("#hakkimizda")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-400 text-white font-semibold rounded-full shadow-lg hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 text-sm sm:text-base">
            Bizi Tanıyın
          </button>
          <button onClick={() => document.querySelector("#iletisim")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 text-sm sm:text-base">
            Gönüllü Ol
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cyan-300/60 animate-bounce">
        <span className="text-xs font-medium tracking-widest uppercase">Keşfet</span>
        <ChevronDown className="w-5 h-5" />
      </div>

      {/* Smooth wave into Hakkımızda */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="wave-connector h-20">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="rgba(255,255,255,0.88)" />
        </svg>
      </div>
    </section>
  );
}
