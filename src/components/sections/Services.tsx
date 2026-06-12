"use client";

import { motion } from "framer-motion";
import { Monitor, Layers, Box } from "lucide-react";

const services = [
  {
    title: "3D WEB EXPERIENCES",
    description: "Immersive websites using WebGL and Three.js that captivate and engage users.",
    icon: Monitor,
    color: "text-[#00FFFF]",
    bgColor: "bg-[#00FFFF]/5",
    borderColor: "border-[#00FFFF]/20",
    hoverBorder: "hover:border-[#00FFFF]/80",
    shadow: "hover:shadow-[0_0_30px_#00FFFF]"
  },
  {
    title: "FULL STACK APPS",
    description: "Scalable, high-performance applications built with Next.js, Node.js, and modern databases.",
    icon: Layers,
    color: "text-[#FF007F]",
    bgColor: "bg-[#FF007F]/5",
    borderColor: "border-[#FF007F]/20",
    hoverBorder: "hover:border-[#FF007F]/80",
    shadow: "hover:shadow-[0_0_30px_#FF007F]"
  },
  {
    title: "CREATIVE UI/UX",
    description: "Interface design that balances aesthetic beauty with functional usability.",
    icon: Box,
    color: "text-[#FFFF00]",
    bgColor: "bg-[#FFFF00]/5",
    borderColor: "border-[#FFFF00]/20",
    hoverBorder: "hover:border-[#FFFF00]/80",
    shadow: "hover:shadow-[0_0_30px_#FFFF00]"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-card/50">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(176,38,255,0.05)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(0,240,255,0.05)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-mono font-bold tracking-[2px] uppercase text-[#C0FFFF] mb-4 drop-shadow-[0_0_10px_rgba(192,255,255,0.4)]">
            SERVICE PROTOCOLS
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`p-8 rounded-2xl bg-background border ${service.borderColor} ${service.hoverBorder} ${service.shadow} transition-all duration-300 group cursor-pointer relative overflow-hidden`}
              >
                {/* Background Glow */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${service.bgColor} rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500`} />
                
                <div className={`w-14 h-14 rounded-xl ${service.bgColor} border ${service.borderColor} flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${service.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 relative z-10 font-mono tracking-tight uppercase">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed relative z-10 text-sm font-mono">
                  {service.description}
                </p>
                
                {/* Animated Bottom Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-transparent via-current to-transparent opacity-50 group-hover:w-full transition-all duration-700" style={{ color: "var(--color-primary)" }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
