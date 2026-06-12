"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  text: string;
  delay?: number;
  className?: string;
  cursorClassName?: string;
}

export function Typewriter({ text, delay = 0, className, cursorClassName }: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setHasStarted(true);
    }, delay * 1000);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;
    
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [text, hasStarted]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      <span className="text-primary mr-2">{">"}</span>
      <p>
        {displayText}
        <span className={`inline-block w-2 h-5 bg-primary ml-1 ${isTyping ? 'animate-pulse' : 'hidden'} ${cursorClassName || ''}`}></span>
      </p>
    </motion.div>
  );
}
