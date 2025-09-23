import Header from "@/components/common/Header";
import { Copyright } from "lucide-react";

export default function Home() {
  return (
    <div className="text-black h-screen flex flex-col overflow-hidden">
      <Header />
      <main className="flex-1 border-l border-r border-gray-800 w-full max-w-[95%] mx-auto flex items-center p-2">
        <div className="flex flex-col gap-2 ">
          <h1 className="text-8xl font-bold text-center max-w-md">
            Frontend Developer
          </h1>
          <button className="border-2 border-gray-700 px-4 py-1.5 font-medium w-fit
              shadow-[4px_4px_0_#FA812F]
              active:shadow-[1.5px_1.5px_0_#FA812F]
              active:translate-x-[2px] active:translate-y-[2px]
              transition-all duration-150 cursor-pointer">
            Let{"'"}s Connect
          </button>
        </div>
      </main>

      <footer className="flex items-center justify-center gap-3 border-t border-gray-800 w-full max-w-[95%] border-r border-l mx-auto p-5">
        <Copyright size={20}/>
        <p>{new Date().getFullYear()} Muhammad.Uzair.Asif. All rights reserved.</p>
      </footer>
    </div>
  );
}
