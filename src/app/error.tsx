"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { Terminal } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white p-4 font-jetbrains">
      <div className="max-w-md w-full p-8 border border-red-500/30 bg-red-500/5 rounded-xl text-center space-y-6 shadow-[0_0_30px_rgba(239,68,68,0.1)]">
        <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto border border-red-500/50">
          <Terminal className="w-8 h-8 text-red-500" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-hud font-bold text-red-500 tracking-wider">SYSTEM FAILURE</h2>
          <p className="text-muted-foreground text-sm">
            A critical exception occurred while rendering this module.
          </p>
        </div>
        
        <div className="flex flex-col gap-3 pt-4">
          <button
            onClick={() => reset()}
            className="w-full py-3 bg-red-500/10 hover:bg-red-500/20 border border-red-500/50 text-red-500 rounded-md font-mono tracking-widest transition-colors"
          >
            REBOOT_SYSTEM
          </button>
          <Link
            href="/"
            className="w-full py-3 bg-transparent hover:bg-white/5 border border-white/10 text-white/70 hover:text-white rounded-md font-mono tracking-widest transition-colors"
          >
            RETURN_HOME
          </Link>
        </div>
      </div>
    </div>
  );
}
