import { User, Layers, Smartphone, Target } from "lucide-react";
import { ScrollReveal } from "@/components/ui/MotionWrappers";

export default function About() {
  const cards = [
    { title: "WHO AM I?", value: "Full Stack Developer", color: "border-[#00F5FF]", text: "text-[#00F5FF]" },
    { title: "CURRENT STACK", value: "React, Next, Flutter", color: "border-[#39FF14]", text: "text-[#39FF14]" },
    { title: "BUILDING", value: "Web & Mobile Apps", color: "border-[#FF007F]", text: "text-[#FF007F]" },
    { title: "GOAL", value: "Software Engineer", color: "border-[#FFFF00]", text: "text-[#FFFF00]" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-mono font-bold tracking-[2px] uppercase text-white mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            ABOUT
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-16">
          {/* Journey Text */}
          <ScrollReveal delay={0.2} className="space-y-6 text-lg text-white/90 font-jetbrains leading-relaxed tracking-wide">
            <p>
              I'm Priyanshu Bindal, a Full Stack and Mobile Developer passionate about building scalable web applications and cross-platform mobile experiences. I enjoy transforming ideas into performant, user-focused digital products using modern technologies.
            </p>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <h3 className="text-xl font-bold text-primary font-hud uppercase tracking-[2px] mb-6 drop-shadow-[0_0_8px_rgba(0,245,255,0.4)]">
                Specialization
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3 p-6 rounded-md bg-[#050505] border border-white/5 hover:border-primary/30 transition-colors relative group">
                  <div className="flex items-center gap-3 text-white">
                    <span className="text-xl">⚡</span>
                    <h4 className="font-bold font-mono tracking-wider text-sm">FRONTEND</h4>
                    <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 shadow-[0_0_8px_var(--color-primary)] transition-all duration-300" />
                  </div>
                  <p className="text-sm font-jetbrains text-muted-foreground">React • Next.js • TypeScript</p>
                </div>
                
                <div className="space-y-3 p-6 rounded-md bg-[#050505] border border-white/5 hover:border-cyber-cyan/30 transition-colors relative group">
                  <div className="flex items-center gap-3 text-white">
                    <span className="text-xl">📱</span>
                    <h4 className="font-bold font-mono tracking-wider text-sm">MOBILE</h4>
                  </div>
                  <p className="text-sm font-jetbrains text-muted-foreground">Flutter • Dart</p>
                </div>
                
                <div className="space-y-3 p-6 rounded-md bg-[#050505] border border-white/5 hover:border-neon-purple/30 transition-colors relative group">
                  <div className="flex items-center gap-3 text-white">
                    <span className="text-xl">🗄</span>
                    <h4 className="font-bold font-mono tracking-wider text-sm">BACKEND</h4>
                  </div>
                  <p className="text-sm font-jetbrains text-muted-foreground">Node.js • Express</p>
                </div>
                
                <div className="space-y-3 p-6 rounded-md bg-[#050505] border border-white/5 hover:border-emerald-green/30 transition-colors relative group">
                  <div className="flex items-center gap-3 text-white">
                    <span className="text-xl">☁</span>
                    <h4 className="font-bold font-mono tracking-wider text-sm">DATABASE</h4>
                  </div>
                  <p className="text-sm font-jetbrains text-muted-foreground">Firebase • Supabase • MongoDB</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Premium Glass Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => {
              return (
                <ScrollReveal
                  key={index}
                  delay={0.3 + index * 0.1}
                  className={`p-6 rounded-none bg-[#050505] border ${card.color} transition-all duration-300 group hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:-translate-y-1 flex flex-col justify-center gap-2`}
                >
                  <h4 className="text-sm font-mono text-muted-foreground tracking-widest">{card.title}</h4>
                  <p className={`text-xl font-bold font-mono ${card.text}`}>{card.value}</p>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
