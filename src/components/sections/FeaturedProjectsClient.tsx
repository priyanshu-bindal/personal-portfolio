"use client";

import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function FeaturedProjectsClient({ repos }: { repos: any[] }) {
  const cardColors = [
    {
      border: "hover:border-[#00F5FF]",
      text: "group-hover:text-[#00F5FF]",
      shadow: "hover:shadow-[0_0_30px_rgba(0,245,255,0.15)]",
      btn: "bg-[#00F5FF]/10 border-[#00F5FF]/50 text-[#00F5FF] hover:bg-[#00F5FF] hover:text-black shadow-[inset_0_0_10px_rgba(0,245,255,0.2)]",
      image: "/images/cyber_project_bg.png"
    },
    {
      border: "hover:border-[#A855F7]",
      text: "group-hover:text-[#A855F7]",
      shadow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
      btn: "bg-[#A855F7]/10 border-[#A855F7]/50 text-[#A855F7] hover:bg-[#A855F7] hover:text-black shadow-[inset_0_0_10px_rgba(168,85,247,0.2)]",
      image: "/images/cyber_bg_purple.png"
    },
    {
      border: "hover:border-[#39FF14]",
      text: "group-hover:text-[#39FF14]",
      shadow: "hover:shadow-[0_0_30px_rgba(57,255,20,0.15)]",
      btn: "bg-[#39FF14]/10 border-[#39FF14]/50 text-[#39FF14] hover:bg-[#39FF14] hover:text-black shadow-[inset_0_0_10px_rgba(57,255,20,0.2)]",
      image: "/images/cyber_bg_green.png"
    },
    {
      border: "hover:border-[#FF007F]",
      text: "group-hover:text-[#FF007F]",
      shadow: "hover:shadow-[0_0_30px_rgba(255,0,127,0.15)]",
      btn: "bg-[#FF007F]/10 border-[#FF007F]/50 text-[#FF007F] hover:bg-[#FF007F] hover:text-black shadow-[inset_0_0_10px_rgba(255,0,127,0.2)]",
      image: "/images/cyber_bg_pink.png"
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-background border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.03)_0%,transparent_100%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-mono font-bold tracking-[2px] uppercase text-[#FF007F] mb-4 drop-shadow-[0_0_15px_rgba(255,0,127,0.8)]">
              LATEST PROJECTS
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/projects" 
              className="group flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              View All Projects
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, index) => {
            const color = cardColors[index % cardColors.length];
            return (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group relative rounded-none bg-[#050505] border border-white/10 transition-all duration-500 overflow-hidden flex flex-col ${color.border} ${color.shadow}`}
            >
              {/* Project "Screenshot" Background */}
              <div className="relative w-full h-40 bg-black border-b border-white/10 overflow-hidden">
                <Image 
                  src={color.image} 
                  alt={repo.name} 
                  fill
                  priority={index < 2}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-80" />
              </div>
              
              <div className="p-5 flex flex-col flex-grow relative z-10">
                <h3 className={`text-xl md:text-2xl font-hud font-bold tracking-widest uppercase mb-2 text-foreground transition-colors ${color.text}`}>
                  {repo.name}
                </h3>
                
                <p className="text-muted-foreground font-jetbrains text-sm mb-6 line-clamp-2">
                  {repo.description || "No description provided for this repository."}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {repo.language && (
                    <span className="px-3 py-1 text-xs font-mono border border-white/10 text-white/70 bg-white/5">
                      {repo.language}
                    </span>
                  )}
                  <span className="px-3 py-1 text-xs font-mono border border-white/10 text-white/70 bg-white/5">
                    GitHub Repo
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 mt-auto">
                  {repo.homepage && repo.homepage !== "#" && (
                    <Link 
                      href={repo.homepage} 
                      target="_blank" 
                      className={`flex-1 text-center py-2.5 px-4 font-hud text-sm uppercase tracking-wider transition-all ${color.btn}`}
                    >
                      Live Demo
                    </Link>
                  )}
                  {repo.html_url && repo.html_url !== "#" && (
                    <Link 
                      href={repo.html_url} 
                      target="_blank" 
                      className="flex-1 text-center py-2.5 px-4 bg-white/5 border border-white/20 text-foreground hover:bg-white/10 font-hud text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                    >
                      <FaGithub className="w-4 h-4" /> GitHub
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
