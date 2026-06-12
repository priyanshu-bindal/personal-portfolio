import { Terminal } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white p-4 font-jetbrains">
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-20 h-20 flex items-center justify-center">
          <div className="absolute inset-0 border-2 border-transparent border-t-primary border-r-primary rounded-full animate-spin" />
          <div className="absolute inset-2 border-2 border-transparent border-b-neon-purple border-l-neon-purple rounded-full animate-[spin_2s_linear_reverse_infinite]" />
          <Terminal className="w-6 h-6 text-primary animate-pulse" />
        </div>
        
        <div className="space-y-2 text-center">
          <h2 className="text-xl font-hud font-bold text-primary tracking-[0.2em] animate-pulse">
            INITIALIZING
          </h2>
          <div className="flex gap-1 justify-center">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
