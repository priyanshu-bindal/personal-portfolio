"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, GitFork, ExternalLink, FolderGit2, Search, Filter } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsClient({ initialRepos }: { initialRepos: any[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

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

  // Extract unique languages
  const languages = useMemo(() => {
    const langs = new Set<string>();
    initialRepos.forEach(repo => {
      if (repo.language) langs.add(repo.language);
    });
    return Array.from(langs).sort();
  }, [initialRepos]);

  const filteredRepos = useMemo(() => {
    return initialRepos.filter(repo => {
      const matchesSearch = repo.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesLanguage = selectedLanguage ? repo.language === selectedLanguage : true;
      return matchesSearch && matchesLanguage;
    });
  }, [initialRepos, searchQuery, selectedLanguage]);

  return (
    <main className="flex-grow pt-32 pb-24 relative bg-background min-h-screen">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-mono tracking-tight uppercase">
            <span className="text-foreground">PROJECT </span>
            <span className="text-primary">ARCHIVE</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A complete list of my public repositories, side projects, and open-source contributions.
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 mb-12"
        >
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search projects by name or description..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-card border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 custom-scrollbar hide-scrollbar-on-mobile">
            <button
              onClick={() => setSelectedLanguage(null)}
              className={`px-4 py-3 rounded-xl border whitespace-nowrap transition-all ${
                selectedLanguage === null 
                  ? "bg-primary text-primary-foreground border-primary font-medium shadow-[0_0_15px_var(--color-primary)]" 
                  : "bg-card border-white/10 text-foreground/80 hover:border-primary/50"
              }`}
            >
              All Projects
            </button>
            {languages.map(lang => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`px-4 py-3 rounded-xl border whitespace-nowrap transition-all ${
                  selectedLanguage === lang 
                    ? "bg-primary text-primary-foreground border-primary font-medium shadow-[0_0_15px_var(--color-primary)]" 
                    : "bg-card border-white/10 text-foreground/80 hover:border-primary/50"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredRepos.map((repo, index) => {
              const color = cardColors[index % cardColors.length];
              return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={repo.id}
                className={`group relative rounded-none bg-[#050505] border border-white/10 transition-all duration-500 overflow-hidden flex flex-col h-full ${color.border} ${color.shadow}`}
              >
                {/* Project "Screenshot" Background */}
                <div className="relative w-full h-40 bg-black border-b border-white/10 overflow-hidden shrink-0">
                  <Image 
                    src={color.image} 
                    alt={repo.name} 
                    fill
                    priority={index < 3}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-80" />
                </div>
                
                <div className="p-5 flex flex-col flex-grow relative z-10">
                  <h3 className={`text-xl md:text-2xl font-hud font-bold tracking-widest uppercase mb-2 text-foreground transition-colors line-clamp-1 ${color.text}`}>
                    {repo.name}
                  </h3>
                  
                  <p className="text-muted-foreground font-jetbrains text-sm mb-6 flex-grow line-clamp-3">
                    {repo.description || "No description available."}
                  </p>

                  {/* Topics / Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {repo.language && (
                      <span className="px-3 py-1 text-xs font-mono border border-white/10 text-white/70 bg-white/5">
                        {repo.language}
                      </span>
                    )}
                    {repo.topics && repo.topics.slice(0, 2).map((topic: string) => (
                      <span key={topic} className="px-3 py-1 text-xs font-mono border border-white/10 text-white/70 bg-white/5">
                        {topic}
                      </span>
                    ))}
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
            )})}
          </AnimatePresence>
        </motion.div>
        
        {filteredRepos.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <FolderGit2 className="w-16 h-16 mx-auto text-muted-foreground mb-4 opacity-50" />
            <h3 className="text-xl font-bold text-foreground mb-2">No projects found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters.</p>
          </motion.div>
        )}
      </div>
    </main>
  );
}
