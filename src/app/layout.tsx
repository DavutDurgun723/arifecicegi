import type { Metadata } from "next";
import "./globals.css";
import PageBackground from "@/components/PageBackground";

export const metadata: Metadata = {
  title: "Arife Çiçeği Derneği",
  description: "Arife Çiçeği Sosyal Yardım Eğitim ve Araştırma Derneği – İyilik bir çiçekle başlar, bin umut yeşerir.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <PageBackground />
        {children}
      </body>
    </html>
  );
}
