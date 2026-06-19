import { Server, Layout, Smartphone, Database, Wrench, Code } from "lucide-react";
import { ScrollReveal } from "@/components/ui/MotionWrappers";
import { SkillProgress } from "@/components/ui/SkillProgress";

const skillCategories = [
  {
    title: "Frontend",
    icon: Layout,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
    shadowColor: "hover:shadow-[0_0_20px_var(--color-primary)]",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 75 },
    ]
  },
  {
    title: "Backend",
    icon: Server,
    color: "text-neon-purple",
    bgColor: "bg-neon-purple/10",
    borderColor: "border-neon-purple/30",
    shadowColor: "hover:shadow-[0_0_20px_var(--color-neon-purple)]",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "Auth & Security", level: 75 },
    ]
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    color: "text-cyber-cyan",
    bgColor: "bg-cyber-cyan/10",
    borderColor: "border-cyber-cyan/30",
    shadowColor: "hover:shadow-[0_0_20px_var(--color-cyber-cyan)]",
    skills: [
      { name: "Flutter", level: 90 },
      { name: "Dart", level: 85 },
      { name: "Android", level: 70 },
      { name: "Mobile UI/UX", level: 80 },
    ]
  },
  {
    title: "Database & Cloud",
    icon: Database,
    color: "text-emerald-green",
    bgColor: "bg-emerald-green/10",
    borderColor: "border-emerald-green/30",
    shadowColor: "hover:shadow-[0_0_20px_var(--color-emerald-green)]",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 75 },
      { name: "Firebase", level: 90 },
      { name: "Supabase", level: 80 },
    ]
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    color: "text-hot-pink",
    bgColor: "bg-hot-pink/10",
    borderColor: "border-hot-pink/30",
    shadowColor: "hover:shadow-[0_0_20px_var(--color-hot-pink)]",
    skills: [
      { name: "Git & GitHub", level: 95 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 85 },
      { name: "Figma", level: 70 },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-card/30">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-mono font-bold tracking-[2px] uppercase text-[#C0FFFF] mb-4 drop-shadow-[0_0_10px_rgba(192,255,255,0.4)]">
            SKILLS
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            
            return (
              <ScrollReveal
                key={category.title}
                delay={index * 0.1}
                className={`p-6 rounded-none border border-white/5 bg-[#050505] transition-all duration-300 hover:border-current hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] group ${category.color}`}
              >
                <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-4">
                  <div className={`w-10 h-10 rounded-none flex items-center justify-center bg-transparent border border-current shadow-[inset_0_0_10px_currentColor]`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-hud font-bold tracking-widest uppercase">{category.title}</h3>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, idx) => (
                    <div key={skill.name} className="relative">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-jetbrains text-muted-foreground uppercase tracking-wider">{skill.name}</span>
                        <span className="text-xs font-mono text-current">{skill.level}%</span>
                      </div>
                      <SkillProgress level={skill.level} delay={0.2 + (idx * 0.1)} />
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            );
          })}

          {/* Interactive Orbit Centerpiece */}
          <ScrollReveal
            delay={0.4}
            className="md:col-span-2 lg:col-span-1 min-h-[300px] rounded-2xl border border-white/10 bg-background/30 flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.1)_0,transparent_70%)]" />
            
            {/* Core */}
            <div className="w-16 h-16 bg-primary/10 border border-primary flex items-center justify-center shadow-[inset_0_0_20px_var(--color-primary)] z-20">
              <Code className="w-8 h-8 text-primary" />
            </div>

            {/* Orbit 1 */}
            <div className="absolute w-40 h-40 rounded-full border border-dashed border-primary/30 animate-[spin_10s_linear_infinite]" />
            <div className="absolute w-40 h-40 animate-[spin_10s_linear_infinite]">
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyber-cyan border border-white/20 shadow-[0_0_15px_var(--color-cyber-cyan)]" />
            </div>

            {/* Orbit 2 */}
            <div className="absolute w-60 h-60 rounded-full border border-neon-purple/20 animate-[spin_15s_linear_reverse_infinite]" />
            <div className="absolute w-60 h-60 animate-[spin_15s_linear_reverse_infinite]">
              <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-neon-purple border border-white/20 shadow-[0_0_15px_var(--color-neon-purple)]" />
              <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 bg-emerald-green border border-white/20 shadow-[0_0_15px_var(--color-emerald-green)]" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
