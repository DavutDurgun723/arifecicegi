"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { TiltCard } from "./TiltCard";
import AnimatedHeading from "./AnimatedHeading";

const ayetler = [
  { arapca: "إِنَّ مَعَ الْعُسْرِ يُسْرًا", meal: "Gerçekten güçlükle birlikte kolaylık vardır.", sure: "İnşirah Suresi", ayet: "94:6", tema: "Sabır & Umut" },
  { arapca: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا", meal: "Kim Allah'tan korkarsa, Allah ona bir çıkış yolu açar.", sure: "Talak Suresi", ayet: "65:2", tema: "Takva & Kurtuluş" },
  { arapca: "وَبَشِّرِ الصَّابِرِينَ", meal: "Sabredenleri müjdele.", sure: "Bakara Suresi", ayet: "2:155", tema: "Sabır" },
  { arapca: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ", meal: "Şüphesiz Allah sabredenlerle beraberdir.", sure: "Bakara Suresi", ayet: "2:153", tema: "İlahi Beraberlik" },
  { arapca: "وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ", meal: "İyilik ve takva üzere yardımlaşın.", sure: "Maide Suresi", ayet: "5:2", tema: "Dayanışma" },
  { arapca: "قُل رَّبِّ زِدْنِي عِلْمًا", meal: "De ki: Ey Rabbim! İlmimi artır.", sure: "Tâhâ Suresi", ayet: "20:114", tema: "İlim Talebi" },
  { arapca: "وَقُولُوا لِلنَّاسِ حُسْنًا", meal: "İnsanlara güzel söz söyleyin.", sure: "Bakara Suresi", ayet: "2:83", tema: "Güzel Söz" },
];

function getDayIndex() {
  const epoch = Date.UTC(2024, 0, 1);
  const d = new Date();
  const now = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
  return Math.floor((now - epoch) / 86400000) % ayetler.length;
}

export default function GununAyetiSection() {
  const dayIdx = getDayIndex();
  const [idx, setIdx] = useState(dayIdx);
  const [fading, setFading] = useState(false);

  const change = (dir: 1 | -1) => {
    if (fading) return;
    setFading(true);
    setTimeout(() => { setIdx((p) => (p + dir + ayetler.length) % ayetler.length); setFading(false); }, 280);
  };

  const a = ayetler[idx];

  return (
    <section className="relative section-gray pt-8 pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <AnimatedHeading as="span" className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <BookOpen className="w-4 h-4" /> Günün Ayeti
          </AnimatedHeading>
          <AnimatedHeading delay={100} className="text-3xl sm:text-4xl font-bold text-gray-900 block">
            Kalbimizden <span className="text-amber-600">Kelam</span>
          </AnimatedHeading>
          <div className="section-divider max-w-xs mx-auto mt-4" />
        </div>

        <TiltCard tiltLimit={5} scale={1.01} effect="gravitate" spotlight
          className="rounded-3xl overflow-hidden cursor-default">
          {/* Arka plan */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-950 via-cyan-900 to-cyan-800" />
          <div className="absolute inset-0 pattern-bg opacity-20" />
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-cyan-400/10 rounded-full pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-cyan-300/10 rounded-full pointer-events-none" />

          {/* İçerik */}
          <div className="relative z-10" style={{ opacity: fading ? 0 : 1, transition: "opacity 0.28s ease" }}>
            <div className="flex justify-center pt-10 pb-4">
              <span className="bg-amber-400/20 border border-amber-300/30 text-amber-200 text-xs font-semibold px-4 py-1.5 rounded-full tracking-widest uppercase">
                {a.tema}
              </span>
            </div>

            <div className="text-center px-6 sm:px-12 py-6">
              <p dir="rtl" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-loose mb-8" style={{ fontFamily: "serif" }}>
                {a.arapca}
              </p>
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-px bg-gradient-to-r from-transparent to-amber-400/50 w-24" />
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <div className="h-px bg-gradient-to-l from-transparent to-amber-400/50 w-24" />
              </div>
              <p className="text-xl sm:text-2xl font-medium italic text-amber-200 mb-4 max-w-xl mx-auto leading-relaxed">
                "{a.meal}"
              </p>
              <p className="text-cyan-300 font-medium text-sm">{a.sure} · {a.ayet}</p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between px-8 pb-6">
              <button onClick={() => change(-1)} className="flex items-center gap-2 text-cyan-300 hover:text-white transition-colors text-sm font-medium">
                <ChevronLeft className="w-5 h-5" /> Önceki
              </button>
              <div className="flex gap-1.5">
                {ayetler.map((_, i) => (
                  <button key={i} onClick={() => { if (!fading) { setFading(true); setTimeout(() => { setIdx(i); setFading(false); }, 280); } }}
                    className="rounded-full transition-all duration-300"
                    style={{ width: i === idx ? 24 : 8, height: 8,
                      background: i === idx ? "#fbbf24" : i === dayIdx ? "rgba(251,191,36,0.4)" : "rgba(255,255,255,0.2)" }} />
                ))}
              </div>
              <button onClick={() => change(1)} className="flex items-center gap-2 text-cyan-300 hover:text-white transition-colors text-sm font-medium">
                Sonraki <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {idx === dayIdx && (
              <div className="text-center pb-6">
                <span className="text-xs text-cyan-400/70">✦ Bugünün ayeti</span>
              </div>
            )}
          </div>
        </TiltCard>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="wave-connector h-16">
          <path d="M0,30 C360,0 1080,60 1440,20 L1440,60 L0,60 Z" fill="rgba(249,250,251,0.90)" />
        </svg>
      </div>
    </section>
  );
}
