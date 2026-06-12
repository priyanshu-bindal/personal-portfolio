"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface MotionProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, className, ...props }: MotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ScrollReveal({ children, delay = 0, className, ...props }: MotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, delay = 0, className, ...props }: MotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FloatingIcon({ children, delay = 0, className, yOffset = 20, rotateOffset = 10, duration = 5, reverse = false }: MotionProps & { yOffset?: number, rotateOffset?: number, duration?: number, reverse?: boolean }) {
  return (
    <motion.div
      animate={{ 
        y: [0, reverse ? yOffset : -yOffset, 0], 
        rotate: [0, reverse ? -rotateOffset : rotateOffset, 0] 
      }}
      transition={{ repeat: Infinity, duration, ease: "easeInOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
