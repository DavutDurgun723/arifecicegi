"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Birimlerimiz", href: "#birimler" },
  { label: "Faaliyetler", href: "#faaliyetler" },
  { label: "Eğitimler", href: "#egitimler" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-cyan-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleClick("#hero")}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden shadow-md group-hover:shadow-cyan-300 transition-shadow bg-white flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.jpg" alt="Arife Çiçeği Logosu" width={40} height={40} className="w-full h-full object-cover" />
            </div>
            <div className="text-left">
              <div
                className={`font-bold text-sm leading-tight transition-colors ${
                  scrolled ? "text-cyan-800" : "text-white"
                }`}
              >
                Arife Çiçeği
              </div>
              <div
                className={`text-xs leading-tight transition-colors ${
                  scrolled ? "text-cyan-600" : "text-cyan-200"
                }`}
              >
                Sosyal Yardım Eğitim ve Araştırma Derneği
              </div>
            </div>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleClick(l.href)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  scrolled
                    ? "text-gray-700 hover:text-cyan-700 hover:bg-cyan-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => handleClick("#iletisim")}
              className="ml-2 px-5 py-2 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white rounded-full text-sm font-semibold shadow-md hover:shadow-cyan-300 hover:scale-105 transition-all duration-200"
            >
              Gönüllü Ol
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-cyan-700 hover:bg-cyan-50" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/98 backdrop-blur-md border-b border-cyan-100 px-4 pb-4 pt-2 space-y-1">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleClick(l.href)}
              className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:text-cyan-700 hover:bg-cyan-50 transition-colors"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => handleClick("#iletisim")}
            className="w-full mt-2 px-4 py-3 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white rounded-xl text-sm font-semibold text-center"
          >
            Gönüllü Ol
          </button>
        </div>
      </div>
    </nav>
  );
}
