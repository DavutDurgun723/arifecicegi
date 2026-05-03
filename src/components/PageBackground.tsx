"use client";

/*
  Sayfanın tamamını kaplayan sabit arka plan:
  - Dikey renk gradyanı (hero koyu → orta açık → alt koyu)
  - Yavaş dönen dev mandala / çiçek SVG
  - Yüzen yaprak parçacıkları
*/

const PETALS_DATA = [
  { cx: 15, cy: 12, r: 3, delay: "0s", dur: "8s" },
  { cx: 80, cy: 25, r: 2, delay: "1.5s", dur: "10s" },
  { cx: 5,  cy: 55, r: 2.5, delay: "3s", dur: "9s" },
  { cx: 92, cy: 60, r: 2, delay: "0.5s", dur: "11s" },
  { cx: 40, cy: 8,  r: 1.5, delay: "2s", dur: "7s" },
  { cx: 65, cy: 88, r: 3, delay: "4s", dur: "12s" },
  { cx: 20, cy: 78, r: 2, delay: "1s", dur: "9s" },
  { cx: 88, cy: 42, r: 1.5, delay: "3.5s", dur: "8s" },
];

export default function PageBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Dikey gradyan — sayfanın tamamı için tek renk haritası */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0a3447 0%, #0e7490 8%, #ffffff 22%, #f9fafb 45%, #f0f9ff 60%, #f9fafb 72%, #0e7490 88%, #0a3447 100%)",
        }}
      />

      {/* Dev mandala — tüm sayfanın ortasına sabitlenmiş, yavaş dönen */}
      <div
        className="absolute"
        style={{
          top: "50%",
          left: "50%",
          width: "min(140vw, 140vh)",
          height: "min(140vw, 140vh)",
          transform: "translate(-50%, -50%)",
          animation: "rotate-slow 60s linear infinite",
          opacity: 0.04,
        }}
      >
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Dış çember halkalar */}
          <circle cx="200" cy="200" r="195" stroke="#22d3ee" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="180" stroke="#22d3ee" strokeWidth="0.3" />
          <circle cx="200" cy="200" r="160" stroke="#d4a017" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="140" stroke="#22d3ee" strokeWidth="0.3" />
          <circle cx="200" cy="200" r="120" stroke="#22d3ee" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="90"  stroke="#d4a017" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="60"  stroke="#22d3ee" strokeWidth="0.3" />
          <circle cx="200" cy="200" r="30"  stroke="#22d3ee" strokeWidth="0.5" />

          {/* 16 uzun ışın */}
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 22.5 * Math.PI) / 180;
            const x2 = (200 + 195 * Math.cos(angle)).toFixed(3);
            const y2 = (200 + 195 * Math.sin(angle)).toFixed(3);
            return (
              <line key={i} x1="200" y1="200" x2={x2} y2={y2}
                stroke="#22d3ee" strokeWidth="0.3" />
            );
          })}

          {/* 8 büyük taç yaprak — dış */}
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * 45 * Math.PI) / 180;
            const cx = (200 + 155 * Math.cos(a)).toFixed(2);
            const cy = (200 + 155 * Math.sin(a)).toFixed(2);
            return (
              <ellipse key={i} cx={cx} cy={cy} rx="28" ry="14"
                stroke="#22d3ee" strokeWidth="0.6" fill="none"
                transform={`rotate(${i * 45 + 90}, ${cx}, ${cy})`} />
            );
          })}

          {/* 8 orta taç yaprak */}
          {Array.from({ length: 8 }).map((_, i) => {
            const a = ((i * 45 + 22.5) * Math.PI) / 180;
            const cx = (200 + 110 * Math.cos(a)).toFixed(2);
            const cy = (200 + 110 * Math.sin(a)).toFixed(2);
            return (
              <ellipse key={i} cx={cx} cy={cy} rx="20" ry="10"
                stroke="#d4a017" strokeWidth="0.6" fill="none"
                transform={`rotate(${i * 45 + 112.5}, ${cx}, ${cy})`} />
            );
          })}

          {/* 12 iç küçük yaprak */}
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i * 30 * Math.PI) / 180;
            const cx = (200 + 65 * Math.cos(a)).toFixed(2);
            const cy = (200 + 65 * Math.sin(a)).toFixed(2);
            return (
              <ellipse key={i} cx={cx} cy={cy} rx="12" ry="6"
                stroke="#22d3ee" strokeWidth="0.5" fill="none"
                transform={`rotate(${i * 30 + 90}, ${cx}, ${cy})`} />
            );
          })}

          {/* Merkez çiçek */}
          {Array.from({ length: 6 }).map((_, i) => {
            const a = (i * 60 * Math.PI) / 180;
            const cx = (200 + 22 * Math.cos(a)).toFixed(2);
            const cy = (200 + 22 * Math.sin(a)).toFixed(2);
            return (
              <circle key={i} cx={cx} cy={cy} r="8"
                stroke="#d4a017" strokeWidth="0.8" fill="none" />
            );
          })}
          <circle cx="200" cy="200" r="8" stroke="#d4a017" strokeWidth="1" fill="none" />
          <circle cx="200" cy="200" r="3" fill="#22d3ee" opacity="0.5" />

          {/* Köşe arabesk süslemeleri */}
          {Array.from({ length: 4 }).map((_, i) => {
            const a = (i * 90 * Math.PI) / 180;
            const cx = (200 + 182 * Math.cos(a)).toFixed(2);
            const cy = (200 + 182 * Math.sin(a)).toFixed(2);
            return (
              <g key={i}>
                <circle cx={cx} cy={cy} r="12" stroke="#d4a017" strokeWidth="0.6" fill="none" />
                <circle cx={cx} cy={cy} r="6"  stroke="#22d3ee" strokeWidth="0.4" fill="none" />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Ters yönde dönen iç halka */}
      <div
        className="absolute"
        style={{
          top: "50%",
          left: "50%",
          width: "min(70vw, 70vh)",
          height: "min(70vw, 70vh)",
          transform: "translate(-50%, -50%)",
          animation: "rotate-slow 40s linear infinite reverse",
          opacity: 0.05,
        }}
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i * 30 * Math.PI) / 180;
            const cx = (100 + 75 * Math.cos(a)).toFixed(3);
            const cy = (100 + 75 * Math.sin(a)).toFixed(3);
            return (
              <ellipse key={i} cx={cx} cy={cy} rx="18" ry="8"
                stroke="#d4a017" strokeWidth="0.8" fill="none"
                transform={`rotate(${i * 30 + 90}, ${cx}, ${cy})`} />
            );
          })}
          <circle cx="100" cy="100" r="90" stroke="#22d3ee" strokeWidth="0.4" />
          <circle cx="100" cy="100" r="60" stroke="#d4a017" strokeWidth="0.4" />
        </svg>
      </div>

      {/* Yüzen yaprak parçacıkları */}
      {PETALS_DATA.map((p, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${p.cx}%`,
            top: `${p.cy}%`,
            width: `${p.r * 8}px`,
            height: `${p.r * 8}px`,
            animation: `float ${p.dur} ease-in-out infinite`,
            animationDelay: p.delay,
            opacity: 0.12,
          }}
        >
          <svg viewBox="0 0 20 20" fill="#22d3ee" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="10" cy="10" rx="4" ry="9"
              transform="rotate(30 10 10)" />
            <ellipse cx="10" cy="10" rx="4" ry="9"
              transform="rotate(90 10 10)" />
            <ellipse cx="10" cy="10" rx="4" ry="9"
              transform="rotate(150 10 10)" />
            <circle cx="10" cy="10" r="2" />
          </svg>
        </div>
      ))}
    </div>
  );
}
