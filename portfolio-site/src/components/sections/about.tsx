"use client"

import React from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function About() {
  return (
    <section id="about" className="py-10 md:py-16 relative overflow-hidden">
      {/* Ultra-subtle background effect */}
      <div className="absolute inset-0 bg-gradient-animation opacity-4"></div>
      
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section label with minimal animation */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="mb-2 text-sm text-primary/60 font-medium uppercase tracking-wider"
          >
            About Me
          </motion.div>
          
          {/* Clean heading with gradient text */}
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="mb-10 text-4xl font-bold md:text-5xl text-balance"
          >
            Product Manager &{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Web3 Enthusiast
            </span>
          </motion.h2>
          
          {/* Simplified content with better spacing */}
          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed text-foreground/80"
            >
              I'm a <span className="text-foreground">Product Manager</span> with experience in both traditional tech 
              and Web3 projects. My passion lies in building products that solve real problems and creating 
              exceptional user experiences.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed text-foreground/80"
            >
              I specialize in taking ideas from concept to launch, with a focus on data-driven decision making 
              and agile methodologies. My experience spans from early-stage startups to established companies.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed text-foreground/80"
            >
              With experience at <span className="text-foreground">League Sports Co.</span> and leading Web3 projects like 
              <span className="text-foreground"> Bit Billionaire</span>, <span className="text-foreground">Zone</span>, 
              and <span className="text-foreground">Modera AI</span>, I bring a unique perspective to product development that 
              bridges traditional and cutting-edge technologies.
            </motion.p>
            
            {/* Ultra-minimal social links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-10 pt-6"
            >
              <Link
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:your.email@example.com"
                className="text-foreground/60 hover:text-foreground transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 