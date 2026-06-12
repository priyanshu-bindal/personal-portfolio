"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import { sendEmailAction } from "@/app/actions/sendEmail";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create FormData object to pass to Server Action
    const formData = new FormData();
    formData.append("name", formState.name);
    formData.append("email", formState.email);
    formData.append("subject", formState.subject);
    formData.append("message", formState.message);

    // Call the server action
    const result = await sendEmailAction(formData);
    
    setIsSubmitting(false);

    if (result.error) {
      alert("Transmission failed: " + result.error);
      return;
    }

    setIsSuccess(true);
    
    setTimeout(() => {
      setIsSuccess(false);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      {/* Background Ornaments */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-hot-pink/5 rounded-full blur-[150px] pointer-events-none translate-y-1/2 translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-mono font-bold tracking-[2px] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#00F5FF] to-[#D8B4FE] mb-4 pb-2">
            INITIATE <br className="md:hidden" />CONTACT
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              <Link href="mailto:mr99soul@gmail.com" className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-white/5 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-mono mb-1">Email</p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors">mr99soul@gmail.com</p>
                </div>
              </Link>
              
              <Link href="https://www.linkedin.com/in/priyanshu-bindal-4b720332a/" target="_blank" className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-white/5 hover:border-neon-purple/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-neon-purple/10 flex items-center justify-center text-neon-purple group-hover:scale-110 transition-transform">
                  <FaLinkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="text-foreground font-medium group-hover:text-neon-purple transition-colors">Let's connect</p>
                </div>
              </Link>

              <Link href="https://github.com/priyanshu-bindal" target="_blank" className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-white/5 hover:border-cyber-cyan/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-cyber-cyan/10 flex items-center justify-center text-cyber-cyan group-hover:scale-110 transition-transform">
                  <FaGithub className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <p className="text-foreground font-medium group-hover:text-cyber-cyan transition-colors">Check my code</p>
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 relative"
          >
            {/* HUD Corner Accents */}
            <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-primary/50 pointer-events-none z-20" />
            <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-primary/50 pointer-events-none z-20" />
            <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-primary/50 pointer-events-none z-20" />
            <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-primary/50 pointer-events-none z-20" />
            
            <form onSubmit={handleSubmit} className="p-8 rounded-none bg-[#030303] border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden group/form hover:border-primary/20 transition-all duration-500 backdrop-blur-xl">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="text-xs font-hud tracking-[2px] uppercase text-primary/80 mb-2 block flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                    Target ID (Name)
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-none bg-white/[0.02] border-b-2 border-white/10 focus:bg-primary/[0.05] focus:border-primary focus:shadow-[0_4px_20px_rgba(0,240,255,0.15)] outline-none transition-all text-foreground font-jetbrains text-sm placeholder:text-white/20 [&:-webkit-autofill]:bg-transparent [&:-webkit-autofill]:[-webkit-box-shadow:0_0_0_100px_#030303_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:#fff]"
                    placeholder="Enter your name..."
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-hud tracking-[2px] uppercase text-primary/80 mb-2 block flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                    Comm Link (Email)
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-none bg-white/[0.02] border-b-2 border-white/10 focus:bg-primary/[0.05] focus:border-primary focus:shadow-[0_4px_20px_rgba(0,240,255,0.15)] outline-none transition-all text-foreground font-jetbrains text-sm placeholder:text-white/20 [&:-webkit-autofill]:bg-transparent [&:-webkit-autofill]:[-webkit-box-shadow:0_0_0_100px_#030303_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:#fff]"
                    placeholder="Enter your email..."
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="text-xs font-hud tracking-[2px] uppercase text-primary/80 mb-2 block flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  Subject Vector
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  required
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-none bg-white/[0.02] border-b-2 border-white/10 focus:bg-primary/[0.05] focus:border-primary focus:shadow-[0_4px_20px_rgba(0,240,255,0.15)] outline-none transition-all text-foreground font-jetbrains text-sm placeholder:text-white/20 [&:-webkit-autofill]:bg-transparent [&:-webkit-autofill]:[-webkit-box-shadow:0_0_0_100px_#030303_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:#fff]"
                  placeholder="What is this regarding?"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="text-xs font-hud tracking-[2px] uppercase text-primary/80 mb-2 block flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  Data Payload (Message)
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-none bg-white/[0.02] border border-white/10 focus:bg-primary/[0.05] focus:border-primary focus:shadow-[0_0_20px_rgba(0,240,255,0.15)] outline-none transition-all text-foreground resize-none custom-scrollbar font-jetbrains text-sm placeholder:text-white/20"
                  placeholder="Transmit your message here..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || isSuccess}
                className={`w-full relative px-6 py-4 rounded-none border transition-all duration-500 font-hud tracking-widest uppercase group overflow-hidden ${
                  isSuccess 
                    ? "bg-[#39FF14]/10 border-[#39FF14] text-[#39FF14] shadow-[0_0_30px_rgba(57,255,20,0.3)]" 
                    : "bg-white/5 border-primary/50 text-primary hover:bg-primary/20 hover:border-primary hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] disabled:opacity-70 disabled:cursor-not-allowed"
                }`}
              >
                {/* HUD Button Corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-current" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-current" />

                {/* Submitting Progress Bar Fill */}
                {isSubmitting && (
                  <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute left-0 top-0 h-full bg-primary/20"
                  />
                )}
                
                {isSubmitting ? (
                  <span className="relative z-10 flex items-center justify-center gap-3 tracking-[4px]">
                    <span className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                    UPLOADING DATA...
                  </span>
                ) : isSuccess ? (
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="relative z-10 flex items-center justify-center gap-3 tracking-[4px]"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 10 }}
                    >
                      <CheckCircle className="w-6 h-6" />
                    </motion.div>
                    PAYLOAD SECURED
                  </motion.span>
                ) : (
                  <span className="relative z-10 flex items-center justify-center gap-2 group-hover:tracking-[4px] transition-all duration-300">
                    <span className="opacity-50 group-hover:opacity-100 transition-opacity">[</span>
                    INITIATE TRANSFER
                    <span className="opacity-50 group-hover:opacity-100 transition-opacity">]</span>
                    <Send className="w-4 h-4 ml-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </span>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
