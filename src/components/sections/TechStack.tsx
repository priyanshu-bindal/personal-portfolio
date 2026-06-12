"use client";

import { motion } from "framer-motion";

import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiGreensock,
  SiNodedotjs, SiExpress, SiGraphql, SiMongodb, SiPostgresql, SiFirebase,
  SiSupabase, SiFlutter, SiDart, SiDocker, SiFigma
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const technologies = [
  { name: "React", icon: SiReact, color: "group-hover:text-[#61DAFB]", glow: "hover:shadow-[0_0_20px_#61DAFB]" },
  { name: "Next.js", icon: SiNextdotjs, color: "group-hover:text-white", glow: "hover:shadow-[0_0_20px_#ffffff]" },
  { name: "TypeScript", icon: SiTypescript, color: "group-hover:text-[#3178C6]", glow: "hover:shadow-[0_0_20px_#3178C6]" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "group-hover:text-[#06B6D4]", glow: "hover:shadow-[0_0_20px_#06B6D4]" },
  { name: "Framer Motion", icon: SiFramer, color: "group-hover:text-[#0055FF]", glow: "hover:shadow-[0_0_20px_#0055FF]" },
  { name: "GSAP", icon: SiGreensock, color: "group-hover:text-[#88CE02]", glow: "hover:shadow-[0_0_20px_#88CE02]" },
  { name: "Node.js", icon: SiNodedotjs, color: "group-hover:text-[#339933]", glow: "hover:shadow-[0_0_20px_#339933]" },
  { name: "Express", icon: SiExpress, color: "group-hover:text-white", glow: "hover:shadow-[0_0_20px_#ffffff]" },
  { name: "GraphQL", icon: SiGraphql, color: "group-hover:text-[#E10098]", glow: "hover:shadow-[0_0_20px_#E10098]" },
  { name: "MongoDB", icon: SiMongodb, color: "group-hover:text-[#47A248]", glow: "hover:shadow-[0_0_20px_#47A248]" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "group-hover:text-[#4169E1]", glow: "hover:shadow-[0_0_20px_#4169E1]" },
  { name: "Firebase", icon: SiFirebase, color: "group-hover:text-[#FFCA28]", glow: "hover:shadow-[0_0_20px_#FFCA28]" },
  { name: "Supabase", icon: SiSupabase, color: "group-hover:text-[#3ECF8E]", glow: "hover:shadow-[0_0_20px_#3ECF8E]" },
  { name: "Flutter", icon: SiFlutter, color: "group-hover:text-[#02569B]", glow: "hover:shadow-[0_0_20px_#02569B]" },
  { name: "Dart", icon: SiDart, color: "group-hover:text-[#0175C2]", glow: "hover:shadow-[0_0_20px_#0175C2]" },
  { name: "Docker", icon: SiDocker, color: "group-hover:text-[#2496ED]", glow: "hover:shadow-[0_0_20px_#2496ED]" },
  { name: "AWS", icon: FaAws, color: "group-hover:text-[#FF9900]", glow: "hover:shadow-[0_0_20px_#FF9900]" },
  { name: "Figma", icon: SiFigma, color: "group-hover:text-[#F24E1E]", glow: "hover:shadow-[0_0_20px_#F24E1E]" }
];

// Double the array for seamless marquee
const marqueeItems = [...technologies, ...technologies];

export default function TechStack() {
  return (
    <section className="py-20 bg-background overflow-hidden border-y border-white/5 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-sm font-bold tracking-widest text-muted-foreground uppercase relative inline-block">
          <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary animate-pulse" />
          Powering My Applications
          <span className="absolute -right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-neon-purple animate-pulse" />
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden py-8">
        {/* Gradient Fades for Marquee Edges */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div 
          className="flex whitespace-nowrap items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        >
          {marqueeItems.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div 
                key={index}
                className={`mx-4 md:mx-6 px-8 py-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-white/5 text-foreground/80 transition-all duration-300 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.5)] ${tech.glow} hover:-translate-y-2 flex items-center justify-center min-w-[160px] group gap-3`}
              >
                <Icon className={`w-6 h-6 transition-colors duration-300 ${tech.color}`} />
                <span className={`font-bold tracking-wide relative transition-colors duration-300 ${tech.color}`}>
                  {tech.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300" />
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Reverse Marquee */}
      <div className="relative flex overflow-x-hidden py-8 mt-2">
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div 
          className="flex whitespace-nowrap items-center w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 45 }}
        >
          {[...marqueeItems].reverse().map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div 
                key={index}
                className={`mx-4 md:mx-6 px-8 py-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-white/5 text-foreground/80 transition-all duration-300 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.5)] ${tech.glow} hover:-translate-y-2 flex items-center justify-center min-w-[160px] group gap-3`}
              >
                <Icon className={`w-6 h-6 transition-colors duration-300 ${tech.color}`} />
                <span className={`font-bold tracking-wide relative transition-colors duration-300 ${tech.color}`}>
                  {tech.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300" />
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
