"use client";
import { Heart, Share2, PlayCircle, ExternalLink, Link2, MessageSquare } from "lucide-react";
import { TiltCard } from "./TiltCard";
import AnimatedHeading from "./AnimatedHeading";

const SOSYAL = [
  {
    label: "Instagram",
    handle: "@arifecicegidernegi",
    href: "https://www.instagram.com/arifecicegidernegi/",
    icon: Share2,
    gradient: "from-pink-500 via-rose-500 to-orange-400",
    shadow: "hover:shadow-pink-500/30",
    emoji: "📸",
  },
  {
    label: "YouTube",
    handle: "Arife Çiçeği",
    href: "https://www.youtube.com/@arifecicegi",
    icon: PlayCircle,
    gradient: "from-red-500 to-rose-600",
    shadow: "hover:shadow-red-500/30",
    emoji: "🎬",
  },
  {
    label: "X (Twitter)",
    handle: "@arifecicegidrn",
    href: "https://x.com/arifecicegidrn",
    icon: MessageSquare,
    gradient: "from-gray-800 to-gray-900",
    shadow: "hover:shadow-gray-500/30",
    emoji: "🐦",
  },
  {
    label: "TikTok",
    handle: "@arife.cicekleri",
    href: "https://www.tiktok.com/@arife.cicekleri",
    icon: PlayCircle,
    gradient: "from-gray-900 via-pink-600 to-cyan-500",
    shadow: "hover:shadow-cyan-500/30",
    emoji: "🎵",
  },
  {
    label: "LinkedIn",
    handle: "arifecicegidrn",
    href: "https://www.linkedin.com/company/arifecicegidrn/",
    icon: Link2,
    gradient: "from-blue-600 to-blue-700",
    shadow: "hover:shadow-blue-500/30",
    emoji: "💼",
  },
];

export default function IletisimSection() {
  return (
    <section id="iletisim" className="relative section-dark py-24 overflow-hidden">
      {/* Decorative rings */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/10 rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute inset-0 pattern-bg opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full overflow-hidden shadow-2xl glow-animation float-animation bg-white p-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.jpg" alt="Arife Çiçeği Logosu" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>

        <AnimatedHeading className="text-3xl sm:text-4xl font-bold text-white mb-4 block">
          Sizi de Aramızda <span className="text-amber-300">Görmek İsteriz</span>
        </AnimatedHeading>
        <AnimatedHeading as="p" delay={100} className="text-cyan-200 text-lg max-w-xl mx-auto mb-6 leading-relaxed">
          Ekibimizde yer almak, gönüllü çalışmalarında bulunmak istersen her zaman bekleriz.
        </AnimatedHeading>

        {/* Ayet */}
        <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 mb-12">
          <p className="text-amber-200 italic font-medium">"Güzel işler yaparak iyiliği yaymayı amaçlıyoruz."</p>
        </div>

        {/* CTA cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-14">
          {[
            { emoji: "🤝", title: "Gönüllü Ol",   desc: "Hangi birimde yer almak istediğini bize ilet, süreci birlikte değerlendirelim." },
            { emoji: "💰", title: "Bağış Yap",     desc: "Kumbara, bireysel bağış veya proje desteğiyle faaliyetlerimize ortak ol." },
            { emoji: "📢", title: "Yaygınlaştır", desc: "Sosyal medyada bizi takip et, etkinliklerimizi çevrende paylaş." },
          ].map((c) => (
            <TiltCard key={c.title} tiltLimit={8} scale={1.04} spotlight
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl cursor-default">
              <div className="p-5 text-left">
                <div className="text-2xl mb-2">{c.emoji}</div>
                <h3 className="font-bold text-white mb-1 text-sm">{c.title}</h3>
                <p className="text-cyan-200/80 text-xs leading-relaxed">{c.desc}</p>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Social media grid */}
        <AnimatedHeading className="text-white/60 text-sm font-semibold tracking-widest uppercase mb-6 block">
          Bizi Takip Edin
        </AnimatedHeading>

        <div className="flex flex-wrap justify-center gap-4">
          {SOSYAL.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-3 bg-gradient-to-r ${s.gradient} text-white pl-4 pr-5 py-3 rounded-2xl font-semibold text-sm shadow-lg ${s.shadow} hover:scale-105 hover:shadow-xl transition-all duration-200`}
            >
              <span className="text-lg">{s.emoji}</span>
              <div className="text-left">
                <div className="text-xs opacity-70 leading-none mb-0.5">{s.label}</div>
                <div className="leading-none">{s.handle}</div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity ml-1" />
            </a>
          ))}
        </div>

        <p className="mt-10 text-cyan-300/50 text-sm flex items-center justify-center gap-1">
          <Heart className="w-3 h-3 text-rose-400" />
          Allah rızası için, adım adım.
        </p>
      </div>
    </section>
  );
}
