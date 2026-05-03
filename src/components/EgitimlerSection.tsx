"use client";
import { Pencil, BookOpen, Library, Building2, Video, AlertCircle } from "lucide-react";
import { TiltCard } from "./TiltCard";
import AnimatedHeading from "./AnimatedHeading";

const egitimler = [
  { icon: Pencil,   emoji: "🎨", title: "İllüstrasyon Dersi",      badge: "Yeni",   gradient: "from-violet-500 to-purple-600", details: ["Hanımlara özel program", "10 haftalık eğitim", "Hibrit format (yüz yüze + online)"], desc: "Sanatın gücüyle anlatımı keşfedin. Temel çizimden illüstrasyona uzanan bu yolculukta hem teknik hem yaratıcı becerilerinizi geliştirin." },
  { icon: BookOpen, emoji: "📖", title: "Kur'an'ı Anlama Dersi",   badge: "Yıllık", gradient: "from-cyan-500 to-cyan-700",  details: ["Sohbet formatında", "Bir yıl süre", "Kapsamlı içerik"], desc: '"Ey Rabbim! İlmimi artır de." (Tâhâ 20/114) — Kur\'an\'ı anlamlandırmak, hayatımıza taşımak için birlikte öğreniyoruz.' },
  { icon: Library,  emoji: "📚", title: "Kitap Tahlil Grupları",   badge: "Planlı", gradient: "from-blue-500 to-indigo-600",   details: ["İleri tarihli planlama", "Kitap okumaları", "Tahlil oturumları"], desc: "Seçilmiş eserleri birlikte okuyup tartışacağımız bu gruplar, fikir dünyamızı genişletmek için tasarlandı." },
];

const sosyal = [
  { icon: Building2,    emoji: "🕌", title: "Camii Buluşmaları",        desc: "Ortaokul, lise ve üniversite yaş grubu için sohbet, namaz ve camii bilinci kazandırma hedefli etkinlikler.", tags: ["Ortaokul", "Lise", "Üniversite"] },
  { icon: Video,        emoji: "🐋", title: "Mucize 1001 Serisi",        desc: "Tanıtım medya ekibi ile ortak çalışma; hayvanların olağanüstü özelliklerini ele alan YouTube videoları serimiz.", tags: ["YouTube", "Bilim", "İman"] },
  { icon: AlertCircle,  emoji: "🚫", title: "Kötülüğün Endüstrisi",     desc: "Boykot markalarını ve marka yalanlarını ele alan özel program; bilinçli tüketim ve farkındalık üzerine çalışmalar.", tags: ["Boykot", "Bilinçli Tüketim", "Farkındalık"] },
];

export default function EgitimlerSection() {
  return (
    <section id="egitimler" className="relative section-gray pt-8 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedHeading as="span" className="inline-block bg-cyan-100 text-cyan-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            2025–2026 Güz Dönemi
          </AnimatedHeading>
          <AnimatedHeading delay={100} className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 block">
            <span className="text-cyan-600">Eğitimler</span> ve Sosyal Faaliyetler
          </AnimatedHeading>
          <div className="section-divider max-w-xs mx-auto mb-6" />
          <AnimatedHeading as="p" delay={180} className="text-gray-500 text-lg max-w-xl mx-auto">
            Yeni dönemin heyecanıyla hazırladığımız programlarımıza göz atın.
          </AnimatedHeading>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {egitimler.map((e) => (
            <TiltCard key={e.title} tiltLimit={10} scale={1.04} spotlight
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col cursor-default">
              <div className={`bg-gradient-to-r ${e.gradient} p-6 text-white`}>
                <div className="text-4xl mb-3">{e.emoji}</div>
                <div className="flex items-start justify-between">
                  <h3 className="font-bold text-lg leading-tight">{e.title}</h3>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-white/20 text-white">{e.badge}</span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <ul className="space-y-2 mb-4">
                  {e.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />{d}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{e.desc}</p>
                <button onClick={() => document.querySelector("#iletisim")?.scrollIntoView({ behavior: "smooth" })}
                  className="mt-5 w-full py-2.5 rounded-xl border-2 border-cyan-200 text-cyan-700 font-semibold text-sm hover:bg-cyan-50 transition-colors">
                  Kayıt Bilgisi Al
                </button>
              </div>
            </TiltCard>
          ))}
        </div>

        <div className="relative my-10 flex items-center justify-center">
          <div className="section-divider flex-1" />
          <span className="mx-6 bg-gray-50 px-4 py-1 rounded-full text-sm font-semibold text-gray-400 border border-gray-200">Sosyal Faaliyetler</span>
          <div className="section-divider flex-1" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {sosyal.map((s) => (
            <TiltCard key={s.title} tiltLimit={10} scale={1.04} spotlight
              className="bg-white rounded-2xl border border-gray-100 shadow-sm cursor-default">
              <div className="p-6">
                <div className="text-3xl mb-4">{s.emoji}</div>
                <h3 className="font-bold text-gray-800 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="bg-cyan-50 text-cyan-700 border border-cyan-100 px-3 py-0.5 rounded-full text-xs font-medium">{t}</span>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="wave-connector h-16">
          <path d="M0,20 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="rgba(10,52,71,0.92)" />
        </svg>
      </div>
    </section>
  );
}
