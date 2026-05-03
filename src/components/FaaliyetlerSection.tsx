"use client";
import { MapPin, Gift, BookOpen, Users, ShoppingBag, Palette } from "lucide-react";
import { TiltCard } from "./TiltCard";
import AnimatedHeading from "./AnimatedHeading";

const faaliyetler = [
  { emoji: "🇵🇸", title: "Filistin Yardımı",          tag: "Yardım",    tagColor: "bg-red-100 text-red-700",      border: "border-l-red-400",     desc: "YEÇED aracılığıyla 138 kardeşimize bayramlık ulaştırıldı. Acil yardım paketleri de gönderildi." },
  { emoji: "🎒",   title: "Bir Çanta Bir Gelecek",     tag: "Eğitim",    tagColor: "bg-blue-100 text-blue-700",    border: "border-l-blue-400",    desc: "Doğu Türkistanlı kardeşlerimiz ve köy okullarındaki 35 öğrenciye kırtasiye malzemesi dolu çantalar hediye edildi." },
  { emoji: "🕌",   title: "Kudüs Yaz Okulu",           tag: "Eğitim",    tagColor: "bg-cyan-100 text-cyan-700", border: "border-l-cyan-400", desc: "Kudüs bilinci, değerler eğitimi, sosyal etkinlikler ve uygulamalı atölyelerle zengin bir öğrenme ortamı sunuldu." },
  { emoji: "🌾",   title: "Tarım Zirvesi",             tag: "Sosyal",    tagColor: "bg-green-100 text-green-700",  border: "border-l-green-400",   desc: "Gıda güvenliği ve sürdürülebilir tarım konularında farkındalık oluşturmak amacıyla zirve düzenlendi." },
  { emoji: "🍋",   title: "Filistin Acil Yardım Kermesi", tag: "Kampanya", tagColor: "bg-amber-100 text-amber-700", border: "border-l-amber-400",  desc: "Limonata, karpuz ve Filistin temalı ürünlerin satışından elde edilen gelirin tamamı Filistin'e aktarıldı." },
  { emoji: "🎨",   title: "Bizce Sanat",               tag: "Sosyal",    tagColor: "bg-pink-100 text-pink-700",    border: "border-l-pink-400",    desc: "Mum boyama, kolaj ve yaratıcı el işleri atölyelerimizde sanatın iyileştirici gücü keşfedildi." },
  { emoji: "🕋",   title: "Mekke & Medine Yardımı",   tag: "Yardım",    tagColor: "bg-yellow-100 text-yellow-700", border: "border-l-yellow-400", desc: "Mukaddes topraklardaki ihtiyaç sahiplerine paket gönderimi yapıldı." },
  { emoji: "🌍",   title: "Zanzibar Yardımı",          tag: "Yardım",    tagColor: "bg-teal-100 text-teal-700",    border: "border-l-teal-400",    desc: "Afrika'da Zanzibar'daki kardeşlerimize paket gönderimi gerçekleştirildi." },
];

export default function FaaliyetlerSection() {
  return (
    <section id="faaliyetler" className="relative section-light pt-8 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedHeading as="span" className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            2024–2025
          </AnimatedHeading>
          <AnimatedHeading delay={100} className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 block">
            <span className="text-amber-600">Faaliyetlerimiz</span>
          </AnimatedHeading>
          <div className="section-divider max-w-xs mx-auto mb-6" />
          <AnimatedHeading as="p" delay={180} className="text-gray-500 text-lg max-w-xl mx-auto">
            Bir yıl içinde hayata geçirdiğimiz projeler ve etkinlikler.
          </AnimatedHeading>
        </div>

        {/* Ayet banner */}
        <TiltCard tiltLimit={4} scale={1.01} spotlight effect="gravitate"
          className="rounded-3xl mb-12 overflow-hidden cursor-default">
          <div className="bg-gradient-to-r from-cyan-950 to-cyan-900 p-8 text-center relative">
            <div className="absolute inset-0 opacity-10 pattern-bg" />
            <p className="relative text-xl sm:text-2xl font-medium italic text-amber-300 mb-2">
              "Fakirleri, yoksulları doyurmazdık."
            </p>
            <p className="relative text-cyan-300 text-sm">— Müdessir, 74/44</p>
            <p className="relative text-cyan-100/70 text-sm mt-3 max-w-lg mx-auto">
              Bu ayet bizim için bir öz eleştiri kaynağıdır. Bir gün "doyurmazdık" demek zorunda kalmamak için çalışıyoruz.
            </p>
          </div>
        </TiltCard>

        {/* Activity grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {faaliyetler.map((f) => (
            <TiltCard key={f.title} tiltLimit={10} scale={1.05} spotlight
              className={`bg-white rounded-2xl border border-gray-100 border-l-4 ${f.border} shadow-sm cursor-default`}>
              <div className="p-5">
                <div className="text-3xl mb-3">{f.emoji}</div>
                <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2 ${f.tagColor}`}>{f.tag}</span>
                <h3 className="font-bold text-gray-800 mb-2 text-sm">{f.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-gradient-to-r from-cyan-50/90 to-sky-50/90 rounded-3xl p-8 border border-cyan-100">
          <AnimatedHeading className="text-center text-xl font-bold text-cyan-800 mb-8 block">
            2024–2025 Faaliyet Özeti
          </AnimatedHeading>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "138", label: "Bayramlık Gönderilen Filistinli", emoji: "👗" },
              { num: "35",  label: "Okul Çantası Hediye", emoji: "🎒" },
              { num: "4+",  label: "Ülkeye Yardım Paketi", emoji: "📦" },
              { num: "10+", label: "Etkinlik ve Proje", emoji: "🌟" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl mb-2">{s.emoji}</div>
                <div className="text-2xl font-bold text-cyan-700">{s.num}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="wave-connector h-16">
          <path d="M0,20 C480,60 960,0 1440,40 L1440,60 L0,60 Z" fill="rgba(249,250,251,0.90)" />
        </svg>
      </div>
    </section>
  );
}
