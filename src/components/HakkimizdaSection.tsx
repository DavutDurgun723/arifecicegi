"use client";
import { BookOpen, Heart, Users, Lightbulb } from "lucide-react";
import { TiltCard } from "./TiltCard";
import AnimatedHeading from "./AnimatedHeading";

const values = [
  { icon: Heart,     title: "Salih Amel",    color: "from-rose-400 to-rose-600",    bg: "bg-rose-50 border-rose-100",    desc: "Her çalışmamızı yalnızca Allah rızası için gerçekleştiriyor, güzel işler yaparak iyiliği yaymayı amaçlıyoruz." },
  { icon: BookOpen,  title: "İlim",          color: "from-blue-400 to-blue-600",    bg: "bg-blue-50 border-blue-100",    desc: '"Ey Rabbim! İlmimi artır de." (Tâhâ, 20/114) — Öğrendiklerimizi faydaya dönüştürerek bilinçli bir toplum için çalışıyoruz.' },
  { icon: Users,     title: "Dayanışma",     color: "from-amber-400 to-amber-600",  bg: "bg-amber-50 border-amber-100",  desc: "İhtiyaç sahiplerine ulaşarak dayanışmayı güçlendiriyor, yoksulları ve mazlumları unutmuyoruz." },
  { icon: Lightbulb, title: "Hayır Hasenat", color: "from-cyan-400 to-cyan-600", bg: "bg-cyan-50 border-cyan-100", desc: "Küçük adımlarla büyük iyilikler yapılır. Her gönüllümüzün katkısı kalıcı bir iz bırakır." },
];

const stats = [
  { num: "5+",  label: "Aktif Birim",        emoji: "🌿" },
  { num: "138", label: "Filistinli Kardeş",  emoji: "🤝" },
  { num: "35",  label: "Öğrenciye Çanta",    emoji: "🎒" },
  { num: "4+",  label: "Ülkeye Yardım",      emoji: "🌍" },
];

export default function HakkimizdaSection() {
  return (
    <section id="hakkimizda" className="relative section-light">
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedHeading as="span" className="inline-block bg-cyan-100 text-cyan-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Hakkımızda
          </AnimatedHeading>
          <AnimatedHeading delay={120} className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 block">
            Hikayemiz ve <span className="text-cyan-600">Misyonumuz</span>
          </AnimatedHeading>
          <div className="section-divider max-w-xs mx-auto mb-6" />
          <AnimatedHeading as="p" delay={200} className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Bir kaç genç kız varmış; dünyadaki mazlumların gönlüne dokunmak isteyen...
            Hikayenin devamı, sizlerle birlikte yazılıyor.
          </AnimatedHeading>
        </div>

        {/* Story + Stats */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-cyan-50 to-sky-50 rounded-3xl p-8 border border-cyan-100">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                <strong className="text-cyan-700">Arife Çiçeği Derneği</strong>, insanların birbirini desteklediği, ilmin ve iyiliğin önderlik ettiği bir toplum oluşturmak amacıyla kurulmuştur.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Misyonumuzun özünde <strong>Allah rızası</strong> yatmaktadır. Eğitim, kültür ve yardımlaşma ekseninde hareket ederek her yaş grubuna katkı sunmayı hedefliyoruz.
              </p>
            </div>
            <TiltCard tiltLimit={8} scale={1.02} spotlight className="rounded-2xl">
              <div className="relative bg-gradient-to-r from-cyan-900 to-sky-800 rounded-2xl p-6 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <p className="relative text-lg font-medium italic text-amber-200 mb-2">
                  "İşte onlardır hayırlı işlerde koşuşarak yarışanlar ve onlardır bu işlerde hep önde gidenler!"
                </p>
                <p className="relative text-cyan-300 text-sm font-medium">— Müminun, 40/61</p>
              </div>
            </TiltCard>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <TiltCard key={s.label} tiltLimit={10} scale={1.06} spotlight
                className="bg-gradient-to-br from-cyan-50 to-white border border-cyan-100 rounded-2xl cursor-default">
                <div className="p-6 text-center">
                  <div className="text-2xl mb-1">{s.emoji}</div>
                  <div className="text-3xl font-bold text-cyan-600 mb-1">{s.num}</div>
                  <div className="text-xs text-gray-500 font-medium">{s.label}</div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <TiltCard key={v.title} tiltLimit={12} scale={1.04} spotlight
              className={`${v.bg} rounded-2xl border cursor-default`}>
              <div className="p-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${v.color} flex items-center justify-center mb-4 shadow-md`}
                  style={{ animation: `slide-up 0.6s ease ${i * 80 + 200}ms both` }}>
                  <v.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="wave-connector h-16">
          <path d="M0,0 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="rgba(249,250,251,0.90)" />
        </svg>
      </div>
    </section>
  );
}
