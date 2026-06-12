import { Terminal, Code2, Smartphone, Database } from "lucide-react";
import Link from "next/link";
import { FadeIn, FloatingIcon, ScaleIn } from "@/components/ui/MotionWrappers";
import { Typewriter } from "@/components/ui/Typewriter";

const typingText = "Building modern web experiences, scalable applications, and beautiful mobile products.";

export default function Hero() {

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center pt-16 md:pt-20 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="absolute top-1/3 -left-64 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-neon-purple/20 rounded-full blur-[128px] pointer-events-none" />

      {/* Floating Icons */}
      <FloatingIcon 
        className="absolute top-[12%] right-[8%] md:right-auto md:top-1/4 md:left-1/4 flex items-center justify-center w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-card border border-white/10 shadow-[0_0_15px_var(--color-primary)] opacity-40 md:opacity-50"
      >
        <Terminal className="w-5 h-5 md:w-8 md:h-8 text-primary" />
      </FloatingIcon>
      <FloatingIcon 
        delay={1}
        duration={6}
        reverse={true}
        className="absolute bottom-[22%] left-[8%] md:left-auto md:bottom-1/3 md:right-1/4 flex items-center justify-center w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-card border border-white/10 shadow-[0_0_15px_var(--color-neon-purple)] opacity-40 md:opacity-50"
      >
        <Code2 className="w-5 h-5 md:w-8 md:h-8 text-neon-purple" />
      </FloatingIcon>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col gap-5 md:gap-6">
            <FadeIn className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-primary/60 bg-primary/10 text-primary w-fit text-sm font-mono tracking-wide font-medium shadow-[0_0_10px_rgba(0,245,255,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new projects
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-7xl tracking-tight leading-[1.1] md:leading-tight">
                <span className="font-hud font-bold">HI, I'M</span> <br />
                <span className="font-bricolage font-[800] text-transparent bg-clip-text bg-gradient-to-r from-[#00F5FF] via-[#38BDF8] to-[#6366F1] drop-shadow-[0_0_5px_rgba(0,245,255,0.3)]">
                  Priyanshu Bindal
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-hud font-semibold text-[#E2E8F0]">
                Full Stack Engineer & App Developer
              </h2>
            </FadeIn>

            <Typewriter 
              text={typingText} 
              delay={0.3} 
              className="min-h-[6rem] md:min-h-[4rem] text-base md:text-xl text-muted-foreground max-w-lg font-jetbrains flex items-start" 
            />

            <FadeIn 
              delay={0.8}
              className="flex flex-col sm:flex-row gap-4 mt-2 w-full"
            >
              <Link 
                href="#projects" 
                className="group relative w-full sm:w-auto px-8 py-3.5 font-mono font-bold text-primary uppercase tracking-widest flex items-center justify-center overflow-visible"
              >
                <div className="absolute top-0 right-0 w-[90%] h-[70%] border-t border-r border-primary rounded-tr-md transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:shadow-[4px_-4px_15px_rgba(0,245,255,0.2)]" />
                <div className="absolute bottom-0 left-0 w-[90%] h-[70%] border-b border-l border-primary rounded-bl-md transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:shadow-[-4px_4px_15px_rgba(0,245,255,0.2)]" />
                <span className="relative z-10 drop-shadow-[0_0_8px_rgba(0,245,255,0.5)]">VIEW PROJECTS</span>
              </Link>
              <Link 
                href="#contact"
                className="group relative w-full sm:w-auto px-8 py-3.5 font-mono text-muted-foreground hover:text-foreground tracking-widest flex items-center justify-center transition-colors border border-white/20 hover:border-white/40 rounded-sm"
              >
                <span className="relative z-10">Contact Me</span>
              </Link>
            </FadeIn>
          </div>

          {/* Image / 3D Element Placeholder */}
          <ScaleIn className="relative mt-12 lg:mt-0 lg:h-[600px] flex items-center justify-center">
            {/* Holographic Container */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full border border-primary/30 flex items-center justify-center bg-card shadow-[inset_0_0_50px_var(--color-primary)]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-neon-purple/20 animate-[spin_4s_linear_infinite] mix-blend-screen" />
              <div className="absolute w-[110%] h-[110%] rounded-full border border-dashed border-cyber-cyan/30 animate-[spin_10s_linear_reverse_infinite]" />
              
              {/* Profile Image Placeholder */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary bg-background flex items-center justify-center group z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/20 z-10" />
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.1)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none z-20" />
              </div>

              {/* Orbiting Elements */}
              <div className="absolute w-full h-full animate-[spin_8s_linear_infinite]">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-card border border-primary flex items-center justify-center shadow-[0_0_10px_var(--color-primary)]">
                  <Smartphone className="w-4 h-4 text-primary animate-[spin_8s_linear_reverse_infinite]" />
                </div>
              </div>
              <div className="absolute w-full h-full animate-[spin_12s_linear_reverse_infinite]">
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-card border border-neon-purple flex items-center justify-center shadow-[0_0_10px_var(--color-neon-purple)]">
                  <Database className="w-4 h-4 text-neon-purple animate-[spin_12s_linear_infinite]" />
                </div>
              </div>
            </div>
          </ScaleIn>

        </div>
      </div>
    </section>
  );
}
