"use client"
import { Copyright } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#1e1e1e] flex flex-col text-white">
      <main className="flex flex-1 items-center justify-center px-4">
        <div className="flex flex-col items-center text-center gap-8 animate-fade-in">
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight 
                       font-['Syne'] text-white
                       drop-shadow-[3px_3px_0_#000000]
                       animate-slide-down"
          >
            Frontend Developer
          </h1>

          <p
            className="max-w-md text-lg md:text-xl font-medium text-white 
                       leading-relaxed
                       bg-clip-text text-white"
          >
            Crafting pixel-perfect UIs with Next.js & Tailwind CSS
          </p>

          <button
            onClick={() => router.push('/contact')}
            className="block text-center px-6 py-3 text-lg font-semibold bg-[#000000] text-white
                        border-3 border-[#ffffff] rounded-none
                        shadow-[3px_3px_0_#ffffff]
                        hover:shadow-[2px_2px_0_#ffffff] hover:translate-x-[2px] hover:translate-y-[2px]
                        active:shadow-none active:translate-x-[4px] active:translate-y-[2px]
                        transition-all duration-150 cursor-pointer"
          >
            Let{"'"}s Connect
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-center gap-2 py-4 font-mono text-sm text-white">
        <Copyright size={18} className="text-[#ffffff]" />
        <span className="tracking-wide">
          {new Date().getFullYear()} Muhammad Uzair Asif • All rights reserved
        </span>
      </footer>
    </div>
  );
}
