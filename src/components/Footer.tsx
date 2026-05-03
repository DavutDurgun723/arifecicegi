import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-cyan-950 text-cyan-300/60 py-8 text-center text-sm border-t border-cyan-900">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-white flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.jpg" alt="Arife Çiçeği Logosu" className="w-full h-full object-cover" />
          </div>
          <span className="text-cyan-300 font-medium">Arife Çiçeği Derneği</span>
        </div>
        <p className="text-xs">
          © 2026 · Tüm hakları saklıdır.
        </p>
        <p className="text-xs flex items-center gap-1">
          <Heart className="w-3 h-3 text-rose-400" />
          Allah rızası için yapılmıştır.
        </p>
      </div>
    </footer>
  );
}
