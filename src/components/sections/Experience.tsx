"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Briefcase, GraduationCap, Smartphone, Layout } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const timelineData = [
  {
    year: "2023 - Present",
    title: "Full Stack Developer",
    company: "Freelance / Independent",
    description: "Building scalable web and mobile applications for various clients. Focusing on Next.js, React, and Flutter to deliver premium digital products.",
    icon: Briefcase,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary",
    hoverBorder: "hover:border-primary/50",
    shadow: "shadow-[0_0_20px_var(--color-primary)]"
  },
  {
    year: "2022 - 2023",
    title: "Mobile App Developer",
    company: "Tech Startup",
    description: "Developed and maintained cross-platform mobile applications using Flutter and Dart. Implemented complex UI animations and integrated REST APIs.",
    icon: Smartphone,
    color: "text-cyber-cyan",
    bgColor: "bg-cyber-cyan/10",
    borderColor: "border-cyber-cyan",
    hoverBorder: "hover:border-cyber-cyan/50",
    shadow: "shadow-[0_0_20px_var(--color-cyber-cyan)]"
  },
  {
    year: "2021 - 2022",
    title: "Frontend Web Developer",
    company: "Digital Agency",
    description: "Created responsive and interactive user interfaces using React and Tailwind CSS. Collaborated closely with UI/UX designers to bring mockups to life.",
    icon: Layout,
    color: "text-neon-purple",
    bgColor: "bg-neon-purple/10",
    borderColor: "border-neon-purple",
    hoverBorder: "hover:border-neon-purple/50",
    shadow: "shadow-[0_0_20px_var(--color-neon-purple)]"
  },
  {
    year: "2020 - 2021",
    title: "Computer Science Foundation",
    company: "Self-Taught / University",
    description: "Studied foundational computer science concepts, data structures, algorithms, and software engineering principles. Built numerous portfolio projects.",
    icon: GraduationCap,
    color: "text-emerald-green",
    bgColor: "bg-emerald-green/10",
    borderColor: "border-emerald-green",
    hoverBorder: "hover:border-emerald-green/50",
    shadow: "shadow-[0_0_20px_var(--color-emerald-green)]"
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current || !lineRef.current) return;

    // Line Animation
    gsap.fromTo(
      lineRef.current,
      { height: 0 },
      {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      }
    );

    // Items Animation
    itemsRef.current.forEach((item, index) => {
      if (!item) return;
      
      const direction = index % 2 === 0 ? -50 : 50;
      
      gsap.fromTo(
        item,
        { opacity: 0, x: direction, y: 50 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-mono font-bold tracking-[2px] uppercase text-white mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            EXPERIENCE
          </h2>
        </div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 overflow-hidden">
            <div ref={lineRef} className="w-full bg-gradient-to-b from-primary via-neon-purple to-cyber-cyan shadow-[0_0_10px_var(--color-primary)]" />
          </div>

          <div className="space-y-12 md:space-y-24">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              const Icon = item.icon;

              return (
                <div 
                  key={index} 
                  ref={el => { itemsRef.current[index] = el; }}
                  className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-6 md:mt-0 md:top-1/2 md:-translate-y-1/2 z-10 flex items-center justify-center">
                    <div className={`w-10 h-10 rounded-none bg-[#050505] border border-current shadow-[inset_0_0_10px_currentColor] flex items-center justify-center ${item.color}`}>
                      <Icon className={`w-5 h-5`} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className={`p-6 rounded-none bg-[#050505] border border-white/5 transition-all duration-500 relative group hover:border-current hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] ${item.color}`}>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 font-hud uppercase tracking-widest">{item.title}</h3>
                      <h4 className={`text-sm md:text-base font-mono mb-4`}>{item.company}</h4>
                      <p className="text-muted-foreground leading-relaxed font-jetbrains text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
