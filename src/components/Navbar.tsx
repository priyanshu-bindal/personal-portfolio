"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useRef, MouseEvent } from "react";
import { Code2, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Contact", href: "/#contact" },
];

function MagneticLink({ children, href }: { children: React.ReactNode; href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: MouseEvent<HTMLAnchorElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative text-[13px] font-[600] text-foreground/70 hover:text-primary transition-colors px-4 py-2 font-hud uppercase tracking-[1px] group overflow-hidden rounded-sm"
    >
      <span className="text-primary/50 group-hover:text-primary transition-colors mr-1.5">[</span>
      <span className="relative z-10">{children}</span>
      <span className="text-primary/50 group-hover:text-primary transition-colors ml-1.5">]</span>

      {/* Cyberpunk HUD Hover Effects */}
      <div className="absolute inset-0 border border-transparent group-hover:border-primary/50 transition-colors duration-300 pointer-events-none" />
      
      {/* Scanline Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent -translate-y-full group-hover:animate-scan pointer-events-none" />
      
      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 shadow-[0_0_10px_var(--color-primary)] pointer-events-none" />
    </motion.a>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="font-bold text-2xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-[#00F5FF] via-[#3B82F6] to-[#A855F7]">
                &lt;PB /&gt;
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navLinks.map((link) => (
                <MagneticLink key={link.name} href={link.href}>
                  {link.name}
                </MagneticLink>
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <Link href="https://github.com/priyanshu-bindal" target="_blank" className="text-foreground/80 hover:text-primary transition-colors" aria-label="GitHub Profile">
              <FaGithub className="w-5 h-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/priyanshu-bindal-4b720332a/" target="_blank" className="text-foreground/80 hover:text-primary transition-colors" aria-label="LinkedIn Profile">
              <FaLinkedin className="w-5 h-5" />
            </Link>
            <Link href="#contact" className="px-5 py-2.5 rounded-md border border-primary/50 text-primary hover:bg-primary/10 hover:shadow-[0_0_15px_var(--color-primary)] transition-all duration-300 text-sm font-semibold uppercase tracking-wider relative overflow-hidden group">
              <span className="relative z-10">Hire Me</span>
              <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-lg border-b border-white/5 overflow-hidden"
        >
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-base font-[600] font-hud tracking-[1px] uppercase text-foreground/80 hover:text-primary border-b border-white/5 transition-colors group relative overflow-hidden"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-primary/50 group-hover:text-primary mr-2">[</span>
                <span className="relative z-10">{link.name}</span>
                <span className="text-primary/50 group-hover:text-primary ml-2">]</span>
                
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent -translate-y-full group-hover:animate-scan pointer-events-none" />
              </Link>
            ))}
            <div className="flex gap-4 pt-4 px-3">
              <Link href="https://github.com/priyanshu-bindal" target="_blank" className="text-foreground/80 hover:text-primary" aria-label="GitHub Profile">
                <FaGithub className="w-6 h-6" />
              </Link>
              <Link href="https://www.linkedin.com/in/priyanshu-bindal-4b720332a/" target="_blank" className="text-foreground/80 hover:text-primary" aria-label="LinkedIn Profile">
                <FaLinkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
