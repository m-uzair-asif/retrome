"use client"
import { Copyright } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#f4f1e1] flex flex-col text-black">
      <main className="flex flex-1 items-center justify-center px-4">
        <div className="flex flex-col items-center text-center gap-8 animate-fade-in">
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight 
                       font-['Syne'] text-[#1a1a1a]
                       drop-shadow-[3px_3px_0_#FA812F]
                       animate-slide-down"
          >
            Frontend Developer
          </h1>

          <p
            className="max-w-md text-lg md:text-xl font-medium text-gray-800 
                       leading-relaxed bg-gradient-to-r from-[#FA812F] via-[#ff9d5c] to-[#FA812F]
                       bg-clip-text text-transparent"
          >
            Crafting pixel-perfect UIs with Next.js & Tailwind CSS
          </p>

          <button
            onClick={() => router.push('/contact')}
            className="block text-center px-6 py-3 text-lg font-semibold bg-[#1a1a1a] text-white
                        border-3 border-[#FA812F] rounded-none
                        shadow-[3px_3px_0_#FA812F]
                        hover:shadow-[2px_2px_0_#FA812F] hover:translate-x-[2px] hover:translate-y-[2px]
                        active:shadow-none active:translate-x-[4px] active:translate-y-[2px]
                        transition-all duration-150 cursor-pointer"
          >
            Let{"'"}s Connect
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-center gap-2 py-4 font-mono text-sm text-gray-700">
        <Copyright size={18} className="text-[#FA812F]" />
        <span className="tracking-wide">
          {new Date().getFullYear()} Muhammad Uzair Asif • All rights reserved
        </span>
      </footer>

      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(250,129,47,0.12),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(250,129,47,0.08),transparent_70%)]" />
    </div>
  );
}
