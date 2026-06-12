"use client";

import { motion } from "framer-motion";

interface SkillProgressProps {
  level: number;
  delay?: number;
}

export function SkillProgress({ level, delay = 0 }: SkillProgressProps) {
  return (
    <div className="h-[2px] w-full bg-white/5 overflow-visible relative">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
        className="absolute top-0 left-0 h-full bg-current shadow-[0_0_10px_currentColor]"
      />
      {/* Glowing head */}
      <motion.div
        initial={{ left: 0, opacity: 0 }}
        whileInView={{ left: `${level}%`, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_currentColor]"
      />
    </div>
  );
}
