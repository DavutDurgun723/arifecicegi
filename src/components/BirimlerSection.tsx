"use client";
import { useState } from "react";
import { Globe, Megaphone, GraduationCap, PiggyBank, Network, ChevronRight } from "lucide-react";
import { TiltCard } from "./TiltCard";
import AnimatedHeading from "./AnimatedHeading";

const birimler = [
  { id: "sosyal",   icon: Globe,         title: "Sosyal Faaliyet Birimi", short: "Farkındalık ve sosyal etkinlikler",  color: "from-violet-500 to-purple-600", light: "bg-violet-50 border-violet-100", text: "text-violet-700", desc: "Çeşitli farkındalık etkinlikleri olmak üzere birçok alanda sosyal faaliyet etkinlikleri yapmaktayız. Uzaydan tarıma, kimya deneylerinden bitkilere birçok konuda çeşitli etkinlikler düzenlemekteyiz.", tags: ["Tarım Zirvesi", "Mum Boyama", "Kolaj Etkinlikleri", "İftar Buluşması"] },
  { id: "tanitim",  icon: Megaphone,     title: "Tanıtım Medya Birimi",   short: "İletişim ve medya çalışmaları",      color: "from-sky-500 to-blue-600",      light: "bg-sky-50 border-sky-100",     text: "text-sky-700",    desc: "Derneğin faaliyetlerini kamuoyuna duyurmak, farkındalık oluşturmak ve destek sağlamak amacıyla iletişim ve medya çalışmalarını yürütür.", tags: ["Sosyal Medya", "Video & Fotoğraf", "Basın Bülteni", "Afişler"] },
  { id: "egitim",   icon: GraduationCap, title: "Eğitim Birimi",          short: "Kültürel ve dini eğitimler",         color: "from-cyan-500 to-cyan-700",  light: "bg-cyan-50 border-cyan-100", text: "text-cyan-700", desc: "Çocuklardan yetişkinlere kadar her yaş grubuna yönelik çeşitli kültürel ve dini eğitimler düzenliyoruz. Değer temelli yaklaşımımızla hem akademik hem manevi gelişimi destekliyoruz.", tags: ["Kudüs Yaz Okulu", "Kur'an Eğitimi", "İllüstrasyon", "Kitap Tahlili"] },
  { id: "fon",      icon: PiggyBank,     title: "Proje Fon Birimi",       short: "Şeffaf finansal yönetim",            color: "from-amber-500 to-orange-600",  light: "bg-amber-50 border-amber-100", text: "text-amber-700",  desc: "Kumbaralar, bireysel bağışlar, proje fonları ve düzenli aidatlar aracılığıyla kaynak topluyoruz. Tüm gelirler şeffaf biçimde kayıt altına alınır.", tags: ["Kumbaralar", "Bireysel Bağış", "Proje Fonları", "Aidatlar"] },
  { id: "teskilat", icon: Network,       title: "Teşkilatlanma Birimi",   short: "Gönüllü koordinasyonu",              color: "from-rose-500 to-pink-600",     light: "bg-rose-50 border-rose-100",   text: "text-rose-700",   desc: "Ekipleri oluşturmak, görev dağılımını yapmak, iletişimi güçlendirmek ve yeni gönüllülerin sürece dahil olmasını sağlamak. Derneğin düzenini ve sürekliliğini sağlayan yapı taşlarından biridir.", tags: ["Ekip Kurma", "Görev Dağılımı", "Gönüllü Katılım", "İletişim"] },
];

export default function BirimlerSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="birimler" className="relative section-gray pt-8 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedHeading as="span" className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Yapımız
          </AnimatedHeading>
          <AnimatedHeading delay={100} className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 block">
            <span className="text-purple-600">Birimlerimiz</span>
          </AnimatedHeading>
          <div className="section-divider max-w-xs mx-auto mb-6" />
          <AnimatedHeading as="p" delay={180} className="text-gray-500 text-lg max-w-xl mx-auto">
            Ekiplerimiz, sizleri aramızda görmekten mutluluk duyarız.
          </AnimatedHeading>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {birimler.map((b) => {
            const isActive = active === b.id;
            return (
              <TiltCard key={b.id} tiltLimit={isActive ? 0 : 8} scale={isActive ? 1 : 1.03} spotlight={!isActive}
                onClick={() => setActive(isActive ? null : b.id)}
                className={`rounded-2xl border overflow-hidden cursor-pointer transition-all duration-300 ${isActive ? "ring-2 ring-offset-2 ring-cyan-400" : ""} ${b.light}`}>
                <div className={`bg-gradient-to-r ${b.color} p-6 text-white`}>
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-3">
                      <b.icon className="w-6 h-6 text-white" />
                    </div>
                    <ChevronRight className={`w-5 h-5 text-white/70 transition-transform duration-300 ${isActive ? "rotate-90" : ""}`} />
                  </div>
                  <h3 className="font-bold text-lg leading-tight mb-1">{b.title}</h3>
                  <p className="text-white/70 text-sm">{b.short}</p>
                </div>
                <div className={`overflow-hidden transition-all duration-500 ${isActive ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{b.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {b.tags.map((tag) => (
                        <span key={tag} className={`${b.text} bg-white border px-3 py-1 rounded-full text-xs font-medium`}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
                {!isActive && (
                  <div className="px-6 pb-4">
                    <div className="flex flex-wrap gap-2 pt-2">
                      {b.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className={`${b.text} bg-white border px-2.5 py-0.5 rounded-full text-xs font-medium`}>{tag}</span>
                      ))}
                      {b.tags.length > 2 && <span className="text-gray-400 text-xs py-0.5">+{b.tags.length - 2} daha</span>}
                    </div>
                  </div>
                )}
              </TiltCard>
            );
          })}

          {/* Join card */}
          <TiltCard tiltLimit={10} scale={1.04} spotlight className="rounded-2xl border border-dashed border-cyan-300 bg-gradient-to-br from-cyan-50/90 to-sky-50/90 cursor-pointer">
            <div className="p-8 flex flex-col items-center justify-center text-center h-full min-h-48">
              <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mb-4 float-animation">
                <span className="text-3xl">🌸</span>
              </div>
              <h3 className="font-bold text-cyan-800 text-lg mb-2">Siz de Katılın!</h3>
              <p className="text-cyan-600 text-sm mb-4 leading-relaxed">Ekibimizde yer almak isteyen herkese kapımız açık.</p>
              <button onClick={() => document.querySelector("#iletisim")?.scrollIntoView({ behavior: "smooth" })}
                className="px-5 py-2.5 bg-cyan-600 text-white rounded-full text-sm font-semibold hover:bg-cyan-700 transition-colors">
                Gönüllü Ol
              </button>
            </div>
          </TiltCard>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="wave-connector h-16">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="rgba(255,255,255,0.88)" />
        </svg>
      </div>
    </section>
  );
}
