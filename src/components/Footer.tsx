"use client";

import Link from "next/link";
import { ArrowUp, Mail, Code2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group inline-flex" aria-label="Home">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="relative w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center group-hover:border-primary transition-all duration-300 shadow-[0_0_15px_rgba(0,245,255,0.2)] group-hover:shadow-[0_0_30px_rgba(0,245,255,0.6)] bg-[#050505]"
              >
                {/* Animated pulsing ring */}
                <div className="absolute inset-0 rounded-full border border-primary animate-ping opacity-20 group-hover:opacity-50 transition-opacity" />
                
                <Code2 className="w-5 h-5 text-primary group-hover:text-white transition-colors relative z-10" />
              </motion.div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Building modern web experiences, scalable applications, and beautiful mobile products with a futuristic approach.
            </p>
            <div className="flex gap-4">
              <Link href="https://github.com/priyanshu-bindal" target="_blank" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-foreground hover:text-primary hover:border-primary hover:shadow-[0_0_10px_var(--color-primary)] transition-all duration-300" aria-label="GitHub Profile">
                <FaGithub className="w-5 h-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/priyanshu-bindal-4b720332a/" target="_blank" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-foreground hover:text-primary hover:border-primary hover:shadow-[0_0_10px_var(--color-primary)] transition-all duration-300" aria-label="LinkedIn Profile">
                <FaLinkedin className="w-5 h-5" />
              </Link>
              <Link href="mailto:mr99soul@gmail.com" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-foreground hover:text-primary hover:border-primary hover:shadow-[0_0_10px_var(--color-primary)] transition-all duration-300" aria-label="Send Email">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-hud font-bold tracking-widest text-lg mb-6 text-foreground uppercase">Quick Links</h3>
            <ul className="space-y-4">
              {['About', 'Skills', 'Projects', 'Experience'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="group flex items-center text-muted-foreground hover:text-primary transition-colors font-jetbrains text-sm">
                    <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary mr-2">{">"}</span>
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-hud font-bold tracking-widest text-lg mb-6 text-foreground uppercase">Services</h3>
            <ul className="space-y-4">
              {['Full Stack Web Dev', 'Mobile App Dev', 'UI/UX Design', 'API Architecture'].map((item) => (
                <li key={item} className="flex items-center text-muted-foreground font-jetbrains text-sm group cursor-default">
                  <div className="w-1 h-1 rounded-full bg-primary/30 mr-3 group-hover:bg-primary transition-colors duration-300 group-hover:shadow-[0_0_8px_var(--color-primary)]" />
                  <span className="group-hover:text-foreground transition-colors duration-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Priyanshu Bindal. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
            aria-label="Scroll to top"
          >
            Back to Top 
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ArrowUp className="w-4 h-4 group-hover:text-primary" />
            </motion.div>
          </button>
        </div>
      </div>
    </footer>
  );
}
